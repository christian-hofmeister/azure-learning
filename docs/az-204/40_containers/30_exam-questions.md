# AZ-204 – Containerized Solutions – Practice Questions

---

## ❓ Question 1
You need to store private container images and trigger builds when code changes.

What should you use?

- A) Azure Container Instances
- B) Azure Container Registry
- C) Azure Container Apps

<details>
<summary>✅ Answer</summary>

B) Azure Container Registry

✔ Stores images  
✔ Supports build triggers (ACR Tasks)

</details>

---

## ❓ Question 2
You need to run a containerized background job that executes once and stops.

What should you use?

- A) ACI with Never restart policy
- B) Container Apps
- C) AKS

<details>
<summary>✅ Answer</summary>

A) ACI with Never restart policy

✔ Simple job  
✔ No orchestration needed  

</details>

---

## ❓ Question 3
You need a microservices platform with autoscaling and minimal infrastructure management.

What should you use?

- A) ACI
- B) Container Apps
- C) ACR

<details>
<summary>✅ Answer</summary>

B) Container Apps

✔ Autoscaling  
✔ Serverless  
✔ Microservices-ready  

</details>

---

## ❓ Question 4
A container must restart only when it fails.

Which restart policy?

- A) Always
- B) Never
- C) OnFailure

<details>
<summary>✅ Answer</summary>

C) OnFailure

</details>

---

## ❓ Question 5
You need to persist data in Azure Container Instances.

What should you use?

- A) Local disk
- B) Azure Blob Storage automatically
- C) Azure File Share mount

<details>
<summary>✅ Answer</summary>

C) Azure File Share mount

✔ ACI is stateless  

</details>

---

## ❓ Question 6
You need automatic scaling based on events (queue messages).

What should you use?

- A) ACI
- B) Container Apps with KEDA
- C) ACR

<details>
<summary>✅ Answer</summary>

B) Container Apps with KEDA

✔ Event-driven scaling  

</details>

---

## ❓ Question 7
You want to split traffic between two versions of your app.

What should you use?

- A) ACI
- B) Container Apps revisions
- C) ACR tags

<details>
<summary>✅ Answer</summary>

B) Container Apps revisions

✔ Traffic splitting supported  

</details>

---

## ❓ Question 8
You want to automatically rebuild an image when the base image is updated.

What should you use?

- A) GitHub Actions only
- B) ACR Tasks
- C) ACI

<details>
<summary>✅ Answer</summary>

B) ACR Tasks

✔ Native feature  

</details>