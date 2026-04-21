# Azure App Service – Practice Questions

## Question 1

Which component defines the compute resources (CPU, RAM) for a web app?

- A) App Service App  
- B) App Service Plan  
- C) Deployment Slot  
- D) Azure Monitor  

<details>
<summary>Show Answer</summary>

✅ B) App Service Plan

Explanation:
The App Service Plan defines the compute resources.

</details>

---

## Question 2

You have three web apps in the same App Service Plan. You scale out to 3 instances. What happens?

- A) Only one app scales  
- B) All apps scale together  
- C) Only production slot scales  
- D) Nothing changes  

<details>
<summary>Show Answer</summary>

✅ B) All apps scale together

Explanation:
Scaling applies to the entire App Service Plan.

</details>

---

## Question 3

Which feature enables zero-downtime deployments?

- A) Autoscale  
- B) Deployment Slots  
- C) VNet Integration  
- D) Application Insights  

<details>
<summary>Show Answer</summary>

✅ B) Deployment Slots

Explanation:
You deploy to staging and swap with production.

</details>

---

## Question 4

Which tier provides the highest level of isolation and scalability?

- A) Free  
- B) Shared  
- C) Dedicated  
- D) Isolated  

<details>
<summary>Show Answer</summary>

✅ D) Isolated

Explanation:
Isolated tier runs in an App Service Environment.

</details>

---

## Question 5

Which authentication method is built into App Service?

- A) Custom OAuth only  
- B) Easy Auth  
- C) Windows Authentication only  
- D) API Gateway  

<details>
<summary>Show Answer</summary>

✅ B) Easy Auth

Explanation:
Built-in authentication without code.

</details>

---

## Question 6

What is the default network accessibility of an App Service?

- A) Private only  
- B) Publicly accessible  
- C) VNet only  
- D) On-premises only  

<details>
<summary>Show Answer</summary>

✅ B) Publicly accessible

Explanation:
Apps are public by default.

</details>

---

## Question 7

Which of the following is TRUE about deployment slots?

- A) They use separate compute resources  
- B) They share the same App Service Plan  
- C) They require separate subscriptions  
- D) They cannot be swapped  

<details>
<summary>Show Answer</summary>

✅ B) They share the same App Service Plan

Explanation:
Slots are logical environments.

</details>

---

## Question 8

Which scaling type adds more instances?

- A) Scale Up  
- B) Scale Out  
- C) Scale Down  
- D) Scale In  

<details>
<summary>Show Answer</summary>

✅ B) Scale Out

Explanation:
Scale out = horizontal scaling (more instances).

</details>

---

## Question 9

Which feature allows secure outbound connections to private resources?

- A) Deployment slots  
- B) VNet Integration  
- C) Autoscale  
- D) FTP  

<details>
<summary>Show Answer</summary>

✅ B) VNet Integration

Explanation:
Allows access to private network resources.

</details>

---

## Question 10

Which logging feature is NOT supported on Linux App Service?

- A) Application logging  
- B) Web server logging  
- C) Deployment logging  
- D) Failed request tracing  

<details>
<summary>Show Answer</summary>

✅ D) Failed request tracing

Explanation:
Not supported on Linux.

</details>

---

## Question 11

What happens when ARR Affinity is enabled?

- A) Traffic is load balanced randomly  
- B) Requests are cached  
- C) Client is routed to same instance  
- D) App is scaled automatically  

<details>
<summary>Show Answer</summary>

✅ C) Client is routed to same instance

Explanation:
Used for session persistence.

</details>

---

## Question 12

Which deployment method is best for modern production workflows?

- A) FTP  
- B) Manual ZIP deploy  
- C) CI/CD pipelines  
- D) Local copy  

<details>
<summary>Show Answer</summary>

✅ C) CI/CD pipelines

Explanation:
Automated deployments are best practice.

</details>