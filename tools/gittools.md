## Description
### Finder
You can use this tool to find websites with their .git repository available to the public

### Dumper
This tool can be used to download as much as possible from the found .git repository from webservers which do not have directory listing enabled.

### Extractor
A small bash script to extract commits and their content from a broken repository.

This script tries to recover incomplete git repositories:

Iterate through all commit-objects of a repository
Try to restore the contents of the commit
Commits are not sorted by date

## Cheatsheet

Finder
```
docker run -it --rm -v <src_dir>:<container_dir> -w <container_dir> secsi/gittools <command> gitfinder -i inputfile.txt -o outputfile.txt
```

Dumper
```
docker run -it --rm -v <src_dir>:<container_dir> -w <container_dir> secsi/gittools gitdumper <target_url>/.git/ .
```

Extractor
```
docker run -it --rm -v <src_dir>:<container_dir> -w <container_dir> secsi/gittools extractor mygitrepo mygitrepodump
```
