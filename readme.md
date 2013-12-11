# Katra

## Basic interpreter

One basic to run them? Katra is a basic language interpreter in coffee-script,
written to run classic games from the golden age of basic programming. Games
like [STAR TREK] (http://darkoverlordofdata.com/katra/run/?basic=hp2k&program=STTR1)...

                    ------*------
    -------------   `---  ------'
    `-------- --'      / /
             \\\\-------  --
             '-----------'

Katra runs in the browser or on the command line.
See ./www/run/index.html for a browser example.
Command line install instructions below.


## Status
This project is alpha.

Todo:

* Append - command
* Chain - keyword



## Install

```bash
$ sudo npm install -g katra
```

This will create the /usr/bin/katra command

```bash
$ katra
```

## Usage
```basic
> GET-STTR1
> RUN
```

## Example
```basic
> 10 let x = 1
> 20 print x*2
> list
10 LET x = 1
20 PRINT x*2
> run
2
DONE
>
```


## MIT License

Copyright (c) 2012 - 2013 Bruce Davidson &lt;darkoverlordofdata@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.