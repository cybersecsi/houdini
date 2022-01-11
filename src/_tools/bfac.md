## Description

BFAC (Backup File Artifacts Checker) is an automated tool that checks for backup artifacts that may disclose the web-application's source code. The artifacts can also lead to leakage of sensitive information, such as passwords, directory structure, etc.

The goal of BFAC is to be an all-in-one tool for backup-file artifacts black-box testing.

## Usage

| Description                                                | Command                                                                     |
|------------------------------------------------------------|-----------------------------------------------------------------------------|
| Help                                                       | `docker run -it --rm secsi/bfac --help`                                     |
| Check a single URL.                                        | `docker run -it --rm secsi/bfac --url <url>`                                |
| Single URL with a different level (level 2 for example).   | `docker run -it --rm secsi/bfac --url <url> --level 2`                      |
| Single URL and show the results only.                      | `docker run -it --rm secsi/bfac --no-text --url <url>`                      |
| Limit the test to exposed DVCS tests.                      | `docker run -it --rm secsi/bfac --dvcs-test --url <url>`                    |
| Verify existence of files using Content-Length checks only.| `docker run -it --rm secsi/bfac --detection-technique content_length <url>` |
| Verify existence of files using Status-Code checks only.   | `docker run -it --rm secsi/bfac --detection-technique status_code <url>`    |
| Exclude results with specific status-codes.                | `docker run -it --rm secsi/bfac --exclude-status-codes 301,999 <url>`       |