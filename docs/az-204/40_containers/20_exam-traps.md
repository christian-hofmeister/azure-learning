# AZ-204 – Containerized Solutions – Exam Traps

## 🚨 ACR vs ACI vs Container Apps

❌ Trap:
"Run a container" → ACR  
✅ Correct: ACR = **storage only**

❌ Trap:
"Simple container execution" → Container Apps  
✅ Correct: Use **ACI**

❌ Trap:
"Production microservices" → ACI  
✅ Correct: Use **Container Apps**

---

## 🚨 ACR Tasks

❌ Trap:
"You need CI/CD → use GitHub Actions only"
✅ Correct:
Use **ACR Tasks** for built-in image builds

✔ Key triggers:
- Git commit
- Base image update (VERY IMPORTANT ⚠️)
- Schedule

---

## 🚨 Restart Policies (ACI)

❌ Trap:
"Container should always restart" → OnFailure  
✅ Correct: **Always**

❌ Trap:
"Run once job" → Always  
✅ Correct: **Never**

---

## 🚨 Persistence

❌ Trap:
"ACI stores data automatically"
✅ Correct:
ACI is **stateless**

✔ Use:
- Azure File Share (mount)

---

## 🚨 Container Apps vs AKS

❌ Trap:
"Need Kubernetes knowledge" → Container Apps  
✅ Correct:
Container Apps = **fully managed (no cluster management)**

✔ AKS = full control  
✔ ACA = abstraction

---

## 🚨 Scaling

❌ Trap:
"ACI auto-scales"
✅ Correct:
ACI does **NOT auto-scale**

✔ Container Apps:
- Scale to zero
- Event-driven (KEDA)

---

## 🚨 Revisions (Container Apps)

❌ Trap:
"Deploy overwrites existing app"
✅ Correct:
Each deployment creates a **new revision**

✔ Supports:
- Traffic splitting
- Rollback

---

## 🚨 Secrets

❌ Trap:
"Store secrets in Dockerfile"
✅ Correct:
Use **Container Apps secrets**

---

## 🚨 Dapr

❌ Trap:
"Dapr is required"
✅ Correct:
Dapr is **optional**, but powerful

✔ Provides:
- Service invocation
- Pub/Sub
- State management

---

## 🚨 Image Sources

❌ Trap:
"Container Apps only use ACR"
✅ Correct:
Supports:
- ACR
- Docker Hub

---

## 🚨 Billing

✔ ACI:
- Per second billing

✔ Container Apps:
- Consumption-based (scale to zero)

---

## 🧠 Golden Rule

- ACR → store/build images
- ACI → run simple containers
- Container Apps → run scalable apps