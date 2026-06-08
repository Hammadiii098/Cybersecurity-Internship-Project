# 🔐 Cybersecurity Internship Task 

---

## 📌 Overview

This report presents a structured security assessment and improvement of a vulnerable web application (**OWASP Juice Shop**).  
The goal was to identify vulnerabilities, understand attack behavior, and apply basic security hardening techniques.

---

## 🧪 Week 1 — Security Assessment

### ⚙️ Application Setup

The application was installed and executed in a local environment using Node.js.

### 🖥️ Commands

```bash
git clone https://github.com/juice-shop/juice-shop.git
cd juice-shop
npm install
npm start
```

---

## 🚨 Identified Vulnerabilities

---

## 💥 Cross-Site Scripting (XSS)

📌 XSS is a vulnerability where malicious scripts are injected into a web application and executed in the user’s browser.

### 💣 Example Payloads
- `<script>alert('XSS')</script>`
- `<img src=x onerror=alert('XSS')>`
- `<svg onload=alert('XSS')>`

---

## 🗄️ SQL Injection (SQLi)

📌 SQL Injection allows attackers to manipulate database queries using malicious input.

### 💣 Example Payloads
- `admin' OR '1'='1`
- `' OR 1=1 --`
- `" OR "1"="1`

---

## 🔐 Weak Authentication

📌 Occurs when login systems can be bypassed due to poor validation or insecure logic.

---

## ⚠️ Security Misconfiguration

📌 Happens when applications expose unnecessary information or lack proper security settings (missing headers, debug mode, etc.).

---

## 🛠️ Week 2 — Security Improvements

---

## ✅ Input Validation
```bash
npm install validator
```

📌 Ensures only properly formatted data is accepted.

```javascript
const validator = require('validator');

if (!validator.isEmail(email)) {
  return res.status(400).send('Invalid email');
}
```

---

## 🛡️ Preventing XSS
```bash
npm install xss
```

📌 Sanitizes user input to prevent script execution.

```javascript
const xss = require('xss');
const cleanInput = xss(req.body.comment);
```

---

## 🔑 Password Security (Hashing)
```bash
npm install bcrypt
```

📌 Secures passwords by hashing before storing.

```javascript
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);
```

---

## 🎟️ JWT Authentication
```bash
npm install jsonwebtoken
```

📌 Provides secure token-based authentication.

```javascript
const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: user._id }, 'secret-key');
```

---

## 🛡️ Security Headers
```bash
npm install helmet
```

📌 Adds HTTP security headers to protect the application.

```javascript
const helmet = require('helmet');
app.use(helmet());
```

---

## 🔍 Week 3 — Advanced Security Testing

---

## 🌐 Network Scanning
```bash
nmap localhost
nmap -sV localhost
```

📌 Used to identify open ports and running services.

---

