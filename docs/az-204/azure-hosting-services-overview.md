# Azure Hosting Services Overview (AZ-204)

> Goal: Choose the correct Azure hosting service within seconds during the AZ-204 exam.

---

# Decision Tree

```
Need Kubernetes?
│
├── Yes
│      → Azure Kubernetes Service (AKS)
│
└── No
     │
     ├── Need to run a single container?
     │
     │      ├── Short-lived job?
     │      │      → Azure Container Instances (ACI)
     │      │
     │      └── Long-running container / autoscaling?
     │             → Azure Container Apps
     │
     └── Need to run application code?
            │
            ├── Event-driven?
            │      → Azure Functions
            │
            └── Web API / Website?
                   → Azure App Service
```

---

# Service Comparison

| Feature | App Service | Azure Functions | Container Apps | Container Instances | AKS |
|----------|------------|----------------|----------------|--------------------|-----|
| Web Apps | ✅ | HTTP Trigger | ✅ | Possible | ✅ |
| REST APIs | ✅ | ✅ | ✅ | Possible | ✅ |
| Background Jobs | WebJobs | ✅ | ✅ | ✅ | ✅ |
| Event Driven | ❌ | ✅ | ✅ | ❌ | ✅ |
| Containers | Single Container | Custom Handler only | ✅ | ✅ | ✅ |
| Dockerfile | Limited | ❌ | ✅ | ✅ | ✅ |
| Kubernetes | ❌ | ❌ | Hidden | ❌ | ✅ |
| Scale to Zero | ❌ | ✅ | ✅ | ❌ | Possible |
| Automatic Scaling | ✅ | ✅ | ✅ | ❌ | ✅ |
| Serverless | ❌ | ✅ | ✅ | ❌ | Optional |
| Pay per execution | ❌ | Consumption | Consumption | ❌ | ❌ |

---

# Azure App Service

## Best for

- Web applications
- REST APIs
- ASP.NET
- Java
- Node.js
- PHP
- Python

### Advantages

- Easy deployment
- Deployment Slots
- Authentication
- Custom Domains
- SSL
- Autoscaling

### Typical Exam Keywords

- Web App
- Deployment Slot
- App Service Plan
- Custom Domain
- Authentication

---

# Azure Functions

## Best for

- Event processing
- Queue processing
- Blob triggers
- Timer jobs
- Serverless APIs

### Advantages

- Pay per execution
- Scale to zero
- Automatic scaling

### Typical Exam Keywords

- Trigger
- Queue
- Blob
- Event Grid
- Event Hub
- Timer
- Serverless

---

# Azure Container Apps

## Best for

- Microservices
- APIs
- Event-driven containers
- Custom Docker images

### Advantages

- KEDA scaling
- Scale to zero
- Revisions
- Dapr support
- Ingress
- No Kubernetes management

### Typical Exam Keywords

- Dockerfile
- Container image
- Revision
- KEDA
- Microservices

---

# Azure Container Instances (ACI)

## Best for

- One-off jobs
- Batch processing
- Scheduled tasks
- Quick container execution

### Advantages

- Fast startup
- No orchestration
- Simple deployment

### Limitations

- No automatic scaling
- No rolling updates
- No revisions

### Restart Policies

- Always
- OnFailure
- Never

### Typical Exam Keywords

- Batch
- One container
- Restart Policy
- Container Group

---

# Azure Kubernetes Service (AKS)

## Best for

- Large container platforms
- Kubernetes workloads
- Complex microservices

### Advantages

- Full Kubernetes
- Helm
- Ingress Controller
- Stateful workloads
- Rolling deployments

### Typical Exam Keywords

- Kubernetes
- Pods
- Nodes
- Cluster
- Helm

---

# Common Exam Clues

## "Deployment Slots"

→ App Service

---

## "Trigger"

→ Azure Functions

---

## "Dockerfile"

Usually

→ Container Apps

Sometimes

→ ACI

---

## "Container Group"

→ Azure Container Instances

---

## "Revision"

→ Azure Container Apps

---

## "Pod"

→ AKS

---

## "Scale to zero"

Usually

- Azure Functions
- Container Apps

---

## "No Kubernetes management"

→ Container Apps

---

## "One-off container"

→ ACI

---

## "Microservices"

Usually

→ Container Apps

Enterprise scale

→ AKS

---

## "HTTP API"

Simple Web API

→ App Service

Event-driven API

→ Functions

Containerized API

→ Container Apps

---

# Typical AZ-204 Questions

## Which service should I choose?

| Requirement | Service |
|-------------|----------|
| ASP.NET Website | App Service |
| Queue Trigger | Functions |
| Blob Trigger | Functions |
| Event Grid Trigger | Functions |
| Docker Container | Container Apps |
| Single Batch Container | ACI |
| Kubernetes | AKS |
| Serverless API | Functions |
| Microservices | Container Apps |
| Existing Dockerfile | Container Apps |
| One-time container execution | ACI |

---

# Things Microsoft Loves to Ask

✅ Deployment Slots

✅ Function Triggers

✅ Restart Policies

✅ Scale to Zero

✅ Revisions

✅ KEDA

✅ Container Groups

✅ Pods

---

# Personal Memory Aids

## App Service

> "I have a website."

---

## Functions

> "Something happened."

(Event)

---

## Container Apps

> "I have Docker."

---

## ACI

> "Run this container."

---

## AKS

> "I operate a container platform."

---

# Exam Strategy

Whenever a hosting question appears:

1. Is it a website?
2. Is it event-driven?
3. Is it containerized?
4. Is Kubernetes required?
5. Does it mention Docker?
6. Does it mention triggers?
7. Does it mention deployment slots?
8. Does it mention revisions?
9. Does it mention pods?

The answer is usually obvious after answering these questions.