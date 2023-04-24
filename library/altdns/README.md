## Description

Altdns is a DNS recon tool that allows for the discovery of subdomains that conform to patterns. Altdns takes in words that could be present in subdomains under a domain (such as test, dev, staging) as well as takes in a list of subdomains that you know of.

## Cheatsheat 
### Generate a list of altered subdomains
```
docker run -it --rm -v <input_dir>:/input -v <output_dir>:/output secsi/altdns -i /input/<subdomain_file> -o /output/new_subdomains.txt
```

### Generate a list of altered subdomains & resolve them
```
docker run -it --rm -v <input_dir>:/input -v <output_dir>:/output secsi/altdns -i /input/<subdomain_file> -o /output/new_subdomains.txt -r -s /output/resolved_subdomains.txt
```