const fs = require("fs");
const path = require("path");

const docsDir = path.resolve(process.cwd(), "docs");
const outputFileName = "_toc.md";

function formatName(name) {
  return name
    .replace(/\.md$/i, "")
    .replace(/^README$/i, "")
    .replace(/^_toc$/i, "")
    .replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function sortEntries(entries) {
  return [...entries].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { numeric: true })
  );
}

function getFolderTitle(folderPath, rootPath) {
  const relativePath = path.relative(rootPath, folderPath);

  if (!relativePath) {
    return "Docs Navigation";
  }

  return `${formatName(path.basename(folderPath))} Navigation`;
}

function generateTocForDirectory(dirPath, rootPath) {
  const entries = sortEntries(
    fs
      .readdirSync(dirPath, { withFileTypes: true })
      .filter((entry) => entry.name.toLowerCase() !== outputFileName.toLowerCase())
  );

  const directories = entries.filter((entry) => entry.isDirectory());
  const markdownFiles = entries.filter(
    (entry) =>
      entry.isFile() &&
      entry.name.toLowerCase().endsWith(".md") &&
      entry.name.toLowerCase() !== outputFileName.toLowerCase()
  );

  const lines = [`# ${getFolderTitle(dirPath, rootPath)}`, ""];

  const relativeDirPath = path.relative(rootPath, dirPath).replace(/\\/g, "/");

  if (relativeDirPath) {
    const parentPath = path.relative(dirPath, path.dirname(dirPath)).replace(/\\/g, "/");
    lines.push("## Navigation", "");
    lines.push(`- [Up](${parentPath || "."}/${outputFileName})`);
    lines.push("");
  }

  if (directories.length > 0) {
    lines.push("## Folders", "");

    for (const dir of directories) {
      lines.push(`- [${formatName(dir.name)}](${dir.name}/${outputFileName})`);
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

  if (directories.length === 0 && markdownFiles.length === 0) {
    lines.push("_No content found._", "");
  }

  const outputPath = path.join(dirPath, outputFileName);
  fs.writeFileSync(outputPath, lines.join("\n"), "utf8");

  console.log(`Generated: ${path.relative(rootPath, outputPath)}`);

  for (const dir of directories) {
    generateTocForDirectory(path.join(dirPath, dir.name), rootPath);
  }
}

function main() {
  if (!fs.existsSync(docsDir)) {
    console.error(`Directory not found: ${docsDir}`);
    process.exit(1);
  }

  generateTocForDirectory(docsDir, docsDir);
}

main();