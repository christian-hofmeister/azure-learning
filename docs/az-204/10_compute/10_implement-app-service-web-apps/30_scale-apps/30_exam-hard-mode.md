# 🧠 AZ-204 Hard Mode – Scaling in App Service

## ❗ Instructions

- Think like in the exam
- Eliminate wrong answers
- Multiple answers possible

---

## 🔥 Question 1

You need automatic scaling based on CPU usage.

What must be configured?

A) Deployment slots  
B) Autoscale rules  
C) App Service Plan (Standard+)  
D) Application settings  

<details>
<summary>Answer</summary>

✅ B, C

---

### Why:

- Autoscale requires rules + supported tier

---

### Why others are wrong:

❌ A → deployment only  
❌ D → unrelated  

</details>

---

## 🔥 Question 2

Your app is in Free tier and needs autoscaling.

What should you do?

A) Enable autoscale  
B) Upgrade App Service Plan  
C) Add more apps  
D) Use deployment slots  

<details>
<summary>Answer</summary>

✅ B

---

### Why:

- Autoscale requires Standard+

---

### Why others are wrong:

❌ A → not supported  
❌ C → no scaling effect  
❌ D → unrelated  

</details>

---

## 🔥 Question 3

Your app stores session state in memory.

What is the risk when scaling out?

<details>
<summary>Answer</summary>

❌ Session inconsistency

---

### Why:

- Requests hit different instances
- State not shared

</details>

---

## 🔥 Question 4

You want to reduce costs during low traffic.

What should you configure?

A) Scale out aggressively  
B) Scale in rules  
C) Increase instance size  
D) Disable autoscale  

<details>
<summary>Answer</summary>

✅ B

---

### Why:

- Scale in reduces instances

---

### Why others are wrong:

❌ A → increases cost  
❌ C → more expensive  
❌ D → no automation  

</details>

---

## 🔥 Question 5

Which metric is best for web traffic scaling?

A) CPU  
B) HTTP Queue Length  
C) Disk usage  
D) TLS version  

<details>
<summary>Answer</summary>

✅ B (best), A (also valid)

---

### Why:

- Queue length reflects real load

---

### Why others are wrong:

❌ C → unrelated  
❌ D → unrelated  

</details>

---

# 💀 Case Study – Scaling Scenario

## 📘 Scenario

Your App Service:

- Runs on Standard tier
- Handles unpredictable traffic
- Must:
  - Scale automatically
  - Minimize cost
  - Remain highly available

---

## 🔥 Question 6 (Multi-answer)

Which configuration is correct?

A) Min instances = 1  
B) Min instances = 2  
C) Max instances defined  
D) No max limit  

<details>
<summary>Answer</summary>

✅ B, C

---

### Why:

- Min >1 for HA
- Max limits cost

---

### Why others are wrong:

❌ A → no HA  
❌ D → cost risk  

</details>

---

## 🔥 Question 7

Scaling is triggered too often.

What is the likely issue?

<details>
<summary>Answer</summary>

❌ Missing or too short cooldown

</details>

---

## 🔥 Question 8

All apps scale unexpectedly.

What is the reason?

<details>
<summary>Answer</summary>

❌ Scaling is applied at App Service Plan level

</details>

---

## 🔥 Question 9

You need the MOST cloud-native scaling setup.

Which is correct?

A) Scale up + session memory  
B) Scale out + stateless  
C) Manual scaling  
D) File-based state  

<details>
<summary>Answer</summary>

✅ B

</details>

---

# 🧠 Final Takeaways

## ✅ Always choose:

- Scale out
- Stateless design
- Autoscale rules
- Blob/external state

---

## ❌ Avoid:

- Session in memory
- Scale up only
- Free tier for production
- No max limits

---

## 🏁 90%+ Rule

If you see:
- Stateless → correct
- Autoscale → correct
- Plan-level scaling → correct

👉 you're on the right track