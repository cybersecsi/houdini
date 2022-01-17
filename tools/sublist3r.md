## Description

**Sublist3r** is a python tool designed to enumerate subdomains of websites using *OSINT*. It helps penetration testers and bug hunters collect and gather subdomains for the domain they are targeting. Sublist3r enumerates subdomains using many search engines such as Google, Yahoo, Bing, Baidu and Ask. Sublist3r also enumerates subdomains using Netcraft, Virustotal, ThreatCrowd, DNSdumpster and ReverseDNS.

## Usage
```
docker run -it --rm secsi/sublist3r -d <target_url>
```