## Description

Nuclei is used to send requests across targets based on a template leading to zero false positives and providing fast scanning on large number of hosts. Nuclei offers scanning for a variety of protocols including TCP, DNS, HTTP, File, etc. With powerful and flexible templating, all kinds of security checks can be modelled with Nuclei.

## Cheatsheat 
Thanks to [Offensive Security Cheatsheet](https://cheatsheet.haax.fr/web-pentest/tools/nuclei/) for the initial commands this cheatsheet is based on.

### Templates
```
docker run -it --rm -v <input_dir>:/input projectdiscovery/nuclei -t exposures/configs/git-config.yaml -l /input/urls.txt
```

```
docker run -it --rm -v <input_dir>:/input projectdiscovery/nuclei -t cves/2022/ -l /input/urls.txt
```

```
docker run -it --rm -v <input_dir>:/input projectdiscovery/nuclei -t cves/2020/ -t exposed-tokens -t misconfiguration -l /input/urls.txt
```

### Tags
```
docker run -it --rm -v <input_dir>:/input projectdiscovery/nuclei -tags cve -u /input/urls.txt
```

```
docker run -it --rm -v <input_dir>:/input projectdiscovery/nuclei -tags config -t exposures/ -u /input/urls.txt
```

```
docker run -it --rm -v <input_dir>:/input projectdiscovery/nuclei -tags lfi,ssrf,rce -t cves/ -l /input/urls.txt
```

### Workflows
```
docker run -it --rm -v <input_dir>:/input projectdiscovery/nuclei -w workflows/wordpress-workflow.yaml -l /input/wordpress_urls.txt
```

```
docker run -it --rm -v <input_dir>:/input projectdiscovery/nuclei -w workflows/wordpress-workflow.yaml -w workflows/jira-workflow.yaml -l /input/urls.txt
```

### Severity
```
docker run -it --rm -v <input_dir>:/input projectdiscovery/nuclei -t cves/ -severity critical -l /input/urls.txt
```

```
docker run -it --rm -v <input_dir>:/input projectdiscovery/nuclei -t cves/ -t vulnerabilities -severity critical,high -l /input/urls.txt
```