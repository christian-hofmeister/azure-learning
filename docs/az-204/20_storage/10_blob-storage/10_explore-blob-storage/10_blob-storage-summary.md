# Blob Storage – Summary (AZ-204)

## Core Concepts

* Blob storage is used for **unstructured data** (images, files, backups)
* Organized as:

  * Storage Account → Container → Blob

## Blob Types

* **Block Blob** → general purpose (most common)
* **Append Blob** → logging scenarios
* **Page Blob** → random read/write (VM disks)

## Access & Security

* **RBAC (Azure AD)** → recommended
* **SAS (Shared Access Signature)** → temporary access
* **Access Keys** → full access (avoid if possible)

## Storage Tiers

* **Hot** → frequent access
* **Cool** → infrequent access (cheaper storage, higher access cost)
* **Archive** → rarely accessed (cheapest, requires rehydration)

## Lifecycle Management

* Automate:

  * Move blobs between tiers
  * Delete old data

## Rehydration

* Required when accessing archive blobs
* Can take hours

## .NET SDK (Important!)

* `BlobServiceClient`
* `BlobContainerClient`
* `BlobClient`

## Metadata vs Properties

* **Metadata** → custom key-value pairs
* **Properties** → system-managed

## Exam Tips

* Prefer **RBAC over SAS over keys**
* Lifecycle policies = **cost optimization**
* Archive access is **not immediate**
