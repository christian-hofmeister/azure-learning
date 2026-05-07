---

<!-- include:_toc.md -->

---

# Microsoft Graph API (AZ-204)

## 📌 What is Microsoft Graph?

Microsoft Graph is a **REST API gateway** for accessing Microsoft 365 and Azure AD (Microsoft Entra ID) services through a single endpoint.

Typical resources:
- Users
- Groups
- Emails
- Calendars
- Teams
- OneDrive files
- Devices
- Directory objects

Base endpoint:

```http
https://graph.microsoft.com
```

Versioned APIs:

```http
/v1.0     -> stable production API
/beta     -> preview / experimental
```

Example:

```http
GET https://graph.microsoft.com/v1.0/me
```

---

# 🧠 Exam-Relevant Core Concepts

## Authentication vs Authorization

### Authentication
Who are you?

Handled via:
- Microsoft Entra ID
- OAuth 2.0
- OpenID Connect

### Authorization
What are you allowed to access?

Handled via:
- Permissions / scopes
- App roles
- Admin consent

---

# 🔑 Permission Types

## Delegated Permissions

Used when:
- a user is signed in

The app acts:
- **on behalf of the user**

Examples:

```text
Mail.Read
User.Read
Calendars.Read
```

The app can only do:
- what the signed-in user is allowed to do

---

## Application Permissions

Used when:
- no user is signed in
- daemon/background/service apps

The app acts:
- as itself

Examples:

```text
User.Read.All
Mail.Send
Directory.Read.All
```

Usually requires:
- admin consent

---

# 🔄 OAuth Flows (Very Important)

## Authorization Code Flow

Most common web app flow.

Used by:
- web apps
- server-side apps

Flow:
1. User logs in
2. Authorization code returned
3. App exchanges code for token

Supports:
- refresh tokens
- secure backend secret handling

---

## PKCE (Proof Key for Code Exchange)

Extension for Authorization Code Flow.

Used by:
- SPA apps
- mobile apps
- public clients

Purpose:
- protects authorization code interception attacks

Important:
- SPAs cannot safely store secrets

---

## Client Credentials Flow

Used for:
- daemon apps
- background services

No user involved.

Authentication via:
- client secret
- certificate

Returns:
- app-only token

---

## Device Code Flow

Used for:
- CLI tools
- devices without browser

Example:
- Azure CLI
- IoT devices

User enters code on another device.

---

## On-Behalf-Of (OBO) Flow

Used when:
- one API calls another API on behalf of the user

Concept:
- upstream API
- downstream API

Example:

```text
Frontend -> API A -> Microsoft Graph
```

API A exchanges the user's token for another delegated token.

---

# 🔐 Consent

## User Consent

A user approves:
- delegated permissions

Example:
- reading own profile

---

## Admin Consent

Required for:
- high privilege permissions
- organization-wide access

Examples:

```text
Directory.Read.All
User.Read.All
```

Admins approve for:
- entire tenant

---

# 📦 Access Tokens

Microsoft Graph uses:
- JWT bearer tokens

Usually sent via:

```http
Authorization: Bearer <token>
```

Tokens contain:
- scopes
- audience
- tenant
- user/app identity

---

# 📚 Common Microsoft Graph Endpoints

## Current User

```http
GET /me
```

---

## Users

```http
GET /users
GET /users/{id}
```

---

## Mail

```http
GET /me/messages
```

---

## Calendar

```http
GET /me/events
```

---

## OneDrive

```http
GET /me/drive/root/children
```

---

## Teams

```http
GET /teams
```

---

# 🔍 Query Parameters

Very important for AZ-204.

## Select

Only return specific fields.

```http
?$select=subject,sender
```

---

## Filter

Filter results.

```http
?$filter=subject eq 'Hello'
```

---

## Top

Limit result count.

```http
?$top=10
```

---

## OrderBy

Sort results.

```http
?$orderby=displayName
```

---

## Expand

Load related entities.

```http
?$expand=members
```

---

# 💡 Example Request

```http
GET https://graph.microsoft.com/v1.0/me/messages?
$select=subject,sender&
$filter=subject eq 'Hello world'
```

Equivalent SDK example:

```csharp
var messages = await graphClient.Me.Messages
    .GetAsync(requestConfig =>
    {
        requestConfig.QueryParameters.Select =
            ["subject", "sender"];

        requestConfig.QueryParameters.Filter =
            "subject eq 'Hello world'";
    });
```

---

# 🛠 Microsoft Graph SDK

Microsoft provides SDKs for:
- .NET
- JavaScript
- Java
- Python
- Go

Benefits:
- strongly typed APIs
- authentication helpers
- pagination handling
- request builders

