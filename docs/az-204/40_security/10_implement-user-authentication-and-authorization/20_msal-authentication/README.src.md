---

<!-- include:_toc.md -->

---

# Implement authentication by using the Microsoft Authentication Library (MSAL)

## 🎯 Overview

This module covers how to implement authentication in applications using the Microsoft Authentication Library (MSAL).  
MSAL enables secure sign-in and token acquisition from the Microsoft identity platform (Azure AD / Entra ID).

---

## 🔐 Core Concepts

### Microsoft Identity Platform
- Issues **tokens** (not passwords) for authentication and authorization
- Supports:
  - Users (delegated access)
  - Applications (app-only access)

### Tokens
- **Access Token** → used to call APIs (e.g., Microsoft Graph)
- **ID Token** → contains user identity information
- **Refresh Token** → used to obtain new access tokens

---

## 📦 What is MSAL?

MSAL (Microsoft Authentication Library) is used to:

- Sign in users
- Acquire tokens securely
- Handle token caching automatically
- Support multiple authentication flows

👉 Replaces:
- ❌ ADAL (deprecated)
- ❌ Azure AD Graph  
- ✅ Use MSAL + Microsoft Graph instead

---

## 🏗️ Application Types

MSAL supports different app types:

| App Type              | Example                  | Flow                        |
|----------------------|--------------------------|-----------------------------|
| Public Client        | Desktop, Mobile, SPA     | Interactive login           |
| Confidential Client  | Web apps, APIs           | Client credentials / OBO    |

---

## 🔑 Initialize Client Applications

### Public Client (e.g., Desktop App)

```csharp
var app = PublicClientApplicationBuilder
    .Create(clientId)
    .WithAuthority(AzureCloudInstance.AzurePublic, tenantId)
    .WithRedirectUri("http://localhost")
    .Build();
```

### Confidential Client (e.g., Web API)

```csharp
var app = ConfidentialClientApplicationBuilder
    .Create(clientId)
    .WithClientSecret(clientSecret)
    .WithAuthority(new Uri(authority))
    .Build();
```

---

## 🔄 Authentication Flows (Exam Important!)

### 1. Interactive Flow (User Login)

```csharp
var result = await app.AcquireTokenInteractive(scopes).ExecuteAsync();
```

---

### 2. Silent Flow

```csharp
var result = await app.AcquireTokenSilent(scopes, account).ExecuteAsync();
```

---

### 3. Client Credentials Flow (App-to-App)

```csharp
var result = await app.AcquireTokenForClient(scopes).ExecuteAsync();
```

---

### 4. On-Behalf-Of Flow (OBO)

```csharp
var result = await app.AcquireTokenOnBehalfOf(scopes, userAssertion).ExecuteAsync();
```

---

## 🧠 Token Caching

- MSAL caches tokens automatically
- Always try:
  1. `AcquireTokenSilent`
  2. fallback to interactive flow

---

## 🔐 Scopes & Permissions

Example scope:

```
https://graph.microsoft.com/User.Read
```

### Types:
- **Delegated permissions** → user context
- **Application permissions** → app-only (admin consent required)

---

## ⚠️ Admin Consent (Exam Trap!)

- Required for **high-privilege permissions**
- Granted:
  - per user OR
  - for entire organization

👉 Permissions must still be configured in App Registration!

---

## 🧪 Exercise Summary

- Register app in Azure
- Authenticate user with MSAL
- Acquire token
- Call protected API

---

## 🧩 Best Practices

- Use **MSAL (not ADAL)**
- Prefer **AcquireTokenSilent first**
- Store secrets in **Key Vault**
- Use least-privilege scopes

---

## 🚨 Exam Traps

- ❗ MSAL caches tokens automatically
- ❗ Client credentials flow = no user
- ❗ OBO = API calls API with user context
- ❗ Admin consent ≠ automatic permissions
- ❗ Always try silent auth first

---

## 🧠 Cheat Sheet

| Scenario                  | Method                        |
|--------------------------|-------------------------------|
| User login               | AcquireTokenInteractive       |
| Cached login             | AcquireTokenSilent            |
| Background service       | AcquireTokenForClient         |
| API → API (user context) | AcquireTokenOnBehalfOf        |

---

## ✅ Summary

MSAL is the modern authentication library for Azure apps.  
Understanding flows and token handling is **essential for AZ-204**.

---

<!-- include:_toc.md -->

---