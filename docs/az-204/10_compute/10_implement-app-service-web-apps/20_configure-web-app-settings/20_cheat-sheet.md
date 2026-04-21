# ⚡ Configure Web App Settings – Cheat Sheet (AZ-204)

## 🎯 Core Idea

Azure App Service settings allow you to configure:
- Runtime behavior
- Security
- Logging
- App structure

➡️ **Without changing code**

---

## ⚙️ Application Settings

- Key-value pairs
- Exposed as **environment variables**
- Override `appsettings.json`

### 🔑 Key Facts

- 🔁 Change = **App restart**
- 🔒 Encrypted at rest
- 🔀 Can be **slot-specific**

---

## ⚙️ General Settings

| Setting | Key Point |
|--------|----------|
| Always On | Prevents app sleep |
| ARR Affinity | Sticky sessions |
| WebSockets | Real-time support |
| Platform | 32-bit / 64-bit |
| HTTP Version | HTTP/1.1 / HTTP/2 |

👉 ARR = **Application Request Routing**

---

## 📁 Path Mappings

### Types

- **Virtual Applications**
  - URL → physical path

- **Virtual Directories**
  - Folder alias

### Use Cases

- Multiple apps in one App Service
- Legacy structures

---

## 📊 Diagnostic Logging

### Types

- Application logs
- Web server logs
- Error pages
- Failed request tracing
- Deployment logs

---

### Storage

- 📁 File system → temporary
- ☁️ Blob storage → persistent ✅

---

## ⚠️ Windows vs Linux (EXAM!)

| Feature | Windows | Linux |
|--------|--------|--------|
| App Logging (file) | ✅ | ❌ |
| App Logging (blob) | ✅ | ✅ |
| Web Server Logs | ✅ | ✅ |
| Failed Request Tracing | ✅ | ❌ |

👉 Linux = **limited logging**

---

## 🔐 Certificates (SSL/TLS)

### Types

- Free managed cert
- Uploaded cert (PFX)
- Key Vault cert

### Key Features

- HTTPS-only mode
- TLS version control
- SNI-based SSL (default)
- IP-based SSL (requires dedicated IP)

---

## 🔁 Restart Triggers

App restarts when:

- App settings change
- Connection strings change
- General settings change

---

## 🧠 Exam Traps

- ❗ App settings = **environment variables**
- ❗ Change = **restart**
- ❗ File logging = **temporary**
- ❗ Blob logging = **persistent**
- ❗ ARR Affinity = sticky sessions
- ❗ Linux ≠ Windows logging
- ❗ Certificates require **custom domain**
- ❗ Always On needed for background tasks

---

## 🚀 Best Practices

- Use **environment variables**
- Store secrets in **Azure Key Vault**
- Use **deployment slots**
- Log to **Blob Storage**
- Enable diagnostics before production

---

## ⚡ 10-Second Recall

- App settings → env vars
- Change → restart
- ARR → sticky session
- Blob logs → production
- Linux → fewer features
- Certs → custom domain