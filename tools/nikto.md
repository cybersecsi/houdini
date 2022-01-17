## Description
**Nikto** is an Open Source (GPL) web server scanner which performs comprehensive tests against web servers for multiple items, including over 6700 potentially dangerous files/programs, checks for outdated versions of over 1250 servers, and version specific problems on over 270 servers. It also checks for server configuration items such as the presence of multiple index files, HTTP server options, and will attempt to identify installed web servers and software. Scan items and plugins are frequently updated and can be automatically updated.

Nikto is not designed as a stealthy tool. It will test a web server in the quickest time possible, and is obvious in log files or to an IPS/IDS. However, there is support for LibWhisker's anti-IDS methods in case you want to give it a try (or test your IDS system).

Not every check is a security problem. There are some items that are "info only" type checks that look for things that may not have a security flaw, but Pentester may not know are present on the server. These items are usually marked appropriately in the information printed. There are also some checks for unknown items which have been seen scanned for in log files.

The goal of the project is to examine a web server to find potential problems and security vulnerabilities, including:

- Server and software misconfigurations
- Default files and programs
- Insecure files and programs
- Outdated servers and programs
- Pointers to lead a human tester to better manual testing

Nikto is built on LibWhisker2 (by Rain Forest Puppy) and can run on any platform which has a Perl environment. It supports SSL, proxies, host authentication, attack encoding and more.

## Cheatsheet

### To scan a particular host
```
docker run -it --rm secsi/nikto -host <target_ip_address>
```

### To scan a host on multiple ports (default = 80)
```
docker run -it --rm  secsi/nikto -host <target_ip_address> -port [port number 1], [port number 2], [port number 3]
```

### To scan a host and output fingerprinted information to a file
```
docker run -it --rm -v <output_dir>:/output secsi/nikto -host <target_ip_address> -output /output/<output_file>
```

### To use a proxy while scanning a host
```
docker run -it --rm secsi/nikto -host <target_ip_address> -useproxy <proxy_address>
```