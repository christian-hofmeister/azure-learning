---

<!-- include:_toc.md -->

---

# Azure Event Hubs (AZ-204)

# Overview

Azure Event Hubs is a highly scalable data streaming platform designed for:

- Telemetry
- Logging
- Metrics
- Real-time analytics
- IoT ingestion
- Big data pipelines

It can process millions of events per second with low latency.

---

# Typical Use Cases

- IoT telemetry ingestion
- Application logging
- Real-time monitoring
- Clickstream analytics
- Distributed tracing
- Kafka-compatible streaming

---

# Core Concept

Event Hubs is optimized for:

```text
High-throughput event ingestion
```

Not for traditional enterprise messaging.

---

# Architecture

```text
Producer
   ↓
Event Hub
   ↓
Partitions
   ↓
Consumers
```

Example:

```text
IoT Devices
   ↓
Azure Event Hubs
   ↓
Azure Stream Analytics
   ↓
Power BI / Data Lake
```

---

# Important Components

| Component | Description |
|---|---|
| Namespace | Container for Event Hubs |
| Event Hub | Stream endpoint |
| Partition | Ordered event sequence |
| Producer | Sends events |
| Consumer | Reads events |
| Consumer Group | Independent read view |

---

# Namespace

A Namespace is the top-level container.

Contains:

- Event Hubs
- Shared configuration
- Networking settings
- Authentication settings

Example:

```text
mynamespace.servicebus.windows.net
```

---

# Event Hub

An Event Hub is a stream endpoint.

Events are appended to partitions.

Important:

- Event Hubs does NOT process events
- Consumers read events later

---

# Partitions

Partitions enable parallelism and scalability.

Each partition:

- preserves event order
- stores events sequentially

Example:

```text
Partition 0 → ordered events
Partition 1 → ordered events
Partition 2 → ordered events
```

Important:

Ordering is guaranteed ONLY inside a partition.

---

# Partition Key

A partition key ensures related events go to the same partition.

Example:

```text
DeviceId = sensor-123
```

This preserves ordering for that device.

---

# Throughput Units (TU)

Defines Event Hubs capacity.

One Throughput Unit includes approximately:

- 1 MB/sec ingress
- 2 MB/sec egress

Event Hubs can auto-scale.

---

# Capture Feature

Event Hubs can automatically persist streams to:

- Azure Blob Storage
- Azure Data Lake

Useful for:

- analytics
- archival
- batch processing

---

# Consumers

Consumers read events from partitions.

Consumers control:

- processing speed
- checkpointing
- replay

Event Hubs keeps events temporarily even after reading.

---

# Consumer Groups

Consumer Groups allow multiple independent readers.

Example:

```text
Consumer Group A → Analytics
Consumer Group B → Monitoring
Consumer Group C → Archiving
```

Each group maintains its own offsets.

---

# Offsets

An offset identifies the position inside a partition.

Consumers use offsets to continue reading where they stopped.

---

# Checkpointing

Checkpointing stores consumer progress.

Usually stored in:

- Azure Blob Storage

Benefits:

- crash recovery
- resume processing
- scaling consumers

---

# Retention

Events remain stored for a configurable retention period.

Typical:

- 1 to 7 days
- longer in Premium/Dedicated tiers

Consumers can replay old events during retention.

---

# Replay Capability

Consumers can re-read historical events.

Very important difference compared to queues.

---

# Event Hubs vs Queue

| Feature | Event Hubs | Queue |
|---|---|---|
| Streaming | Yes | No |
| Replay | Yes | Usually No |
| Multiple consumers | Yes | Limited |
| Ordered stream | Per partition | No |
| High throughput | Excellent | Moderate |

---

# Event Hubs vs Service Bus

| Feature | Event Hubs | Service Bus |
|---|---|---|
| Telemetry streaming | Excellent | Poor |
| Enterprise messaging | Poor | Excellent |
| FIFO | Partition-based | Yes |
| Transactions | No | Yes |
| Dead-lettering | Limited | Full support |

---

# Event Hubs vs Event Grid

