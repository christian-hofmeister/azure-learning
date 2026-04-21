# 🧠 AZ-204 Case Study – App Service Configuration

## 📘 Scenario

You are developing a cloud-based web application hosted on **Azure App Service (Linux)**.

The application has the following requirements:

- Must store **secrets securely**
- Must support **zero-downtime deployments**
- Must provide **persistent logging**
- Must be **highly scalable**
- Must support **custom domain with HTTPS**
- Must allow **testing in staging without affecting production**
- Must allow **API routing under `/api` path**

---

## 🔥 Question 1

You need to store database credentials securely and support rotation.

What should you implement?

A) Store credentials in appsettings.json  
B) Use Application Settings  
C) Use Azure Key Vault  
D) Store credentials in code  

<details>
<summary>Answer</summary>

✅ C

---

### Why:
- Key Vault = centralized, secure, rotation support

---

### Why others are wrong:

❌ A → not secure, requires redeploy  
❌ B → better, but not ideal for secrets at scale  
❌ D → worst practice  

</details>

---

## 🔥 Question 2

You need zero-downtime deployments.

What should you use?

A) Restart the app after deployment  
B) Deployment slots  
C) Manual deployment at night  
D) Scale out before deployment  

<details>
<summary>Answer</summary>

✅ B

---

### Why:
- Staging slot → validate → swap → no downtime

---

### Why others are wrong:

❌ A → causes downtime  
❌ C → not reliable strategy  
❌ D → does not prevent downtime  

</details>

---

## 🔥 Question 3

You need persistent logging.

What should you use?

A) File system logging  
B) Azure Blob Storage  
C) Console logging  
D) Debug mode  

<details>
<summary>Answer</summary>

✅ B

---

### Why:
- Persistent + production-ready

---

### Why others are wrong:

❌ A → temporary  
❌ C → not persisted  
❌ D → not a storage solution  

</details>

---

## 🔥 Question 4

You need to ensure high scalability.

What should you avoid?

A) Deployment slots  
B) ARR Affinity  
C) Blob storage  
D) Always On  

<details>
<summary>Answer</summary>

✅ B

---

### Why:
- Sticky sessions break scalability

---

### Why others are wrong:

❌ A → deployment feature  
❌ C → no impact  
❌ D → recommended  

</details>

---

## 🔥 Question 5

You must enable HTTPS for a custom domain.

What is required?

A) SSL certificate  
B) Custom domain  
C) Azure Key Vault  
D) HTTP/2  

<details>
<summary>Answer</summary>

✅ A, B

---

### Why:

- Certificate must be bound to a custom domain

---

### Why others are wrong:

❌ C → optional (management only)  
❌ D → unrelated  

</details>

---

## 🔥 Question 6

You need to test configuration changes without impacting production.

What should you configure?

A) Deployment slots  
B) Slot-specific settings  
C) Production config directly  
D) Separate App Service  

<details>
<summary>Answer</summary>

✅ A, B

---

### Why:

- Slots isolate environment
- Slot settings prevent config swap issues

---

### Why others are wrong:

❌ C → risky  
❌ D → possible but overkill for this scenario  

</details>

---

## 🔥 Question 7

You need to route `/api` requests to a specific folder.

What should you use?

A) Application Settings  
B) Virtual Applications  
C) Deployment slots  
D) Logging configuration  

<details>
<summary>Answer</summary>

✅ B

---

### Why:

- Maps URL path → directory

---

### Why others are wrong:

❌ A → config only  
❌ C → deployment only  
❌ D → unrelated  

</details>

---

## 🔥 Question 8

You are running on Linux App Service.

You need to analyze failed HTTP requests in detail.

What should you do?

A) Enable Failed Request Tracing  
B) Use Azure Monitor / external logging  
C) Enable file logging  
D) Enable ARR Affinity  

<details>
<summary>Answer</summary>

✅ B

---

### Why:

- Failed Request Tracing not supported on Linux

---

### Why others are wrong:

❌ A → Windows only  
❌ C → insufficient  
❌ D → unrelated  

</details>

---

# 💀 Final Boss Question

## 🔥 Question 9 (Multi-layer thinking)

You deploy a new version to staging slot.  
After swap, production starts using **wrong connection strings**.

What is the root cause?

A) Missing deployment slot  
B) Missing slot-specific settings  
C) ARR Affinity enabled  
D) Logging misconfiguration  

<details>
<summary>Answer</summary>

✅ B

---

### Why:

- Without slot settings → config swaps too
- Production gets staging values

---

### Why others are wrong:

❌ A → slots exist  
❌ C → unrelated  
❌ D → unrelated  

</details>

---

# 🧠 What You Just Practiced

- 🔁 Config vs Deployment vs Runtime
- 🔐 Security vs Convenience
- ⚖️ Scalability trade-offs
- 🧩 Multi-layer reasoning (VERY exam relevant)

---

# 🏁 If this felt:

- 😐 easy → you are already strong
- 😅 medium → perfect learning zone
- 🤯 hard → exactly what you need before exam
