## Description
A fast web fuzzer written in Go.

## Usage
The usage examples below show just the simplest tasks you can accomplish using ``ffuf``:
```
docker run -it --rm -v <wordlist_src_dir>:<wordlist_container_dir> secsi/ffuf -w </path/to/wordlist> -u <target_url>
```