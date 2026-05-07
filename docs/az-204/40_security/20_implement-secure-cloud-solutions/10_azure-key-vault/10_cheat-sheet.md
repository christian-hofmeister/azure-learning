# Azure Key Vault — AZ-204 Cheat Sheet

# 📌 Core Idea

Azure Key Vault securely stores:
- secrets
- keys
- certificates

Used for:
- passwords
- API keys
- encryption keys
- TLS certificates

---

# 🔐 Object Types

| Type | Use |
|---|---|
| Secret | password/API key |
| Key | encryption/signing |
| Certificate | TLS/SSL |

---

# 🪪 Authentication

Recommended:
- Managed Identity

Alternative:
- Service Principal
- Client Secret
- Certificate

---

# 🛡 Managed Identity

Best Azure-native authentication method.

Benefits:
- no secrets stored
- automatic credential management

🧠 Exam Trigger:
"secure Azure authentication"

---

# 🔑 Authorization

## Recommended
✅ Azure RBAC

## Legacy
⚠️ Access Policies

---

# 🧠 Important RBAC Roles

| Role | Purpose |
|---|---|
| Key Vault Administrator | full access |
| Key Vault Secrets User | read secrets |
| Key Vault Reader | metadata only |

---

# 📦 Important SDKs

Install:

```bash
dotnet add package Azure.Security.KeyVault.Secrets
dotnet add package Azure.Identity
```

---

# 💡 Read Secret Example

```csharp
var client = new SecretClient(
    new Uri("https://myvault.vault.azure.net/"),
    new DefaultAzureCredential());

KeyVaultSecret secret =
    await client.GetSecretAsync("SqlPassword");
```

---

# 🔐 DefaultAzureCredential

Automatically tries:
- Visual Studio
- Azure CLI
- Managed Identity
- environment credentials

🧠 Same code:
- local dev
- Azure

---

# 🛡 Soft Delete

Protects against:
- accidental deletion

Deleted items:
- recoverable

---

# 🔒 Purge Protection

Prevents:
- permanent deletion

Important for:
- compliance/security

---

# 🔄 Key Rotation

Key Vault supports:
- automatic rotation

Used for:
- improved security

---

# 🌍 Networking

Can restrict access using:
- firewall
- virtual network
- private endpoint

---

# 📌 High-Value Exam Facts

## Store passwords?
✅ Secret

---

## Store encryption keys?
✅ Key

---

## Store TLS certificate?
✅ Certificate

---

## Secure Azure-to-KeyVault auth?
✅ Managed Identity

---

## Recommended authorization?
✅ Azure RBAC

---

## Recover deleted secret?
✅ Soft Delete

---

## Prevent permanent deletion?
✅ Purge Protection

---

# 🚨 Common Exam Traps

| Trap | Correct Answer |
|---|---|
| store password in appsettings.json | ❌ |
| store secrets in source code | ❌ |
| use Managed Identity + Key Vault | ✅ |
| use DefaultAzureCredential | ✅ |

---

# 🧾 Ultra Short Memory Aids

| Topic | Memory Aid |
|---|---|
| Secret | password |
| Key | crypto |
| Certificate | TLS |
| Managed Identity | no secrets |
| RBAC | recommended |
| Access Policies | legacy |
| Soft Delete | recover |
| Purge Protection | cannot permanently delete |
| DefaultAzureCredential | automatic auth |

---

# 🏁 AZ-204 Focus Areas

Most important:
- Managed Identity
- DefaultAzureCredential
- RBAC
- SecretClient
- Soft Delete
- Purge Protection
- secure secret storage
- Key Vault object types