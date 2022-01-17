## Description
**Patator** is a multi-purpose brute-forcer, with a modular design and a flexible usage.

Currently it supports the following modules:
* `ftp_login` : Brute-force FTP
* `ssh_login` : Brute-force SSH
* `telnet_login` : Brute-force Telnet
* `smtp_login` : Brute-force SMTP
* `smtp_vrfy` : Enumerate valid users using SMTP VRFY
* `smtp_rcpt` : Enumerate valid users using SMTP RCPT TO
* `finger_lookup` : Enumerate valid users using Finger
* `http_fuzz` : Brute-force HTTP
* `ajp_fuzz` : Brute-force AJP
* `pop_login` : Brute-force POP3
* `pop_passd` : Brute-force poppassd (http://netwinsite.com/poppassd/)
* `imap_login` : Brute-force IMAP4
* `ldap_login` : Brute-force LDAP
* `dcom_login` : Brute-force DCOM
* `smb_login` : Brute-force SMB
* `smb_lookupsid` : Brute-force SMB SID-lookup
* `rlogin_login` : Brute-force rlogin
* `vmauthd_login` : Brute-force VMware Authentication Daemon
* `mssql_login` : Brute-force MSSQL
* `mysql_login` : Brute-force MySQL
* `mysql_query` : Brute-force MySQL queries
* `rdp_login` : Brute-force RDP (NLA)
* `pgsql_login` : Brute-force PostgreSQL
* `vnc_login` : Brute-force VNC
* `dns_forward` : Forward DNS lookup
* `dns_reverse` : Reverse DNS lookup
* `snmp_login` : Brute-force SNMP v1/2/3
* `ike_enum` : Enumerate IKE transforms
* `unzip_pass` : Brute-force the password of encrypted ZIP files
* `keystore_pass` : Brute-force the password of Java keystore files
* `umbraco_crack` : Crack Umbraco HMAC-SHA1 password hashes
* `tcp_fuzz` : Fuzz TCP services
* `dummy_test` : Testing module

## Usage
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> secsi/patator <wordlist_container_dir>/<wordlist_file>
```
