# Azure App Service – Notes

## Overview
Azure App Service is a fully managed Platform as a Service (PaaS) offering for building, deploying, and scaling web applications.

Supports:
- Web Apps
- REST APIs
- Mobile backends

Key benefit:
- No infrastructure management → focus on code

---

## Key Components

### App Service App
- A hosted application (Web App, API App)
- Runs inside an App Service Plan

### App Service Plan
Defines:
- Compute resources (CPU, RAM)
- Pricing tier
- Scaling options

👉 Important:
- Multiple apps can share one App Service Plan
- All apps in the same plan share the same resources

---

## App Service Plan Tiers

### Shared Compute (Free / Shared)
- Multi-tenant
- Limited resources
- No scaling
- Used for dev/test

### Dedicated Compute (Basic / Standard / Premium)
- Dedicated VMs
- Manual + autoscaling
- Production workloads

### Isolated (App Service Environment)
- Fully isolated network
- Highest scalability
- Enterprise scenarios

👉 Exam trap:
- **Isolated = highest scale + network isolation**
- **Dedicated ≠ maximum scale**

---

## Scaling in App Service

### Scale Up (Vertical Scaling)
- Increase CPU/RAM by changing pricing tier

### Scale Out (Horizontal Scaling)
- Add more instances

👉 Important:
- All apps in the same plan scale together

---

## Deployment Options

### Automated Deployment (CI/CD)
- GitHub
- Azure DevOps
- Bitbucket

### Manual Deployment
- Git push to App Service
- ZIP deploy
- FTP

👉 Exam tip:
- CI/CD = preferred for production

---

## Deployment Slots

- Separate environments (e.g., staging, production)
- Same App Service Plan

### Workflow:
1. Deploy to staging slot
2. Validate
3. Swap with production

👉 Benefits:
- Zero downtime deployment
- Safe testing before release

👉 Important:
- Slots share compute resources
- Can have separate configuration

---

## Authentication & Authorization

Built-in feature ("Easy Auth")

Supports identity providers:
- Microsoft Entra ID (Azure AD)
- Google
- Facebook
- Twitter

### Features:
- No code required
- Token-based authentication
- Protect endpoints easily

👉 Exam tip:
- "Easy Auth" = built-in authentication

---

## Networking Features

By default:
- Publicly accessible
- Outbound internet access enabled

### Inbound Traffic Control
- IP restrictions
- Private endpoints

### Outbound Traffic Control
- VNet integration

👉 Important:
- App Service can integrate with Azure Virtual Network

---

## Default Networking Behavior

- Free/Shared → multi-tenant workers
- Basic+ → dedicated workers

👉 Key concept:
- Apps in the same App Service Plan run on the same worker(s)
- When scaling out → all apps replicate across instances

---

## Monitoring & Diagnostics

- Azure Monitor
- Application Insights
- Log streaming

👉 Types of logs:
- Application logs
- Web server logs
- Deployment logs

---

## Key Benefits

- Fully managed platform
- Built-in scaling
- Integrated security
- CI/CD support
- High availability

---

## Exam Tips

- App Service = PaaS (not IaaS)
- App Service Plan defines resources (NOT the app itself)
- Multiple apps share one plan
- Scaling applies to the plan, not individual apps
- Deployment slots = zero-downtime deployments
- Easy Auth = built-in authentication
- Isolated tier = highest scale + private network