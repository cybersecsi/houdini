## Description

CryptoLyzer is a fast, flexible, and comprehensive server cryptographic protocol ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security), [SSL](https://en.wikipedia.org/wiki/Transport_Layer_Security#SSL_1.0,_2.0,_and_3.0), [SSH](https://en.wikipedia.org/wiki/Secure_Shell), [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions)) and related setting ([HTTP headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), [DNS records](https://en.wikipedia.org/wiki/List_of_DNS_record_types)) analyzer and fingerprint ([JA3](https://engineering.salesforce.com/tls-fingerprinting-with-ja3-and-ja3s-247362855967), [HASSH](https://engineering.salesforce.com/open-sourcing-hassh-abed3ae5044c/) tag) generator with [application programming](https://en.wikipedia.org/wiki/API) (API) and [command line](https://en.wikipedia.org/wiki/Command-line_interface) (CLI) interface.

### Key Features

* TLS/SSL
  * checks 10+ application layer protocols with [opportunistic TLS](https://en.wikipedia.org/wiki/Opportunistic_TLS)
    capability ([FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol),
    [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol),
    [LDAP](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol),
    [LMTP](https://en.wikipedia.org/wiki/Local_Mail_Transfer_Protocol),
    [MySQL](https://en.wikipedia.org/wiki/MySQL),
    [NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol),
    [OpenVPN](https://en.wikipedia.org/wiki/OpenVPN),
    [POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol),
    [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL),
    [RDP](https://en.wikipedia.org/wiki/Remote_Desktop_Protocol),
    [Sieve](https://en.wikipedia.org/wiki/Sieve_(mail_filtering_language)),
    [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol),
    [XMPP/Jabber](https://en.wikipedia.org/wiki/XMPP))
  * checks 400+ cipher suites, more than discussed on [ciphersuite.info](<https://ciphersuite.info>), or supported by
    the most popular cryptographic libraries
  * checks [GOST](https://en.wikipedia.org/wiki/GOST) (national standards of the Russian Federation and CIS countries)
    cipher suites
  * checks [post-quantum](https://en.wikipedia.org/wiki/Post-quantum_cryptography) elliptic curves
    ([Kyber](https://en.wikipedia.org/wiki/Kyber))
  * validates server certificate(s) against notable trusted root CA certificates stores
  * checks revocation ([CRL](https://www.rfc-editor.org/info/rfc5280),
    ([OCSP/OCSP stapling)](https://www.rfc-editor.org/info/rfc6960)), extensions
    [OCSP must staple](https://www.rfc-editor.org/info/rfc7633),
    [extended validation](https://en.wikipedia.org/wiki/Extended_Validation_Certificate)), and 
    [certificate transparency (CT)](https://www.rfc-editor.org/info/rfc6962)
  * checks TLS 1.3 draft versions, not just final version
  * generates and decodes
    [JA3 tag](https://engineering.salesforce.com/tls-fingerprinting-with-ja3-and-ja3s-247362855967)
* SSH
  * checks supported Diffie-Hellman (group exchange) key sizes
  * checks supported host certificates, X.509 certificates and chains
  * analyzes server protocol version string to identify application server vendor and version
  * generates [HASSH tag](https://engineering.salesforce.com/open-sourcing-hassh-abed3ae5044c/)
* DNS
  * extract (public key) and analyze (key type, size) DNSSEC signing keys
  * parses e-mail authentication, reporting related records
* HTTP(S)
  * parses security headers
  * parses caching headers
  * parses generic headers
* checks Diffie-Hellman parameters
  * public parameter is a [safe prime](https://en.wikipedia.org/wiki/Safe_and_Sophie_Germain_primes)
  * public parameter is defined in an RFC (e.g., FFDHE, MODP) or used by an application server as a builtin parameter
  * key is [reused](https://security.stackexchange.com/questions/225209/what-is-ecdh-public-server-param-reuse)

## Cheatsheat 

### Help

```
    $ docker run --rm -ti coroner/cryptolyzer --help
```

### Server Analysis

#### Partial Check

```
    $ docker run --rm -ti coroner/cryptolyzer tls1_2 dhparams example.com
    $ docker run --rm -ti coroner/cryptolyzer tls1_3 dhparams example.com
```

#### All-in-one Check

```
    $ docker run --rm -ti coroner/cryptolyzer tls all example.com
    $ docker run --rm -ti coroner/cryptolyzer ssh all github.com
```

### Domain Analysis

```
    $ docker run --rm -ti coroner/cryptolyzer dns dnssec example.com
    $ docker run --rm -ti coroner/cryptolyzer dns mail example.com
```

### Client Analysis

#### Tag generation

```
    $ podman run -ti --rm -p 127.0.0.1:4433:4433 coroner/cryptolyzer ja3 generate 0.0.0.0:4433
    $ podman run -ti --rm -p 127.0.0.1:2222:2222 coroner/cryptolyzer hassh generate 0.0.0.0:2222
```
