<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

## Markdown Files

- [Blob Storage Summary](10_blob-storage-summary.md)
- [Cheat Sheet](30_cheat-sheet.md)
- [Exam Traps](40_exam-traps.md)


---
# Explore Azure Blob Storage – Notes

## What is Blob Storage?

* Object storage for **massive unstructured data**
* Highly scalable and durable

---

## Resource Structure

```
Storage Account
 └── Container
      └── Blob
```

---

## Blob Types

### Block Blob

* Stores text and binary data
* Used for:

  * Images
  * Files
  * Documents

### Append Blob

* Optimized for append operations
* Used for:

  * Logging

### Page Blob

* Random read/write access
* Used for:

  * Virtual machine disks

---

## Storage Accounts

* Globally unique name
* Types:

  * Standard
  * Premium

---

## Security Features

### RBAC (Recommended)

* Azure AD-based access
* Fine-grained control

### SAS (Shared Access Signature)

* Time-limited access
* Permission-based

### Access Keys

* Full control
* Should be avoided in production

---

## Encryption

* Data encrypted at rest by default
* Supports:

  * Microsoft-managed keys
  * Customer-managed keys

---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

## Markdown Files

- [Blob Storage Summary](10_blob-storage-summary.md)
- [Cheat Sheet](30_cheat-sheet.md)
- [Exam Traps](40_exam-traps.md)


---