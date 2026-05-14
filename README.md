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

---
