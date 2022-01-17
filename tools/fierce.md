## Description

**Fierce** is a semi-lightweight scanner that helps locate non-contiguous IP space and hostnames against specified domains. It’s really meant as a pre-cursor to nmap, unicornscan, nessus, nikto, etc, since all of those require that you already know what IP space you are looking for. This does not perform exploitation and does not scan the whole internet indiscriminately. It is meant specifically to locate likely targets both inside and outside a corporate network.

Because it uses DNS primarily you will often find mis-configured networks that leak internal address space. That’s especially useful in targeted malware. Originally written by RSnake along with others at http://ha.ckers.org/. This is simply a conversion to Python 3 to simplify and modernize the codebase.

## Cheatsheet

Traverse IPs near discovered domains to search for contiguous blocks with the
`--traverse` flag:

```
docker run -it --rm secsi/fierce --domain facebook.com --subdomains admin --traverse 10
```

Limit nearby IP traversal to certain domains with the `--search` flag:

```
docker run -it --rm secsi/fierce --domain facebook.com --subdomains admin --search fb.com fb.net
```

Attempt an `HTTP` connection on domains discovered with the `--connect` flag:

```
docker run -it --rm secsi/fierce --domain stackoverflow.com --subdomains mail --connect
```

Exchange speed for breadth with the `--wide` flag, which looks for nearby
domains on all IPs of the [/24](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#IPv4_CIDR_blocks)
of a discovered domain:

```
docker run -it --rm secsi/fierce --domain facebook.com --wide
```

Zone transfers are rare these days, but they give us the keys to the DNS castle.
[zonetransfer.me](https://digi.ninja/projects/zonetransferme.php) is a very
useful service for testing for and learning about zone transfers:

```
docker run -it --rm secsi/fierce --domain zonetransfer.me
```

To save the results to a file for later use we can simply redirect output:

```
docker run -it --rm secsi/fierce --domain zonetransfer.me > output.txt
```

Internal networks will often have large blocks of contiguous IP space assigned.
We can scan those as well:

```
docker run -it --rm secsi/fierce --dns-servers 10.0.0.1 --range 10.0.0.0/24
```

Check out `--help` for further information:

```
docker run -it --rm secsi/fierce --help
```