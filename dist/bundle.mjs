(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.image-gallery{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-gallery__container{background:black;margin-bottom:10px;padding:5px}.image-gallery__controls{display:flex;gap:10px;padding:8px 2px 3px}.image-gallery__items{display:grid;gap:10px;grid-template-columns:1fr 1fr 1fr;padding:10px;background-color:#222}.image-gallery__items:empty{display:none}.image-gallery__preloaders{display:flex;flex-grow:1;flex-wrap:nowrap;padding:5px;gap:8px;overflow:hidden}.image-gallery__preloader{min-width:30px;height:30px;border-radius:50%;background-size:cover;position:relative;background-color:var(--bg-color);background-position:center center}.image-gallery__preloader:after{content:"";position:absolute;z-index:3;width:30px;height:30px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-15px;margin-left:-15px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-gallery__image{position:relative;overflow:hidden;aspect-ratio:16 / 9;cursor:move;-webkit-user-select:none;user-select:none;background-color:#000;border-radius:3px;padding:5px}.image-gallery__image.sortable-ghost{opacity:.75}.image-gallery__image--empty,.image-gallery__image--loading{display:none}.image-gallery__image-picture{border-radius:3px;max-width:100%;height:100%;display:block;margin:auto;object-fit:cover;pointer-events:none}.image-gallery__image-trash{position:absolute;top:3px;right:3px;cursor:pointer;color:#fff;font-size:18px;background-color:#00000040;line-height:1;padding:6px 8px;border-radius:3px;transition:background-color .1s}.image-gallery__image-trash:hover{background-color:#00000080}.image-gallery__counter{display:flex;align-items:center;color:gray;font-size:14px;margin-right:6px}.image-gallery__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-gallery__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-gallery__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-gallery__caption{margin-bottom:10px}.image-gallery .cdx-button{height:40px;display:flex;align-items:center;justify-content:center;padding:12px;gap:5px;white-space:nowrap}.image-gallery__tune-wrapper{display:flex;gap:6px;margin:6px 0}.image-gallery__tune-wrapper:first-child{margin-top:0}.image-gallery__tune-wrapper:last-child{margin-bottom:0}.image-gallery__tune{flex-grow:1;padding:6px;color:var(--color-text-primary)}.image-gallery__tune.active{background:var(--color-background-icon-active);color:var(--color-text-icon-active);border-color:var(--color-text-icon-active)}.image-gallery__tune svg{width:24px;height:24px}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function dt(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(i, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function $(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? dt(Object(t), !0).forEach(function(n) {
      Lt(i, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : dt(Object(t)).forEach(function(n) {
      Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return i;
}
function ke(i) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ke = function(e) {
    return typeof e;
  } : ke = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ke(i);
}
function Lt(i, e, t) {
  return e in i ? Object.defineProperty(i, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[e] = t, i;
}
function K() {
  return K = Object.assign || function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
    }
    return i;
  }, K.apply(this, arguments);
}
function Rt(i, e) {
  if (i == null)
    return {};
  var t = {}, n = Object.keys(i), o, r;
  for (r = 0; r < n.length; r++)
    o = n[r], !(e.indexOf(o) >= 0) && (t[o] = i[o]);
  return t;
}
function jt(i, e) {
  if (i == null)
    return {};
  var t = Rt(i, e), n, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    for (o = 0; o < r.length; o++)
      n = r[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(i, n) && (t[n] = i[n]);
  }
  return t;
}
var Ht = "1.15.0";
function J(i) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(i);
}
var ee = J(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ie = J(/Edge/i), ft = J(/firefox/i), Se = J(/safari/i) && !J(/chrome/i) && !J(/android/i), wt = J(/iP(ad|od|hone)/i), Et = J(/chrome/i) && J(/android/i), _t = {
  capture: !1,
  passive: !1
};
function I(i, e, t) {
  i.addEventListener(e, t, !ee && _t);
}
function O(i, e, t) {
  i.removeEventListener(e, t, !ee && _t);
}
function qe(i, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), i)
      try {
        if (i.matches)
          return i.matches(e);
        if (i.msMatchesSelector)
          return i.msMatchesSelector(e);
        if (i.webkitMatchesSelector)
          return i.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function qt(i) {
  return i.host && i !== document && i.host.nodeType ? i.host : i.parentNode;
}
function Z(i, e, t, n) {
  if (i) {
    t = t || document;
    do {
      if (e != null && (e[0] === ">" ? i.parentNode === t && qe(i, e) : qe(i, e)) || n && i === t)
        return i;
      if (i === t)
        break;
    } while (i = qt(i));
  }
  return null;
}
var ht = /\s+/g;
function X(i, e, t) {
  if (i && e)
    if (i.classList)
      i.classList[t ? "add" : "remove"](e);
    else {
      var n = (" " + i.className + " ").replace(ht, " ").replace(" " + e + " ", " ");
      i.className = (n + (t ? " " + e : "")).replace(ht, " ");
    }
}
function S(i, e, t) {
  var n = i && i.style;
  if (n) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(i, "") : i.currentStyle && (t = i.currentStyle), e === void 0 ? t : t[e];
    !(e in n) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), n[e] = t + (typeof t == "string" ? "" : "px");
  }
}
function me(i, e) {
  var t = "";
  if (typeof i == "string")
    t = i;
  else
    do {
      var n = S(i, "transform");
      n && n !== "none" && (t = n + " " + t);
    } while (!e && (i = i.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(t);
}
function St(i, e, t) {
  if (i) {
    var n = i.getElementsByTagName(e), o = 0, r = n.length;
    if (t)
      for (; o < r; o++)
        t(n[o], o);
    return n;
  }
  return [];
}
function U() {
  var i = document.scrollingElement;
  return i || document.documentElement;
}
function L(i, e, t, n, o) {
  if (!(!i.getBoundingClientRect && i !== window)) {
    var r, a, l, c, s, h, d;
    if (i !== window && i.parentNode && i !== U() ? (r = i.getBoundingClientRect(), a = r.top, l = r.left, c = r.bottom, s = r.right, h = r.height, d = r.width) : (a = 0, l = 0, c = window.innerHeight, s = window.innerWidth, h = window.innerHeight, d = window.innerWidth), (e || t) && i !== window && (o = o || i.parentNode, !ee))
      do
        if (o && o.getBoundingClientRect && (S(o, "transform") !== "none" || t && S(o, "position") !== "static")) {
          var v = o.getBoundingClientRect();
          a -= v.top + parseInt(S(o, "border-top-width")), l -= v.left + parseInt(S(o, "border-left-width")), c = a + r.height, s = l + r.width;
          break;
        }
      while (o = o.parentNode);
    if (n && i !== window) {
      var y = me(o || i), b = y && y.a, u = y && y.d;
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
function pt(i, e, t) {
  for (var n = re(i, !0), o = L(i)[e]; n; ) {
    var r = L(n)[t], a = void 0;
    if (t === "top" || t === "left" ? a = o >= r : a = o <= r, !a)
      return n;
    if (n === U())
      break;
    n = re(n, !1);
  }
  return !1;
}
function ge(i, e, t, n) {
  for (var o = 0, r = 0, a = i.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== C.ghost && (n || a[r] !== C.dragged) && Z(a[r], t.draggable, i, !1)) {
      if (o === e)
        return a[r];
      o++;
    }
    r++;
  }
  return null;
}
function at(i, e) {
  for (var t = i.lastElementChild; t && (t === C.ghost || S(t, "display") === "none" || e && !qe(t, e)); )
    t = t.previousElementSibling;
  return t || null;
}
function z(i, e) {
  var t = 0;
  if (!i || !i.parentNode)
    return -1;
  for (; i = i.previousElementSibling; )
    i.nodeName.toUpperCase() !== "TEMPLATE" && i !== C.clone && (!e || qe(i, e)) && t++;
  return t;
}
function mt(i) {
  var e = 0, t = 0, n = U();
  if (i)
    do {
      var o = me(i), r = o.a, a = o.d;
      e += i.scrollLeft * r, t += i.scrollTop * a;
    } while (i !== n && (i = i.parentNode));
  return [e, t];
}
function Bt(i, e) {
  for (var t in i)
    if (i.hasOwnProperty(t)) {
      for (var n in e)
        if (e.hasOwnProperty(n) && e[n] === i[t][n])
          return Number(t);
    }
  return -1;
}
function re(i, e) {
  if (!i || !i.getBoundingClientRect)
    return U();
  var t = i, n = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var o = S(t);
      if (t.clientWidth < t.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body)
          return U();
        if (n || e)
          return t;
        n = !0;
      }
    }
  while (t = t.parentNode);
  return U();
}
function Xt(i, e) {
  if (i && e)
    for (var t in e)
      e.hasOwnProperty(t) && (i[t] = e[t]);
  return i;
}
function We(i, e) {
  return Math.round(i.top) === Math.round(e.top) && Math.round(i.left) === Math.round(e.left) && Math.round(i.height) === Math.round(e.height) && Math.round(i.width) === Math.round(e.width);
}
var Ce;
function Ct(i, e) {
  return function() {
    if (!Ce) {
      var t = arguments, n = this;
      t.length === 1 ? i.call(n, t[0]) : i.apply(n, t), Ce = setTimeout(function() {
        Ce = void 0;
      }, e);
    }
  };
}
function Yt() {
  clearTimeout(Ce), Ce = void 0;
}
function Tt(i, e, t) {
  i.scrollLeft += e, i.scrollTop += t;
}
function Dt(i) {
  var e = window.Polymer, t = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(i).cloneNode(!0) : t ? t(i).clone(!0)[0] : i.cloneNode(!0);
}
var G = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Gt() {
  var i = [], e;
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
            var r = $({}, i[i.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = me(o, !0);
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
      i.splice(Bt(i, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof n == "function" && n();
        return;
      }
      var r = !1, a = 0;
      i.forEach(function(l) {
        var c = 0, s = l.target, h = s.fromRect, d = L(s), v = s.prevFromRect, y = s.prevToRect, b = l.rect, u = me(s, !0);
        u && (d.top -= u.f, d.left -= u.e), s.toRect = d, s.thisAnimationDuration && We(v, d) && !We(h, d) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - d.top) / (b.left - d.left) === (h.top - d.top) / (h.left - d.left) && (c = Wt(b, v, y, o.options)), We(d, h) || (s.prevFromRect = h, s.prevToRect = d, c || (c = o.options.animation), o.animate(s, b, d, c)), c && (r = !0, a = Math.max(a, c), clearTimeout(s.animationResetTimer), s.animationResetTimer = setTimeout(function() {
          s.animationTime = 0, s.prevFromRect = null, s.fromRect = null, s.prevToRect = null, s.thisAnimationDuration = null;
        }, c), s.thisAnimationDuration = c);
      }), clearTimeout(e), r ? e = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), i = [];
    },
    animate: function(n, o, r, a) {
      if (a) {
        S(n, "transition", ""), S(n, "transform", "");
        var l = me(this.el), c = l && l.a, s = l && l.d, h = (o.left - r.left) / (c || 1), d = (o.top - r.top) / (s || 1);
        n.animatingX = !!h, n.animatingY = !!d, S(n, "transform", "translate3d(" + h + "px," + d + "px,0)"), this.forRepaintDummy = zt(n), S(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), S(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          S(n, "transition", ""), S(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function zt(i) {
  return i.offsetWidth;
}
function Wt(i, e, t, n) {
  return Math.sqrt(Math.pow(e.top - i.top, 2) + Math.pow(e.left - i.left, 2)) / Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) * n.animation;
}
var de = [], Ze = {
  initializeByDefault: !0
}, xe = {
  mount: function(e) {
    for (var t in Ze)
      Ze.hasOwnProperty(t) && !(t in e) && (e[t] = Ze[t]);
    de.forEach(function(n) {
      if (n.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), de.push(e);
  },
  pluginEvent: function(e, t, n) {
    var o = this;
    this.eventCanceled = !1, n.cancel = function() {
      o.eventCanceled = !0;
    };
    var r = e + "Global";
    de.forEach(function(a) {
      t[a.pluginName] && (t[a.pluginName][r] && t[a.pluginName][r]($({
        sortable: t
      }, n)), t.options[a.pluginName] && t[a.pluginName][e] && t[a.pluginName][e]($({
        sortable: t
      }, n)));
    });
  },
  initializePlugins: function(e, t, n, o) {
    de.forEach(function(l) {
      var c = l.pluginName;
      if (!(!e.options[c] && !l.initializeByDefault)) {
        var s = new l(e, t, e.options);
        s.sortable = e, s.options = e.options, e[c] = s, K(n, s.defaults);
      }
    });
    for (var r in e.options)
      if (e.options.hasOwnProperty(r)) {
        var a = this.modifyOption(e, r, e.options[r]);
        typeof a < "u" && (e.options[r] = a);
      }
  },
  getEventProperties: function(e, t) {
    var n = {};
    return de.forEach(function(o) {
      typeof o.eventProperties == "function" && K(n, o.eventProperties.call(t[o.pluginName], e));
    }), n;
  },
  modifyOption: function(e, t, n) {
    var o;
    return de.forEach(function(r) {
      e[r.pluginName] && r.optionListeners && typeof r.optionListeners[t] == "function" && (o = r.optionListeners[t].call(e[r.pluginName], n));
    }), o;
  }
};
function Zt(i) {
  var e = i.sortable, t = i.rootEl, n = i.name, o = i.targetEl, r = i.cloneEl, a = i.toEl, l = i.fromEl, c = i.oldIndex, s = i.newIndex, h = i.oldDraggableIndex, d = i.newDraggableIndex, v = i.originalEvent, y = i.putSortable, b = i.extraEventProperties;
  if (e = e || t && t[G], !!e) {
    var u, f = e.options, g = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !ee && !Ie ? u = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (u = document.createEvent("Event"), u.initEvent(n, !0, !0)), u.to = a || t, u.from = l || t, u.item = o || t, u.clone = r, u.oldIndex = c, u.newIndex = s, u.oldDraggableIndex = h, u.newDraggableIndex = d, u.originalEvent = v, u.pullMode = y ? y.lastPutMode : void 0;
    var p = $($({}, b), xe.getEventProperties(n, e));
    for (var _ in p)
      u[_] = p[_];
    t && t.dispatchEvent(u), f[g] && f[g].call(e, u);
  }
}
var Ut = ["evt"], B = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = n.evt, r = jt(n, Ut);
  xe.pluginEvent.bind(C)(e, t, $({
    dragEl: m,
    parentEl: M,
    ghostEl: T,
    rootEl: P,
    nextEl: ue,
    lastDownEl: Le,
    cloneEl: F,
    cloneHidden: oe,
    dragStarted: we,
    putSortable: R,
    activeSortable: C.active,
    originalEvent: o,
    oldIndex: pe,
    oldDraggableIndex: Te,
    newIndex: Y,
    newDraggableIndex: ie,
    hideGhostForTarget: Pt,
    unhideGhostForTarget: Ft,
    cloneNowHidden: function() {
      oe = !0;
    },
    cloneNowShown: function() {
      oe = !1;
    },
    dispatchSortableEvent: function(l) {
      H({
        sortable: t,
        name: l,
        originalEvent: o
      });
    }
  }, r));
};
function H(i) {
  Zt($({
    putSortable: R,
    cloneEl: F,
    targetEl: m,
    rootEl: P,
    oldIndex: pe,
    oldDraggableIndex: Te,
    newIndex: Y,
    newDraggableIndex: ie
  }, i));
}
var m, M, T, P, ue, Le, F, oe, pe, Y, Te, ie, Fe, R, he = !1, Be = !1, Xe = [], le, W, Ue, $e, gt, vt, we, fe, De, Oe = !1, Me = !1, Re, j, Ve = [], nt = !1, Ye = [], ze = typeof document < "u", Ae = wt, yt = Ie || ee ? "cssFloat" : "float", $t = ze && !Et && !wt && "draggable" in document.createElement("div"), Ot = function() {
  if (ze) {
    if (ee)
      return !1;
    var i = document.createElement("x");
    return i.style.cssText = "pointer-events:auto", i.style.pointerEvents === "auto";
  }
}(), It = function(e, t) {
  var n = S(e), o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), r = ge(e, 0, t), a = ge(e, 1, t), l = r && S(r), c = a && S(a), s = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + L(r).width, h = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + L(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return a && (c.clear === "both" || c.clear === d) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || s >= o && n[yt] === "none" || a && n[yt] === "none" && s + h > o) ? "vertical" : "horizontal";
}, Vt = function(e, t, n) {
  var o = n ? e.left : e.top, r = n ? e.right : e.bottom, a = n ? e.width : e.height, l = n ? t.left : t.top, c = n ? t.right : t.bottom, s = n ? t.width : t.height;
  return o === l || r === c || o + a / 2 === l + s / 2;
}, Qt = function(e, t) {
  var n;
  return Xe.some(function(o) {
    var r = o[G].options.emptyInsertThreshold;
    if (!(!r || at(o))) {
      var a = L(o), l = e >= a.left - r && e <= a.right + r, c = t >= a.top - r && t <= a.bottom + r;
      if (l && c)
        return n = o;
    }
  }), n;
}, xt = function(e) {
  function t(r, a) {
    return function(l, c, s, h) {
      var d = l.options.group.name && c.options.group.name && l.options.group.name === c.options.group.name;
      if (r == null && (a || d))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return t(r(l, c, s, h), a)(l, c, s, h);
      var v = (a ? l : c).options.group.name;
      return r === !0 || typeof r == "string" && r === v || r.join && r.indexOf(v) > -1;
    };
  }
  var n = {}, o = e.group;
  (!o || ke(o) != "object") && (o = {
    name: o
  }), n.name = o.name, n.checkPull = t(o.pull, !0), n.checkPut = t(o.put), n.revertClone = o.revertClone, e.group = n;
}, Pt = function() {
  !Ot && T && S(T, "display", "none");
}, Ft = function() {
  !Ot && T && S(T, "display", "");
};
ze && !Et && document.addEventListener("click", function(i) {
  if (Be)
    return i.preventDefault(), i.stopPropagation && i.stopPropagation(), i.stopImmediatePropagation && i.stopImmediatePropagation(), Be = !1, !1;
}, !0);
var se = function(e) {
  if (m) {
    e = e.touches ? e.touches[0] : e;
    var t = Qt(e.clientX, e.clientY);
    if (t) {
      var n = {};
      for (var o in e)
        e.hasOwnProperty(o) && (n[o] = e[o]);
      n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, t[G]._onDragOver(n);
    }
  }
}, Jt = function(e) {
  m && m.parentNode[G]._isOutsideThisEl(e.target);
};
function C(i, e) {
  if (!(i && i.nodeType && i.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(i));
  this.el = i, this.options = e = K({}, e), i[G] = this;
  var t = {
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
      return It(i, this.options);
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
    supportPointer: C.supportPointer !== !1 && "PointerEvent" in window && !Se,
    emptyInsertThreshold: 5
  };
  xe.initializePlugins(this, i, t);
  for (var n in t)
    !(n in e) && (e[n] = t[n]);
  xt(e);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : $t, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? I(i, "pointerdown", this._onTapStart) : (I(i, "mousedown", this._onTapStart), I(i, "touchstart", this._onTapStart)), this.nativeDraggable && (I(i, "dragover", this), I(i, "dragenter", this)), Xe.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), K(this, Gt());
}
C.prototype = /** @lends Sortable.prototype */
{
  constructor: C,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (fe = null);
  },
  _getDirection: function(e, t) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, t, m) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var t = this, n = this.el, o = this.options, r = o.preventOnFilter, a = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, c = (l || e).target, s = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || c, h = o.filter;
      if (ln(n), !m && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || o.disabled) && !s.isContentEditable && !(!this.nativeDraggable && Se && c && c.tagName.toUpperCase() === "SELECT") && (c = Z(c, o.draggable, n, !1), !(c && c.animated) && Le !== c)) {
        if (pe = z(c), Te = z(c, o.draggable), typeof h == "function") {
          if (h.call(this, e, c, this)) {
            H({
              sortable: t,
              rootEl: s,
              name: "filter",
              targetEl: c,
              toEl: n,
              fromEl: n
            }), B("filter", t, {
              evt: e
            }), r && e.cancelable && e.preventDefault();
            return;
          }
        } else if (h && (h = h.split(",").some(function(d) {
          if (d = Z(s, d.trim(), n, !1), d)
            return H({
              sortable: t,
              rootEl: d,
              name: "filter",
              targetEl: c,
              fromEl: n,
              toEl: n
            }), B("filter", t, {
              evt: e
            }), !0;
        }), h)) {
          r && e.cancelable && e.preventDefault();
          return;
        }
        o.handle && !Z(s, o.handle, n, !1) || this._prepareDragStart(e, l, c);
      }
    }
  },
  _prepareDragStart: function(e, t, n) {
    var o = this, r = o.el, a = o.options, l = r.ownerDocument, c;
    if (n && !m && n.parentNode === r) {
      var s = L(n);
      if (P = r, m = n, M = m.parentNode, ue = m.nextSibling, Le = n, Fe = a.group, C.dragged = m, le = {
        target: m,
        clientX: (t || e).clientX,
        clientY: (t || e).clientY
      }, gt = le.clientX - s.left, vt = le.clientY - s.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, m.style["will-change"] = "all", c = function() {
        if (B("delayEnded", o, {
          evt: e
        }), C.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !ft && o.nativeDraggable && (m.draggable = !0), o._triggerDragStart(e, t), H({
          sortable: o,
          name: "choose",
          originalEvent: e
        }), X(m, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(h) {
        St(m, h.trim(), Qe);
      }), I(l, "dragover", se), I(l, "mousemove", se), I(l, "touchmove", se), I(l, "mouseup", o._onDrop), I(l, "touchend", o._onDrop), I(l, "touchcancel", o._onDrop), ft && this.nativeDraggable && (this.options.touchStartThreshold = 4, m.draggable = !0), B("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Ie || ee))) {
        if (C.eventCanceled) {
          this._onDrop();
          return;
        }
        I(l, "mouseup", o._disableDelayedDrag), I(l, "touchend", o._disableDelayedDrag), I(l, "touchcancel", o._disableDelayedDrag), I(l, "mousemove", o._delayedDragTouchMoveHandler), I(l, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && I(l, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(c, a.delay);
      } else
        c();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var t = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    m && Qe(m), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    O(e, "mouseup", this._disableDelayedDrag), O(e, "touchend", this._disableDelayedDrag), O(e, "touchcancel", this._disableDelayedDrag), O(e, "mousemove", this._delayedDragTouchMoveHandler), O(e, "touchmove", this._delayedDragTouchMoveHandler), O(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, t) {
    t = t || e.pointerType == "touch" && e, !this.nativeDraggable || t ? this.options.supportPointer ? I(document, "pointermove", this._onTouchMove) : t ? I(document, "touchmove", this._onTouchMove) : I(document, "mousemove", this._onTouchMove) : (I(m, "dragend", this), I(P, "dragstart", this._onDragStart));
    try {
      document.selection ? je(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, t) {
    if (he = !1, P && m) {
      B("dragStarted", this, {
        evt: t
      }), this.nativeDraggable && I(document, "dragover", Jt);
      var n = this.options;
      !e && X(m, n.dragClass, !1), X(m, n.ghostClass, !0), C.active = this, e && this._appendGhost(), H({
        sortable: this,
        name: "start",
        originalEvent: t
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (W) {
      this._lastX = W.clientX, this._lastY = W.clientY, Pt();
      for (var e = document.elementFromPoint(W.clientX, W.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(W.clientX, W.clientY), e !== t); )
        t = e;
      if (m.parentNode[G]._isOutsideThisEl(e), t)
        do {
          if (t[G]) {
            var n = void 0;
            if (n = t[G]._onDragOver({
              clientX: W.clientX,
              clientY: W.clientY,
              target: e,
              rootEl: t
            }), n && !this.options.dragoverBubble)
              break;
          }
          e = t;
        } while (t = t.parentNode);
      Ft();
    }
  },
  _onTouchMove: function(e) {
    if (le) {
      var t = this.options, n = t.fallbackTolerance, o = t.fallbackOffset, r = e.touches ? e.touches[0] : e, a = T && me(T, !0), l = T && a && a.a, c = T && a && a.d, s = Ae && j && mt(j), h = (r.clientX - le.clientX + o.x) / (l || 1) + (s ? s[0] - Ve[0] : 0) / (l || 1), d = (r.clientY - le.clientY + o.y) / (c || 1) + (s ? s[1] - Ve[1] : 0) / (c || 1);
      if (!C.active && !he) {
        if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n)
          return;
        this._onDragStart(e, !0);
      }
      if (T) {
        a ? (a.e += h - (Ue || 0), a.f += d - ($e || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: h,
          f: d
        };
        var v = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        S(T, "webkitTransform", v), S(T, "mozTransform", v), S(T, "msTransform", v), S(T, "transform", v), Ue = h, $e = d, W = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!T) {
      var e = this.options.fallbackOnBody ? document.body : P, t = L(m, !0, Ae, !0, e), n = this.options;
      if (Ae) {
        for (j = e; S(j, "position") === "static" && S(j, "transform") === "none" && j !== document; )
          j = j.parentNode;
        j !== document.body && j !== document.documentElement ? (j === document && (j = U()), t.top += j.scrollTop, t.left += j.scrollLeft) : j = U(), Ve = mt(j);
      }
      T = m.cloneNode(!0), X(T, n.ghostClass, !1), X(T, n.fallbackClass, !0), X(T, n.dragClass, !0), S(T, "transition", ""), S(T, "transform", ""), S(T, "box-sizing", "border-box"), S(T, "margin", 0), S(T, "top", t.top), S(T, "left", t.left), S(T, "width", t.width), S(T, "height", t.height), S(T, "opacity", "0.8"), S(T, "position", Ae ? "absolute" : "fixed"), S(T, "zIndex", "100000"), S(T, "pointerEvents", "none"), C.ghost = T, e.appendChild(T), S(T, "transform-origin", gt / parseInt(T.style.width) * 100 + "% " + vt / parseInt(T.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, t) {
    var n = this, o = e.dataTransfer, r = n.options;
    if (B("dragStart", this, {
      evt: e
    }), C.eventCanceled) {
      this._onDrop();
      return;
    }
    B("setupClone", this), C.eventCanceled || (F = Dt(m), F.removeAttribute("id"), F.draggable = !1, F.style["will-change"] = "", this._hideClone(), X(F, this.options.chosenClass, !1), C.clone = F), n.cloneId = je(function() {
      B("clone", n), !C.eventCanceled && (n.options.removeCloneOnHide || P.insertBefore(F, m), n._hideClone(), H({
        sortable: n,
        name: "clone"
      }));
    }), !t && X(m, r.dragClass, !0), t ? (Be = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (O(document, "mouseup", n._onDrop), O(document, "touchend", n._onDrop), O(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(n, o, m)), I(document, "drop", n), S(m, "transform", "translateZ(0)")), he = !0, n._dragStartId = je(n._dragStarted.bind(n, t, e)), I(document, "selectstart", n), we = !0, Se && S(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var t = this.el, n = e.target, o, r, a, l = this.options, c = l.group, s = C.active, h = Fe === c, d = l.sort, v = R || s, y, b = this, u = !1;
    if (nt)
      return;
    function f(be, Nt) {
      B(be, b, $({
        evt: e,
        isOwner: h,
        axis: y ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: r,
        canSort: d,
        fromSortable: v,
        target: n,
        completed: p,
        onMove: function(ct, kt) {
          return Ne(P, t, m, o, ct, L(ct), e, kt);
        },
        changed: _
      }, Nt));
    }
    function g() {
      f("dragOverAnimationCapture"), b.captureAnimationState(), b !== v && v.captureAnimationState();
    }
    function p(be) {
      return f("dragOverCompleted", {
        insertion: be
      }), be && (h ? s._hideClone() : s._showClone(b), b !== v && (X(m, R ? R.options.ghostClass : s.options.ghostClass, !1), X(m, l.ghostClass, !0)), R !== b && b !== C.active ? R = b : b === C.active && R && (R = null), v === b && (b._ignoreWhileAnimating = n), b.animateAll(function() {
        f("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== v && (v.animateAll(), v._ignoreWhileAnimating = null)), (n === m && !m.animated || n === t && !n.animated) && (fe = null), !l.dragoverBubble && !e.rootEl && n !== document && (m.parentNode[G]._isOutsideThisEl(e.target), !be && se(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), u = !0;
    }
    function _() {
      Y = z(m), ie = z(m, l.draggable), H({
        sortable: b,
        name: "change",
        toEl: t,
        newIndex: Y,
        newDraggableIndex: ie,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), n = Z(n, l.draggable, t, !0), f("dragOver"), C.eventCanceled)
      return u;
    if (m.contains(e.target) || n.animated && n.animatingX && n.animatingY || b._ignoreWhileAnimating === n)
      return p(!1);
    if (Be = !1, s && !l.disabled && (h ? d || (a = M !== P) : R === this || (this.lastPutMode = Fe.checkPull(this, s, m, e)) && c.checkPut(this, s, m, e))) {
      if (y = this._getDirection(e, n) === "vertical", o = L(m), f("dragOverValid"), C.eventCanceled)
        return u;
      if (a)
        return M = P, g(), this._hideClone(), f("revert"), C.eventCanceled || (ue ? P.insertBefore(m, ue) : P.appendChild(m)), p(!0);
      var w = at(t, l.draggable);
      if (!w || nn(e, y, this) && !w.animated) {
        if (w === m)
          return p(!1);
        if (w && t === e.target && (n = w), n && (r = L(n)), Ne(P, t, m, o, n, r, e, !!n) !== !1)
          return g(), w && w.nextSibling ? t.insertBefore(m, w.nextSibling) : t.appendChild(m), M = t, _(), p(!0);
      } else if (w && tn(e, y, this)) {
        var E = ge(t, 0, l, !0);
        if (E === m)
          return p(!1);
        if (n = E, r = L(n), Ne(P, t, m, o, n, r, e, !1) !== !1)
          return g(), t.insertBefore(m, E), M = t, _(), p(!0);
      } else if (n.parentNode === t) {
        r = L(n);
        var D = 0, k, A = m.parentNode !== t, x = !Vt(m.animated && m.toRect || o, n.animated && n.toRect || r, y), V = y ? "top" : "left", te = pt(n, "top", "top") || pt(m, "top", "top"), ve = te ? te.scrollTop : void 0;
        fe !== n && (k = r[V], Oe = !1, Me = !x && l.invertSwap || A), D = on(e, n, r, y, x ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Me, fe === n);
        var Q;
        if (D !== 0) {
          var ae = z(m);
          do
            ae -= D, Q = M.children[ae];
          while (Q && (S(Q, "display") === "none" || Q === T));
        }
        if (D === 0 || Q === n)
          return p(!1);
        fe = n, De = D;
        var ye = n.nextElementSibling, ne = !1;
        ne = D === 1;
        var Pe = Ne(P, t, m, o, n, r, e, ne);
        if (Pe !== !1)
          return (Pe === 1 || Pe === -1) && (ne = Pe === 1), nt = !0, setTimeout(en, 30), g(), ne && !ye ? t.appendChild(m) : n.parentNode.insertBefore(m, ne ? ye : n), te && Tt(te, 0, ve - te.scrollTop), M = m.parentNode, k !== void 0 && !Me && (Re = Math.abs(k - L(n)[V])), _(), p(!0);
      }
      if (t.contains(m))
        return p(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    O(document, "mousemove", this._onTouchMove), O(document, "touchmove", this._onTouchMove), O(document, "pointermove", this._onTouchMove), O(document, "dragover", se), O(document, "mousemove", se), O(document, "touchmove", se);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    O(e, "mouseup", this._onDrop), O(e, "touchend", this._onDrop), O(e, "pointerup", this._onDrop), O(e, "touchcancel", this._onDrop), O(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var t = this.el, n = this.options;
    if (Y = z(m), ie = z(m, n.draggable), B("drop", this, {
      evt: e
    }), M = m && m.parentNode, Y = z(m), ie = z(m, n.draggable), C.eventCanceled) {
      this._nulling();
      return;
    }
    he = !1, Me = !1, Oe = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), it(this.cloneId), it(this._dragStartId), this.nativeDraggable && (O(document, "drop", this), O(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Se && S(document.body, "user-select", ""), S(m, "transform", ""), e && (we && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), T && T.parentNode && T.parentNode.removeChild(T), (P === M || R && R.lastPutMode !== "clone") && F && F.parentNode && F.parentNode.removeChild(F), m && (this.nativeDraggable && O(m, "dragend", this), Qe(m), m.style["will-change"] = "", we && !he && X(m, R ? R.options.ghostClass : this.options.ghostClass, !1), X(m, this.options.chosenClass, !1), H({
      sortable: this,
      name: "unchoose",
      toEl: M,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), P !== M ? (Y >= 0 && (H({
      rootEl: M,
      name: "add",
      toEl: M,
      fromEl: P,
      originalEvent: e
    }), H({
      sortable: this,
      name: "remove",
      toEl: M,
      originalEvent: e
    }), H({
      rootEl: M,
      name: "sort",
      toEl: M,
      fromEl: P,
      originalEvent: e
    }), H({
      sortable: this,
      name: "sort",
      toEl: M,
      originalEvent: e
    })), R && R.save()) : Y !== pe && Y >= 0 && (H({
      sortable: this,
      name: "update",
      toEl: M,
      originalEvent: e
    }), H({
      sortable: this,
      name: "sort",
      toEl: M,
      originalEvent: e
    })), C.active && ((Y == null || Y === -1) && (Y = pe, ie = Te), H({
      sortable: this,
      name: "end",
      toEl: M,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    B("nulling", this), P = m = M = T = ue = F = Le = oe = le = W = we = Y = ie = pe = Te = fe = De = R = Fe = C.dragged = C.ghost = C.clone = C.active = null, Ye.forEach(function(e) {
      e.checked = !0;
    }), Ye.length = Ue = $e = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        m && (this._onDragOver(e), Kt(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], t, n = this.el.children, o = 0, r = n.length, a = this.options; o < r; o++)
      t = n[o], Z(t, a.draggable, this.el, !1) && e.push(t.getAttribute(a.dataIdAttr) || an(t));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, t) {
    var n = {}, o = this.el;
    this.toArray().forEach(function(r, a) {
      var l = o.children[a];
      Z(l, this.options.draggable, o, !1) && (n[r] = l);
    }, this), t && this.captureAnimationState(), e.forEach(function(r) {
      n[r] && (o.removeChild(n[r]), o.appendChild(n[r]));
    }), t && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, t) {
    return Z(e, t || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, t) {
    var n = this.options;
    if (t === void 0)
      return n[e];
    var o = xe.modifyOption(this, e, t);
    typeof o < "u" ? n[e] = o : n[e] = t, e === "group" && xt(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    B("destroy", this);
    var e = this.el;
    e[G] = null, O(e, "mousedown", this._onTapStart), O(e, "touchstart", this._onTapStart), O(e, "pointerdown", this._onTapStart), this.nativeDraggable && (O(e, "dragover", this), O(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(t) {
      t.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Xe.splice(Xe.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!oe) {
      if (B("hideClone", this), C.eventCanceled)
        return;
      S(F, "display", "none"), this.options.removeCloneOnHide && F.parentNode && F.parentNode.removeChild(F), oe = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (oe) {
      if (B("showClone", this), C.eventCanceled)
        return;
      m.parentNode == P && !this.options.group.revertClone ? P.insertBefore(F, m) : ue ? P.insertBefore(F, ue) : P.appendChild(F), this.options.group.revertClone && this.animate(m, F), S(F, "display", ""), oe = !1;
    }
  }
};
function Kt(i) {
  i.dataTransfer && (i.dataTransfer.dropEffect = "move"), i.cancelable && i.preventDefault();
}
function Ne(i, e, t, n, o, r, a, l) {
  var c, s = i[G], h = s.options.onMove, d;
  return window.CustomEvent && !ee && !Ie ? c = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (c = document.createEvent("Event"), c.initEvent("move", !0, !0)), c.to = e, c.from = i, c.dragged = t, c.draggedRect = n, c.related = o || e, c.relatedRect = r || L(e), c.willInsertAfter = l, c.originalEvent = a, i.dispatchEvent(c), h && (d = h.call(s, c, a)), d;
}
function Qe(i) {
  i.draggable = !1;
}
function en() {
  nt = !1;
}
function tn(i, e, t) {
  var n = L(ge(t.el, 0, t.options, !0)), o = 10;
  return e ? i.clientX < n.left - o || i.clientY < n.top && i.clientX < n.right : i.clientY < n.top - o || i.clientY < n.bottom && i.clientX < n.left;
}
function nn(i, e, t) {
  var n = L(at(t.el, t.options.draggable)), o = 10;
  return e ? i.clientX > n.right + o || i.clientX <= n.right && i.clientY > n.bottom && i.clientX >= n.left : i.clientX > n.right && i.clientY > n.top || i.clientX <= n.right && i.clientY > n.bottom + o;
}
function on(i, e, t, n, o, r, a, l) {
  var c = n ? i.clientY : i.clientX, s = n ? t.height : t.width, h = n ? t.top : t.left, d = n ? t.bottom : t.right, v = !1;
  if (!a) {
    if (l && Re < s * o) {
      if (!Oe && (De === 1 ? c > h + s * r / 2 : c < d - s * r / 2) && (Oe = !0), Oe)
        v = !0;
      else if (De === 1 ? c < h + Re : c > d - Re)
        return -De;
    } else if (c > h + s * (1 - o) / 2 && c < d - s * (1 - o) / 2)
      return rn(e);
  }
  return v = v || a, v && (c < h + s * r / 2 || c > d - s * r / 2) ? c > h + s / 2 ? 1 : -1 : 0;
}
function rn(i) {
  return z(m) < z(i) ? 1 : -1;
}
function an(i) {
  for (var e = i.tagName + i.className + i.src + i.href + i.textContent, t = e.length, n = 0; t--; )
    n += e.charCodeAt(t);
  return n.toString(36);
}
function ln(i) {
  Ye.length = 0;
  for (var e = i.getElementsByTagName("input"), t = e.length; t--; ) {
    var n = e[t];
    n.checked && Ye.push(n);
  }
}
function je(i) {
  return setTimeout(i, 0);
}
function it(i) {
  return clearTimeout(i);
}
ze && I(document, "touchmove", function(i) {
  (C.active || he) && i.cancelable && i.preventDefault();
});
C.utils = {
  on: I,
  off: O,
  css: S,
  find: St,
  is: function(e, t) {
    return !!Z(e, t, e, !1);
  },
  extend: Xt,
  throttle: Ct,
  closest: Z,
  toggleClass: X,
  clone: Dt,
  index: z,
  nextTick: je,
  cancelNextTick: it,
  detectDirection: It,
  getChild: ge
};
C.get = function(i) {
  return i[G];
};
C.mount = function() {
  for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++)
    e[t] = arguments[t];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (C.utils = $($({}, C.utils), n.utils)), xe.mount(n);
  });
};
C.create = function(i, e) {
  return new C(i, e);
};
C.version = Ht;
var N = [], Ee, ot, rt = !1, Je, Ke, Ge, _e;
function sn() {
  function i() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return i.prototype = {
    dragStarted: function(t) {
      var n = t.originalEvent;
      this.sortable.nativeDraggable ? I(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? I(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? I(document, "touchmove", this._handleFallbackAutoScroll) : I(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(t) {
      var n = t.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? O(document, "dragover", this._handleAutoScroll) : (O(document, "pointermove", this._handleFallbackAutoScroll), O(document, "touchmove", this._handleFallbackAutoScroll), O(document, "mousemove", this._handleFallbackAutoScroll)), bt(), He(), Yt();
    },
    nulling: function() {
      Ge = ot = Ee = rt = _e = Je = Ke = null, N.length = 0;
    },
    _handleFallbackAutoScroll: function(t) {
      this._handleAutoScroll(t, !0);
    },
    _handleAutoScroll: function(t, n) {
      var o = this, r = (t.touches ? t.touches[0] : t).clientX, a = (t.touches ? t.touches[0] : t).clientY, l = document.elementFromPoint(r, a);
      if (Ge = t, n || this.options.forceAutoScrollFallback || Ie || ee || Se) {
        et(t, this.options, l, n);
        var c = re(l, !0);
        rt && (!_e || r !== Je || a !== Ke) && (_e && bt(), _e = setInterval(function() {
          var s = re(document.elementFromPoint(r, a), !0);
          s !== c && (c = s, He()), et(t, o.options, s, n);
        }, 10), Je = r, Ke = a);
      } else {
        if (!this.options.bubbleScroll || re(l, !0) === U()) {
          He();
          return;
        }
        et(t, this.options, re(l, !1), !1);
      }
    }
  }, K(i, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function He() {
  N.forEach(function(i) {
    clearInterval(i.pid);
  }), N = [];
}
function bt() {
  clearInterval(_e);
}
var et = Ct(function(i, e, t, n) {
  if (e.scroll) {
    var o = (i.touches ? i.touches[0] : i).clientX, r = (i.touches ? i.touches[0] : i).clientY, a = e.scrollSensitivity, l = e.scrollSpeed, c = U(), s = !1, h;
    ot !== t && (ot = t, He(), Ee = e.scroll, h = e.scrollFn, Ee === !0 && (Ee = re(t, !0)));
    var d = 0, v = Ee;
    do {
      var y = v, b = L(y), u = b.top, f = b.bottom, g = b.left, p = b.right, _ = b.width, w = b.height, E = void 0, D = void 0, k = y.scrollWidth, A = y.scrollHeight, x = S(y), V = y.scrollLeft, te = y.scrollTop;
      y === c ? (E = _ < k && (x.overflowX === "auto" || x.overflowX === "scroll" || x.overflowX === "visible"), D = w < A && (x.overflowY === "auto" || x.overflowY === "scroll" || x.overflowY === "visible")) : (E = _ < k && (x.overflowX === "auto" || x.overflowX === "scroll"), D = w < A && (x.overflowY === "auto" || x.overflowY === "scroll"));
      var ve = E && (Math.abs(p - o) <= a && V + _ < k) - (Math.abs(g - o) <= a && !!V), Q = D && (Math.abs(f - r) <= a && te + w < A) - (Math.abs(u - r) <= a && !!te);
      if (!N[d])
        for (var ae = 0; ae <= d; ae++)
          N[ae] || (N[ae] = {});
      (N[d].vx != ve || N[d].vy != Q || N[d].el !== y) && (N[d].el = y, N[d].vx = ve, N[d].vy = Q, clearInterval(N[d].pid), (ve != 0 || Q != 0) && (s = !0, N[d].pid = setInterval((function() {
        n && this.layer === 0 && C.active._onTouchMove(Ge);
        var ye = N[this.layer].vy ? N[this.layer].vy * l : 0, ne = N[this.layer].vx ? N[this.layer].vx * l : 0;
        typeof h == "function" && h.call(C.dragged.parentNode[G], ne, ye, i, Ge, N[this.layer].el) !== "continue" || Tt(N[this.layer].el, ne, ye);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && v !== c && (v = re(v, !1)));
    rt = s;
  }
}, 30), Mt = function(e) {
  var t = e.originalEvent, n = e.putSortable, o = e.dragEl, r = e.activeSortable, a = e.dispatchSortableEvent, l = e.hideGhostForTarget, c = e.unhideGhostForTarget;
  if (t) {
    var s = n || r;
    l();
    var h = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, d = document.elementFromPoint(h.clientX, h.clientY);
    c(), s && !s.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: o,
      putSortable: n
    }));
  }
};
function lt() {
}
lt.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function(e) {
    var t = e.dragEl, n = e.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var o = ge(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(t, o) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Mt
};
K(lt, {
  pluginName: "revertOnSpill"
});
function st() {
}
st.prototype = {
  onSpill: function(e) {
    var t = e.dragEl, n = e.putSortable, o = n || this.sortable;
    o.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), o.animateAll();
  },
  drop: Mt
};
K(st, {
  pluginName: "removeOnSpill"
});
C.mount(new sn());
C.mount(st, lt);
const un = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/></svg>', cn = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>';
class ce {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: e, config: t, onSelectFile: n, onDeleteFile: o, onMoveFile: r, readOnly: a }) {
    this.api = e, this.config = t, this.onSelectFile = n, this.onDeleteFile = o, this.onMoveFile = r, this.readOnly = a, this.nodes = {
      wrapper: q("div", [this.CSS.baseClass, this.CSS.wrapper]),
      fileButton: this.createFileButton(),
      container: q("div", this.CSS.container),
      itemsContainer: q("div", this.CSS.itemsContainer),
      controls: q("div", this.CSS.controls),
      preloaderContainer: q("div", this.CSS.preloaderContainer),
      caption: q("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      }),
      blockTitle: this.createTitle()
      // galleryTitle: this.createGalleryTitle(),
      // sliderTitle: this.createSliderTitle()
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.controls.appendChild(this.nodes.preloaderContainer), this.config.maxElementCount && (this.nodes.limitCounter = q("div", this.CSS.limitCounter), this.nodes.controls.appendChild(this.nodes.limitCounter)), this.nodes.controls.appendChild(this.nodes.fileButton), this.nodes.container.appendChild(this.nodes.itemsContainer), this.nodes.container.appendChild(this.nodes.controls), this.nodes.wrapper.appendChild(this.nodes.blockTitle), this.nodes.wrapper.appendChild(this.nodes.container), this.nodes.wrapper.appendChild(this.nodes.caption), ["dragenter", "dragover", "dragleave", "drop"].forEach((l) => {
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
      blockTitle: "image-gallery__title",
      tuneGalleryName: "image-gallery__tune-name",
      tuneSliderName: "image-slider__tune-name"
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
   * @param {MakerGalleryData} toolData - saved tool data
   * @returns {Element}
   */
  render(e) {
    return this.nodes.wrapper;
  }
  onRendered() {
    this.sortable || (this.sortable = new C(this.nodes.itemsContainer, {
      handle: `.${this.CSS.imageContainer}`,
      filter: `.${this.CSS.trashButton}`,
      onStart: () => {
        this.nodes.itemsContainer.classList.add(`${this.CSS.itemsContainer}--drag`);
      },
      onEnd: (e) => {
        this.nodes.itemsContainer.classList.remove(`${this.CSS.itemsContainer}--drag`), e.oldIndex !== e.newIndex && this.onMoveFile(e.oldIndex, e.newIndex);
      }
    }));
  }
  createTitle() {
    const e = q("h4", [this.CSS.blockTitle]);
    return e.innerHTML = this.config.blockTitle, e;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const e = q("div", [this.CSS.button]);
    return e.innerHTML = this.config.buttonContent || `${un} ${this.api.i18n.t("Select an Image")}`, e.addEventListener("click", () => {
      this.onSelectFile();
    }), e;
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
  getPreloader(e) {
    let t = q("div", this.CSS.imagePreloader);
    this.nodes.preloaderContainer.append(t);
    const n = new FileReader();
    return n.readAsDataURL(e), n.onload = (o) => {
      t.style.backgroundImage = `url(${o.target.result})`;
    }, t;
  }
  removePreloader(e) {
    e.remove();
  }
  /**
   * Shows an image
   *
   * @param {MakerGalleryDataFile} file - image file object
   * @returns {void}
   */
  appendImage(e) {
    let t = e.url;
    const n = /\.mp4$/.test(t) ? "VIDEO" : "IMG", o = {
      src: t
    };
    let r = "load";
    n === "VIDEO" && (o.autoplay = !1, o.muted = !0, o.playsinline = !0, r = "loadeddata");
    let a = q("div", [this.CSS.imageContainer]), l = q(n, this.CSS.imageEl, o);
    l.addEventListener(r, () => {
      this.toggleStatus(a, ce.status.FILLED);
    }), a.appendChild(l);
    const c = this.api.i18n.t("Delete");
    let s = q("div", [this.CSS.trashButton], {
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
  fillCaption(e) {
    this.nodes.caption && (this.nodes.caption.innerHTML = e);
  }
  /**
   * Changes UI status
   *
   * @param {Element} elem
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(e, t) {
    for (const n in ce.status)
      Object.prototype.hasOwnProperty.call(ce.status, n) && e.classList.toggle(`${this.CSS.imageContainer}--${ce.status[n]}`, t === ce.status[n]);
  }
  /**
   * @param {int} imageCount
   * @param {int|null} limitCounter
   * @returns {void}
   */
  updateLimitCounter(e, t) {
    t && this.nodes.limitCounter && (e === 0 ? this.nodes.limitCounter.style.display = "none" : (this.nodes.limitCounter.style.display = null, this.nodes.limitCounter.innerText = `${e} / ${t}`));
  }
}
const q = function(e, t = null, n = {}) {
  const o = document.createElement(e);
  Array.isArray(t) ? o.classList.add(...t) : t && o.classList.add(t);
  for (const r in n)
    o[r] = n[r];
  return o;
}, dn = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960" width="24"><path d="M363.077-406.154h373.844L612.769-569.23l-95.078 121.539-62.769-77.693-91.845 119.23Zm-40.769 146.153q-30.308 0-51.307-21-21-21-21-51.308v-455.382q0-30.308 21-51.308 20.999-21 51.307-21h455.383q30.307 0 51.307 21 21 21 21 51.308v455.382q0 30.308-21 51.308t-51.307 21H322.308Zm0-59.999h455.383q4.615 0 8.462-3.846 3.846-3.847 3.846-8.463v-455.382q0-4.616-3.846-8.463-3.847-3.846-8.462-3.846H322.308q-4.616 0-8.462 3.846-3.847 3.847-3.847 8.463v455.382q0 4.616 3.847 8.463 3.846 3.846 8.462 3.846ZM182.309-120.003q-30.307 0-51.307-21-21-21-21-51.307v-515.381h59.999v515.381q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h515.382v59.998H182.309ZM309.999-800v480-480Z"/></svg>', fn = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 -960 960 960"><path d="M142.309-220.001q-29.826 0-51.067-21.241-21.24-21.24-21.24-51.067v-375.382q0-29.827 21.24-51.067 21.241-21.241 51.067-21.241h375.383q29.827 0 51.067 21.241 21.24 21.24 21.24 51.067v375.382q0 29.827-21.24 51.067-21.24 21.241-51.067 21.241H142.309ZM706.343-520q-15.652 0-25.998-10.346-10.346-10.346-10.346-25.998v-147.311q0-15.651 10.346-25.997 10.346-10.347 25.998-10.347h147.311q15.652 0 25.998 10.347 10.346 10.346 10.346 25.997v147.311q0 15.652-10.346 25.998Q869.306-520 853.654-520H706.343Zm23.655-59.999h100.001V-680H729.998v100.001ZM142.309-280h375.383q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-375.382q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H142.309q-5.385 0-8.846 3.462-3.462 3.462-3.462 8.847v375.382q0 5.385 3.462 8.847 3.461 3.462 8.846 3.462Zm31.538-81.923h312.307l-101.153-135-75 100-55-73-81.154 108Zm532.496 141.922q-15.652 0-25.998-10.347-10.346-10.346-10.346-25.997v-147.311q0-15.652 10.346-25.998Q690.691-440 706.343-440h147.311q15.652 0 25.998 10.346 10.346 10.346 10.346 25.998v147.311q0 15.651-10.346 25.997-10.346 10.347-25.998 10.347H706.343ZM729.998-280h100.001v-100.001H729.998V-280Zm-599.997 0v-400 400Zm599.997-299.999V-680v100.001Zm0 299.999v-100.001V-280Z"/></svg>';
class ut {
  /**
   * @param {object} tune - image tool Tunes managers
   * @param {object} tune.api - Editor API
   * @param {object} tune.actions - list of user defined tunes
   * @param {Function} tune.onChange - tune toggling callback
   */
  constructor({ api: e, actions: t, onChange: n }) {
    this.api = e, this.actions = t, this.onChange = n, this.buttons = [];
  }
  /**
   * Available Image tunes
   *
   * @returns {{name: string, icon: string, title: string}[]}
   */
  static get tunes() {
    return [
      {
        name: "slider",
        icon: dn,
        title: "Slider"
      },
      {
        name: "gallery",
        icon: fn,
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
   * @param {MakerGalleryData} toolData - generate Elements of tunes
   * @returns {Element}
   */
  render(e) {
    const t = q("div", this.CSS.wrapper);
    return this.buttons = [], ut.tunes.concat(this.actions).forEach((o) => {
      const r = this.api.i18n.t(o.title), a = q("div", [this.CSS.buttonBase, this.CSS.button], {
        innerHTML: o.icon,
        title: r
      });
      a.addEventListener("click", () => {
        this.tuneClicked(o.name, o.action);
      }), a.dataset.tune = o.name, a.classList.toggle(this.CSS.buttonActive, e.style === o.name), this.buttons.push(a), this.api.tooltip.onHover(a, r, {
        placement: "top"
      });
    }), t;
  }
  /**
   * Clicks to one of the tunes
   *
   * @param {string} tuneName - clicked tune name
   * @param {Function} customFunction - function to execute on click
   */
  tuneClicked(e, t) {
    if (typeof t == "function" && !t(e))
      return !1;
    this.buttons.forEach((n) => {
      n.classList.toggle(this.CSS.buttonActive, n.dataset.tune === e);
    }), this.onChange(e);
  }
  handelTitle(e) {
    const t = document.querySelector(".image-gallery__tune-name"), n = document.querySelector(".image-slider__tune-name");
    e === "gallery" ? (t.style.display = "block", n.style.display = "none") : (t.style.display = "none", n.style.display = "block");
  }
}
function hn(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var At = { exports: {} };
(function(i, e) {
  (function(t, n) {
    i.exports = n();
  })(window, function() {
    return function(t) {
      var n = {};
      function o(r) {
        if (n[r])
          return n[r].exports;
        var a = n[r] = { i: r, l: !1, exports: {} };
        return t[r].call(a.exports, a, a.exports, o), a.l = !0, a.exports;
      }
      return o.m = t, o.c = n, o.d = function(r, a, l) {
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
    }([function(t, n) {
      var o;
      o = function() {
        return this;
      }();
      try {
        o = o || new Function("return this")();
      } catch {
        typeof window == "object" && (o = window);
      }
      t.exports = o;
    }, function(t, n, o) {
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
                  var x = A.then;
                  if (typeof x == "function")
                    return void x.call(A, function(V) {
                      E(k, V);
                    }, p);
                }
                _[k] = A, --w == 0 && g(_);
              } catch (V) {
                p(V);
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
    }, function(t, n, o) {
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
    }, function(t, n, o) {
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
      t.exports = b;
    }, function(t, n, o) {
      o.r(n);
      var r = o(1);
      window.Promise = window.Promise || r.a;
    }, function(t, n, o) {
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
    }, function(t, n, o) {
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
                    var A = k.callback, x = k.args;
                    switch (x.length) {
                      case 0:
                        A();
                        break;
                      case 1:
                        A(x[0]);
                        break;
                      case 2:
                        A(x[0], x[1]);
                        break;
                      case 3:
                        A(x[0], x[1], x[2]);
                        break;
                      default:
                        A.apply(c, x);
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
    }, function(t, n) {
      var o, r, a = t.exports = {};
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
    }, function(t, n, o) {
      function r(l, c) {
        for (var s = 0; s < c.length; s++) {
          var h = c[s];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, h.key, h);
        }
      }
      var a = o(9);
      t.exports = function() {
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
    }, function(t, n) {
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
      t.exports = r;
    }]);
  });
})(At);
var pn = At.exports;
const tt = /* @__PURE__ */ hn(pn);
class mn {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   */
  constructor({ config: e }) {
    this.config = e;
  }
  /**
   * Handle clicks on the upload file button
   */
  uploadSelectedFiles(e, { onPreview: t, onUpload: n, onError: o }) {
    tt.selectFiles({
      accept: this.config.types,
      multiple: !0
    }).then((r) => {
      let a = 0;
      for (var l = 0; l < r.length && !(e !== null && a == e); l++) {
        a++;
        let c = r[l], s = t(c), h;
        if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
          const d = this.config.uploader.uploadByFile(c);
          gn(d) || console.warn("Custom uploader method uploadByFile should return a Promise"), h = d;
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
  uploadByFile(e) {
    const t = new FormData();
    return t.append(this.config.field, e), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([n, o]) => {
      t.append(n, o);
    }), tt.post({
      url: this.config.endpoints.byFile,
      data: t,
      type: tt.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((n) => n.body);
  }
}
function gn(i) {
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
 *   class: MakerGallery,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *     }
 *   },
 * },
 */
const vn = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20" viewBox="0 -960 960 960" width="20"><path d="M360-384h384L618-552l-90 120-66-88-102 136Zm-48 144q-29.7 0-50.85-21.15Q240-282.3 240-312v-480q0-29.7 21.15-50.85Q282.3-864 312-864h480q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H312Zm0-72h480v-480H312v480ZM168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-552h72v552h552v72H168Zm144-696v480-480Z"/></svg>';
class bn {
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
      icon: vn,
      title: "Media"
    };
  }
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {MakerGalleryData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: n, readOnly: o }) {
    this.api = n, this.readOnly = o, this.config = {
      endpoints: t.endpoints || "",
      additionalRequestData: t.additionalRequestData || {},
      additionalRequestHeaders: t.additionalRequestHeaders || {},
      field: t.field || "image",
      types: t.types || "image/*",
      captionPlaceholder: this.api.i18n.t(t.captionPlaceholder || "Gallery caption"),
      blockTitle: this.api.i18n.t(t.blockTitle),
      buttonContent: t.buttonContent || "",
      uploader: t.uploader || void 0,
      actions: t.actions || [],
      maxElementCount: t.maxElementCount || void 0
    }, this.uploader = new mn({
      config: this.config
    }), this.ui = new ce({
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
    }), this.tunes = new ut({
      api: n,
      actions: this.config.actions,
      onChange: (r) => this.styleToggled(r)
    }), this._data = {}, this.data = e;
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
   * @param {MakerGalleryData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(!e.files || !e.files.length);
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {MakerGalleryData}
   */
  save() {
    const e = this.ui.nodes.caption;
    return this._data.caption = e.innerHTML, this.data;
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
   * @param {MakerGalleryDataFile} file - uploaded file data
   */
  appendImage(e) {
    if (e && e.url) {
      if (this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount)
        return;
      this._data.files.push(e), this.ui.appendImage(e), this.checkMaxElemCount();
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
  moveImage(e, t) {
    t >= this._data.files.length && (t = this._data.files.length - 1), this._data.files.splice(t, 0, this._data.files.splice(e, 1)[0]);
  }
  /**
   * Delete image file
   *
   * @private
   *
   * @param {integer} id - image index
   */
  deleteImage(e) {
    this._data.files[e] !== void 0 && (this._data.files.splice(e, 1), this.checkMaxElemCount());
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
   * @param {MakerGalleryData} data - data in Image Tool format
   */
  set data(e) {
    this._data.files = [], e.files && e.files.forEach((n) => {
      this.appendImage(n);
    });
    let t = e.style || "";
    this.styleToggled(t), this._data.caption = e.caption || "", this.ui.fillCaption(this._data.caption);
  }
  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {MakerGalleryData}
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
  onUpload(e, t) {
    this.ui.removePreloader(t), e.success && e.file ? this.appendImage(e.file) : this.uploadingFailed("incorrect response: " + JSON.stringify(e));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(e, t) {
    this.ui.removePreloader(t), console.log("Image Tool: uploading failed because of", e), this.api.notifier.show({
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
  styleToggled(e) {
    e === "gallery" ? this._data.style = "gallery" : this._data.style = "slider";
  }
  checkMaxElemCount() {
    this.ui.updateLimitCounter(this._data.files.length, this.config.maxElementCount), this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount ? this.ui.hideFileButton() : this.ui.showFileButton();
  }
}
export {
  bn as default
};
