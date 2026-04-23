# Azure Functions Hosting – Exam Scenarios (AZ-204)

## 🧠 How to Think in the Exam

1. Identify keywords:
   - "serverless" → Consumption / Flex
   - "no cold start" → Premium
   - "predictable cost" → Dedicated
   - "VNET" → Flex or Premium

2. Eliminate wrong answers quickly

---

## ❓ Question 1

You need a serverless solution with minimal cost.  
Cold start is acceptable.

What should you choose?

<details>
<summary>Show Answer</summary>

👉 **Consumption Plan**

- Cheapest option
- Pay-per-execution
- Cold start is allowed

</details>

---

## ❓ Question 2

Your application must:
- Avoid cold start
- Scale automatically

What should you choose?

<details>
<summary>Show Answer</summary>

👉 **Premium Plan**

- Pre-warmed instances
- No cold start
- Auto scaling

</details>

---

## ❓ Question 3

You need:
- Serverless architecture
- VNET integration
- Pay-as-you-go billing

What should you choose?

<details>
<summary>Show Answer</summary>

👉 **Flex Consumption Plan**

- Serverless
- VNET supported
- Pay-per-execution

</details>

---

## ❓ Question 4 (TRICKY)

You need:
- Predictable monthly cost
- Full control over scaling

What should you choose?

<details>
<summary>Show Answer</summary>

👉 **Dedicated (App Service Plan)**

- Fixed infrastructure
- Manual scaling
- Predictable billing

</details>

---

## ❓ Question 5

A function is rarely used but must respond instantly.

What should you choose?

<details>
<summary>Show Answer</summary>

👉 **Premium Plan**

- No cold start
- Even for low usage

⚠️ Consumption would introduce cold start delays

</details>

---

## ❓ Question 6 (EXAM FAVORITE)

You need:
- High scalability
- Serverless
- Advanced networking (VNET)

What should you choose?

<details>
<summary>Show Answer</summary>

👉 **Flex Consumption Plan**

⚠️ Classic Consumption has limited VNET support

</details>

---

## ❓ Question 7

You already run an App Service Plan and want to add background processing.

What should you choose?

<details>
<summary>Show Answer</summary>

👉 **Dedicated Plan (App Service Plan)**

- Reuse existing infrastructure
- Cost-efficient in this scenario

</details>

---

## ❓ Question 8 (ELIMINATION TRICK)

Which plan:
- Does NOT support serverless billing?

<details>
<summary>Show Answer</summary>

👉 **Dedicated Plan**

- Fixed cost
- Not pay-per-execution

</details>

---

## ⚠️ Common Exam Traps

❌ "Serverless = no cold start"  
→ WRONG → only Premium avoids cold start  

❌ "Consumption supports everything"  
→ WRONG → limited VNET  

❌ "Flex = same as Consumption"  
→ WRONG → more powerful  

❌ "Premium = always cheapest"  
→ WRONG → it's more expensive  

---

## 🧠 Final Mental Model

| Requirement | Plan |
|------------|------|
| Cheapest | Consumption |
| Serverless + VNET | Flex |
| No cold start | Premium |
| Predictable cost | Dedicated |

---

## 🚀 Pro Tip

👉 In the exam, you often only need **1 keyword** to win:

- "cold start" → Premium  
- "predictable" → Dedicated  
- "serverless + VNET" → Flex  
- "cheap" → Consumption  