#+--------------------------------------------------------------------+
#| Cakefile
#+--------------------------------------------------------------------+
#| Copyright DarkOverlordOfData (c) 2013
#+--------------------------------------------------------------------+
#|
#| This file is a part of Katra
#|
#| Katra is free software; you can copy, modify, and distribute
#| it under the terms of the MIT License
#|
#+--------------------------------------------------------------------+
#
# cake utils
#
fs = require 'fs'
util = require 'util'
{exec} = require 'child_process'


#
# Build Source
#
#
task 'build:src', 'Build the coffee source', ->

  #
  # Build the AST lib
  #
  exec 'coffee -o source/_assets -c src', ($err, $stdout, $stderr) ->

    util.log $err if $err if $err?
    util.log $stderr if $stderr if $stderr?
    util.log $stdout if $stdout if $stdout?
    util.log 'ok' unless $stdout?


task 'build:parser', 'Build the parser using BNF source', ->

  #
  # Generate the parser
  #
  exec 'jison src/kc.y src/kc.l --outfile public/_assets/kc.js', ($err, $stdout, $stderr) ->

    util.log $err if $err if $err?
    util.log $stderr if $stderr if $stderr?
    util.log $stdout if $stdout if $stdout?
    util.log 'ok' unless $stdout?


