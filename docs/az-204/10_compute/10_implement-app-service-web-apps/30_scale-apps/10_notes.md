# 📄 Scale Apps in Azure App Service – Notes (AZ-204)

## 📌 Overview

Azure App Service provides built-in scaling capabilities to handle varying workloads.

Scaling helps to:
- Improve performance
- Handle traffic spikes
- Optimize cost
- Ensure high availability

---

## ⚙️ Scaling Concepts

### 🔹 Scale Up (Vertical Scaling)

- Increase resources of a single instance
- Change App Service Plan tier (e.g., B1 → S1 → P1V3)

### 🔹 Scale Out (Horizontal Scaling)

- Increase number of instances
- Same app runs on multiple instances

👉 **Scale out = preferred in cloud-native apps**

---

## 🔄 Examine Scale Out Options

### 🔹 Manual Scaling

- Set a fixed number of instances
- Simple but static

### 🔹 Autoscaling

- Automatically adjusts instance count
- Based on defined rules

---

### 👉 Scaling 


- Manual scale-out	starts with Tier: Basic
- Autoscale	starts with Tier  Standard 

---

### 🔹 Key Points (Exam!)

- Scaling happens at **App Service Plan level**
- All apps in the plan scale together
- Each instance is identical

---

## 📊 Identify Autoscale Factors

Autoscale rules are based on **metrics**.

### 🔹 Common Metrics

| Metric | Description |
|--------|------------|
| CPU Percentage | CPU usage |
| Memory Percentage | Memory usage |
| HTTP Queue Length | Pending requests |
| Data In/Out | Network usage |

---

### 🔹 Rule Components

Each autoscale rule consists of:

- **Metric** (e.g., CPU > 70%)
- **Condition** (threshold)
- **Action** (scale out/in)
- **Duration** (time window)

---

### 🔹 Example

- If CPU > 70% for 5 minutes → scale out (+1 instance)
- If CPU < 30% for 10 minutes → scale in (-1 instance)

---

## ⚙️ Enable Autoscale in App Service

### 🔹 Steps

1. Go to App Service Plan
2. Select **Scale out (App Service plan)**
3. Enable autoscale
4. Define:
   - Minimum instances
   - Maximum instances
   - Default instance count
5. Add scaling rules

---

### 🔹 Important Notes

- Autoscale applies to the **App Service Plan**, not individual apps
- Requires **Standard tier or higher**
- Free/Shared tiers do NOT support autoscale

---

## ⚡ Autoscale Behavior

### 🔹 Scale Out

- Triggered when load increases
- Adds instances

### 🔹 Scale In

- Triggered when load decreases
- Removes instances

---

### 🔹 Cooldown Period

- Prevents rapid scaling (thrashing)
- Wait time between scaling actions

---

## ⚠️ Autoscale Best Practices

### 🔹 Design Principles

- Use **stateless applications**
- Avoid session state on instance
- Externalize state (e.g., Redis, DB)

---

### 🔹 Rule Design

- Use **realistic thresholds**
- Avoid aggressive scaling
- Combine multiple metrics if needed

---

### 🔹 Cost Optimization

- Set reasonable **max instance limit**
- Scale in aggressively when idle
- Monitor usage patterns

---

### 🔹 Reliability

- Set minimum instances > 1 for HA
- Test autoscale rules in staging

---

## 🧠 Exam Traps & Key Points

- ❗ Scaling happens at **App Service Plan level**
- ❗ All apps in plan scale together
- ❗ Autoscale requires **Standard tier+**
- ❗ Free/Shared → NO autoscale
- ❗ Scale out > scale up (preferred)
- ❗ Stateless design is required
- ❗ Cooldown prevents rapid scaling
- ❗ Metrics drive scaling decisions

---

## 🔁 Scale Up vs Scale Out

| Feature | Scale Up | Scale Out |
|--------|---------|-----------|
| Type | Vertical | Horizontal |
| Change | Bigger machine | More instances |
| Downtime | Possible | No |
| Cloud-native | ❌ | ✅ |

---

## 🧠 Mini Self-Test

<details>
<summary>1. What level does scaling apply to?</summary>

✅ App Service Plan

</details>

<details>
<summary>2. Can Free tier use autoscale?</summary>

❌ No

</details>

<details>
<summary>3. What is preferred in cloud-native design?</summary>

✅ Scale out (horizontal)

</details>

<details>
<summary>4. Why must apps be stateless?</summary>

✅ Because requests can hit different instances

</details>

<details>
<summary>5. What prevents rapid scaling up/down?</summary>

✅ Cooldown period

</details>

---

## 🚀 Quick Recall

- Scale = Plan level
- Autoscale = rules + metrics
- Stateless = mandatory
- Standard+ = required
- Cooldown = stability