## Description

**LFI Suite** is a totally <b>automatic</b> tool able to scan and exploit Local File Inclusion vulnerabilities using many different methods of attack, listed below:

* Works with Windows, Linux and OS X
* Automatic Configuration 
* Automatic Update
* Provides 8 different Local File Inclusion attack modalities:
  - /proc/self/environ
  - php://filter
  - php://input
  - /proc/self/fd
  - access log
  - phpinfo
  - data://
  - expect://

## Usage
```
docker run -it --rm -v <src_dir>:<container_dir> secsi/lfisuite
```