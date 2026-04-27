# AZ-204 – Containerized Solutions – Hard Mode Questions

---

## ❓ Question 1 (ACR vs ACI Trap)

You need to build container images automatically when code is pushed to a Git repository.  
The solution must minimize external dependencies and infrastructure.

What should you use?

- A) Azure DevOps Pipelines
- B) Azure Container Instances
- C) Azure Container Registry Tasks
- D) GitHub Actions

<details>
<summary>✅ Answer</summary>

C) Azure Container Registry Tasks

✔ Built-in CI/CD  
✔ No external pipeline needed  

</details>

---

## ❓ Question 2 (ACI vs Container Apps)

You need to run a container that processes messages from a queue.  
The solution must scale automatically based on the number of messages.

What should you use?

- A) Azure Container Instances
- B) Azure Container Apps with KEDA
- C) Azure Container Registry
- D) Azure App Service

<details>
<summary>✅ Answer</summary>

B) Azure Container Apps with KEDA

✔ Event-driven scaling  
✔ ACI does NOT auto-scale  

</details>

---

## ❓ Question 3 (Restart Policy Trap)

You deploy a container to Azure Container Instances.  
The container should retry execution only if it fails.

What should you configure?

- A) Always
- B) Never
- C) OnFailure
- D) Manual restart

<details>
<summary>✅ Answer</summary>

C) OnFailure

</details>

---

## ❓ Question 4 (Persistence Trap)

A container running in Azure Container Instances needs to store files that must persist after the container stops.

What should you use?

- A) Local container storage
- B) Azure Blob Storage (automatic)
- C) Azure File Share mount
- D) ACR storage

<details>
<summary>✅ Answer</summary>

C) Azure File Share mount

✔ ACI is stateless  

</details>

---

## ❓ Question 5 (Container Apps Revision)

You deploy a new version of a containerized application in Azure Container Apps.  
You need to gradually route traffic between the old and new versions.

What should you use?

- A) ACR tags
- B) Deployment slots
- C) Revisions with traffic splitting
- D) Restart policy

<details>
<summary>✅ Answer</summary>

C) Revisions with traffic splitting

✔ Native feature in Container Apps  

</details>

---

## ❓ Question 6 (Base Image Trigger Trap)

You want to ensure that your container images are automatically rebuilt whenever the base image is updated.

What should you use?

- A) GitHub webhook
- B) Azure DevOps trigger
- C) ACR Task with base image trigger
- D) Manual rebuild

<details>
<summary>✅ Answer</summary>

C) ACR Task with base image trigger

✔ Very common exam trap  

</details>

---

## ❓ Question 7 (Architecture Decision)

You are designing a microservices-based system.  
Requirements:
- Autoscaling
- Minimal infrastructure management
- Built-in service-to-service communication support

What should you use?

- A) Azure Container Instances
- B) Azure Kubernetes Service
- C) Azure Container Apps with Dapr
- D) Azure App Service

<details>
<summary>✅ Answer</summary>

C) Azure Container Apps with Dapr

✔ Serverless  
✔ Microservices  
✔ Dapr for communication  

</details>

---

## ❓ Question 8 (Cost Optimization)

You need to run containers with the lowest cost when idle.  
The containers should not run when there is no traffic.

What should you use?

- A) Azure Container Instances
- B) Azure Container Apps
- C) Azure Kubernetes Service
- D) Virtual Machines

<details>
<summary>✅ Answer</summary>

B) Azure Container Apps

✔ Scale to zero  

</details>

---

## ❓ Question 9 (Security Trap)

You need to store sensitive configuration values for your containerized app.

What should you use?

- A) Dockerfile ENV
- B) Hardcoded values in code
- C) Container Apps secrets
- D) ACR tags

<details>
<summary>✅ Answer</summary>

C) Container Apps secrets

✔ Secure handling  

</details>

---

## ❓ Question 10 (Image Source Trap)

You deploy a container to Azure Container Apps.

Which image sources are supported?

- A) Only Azure Container Registry
- B) Only Docker Hub
- C) Both ACR and Docker Hub
- D) Only GitHub Packages

<details>
<summary>✅ Answer</summary>

C) Both ACR and Docker Hub

</details>

---

## ❓ Question 11 (Service Selection Trap)

You need to run a containerized job that:
- Runs for a few minutes
- Does not require scaling
- Should be simple to deploy

What should you use?

- A) Azure Container Apps
- B) Azure Container Instances
- C) Azure Kubernetes Service
- D) Azure Functions

<details>
<summary>✅ Answer</summary>

B) Azure Container Instances

✔ Simple + lightweight  

</details>

---

## ❓ Question 12 (Hidden AKS Trap)

Which service uses Kubernetes under the hood but does NOT require cluster management?

- A) Azure Kubernetes Service
- B) Azure Container Instances
- C) Azure Container Apps
- D) Azure Virtual Machines

<details>
<summary>✅ Answer</summary>

C) Azure Container Apps

✔ Managed AKS internally  

</details>

---

## 🧠 Final Hard Mode Tip

If the question includes:
- "simple" → ACI  
- "scale" → Container Apps  
- "build images" → ACR  
- "microservices" → Container Apps  
- "no infrastructure" → ACI or Container Apps (check scaling requirement!)