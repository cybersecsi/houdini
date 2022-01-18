## Description

What is the **SimplyEmail** recon tool? This tool was based off the work of theHarvester and kind of a port of the functionality. This was just an expansion of what was used to build theHarvester and will incorporate his work but allow users to easily build Modules for the Framework. 

## Cheatsheat 
in verbose
```
docker run -it --rm simplysecurity/simplyemail -all -v -e <target_domain>
```
or in verbose and no "Scope"
```
docker run -it --rm simplysecurity/simplyemail -all -v -e <target_domain> -s
```
or with email verification
```
docker run -it --rm simplysecurity/simplyemail -all -v -verify -e <target_domain> 
```
or with email verification & Name Creation
```
docker run -it --rm simplysecurity/simplyemail -all -v -verify -n -e <target_domain> 
```
or json automation
```
docker run -it --rm simplysecurity/simplyemail -all -e <target_domain> --json cs-json.txt
```