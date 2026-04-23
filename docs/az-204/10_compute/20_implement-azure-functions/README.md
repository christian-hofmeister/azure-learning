<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

## Markdown Files

- [Cheat Sheet Hosting](20_cheat-sheet-hosting.md)
- [Exam Hosting](30_exam-hosting.md)

---
# Azure Functions – Notes (AZ-204)

## 📌 Overview

Azure Functions is a **serverless compute service** that enables you to run event-driven code without managing infrastructure.

**Key idea:**
- Focus on code, not servers
- Automatically scales
- Pay only for execution time (Consumption plan)

**Typical use cases:**
- Data processing (e.g., file upload → process)
- System integration (event-based workflows)
- APIs / microservices
- Scheduled jobs

---

## ⚙️ Core Concepts

### Function App
- Container for one or more functions
- Shares configuration, scaling, and hosting plan

### Function
- A single unit of execution (like a method)
- Triggered by events

---

## ⚡ Triggers & Bindings

### Trigger
Defines **how a function is invoked**.

Common triggers:
- HTTP Trigger → REST API
- Timer Trigger → scheduled execution
- Blob Trigger → file upload
- Queue Trigger → message processing
- Event Grid / Event Hub → event-driven systems

---

### Bindings
Bindings simplify interaction with other services.

- **Input Binding** → read data
- **Output Binding** → write data

👉 No manual SDK code needed

**Example:**
- Read from Queue (input)
- Write to Blob Storage (output)

---

## 🏗 Hosting Options

### 1. Consumption Plan
- Fully serverless
- Automatic scaling
- Pay per execution
- Cold start possible

### 2. Premium Plan
- Pre-warmed instances (no cold start)
- Better performance
- VNET support

### 3. Dedicated Plan (App Service Plan)
- Runs on reserved VMs
- Always-on
- Good for predictable workloads

---

## 📈 Scaling

- Automatic scaling based on events
- Scale-out = more instances
- Scale-in = fewer instances

**Scaling triggers:**
- Queue length
- Event volume
- HTTP requests

👉 Consumption plan scales automatically  
👉 Premium = more control + pre-warmed

---

## 🧠 Development Models

### 1. In-Process
- Runs inside Azure Functions runtime
- Simpler
- Tightly coupled

### 2. Isolated Worker Model (Recommended)
- Runs in separate process
- More control
- Better for .NET modern apps

---

## 🛠 Development Tools

- Visual Studio
- Visual Studio Code (recommended for AZ-204)
- Azure CLI
- Azure Portal (limited)

---

## 🧩 Creating Functions

Steps:
1. Create Function App
2. Choose runtime (e.g., .NET, Node.js)
3. Add function
4. Configure trigger
5. Add bindings

---

## 🔗 Connecting to Azure Services

Common integrations:
- Azure Storage (Blob, Queue, Table)
- Cosmos DB
- Service Bus
- Event Grid

👉 Done via bindings (no SDK needed)

---

## 🚀 Deployment

Options:
- VS Code deployment
- GitHub Actions / CI/CD
- Zip deploy
- Azure CLI

---

## 🔐 Configuration

- Use **Application Settings** (env variables)
- Store secrets in:
  - Azure Key Vault (recommended)

---

## ⚠️ Cold Start

- Happens in Consumption plan
- Function instance needs to start first

**Avoid with:**
- Premium plan
- Keep warm strategies

---

## 📊 Monitoring

- Integrated with **Application Insights**
- Track:
  - executions
  - failures
  - performance

---

## 🧪 Local Development

- Use Azure Functions Core Tools
- Run and debug locally
- Same behavior as cloud

---

## ⚠️ Exam Traps

- Function App ≠ Function
- Consumption plan = **serverless + auto-scale + cold start**
- Bindings = no SDK needed
- Premium plan = **no cold start**
- Dedicated plan = **manual scaling**
- Triggers define execution, NOT bindings
- One Function App shares:
  - runtime
  - scaling
  - config

---

## 🧠 Cheat Sheet

| Concept        | Key Point |
|----------------|----------|
| Azure Functions | Serverless compute |
| Trigger        | Starts function |
| Binding        | Connects services |
| Consumption    | Auto-scale, pay per use |
| Premium        | No cold start |
| Dedicated      | Fixed resources |
| Function App   | Container for functions |
| Scaling        | Event-driven |

---

## 🎯 Key Takeaways

- Azure Functions = **event-driven + serverless**
- Triggers + bindings = core concept
- Choose hosting plan carefully
- Use bindings to simplify integrations
- Understand scaling behavior (very exam relevant)

---
<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

## Markdown Files

- [Cheat Sheet Hosting](20_cheat-sheet-hosting.md)
- [Exam Hosting](30_exam-hosting.md)

---