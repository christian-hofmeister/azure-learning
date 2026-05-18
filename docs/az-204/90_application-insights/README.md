<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

_No content found._


---

# Azure Application Insights (AZ-204 Summary)

## Overview

Azure Application Insights is an Application Performance Monitoring (APM) service that is part of Azure Monitor.

It helps developers:
- Monitor application health
- Detect failures
- Analyze performance
- Track user behavior
- Diagnose production issues
- Collect telemetry data

Application Insights supports:
- Web applications
- APIs
- Azure Functions
- Background services
- Containers
- Distributed systems

---

# Core Concepts

## Telemetry

Application Insights collects telemetry data such as:
- Requests
- Dependencies
- Exceptions
- Traces
- Metrics
- Availability tests
- Custom events

---

## Instrumentation Key vs Connection String

### Old
Instrumentation Key (`ikey`)

### Modern (preferred)
Connection String

Example:
```text
APPLICATIONINSIGHTS_CONNECTION_STRING=InstrumentationKey=xxxx...
```

AZ-204 tip:
- Microsoft recommends using Connection Strings
- Instrumentation Keys are legacy

---

# Automatic Monitoring

Application Insights can automatically collect:

| Data | Description |
|---|---|
| Requests | Incoming HTTP requests |
| Dependencies | SQL, HTTP, Storage calls |
| Exceptions | Unhandled exceptions |
| Performance Counters | CPU, memory, response times |
| Logs | ILogger integration |
| Availability | Ping/web tests |

---

# Distributed Tracing

Very important for microservices.

Application Insights supports:
- Correlation IDs
- End-to-end tracing
- Dependency tracking

You can trace:
```text
Frontend → API → Queue → Function → Database
```

AZ-204 exam focus:
- Diagnose distributed systems
- Track failed requests across services

---

# Logging Integration (.NET)

Typical integration:
```csharp
builder.Services.AddApplicationInsightsTelemetry();
```

Application Insights integrates with:
- ILogger
- ASP.NET Core logging
- Azure Functions logging

---

# Custom Telemetry

You can send custom events and metrics.

Example:
```csharp
telemetryClient.TrackEvent("OrderCreated");
```

Example:
```csharp
telemetryClient.TrackMetric("ProcessedItems", 42);
```

Useful for:
- Business metrics
- Domain events
- Custom monitoring

---

# Live Metrics

Live Metrics Stream provides near real-time monitoring:
- Request rate
- Failures
- CPU
- Memory
- Live users

Useful during:
- Production incidents
- Deployments
- Troubleshooting

---

# Availability Tests

Application Insights can periodically test endpoints.

Types:
- URL ping test
- Multi-step web tests (legacy)

Use cases:
- Health monitoring
- Uptime checks
- Alerting

---

# Application Map

Visual dependency map of your system.

Shows:
- Services
- Dependencies
- Failure rates
- Latency

Very useful in:
- Microservice architectures
- Distributed systems

---

# Sampling

Sampling reduces telemetry volume and cost.

Important because:
- High telemetry volume can become expensive

Types:
- Adaptive sampling
- Fixed-rate sampling

AZ-204 tip:
- Sampling helps control ingestion costs

---

# Alerts

Azure Monitor Alerts can trigger when:
- Error rate increases
- Response time is high
- Availability fails
- CPU usage spikes

Actions:
- Email
- SMS
- Webhook
- Azure Function
- Logic App

---

# Kusto Query Language (KQL)

Application Insights uses KQL for querying telemetry.

Example:
```kusto
requests
| where success == false
| order by timestamp desc
```

AZ-204:
- Basic KQL understanding is useful
- Mostly conceptual in the exam

---

# Integration with Azure Services

Common integrations:
- App Service
- Azure Functions
- AKS
- Virtual Machines
- Service Bus
- Event Grid
- Storage Accounts

---

# OpenTelemetry

Modern standard for observability.

Application Insights supports OpenTelemetry.

AZ-204 focus:
- OpenTelemetry is becoming increasingly important
- Vendor-neutral telemetry standard

---

# Application Insights + Azure Functions

Very common exam topic.

Functions automatically integrate with Application Insights.

Useful for:
- Execution logs
- Failures
- Cold start analysis
- Dependency tracking

---

# Retention

Telemetry data is stored for a configurable retention period.

Longer retention:
- Higher cost
- More historical analysis

---

# Cost Factors

Costs depend on:
- Data ingestion volume
- Retention duration
- Sampling configuration

---

# Security

Sensitive data should NOT be logged.

Avoid:
- Passwords
- Secrets
- Tokens
- Personal data

---

# Common AZ-204 Scenarios

## Scenario 1
Need end-to-end tracing across microservices.

→ Use Application Insights distributed tracing.

---

## Scenario 2
Need to detect slow SQL queries.

→ Use dependency tracking.

---

## Scenario 3
Need alerts when API failures increase.

→ Use Azure Monitor alerts with Application Insights metrics.

---

## Scenario 4
Need business telemetry.

→ Use custom events and metrics.

---

# Important Exam Topics

## Know the difference

| Feature | Purpose |
|---|---|
| Metrics | Numerical measurements |
| Logs/Traces | Diagnostic information |
| Events | Business/application actions |
| Requests | Incoming operations |
| Dependencies | External calls |

---

# Application Insights vs Log Analytics

| Service | Focus |
|---|---|
| Application Insights | Application telemetry |
| Log Analytics | Centralized log analysis |

Today both are closely integrated in Azure Monitor.

---

# Cheat Sheet

## Use Application Insights for:
- Performance monitoring
- Exception tracking
- Distributed tracing
- Dependency monitoring
- Availability testing
- Live diagnostics

---

## Important Features
- Telemetry
- Distributed tracing
- Dependency tracking
- Sampling
- Alerts
- Live Metrics
- KQL
- Custom telemetry

---

# Typical AZ-204 Exam Traps

## Trap 1
Confusing Application Insights with Azure Monitor.

Reality:
```text
Application Insights is part of Azure Monitor.
```

---

## Trap 2
Thinking Application Insights is only for web apps.

Reality:
- APIs
- Functions
- Workers
- Containers
- Background services

are also supported.

---

## Trap 3
Ignoring telemetry costs.

Reality:
- High telemetry ingestion can become expensive
- Sampling is important

---

## Trap 4
Logging sensitive information.

Never log:
- Secrets
- Tokens
- Credentials

---

# Minimal ASP.NET Core Setup

```csharp
builder.Services.AddApplicationInsightsTelemetry();
```

Environment variable:
```text
APPLICATIONINSIGHTS_CONNECTION_STRING
```

---

# Minimal Azure Functions Setup

Usually automatic:
```text
Azure Functions → Application Insights
```

Telemetry is automatically collected.

---

# Final AZ-204 Takeaway

Application Insights is the central Azure service for:
- Observability
- Monitoring
- Diagnostics
- Telemetry
- Distributed tracing

For AZ-204, focus especially on:
- Distributed tracing
- Dependency tracking
- Logging
- Alerts
- Sampling
- Integration with Functions/App Service
- Custom telemetry

---

<!-- AUTO-GENERATED FILE - DO NOT EDIT -->

_No content found._


---