<!-- include:_toc.md -->

# Explore Azure App Service Deployment Slots

## 📌 Overview
Deployment slots in Azure App Service allow you to deploy different versions of your app to separate environments (e.g., staging, production) within the same App Service.

They enable:
- Safe deployments
- Zero-downtime releases
- Easy rollback strategies
- Testing in production-like environments

---

## 🚀 What are Deployment Slots?

A deployment slot is a **live app environment** with:
- Its own hostname
- Its own configuration (partially shared)
- Same App Service plan (same resources)

### Default Slot
- `production` (always exists)

### Additional Slots (examples)
- `staging`
- `testing`
- `qa`

---

## 🧪 Staging Environments

Staging slots allow you to:
- Deploy new versions safely
- Test before going live
- Validate configuration and behavior

### Key Characteristics
- Same compute resources as production
- Same scale settings
- Separate URL (e.g. `myapp-staging.azurewebsites.net`)

### Benefits
- No impact on production users
- Realistic testing environment
- Easy promotion to production

---

## 🔄 Slot Swapping

Slot swapping exchanges:
- **Content (code)**
- **Configuration (depending on settings)**

Between:
- Source slot (e.g. staging)
- Target slot (usually production)

---

## ⚙️ Swap Process (Important for Exam)

### Steps during swap:
1. Apply target slot settings to source slot
2. Restart source slot
3. Warm up application
4. Switch routing rules
5. Old production becomes staging

### Result:
- No downtime
- Fast switch
- Users see updated version instantly

---

## 🧠 Swap with Preview

Allows validation before completing the swap.

### Process:
1. Apply production settings to staging
2. Pause before final switch
3. Validate app behavior
4. Complete or cancel swap

### Use case:
- Validate config-dependent features
- Avoid surprises after swap

---

## 🔁 Rollback Strategy

Rollback is simple:
- Swap again (production ↔ staging)

➡️ Instant restore of previous version

---

## 🔀 Swap Deployment Slots (How-To)

### Using Azure Portal:
1. Go to App Service
2. Select **Deployment slots**
3. Click **Swap**
4. Choose:
   - Source slot (e.g. staging)
   - Target slot (production)
5. Optional: Enable preview
6. Execute swap

---

## ⚙️ Slot-Specific Configuration

Some settings can be marked as **"slot setting"**:
- Stay with the slot during swap
- Do NOT move to other slot

### Typical slot-specific settings:
- Connection strings
- App settings (e.g. API keys)
- Secrets

### Why important?
➡️ Prevents overwriting production config

---

## 🌐 Traffic Routing

You can route traffic between slots (A/B testing).

### Example:
- 90% → production
- 10% → staging

### Use cases:
- Canary releases
- Gradual rollout
- Feature validation

---

## 📊 Traffic Routing Behavior

- Routing is random per request
- Users may hit different slots
- Not session-sticky (important!)

---

## ⚠️ Limitations

- Not available in Free/Shared tiers
- Requires Standard tier or higher
- All slots share same resources → performance impact possible

---

## 👉 Deployment Slots

| Tier         | Slots |
| ------------ | ----- |
| Basic        | ❌     |
| **Standard** | ✅     |
| Premium      | ✅     |
| Isolated     | ✅     |


## 🧩 Best Practices

- Always use staging slot before production
- Use slot-specific settings for sensitive config
- Warm up apps before swap
- Use traffic routing for gradual rollout
- Monitor after deployment

---

## 🧠 Exam Tips (AZ-204)

- Deployment slots = **zero downtime deployment**
- Swap = **instant switch between environments**
- Slot settings = **stay in slot (not swapped)**
- Swap with preview = **validate before go-live**
- Traffic routing = **percentage-based distribution**
- Rollback = **swap again**

---

## ❗ Common Pitfalls

- ❌ Forgetting slot-specific settings → overwrites production config
- ❌ Assuming traffic routing is sticky → it is NOT
- ❌ Testing only locally instead of staging
- ❌ Ignoring warm-up → cold start issues
- ❌ Using slots in unsupported pricing tiers

---

## 🧪 Exercise Summary

In the exercise, you:
- Create a staging slot
- Deploy a new version
- Swap staging → production
- Verify zero downtime deployment

---

## 🏁 Key Takeaway

Deployment slots are essential for:
- Safe deployments
- Testing in real environments
- Zero-downtime releases
- Easy rollback strategies

➡️ One of the most important App Service features for production apps

<!-- include:_toc.md -->