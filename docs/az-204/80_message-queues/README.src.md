---

<!-- include:_toc.md -->

---

# Azure Message Queues (AZ-204)

# Overview

Azure provides multiple messaging and queueing services for different scenarios.

The most important services for AZ-204 are:

- Azure Storage Queue
- Azure Service Bus
- Azure Event Grid
- Azure Event Hubs

Each service is optimized for different workloads.

---

# Messaging vs Eventing vs Streaming

| Type | Purpose |
|---|---|
| Queue Messaging | Reliable asynchronous processing |
| Event Routing | Reactive event notifications |
| Streaming | Massive telemetry ingestion |

---

# Quick Comparison

| Service | Best For |
|---|---|
| Storage Queue | Simple background processing |
| Service Bus | Enterprise messaging |
| Event Grid | Reactive event routing |
| Event Hubs | Telemetry streaming |

---

# Azure Storage Queue

## Overview

Simple and cost-effective queue service.

Part of Azure Storage Account.

Optimized for:

- lightweight messaging
- decoupling applications
- background jobs

---

# Typical Architecture

```text
Web App
   ↓
Storage Queue
   ↓
Background Worker
```

---

# Characteristics

| Feature | Storage Queue |
|---|---|
| Simple | Yes |
| Cheap | Yes |
| FIFO | Best effort only |
| Transactions | No |
| Ordering guarantee | No |
| Dead-letter queue | Manual |
| Duplicate detection | No |
| Max message size | Limited |

---

# Visibility Timeout

When a consumer reads a message:

```text
Message becomes temporarily invisible
```

If processing succeeds:

```text
Consumer deletes message
```

If processing fails:

```text
Message becomes visible again
```

---

# Poison Messages

Storage Queue has NO built-in dead-letter queue.

Applications typically move failing messages manually:

```text
main-queue
   ↓
poison-queue
```

based on:

```text
DequeueCount
```

---

# Storage Queue Use Cases

Use when:

- simple async processing needed
- low cost important
- high reliability not critical
- simple workloads

---

# Azure Service Bus

## Overview

Enterprise-grade messaging platform.

Supports:

- queues
- topics
- publish/subscribe
- transactions

---

# Service Bus Queue

Reliable enterprise queue.

Features:

- FIFO support
- duplicate detection
- transactions
- sessions
- dead-letter queue

---

# Service Bus Topic

Implements publish/subscribe.

Example:

```text
Producer
   ↓
Topic
   ↓
Multiple Subscriptions
```

---

# Characteristics

| Feature | Service Bus |
|---|---|
| Enterprise messaging | Yes |
| FIFO | Yes |
| Transactions | Yes |
| Duplicate detection | Yes |
| Dead-letter queue | Built-in |
| Sessions | Yes |
| Ordering | Strong |
| Reliability | Very high |

---

# Dead-Letter Queue (DLQ)

Failed messages are automatically moved to:

```text
Dead-Letter Queue
```

Useful for:

- debugging
- retry handling
- poison messages

---

# Sessions

Sessions preserve ordering and state.

Useful for:

- workflows
- financial transactions
- ordered processing

---

# Service Bus Use Cases

Use when:

- enterprise messaging required
- guaranteed ordering needed
- transactions required
- complex workflows needed

---

# Azure Event Grid

## Overview

Reactive event-routing service.

Uses:

```text
Publish / Subscribe
```

pattern.

Optimized for:

- serverless
- Azure integrations
- near real-time events

---

# Architecture

```text
Event Source
   ↓
Event Grid
   ↓
Subscribers
```

---

# Characteristics

| Feature | Event Grid |
|---|---|
| Push model | Yes |
| Reactive events | Excellent |
| Retry support | Yes |
| Dead-lettering | Yes |
| Streaming | No |
| Queue storage | No |

---

# Event Grid Use Cases

Use when:

- reacting to Blob uploads
- triggering Azure Functions
- resource change notifications
- event-driven architectures

---

# System Topics

Azure automatically creates System Topics for Azure services.

Usually invisible in subscription resource lists.

You create:

```text
Event Subscription
```

not the topic itself.

---

# Webhook Validation

Event Grid validates webhook ownership before sending events.

Important AZ-204 topic.

---

# Azure Event Hubs

## Overview

Massively scalable event streaming platform.

Optimized for:

- telemetry
- IoT
- logging
- analytics

---

# Architecture

