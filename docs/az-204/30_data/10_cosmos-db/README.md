<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

## Markdown Files

- [Cheat Sheet](10_cheat-sheet.md)
- [Exam Realistic](20_exam-realistic.md)


---

# Azure Cosmos DB (AZ-204)

## 📌 Overview

Azure Cosmos DB is a fully managed, globally distributed NoSQL database service designed for high availability, low latency, and elastic scalability.

---

## 🚀 Key Benefits

- 🌍 Global distribution (multi-region replication)
- ⚡ Low latency (<10 ms reads/writes)
- 📈 Automatic scaling (throughput & storage)
- 🧩 Multiple APIs (SQL, MongoDB, Cassandra, Table, Gremlin)
- 🔒 SLA-backed guarantees (availability, latency, consistency)

---

## 🧱 Resource Hierarchy
```
Account → Database → Container → Items
```


- **Account** → top-level resource (global distribution, APIs)
- **Database** → logical grouping
- **Container (Collection)** → holds items + partitioning
- **Item** → JSON document

👉 Important:
- **Partition Key** is defined at container level
- Determines scalability & performance

---

## ⚖️ Consistency Levels

From strongest → weakest:

1. Strong
2. Bounded Staleness
3. Session (default)
4. Consistent Prefix
5. Eventual

### Key Points

- Strong = linear consistency, highest latency
- Eventual = best performance, weakest guarantees
- Session = **default & most common**

👉 Exam Tip:
- **Strong consistency = lowest performance**
- **Eventual consistency = highest performance**

---

## 🔍 Choosing Consistency Level

| Scenario                  | Recommended Level |
|--------------------------|------------------|
| Financial transactions   | Strong           |
| User session data        | Session          |
| Social media feeds       | Eventual         |
| Global apps              | Bounded Staleness|

---

## 🔌 Supported APIs

- SQL (Core API) ✅ most common
- MongoDB API
- Cassandra API
- Table API
- Gremlin API (graph)

👉 All use same backend, different protocols

---

## 💰 Request Units (RU/s)

- Throughput is measured in **Request Units per second (RU/s)**

Examples:
- Read small item → ~1 RU
- Write item → higher RU
- Complex query → more RU

### Key Concepts

- Provisioned throughput (manual or autoscale)
- RU consumption depends on:
  - item size
  - query complexity
  - indexing

👉 Exam Tip:
- If throttled → HTTP **429**
- Solution:
  - increase RU/s
  - optimize queries

---

## 🧑‍💻 .NET SDK v3 (Important!)

Namespace: ```Microsoft.Azure.Cosmos```


### Common Operations

- Create database/container
- CRUD operations
- Queries using SQL syntax

Example concepts:
- `CosmosClient`
- `Database`
- `Container`

---

## ⚙️ Stored Procedures, Triggers, UDFs

Run **inside Cosmos DB (server-side, JavaScript)**

### Stored Procedures
- Transactional (within partition)
- Multiple operations

### Triggers
- Pre-trigger (before operation)
- Post-trigger (after operation)

### UDF (User Defined Functions)
- Custom logic in queries

👉 Limitation:
- Only within **single partition**

---

## 🔄 Change Feed

- Tracks changes (inserts & updates)
- Ordered by time

### Use Cases

- Event-driven architectures
- Data synchronization
- Stream processing

👉 Exam Tip:
- Works per container
- Used with Azure Functions often

---

## 🧠 Partitioning (VERY IMPORTANT!)

- Required for scalability
- Partition key defines:
  - data distribution
  - query performance

### Good Partition Key

- High cardinality
- Even distribution
- Frequently used in queries

### Bad Partition Key

- Low cardinality (e.g. "status")
- Hot partitions

---

## ⚠️ Common Exam Traps

- ❌ Strong consistency = best → (wrong, slowest!)
- ❌ No partition key needed → (wrong!)
- ❌ Stored procedures = cross-partition → (wrong!)
- ❌ RU/s only for writes → (wrong!)
- ❌ Change feed includes deletes → (wrong!)

---

## 🏁 Summary

- Cosmos DB = globally distributed NoSQL DB
- RU/s = performance currency
- Partitioning = critical for scaling
- Multiple APIs, same backend
- Consistency vs performance tradeoff
- Change Feed = event-driven patterns

---

## 🎯 Must-Know for Exam

- Consistency levels (order!)
- RU/s behavior + throttling (429)
- Partition key importance
- SDK basics (.NET)
- Change Feed usage
- APIs supported

---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

## Markdown Files

- [Cheat Sheet](10_cheat-sheet.md)
- [Exam Realistic](20_exam-realistic.md)


---