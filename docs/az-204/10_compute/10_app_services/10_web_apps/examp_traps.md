## App Service – Exam Traps

### 🔥 Authentication

❌ "You must implement authentication in code"
→ ✅ WRONG → Use built-in Easy Auth

❌ "Authentication depends on programming language"
→ ✅ WRONG → Platform-level feature

❌ "App Service auth runs inside your app"
→ ✅ WRONG → Runs as middleware BEFORE your app

---

### 🔥 Networking

❌ "App Service is inside your VNet by default"
→ ✅ WRONG → Only with:
   - VNet Integration (outbound)
   - Private Endpoint (inbound)
   - ASE (fully inside VNet)

---

### 🔥 Inbound vs Outbound

❌ "VNet Integration secures inbound traffic"
→ ✅ WRONG → Only outbound!

❌ "Private Endpoint is for outbound traffic"
→ ✅ WRONG → Only inbound!

---

### 🔥 Outbound IPs

❌ "App has one fixed outbound IP"
→ ✅ WRONG → Multiple possible IPs

❌ "Use outboundIpAddresses for firewall"
→ ⚠️ RISKY → Use:
   ✅ possibleOutboundIpAddresses

---

### 🔥 Scaling

❌ "Each app has its own VM"
→ ✅ WRONG → Shared within App Service Plan

---

### 🔥 Authorization

❌ "Require authentication affects only some endpoints"
→ ✅ WRONG → Applies to entire app

---

### 🔥 Linux / Containers

❌ "Auth integrates deeply with framework"
→ ✅ WRONG → Runs separately (containerized)

---

### 🧠 Golden Rules

- Easy Auth = platform feature
- Middleware BEFORE your code
- Inbound ≠ Outbound (strict separation!)
- VNet Integration = outbound only
- Private Endpoint = inbound only
- possibleOutboundIpAddresses = exam gold