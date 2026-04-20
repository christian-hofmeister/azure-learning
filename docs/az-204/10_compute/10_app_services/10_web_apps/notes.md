# Azure App Service – Notes

---

## App Service Plan (Core Concept)

An **App Service Plan** defines the **compute resources** for your applications.

Key idea:

> The App Service Plan is the **scaling unit**, NOT the app.

---

## What defines an App Service Plan?

* Operating System (Windows / Linux)
* Region (e.g. West Europe)
* Number of VM instances
* VM size (pricing tier)
* Pricing tier

---

## Pricing Tiers

### Shared Compute

* Free, Shared
* Shared VM with other customers
* CPU quota
* ❌ No scale-out

👉 Use for:

* Development
* Testing

---

### Dedicated Compute

* Basic, Standard, Premium
* Dedicated VMs
* Apps share resources within the same plan
* ✔ Scale-out possible

---

### Isolated

* Isolated / IsolatedV2
* Dedicated VMs + dedicated VNet
* Maximum isolation
* Maximum scalability

---

## Scaling Behavior (VERY IMPORTANT ⚠️)

* All apps in a plan share the same VM instances
* Scaling is done at the **plan level**
* All apps scale together

### Example

If the plan has:

* 5 VM instances

Then:

* ALL apps run on ALL 5 instances

---

## Resource Sharing

The following share the same resources:

* Apps
* Deployment slots
* WebJobs
* Backups
* Diagnostic logs

👉 This can impact performance!

---

## When to isolate an app

Create a new App Service Plan if:

* The app is resource-intensive
* You need independent scaling
* You need a different region

---

## Cost Optimization

* Multiple apps can share one plan → cheaper
* But:

  * Risk of resource contention
  * Performance impact

---

## Key Takeaways (Exam Relevant)

* App Service Plan = **compute container**
* Scaling happens at **plan level**, not app level
* Pricing tier defines **features + scaling**
* Free/Shared → no scaling
* Dedicated → scalable
* Isolated → max isolation

---

## Exam Traps

* ❌ “Each app scales independently” → WRONG
* ❌ “Scaling is per app” → WRONG
* ✔ Scaling = App Service Plan

---
---

## Deployment to App Service

App Service supports **both automated and manual deployments**.

---

## Automated Deployment (CI/CD)

Goal:

> Fast, repeatable deployments with minimal user impact

### Supported Sources

* Azure DevOps
* GitHub (most common)
* Bitbucket

### Key Behavior

* Push to branch → automatic deployment
* Typically part of a CI/CD pipeline:

  * Build
  * Test
  * Release
  * Deploy

---

## Manual Deployment

Options:

* **Git**

  * Push to App Service Git endpoint

* **Azure CLI**

  * `az webapp up`
  * Can create + deploy app in one step

* **ZIP Deploy**

  * Upload ZIP via HTTP

* **FTP/S**

  * Traditional file transfer

---

## Kudu (Important ⚠️)

* Used internally by App Service
* Handles:

  * Git deployments
  * ZIP deployments
  * File synchronization

---

## Deployment Slots (VERY IMPORTANT ⚠️)

Deployment slots allow **zero-downtime deployments**.

### Concept

* Deploy to **staging slot**
* Validate
* Swap with **production slot**

### Benefits

* No downtime
* Warmed-up instances
* Safer releases

---

## Continuous Deployment with Slots

Typical setup:

* `main` → production
* `develop` / `qa` → staging slots

👉 Each branch can auto-deploy to its own slot

---

## Container Deployment

For container-based apps:

### Workflow

1. Build image
2. Tag image (IMPORTANT!)
3. Push to registry
4. Update App Service to new image

### Best Practice

* ❌ Avoid `latest` tag
* ✔ Use:

  * commit ID
  * timestamp

👉 Improves traceability and debugging

---

## Sidecar Containers

* Supported for Linux custom containers
* Up to 9 sidecars per app

### Use Cases

* Logging
* Monitoring
* Configuration
* Networking helpers

👉 Decouples auxiliary services from main app

---

## Key Takeaways (Exam Relevant)

* App Service supports:

  * CI/CD
  * Manual deployment

* Deployment slots = **zero downtime deployments**

* Kudu handles:

  * Git
  * ZIP deployments

* Containers:

  * Must be tagged properly
  * Avoid `latest`

---

## Slot-specific configuration

Deployment slots share compute resources, but they should not use the same backing services for validation.

Best practice:

* Production slot → production database / storage
* Staging slot → staging database / storage

Use **deployment slot settings** for:

* connection strings
* storage connection strings
* API keys
* feature flags

Important:

* Code is swapped
* Slot-specific configuration stays with the slot

## Exam Traps

* ❌ Deployment happens only manually → WRONG

* ❌ Slots are only for testing → WRONG

* ✔ Slots are used for **safe production deployments**

* ❌ `latest` tag is best practice → WRONG

---

## Authentication & Authorization in Azure App Service

### Overview

Azure App Service provides **built-in authentication and authorization** (also called *Easy Auth*).

This allows you to secure web apps, APIs, and Azure Functions **without writing authentication code**.

---

### Why use built-in authentication?

