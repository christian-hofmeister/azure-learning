<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

# AZ-900 Lab 15 – Manage Resource Locks

## 📘 Lab Overview
In this lab, you explore **Azure Resource Locks**, a feature that helps prevent accidental deletion or modification of critical resources.

Resource locks are part of Azure’s governance capabilities and are commonly used together with RBAC and policies.

---

## 🎯 Objectives
- Understand **resource locks** in Azure  
- Apply **Delete** and **Read-only** locks  
- Observe how locks affect resource operations  
- Learn how locks interact with RBAC permissions  

---

## 🧠 Key Concepts

### 🔒 Resource Locks
Azure provides two types of locks:

| Lock Type     | Description |
|--------------|------------|
| CanNotDelete | Prevents deletion, but allows modifications |
| ReadOnly     | Prevents both deletion and modification |

---

### 📍 Scope Levels
Locks can be applied at different levels:

- Subscription  
- Resource Group  
- Resource  

➡️ Locks **inherit downward**  
(e.g., a lock on a resource group applies to all resources inside it)

---

## 🧪 Lab Steps Summary

### 1. Create a Resource (if not already available)
- Navigate to Azure Portal  
- Create or use an existing:
  - Resource Group  
  - Resource (e.g., Storage Account or VM)  

---

### 2. Apply a Delete Lock
- Go to the resource or resource group  
- Select **Locks**  
- Click **+ Add**  
- Configure:
  - Name: `DeleteLock`  
  - Lock type: **CanNotDelete**  

✅ Result:  
- Resource **cannot be deleted**  
- Modifications are still allowed  

---

### 3. Test Delete Lock
- Attempt to delete the locked resource  

❌ Expected Result:  
- Operation fails with an error message indicating a lock  

---

### 4. Apply a Read-Only Lock
- Add another lock:
  - Name: `ReadOnlyLock`  
  - Lock type: **ReadOnly**  

---

### 5. Test Read-Only Lock
- Try to:
  - Modify the resource  
  - Delete the resource  

❌ Expected Result:  
- Both operations fail  

---

### 6. Remove Locks
- Navigate back to **Locks**  
- Delete both locks  

✅ Resource operations are now allowed again  

---

## 🔍 Observations

- Locks override **RBAC permissions**  
- Even **Owners** cannot modify/delete locked resources  
- Locks are ideal for:
  - Production environments  
  - Critical infrastructure  
  - Shared resources  

---

## ⚠️ Important Notes

- Locks do **not** prevent data access within a resource  
  (e.g., deleting blobs inside a storage account is still possible)  
- Locks only apply to **management plane operations**  
- Locks are inherited from higher scopes  

---

## 🧾 Use Cases

- Prevent accidental deletion of:
  - Production VMs  
  - Databases  
  - Networking components  
- Protect shared environments  
- Enforce governance in teams  

---

## 🧪 Exam Practice Questions

<details>
<summary>❓ What is the purpose of a resource lock in Azure?</summary>

✔️ To prevent accidental deletion or modification of resources  

</details>

<details>
<summary>❓ Which lock type allows modifications but prevents deletion?</summary>

✔️ CanNotDelete  

</details>

<details>
<summary>❓ What happens when a ReadOnly lock is applied?</summary>

✔️ Both deletion and modification are blocked  

</details>

<details>
<summary>❓ Do resource locks override RBAC permissions?</summary>

✔️ Yes, locks take precedence over RBAC  

</details>

<details>
<summary>❓ At which levels can resource locks be applied?</summary>

✔️ Subscription, Resource Group, and Resource  

</details>

<details>
<summary>❓ Do resource locks prevent access to data inside a resource?</summary>

❌ No, they only affect management operations  

</details>

---

## ✅ Conclusion

- Resource locks are a **simple but powerful protection mechanism**  
- They help prevent **accidental changes and deletions**  
- They work across **different scopes with inheritance**  
- They are essential for **production-grade Azure governance**  

---

## 🚀 Next Step

You now understand how to protect resources using locks.  

This knowledge complements:
- RBAC (who can access)  
- Policies (what is allowed)  
- Locks (what cannot be changed/deleted)  

👉 Together, these form the **core of Azure governance** 🔥

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

_No content found._
