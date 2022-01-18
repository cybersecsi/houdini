## Description

Rip web accessible (distributed) version control systems: SVN, GIT, Mercurial/hg, bzr, ...

It can rip repositories even when directory browsing is turned off.

Make sure to position yourself in empty directory where you want repositories to be downloaded/cloned.

## Cheatsheat 
### rip-bzr.pl
```
docker run -it --rm secsi/dvcs-ripper rip-bzr -h
```

### rip-cvs.pl
```
docker run -it --rm secsi/dvcs-ripper rip-cvd -h
```

### rip-git.pl
```
docker run -it --rm secsi/dvcs-ripper rip-git -h
```

### rip-hg.pl
```
docker run -it --rm secsi/dvcs-ripper rip-hg -h
```

### rip-svn.pl
```
docker run -it --rm secsi/dvcs-ripper rip-svn -h
```
