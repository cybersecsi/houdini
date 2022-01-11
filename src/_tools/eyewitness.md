## Description
EyeWitness is designed to take screenshots of websites provide some server header info, and identify default credentials if known.

## Usage

```
docker run --rm -it -v <src_dir>:<container_dir> secsi/eyewitness --web --single <target_url>
```