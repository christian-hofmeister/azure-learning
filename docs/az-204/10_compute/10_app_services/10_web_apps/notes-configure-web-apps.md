# Configure Web App Settings (Azure App Service)

Azure App Service provides multiple configuration options to control application behavior, security, routing, and diagnostics.

---

## Overview

This module covers:

- Application settings
- General settings
- Path mappings
- Diagnostic logging
- Security certificates

These are essential for configuring, securing, and troubleshooting web apps.

---

## 1. Application Settings

Application settings are **key-value pairs** exposed to the application as environment variables.

### Use cases

- Connection strings
- API keys
- Feature flags
- Environment-specific configuration

### Key characteristics

- Separate configuration from code
- Changes trigger an **app restart**
- Can be marked as **deployment slot settings**

### Deployment slot settings

A setting marked as a **slot setting** stays with its deployment slot during a swap.

**Example:**
- Staging → Test database
- Production → Live database

If the connection string is a slot setting, it does NOT move during swap.

### Exam tip

Use **slot settings** when configuration must remain tied to a specific slot.

---

## 2. General Settings

General settings define how the app runs at runtime.

### Examples

- Runtime stack (.NET, Node.js, Java, etc.)
- Platform (32-bit / 64-bit)
- HTTP version
- WebSockets
- Always On

### Important points

- **Always On** prevents cold starts
- Controls runtime behavior, not configuration values

### Exam tip

If the question is about runtime/platform behavior → **General settings**

---

## 3. Path Mappings

Path mappings define how URLs map to physical directories.

### Includes

- Virtual applications
- Virtual directories

### Example

- URL: `/images`
- Physical path: `site/wwwroot/assets/images`

### Use cases

- Organizing large apps
- Supporting legacy structures
- Mapping subpaths to folders

### Key concepts

- **Virtual directory** → maps URL path to folder
- **Virtual application** → behaves like a sub-app

### Exam tip

Mapping URL paths to directories → **Path mappings**

---

## 4. Diagnostic Logging

Used for monitoring and troubleshooting.

### Types of logs

- Application logs
- Web server logs
- Detailed error messages
- Failed request tracing

### Storage options

- File system (temporary)
- Azure Blob Storage

### Why it matters

Helps diagnose:

- Crashes
- Exceptions
- Failed requests
- Startup issues

### Exam tip

Troubleshooting production issues → **Enable diagnostic logging**

---

## 5. Security Certificates (SSL/TLS)

Used to secure traffic via HTTPS.

### Purpose

- Encrypt communication
- Enable HTTPS for custom domains

### Key points

- Required for HTTPS on custom domains
- Managed through App Service
- Ensures secure client-server communication

### Exam tip

Secure web traffic / HTTPS → **SSL/TLS certificates**

---

## Quick Summary

| Feature                | Purpose                                   |
|----------------------|-------------------------------------------|
| Application settings | App configuration (key-value pairs)       |
| General settings     | Runtime/platform behavior                 |
| Path mappings        | URL → directory mapping                   |
| Diagnostic logging   | Monitoring & troubleshooting              |
| Certificates         | HTTPS & secure communication              |

---

## Exam Traps

### Trap 1: Application vs General Settings
- Application settings = config values
- General settings = runtime behavior

### Trap 2: Slot Settings
- Only marked settings stay with the slot
- Others are swapped

### Trap 3: Path Mappings
- Used for routing paths, NOT security or config

### Trap 4: Diagnostic Logging
- For troubleshooting, not full monitoring solutions

### Trap 5: Certificates
- Used for HTTPS, especially with custom domains

---

## One-liner Recap

Use **application settings** for config, **general settings** for runtime behavior, **path mappings** for routing, **diagnostic logging** for debugging, and **certificates** for HTTPS security.