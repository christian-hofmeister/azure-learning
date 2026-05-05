# ⚡ SAS Cheat Sheet (AZ-204)

## 🔑 Core Idea

**SAS = temporary + limited access via URL**

👉 No account key exposure  
👉 Access is delegated via token (query string)

---

## 🧩 SAS Types

| Type                  | Signed with            | Scope                    | Security |
|-----------------------|----------------------|--------------------------|----------|
| User Delegation SAS   | Azure AD             | Blob only                | ⭐⭐⭐ BEST |
| Service SAS           | Account Key          | Single service           | ⭐⭐       |
| Account SAS           | Account Key          | Multiple services        | ⭐        |

---

## 🧠 When to Use

- Temporary access for clients (browser, mobile)
- Direct upload/download to storage
- Reduce backend load
- Avoid exposing account keys

---

## ❌ When NOT to Use

- Long-term access
- Full control scenarios
- High-security environments (→ use RBAC + Managed Identity)

---

## 📜 Stored Access Policy

👉 Defined on:
- Blob container
- File share
- Queue

### Enables:
- Change permissions later
- Revoke SAS without regenerating token

❌ Not supported for:
- Table storage
- Account SAS

---

## 🔐 Permissions (common)

| Permission | Meaning        |
|------------|----------------|
| r          | Read           |
| w          | Write          |
| d          | Delete         |
| l          | List           |
| a          | Add            |
| c          | Create         |

---

## ⏱️ Key Parameters

- `sp` → permissions
- `se` → expiry time
- `st` → start time
- `sr` → resource (blob, container)
- `sig` → signature

---

## 🔒 Best Practices

- Use **HTTPS only**
- Set **short expiry**
- Use **least privilege**
- Restrict by IP if possible
- Prefer **User Delegation SAS**
- Never expose account keys

---

## ⚡ Exam Traps

- ❗ SAS is part of **URL (query string)**
- ❗ **User Delegation SAS = most secure**
- ❗ **Stored Access Policy = revocation**
- ❗ Account SAS = **broad → less secure**
- ❗ SAS avoids backend proxy

---

## 🧪 Quick Answers

| Question                                             | Answer                  |
|------------------------------------------------------|--------------------------|
| Temporary access to blob?                            | SAS                      |
| Revoke SAS without key rotation?                     | Stored Access Policy     |
| Most secure SAS?                                     | User Delegation SAS      |
| Access multiple services?                            | Account SAS              |
| Avoid exposing account key?                          | SAS                      |

---

## 🏁 One-Liner

👉 **SAS = secure, time-limited access to Azure Storage via signed URL**