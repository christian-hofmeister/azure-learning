# AZ-204 Cheat Sheet — Azure App Service Deployment Slots

## What Deployment Slots Are

Deployment slots are **live apps with their own hostnames** inside the same Azure App Service.

Typical slots:
- **Production** -> live traffic
- **Staging** -> validation before go-live
- **Testing / Dev** -> optional extra environments

Each slot is a separate running instance of the app, but all slots share the **same App Service Plan** resources.

---

## Why Use Deployment Slots

Use deployment slots to:
- deploy safely without touching production
- validate a new version before release
- reduce downtime during deployment
- warm up the new version before switching traffic
- roll back quickly by swapping again

---

## Core Exam Facts

- Deployment slots are available only in certain **paid App Service tiers**.
- The **production slot** is the main live slot.
- Each slot has its own:
  - hostname
  - app settings
  - connection strings
  - configuration
  - content
- A **swap** exchanges slot content/configuration between two slots.
- Deployment slots help support **near-zero-downtime deployments**.

---

## Default Routing Rule

By default:
- **100% of client traffic** goes to the **production slot**
- New deployment slots receive **0% traffic** until you configure routing manually

This is a common exam point.

---

## Slot Swap Basics

A **swap** typically moves:
- app content
- most configuration settings

Common scenario:
- Deploy new version to **staging**
- Test it
- Swap **staging** with **production**
- Staging becomes old production version
- Production becomes new version

This gives you a fast rollback path:
- swap again if needed

---

## Swap Sequence (Conceptual)

1. Deploy app to **staging**
2. Apply **production slot settings** to staging instances
3. Warm up staging instances
4. Azure switches routing
5. Former production version moves to staging

Goal:
- avoid cold start or broken first requests in production

---

## Warm-Up Behavior

Before completing a swap, Azure can send **warm-up requests** to the target slot.

Useful for:
- loading configuration
- initializing caches
- checking DB connectivity
- starting background app components

A dedicated warm-up endpoint is a good idea, for example:
- `/warmup`

That endpoint should ideally:
- validate dependencies
- preload important resources
- return **HTTP 200** when ready

---

## Important Warm-Up Setting

### `WEBSITE_SWAP_WARMUP_PING_STATUSES`

Defines which HTTP status codes are considered acceptable during warm-up.

Example idea:
- allow only `200`
- or allow `200,202`

If the app does not return an allowed status, the swap may not complete as expected.

---

## Auto Swap

**Auto Swap** automatically swaps a source slot into production after a successful deployment.

Useful when:
- CI/CD is mature
- staging validation is predictable
- you want faster release flow

Be careful:
- not ideal if you need manual validation before release

---

## Traffic Routing

You can route a percentage of users to a non-production slot.

Example:
- 90% -> production
- 10% -> staging

Use this for:
- canary releases
- gradual rollout
- real-user validation

Important:
- this is **traffic routing**
- not the same as a full **swap**

---

## Swap with Preview

**Swap with preview** lets you inspect the target environment before completing the final switch.

Use when:
- you want to verify configuration behavior first
- you need extra confidence before full cutover

General idea:
- apply slot configuration temporarily
- validate
- complete swap or cancel it

---

## Slot-Specific Settings

Some settings should stay with the slot and **not move** during swap.

These are called **slot settings** or **sticky settings**.

Typical sticky settings:
- environment-specific connection strings
- secrets
- app settings tied to a specific environment
- monitoring/config values for staging only

If a setting is marked as a slot setting:
- it stays in its slot during swap

This is extremely important for exams.

---

## What Usually Should Be Slot-Specific

Good candidates for slot-specific settings:
- database connection strings
- API keys
- environment names
- feature flags for testing
- diagnostic settings

Why:
- staging should not accidentally use production dependencies unless intended

---

## What Not to Forget

A slot is **not** a full isolated App Service Plan.

Slots:
- share the same compute resources
- share the same underlying App Service Plan

So:
- heavy load in one slot can affect others

---

## Authentication and Slots

Authentication behavior can differ per slot depending on configuration.

Be careful when swapping apps that use:
- Microsoft Entra ID / Azure AD
- redirect URIs
- custom auth settings
- cookies/session assumptions

Always verify:
- auth callback URLs
- environment-specific secrets
- login/logout behavior after swap

---

## Custom Domains and SSL

Usually:
- custom production hostname is tied to the **production slot**
- staging uses its own slot hostname

This means:
- staging is testable separately
- production hostname stays stable during swap

---

## Rollback Strategy

Fast rollback pattern:
1. New version deployed to staging
2. Swap staging -> production
3. Problem detected
4. Swap back

Because the old production version is still sitting in staging, rollback is quick.

---

## Best Practices

- deploy first to **staging**, not production
- validate staging before swap
- use **slot-specific settings** for environment-dependent config
- create a **warm-up endpoint**
- monitor after swap
- keep rollback simple
- use traffic routing for gradual exposure
- do not treat slots as independent scaling units

---

## Exam Traps

### Trap 1: Slots are free everywhere
False.  
Deployment slots require supported App Service pricing tiers.

### Trap 2: New slots receive traffic automatically
False.  
Default is **0% traffic** to new slots.

### Trap 3: All settings move during swap
False.  
**Slot-specific settings stay in their slot**.

### Trap 4: Traffic routing and swap are the same
False.  
Routing sends only a percentage of traffic.  
Swap exchanges app versions/config between slots.

### Trap 5: Slots have isolated hardware
False.  
Slots share the same **App Service Plan** resources.

### Trap 6: Deployment slots only help deployment speed
False.  
They also help with:
- validation
- warm-up
- rollback
- safer releases

---

## Quick Compare

| Concept | Meaning |
|---|---|
| Deployment slot | Additional live app environment inside same App Service |
| Production slot | Main live slot |
| Staging slot | Pre-production validation slot |
| Swap | Exchange app versions/config between slots |
| Traffic routing | Send percentage of users to another slot |
| Slot setting | Setting that stays with its slot during swap |
| Auto Swap | Automatic swap after deployment |
| Warm-up | Prepare app before traffic switch |

---

## Memorize These Points

- **Production gets 100% traffic by default**
- **New slot gets 0% traffic by default**
- **Swap enables safer release + quick rollback**
- **Slot settings stay with the slot**
- **Slots share the same App Service Plan**
- **Traffic routing != swap**
- **Warm-up reduces cold-start risk**

---

## Mini Exam Prompts

### Q1
A new version is deployed to staging, tested, then made live with minimal downtime. Which feature is being used?  
**Answer:** Deployment slot swap

### Q2
A connection string must remain tied to staging during swap. What should you do?  
**Answer:** Mark it as a **slot setting**

### Q3
What percentage of traffic goes to a new slot by default?  
**Answer:** **0%**

### Q4
What is the default destination for production traffic?  
**Answer:** **100% to the production slot**

### Q5
Why use a warm-up endpoint?  
**Answer:** To ensure the app is ready before traffic is switched during swap

---

## One-Sentence Summary

**Deployment slots in Azure App Service let you deploy, warm up, test, gradually expose, and safely swap app versions with fast rollback support and minimal downtime.**