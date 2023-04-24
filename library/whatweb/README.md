## Description

**WhatWeb** identifies websites. It recognises web technologies including content management systems (CMS), blogging platforms, statistic/analytics packages, JavaScript libraries, web servers, and embedded devices.

WhatWeb has over 900 plugins, each to recognise something different. It also identifies version numbers, email addresses, account IDs, web framework modules, SQL errors, and more.

## Cheatsheet
### List plugins
```
docker run -it --rm secsi/whatweb -l
```

### Stealthy
```
docker run -it --rm secsi/whatweb <target_domain> a 1
```

### Aggressive
```
docker run -it --rm secsi/whatweb <target_domain> -a 3
```