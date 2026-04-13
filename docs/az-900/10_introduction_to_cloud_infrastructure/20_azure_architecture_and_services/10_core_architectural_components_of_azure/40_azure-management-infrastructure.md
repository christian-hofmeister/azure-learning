# Azure Management Infrastructure

## 🧠 Overview

Azure organizes resources in a hierarchical structure to enable:

- Resource organization
- Access control (RBAC)
- Cost management

---

## 🧱 Azure Resources

**Definition:**  
A resource is the smallest building block in Azure.

**Examples:**

- Virtual Machine (VM)
- Database
- Virtual Network
- Storage Account

💡 **Key Point:**  
> A resource is a single service instance.

---

## 📁 Resource Groups

**Definition:**  
Logical containers for resources.

### 🔑 Rules

- Each resource belongs to **exactly one** resource group
- Resource groups **cannot be nested**
- Resource groups **cannot be renamed**
- Deleting a resource group deletes **all contained resources**

### ⚙️ Behavior

- Access control (RBAC) applies to all resources in the group
- Policies apply to all resources in the group

### 📌 Typical Use Cases

- Per project (e.g., `webapp-project`)
- Per environment (Dev / Test / Prod)
- Temporary environments (easy cleanup)

💡 **Key Point:**  
> A resource group is a logical container for resources.

---

## 💳 Azure Subscriptions

**Definition:**  
A subscription is a unit of:

- Billing
- Access control
- Resource scaling

### 🔗 Relationship

- Linked to an Azure account (Microsoft Entra ID)
- One account can have **multiple subscriptions**

---

## 🔑 Subscription Boundaries (Exam Important)

### 💰 Billing Boundary

- Each subscription generates its **own invoice**

**Example:**

- Dev subscription → separate costs
- Prod subscription → separate costs

---

### 🔐 Access Control Boundary

- Access is managed at the subscription level

**Example:**

- Dev team → access to Dev subscription
- Prod team → restricted access

---

## 📌 When to Use Multiple Subscriptions

- Separate environments (Dev / Test / Prod)
- Separate teams or projects
- Separate billing and cost tracking

💡 **Key Point:**  
> A subscription is both a financial and access boundary.

---

## 🏢 Azure Management Groups

**Definition:**  
Management groups sit above subscriptions and allow centralized governance.

### 🎯 Purpose

- Apply policies across multiple subscriptions
- Manage access (RBAC)
- Enforce compliance

---

## 🔁 Inheritance (Very Important)

Settings are inherited downward:

- Management Group → Subscriptions → Resource Groups → Resources

**Example:**

- Policy: "Only West Europe region allowed"
→ Applies automatically to all underlying resources

---

## 🌳 Hierarchy Structure

Tenant Root Group

↓

Management Groups

↓

Subscriptions

↓

Resource Groups

↓

Resources

💡 **Key Point (Exam Important):**  
> Resources are organized from bottom to top in this hierarchy.

---

## ⚠️ Important Facts About Management Groups

- Maximum of **6 levels deep** (excluding root and subscription)
- Each management group or subscription has **only one parent**
- A tenant has a single **Tenant Root Group**

---

## 🎯 Exam Key Points

- **Smallest unit:** Resource  
- **Container for resources:** Resource Group  
- **Billing + access control:** Subscription  
- **Policy across subscriptions:** Management Group  

---

## 🧠 Quick Summary

| Level              | Purpose                          |
|-------------------|----------------------------------|
| Resource          | Single service instance          |
| Resource Group    | Logical container                |
| Subscription      | Billing + access control         |
| Management Group  | Governance across subscriptions  |
---

### Navigation

- [Parent: Module Overview](README.md)
- [Previous: # Azure Physical Infrastructure](30_azure_physical_infrastructure.md)
- [Next: Azure Management Infrastructure](README.md)
- [Home](../../../README.md)

