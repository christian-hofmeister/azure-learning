# Azure App Service – Cheat Sheet

## Core Concept
App Service = PaaS for hosting web apps and APIs

---

## Key Structure

App Service Plan → provides resources  
App Service App → runs inside the plan  

👉 Multiple apps can share one plan

---

## Pricing Tiers

| Tier        | Type           | Use Case            |
|------------|----------------|--------------------|
| Free       | Shared         | Testing            |
| Shared     | Shared         | Small apps         |
| Basic      | Dedicated      | Small production   |
| Standard   | Dedicated      | Production         |
| Premium    | Dedicated      | High scale         |
| Isolated   | Dedicated+VNet | Enterprise         |

👉 Exam:
- **Isolated = highest scale + network isolation**

---

## Scaling

### Scale Up
- Increase resources (CPU/RAM)

### Scale Out
- Add instances

👉 Important:
- Scaling applies to **App Service Plan**

---

## Deployment

### Automated
- GitHub
- Azure DevOps

### Manual
- Git push
- ZIP deploy
- FTP

---

## Deployment Slots

- staging / production

Workflow:
1. Deploy
2. Test
3. Swap

👉 Zero downtime

---

## Authentication

"Easy Auth"

Supports:
- Azure AD
- Google
- Facebook

👉 No code required

---

## Networking

Default:
- Public access
- Outbound internet allowed

Options:
- IP restrictions
- VNet integration
- Private endpoints

---

## Logs & Monitoring

- Application logs
- Web server logs
- Deployment logs
- Application Insights

---

## Important Rules

- Apps share resources in same plan
- Scaling affects all apps in the plan
- Plan defines performance, not the app
- Slots share compute but can have separate config

---

## Exam Traps

❌ App defines compute → WRONG  
✅ Plan defines compute  

❌ Dedicated = highest scale → WRONG  
✅ Isolated = highest scale  

❌ Scaling per app → WRONG  
✅ Scaling per plan  

❌ Slots = separate infrastructure → WRONG  
✅ Slots share same resources  

❌ Authentication requires code → WRONG  
✅ Easy Auth = built-in