```text
Producers
   ↓
Event Hubs
   ↓
Partitions
   ↓
Consumers
```

---

# Characteristics

| Feature | Event Hubs |
|---|---|
| Streaming | Yes |
| Replay | Yes |
| Pull model | Yes |
| Multiple consumers | Yes |
| Ordering | Per partition |
| Kafka support | Yes |

---

# Partitions

Partitions provide:

- scalability
- parallelism
- ordered streams

Ordering guaranteed ONLY inside one partition.

---

# Consumer Groups

Allow multiple independent applications to read the same stream.

---

# Replay

Consumers can re-read historical events during retention period.

Very important difference compared to queues.

---

# Event Hubs Capture

Automatically stores streams to:

- Blob Storage
- Data Lake

Capture triggered by:

- size threshold
OR
- time threshold

using:

```text
first wins policy
```

---

# Kafka Support

Event Hubs supports Kafka protocol.

Existing Kafka applications can often use Event Hubs with minimal code changes.

---

# Authentication and Security

Supported methods across services:

- Shared Access Signature (SAS)
- Microsoft Entra ID
- Managed Identity

---

# RBAC Roles

Important distinction:

| Plane | Purpose |
|---|---|
| Management Plane | Manage resources |
| Data Plane | Access actual data |

Example:

| Role | Purpose |
|---|---|
| Contributor | Manage resource |
| Event Hubs Data Sender | Send events |
| Event Hubs Data Receiver | Read events |

Contributor alone is often NOT enough.

---

# Push vs Pull

| Service | Model |
|---|---|
| Event Grid | Push |
| Event Hubs | Pull |
| Storage Queue | Pull |
| Service Bus | Pull |

---

# Retry Behavior

## Event Grid

Retries delivery automatically.

If delivery fails permanently:

```text
Dead-lettering
```

possible.

---

## Storage Queue

No automatic business retry logic.

Message becomes visible again if consumer fails.

---

## Service Bus

Built-in retry and dead-letter queue support.

---

# Ordering Guarantees

| Service | Ordering |
|---|---|
| Storage Queue | Best effort |
| Service Bus | Strong |
| Event Grid | No |
| Event Hubs | Per partition |

---

# Replay Support

| Service | Replay |
|---|---|
| Storage Queue | No |
| Service Bus | Limited |
| Event Grid | No |
| Event Hubs | Yes |

---

# Typical AZ-204 Decision Guide

## Use Storage Queue when:

- simple background jobs
- low-cost async processing

---

## Use Service Bus when:

- enterprise messaging
- transactions
- FIFO
- workflows

---

## Use Event Grid when:

- reactive event-driven systems
- Azure resource notifications

---

## Use Event Hubs when:

- telemetry ingestion
- analytics pipelines
- massive event streaming

---

# Common Exam Traps

## Trap: Event Grid is NOT a queue

Event Grid routes events.

It does NOT persist them like queues.

---

## Trap: Event Hubs is NOT Service Bus

Event Hubs is for streaming.

NOT enterprise messaging.

---

## Trap: Ordering

Only Service Bus guarantees strong FIFO behavior.

Event Hubs guarantees ordering only per partition.

---

## Trap: Contributor Role

Contributor does NOT automatically grant data access.

You often need:

```text
Data Sender
Data Receiver
Data Contributor
```

roles.

---

# Mini Comparison Table

| Feature | Storage Queue | Service Bus | Event Grid | Event Hubs |
|---|---|---|---|---|
| Queueing | Yes | Yes | No | No |
| Streaming | No | No | No | Yes |
| Reactive Events | No | Limited | Yes | Limited |
| FIFO | Weak | Strong | No | Per partition |
| Replay | No | Limited | No | Yes |
| DLQ | Manual | Built-in | Supported | Limited |
| Transactions | No | Yes | No | No |

---

# Cheat Sheet

| Service | Main Purpose |
|---|---|
| Storage Queue | Simple async jobs |
| Service Bus | Enterprise messaging |
| Event Grid | Reactive event routing |
| Event Hubs | Telemetry streaming |

---

# Mini Summary

Azure messaging services solve different problems:

```text
Storage Queue
→ simple queueing

Service Bus
→ enterprise messaging

Event Grid
→ event routing

Event Hubs
→ event streaming
```

Choosing the correct service is a very common AZ-204 exam topic.

---

<!-- include:_toc.md -->

---