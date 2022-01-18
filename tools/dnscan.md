## Description

**dnscan** is a python wordlist-based DNS subdomain scanner.

The script will first try to perform a zone transfer using each of the target domain's nameservers.

If this fails, it will lookup TXT and MX records for the domain, and then perform a recursive subdomain scan using the supplied wordlist.

## Cheatsheet
### Subdomain brute-force of a domain
```
docker run -it --rm -v <output_dir>:/output -v <wordlist_src_dir>:/usr/share/wordlists secsi/dnscan -d <target_domain> -o /output/outfile -w /usr/share/wordlists/<wordlist_file>
```

### Subdomain brute-force of domains listed in a file (one by line)
```
docker run -it --rm -v <input_dir>:/input -v <output_dir>:/output -v <wordlist_src_dir>:/usr/share/wordlists secsi/dnscan -l <input_dir>/domains.txt -o /output/outfile -w /usr/share/wordlists/<wordlist_file>
```