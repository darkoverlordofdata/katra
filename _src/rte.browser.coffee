#+--------------------------------------------------------------------+
#| rte.browser.coffee
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
# Rte Concerns - browser
#
MODE_REPL       = 0     # Console REPL mode
MODE_RUN        = 1     # Console RUN mode
BOM             = 65279   # MS Byte Order Marker

#
# Parse code into lines
#
# Cleans up the raw source code
#
# @param  [String]  code  the raw source code
# @return [Array<String>]
#
_parse = ($code) ->

  #
  # skip over a byte order marker
  #
  $code = $code.slice(1) if $code.charCodeAt(0) is BOM

  #
  # normalize CR/LF
  #
  $code = ($code + '\n')    # make sure there is an ending LF
  .replace(/\r/g,  '\n')    # replace CR's with LF's
  .replace(/\n+/g, '\n')    # remove duplicate LF's
  .split('\n')              # and split into lines


window.rte =

  #
  # wrapper for jquery.console
  #
  Console: class Console

    mode: MODE_REPL
    element: ''
    console: null
    buffer: null
    vars: null
    #
    # jquery.console config:
    #
    animateScroll: true
    autofocus: true
    promptLabel: ''
    promptHistory: true
    welcomeMessage: 'Type RUN to start.'

    #
    # initialize a console
    #
    # @param  [String]  element DOM root element
    # @param  [String]  prompt  string to print
    # @return none
    #
    constructor: (@element = '.console', $prompt = '> ') ->

      @promptLabel = $prompt
      @clear()

    #
    # callback to validate the input
    #
    # @param  [String]  line  the line that was entered
    # @return true if input is valid
    #
    commandValidate: ($line) =>
      if $line is "" then false else true

    #
    # input from console
    #
    # @param  [String]  prompt  text to print
    # @param  [Array] vars  list of variables to input
    # @return true to trigger wait for io
    #
    input: ($prompt, $vars) ->
      @print $prompt if $prompt?
      @buffer = []
      @vars = $vars
      true

    #
    # pause the input listener?
    #
    # @param  [Boolean]  set  value to set pause
    # @return [Void]
    #
    pause: ($set) =>
      #@console.setMode $set
      return

    debug: ($text) =>
      @console.inner.append String($text).replace(/\ /g, "&nbsp;")+"<br />"

    #
    # print to console
    #
    # @param  [String]  text  text to print
    # @return none
    #
    print: ($text) ->
      @console.inner.append $text.replace(/\ /g, "&nbsp;")

    #
    # print with newline to console
    #
    # @param  [String]  text  text to print
    # @return none
    #
    println: ($text) ->
      @console.inner.append $text.replace(/\ /g, "&nbsp;")+"<br />"

    #
    # create a new console, erasing the previuos
    #
    # @return none
    #
    clear: ->
      $(@element).html ''
      @console = $(@element).console(@)




  FileSystem: class FileSystem

    $root = '/'

    setRoot: ($path) ->
      $root = $path
      
    readFile: ($filename, $next) ->
      $.get $root+$filename+'.bas', ($data) ->

        $data = _parse(String($data))
        $data.shift() if isNaN($data[0][0])
        $data.shift() if $data[0] is ""
        $next null, $data.join('\n')


    writeFile: ($filename, $data, $next) ->

    deleteFile: ($filename, $next) ->
