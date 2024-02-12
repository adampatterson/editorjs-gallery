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
function J(i) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? de(Object(e), !0).forEach(function(n) {
      Pe(i, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : de(Object(e)).forEach(function(n) {
      Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return i;
}
function zt(i) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zt = function(t) {
    return typeof t;
  } : zt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zt(i);
}
function Pe(i, t, e) {
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
function Fe(i, t) {
  if (i == null)
    return {};
  var e = {}, n = Object.keys(i), o, r;
  for (r = 0; r < n.length; r++)
    o = n[r], !(t.indexOf(o) >= 0) && (e[o] = i[o]);
  return e;
}
function ke(i, t) {
  if (i == null)
    return {};
  var e = Fe(i, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    for (o = 0; o < r.length; o++)
      n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(i, n) && (e[n] = i[n]);
  }
  return e;
}
var Ye = "1.15.0";
function $(i) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(i);
}
var tt = $(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ct = $(/Edge/i), fe = $(/firefox/i), Tt = $(/safari/i) && !$(/chrome/i) && !$(/android/i), we = $(/iP(ad|od|hone)/i), De = $(/chrome/i) && $(/android/i), be = {
  capture: !1,
  passive: !1
};
function C(i, t, e) {
  i.addEventListener(t, e, !tt && be);
}
function N(i, t, e) {
  i.removeEventListener(t, e, !tt && be);
}
function Rt(i, t) {
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
function Re(i) {
  return i.host && i !== document && i.host.nodeType ? i.host : i.parentNode;
}
function G(i, t, e, n) {
  if (i) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? i.parentNode === e && Rt(i, t) : Rt(i, t)) || n && i === e)
        return i;
      if (i === e)
        break;
    } while (i = Re(i));
  }
  return null;
}
var he = /\s+/g;
function U(i, t, e) {
  if (i && t)
    if (i.classList)
      i.classList[e ? "add" : "remove"](t);
    else {
      var n = (" " + i.className + " ").replace(he, " ").replace(" " + t + " ", " ");
      i.className = (n + (e ? " " + t : "")).replace(he, " ");
    }
}
function T(i, t, e) {
  var n = i && i.style;
  if (n) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(i, "") : i.currentStyle && (e = i.currentStyle), t === void 0 ? e : e[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function gt(i, t) {
  var e = "";
  if (typeof i == "string")
    e = i;
  else
    do {
      var n = T(i, "transform");
      n && n !== "none" && (e = n + " " + e);
    } while (!t && (i = i.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(e);
}
function Te(i, t, e) {
  if (i) {
    var n = i.getElementsByTagName(t), o = 0, r = n.length;
    if (e)
      for (; o < r; o++)
        e(n[o], o);
    return n;
  }
  return [];
}
function Z() {
  var i = document.scrollingElement;
  return i || document.documentElement;
}
function P(i, t, e, n, o) {
  if (!(!i.getBoundingClientRect && i !== window)) {
    var r, a, l, c, s, h, d;
    if (i !== window && i.parentNode && i !== Z() ? (r = i.getBoundingClientRect(), a = r.top, l = r.left, c = r.bottom, s = r.right, h = r.height, d = r.width) : (a = 0, l = 0, c = window.innerHeight, s = window.innerWidth, h = window.innerHeight, d = window.innerWidth), (t || e) && i !== window && (o = o || i.parentNode, !tt))
      do
        if (o && o.getBoundingClientRect && (T(o, "transform") !== "none" || e && T(o, "position") !== "static")) {
          var v = o.getBoundingClientRect();
          a -= v.top + parseInt(T(o, "border-top-width")), l -= v.left + parseInt(T(o, "border-left-width")), c = a + r.height, s = l + r.width;
          break;
        }
      while (o = o.parentNode);
    if (n && i !== window) {
      var M = gt(o || i), y = M && M.a, u = M && M.d;
      M && (a /= u, l /= y, d /= y, h /= u, c = a + h, s = l + d);
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
  for (var n = rt(i, !0), o = P(i)[t]; n; ) {
    var r = P(n)[e], a = void 0;
    if (e === "top" || e === "left" ? a = o >= r : a = o <= r, !a)
      return n;
    if (n === Z())
      break;
    n = rt(n, !1);
  }
  return !1;
}
function mt(i, t, e, n) {
  for (var o = 0, r = 0, a = i.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== E.ghost && (n || a[r] !== E.dragged) && G(a[r], e.draggable, i, !1)) {
      if (o === t)
        return a[r];
      o++;
    }
    r++;
  }
  return null;
}
function ae(i, t) {
  for (var e = i.lastElementChild; e && (e === E.ghost || T(e, "display") === "none" || t && !Rt(e, t)); )
    e = e.previousElementSibling;
  return e || null;
}
function W(i, t) {
  var e = 0;
  if (!i || !i.parentNode)
    return -1;
  for (; i = i.previousElementSibling; )
    i.nodeName.toUpperCase() !== "TEMPLATE" && i !== E.clone && (!t || Rt(i, t)) && e++;
  return e;
}
function ge(i) {
  var t = 0, e = 0, n = Z();
  if (i)
    do {
      var o = gt(i), r = o.a, a = o.d;
      t += i.scrollLeft * r, e += i.scrollTop * a;
    } while (i !== n && (i = i.parentNode));
  return [t, e];
}
function He(i, t) {
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
    return Z();
  var e = i, n = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var o = T(e);
      if (e.clientWidth < e.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!e.getBoundingClientRect || e === document.body)
          return Z();
        if (n || t)
          return e;
        n = !0;
      }
    }
  while (e = e.parentNode);
  return Z();
}
function Ue(i, t) {
  if (i && t)
    for (var e in t)
      t.hasOwnProperty(e) && (i[e] = t[e]);
  return i;
}
function Xt(i, t) {
  return Math.round(i.top) === Math.round(t.top) && Math.round(i.left) === Math.round(t.left) && Math.round(i.height) === Math.round(t.height) && Math.round(i.width) === Math.round(t.width);
}
var Et;
function Ee(i, t) {
  return function() {
    if (!Et) {
      var e = arguments, n = this;
      e.length === 1 ? i.call(n, e[0]) : i.apply(n, e), Et = setTimeout(function() {
        Et = void 0;
      }, t);
    }
  };
}
function Be() {
  clearTimeout(Et), Et = void 0;
}
function Se(i, t, e) {
  i.scrollLeft += t, i.scrollTop += e;
}
function Ie(i) {
  var t = window.Polymer, e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(i).cloneNode(!0) : e ? e(i).clone(!0)[0] : i.cloneNode(!0);
}
var Q = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Qe() {
  var i = [], t;
  return {
    captureAnimationState: function() {
      if (i = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(o) {
          if (!(T(o, "display") === "none" || o === E.ghost)) {
            i.push({
              target: o,
              rect: P(o)
            });
            var r = J({}, i[i.length - 1].rect);
            if (o.thisAnimationDuration) {
              var a = gt(o, !0);
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
      i.splice(He(i, {
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
        var c = 0, s = l.target, h = s.fromRect, d = P(s), v = s.prevFromRect, M = s.prevToRect, y = l.rect, u = gt(s, !0);
        u && (d.top -= u.f, d.left -= u.e), s.toRect = d, s.thisAnimationDuration && Xt(v, d) && !Xt(h, d) && // Make sure animatingRect is on line between toRect & fromRect
        (y.top - d.top) / (y.left - d.left) === (h.top - d.top) / (h.left - d.left) && (c = Xe(y, v, M, o.options)), Xt(d, h) || (s.prevFromRect = h, s.prevToRect = d, c || (c = o.options.animation), o.animate(s, y, d, c)), c && (r = !0, a = Math.max(a, c), clearTimeout(s.animationResetTimer), s.animationResetTimer = setTimeout(function() {
          s.animationTime = 0, s.prevFromRect = null, s.fromRect = null, s.prevToRect = null, s.thisAnimationDuration = null;
        }, c), s.thisAnimationDuration = c);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), i = [];
    },
    animate: function(n, o, r, a) {
      if (a) {
        T(n, "transition", ""), T(n, "transform", "");
        var l = gt(this.el), c = l && l.a, s = l && l.d, h = (o.left - r.left) / (c || 1), d = (o.top - r.top) / (s || 1);
        n.animatingX = !!h, n.animatingY = !!d, T(n, "transform", "translate3d(" + h + "px," + d + "px,0)"), this.forRepaintDummy = We(n), T(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), T(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          T(n, "transition", ""), T(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function We(i) {
  return i.offsetWidth;
}
function Xe(i, t, e, n) {
  return Math.sqrt(Math.pow(t.top - i.top, 2) + Math.pow(t.left - i.left, 2)) / Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) * n.animation;
}
var dt = [], Gt = {
  initializeByDefault: !0
}, At = {
  mount: function(t) {
    for (var e in Gt)
      Gt.hasOwnProperty(e) && !(e in t) && (t[e] = Gt[e]);
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
      e[a.pluginName] && (e[a.pluginName][r] && e[a.pluginName][r](J({
        sortable: e
      }, n)), e.options[a.pluginName] && e[a.pluginName][t] && e[a.pluginName][t](J({
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
function Ge(i) {
  var t = i.sortable, e = i.rootEl, n = i.name, o = i.targetEl, r = i.cloneEl, a = i.toEl, l = i.fromEl, c = i.oldIndex, s = i.newIndex, h = i.oldDraggableIndex, d = i.newDraggableIndex, v = i.originalEvent, M = i.putSortable, y = i.extraEventProperties;
  if (t = t || e && e[Q], !!t) {
    var u, f = t.options, m = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !tt && !Ct ? u = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (u = document.createEvent("Event"), u.initEvent(n, !0, !0)), u.to = a || e, u.from = l || e, u.item = o || e, u.clone = r, u.oldIndex = c, u.newIndex = s, u.oldDraggableIndex = h, u.newDraggableIndex = d, u.originalEvent = v, u.pullMode = M ? M.lastPutMode : void 0;
    var p = J(J({}, y), At.getEventProperties(n, t));
    for (var b in p)
      u[b] = p[b];
    e && e.dispatchEvent(u), f[m] && f[m].call(t, u);
  }
}
var Ze = ["evt"], H = function(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = n.evt, r = ke(n, Ze);
  At.pluginEvent.bind(E)(t, e, J({
    dragEl: g,
    parentEl: L,
    ghostEl: S,
    rootEl: j,
    nextEl: ut,
    lastDownEl: Pt,
    cloneEl: _,
    cloneHidden: ot,
    dragStarted: wt,
    putSortable: F,
    activeSortable: E.active,
    originalEvent: o,
    oldIndex: pt,
    oldDraggableIndex: St,
    newIndex: B,
    newDraggableIndex: it,
    hideGhostForTarget: je,
    unhideGhostForTarget: _e,
    cloneNowHidden: function() {
      ot = !0;
    },
    cloneNowShown: function() {
      ot = !1;
    },
    dispatchSortableEvent: function(l) {
      Y({
        sortable: e,
        name: l,
        originalEvent: o
      });
    }
  }, r));
};
function Y(i) {
  Ge(J({
    putSortable: F,
    cloneEl: _,
    targetEl: g,
    rootEl: j,
    oldIndex: pt,
    oldDraggableIndex: St,
    newIndex: B,
    newDraggableIndex: it
  }, i));
}
var g, L, S, j, ut, Pt, _, ot, pt, B, St, it, _t, F, ht = !1, Ht = !1, Ut = [], lt, X, Zt, Jt, me, ve, wt, ft, It, Nt = !1, Lt = !1, Ft, k, Vt = [], ne = !1, Bt = [], Wt = typeof document < "u", Ot = we, Me = Ct || tt ? "cssFloat" : "float", Je = Wt && !De && !we && "draggable" in document.createElement("div"), Ne = function() {
  if (Wt) {
    if (tt)
      return !1;
    var i = document.createElement("x");
    return i.style.cssText = "pointer-events:auto", i.style.pointerEvents === "auto";
  }
}(), Ce = function(t, e) {
  var n = T(t), o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), r = mt(t, 0, e), a = mt(t, 1, e), l = r && T(r), c = a && T(a), s = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + P(r).width, h = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + P(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return a && (c.clear === "both" || c.clear === d) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || s >= o && n[Me] === "none" || a && n[Me] === "none" && s + h > o) ? "vertical" : "horizontal";
}, Ve = function(t, e, n) {
  var o = n ? t.left : t.top, r = n ? t.right : t.bottom, a = n ? t.width : t.height, l = n ? e.left : e.top, c = n ? e.right : e.bottom, s = n ? e.width : e.height;
  return o === l || r === c || o + a / 2 === l + s / 2;
}, qe = function(t, e) {
  var n;
  return Ut.some(function(o) {
    var r = o[Q].options.emptyInsertThreshold;
    if (!(!r || ae(o))) {
      var a = P(o), l = t >= a.left - r && t <= a.right + r, c = e >= a.top - r && e <= a.bottom + r;
      if (l && c)
        return n = o;
    }
  }), n;
}, Ae = function(t) {
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
  (!o || zt(o) != "object") && (o = {
    name: o
  }), n.name = o.name, n.checkPull = e(o.pull, !0), n.checkPut = e(o.put), n.revertClone = o.revertClone, t.group = n;
}, je = function() {
  !Ne && S && T(S, "display", "none");
}, _e = function() {
  !Ne && S && T(S, "display", "");
};
Wt && !De && document.addEventListener("click", function(i) {
  if (Ht)
    return i.preventDefault(), i.stopPropagation && i.stopPropagation(), i.stopImmediatePropagation && i.stopImmediatePropagation(), Ht = !1, !1;
}, !0);
var st = function(t) {
  if (g) {
    t = t.touches ? t.touches[0] : t;
    var e = qe(t.clientX, t.clientY);
    if (e) {
      var n = {};
      for (var o in t)
        t.hasOwnProperty(o) && (n[o] = t[o]);
      n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[Q]._onDragOver(n);
    }
  }
}, $e = function(t) {
  g && g.parentNode[Q]._isOutsideThisEl(t.target);
};
function E(i, t) {
  if (!(i && i.nodeType && i.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(i));
  this.el = i, this.options = t = K({}, t), i[Q] = this;
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
      return Ce(i, this.options);
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
    supportPointer: E.supportPointer !== !1 && "PointerEvent" in window && !Tt,
    emptyInsertThreshold: 5
  };
  At.initializePlugins(this, i, e);
  for (var n in e)
    !(n in t) && (t[n] = e[n]);
  Ae(t);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Je, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? C(i, "pointerdown", this._onTapStart) : (C(i, "mousedown", this._onTapStart), C(i, "touchstart", this._onTapStart)), this.nativeDraggable && (C(i, "dragover", this), C(i, "dragenter", this)), Ut.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), K(this, Qe());
}
E.prototype = /** @lends Sortable.prototype */
{
  constructor: E,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (ft = null);
  },
  _getDirection: function(t, e) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, e, g) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var e = this, n = this.el, o = this.options, r = o.preventOnFilter, a = t.type, l = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, c = (l || t).target, s = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || c, h = o.filter;
      if (ln(n), !g && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || o.disabled) && !s.isContentEditable && !(!this.nativeDraggable && Tt && c && c.tagName.toUpperCase() === "SELECT") && (c = G(c, o.draggable, n, !1), !(c && c.animated) && Pt !== c)) {
        if (pt = W(c), St = W(c, o.draggable), typeof h == "function") {
          if (h.call(this, t, c, this)) {
            Y({
              sortable: e,
              rootEl: s,
              name: "filter",
              targetEl: c,
              toEl: n,
              fromEl: n
            }), H("filter", e, {
              evt: t
            }), r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (h && (h = h.split(",").some(function(d) {
          if (d = G(s, d.trim(), n, !1), d)
            return Y({
              sortable: e,
              rootEl: d,
              name: "filter",
              targetEl: c,
              fromEl: n,
              toEl: n
            }), H("filter", e, {
              evt: t
            }), !0;
        }), h)) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        o.handle && !G(s, o.handle, n, !1) || this._prepareDragStart(t, l, c);
      }
    }
  },
  _prepareDragStart: function(t, e, n) {
    var o = this, r = o.el, a = o.options, l = r.ownerDocument, c;
    if (n && !g && n.parentNode === r) {
      var s = P(n);
      if (j = r, g = n, L = g.parentNode, ut = g.nextSibling, Pt = n, _t = a.group, E.dragged = g, lt = {
        target: g,
        clientX: (e || t).clientX,
        clientY: (e || t).clientY
      }, me = lt.clientX - s.left, ve = lt.clientY - s.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, g.style["will-change"] = "all", c = function() {
        if (H("delayEnded", o, {
          evt: t
        }), E.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !fe && o.nativeDraggable && (g.draggable = !0), o._triggerDragStart(t, e), Y({
          sortable: o,
          name: "choose",
          originalEvent: t
        }), U(g, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(h) {
        Te(g, h.trim(), qt);
      }), C(l, "dragover", st), C(l, "mousemove", st), C(l, "touchmove", st), C(l, "mouseup", o._onDrop), C(l, "touchend", o._onDrop), C(l, "touchcancel", o._onDrop), fe && this.nativeDraggable && (this.options.touchStartThreshold = 4, g.draggable = !0), H("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || e) && (!this.nativeDraggable || !(Ct || tt))) {
        if (E.eventCanceled) {
          this._onDrop();
          return;
        }
        C(l, "mouseup", o._disableDelayedDrag), C(l, "touchend", o._disableDelayedDrag), C(l, "touchcancel", o._disableDelayedDrag), C(l, "mousemove", o._delayedDragTouchMoveHandler), C(l, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && C(l, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(c, a.delay);
      } else
        c();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    g && qt(g), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    N(t, "mouseup", this._disableDelayedDrag), N(t, "touchend", this._disableDelayedDrag), N(t, "touchcancel", this._disableDelayedDrag), N(t, "mousemove", this._delayedDragTouchMoveHandler), N(t, "touchmove", this._delayedDragTouchMoveHandler), N(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, e) {
    e = e || t.pointerType == "touch" && t, !this.nativeDraggable || e ? this.options.supportPointer ? C(document, "pointermove", this._onTouchMove) : e ? C(document, "touchmove", this._onTouchMove) : C(document, "mousemove", this._onTouchMove) : (C(g, "dragend", this), C(j, "dragstart", this._onDragStart));
    try {
      document.selection ? kt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, e) {
    if (ht = !1, j && g) {
      H("dragStarted", this, {
        evt: e
      }), this.nativeDraggable && C(document, "dragover", $e);
      var n = this.options;
      !t && U(g, n.dragClass, !1), U(g, n.ghostClass, !0), E.active = this, t && this._appendGhost(), Y({
        sortable: this,
        name: "start",
        originalEvent: e
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (X) {
      this._lastX = X.clientX, this._lastY = X.clientY, je();
      for (var t = document.elementFromPoint(X.clientX, X.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(X.clientX, X.clientY), t !== e); )
        e = t;
      if (g.parentNode[Q]._isOutsideThisEl(t), e)
        do {
          if (e[Q]) {
            var n = void 0;
            if (n = e[Q]._onDragOver({
              clientX: X.clientX,
              clientY: X.clientY,
              target: t,
              rootEl: e
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = e;
        } while (e = e.parentNode);
      _e();
    }
  },
  _onTouchMove: function(t) {
    if (lt) {
      var e = this.options, n = e.fallbackTolerance, o = e.fallbackOffset, r = t.touches ? t.touches[0] : t, a = S && gt(S, !0), l = S && a && a.a, c = S && a && a.d, s = Ot && k && ge(k), h = (r.clientX - lt.clientX + o.x) / (l || 1) + (s ? s[0] - Vt[0] : 0) / (l || 1), d = (r.clientY - lt.clientY + o.y) / (c || 1) + (s ? s[1] - Vt[1] : 0) / (c || 1);
      if (!E.active && !ht) {
        if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (S) {
        a ? (a.e += h - (Zt || 0), a.f += d - (Jt || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: h,
          f: d
        };
        var v = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        T(S, "webkitTransform", v), T(S, "mozTransform", v), T(S, "msTransform", v), T(S, "transform", v), Zt = h, Jt = d, X = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!S) {
      var t = this.options.fallbackOnBody ? document.body : j, e = P(g, !0, Ot, !0, t), n = this.options;
      if (Ot) {
        for (k = t; T(k, "position") === "static" && T(k, "transform") === "none" && k !== document; )
          k = k.parentNode;
        k !== document.body && k !== document.documentElement ? (k === document && (k = Z()), e.top += k.scrollTop, e.left += k.scrollLeft) : k = Z(), Vt = ge(k);
      }
      S = g.cloneNode(!0), U(S, n.ghostClass, !1), U(S, n.fallbackClass, !0), U(S, n.dragClass, !0), T(S, "transition", ""), T(S, "transform", ""), T(S, "box-sizing", "border-box"), T(S, "margin", 0), T(S, "top", e.top), T(S, "left", e.left), T(S, "width", e.width), T(S, "height", e.height), T(S, "opacity", "0.8"), T(S, "position", Ot ? "absolute" : "fixed"), T(S, "zIndex", "100000"), T(S, "pointerEvents", "none"), E.ghost = S, t.appendChild(S), T(S, "transform-origin", me / parseInt(S.style.width) * 100 + "% " + ve / parseInt(S.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, e) {
    var n = this, o = t.dataTransfer, r = n.options;
    if (H("dragStart", this, {
      evt: t
    }), E.eventCanceled) {
      this._onDrop();
      return;
    }
    H("setupClone", this), E.eventCanceled || (_ = Ie(g), _.removeAttribute("id"), _.draggable = !1, _.style["will-change"] = "", this._hideClone(), U(_, this.options.chosenClass, !1), E.clone = _), n.cloneId = kt(function() {
      H("clone", n), !E.eventCanceled && (n.options.removeCloneOnHide || j.insertBefore(_, g), n._hideClone(), Y({
        sortable: n,
        name: "clone"
      }));
    }), !e && U(g, r.dragClass, !0), e ? (Ht = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (N(document, "mouseup", n._onDrop), N(document, "touchend", n._onDrop), N(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(n, o, g)), C(document, "drop", n), T(g, "transform", "translateZ(0)")), ht = !0, n._dragStartId = kt(n._dragStarted.bind(n, e, t)), C(document, "selectstart", n), wt = !0, Tt && T(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var e = this.el, n = t.target, o, r, a, l = this.options, c = l.group, s = E.active, h = _t === c, d = l.sort, v = F || s, M, y = this, u = !1;
    if (ne)
      return;
    function f(yt, xe) {
      H(yt, y, J({
        evt: t,
        isOwner: h,
        axis: M ? "vertical" : "horizontal",
        revert: a,
        dragRect: o,
        targetRect: r,
        canSort: d,
        fromSortable: v,
        target: n,
        completed: p,
        onMove: function(ce, ze) {
          return xt(j, e, g, o, ce, P(ce), t, ze);
        },
        changed: b
      }, xe));
    }
    function m() {
      f("dragOverAnimationCapture"), y.captureAnimationState(), y !== v && v.captureAnimationState();
    }
    function p(yt) {
      return f("dragOverCompleted", {
        insertion: yt
      }), yt && (h ? s._hideClone() : s._showClone(y), y !== v && (U(g, F ? F.options.ghostClass : s.options.ghostClass, !1), U(g, l.ghostClass, !0)), F !== y && y !== E.active ? F = y : y === E.active && F && (F = null), v === y && (y._ignoreWhileAnimating = n), y.animateAll(function() {
        f("dragOverAnimationComplete"), y._ignoreWhileAnimating = null;
      }), y !== v && (v.animateAll(), v._ignoreWhileAnimating = null)), (n === g && !g.animated || n === e && !n.animated) && (ft = null), !l.dragoverBubble && !t.rootEl && n !== document && (g.parentNode[Q]._isOutsideThisEl(t.target), !yt && st(t)), !l.dragoverBubble && t.stopPropagation && t.stopPropagation(), u = !0;
    }
    function b() {
      B = W(g), it = W(g, l.draggable), Y({
        sortable: y,
        name: "change",
        toEl: e,
        newIndex: B,
        newDraggableIndex: it,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = G(n, l.draggable, e, !0), f("dragOver"), E.eventCanceled)
      return u;
    if (g.contains(t.target) || n.animated && n.animatingX && n.animatingY || y._ignoreWhileAnimating === n)
      return p(!1);
    if (Ht = !1, s && !l.disabled && (h ? d || (a = L !== j) : F === this || (this.lastPutMode = _t.checkPull(this, s, g, t)) && c.checkPut(this, s, g, t))) {
      if (M = this._getDirection(t, n) === "vertical", o = P(g), f("dragOverValid"), E.eventCanceled)
        return u;
      if (a)
        return L = j, m(), this._hideClone(), f("revert"), E.eventCanceled || (ut ? j.insertBefore(g, ut) : j.appendChild(g)), p(!0);
      var w = ae(e, l.draggable);
      if (!w || nn(t, M, this) && !w.animated) {
        if (w === g)
          return p(!1);
        if (w && e === t.target && (n = w), n && (r = P(n)), xt(j, e, g, o, n, r, t, !!n) !== !1)
          return m(), w && w.nextSibling ? e.insertBefore(g, w.nextSibling) : e.appendChild(g), L = e, b(), p(!0);
      } else if (w && en(t, M, this)) {
        var D = mt(e, 0, l, !0);
        if (D === g)
          return p(!1);
        if (n = D, r = P(n), xt(j, e, g, o, n, r, t, !1) !== !1)
          return m(), e.insertBefore(g, D), L = e, b(), p(!0);
      } else if (n.parentNode === e) {
        r = P(n);
        var I = 0, z, O = g.parentNode !== e, A = !Ve(g.animated && g.toRect || o, n.animated && n.toRect || r, M), V = M ? "top" : "left", et = pe(n, "top", "top") || pe(g, "top", "top"), vt = et ? et.scrollTop : void 0;
        ft !== n && (z = r[V], Nt = !1, Lt = !A && l.invertSwap || O), I = on(t, n, r, M, A ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Lt, ft === n);
        var q;
        if (I !== 0) {
          var at = W(g);
          do
            at -= I, q = L.children[at];
          while (q && (T(q, "display") === "none" || q === S));
        }
        if (I === 0 || q === n)
          return p(!1);
        ft = n, It = I;
        var Mt = n.nextElementSibling, nt = !1;
        nt = I === 1;
        var jt = xt(j, e, g, o, n, r, t, nt);
        if (jt !== !1)
          return (jt === 1 || jt === -1) && (nt = jt === 1), ne = !0, setTimeout(tn, 30), m(), nt && !Mt ? e.appendChild(g) : n.parentNode.insertBefore(g, nt ? Mt : n), et && Se(et, 0, vt - et.scrollTop), L = g.parentNode, z !== void 0 && !Lt && (Ft = Math.abs(z - P(n)[V])), b(), p(!0);
      }
      if (e.contains(g))
        return p(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    N(document, "mousemove", this._onTouchMove), N(document, "touchmove", this._onTouchMove), N(document, "pointermove", this._onTouchMove), N(document, "dragover", st), N(document, "mousemove", st), N(document, "touchmove", st);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    N(t, "mouseup", this._onDrop), N(t, "touchend", this._onDrop), N(t, "pointerup", this._onDrop), N(t, "touchcancel", this._onDrop), N(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var e = this.el, n = this.options;
    if (B = W(g), it = W(g, n.draggable), H("drop", this, {
      evt: t
    }), L = g && g.parentNode, B = W(g), it = W(g, n.draggable), E.eventCanceled) {
      this._nulling();
      return;
    }
    ht = !1, Lt = !1, Nt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ie(this.cloneId), ie(this._dragStartId), this.nativeDraggable && (N(document, "drop", this), N(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Tt && T(document.body, "user-select", ""), T(g, "transform", ""), t && (wt && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), S && S.parentNode && S.parentNode.removeChild(S), (j === L || F && F.lastPutMode !== "clone") && _ && _.parentNode && _.parentNode.removeChild(_), g && (this.nativeDraggable && N(g, "dragend", this), qt(g), g.style["will-change"] = "", wt && !ht && U(g, F ? F.options.ghostClass : this.options.ghostClass, !1), U(g, this.options.chosenClass, !1), Y({
      sortable: this,
      name: "unchoose",
      toEl: L,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), j !== L ? (B >= 0 && (Y({
      rootEl: L,
      name: "add",
      toEl: L,
      fromEl: j,
      originalEvent: t
    }), Y({
      sortable: this,
      name: "remove",
      toEl: L,
      originalEvent: t
    }), Y({
      rootEl: L,
      name: "sort",
      toEl: L,
      fromEl: j,
      originalEvent: t
    }), Y({
      sortable: this,
      name: "sort",
      toEl: L,
      originalEvent: t
    })), F && F.save()) : B !== pt && B >= 0 && (Y({
      sortable: this,
      name: "update",
      toEl: L,
      originalEvent: t
    }), Y({
      sortable: this,
      name: "sort",
      toEl: L,
      originalEvent: t
    })), E.active && ((B == null || B === -1) && (B = pt, it = St), Y({
      sortable: this,
      name: "end",
      toEl: L,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    H("nulling", this), j = g = L = S = ut = _ = Pt = ot = lt = X = wt = B = it = pt = St = ft = It = F = _t = E.dragged = E.ghost = E.clone = E.active = null, Bt.forEach(function(t) {
      t.checked = !0;
    }), Bt.length = Zt = Jt = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        g && (this._onDragOver(t), Ke(t));
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
      e = n[o], G(e, a.draggable, this.el, !1) && t.push(e.getAttribute(a.dataIdAttr) || an(e));
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
      G(l, this.options.draggable, o, !1) && (n[r] = l);
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
    return G(t, e || this.options.draggable, this.el, !1);
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
    var o = At.modifyOption(this, t, e);
    typeof o < "u" ? n[t] = o : n[t] = e, t === "group" && Ae(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    H("destroy", this);
    var t = this.el;
    t[Q] = null, N(t, "mousedown", this._onTapStart), N(t, "touchstart", this._onTapStart), N(t, "pointerdown", this._onTapStart), this.nativeDraggable && (N(t, "dragover", this), N(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(e) {
      e.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ut.splice(Ut.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!ot) {
      if (H("hideClone", this), E.eventCanceled)
        return;
      T(_, "display", "none"), this.options.removeCloneOnHide && _.parentNode && _.parentNode.removeChild(_), ot = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ot) {
      if (H("showClone", this), E.eventCanceled)
        return;
      g.parentNode == j && !this.options.group.revertClone ? j.insertBefore(_, g) : ut ? j.insertBefore(_, ut) : j.appendChild(_), this.options.group.revertClone && this.animate(g, _), T(_, "display", ""), ot = !1;
    }
  }
};
function Ke(i) {
  i.dataTransfer && (i.dataTransfer.dropEffect = "move"), i.cancelable && i.preventDefault();
}
function xt(i, t, e, n, o, r, a, l) {
  var c, s = i[Q], h = s.options.onMove, d;
  return window.CustomEvent && !tt && !Ct ? c = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (c = document.createEvent("Event"), c.initEvent("move", !0, !0)), c.to = t, c.from = i, c.dragged = e, c.draggedRect = n, c.related = o || t, c.relatedRect = r || P(t), c.willInsertAfter = l, c.originalEvent = a, i.dispatchEvent(c), h && (d = h.call(s, c, a)), d;
}
function qt(i) {
  i.draggable = !1;
}
function tn() {
  ne = !1;
}
function en(i, t, e) {
  var n = P(mt(e.el, 0, e.options, !0)), o = 10;
  return t ? i.clientX < n.left - o || i.clientY < n.top && i.clientX < n.right : i.clientY < n.top - o || i.clientY < n.bottom && i.clientX < n.left;
}
function nn(i, t, e) {
  var n = P(ae(e.el, e.options.draggable)), o = 10;
  return t ? i.clientX > n.right + o || i.clientX <= n.right && i.clientY > n.bottom && i.clientX >= n.left : i.clientX > n.right && i.clientY > n.top || i.clientX <= n.right && i.clientY > n.bottom + o;
}
function on(i, t, e, n, o, r, a, l) {
  var c = n ? i.clientY : i.clientX, s = n ? e.height : e.width, h = n ? e.top : e.left, d = n ? e.bottom : e.right, v = !1;
  if (!a) {
    if (l && Ft < s * o) {
      if (!Nt && (It === 1 ? c > h + s * r / 2 : c < d - s * r / 2) && (Nt = !0), Nt)
        v = !0;
      else if (It === 1 ? c < h + Ft : c > d - Ft)
        return -It;
    } else if (c > h + s * (1 - o) / 2 && c < d - s * (1 - o) / 2)
      return rn(t);
  }
  return v = v || a, v && (c < h + s * r / 2 || c > d - s * r / 2) ? c > h + s / 2 ? 1 : -1 : 0;
}
function rn(i) {
  return W(g) < W(i) ? 1 : -1;
}
function an(i) {
  for (var t = i.tagName + i.className + i.src + i.href + i.textContent, e = t.length, n = 0; e--; )
    n += t.charCodeAt(e);
  return n.toString(36);
}
function ln(i) {
  Bt.length = 0;
  for (var t = i.getElementsByTagName("input"), e = t.length; e--; ) {
    var n = t[e];
    n.checked && Bt.push(n);
  }
}
function kt(i) {
  return setTimeout(i, 0);
}
function ie(i) {
  return clearTimeout(i);
}
Wt && C(document, "touchmove", function(i) {
  (E.active || ht) && i.cancelable && i.preventDefault();
});
E.utils = {
  on: C,
  off: N,
  css: T,
  find: Te,
  is: function(t, e) {
    return !!G(t, e, t, !1);
  },
  extend: Ue,
  throttle: Ee,
  closest: G,
  toggleClass: U,
  clone: Ie,
  index: W,
  nextTick: kt,
  cancelNextTick: ie,
  detectDirection: Ce,
  getChild: mt
};
E.get = function(i) {
  return i[Q];
};
E.mount = function() {
  for (var i = arguments.length, t = new Array(i), e = 0; e < i; e++)
    t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (E.utils = J(J({}, E.utils), n.utils)), At.mount(n);
  });
};
E.create = function(i, t) {
  return new E(i, t);
};
E.version = Ye;
var x = [], Dt, oe, re = !1, $t, Kt, Qt, bt;
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
      this.sortable.nativeDraggable ? C(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? C(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? C(document, "touchmove", this._handleFallbackAutoScroll) : C(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(e) {
      var n = e.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? N(document, "dragover", this._handleAutoScroll) : (N(document, "pointermove", this._handleFallbackAutoScroll), N(document, "touchmove", this._handleFallbackAutoScroll), N(document, "mousemove", this._handleFallbackAutoScroll)), ye(), Yt(), Be();
    },
    nulling: function() {
      Qt = oe = Dt = re = bt = $t = Kt = null, x.length = 0;
    },
    _handleFallbackAutoScroll: function(e) {
      this._handleAutoScroll(e, !0);
    },
    _handleAutoScroll: function(e, n) {
      var o = this, r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = document.elementFromPoint(r, a);
      if (Qt = e, n || this.options.forceAutoScrollFallback || Ct || tt || Tt) {
        te(e, this.options, l, n);
        var c = rt(l, !0);
        re && (!bt || r !== $t || a !== Kt) && (bt && ye(), bt = setInterval(function() {
          var s = rt(document.elementFromPoint(r, a), !0);
          s !== c && (c = s, Yt()), te(e, o.options, s, n);
        }, 10), $t = r, Kt = a);
      } else {
        if (!this.options.bubbleScroll || rt(l, !0) === Z()) {
          Yt();
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
function Yt() {
  x.forEach(function(i) {
    clearInterval(i.pid);
  }), x = [];
}
function ye() {
  clearInterval(bt);
}
var te = Ee(function(i, t, e, n) {
  if (t.scroll) {
    var o = (i.touches ? i.touches[0] : i).clientX, r = (i.touches ? i.touches[0] : i).clientY, a = t.scrollSensitivity, l = t.scrollSpeed, c = Z(), s = !1, h;
    oe !== e && (oe = e, Yt(), Dt = t.scroll, h = t.scrollFn, Dt === !0 && (Dt = rt(e, !0)));
    var d = 0, v = Dt;
    do {
      var M = v, y = P(M), u = y.top, f = y.bottom, m = y.left, p = y.right, b = y.width, w = y.height, D = void 0, I = void 0, z = M.scrollWidth, O = M.scrollHeight, A = T(M), V = M.scrollLeft, et = M.scrollTop;
      M === c ? (D = b < z && (A.overflowX === "auto" || A.overflowX === "scroll" || A.overflowX === "visible"), I = w < O && (A.overflowY === "auto" || A.overflowY === "scroll" || A.overflowY === "visible")) : (D = b < z && (A.overflowX === "auto" || A.overflowX === "scroll"), I = w < O && (A.overflowY === "auto" || A.overflowY === "scroll"));
      var vt = D && (Math.abs(p - o) <= a && V + b < z) - (Math.abs(m - o) <= a && !!V), q = I && (Math.abs(f - r) <= a && et + w < O) - (Math.abs(u - r) <= a && !!et);
      if (!x[d])
        for (var at = 0; at <= d; at++)
          x[at] || (x[at] = {});
      (x[d].vx != vt || x[d].vy != q || x[d].el !== M) && (x[d].el = M, x[d].vx = vt, x[d].vy = q, clearInterval(x[d].pid), (vt != 0 || q != 0) && (s = !0, x[d].pid = setInterval((function() {
        n && this.layer === 0 && E.active._onTouchMove(Qt);
        var Mt = x[this.layer].vy ? x[this.layer].vy * l : 0, nt = x[this.layer].vx ? x[this.layer].vx * l : 0;
        typeof h == "function" && h.call(E.dragged.parentNode[Q], nt, Mt, i, Qt, x[this.layer].el) !== "continue" || Se(x[this.layer].el, nt, Mt);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && v !== c && (v = rt(v, !1)));
    re = s;
  }
}, 30), Le = function(t) {
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
    var o = mt(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(e, o) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Le
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
  drop: Le
};
K(se, {
  pluginName: "removeOnSpill"
});
E.mount(new sn());
E.mount(se, le);
const un = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0zLjE1IDEzLjYyOEE3Ljc0OSA3Ljc0OSAwIDAgMCAxMCAxNy43NWE3Ljc0IDcuNzQgMCAwIDAgNi4zMDUtMy4yNDJsLTIuMzg3LTIuMTI3LTIuNzY1IDIuMjQ0LTQuMzg5LTQuNDk2LTMuNjE0IDMuNXptLS43ODctMi4zMDNsNC40NDYtNC4zNzEgNC41MiA0LjYzIDIuNTM0LTIuMDU3IDMuNTMzIDIuNzk3Yy4yMy0uNzM0LjM1NC0xLjUxNC4zNTQtMi4zMjRhNy43NSA3Ljc1IDAgMSAwLTE1LjM4NyAxLjMyNXpNMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTB6Ii8+Cjwvc3ZnPg==", cn = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxwYXRoIGQ9Ik01LjUgNS41QS41LjUgMCAwIDEgNiA2djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41em0yLjUgMGEuNS41IDAgMCAxIC41LjV2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjV6bTMgLjVhLjUuNSAwIDAgMC0xIDB2NmEuNS41IDAgMCAwIDEgMFY2eiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjUgM2ExIDEgMCAwIDEtMSAxSDEzdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNGgtLjVhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFINmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMWgzLjVhMSAxIDAgMCAxIDEgMXYxek00LjExOCA0IDQgNC4wNTlWMTNhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTFWNC4wNTlMMTEuODgyIDRINC4xMTh6TTIuNSAzVjJoMTF2MWgtMTF6Ii8+Cjwvc3ZnPg==";
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
      wrapper: R("div", [this.CSS.baseClass, this.CSS.wrapper]),
      fileButton: this.createFileButton(),
      container: R("div", this.CSS.container),
      itemsContainer: R("div", this.CSS.itemsContainer),
      controls: R("div", this.CSS.controls),
      preloaderContainer: R("div", this.CSS.preloaderContainer),
      caption: R("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      }),
      tuneTitle: this.createTuneTitle()
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.tuneTitle.dataset.placeholder = "Tune Title", this.nodes.controls.appendChild(this.nodes.preloaderContainer), this.config.maxElementCount && (this.nodes.limitCounter = R("div", this.CSS.limitCounter), this.nodes.controls.appendChild(this.nodes.limitCounter)), this.nodes.controls.appendChild(this.nodes.fileButton), this.nodes.container.appendChild(this.nodes.itemsContainer), this.nodes.container.appendChild(this.nodes.controls), this.nodes.wrapper.appendChild(this.nodes.tuneTitle), this.nodes.wrapper.appendChild(this.nodes.container), this.nodes.wrapper.appendChild(this.nodes.caption), ["dragenter", "dragover", "dragleave", "drop"].forEach((l) => {
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
    this.sortable || (this.sortable = new E(this.nodes.itemsContainer, {
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
    const t = R("h4", [this.CSS.tuneName]);
    return t.innerHTML = "Gallery or Slider", t;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const t = R("div", [this.CSS.button]);
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
    let e = R("div", this.CSS.imagePreloader);
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
    let a = R("div", [this.CSS.imageContainer]), l = R(n, this.CSS.imageEl, o);
    l.addEventListener(r, () => {
      this.toggleStatus(a, ct.status.FILLED);
    }), a.appendChild(l);
    const c = this.api.i18n.t("Delete");
    let s = R("div", [this.CSS.trashButton], {
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
const R = function(t, e = null, n = {}) {
  const o = document.createElement(t);
  Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
  for (const r in n)
    o[r] = n[r];
  return o;
}, dn = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTM2My4wNzctNDA2LjE1NGgzNzMuODQ0TDYxMi43NjktNTY5LjIzbC05NS4wNzggMTIxLjUzOS02Mi43NjktNzcuNjkzLTkxLjg0NSAxMTkuMjNabS00MC43NjkgMTQ2LjE1M3EtMzAuMzA4IDAtNTEuMzA3LTIxLTIxLTIxLTIxLTUxLjMwOHYtNDU1LjM4MnEwLTMwLjMwOCAyMS01MS4zMDggMjAuOTk5LTIxIDUxLjMwNy0yMWg0NTUuMzgzcTMwLjMwNyAwIDUxLjMwNyAyMSAyMSAyMSAyMSA1MS4zMDh2NDU1LjM4MnEwIDMwLjMwOC0yMSA1MS4zMDh0LTUxLjMwNyAyMUgzMjIuMzA4Wm0wLTU5Ljk5OWg0NTUuMzgzcTQuNjE1IDAgOC40NjItMy44NDYgMy44NDYtMy44NDcgMy44NDYtOC40NjN2LTQ1NS4zODJxMC00LjYxNi0zLjg0Ni04LjQ2My0zLjg0Ny0zLjg0Ni04LjQ2Mi0zLjg0NkgzMjIuMzA4cS00LjYxNiAwLTguNDYyIDMuODQ2LTMuODQ3IDMuODQ3LTMuODQ3IDguNDYzdjQ1NS4zODJxMCA0LjYxNiAzLjg0NyA4LjQ2MyAzLjg0NiAzLjg0NiA4LjQ2MiAzLjg0NlpNMTgyLjMwOS0xMjAuMDAzcS0zMC4zMDcgMC01MS4zMDctMjEtMjEtMjEtMjEtNTEuMzA3di01MTUuMzgxaDU5Ljk5OXY1MTUuMzgxcTAgNC42MTYgMy44NDYgOC40NjIgMy44NDcgMy44NDcgOC40NjIgMy44NDdoNTE1LjM4MnY1OS45OThIMTgyLjMwOVpNMzA5Ljk5OS04MDB2NDgwLTQ4MFoiLz48L3N2Zz4=", fn = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIC05NjAgOTYwIDk2MCI+PHBhdGggZD0iTTE0Mi4zMDktMjIwLjAwMXEtMjkuODI2IDAtNTEuMDY3LTIxLjI0MS0yMS4yNC0yMS4yNC0yMS4yNC01MS4wNjd2LTM3NS4zODJxMC0yOS44MjcgMjEuMjQtNTEuMDY3IDIxLjI0MS0yMS4yNDEgNTEuMDY3LTIxLjI0MWgzNzUuMzgzcTI5LjgyNyAwIDUxLjA2NyAyMS4yNDEgMjEuMjQgMjEuMjQgMjEuMjQgNTEuMDY3djM3NS4zODJxMCAyOS44MjctMjEuMjQgNTEuMDY3LTIxLjI0IDIxLjI0MS01MS4wNjcgMjEuMjQxSDE0Mi4zMDlaTTcwNi4zNDMtNTIwcS0xNS42NTIgMC0yNS45OTgtMTAuMzQ2LTEwLjM0Ni0xMC4zNDYtMTAuMzQ2LTI1Ljk5OHYtMTQ3LjMxMXEwLTE1LjY1MSAxMC4zNDYtMjUuOTk3IDEwLjM0Ni0xMC4zNDcgMjUuOTk4LTEwLjM0N2gxNDcuMzExcTE1LjY1MiAwIDI1Ljk5OCAxMC4zNDcgMTAuMzQ2IDEwLjM0NiAxMC4zNDYgMjUuOTk3djE0Ny4zMTFxMCAxNS42NTItMTAuMzQ2IDI1Ljk5OFE4NjkuMzA2LTUyMCA4NTMuNjU0LTUyMEg3MDYuMzQzWm0yMy42NTUtNTkuOTk5aDEwMC4wMDFWLTY4MEg3MjkuOTk4djEwMC4wMDFaTTE0Mi4zMDktMjgwaDM3NS4zODNxNS4zODUgMCA4Ljg0Ny0zLjQ2MiAzLjQ2Mi0zLjQ2MiAzLjQ2Mi04Ljg0N3YtMzc1LjM4MnEwLTUuMzg1LTMuNDYyLTguODQ3LTMuNDYyLTMuNDYyLTguODQ3LTMuNDYySDE0Mi4zMDlxLTUuMzg1IDAtOC44NDYgMy40NjItMy40NjIgMy40NjItMy40NjIgOC44NDd2Mzc1LjM4MnEwIDUuMzg1IDMuNDYyIDguODQ3IDMuNDYxIDMuNDYyIDguODQ2IDMuNDYyWm0zMS41MzgtODEuOTIzaDMxMi4zMDdsLTEwMS4xNTMtMTM1LTc1IDEwMC01NS03My04MS4xNTQgMTA4Wm01MzIuNDk2IDE0MS45MjJxLTE1LjY1MiAwLTI1Ljk5OC0xMC4zNDctMTAuMzQ2LTEwLjM0Ni0xMC4zNDYtMjUuOTk3di0xNDcuMzExcTAtMTUuNjUyIDEwLjM0Ni0yNS45OThRNjkwLjY5MS00NDAgNzA2LjM0My00NDBoMTQ3LjMxMXExNS42NTIgMCAyNS45OTggMTAuMzQ2IDEwLjM0NiAxMC4zNDYgMTAuMzQ2IDI1Ljk5OHYxNDcuMzExcTAgMTUuNjUxLTEwLjM0NiAyNS45OTctMTAuMzQ2IDEwLjM0Ny0yNS45OTggMTAuMzQ3SDcwNi4zNDNaTTcyOS45OTgtMjgwaDEwMC4wMDF2LTEwMC4wMDFINzI5Ljk5OFYtMjgwWm0tNTk5Ljk5NyAwdi00MDAgNDAwWm01OTkuOTk3LTI5OS45OTlWLTY4MHYxMDAuMDAxWm0wIDI5OS45OTl2LTEwMC4wMDFWLTI4MFoiLz48L3N2Zz4=";
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
      // {
      //   name: 'testing',
      //   icon: galleryIcon,
      //   title: 'Testing',
      // },
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
    const e = R("div", this.CSS.wrapper);
    return this.buttons = [], ue.tunes.concat(this.actions).forEach((o) => {
      const r = this.api.i18n.t(o.title), a = R("div", [this.CSS.buttonBase, this.CSS.button], {
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
const hn = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9ImN1cnJlbnRDb2xvciIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyMCI+PHBhdGggZD0iTTM2MC0zODRoMzg0TDYxOC01NTJsLTkwIDEyMC02Ni04OC0xMDIgMTM2Wm0tNDggMTQ0cS0yOS43IDAtNTAuODUtMjEuMTVRMjQwLTI4Mi4zIDI0MC0zMTJ2LTQ4MHEwLTI5LjcgMjEuMTUtNTAuODVRMjgyLjMtODY0IDMxMi04NjRoNDgwcTI5LjcgMCA1MC44NSAyMS4xNVE4NjQtODIxLjcgODY0LTc5MnY0ODBxMCAyOS43LTIxLjE1IDUwLjg1UTgyMS43LTI0MCA3OTItMjQwSDMxMlptMC03Mmg0ODB2LTQ4MEgzMTJ2NDgwWk0xNjgtOTZxLTI5LjcgMC01MC44NS0yMS4xNVE5Ni0xMzguMyA5Ni0xNjh2LTU1Mmg3MnY1NTJoNTUydjcySDE2OFptMTQ0LTY5NnY0ODAtNDgwWiIvPjwvc3ZnPg==";
function pn(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Oe = { exports: {} };
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
        function h(f, m) {
          for (; f._state === 3; )
            f = f._value;
          f._state !== 0 ? (f._handled = !0, s._immediateFn(function() {
            var p = f._state === 1 ? m.onFulfilled : m.onRejected;
            if (p !== null) {
              var b;
              try {
                b = p(f._value);
              } catch (w) {
                return void v(m.promise, w);
              }
              d(m.promise, b);
            } else
              (f._state === 1 ? d : v)(m.promise, f._value);
          })) : f._deferreds.push(m);
        }
        function d(f, m) {
          try {
            if (m === f)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (m && (typeof m == "object" || typeof m == "function")) {
              var p = m.then;
              if (m instanceof s)
                return f._state = 3, f._value = m, void M(f);
              if (typeof p == "function")
                return void u((b = p, w = m, function() {
                  b.apply(w, arguments);
                }), f);
            }
            f._state = 1, f._value = m, M(f);
          } catch (D) {
            v(f, D);
          }
          var b, w;
        }
        function v(f, m) {
          f._state = 2, f._value = m, M(f);
        }
        function M(f) {
          f._state === 2 && f._deferreds.length === 0 && s._immediateFn(function() {
            f._handled || s._unhandledRejectionFn(f._value);
          });
          for (var m = 0, p = f._deferreds.length; m < p; m++)
            h(f, f._deferreds[m]);
          f._deferreds = null;
        }
        function y(f, m, p) {
          this.onFulfilled = typeof f == "function" ? f : null, this.onRejected = typeof m == "function" ? m : null, this.promise = p;
        }
        function u(f, m) {
          var p = !1;
          try {
            f(function(b) {
              p || (p = !0, d(m, b));
            }, function(b) {
              p || (p = !0, v(m, b));
            });
          } catch (b) {
            if (p)
              return;
            p = !0, v(m, b);
          }
        }
        s.prototype.catch = function(f) {
          return this.then(null, f);
        }, s.prototype.then = function(f, m) {
          var p = new this.constructor(c);
          return h(this, new y(f, m, p)), p;
        }, s.prototype.finally = a.a, s.all = function(f) {
          return new s(function(m, p) {
            if (!f || f.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var b = Array.prototype.slice.call(f);
            if (b.length === 0)
              return m([]);
            var w = b.length;
            function D(z, O) {
              try {
                if (O && (typeof O == "object" || typeof O == "function")) {
                  var A = O.then;
                  if (typeof A == "function")
                    return void A.call(O, function(V) {
                      D(z, V);
                    }, p);
                }
                b[z] = O, --w == 0 && m(b);
              } catch (V) {
                p(V);
              }
            }
            for (var I = 0; I < b.length; I++)
              D(I, b[I]);
          });
        }, s.resolve = function(f) {
          return f && typeof f == "object" && f.constructor === s ? f : new s(function(m) {
            m(f);
          });
        }, s.reject = function(f) {
          return new s(function(m, p) {
            p(f);
          });
        }, s.race = function(f) {
          return new s(function(m, p) {
            for (var b = 0, w = f.length; b < w; b++)
              f[b].then(m, p);
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
      var a, l, c, s, h, d, v, M = o(8), y = (l = function(u) {
        return new Promise(function(f, m) {
          u = s(u), (u = h(u)).beforeSend && u.beforeSend();
          var p = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          p.open(u.method, u.url), p.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(u.headers).forEach(function(w) {
            var D = u.headers[w];
            p.setRequestHeader(w, D);
          });
          var b = u.ratio;
          p.upload.addEventListener("progress", function(w) {
            var D = Math.round(w.loaded / w.total * 100), I = Math.ceil(D * b / 100);
            u.progress(Math.min(I, 100));
          }, !1), p.addEventListener("progress", function(w) {
            var D = Math.round(w.loaded / w.total * 100), I = Math.ceil(D * (100 - b) / 100) + b;
            u.progress(Math.min(I, 100));
          }, !1), p.onreadystatechange = function() {
            if (p.readyState === 4) {
              var w = p.response;
              try {
                w = JSON.parse(w);
              } catch {
              }
              var D = M.parseHeaders(p.getAllResponseHeaders()), I = { body: w, code: p.status, headers: D };
              v(p.status) ? f(I) : m(I);
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
            var m = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || a.JSON;
            }(u);
            (M.isFormData(u.data) || M.isFormElement(u.data)) && (m = a.FORM), u.data = d(u.data, m), m !== y.contentType.FORM && (u.headers["content-type"] = m);
        }
        return u;
      }, d = function() {
        var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case a.URLENCODED:
            return M.urlEncode(u);
          case a.JSON:
            return M.jsonEncode(u);
          case a.FORM:
            return M.formEncode(u);
          default:
            return u;
        }
      }, v = function(u) {
        return u >= 200 && u < 300;
      }, { contentType: a = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: l, get: function(u) {
        return u.method = "GET", l(u);
      }, post: c, transport: function(u) {
        return u = s(u), M.selectFiles(u).then(function(f) {
          for (var m = new FormData(), p = 0; p < f.length; p++)
            m.append(u.fieldName, f[p], f[p].name);
          M.isObject(u.data) && Object.keys(u.data).forEach(function(w) {
            var D = u.data[w];
            m.append(w, D);
          });
          var b = u.beforeSend;
          return u.beforeSend = function() {
            return b(f);
          }, u.data = m, c(u);
        });
      }, selectFiles: function(u) {
        return delete (u = s(u)).beforeSend, M.selectFiles(u);
      } });
      e.exports = y;
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
            var s, h, d, v, M, y = 1, u = {}, f = !1, m = l.document, p = Object.getPrototypeOf && Object.getPrototypeOf(l);
            p = p && p.setTimeout ? p : l, {}.toString.call(l.process) === "[object process]" ? s = function(D) {
              a.nextTick(function() {
                w(D);
              });
            } : function() {
              if (l.postMessage && !l.importScripts) {
                var D = !0, I = l.onmessage;
                return l.onmessage = function() {
                  D = !1;
                }, l.postMessage("", "*"), l.onmessage = I, D;
              }
            }() ? (v = "setImmediate$" + Math.random() + "$", M = function(D) {
              D.source === l && typeof D.data == "string" && D.data.indexOf(v) === 0 && w(+D.data.slice(v.length));
            }, l.addEventListener ? l.addEventListener("message", M, !1) : l.attachEvent("onmessage", M), s = function(D) {
              l.postMessage(v + D, "*");
            }) : l.MessageChannel ? ((d = new MessageChannel()).port1.onmessage = function(D) {
              w(D.data);
            }, s = function(D) {
              d.port2.postMessage(D);
            }) : m && "onreadystatechange" in m.createElement("script") ? (h = m.documentElement, s = function(D) {
              var I = m.createElement("script");
              I.onreadystatechange = function() {
                w(D), I.onreadystatechange = null, h.removeChild(I), I = null;
              }, h.appendChild(I);
            }) : s = function(D) {
              setTimeout(w, 0, D);
            }, p.setImmediate = function(D) {
              typeof D != "function" && (D = new Function("" + D));
              for (var I = new Array(arguments.length - 1), z = 0; z < I.length; z++)
                I[z] = arguments[z + 1];
              var O = { callback: D, args: I };
              return u[y] = O, s(y), y++;
            }, p.clearImmediate = b;
          }
          function b(D) {
            delete u[D];
          }
          function w(D) {
            if (f)
              setTimeout(w, 0, D);
            else {
              var I = u[D];
              if (I) {
                f = !0;
                try {
                  (function(z) {
                    var O = z.callback, A = z.args;
                    switch (A.length) {
                      case 0:
                        O();
                        break;
                      case 1:
                        O(A[0]);
                        break;
                      case 2:
                        O(A[0], A[1]);
                        break;
                      case 3:
                        O(A[0], A[1], A[2]);
                        break;
                      default:
                        O.apply(c, A);
                    }
                  })(I);
                } finally {
                  b(D), f = !1;
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
      var h, d = [], v = !1, M = -1;
      function y() {
        v && h && (v = !1, h.length ? d = h.concat(d) : M = -1, d.length && u());
      }
      function u() {
        if (!v) {
          var p = s(y);
          v = !0;
          for (var b = d.length; b; ) {
            for (h = d, d = []; ++M < b; )
              h && h[M].run();
            M = -1, b = d.length;
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
      function f(p, b) {
        this.fun = p, this.array = b;
      }
      function m() {
      }
      a.nextTick = function(p) {
        var b = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var w = 1; w < arguments.length; w++)
            b[w - 1] = arguments[w];
        d.push(new f(p, b)), d.length !== 1 || v || s(u);
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = m, a.addListener = m, a.once = m, a.off = m, a.removeListener = m, a.removeAllListeners = m, a.emit = m, a.prependListener = m, a.prependOnceListener = m, a.listeners = function(p) {
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
            return Object.keys(d).forEach(function(M) {
              var y = d[M];
              v.append(M, y);
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
          return new Promise(function(v, M) {
            var y = document.createElement("INPUT");
            y.type = "file", d.multiple && y.setAttribute("multiple", "multiple"), d.accept && y.setAttribute("accept", d.accept), y.style.display = "none", document.body.appendChild(y), y.addEventListener("change", function(u) {
              var f = u.target.files;
              v(f), document.body.removeChild(y);
            }, !1), y.click();
          });
        } }, { key: "parseHeaders", value: function(d) {
          var v = d.trim().split(/[\r\n]+/), M = {};
          return v.forEach(function(y) {
            var u = y.split(": "), f = u.shift(), m = u.join(": ");
            f && (M[f] = m);
          }), M;
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
          var d, v, M = h;
          if (s && (M = s + "[" + M + "]"), typeof a[h] == "object" && a[h] !== null)
            d = r(a[h], null, c, M);
          else {
            l && (v = M, M = !isNaN(parseFloat(v)) && isFinite(v) ? l + Number(M) : M);
            var y = a[h];
            y = (y = (y = (y = y === !0 ? "1" : y) === !1 ? "0" : y) === 0 ? "0" : y) || "", d = o(M) + "=" + o(y);
          }
          return d;
        })).join(c).replace(/[!'()*]/g, "") : "";
      };
      e.exports = r;
    }]);
  });
})(Oe);
var gn = Oe.exports;
const ee = /* @__PURE__ */ pn(gn);
class mn {
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
          vn(d) || console.warn("Custom uploader method uploadByFile should return a Promise"), h = d;
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
function vn(i) {
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
      icon: hn,
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
      captionPlaceholder: this.api.i18n.t(e.captionPlaceholder || "Gallery captionnn"),
      buttonContent: e.buttonContent || "",
      uploader: e.uploader || void 0,
      actions: e.actions || [],
      maxElementCount: e.maxElementCount || void 0
    }, this.uploader = new mn({
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
    const t = this.ui.nodes.caption, e = this.ui.nodes.tuneName;
    return this._data.caption = t.innerHTML, this._data.tuneName = e.innerHTML, this.data;
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
