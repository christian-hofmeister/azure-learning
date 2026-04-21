<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

# 📘 AZ-900 Lab 11 – Create a VM with the CLI

## 🎯 Objective
- Use Azure Cloud Shell (Bash)
- Work with Azure CLI (`az`)
- Create and manage a Virtual Machine
- Understand Azure Advisor

---

## 🧠 Key Learnings (Exam Relevant)

### 🔹 Azure CLI vs PowerShell
- Azure CLI → `az` commands (Bash)
- Azure PowerShell → `Az` module (PowerShell)

Both tools manage Azure resources, but with different syntax.

---

### 🔹 Azure Cloud Shell
- Runs in the browser
- Supports:
  - Bash (Azure CLI)
  - PowerShell
- Requires:
  - Storage Account
  - File Share (persistent storage)

Files and scripts are persisted in the storage account.

---

### 🔹 List Resource Groups

```bash
az group list --output table
```

Displays all available resource groups.

---

### 🔹 Create a Virtual Machine

```bash
az vm create \
  --name myVMCLI \
  --resource-group myRGCLI \
  --image Ubuntu2204 \
  --location EastUS2 \
  --admin-username azureuser \
  --admin-password Pa$$w0rd1234
```

#### What gets created automatically?
- Virtual Machine
- Virtual Network (VNet)
- Subnet
- Network Interface (NIC)
- Public IP Address
- Network Security Group (NSG)

Important exam concept: Azure provisions dependent resources automatically.

---

### 🔹 Show VM Details

```bash
az vm show \
  --resource-group myRGCLI \
  --name myVMCLI \
  --show-details \
  --output table
```

Displays:
- Power state
- Location
- Resource group

---

### 🔹 Stop a Virtual Machine

```bash
az vm stop \
  --resource-group myRGCLI \
  --name myVMCLI
```

Important:
- Stopped ≠ Deallocated
- Compute costs may still apply

Only "stopped (deallocated)" stops compute billing.

---

### 🔹 Azure Advisor
- Provides recommendations based on your resources
- Categories:
  - Reliability
  - Security
  - Performance
  - Cost

Helps optimize your Azure environment.

---

## 🧾 Summary

| Topic | Key Point |
|------|----------|
| Azure CLI | Uses `az` commands |
| Cloud Shell | Browser-based, persistent storage |
| VM Creation | Automatically creates networking & security |
| VM States | Running vs Stopped vs Deallocated |
| Cost Control | Only deallocated stops billing |
| Advisor | Optimization recommendations |

---

## 🧪 Quiz

<details>
<summary>Question 1</summary>

Which tool is used to manage Azure resources from Bash?

- Azure Portal  
- Azure CLI  
- Azure PowerShell  
- ARM Templates  

Answer: Azure CLI  

</details>

<details>
<summary>Question 2</summary>

What command is used to create a VM using Azure CLI?

- az create vm  
- az vm create  
- az vm new  
- az resource create vm  

Answer: az vm create  

</details>

<details>
<summary>Question 3</summary>

What additional resources are automatically created with a VM?

- Only storage  
- Only networking  
- Storage, networking, and security resources  
- Nothing  

Answer: Storage, networking, and security resources  

</details>

<details>
<summary>Question 4</summary>

Which state stops compute billing?

- stopped  
- stopped (deallocated)  
- paused  
- disabled  

Answer: stopped (deallocated)  

</details>

<details>
<summary>Question 5</summary>

What does Azure Advisor provide?

- Logs  
- Alerts only  
- Recommendations  
- VM backups  

Answer: Recommendations  

</details>

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

_No content found._
