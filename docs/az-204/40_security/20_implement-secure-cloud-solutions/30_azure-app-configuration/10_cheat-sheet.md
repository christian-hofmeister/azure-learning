# Azure App Configuration — AZ-204 Cheat Sheet

# 🎯 Purpose

Centralized configuration management for cloud applications.

Stores:

- application settings
- feature flags
- environment-specific configuration

NOT primarily for secrets.

---

# 🧠 Core Concepts

| Topic | Remember |
|---|---|
| Key-Value Store | Main storage model |
| Labels | Environment/version separation |
| Feature Flags | Enable/disable features dynamically |
| Dynamic Refresh | Update config without restart |
| Sentinel Key | Trigger refresh efficiently |
| Managed Identity | Passwordless authentication |
| Key Vault Reference | Secure secret handling |
| Private Endpoint | Internal-only access |

---

# 🔥 Exam Important

## App Configuration vs Key Vault

| Service | Stores |
|---|---|
| App Configuration | Config/settings |
| Key Vault | Secrets/keys/certs |

---

# 🏷️ Labels

Used for:

- `dev`
- `test`
- `prod`
- deployment slots
- regional configs

Example:

| Key | Label | Value |
|---|---|---|
| `ApiUrl` | `dev` | `https://dev-api` |
| `ApiUrl` | `prod` | `https://prod-api` |

---

# 🚩 Feature Flags

Purpose:

- gradual rollout
- canary deployment
- A/B testing
- disable broken features quickly

NuGet:

`Microsoft.FeatureManagement`

Registration:

```csharp
builder.Services.AddFeatureManagement();
```

---

# 🔄 Dynamic Refresh

Allows runtime config updates.

No redeployment required.

No app restart required.

---

# 🧩 Sentinel Key Pattern

Efficient refresh strategy.

Instead of refreshing all keys constantly:

1. Watch one key
2. If changed → refresh all

Example key:

```text
Settings:Sentinel
```

---

# 🔐 Authentication

## Recommended

Managed Identity

Avoid:

- passwords
- connection strings
- secrets in code

Supported:

- System-assigned
- User-assigned

---

# 🔐 Key Vault Integration

Best practice:

- secrets in Key Vault
- config in App Configuration

App Configuration stores references only.

Example:

```text
@Microsoft.KeyVault(...)
```

---

# ⚙️ ASP.NET Core Integration

NuGet:

`Microsoft.Azure.AppConfiguration.AspNetCore`

Basic setup:

```csharp
builder.Configuration.AddAzureAppConfiguration();
```

Middleware:

```csharp
app.UseAzureAppConfiguration();
```

---

# 🌐 Private Endpoints

Use when:

- enterprise/internal apps
- VNet-only access required
- no public internet exposure

---

# 🔐 Encryption

Default:

- Microsoft-managed keys

Optional:

- Customer-managed keys (CMK)
- via Azure Key Vault

---

# 📦 Important NuGet Packages

| Package | Purpose |
|---|---|
| `Microsoft.Extensions.Configuration.AzureAppConfiguration` | Core integration |
| `Microsoft.Azure.AppConfiguration.AspNetCore` | ASP.NET Core integration |
| `Microsoft.FeatureManagement` | Feature flags |

---

# ⚠️ Common Exam Traps

## ❌ App Configuration stores secrets

Better:

- use Key Vault references

---

## ❌ Feature flags require redeployment

False.

Feature flags work dynamically.

---

## ❌ App restart required after config changes

False.

Dynamic refresh exists.

---

## ❌ Confusing labels with feature flags

| Labels | Feature Flags |
|---|---|
| Environment/version separation | Enable/disable functionality |

---

# 🚀 Typical Architecture

```text
App
 ↓
Azure App Configuration
 ↓
Key Vault Reference
 ↓
Azure Key Vault
```

---

# 🧠 Fast Memory Tricks

| Topic | Memory Trick |
|---|---|
| Labels | "Same key, different environments" |
| Sentinel Key | "One key refreshes everything" |
| Feature Flags | "Deploy once, enable later" |
| Managed Identity | "No passwords" |
| Key Vault Reference | "Secrets stay in Key Vault" |
| Dynamic Refresh | "No restart needed" |

---

# ✅ Most Important Things for AZ-204

Know:

- labels
- feature flags
- managed identities
- Key Vault references
- dynamic refresh
- sentinel keys
- App Configuration vs Key Vault
- private endpoints
- ASP.NET Core integration