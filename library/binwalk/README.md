## Description

Binwalk is a fast, easy to use tool for analyzing, reverse engineering, and extracting firmware images.

## Cheatsheat 
### Scanning Firmware

The primary - and by far the most popular - feature of binwalk is its signature scanning. 

Binwalk can scan a firmware image for many different embedded file types and file systems; just give it a list of files to scan:

```bash
docker run -it --rm -v <input_dir>/input refirmlabs/binwalk /input/firmware.bin
```

#### Output
```bash
DECIMAL   	HEX       	DESCRIPTION
-------------------------------------------------------------------------------------------------------------------
0         	0x0       	DLOB firmware header, boot partition: "dev=/dev/mtdblock/2"
112       	0x70      	LZMA compressed data, properties: 0x5D, dictionary size: 33554432 bytes, uncompressed size: 3797616 bytes
1310832   	0x140070  	PackImg section delimiter tag, little endian size: 13644032 bytes; big endian size: 3264512 bytes
1310864   	0x140090  	Squashfs filesystem, little endian, version 4.0, compression:lzma, size: 3264162 bytes,  1866 inodes, blocksize: 65536 bytes, created: Tue Apr  3 04:12:22 2012
```

### File Extraction

You can tell binwalk to extract any files that it finds in the firmware image with the `-e` option:

```bash
docker run -it --rm -v <input_dir>/input refirmlabs/binwalk -e /input/firmware.bin
```

Binwalk will even recursively scan files as it extracts them if you also specify the `-M` option:

```bash
docker run -it --rm -v <input_dir>/input refirmlabs/binwalk -Me /input/firmware.bin
```

And if the `-r` option is specified, any file signatures that couldn't be extracted - or that resulted in 0-size files - will be automatically deleted:

```bash
$ binwalk -Mre firmware.bin
```

To extract one specific signature type, specify one or more [[-D type|Usage#-d---ddtypeextcmd]] options:

```bash
docker run -it --rm -v <input_dir>/input refirmlabs/binwalk -D 'png image:png' /input/firmware.bin
```

### Entropy Analysis

What happens if binwalk doesn't report any signatures? Or, how do you know binwalk didn't miss anything interesting?

Entropy analysis can help identify interesting sections of data inside a firmware image:

```bash
docker run -it --rm -v <input_dir>/input refirmlabs/binwalk -E /input/firmware.bin
```

**HINT:** You can combine other scans with the entropy scan. For example, you can combine a signature scan with an entropy scan:

```bash
docker run -it --rm -v <input_dir>/input refirmlabs/binwalk -B -E /input/firmware.bin
```

#### Output
```bash
DECIMAL   	HEX       	DESCRIPTION
-------------------------------------------------------------------------------------------------------------------
36625     	0x8F11    	Zlib header, default compression
```