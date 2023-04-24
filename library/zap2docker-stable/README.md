## Description

You can run ZAP using the 'standard' zap.sh script. There is also a zap-x.sh script which first starts xvfb (X virtual frame buffer) - this allows add-ons that use Selenium (like the Ajax Spider and DOM XSS scanner) to run in a headless environment. Firefox is also installed so can be used with these add-ons.

For more details see https://www.zaproxy.org/docs/docker/