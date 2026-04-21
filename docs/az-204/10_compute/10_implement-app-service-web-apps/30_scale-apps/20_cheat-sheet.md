# ⚡ Scale Apps in Azure App Service – Cheat Sheet (AZ-204)

## 🎯 Core Idea

Scaling in Azure App Service allows your app to:
- Handle load
- Improve performance
- Optimize cost

---

## ⚙️ Scaling Types

### 🔹 Scale Up (Vertical)
- Increase instance size (CPU/RAM)
- Change pricing tier

### 🔹 Scale Out (Horizontal) ✅
- Increase number of instances
- Preferred for cloud-native apps

---

## 🔄 Scaling Scope

- Scaling applies to **App Service Plan**
- All apps in the plan scale together

---

## 📊 Autoscale

### 🔹 Requirements

- Standard tier or higher
- Not available in Free/Shared

---

### 🔹 Components

- Metric (CPU, Memory, HTTP Queue)
- Condition (threshold)
- Action (scale in/out)
- Duration (time window)

---

### 🔹 Example

- CPU > 70% → scale out
- CPU < 30% → scale in

---

## ⚠️ Key Concepts

- Cooldown prevents rapid scaling
- Instances are identical
- Stateless design required

---

## ⚡ Best Practices

- Use scale out instead of scale up
- Set min instances > 1
- Define max limit (cost control)
- Use realistic thresholds

---

## 🚨 Exam Traps

- ❗ Scaling = App Service Plan level
- ❗ All apps scale together
- ❗ Free tier → no autoscale
- ❗ Stateless required
- ❗ Cooldown prevents thrashing
- ❗ Scale out > scale up

---

## ⚡ 10-Second Recall

- Plan-level scaling
- Autoscale = metrics + rules
- Stateless app
- Standard tier required
- Cooldown active