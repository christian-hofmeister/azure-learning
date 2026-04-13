# AZ-900 Practice – Azure Management & Governance (Hard)

## 🧪 Questions

### 1

Which Azure service is used to **enforce organizational standards** such as allowed VM sizes?

* A) Azure RBAC
* B) Azure Policy
* C) Resource Locks
* D) Tags

<details>
<summary>✅ Answer</summary>

**B) Azure Policy**

👉 Policies enforce rules (e.g. allowed SKUs, regions)

</details>

---

### 2

You want to **prevent accidental deletion** of a critical resource. What should you use?

* A) Azure RBAC
* B) Azure Policy
* C) Resource Lock (Delete)
* D) Management Group

<details>
<summary>✅ Answer</summary>

**C) Resource Lock (Delete)**

👉 Even Owners cannot delete if a lock exists

</details>

---

### 3

At which level can **Azure RBAC roles** be assigned?

* A) Subscription only
* B) Resource Group only
* C) Resource only
* D) All levels (Management Group, Subscription, RG, Resource)

<details>
<summary>✅ Answer</summary>

**D) All levels**

👉 RBAC works across the entire hierarchy

</details>

---

### 4

What is the main purpose of **Tags** in Azure?

* A) Enforce compliance rules
* B) Control access to resources
* C) Organize and track resources (e.g. cost allocation)
* D) Prevent deletion

<details>
<summary>✅ Answer</summary>

**C) Organize and track resources**

👉 Tags are metadata, not enforcement

</details>

---

### 5

You want to ensure that all resources are deployed only in **West Europe**. What should you use?

* A) Azure RBAC
* B) Azure Policy
* C) Resource Lock
* D) Tag

<details>
<summary>✅ Answer</summary>

**B) Azure Policy**

👉 Policies enforce location constraints

</details>

---

### 6

Which statement about **Management Groups** is correct?

* A) They contain resources directly
* B) They organize multiple subscriptions
* C) They replace subscriptions
* D) They are used for billing only

<details>
<summary>✅ Answer</summary>

**B) They organize multiple subscriptions**

👉 Used for governance across subscriptions

</details>

---

### 7

You assign a **Reader role** at the Resource Group level. What happens?

* A) User can modify resources in that RG
* B) User can only view resources in that RG
* C) User cannot access anything
* D) User can delete resources

<details>
<summary>✅ Answer</summary>

**B) User can only view resources**

👉 Reader = read-only access

</details>

---

### 8

Which service helps you **track and control Azure spending**?

* A) Azure Policy
* B) Azure Cost Management
* C) Azure RBAC
* D) Resource Locks

<details>
<summary>✅ Answer</summary>

**B) Azure Cost Management**

👉 Includes budgets, alerts, analysis

</details>

---

### 9

A resource has a **ReadOnly lock**. What is allowed?

* A) Delete resource
* B) Modify resource
* C) Read resource
* D) Change tags

<details>
<summary>✅ Answer</summary>

**C) Read resource**

👉 Nothing can be changed

</details>

---

### 10

Which statement is TRUE about **Azure Policy vs RBAC**?

* A) Both control access
* B) RBAC enforces rules, Policy controls access
* C) Policy enforces rules, RBAC controls access
* D) They are identical

<details>
<summary>✅ Answer</summary>

**C) Policy enforces rules, RBAC controls access**

</details>

---

## ⚠️ Exam Traps & Key Takeaways

### 🔥 RBAC vs Policy

* **RBAC → WHO can access**
* **Policy → WHAT is allowed**

---

### 🔥 Locks override permissions

* Even **Owner cannot delete** if lock exists

---

### 🔥 Tags are NOT enforcement

* Only metadata
* Policies can enforce tagging

---

### 🔥 Hierarchy matters

* MG → Subscription → RG → Resource
* Permissions & policies inherit downward

---

### 🔥 Cost Management ≠ Policy

* Cost = monitoring 💰
* Policy = enforcement 📜

---

## 🧠 Final Tip

If you’re unsure in the exam:

👉 Ask yourself:

* “Is this about access?” → RBAC
* “Is this about rules?” → Policy
* “Is this about protection?” → Locks
* “Is this about organization?” → Tags

---

🚀 If you want, next step:
👉 **Ultra-hard mixed exam (all AZ-900 topics, tricky wording like real exam)**
