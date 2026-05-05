---

<!-- include:_toc.md -->

---

# 📦 Implement Shared Access Signatures (SAS)

## 🧠 Overview

A **Shared Access Signature (SAS)** is a URI that grants **restricted, time-limited access** to Azure Storage resources without exposing account keys.

👉 You can delegate access to:
- Blob Storage
- File Storage
- Queue Storage
- Table Storage

---

## 🔑 What is a SAS?

A SAS consists of:
- Resource URI
- Query parameters (permissions, expiry, signature)

Example structure:

```text
https://<account>.blob.core.windows.net/<container>/<blob>?<SAS-token>
```

### SAS defines:
- ✅ **What** can be accessed (resource)
- ✅ **What operations** are allowed (read, write, delete, list)
- ✅ **How long** access is valid (expiry time)
- ✅ Optional: IP range, protocol (HTTPS only)

---

## 🧩 Types of SAS

### 1. User Delegation SAS (Recommended)
- Signed with **Azure AD credentials**
- Uses a **user delegation key**
- Most secure option

👉 Use when:
- You have Azure AD integration
- You want RBAC-based control

---

### 2. Service SAS
- Signed with **storage account key**
- Scoped to a **single service** (Blob, File, Queue, Table)

👉 Use when:
- Fine-grained access to specific resources is needed

---

### 3. Account SAS
- Signed with **storage account key**
- Grants access across **multiple services**

👉 Use when:
- Broad access is required (less restrictive)

---

## 🧠 When to use SAS

Use SAS when you want to:

- 🔐 Avoid exposing storage account keys
- 🌐 Provide **temporary access** to clients (e.g. browser, mobile app)
- 📤 Allow direct upload/download without proxying through your backend
- ⚡ Reduce backend load (client talks directly to storage)

---

## ⚠️ When NOT to use SAS

- ❌ When you need **full control / long-term access**
- ❌ When security requirements are very strict (prefer managed identity + RBAC)
- ❌ When you cannot safely manage SAS distribution

---

## 📜 Stored Access Policies

A **Stored Access Policy** is defined on a container or queue and allows:

- Central management of:
  - Permissions
  - Expiry time

### Benefits:
- 🔄 You can **revoke or change** a SAS without regenerating it
- 🔐 Better control over multiple SAS tokens

### Important:
- Only supported for:
  - Blob containers
  - File shares
  - Queues  
- ❌ Not supported for Tables or account SAS

---

## 🔐 Security Best Practices

- ✅ Always use **HTTPS only**
- ⏱️ Set **short expiry times**
- 🔒 Grant **least privilege** (only required permissions)
- 🌍 Restrict by IP if possible
- 🔁 Prefer **User Delegation SAS** over others
- 🚫 Never expose account keys

---

## ⚡ Exam Tips / Traps

- 💡 **User Delegation SAS = most secure**
- 💡 SAS = **temporary + limited access**
- 💡 Stored Access Policy = **revocation mechanism**
- 💡 Account SAS = **broad access → less secure**
- 💡 SAS avoids sending data through your backend
- 💡 SAS is part of the **URL (query string!)**

---

## 🧪 Typical Exam Question Patterns

👉 *"How to allow temporary upload access to Blob Storage from a web app?"*  
➡️ Use **SAS**

👉 *"How to revoke access without regenerating keys?"*  
➡️ Use **Stored Access Policy**

👉 *"Most secure SAS type?"*  
➡️ **User Delegation SAS**

👉 *"Grant access across multiple services?"*  
➡️ **Account SAS**

---

## 🏁 Summary

- SAS = **secure, temporary delegation mechanism**
- Avoids exposing account keys
- Use **User Delegation SAS whenever possible**
- Combine with **Stored Access Policies** for better control

---

<!-- include:_toc.md -->

---
