# 🧠 AZ-204 Hard Mode – Configure Web App Settings

## ❗ Instructions

- Try to answer **before expanding**
- Multiple answers can be correct
- Focus on **why others are wrong**

---

## 🔥 Question 1

You are configuring an Azure App Service.  
You need to store a database connection string securely and ensure it can be changed without redeploying the application.

What should you use?

<details>
<summary>Answer</summary>

✅ Application Settings

### Explanation:
- Stored as environment variables
- Can be changed without redeployment
- Encrypted at rest

❌ appsettings.json → requires redeployment  
❌ Hardcoding → insecure

</details>

---

## 🔥 Question 2

You update an application setting in Azure App Service.  
What is the immediate effect?

<details>
<summary>Answer</summary>

✅ The app restarts automatically

### Explanation:
- Any config change triggers restart
- Includes app settings, connection strings, general settings

❌ No restart → wrong (common trap)

</details>

---

## 🔥 Question 3

Your application is stateless and scaled out across multiple instances.  
Users report inconsistent behavior due to session data.

What should you do?

<details>
<summary>Answer</summary>

❌ Enable ARR Affinity (WRONG in this scenario)

✅ Correct solution:
- Disable ARR Affinity
- Use external session storage (e.g., Redis)

### Explanation:
- ARR = sticky sessions → not scalable
- Stateless apps should NOT rely on instance affinity

</details>

---

## 🔥 Question 4

You need persistent logging for production diagnostics.

Which option should you choose?

<details>
<summary>Answer</summary>

✅ Azure Blob Storage

### Explanation:
- File system logs are temporary
- Blob storage is persistent and scalable

❌ File system logging → lost on restart

</details>

---

## 🔥 Question 5

Which logging feature is NOT supported on Linux App Service?

<details>
<summary>Answer</summary>

❌ Failed Request Tracing

### Explanation:
- Only available on Windows
- Classic exam trap

</details>

---

## 🔥 Question 6

You configure SSL for your web app.  
What is required before binding a certificate?

<details>
<summary>Answer</summary>

✅ A custom domain

### Explanation:
- Certificates are bound to domains, not default *.azurewebsites.net

</details>

---

## 🔥 Question 7

You want to test a new configuration in staging without affecting production.

What should you use?

<details>
<summary>Answer</summary>

✅ Deployment slots + slot settings

### Explanation:
- Slot-specific settings prevent value swap
- Safe testing before production swap

</details>

---

## 🔥 Question 8

Which of the following will trigger an app restart?

A) Changing application settings  
B) Changing general settings  
C) Updating code via deployment  
D) Changing diagnostic logging settings  

<details>
<summary>Answer</summary>

✅ A, B, C

### Explanation:
- Most config + deployment changes restart app
- Logging changes may NOT always restart (depends on type)

</details>

---

## 🔥 Question 9

You need to map `/api` to a specific folder in your App Service.

What feature should you use?

<details>
<summary>Answer</summary>

✅ Virtual Applications

### Explanation:
- Maps URL path → physical directory

</details>

---

## 🔥 Question 10

You want to store secrets securely and rotate them centrally.

What is the BEST solution?

<details>
<summary>Answer</summary>

✅ Azure Key Vault

### Explanation:
- Central secret management
- Integrates with App Service

❌ App settings → less secure for secrets at scale

</details>

---

# 💀 Mini Mock Exam (Very Close to Real AZ-204)

## Question 11

Your App Service runs on Linux.  
You need to analyze failed HTTP requests in detail.

What should you do?

A) Enable Failed Request Tracing  
B) Enable Application Logging  
C) Use Azure Monitor / external logging  
D) Enable Web Server Logging  

<details>
<summary>Answer</summary>

✅ C

### Explanation:
- Failed Request Tracing not supported on Linux
- Must use external monitoring tools

</details>

---

## Question 12

You want to ensure your app is always responsive and never goes idle.

What should you configure?

<details>
<summary>Answer</summary>

✅ Always On

### Explanation:
- Prevents cold starts
- Required for background tasks

</details>

---

## Question 13

Which statements are TRUE about Application Settings?

A) Stored as environment variables  
B) Require redeployment to change  
C) Can be slot-specific  
D) Are encrypted  

<details>
<summary>Answer</summary>

✅ A, C, D

❌ B is wrong

</details>

---

## Question 14

What is the main disadvantage of ARR Affinity?

<details>
<summary>Answer</summary>

✅ Breaks true scalability

### Explanation:
- Requests tied to one instance
- Not ideal for distributed systems

</details>

---

## Question 15

You enable file system logging in production.

What is the risk?

<details>
<summary>Answer</summary>

✅ Logs are temporary and may be lost

### Explanation:
- Not persisted across restarts
- Not suitable for production diagnostics

</details>