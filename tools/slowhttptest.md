## Description

SlowHTTPTest is a highly configurable tool that simulates some Application Layer Denial of Service attacks by prolonging HTTP connections in different ways.

Use it to test your web server for DoS vulnerabilites, or just to figure out how many concurrent connections it can handle.

## Cheatsheat 
### Slow Message Body Mode
```bash
docker run -it --rm shekyan/slowhttptest -c 1000 -B -g -o my_body_stats -i 110 -r 200 -s 8192 -t FAKEVERB -u <target_url> -x 10 -p 3
```

### Slowloris Mode
```bash
docker run -it --rm shekyan/slowhttptest -c 1000 -H -g -o my_header_stats -i 10 -r 200 -t GET -u <target_url> -x 24 -p 3
```

### Slow Read Mode
Example of usage in slow read mode with probing through proxy at x.x.x.x:8080 to have website availability from IP different than yours:

```bash
docker run -it --rm shekyan/slowhttptest -c 1000 -X -r 1000 -w 10 -y 20 -n 5 -z 32 -u <target_url> -p 5 -l 350 -e x.x.x.x:8080
```