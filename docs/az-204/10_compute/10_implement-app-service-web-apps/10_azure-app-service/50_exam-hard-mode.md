# Azure App Service – Hard Mode Questions

## Question 1

You have multiple web apps running in a single App Service Plan. One app experiences high CPU load.

What is the immediate impact on the other apps?

- A) No impact due to isolation  
- B) Other apps may experience performance degradation  
- C) Only the affected app scales automatically  
- D) Azure redistributes resources automatically  

<details>
<summary>Show Answer</summary>

✅ B) Other apps may experience performance degradation

Explanation:
All apps share the same compute resources within the App Service Plan.

</details>

---

## Question 2

You deploy a new version of your app to a staging slot and perform a swap with production.

Which statement is TRUE?

- A) The staging slot keeps the production configuration  
- B) The production slot always keeps its configuration  
- C) Configuration can be swapped unless marked as "slot setting"  
- D) Slots always share identical configurations  

<details>
<summary>Show Answer</summary>

✅ C) Configuration can be swapped unless marked as "slot setting"

Explanation:
Some settings can be marked as "sticky" (slot-specific) and will not swap.

</details>

---

## Question 3

An application requires access to a private database inside a virtual network.

Which feature should you use?

- A) Deployment slots  
- B) Private endpoint  
- C) VNet Integration  
- D) Autoscale  

<details>
<summary>Show Answer</summary>

✅ C) VNet Integration

Explanation:
VNet Integration is used for outbound connections to private resources.

</details>

---

## Question 4

You want to restrict access to your App Service so that it is only accessible from specific IP addresses.

What should you configure?

- A) VNet Integration  
- B) IP Restrictions  
- C) Deployment slots  
- D) Scale settings  

<details>
<summary>Show Answer</summary>

✅ B) IP Restrictions

Explanation:
IP restrictions control inbound traffic.

</details>

---

## Question 5

Which statement about scaling is correct?

- A) Each app scales independently  
- B) Scaling affects only production slots  
- C) Scaling applies to the App Service Plan  
- D) Scaling is only available in the Isolated tier  

<details>
<summary>Show Answer</summary>

✅ C) Scaling applies to the App Service Plan

Explanation:
All apps within the same plan scale together.

</details>

---

## Question 6

You disable ARR Affinity on a stateful application.

What is the likely outcome?

- A) Improved performance  
- B) Sessions may break  
- C) Autoscaling stops working  
- D) Logging is disabled  

<details>
<summary>Show Answer</summary>

✅ B) Sessions may break

Explanation:
ARR Affinity ensures requests go to the same instance.

</details>

---

## Question 7

Which of the following is NOT a valid deployment method?

- A) GitHub Actions  
- B) FTP  
- C) Azure DevOps  
- D) Azure Monitor  

<details>
<summary>Show Answer</summary>

✅ D) Azure Monitor

Explanation:
Azure Monitor is for monitoring, not deployment.

</details>

---

## Question 8

You need full network isolation and maximum scalability.

Which option do you choose?

- A) Standard Plan  
- B) Premium Plan  
- C) Isolated Plan (ASE)  
- D) Shared Plan  

<details>
<summary>Show Answer</summary>

✅ C) Isolated Plan (ASE)

Explanation:
Provides dedicated environment in a VNet.

</details>

---

## Question 9

Which statement about App Service default behavior is TRUE?

- A) Apps are private by default  
- B) Apps cannot access the internet  
- C) Apps are publicly accessible by default  
- D) Apps require VNet integration to function  

<details>
<summary>Show Answer</summary>

✅ C) Apps are publicly accessible by default

</details>

---

## Question 10

You configure autoscale rules for an App Service Plan.

What metric is commonly used?

- A) Number of deployment slots  
- B) CPU percentage  
- C) Number of authentication providers  
- D) Storage account size  

<details>
<summary>Show Answer</summary>

✅ B) CPU percentage

Explanation:
Autoscale is typically based on CPU, memory, or HTTP queue length.

</details>