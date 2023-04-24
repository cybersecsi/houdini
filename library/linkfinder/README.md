## Description
LinkFinder is a python script written to discover endpoints and their parameters in JavaScript files. This way penetration testers and bug hunters are able to gather new, hidden endpoints on the websites they are testing. Resulting in new testing ground, possibility containing new vulnerabilities. It does so by using [jsbeautifier](https://github.com/beautify-web/js-beautify) for python in combination with a fairly large regular expression. The regular expressions consists of four small regular expressions. These are responsible for finding:

- Full URLs (`https://example.com/*`)
- Absolute URLs or dotted URLs (`/\*` or `../*`)
- Relative URLs with at least one slash (`text/test.php`)
- Relative URLs without a slash (`test.php`)

