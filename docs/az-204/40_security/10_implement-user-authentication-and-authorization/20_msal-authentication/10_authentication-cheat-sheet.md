# AZ-204 Authentication Cheat Sheet

## 🔐 PKCE vs Client Secret

| Feature              | PKCE                                  | Client Secret                     |
|----------------------|----------------------------------------|----------------------------------|
| Purpose              | Secure public clients                  | Authenticate confidential clients|
| Used by              | SPA, Mobile, Desktop                  | Web Apps, APIs                   |
| Secret stored?       | ❌ No                                  | ✔️ Yes                           |
| Security mechanism   | code_verifier + code_challenge        | shared secret                    |
| Risk if leaked       | Low (one-time use)                    | High (long-lived secret)         |
| Required             | ✔️ Public clients                     | ✔️ Confidential clients          |
| Modern recommendation| ✔️ Always use                         | ✔️ Still valid                   |

👉 **Key takeaway:**  
PKCE replaces the Client Secret where it cannot be stored securely.

---

## 🔄 OAuth Flows Comparison

| Flow                     | User involved | Typical use case                  | Method                         |
|--------------------------|--------------|----------------------------------|--------------------------------|
| Authorization Code + PKCE| ✔️ Yes       | SPA, Mobile                      | AcquireTokenInteractive        |
| Authorization Code       | ✔️ Yes       | Web Apps                         | Server-side auth               |
| Client Credentials       | ❌ No        | Background services              | AcquireTokenForClient          |
| On-Behalf-Of (OBO)       | ✔️ Yes       | API → API (user context)         | AcquireTokenOnBehalfOf         |

---

## 👤 Delegated vs Application Permissions

| Feature                  | Delegated Permissions                | Application Permissions           |
|--------------------------|-------------------------------------|-----------------------------------|
| User required            | ✔️ Yes                              | ❌ No                             |
| Context                  | User + App                          | App only                          |
| Consent                  | User or Admin                       | Admin only                        |
| Typical scenario         | User accessing API                  | Daemon / background job           |
| Example                  | Read user profile                   | Read all users in tenant          |

👉 **Key takeaway:**  
- Delegated = *on behalf of a user*  
- Application = *app acts alone*

---

## 🔁 OBO vs Client Credentials

| Feature                  | On-Behalf-Of (OBO)                  | Client Credentials                |
|--------------------------|-------------------------------------|----------------------------------|
| User context             | ✔️ Yes                              | ❌ No                            |
| Token source             | Incoming user token                 | App identity                     |
| Scenario                 | API → API                           | Service → API                    |
| Permissions              | Delegated                           | Application                      |
| Complexity               | Higher                              | Lower                            |

👉 **Key takeaway:**  
- OBO = propagate user identity  
- Client Credentials = no user involved  

---

## 🧠 When to use what?

| Scenario                                  | Recommended Approach               |
|-------------------------------------------|-----------------------------------|
| SPA login                                 | Auth Code + PKCE                  |
| Web app (server-side)                     | Auth Code (+ optional PKCE)       |
| Background job                            | Client Credentials                |
| API calling another API (user context)    | OBO Flow                          |

---

## ⚠️ Exam Traps

- ❗ PKCE is required for **public clients**
- ❗ Client Credentials = **no user**
- ❗ OBO requires **incoming user token**
- ❗ Delegated ≠ Application permissions
- ❗ Implicit Flow is **deprecated**
- ❗ Always try **AcquireTokenSilent first**

---

## 🔥 Ultimate Memory Trick

```text
PKCE → Public client security
Secret → Server security
OBO → Pass user identity
Client Credentials → No user
```

---

## ✅ Summary

- PKCE is essential for modern authentication (especially SPAs)
- Understand the difference between flows and permission types
- Choose the flow based on:
  - user involvement
  - application type
  - security requirements

👉 Mastering these distinctions is **critical for AZ-204**