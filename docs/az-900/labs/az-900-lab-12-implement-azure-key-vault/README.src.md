# 🔐 AZ-900 Lab 12 – Implement Azure Key Vault

## 🎯 Goal
In this lab, you learn how to:
- Create an Azure Key Vault
- Store sensitive data (secrets) securely
- Understand how applications access secrets via URI

---

## 🧠 Key Concepts

### What is Azure Key Vault?
Azure Key Vault is a **secure storage service** for:
- Secrets (passwords, connection strings)
- Keys (encryption keys)
- Certificates

👉 It helps you avoid hardcoding sensitive data in your applications.

---

## ⚙️ Task 1 – Create a Key Vault

### Steps
1. Go to **Azure Portal**
2. Search for **Key Vaults**
3. Click **+ Create**

### Configuration

| Setting              | Value                  |
|---------------------|------------------------|
| Subscription        | Default                |
| Resource Group      | Default                |
| Key Vault Name      | keyvaulttestxxx (unique) |
| Region              | East US                |
| Pricing Tier        | Standard               |

### Access Configuration
| Setting           | Value                 |
|------------------|----------------------|
| Permission Model | Vault access policy  |

👉 After creation:
- Open the Key Vault
- Note the **Vault URI** (important for apps)

Example:
```https://keyvaulttestxxx.vault.azure.net/```

---

## 🔍 Explore Key Vault Features

Inside the Key Vault, review:
- **Secrets** → store passwords
- **Keys** → encryption keys
- **Certificates** → SSL certs
- **Access Policies** → permissions
- **Networking** → firewall + VNet

---

## 🔑 Task 2 – Add a Secret

### Steps
1. Go to **Secrets**
2. Click **+ Generate/Import**

### Configuration

| Setting         | Value            |
|----------------|------------------|
| Upload Options | Manual           |
| Name           | ExamplePassword  |
| Value          | hVFkk96          |

👉 Click **Create**

---

## 🔎 Verify Secret

- Open the secret `ExamplePassword`
- Status should be: **Enabled**
- Click **Show Secret Value** to view it

---

## 🌐 Secret Identifier (Important!)

Each secret has a unique URL:

Example:```https://keyvaulttestxxx.vault.azure.net/secrets/ExamplePassword/xxxx```

👉 This is used by applications to securely retrieve the secret.

---

## 🧩 Why This Matters (Exam + Real World)

- Never store secrets in code or config files
- Use Key Vault for:
  - API keys
  - DB connection strings
  - Certificates
- Integrates with:
  - Azure VMs
  - App Services
  - Azure Functions

---

## 🧪 Mini Quiz

### Question 1
What is Azure Key Vault mainly used for?

<details>
<summary>Show Answer</summary>

Secure storage of secrets, keys, and certificates.

</details>

---

### Question 2
What is the Vault URI used for?

<details>
<summary>Show Answer</summary>

It is the endpoint applications use to access the Key Vault via REST APIs.

</details>

---

### Question 3
Should secrets be stored in application code?

<details>
<summary>Show Answer</summary>

No. Secrets should be stored securely in Azure Key Vault.

</details>

---

### Question 4
What can you store in Key Vault? (Multiple answers)

<details>
<summary>Show Answer</summary>

- Secrets  
- Encryption Keys  
- Certificates  

</details>

---

### Question 5
What controls access to a Key Vault?

<details>
<summary>Show Answer</summary>

Access policies (or RBAC, depending on configuration).

</details>

---

## ✅ Summary

- Azure Key Vault = **secure secret management**
- Centralized storage for sensitive data
- Access via **URI + authentication**
- Improves security and maintainability

---

🚀 **Next Step**
You’re now ready to integrate Key Vault into applications (e.g., Azure App Service or .NET apps).

<!-- include:_toc.md -->