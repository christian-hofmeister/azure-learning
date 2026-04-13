# AZ-900 Practice Questions – Wording Traps (Set 1)

## Question 1
Which Azure components are *scoped to* a subscription? (Select two)

- A. Microsoft Entra users  
- B. Resource groups  
- C. Management groups  
- D. Resources  

<details>
<summary>Answer</summary>

**Correct:** B, D  

**Explanation:**  
Resource groups and resources exist within a subscription.  
Entra users belong to the identity system, and management groups are above subscriptions.

</details>

---

## Question 2
Which Azure service is *responsible for identity and access management*?

- A. Azure Policy  
- B. Microsoft Entra ID  
- C. Resource Manager  
- D. Management groups  

<details>
<summary>Answer</summary>

**Correct:** B  

**Explanation:**  
Microsoft Entra ID handles identity (users, groups, authentication).  
Azure Policy = governance, Resource Manager = deployment.

</details>

---

## Question 3
Which components can be used to *organize resources*? (Select two)

- A. Resource groups  
- B. Subscriptions  
- C. Regions  
- D. Availability zones  

<details>
<summary>Answer</summary>

**Correct:** A, B  

**Explanation:**  
Resource groups and subscriptions are logical containers.  
Regions/zones are physical locations, not for organization.

</details>

---

## Question 4
Which Azure feature allows you to *enforce rules across resources*?

- A. RBAC  
- B. Azure Policy  
- C. Resource groups  
- D. Virtual networks  

<details>
<summary>Answer</summary>

**Correct:** B  

**Explanation:**  
Azure Policy enforces compliance rules.  
RBAC controls access, not rules.

</details>

---

## Question 5
Which of the following are *physical components* of Azure? (Select two)

- A. Regions  
- B. Availability zones  
- C. Resource groups  
- D. Subscriptions  

<details>
<summary>Answer</summary>

**Correct:** A, B  

**Explanation:**  
Regions and availability zones are physical infrastructure.  
Resource groups and subscriptions are logical constructs.

</details>

---

## Question 6
Which service is used to *control access to Azure resources*?

- A. Azure Policy  
- B. RBAC  
- C. Microsoft Entra ID  
- D. Availability zones  

<details>
<summary>Answer</summary>

**Correct:** B  

**Explanation:**  
RBAC controls who can access what.  
Entra ID provides identity, RBAC enforces permissions.

</details>

---

## Question 7
Which of the following are *benefits of cloud computing*? (Select two)

- A. High availability  
- B. Manual scaling  
- C. Elasticity  
- D. Fixed pricing  

<details>
<summary>Answer</summary>

**Correct:** A, C  

**Explanation:**  
Cloud provides high availability and elasticity.  
Manual scaling and fixed pricing are NOT benefits.

</details>

---

## Question 8
Which Azure component is used to *deploy and manage resources*?

- A. Azure Resource Manager  
- B. Microsoft Entra ID  
- C. Azure Advisor  
- D. Management groups  

<details>
<summary>Answer</summary>

**Correct:** A  

**Explanation:**  
Azure Resource Manager (ARM) handles deployments and resource management.

</details>

---

## Question 9
Which components are *above the subscription level*? (Select two)

- A. Management groups  
- B. Microsoft Entra ID  
- C. Resource groups  
- D. Resources  

<details>
<summary>Answer</summary>

**Correct:** A, B  

**Explanation:**  
Management groups and Entra ID exist above subscriptions.  
Resource groups/resources are below.

</details>

---

## Question 10
Which pricing model allows you to *pay only for what you use*?

- A. CapEx  
- B. OpEx  
- C. Fixed pricing  
- D. Reserved capacity  

<details>
<summary>Answer</summary>

**Correct:** B  

**Explanation:**  
OpEx = pay-as-you-go.  
CapEx = upfront investment.

</details>

---

# 🔥 Common Exam Traps

- "created in" → means **belongs to**, NOT auto-created  
- "physical" → regions/zones  
- "logical" → subscriptions/resource groups  
- "identity" → always Microsoft Entra ID  
- "access control" → RBAC (NOT Entra itself)  
- "rules/compliance" → Azure Policy  
- "above/below subscription" → hierarchy question  

---

# 🧠 Memory Boost

**Identity vs Access vs Governance**

- Identity → Entra ID  
- Access → RBAC  
- Rules → Policy  