- No need to implement auth logic yourself
- Works with **any language or framework**
- Integrates with multiple identity providers
- Saves development time

---

### Supported Identity Providers

- Microsoft Entra ID → `/.auth/login/aad`
- Google → `/.auth/login/google`
- Facebook → `/.auth/login/facebook`
- GitHub → `/.auth/login/github`
- X (Twitter) → `/.auth/login/x`
- Apple (preview)
- Any OpenID Connect provider → `/.auth/login/<provider>`

---

### How it works

- Authentication runs as a **platform middleware**
- Every request passes through it before reaching your app

The middleware:

- Authenticates users
- Validates and refreshes tokens
- Manages sessions (cookies/tokens)
- Injects identity into HTTP headers

👉 No SDK or code changes required

---

### Special case (Linux / Containers)

- Runs in a **separate container**
- No in-process integration with frameworks

---

### Authentication Flow

#### 1. Server-directed flow (without SDK)

- Browser is redirected to: ```/.auth/login/<provider>```

- Provider handles login
- App Service manages session via cookies

#### 2. Client-directed flow (with SDK)

- Client logs in via provider SDK
- Sends token to App Service for validation
- Uses header: ```X-ZUMO-AUTH```

---

### Authorization Options

#### Allow unauthenticated

- Requests allowed without login
- App handles authorization
- Identity info passed via headers

#### Require authentication

- All unauthenticated requests are blocked
- Options:
- Redirect to login
- HTTP 401 (Unauthorized)
- HTTP 403 (Forbidden)

⚠️ Applies to entire app (can be problematic for public pages)

---

### Token Store

- Built-in token storage
- Stores tokens per user
- Accessible via:
- HTTP headers
- Environment variables

---

### Logging & Debugging

- Auth events are written into **App Service logs**
- Useful for troubleshooting login issues

---

### Key Takeaways

- Built-in auth = **Easy Auth**
- Runs as **middleware in App Service**
- Supports multiple providers (federated identity)
- Minimal or zero code required
- Works for:
- Web Apps
- APIs
- Azure Functions


## App Service Networking Features

### Overview

By default, Azure App Service:

- Is **publicly accessible via the internet (HTTP/HTTPS)**
- Can make **outbound calls to internet endpoints**

For real-world applications, you often need to:

- Restrict inbound traffic
- Control outbound connections

---

### Deployment Types

#### 1. Multitenant App Service (Default)

- Used by most pricing tiers:
  - Free, Shared, Basic, Standard, Premium, PremiumV2, PremiumV3
- Runs in a **shared environment**
- Multiple customers share infrastructure

#### 2. App Service Environment (ASE)

- **Single-tenant**
- Runs inside your **Virtual Network**
- Uses **Isolated SKU**

---

### Architecture (Important!)

App Service is a distributed system:

- **Front Ends**
  → Handle incoming HTTP/HTTPS requests

- **Workers**
  → Run your application code

👉 Because it's multitenant, you **cannot directly connect App Service to your network**

---

### Networking Features

App Service separates networking into:

| Inbound (incoming traffic) | Outbound (outgoing traffic) |
|--------------------------|----------------------------|
| App-assigned address     | Hybrid Connections         |
| Access restrictions      | VNet Integration           |
| Service endpoints        | Gateway-required VNet Integration |
| Private endpoints        |                            |

👉 You combine these depending on your scenario

---

### Inbound Features (incoming traffic)

Used to control who can access your app.

#### App-assigned address

- Dedicated IP for your app
- Used for:
  - IP-based SSL
  - Dedicated inbound IP

#### Access restrictions

- Allow/deny traffic based on:
  - IP address
  - CIDR ranges

#### Service endpoints

- Secure access from Azure services

#### Private endpoints

- Expose app via **private IP in VNet**
- No public internet exposure

---

### Outbound Features (outgoing traffic)

Used when your app calls external services.

#### VNet Integration

- Allows app to access resources inside a VNet

#### Gateway-required VNet Integration

- Needed for more advanced scenarios (e.g. routing through VPN)

#### Hybrid Connections

- Connect to **on-prem systems**
- Uses Azure Relay (no VPN required)

---

### Default Behavior

- Apps are publicly accessible
- Outbound traffic is unrestricted
- Apps in same App Service Plan share workers

👉 Scaling:
- Scale-out → app runs on multiple workers
- All apps in the same plan scale together

---

### Outbound IP Addresses

Each app uses **shared outbound IPs**:

- Defined by the worker VM family
- Shared across apps in same plan

#### Properties

- `outboundIpAddresses`
  → currently used IPs

- `possibleOutboundIpAddresses`
  → all potential IPs (important for firewalls!)

---

### Get Outbound IPs (Azure CLI)

Current IPs:

```bash
az webapp show \
  --resource-group <group_name> \
  --name <app_name> \
  --query outboundIpAddresses \
  --output tsv
  ```

  Key Takeaways

   - App Service is public by default
   - Networking is split into:
      - Inbound (who can access your app)
      - Outbound (what your app can access)
   - Multitenant → no direct network connection
   - Use features like:
      - Access restrictions
      - Private endpoints
      - VNet integration
   - Outbound IPs are:
      - Shared
      - Can change depending on scaling/plan

