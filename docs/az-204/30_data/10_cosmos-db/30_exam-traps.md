# Azure Cosmos DB – Exam Traps (AZ-204)

## ⚠️ Stored Procedures & context

### Trap

> "The context object provides access to the database schema and metadata."

❌ **Wrong**

### Correct

> The context object provides access to:

* Collection operations (`getCollection()`)
* Request object (`getRequest()`)
* Response object (`getResponse()`)

### 🧠 Remember

* `context` = **entry point to Cosmos DB engine**
* Used inside **JavaScript stored procedures**
* Enables **transactional operations within a partition**

---

## ⚠️ Pretriggers vs Posttriggers

### Trap 1

> "Pretriggers are automatically executed."

❌ **Wrong**

### Trap 2

> "Pretriggers run after modifying data."

❌ **Wrong**

### Correct

* **Pretriggers**

  * Run **before** item modification
  * Must be **explicitly specified per request**

* **Posttriggers**

  * Run **after** item modification
  * Must also be **explicitly specified**

### 🧠 Remember

| Type        | When   | Automatic |
| ----------- | ------ | --------- |
| Pretrigger  | Before | ❌ No      |
| Posttrigger | After  | ❌ No      |

👉 **Nothing runs automatically!**

---

## ⚠️ Change Feed & Lease Container

### Trap

> "The lease container stores the change feed data."

❌ **Wrong**

### Correct

* Lease container:

  * Stores **processing state (checkpoints)**
  * Coordinates **multiple workers**
  * Tracks **partition ownership**

### 🧠 Remember

* Change Feed = **data stream**
* Lease Container = **progress + coordination**

---

## ⚠️ Change Feed Processing

### Trap 1

> "Only one consumer can read the change feed."

❌ **Wrong**

### Trap 2

> "The change feed marks items as read."

❌ **Wrong**

### Correct

* Multiple consumers possible
* Each uses its own **lease container**
* No "read flag" in Cosmos DB

### 🧠 Remember

* Stateless stream
* State is **externalized in lease container**

---

## ⚠️ Transactions in Cosmos DB

### Trap

> "Cosmos DB supports multi-item transactions across partitions."

❌ **Wrong**

### Correct

* Transactions are:

  * Only within **one logical partition**
  * Typically implemented via:

    * Stored Procedures (JavaScript)

### 🧠 Remember

👉 **Partition = transaction boundary**

---

## ⚠️ Partitioning

### Trap

> "A partition is the same as a database."

❌ **Wrong**

### Correct

* Partition = logical grouping of items
* Based on **partition key**
* Used for:

  * Scalability
  * Performance

### 🧠 Remember

* Database → Container → Partition → Items

---

## ⚠️ Request Units (RU)

### Trap

> "Only write operations consume RUs."

❌ **Wrong**

### Correct

* RUs are consumed by:

  * Reads
  * Writes
  * Queries
  * Stored Procedures

### 🧠 Remember

👉 **Everything costs RUs**

---

## ⚠️ Consistency Levels

### Trap

> "Strong consistency is always the best choice."

❌ **Wrong**

### Correct

* Trade-off:

  * Strong consistency → lower performance / higher latency
  * Eventual consistency → higher performance

### 🧠 Remember

👉 **Consistency vs Performance trade-off**

---

## 🚀 Final Exam Tips

* Watch for keywords:

  * **automatic** → usually false
  * **always** → usually false
  * **only** → often false
* Focus on:

  * Partition boundaries
  * Explicit vs implicit behavior
  * Distributed system concepts

---
