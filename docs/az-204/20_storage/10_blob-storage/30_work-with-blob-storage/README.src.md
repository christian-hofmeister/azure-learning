---

<!-- include:_toc.md -->

---

# Work with Azure Blob Storage – Notes

## .NET Client Library

Main classes:

* BlobServiceClient
* BlobContainerClient
* BlobClient

---

## Create Client

```csharp
var client = new BlobServiceClient(connectionString);
```

---

## Create Container

```csharp
var container = client.GetBlobContainerClient("my-container");
await container.CreateIfNotExistsAsync();
```

---

## Upload Blob

```csharp
var blob = container.GetBlobClient("file.txt");
await blob.UploadAsync(stream);
```

---

## Download Blob

```csharp
await blob.DownloadToAsync(stream);
```

---

## Metadata vs Properties

### Metadata

* Custom key-value pairs

```csharp
await blob.SetMetadataAsync(new Dictionary<string, string>
{
    { "author", "chris" }
});
```

### Properties

* System-defined (size, content type, etc.)

---

## REST API

* Alternative to SDK
* Uses HTTP methods:

  * PUT
  * GET
  * DELETE


---

<!-- include:_toc.md -->

---