<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

# AZ-900 Lab 17 – Create an Azure Policy

## 📘 Lab Overview
In this lab, you create an **Azure Policy** to restrict resource deployments to a specific **geographic location**.

Azure Policy is a key governance tool that helps enforce organizational standards and compliance.

---

## 🎯 Objectives
- Understand **Azure Policy definitions and assignments**
- Create a policy to restrict **allowed locations**
- Test policy enforcement during deployment
- Remove policy assignments

---

## 🧠 Key Concepts

### 📋 Azure Policy
Azure Policy is used to:
- Enforce rules across resources
- Ensure compliance with standards
- Control how resources are deployed

---

### 🧩 Policy Components

| Component        | Description |
|------------------|------------|
| Definition       | The rule (e.g., allowed locations) |
| Assignment       | Applying the rule to a scope |
| Scope            | Where the policy applies (subscription, resource group) |
| Parameters       | Custom values (e.g., allowed regions) |

---

### 📍 Scope
- Subscription (used in this lab)
- Resource Group
- Management Group

➡️ Policies apply to all resources within the defined scope

---

## 🧪 Lab Steps Summary

### 1. Explore Policy Definitions
- Navigate to **Policy**
- Open **Definitions**
- Filter by category (e.g., Compute)

💡 Example:
- Allowed VM SKUs
- Allowed locations

---

### 2. Create a Policy Assignment
- Go to **Policy → Assignments**
- Click **Assign Policy**

Configure:

| Setting           | Value |
|------------------|------|
| Scope            | Subscription |
| Policy Definition| Allowed Locations |
| Assignment Name  | Allowed Locations |

---

### 3. Configure Parameters
- Select allowed location:
  - `Japan West`

Click:
- **Review + create**
- **Create**

✅ Result:
- Only selected locations are allowed for deployments

---

### 4. Test Policy Enforcement
- Navigate to **Storage accounts**
- Click **Create**

Configure:
- Location: `East US`

❌ Expected Result:
- Deployment fails
- Error: Resource disallowed by policy

---

### 5. Review Policy Compliance
- Navigate to **Policy**
- Select **Allowed Locations**

💡 Notes:
- Shows compliant and non-compliant resources
- Existing resources may be non-compliant if created before policy

---

### 6. Delete Policy Assignment
- Open the policy assignment
- Click **Delete Assignment**
- Confirm deletion

---

### 7. Validate Removal
- Create a resource in a different region

✅ Result:
- Deployment succeeds (policy no longer enforced)

---

## 🔍 Observations

- Policies enforce rules **at deployment time**
- Policies can **deny or audit** resource creation
- Existing resources may become **non-compliant**
- Policies are powerful for **governance and compliance**

---

## ⚠️ Important Notes

- Policies may take time to propagate
- Policies can include **exclusions**
- Enforcement applies only after assignment
- Policies do not automatically fix existing resources

---

## 🧾 Use Cases

- Enforce region restrictions (data residency)
- Ensure compliance with legal requirements
- Control cost by limiting regions
- Standardize deployments across teams

---

## 🧪 Exam Practice Questions

<details>
<summary>❓ What is an Azure Policy used for?</summary>

✔️ To enforce rules and ensure compliance across Azure resources  

</details>

<details>
<summary>❓ What happens if a resource is deployed in a non-allowed location?</summary>

✔️ The deployment is denied  

</details>

<details>
<summary>❓ What is the difference between a policy definition and assignment?</summary>

✔️ A definition is the rule, an assignment applies it to a scope  

</details>

<details>
<summary>❓ At which levels can Azure Policy be applied?</summary>

✔️ Management group, subscription, and resource group  

</details>

<details>
<summary>❓ Do policies affect existing resources automatically?</summary>

❌ No, they may mark them as non-compliant but do not change them  

</details>

<details>
<summary>❓ What is a scope in Azure Policy?</summary>

✔️ The level at which the policy is applied (e.g., subscription)  

</details>

---

## ✅ Conclusion

- Azure Policy is essential for **governance and compliance**
- It allows control over **where and how resources are deployed**
- Policies can **deny deployments** that violate rules
- Assignments define **where policies are enforced**

---

## 🚀 Next Step

You now understand how to enforce deployment restrictions using Azure Policy.

This knowledge complements:
- RBAC (who can access)
- Resource Locks (what cannot be changed)
- Tags (how resources are organized)

👉 Together, these form the **core governance model in Azure** 🔐

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

_No content found._
