# ⚠️ SAS Exam Traps (AZ-204)

## 🎯 Core Trap

👉 **SAS = temporary + limited access (NOT identity-based)**  
👉 It is **token-based (URL)**, not RBAC

---

## ⚠️ Trap 1: SAS vs RBAC

❓ *"Secure access to storage with full control and identity management"*  
➡️ ✅ **RBAC + Managed Identity**  
➡️ ❌ NOT SAS

👉 SAS is **not identity-based**, RBAC is

---

## ⚠️ Trap 2: Most Secure SAS Type

❓ *"Which SAS type is most secure?"*  
➡️ ✅ **User Delegation SAS**  
➡️ ❌ Service SAS  
➡️ ❌ Account SAS

👉 Reason:
- Uses **Azure AD**
- No account key involved

---

## ⚠️ Trap 3: Revoke Access

❓ *"How to revoke SAS without regenerating account keys?"*  
➡️ ✅ **Stored Access Policy**

➡️ ❌ Regenerate account key (too heavy)  
➡️ ❌ Delete SAS (not possible once issued)

---

## ⚠️ Trap 4: Scope Confusion

❓ *"Access to multiple services required"*  
➡️ ✅ **Account SAS**

❓ *"Access to one blob/container only"*  
➡️ ✅ **Service SAS**

---

## ⚠️ Trap 5: Stored Access Policy Limitations

❓ *"Use Stored Access Policy for Table Storage?"*  
➡️ ❌ NOT supported

👉 Supported only for:
- Blob containers
- File shares
- Queues

---

## ⚠️ Trap 6: SAS Exposure

❓ *"Is SAS secure if leaked?"*  
➡️ ❌ NO

👉 Anyone with the URL can use it until expiry

---

## ⚠️ Trap 7: Expiry Missing

❓ *"What happens if no expiry is set?"*  
➡️ ⚠️ Risky / insecure

👉 Exam expects:
- Always set **expiry time**

---

## ⚠️ Trap 8: Backend Proxy Question

❓ *"Client should upload directly to Blob Storage"*  
➡️ ✅ **Use SAS**

➡️ ❌ Do NOT route through backend API

---

## ⚠️ Trap 9: Account Key Usage

❓ *"Avoid exposing account key"*  
➡️ ✅ **Use SAS**

❓ *"Avoid using account key at all"*  
➡️ ✅ **User Delegation SAS**

---

## ⚠️ Trap 10: Protocol Restriction

❓ *"Ensure secure transport"*  
➡️ ✅ Restrict SAS to **HTTPS only**

---

## ⚠️ Trap 11: Fine-Grained Permissions

❓ *"Allow read but not delete"*  
➡️ ✅ Set permissions in SAS (`sp=r`)

👉 SAS supports **granular permissions**

---

## ⚠️ Trap 12: Long-Term Access

❓ *"Permanent access required"*  
➡️ ❌ NOT SAS  
➡️ ✅ Use RBAC / Managed Identity

---

## ⚠️ Trap 13: SAS is NOT Revocable (Directly)

👉 Once issued:
- ❌ You cannot revoke an individual SAS
- ✅ Only via:
  - Expiry
  - Stored Access Policy
  - Key rotation

---

## ⚠️ Trap 14: SAS Location

❓ *"Where is SAS stored?"*  
➡️ ❌ Not in headers  
➡️ ❌ Not in body  
➡️ ✅ **In URL query string**

---

## ⚠️ Trap 15: Performance Trick

❓ *"Reduce backend load for file upload/download"*  
➡️ ✅ **Use SAS**

👉 Client communicates **directly with storage**

---

## 🧠 Mental Model

| Requirement                          | Solution                  |
|--------------------------------------|----------------------------|
| Temporary access                     | SAS                        |
| Identity-based access                | RBAC                       |
| Most secure SAS                      | User Delegation SAS        |
| Revoke SAS                           | Stored Access Policy       |
| Multi-service access                 | Account SAS                |
| Fine-grained blob access             | Service SAS                |

---

## 🏁 Final Reminder

👉 If question says:
- **temporary** → SAS  
- **identity / role / user** → RBAC  
- **most secure SAS** → User Delegation  
- **revoke** → Stored Access Policy  