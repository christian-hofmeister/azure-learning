# AZ-900 Lab 14 – Manage Access with RBAC

## 📘 Overview

In this lab, we explore **Azure Role-Based Access Control (RBAC)**, which is used to manage access to Azure resources.

RBAC allows you to:

- Grant **fine-grained access** to users, groups, or applications
- Follow the **principle of least privilege**
- Control access at different scopes (subscription, resource group, resource)

---

## 🎯 Objectives

- Understand how RBAC works in Azure
- Assign roles to users
- Explore scopes and permissions

---

## 🧠 Key Concepts

### 🔐 What is RBAC?

RBAC is an **authorization system** that determines what actions a user can perform on Azure resources.

### 🧩 RBAC Components

| Component            | Description |
|---------------------|-------------|
| **Security Principal** | User, group, or service principal |
| **Role Definition**    | A set of permissions (e.g., Reader, Contributor) |
| **Scope**              | Where the role applies (subscription, resource group, resource) |

---

## 🧪 Lab Summary (Quick Walkthrough)

### 1. Open Access Control (IAM)

- Navigate to a resource (e.g., Resource Group or VM)
- Open **Access Control (IAM)**

### 2. Add Role Assignment

- Click **+ Add → Add role assignment**
- Select a role (e.g., **Reader** or **Contributor**)

### 3. Assign to a User

- Select a user from the directory
- Confirm the assignment

### 4. Verify Access

- Check assigned roles under **Role assignments**
- Observe how access is granted based on role and scope

---

## 🧾 Common Built-in Roles

| Role            | Permissions |
|-----------------|------------|
| **Reader**       | Read-only access |
| **Contributor**  | Create and manage resources |
| **Owner**        | Full access including role assignments |

---

## 📌 Important Notes

- RBAC is **central to Azure security**
- Always prefer **least privilege access**
- Roles are inherited from higher scopes:
  - Subscription → Resource Group → Resource

---

## 🧠 Exam Tips (AZ-900)

- Know the difference between **authentication vs authorization**
- Understand:
  - **RBAC = Authorization**
  - **Microsoft Entra ID (Azure AD) = Authentication**
- Be familiar with:
  - **Scopes**
  - **Built-in roles**
  - **Role assignments**

---

## 🚀 Real-World Relevance

RBAC is used in almost every Azure project:

- Controlling developer access
- Managing CI/CD permissions
- Securing production environments

For your **POIneer project**, RBAC could be used to:

- Restrict access to **Blob Storage**
- Control deployment permissions in **Azure DevOps**
- Separate roles between **admin and application services**

---

## 📚 Further Learning

- Microsoft Learn: RBAC fundamentals
- Try assigning different roles in a test subscription
- Explore custom roles for advanced scenarios

---

## ✅ Conclusion

This lab introduces the basics of RBAC, one of the most important security concepts in Azure.

Even though the lab was completed quickly, it is highly recommended to deepen your understanding through:

- Microsoft Learn modules
- Hands-on practice with different roles and scopes
- Experimenting with different scopes (resource vs resource group vs subscription)

RBAC is essential knowledge for both the **AZ-900 exam** and real-world Azure projects.


## Markdown Files

- [](README.md)
