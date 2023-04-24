## Description

This is a collection of most of my scripts that I use to debug Server Side Request Forgery (SSRF), blind XSS, and insecure XXE processing vulnerabilities. 
- DOCX/XLSX/PPTX
- ODT/ODG/ODP/ODS
- SVG
- XML
- PDF (experimental)
- JPG (experimental)
- GIF (experimental)

## Cheatsheat 
Use server!
```
curl -vv "http://localhost/redirect?url=http://169.254.169.254/latest/meta-data/"
curl -vv "http://localhost/ping_pong?body=%3ch1%3eHello%3c/h1%3e"
```
