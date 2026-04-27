# AZ-204 – Containerized Solutions – Cheat Sheet

---

## 📦 ACR (Azure Container Registry)
- Private Docker registry
- Stores images
- Supports ACR Tasks

✔ Use when:
- Need image storage
- Need automated builds

---

## 🚀 ACI (Azure Container Instances)
- Serverless container execution
- No orchestration

✔ Features:
- Fast startup
- Per-second billing
- Restart policies

✔ Use when:
- Run simple jobs
- Background tasks

---

## ☁️ Container Apps
- Serverless microservices platform
- Built on AKS (hidden)

✔ Features:
- Autoscaling (KEDA)
- Scale to zero
- Revisions
- Dapr integration

✔ Use when:
- Production apps
- Microservices

---

## 🔁 Restart Policies (ACI)

| Policy     | Behavior |
|------------|--------|
| Always     | Always restart |
| OnFailure  | Restart on failure |
| Never      | Run once |

---

## 📊 Quick Comparison

| Feature        | ACR       | ACI        | Container Apps |
|---------------|----------|-----------|----------------|
| Purpose       | Store     | Run        | Run apps       |
| Scaling       | ❌        | ❌         | ✅             |
| Serverless    | ❌        | ✅         | ✅             |
| Use Case      | Registry  | Jobs       | Microservices  |

---

## 🧠 Must-Know

- ACR Tasks = built-in CI/CD
- ACI = no autoscaling
- Container Apps = autoscaling + revisions
- Dapr = microservices helper
- ACI = stateless (use file share)

---

## 🎯 Exam Keywords

- "store images" → ACR  
- "run quickly" → ACI  
- "scale + microservices" → Container Apps  