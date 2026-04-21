# AZ-900 Cheat Sheet – Identity, Access & Security

## 🔐 Identity and Access Management

### Microsoft Entra ID (Azure AD)

Cloud-based identity and access management service.

Used for:

* User authentication
* Access control
* Integration with Azure services

---

## 🔑 Authentication vs Authorization

| Concept        | Description                 |
| -------------- | --------------------------- |
| Authentication | Verifies identity (login)   |
| Authorization  | Grants access (permissions) |

---

## 🔐 Authentication Methods

| Method       | Description                        |
| ------------ | ---------------------------------- |
| Password     | Basic authentication               |
| MFA          | Multiple factors (strong security) |
| Passwordless | Biometrics, tokens                 |

👉 MFA is highly recommended

---

## 👥 External Identities

* Allows external users (partners, customers)
* Supports B2B and B2C scenarios

---

## 🔐 Conditional Access

Controls access based on conditions:

* User identity
* Device compliance
* Location
* Risk level

👉 Example:
Block access from unknown locations

---

## 🔑 Role-Based Access Control (RBAC)

* Assign roles to users, groups, or resources
* Principle of least privilege

### Common Roles:

* Owner
* Contributor
* Reader

---

## 🛡️ Zero Trust Model

Principle:

> Never trust, always verify

Key elements:

* Verify identity
* Limit access
* Assume breach

---

## 🧱 Defense in Depth

Multiple layers of security:

1. Physical security
2. Identity & access
3. Network
4. Compute
5. Application
6. Data

---

## 🔐 Encryption

| Type            | Description |
| --------------- | ----------- |
| Data at rest    | Stored data |
| Data in transit | Moving data |

---

## 🛡️ Microsoft Defender for Cloud

* Security monitoring
* Threat detection
* Security recommendations
* Compliance insights

---

## 🎯 Key Takeaways

* Identity is the foundation of security
* Use MFA and Conditional Access
* Apply least privilege with RBAC
* Combine multiple security layers

---
