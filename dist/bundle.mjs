(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.image-gallery{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-gallery__container{background:black;margin-bottom:10px;padding:5px}.image-gallery__controls{display:flex;gap:10px;padding:8px 2px 3px}.image-gallery__items{display:grid;gap:10px;grid-template-columns:1fr 1fr 1fr;padding:10px;background-color:#222}.image-gallery__items:empty{display:none}.image-gallery__preloaders{display:flex;flex-grow:1;flex-wrap:nowrap;padding:5px;gap:8px;overflow:hidden}.image-gallery__preloader{min-width:30px;height:30px;border-radius:50%;background-size:cover;position:relative;background-color:var(--bg-color);background-position:center center}.image-gallery__preloader:after{content:"";position:absolute;z-index:3;width:30px;height:30px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-15px;margin-left:-15px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-gallery__image{position:relative;overflow:hidden;aspect-ratio:16 / 9;cursor:move;-webkit-user-select:none;user-select:none;background-color:#000;border-radius:3px;padding:5px}.image-gallery__image.sortable-ghost{opacity:.75}.image-gallery__image--empty,.image-gallery__image--loading{display:none}.image-gallery__image-picture{border-radius:3px;max-width:100%;height:100%;display:block;margin:auto;object-fit:cover;pointer-events:none}.image-gallery__image-trash{position:absolute;top:3px;right:3px;cursor:pointer;color:#fff;font-size:18px;background-color:#00000040;line-height:1;padding:6px 8px;border-radius:3px;transition:background-color .1s}.image-gallery__image-trash:hover{background-color:#00000080}.image-gallery__counter{display:flex;align-items:center;color:gray;font-size:14px;margin-right:6px}.image-gallery__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-gallery__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-gallery__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-gallery__caption{margin-bottom:10px}.image-gallery .cdx-button{height:40px;display:flex;align-items:center;justify-content:center;padding:12px;gap:5px;white-space:nowrap}.image-gallery__tune-wrapper{display:flex;gap:6px;margin:6px 0}.image-gallery__tune-wrapper:first-child{margin-top:0}.image-gallery__tune-wrapper:last-child{margin-bottom:0}.image-gallery__tune{flex-grow:1;padding:6px;color:var(--color-text-primary)}.image-gallery__tune.active{background:var(--color-background-icon-active);color:var(--color-text-icon-active);border-color:var(--color-text-icon-active)}.image-gallery__tune svg{width:24px;height:24px}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function de(i, t) {
  var e = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(i, o).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function V(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? de(Object(e), !0).forEach(function(n) {
      Le(i, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : de(Object(e)).forEach(function(n) {
      Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return i;
}
function kt(i) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? kt = function(t) {
    return typeof t;
  } : kt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kt(i);
}
function Le(i, t, e) {
  return t in i ? Object.defineProperty(i, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[t] = e, i;
}
function K() {
  return K = Object.assign || function(i) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
    }
    return i;
  }, K.apply(this, arguments);
}
function Re(i, t) {
  if (i == null)
    return {};
  var e = {}, n = Object.keys(i), o, r;
  for (r = 0; r < n.length; r++)
    o = n[r], !(t.indexOf(o) >= 0) && (e[o] = i[o]);
  return e;
}
function je(i, t) {
  if (i == null)
    return {};
  var e = Re(i, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    for (o = 0; o < r.length; o++)
      n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(i, n) && (e[n] = i[n]);
  }
  return e;
}
var He = "1.15.0";
function J(i) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(i);
}
var tt = J(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), It = J(/Edge/i), fe = J(/firefox/i), St = J(/safari/i) && !J(/chrome/i) && !J(/android/i), we = J(/iP(ad|od|hone)/i), Ee = J(/chrome/i) && J(/android/i), _e = {
  capture: !1,
  passive: !1
};
function I(i, t, e) {
  i.addEventListener(t, e, !tt && _e);
}
function O(i, t, e) {
  i.removeEventListener(t, e, !tt && _e);
}
function Bt(i, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), i)
      try {
        if (i.matches)
          return i.matches(t);
        if (i.msMatchesSelector)
          return i.msMatchesSelector(t);
        if (i.webkitMatchesSelector)
          return i.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Be(i) {
  return i.host && i !== document && i.host.nodeType ? i.host : i.parentNode;
}
function U(i, t, e, n) {
  if (i) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? i.parentNode === e && Bt(i, t) : Bt(i, t)) || n && i === e)
        return i;
      if (i === e)
        break;
    } while (i = Be(i));
  }
  return null;
}
var he = /\s+/g;
function q(i, t, e) {
  if (i && t)
    if (i.classList)
      i.classList[e ? "add" : "remove"](t);
    else {
      var n = (" " + i.className + " ").replace(he, " ").replace(" " + t + " ", " ");
      i.className = (n + (e ? " " + t : "")).replace(he, " ");
    }
}
function S(i, t, e) {
  var n = i && i.style;
  if (n) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(i, "") : i.currentStyle && (e = i.currentStyle), t === void 0 ? e : e[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function mt(i, t) {
  var e = "";
  if (typeof i == "string")
    e = i;
  else
    do {
      var n = S(i, "transform");
      n && n !== "none" && (e = n + " " + e);
    } while (!t && (i = i.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(e);
}
function Se(i, t, e) {
  if (i) {
    var n = i.getElementsByTagName(t), o = 0, r = n.length;
    if (e)
      for (; o < r; o++)
        e(n[o], o);
    return n;
  }
  return [];
}
function $() {
  var i = document.scrollingElement;
  return i || document.documentElement;
}
function L(i, t, e, n, o) {
  if (!(!i.getBoundingClientRect && i !== window)) {
    var r, a, l, c, s, h, d;
    if (i !== window && i.parentNode && i !== $() ? (r = i.getBoundingClientRect(), a = r.top, l = r.left, c = r.bottom, s = r.right, h = r.height, d = r.width) : (a = 0, l = 0, c = window.innerHeight, s = window.innerWidth, h = window.innerHeight, d = window.innerWidth), (t || e) && i !== window && (o = o || i.parentNode, !tt))
      do
        if (o && o.getBoundingClientRect && (S(o, "transform") !== "none" || e && S(o, "position") !== "static")) {
          var v = o.getBoundingClientRect();
          a -= v.top + parseInt(S(o, "border-top-width")), l -= v.left + parseInt(S(o, "border-left-width")), c = a + r.height, s = l + r.width;
          break;
        }
      while (o = o.parentNode);
    if (n && i !== window) {
      var y = mt(o || i), b = y && y.a, u = y && y.d;
      y && (a /= u, l /= b, d /= b, h /= u, c = a + h, s = l + d);
    }
    return {
      top: a,
      left: l,
      bottom: c,
      right: s,
      width: d,
      height: h
    };
  }
}
function pe(i, t, e) {
  for (var n = rt(i, !0), o = L(i)[t]; n; ) {
    var r = L(n)[e], a = void 0;
    if (e === "top" || e === "left" ? a = o >= r : a = o <= r, !a)
      return n;
    if (n === $())
      break;
    n = rt(n, !1);
  }
  return !1;
}
function gt(i, t, e, n) {
  for (var o = 0, r = 0, a = i.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== C.ghost && (n || a[r] !== C.dragged) && U(a[r], e.draggable, i, !1)) {
      if (o === t)
        return a[r];
      o++;
    }
    r++;
  }
  return null;
}
function ae(i, t) {
  for (var e = i.lastElementChild; e && (e === C.ghost || S(e, "display") === "none" || t && !Bt(e, t)); )
    e = e.previousElementSibling;
  return e || null;
}
function z(i, t) {
  var e = 0;
  if (!i || !i.parentNode)
    return -1;
  for (; i = i.previousElementSibling; )
    i.nodeName.toUpperCase() !== "TEMPLATE" && i !== C.clone && (!t || Bt(i, t)) && e++;
  return e;
}
function me(i) {
  var t = 0, e = 0, n = $();
  if (i)
    do {
      var o = mt(i), r = o.a, a = o.d;
      t += i.scrollLeft * r, e += i.scrollTop * a;
    } while (i !== n && (i = i.parentNode));
  return [t, e];
}
function Xe(i, t) {
  for (var e in i)
    if (i.hasOwnProperty(e)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === i[e][n])
          return Number(e);
    }
  return -1;
}
function rt(i, t) {
  if (!i || !i.getBoundingClientRect)
    return $();
  var e = i, n = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var o = S(e);
      if (e.clientWidth < e.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!e.getBoundingClientRect || e === document.body)
          return $();
        if (n || t)
          return e;
        n = !0;
      }
    }
  while (e = e.parentNode);
  return $();
}
function qe(i, t) {
  if (i && t)
    for (var e in t)
      t.hasOwnProperty(e) && (i[e] = t[e]);
  return i;
}
function Wt(i, t) {
  return Math.round(i.top) === Math.round(t.top) && Math.round(i.left) === Math.round(t.left) && Math.round(i.height) === Math.round(t.height) && Math.round(i.width) === Math.round(t.width);
}
var Ct;
function Ce(i, t) {
  return function() {
    if (!Ct) {
      var e = arguments, n = this;
      e.length === 1 ? i.call(n, e[0]) : i.apply(n, e), Ct = setTimeout(function() {
        Ct = void 0;
      }, t);
    }
  };
}
function Ye() {
  clearTimeout(Ct), Ct = void 0;
}
function Te(i, t, e) {
  i.scrollLeft += t, i.scrollTop += e;
}
function De(i) {
  var t = window.Polymer, e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(i).cloneNode(!0) : e ? e(i).clone(!0)[0] : i.cloneNode(!0);
}
var G = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Ge() {
  var i = [], t;
  return {
    captureAnimationState: function() {
      if (i = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(o) {
          if (!(S(o, "display") === "none" || o === C.ghost)) {
            i.push({
              target: o,
              rect: L(o)
            });
            var r = V({}, i[i.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = mt(o, !0);
              a && (r.top -= a.f, r.left -= a.e);
            }
            o.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(n) {
      i.push(n);
    },
    removeAnimationState: function(n) {
      i.splice(Xe(i, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var r = !1, a = 0;
      i.forEach(function(l) {
        var c = 0, s = l.target, h = s.fromRect, d = L(s), v = s.prevFromRect, y = s.prevToRect, b = l.rect, u = mt(s, !0);
        u && (d.top -= u.f, d.left -= u.e), s.toRect = d, s.thisAnimationDuration && Wt(v, d) && !Wt(h, d) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - d.top) / (b.left - d.left) === (h.top - d.top) / (h.left - d.left) && (c = We(b, v, y, o.options)), Wt(d, h) || (s.prevFromRect = h, s.prevToRect = d, c || (c = o.options.animation), o.animate(s, b, d, c)), c && (r = !0, a = Math.max(a, c), clearTimeout(s.animationResetTimer), s.animationResetTimer = setTimeout(function() {
          s.animationTime = 0, s.prevFromRect = null, s.fromRect = null, s.prevToRect = null, s.thisAnimationDuration = null;
        }, c), s.thisAnimationDuration = c);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), i = [];
    },
    animate: function(n, o, r, a) {
      if (a) {
        S(n, "transition", ""), S(n, "transform", "");
        var l = mt(this.el), c = l && l.a, s = l && l.d, h = (o.left - r.left) / (c || 1), d = (o.top - r.top) / (s || 1);
        n.animatingX = !!h, n.animatingY = !!d, S(n, "transform", "translate3d(" + h + "px," + d + "px,0)"), this.forRepaintDummy = ze(n), S(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), S(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          S(n, "transition", ""), S(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function ze(i) {
  return i.offsetWidth;
}
function We(i, t, e, n) {
  return Math.sqrt(Math.pow(t.top - i.top, 2) + Math.pow(t.left - i.left, 2)) / Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) * n.animation;
}
var dt = [], Ut = {
  initializeByDefault: !0
}, Pt = {
  mount: function(t) {
    for (var e in Ut)
      Ut.hasOwnProperty(e) && !(e in t) && (t[e] = Ut[e]);
    dt.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), dt.push(t);
  },
  pluginEvent: function(t, e, n) {
    var o = this;
    this.eventCanceled = !1, n.cancel = function() {
      o.eventCanceled = !0;
    };
    var r = t + "Global";
    dt.forEach(function(a) {
      e[a.pluginName] && (e[a.pluginName][r] && e[a.pluginName][r](V({
        sortable: e
      }, n)), e.options[a.pluginName] && e[a.pluginName][t] && e[a.pluginName][t](V({
        sortable: e
      }, n)));
    });
  },
  initializePlugins: function(t, e, n, o) {
    dt.forEach(function(l) {
      var c = l.pluginName;
      if (!(!t.options[c] && !l.initializeByDefault)) {
        var s = new l(t, e, t.options);
        s.sortable = t, s.options = t.options, t[c] = s, K(n, s.defaults);
      }
    });
    for (var r in t.options)
      if (t.options.hasOwnProperty(r)) {
        var a = this.modifyOption(t, r, t.options[r]);
        typeof a < "u" && (t.options[r] = a);
      }
  },
  getEventProperties: function(t, e) {
    var n = {};
    return dt.forEach(function(o) {
      typeof o.eventProperties == "function" && K(n, o.eventProperties.call(e[o.pluginName], t));
    }), n;
  },
  modifyOption: function(t, e, n) {
    var o;
    return dt.forEach(function(r) {
      t[r.pluginName] && r.optionListeners && typeof r.optionListeners[e] == "function" && (o = r.optionListeners[e].call(t[r.pluginName], n));
    }), o;
  }
};
function Ue(i) {
  var t = i.sortable, e = i.rootEl, n = i.name, o = i.targetEl, r = i.cloneEl, a = i.toEl, l = i.fromEl, c = i.oldIndex, s = i.newIndex, h = i.oldDraggableIndex, d = i.newDraggableIndex, v = i.originalEvent, y = i.putSortable, b = i.extraEventProperties;
  if (t = t || e && e[G], !!t) {
    var u, f = t.options, g = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !tt && !It ? u = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (u = document.createEvent("Event"), u.initEvent(n, !0, !0)), u.to = a || e, u.from = l || e, u.item = o || e, u.clone = r, u.oldIndex = c, u.newIndex = s, u.oldDraggableIndex = h, u.newDraggableIndex = d, u.originalEvent = v, u.pullMode = y ? y.lastPutMode : void 0;
    var p = V(V({}, b), Pt.getEventProperties(n, t));
    for (var _ in p)
      u[_] = p[_];
    e && e.dispatchEvent(u), f[g] && f[g].call(t, u);
  }
}
var $e = ["evt"], X = function(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = n.evt, r = je(n, $e);
  Pt.pluginEvent.bind(C)(t, e, V({
    dragEl: m,
    parentEl: M,
    ghostEl: T,
    rootEl: x,
    nextEl: ut,
    lastDownEl: Lt,
    cloneEl: F,
    cloneHidden: ot,
    dragStarted: wt,
    putSortable: R,
    activeSortable: C.active,
    originalEvent: o,
    oldIndex: pt,
    oldDraggableIndex: Tt,
    newIndex: Y,
    newDraggableIndex: it,
    hideGhostForTarget: xe,
    unhideGhostForTarget: Fe,
    cloneNowHidden: function() {
      ot = !0;
    },
    cloneNowShown: function() {
      ot = !1;
    },
    dispatchSortableEvent: function(l) {
      H({
        sortable: e,
        name: l,
        originalEvent: o
      });
    }
  }, r));
};
function H(i) {
  Ue(V({
    putSortable: R,
    cloneEl: F,
    targetEl: m,
    rootEl: x,
    oldIndex: pt,
    oldDraggableIndex: Tt,
    newIndex: Y,
    newDraggableIndex: it
  }, i));
}
var m, M, T, x, ut, Lt, F, ot, pt, Y, Tt, it, Ft, R, ht = !1, Xt = !1, qt = [], lt, W, $t, Vt, ge, ve, wt, ft, Dt, Ot = !1, Mt = !1, Rt, j, Zt = [], ne = !1, Yt = [], zt = typeof document < "u", At = we, ye = It || tt ? "cssFloat" : "float", Ve = zt && !Ee && !we && "draggable" in document.createElement("div"), Oe = function() {
  if (zt) {
    if (tt)
      return !1;
    var i = document.createElement("x");
    return i.style.cssText = "pointer-events:auto", i.style.pointerEvents === "auto";
  }
}(), Ie = function(t, e) {
  var n = S(t), o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), r = gt(t, 0, e), a = gt(t, 1, e), l = r && S(r), c = a && S(a), s = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + L(r).width, h = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + L(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return a && (c.clear === "both" || c.clear === d) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || s >= o && n[ye] === "none" || a && n[ye] === "none" && s + h > o) ? "vertical" : "horizontal";
}, Ze = function(t, e, n) {
  var o = n ? t.left : t.top, r = n ? t.right : t.bottom, a = n ? t.width : t.height, l = n ? e.left : e.top, c = n ? e.right : e.bottom, s = n ? e.width : e.height;
  return o === l || r === c || o + a / 2 === l + s / 2;
}, Qe = function(t, e) {
  var n;
  return qt.some(function(o) {
    var r = o[G].options.emptyInsertThreshold;
    if (!(!r || ae(o))) {
      var a = L(o), l = t >= a.left - r && t <= a.right + r, c = e >= a.top - r && e <= a.bottom + r;
      if (l && c)
        return n = o;
    }
  }), n;
}, Pe = function(t) {
  function e(r, a) {
    return function(l, c, s, h) {
      var d = l.options.group.name && c.options.group.name && l.options.group.name === c.options.group.name;
      if (r == null && (a || d))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return e(r(l, c, s, h), a)(l, c, s, h);
      var v = (a ? l : c).options.group.name;
      return r === !0 || typeof r == "string" && r === v || r.join && r.indexOf(v) > -1;
    };
  }
  var n = {}, o = t.group;
  (!o || kt(o) != "object") && (o = {
    name: o
  }), n.name = o.name, n.checkPull = e(o.pull, !0), n.checkPut = e(o.put), n.revertClone = o.revertClone, t.group = n;
}, xe = function() {
  !Oe && T && S(T, "display", "none");
}, Fe = function() {
  !Oe && T && S(T, "display", "");
};
zt && !Ee && document.addEventListener("click", function(i) {
  if (Xt)
    return i.preventDefault(), i.stopPropagation && i.stopPropagation(), i.stopImmediatePropagation && i.stopImmediatePropagation(), Xt = !1, !1;
}, !0);
var st = function(t) {
  if (m) {
    t = t.touches ? t.touches[0] : t;
    var e = Qe(t.clientX, t.clientY);
    if (e) {
      var n = {};
      for (var o in t)
        t.hasOwnProperty(o) && (n[o] = t[o]);
      n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[G]._onDragOver(n);
    }
  }
}, Je = function(t) {
  m && m.parentNode[G]._isOutsideThisEl(t.target);
};
function C(i, t) {
  if (!(i && i.nodeType && i.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(i));
  this.el = i, this.options = t = K({}, t), i[G] = this;
  var e = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(i.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Ie(i, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: C.supportPointer !== !1 && "PointerEvent" in window && !St,
    emptyInsertThreshold: 5
  };
  Pt.initializePlugins(this, i, e);
  for (var n in e)
    !(n in t) && (t[n] = e[n]);
  Pe(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Ve, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? I(i, "pointerdown", this._onTapStart) : (I(i, "mousedown", this._onTapStart), I(i, "touchstart", this._onTapStart)), this.nativeDraggable && (I(i, "dragover", this), I(i, "dragenter", this)), qt.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), K(this, Ge());
}
C.prototype = /** @lends Sortable.prototype */
{
  constructor: C,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (ft = null);
  },
  _getDirection: function(t, e) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, e, m) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var e = this, n = this.el, o = this.options, r = o.preventOnFilter, a = t.type, l = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, c = (l || t).target, s = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || c, h = o.filter;
      if (ln(n), !m && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !s.isContentEditable && !(!this.nativeDraggable && St && c && c.tagName.toUpperCase() === "SELECT") && (c = U(c, o.draggable, n, !1), !(c && c.animated) && Lt !== c)) {
        if (pt = z(c), Tt = z(c, o.draggable), typeof h == "function") {
          if (h.call(this, t, c, this)) {
            H({
              sortable: e,
              rootEl: s,
              name: "filter",
              targetEl: c,
              toEl: n,
              fromEl: n
            }), X("filter", e, {
              evt: t
            }), r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (h && (h = h.split(",").some(function(d) {
          if (d = U(s, d.trim(), n, !1), d)
            return H({
              sortable: e,
              rootEl: d,
              name: "filter",
              targetEl: c,
              fromEl: n,
              toEl: n
            }), X("filter", e, {
              evt: t
            }), !0;
        }), h)) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        o.handle && !U(s, o.handle, n, !1) || this._prepareDragStart(t, l, c);
      }
    }
  },
  _prepareDragStart: function(t, e, n) {
    var o = this, r = o.el, a = o.options, l = r.ownerDocument, c;
    if (n && !m && n.parentNode === r) {
      var s = L(n);
      if (x = r, m = n, M = m.parentNode, ut = m.nextSibling, Lt = n, Ft = a.group, C.dragged = m, lt = {
        target: m,
        clientX: (e || t).clientX,
        clientY: (e || t).clientY
      }, ge = lt.clientX - s.left, ve = lt.clientY - s.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, m.style["will-change"] = "all", c = function() {
        if (X("delayEnded", o, {
          evt: t
        }), C.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !fe && o.nativeDraggable && (m.draggable = !0), o._triggerDragStart(t, e), H({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), q(m, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(h) {
        Se(m, h.trim(), Qt);
      }), I(l, "dragover", st), I(l, "mousemove", st), I(l, "touchmove", st), I(l, "mouseup", o._onDrop), I(l, "touchend", o._onDrop), I(l, "touchcancel", o._onDrop), fe && this.nativeDraggable && (this.options.touchStartThreshold = 4, m.draggable = !0), X("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || e) && (!this.nativeDraggable || !(It || tt))) {
        if (C.eventCanceled) {
          this._onDrop();
          return;
        }
        I(l, "mouseup", o._disableDelayedDrag), I(l, "touchend", o._disableDelayedDrag), I(l, "touchcancel", o._disableDelayedDrag), I(l, "mousemove", o._delayedDragTouchMoveHandler), I(l, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && I(l, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(c, a.delay);
      } else
        c();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    m && Qt(m), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    O(t, "mouseup", this._disableDelayedDrag), O(t, "touchend", this._disableDelayedDrag), O(t, "touchcancel", this._disableDelayedDrag), O(t, "mousemove", this._delayedDragTouchMoveHandler), O(t, "touchmove", this._delayedDragTouchMoveHandler), O(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, e) {
    e = e || t.pointerType == "touch" && t, !this.nativeDraggable || e ? this.options.supportPointer ? I(document, "pointermove", this._onTouchMove) : e ? I(document, "touchmove", this._onTouchMove) : I(document, "mousemove", this._onTouchMove) : (I(m, "dragend", this), I(x, "dragstart", this._onDragStart));
    try {
      document.selection ? jt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, e) {
    if (ht = !1, x && m) {
      X("dragStarted", this, {
        evt: e
      }), this.nativeDraggable && I(document, "dragover", Je);
      var n = this.options;
      !t && q(m, n.dragClass, !1), q(m, n.ghostClass, !0), C.active = this, t && this._appendGhost(), H({
        sortable: this,
        name: "start",
        originalEvent: e
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (W) {
      this._lastX = W.clientX, this._lastY = W.clientY, xe();
      for (var t = document.elementFromPoint(W.clientX, W.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(W.clientX, W.clientY), t !== e); )
        e = t;
      if (m.parentNode[G]._isOutsideThisEl(t), e)
        do {
          if (e[G]) {
            var n = void 0;
            if (n = e[G]._onDragOver({
              clientX: W.clientX,
              clientY: W.clientY,
              target: t,
              rootEl: e
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = e;
        } while (e = e.parentNode);
      Fe();
    }
  },
  _onTouchMove: function(t) {
    if (lt) {
      var e = this.options, n = e.fallbackTolerance, o = e.fallbackOffset, r = t.touches ? t.touches[0] : t, a = T && mt(T, !0), l = T && a && a.a, c = T && a && a.d, s = At && j && me(j), h = (r.clientX - lt.clientX + o.x) / (l || 1) + (s ? s[0] - Zt[0] : 0) / (l || 1), d = (r.clientY - lt.clientY + o.y) / (c || 1) + (s ? s[1] - Zt[1] : 0) / (c || 1);
      if (!C.active && !ht) {
        if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (T) {
        a ? (a.e += h - ($t || 0), a.f += d - (Vt || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: h,
          f: d
        };
        var v = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        S(T, "webkitTransform", v), S(T, "mozTransform", v), S(T, "msTransform", v), S(T, "transform", v), $t = h, Vt = d, W = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!T) {
      var t = this.options.fallbackOnBody ? document.body : x, e = L(m, !0, At, !0, t), n = this.options;
      if (At) {
        for (j = t; S(j, "position") === "static" && S(j, "transform") === "none" && j !== document; )
          j = j.parentNode;
        j !== document.body && j !== document.documentElement ? (j === document && (j = $()), e.top += j.scrollTop, e.left += j.scrollLeft) : j = $(), Zt = me(j);
      }
      T = m.cloneNode(!0), q(T, n.ghostClass, !1), q(T, n.fallbackClass, !0), q(T, n.dragClass, !0), S(T, "transition", ""), S(T, "transform", ""), S(T, "box-sizing", "border-box"), S(T, "margin", 0), S(T, "top", e.top), S(T, "left", e.left), S(T, "width", e.width), S(T, "height", e.height), S(T, "opacity", "0.8"), S(T, "position", At ? "absolute" : "fixed"), S(T, "zIndex", "100000"), S(T, "pointerEvents", "none"), C.ghost = T, t.appendChild(T), S(T, "transform-origin", ge / parseInt(T.style.width) * 100 + "% " + ve / parseInt(T.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, e) {
    var n = this, o = t.dataTransfer, r = n.options;
    if (X("dragStart", this, {
      evt: t
    }), C.eventCanceled) {
      this._onDrop();
      return;
    }
    X("setupClone", this), C.eventCanceled || (F = De(m), F.removeAttribute("id"), F.draggable = !1, F.style["will-change"] = "", this._hideClone(), q(F, this.options.chosenClass, !1), C.clone = F), n.cloneId = jt(function() {
      X("clone", n), !C.eventCanceled && (n.options.removeCloneOnHide || x.insertBefore(F, m), n._hideClone(), H({
        sortable: n,
        name: "clone"
      }));
    }), !e && q(m, r.dragClass, !0), e ? (Xt = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (O(document, "mouseup", n._onDrop), O(document, "touchend", n._onDrop), O(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(n, o, m)), I(document, "drop", n), S(m, "transform", "translateZ(0)")), ht = !0, n._dragStartId = jt(n._dragStarted.bind(n, e, t)), I(document, "selectstart", n), wt = !0, St && S(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var e = this.el, n = t.target, o, r, a, l = this.options, c = l.group, s = C.active, h = Ft === c, d = l.sort, v = R || s, y, b = this, u = !1;
    if (ne)
      return;
    function f(bt, Ne) {
      X(bt, b, V({
        evt: t,
        isOwner: h,
        axis: y ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: r,
        canSort: d,
        fromSortable: v,
        target: n,
        completed: p,
        onMove: function(ce, ke) {
          return Nt(x, e, m, o, ce, L(ce), t, ke);
        },
        changed: _
      }, Ne));
    }
    function g() {
      f("dragOverAnimationCapture"), b.captureAnimationState(), b !== v && v.captureAnimationState();
    }
    function p(bt) {
      return f("dragOverCompleted", {
        insertion: bt
      }), bt && (h ? s._hideClone() : s._showClone(b), b !== v && (q(m, R ? R.options.ghostClass : s.options.ghostClass, !1), q(m, l.ghostClass, !0)), R !== b && b !== C.active ? R = b : b === C.active && R && (R = null), v === b && (b._ignoreWhileAnimating = n), b.animateAll(function() {
        f("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== v && (v.animateAll(), v._ignoreWhileAnimating = null)), (n === m && !m.animated || n === e && !n.animated) && (ft = null), !l.dragoverBubble && !t.rootEl && n !== document && (m.parentNode[G]._isOutsideThisEl(t.target), !bt && st(t)), !l.dragoverBubble && t.stopPropagation && t.stopPropagation(), u = !0;
    }
    function _() {
      Y = z(m), it = z(m, l.draggable), H({
        sortable: b,
        name: "change",
        toEl: e,
        newIndex: Y,
        newDraggableIndex: it,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = U(n, l.draggable, e, !0), f("dragOver"), C.eventCanceled)
      return u;
    if (m.contains(t.target) || n.animated && n.animatingX && n.animatingY || b._ignoreWhileAnimating === n)
      return p(!1);
    if (Xt = !1, s && !l.disabled && (h ? d || (a = M !== x) : R === this || (this.lastPutMode = Ft.checkPull(this, s, m, t)) && c.checkPut(this, s, m, t))) {
      if (y = this._getDirection(t, n) === "vertical", o = L(m), f("dragOverValid"), C.eventCanceled)
        return u;
      if (a)
        return M = x, g(), this._hideClone(), f("revert"), C.eventCanceled || (ut ? x.insertBefore(m, ut) : x.appendChild(m)), p(!0);
      var w = ae(e, l.draggable);
      if (!w || nn(t, y, this) && !w.animated) {
        if (w === m)
          return p(!1);
        if (w && e === t.target && (n = w), n && (r = L(n)), Nt(x, e, m, o, n, r, t, !!n) !== !1)
          return g(), w && w.nextSibling ? e.insertBefore(m, w.nextSibling) : e.appendChild(m), M = e, _(), p(!0);
      } else if (w && en(t, y, this)) {
        var E = gt(e, 0, l, !0);
        if (E === m)
          return p(!1);
        if (n = E, r = L(n), Nt(x, e, m, o, n, r, t, !1) !== !1)
          return g(), e.insertBefore(m, E), M = e, _(), p(!0);
      } else if (n.parentNode === e) {
        r = L(n);
        var D = 0, k, A = m.parentNode !== e, P = !Ze(m.animated && m.toRect || o, n.animated && n.toRect || r, y), Z = y ? "top" : "left", et = pe(n, "top", "top") || pe(m, "top", "top"), vt = et ? et.scrollTop : void 0;
        ft !== n && (k = r[Z], Ot = !1, Mt = !P && l.invertSwap || A), D = on(t, n, r, y, P ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Mt, ft === n);
        var Q;
        if (D !== 0) {
          var at = z(m);
          do
            at -= D, Q = M.children[at];
          while (Q && (S(Q, "display") === "none" || Q === T));
        }
        if (D === 0 || Q === n)
          return p(!1);
        ft = n, Dt = D;
        var yt = n.nextElementSibling, nt = !1;
        nt = D === 1;
        var xt = Nt(x, e, m, o, n, r, t, nt);
        if (xt !== !1)
          return (xt === 1 || xt === -1) && (nt = xt === 1), ne = !0, setTimeout(tn, 30), g(), nt && !yt ? e.appendChild(m) : n.parentNode.insertBefore(m, nt ? yt : n), et && Te(et, 0, vt - et.scrollTop), M = m.parentNode, k !== void 0 && !Mt && (Rt = Math.abs(k - L(n)[Z])), _(), p(!0);
      }
      if (e.contains(m))
        return p(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    O(document, "mousemove", this._onTouchMove), O(document, "touchmove", this._onTouchMove), O(document, "pointermove", this._onTouchMove), O(document, "dragover", st), O(document, "mousemove", st), O(document, "touchmove", st);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    O(t, "mouseup", this._onDrop), O(t, "touchend", this._onDrop), O(t, "pointerup", this._onDrop), O(t, "touchcancel", this._onDrop), O(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var e = this.el, n = this.options;
    if (Y = z(m), it = z(m, n.draggable), X("drop", this, {
      evt: t
    }), M = m && m.parentNode, Y = z(m), it = z(m, n.draggable), C.eventCanceled) {
      this._nulling();
      return;
    }
    ht = !1, Mt = !1, Ot = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ie(this.cloneId), ie(this._dragStartId), this.nativeDraggable && (O(document, "drop", this), O(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), St && S(document.body, "user-select", ""), S(m, "transform", ""), t && (wt && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), T && T.parentNode && T.parentNode.removeChild(T), (x === M || R && R.lastPutMode !== "clone") && F && F.parentNode && F.parentNode.removeChild(F), m && (this.nativeDraggable && O(m, "dragend", this), Qt(m), m.style["will-change"] = "", wt && !ht && q(m, R ? R.options.ghostClass : this.options.ghostClass, !1), q(m, this.options.chosenClass, !1), H({
      sortable: this,
      name: "unchoose",
      toEl: M,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), x !== M ? (Y >= 0 && (H({
      rootEl: M,
      name: "add",
      toEl: M,
      fromEl: x,
      originalEvent: t
    }), H({
      sortable: this,
      name: "remove",
      toEl: M,
      originalEvent: t
    }), H({
      rootEl: M,
      name: "sort",
      toEl: M,
      fromEl: x,
      originalEvent: t
    }), H({
      sortable: this,
      name: "sort",
      toEl: M,
      originalEvent: t
    })), R && R.save()) : Y !== pt && Y >= 0 && (H({
      sortable: this,
      name: "update",
      toEl: M,
      originalEvent: t
    }), H({
      sortable: this,
      name: "sort",
      toEl: M,
      originalEvent: t
    })), C.active && ((Y == null || Y === -1) && (Y = pt, it = Tt), H({
      sortable: this,
      name: "end",
      toEl: M,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    X("nulling", this), x = m = M = T = ut = F = Lt = ot = lt = W = wt = Y = it = pt = Tt = ft = Dt = R = Ft = C.dragged = C.ghost = C.clone = C.active = null, Yt.forEach(function(t) {
      t.checked = !0;
    }), Yt.length = $t = Vt = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        m && (this._onDragOver(t), Ke(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], e, n = this.el.children, o = 0, r = n.length, a = this.options; o < r; o++)
      e = n[o], U(e, a.draggable, this.el, !1) && t.push(e.getAttribute(a.dataIdAttr) || an(e));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, e) {
    var n = {}, o = this.el;
    this.toArray().forEach(function(r, a) {
      var l = o.children[a];
      U(l, this.options.draggable, o, !1) && (n[r] = l);
    }, this), e && this.captureAnimationState(), t.forEach(function(r) {
      n[r] && (o.removeChild(n[r]), o.appendChild(n[r]));
    }), e && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, e) {
    return U(t, e || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, e) {
    var n = this.options;
    if (e === void 0)
      return n[t];
    var o = Pt.modifyOption(this, t, e);
    typeof o < "u" ? n[t] = o : n[t] = e, t === "group" && Pe(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    X("destroy", this);
    var t = this.el;
    t[G] = null, O(t, "mousedown", this._onTapStart), O(t, "touchstart", this._onTapStart), O(t, "pointerdown", this._onTapStart), this.nativeDraggable && (O(t, "dragover", this), O(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(e) {
      e.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), qt.splice(qt.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!ot) {
      if (X("hideClone", this), C.eventCanceled)
        return;
      S(F, "display", "none"), this.options.removeCloneOnHide && F.parentNode && F.parentNode.removeChild(F), ot = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ot) {
      if (X("showClone", this), C.eventCanceled)
        return;
      m.parentNode == x && !this.options.group.revertClone ? x.insertBefore(F, m) : ut ? x.insertBefore(F, ut) : x.appendChild(F), this.options.group.revertClone && this.animate(m, F), S(F, "display", ""), ot = !1;
    }
  }
};
function Ke(i) {
  i.dataTransfer && (i.dataTransfer.dropEffect = "move"), i.cancelable && i.preventDefault();
}
function Nt(i, t, e, n, o, r, a, l) {
  var c, s = i[G], h = s.options.onMove, d;
  return window.CustomEvent && !tt && !It ? c = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (c = document.createEvent("Event"), c.initEvent("move", !0, !0)), c.to = t, c.from = i, c.dragged = e, c.draggedRect = n, c.related = o || t, c.relatedRect = r || L(t), c.willInsertAfter = l, c.originalEvent = a, i.dispatchEvent(c), h && (d = h.call(s, c, a)), d;
}
function Qt(i) {
  i.draggable = !1;
}
function tn() {
  ne = !1;
}
function en(i, t, e) {
  var n = L(gt(e.el, 0, e.options, !0)), o = 10;
  return t ? i.clientX < n.left - o || i.clientY < n.top && i.clientX < n.right : i.clientY < n.top - o || i.clientY < n.bottom && i.clientX < n.left;
}
function nn(i, t, e) {
  var n = L(ae(e.el, e.options.draggable)), o = 10;
  return t ? i.clientX > n.right + o || i.clientX <= n.right && i.clientY > n.bottom && i.clientX >= n.left : i.clientX > n.right && i.clientY > n.top || i.clientX <= n.right && i.clientY > n.bottom + o;
}
function on(i, t, e, n, o, r, a, l) {
  var c = n ? i.clientY : i.clientX, s = n ? e.height : e.width, h = n ? e.top : e.left, d = n ? e.bottom : e.right, v = !1;
  if (!a) {
    if (l && Rt < s * o) {
      if (!Ot && (Dt === 1 ? c > h + s * r / 2 : c < d - s * r / 2) && (Ot = !0), Ot)
        v = !0;
      else if (Dt === 1 ? c < h + Rt : c > d - Rt)
        return -Dt;
    } else if (c > h + s * (1 - o) / 2 && c < d - s * (1 - o) / 2)
      return rn(t);
  }
  return v = v || a, v && (c < h + s * r / 2 || c > d - s * r / 2) ? c > h + s / 2 ? 1 : -1 : 0;
}
function rn(i) {
  return z(m) < z(i) ? 1 : -1;
}
function an(i) {
  for (var t = i.tagName + i.className + i.src + i.href + i.textContent, e = t.length, n = 0; e--; )
    n += t.charCodeAt(e);
  return n.toString(36);
}
function ln(i) {
  Yt.length = 0;
  for (var t = i.getElementsByTagName("input"), e = t.length; e--; ) {
    var n = t[e];
    n.checked && Yt.push(n);
  }
}
function jt(i) {
  return setTimeout(i, 0);
}
function ie(i) {
  return clearTimeout(i);
}
zt && I(document, "touchmove", function(i) {
  (C.active || ht) && i.cancelable && i.preventDefault();
});
C.utils = {
  on: I,
  off: O,
  css: S,
  find: Se,
  is: function(t, e) {
    return !!U(t, e, t, !1);
  },
  extend: qe,
  throttle: Ce,
  closest: U,
  toggleClass: q,
  clone: De,
  index: z,
  nextTick: jt,
  cancelNextTick: ie,
  detectDirection: Ie,
  getChild: gt
};
C.get = function(i) {
  return i[G];
};
C.mount = function() {
  for (var i = arguments.length, t = new Array(i), e = 0; e < i; e++)
    t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (C.utils = V(V({}, C.utils), n.utils)), Pt.mount(n);
  });
};
C.create = function(i, t) {
  return new C(i, t);
};
C.version = He;
var N = [], Et, oe, re = !1, Jt, Kt, Gt, _t;
function sn() {
  function i() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return i.prototype = {
    dragStarted: function(e) {
      var n = e.originalEvent;
      this.sortable.nativeDraggable ? I(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? I(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? I(document, "touchmove", this._handleFallbackAutoScroll) : I(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(e) {
      var n = e.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? O(document, "dragover", this._handleAutoScroll) : (O(document, "pointermove", this._handleFallbackAutoScroll), O(document, "touchmove", this._handleFallbackAutoScroll), O(document, "mousemove", this._handleFallbackAutoScroll)), be(), Ht(), Ye();
    },
    nulling: function() {
      Gt = oe = Et = re = _t = Jt = Kt = null, N.length = 0;
    },
    _handleFallbackAutoScroll: function(e) {
      this._handleAutoScroll(e, !0);
    },
    _handleAutoScroll: function(e, n) {
      var o = this, r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = document.elementFromPoint(r, a);
      if (Gt = e, n || this.options.forceAutoScrollFallback || It || tt || St) {
        te(e, this.options, l, n);
        var c = rt(l, !0);
        re && (!_t || r !== Jt || a !== Kt) && (_t && be(), _t = setInterval(function() {
          var s = rt(document.elementFromPoint(r, a), !0);
          s !== c && (c = s, Ht()), te(e, o.options, s, n);
        }, 10), Jt = r, Kt = a);
      } else {
        if (!this.options.bubbleScroll || rt(l, !0) === $()) {
          Ht();
          return;
        }
        te(e, this.options, rt(l, !1), !1);
      }
    }
  }, K(i, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Ht() {
  N.forEach(function(i) {
    clearInterval(i.pid);
  }), N = [];
}
function be() {
  clearInterval(_t);
}
var te = Ce(function(i, t, e, n) {
  if (t.scroll) {
    var o = (i.touches ? i.touches[0] : i).clientX, r = (i.touches ? i.touches[0] : i).clientY, a = t.scrollSensitivity, l = t.scrollSpeed, c = $(), s = !1, h;
    oe !== e && (oe = e, Ht(), Et = t.scroll, h = t.scrollFn, Et === !0 && (Et = rt(e, !0)));
    var d = 0, v = Et;
    do {
      var y = v, b = L(y), u = b.top, f = b.bottom, g = b.left, p = b.right, _ = b.width, w = b.height, E = void 0, D = void 0, k = y.scrollWidth, A = y.scrollHeight, P = S(y), Z = y.scrollLeft, et = y.scrollTop;
      y === c ? (E = _ < k && (P.overflowX === "auto" || P.overflowX === "scroll" || P.overflowX === "visible"), D = w < A && (P.overflowY === "auto" || P.overflowY === "scroll" || P.overflowY === "visible")) : (E = _ < k && (P.overflowX === "auto" || P.overflowX === "scroll"), D = w < A && (P.overflowY === "auto" || P.overflowY === "scroll"));
      var vt = E && (Math.abs(p - o) <= a && Z + _ < k) - (Math.abs(g - o) <= a && !!Z), Q = D && (Math.abs(f - r) <= a && et + w < A) - (Math.abs(u - r) <= a && !!et);
      if (!N[d])
        for (var at = 0; at <= d; at++)
          N[at] || (N[at] = {});
      (N[d].vx != vt || N[d].vy != Q || N[d].el !== y) && (N[d].el = y, N[d].vx = vt, N[d].vy = Q, clearInterval(N[d].pid), (vt != 0 || Q != 0) && (s = !0, N[d].pid = setInterval((function() {
        n && this.layer === 0 && C.active._onTouchMove(Gt);
        var yt = N[this.layer].vy ? N[this.layer].vy * l : 0, nt = N[this.layer].vx ? N[this.layer].vx * l : 0;
        typeof h == "function" && h.call(C.dragged.parentNode[G], nt, yt, i, Gt, N[this.layer].el) !== "continue" || Te(N[this.layer].el, nt, yt);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && v !== c && (v = rt(v, !1)));
    re = s;
  }
}, 30), Me = function(t) {
  var e = t.originalEvent, n = t.putSortable, o = t.dragEl, r = t.activeSortable, a = t.dispatchSortableEvent, l = t.hideGhostForTarget, c = t.unhideGhostForTarget;
  if (e) {
    var s = n || r;
    l();
    var h = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, d = document.elementFromPoint(h.clientX, h.clientY);
    c(), s && !s.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: o,
      putSortable: n
    }));
  }
};
function le() {
}
le.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var e = t.oldDraggableIndex;
    this.startIndex = e;
  },
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var o = gt(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(e, o) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Me
};
K(le, {
  pluginName: "revertOnSpill"
});
function se() {
}
se.prototype = {
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable, o = n || this.sortable;
    o.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), o.animateAll();
  },
  drop: Me
};
K(se, {
  pluginName: "removeOnSpill"
});
C.mount(new sn());
C.mount(se, le);
const un = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/></svg>', cn = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>';
class ct {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: t, config: e, onSelectFile: n, onDeleteFile: o, onMoveFile: r, readOnly: a }) {
    this.api = t, this.config = e, this.onSelectFile = n, this.onDeleteFile = o, this.onMoveFile = r, this.readOnly = a, this.nodes = {
      wrapper: B("div", [this.CSS.baseClass, this.CSS.wrapper]),
      fileButton: this.createFileButton(),
      container: B("div", this.CSS.container),
      itemsContainer: B("div", this.CSS.itemsContainer),
      controls: B("div", this.CSS.controls),
      preloaderContainer: B("div", this.CSS.preloaderContainer),
      caption: B("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      }),
      tuneTitle: this.createTuneTitle()
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.controls.appendChild(this.nodes.preloaderContainer), this.config.maxElementCount && (this.nodes.limitCounter = B("div", this.CSS.limitCounter), this.nodes.controls.appendChild(this.nodes.limitCounter)), this.nodes.controls.appendChild(this.nodes.fileButton), this.nodes.container.appendChild(this.nodes.itemsContainer), this.nodes.container.appendChild(this.nodes.controls), this.nodes.wrapper.appendChild(this.nodes.tuneTitle), this.nodes.wrapper.appendChild(this.nodes.container), this.nodes.wrapper.appendChild(this.nodes.caption), ["dragenter", "dragover", "dragleave", "drop"].forEach((l) => {
      this.nodes.itemsContainer.addEventListener(l, function(c) {
        c.preventDefault(), c.stopPropagation();
      }, !1);
    });
  }
  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-gallery",
      container: "image-gallery__container",
      controls: "image-gallery__controls",
      itemsContainer: "image-gallery__items",
      imageContainer: "image-gallery__image",
      preloaderContainer: "image-gallery__preloaders",
      imagePreloader: "image-gallery__preloader",
      imageEl: "image-gallery__image-picture",
      trashButton: "image-gallery__image-trash",
      caption: "image-gallery__caption",
      tuneName: "image-gallery__tune-name"
    };
  }
  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: "empty",
      UPLOADING: "loading",
      FILLED: "filled"
    };
  }
  /**
   * Renders tool UI
   *
   * @param {MakerMediaData} toolData - saved tool data
   * @returns {Element}
   */
  render(t) {
    return this.nodes.wrapper;
  }
  onRendered() {
    this.sortable || (this.sortable = new C(this.nodes.itemsContainer, {
      handle: `.${this.CSS.imageContainer}`,
      filter: `.${this.CSS.trashButton}`,
      onStart: () => {
        this.nodes.itemsContainer.classList.add(`${this.CSS.itemsContainer}--drag`);
      },
      onEnd: (t) => {
        this.nodes.itemsContainer.classList.remove(`${this.CSS.itemsContainer}--drag`), t.oldIndex !== t.newIndex && this.onMoveFile(t.oldIndex, t.newIndex);
      }
    }));
  }
  createTuneTitle() {
    const t = B("h4", [this.CSS.tuneName]);
    return t.innerHTML = "Gallery or Slider", t;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const t = B("div", [this.CSS.button]);
    return t.innerHTML = this.config.buttonContent || `${un} ${this.api.i18n.t("Select an Image")}`, t.addEventListener("click", () => {
      this.onSelectFile();
    }), t;
  }
  /**
   * Shows uploading button
   *
   * @returns {void}
   */
  showFileButton() {
    this.nodes.fileButton.style.display = "";
  }
  /**
   * Hide uploading button
   *
   * @returns {void}
   */
  hideFileButton() {
    this.nodes.fileButton.style.display = "none";
  }
  getPreloader(t) {
    let e = B("div", this.CSS.imagePreloader);
    this.nodes.preloaderContainer.append(e);
    const n = new FileReader();
    return n.readAsDataURL(t), n.onload = (o) => {
      e.style.backgroundImage = `url(${o.target.result})`;
    }, e;
  }
  removePreloader(t) {
    t.remove();
  }
  /**
   * Shows an image
   *
   * @param {MakerMediaDataFile} file - image file object
   * @returns {void}
   */
  appendImage(t) {
    let e = t.url;
    const n = /\.mp4$/.test(e) ? "VIDEO" : "IMG", o = {
      src: e
    };
    let r = "load";
    n === "VIDEO" && (o.autoplay = !1, o.muted = !0, o.playsinline = !0, r = "loadeddata");
    let a = B("div", [this.CSS.imageContainer]), l = B(n, this.CSS.imageEl, o);
    l.addEventListener(r, () => {
      this.toggleStatus(a, ct.status.FILLED);
    }), a.appendChild(l);
    const c = this.api.i18n.t("Delete");
    let s = B("div", [this.CSS.trashButton], {
      innerHTML: cn,
      title: c
    });
    this.api.tooltip.onHover(s, c, {
      placement: "top"
    }), s.addEventListener("click", () => {
      this.api.tooltip.hide();
      let d = Array.prototype.slice.call(this.nodes.itemsContainer.children).indexOf(a);
      d !== -1 && (this.nodes.itemsContainer.removeChild(a), this.onDeleteFile(d));
    }), a.appendChild(s), this.nodes.itemsContainer.append(a);
  }
  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(t) {
    this.nodes.caption && (this.nodes.caption.innerHTML = t);
  }
  /**
   * Changes UI status
   *
   * @param {Element} elem
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(t, e) {
    for (const n in ct.status)
      Object.prototype.hasOwnProperty.call(ct.status, n) && t.classList.toggle(`${this.CSS.imageContainer}--${ct.status[n]}`, e === ct.status[n]);
  }
  /**
   * @param {int} imageCount
   * @param {int|null} limitCounter
   * @returns {void}
   */
  updateLimitCounter(t, e) {
    e && this.nodes.limitCounter && (t === 0 ? this.nodes.limitCounter.style.display = "none" : (this.nodes.limitCounter.style.display = null, this.nodes.limitCounter.innerText = `${t} / ${e}`));
  }
}
const B = function(t, e = null, n = {}) {
  const o = document.createElement(t);
  Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
  for (const r in n)
    o[r] = n[r];
  return o;
}, dn = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 -960 960 960"><path d="M142.309-220.001q-29.826 0-51.067-21.241-21.24-21.24-21.24-51.067v-375.382q0-29.827 21.24-51.067 21.241-21.241 51.067-21.241h375.383q29.827 0 51.067 21.241 21.24 21.24 21.24 51.067v375.382q0 29.827-21.24 51.067-21.24 21.241-51.067 21.241H142.309ZM706.343-520q-15.652 0-25.998-10.346-10.346-10.346-10.346-25.998v-147.311q0-15.651 10.346-25.997 10.346-10.347 25.998-10.347h147.311q15.652 0 25.998 10.347 10.346 10.346 10.346 25.997v147.311q0 15.652-10.346 25.998Q869.306-520 853.654-520H706.343Zm23.655-59.999h100.001V-680H729.998v100.001ZM142.309-280h375.383q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-375.382q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H142.309q-5.385 0-8.846 3.462-3.462 3.462-3.462 8.847v375.382q0 5.385 3.462 8.847 3.461 3.462 8.846 3.462Zm31.538-81.923h312.307l-101.153-135-75 100-55-73-81.154 108Zm532.496 141.922q-15.652 0-25.998-10.347-10.346-10.346-10.346-25.997v-147.311q0-15.652 10.346-25.998Q690.691-440 706.343-440h147.311q15.652 0 25.998 10.346 10.346 10.346 10.346 25.998v147.311q0 15.651-10.346 25.997-10.346 10.347-25.998 10.347H706.343ZM729.998-280h100.001v-100.001H729.998V-280Zm-599.997 0v-400 400Zm599.997-299.999V-680v100.001Zm0 299.999v-100.001V-280Z"/></svg>';
class ue {
  /**
   * @param {object} tune - image tool Tunes managers
   * @param {object} tune.api - Editor API
   * @param {object} tune.actions - list of user defined tunes
   * @param {Function} tune.onChange - tune toggling callback
   */
  constructor({ api: t, actions: e, onChange: n }) {
    this.api = t, this.actions = e, this.onChange = n, this.buttons = [];
  }
  /**
   * Available Image tunes
   *
   * @returns {{name: string, icon: string, title: string}[]}
   */
  static get tunes() {
    return [
      // {
      //   name: 'slider',
      //   icon: sliderIcon,
      //   title: 'Slider',
      // },
      {
        name: "gallery",
        icon: dn,
        title: "Gallery"
      }
    ];
  }
  /**
   * Styles
   *
   * @returns {{wrapper: string, buttonBase: *, button: string, buttonActive: *}}
   */
  get CSS() {
    return {
      wrapper: "image-gallery__tune-wrapper",
      buttonBase: this.api.styles.button,
      button: "image-gallery__tune",
      buttonActive: "active"
    };
  }
  /**
   * Makes buttons with tunes: add background, add border, stretch image
   *
   * @param {MakerMediaData} toolData - generate Elements of tunes
   * @returns {Element}
   */
  render(t) {
    const e = B("div", this.CSS.wrapper);
    return this.buttons = [], ue.tunes.concat(this.actions).forEach((o) => {
      const r = this.api.i18n.t(o.title), a = B("div", [this.CSS.buttonBase, this.CSS.button], {
        innerHTML: o.icon,
        title: r
      });
      a.addEventListener("click", () => {
        this.tuneClicked(o.name, o.action);
      }), a.dataset.tune = o.name, a.classList.toggle(this.CSS.buttonActive, t.style === o.name), this.buttons.push(a), this.api.tooltip.onHover(a, r, {
        placement: "top"
      }), e.appendChild(a);
    }), e;
  }
  /**
   * Clicks to one of the tunes
   *
   * @param {string} tuneName - clicked tune name
   * @param {Function} customFunction - function to execute on click
   */
  tuneClicked(t, e) {
    if (typeof e == "function" && !e(t))
      return !1;
    this.buttons.forEach((n) => {
      n.classList.toggle(this.CSS.buttonActive, n.dataset.tune === t);
    }), this.onChange(t);
  }
}
function fn(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ae = { exports: {} };
(function(i, t) {
  (function(e, n) {
    i.exports = n();
  })(window, function() {
    return function(e) {
      var n = {};
      function o(r) {
        if (n[r])
          return n[r].exports;
        var a = n[r] = { i: r, l: !1, exports: {} };
        return e[r].call(a.exports, a, a.exports, o), a.l = !0, a.exports;
      }
      return o.m = e, o.c = n, o.d = function(r, a, l) {
        o.o(r, a) || Object.defineProperty(r, a, { enumerable: !0, get: l });
      }, o.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
      }, o.t = function(r, a) {
        if (1 & a && (r = o(r)), 8 & a || 4 & a && typeof r == "object" && r && r.__esModule)
          return r;
        var l = /* @__PURE__ */ Object.create(null);
        if (o.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: r }), 2 & a && typeof r != "string")
          for (var c in r)
            o.d(l, c, (function(s) {
              return r[s];
            }).bind(null, c));
        return l;
      }, o.n = function(r) {
        var a = r && r.__esModule ? function() {
          return r.default;
        } : function() {
          return r;
        };
        return o.d(a, "a", a), a;
      }, o.o = function(r, a) {
        return Object.prototype.hasOwnProperty.call(r, a);
      }, o.p = "", o(o.s = 3);
    }([function(e, n) {
      var o;
      o = function() {
        return this;
      }();
      try {
        o = o || new Function("return this")();
      } catch {
        typeof window == "object" && (o = window);
      }
      e.exports = o;
    }, function(e, n, o) {
      (function(r) {
        var a = o(2), l = setTimeout;
        function c() {
        }
        function s(f) {
          if (!(this instanceof s))
            throw new TypeError("Promises must be constructed via new");
          if (typeof f != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(f, this);
        }
        function h(f, g) {
          for (; f._state === 3; )
            f = f._value;
          f._state !== 0 ? (f._handled = !0, s._immediateFn(function() {
            var p = f._state === 1 ? g.onFulfilled : g.onRejected;
            if (p !== null) {
              var _;
              try {
                _ = p(f._value);
              } catch (w) {
                return void v(g.promise, w);
              }
              d(g.promise, _);
            } else
              (f._state === 1 ? d : v)(g.promise, f._value);
          })) : f._deferreds.push(g);
        }
        function d(f, g) {
          try {
            if (g === f)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (g && (typeof g == "object" || typeof g == "function")) {
              var p = g.then;
              if (g instanceof s)
                return f._state = 3, f._value = g, void y(f);
              if (typeof p == "function")
                return void u((_ = p, w = g, function() {
                  _.apply(w, arguments);
                }), f);
            }
            f._state = 1, f._value = g, y(f);
          } catch (E) {
            v(f, E);
          }
          var _, w;
        }
        function v(f, g) {
          f._state = 2, f._value = g, y(f);
        }
        function y(f) {
          f._state === 2 && f._deferreds.length === 0 && s._immediateFn(function() {
            f._handled || s._unhandledRejectionFn(f._value);
          });
          for (var g = 0, p = f._deferreds.length; g < p; g++)
            h(f, f._deferreds[g]);
          f._deferreds = null;
        }
        function b(f, g, p) {
          this.onFulfilled = typeof f == "function" ? f : null, this.onRejected = typeof g == "function" ? g : null, this.promise = p;
        }
        function u(f, g) {
          var p = !1;
          try {
            f(function(_) {
              p || (p = !0, d(g, _));
            }, function(_) {
              p || (p = !0, v(g, _));
            });
          } catch (_) {
            if (p)
              return;
            p = !0, v(g, _);
          }
        }
        s.prototype.catch = function(f) {
          return this.then(null, f);
        }, s.prototype.then = function(f, g) {
          var p = new this.constructor(c);
          return h(this, new b(f, g, p)), p;
        }, s.prototype.finally = a.a, s.all = function(f) {
          return new s(function(g, p) {
            if (!f || f.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var _ = Array.prototype.slice.call(f);
            if (_.length === 0)
              return g([]);
            var w = _.length;
            function E(k, A) {
              try {
                if (A && (typeof A == "object" || typeof A == "function")) {
                  var P = A.then;
                  if (typeof P == "function")
                    return void P.call(A, function(Z) {
                      E(k, Z);
                    }, p);
                }
                _[k] = A, --w == 0 && g(_);
              } catch (Z) {
                p(Z);
              }
            }
            for (var D = 0; D < _.length; D++)
              E(D, _[D]);
          });
        }, s.resolve = function(f) {
          return f && typeof f == "object" && f.constructor === s ? f : new s(function(g) {
            g(f);
          });
        }, s.reject = function(f) {
          return new s(function(g, p) {
            p(f);
          });
        }, s.race = function(f) {
          return new s(function(g, p) {
            for (var _ = 0, w = f.length; _ < w; _++)
              f[_].then(g, p);
          });
        }, s._immediateFn = typeof r == "function" && function(f) {
          r(f);
        } || function(f) {
          l(f, 0);
        }, s._unhandledRejectionFn = function(f) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", f);
        }, n.a = s;
      }).call(this, o(5).setImmediate);
    }, function(e, n, o) {
      n.a = function(r) {
        var a = this.constructor;
        return this.then(function(l) {
          return a.resolve(r()).then(function() {
            return l;
          });
        }, function(l) {
          return a.resolve(r()).then(function() {
            return a.reject(l);
          });
        });
      };
    }, function(e, n, o) {
      function r(u) {
        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        })(u);
      }
      o(4);
      var a, l, c, s, h, d, v, y = o(8), b = (l = function(u) {
        return new Promise(function(f, g) {
          u = s(u), (u = h(u)).beforeSend && u.beforeSend();
          var p = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          p.open(u.method, u.url), p.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(u.headers).forEach(function(w) {
            var E = u.headers[w];
            p.setRequestHeader(w, E);
          });
          var _ = u.ratio;
          p.upload.addEventListener("progress", function(w) {
            var E = Math.round(w.loaded / w.total * 100), D = Math.ceil(E * _ / 100);
            u.progress(Math.min(D, 100));
          }, !1), p.addEventListener("progress", function(w) {
            var E = Math.round(w.loaded / w.total * 100), D = Math.ceil(E * (100 - _) / 100) + _;
            u.progress(Math.min(D, 100));
          }, !1), p.onreadystatechange = function() {
            if (p.readyState === 4) {
              var w = p.response;
              try {
                w = JSON.parse(w);
              } catch {
              }
              var E = y.parseHeaders(p.getAllResponseHeaders()), D = { body: w, code: p.status, headers: E };
              v(p.status) ? f(D) : g(D);
            }
          }, p.send(u.data);
        });
      }, c = function(u) {
        return u.method = "POST", l(u);
      }, s = function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (u.url && typeof u.url != "string")
          throw new Error("Url must be a string");
        if (u.url = u.url || "", u.method && typeof u.method != "string")
          throw new Error("`method` must be a string or null");
        if (u.method = u.method ? u.method.toUpperCase() : "GET", u.headers && r(u.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (u.headers = u.headers || {}, u.type && (typeof u.type != "string" || !Object.values(a).includes(u.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (u.progress && typeof u.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (u.progress = u.progress || function(f) {
        }, u.beforeSend = u.beforeSend || function(f) {
        }, u.ratio && typeof u.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (u.ratio < 0 || u.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (u.ratio = u.ratio || 90, u.accept && typeof u.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (u.accept = u.accept || "*/*", u.multiple && typeof u.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (u.multiple = u.multiple || !1, u.fieldName && typeof u.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return u.fieldName = u.fieldName || "files", u;
      }, h = function(u) {
        switch (u.method) {
          case "GET":
            var f = d(u.data, a.URLENCODED);
            delete u.data, u.url = /\?/.test(u.url) ? u.url + "&" + f : u.url + "?" + f;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var g = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || a.JSON;
            }(u);
            (y.isFormData(u.data) || y.isFormElement(u.data)) && (g = a.FORM), u.data = d(u.data, g), g !== b.contentType.FORM && (u.headers["content-type"] = g);
        }
        return u;
      }, d = function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case a.URLENCODED:
            return y.urlEncode(u);
          case a.JSON:
            return y.jsonEncode(u);
          case a.FORM:
            return y.formEncode(u);
          default:
            return u;
        }
      }, v = function(u) {
        return u >= 200 && u < 300;
      }, { contentType: a = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: l, get: function(u) {
        return u.method = "GET", l(u);
      }, post: c, transport: function(u) {
        return u = s(u), y.selectFiles(u).then(function(f) {
          for (var g = new FormData(), p = 0; p < f.length; p++)
            g.append(u.fieldName, f[p], f[p].name);
          y.isObject(u.data) && Object.keys(u.data).forEach(function(w) {
            var E = u.data[w];
            g.append(w, E);
          });
          var _ = u.beforeSend;
          return u.beforeSend = function() {
            return _(f);
          }, u.data = g, c(u);
        });
      }, selectFiles: function(u) {
        return delete (u = s(u)).beforeSend, y.selectFiles(u);
      } });
      e.exports = b;
    }, function(e, n, o) {
      o.r(n);
      var r = o(1);
      window.Promise = window.Promise || r.a;
    }, function(e, n, o) {
      (function(r) {
        var a = r !== void 0 && r || typeof self < "u" && self || window, l = Function.prototype.apply;
        function c(s, h) {
          this._id = s, this._clearFn = h;
        }
        n.setTimeout = function() {
          return new c(l.call(setTimeout, a, arguments), clearTimeout);
        }, n.setInterval = function() {
          return new c(l.call(setInterval, a, arguments), clearInterval);
        }, n.clearTimeout = n.clearInterval = function(s) {
          s && s.close();
        }, c.prototype.unref = c.prototype.ref = function() {
        }, c.prototype.close = function() {
          this._clearFn.call(a, this._id);
        }, n.enroll = function(s, h) {
          clearTimeout(s._idleTimeoutId), s._idleTimeout = h;
        }, n.unenroll = function(s) {
          clearTimeout(s._idleTimeoutId), s._idleTimeout = -1;
        }, n._unrefActive = n.active = function(s) {
          clearTimeout(s._idleTimeoutId);
          var h = s._idleTimeout;
          h >= 0 && (s._idleTimeoutId = setTimeout(function() {
            s._onTimeout && s._onTimeout();
          }, h));
        }, o(6), n.setImmediate = typeof self < "u" && self.setImmediate || r !== void 0 && r.setImmediate || this && this.setImmediate, n.clearImmediate = typeof self < "u" && self.clearImmediate || r !== void 0 && r.clearImmediate || this && this.clearImmediate;
      }).call(this, o(0));
    }, function(e, n, o) {
      (function(r, a) {
        (function(l, c) {
          if (!l.setImmediate) {
            var s, h, d, v, y, b = 1, u = {}, f = !1, g = l.document, p = Object.getPrototypeOf && Object.getPrototypeOf(l);
            p = p && p.setTimeout ? p : l, {}.toString.call(l.process) === "[object process]" ? s = function(E) {
              a.nextTick(function() {
                w(E);
              });
            } : function() {
              if (l.postMessage && !l.importScripts) {
                var E = !0, D = l.onmessage;
                return l.onmessage = function() {
                  E = !1;
                }, l.postMessage("", "*"), l.onmessage = D, E;
              }
            }() ? (v = "setImmediate$" + Math.random() + "$", y = function(E) {
              E.source === l && typeof E.data == "string" && E.data.indexOf(v) === 0 && w(+E.data.slice(v.length));
            }, l.addEventListener ? l.addEventListener("message", y, !1) : l.attachEvent("onmessage", y), s = function(E) {
              l.postMessage(v + E, "*");
            }) : l.MessageChannel ? ((d = new MessageChannel()).port1.onmessage = function(E) {
              w(E.data);
            }, s = function(E) {
              d.port2.postMessage(E);
            }) : g && "onreadystatechange" in g.createElement("script") ? (h = g.documentElement, s = function(E) {
              var D = g.createElement("script");
              D.onreadystatechange = function() {
                w(E), D.onreadystatechange = null, h.removeChild(D), D = null;
              }, h.appendChild(D);
            }) : s = function(E) {
              setTimeout(w, 0, E);
            }, p.setImmediate = function(E) {
              typeof E != "function" && (E = new Function("" + E));
              for (var D = new Array(arguments.length - 1), k = 0; k < D.length; k++)
                D[k] = arguments[k + 1];
              var A = { callback: E, args: D };
              return u[b] = A, s(b), b++;
            }, p.clearImmediate = _;
          }
          function _(E) {
            delete u[E];
          }
          function w(E) {
            if (f)
              setTimeout(w, 0, E);
            else {
              var D = u[E];
              if (D) {
                f = !0;
                try {
                  (function(k) {
                    var A = k.callback, P = k.args;
                    switch (P.length) {
                      case 0:
                        A();
                        break;
                      case 1:
                        A(P[0]);
                        break;
                      case 2:
                        A(P[0], P[1]);
                        break;
                      case 3:
                        A(P[0], P[1], P[2]);
                        break;
                      default:
                        A.apply(c, P);
                    }
                  })(D);
                } finally {
                  _(E), f = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, o(0), o(7));
    }, function(e, n) {
      var o, r, a = e.exports = {};
      function l() {
        throw new Error("setTimeout has not been defined");
      }
      function c() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(p) {
        if (o === setTimeout)
          return setTimeout(p, 0);
        if ((o === l || !o) && setTimeout)
          return o = setTimeout, setTimeout(p, 0);
        try {
          return o(p, 0);
        } catch {
          try {
            return o.call(null, p, 0);
          } catch {
            return o.call(this, p, 0);
          }
        }
      }
      (function() {
        try {
          o = typeof setTimeout == "function" ? setTimeout : l;
        } catch {
          o = l;
        }
        try {
          r = typeof clearTimeout == "function" ? clearTimeout : c;
        } catch {
          r = c;
        }
      })();
      var h, d = [], v = !1, y = -1;
      function b() {
        v && h && (v = !1, h.length ? d = h.concat(d) : y = -1, d.length && u());
      }
      function u() {
        if (!v) {
          var p = s(b);
          v = !0;
          for (var _ = d.length; _; ) {
            for (h = d, d = []; ++y < _; )
              h && h[y].run();
            y = -1, _ = d.length;
          }
          h = null, v = !1, function(w) {
            if (r === clearTimeout)
              return clearTimeout(w);
            if ((r === c || !r) && clearTimeout)
              return r = clearTimeout, clearTimeout(w);
            try {
              r(w);
            } catch {
              try {
                return r.call(null, w);
              } catch {
                return r.call(this, w);
              }
            }
          }(p);
        }
      }
      function f(p, _) {
        this.fun = p, this.array = _;
      }
      function g() {
      }
      a.nextTick = function(p) {
        var _ = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var w = 1; w < arguments.length; w++)
            _[w - 1] = arguments[w];
        d.push(new f(p, _)), d.length !== 1 || v || s(u);
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = g, a.addListener = g, a.once = g, a.off = g, a.removeListener = g, a.removeAllListeners = g, a.emit = g, a.prependListener = g, a.prependOnceListener = g, a.listeners = function(p) {
        return [];
      }, a.binding = function(p) {
        throw new Error("process.binding is not supported");
      }, a.cwd = function() {
        return "/";
      }, a.chdir = function(p) {
        throw new Error("process.chdir is not supported");
      }, a.umask = function() {
        return 0;
      };
    }, function(e, n, o) {
      function r(l, c) {
        for (var s = 0; s < c.length; s++) {
          var h = c[s];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, h.key, h);
        }
      }
      var a = o(9);
      e.exports = function() {
        function l() {
          (function(d, v) {
            if (!(d instanceof v))
              throw new TypeError("Cannot call a class as a function");
          })(this, l);
        }
        var c, s, h;
        return c = l, h = [{ key: "urlEncode", value: function(d) {
          return a(d);
        } }, { key: "jsonEncode", value: function(d) {
          return JSON.stringify(d);
        } }, { key: "formEncode", value: function(d) {
          if (this.isFormData(d))
            return d;
          if (this.isFormElement(d))
            return new FormData(d);
          if (this.isObject(d)) {
            var v = new FormData();
            return Object.keys(d).forEach(function(y) {
              var b = d[y];
              v.append(y, b);
            }), v;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        } }, { key: "isFormData", value: function(d) {
          return d instanceof FormData;
        } }, { key: "isFormElement", value: function(d) {
          return d instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(v, y) {
            var b = document.createElement("INPUT");
            b.type = "file", d.multiple && b.setAttribute("multiple", "multiple"), d.accept && b.setAttribute("accept", d.accept), b.style.display = "none", document.body.appendChild(b), b.addEventListener("change", function(u) {
              var f = u.target.files;
              v(f), document.body.removeChild(b);
            }, !1), b.click();
          });
        } }, { key: "parseHeaders", value: function(d) {
          var v = d.trim().split(/[\r\n]+/), y = {};
          return v.forEach(function(b) {
            var u = b.split(": "), f = u.shift(), g = u.join(": ");
            f && (y[f] = g);
          }), y;
        } }], (s = null) && r(c.prototype, s), h && r(c, h), l;
      }();
    }, function(e, n) {
      var o = function(a) {
        return encodeURIComponent(a).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, r = function(a, l, c, s) {
        return l = l || null, c = c || "&", s = s || null, a ? function(h) {
          for (var d = new Array(), v = 0; v < h.length; v++)
            h[v] && d.push(h[v]);
          return d;
        }(Object.keys(a).map(function(h) {
          var d, v, y = h;
          if (s && (y = s + "[" + y + "]"), typeof a[h] == "object" && a[h] !== null)
            d = r(a[h], null, c, y);
          else {
            l && (v = y, y = !isNaN(parseFloat(v)) && isFinite(v) ? l + Number(y) : y);
            var b = a[h];
            b = (b = (b = (b = b === !0 ? "1" : b) === !1 ? "0" : b) === 0 ? "0" : b) || "", d = o(y) + "=" + o(b);
          }
          return d;
        })).join(c).replace(/[!'()*]/g, "") : "";
      };
      e.exports = r;
    }]);
  });
})(Ae);
var hn = Ae.exports;
const ee = /* @__PURE__ */ fn(hn);
class pn {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   */
  constructor({ config: t }) {
    this.config = t;
  }
  /**
   * Handle clicks on the upload file button
   */
  uploadSelectedFiles(t, { onPreview: e, onUpload: n, onError: o }) {
    ee.selectFiles({
      accept: this.config.types,
      multiple: !0
    }).then((r) => {
      let a = 0;
      for (var l = 0; l < r.length && !(t !== null && a == t); l++) {
        a++;
        let c = r[l], s = e(c), h;
        if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
          const d = this.config.uploader.uploadByFile(c);
          mn(d) || console.warn("Custom uploader method uploadByFile should return a Promise"), h = d;
        } else
          h = this.uploadByFile(c);
        h.then((d) => {
          n(d, s);
        }).catch((d) => {
          o(d, s);
        });
      }
    });
  }
  /**
   * Default file uploader
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   */
  uploadByFile(t) {
    const e = new FormData();
    return e.append(this.config.field, t), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([n, o]) => {
      e.append(n, o);
    }), ee.post({
      url: this.config.endpoints.byFile,
      data: e,
      type: ee.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((n) => n.body);
  }
}
function mn(i) {
  return i && typeof i.then == "function";
}
/**
 * Maker Media Tool for the Editor.js
 *
 * @author Adam Patterson
 * @license MIT
 * @see {@link https://github.com/adampatterson/editorjs-media}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * gallery: {
 *   class: MakerMedia,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *     }
 *   },
 * },
 */
const gn = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20" viewBox="0 -960 960 960" width="20"><path d="M360-384h384L618-552l-90 120-66-88-102 136Zm-48 144q-29.7 0-50.85-21.15Q240-282.3 240-312v-480q0-29.7 21.15-50.85Q282.3-864 312-864h480q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H312Zm0-72h480v-480H312v480ZM168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-552h72v552h552v72H168Zm144-696v480-480Z"/></svg>';
class yn {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: gn,
      title: "Media"
    };
  }
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {MakerMediaData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   */
  constructor({ data: t, config: e, api: n, readOnly: o }) {
    this.api = n, this.readOnly = o, this.config = {
      endpoints: e.endpoints || "",
      additionalRequestData: e.additionalRequestData || {},
      additionalRequestHeaders: e.additionalRequestHeaders || {},
      field: e.field || "image",
      types: e.types || "image/*",
      captionPlaceholder: this.api.i18n.t(e.captionPlaceholder || "Gallery caption"),
      buttonContent: e.buttonContent || "",
      uploader: e.uploader || void 0,
      actions: e.actions || [],
      maxElementCount: e.maxElementCount || void 0
    }, this.uploader = new pn({
      config: this.config
    }), this.ui = new ct({
      api: n,
      config: this.config,
      onSelectFile: () => {
        let r = this.config.maxElementCount ? this.config.maxElementCount - this._data.files.length : null;
        this.uploader.uploadSelectedFiles(r, {
          onPreview: (a) => this.ui.getPreloader(a),
          onUpload: (a, l) => {
            this.onUpload(a, l);
          },
          onError: (a, l) => {
            this.uploadingFailed(a, l);
          }
        });
      },
      onDeleteFile: (r) => {
        this.deleteImage(r);
      },
      onMoveFile: (r, a) => {
        this.moveImage(r, a);
      },
      readOnly: o
    }), this.tunes = new ue({
      api: n,
      actions: this.config.actions,
      onChange: (r) => this.styleToggled(r)
    }), this._data = {}, this.data = t;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }
  rendered() {
    return this.checkMaxElemCount(), this.ui.onRendered();
  }
  /**
   * Validate data: check if Image exists
   *
   * @param {MakerMediaData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(t) {
    return !(!t.files || !t.files.length);
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {MakerMediaData}
   */
  save() {
    const t = this.ui.nodes.caption;
    return this._data.caption = t.innerHTML, this.data;
  }
  /**
   * Makes buttons with tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns {Element}
   */
  renderSettings() {
    return this.tunes.render(this.data);
  }
  /**
   * Set new image file
   *
   * @private
   *
   * @param {MakerMediaDataFile} file - uploaded file data
   */
  appendImage(t) {
    if (t && t.url) {
      if (this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount)
        return;
      this._data.files.push(t), this.ui.appendImage(t), this.checkMaxElemCount();
    }
  }
  /**
   * Move image file
   *
   * @private
   *
   * @param {integer} from - target image old index
   * @param {integer} to - target image new index
   */
  moveImage(t, e) {
    e >= this._data.files.length && (e = this._data.files.length - 1), this._data.files.splice(e, 0, this._data.files.splice(t, 1)[0]);
  }
  /**
   * Delete image file
   *
   * @private
   *
   * @param {integer} id - image index
   */
  deleteImage(t) {
    this._data.files[t] !== void 0 && (this._data.files.splice(t, 1), this.checkMaxElemCount());
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {MakerMediaData} data - data in Image Tool format
   */
  set data(t) {
    this._data.files = [], t.files && t.files.forEach((n) => {
      this.appendImage(n);
    });
    let e = t.style || "";
    this.styleToggled(e), this._data.caption = t.caption || "", this.ui.fillCaption(this._data.caption);
  }
  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {MakerMediaData}
   */
  get data() {
    return this._data;
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(t, e) {
    this.ui.removePreloader(e), t.success && t.file ? this.appendImage(t.file) : this.uploadingFailed("incorrect response: " + JSON.stringify(t));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(t, e) {
    this.ui.removePreloader(e), console.log("Image Tool: uploading failed because of", t), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    });
  }
  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  styleToggled(t) {
    t === "gallery" ? this._data.style = "gallery" : this._data.style = "slider";
  }
  checkMaxElemCount() {
    this.ui.updateLimitCounter(this._data.files.length, this.config.maxElementCount), this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount ? this.ui.hideFileButton() : this.ui.showFileButton();
  }
}
export {
  yn as default
};
