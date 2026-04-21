# 📄 Configure Web App Settings – Notes (AZ-204)

## 📌 Overview

Azure App Service provides multiple configuration layers to control runtime behavior, security, logging, and application structure **without modifying code**.

These settings are critical for:
- Environment-specific configuration
- Secure deployments
- Troubleshooting and diagnostics
- Runtime behavior control

---

## ⚙️ Configure Application Settings

### 🔹 What are Application Settings?

- Key-value pairs stored in App Service
- Exposed to the app as **environment variables**
- Used for:
  - Connection strings
  - API keys
  - Feature flags

### 🔹 Key Characteristics

- Encrypted at rest
- Can be **slot-specific**
- Override values in `appsettings.json`

### 🔹 Example

```
ConnectionString=Server=...
FeatureXEnabled=true
```

### 🔹 Important Concepts (Exam!)

- Settings are injected as **environment variables**
- Changing settings → **triggers app restart**
- Use **slot settings** for staging/production separation

---

## ⚙️ Configure General Settings

### 🔹 Key Options

| Setting | Description |
|--------|------------|
| Stack Settings | .NET, Node.js, Java, PHP version |
| Platform | 32-bit or 64-bit |
| WebSockets | Enable real-time communication |
| Always On | Prevent app from sleeping |
| ARR Affinity | Sticky sessions |
| HTTP Version | HTTP/1.1 or HTTP/2 |

### 🔹 Important Notes

- **Always On** → required for background jobs
- **ARR Affinity**:
  - Routes user to same instance
  - Disable for stateless apps

👉 ARR = **Application Request Routing**

---

## 📁 Configure Path Mappings

### 🔹 What are Path Mappings?

Define how file paths are mapped inside the App Service environment.

### 🔹 Types

#### 1. Virtual Applications
- Map URL path → physical directory

Example:
```
/api → site\wwwroot\api
```

#### 2. Virtual Directories
- Alias for a folder

---

### 🔹 Use Cases

- Hosting multiple apps under one App Service
- Separating frontend/backend paths
- Legacy app structures

---

## 📊 Enable Diagnostic Logging

### 🔹 Types of Logging

| Type | Description |
|------|-------------|
| Application Logging | Logs from app code |
| Web Server Logging | HTTP request logs |
| Detailed Error Messages | HTML error pages |
| Failed Request Tracing | Debug failed requests |
| Deployment Logging | Deployment activity |

---

### 🔹 Storage Options

- File system (temporary)
- Azure Blob Storage (persistent)

---

### 🔹 Platform Differences (Exam Trap!)

| Feature | Windows | Linux |
|--------|--------|--------|
| Application Logging (file) | ✅ | ❌ |
| Application Logging (blob) | ✅ | ✅ |
| Web Server Logging | ✅ | ✅ |
| Failed Request Tracing | ✅ | ❌ |

👉 Linux has **limited logging capabilities**

---

### 🔹 Important Notes

- File system logs are **temporary**
- Blob storage is recommended for production
- Logging can impact performance

---

## 🔐 Configure Security Certificates

### 🔹 Purpose

Secure communication using **SSL/TLS**

---

### 🔹 Types of Certificates

| Type | Description |
|------|-------------|
| Free App Service Managed Certificate | Basic SSL (no wildcard) |
| Upload Certificate | Custom cert (PFX) |
| Key Vault Certificate | Managed via Azure Key Vault |

---

### 🔹 TLS/SSL Features

- HTTPS-only enforcement
- Minimum TLS version (e.g., TLS 1.2)
- SNI-based SSL (default)
- IP-based SSL (dedicated IP required)

---

### 🔹 Important Concepts (Exam!)

- Certificates are bound to **custom domains**
- Use **Key Vault** for secure management
- HTTPS can be enforced via setting

---

## 🔁 App Configuration Behavior

### 🔹 Restart Triggers

App restarts when:
- App settings change
- Connection strings change
- General settings modified

---

### 🔹 Best Practices

- Use **environment variables** instead of hardcoding
- Store secrets in **Azure Key Vault**
- Use **deployment slots** for safe config changes
- Enable **diagnostics in staging first**

---

## ⚠️ Exam Traps & Key Points

- App settings = **environment variables**
- Changes → **restart app**
- ARR Affinity = sticky sessions
- Linux ≠ Windows logging features
- File logging = **temporary**
- Blob logging = **persistent**
- Certificates require **custom domain**
- Always On needed for background processes

---

## 🧠 Mini Self-Test

<details>
<summary>1. What happens when you change an application setting?</summary>

✅ The app restarts automatically

</details>

<details>
<summary>2. Where are application settings exposed inside the app?</summary>

✅ As environment variables

</details>

<details>
<summary>3. Which logging type is NOT supported on Linux?</summary>

❌ Failed Request Tracing

</details>

<details>
<summary>4. What is ARR Affinity used for?</summary>

✅ Sticky sessions (same instance routing)

</details>

<details>
<summary>5. What is the recommended storage for production logs?</summary>

✅ Azure Blob Storage

</details>