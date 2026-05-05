<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

_No content found._


---

# Explore the Microsoft Identity Platform

## 🎯 Overview

The Microsoft identity platform provides:

- **Authentication** (who you are)
- **Authorization** (what you can access)
- Integration with:
  - Azure services
  - Microsoft Graph
  - Custom applications

It is based on:

- **OAuth 2.0**
- **OpenID Connect**

---

## 🧠 Core Concepts

### Identity Types

| Type | Description |
|------|------------|
| User | A person (interactive login) |
| Application | App identity (non-interactive) |
| Service Principal | Instance of an app in a tenant |
| Managed Identity | Azure-managed identity for resources |

---

## 🔐 Authentication vs Authorization

| Concept | Meaning |
|--------|--------|
| Authentication | Verify identity (login) |
| Authorization | Grant access (permissions) |

---

## 🧩 Service Principals

A **service principal** is:

> The security identity of an application in a specific tenant

### Key Points

- Created automatically when an app is registered
- Used for:
  - API access
  - Automation
  - Background services

### Types

- **Application registration** (global definition)
- **Service principal** (tenant-specific instance)

---

## 🔑 Permissions and Consent

### Permission Types

| Type | Description |
|------|------------|
| Delegated | App acts on behalf of a user |
| Application | App acts as itself (no user) |

---

### Consent

Users or admins must approve permissions:

- **User consent**
  - For low-privilege access
- **Admin consent**
  - Required for high-privilege access

---

## ⚠️ Important Exam Concept

- Delegated permissions = **user context**
- Application permissions = **no user context**

---

## 🛡️ Conditional Access

Conditional access enforces policies like:

- Require MFA
- Restrict access by location
- Restrict access by device

### Example Conditions

- IP address
- Device compliance
- Risk level
- User role

---

## 🔥 Managed Identities

Used to securely access Azure resources **without credentials**

### Types

| Type | Description |
|------|------------|
| System-assigned | Bound to one resource |
| User-assigned | Reusable across resources |

### Benefits

- No secrets in code
- Automatic credential management

---

## 🔄 Authentication Flow (High-Level)

1. User/App requests access
2. Redirect to Microsoft identity platform
3. User authenticates
4. Token issued (JWT)
5. App uses token to access resources

---

## 🧾 Tokens

| Token Type | Purpose |
|-----------|--------|
| ID Token | Authentication |
| Access Token | API access |
| Refresh Token | Get new tokens |

---

## ⚡ Exam Tips

- Service principal = **app identity in tenant**
- Delegated vs Application permissions = **VERY IMPORTANT**
- Managed identity = **no credentials needed**
- Conditional access = **policy-based security**
- Microsoft identity platform = **OAuth + OpenID Connect**

---

## 🚨 Exam Traps

- ❌ Service principal ≠ app registration
- ❌ Authentication ≠ Authorization
- ❌ Delegated permissions ≠ application permissions
- ❌ Managed identity does NOT require secrets

---

## 🧠 Quick Cheat Sheet

- Identity platform = auth + access control
- OAuth 2.0 → authorization
- OpenID Connect → authentication
- Service principal → app identity
- Managed identity → Azure resource identity
- Conditional access → security policies


---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

_No content found._


---