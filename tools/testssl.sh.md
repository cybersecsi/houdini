## Description

**testssl.sh** is a free command line tool which checks a server's service on any port for the support of TLS/SSL ciphers, protocols as well as some cryptographic flaws.

### Key features

* Clear output: you can tell easily whether anything is good or bad.
* Machine readable output (CSV, two JSON formats)
* No need to install or to configure something.  No gems, CPAN, pip or the like.
* Works out of the box: Linux, OSX/Darwin, FreeBSD, NetBSD, MSYS2/Cygwin, WSL (bash on Windows). Only OpenBSD needs bash.
* A Dockerfile is provided, there's also an official container build @ dockerhub.
* Flexibility: You can test any SSL/TLS enabled and STARTTLS service, not only web servers at port 443.
* Toolbox: Several command line options help you to run *your* test and configure *your* output.
* Reliability: features are tested thoroughly.
* Privacy: It's only you who sees the result, not a third party.
* Freedom: It's 100% open source. You can look at the code, see what's going on.
* The development is open (GitHub) and participation is welcome.
