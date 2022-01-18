## Description
The **WPScan** CLI tool is a free, for non-commercial use, black box WordPress security scanner written for security professionals and blog maintainers to test the security of their sites. The WPScan CLI tool uses our database of 26,336 WordPress vulnerabilities.

## Cheatsheet
### Non-intrusive scan
```
docker run -it --rm wpscanteam/wpscan --url <target_url>
```

### Tout Enumeration
```
docker run -it --rm wpscanteam/wpscan --url <target_url> --enumerate 
```

### Plugin Enumeration
```
docker run -it --rm wpscanteam/wpscan --url <target_url> --enumerate p
```

### Users Enumeration
```
docker run -it --rm wpscanteam/wpscan --url <target_url> --enumerate u
```

### Bruteforce
```
docker run -it --rm -v <wordlist_src_dir>:/usr/share/wordlists wpscanteam/wpscan --url <target_url> --wordlist /usr/share/wordlists/<wordlist_file> --threads 50
```