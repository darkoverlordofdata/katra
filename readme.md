# katra

## Basic interpreter/compiler


A basic language interpreter written in coffee-script.

                    ------*------
    -------------   `---  ------'
    `-------- --'      / /
             \\\\-------  --
             '-----------'

               NCC - 1701

Katra has one goal - to run StarTrek.bas games from the golden age of basic programming.

## Status
This project is pre-alpha.

## Install

```bash
$ cd Git
$ git clone https://github.com/darkoverlordofdata/katra
$ sudo npm install -g ~/Git/katra
```

This will create the /usr/bin/katra command

```bash
$ katra
```
Runs the default bnf based version.

```bash
$ katra bnf
```
Runs the peg version (not yet working).

## Usage
```basic
> GET 'STTR1'
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