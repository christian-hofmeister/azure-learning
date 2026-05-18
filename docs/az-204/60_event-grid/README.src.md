---

<!-- include:_toc.md -->

---

# Azure Event Grid (AZ-204)

## Overview

Azure Event Grid is a fully managed event routing service based on the **publish/subscribe** pattern.

It enables **event-driven architectures** and integrates Azure services, custom applications, and external systems.

Typical use cases:

- React to Blob uploads
- Trigger Azure Functions
- Process IoT events
- Automate workflows
- Integrate microservices asynchronously

---

# Core Concepts

| Concept | Description |
|---|---|
| Event Source | The service/application that generates events |
| Topic | Endpoint where events are sent |
| Subscription | Defines which events should be delivered and where |
| Event Handler | Destination that processes the event |

---

# Event Flow

```text
Event Source
    ↓
Topic
    ↓
Event Subscription
    ↓
Event Handler
```

Example:

```text
Blob Storage
    ↓
System Topic
    ↓
Event Subscription
    ↓
Azure Function
```

---

# Event Sources

Azure services that can publish events:

- Blob Storage
- Resource Groups
- Azure Subscriptions
- Key Vault
- Event Hubs
- App Configuration
- IoT Hub
- Media Services

Custom applications can also publish events.

---

# Topic Types

## System Topics

Automatically created and managed by Azure.

Used when Azure services publish events.

Examples:

- BlobCreated
- BlobDeleted
- ResourceGroupUpdated

Important:

- Often NOT visible as standalone resources
- Azure owns the topic
- You subscribe via the source resource

Example:

```text
Storage Account
  -> Events
     -> + Event Subscription
```

You subscribe to the event source, not directly to the system topic.

### Exam Tip

System Topics are automatically managed by Azure.

Developers typically only create the Event Subscription.

---

## Custom Topics

Created and managed manually.

Used for custom applications.

Example:

```text
Custom App
   -> Custom Topic
      -> Subscribers
```

Use cases:

- Microservices
- Business events
- Internal application messaging

---

## Partner Topics

Used by SaaS providers and external integrations.

Examples:

- Dynamics 365
- SAP integrations
- External cloud systems

Less important for AZ-204.

---

# Event Subscriptions

An Event Subscription defines:

- Which events to receive
- Destination endpoint
- Optional filters

Example filters:

- Event type
- Subject begins with
- Subject ends with

Example:

```text
Only process:
- *.jpg uploads
- BlobCreated events
```

---

# Supported Event Handlers

| Handler | Description |
|---|---|
| Azure Functions | Most common |
| Webhooks | HTTP endpoints |
| Logic Apps | Workflow automation |
| Service Bus Queue | Reliable messaging |
| Service Bus Topic | Pub/Sub messaging |
| Event Hubs | Streaming |
| Storage Queue | Lightweight queueing |

---

# Event Delivery

Event Grid uses:

- Push delivery model
- HTTP-based delivery
- Automatic retries

Retries happen automatically if the endpoint fails.

Dead-lettering is supported.

---

# Dead-Lettering

Failed events can be stored for later analysis.

Typically stored in Blob Storage.

Useful when:

- Endpoint unavailable
- Processing errors
- Temporary failures

---

# Event Schema

## Event Grid Schema

Native Azure schema.

Example:

```json
{
  "id": "123",
  "eventType": "Microsoft.Storage.BlobCreated",
  "subject": "/blobServices/default/containers/images/blobs/photo.jpg",
  "eventTime": "2025-05-18T10:00:00Z",
  "data": {
    "api": "PutBlob"
  }
}
```

---

## CloudEvents Schema

Open standard format.

Improves interoperability across cloud providers.

Exam relevant:

Azure Event Grid supports CloudEvents.

---

# Security

## Authentication

Supported methods:

- Shared Access Signature (SAS)
- Access Keys
- Microsoft Entra ID

---

## Webhook Validation

When subscribing via HTTP endpoint:

1. Event Grid sends validation event
2. Endpoint must respond correctly
3. Subscription becomes active

Important exam topic.

---

# Integration with Azure Functions

Very common architecture:

```text
Blob Upload
   ↓
Event Grid
   ↓
Azure Function
```

Advantages:

- Serverless
- Reactive
- Cost efficient
- Near real-time processing

---

# Event Grid vs Service Bus vs Event Hubs

| Service | Best For |
|---|---|
| Event Grid | Reactive event routing |
| Service Bus | Reliable enterprise messaging |
| Event Hubs | Telemetry and streaming |

---

# Important Characteristics

| Feature | Event Grid |
|---|---|
| Architecture | Publish/Subscribe |
| Delivery | Push |
| Latency | Very low |
| Scaling | Automatic |
| Protocol | HTTP |
| Retry Support | Yes |
| Dead-Letter Support | Yes |

---

# Typical AZ-204 Scenarios

## Use Event Grid when:

- Reacting to Azure resource changes
- Triggering serverless workflows
- Near real-time notifications
- Loose coupling between systems

---

## Do NOT use Event Grid when:

- Message ordering required
- Long-term durable queues needed
- Complex enterprise messaging required

Use Service Bus instead.

---

# Common Exam Traps

## Trap: System Topic Visibility

You may not see the System Topic in your subscription.

Reason:

Azure owns and manages it.

You still create Event Subscriptions.

---

## Trap: Event Grid vs Queue

Event Grid is event routing.

Storage Queue and Service Bus Queue are message storage systems.

---

## Trap: Push vs Pull

Event Grid pushes events automatically.

Clients do NOT poll for events.

---

# CLI Examples

## Create Event Subscription

```bash
az eventgrid event-subscription create \
  --name blob-sub \
  --source-resource-id <storage-resource-id> \
  --endpoint https://myapi.azurewebsites.net/api/events
```

---

## List Event Subscriptions

```bash
az eventgrid event-subscription list
```

---

# Cheat Sheet

## Remember

| Topic | Key Point |
|---|---|
| Event Grid | Event routing service |
| System Topic | Managed by Azure |
| Custom Topic | Managed by you |
| Delivery | Push model |
| Retry | Automatic |
| Dead-lettering | Supported |
| Common Target | Azure Functions |

---

# Mini Summary

Event Grid is Azure's event-routing service for event-driven architectures.

It is optimized for:

- Reactive systems
- Near real-time processing
- Azure service integration
- Serverless workflows

Most common pattern:

```text
Azure Service
   ↓
Event Grid
   ↓
Azure Function
```

---

<!-- include:_toc.md -->

---