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
        run_command: "docker run -it --rm -v <src_dir>:/.config/amass/ caffix/amass enum -share -d <target_url>",
    },
    {
        fancy_name: "Apktool",
        name: "apktool",
        official_doc: "https://github.com/iBotPeaches/Apktool",
        run_command: "docker run -it --rm -v <src_dir>:<container_dir> secsi/apktool d <apk_file>",
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
        run_command: "docker run --rm -it -v <src_dir>:<container_dir> secsi/eyewitness --web --single <target_url>",
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
        run_command: "docker run -it --rm -v <src_dir>:<container_dir> -w <container_dir> secsi/gittools <command>",
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
        run_command: "docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> secsi/hydra <command>",
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
        run_command: "docker run -it --rm -v <src_dir>:<container_dir> secsi/lfisuite",
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
        run_command: "docker run -it --rm -v <src_dir>:<container_dir> secsi/puredns",
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
]