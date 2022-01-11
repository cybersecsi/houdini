## Description

**Sandcastle** is a Python script for AWS S3 bucket enumeration, formerly known as bucketCrawler.

The script takes a target's name as the stem argument (e.g. `shopify`) and iterates through a file of bucket name permutations, such as the ones below:

```
-training
-bucket
-dev
-attachments
-photos
-elasticsearch
[...]
```

## Usage
```
docker run -it --rm secsi/sandcastle -t <targetStem> -f bucket-names.txt

docker run -it --rm -v <src_dir>:<container_dir> secsi/sandcastle -t <targetStem> -f <container_dir>/<bucket_names_file>
```