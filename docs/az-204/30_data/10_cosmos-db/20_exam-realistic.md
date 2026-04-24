# Azure Cosmos DB – Exam Questions (AZ-204)

## 🟢 Question 1

You receive HTTP 429 errors when querying Cosmos DB.

What should you do?

A) Increase storage  
B) Increase RU/s  
C) Change consistency level to Strong  
D) Add more regions  

<details>
<summary>Answer</summary>

✅ B) Increase RU/s

Explanation:
429 = throttling → throughput exceeded

</details>

---

## 🟢 Question 2

Which consistency level provides the BEST performance?

A) Strong  
B) Session  
C) Eventual  
D) Bounded Staleness  

<details>
<summary>Answer</summary>

✅ C) Eventual

Explanation:
Weakest consistency = best performance

</details>

---

## 🟡 Question 3

What is REQUIRED when creating a container?

A) Index policy  
B) Partition key  
C) Region  
D) API type  

<details>
<summary>Answer</summary>

✅ B) Partition key

Explanation:
Mandatory for scaling and distribution

</details>

---

## 🟡 Question 4

Which operations consume RU/s?

A) Only writes  
B) Only reads  
C) Only queries  
D) All operations  

<details>
<summary>Answer</summary>

✅ D) All operations

Explanation:
Every operation consumes RU

</details>

---

## 🔴 Question 5

You need transactional logic across multiple items.

What should you use?

A) UDF  
B) Trigger  
C) Stored Procedure  
D) Change Feed  

<details>
<summary>Answer</summary>

✅ C) Stored Procedure

⚠️ But only within a single partition!

</details>

---

## 🔴 Question 6

Which feature is BEST for reacting to new data in Cosmos DB?

A) Triggers  
B) Change Feed  
C) UDF  
D) Stored Procedures  

<details>
<summary>Answer</summary>

✅ B) Change Feed

Explanation:
Used for event-driven architectures

</details>

---

## 🔴 Question 7

What happens if you choose a bad partition key?

A) Data loss  
B) Increased latency & throttling  
C) No scaling possible  
D) Queries fail  

<details>
<summary>Answer</summary>

✅ B) Increased latency & throttling

Explanation:
Hot partitions → uneven load

</details>

---

## 🔴 Question 8

Which statement about Change Feed is TRUE?

A) Includes deletes  
B) Tracks only reads  
C) Tracks inserts and updates  
D) Works across accounts  

<details>
<summary>Answer</summary>

✅ C) Tracks inserts and updates

</details>

---

## 🟣 Question 9 (Hard)

You need strong consistency across multiple regions.

What is the impact?

A) Lower latency  
B) Higher availability  
C) Higher latency and lower performance  
D) No impact  

<details>
<summary>Answer</summary>

✅ C) Higher latency and lower performance

</details>

---

## 🟣 Question 10 (Hard)

Which API is MOST commonly used in Cosmos DB?

A) Cassandra  
B) MongoDB  
C) SQL (Core)  
D) Table  

<details>
<summary>Answer</summary>

✅ C) SQL (Core)

</details>

---

## 🧠 Mini Mock

1. What causes HTTP 429?
2. Which consistency is default?
3. What does Change Feed track?
4. Why is partition key critical?

<details>
<summary>Answers</summary>

1. RU/s exceeded  
2. Session  
3. Inserts + Updates  
4. Scalability + performance  

</details>