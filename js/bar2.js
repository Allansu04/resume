"use strict";

! function (i) {
  i.fn.skillbar = function (t) {
    var e = i.extend({
        speed: 1e3,
        bg: ""
      }, t),
      n = e.bg,
      d = i(this).find(".filled"),
      s = i(this).find(".title");
    return n ? (d.css({
      "background-color": n
    }), s.css({
      "background-color": "rgba(0,0,0,0.5)"
    })) : this.each(function (t) {
      i(this).find(".filled").animate({
        width: i(this).find(".filled").data("width")
      }, e.speed)
    }), this
  }
}(jQuery);