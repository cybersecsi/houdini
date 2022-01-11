## Description

An advanced command-line tool designed to brute force directories and files in webservers, AKA web path scanner.

## Usage

```
docker run -it --rm secsi/dirsearch -u <target_url>
```

## Cheatsheet
```
Options:
  --version             show program's version number and exit
  -h, --help            show this help message and exit

  Mandatory:
    -u URL, --url=URL   Target URL
    -l FILE, --url-list=FILE
                        Target URL list file
    --stdin             Target URL list from STDIN
    --cidr=CIDR         Target CIDR
    --raw=FILE          Load raw HTTP request from file (use `--scheme` flag
                        to set the scheme)
    -e EXTENSIONS, --extensions=EXTENSIONS
                        Extension list separated by commas (Example: php,asp)
    -X EXTENSIONS, --exclude-extensions=EXTENSIONS
                        Exclude extension list separated by commas (Example:
                        asp,jsp)
    -f, --force-extensions
                        Add extensions to every wordlist entry. By default
                        dirsearch only replaces the %EXT% keyword with
                        extensions

  Dictionary Settings:
    -w WORDLIST, --wordlists=WORDLIST
                        Customize wordlists (separated by commas)
    --prefixes=PREFIXES
                        Add custom prefixes to all wordlist entries (separated
                        by commas)
    --suffixes=SUFFIXES
                        Add custom suffixes to all wordlist entries, ignore
                        directories (separated by commas)
    --only-selected     Remove paths have different extensions from selected
                        ones via `-e` (keep entries don't have extensions)
    --remove-extensions
                        Remove extensions in all paths (Example: admin.php ->
                        admin)
    -U, --uppercase     Uppercase wordlist
    -L, --lowercase     Lowercase wordlist
    -C, --capital       Capital wordlist

  General Settings:
    -t THREADS, --threads=THREADS
                        Number of threads
    -r, --recursive     Brute-force recursively
    --deep-recursive    Perform recursive scan on every directory depth
                        (Example: api/users -> api/)
    --force-recursive   Do recursive brute-force for every found path, not
                        only paths end with slash
    --recursion-depth=DEPTH
                        Maximum recursion depth
    --recursion-status=CODES
                        Valid status codes to perform recursive scan, support
                        ranges (separated by commas)
    --subdirs=SUBDIRS   Scan sub-directories of the given URL[s] (separated by
                        commas)
    --exclude-subdirs=SUBDIRS
                        Exclude the following subdirectories during recursive
                        scan (separated by commas)
    -i CODES, --include-status=CODES
                        Include status codes, separated by commas, support
                        ranges (Example: 200,300-399)
    -x CODES, --exclude-status=CODES
                        Exclude status codes, separated by commas, support
                        ranges (Example: 301,500-599)
    --exclude-sizes=SIZES
                        Exclude responses by sizes, separated by commas
                        (Example: 123B,4KB)
    --exclude-texts=TEXTS
                        Exclude responses by texts, separated by commas
                        (Example: 'Not found', 'Error')
    --exclude-regexps=REGEXPS
                        Exclude responses by regexps, separated by commas
                        (Example: 'Not foun[a-z]{1}', '^Error$')
    --exclude-redirects=REGEXPS
                        Exclude responses by redirect regexps or texts,
                        separated by commas (Example: 'https://okta.com/*')
    --exclude-content=PATH
                        Exclude responses by response content of this path
    --skip-on-status=CODES
                        Skip target whenever hit one of these status codes,
                        separated by commas, support ranges
    --minimal=LENGTH    Minimal response length
    --maximal=LENGTH    Maximal response length
    --max-time=SECONDS  Maximal runtime for the scan
    -q, --quiet-mode    Quiet mode
    --full-url          Full URLs in the output (enabled automatically in
                        quiet mode)
    --no-color          No colored output

  Request Settings:
    -m METHOD, --http-method=METHOD
                        HTTP method (default: GET)
    -d DATA, --data=DATA
                        HTTP request data
    -H HEADERS, --header=HEADERS
                        HTTP request header, support multiple flags (Example:
                        -H 'Referer: example.com')
    --header-list=FILE  File contains HTTP request headers
    -F, --follow-redirects
                        Follow HTTP redirects
    --random-agent      Choose a random User-Agent for each request
    --auth-type=TYPE    Authentication type (basic, digest, bearer, ntlm)
    --auth=CREDENTIAL   Authentication credential (user:password or bearer
                        token)
    --user-agent=USERAGENT
    --cookie=COOKIE

  Connection Settings:
    --timeout=TIMEOUT   Connection timeout
    -s DELAY, --delay=DELAY
                        Delay between requests
    --proxy=PROXY       Proxy URL, support HTTP and SOCKS proxies (Example:
                        localhost:8080, socks5://localhost:8088)
    --proxy-list=FILE   File contains proxy servers
    --replay-proxy=PROXY
                        Proxy to replay with found paths
    --scheme=SCHEME     Default scheme (for raw request or if there is no
                        scheme in the URL)
    --max-rate=RATE     Max requests per second
    --retries=RETRIES   Number of retries for failed requests
    -b, --request-by-hostname
                        By default dirsearch requests by IP for speed. This
                        will force dirsearch to request by hostname
    --ip=IP             Server IP address
    --exit-on-error     Exit whenever an error occurs

  Reports:
    -o FILE, --output=FILE
                        Output file
    --format=FORMAT     Report format (Available: simple, plain, json, xml,
                        md, csv, html)
```