## 📊 Logging System
```bash
npm install winston
```

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'security.log' })
  ]
});
```

---

## 📋 Security Checklist

✔ Input validation implemented  
✔ Passwords hashed using bcrypt  
✔ JWT authentication enabled  
✔ Security headers configured  
✔ Logging system enabled  
✔ HTTPS recommended for production  

---

## 📊 Vulnerability Summary

| 🛑 Vulnerability | 📍 Location | ⚡ Risk Level |
|------------------|-------------|--------------|
| XSS              | Input Fields | High         |
| SQL Injection    | Login System | Critical     |
| Weak Auth        | Auth Module  | High         |
| Misconfiguration | Server       | Medium       |


# 🔐 Week 4 - Advanced Threat Detection & Web Security Enhancements

## 🎯 Goal

Implement advanced security measures, detect threats in real-time, and secure API endpoints against common attacks.

### 🛡️ Intrusion Detection & Monitoring

* Installed and configured **Fail2Ban** for real-time monitoring.
* Configured automatic detection of suspicious login activities.
* Implemented protection against repeated failed login attempts.

### 🚦 API Security Hardening

* Applied **Rate Limiting** using `express-rate-limit` to reduce brute-force attack risks.
* Configured **CORS** policies to restrict unauthorized cross-origin requests.
* Implemented **API Key Authentication** for securing API endpoints.

### 🔒 Security Headers & CSP

* Configured **Helmet.js** security middleware.
* Implemented **Content Security Policy (CSP)** to mitigate script injection attacks.
* Enabled **HTTP Strict Transport Security (HSTS)** for secure HTTPS communication.

### ✅ Outcomes

* Enhanced API protection mechanisms.
* Reduced attack surface against brute-force and injection attempts.
* Improved overall application security posture.

---

# 🕵️ Week 5 - Ethical Hacking & Exploiting Vulnerabilities

## 🎯 Goal

Perform security testing in a controlled environment, identify vulnerabilities, and implement security improvements.

### 🔍 Reconnaissance & Enumeration

* Utilized Kali Linux security tools for reconnaissance activities.
* Performed service discovery and information gathering.
* Identified application attack surfaces for further assessment.

### 💉 SQL Injection Testing

* Conducted SQL Injection assessments using SQLMap.
* Evaluated application endpoints for SQLi vulnerabilities.
* Applied secure coding practices using parameterized queries and prepared statements.

### 🛡️ CSRF Protection

* Implemented CSRF protection using `csurf` middleware.
* Generated and validated CSRF tokens for sensitive requests.
* Verified protection effectiveness through controlled testing.

### ✅ Outcomes

* Improved input validation and database security.
* Strengthened protection against unauthorized request forgery.
* Documented identified vulnerabilities and remediation measures.

---

# 🔎 Week 6 - Advanced Security Audits & Final Deployment Security

## 🎯 Goal

Conduct comprehensive security audits, verify compliance with best practices, and prepare the application for secure deployment.

### 📊 Security Audits

* Performed vulnerability scanning using:

  * OWASP ZAP
  * Nikto
  * Lynis
* Reviewed findings against OWASP Top 10 security risks.
* Analyzed security recommendations and implemented improvements.

### 🐳 Secure Deployment Practices

* Executed dependency vulnerability scans using `npm audit`.
* Applied security updates where applicable.
* Followed Docker security best practices.
* Performed container image vulnerability scanning.

### 🚨 Final Penetration Testing

* Conducted final security testing using industry-standard tools.
* Verified implemented security controls.
* Documented testing methodology, findings, and remediation actions.

### ✅ Outcomes

* Completed security assessment and hardening process.
* Improved application resilience against common web attacks.
* Prepared the application for secure deployment.

---

# 🛠️ Security Tools Used

| Tool               | Purpose                          |
| ------------------ | -------------------------------- |
| Fail2Ban           | Intrusion Detection & Monitoring |
| Express Rate Limit | Brute Force Protection           |
| Helmet.js          | Security Headers                 |
| CORS               | Cross-Origin Access Control      |
| SQLMap             | SQL Injection Testing            |
| Burp Suite         | Web Security Testing             |
| OWASP ZAP          | Vulnerability Assessment         |
| Nikto              | Web Server Security Audit        |
| Lynis              | System Security Audit            |
| Docker             | Containerized Deployment         |

---

# 📌 Key Security Features Implemented

✅ Real-Time Intrusion Monitoring

✅ Failed Login Attempt Detection

✅ API Rate Limiting

✅ CORS Security Controls

✅ API Authentication

✅ Content Security Policy (CSP)

✅ Strict-Transport-Security (HSTS)

✅ SQL Injection Mitigation

✅ CSRF Protection

✅ Vulnerability Scanning

✅ Docker Security Auditing

✅ OWASP Top 10 Security Review

---

## 🚀 Project Status

**Security Hardening Completed Successfully**

The application has undergone security assessment, vulnerability testing, and implementation of multiple defensive controls to improve confidentiality, integrity, and availability.

---
