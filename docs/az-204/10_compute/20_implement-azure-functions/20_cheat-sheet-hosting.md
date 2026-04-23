# Azure Functions Hosting Plans – Cheat Sheet (AZ-204)

## 📌 Overview

Choosing the correct hosting plan is **critical** in Azure Functions.

👉 The 4 main options:
- Consumption
- Flex Consumption
- Premium
- Dedicated (App Service Plan)

---

## ⚡ Quick Comparison

| Feature | Consumption | Flex Consumption | Premium | Dedicated |
|--------|------------|------------------|--------|-----------|
| Serverless | ✅ | ✅ | ❌ (semi) | ❌ |
| Scaling | Auto | ✅ Auto (enhanced) | Auto | Manual |
| Billing | Pay-per-execution | Pay-per-execution | Always-on pricing | Fixed cost |
| Cold Start | ❌ Yes | ⚠️ Reduced | ❌ No | ❌ No |
| VNET Support | ❌ Limited | ✅ Yes | ✅ Yes | ✅ Yes |
| Compute Control | ❌ | ✅ | ✅ | ✅ |
| Always On | ❌ | ❌ | ✅ | ✅ |

---

## 🧠 Plan Breakdown

### 1. Consumption Plan

👉 **Default serverless option**

**Key points:**
- Pay only when function runs
- Automatic scaling
- Cold start exists
- Limited VNET support

**Use when:**
- Event-driven workloads
- Low/irregular traffic

---

### 2. Flex Consumption Plan

👉 **Enhanced Consumption (IMPORTANT for AZ-204)**

**Key points:**
- Pay-as-you-go
- Better scaling behavior
- More compute options (memory/CPU)
- Full VNET support
- Reduced cold start

**Use when:**
- Need serverless + networking
- More control than Consumption

---

### 3. Premium Plan

👉 **High-performance serverless**

**Key points:**
- Pre-warmed instances
- No cold start
- Auto-scaling
- VNET support

**Use when:**
- Latency-sensitive apps
- High load
- Enterprise scenarios

---

### 4. Dedicated Plan (App Service Plan)

👉 **Classic hosting (NOT really serverless)**

**Key points:**
- Runs on reserved VMs
- Manual scaling
- Predictable cost
- Always running

**Use when:**
- Existing App Service
- Long-running processes
- Full control required

---

## 🎯 Decision Guide

| Requirement | Choose |
|------------|--------|
| Cheapest, simple serverless | Consumption |
| Serverless + VNET + flexibility | Flex Consumption |
| No cold start | Premium |
| Predictable cost / fixed infra | Dedicated |

---

## ⚠️ Exam Traps

- "Serverless" ≠ always no cold start  
  → Only **Premium** avoids cold start

- "Predictable cost"  
  → **Dedicated**, NOT Consumption

- "VNET support required"  
  → Flex Consumption or Premium

- "Best scalability"  
  → Flex Consumption or Premium

- "Always running"  
  → Premium or Dedicated

---

## 🧠 Memory Tricks

- **Consumption = cheap but cold**
- **Flex = consumption but better**
- **Premium = fast + no cold start**
- **Dedicated = classic hosting**

---

## 🚀 Key Takeaways

- Flex Consumption is **very exam-relevant**
- Premium = **no cold start**
- Dedicated = **not serverless**
- Consumption = **baseline serverless**