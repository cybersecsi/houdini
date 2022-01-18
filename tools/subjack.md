## Description

Subjack is a Subdomain Takeover tool written in Go designed to scan a list of subdomains concurrently and identify ones that are able to be hijacked. With Go's speed and efficiency, this tool really stands out when it comes to mass-testing. Always double check the results manually to rule out false positives.

Subjack will also check for subdomains attached to domains that don't exist (NXDOMAIN) and are available to be registered. No need for dig ever again! This is still cross-compatible too.