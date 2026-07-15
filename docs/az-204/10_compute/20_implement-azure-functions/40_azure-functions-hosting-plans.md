# Azure Functions Hosting Plans (AZ-204)

## Decision Tree

```
Need serverless + pay per execution?
│
├── Yes
│   ├── Linux (recommended for new apps) → Flex Consumption
│   └── Otherwise → Consumption
│
└── No
    │
    ├── Need no cold starts / VNet / long-running apps?
    │      → Premium
    │
    ├── Already have an App Service Plan?
    │      → App Service (Dedicated)
    │
    └── Need custom container deployment?
           → Azure Container Apps
```

---

# Comparison

| Feature | Consumption | Flex Consumption | Premium | App Service (Dedicated) | Container Apps |
|----------|-------------|------------------|----------|-------------------------|----------------|
| Serverless | ✅ | ✅ | ❌ | ❌ | ✅ |
| Pay per execution | ✅ | ✅ | ❌ | ❌ | Depends |
| Automatic scaling | ✅ | ✅ | ✅ | Manual / Autoscale | ✅ |
| Event-based scaling | ✅ | ✅ | ✅ | ❌ | ✅ (KEDA) |
| Scale to zero | ✅ | ✅ | ❌ | ❌ | ✅ |
| Cold starts | Yes | Reduced | No | No | Reduced |
| VNet support | Limited | ✅ | ✅ | ✅ | ✅ |
| Long-running executions | Limited | Better | ✅ | ✅ | ✅ |
| Custom container | ❌ | ❌ | ❌ | ❌ | ✅ |
| Existing App Service Plan | ❌ | ❌ | ❌ | ✅ | ❌ |

---

# When to choose each plan

## Consumption

### Best for

- Event-driven workloads
- HTTP-triggered APIs
- Queue processing
- Timer triggers
- Lowest cost

### Keywords

- Serverless
- Pay per execution
- Event-based scaling
- Minimize costs
- Scale to zero

### Exam clue

If the question contains:

- serverless
- automatic scaling
- event-based scaling

→ **Consumption**

---

## Flex Consumption

Microsoft's modern serverless hosting model.

### Advantages

- Linux
- Faster scaling
- Better networking
- Recommended for new serverless applications

### Keywords

- New application
- Linux
- Serverless
- VNet
- Fast scaling

---

## Premium

### Best for

Mission-critical applications.

### Advantages

- No cold starts
- Always Ready instances
- VNet integration
- Long-running executions
- Higher performance

### Keywords

- No cold start
- Always ready
- Premium performance
- VNet
- High throughput

### Exam clue

If the question says

> eliminate cold starts

→ **Premium**

---

## App Service (Dedicated)

Runs inside an App Service Plan.

### Advantages

- Fixed pricing
- Existing App Service Plan
- Predictable workload
- Full control

### Keywords

- Existing App Service Plan
- Dedicated resources
- Already paying for App Service

### Exam clue

If the company already owns an App Service Plan

→ **App Service**

---

## Azure Container Apps

Functions run inside containers.

### Advantages

- Custom Docker images
- Microservices
- KEDA scaling
- Containers

### Keywords

- Dockerfile
- Container image
- Custom runtime
- Kubernetes style

### Exam clue

If the question mentions

- Docker
- Container
- OCI image

→ **Container Apps**

---

# Cold Start

| Plan | Cold Start |
|------|------------|
| Consumption | Yes |
| Flex Consumption | Reduced |
| Premium | No |
| App Service | No |
| Container Apps | Reduced |

---

# Cost

| Cheapest | Most expensive |
|----------|----------------|
| Consumption | Premium |

Usually:

```
Consumption
    ↓
Flex Consumption
    ↓
App Service
    ↓
Premium
```

---

# AZ-204 Exam Keywords

## Consumption

- Serverless
- Event trigger
- Pay per execution
- Scale to zero

---

## Premium

- No cold start
- Always ready
- VNet
- Enterprise

---

## App Service

- Existing App Service Plan
- Dedicated compute
- Predictable workload

---

## Container Apps

- Docker
- Containers
- Microservices
- KEDA

---

# Common Exam Traps

## ❌ "Minimize costs"

Does **not** automatically mean **Consumption**.

Always verify whether another requirement (Security, VNet, Defender, No Cold Start) forces Premium or App Service.

---

## ❌ "Automatic scaling"

Automatic scaling exists in several plans.

Look for:

- event-based?
- serverless?
- scale to zero?

---

## ❌ "Always running"

This usually points to

- Premium
- App Service

not Consumption.

---

## ❌ "Existing App Service Plan"

Never create a Consumption plan if an App Service Plan already exists and satisfies the requirements.

---

# Memory Aids

## Consumption

> Cheapest. Serverless. Event-driven.

---

## Premium

> Serverless without cold starts.

---

## App Service

> I already own the servers.

---

## Container Apps

> I already own the container.

---

# Exam Strategy

Read the requirements in this order:

1. Security
2. Networking
3. Performance
4. Scaling
5. Cost

Never choose the cheapest plan before checking whether it satisfies all requirements.