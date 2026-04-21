# az-900-lab-09-create-a-vm-with-a-template

## 🎯 Goal
Deploy a Virtual Machine using an Azure Resource Manager (ARM) template from the QuickStart gallery and understand how template-based deployments work.

---

## 🧠 Key Learnings

### 🔧 ARM Template Basics
- ARM templates are JSON-based Infrastructure as Code (IaC)
- They define what resources should be created, not how
- Deployment is declarative

---

### 🚀 QuickStart Templates
- Provided by Microsoft (GitHub / Gallery)
- Predefined templates for common scenarios
- Can be deployed via "Deploy to Azure"

Important:
Templates are not automatically saved in your subscription

---

### 🏗️ Deployment Reality

Deploying a template = creating real resources

In this lab:
- A Virtual Machine was created
- Including:
  - Compute
  - Storage (Disk)
  - Networking

---

### 🐢 Why Deployment Takes Time
- VM provisioning is resource-intensive:
  - OS image loading
  - Disk creation
  - Network setup

---

### 📊 Monitoring the VM

Using Azure Monitor:

- Metrics observed:
  - CPU usage
  - Network traffic
  - Disk activity

---

## 🔍 Metrics vs Logs vs Alerts

| Type     | Description |
|----------|------------|
| Metrics  | Numeric performance data (CPU, Network) |
| Logs     | Detailed event data (errors, operations) |
| Alerts   | Notifications based on rules |

---

## ⚠️ Important Concepts

### ❗ Template vs Deployment
- Template = Blueprint
- Deployment = Actual infrastructure

---

### ❗ Lab vs Real Azure
- Lab environment → resources are temporary
- Real Azure → resources persist → costs

---

## 🧪 Steps (High-Level)

1. Open Azure QuickStart Template
2. Click Deploy to Azure
3. Edit template (change VM name)
4. Configure parameters:
   - VM size
   - Username / Password
   - DNS name
5. Deploy
6. Verify VM creation
7. Explore monitoring (Metrics, Activity Log)

---

## 🧠 Exam-Relevant Takeaways

- ARM templates enable repeatable deployments
- Azure Monitor provides:
  - Metrics
  - Logs
  - Alerts
- VM deployments are slower than PaaS/serverless services
- Resources remain until deleted (outside labs)

---

# 📝 Quiz Questions

### ❓ 1. What does an ARM template define?
- A) How Azure builds resources  
- B) What resources should exist  
- C) Only networking configuration  
- D) Only VM settings  

Answer: B

---

### ❓ 2. What happens when you click "Deploy to Azure"?
- A) Template is saved  
- B) Resources are created  
- C) Only validation runs  
- D) Nothing happens  

Answer: B

---

### ❓ 3. Which service provides CPU usage metrics?
- A) Azure Storage  
- B) Azure Monitor  
- C) Azure Advisor  
- D) Azure Policy  

Answer: B

---

### ❓ 4. Which is best for real-time performance monitoring?
- A) Logs  
- B) Metrics  
- C) Alerts  
- D) Policies  

Answer: B

---

### ❓ 5. What triggers an alert?
- A) A template  
- B) A metric or log condition  
- C) A VM restart  
- D) A resource group  

Answer: B

---

### ❓ 6. What is a key difference between lab and real Azure?
- A) Templates behave differently  
- B) Resources auto-delete in real Azure  
- C) Resources persist and cost money  
- D) Monitoring is disabled  

Answer: C

---

## 💬 Personal Note (optional)

This lab helped clarify the difference between templates as blueprints and actual resource deployments.  
A key takeaway was understanding that deploying a template creates real infrastructure — not just a reusable definition.

<!-- include:_toc.md -->