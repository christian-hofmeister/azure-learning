# 💀 AZ-204 FINAL BOSS – Full App Service Case Study

## 📘 Scenario

You are building a production-ready cloud application on **Azure App Service**.

Architecture:

- Frontend: Web App (App Service)
- Backend API: Web App (same App Service Plan)
- OS: **Linux**
- Traffic: Public internet
- Scaling: Multiple instances

---

## 📋 Requirements

### 🔐 Security
- Secrets must be stored securely
- HTTPS must be enforced
- Certificates must be centrally managed

### 🚀 Deployment
- Zero downtime deployments
- Safe testing before production
- Config must not leak between environments

### 📊 Monitoring
- Persistent logs required
- Must analyze failures in production

### ⚡ Scalability
- Must scale horizontally
- Must NOT rely on instance-specific state

### 🧩 Routing
- `/api` should route to backend folder

---

# 🔥 Question 1 (Multi-answer)

How should you store and manage secrets?

A) appsettings.json  
B) Application Settings  
C) Azure Key Vault  
D) Hardcoded values  

<details>
<summary>Answer</summary>

✅ C (BEST)  
⚠️ B (acceptable fallback)

---

### Why:

- Key Vault = centralized, secure, rotation

---

### Why others are wrong:

❌ A → not secure  
❌ D → worst practice  

</details>

---

# 🔥 Question 2 (Multi-answer)

How do you implement zero-downtime deployments?

A) Restart app after deployment  
B) Deployment slots  
C) Swap slots  
D) Manual deployment  

<details>
<summary>Answer</summary>

✅ B, C

---

### Why:

- Deploy → staging
- Validate → swap → no downtime

---

### Why others are wrong:

❌ A → downtime  
❌ D → not reliable  

</details>

---

# 🔥 Question 3 (Multi-answer)

How do you prevent configuration leakage between staging and production?

A) Deployment slots  
B) Slot-specific settings  
C) Separate App Service Plan  
D) Use appsettings.json  

<details>
<summary>Answer</summary>

✅ B

---

### Why:

- Slot settings do NOT swap

---

### Why others are wrong:

❌ A → alone not enough  
❌ C → overkill  
❌ D → not environment-safe  

</details>

---

# 🔥 Question 4 (Multi-answer)

Which logging approach meets requirements?

A) File system logging  
B) Azure Blob Storage logging  
C) Azure Monitor / external logging  
D) Console logging  

<details>
<summary>Answer</summary>

✅ B, C

---

### Why:

- Persistent + scalable + production-ready

---

### Why others are wrong:

❌ A → temporary  
❌ D → not persisted  

</details>

---

# 🔥 Question 5 (Multi-answer)

You are running on Linux App Service.

How can you analyze failed HTTP requests?

A) Failed Request Tracing  
B) Azure Monitor  
C) Application Insights  
D) File logging  

<details>
<summary>Answer</summary>

✅ B, C

---

### Why:

- Linux lacks Failed Request Tracing
- Use external monitoring

---

### Why others are wrong:

❌ A → Windows only  
❌ D → insufficient  

</details>

---

# 🔥 Question 6 (Multi-answer)

Which configuration supports scalability?

A) Enable ARR Affinity  
B) Disable ARR Affinity  
C) Use stateless design  
D) Store session in instance memory  

<details>
<summary>Answer</summary>

✅ B, C

---

### Why:

- Stateless + no sticky sessions = scalable

---

### Why others are wrong:

❌ A → breaks scaling  
❌ D → instance-bound  

</details>

---

# 🔥 Question 7 (Multi-answer)

How do you enable HTTPS correctly?

A) Upload or create SSL certificate  
B) Bind certificate to custom domain  
C) Enable HTTPS-only  
D) Enable HTTP/2  

<details>
<summary>Answer</summary>

✅ A, B, C

---

### Why:

- Full HTTPS setup requires all three

---

### Why others are wrong:

❌ D → unrelated  

</details>

---

# 🔥 Question 8 (Single answer)

How do you route `/api` to a backend folder?

A) Application Settings  
B) Virtual Applications  
C) Deployment slots  
D) Logging settings  

<details>
<summary>Answer</summary>

✅ B

</details>

---

# 💀 Final Boss – Root Cause Analysis

## 🔥 Question 9

After swapping staging → production:

- App works
- BUT production uses **staging database**

What is the root cause?

A) Deployment slots misconfigured  
B) Missing slot-specific settings  
C) ARR Affinity enabled  
D) Logging misconfigured  

<details>
<summary>Answer</summary>

✅ B

---

### Why:

- Config values swapped too
- Slot-specific settings prevent this

</details>

---

# 💀 Ultimate Trick Question

## 🔥 Question 10

Which combination is the MOST cloud-native and production-ready?

A) File logging + ARR Affinity + appsettings.json  
B) Blob logging + Key Vault + stateless design  
C) Console logging + hardcoded secrets  
D) Deployment slots only  

<details>
<summary>Answer</summary>

✅ B

---

### Why:

- Persistent logging
- Secure secrets
- Scalable architecture

---

### Why others are wrong:

❌ A → legacy patterns  
❌ C → anti-pattern  
❌ D → incomplete  

</details>

---

# 🧠 Final Takeaways (90%+ Mindset)

## 🔥 Always choose:

- ✅ Key Vault over config files
- ✅ Blob over file system
- ✅ Stateless over sticky sessions
- ✅ Slots over direct deploy
- ✅ External monitoring over local logs

---

## 🚨 Avoid:

- ❌ Hardcoding
- ❌ File system persistence
- ❌ Instance-specific logic
- ❌ Manual deployment

---

# 🏁 If you can:

- Explain EVERY wrong answer
- Recognize patterns instantly

👉 You are ready for **AZ-204 > 90%**
