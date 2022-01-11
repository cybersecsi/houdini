## Description
The **OWASP Amass Project** is a tool to help information security professionals perform network mapping of attack surfaces and perform external asset discovery using open source information gathering and active reconnaissance techniques.

**Information Gathering Techniques Used:**

| Technique    | Data Sources |
|:-------------|:-------------|
| DNS          | Brute forcing, Reverse DNS sweeping, NSEC zone walking, Zone transfers, FQDN alterations/permutations, FQDN Similarity-based Guessing |
| Scraping     | AbuseIPDB, Ask, AskDNS, Baidu, Bing, DNSDumpster, DuckDuckGo, Gists, HackerOne, HyperStat, IPv4Info, PKey, RapidDNS, Riddler, Searchcode, Searx, SiteDossier, SpyOnWeb, Yahoo |
| Certificates | Active pulls (optional), Censys, CertSpotter, Crtsh, Digitorus, FacebookCT, GoogleCT |
| APIs         | 360PassiveDNS, ARIN, Ahrefs, AlienVault, AnubisDB, BinaryEdge, BGPView, BufferOver, BuiltWith, C99, Chaos, CIRCL, Cloudflare, CommonCrawl, DNSDB, DNSlytics, Detectify, FOFA, FullHunt, GitHub, GitLab, Greynoise, HackerTarget, Hunter, IntelX, IPdata, IPinfo, Maltiverse, Mnemonic, N45HT, NetworksDB, ONYPHE, PassiveTotal, PentestTools, Quake, RADb, ReconDev, Robtex, SecurityTrails, ShadowServer, Shodan, SonarSearch, Spamhaus, Spyse, Sublist3rAPI, TeamCymru, ThreatBook, ThreatCrowd, ThreatMiner, Twitter, Umbrella, URLScan, VirusTotal, WhoisXMLAPI, ZETAlytics, ZoomEye |
| Web Archives | ArchiveIt, Arquivo, HAW, UKWebArchive, Wayback |

## Usage
```
docker run -it --rm -v <src_dir>:/.config/amass/ caffix/amass enum -share -d <target_url>
```
