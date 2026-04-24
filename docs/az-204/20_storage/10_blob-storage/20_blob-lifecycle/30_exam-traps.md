# Blob Lifecycle – Exam Traps

❗ Archive blobs cannot be read instantly
→ must be rehydrated

❗ Cool tier is NOT cheapest
→ archive is cheapest

❗ Lifecycle policies are automatic
→ no manual intervention needed

❗ Rehydration takes time (hours)

# Azure Blob Storage Tiers – Exam Traps (AZ-204)

## 🔥 Core Concept

Azure Blob Storage has **4 access tiers**:

- Hot
- Cool
- Cold
- Archive

---

## ⚠️ EXAM TRAP #1: Online vs Offline

| Tier      | Online доступ | Immediate Access | Notes |
|-----------|--------------|------------------|-------|
| Hot       | ✅ Yes       | ✅ Yes           | Frequent access |
| Cool      | ✅ Yes       | ✅ Yes           | Less frequent |
| Cold      | ✅ Yes       | ✅ Yes           | Rare access |
| Archive   | ❌ No        | ❌ No            | Requires rehydration |

👉 **Key takeaway:**
> Only **Archive** is offline!

---

## ⚠️ EXAM TRAP #2: Latency Confusion

- Hot / Cool / Cold → **milliseconds latency**
- Archive → **hours ("on the order of hours")**

👉 Archive is NOT usable for real-time scenarios.

---

## ⚠️ EXAM TRAP #3: Cool vs Cold

❌ Wrong assumption:
> "Cold is slower than Cool"

✅ Correct:
> Both are **equally available**, only **cost model differs**

| Tier  | Storage Cost | Access Cost | Typical Use |
|-------|-------------|-------------|-------------|
| Cool  | lower than Hot | higher | occasional access |
| Cold  | lower than Cool | even higher | very rare access |

---

## ⚠️ EXAM TRAP #4: API / HTTP Access

| Tier      | API / HTTP Access |
|-----------|------------------|
| Hot       | ✅ Yes |
| Cool      | ✅ Yes |
| Cold      | ✅ Yes |
| Archive   | ❌ No |

👉 Archive requires **Rehydration first**

---

## ⚠️ EXAM TRAP #5: Rehydration

- Only required for: **Archive**
- Duration:
  - **Hours**
- After rehydration:
  - Blob is temporarily in **Hot or Cool tier**

---

## ⚠️ EXAM TRAP #6: Minimum Retention

| Tier    | Minimum Storage Duration |
|---------|------------------------|
| Cool    | 30 days |
| Cold    | 90 days |
| Archive | 180 days |

👉 Early deletion = extra cost

---

## 🧠 Memory Trick

> **Hot / Cool / Cold = online (instant access)**  
> **Archive = offline (wait hours)**

---

## 🎯 Typical Exam Question Patterns

### Question Type 1
> "Which tier requires rehydration?"

✅ Answer: Archive

---

### Question Type 2
> "Which tiers are suitable for API access?"

✅ Answer:
- Hot
- Cool
- Cold

---

### Question Type 3
> "Data accessed once per year but must be immediately available"

✅ Answer: Cold

---

### Question Type 4
> "Cheapest storage, access latency not important"

✅ Answer: Archive

---

## 🚀 Summary

- **Hot** → frequent access
- **Cool** → infrequent access
- **Cold** → very infrequent access
- **Archive** → almost never, delayed access

👉 The real difference:
- **Hot/Cool/Cold = performance is similar**
- **Only Archive changes access behavior**