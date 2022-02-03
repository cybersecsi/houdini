## Description
SecLists is the security tester's companion. It's a collection of multiple types of lists used during security assessments, collected in one place. List types include usernames, passwords, URLs, sensitive data patterns, fuzzing payloads, web shells, and many more. The goal is to enable a security tester to pull this repository onto a new testing box and have access to every type of list that may be needed.

## Cheatsheat 
Run in daemon mode:   
```   
docker run -d --name seclists --rm secsi/seclists  
```  
This will create a VOLUME of `/usr/share/wordlists` folder. 
Now you can easy use it in other containers by binding the volume:   
```   
docker run --rm -it --volumes-from seclists ubuntu bash  
ls /usr/share/wordlists/SecLists

```
