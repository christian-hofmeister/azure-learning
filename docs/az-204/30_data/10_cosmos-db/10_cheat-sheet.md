# Azure Cosmos DB – Cheat Sheet (AZ-204)

## 🚀 Core Concepts

- Fully managed NoSQL database
- Global distribution + multi-region replication
- Low latency (<10 ms)
- SLA-backed guarantees

---

## 🧱 Resource Model

Account → Database → Container → Item (JSON)

- Partition Key defined at **container level**
- Required for scalability

---

## ⚖️ Consistency Levels (Strong → Weak)

1. Strong
2. Bounded Staleness
3. Session (default)
4. Consistent Prefix
5. Eventual

👉 Strong = highest consistency, lowest performance  
👉 Eventual = lowest consistency, highest performance  

---

## 💰 Request Units (RU/s)

- Throughput = RU/s
- Every operation consumes RU

Examples:
- Read → ~1 RU
- Write → higher
- Query → depends on complexity

👉 If exceeded → **HTTP 429 (throttling)**

### Fix:
- Increase RU/s
- Optimize queries
- Use better partitioning

---

## 🧠 Partitioning (CRITICAL!)

Good partition key:
- High cardinality
- Even distribution
- Used in queries

Bad:
- Low cardinality
- Hot partitions

---

## 🔌 APIs

- SQL (Core) ✅
- MongoDB
- Cassandra
- Table
- Gremlin

---

## 🧑‍💻 .NET SDK v3

Namespace: ```Microsoft.Azure.Cosmos```


Key classes:
- CosmosClient
- Database
- Container

---

## ⚙️ Server-side Programming

Runs in JavaScript:

- Stored Procedures → transactional (single partition)
- Triggers → pre/post operations
- UDFs → used in queries

---

## 🔄 Change Feed

- Tracks inserts + updates
- Ordered

Use cases:
- Event-driven systems
- Azure Functions integration

👉 Does NOT track deletes

---

## ⚠️ Exam Traps

- ❌ No partition key needed
- ❌ Strong = best choice always
- ❌ Stored procedures cross partitions
- ❌ RU/s only for writes
- ❌ Change feed includes deletes

---

## 🎯 Must Know

- Consistency order
- RU/s + 429 handling
- Partition key importance
- Change Feed basics
- SDK usage