NuGet package:

```bash
dotnet add package Microsoft.Graph
```

---

# 🔐 Microsoft Identity Platform Libraries

## MSAL (Microsoft Authentication Library)

Used to:
- authenticate users/apps
- acquire tokens

Main interfaces:

```csharp
IPublicClientApplication
IConfidentialClientApplication
```

---

## Public Client Applications

Cannot safely store secrets.

Examples:
- desktop apps
- mobile apps
- SPA apps

Often use:
- PKCE
- device code flow

---

## Confidential Client Applications

Can securely store secrets/certificates.

Examples:
- web apps
- APIs
- daemon services

Can use:
- client secret
- certificates

---

# 🪪 Managed Identities + Graph

Azure resources can access Graph securely using:
- managed identities

Benefits:
- no secrets stored
- automatic credential management

Typical scenario:
- Azure Function reads users/groups from Graph

---

# 📈 Paging

Graph often returns paged results.

Response may contain:

```json
"@odata.nextLink"
```

Applications must:
- follow nextLink to retrieve more data

---

# ⚠️ Throttling

Graph can throttle requests.

Typical response:

```http
429 Too Many Requests
```

Important:
- retry using Retry-After header
- implement exponential backoff

---

# 🔄 Delta Queries

Used for:
- synchronization
- incremental updates

Example:
- only retrieve changed users/files/messages

Endpoint example:

```http
/ users/delta
```

---

# 🧬 Incremental Consent

Apps request permissions gradually.

Example:
- first request User.Read
- later request Mail.Read

Benefits:
- better UX
- fewer scary consent dialogs

---

# 🧪 Dynamic Consent

Permissions requested dynamically at runtime.

Instead of:
- statically pre-registering all scopes

---

# 🧠 Evolvable Enumerations

Graph can add enum values without breaking clients.

Optional opt-in via:

```http
Prefer: include-unknown-enum-members
```

Purpose:
- forward compatibility

---

# 🔒 Conditional Access

Organizations can enforce:
- MFA
- compliant devices
- location restrictions

Apps must sometimes:
- handle claim challenges
- re-authenticate users

Especially relevant for:
- OBO flow
- enterprise apps

---

# 📌 HTTP Methods

| Method | Purpose |
|---|---|
| GET | Read data |
| POST | Create resource / execute action |
| PATCH | Partial update |
| PUT | Replace resource |
| DELETE | Delete resource |

---

# ⚠️ Common AZ-204 Exam Traps

## Delegated vs Application Permissions

Most important Graph topic.

Remember:

```text
Delegated = user present
Application = app-only
```

---

## PKCE

PKCE is mainly for:
- SPA
- mobile
- public clients

---

## OBO Flow

Used when:
- API calls another API on behalf of the user

---

## Client Credentials

No user involved.

---

## Admin Consent

Needed for:
- high privilege permissions

---

## Graph API Versions

```text
v1.0 = stable
beta = preview
```

Never use:
- beta in production

---

## Managed Identity

Best Azure-native solution for:
- Azure-to-Azure authentication
- secretless auth

---

# 🚀 Typical AZ-204 Scenarios

## Scenario 1

A background service reads all users nightly.

✅ Use:
- Client Credentials Flow
- Application permissions

---

## Scenario 2

A web app reads signed-in user's calendar.

✅ Use:
- Authorization Code Flow
- Delegated permissions

---

## Scenario 3

A SPA accesses Graph.

✅ Use:
- Authorization Code + PKCE

---

## Scenario 4

An API calls Graph on behalf of the user.

✅ Use:
- OBO Flow

---

# 🧾 Quick Cheat Sheet

| Topic | Important |
|---|---|
| Delegated permissions | User required |
| Application permissions | App-only |
| PKCE | SPA/mobile/public clients |
| Client Credentials | Daemon/background apps |
| OBO | API -> API |
| MSAL | Token acquisition |
| Managed Identity | Secretless Azure auth |
| Admin Consent | High privilege permissions |
| Delta Queries | Sync changes |
| 429 | Throttling |
| @odata.nextLink | Pagination |
| v1.0 | Stable |
| beta | Preview |

---

# 🔗 Typical Graph Authentication Stack

```text
App
  ↓
MSAL
  ↓
Microsoft Entra ID
  ↓
Access Token
  ↓
Microsoft Graph API
```

---

# 🏁 Final Exam Tips

Focus especially on:
- OAuth flows
- delegated vs application permissions
- PKCE
- OBO flow
- consent concepts
- MSAL usage
- Graph query parameters
- managed identities
- throttling + paging

These are highly exam-relevant for AZ-204.

---

<!-- include:_toc.md -->

---