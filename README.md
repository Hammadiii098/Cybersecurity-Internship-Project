# Cybersecurity Internship Task — Full Solution Report

## Overview
This report documents the process of analyzing a vulnerable web application, identifying security flaws, and implementing security improvements. The target application used for testing is OWASP Juice Shop.

---

## Week 1 — Security Assessment

The OWASP Juice Shop application was installed and tested locally to identify common vulnerabilities such as XSS, SQL Injection, weak authentication, and security misconfigurations.

### Application Setup Commands
```bash
git clone https://github.com/juice-shop/juice-shop.git
cd juice-shop
npm install
npm start
Vulnerabilities & Short Definitions
1. Cross-Site Scripting (XSS)

A vulnerability where malicious scripts are injected into web pages and executed in the victim’s browser.

Example Payloads

<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
<svg onload=alert('XSS')>
2. SQL Injection (SQLi)

A vulnerability that allows attackers to manipulate database queries by injecting malicious SQL code.

Example Payloads

admin' OR '1'='1
' OR 1=1 --
" OR "1"="1
3. Weak Authentication

Occurs when login systems are poorly protected, allowing attackers to bypass or guess credentials easily.

4. Security Misconfiguration

Happens when applications are not securely configured, such as missing headers, debug mode enabled, or exposed sensitive data.

Week 2 — Security Improvements
Input Validation
npm install validator
const validator = require('validator');

if (!validator.isEmail(email)) {
   return res.status(400).send('Invalid email');
}
Preventing XSS
npm install xss
const xss = require('xss');
const cleanInput = xss(req.body.comment);
Password Hashing
npm install bcrypt
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);
JWT Authentication
npm install jsonwebtoken
const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: user._id }, 'secret-key');
Security Headers (Helmet)
npm install helmet
const helmet = require('helmet');
app.use(helmet());
Week 3 — Advanced Security
Network Scanning (Nmap)
nmap localhost
nmap -sV localhost
Logging System (Winston)
npm install winston
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'security.log' })
  ]
});
Security Checklist
Validate all user inputs
Use password hashing (bcrypt)
Implement JWT authentication
Secure HTTP headers using Helmet
Enable logging and monitoring
Use HTTPS for secure communication
Example Vulnerability Summary
Vulnerability	Location	Risk
XSS	Search & Comments	High
SQL Injection	Login Form	Critical
Weak Authentication	Login System	High
Missing Security Headers	HTTP Response	Medium
