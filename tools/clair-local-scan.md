## Description
Clair is an open source project for the [static analysis] of vulnerabilities in
application containers (currently including [OCI] and [docker]).

Clients use the Clair API to index their container images and can then match it against known vulnerabilities.

[The book] contains all the documentation on Clair's architecture and operation.

[OCI]: https://github.com/opencontainers/image-spec/blob/master/spec.md
[docker]: https://github.com/docker/docker/blob/master/image/spec/v1.2.md
[releases]: https://github.com/quay/clair/releases
[static analysis]: https://en.wikipedia.org/wiki/Static_program_analysis
[The book]: https://quay.github.io/clair/


## Cheatsheat   
To run a local scanner:   
```  
docker run -d --name clair-db arminc/clair-db:latest
docker run -p 6060:6060 --link clair-db:postgres -d --name clair arminc/clair-local-scan:v2.0.8_fe9b059d930314b54c78f75afe265955faf4fdc1
```   

Download [clair-scanner](https://github.com/arminc/clair-scanner) and execute the image:   
``` 
clair-scanner --clair=http://YOUR_LOCAL_IP:6060 --ip=YOUR_LOCAL_IP nginx:1.11.6-alpine  
```






