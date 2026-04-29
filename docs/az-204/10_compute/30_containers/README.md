<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

## Markdown Files

- [Cheat Sheet](10_cheat-sheet.md)
- [Exam Traps](20_exam-traps.md)
- [Exam Questions](30_exam-questions.md)
- [Exam Hard Mode](40_exam-hard-mode.md)


---
# Implement Containerized Solutions (AZ-204)

## 📦 Overview

This section covers how to:
- Store container images → **Azure Container Registry (ACR)**
- Run containers → **Azure Container Instances (ACI)**
- Build modern microservices → **Azure Container Apps**

---

# 🧱 1. Manage Container Images in Azure Container Registry (ACR)

## 🔹 What is ACR?
- Private Docker registry in Azure
- Stores container images securely
- Fully compatible with Docker CLI

### Key Features
- Private image storage
- Geo-replication (Premium tier)
- Integrated with Azure AD (RBAC)
- Webhooks for CI/CD triggers

---

## 🔹 Storage Capabilities
- Stores:
  - Images (Docker)
  - Helm charts (deprecated in newer scenarios)
- Supports:
  - Tags (versioning)
  - Repositories

### Example 
```myregistry.azurecr.io/myapp:v1```


---

## 🔹 ACR Tasks (IMPORTANT ⚠️ EXAM)
Automate builds without external CI tools.

### Types of Tasks
- **Quick Task**
  - Build image on demand
- **Triggered Task**
  - Triggered by:
    - Git commit
    - Base image update
- **Scheduled Task**
  - Run on schedule (cron)

### Example

```az acr build --image myapp:v1 --registry myregistry .```


---

## 🔹 Dockerfile Basics
Defines how an image is built.

### Common Instructions
- `FROM` → base image
- `COPY` → copy files
- `RUN` → execute commands
- `CMD` → default command

---

## ⚠️ Exam Tips
- ACR = **storage + build (Tasks)**
- Use **ACR Tasks instead of external CI**
- Integrated security via **Azure AD**
- Geo-replication = **multi-region availability**

---

# 🚀 2. Run Containers with Azure Container Instances (ACI)

## 🔹 What is ACI?
- Serverless container execution
- No VM or orchestration required

### Use Cases
- Short-lived workloads
- Background jobs
- Simple APIs
- Dev/Test

---

## 🔹 Key Features
- Fast startup (seconds)
- Per-second billing
- No infrastructure management

---

## 🔹 Restart Policies (IMPORTANT ⚠️)
Defines container lifecycle.

| Policy     | Behavior |
|------------|--------|
| Always     | Always restart |
| OnFailure  | Restart only on failure |
| Never      | Run once |

---

## 🔹 Environment Variables
- Pass configuration into containers

### Example

```--environment-variables KEY=value```


---

## 🔹 Mount Azure File Share
- Persist data using Azure Storage

### Requirements
- Storage account
- File share
- Access key

---

## ⚠️ Exam Tips
- ACI = **simple, single container execution**
- No orchestration → use **AKS / Container Apps instead**
- Supports **file share mounting**
- Restart policy often tested

---

# ☁️ 3. Implement Azure Container Apps

## 🔹 What is Azure Container Apps?
- Serverless container platform
- Runs on **AKS (hidden)**
- Designed for microservices

---

## 🔹 Key Features
- Autoscaling (including scale to zero)
- Built-in HTTPS
- Revision management
- Dapr integration
- Event-driven scaling (KEDA)

---

## 🔹 Containers in ACA
- Deploy container images from:
  - ACR
  - Docker Hub

---

## 🔹 Authentication & Authorization
- Integrates with:
  - Azure AD
- Can secure APIs

---

## 🔹 Revisions (IMPORTANT ⚠️)
- Every deployment creates a revision
- Supports:
  - Traffic splitting
  - Rollbacks

---

## 🔹 Secrets Management
- Store sensitive data securely
- Used as environment variables

---

## 🔹 Dapr Integration (IMPORTANT ⚠️)
- Microservices runtime

### Enables:
- Service-to-service calls
- State management
- Pub/Sub messaging

---

## ⚠️ Exam Tips
- ACA = **microservices + serverless containers**
- Built on AKS but **no cluster management**
- Supports:
  - Autoscaling
  - Revisions
  - Dapr
- Preferred over ACI for **production apps**

---

# 🧠 Comparison Cheat Sheet

| Feature              | ACR                  | ACI                  | Container Apps        |
|---------------------|---------------------|----------------------|----------------------|
| Purpose             | Store images        | Run containers       | Run microservices    |
| Serverless          | ❌                  | ✅                   | ✅                   |
| Scaling             | ❌                  | Manual               | Auto (KEDA)          |
| Orchestration       | ❌                  | ❌                   | Managed (AKS-based)  |
| CI/CD               | ACR Tasks           | External             | External/Integrated  |
| Use Case            | Image registry      | Simple workloads     | Production apps      |

---

# 🧠 Final Exam Strategy

- ACR → **Where images live & build automation**
- ACI → **Run quickly, no orchestration**
- Container Apps → **Modern cloud-native apps**

### Typical Questions
- "Where to store images?" → ACR
- "Run a quick container job?" → ACI
- "Build scalable microservices?" → Container Apps

---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

## Markdown Files

- [Cheat Sheet](10_cheat-sheet.md)
- [Exam Traps](20_exam-traps.md)
- [Exam Questions](30_exam-questions.md)
- [Exam Hard Mode](40_exam-hard-mode.md)


---