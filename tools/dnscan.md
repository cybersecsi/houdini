## Description

**dnscan** is a python wordlist-based DNS subdomain scanner.

The script will first try to perform a zone transfer using each of the target domain's nameservers.

If this fails, it will lookup TXT and MX records for the domain, and then perform a recursive subdomain scan using the supplied wordlist.

## Usage
```
docker run -it --rm secsi/dnscan -d <target_url> -w subdomains-10000.txt -t 10 -R 1.0.0.1
```
