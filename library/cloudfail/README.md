## Description
CloudFail is a tactical reconnaissance tool which aims to gather enough information about a target protected by Cloudflare in the hopes of discovering the location of the server. Using Tor to mask all requests, the tool as of right now has 3 different attack phases.
- Misconfigured DNS scan using DNSDumpster.com.
- Scan the Crimeflare.com database.
- Bruteforce scan over 2500 subdomains.