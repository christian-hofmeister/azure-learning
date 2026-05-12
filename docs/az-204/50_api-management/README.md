<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

_No content found._


---

# Azure API Management (APIM) - AZ-204 Summary

## 📚 Overview

Azure API Management (APIM) is an Azure service that acts as an:

- API Gateway
- API Proxy
- API Management Platform

It helps expose, secure, monitor, version, and manage APIs.

Typical architecture:

```text
Client
   ↓
Azure API Management (APIM)
   ↓
Backend APIs / Microservices
```

APIM can sit in front of:

- ASP.NET APIs
- Azure Functions
- Microservices
- Legacy SOAP services
- On-premises APIs
- External APIs

---

# 🎯 Main Goals of APIM

APIM helps with:

- Centralized API management
- Security
- Authentication
- Authorization
- Monitoring
- Rate limiting
- API versioning
- Request/response transformation
- Hiding backend complexity
- Developer onboarding

---

# 🧠 Why API Gateways Matter

Without an API Gateway:

```text
Client
  -> User Service
  -> Order Service
  -> Payment Service
```

The client must know:

- all service URLs
- decomposition of services
- authentication details
- versioning details

This tightly couples the client to the backend architecture.

With APIM:

```text
Client
   -> APIM
       -> Internal services
```

The client only knows one entry point.

Benefits:

- easier refactoring
- easier maintenance
- centralized security
- backend abstraction

---

# 🔑 APIM Subscription vs Azure Subscription

⚠️ Important AZ-204 exam topic.

## Azure Subscription

Used for:

- billing
- resource management
- Azure account structure

Example:

- Pay-As-You-Go
- Enterprise Agreement

---

## APIM Subscription

Used for:

- API access
- identifying API consumers
- subscription keys

Example header:

```http
Ocp-Apim-Subscription-Key: abc123
```

---

# 📦 Products

APIs are often grouped into:

## Products

Example:

- Free Tier
- Premium Tier
- Internal APIs
- Partner APIs

Developers subscribe to Products.

Products can require:

- subscription keys
- approval
- quotas
- rate limits

---

# 🔐 Subscription Keys

Subscription keys identify API consumers.

Usually sent as:

```http
Ocp-Apim-Subscription-Key: <key>
```

---

## Query Parameter Support

Possible but not recommended:

```text
?subscription-key=abc123
```

Risks:

- browser history
- logs
- screenshots
- analytics systems
- referrer leakage

Prefer HTTP headers.

---

# 🔐 Authentication in APIM

APIM can integrate with:

- Microsoft Entra ID
- OAuth2
- OpenID Connect
- JWT validation
- Managed Identities

Common policy:

```xml
<validate-jwt>
```

---

# 📜 Policies

Policies are XML-based rules executed in the gateway.

Example:

```xml
<set-header name="x-correlation-id" exists-action="override">
    <value>@(Guid.NewGuid().ToString())</value>
</set-header>
```

Policies are used for:

- authentication
- rate limiting
- retries
- transformations
- caching
- routing
- header manipulation

---

# 🔄 Common APIM Policies

## Rate Limit

Limits requests over time.

Example:

```text
100 requests per minute
```

Used to protect APIs.

---

## Limit Concurrency

Limits simultaneously active requests.

Example:

```text
max 5 parallel requests
```

⚠️ No time window involved.

This protects expensive backends.

---

## Retry Policy

Retries transient failures.

Useful for:

- 429 Too Many Requests
- 503 Service Unavailable
- temporary network issues

Not useful for:

- 401 Unauthorized
- 403 Forbidden
- validation errors

Best practice:

- exponential backoff

---

## Mock Response

APIM returns a fake response without calling the backend.

Useful when:

- backend not implemented yet
- frontend development starts early
- demos/testing

Example:

```xml
<mock-response status-code="200" content-type="application/json" />
```

---

# 🧩 Request Aggregation

Aggregation means:

```text
1 client request
-> multiple backend requests
-> combined response
```

Example:

```text
/dashboard
```

internally calls:

- User Service
- Order Service
- Payment Service

APIM can do simple transformations.

Complex aggregation is usually implemented in:

- Backend-for-Frontend (BFF)
- Aggregation API
- custom backend service

---

# 🌐 Self-hosted Gateway

Self-hosted Gateway allows APIM gateways outside Azure.

Typical scenarios:

- on-premises
- Kubernetes
- hybrid cloud
- multi-cloud

Architecture:

```text
Azure APIM = Control Plane
Self-hosted Gateway = Data Plane
```

Azure manages:

- policies
- configuration
- monitoring

Traffic can remain local/on-prem.

---

# 📈 Monitoring & Analytics

APIM supports:

- Azure Monitor
- Application Insights
- logging
- tracing
- diagnostics

Useful for:

- troubleshooting
- usage analysis
- performance monitoring

---

# 🧠 API Versioning

Common approaches:

## Path Versioning

```text
/api/v1/orders
/api/v2/orders
```

---

## Query Versioning

```text
/api/orders?api-version=1
```

---

## Header Versioning

```http
api-version: 1
```

---

# ⚡ Caching

APIM can cache responses to reduce backend load.

Useful for:

- static data
- expensive operations
- frequently requested data

Benefits:

- reduced latency
- reduced backend traffic
- lower costs

---

# 🔥 Exam-Relevant Concepts

## Know the Difference

| Concept | Meaning |
|---|---|
| Rate Limit | Requests over time |
| Limit Concurrency | Parallel active requests |
| Retry | Repeat transient failures |
| Mock Response | Fake backend response |
| Subscription Key | API consumer identification |
| Azure Subscription | Billing/account structure |
| Product | Group of APIs |
| Policy | XML-based gateway rule |

---

# ⚠️ Important Exam Traps

## Trap 1

Subscription ≠ Azure Subscription

In APIM it often means:

```text
API access subscription
```

---

## Trap 2

Concurrency ≠ Rate Limit

Concurrency:

```text
simultaneously active requests
```

Rate Limit:

```text
requests over time
```

---

## Trap 3

Retry only for transient failures.

Do NOT retry:

- authentication failures
- validation failures

---

## Trap 4

APIM policies are XML-based.

Not custom deployable .NET middleware.

---

# ✅ Typical AZ-204 Questions

You should understand:

- when to use APIM
- why gateways help microservices
- difference between Products and APIs
- difference between Subscription Key and Azure Subscription
- why retries matter
- when caching is useful
- when self-hosted gateways are useful
- how policies protect backends
- why API versioning matters

---

# 🧠 Quick Cheat Sheet

| Topic | Key Idea |
|---|---|
| APIM | Azure API Gateway |
| Product | Group of APIs |
| Subscription | Access to APIs |
| Subscription Key | Consumer identification |
| Policy | XML rule in gateway |
| Retry | Handle transient failures |
| Mock Response | Fake backend response |
| Concurrency Limit | Limit parallel requests |
| Rate Limit | Limit requests over time |
| Self-hosted Gateway | Gateway runtime outside Azure |
| Aggregation | Combine multiple backend calls |
| JWT Validation | Secure APIs |
| Caching | Reduce backend load |

---

# 🚀 Typical Real-World Architecture

```text
Client
   ↓
Azure API Management
   ↓
Backend-for-Frontend (optional)
   ↓
Microservices / Azure Functions / Legacy APIs
```

---

# 🏁 Final AZ-204 Takeaway

APIM is mainly about:

- abstraction
- security
- centralized API governance
- protecting backends
- simplifying clients
- managing APIs consistently

---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

_No content found._


---