# AZ-900 Lab 16 – Implement Resource Tagging

## 📘 Lab Overview
In this lab, you learn how to enforce and use **resource tagging in Azure** using **Azure Policy**.

Tags are key-value pairs that help organize, manage, and track resources across your subscription.

---

## 🎯 Objectives
- Understand **resource tagging**
- Enforce tagging using **Azure Policy**
- Validate policy behavior during resource creation
- Filter and manage resources using tags
- Remove policy assignments

---

## 🧠 Key Concepts

### 🏷️ Resource Tags
Tags are **key-value pairs** assigned to Azure resources.

**Example:**
- Key: `Company`
- Value: `Contoso`

---

### 📋 Benefits of Tagging
- Cost management (e.g., by department)
- Organization of resources
- Automation & governance
- Filtering and reporting

---

### 🛡️ Azure Policy for Tagging
Azure Policy can:
- Enforce required tags
- Deny resource creation if tags are missing
- Ensure consistency across environments

---

## 🧪 Lab Steps Summary

### 1. Create a Policy Assignment
- Navigate to **Policy**
- Go to **Assignments**
- Click **Assign Policy**

Configure:
- Scope: Subscription
- Policy: **Require a tag and its value on resources**
- Parameters:
  - Tag name: `Company`
  - Tag value: `Contoso`

✅ Result:
- All new resources must include this tag

⚠️ Note:
- Policy enforcement may take up to **30 minutes**

---

### 2. Create a Storage Account (Without Tag)
- Navigate to **Storage accounts**
- Click **Create**

Configure:
- Name: `storageaccountxxxx` (globally unique)
- Region: East US

❌ Expected Result:
- Validation fails
- Error: Resource disallowed by policy

---

### 3. Create Storage Account (With Tag)
- Go back and add tag:

| Key     | Value   |
|--------|--------|
| Company | Contoso |

✅ Result:
- Validation succeeds
- Resource is created

---

### 4. View Resources by Tag
- Navigate to **Tags**
- Select:
  - `Company : Contoso`

✅ Result:
- Shows all resources with this tag

---

### 5. Filter Resources Using Tags
- Go to **All resources**
- Click **Add filter**
- Filter by:
  - Tag: `Company`

✅ Result:
- Only tagged resources are displayed

---

### 6. Delete Policy Assignment
- Navigate to **Policy**
- Open the assignment:
  - Require a tag on resources
- Click **Delete Assignment**

✅ Result:
- Tag requirement is removed

---

### 7. (Optional) Validate Removal
- Create a new resource **without a tag**

✅ Result:
- Resource creation succeeds (policy no longer enforced)

---

## 🔍 Observations

- Azure Policy can **block resource creation**
- Tags are enforced at **creation time**
- Policies require **time to propagate**
- Tags enable **powerful filtering and organization**

---

## ⚠️ Important Notes

- Tags are **not inherited automatically** (unless enforced by policy)
- Policies can be assigned at:
  - Subscription
  - Resource Group
- Missing tags can cause **deployment failures**
- Tags are critical for **cost tracking**

---

## 🧾 Use Cases

- Cost allocation (e.g., Department, Project)
- Environment separation (Dev, Test, Prod)
- Ownership tracking (Team, Owner)
- Automation and governance rules

---

## 🧪 Exam Practice Questions

<details>
<summary>❓ What is a resource tag in Azure?</summary>

✔️ A key-value pair used to organize and manage resources  

</details>

<details>
<summary>❓ What happens if a required tag is missing during resource creation?</summary>

✔️ The deployment is denied by Azure Policy  

</details>

<details>
<summary>❓ Can Azure Policy enforce tagging?</summary>

✔️ Yes, it can require specific tags and values  

</details>

<details>
<summary>❓ How can you find resources with a specific tag?</summary>

✔️ Use the Tags blade or filter in All Resources  

</details>

<details>
<summary>❓ Do tags automatically apply to all resources?</summary>

❌ No, unless enforced by policy  

</details>

<details>
<summary>❓ Why are tags important for cost management?</summary>

✔️ They allow grouping and tracking costs by categories like department or project  

</details>

---

## ✅ Conclusion

- Tags are essential for **organization and cost control**
- Azure Policy ensures **consistent tagging across resources**
- Missing tags can **block deployments**
- Tags enable efficient **filtering, reporting, and governance**

---

## 🚀 Next Step

You now understand how to enforce and use tagging in Azure.

This knowledge complements:
- RBAC (who can access)
- Policies (what is allowed)
- Tags (how resources are organized)

👉 Together, they form the foundation of **Azure governance and cost management** 💡

<!-- include:_toc.md -->