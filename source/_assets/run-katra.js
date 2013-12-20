// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var args, katra, parseQuery, setSize;
    katra = require('./katra');
    args = void 0;
    parseQuery = function() {
      var i, pair, pairs, result;
      result = {};
      pairs = window.location.search.substring(1).split("&");
      for (i in pairs) {
        if (pairs[i].length > 0) {
          pair = pairs[i].split("=");
          result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
      }
      return result;
    };
    setSize = function() {
      $("div.console div.jquery-console-inner").offset({
        top: 0,
        left: 0
      });
      $("div.console div.jquery-console-inner").width($(this).width() - 12);
      return $("div.console div.jquery-console-inner").height($(this).height() - 12);
    };
    $(window).resize(function() {
      if (this.resizeTO) {
        clearTimeout(this.resizeTO);
      }
      return this.resizeTO = setTimeout(function() {
        return $(this).trigger("resizeEnd");
      }, 500);
    });
    $(window).bind("resizeEnd", setSize);
    katra.setRoot("/katra/");
    args = parseQuery();
    if (Object.keys(args).length === 0) {
      args = {
        title: "Katra BASIC"
      };
      document.title = args.title;
    }
    katra.main(args);
    return setSize();
  });

}).call(this);
