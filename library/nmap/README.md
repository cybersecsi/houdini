## Description
**Nmap** (“Network Mapper”) is an open source tool for network exploration and security auditing. It was designed to rapidly scan large networks, although it works fine against single hosts. Nmap uses raw IP packets in novel ways to determine what hosts are available on the network, what services (application name and version) those hosts are offering, what operating systems (and OS versions) they are running, what type of packet filters/firewalls are in use, and dozens of other characteristics.

## Cheatsheet
### DNS Brute Force
```
docker run -it --rm --privileged secsi/nmap -p 80 --script dns-brute <target_ip_address>
```

### Find virtual hosts on an IP address 
```
docker run -it --rm --privileged secsi/nmap -p 80 --script hostmap-bfk <target_ip_address>
```

### Traceroute Geolocation
```
docker run -it --rm --privileged secsi/nmap -p 80 --traceroute --script traceroute-geolocation.nse <target_ip_address>
```

### HTTP Scripts

#### HTTP Enum - web path brute force

```
docker run -it --rm --privileged secsi/nmap -p 80 --script http-enum <target_ip_address>
```

#### HTTP Title
```
docker run -it --rm --privileged secsi/nmap -p 80 -sV --script http-title  <target_ip_address_range>
```