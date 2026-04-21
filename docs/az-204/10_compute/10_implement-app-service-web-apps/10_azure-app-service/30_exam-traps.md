# Azure App Service – Exam Traps

## Trap 1: App vs App Service Plan

❓ What defines CPU, RAM, and scaling?

<details>
<summary>Show Answer</summary>

✅ App Service Plan

Explanation:
The App Service Plan defines the compute resources.
The app itself only consumes those resources.

</details>

---

## Trap 2: Scaling Scope

❓ If you scale out an App Service, what is actually scaled?

<details>
<summary>Show Answer</summary>

✅ The App Service Plan

Explanation:
Scaling applies to the entire plan, not individual apps.
All apps in the plan are replicated across instances.

</details>

---

## Trap 3: Multiple Apps in One Plan

❓ Do multiple apps in the same App Service Plan share resources?

<details>
<summary>Show Answer</summary>

✅ Yes

Explanation:
CPU and memory are shared across all apps in the same plan.

</details>

---

## Trap 4: Highest Scaling Tier

❓ Which tier provides the maximum scale-out capabilities?

- Dedicated
- Isolated
- Shared

<details>
<summary>Show Answer</summary>

✅ Isolated

Explanation:
The Isolated tier (App Service Environment) provides the highest scale and network isolation.

</details>

---

## Trap 5: Deployment Slots

❓ Do deployment slots run on separate infrastructure?

<details>
<summary>Show Answer</summary>

❌ No

Explanation:
Slots share the same App Service Plan resources.
They are logical environments, not separate infrastructure.

</details>

---

## Trap 6: Zero Downtime Deployment

❓ How can you achieve zero downtime deployments?

<details>
<summary>Show Answer</summary>

✅ Deployment Slots (Swap)

Explanation:
Deploy to staging → validate → swap with production.

</details>

---

## Trap 7: Authentication

❓ Do you need to implement authentication in code for App Service?

<details>
<summary>Show Answer</summary>

❌ No

Explanation:
App Service provides built-in authentication ("Easy Auth").

</details>

---

## Trap 8: Networking Default Behavior

❓ Are App Service apps private by default?

<details>
<summary>Show Answer</summary>

❌ No

Explanation:
Apps are publicly accessible by default.

</details>

---

## Trap 9: Outbound Connectivity

❓ Can App Service access external internet services by default?

<details>
<summary>Show Answer</summary>

✅ Yes

Explanation:
Outbound internet access is enabled by default.

</details>

---

## Trap 10: VNet Integration

❓ Can App Service integrate with Azure Virtual Networks?

<details>
<summary>Show Answer</summary>

✅ Yes

Explanation:
App Service supports VNet integration for outbound traffic.

</details>

---

## Trap 11: Logs on Linux

❓ Which logging types are supported on Linux App Service?

<details>
<summary>Show Answer</summary>

✅ Web server logging  
✅ Deployment logging  

Explanation:
Failed request tracing is NOT supported on Linux.

</details>

---

## Trap 12: CI/CD vs Manual Deployment

❓ Which deployment method is recommended for production?

<details>
<summary>Show Answer</summary>

✅ Automated deployment (CI/CD)

Explanation:
Ensures consistency, repeatability, and faster releases.

</details>

---

## Trap 13: Plan Isolation

❓ What provides full network isolation?

<details>
<summary>Show Answer</summary>

✅ Isolated tier (App Service Environment)

Explanation:
Runs inside a private network (VNet).

</details>

---

## Trap 14: ARR Affinity

❓ What does ARR Affinity do?

<details>
<summary>Show Answer</summary>

✅ Keeps a client routed to the same instance

Explanation:
Used for stateful sessions.
Should be disabled for stateless apps.

</details>

---

## Trap 15: Runtime Configuration

❓ Where do you configure runtime (e.g., .NET, Node, PHP version)?

<details>
<summary>Show Answer</summary>

✅ In the App Service configuration

Explanation:
Even though compute comes from the plan, runtime is configured per app.

</details>