| Feature | Event Hubs | Event Grid |
|---|---|---|
| Streaming | Yes | No |
| Push model | No | Yes |
| Pull model | Yes | No |
| Telemetry ingestion | Excellent | Moderate |
| Reactive routing | Limited | Excellent |

---

# Authentication

Supported methods:

- Shared Access Signature (SAS)
- Microsoft Entra ID
- Managed Identity

---

# RBAC Roles

Common roles:

| Role | Purpose |
|---|---|
| Azure Event Hubs Data Sender | Send events |
| Azure Event Hubs Data Receiver | Read events |
| Contributor | Manage resource |
| Owner | Full access |

Important:

Management roles do NOT automatically grant data access.

---

# Event Processing

Typical flow:

```text
Producer
   ↓
Event Hub
   ↓
Partition
   ↓
Consumer reads events
```

Consumers pull events.

This is NOT push-based like Event Grid.

---

# Pull Model

Consumers actively request events.

Example:

```text
Consumer
   ↓
"Give me new events from partition 2"
```

---

# Kafka Support

Event Hubs supports Kafka protocol.

This allows existing Kafka applications to integrate with Azure Event Hubs.

Very exam relevant.

---

# Capture Example

```text
IoT Devices
   ↓
Event Hubs
   ↓
Capture
   ↓
Blob Storage
```

---

# Common Integrations

| Service | Purpose |
|---|---|
| Stream Analytics | Real-time analytics |
| Databricks | Big data processing |
| Functions | Serverless consumers |
| Power BI | Dashboards |
| Data Lake | Long-term storage |

---

# Networking

Supported:

- Private Endpoints
- Firewall Rules
- Virtual Networks

---

# Availability Tiers

| Tier | Notes |
|---|---|
| Basic | Simple workloads |
| Standard | Most common |
| Premium | Isolation and advanced features |
| Dedicated | Massive workloads |

---

# Important Characteristics

| Feature | Event Hubs |
|---|---|
| Model | Streaming platform |
| Delivery | Pull |
| Replay | Yes |
| Scaling | Automatic |
| Ordering | Per partition |
| Multiple consumers | Yes |
| Kafka support | Yes |

---

# Typical AZ-204 Scenarios

## Use Event Hubs when:

- ingesting telemetry
- handling millions of events
- streaming analytics
- IoT scenarios
- log aggregation

---

## Do NOT use Event Hubs when:

- reliable enterprise messaging required
- transactions required
- dead-letter queues required
- request/response workflows required

Use Service Bus instead.

---

# Common Exam Traps

## Trap: Event Hubs vs Event Grid

Event Hubs:

```text
Streaming ingestion platform
```

Event Grid:

```text
Reactive event routing service
```

---

## Trap: Push vs Pull

Event Hubs uses:

```text
Pull model
```

Consumers read events themselves.

---

## Trap: Ordering

Ordering is guaranteed ONLY inside a partition.

NOT globally.

---

## Trap: Consumer Groups

Consumer Groups allow multiple independent applications to read the same stream.

---

# CLI Examples

## Create Namespace

```bash
az eventhubs namespace create \
  --name mynamespace \
  --resource-group mygroup \
  --location westeurope
```

---

## Create Event Hub

```bash
az eventhubs eventhub create \
  --name telemetryhub \
  --namespace-name mynamespace \
  --resource-group mygroup
```

---

# Cheat Sheet

| Topic | Remember |
|---|---|
| Event Hubs | Streaming platform |
| Delivery | Pull |
| Ordering | Per partition |
| Replay | Supported |
| Consumer Groups | Independent readers |
| Kafka | Supported |
| Best Use Case | Telemetry ingestion |

---

# Mini Summary

Azure Event Hubs is a scalable event streaming platform optimized for telemetry and real-time analytics.

Most important concepts:

```text
Partitions
Consumer Groups
Replay
Streaming
Kafka compatibility
```

Typical architecture:

```text
Devices / Apps
   ↓
Event Hubs
   ↓
Analytics / Storage / Processing
```

---

<!-- include:_toc.md -->

---