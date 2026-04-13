# AZ-900 Practice Questions – Wording Traps (Set 2 – Hard)

## Question 1
Which Azure services are used to *control authentication and authorization*? (Select two)

- A. Microsoft Entra ID  
- B. RBAC  
- C. Azure Policy  
- D. Resource groups  

<details>
<summary>Answer</summary>

**Correct:** A, B  

**Explanation:**  
Authentication = Microsoft Entra ID  
Authorization = RBAC  

Azure Policy = governance rules, not access control.

</details>

---

## Question 2
Which Azure feature ensures that *resources comply with organizational standards*?

- A. RBAC  
- B. Azure Policy  
- C. Microsoft Entra ID  
- D. Azure Advisor  

<details>
<summary>Answer</summary>

**Correct:** B  

**Explanation:**  
Azure Policy enforces compliance rules.  
RBAC = access, Advisor = recommendations.

</details>

---

## Question 3
Which of the following can be used to *limit access to a specific resource*?

- A. Resource group  
- B. RBAC  
- C. Management group  
- D. Azure Policy  

<details>
<summary>Answer</summary>

**Correct:** B  

**Explanation:**  
RBAC assigns permissions at resource level.  
Resource groups organize, Policy enforces rules.

</details>

---

## Question 4
Which Azure components are *global (not tied to a specific region)*? (Select two)

- A. Microsoft Entra ID  
- B. Resource groups  
- C. Subscriptions  
- D. Virtual machines  

<details>
<summary>Answer</summary>

**Correct:** A, C  

**Explanation:**  
Entra ID and subscriptions are global.  
Resources (like VMs) are always region-bound.

</details>

---

## Question 5
Which of the following describes *Azure Resource Manager (ARM)*?

- A. Identity provider  
- B. Deployment and management service  
- C. Physical data center  
- D. Pricing model  

<details>
<summary>Answer</summary>

**Correct:** B  

**Explanation:**  
ARM is the control plane for deploying and managing resources.

</details>

---

## Question 6
Which components can have *RBAC assignments applied*? (Select two)

- A. Management groups  
- B. Subscriptions  
- C. Resource groups  
- D. All of the above  

<details>
<summary>Answer</summary>

**Correct:** D  

**Explanation:**  
RBAC can be applied at all levels:  
Management group → Subscription → Resource group → Resource  

</details>

---

## Question 7
Which Azure feature provides *recommendations to optimize cost and performance*?

- A. Azure Policy  
- B. Azure Advisor  
- C. RBAC  
- D. Microsoft Entra ID  

<details>
<summary>Answer</summary>

**Correct:** B  

**Explanation:**  
Azure Advisor gives recommendations (cost, performance, security).

</details>

---

## Question 8
Which of the following are *characteristics of Availability Zones*? (Select two)

- A. Physically separate datacenters  
- B. Located in different regions  
- C. Provide high availability within a region  
- D. Used for identity management  

<details>
<summary>Answer</summary>

**Correct:** A, C  

**Explanation:**  
Zones = separate datacenters in the SAME region.  
They provide redundancy within a region.

</details>

---

## Question 9
Which of the following is true about *subscriptions*?

- A. They define billing boundaries  
- B. They are used for identity management  
- C. They exist inside resource groups  
- D. They are region-specific  

<details>
<summary>Answer</summary>

**Correct:** A  

**Explanation:**  
Subscriptions define billing and scope.  
Identity = Entra ID, not subscription.

</details>

---

## Question 10
Which Azure feature allows you to *prevent specific actions on resources*?

- A. RBAC  
- B. Azure Policy  
- C. Resource locks  
- D. Management groups  

<details>
<summary>Answer</summary>

**Correct:** C  

**Explanation:**  
Resource locks prevent deletion/modification.  
Policy defines rules, but locks enforce protection.

</details>

---

# 🔥 Advanced Exam Traps

- Authentication ≠ Authorization  
  → Auth = Entra ID, AuthZ = RBAC  

- Policy vs RBAC  
  → RBAC = WHO can access  
  → Policy = WHAT is allowed  

- Advisor vs Policy  
  → Advisor = recommendations  
  → Policy = enforcement  

- Global vs Regional  
  → Global = Entra ID, Subscription  
  → Regional = all resources  

- Availability Zones  
  → Same region, different datacenters  

---

# 🧠 Killer Memory Trick

**3 Questions you should always ask:**

1. Is this about identity? → Entra ID  
2. Is this about access? → RBAC  
3. Is this about rules? → Policy  

---
