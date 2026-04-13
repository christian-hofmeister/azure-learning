# AZ-900 Glossary (Exam-Focused)

---

## ☁️ Cloud Concepts

### IaaS (Infrastructure as a Service)

Provides virtualized computing resources (VMs, storage, networking)

👉 Exam Tip: You manage OS & apps

---

### PaaS (Platform as a Service)

Provides a platform to build and deploy applications

👉 Exam Tip: You manage apps only (not OS)

---

### SaaS (Software as a Service)

Delivers software over the internet (e.g. Microsoft 365)

👉 Exam Tip: Subscription-based (monthly/yearly)

---

### Shared Responsibility Model

Defines what Azure vs customer is responsible for

👉 Exam Tip:

* IaaS → more customer responsibility
* SaaS → more Microsoft responsibility

---

### Public Cloud

Services offered over the public internet

---

### Private Cloud

Cloud infrastructure used exclusively by one organization

---

### Hybrid Cloud

Combination of on-premises + cloud

---

### CapEx (Capital Expenditure)

Upfront investment (hardware, datacenter)

---

### OpEx (Operational Expenditure)

Pay-as-you-go model (cloud)

👉 Exam Tip: Cloud = OpEx

---

## 🔐 Identity & Security

### Microsoft Entra ID

Azure identity and access management service

👉 Exam Tip: Formerly Azure AD

---

### Authentication

Verifies identity (login)

---

### Authorization

Determines access rights

👉 Exam Tip: AuthN vs AuthZ difference!

---

### Multi-Factor Authentication (MFA)

Requires multiple verification methods

---

### Conditional Access

Applies access policies based on conditions (location, device)

---

### RBAC (Role-Based Access Control)

Controls who can access what resources

👉 Exam Tip: RBAC = access control

---

### Zero Trust Model

"Never trust, always verify"

---

### Defense in Depth

Multiple layers of security

---

## 🏗️ Management & Governance

### Resource

An Azure service instance (VM, DB, etc.)

---

### Resource Group

Logical container for resources

👉 Exam Tip: Resources must belong to a RG

---

### Subscription

Billing boundary and resource container

👉 Exam Tip: Required to create resources

---

### Management Group

Organizes multiple subscriptions

👉 Exam Tip: Governance at scale

---

### Azure Policy

Enforces rules on resources (e.g. allowed regions)

👉 Exam Tip: Policy = rules

---

### Resource Lock

Prevents deletion or modification

👉 Exam Tip: Overrides RBAC!

---

### Tags

Key-value metadata for resources

👉 Exam Tip: Not enforcement, only organization

---

### Azure Blueprints (legacy concept)

Defines repeatable governance setups

👉 Exam Tip: Mostly replaced by Policy + ARM/Bicep

---

## 💰 Cost Management

### Pay-as-you-go

Pay only for what you use

---

### Reserved Instances

Prepaid resources for discount (1–3 years)

---

### Azure Cost Management

Tracks and analyzes spending

---

### Budgets

Set spending limits with alerts

---

## 🌍 Azure Architecture

### Region

Geographical area with datacenters

---

### Availability Zone

Physically separate datacenters within a region

👉 Exam Tip: High availability

---

### Region Pair

Two regions paired for disaster recovery

---

### Availability Set

Ensures VMs are distributed across hardware

---

## ⚙️ Azure Services Basics

### Azure Virtual Machine

On-demand virtual server (IaaS)

---

### Azure App Service

Platform to host web apps (PaaS)

---

### Azure Functions

Serverless compute service

👉 Exam Tip: Event-driven, no server management

---

### Azure Storage Account

Provides storage services (Blob, File, Queue, Table)

---

### Azure SQL Database

Managed relational database (PaaS)

---

## 📊 Monitoring & Support

### Azure Monitor

Collects metrics and logs

---

### Log Analytics

Query logs using KQL

---

### Service Health

Shows status of Azure services

---

### SLA (Service Level Agreement)

Guarantees uptime (e.g. 99.9%)

👉 Exam Tip: More services = higher SLA

---

## ⚠️ Common Confusions (Exam Traps)

### RBAC vs Azure Policy

* RBAC → controls access (who)
* Policy → enforces rules (what)

---

### Resource Lock vs RBAC

* RBAC may allow delete
* Lock prevents delete anyway

---

### Tags vs Policy

* Tags → metadata only
* Policy → can enforce tagging

---

### Subscription vs Resource Group

* Subscription → billing boundary
* Resource Group → logical container

---

### Region vs Availability Zone

* Region → geographic area
* Zone → datacenter inside region

---

### IaaS vs PaaS vs SaaS

* IaaS → you manage OS
* PaaS → you manage app
* SaaS → you just use software

---

### CapEx vs OpEx

* CapEx → upfront cost
* OpEx → pay-as-you-go

---

## 🚀 Final Exam Strategy

If unsure in exam:

* Access question? → **RBAC**
* Rules/compliance? → **Policy**
* Prevent delete/change? → **Lock**
* Organize/cost tracking? → **Tags**

---

🔥 Goal:
Know these terms → **you pass AZ-900**
