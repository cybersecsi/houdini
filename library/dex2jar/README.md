## Description

Tools to work with android .dex and java .class files

1. dex-reader/writer: Read/write the Dalvik Executable (.dex) file. It has a light weight API similar with ASM.
2. d2j-dex2jar: Convert .dex file to .class files (zipped as jar)
3. smali/baksmali: disassemble dex to smali files and assemble dex from smali files. different implementation to smali/baksmali, same syntax, but we support escape in type desc "Lcom/dex2jar\t\u1234;"
4. other tools: d2j-decrypt-string

