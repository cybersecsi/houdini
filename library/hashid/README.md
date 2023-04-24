## Description
Identify the different types of hashes used to encrypt data and especially passwords.

This replaces [hash-identifier](http://code.google.com/p/hash-identifier/), which is outdated!

hashID is a tool written in Python 3 which supports the identification of over 220 unique hash types using regular expressions. A detailed list of supported hashes can be found [here](https://github.com/psypanda/hashID/blob/master/doc/HASHINFO.xlsx).

It is able to identify a single hash, parse a file or read multiple files in a directory and identify the hashes within them. hashID is also capable of including the corresponding [hashcat](https://hashcat.net/oclhashcat/) mode and/or [JohnTheRipper](http://www.openwall.com/john/) format in its output.

hashID works out of the box with Python 2 ≥ 2.7.x or Python 3 ≥ 3.3 on any platform.
