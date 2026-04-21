# AZ-900 Cheat Sheet – Introduction to Cloud Infrastructure

## ☁️ Cloud Computing Basics

### What is Cloud Computing?

Cloud computing delivers computing services (servers, storage, networking, databases, etc.) over the internet.

### Key Characteristics

* On-demand resource provisioning
* Pay-as-you-go pricing (OpEx)
* Scalability and elasticity
* High availability

---

## 💰 CapEx vs OpEx

| Type  | Description                               |
| ----- | ----------------------------------------- |
| CapEx | Upfront investment (hardware, datacenter) |
| OpEx  | Pay for what you use (cloud model)        |

👉 Azure = **OpEx model**

---

## 🌍 Cloud Deployment Models

| Model   | Description           | Use Case              |
| ------- | --------------------- | --------------------- |
| Public  | Shared infrastructure | Most common           |
| Private | Dedicated environment | High control/security |
| Hybrid  | Combination           | Gradual migration     |

---

## 🔐 Shared Responsibility Model

| Responsibility          | Azure | Customer |
| ----------------------- | ----- | -------- |
| Physical datacenter     | ✅     | ❌        |
| Network infrastructure  | ✅     | ❌        |
| OS (depends on service) | ⚠️    | ⚠️       |
| Applications & data     | ❌     | ✅        |

👉 More control = more responsibility (e.g., VMs)

---

## 🏗️ Azure Physical Infrastructure

Hierarchy:

* Geography

  * Region

    * Availability Zone

      * Datacenter

### Key Points

* Regions contain multiple datacenters
* Availability Zones provide fault isolation
* Used for high availability and disaster recovery

---

## ⚙️ Compute Services

| Service          | Description                | Category  |
| ---------------- | -------------------------- | --------- |
| Virtual Machines | Full control over OS       | IaaS      |
| Containers       | Lightweight, portable apps | PaaS/IaaS |
| Azure Functions  | Event-driven, serverless   | PaaS      |
| App Service      | Managed web hosting        | PaaS      |

👉 Choose based on control vs simplicity

---

## 🌐 Networking Services

### Core Services

| Service      | Purpose                         |
| ------------ | ------------------------------- |
| VNet         | Private network in Azure        |
| VPN Gateway  | Secure connection over internet |
| ExpressRoute | Private dedicated connection    |
| DNS          | Domain name resolution          |

---

### Network Security

| Service         | Description                      |
| --------------- | -------------------------------- |
| NSG             | Basic traffic filtering (L4)     |
| Azure Firewall  | Advanced filtering (L7)          |
| DDoS Protection | Protects against traffic attacks |

👉 NSG = simple rules
👉 Firewall = advanced + centralized

---

## 💾 Storage Services

### Storage Types

| Type  | Use Case                          |
| ----- | --------------------------------- |
| Blob  | Unstructured data (images, files) |
| File  | Shared file storage               |
| Queue | Messaging between components      |
| Table | NoSQL key-value data              |

---

### Redundancy Options

| Option | Description                  |
| ------ | ---------------------------- |
| LRS    | Single datacenter            |
| ZRS    | Multiple zones               |
| GRS    | Replicated to another region |
| GZRS   | Zones + geo replication      |

👉 More redundancy = higher cost

---

## 📊 Management & Governance

### Cost Management

| Tool               | Purpose                  |
| ------------------ | ------------------------ |
| Pricing Calculator | Estimate costs           |
| Cost Management    | Monitor & analyze        |
| Tags               | Organize and track costs |

---

### Governance

| Tool              | Purpose                       |
| ----------------- | ----------------------------- |
| Azure Policy      | Enforce rules                 |
| Resource Locks    | Prevent deletion/modification |
| Microsoft Purview | Data governance & compliance  |

---

### Monitoring

| Tool            | Purpose                  |
| --------------- | ------------------------ |
| Azure Monitor   | Metrics + logs           |
| Log Analytics   | Query logs               |
| Azure Advisor   | Recommendations          |
| Service Health  | Azure service issues     |
| Resource Health | Resource-specific issues |

---

## 🛠️ Tools for Azure

| Tool          | Use Case                |
| ------------- | ----------------------- |
| Azure Portal  | GUI management          |
| Azure CLI     | Command line automation |
| PowerShell    | Scripting               |
| ARM Templates | Infrastructure as code  |
| Azure Arc     | Hybrid & multi-cloud    |

---

## 🔁 Key Concepts to Remember

* Cloud = scalable + flexible + cost-efficient
* Choose services based on **use case**, not technology
* Higher abstraction → less management
* Governance and monitoring are essential in production

---

## ⚠️ Common Exam Pitfalls

* Availability Zone ≠ Region
* Service Health ≠ Resource Health
* NSG ≠ Azure Firewall
* IaaS ≠ PaaS ≠ SaaS
* Pricing Calculator ≠ Cost Management

---

## 🚀 Final Advice

Focus on:

* Differences between services
* When to use which service
* Basic concepts, not implementation details

---

