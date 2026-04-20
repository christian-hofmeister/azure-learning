# AZ-900 Lab 13 – Secure Network Traffic

## 📘 Overview
In this lab, we explore how to secure network traffic in Azure.  
You will configure **Network Security Groups (NSGs)** and apply rules to control inbound and outbound traffic for Azure resources.

---

## 🎯 Objectives
- Understand the purpose of **Network Security Groups (NSGs)**
- Configure **inbound and outbound security rules**
- Associate NSGs with **subnets and network interfaces**
- Test and validate traffic filtering

---

## 🧠 Key Concepts

### 🔐 Network Security Group (NSG)
An NSG is used to **filter network traffic** in Azure using rules based on:
- Source / Destination IP
- Port
- Protocol (TCP/UDP)
- Direction (Inbound / Outbound)

### 📥 Inbound vs 📤 Outbound Rules
- **Inbound** → controls traffic coming *into* a resource
- **Outbound** → controls traffic leaving a resource

### ⚖️ Rule Processing
- Rules are processed by **priority (lower number = higher priority)**
- First matching rule is applied
- Default rules exist (e.g., allow VNet traffic, deny all inbound)

---

## 🛠️ Tasks Summary

### Task 1 – Create a Network Security Group
- Go to **Azure Portal**
- Search for **Network Security Groups**
- Click **+ Create**
- Configure:
  - Resource Group: *provided*
  - Name: `myNSG`
  - Region: *same as VM*

---

### Task 2 – Configure Inbound Security Rule
- Open your NSG
- Navigate to **Inbound security rules**
- Click **+ Add**
- Example rule:
  - Source: Any
  - Source port: *
  - Destination: Any
  - Destination port: 80
  - Protocol: TCP
  - Action: Allow
  - Priority: 1000
  - Name: `Allow-HTTP`

👉 This allows HTTP traffic (port 80)

---

### Task 3 – Associate NSG
You can associate an NSG with:

#### Option A – Subnet
- Go to **Virtual Network**
- Select **Subnets**
- Choose your subnet
- Associate the NSG

#### Option B – Network Interface
- Go to your **Virtual Machine**
- Open **Networking**
- Select the NIC
- Attach the NSG

---

### Task 4 – Test Connectivity
- Try accessing your VM via browser (HTTP)
- Verify:
  - Allowed traffic works (e.g., port 80)
  - Other ports remain blocked

---

## 📊 Exam Tips

- NSGs operate at:
  - Subnet level
  - Network Interface level
- Rules are:
  - Stateful (return traffic is automatically allowed)
- Default behavior:
  - Allow VNet traffic
  - Deny inbound internet traffic (unless allowed)

---

## 🧪 Quiz

### ❓ What is the purpose of a Network Security Group?

<details>
<summary>Show Answer</summary>

To filter and control inbound and outbound network traffic using rules.

</details>

---

### ❓ Which rule is applied first?

<details>
<summary>Show Answer</summary>

The rule with the lowest priority number.

</details>

---

### ❓ Are NSG rules stateful?

<details>
<summary>Show Answer</summary>

Yes. Return traffic is automatically allowed.

</details>

---

### ❓ Where can you assign an NSG?

<details>
<summary>Show Answer</summary>

To a subnet or a network interface (NIC).

</details>

---

### ❓ What happens if no rule matches?

<details>
<summary>Show Answer</summary>

Default rules apply (typically deny inbound traffic).

</details>

---

## 🧾 Summary

- NSGs are essential for **network security in Azure**
- You define **rules** to allow or deny traffic
- They can be applied at different levels (Subnet/NIC)
- Understanding rule priority and defaults is key for the exam

---

## 🚀 Next Step
Continue with the next lab or revisit:
- Azure Networking basics
- Virtual Networks (VNet)
- Azure Firewall vs NSG (important exam topic)