## Description
A fast web fuzzer written in Go.

## Cheatsheet

### Directory discovery
```
docker run -it --rm -v <wordlist_src_dir>:/usr/share/wordlists secsi/ffuf -w /usr/share/wordlists/<wordlist_file> -u <target_url>
```

### Adding classical header (some WF bypass)
```
docker run -it --rm -v <wordlist_src_dir>:/usr/share/wordlists secsi/ffuf -c -w "/usr/share/wordlists/<wordlist_file>:FILE" -H "X-Originating-IP: 127.0.0.1, X-Forwarded-For: 127.0.0.1, X-Forwarded-For: 127.0.0.1, X-Remote-IP: 127.0.0.1, X-Remote-Addr: 127.0.0.1, X-Client-IP: 127.0.0.1" -fs 5682,0 -u <target_url>
```

### Match all responses but filter out those with content-size 42
```
docker run -it --rm -v <wordlist_src_dir>:/usr/share/wordlists secsi/ffuf -w /usr/share/wordlists/<wordlist_file> -u <target_url> -mc all -fs 42 -c -v
```

### Fuzz Host-Header, match HTTP 200 responses
```
docker run -it --rm -v <wordlist_src_dir>:/usr/share/wordlists secsi/ffuf -w /usr/share/wordlists/<wordlist_file> -u <target_url> -H "Host:FUZZ" -mc 200
```

### Virtual Host Discovery (without DNS records)
```
docker run -it --rm -v <wordlist_src_dir>:/usr/share/wordlists secsi/ffuf -w /usr/share/wordlists/<wordlist_file> -u <target_url> -H "Host: FUZZ" -fs 4242
```

### Playing with threads and wait
```
docker run -it --rm -v <wordlist_src_dir>:/usr/share/wordlists secsi/ffuf -u <target_url> -w /usr/share/wordlists/<wordlist_file> -c -p 0.1 -t 10
```

### GET parameter fuzzing, filtering for invalid response size (or whatever)
```
docker run -it --rm -v <wordlist_src_dir>:/usr/share/wordlists secsi/ffuf -w /usr/share/wordlists/<wordlist_file> -u <target_url>?FUZZ=value -fs 4242
```

### GET parameter fuzzing if the param is known (fuzzing values) and filtering 401
```
docker run -it --rm -v <wordlist_src_dir>:/usr/share/wordlists secsi/ffuf -w /usr/share/wordlists/<wordlist_file> -u <target_url>?param=FUZZ -fc 401 
```

### POST parameter fuzzing
```
docker run -it --rm -v <wordlist_src_dir>:/usr/share/wordlists secsi/ffuf -w /usr/share/wordlists/<wordlist_file> -X POST -d "username=admin\&password=FUZZ" -u <target_url> -fc 401
```