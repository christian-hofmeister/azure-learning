# AZ-204 – Deployment Slots & Swap (Exam Practice)

## 🧠 Overview

This section contains **realistic AZ-204 exam-style questions** about:
- Deployment Slots
- Swap behavior
- Auto Swap
- Slot settings
- Traffic routing

Focus: **Common traps and misunderstandings**

---

## ❓ Question 1 – Auto Swap Behavior

You have **Auto Swap enabled from staging to production**.  
A developer deploys faulty code to the staging slot.

What happens?

<details>
<summary>Show Answer</summary>

✅ The faulty code is deployed to production (if warmup succeeds)

**Explanation:**
- Auto Swap only checks if the app starts successfully
- No validation of business logic
- No automatic rollback

⚠️ Trap:
Azure does NOT detect application errors

</details>

---

## ❓ Question 2 – Zero Downtime

Which option provides **zero downtime deployment**?

A) Deploy directly to production  
B) Use deployment slot and swap  
C) Stop and restart the app  
D) Scale the app during deployment  

<details>
<summary>Show Answer</summary>

✅ B) Use deployment slot and swap

**Explanation:**
- App is warmed up before going live
- Swap is atomic

⚠️ Trap:
Scaling does NOT guarantee zero downtime

</details>

---

## ❓ Question 3 – Slot Settings (Sticky Settings)

You configure:
- A connection string marked as *slot setting*
- A normal app setting

What happens during a swap?

<details>
<summary>Show Answer</summary>

✅ Only non-slot settings are swapped

| Setting Type     | Behavior        |
|------------------|----------------|
| Slot Setting     | Stays in slot  |
| Normal Setting   | Swapped        |

🧠 Rule:
**"Slot settings stay where they are"**

</details>

---

## ❓ Question 4 – Shared Database Risk

Your staging slot uses the **same database as production**.

What is the risk?

<details>
<summary>Show Answer</summary>

✅ You are modifying production data during testing

**Risks:**
- Data corruption
- Accidental overwrites
- Immediate impact on production

✔ Best Practice:
Use separate databases for staging and production

</details>

---

## ❓ Question 5 – Swap Process

What happens internally during a swap?

A) Immediate switch  
B) Production is stopped  
C) Target slot is warmed up first  
D) Database is synchronized  

<details>
<summary>Show Answer</summary>

✅ C) Target slot is warmed up first

**Steps:**
1. Apply production settings to staging
2. Warm up staging slot
3. Switch routing

⚠️ Trap:
Swap is NOT instant

</details>

---

## ❓ Question 6 – Prevent Bad Deployments

You want to prevent faulty code from reaching production.

What should you do?

A) Disable Auto Swap  
B) Run tests before deployment  
C) Delete the slot  
D) Disable ARR Affinity  

<details>
<summary>Show Answer</summary>

✅ B) Run tests before deployment

**Explanation:**
- Azure does not validate code correctness
- CI pipeline must ensure quality

✔ Optional:
Use Auto Swap only with stable pipelines

</details>

---

## ❓ Question 7 – ARR Affinity

Why can ARR Affinity be problematic with deployment slots?

<details>
<summary>Show Answer</summary>

✅ Sessions may stick to the wrong instance

**Impact:**
- Users might hit old instances after swap
- Session inconsistency

✔ Best Practice:
- Use stateless applications
- Disable ARR if not needed

</details>

---

## ❓ Question 8 – Slot Limits

Which statement is correct?

A) Unlimited slots  
B) Slots only exist in Free tier  
C) Number of slots depends on App Service Plan  
D) Slots are always free  

<details>
<summary>Show Answer</summary>

✅ C) Number of slots depends on App Service Plan

**Examples:**
- Standard: ~5 slots
- Premium: more

⚠️ Traps:
- Slots are not free
- Not available in Free/Shared tiers

</details>

---

## ❓ Question 9 – Rollback Strategy

You swapped to production and detect a bug.

What is the fastest rollback strategy?

<details>
<summary>Show Answer</summary>

✅ Swap back immediately

**Explanation:**
- Previous version is still in the other slot
- Fast and reliable rollback

</details>

---

## ❓ Question 10 – Traffic Routing

You want to send **10% of traffic to staging**.

Which feature do you use?

<details>
<summary>Show Answer</summary>

✅ Traffic Routing (percentage-based routing)

**Use Cases:**
- Canary releases
- A/B testing

⚠️ Trap:
This is NOT related to Auto Swap

</details>

---

## 🔥 Bonus Exam Trap

**Requirement:**
- Zero downtime
- Ability to validate before going live

✅ Correct Solution:
- Deployment slot
- **Manual swap (NOT Auto Swap)**

---

## 🧠 Quick Cheat Sheet

- Auto Swap = automatic swap after warmup  
- Slot settings = stay in slot  
- Swap ≠ database isolation  
- Slots = built-in rollback  
- Traffic routing ≠ swap  

---