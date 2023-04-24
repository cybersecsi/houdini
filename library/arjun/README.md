## Description

Arjun can find query parameters for URL endpoints. If you don't get what that means, it's okay, read along.

Web applications use parameters (or queries) to accept user input, take the following example into consideration

`http://api.example.com/v1/userinfo?id=751634589`

This URL seems to load user information for a specific user id, but what if there exists a parameter named `admin` which when set to `True` makes the endpoint provide more information about the user?\
This is what Arjun does, it finds valid HTTP parameters with a huge default dictionary of 10,985 parameter names.

The best part? It takes less than 10 seconds to go through this huge list while making just 20-30 requests to the target.