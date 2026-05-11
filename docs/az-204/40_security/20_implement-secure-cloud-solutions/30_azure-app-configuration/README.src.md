---

<!-- include:_toc.md -->

---

# Azure App Configuration (AZ-204)

## 🎯 What is Azure App Configuration?

Azure App Configuration is a managed Azure service for storing and centrally managing application configuration data.

Typical use cases:

- Centralized configuration management
- Feature flags
- Environment-specific settings
- Dynamic configuration updates
- Secure application settings
- Multi-service / microservice configuration

---

# 🧠 Core Concepts

| Concept | Description |
|---|---|
| Key-Value Store | Stores application settings as key-value pairs |
| Labels | Used for versioning or environments (`dev`, `test`, `prod`) |
| Feature Flags | Enable/disable features without redeployment |
| Configuration Refresh | Applications can refresh settings dynamically |
| Managed Identity | Secure authentication without secrets |
| Key Vault References | Store secrets securely in Azure Key Vault |
| Point-in-Time Snapshot | Restore or view historical configuration |

---

# 📦 Key Features

## Centralized Configuration

Instead of storing config in:

- `appsettings.json`
- environment variables
- local files

you store them centrally in Azure App Configuration.

Example:

| Key | Value |
|---|---|
| `App:Title` | `POIneer` |
| `App:Theme` | `Dark` |
| `ConnectionStrings:Api` | `https://api.example.com` |

---

# 🏷️ Labels

Labels allow multiple versions of the same key.

Example:

| Key | Label | Value |
|---|---|---|
| `ApiUrl` | `dev` | `https://dev-api` |
| `ApiUrl` | `prod` | `https://prod-api` |

Useful for:

- environments
- deployment slots
- regional configs
- blue/green deployments

---

# 🚩 Feature Flags

Feature flags allow enabling/disabling functionality without redeployment.

Example:

| Feature | Enabled |
|---|---|
| `NewMapRenderer` | true |
| `ExperimentalSearch` | false |

Benefits:

- safer rollouts
- A/B testing
- canary releases
- gradual deployment

---

# 🔐 Azure Key Vault Integration

Secrets should NOT be stored directly in App Configuration.

Instead:

- store secrets in Azure Key Vault
- App Configuration stores references to the secrets

Example:

| Key | Value |
|---|---|
| `DbPassword` | `@Microsoft.KeyVault(...)` |

Benefits:

- separation of concerns
- better security
- secret rotation
- RBAC integration

---

# 🔑 Authentication Options

## Recommended: Managed Identity

Applications authenticate securely without passwords or connection strings.

Supported:

- System-assigned managed identity
- User-assigned managed identity

Typical flow:

1. App authenticates with Managed Identity
2. Azure AD issues token
3. App accesses App Configuration
4. App retrieves configuration

---

# 🔄 Dynamic Configuration Refresh

Applications can reload configuration at runtime.

Benefits:

- no redeployment required
- no restart required
- live feature toggling

Typical refresh trigger:

- timer
- request pipeline
- sentinel key

---

# 🧩 Sentinel Key Pattern

A common refresh pattern.

Instead of refreshing every key:

1. App watches one special key
2. If sentinel changes → refresh all config

Example:

| Key | Value |
|---|---|
| `Settings:Sentinel` | `42` |

Efficient and exam-relevant.

---

# 🧪 Feature Management in .NET

NuGet package:

`Microsoft.FeatureManagement`

Example registration:

```csharp
builder.Services.AddFeatureManagement();
```

Example usage:

```csharp
[FeatureGate("NewFeature")]
public class ExperimentalController : Controller
{
}
```

---

# ⚙️ ASP.NET Core Integration

Typical package:

`Microsoft.Azure.AppConfiguration.AspNetCore`

Example setup:

```csharp
builder.Configuration.AddAzureAppConfiguration(options =>
{
    options.Connect(connectionString)
           .Select("*")
           .UseFeatureFlags();
});
```

Middleware:

```csharp
app.UseAzureAppConfiguration();
```

---

# 🔄 Configuration Refresh Example

```csharp
builder.Configuration.AddAzureAppConfiguration(options =>
{
    options.Connect(connectionString)
        .ConfigureRefresh(refresh =>
        {
            refresh.Register("Settings:Sentinel", refreshAll: true)
                   .SetCacheExpiration(TimeSpan.FromSeconds(30));
        });
});
```

---

# 🔐 Encryption

Azure App Configuration encrypts data at rest automatically.

Default:

- Microsoft-managed keys

Optional:

- Customer-managed keys (CMK) via Azure Key Vault

Exam detail:

- App Configuration uses Managed Identity to access Key Vault
- Encryption keys are wrapped/unwrapped through Key Vault

---

# 🌐 Private Endpoints

Azure App Configuration supports Private Endpoints.

Benefits:

- no public internet exposure
- internal VNet-only access
- enterprise security scenarios

Useful when:

- backend APIs run inside VNets
- financial or healthcare systems
- high-security enterprise apps

---

# 📊 Pricing Tiers

| Tier | Purpose |
|---|---|
| Free | Development/testing |
| Standard | Production workloads |

Standard tier includes:

- higher request quotas
- geo-replication
- SLA
- private endpoints

---

# 🧠 Common AZ-204 Exam Topics

## Know the difference:

| Service | Purpose |
|---|---|
| App Configuration | Configuration values |
| Key Vault | Secrets/certificates/keys |

---

## Understand:

- labels
- feature flags
- dynamic refresh
- sentinel keys
- managed identities
- Key Vault references
- RBAC access
- private endpoints

---

# ⚠️ Exam Traps

## ❌ Store secrets directly in App Configuration

Better:

- use Key Vault references

---

## ❌ Confusing App Configuration with Key Vault

Remember:

| Service | Stores |
|---|---|
| App Configuration | config/settings |
| Key Vault | secrets/keys/certs |

---

## ❌ Assuming app restart is required

Dynamic refresh allows runtime updates.

---

## ❌ Feature flags require redeployment

False.

Feature flags work dynamically.

---

# 📚 Important NuGet Packages

| Package | Purpose |
|---|---|
| `Microsoft.Extensions.Configuration.AzureAppConfiguration` | Core integration |
| `Microsoft.Azure.AppConfiguration.AspNetCore` | ASP.NET Core support |
| `Microsoft.FeatureManagement` | Feature flags |

---

# 🧠 Quick Exam Cheat Sheet

| Topic | Remember |
|---|---|
| Labels | Environment/version separation |
| Feature Flags | Toggle features dynamically |
| Sentinel Key | Efficient refresh trigger |
| Managed Identity | Passwordless authentication |
| Key Vault Reference | Secure secret storage |
| Dynamic Refresh | Runtime config updates |
| Private Endpoint | Internal-only access |
| CMK | Customer-managed encryption keys |

---

# 🚀 Typical Architecture

```text
Application
    ↓
Azure App Configuration
    ↓
Key Vault Reference
    ↓
Azure Key Vault
```

---

# 🧠 Best Practices

- Use Managed Identity
- Store secrets in Key Vault
- Use labels for environments
- Use feature flags for rollout strategies
- Use sentinel keys for refresh
- Enable private endpoints for enterprise workloads
- Avoid hardcoded configuration

---

# ✅ Summary

Azure App Configuration is designed for:

- centralized configuration
- dynamic updates
- feature management
- cloud-native applications
- secure configuration handling

It integrates closely with:

- Azure Key Vault
- Managed Identity
- ASP.NET Core
- Azure App Service
- Kubernetes
- Microservices architectures

---

<!-- include:_toc.md -->

---