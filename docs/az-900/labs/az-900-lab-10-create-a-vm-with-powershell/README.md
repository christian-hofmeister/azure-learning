# az-900-lab-10-create-a-vm-with-powershell

## 🎯 Goal
Use Azure Cloud Shell with PowerShell to create and manage Azure resources, deploy a virtual machine, and review Azure Advisor recommendations.

---

## 🧠 Key Learnings

### ☁️ Azure Cloud Shell
- Azure Cloud Shell is a browser-based command-line environment
- It supports both Bash and PowerShell
- It requires a storage account and file share for persistence

Important:
Cloud Shell stores scripts and configuration in an Azure file share

---

### 🔧 Azure PowerShell
- Azure PowerShell uses cmdlets to manage Azure resources
- Resources can be created, queried, stopped, and managed directly from the shell
- Useful for automation and repeatable tasks

---

### 🏗️ Creating a VM with PowerShell
The New-AzVm cmdlet created:
- Virtual machine
- Virtual network
- Subnet
- Network security group
- Public IP

Important:
A single command can create multiple dependent resources

---

### 📍 Region Awareness
- VM deployed in "East US"
- Related resources should be in the same region
- Different regions can cause latency and cost issues

---

### ▶️ VM States
- Running → consuming compute resources
- Stopped (deallocated) → compute resources released

Important:
Deallocated ≠ shutdown inside OS

---

### 📊 Azure Advisor
Provides recommendations for:
- Reliability
- Security
- Performance
- Cost

---

## 🧪 Steps (High-Level)

1. Open Azure Cloud Shell
2. Select PowerShell
3. Create storage account for Cloud Shell
4. Verify resource group (Get-AzResourceGroup)
5. Create VM (New-AzVm)
6. Verify VM in portal
7. Check VM status (Get-AzVM -Status)
8. Stop VM (Stop-AzVM)
9. Verify deallocated state
10. Review Azure Advisor

---

## 🧠 Exam-Relevant Takeaways

- Cloud Shell is browser-based
- Requires persistent storage (Azure Files)
- PowerShell enables automation
- VM deployment can create multiple resources
- Deallocated VMs do not consume compute
- Azure Advisor gives optimization recommendations

---

## 💡 Important Commands

Verify resource groups:
Get-AzResourceGroup | Format-Table

Create VM:
New-AzVm -ResourceGroupName "myRGPS" -Name "myVMPS" -Location "East US" -VirtualNetworkName "myVnetPS" -SubnetName "mySubnetPS" -SecurityGroupName "myNSGPS" -PublicIpAddressName "myPublicIpPS"

Check VM status:
Get-AzVM -Name myVMPS -Status | Format-Table -AutoSize

Stop VM:
Stop-AzVM -ResourceGroupName myRGPS -Name myVMPS

---

## 🔍 Concepts to Remember

### Cloud Shell
- Runs in browser
- No installation needed
- Uses Azure Files for persistence

### Azure PowerShell
- Command-based management
- Scriptable and automatable

### Azure Advisor
- Analyzes resources
- Suggests improvements

---

## 💬 Personal Note (optional)

This lab showed how Azure resources can be created and managed via PowerShell.  
It highlighted automation capabilities and how Azure Advisor helps improve deployments.

# 📝 Quiz Questions

### ❓ 1. What is Azure Cloud Shell?
A) Local PowerShell  
B) Browser-based shell  
C) Storage service  
D) Monitoring tool  

<details>
<summary>Show Answer</summary>

**Answer: B**

</details>

---

### ❓ 2. Why does Cloud Shell need storage?
A) Run VMs  
B) Store scripts and config  
C) Monitoring  
D) Replace PowerShell  

<details>
<summary>Show Answer</summary>

**Answer: B**

</details>

---

### ❓ 3. Which cmdlet creates a VM?
A) Get-AzVM  
B) Start-AzVM  
C) New-AzVm  
D) Set-AzVM  

<details>
<summary>Show Answer</summary>

**Answer: C**

</details>

---

### ❓ 4. What can New-AzVm also create?
A) Only disk  
B) Only IP  
C) Dependent resources  
D) Only RG  

<details>
<summary>Show Answer</summary>

**Answer: C**

</details>

---

### ❓ 5. What does "deallocated" mean?
A) Restarting  
B) Running  
C) Resources released  
D) Deleted  

<details>
<summary>Show Answer</summary>

**Answer: C**

</details>

---

### ❓ 6. What does Azure Advisor do?
A) Policy  
B) Recommendations  
C) Monitoring  
D) Backup  

<details>
<summary>Show Answer</summary>

**Answer: B**

</details>

---

### ❓ 7. Advantage of Azure PowerShell?
A) Only monitoring  
B) Automation  
C) Windows only  
D) Replaces ARM  

<details>
<summary>Show Answer</summary>

**Answer: B**

</details>