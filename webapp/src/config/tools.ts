import { ITool } from 'types';

/*
A tool is composed by a few fields:
- fancy_name: the 'long' name of the tool (Can be anything)
- name: the name of the Docker Image
- organization: the organization it belongs to. This field is optional, when missing it is replaced with the default value
- official_doc: a link to the official documentation
*/

export const TOOLS: ITool[] = [
    {
        fancy_name: "Amass",
        name: "amass",
        official_doc: "https://github.com/OWASP/Amass",
        organization: "caffix",
        run_command: "docker run -it --rm -v <input_dir>:/.config/amass/ caffix/amass enum -share -d <target_url>",
    },
    {
        fancy_name: "Apktool",
        name: "apktool",
        official_doc: "https://github.com/iBotPeaches/Apktool",
        run_command: "docker run -it --rm -v <input_dir>:/input secsi/apktool d <apk_file>",
    },
    {
        fancy_name: "BFAC",
        name: "bfac",
        official_doc: "https://github.com/mazen160/bfac",
        run_command: "docker run -it --rm secsi/bfac --url <target_url>",
    },
    {
        fancy_name: "Dirb",
        name: "dirb",
        official_doc: "http://dirb.sourceforge.net/",
        run_command: "docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> secsi/dirb <target_url> <wordlist_container_dir>/<wordlist_file>",
    },
    {
        fancy_name: "dirhunt",
        name: "dirhunt",
        official_doc: "https://github.com/Nekmo/dirhunt",
        run_command: "docker run -it --rm secsi/dirhunt <target_url>",
    },
    {
        fancy_name: "dirsearch",
        name: "dirsearch",
        official_doc: "https://github.com/maurosoria/dirsearch",
        run_command: "docker run -it --rm secsi/dirsearch -u <target_url>",
    },
    {
        fancy_name: "dnscan",
        name: "dnscan",
        official_doc: "https://github.com/rbsec/dnscan",
        run_command: "docker run -it --rm secsi/dnscan -d <target_url> -w subdomains-10000.txt -t 10 -R 1.0.0.1",
    },
    {
        fancy_name: "EyeWitness",
        name: "eyewitness",
        official_doc: "https://github.com/FortyNorthSecurity/EyeWitness",
        run_command: "docker run --rm -it -v <input_dir>:/input secsi/eyewitness --web --single <target_url>",
    },
    {
        fancy_name: "ffuf",
        name: "ffuf",
        official_doc: "https://github.com/ffuf/ffuf",
        run_command: "docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> secsi/ffuf -w <wordlist_container_dir>/<wordlist_file> -u <target_url>",
    },
    {
        fancy_name: "fierce",
        name: "fierce",
        official_doc: "	https://github.com/mschwager/fierce",
        run_command: "docker run -it --rm secsi/fierce --domain <target_url>",
    },
    {
        fancy_name: "Findsploit",
        name: "findsploit",
        official_doc: "https://github.com/1N3/Findsploit",
        run_command: "docker run -it --rm secsi/findsploit <search_term>",
    },
    {
        fancy_name: "Gitrob",
        name: "gitrob",
        official_doc: "https://github.com/michenriksen/gitrob",
        run_command: "docker run -it --rm secsi/gitrob <target>",
    },
    {
        fancy_name: "GitTools",
        name: "gittools",
        official_doc: "https://github.com/internetwache/GitTool",
        run_command: "docker run -it --rm -v <input_dir>:/input -w /input secsi/gittools <command>",
    },
    {
        fancy_name: "gobuster",
        name: "gobuster",
        official_doc: "https://github.com/OJ/gobuster",
        run_command: "docker run -it --rm secsi/gobuster dns -d <target_url>",
    },
    {
        fancy_name: 'GoogD0rker',
        name: 'googd0rker',
        official_doc: 'https://github.com/ZephrFish/GoogD0rker',
        run_command: "docker run -it --rm secsi/googd0rker -d <target_domain>",
    },
    {
        fancy_name: "hydra",
        name: "hydra",
        official_doc: "https://github.com/vanhauser-thc/thc-hydra",
        run_command: "docker run -it --rm -v <wordlist_src_dir>:/usr/share/wordlists secsi/hydra <command>",
    },
    {
        fancy_name: 'impacket',
        name: 'impacket',
        official_doc: 'https://github.com/SecureAuthCorp/impacket',
        run_command: "docker run -it --rm secsi/impacket",
    },
    {
        fancy_name: "The JSON Web Token Toolkit",
        name: "jwt_tool",
        official_doc: "https://github.com/ticarpi/jwt_tool",
        run_command: "docker run -it --rm secsi/jwt_tool <JWT>",
    },
    {
        fancy_name: "knock",
        name: "knockpy",
        official_doc: "https://github.com/guelfoweb/knock",
        run_command: "docker run -it --rm secsi/knockpy <target_url>",
    },
    {
        fancy_name: "LFI Suite",
        name: "lfisuite",
        official_doc: "https://github.com/D35m0nd142/LFISuite",
        run_command: "docker run -it --rm -v <input_dir>:/input secsi/lfisuite",
    },
    {
        fancy_name: "MASSCAN",
        name: "masscan",
        official_doc: "https://github.com/robertdavidgraham/masscan",
        run_command: "docker run -it --rm secsi/masscan -p<target_port> <target_ip_address>",
    },
    {
        fancy_name: "MassDNS",
        name: "massdns",
        official_doc: "https://github.com/blechschmidt/massdns",
        run_command: "docker run -it --rm -v <domain_src_dir>:<domain_container_dir> secsi/massdns <domain_container_dir>/<domain_list_file>",
    },
    {
        fancy_name: "Metasploit",
        name: "metasploit-framework",
        official_doc: "https://github.com/rapid7/metasploit-framework/wiki",
        organization: "metasploitframework",
        run_command: "docker run -it --rm metasploitframework/metasploit-framework",
    },
    {
        fancy_name: "Mobile Security Framework",
        name: "mobile-security-framework-mobsf",
        official_doc: "https://mobsf.github.io/docs",
        organization: "opensecurity",
        run_command: "docker run -it --rm -p 8000:8000 opensecurity/mobile-security-framework-mobsf",
    },
    {
        fancy_name: "nikto",
        name: "nikto",
        official_doc: "https://github.com/sullo/nikto",
        run_command: "docker run -it --rm secsi/nikto -h <target_url>",
    },
    {
        fancy_name: "Nmap",
        name: "nmap",
        official_doc: "https://github.com/nmap/nmap",
        run_command: "docker run -it --rm --privileged secsi/nmap -p <target_port> <target_ip_address>",
    },
    {
        fancy_name: "Patator",
        name: "patator",
        official_doc: "https://github.com/lanjelot/patator",
        run_command: "docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> secsi/patator <wordlist_container_dir>/<wordlist_file>",
    },
    {
        fancy_name: "pureDNS",
        name: "puredns",
        official_doc: "https://github.com/d3mondev/puredns",
        run_command: "docker run -it --rm -v <input_dir>:/input secsi/puredns",
    },
    {
        fancy_name: "Race The Web",
        name: "race-the-web",
        official_doc: "https://github.com/TheHackerDev/race-the-web",
        run_command: "docker run -it --rm secsi/race-the-web",
    },
    {
        fancy_name: "Retire.js",
        name: "retire",
        official_doc: "https://github.com/RetireJS/retire.js",
        run_command: "docker run -it --rm secsi/retire",
    },
    {
        fancy_name: "Sandcastle",
        name: "sandcastle",
        official_doc: "https://github.com/0xSearches/sandcastle",
        run_command: "docker run -it --rm secsi/sandcastle",
    },
    {
        fancy_name: "Sn1per",
        name: "sn1per",
        official_doc: "https://github.com/1N3/Sn1per/",
        organization: "xer0dayz",
        run_command: "docker run -it --rm xer0dayz/sn1per /sniper/sniper -t <target_url>",
    },
    {
        fancy_name: "sqlmap",
        name: "sqlmap",
        official_doc: "https://github.com/sqlmapproject/sqlmap",
        run_command: "docker run -it --rm secsi/sqlmap -u \"<target_url>\"",
    },
    {
        fancy_name: "Sublist3r",
        name: "sublist3r",
        official_doc: "https://github.com/aboul3la/Sublist3r",
        run_command: "docker run -it --rm secsi/sublist3r -d <target_url>",
    },
    {
        fancy_name: "theHarvester",
        name: "theharvester",
        official_doc: "https://github.com/laramies/theHarvester",
        run_command: "docker run -it --rm secsi/theharvester -d <target_url> -b all",
    },
    {
        fancy_name: "waybackpy",
        name: "waybackpy",
        official_doc: "https://github.com/akamhy/waybackpy",
        run_command: "docker run -it --rm secsi/waybackpy --url \"<target_url>\" --user_agent \"my-unique-user-agent\" --oldest",
    },
    {
        fancy_name: "Wfuzz",
        name: "wfuzz",
        official_doc: "https://wfuzz.readthedocs.io/",
        organization: "ghcr.io/xmendez",
        run_command: "docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> ghcr.io/xmendez/wfuzz wfuzz",
    },
    {
        fancy_name: "WhatWeb",
        name: "whatweb",
        official_doc: "https://github.com/urbanadventurer/WhatWeb",
        run_command: "docker run -it --rm secsi/whatweb -v -a 3 <target_url>",
    },
    {
        fancy_name: "WPScan",
        name: "wpscan",
        official_doc: "https://github.com/wpscanteam/wpscan",
        organization: "wpscanteam",
        run_command: "docker run -it --rm wpscanteam/wpscan --url <target_url>",
    },
    {
        fancy_name: "ysoserial",
        name: "ysoserial",
        official_doc: "https://github.com/frohoff/ysoserial",
        organization: "frohoff",
        run_command: "docker run -it --rm frohoff/ysoserial CommonsCollections1 <payload> '<command>'",
    },
    {
        fancy_name: "Altdns",
        name: "altdns",
        official_doc: "https://github.com/infosec-au/altdns",
        organization: "secsi",
        run_command: "docker run -it --rm -v <wordlist_src_dir>:/wordlists -v <output_dir>:/output secsi/altdns -i /wordlists/<subdomain_file> -o data_output -w /wordlists/<wordlist_file> -r -s /output/outfile"
    },
    {
        fancy_name: "Datasploit",
        name: "datasploit",
        official_doc: "https://github.com/DataSploit/datasploit",
        organization: "secsi",
        run_command: "docker run -it --rm -v <config_file>:/datasploit/config.py secsi/datasploit -i <target_domain>"
    },
    {
        fancy_name: "dvcs-ripper",
        name: "dvcs-ripper",
        official_doc: "https://github.com/kost/dvcs-ripper",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/dvcs-ripper"
    },
    {
        fancy_name: "Dorks Eye",
        name: "dorks-eye",
        official_doc: "https://github.com/BullsEye0/dorks-eye",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/dorks-eye <command>"
    },
    {
        fancy_name: "OpenVAS",
        name: "openvas",
        official_doc: "https://github.com/greenbone/openvas-scanner",
        organization: "mikesplain",
        run_command: "docker run -it --rm -p 443:443 --name openvas mikesplain/openvas"
    },
    {
        fancy_name: "testssl.sh",
        name: "testssl.sh",
        official_doc: "https://github.com/drwetter/testssl.sh",
        organization: "drwetter",
        run_command: "docker run -it --rm drwetter/testssl.sh <target_domain>"
    },
    {
        fancy_name: "Findomain",
        name: "findomain",
        official_doc: "https://github.com/Findomain/Findomain",
        organization: "edu4rdshl",
        run_command: "docker run --rm -it -v $(pwd):/opt/findomain findomain -c config.toml -t example.com"
    },
    {
        fancy_name: "Arachni",
        name: "arachni",
        official_doc: "https://github.com/Arachni/arachni",
        organization: "arachni",
        run_command: "docker run -d --net host --name arachni -p 222:22 -p 7331:7331 -p 9292:9292 arachni/arachni:latest"
    },
    {
        fancy_name: "Subfinder",
        name: "subfinder",
        official_doc: "https://github.com/projectdiscovery/subfinder",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/subfinder -d <target_domain>"
    },
    {
        fancy_name: "Subjack",
        name: "subjack",
        official_doc: "https://github.com/haccer/subjack",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/subjack"
    },
    {
        fancy_name: "Hakrawler",
        name: "hakrawler",
        official_doc: "https://github.com/hakluke/hakrawler",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/hakrawler <target_domain>"
    },
    {
        fancy_name: "Photon",
        name: "photon",
        official_doc: "https://github.com/s0md3v/Photon",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/photon"
    },
    {
        fancy_name: "GoSpider",
        name: "gospider",
        official_doc: "https://github.com/jaeles-project/gospider",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/gospider"
    },
    {
        fancy_name: "Arjun",
        name: "arjun",
        official_doc: "https://github.com/s0md3v/Arjun",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/arjun"
    },
    {
        fancy_name: "SimplyEmail",
        name: "simplyemail",
        official_doc: "https://simplysecurity.github.io/SimplyEmail/",
        organization: "simplysecurity",
        run_command: "docker run -it --rm simplysecurity/simplyemail -all -e <target_domain>"
    },
    {
        fancy_name: "JoomScan",
        name: "joomscan",
        official_doc: "https://github.com/OWASP/joomscan",
        organization: "secsi",
        run_command: "docker run -it --rm -v <local_dir>:/joomscan/reports secsi/joomscan -u <target_url>"
    },
    {
        fancy_name: "CMSeeK",
        name: "cmseek",
        official_doc: "https://github.com/Tuhinshubhra/CMSeeK",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/cmseek -u <target_url>"
    },
    {
        fancy_name: "dex2jar",
        name: "dex2jar",
        official_doc: "https://github.com/pxb1988/dex2jar",
        organization: "secsi",
        run_command: "docker run -it --rm -v <local_dir>:<container_dir> secsi/dex2jar -f <container_dir>/<apk_to_decompile>.apk -o <container_dir>/output.jar"
    },
    {
        fancy_name: "Ground control",
        name: "ground-control",
        official_doc: "https://github.com/jobertabma/ground-control",
        organization: "secsi",
        run_command: "docker run -it --rm -p 80:80 -p 443:443 -p 8080:8080 -p 8443:8443 secsi/ground-control"
    },
    {
        fancy_name: "oxml_xxe",
        name: "oxml_xxe",
        official_doc: "https://github.com/BuffaloWill/oxml_xxe",
        organization: "secsi",
        run_command: "docker run -it --rm -p 4567:4567 secsi/oxml_xxe"
    },
    {
        fancy_name: "psalm",
        name: "psalm",
        official_doc: "https://github.com/vimeo/psalm",
        organization: "secsi",
        run_command: "docker run -it --rm -v <local_dir>:/src secsi/psalm --root=/src"
    },
    {
        fancy_name: "XXEinjector",
        name: "xxeinjector",
        official_doc: "https://github.com/enjoiz/XXEinjector",
        organization: "secsi",
        run_command: "docker run -it --rm -v <local_dir>:/xxeinjector secsi/xxeinjector --host=<target_ip> --path=/etc --file=<filename> --ssl"
    },
    {
        fancy_name: "WAFW00F",
        name: "wafw00f",
        official_doc: "https://github.com/EnableSecurity/wafw00f",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/wafw00f"
    },
    {
        fancy_name: "SpiderFoot",
        name: "spiderfoot",
        official_doc: "https://github.com/smicallef/spiderfoot",
        organization: "ctdc",
        run_command: "docker run -it --rm -p 5009:5001 ctdc/spiderfoot"
    },
    {
        fancy_name: "gowitness",
        name: "gowitness",
        official_doc: "https://github.com/sensepost/gowitness",
        organization: "leonjza",
        run_command: "docker run -it --rm -v $(pwd):/data leonjza/gowitness gowitness"
    },
    {
        fancy_name: "httprobe",
        name: "httprobe",
        official_doc: "https://github.com/tomnomnom/httprobe",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/httprobe"
    },
    {
        fancy_name: "Striker",
        name: "striker",
        official_doc: "https://github.com/s0md3v/Striker",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/striker <target_domain>"
    },
    {
        fancy_name: "hakrevdns",
        name: "hakrevdns",
        official_doc: "https://github.com/hakluke/hakrevdns",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/hakrevdns"
    },
    {
        fancy_name: "spyse.py",
        name: "spysepy",
        official_doc: "https://github.com/zeropwn/spyse.py",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/spysepy"
    },
    {
        fancy_name: "HTTrack",
        name: "httrack",
        official_doc: "https://github.com/xroche/httrack",
        organization: "ralfbs",
        run_command: "docker run -it --rm -v <local_dir>:/app -e HTTRACK_URI=<target_url> ralfbs/httrack"
    },
    {
        fancy_name: "mitmproxy",
        name: "mitmproxy",
        official_doc: "https://github.com/mitmproxy/mitmproxy",
        organization: "mitmproxy",
        run_command: "docker run --rm -it -p 8080:8080 mitmproxy/mitmproxy"
    },
    {
        fancy_name: "Faraday",
        name: "faraday",
        official_doc: "https://github.com/infobyte/faraday",
        organization: "faradaysec",
        run_command: "docker run -it --rm -v /path/to/my_doc_folder:/faraday-license -v /path/to/my_storage_folder:/faraday-storage -v /path/to/my_config_folder:/faraday-config faradaysec/faraday"
    },
    {
        fancy_name: "Wapiti",
        name: "wapiti",
        official_doc: "https://github.com/wapiti-scanner/wapiti",
        organization: "jorgeandrada",
        run_command: "docker run --rm -it jorgeandrada/wapiti \"<target_url>\""
    },
    {
        fancy_name: "dnstwist",
        name: "dnstwist",
        official_doc: "https://github.com/elceef/dnstwist",
        organization: "elceef",
        run_command: "docker run -it elceef/dnstwist"
    },
    {
        fancy_name: "celerystalk",
        name: "celerystalk",
        official_doc: "https://github.com/sethsec/celerystalk",
        organization: "sethsec",
        run_command: "docker run -p 27007:27007 -ti sethsec/celerystalk"
    },
    {
        fancy_name: "GetJS",
        name: "getjs",
        official_doc: "https://github.com/003random/getJS",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/getjs <command>"
    },
    {
        fancy_name: "LinkFinder",
        name: "linkfinder",
        official_doc: "https://github.com/GerbenJavado/LinkFinder",
        organization: "secsi",
        run_command: "docker run -it --rm -v <output_dir>:/linkfinder/output secsi/linkfinder -i <target_url> -o /linkfinder/output/output.html"
    },
    {
        fancy_name: "crowbar",
        name: "crowbar",
        official_doc: "https://github.com/galkan/crowbar",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/crowbar"
    },
    {
        fancy_name: "hashID",
        name: "hashid",
        official_doc: "https://github.com/psypanda/hashID",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/hashid"
    },
    {
        fancy_name: "routersploit",
        name: "routersploit",
        official_doc: "https://github.com/threat9/routersploit",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/routersploit"
    },
    {
        fancy_name: "PivotSuite",
        name: "pivotsuite",
        official_doc: "https://github.com/RedTeamOperations/PivotSuite",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/pivotsuite [options] <target_ip> <target_port>"
    },
    {
        fancy_name: "scanless",
        name: "scanless",
        official_doc: "https://github.com/vesche/scanless",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/scanless"
    },
    {
        fancy_name: "fast-recon",
        name: "fast-recon",
        official_doc: "https://github.com/DanMcInerney/fast-recon",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/fast-recon -d \"<target_domain>\""
    },
    {
        fancy_name: "CloudFail",
        name: "cloudfail",
        official_doc: "https://github.com/m0rtem/CloudFail",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/cloudfail"
    },
    {
        fancy_name: "Memcrashed DDOS Exploit Tool",
        name: "memcrashed-ddos-exploit",
        official_doc: "https://github.com/649/Memcrashed-DDoS-Exploit",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/memcrashed-ddos-exploit"
    },
    {
        fancy_name: "pagodo",
        name: "pagodo",
        official_doc: "https://github.com/opsdisk/pagodo",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/pagodo"
    },
    {
        fancy_name: "Xray",
        name: "xray",
        official_doc: "https://github.com/evilsocket/xray",
        organization: "secsi",
        run_command: "docker run -it --rm secsi/xray"
    },
    {
        fancy_name: "Aquatone",
        name: "aquatone",
        official_doc: "https://github.com/michenriksen/aquatone",
        organization: "hypnza",
        run_command: "docker run --rm hypnza/aquatone <command>"
    },
    {
        fancy_name: "BeEF",
        name: "beef",
        official_doc: "https://github.com/beefproject/beef",
        organization: "beefproject",
        run_command: "docker run -p 3000:3000 -p 6789:6789 -p 61985:61985 -p 61986:61986 --name beef beef"
    },
    {
        fancy_name: "CeWL",
        name: "cewl",
        official_doc: "https://github.com/digininja/CeWL",
        organization: "nocflame",
        run_command: "docker run -it --rm cewl <target_url>"
    },
    {
        fancy_name: "CVE-Search",
        name: "cve-search",
        official_doc: "https://github.com/cve-search/cve-search",
        organization: "ttimasdf",
        run_command: "docker run -d -p 5000:5000 --name cve ttimasdf/cve-search:withdb"
    },
    {
        fancy_name: "Decker",
        name: "decker",
        official_doc: "https://github.com/stevenaldinger/decker",
        organization: "stevenaldinger",
        run_command: "docker run -it --rm -v \"$(pwd)/decker-reports/\":/tmp/reports/ -v \"$(pwd)/examples/\":/decker-config/ -e DECKER_TARGET_HOST=<target_domain> stevenaldinger/decker:kali decker ./decker-config/example.hcl"
    },
    {
        fancy_name: "dnsenum",
        name: "dnsenum",
        official_doc: "https://github.com/fwaeytens/dnsenum/",
        organization: "guidelacour",
        run_command: "docker run -it --rm guidelacour/dnsenum ./dnsenum.pl <target_domain> --file dns.txt"
    },
    {
        fancy_name: "qark",
        name: "qark",
        official_doc: "https://github.com/linkedin/qark",
        organization: "ledokun",
        run_command: "docker run -it --rm -v /path/to/apk:/path/to/apk ledokun/qark --filepath /path/to/apk/sample.apk --timeout 3600"
    },
    {
        fancy_name: "rshijack",
        name: "rshijack",
        official_doc: "https://github.com/kpcyrd/rshijack",
        organization: "kpcyrd",
        run_command: "docker run -it --init --rm --net=host kpcyrd/rshijack eth0 172.16.13.20:37386 172.16.13.19:23"
    },
    {
        fancy_name: "RustScan",
        name: "rustscan",
        official_doc: "https://github.com/RustScan/RustScan",
        organization: "rustscan",
        run_command: "docker run -it --rm --name rustscan rustscan/rustscan:2.0 <rustscan arguments here> <target_ip>"
    },
    {
        fancy_name: "SearchSploit",
        name: "searchsploit",
        official_doc: "https://github.com/rc042/searchsploit",
        organization: "reedcrif",
        run_command: "docker run --rm reedcrif/searchsploit [options]"
    },
    {
        fancy_name: "SonarScanner CLI",
        name: "sonar-scanner-cli",
        official_doc: "https://github.com/SonarSource/sonar-scanner-cli-docker",
        organization: "sonarsource",
        run_command: "docker run --rm -e SONAR_HOST_URL=\"http://{SONARQUBE_URL}\" -e SONAR_LOGIN=\"myAuthenticationToken\" -v \"<YOUR_REPO>:/usr/src\" sonarsource/sonar-scanner-cli"
    },
    {
        fancy_name: "OWASP ZAP",
        name: "zap2docker-stable",
        official_doc: "https://www.zaproxy.org/docs/docker/about/",
        organization: "owasp",
        run_command: "docker run -u zap -p 8080:8080 -i owasp/zap2docker-stable zap.sh -daemon -host 0.0.0.0 -port 8080 -config api.addrs.addr.name=.* -config api.addrs.addr.regex=true -config api.key=<api-key>"
    },
    {
        fancy_name: "ZMap",
        name: "zmap",
        official_doc: "https://zmap.io/",
        organization: "ilyaglow",
        run_command: "docker run -it --rm --net=host ilyaglow/zmap -p80 8.8.8.0/24"
    },
    {
        fancy_name: "Wappalyzer",
        name: "cli",
        official_doc: "https://github.com/AliasIO/wappalyzer",
        organization: "wappalyzer",
        run_command: "docker run -it --rm wappalyzer/cli <target_url> [options]"
    },
]