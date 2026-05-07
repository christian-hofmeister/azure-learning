---

<!-- include:_toc.md -->

---

# Azure Key Vault (AZ-204)

# 📌 What is Azure Key Vault?

Azure Key Vault is a managed Azure service for securely storing and accessing:

- Secrets
- Keys
- Certificates

Typical use cases:
- connection strings
- API keys
- database passwords
- signing/encryption keys
- TLS/SSL certificates

---

# 🧠 Core Idea

Instead of storing secrets:
- in source code
- in config files
- in repositories

Applications retrieve them securely from:
- Azure Key Vault

---

# 🔐 Supported Object Types

## Secrets

Examples:
- passwords
- connection strings
- API keys

Stored as:
- name/value pairs

Example:

```text
SqlConnectionString
```

---

## Keys

Used for:
- encryption
- signing
- cryptographic operations

Supported:
- RSA
- EC
- software or HSM-backed keys

---

## Certificates

Used for:
- TLS/SSL
- authentication

Key Vault can:
- generate
- import
- renew
- manage certificates

---

# 🪪 Authentication

Applications authenticate using:
- Microsoft Entra ID

Recommended:
- Managed Identities

---

# 🛡 Managed Identity + Key Vault

Best practice for Azure-hosted apps.

Example:
- Azure Function
- App Service
- VM
- Container App

Benefits:
- no secrets stored
- automatic credential rotation

---

# 🔑 Authorization Models

## Access Policies (legacy)

Vault-specific permissions.

Examples:
- get
- list
- set
- delete

Older model.

---

## Azure RBAC (recommended)

Uses Azure role assignments.

Examples:
- Key Vault Secrets User
- Key Vault Administrator

Modern approach.

---

# 📦 Typical Secret Flow

```text
Application
    ↓
Managed Identity
    ↓
Azure Entra ID token
    ↓
Azure Key Vault
    ↓
Retrieve Secret
```

---

# 📚 Important SDK Package

```bash
dotnet add package Azure.Security.KeyVault.Secrets
```

Authentication package:

```bash
dotnet add package Azure.Identity
```

---

# 💡 Example: Read Secret (.NET)

```csharp
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var client = new SecretClient(
    new Uri("https://myvault.vault.azure.net/"),
    new DefaultAzureCredential());

KeyVaultSecret secret =
    await client.GetSecretAsync("SqlPassword");

Console.WriteLine(secret.Value);
```

---

# 🔐 DefaultAzureCredential

Very important for AZ-204.

Automatically tries:
- Visual Studio login
- Azure CLI login
- Managed Identity
- environment variables

Benefits:
- same code locally + Azure

---

# 🛡 Soft Delete

Protects against accidental deletion.

Deleted objects:
- recoverable for retention period

Enabled by default.

---

# 🔒 Purge Protection

Prevents permanent deletion.

Even admins cannot immediately purge objects.

Often required for:
- enterprise/security compliance

---

# 🔄 Key Rotation

Key Vault supports:
- automatic key rotation

Benefits:
- improved security
- reduced operational effort

---

# 📜 Certificates

Key Vault can:
- store certificates
- auto-renew certificates
- integrate with certificate authorities

---

# 🌍 Networking

Key Vault can restrict access via:
- firewall rules
- virtual networks
- private endpoints

---

# 🔑 Encryption

Data protected using:
- encryption at rest
- HSM-backed keys (optional)

---

# 🧠 Azure RBAC Roles

| Role | Purpose |
|---|---|
| Key Vault Administrator | full management |
| Key Vault Secrets User | read secrets |
| Key Vault Crypto User | cryptographic operations |
| Key Vault Reader | metadata only |

---

# ⚠️ Common AZ-204 Exam Topics

## Managed Identity + Key Vault

Most important combination.

🧠 Exam Trigger:
"securely access secrets without storing credentials"

✅ Use:
- Managed Identity
- Key Vault

---

## DefaultAzureCredential

Preferred credential approach.

Works:
- locally
- in Azure

---

## Soft Delete

Protects against:
- accidental deletion

---

## RBAC vs Access Policies

Modern recommendation:
- Azure RBAC

---

## Certificates

Key Vault can manage:
- TLS/SSL certificates

---

# 🚀 Typical AZ-204 Scenarios

## Scenario 1

A web app needs a SQL password.

✅ Store:
- password in Key Vault

✅ Access via:
- Managed Identity

---

## Scenario 2

A Function App signs JWT tokens.

✅ Store:
- cryptographic key in Key Vault

---

## Scenario 3

A company wants automatic TLS certificate renewal.

✅ Use:
- Key Vault certificates

---

# 🧾 Quick Cheat Sheet

| Topic | Important |
|---|---|
| Secrets | passwords/API keys |
| Keys | encryption/signing |
| Certificates | TLS/SSL |
| Managed Identity | no secrets |
| DefaultAzureCredential | preferred auth |
| Soft Delete | recover deleted objects |
| Purge Protection | prevent permanent deletion |
| RBAC | recommended authorization |
| SecretClient | access secrets |
| Azure.Identity | authentication library |

---

# 🏁 Final Exam Tips

Focus especially on:
- Managed Identity
- DefaultAzureCredential
- RBAC
- Soft Delete
- Purge Protection
- SecretClient SDK
- Key Vault object types
- secure secret storage patterns

---

<!-- include:_toc.md -->

---
