## Description

**MassDNS** is a simple high-performance DNS stub resolver targeting those who seek to resolve a massive amount of domain names in the order of millions or even billions. Without special configuration, MassDNS is capable of resolving over 350,000 names per second using publicly available resolvers.

## Usage
```
docker run -it --rm -v <domain_src_dir>:<domain_container_dir> secsi/massdns <domain_container_dir>/<domain_list_file>
```