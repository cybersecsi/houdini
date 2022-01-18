## Description

**CMSeeK** scans WordPress, Joomla, Drupal and over 180 other CMSs.

A content management system (CMS) manages the creation and modification of digital content. It typically supports multiple users in a collaborative environment.

## Cheatsheat 
```
SPECIFING TARGET:
      -u URL, --url URL            Target Url
      -l LIST, --list LIST         Path of the file containing list of sites
                                   for multi-site scan (comma separated)

MANIPULATING SCAN:
      -i cms, --ignore--cms cms    Specify which CMS IDs to skip in order to
                                   avoid flase positive. separated by comma ","

      --strict-cms cms             Checks target against a list of provided
                                   CMS IDs. separated by comma ","

      --skip-scanned               Skips target if it's CMS was previously detected.

RE-DIRECT:
      --follow-redirect            Follows all/any redirect(s)
      --no-redirect                Skips all redirects and tests the input target(s)

USER AGENT:
      -r, --random-agent           Use a random user agent
      --googlebot                  Use Google bot user agent
      --user-agent USER_AGENT      Specify a custom user agent

OUTPUT:
      -v, --verbose                Increase output verbosity

VERSION & UPDATING:
      --update                     Update CMSeeK (Requires git)
      --version                    Show CMSeeK version and exit

HELP & MISCELLANEOUS:
      -h, --help                   Show this help message and exit
      --clear-result               Delete all the scan result
      --batch                      Never ask you to press enter after every site in a list is scanned

EXAMPLE USAGE:
      docker run -it --rm secsi/cmseek -u <target_url>                           # Scan <target_url>
      docker run -it --rm secsi/cmseek -u <target_url> --user-agent Mozilla 5.0  # Scan <target_url> using custom user-Agent Mozilla is 5.0 used here
      docker run -it --rm secsi/cmseek -u <target_url> --random-agent            # Scan <target_url> using a random user-Agent
      docker run -it --rm secsi/cmseek -v -u <target_url>                        # enabling verbose output while scanning <target_url>
```
