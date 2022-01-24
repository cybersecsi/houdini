## Description 
The Netify Agent is a deep-packet inspection server.  The Agent is built on top of nDPI (formerly OpenDPI) to detect network protocols and applications.  Detections can be saved locally, served over a UNIX or TCP socket, and/or "pushed" (via HTTP POSTs) to a remote third-party server.  Flow metadata, network statistics, and detection classifications are stored using JSON encoding.
Optionally, the Netify Agent can be coupled with a Netify Cloud subscription for further cloud processing, historical storage, machine-learning analysis, event notifications, device detection/identification, along with the option (on supported platforms) to take an active role in policing/bandwidth-shaping specific network protocols and applications.


## Cheatsheat 
Run: 
```
docker run -it --cap-add=net_admin --rm secsi/netifyd -I/E <interface> -R 
```
to execute the script.   
You can also use in background without the `-R` flag: 

``` 
docker run -it --cap-add=net_admin --rm secsi/netifyd -I/E <interface> 
```