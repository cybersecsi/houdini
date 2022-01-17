## Description

Finsploit is a simple bash script to quickly and easily search both local and online exploit databases.

## Usage
```
docker run -it --rm secsi/findsploit <search_term> 
```
## Cheatsheet
Here is the full usage of ``findsploit``:

```
Search for all exploits and modules using a single search term:
*  docker run -it --rm secsi/findsploit <search_term_1> (ie. findsploit apache)

Search multiple search terms:
*  docker run -it --rm secsi/findsploit <search_term_1> <search_term_2> <search_term_3> ...

Show all NMap scripts:
*  docker run -it --rm secsi/findsploit nmap 

Search for all FTP NMap scripts:
*  docker run -it --rm secsi/findsploit nmap | grep ftp

Show all Metasploit auxiliary modules:
*  docker run -it --rm secsi/findsploit auxiliary

Show all Metasploit exploits:
*  docker run -it --rm secsi/findsploit exploits

Show all Metasploit encoder modules:
*  docker run -it --rm secsi/findsploit encoder

Show all Metasploit payloads modules:
*  docker run -it --rm secsi/findsploit payloads

Search all Metasploit payloads for windows only payloads:
*  docker run -it --rm secsi/findsploit payloads | grep windows
```