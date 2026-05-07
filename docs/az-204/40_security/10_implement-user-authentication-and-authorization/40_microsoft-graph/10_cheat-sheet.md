# Microsoft Graph API — AZ-204 Cheat Sheet

# 📌 Core Idea

Microsoft Graph = single API endpoint for:
- Microsoft 365
- Microsoft Entra ID
- Teams
- Outlook
- OneDrive
- Users / Groups

Base URL:

```http
https://graph.microsoft.com
```

---

# 🔐 Permission Types

## Delegated Permissions
- user signed in
- app acts **on behalf of user**

Examples:

```text
User.Read
Mail.Read
Calendars.Read
```

🧠 Think:
"User + App"

---

## Application Permissions
- no user
- daemon/service/background job
- app acts as itself

Examples:

```text
User.Read.All
Directory.Read.All
```

🧠 Think:
"App-only"

Usually requires:
- admin consent

---

# 🔄 OAuth Flows

| Flow | Use Case |
|---|---|
| Authorization Code | Web apps |
| Authorization Code + PKCE | SPA / Mobile |
| Client Credentials | Daemon / Background service |
| Device Code | CLI / IoT |
| On-Behalf-Of (OBO) | API calls another API |

---

# 🔑 PKCE

Used for:
- SPA
- mobile apps
- public clients

Purpose:
- protect authorization code

🧠 Exam Trigger:
SPA => PKCE

---

# 🔒 OBO Flow

Used when:
- API accesses Graph for logged-in user

Example:

```text
Frontend -> API -> Graph
```

🧠 Exam Trigger:
"API calls downstream API"

---

# 👤 Public vs Confidential Client

| Type | Secret Allowed? |
|---|---|
| Public Client | ❌ No |
| Confidential Client | ✅ Yes |

Public:
- SPA
- mobile
- desktop

Confidential:
- web app
- API
- daemon

---

# 🪪 Managed Identity

Azure-native authentication.

Benefits:
- no secrets
- automatic credential management

Used for:
- Azure Function
- VM
- App Service
- Container App

🧠 Exam Trigger:
"Best secure Azure authentication"

---

# 📚 Important Endpoints

## Current User

```http
GET /me
```

## Users

```http
GET /users
```

## Mail

```http
GET /me/messages
```

## Calendar

```http
GET /me/events
```

## Files

```http
GET /me/drive/root/children
```

---

# 🔍 Query Parameters

| Parameter | Purpose |
|---|---|
| $select | choose fields |
| $filter | filter results |
| $top | limit results |
| $orderby | sort |
| $expand | include related data |

Example:

```http
?$select=subject,sender
```

---

# 📈 Paging

Large result sets return:

```json
@odata.nextLink
```

Must:
- follow nextLink

---

# ⚠️ Throttling

Response:

```http
429 Too Many Requests
```

Use:
- Retry-After
- exponential backoff

---

# 🔄 Delta Queries

Used for:
- synchronization
- incremental changes

Example:

```http
/users/delta
```

---

# 🧠 Consent

## User Consent
- delegated permissions

## Admin Consent
- high privilege permissions
- organization-wide access

Examples:

```text
Directory.Read.All
User.Read.All
```

---

# 🛠 MSAL

MSAL = Microsoft Authentication Library

Used to:
- authenticate
- acquire tokens

Interfaces:

```csharp
IPublicClientApplication
IConfidentialClientApplication
```

---

# 📌 API Versions

| Version | Meaning |
|---|---|
| v1.0 | stable |
| beta | preview |

🧠 Never use beta in production.

---

# 🚨 High-Value Exam Facts

## Delegated vs Application

```text
Delegated = user present
Application = app-only
```

---

## SPA?

✅ Use:
- Authorization Code Flow + PKCE

---

## Background Service?

✅ Use:
- Client Credentials Flow

---

## API -> API?

✅ Use:
- OBO Flow

---

## Azure Resource Authentication?

✅ Use:
- Managed Identity

---

## Pagination?

✅ Use:
- @odata.nextLink

---

## Too Many Requests?

✅ Use:
- Retry-After

---

# 🧾 Ultra Short Memory Aids

| Topic | Memory Aid |
|---|---|
| Delegated | user present |
| Application | daemon/app-only |
| PKCE | SPA/mobile |
| OBO | API -> API |
| Client Credentials | no user |
| Managed Identity | no secrets |
| Admin Consent | dangerous permissions |
| Delta | sync changes |
| nextLink | paging |
| 429 | throttling |

---

# 🏁 AZ-204 Focus Areas

Most important:
- delegated vs application permissions
- OAuth flows
- PKCE
- OBO
- managed identities
- Graph query parameters
- paging
- throttling
- MSAL