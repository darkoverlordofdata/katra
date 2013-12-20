// Generated by CoffeeScript 1.6.3
(function() {
  var PRINTF, util;

  PRINTF = /(\%)([-])?([+])?([0])?(\d*)?(\.\d*)?([\%ds])/g;

  module.exports = util = {
    clean: function($code) {
      if ($code.charCodeAt(0) === 0xfeff) {
        $code = $code.slice(1);
      }
      return $code = ($code + '\n').replace(/\r/g, '\n').replace(/\n+/g, '\n');
    },
    flatten: function($list) {
      var $a, $item, _i, _len;
      if ($list == null) {
        return [];
      }
      $a = [];
      for (_i = 0, _len = $list.length; _i < _len; _i++) {
        $item = $list[_i];
        if (Array.isArray($item)) {
          $a = $a.concat(util.flatten($item));
        } else {
          $a.push($item);
        }
      }
      return $a;
    },
    sprintf: function($fmt, $list) {
      var $count, foreach;
      $count = 0;
      foreach = function($match, $pct, $just, $sign, $pad, $width, $prec, $spec, $ofset, $string) {
        var $value;
        if ($pad == null) {
          $pad = ' ';
        }
        $value = String($list[$count++]);
        switch ($spec) {
          case '%':
            return '%';
          case 's':
            if ($width != null) {
              $width = parseInt($width, 10);
              if ($value.length < $width) {
                if ($just != null) {
                  return Array($width - $value.length + 1).join($pad) + $value;
                } else {
                  return $value + Array($width - $value.length + 1).join($pad);
                }
              }
            }
            return $value;
          case 'd':
            if ($width != null) {
              $width = parseInt($width, 10);
              if ($value.length < $width) {
                if ($just != null) {
                  return $value + Array($width - $value.length + 1).join($pad);
                } else {
                  return Array($width - $value.length + 1).join($pad) + $value;
                }
              }
            }
            return $value;
        }
      };
      return $fmt.replace(PRINTF, foreach);
    },
    pad: function($value, $len, $pad) {
      var $right;
      if ($pad == null) {
        $pad = ' ';
      }
      $right = !isNaN($value);
      $value = String($value);
      if ($right) {
        if ($value.length < $len) {
          return Array($len - $value.length + 1, $pad) + $value;
        } else {
          return $value.substr(0, $len);
        }
      } else {
        if ($value.length < $len) {
          return $value + Array($len - $value.length + 1, $pad);
        } else {
          return $value.substr(0, $len);
        }
      }
    }
  };

}).call(this);
