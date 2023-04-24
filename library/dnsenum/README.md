## Description

multithreaded perl script to enumerate DNS information of a domain
and to discover non-contiguous ip blocks.

OPERATIONS:

1) Get the host's addresse (A record).

2) Get the namservers (threaded).

3) Get the MX record (threaded).

4) Perform axfr queries on nameservers and get BIND VERSION (threaded).

5) Get extra names and subdomains via google scraping
    (google query = "allinurl: -www site:domain").

6) Brute force subdomains from file, can also perform recursion
    on subdomain that have NS records (all threaded).

7) Calculate C class domain network ranges and perform whois
    queries on them (threaded).

8) Perform reverse lookups on netranges
    ( C class or/and whois netranges) (threaded).

9) Write to domain_ips.txt file ip-blocks.


## Cheatsheat 
### Custom bruteforce file
```
docker run -it --rm -v <wordlist_src_dir>:/wordlists guidelacour/dnsenum ./dnsenum.pl <target_domain> --file /wordlists/<wordlist_file>
```

### Custom output
```
docker run -it --rm -v <output_dir>:/output guidelacour/dnsenum ./dnsenum.pl <target_domain> --file dns.txt --out /output/outfile
```