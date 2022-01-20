## Description

tcp connection hijacker, rust rewrite of [shijack] from 2001.

This was written for TAMUctf 2018, brick house 100. The target was a telnet server that was protected by 2FA. Since the challenge wasn't authenticated, there have been multiple solutions for this.  Our solution (cyclopropenylidene) was waiting until the authentication was done, then inject a tcp packet into the telnet connection:

    # if you don't know one of the ports use 0 to match any port
    echo 'cat ~/.ctf_flag' | sudo rshijack tap0 172.16.13.20:37386 172.16.13.19:23

After some attempts this command was accepted and executed by the telnet server, resulting in a tcp packet containing the flag.