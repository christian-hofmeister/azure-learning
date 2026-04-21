const fs = require("fs");
const path = require("path");

const docsDir = path.resolve(process.cwd(), "docs");
const tocFileName = "_toc.md";
const readmeSourceFileName = "README.md.src";
const readmeOutputFileName = "README.md";

function sortByName(entries) {
  return [...entries].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { numeric: true })
  );
}

function formatName(name) {
  return name
    .replace(/\.md$/i, "")
    .replace(/^README$/i, "")
    .replace(/^README\.src$/i, "")
    .replace(/^_toc$/i, "")
    .replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getRelativePath(fromDir, toPath) {
  return path.relative(fromDir, toPath).replace(/\\/g, "/");
}

function shouldIgnoreMarkdownFile(name) {
  const lower = name.toLowerCase();
  return (
    lower === tocFileName.toLowerCase() ||
    lower === readmeSourceFileName.toLowerCase()
  );
}

function getDirectoryEntries(dirPath) {
  return sortByName(fs.readdirSync(dirPath, { withFileTypes: true }));
}

function generateTocForDirectory(dirPath) {
  const entries = getDirectoryEntries(dirPath);

  const directories = entries.filter((entry) => entry.isDirectory());

  const markdownFiles = entries.filter(
    (entry) =>
      entry.isFile() &&
      entry.name.toLowerCase().endsWith(".md") &&
      !shouldIgnoreMarkdownFile(entry.name)
  );

  const lines = [];

  if (directories.length > 0) {
    lines.push("## Folders", "");

    for (const dir of directories) {
      const targetReadme = path.join(dirPath, dir.name, readmeOutputFileName);
      const relativeLink = getRelativePath(dirPath, targetReadme);
      lines.push(`- [${formatName(dir.name)}](${relativeLink})`);
    }

    lines.push("");
  }

  if (markdownFiles.length > 0) {
    lines.push("## Markdown Files", "");

    for (const file of markdownFiles) {
      lines.push(`- [${formatName(file.name)}](${file.name})`);
    }

    lines.push("");
  }

  if (lines.length === 0) {
    lines.push("_No content found._", "");
  }

  const tocPath = path.join(dirPath, tocFileName);
  fs.writeFileSync(tocPath, lines.join("\n"), "utf8");

  console.log(`Generated TOC: ${tocPath}`);
}

function resolveIncludes(content, currentDir, stack = []) {
  const includePattern = /<!--\s*include:(.*?)\s*-->/g;

  return content.replace(includePattern, (_, includeTargetRaw) => {
    const includeTarget = includeTargetRaw.trim();
    const includePath = path.resolve(currentDir, includeTarget);

    if (stack.includes(includePath)) {
      const chain = [...stack, includePath].map((p) => path.basename(p)).join(" -> ");
      return `> Include cycle detected: ${chain}`;
    }

    if (!fs.existsSync(includePath)) {
      return `> Include not found: ${includeTarget}`;
    }

    const includedContent = fs.readFileSync(includePath, "utf8");
    return resolveIncludes(includedContent, path.dirname(includePath), [...stack, includePath]);
  });
}

function buildReadmeForDirectory(dirPath) {
  const sourcePath = path.join(dirPath, readmeSourceFileName);
  const outputPath = path.join(dirPath, readmeOutputFileName);

  if (fs.existsSync(sourcePath)) {
    const sourceContent = fs.readFileSync(sourcePath, "utf8");
    const resolvedContent = resolveIncludes(sourceContent, dirPath);
    fs.writeFileSync(outputPath, resolvedContent, "utf8");
    console.log(`Generated README from source: ${outputPath}`);
    return;
  }

  const tocPath = path.join(dirPath, tocFileName);

  let fallbackLines = [`# ${formatName(path.basename(dirPath)) || "Docs"}`, ""];

  if (fs.existsSync(tocPath)) {
    const tocContent = fs.readFileSync(tocPath, "utf8");
    fallbackLines.push(tocContent.trim(), "");
  } else {
    fallbackLines.push("_No content found._", "");
  }

  fs.writeFileSync(outputPath, fallbackLines.join("\n"), "utf8");
  console.log(`Generated fallback README: ${outputPath}`);
}

function processDirectoryRecursively(dirPath) {
  const entries = getDirectoryEntries(dirPath);
  const directories = entries.filter((entry) => entry.isDirectory());

  for (const dir of directories) {
    processDirectoryRecursively(path.join(dirPath, dir.name));
  }

  generateTocForDirectory(dirPath);
  buildReadmeForDirectory(dirPath);
}

function main() {
  if (!fs.existsSync(docsDir)) {
    console.error(`Directory not found: ${docsDir}`);
    process.exit(1);
  }

  processDirectoryRecursively(docsDir);
  console.log("Done.");
}

main();