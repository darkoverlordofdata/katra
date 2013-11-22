// Generated by CoffeeScript 1.6.3
(function() {
  var BOM, Console, FileSystem, MODE_REPL, MODE_RUN, _parse,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  MODE_REPL = 0;

  MODE_RUN = 1;

  BOM = 65279;

  _parse = function($code) {
    if ($code.charCodeAt(0) === BOM) {
      $code = $code.slice(1);
    }
    return $code = ($code + '\n').replace(/\r/g, '\n').replace(/\n+/g, '\n').split('\n');
  };

  window.rte = {
    Console: Console = (function() {
      Console.prototype.mode = MODE_REPL;

      Console.prototype.element = '';

      Console.prototype.console = null;

      Console.prototype.buffer = null;

      Console.prototype.vars = null;

      Console.prototype.animateScroll = true;

      Console.prototype.autofocus = true;

      Console.prototype.promptLabel = '';

      Console.prototype.promptHistory = true;

      Console.prototype.welcomeMessage = 'Type RUN to start.';

      function Console(element, $prompt) {
        this.element = element != null ? element : '.console';
        if ($prompt == null) {
          $prompt = '> ';
        }
        this.debug = __bind(this.debug, this);
        this.focus = __bind(this.focus, this);
        this.reset = __bind(this.reset, this);
        this.pause = __bind(this.pause, this);
        this.commandValidate = __bind(this.commandValidate, this);
        this.promptLabel = $prompt;
        this.clear();
      }

      Console.prototype.commandValidate = function($line) {
        if ($line === "") {
          return false;
        } else {
          return true;
        }
      };

      Console.prototype.input = function($prompt, $vars) {
        if ($prompt != null) {
          this.print($prompt);
        }
        this.buffer = [];
        this.vars = $vars;
        return true;
      };

      Console.prototype.pause = function($set) {};

      Console.prototype.reset = function() {
        return this.console.reset();
      };

      Console.prototype.focus = function() {
        return this.console.typer.focus();
      };

      Console.prototype.debug = function($text) {
        return this.console.inner.append(String($text).replace(/\ /g, "&nbsp;") + "<br />");
      };

      Console.prototype.print = function($text) {
        return this.console.inner.append($text.replace(/\ /g, "&nbsp;"));
      };

      Console.prototype.println = function($text) {
        return this.console.inner.append($text.replace(/\ /g, "&nbsp;") + "<br />");
      };

      Console.prototype.clear = function() {
        $(this.element).html('');
        return this.console = $(this.element).console(this);
      };

      return Console;

    })(),
    FileSystem: FileSystem = (function() {
      var $root;

      function FileSystem() {}

      $root = '/';

      FileSystem.prototype.setRoot = function($path) {
        return $root = $path;
      };

      FileSystem.prototype.readFile = function($filename, $next) {
        return $.get($root + $filename + '.bas', function($data) {
          var $name;
          $name = $filename.split('/').pop();
          if (/\[.*\]$/.test(document.title)) {
            document.title.replace(/\[(.*)\]$/, $name);
          } else {
            document.title += " - [" + $name + "]";
          }
          $data = _parse(String($data));
          if (isNaN($data[0][0])) {
            $data.shift();
          }
          if ($data[0] === "") {
            $data.shift();
          }
          return $next(null, $data.join('\n'));
        });
      };

      FileSystem.prototype.writeFile = function($filename, $data, $next) {};

      FileSystem.prototype.deleteFile = function($filename, $next) {};

      return FileSystem;

    })()
  };

}).call(this);
