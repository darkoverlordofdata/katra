// Generated by CoffeeScript 1.6.3
(function() {
  var Console, FileSystem, colors, _data,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  colors = require('colors');

  module.exports = {
    Console: Console = (function() {
      var MODE_REPL, MODE_RUN;

      MODE_REPL = 0;

      MODE_RUN = 1;

      Console.prototype.buffer = null;

      Console.prototype.vars = null;

      Console.prototype.paused = false;

      Console.prototype.prompt = '';

      Console.prototype.altPrompt = '?';

      function Console(prompt) {
        var stdin;
        this.prompt = prompt != null ? prompt : 'katra> ';
        this.pause = __bind(this.pause, this);
        this.listener = __bind(this.listener, this);
        stdin = process.openStdin();
        process.stdout.write(this.prompt);
        stdin.addListener("data", this.listener);
      }

      Console.prototype.listener = function($data) {
        this.commandHandle($data.toString());
        if (this.mode === MODE_REPL) {
          if (!this.paused) {
            return process.stdout.write(this.prompt);
          }
        } else {
          return process.stdout.write(this.altPrompt);
        }
      };

      Console.prototype.setPrompt = function($prompt) {};

      Console.prototype.pause = function($set) {
        if (this.paused === $set) {
          return;
        }
        if ((this.paused = $set)) {
          return process.stdin.removeListener("data", this.listener);
        } else {
          process.stdin.addListener("data", this.listener);
          if (this.mode === MODE_REPL) {
            return process.stdout.write(this.prompt);
          } else {
            return process.stdout.write(this.altPrompt);
          }
        }
      };

      Console.prototype.input = function($prompt, $vars) {
        if (this.paused) {
          this.pause(false);
        }
        if ($prompt != null) {
          this.print($prompt);
        }
        this.buffer = [];
        this.vars = $vars;
        return true;
      };

      Console.prototype.debug = function($text) {
        return process.stdout.write($text.blue + '\n');
      };

      Console.prototype.hilite = function($text) {
        return process.stdout.write($text.yellow + '\n');
      };

      Console.prototype.print = function($text) {
        if ($text == null) {
          $text = '';
        }
        return process.stdout.write($text);
      };

      Console.prototype.println = function($text) {
        if ($text == null) {
          $text = '';
        }
        return process.stdout.write($text + '\n');
      };

      Console.prototype.clear = function() {};

      return Console;

    })(),
    FileSystem: FileSystem = (function() {
      var $root, fs, path;

      function FileSystem() {}

      fs = require('fs');

      path = require('path');

      $root = __dirname.slice(0, +__dirname.lastIndexOf('/') + 1 || 9e9);

      FileSystem.prototype.setRoot = function($path) {
        return $root = $path;
      };

      FileSystem.prototype.readFile = function($filename, $next) {
        return fs.readFile(path.join($root, $filename) + '.bas', function($err, $data) {
          if ($err != null) {
            return $next($err);
          } else {
            return $next(null, String($data));
          }
        });
      };

      FileSystem.prototype.writeFile = function($filename, $data, $next) {
        return fs.writeFile(path.join($root, $filename) + '.bas', "" + $filename + "\n\n" + $data, $next);
      };

      FileSystem.prototype.deleteFile = function($filename, $next) {
        return fs.unlink(path.join($root, $filename) + '.bas', $next);
      };

      FileSystem.prototype.readDir = function($dir, $next) {
        return fs.readdir($root + _data[$dir], function($err, $files) {
          var $name;
          if ($err != null) {
            return $next([]);
          } else {
            return $next((function() {
              var _i, _len, _results;
              _results = [];
              for (_i = 0, _len = $files.length; _i < _len; _i++) {
                $name = $files[_i];
                if (/.*\.bas$/.test($name)) {
                  _results.push($name);
                }
              }
              return _results;
            })());
          }
        });
      };

      return FileSystem;

    })()
  };

  _data = {
    ATARI: 'bas/atari/',
    GWBASIC: 'bas/gwbasic/',
    GROUP: 'bas/hp2k/group/',
    LIBRARY: 'bas/hp2k/system/',
    TEST: 'bas/hp2k/test/',
    CATALOG: 'bas/hp2k/'
  };

}).call(this);
