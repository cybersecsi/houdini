## Description

jwt_tool.py is a toolkit for validating, forging, scanning and tampering JWTs (JSON Web Tokens).

## Usage

The first argument should be the JWT itself (unless providing this in a header or cookie value). Providing no additional arguments will show you the decoded token values for review.
```
docker run -it --rm secsi/jwt_tool <JWT>
```