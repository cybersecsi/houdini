## Description
**Wfuzz** has been created to facilitate the task in web applications assessments and it is based on a simple concept: it replaces any reference to the FUZZ keyword by the value of a given payload.

A payload in Wfuzz is a source of data.

This simple concept allows any input to be injected in any field of an HTTP request, allowing to perform complex web security attacks in different web application components such as: parameters, authentication, forms, directories/files, headers, etc.

Wfuzz is more than a web content scanner:
- Wfuzz could help you to secure your web applications by finding and exploiting web application vulnerabilities. Wfuzz’s web application vulnerability scanner is supported by plugins.
- Wfuzz is a completely modular framework and makes it easy for even the newest of Python developers to contribute. Building plugins is simple and takes little more than a few minutes.
- Wfuzz exposes a simple language interface to the previous HTTP requests/responses performed using Wfuzz or other tools, such as Burp. This allows you to perform manual and semi-automatic tests with full context and understanding of your actions, without relying on a web application scanner underlying implementation.

## Cheatsheet
This cheatsheet is taken from [HackTrick](https://book.hacktricks.xyz/pentesting-web/web-tool-wfuzz).

### Login Form bruteforce
#### POST, Single list, filter string (hide)
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -c -w users.txt --hs "Login name" -d "name=FUZZ&password=FUZZ&autologin=1&enter=Sign+in" http://zipper.htb/zabbix/index.php
```

#### POST, 2 lists, filder code (show)
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -c -z file,users.txt -z file,pass.txt --sc 200 -d "name=FUZZ&password=FUZ2Z&autologin=1&enter=Sign+in" http://zipper.htb/zabbix/index.php
```

#### GET, 2 lists, filter string (show), proxy, cookies
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -c -w users.txt -w pass.txt --ss "Welcome " -p 127.0.0.1:8080:HTTP -b "PHPSESSIONID=1234567890abcdef;customcookie=hey" "http://example.com/index.php?username=FUZZ&password=FUZ2Z&action=sign+in"
```

### Bruteforce Directory/RESTful bruteforce
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -c -w /tmp/tmp/params.txt --hc 404 https://domain.com/api/FUZZ
```

### Path Parameters Bruteforce
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -c -w ~/git/Arjun/db/params.txt --hw 11 'http://example.com/path%3BFUZZ=FUZZ'
```

### Header Authentication
#### Basic, 2 lists, filter string (show), proxy
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -c -w users.txt -w pass.txt -p 127.0.0.1:8080:HTTP --ss "Welcome" --ntlm 'domain\FUZZ:FUZ2Z' "http://example.com/index.php"
```

### Cookie/Header bruteforce (vhost brute)
#### Cookie, filter code (show), proxy
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -c -w users.txt -p 127.0.0.1:8080:HTTP --ss "Welcome " -H "Cookie:id=1312321&user=FUZZ"  "http://example.com/index.php"
```

#### User-Agent, filter code (hide), proxy
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -c -w user-agents.txt -p 127.0.0.1:8080:HTTP --ss "Welcome " -H "User-Agent: FUZZ"  "http://example.com/index.php"
```

#### Host
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -c -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-20000.txt --hc 400,404,403 -H "Host: FUZZ.example.com" -u http://example.com -t 100
```

### HTTP Verbs (methods) bruteforce
#### Using file
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -c -w methods.txt -p 127.0.0.1:8080:HTTP --sc 200 -X FUZZ "http://example.com/index.php"
```

#### Using inline list
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -z list,GET-HEAD-POST-TRACE-OPTIONS -X FUZZ http://testphp.vulnweb.com/
```

### Directory & Files Bruteforce

```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz -c -z file,/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt --sc 200,202,204,301,302,307,403 http://example.com/uploads/FUZZ
```
