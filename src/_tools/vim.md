## Description

**Vim** is a greatly improved version of the good old UNIX editor
[Vi](https://en.wikipedia.org/wiki/Vi).  Many new
features have been added: multi-level undo, syntax highlighting, command line
history, on-line help, spell checking, filename completion, block operations,
script language, etc.  There is also a Graphical User Interface (GUI)
available.  Still, Vi compatibility is maintained, those who have Vi "in the
fingers" will feel at home.
See [`runtime/doc/vi_diff.txt`](runtime/doc/vi_diff.txt) for differences with
Vi.

This editor is very useful for editing programs and other plain text files.
All commands are given with normal keyboard characters, so those who can type
with ten fingers can work very fast.  Additionally, function keys can be
mapped to commands by the user, and the mouse can be used.

Vim runs under MS-Windows (XP, Vista, 7, 8, 10), macOS, Haiku, VMS and almost
all flavours of UNIX.  Porting to other systems should not be very difficult.
Older versions of Vim run on MS-DOS, MS-Windows 95/98/Me/NT/2000, Amiga DOS,
Atari MiNT, BeOS, RISC OS and OS/2.  These are no longer maintained.

For Vim9 script see [README_VIM9](README_VIM9.md).


## Usage

```
docker run -it --rm -v <src_dir>:<container_dir> secsi/vim 
```
