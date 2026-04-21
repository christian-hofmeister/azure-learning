# ☁️ Cloud Models – Quick & Concise

## Definition:

- Describe how cloud resources are deployed
- 3 main models:
  - Public
  - Private
  - Hybrid

# 🌍 Public Cloud
- Operated by provider (e.g., Microsoft)
- Accessible to everyone
- Pay-as-you-go
- Quickly scalable

## 👉 Disadvantages:
- Less control
- Resources are shared (Multi-Tenant)
---
# 🏢 Private Cloud
- Only for one organization
- Highest control & security
- Can be on-prem or externally hosted

In a private cloud, hardware must be purchased for start up and maintenance. In a private cloud, organizations control resources and security. Quick provisioning is a characteristic of the public cloud deployment model. Paying only for what is used is a characteristic of the public cloud deployment model.

## 👉 Disadvantages:
- Expensive
- Maintenance is your responsibility
- Less flexible
- 
# 🔀 Hybrid Cloud
Combination of public + private
Distribute data/apps flexibly

## 👉 Benefits:
- Maximum flexibility
- Bursting possible (peak loads → Public Cloud)
- Control over sensitive data

# 🌐 Multicloud
- Use of multiple cloud providers
- E.g., Azure + AWS

## 👉 Reasons:
- Migration
- Use special features
- Distribute risk

# 🛠️ Important Azure Tools
- ## 🔧 Azure Arc
- Unified management:
  - Public
  - Private
  - Hybrid
  - Multicloud
  
## 🖥️ Azure VMware Solution
- Run VMware workloads in Azure
- Simple transition to the cloud

# ⚡ Exam Comparison (very important)
| Model            | Description                                                                                | Benefits                                                                        | Disadvantages                                            | Examples                                                            |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------- |
| **Private Cloud** | Infrastructure is **used by only one organization** (on-prem or dedicated hosted) | - High control<br>- Higher security<br>- Customizable                          | - Expensive<br>- Maintenance effort<br>- Less scaling | - Own data center<br>- Dedicated environment from Microsoft Azure |
| **Public Cloud**  | Resources are **publicly provided by a cloud provider**                    | - Scalable<br>- Pay-as-you-go<br>- No maintenance effort                       | - Less control<br>- Shared environment          | - Microsoft Azure<br>- Amazon Web Services (AWS)<br>- Google Cloud   |
| **Hybrid Cloud**  | Combination of **private + public cloud** (connected)                                      | - Flexible<br>- Sensitive data stays private<br>- Scaling via public cloud | - More complex operations<br>- Integration needed           | - On-Prem + Azure<br>- Backup in public cloud                        |
| **Multi-Cloud**   | Use of **multiple cloud providers simultaneously**                                       | - No vendor lock-in<br>- Best-of-breed services<br>- Higher reliability | - Very complex<br>- More expertise needed              | - Azure + AWS in parallel<br>- AWS for storage, Google Cloud for AI     |


![cloud models](images/cloud-models.png)


# 🧠 Memory Aids
- 👉 Public = sharing & flexible
- 👉 Private = control & expensive
- 👉 Hybrid = best of both worlds
- 👉 Multicloud = multiple providers
  
# 🎯 Typical Exam Questions
- „Maximum control?" → Private Cloud
- „No hardware to buy?" → Public Cloud
- „Flexible between both?" → Hybrid Cloud
- „Multiple providers?" → Multicloud

---
