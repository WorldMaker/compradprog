var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/knockout/build/output/knockout-latest.js
var require_knockout_latest = __commonJS({
  "node_modules/knockout/build/output/knockout-latest.js"(exports, module) {
    (function() {
      (function(n) {
        var A = this || (0, eval)("this"), w2 = A.document, R = A.navigator, v = A.jQuery, H = A.JSON;
        v || "undefined" === typeof jQuery || (v = jQuery);
        (function(n2) {
          "function" === typeof define && define.amd ? define(["exports", "require"], n2) : "object" === typeof exports && "object" === typeof module ? n2(module.exports || exports) : n2(A.ko = {});
        })(function(S, T) {
          function K(a2, c) {
            return null === a2 || typeof a2 in W ? a2 === c : false;
          }
          function X(b, c) {
            var d;
            return function() {
              d || (d = a.a.setTimeout(function() {
                d = n;
                b();
              }, c));
            };
          }
          function Y(b, c) {
            var d;
            return function() {
              clearTimeout(d);
              d = a.a.setTimeout(b, c);
            };
          }
          function Z(a2, c) {
            c && "change" !== c ? "beforeChange" === c ? this.pc(a2) : this.gb(a2, c) : this.qc(a2);
          }
          function aa(a2, c) {
            null !== c && c.s && c.s();
          }
          function ba(a2, c) {
            var d = this.qd, e = d[r];
            e.ra || (this.Qb && this.mb[c] ? (d.uc(c, a2, this.mb[c]), this.mb[c] = null, --this.Qb) : e.I[c] || d.uc(c, a2, e.J ? { da: a2 } : d.$c(a2)), a2.Ja && a2.gd());
          }
          var a = "undefined" !== typeof S ? S : {};
          a.b = function(b, c) {
            for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++)
              e = e[d[f]];
            e[d[d.length - 1]] = c;
          };
          a.L = function(a2, c, d) {
            a2[c] = d;
          };
          a.version = "3.5.1";
          a.b(
            "version",
            a.version
          );
          a.options = { deferUpdates: false, useOnlyNativeEvents: false, foreachHidesDestroyed: false };
          a.a = function() {
            function b(a2, b2) {
              for (var c2 in a2)
                f.call(a2, c2) && b2(c2, a2[c2]);
            }
            function c(a2, b2) {
              if (b2)
                for (var c2 in b2)
                  f.call(b2, c2) && (a2[c2] = b2[c2]);
              return a2;
            }
            function d(a2, b2) {
              a2.__proto__ = b2;
              return a2;
            }
            function e(b2, c2, d2, e2) {
              var l2 = b2[c2].match(q) || [];
              a.a.D(d2.match(q), function(b3) {
                a.a.Na(l2, b3, e2);
              });
              b2[c2] = l2.join(" ");
            }
            var f = Object.prototype.hasOwnProperty, g = { __proto__: [] } instanceof Array, h = "function" === typeof Symbol, m = {}, k = {};
            m[R && /Firefox\/2/i.test(R.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
            m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
            b(m, function(a2, b2) {
              if (b2.length)
                for (var c2 = 0, d2 = b2.length; c2 < d2; c2++)
                  k[b2[c2]] = a2;
            });
            var l = { propertychange: true }, p = w2 && function() {
              for (var a2 = 3, b2 = w2.createElement("div"), c2 = b2.getElementsByTagName("i"); b2.innerHTML = "<!--[if gt IE " + ++a2 + "]><i></i><![endif]-->", c2[0]; )
                ;
              return 4 < a2 ? a2 : n;
            }(), q = /\S+/g, t;
            return {
              Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
              D: function(a2, b2, c2) {
                for (var d2 = 0, e2 = a2.length; d2 < e2; d2++)
                  b2.call(c2, a2[d2], d2, a2);
              },
              A: "function" == typeof Array.prototype.indexOf ? function(a2, b2) {
                return Array.prototype.indexOf.call(a2, b2);
              } : function(a2, b2) {
                for (var c2 = 0, d2 = a2.length; c2 < d2; c2++)
                  if (a2[c2] === b2)
                    return c2;
                return -1;
              },
              Lb: function(a2, b2, c2) {
                for (var d2 = 0, e2 = a2.length; d2 < e2; d2++)
                  if (b2.call(c2, a2[d2], d2, a2))
                    return a2[d2];
                return n;
              },
              Pa: function(b2, c2) {
                var d2 = a.a.A(b2, c2);
                0 < d2 ? b2.splice(d2, 1) : 0 === d2 && b2.shift();
              },
              wc: function(b2) {
                var c2 = [];
                b2 && a.a.D(b2, function(b3) {
                  0 > a.a.A(c2, b3) && c2.push(b3);
                });
                return c2;
              },
              Mb: function(a2, b2, c2) {
                var d2 = [];
                if (a2)
                  for (var e2 = 0, l2 = a2.length; e2 < l2; e2++)
                    d2.push(b2.call(c2, a2[e2], e2));
                return d2;
              },
              jb: function(a2, b2, c2) {
                var d2 = [];
                if (a2)
                  for (var e2 = 0, l2 = a2.length; e2 < l2; e2++)
                    b2.call(c2, a2[e2], e2) && d2.push(a2[e2]);
                return d2;
              },
              Nb: function(a2, b2) {
                if (b2 instanceof Array)
                  a2.push.apply(a2, b2);
                else
                  for (var c2 = 0, d2 = b2.length; c2 < d2; c2++)
                    a2.push(b2[c2]);
                return a2;
              },
              Na: function(b2, c2, d2) {
                var e2 = a.a.A(a.a.bc(b2), c2);
                0 > e2 ? d2 && b2.push(c2) : d2 || b2.splice(e2, 1);
              },
              Ba: g,
              extend: c,
              setPrototypeOf: d,
              Ab: g ? d : c,
              P: b,
              Ga: function(a2, b2, c2) {
                if (!a2)
                  return a2;
                var d2 = {}, e2;
                for (e2 in a2)
                  f.call(a2, e2) && (d2[e2] = b2.call(c2, a2[e2], e2, a2));
                return d2;
              },
              Tb: function(b2) {
                for (; b2.firstChild; )
                  a.removeNode(b2.firstChild);
              },
              Yb: function(b2) {
                b2 = a.a.la(b2);
                for (var c2 = (b2[0] && b2[0].ownerDocument || w2).createElement("div"), d2 = 0, e2 = b2.length; d2 < e2; d2++)
                  c2.appendChild(a.oa(b2[d2]));
                return c2;
              },
              Ca: function(b2, c2) {
                for (var d2 = 0, e2 = b2.length, l2 = []; d2 < e2; d2++) {
                  var k2 = b2[d2].cloneNode(true);
                  l2.push(c2 ? a.oa(k2) : k2);
                }
                return l2;
              },
              va: function(b2, c2) {
                a.a.Tb(b2);
                if (c2)
                  for (var d2 = 0, e2 = c2.length; d2 < e2; d2++)
                    b2.appendChild(c2[d2]);
              },
              Xc: function(b2, c2) {
                var d2 = b2.nodeType ? [b2] : b2;
                if (0 < d2.length) {
                  for (var e2 = d2[0], l2 = e2.parentNode, k2 = 0, f2 = c2.length; k2 < f2; k2++)
                    l2.insertBefore(c2[k2], e2);
                  k2 = 0;
                  for (f2 = d2.length; k2 < f2; k2++)
                    a.removeNode(d2[k2]);
                }
              },
              Ua: function(a2, b2) {
                if (a2.length) {
                  for (b2 = 8 === b2.nodeType && b2.parentNode || b2; a2.length && a2[0].parentNode !== b2; )
                    a2.splice(0, 1);
                  for (; 1 < a2.length && a2[a2.length - 1].parentNode !== b2; )
                    a2.length--;
                  if (1 < a2.length) {
                    var c2 = a2[0], d2 = a2[a2.length - 1];
                    for (a2.length = 0; c2 !== d2; )
                      a2.push(c2), c2 = c2.nextSibling;
                    a2.push(d2);
                  }
                }
                return a2;
              },
              Zc: function(a2, b2) {
                7 > p ? a2.setAttribute("selected", b2) : a2.selected = b2;
              },
              Db: function(a2) {
                return null === a2 || a2 === n ? "" : a2.trim ? a2.trim() : a2.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
              },
              Ud: function(a2, b2) {
                a2 = a2 || "";
                return b2.length > a2.length ? false : a2.substring(0, b2.length) === b2;
              },
              vd: function(a2, b2) {
                if (a2 === b2)
                  return true;
                if (11 === a2.nodeType)
                  return false;
                if (b2.contains)
                  return b2.contains(1 !== a2.nodeType ? a2.parentNode : a2);
                if (b2.compareDocumentPosition)
                  return 16 == (b2.compareDocumentPosition(a2) & 16);
                for (; a2 && a2 != b2; )
                  a2 = a2.parentNode;
                return !!a2;
              },
              Sb: function(b2) {
                return a.a.vd(b2, b2.ownerDocument.documentElement);
              },
              kd: function(b2) {
                return !!a.a.Lb(b2, a.a.Sb);
              },
              R: function(a2) {
                return a2 && a2.tagName && a2.tagName.toLowerCase();
              },
              Ac: function(b2) {
                return a.onError ? function() {
                  try {
                    return b2.apply(this, arguments);
                  } catch (c2) {
                    throw a.onError && a.onError(c2), c2;
                  }
                } : b2;
              },
              setTimeout: function(b2, c2) {
                return setTimeout(a.a.Ac(b2), c2);
              },
              Gc: function(b2) {
                setTimeout(function() {
                  a.onError && a.onError(b2);
                  throw b2;
                }, 0);
              },
              B: function(b2, c2, d2) {
                var e2 = a.a.Ac(d2);
                d2 = l[c2];
                if (a.options.useOnlyNativeEvents || d2 || !v)
                  if (d2 || "function" != typeof b2.addEventListener)
                    if ("undefined" != typeof b2.attachEvent) {
                      var k2 = function(a2) {
                        e2.call(b2, a2);
                      }, f2 = "on" + c2;
                      b2.attachEvent(
                        f2,
                        k2
                      );
                      a.a.K.za(b2, function() {
                        b2.detachEvent(f2, k2);
                      });
                    } else
                      throw Error("Browser doesn't support addEventListener or attachEvent");
                  else
                    b2.addEventListener(c2, e2, false);
                else
                  t || (t = "function" == typeof v(b2).on ? "on" : "bind"), v(b2)[t](c2, e2);
              },
              Fb: function(b2, c2) {
                if (!b2 || !b2.nodeType)
                  throw Error("element must be a DOM node when calling triggerEvent");
                var d2;
                "input" === a.a.R(b2) && b2.type && "click" == c2.toLowerCase() ? (d2 = b2.type, d2 = "checkbox" == d2 || "radio" == d2) : d2 = false;
                if (a.options.useOnlyNativeEvents || !v || d2)
                  if ("function" == typeof w2.createEvent)
                    if ("function" == typeof b2.dispatchEvent)
                      d2 = w2.createEvent(k[c2] || "HTMLEvents"), d2.initEvent(c2, true, true, A, 0, 0, 0, 0, 0, false, false, false, false, 0, b2), b2.dispatchEvent(d2);
                    else
                      throw Error("The supplied element doesn't support dispatchEvent");
                  else if (d2 && b2.click)
                    b2.click();
                  else if ("undefined" != typeof b2.fireEvent)
                    b2.fireEvent("on" + c2);
                  else
                    throw Error("Browser doesn't support triggering events");
                else
                  v(b2).trigger(c2);
              },
              f: function(b2) {
                return a.O(b2) ? b2() : b2;
              },
              bc: function(b2) {
                return a.O(b2) ? b2.v() : b2;
              },
              Eb: function(b2, c2, d2) {
                var l2;
                c2 && ("object" === typeof b2.classList ? (l2 = b2.classList[d2 ? "add" : "remove"], a.a.D(c2.match(q), function(a2) {
                  l2.call(b2.classList, a2);
                })) : "string" === typeof b2.className.baseVal ? e(b2.className, "baseVal", c2, d2) : e(b2, "className", c2, d2));
              },
              Bb: function(b2, c2) {
                var d2 = a.a.f(c2);
                if (null === d2 || d2 === n)
                  d2 = "";
                var e2 = a.h.firstChild(b2);
                !e2 || 3 != e2.nodeType || a.h.nextSibling(e2) ? a.h.va(b2, [b2.ownerDocument.createTextNode(d2)]) : e2.data = d2;
                a.a.Ad(b2);
              },
              Yc: function(a2, b2) {
                a2.name = b2;
                if (7 >= p)
                  try {
                    var c2 = a2.name.replace(/[&<>'"]/g, function(a3) {
                      return "&#" + a3.charCodeAt(0) + ";";
                    });
                    a2.mergeAttributes(w2.createElement("<input name='" + c2 + "'/>"), false);
                  } catch (d2) {
                  }
              },
              Ad: function(a2) {
                9 <= p && (a2 = 1 == a2.nodeType ? a2 : a2.parentNode, a2.style && (a2.style.zoom = a2.style.zoom));
              },
              wd: function(a2) {
                if (p) {
                  var b2 = a2.style.width;
                  a2.style.width = 0;
                  a2.style.width = b2;
                }
              },
              Pd: function(b2, c2) {
                b2 = a.a.f(b2);
                c2 = a.a.f(c2);
                for (var d2 = [], e2 = b2; e2 <= c2; e2++)
                  d2.push(e2);
                return d2;
              },
              la: function(a2) {
                for (var b2 = [], c2 = 0, d2 = a2.length; c2 < d2; c2++)
                  b2.push(a2[c2]);
                return b2;
              },
              Da: function(a2) {
                return h ? Symbol(a2) : a2;
              },
              Zd: 6 === p,
              $d: 7 === p,
              W: p,
              Lc: function(b2, c2) {
                for (var d2 = a.a.la(b2.getElementsByTagName("input")).concat(a.a.la(b2.getElementsByTagName("textarea"))), e2 = "string" == typeof c2 ? function(a2) {
                  return a2.name === c2;
                } : function(a2) {
                  return c2.test(a2.name);
                }, l2 = [], k2 = d2.length - 1; 0 <= k2; k2--)
                  e2(d2[k2]) && l2.push(d2[k2]);
                return l2;
              },
              Nd: function(b2) {
                return "string" == typeof b2 && (b2 = a.a.Db(b2)) ? H && H.parse ? H.parse(b2) : new Function("return " + b2)() : null;
              },
              hc: function(b2, c2, d2) {
                if (!H || !H.stringify)
                  throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                return H.stringify(a.a.f(b2), c2, d2);
              },
              Od: function(c2, d2, e2) {
                e2 = e2 || {};
                var l2 = e2.params || {}, k2 = e2.includeFields || this.Jc, f2 = c2;
                if ("object" == typeof c2 && "form" === a.a.R(c2))
                  for (var f2 = c2.action, h2 = k2.length - 1; 0 <= h2; h2--)
                    for (var g2 = a.a.Lc(c2, k2[h2]), m2 = g2.length - 1; 0 <= m2; m2--)
                      l2[g2[m2].name] = g2[m2].value;
                d2 = a.a.f(d2);
                var p2 = w2.createElement("form");
                p2.style.display = "none";
                p2.action = f2;
                p2.method = "post";
                for (var q2 in d2)
                  c2 = w2.createElement("input"), c2.type = "hidden", c2.name = q2, c2.value = a.a.hc(a.a.f(d2[q2])), p2.appendChild(c2);
                b(l2, function(a2, b2) {
                  var c3 = w2.createElement("input");
                  c3.type = "hidden";
                  c3.name = a2;
                  c3.value = b2;
                  p2.appendChild(c3);
                });
                w2.body.appendChild(p2);
                e2.submitter ? e2.submitter(p2) : p2.submit();
                setTimeout(function() {
                  p2.parentNode.removeChild(p2);
                }, 0);
              }
            };
          }();
          a.b("utils", a.a);
          a.b("utils.arrayForEach", a.a.D);
          a.b("utils.arrayFirst", a.a.Lb);
          a.b("utils.arrayFilter", a.a.jb);
          a.b("utils.arrayGetDistinctValues", a.a.wc);
          a.b("utils.arrayIndexOf", a.a.A);
          a.b("utils.arrayMap", a.a.Mb);
          a.b("utils.arrayPushAll", a.a.Nb);
          a.b("utils.arrayRemoveItem", a.a.Pa);
          a.b("utils.cloneNodes", a.a.Ca);
          a.b(
            "utils.createSymbolOrString",
            a.a.Da
          );
          a.b("utils.extend", a.a.extend);
          a.b("utils.fieldsIncludedWithJsonPost", a.a.Jc);
          a.b("utils.getFormFields", a.a.Lc);
          a.b("utils.objectMap", a.a.Ga);
          a.b("utils.peekObservable", a.a.bc);
          a.b("utils.postJson", a.a.Od);
          a.b("utils.parseJson", a.a.Nd);
          a.b("utils.registerEventHandler", a.a.B);
          a.b("utils.stringifyJson", a.a.hc);
          a.b("utils.range", a.a.Pd);
          a.b("utils.toggleDomNodeCssClass", a.a.Eb);
          a.b("utils.triggerEvent", a.a.Fb);
          a.b("utils.unwrapObservable", a.a.f);
          a.b("utils.objectForEach", a.a.P);
          a.b(
            "utils.addOrRemoveItem",
            a.a.Na
          );
          a.b("utils.setTextContent", a.a.Bb);
          a.b("unwrap", a.a.f);
          Function.prototype.bind || (Function.prototype.bind = function(a2) {
            var c = this;
            if (1 === arguments.length)
              return function() {
                return c.apply(a2, arguments);
              };
            var d = Array.prototype.slice.call(arguments, 1);
            return function() {
              var e = d.slice(0);
              e.push.apply(e, arguments);
              return c.apply(a2, e);
            };
          });
          a.a.g = new function() {
            var b = 0, c = "__ko__" + (/* @__PURE__ */ new Date()).getTime(), d = {}, e, f;
            a.a.W ? (e = function(a2, e2) {
              var f2 = a2[c];
              if (!f2 || "null" === f2 || !d[f2]) {
                if (!e2)
                  return n;
                f2 = a2[c] = "ko" + b++;
                d[f2] = {};
              }
              return d[f2];
            }, f = function(a2) {
              var b2 = a2[c];
              return b2 ? (delete d[b2], a2[c] = null, true) : false;
            }) : (e = function(a2, b2) {
              var d2 = a2[c];
              !d2 && b2 && (d2 = a2[c] = {});
              return d2;
            }, f = function(a2) {
              return a2[c] ? (delete a2[c], true) : false;
            });
            return { get: function(a2, b2) {
              var c2 = e(a2, false);
              return c2 && c2[b2];
            }, set: function(a2, b2, c2) {
              (a2 = e(a2, c2 !== n)) && (a2[b2] = c2);
            }, Ub: function(a2, b2, c2) {
              a2 = e(a2, true);
              return a2[b2] || (a2[b2] = c2);
            }, clear: f, Z: function() {
              return b++ + c;
            } };
          }();
          a.b("utils.domData", a.a.g);
          a.b("utils.domData.clear", a.a.g.clear);
          a.a.K = new function() {
            function b(b2, c2) {
              var d2 = a.a.g.get(b2, e);
              d2 === n && c2 && (d2 = [], a.a.g.set(b2, e, d2));
              return d2;
            }
            function c(c2) {
              var e2 = b(c2, false);
              if (e2)
                for (var e2 = e2.slice(0), k = 0; k < e2.length; k++)
                  e2[k](c2);
              a.a.g.clear(c2);
              a.a.K.cleanExternalData(c2);
              g[c2.nodeType] && d(c2.childNodes, true);
            }
            function d(b2, d2) {
              for (var e2 = [], l, f2 = 0; f2 < b2.length; f2++)
                if (!d2 || 8 === b2[f2].nodeType) {
                  if (c(e2[e2.length] = l = b2[f2]), b2[f2] !== l)
                    for (; f2-- && -1 == a.a.A(e2, b2[f2]); )
                      ;
                }
            }
            var e = a.a.g.Z(), f = { 1: true, 8: true, 9: true }, g = { 1: true, 9: true };
            return { za: function(a2, c2) {
              if ("function" != typeof c2)
                throw Error("Callback must be a function");
              b(a2, true).push(c2);
            }, yb: function(c2, d2) {
              var f2 = b(c2, false);
              f2 && (a.a.Pa(f2, d2), 0 == f2.length && a.a.g.set(c2, e, n));
            }, oa: function(b2) {
              a.u.G(function() {
                f[b2.nodeType] && (c(b2), g[b2.nodeType] && d(b2.getElementsByTagName("*")));
              });
              return b2;
            }, removeNode: function(b2) {
              a.oa(b2);
              b2.parentNode && b2.parentNode.removeChild(b2);
            }, cleanExternalData: function(a2) {
              v && "function" == typeof v.cleanData && v.cleanData([a2]);
            } };
          }();
          a.oa = a.a.K.oa;
          a.removeNode = a.a.K.removeNode;
          a.b("cleanNode", a.oa);
          a.b("removeNode", a.removeNode);
          a.b("utils.domNodeDisposal", a.a.K);
          a.b(
            "utils.domNodeDisposal.addDisposeCallback",
            a.a.K.za
          );
          a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.K.yb);
          (function() {
            var b = [0, "", ""], c = [1, "<table>", "</table>"], d = [3, "<table><tbody><tr>", "</tr></tbody></table>"], e = [1, "<select multiple='multiple'>", "</select>"], f = { thead: c, tbody: c, tfoot: c, tr: [2, "<table><tbody>", "</tbody></table>"], td: d, th: d, option: e, optgroup: e }, g = 8 >= a.a.W;
            a.a.ua = function(c2, d2) {
              var e2;
              if (v)
                if (v.parseHTML)
                  e2 = v.parseHTML(c2, d2) || [];
                else {
                  if ((e2 = v.clean([c2], d2)) && e2[0]) {
                    for (var l = e2[0]; l.parentNode && 11 !== l.parentNode.nodeType; )
                      l = l.parentNode;
                    l.parentNode && l.parentNode.removeChild(l);
                  }
                }
              else {
                (e2 = d2) || (e2 = w2);
                var l = e2.parentWindow || e2.defaultView || A, p = a.a.Db(c2).toLowerCase(), q = e2.createElement("div"), t;
                t = (p = p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && f[p[1]] || b;
                p = t[0];
                t = "ignored<div>" + t[1] + c2 + t[2] + "</div>";
                "function" == typeof l.innerShiv ? q.appendChild(l.innerShiv(t)) : (g && e2.body.appendChild(q), q.innerHTML = t, g && q.parentNode.removeChild(q));
                for (; p--; )
                  q = q.lastChild;
                e2 = a.a.la(q.lastChild.childNodes);
              }
              return e2;
            };
            a.a.Md = function(b2, c2) {
              var d2 = a.a.ua(
                b2,
                c2
              );
              return d2.length && d2[0].parentElement || a.a.Yb(d2);
            };
            a.a.fc = function(b2, c2) {
              a.a.Tb(b2);
              c2 = a.a.f(c2);
              if (null !== c2 && c2 !== n)
                if ("string" != typeof c2 && (c2 = c2.toString()), v)
                  v(b2).html(c2);
                else
                  for (var d2 = a.a.ua(c2, b2.ownerDocument), e2 = 0; e2 < d2.length; e2++)
                    b2.appendChild(d2[e2]);
            };
          })();
          a.b("utils.parseHtmlFragment", a.a.ua);
          a.b("utils.setHtml", a.a.fc);
          a.aa = function() {
            function b(c2, e) {
              if (c2) {
                if (8 == c2.nodeType) {
                  var f = a.aa.Uc(c2.nodeValue);
                  null != f && e.push({ ud: c2, Kd: f });
                } else if (1 == c2.nodeType)
                  for (var f = 0, g = c2.childNodes, h = g.length; f < h; f++)
                    b(
                      g[f],
                      e
                    );
              }
            }
            var c = {};
            return { Xb: function(a2) {
              if ("function" != typeof a2)
                throw Error("You can only pass a function to ko.memoization.memoize()");
              var b2 = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
              c[b2] = a2;
              return "<!--[ko_memo:" + b2 + "]-->";
            }, bd: function(a2, b2) {
              var f = c[a2];
              if (f === n)
                throw Error("Couldn't find any memo with ID " + a2 + ". Perhaps it's already been unmemoized.");
              try {
                return f.apply(null, b2 || []), true;
              } finally {
                delete c[a2];
              }
            }, cd: function(c2, e) {
              var f = [];
              b(c2, f);
              for (var g = 0, h = f.length; g < h; g++) {
                var m = f[g].ud, k = [m];
                e && a.a.Nb(k, e);
                a.aa.bd(f[g].Kd, k);
                m.nodeValue = "";
                m.parentNode && m.parentNode.removeChild(m);
              }
            }, Uc: function(a2) {
              return (a2 = a2.match(/^\[ko_memo\:(.*?)\]$/)) ? a2[1] : null;
            } };
          }();
          a.b("memoization", a.aa);
          a.b("memoization.memoize", a.aa.Xb);
          a.b("memoization.unmemoize", a.aa.bd);
          a.b("memoization.parseMemoText", a.aa.Uc);
          a.b("memoization.unmemoizeDomNodeAndDescendants", a.aa.cd);
          a.na = function() {
            function b() {
              if (f) {
                for (var b2 = f, c2 = 0, d2; h < f; )
                  if (d2 = e[h++]) {
                    if (h > b2) {
                      if (5e3 <= ++c2) {
                        h = f;
                        a.a.Gc(Error("'Too much recursion' after processing " + c2 + " task groups."));
                        break;
                      }
                      b2 = f;
                    }
                    try {
                      d2();
                    } catch (p) {
                      a.a.Gc(p);
                    }
                  }
              }
            }
            function c() {
              b();
              h = f = e.length = 0;
            }
            var d, e = [], f = 0, g = 1, h = 0;
            A.MutationObserver ? d = function(a2) {
              var b2 = w2.createElement("div");
              new MutationObserver(a2).observe(b2, { attributes: true });
              return function() {
                b2.classList.toggle("foo");
              };
            }(c) : d = w2 && "onreadystatechange" in w2.createElement("script") ? function(a2) {
              var b2 = w2.createElement("script");
              b2.onreadystatechange = function() {
                b2.onreadystatechange = null;
                w2.documentElement.removeChild(b2);
                b2 = null;
                a2();
              };
              w2.documentElement.appendChild(b2);
            } : function(a2) {
              setTimeout(a2, 0);
            };
            return { scheduler: d, zb: function(b2) {
              f || a.na.scheduler(c);
              e[f++] = b2;
              return g++;
            }, cancel: function(a2) {
              a2 = a2 - (g - f);
              a2 >= h && a2 < f && (e[a2] = null);
            }, resetForTesting: function() {
              var a2 = f - h;
              h = f = e.length = 0;
              return a2;
            }, Sd: b };
          }();
          a.b("tasks", a.na);
          a.b("tasks.schedule", a.na.zb);
          a.b("tasks.runEarly", a.na.Sd);
          a.Ta = { throttle: function(b, c) {
            b.throttleEvaluation = c;
            var d = null;
            return a.$({ read: b, write: function(e) {
              clearTimeout(d);
              d = a.a.setTimeout(
                function() {
                  b(e);
                },
                c
              );
            } });
          }, rateLimit: function(a2, c) {
            var d, e, f;
            "number" == typeof c ? d = c : (d = c.timeout, e = c.method);
            a2.Hb = false;
            f = "function" == typeof e ? e : "notifyWhenChangesStop" == e ? Y : X;
            a2.ub(function(a3) {
              return f(a3, d, c);
            });
          }, deferred: function(b, c) {
            if (true !== c)
              throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
            b.Hb || (b.Hb = true, b.ub(function(c2) {
              var e, f = false;
              return function() {
                if (!f) {
                  a.na.cancel(e);
                  e = a.na.zb(c2);
                  try {
                    f = true, b.notifySubscribers(n, "dirty");
                  } finally {
                    f = false;
                  }
                }
              };
            }));
          }, notify: function(a2, c) {
            a2.equalityComparer = "always" == c ? null : K;
          } };
          var W = { undefined: 1, "boolean": 1, number: 1, string: 1 };
          a.b("extenders", a.Ta);
          a.ic = function(b, c, d) {
            this.da = b;
            this.lc = c;
            this.mc = d;
            this.Ib = false;
            this.fb = this.Jb = null;
            a.L(this, "dispose", this.s);
            a.L(this, "disposeWhenNodeIsRemoved", this.l);
          };
          a.ic.prototype.s = function() {
            this.Ib || (this.fb && a.a.K.yb(this.Jb, this.fb), this.Ib = true, this.mc(), this.da = this.lc = this.mc = this.Jb = this.fb = null);
          };
          a.ic.prototype.l = function(b) {
            this.Jb = b;
            a.a.K.za(b, this.fb = this.s.bind(this));
          };
          a.T = function() {
            a.a.Ab(this, D);
            D.qb(this);
          };
          var D = {
            qb: function(a2) {
              a2.U = { change: [] };
              a2.sc = 1;
            },
            subscribe: function(b, c, d) {
              var e = this;
              d = d || "change";
              var f = new a.ic(e, c ? b.bind(c) : b, function() {
                a.a.Pa(e.U[d], f);
                e.hb && e.hb(d);
              });
              e.Qa && e.Qa(d);
              e.U[d] || (e.U[d] = []);
              e.U[d].push(f);
              return f;
            },
            notifySubscribers: function(b, c) {
              c = c || "change";
              "change" === c && this.Gb();
              if (this.Wa(c)) {
                var d = "change" === c && this.ed || this.U[c].slice(0);
                try {
                  a.u.xc();
                  for (var e = 0, f; f = d[e]; ++e)
                    f.Ib || f.lc(b);
                } finally {
                  a.u.end();
                }
              }
            },
            ob: function() {
              return this.sc;
            },
            Dd: function(a2) {
              return this.ob() !== a2;
            },
            Gb: function() {
              ++this.sc;
            },
            ub: function(b) {
              var c = this, d = a.O(c), e, f, g, h, m;
              c.gb || (c.gb = c.notifySubscribers, c.notifySubscribers = Z);
              var k = b(function() {
                c.Ja = false;
                d && h === c && (h = c.nc ? c.nc() : c());
                var a2 = f || m && c.sb(g, h);
                m = f = e = false;
                a2 && c.gb(g = h);
              });
              c.qc = function(a2, b2) {
                b2 && c.Ja || (m = !b2);
                c.ed = c.U.change.slice(0);
                c.Ja = e = true;
                h = a2;
                k();
              };
              c.pc = function(a2) {
                e || (g = a2, c.gb(a2, "beforeChange"));
              };
              c.rc = function() {
                m = true;
              };
              c.gd = function() {
                c.sb(g, c.v(true)) && (f = true);
              };
            },
            Wa: function(a2) {
              return this.U[a2] && this.U[a2].length;
            },
            Bd: function(b) {
              if (b)
                return this.U[b] && this.U[b].length || 0;
              var c = 0;
              a.a.P(this.U, function(a2, b2) {
                "dirty" !== a2 && (c += b2.length);
              });
              return c;
            },
            sb: function(a2, c) {
              return !this.equalityComparer || !this.equalityComparer(a2, c);
            },
            toString: function() {
              return "[object Object]";
            },
            extend: function(b) {
              var c = this;
              b && a.a.P(b, function(b2, e) {
                var f = a.Ta[b2];
                "function" == typeof f && (c = f(c, e) || c);
              });
              return c;
            }
          };
          a.L(D, "init", D.qb);
          a.L(D, "subscribe", D.subscribe);
          a.L(D, "extend", D.extend);
          a.L(D, "getSubscriptionsCount", D.Bd);
          a.a.Ba && a.a.setPrototypeOf(
            D,
            Function.prototype
          );
          a.T.fn = D;
          a.Qc = function(a2) {
            return null != a2 && "function" == typeof a2.subscribe && "function" == typeof a2.notifySubscribers;
          };
          a.b("subscribable", a.T);
          a.b("isSubscribable", a.Qc);
          a.S = a.u = function() {
            function b(a2) {
              d.push(e);
              e = a2;
            }
            function c() {
              e = d.pop();
            }
            var d = [], e, f = 0;
            return {
              xc: b,
              end: c,
              cc: function(b2) {
                if (e) {
                  if (!a.Qc(b2))
                    throw Error("Only subscribable things can act as dependencies");
                  e.od.call(e.pd, b2, b2.fd || (b2.fd = ++f));
                }
              },
              G: function(a2, d2, e2) {
                try {
                  return b(), a2.apply(d2, e2 || []);
                } finally {
                  c();
                }
              },
              qa: function() {
                if (e)
                  return e.o.qa();
              },
              Va: function() {
                if (e)
                  return e.o.Va();
              },
              Ya: function() {
                if (e)
                  return e.Ya;
              },
              o: function() {
                if (e)
                  return e.o;
              }
            };
          }();
          a.b("computedContext", a.S);
          a.b("computedContext.getDependenciesCount", a.S.qa);
          a.b("computedContext.getDependencies", a.S.Va);
          a.b("computedContext.isInitial", a.S.Ya);
          a.b("computedContext.registerDependency", a.S.cc);
          a.b("ignoreDependencies", a.Yd = a.u.G);
          var I = a.a.Da("_latestValue");
          a.ta = function(b) {
            function c() {
              if (0 < arguments.length)
                return c.sb(c[I], arguments[0]) && (c.ya(), c[I] = arguments[0], c.xa()), this;
              a.u.cc(c);
              return c[I];
            }
            c[I] = b;
            a.a.Ba || a.a.extend(c, a.T.fn);
            a.T.fn.qb(c);
            a.a.Ab(c, F);
            a.options.deferUpdates && a.Ta.deferred(c, true);
            return c;
          };
          var F = { equalityComparer: K, v: function() {
            return this[I];
          }, xa: function() {
            this.notifySubscribers(this[I], "spectate");
            this.notifySubscribers(this[I]);
          }, ya: function() {
            this.notifySubscribers(this[I], "beforeChange");
          } };
          a.a.Ba && a.a.setPrototypeOf(F, a.T.fn);
          var G = a.ta.Ma = "__ko_proto__";
          F[G] = a.ta;
          a.O = function(b) {
            if ((b = "function" == typeof b && b[G]) && b !== F[G] && b !== a.o.fn[G])
              throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
            return !!b;
          };
          a.Za = function(b) {
            return "function" == typeof b && (b[G] === F[G] || b[G] === a.o.fn[G] && b.Nc);
          };
          a.b("observable", a.ta);
          a.b("isObservable", a.O);
          a.b("isWriteableObservable", a.Za);
          a.b("isWritableObservable", a.Za);
          a.b("observable.fn", F);
          a.L(F, "peek", F.v);
          a.L(F, "valueHasMutated", F.xa);
          a.L(F, "valueWillMutate", F.ya);
          a.Ha = function(b) {
            b = b || [];
            if ("object" != typeof b || !("length" in b))
              throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
            b = a.ta(b);
            a.a.Ab(
              b,
              a.Ha.fn
            );
            return b.extend({ trackArrayChanges: true });
          };
          a.Ha.fn = { remove: function(b) {
            for (var c = this.v(), d = [], e = "function" != typeof b || a.O(b) ? function(a2) {
              return a2 === b;
            } : b, f = 0; f < c.length; f++) {
              var g = c[f];
              if (e(g)) {
                0 === d.length && this.ya();
                if (c[f] !== g)
                  throw Error("Array modified during remove; cannot remove item");
                d.push(g);
                c.splice(f, 1);
                f--;
              }
            }
            d.length && this.xa();
            return d;
          }, removeAll: function(b) {
            if (b === n) {
              var c = this.v(), d = c.slice(0);
              this.ya();
              c.splice(0, c.length);
              this.xa();
              return d;
            }
            return b ? this.remove(function(c2) {
              return 0 <= a.a.A(b, c2);
            }) : [];
          }, destroy: function(b) {
            var c = this.v(), d = "function" != typeof b || a.O(b) ? function(a2) {
              return a2 === b;
            } : b;
            this.ya();
            for (var e = c.length - 1; 0 <= e; e--) {
              var f = c[e];
              d(f) && (f._destroy = true);
            }
            this.xa();
          }, destroyAll: function(b) {
            return b === n ? this.destroy(function() {
              return true;
            }) : b ? this.destroy(function(c) {
              return 0 <= a.a.A(b, c);
            }) : [];
          }, indexOf: function(b) {
            var c = this();
            return a.a.A(c, b);
          }, replace: function(a2, c) {
            var d = this.indexOf(a2);
            0 <= d && (this.ya(), this.v()[d] = c, this.xa());
          }, sorted: function(a2) {
            var c = this().slice(0);
            return a2 ? c.sort(a2) : c.sort();
          }, reversed: function() {
            return this().slice(0).reverse();
          } };
          a.a.Ba && a.a.setPrototypeOf(a.Ha.fn, a.ta.fn);
          a.a.D("pop push reverse shift sort splice unshift".split(" "), function(b) {
            a.Ha.fn[b] = function() {
              var a2 = this.v();
              this.ya();
              this.zc(a2, b, arguments);
              var d = a2[b].apply(a2, arguments);
              this.xa();
              return d === a2 ? this : d;
            };
          });
          a.a.D(["slice"], function(b) {
            a.Ha.fn[b] = function() {
              var a2 = this();
              return a2[b].apply(a2, arguments);
            };
          });
          a.Pc = function(b) {
            return a.O(b) && "function" == typeof b.remove && "function" == typeof b.push;
          };
          a.b("observableArray", a.Ha);
          a.b("isObservableArray", a.Pc);
          a.Ta.trackArrayChanges = function(b, c) {
            function d() {
              function c2() {
                if (m) {
                  var d2 = [].concat(b.v() || []), e2;
                  if (b.Wa("arrayChange")) {
                    if (!f || 1 < m)
                      f = a.a.Pb(k, d2, b.Ob);
                    e2 = f;
                  }
                  k = d2;
                  f = null;
                  m = 0;
                  e2 && e2.length && b.notifySubscribers(e2, "arrayChange");
                }
              }
              e ? c2() : (e = true, h = b.subscribe(function() {
                ++m;
              }, null, "spectate"), k = [].concat(b.v() || []), f = null, g = b.subscribe(c2));
            }
            b.Ob = {};
            c && "object" == typeof c && a.a.extend(b.Ob, c);
            b.Ob.sparse = true;
            if (!b.zc) {
              var e = false, f = null, g, h, m = 0, k, l = b.Qa, p = b.hb;
              b.Qa = function(a2) {
                l && l.call(b, a2);
                "arrayChange" === a2 && d();
              };
              b.hb = function(a2) {
                p && p.call(b, a2);
                "arrayChange" !== a2 || b.Wa("arrayChange") || (g && g.s(), h && h.s(), h = g = null, e = false, k = n);
              };
              b.zc = function(b2, c2, d2) {
                function l2(a2, b3, c3) {
                  return k2[k2.length] = { status: a2, value: b3, index: c3 };
                }
                if (e && !m) {
                  var k2 = [], p2 = b2.length, g2 = d2.length, h2 = 0;
                  switch (c2) {
                    case "push":
                      h2 = p2;
                    case "unshift":
                      for (c2 = 0; c2 < g2; c2++)
                        l2("added", d2[c2], h2 + c2);
                      break;
                    case "pop":
                      h2 = p2 - 1;
                    case "shift":
                      p2 && l2("deleted", b2[h2], h2);
                      break;
                    case "splice":
                      c2 = Math.min(Math.max(0, 0 > d2[0] ? p2 + d2[0] : d2[0]), p2);
                      for (var p2 = 1 === g2 ? p2 : Math.min(c2 + (d2[1] || 0), p2), g2 = c2 + g2 - 2, h2 = Math.max(p2, g2), U = [], L = [], n2 = 2; c2 < h2; ++c2, ++n2)
                        c2 < p2 && L.push(l2("deleted", b2[c2], c2)), c2 < g2 && U.push(l2("added", d2[n2], c2));
                      a.a.Kc(L, U);
                      break;
                    default:
                      return;
                  }
                  f = k2;
                }
              };
            }
          };
          var r = a.a.Da("_state");
          a.o = a.$ = function(b, c, d) {
            function e() {
              if (0 < arguments.length) {
                if ("function" === typeof f)
                  f.apply(g.nb, arguments);
                else
                  throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                return this;
              }
              g.ra || a.u.cc(e);
              (g.ka || g.J && e.Xa()) && e.ha();
              return g.X;
            }
            "object" === typeof b ? d = b : (d = d || {}, b && (d.read = b));
            if ("function" != typeof d.read)
              throw Error("Pass a function that returns the value of the ko.computed");
            var f = d.write, g = { X: n, sa: true, ka: true, rb: false, jc: false, ra: false, wb: false, J: false, Wc: d.read, nb: c || d.owner, l: d.disposeWhenNodeIsRemoved || d.l || null, Sa: d.disposeWhen || d.Sa, Rb: null, I: {}, V: 0, Ic: null };
            e[r] = g;
            e.Nc = "function" === typeof f;
            a.a.Ba || a.a.extend(e, a.T.fn);
            a.T.fn.qb(e);
            a.a.Ab(e, C);
            d.pure ? (g.wb = true, g.J = true, a.a.extend(e, da)) : d.deferEvaluation && a.a.extend(e, ea);
            a.options.deferUpdates && a.Ta.deferred(e, true);
            g.l && (g.jc = true, g.l.nodeType || (g.l = null));
            g.J || d.deferEvaluation || e.ha();
            g.l && e.ja() && a.a.K.za(g.l, g.Rb = function() {
              e.s();
            });
            return e;
          };
          var C = {
            equalityComparer: K,
            qa: function() {
              return this[r].V;
            },
            Va: function() {
              var b = [];
              a.a.P(this[r].I, function(a2, d) {
                b[d.Ka] = d.da;
              });
              return b;
            },
            Vb: function(b) {
              if (!this[r].V)
                return false;
              var c = this.Va();
              return -1 !== a.a.A(c, b) ? true : !!a.a.Lb(c, function(a2) {
                return a2.Vb && a2.Vb(b);
              });
            },
            uc: function(a2, c, d) {
              if (this[r].wb && c === this)
                throw Error("A 'pure' computed must not be called recursively");
              this[r].I[a2] = d;
              d.Ka = this[r].V++;
              d.La = c.ob();
            },
            Xa: function() {
              var a2, c, d = this[r].I;
              for (a2 in d)
                if (Object.prototype.hasOwnProperty.call(d, a2) && (c = d[a2], this.Ia && c.da.Ja || c.da.Dd(c.La)))
                  return true;
            },
            Jd: function() {
              this.Ia && !this[r].rb && this.Ia(false);
            },
            ja: function() {
              var a2 = this[r];
              return a2.ka || 0 < a2.V;
            },
            Rd: function() {
              this.Ja ? this[r].ka && (this[r].sa = true) : this.Hc();
            },
            $c: function(a2) {
              if (a2.Hb) {
                var c = a2.subscribe(this.Jd, this, "dirty"), d = a2.subscribe(
                  this.Rd,
                  this
                );
                return { da: a2, s: function() {
                  c.s();
                  d.s();
                } };
              }
              return a2.subscribe(this.Hc, this);
            },
            Hc: function() {
              var b = this, c = b.throttleEvaluation;
              c && 0 <= c ? (clearTimeout(this[r].Ic), this[r].Ic = a.a.setTimeout(function() {
                b.ha(true);
              }, c)) : b.Ia ? b.Ia(true) : b.ha(true);
            },
            ha: function(b) {
              var c = this[r], d = c.Sa, e = false;
              if (!c.rb && !c.ra) {
                if (c.l && !a.a.Sb(c.l) || d && d()) {
                  if (!c.jc) {
                    this.s();
                    return;
                  }
                } else
                  c.jc = false;
                c.rb = true;
                try {
                  e = this.zd(b);
                } finally {
                  c.rb = false;
                }
                return e;
              }
            },
            zd: function(b) {
              var c = this[r], d = false, e = c.wb ? n : !c.V, d = { qd: this, mb: c.I, Qb: c.V };
              a.u.xc({
                pd: d,
                od: ba,
                o: this,
                Ya: e
              });
              c.I = {};
              c.V = 0;
              var f = this.yd(c, d);
              c.V ? d = this.sb(c.X, f) : (this.s(), d = true);
              d && (c.J ? this.Gb() : this.notifySubscribers(c.X, "beforeChange"), c.X = f, this.notifySubscribers(c.X, "spectate"), !c.J && b && this.notifySubscribers(c.X), this.rc && this.rc());
              e && this.notifySubscribers(c.X, "awake");
              return d;
            },
            yd: function(b, c) {
              try {
                var d = b.Wc;
                return b.nb ? d.call(b.nb) : d();
              } finally {
                a.u.end(), c.Qb && !b.J && a.a.P(c.mb, aa), b.sa = b.ka = false;
              }
            },
            v: function(a2) {
              var c = this[r];
              (c.ka && (a2 || !c.V) || c.J && this.Xa()) && this.ha();
              return c.X;
            },
            ub: function(b) {
              a.T.fn.ub.call(this, b);
              this.nc = function() {
                this[r].J || (this[r].sa ? this.ha() : this[r].ka = false);
                return this[r].X;
              };
              this.Ia = function(a2) {
                this.pc(this[r].X);
                this[r].ka = true;
                a2 && (this[r].sa = true);
                this.qc(this, !a2);
              };
            },
            s: function() {
              var b = this[r];
              !b.J && b.I && a.a.P(b.I, function(a2, b2) {
                b2.s && b2.s();
              });
              b.l && b.Rb && a.a.K.yb(b.l, b.Rb);
              b.I = n;
              b.V = 0;
              b.ra = true;
              b.sa = false;
              b.ka = false;
              b.J = false;
              b.l = n;
              b.Sa = n;
              b.Wc = n;
              this.Nc || (b.nb = n);
            }
          }, da = { Qa: function(b) {
            var c = this, d = c[r];
            if (!d.ra && d.J && "change" == b) {
              d.J = false;
              if (d.sa || c.Xa())
                d.I = null, d.V = 0, c.ha() && c.Gb();
              else {
                var e = [];
                a.a.P(d.I, function(a2, b2) {
                  e[b2.Ka] = a2;
                });
                a.a.D(e, function(a2, b2) {
                  var e2 = d.I[a2], m = c.$c(e2.da);
                  m.Ka = b2;
                  m.La = e2.La;
                  d.I[a2] = m;
                });
                c.Xa() && c.ha() && c.Gb();
              }
              d.ra || c.notifySubscribers(d.X, "awake");
            }
          }, hb: function(b) {
            var c = this[r];
            c.ra || "change" != b || this.Wa("change") || (a.a.P(c.I, function(a2, b2) {
              b2.s && (c.I[a2] = { da: b2.da, Ka: b2.Ka, La: b2.La }, b2.s());
            }), c.J = true, this.notifySubscribers(n, "asleep"));
          }, ob: function() {
            var b = this[r];
            b.J && (b.sa || this.Xa()) && this.ha();
            return a.T.fn.ob.call(this);
          } }, ea = { Qa: function(a2) {
            "change" != a2 && "beforeChange" != a2 || this.v();
          } };
          a.a.Ba && a.a.setPrototypeOf(C, a.T.fn);
          var N = a.ta.Ma;
          C[N] = a.o;
          a.Oc = function(a2) {
            return "function" == typeof a2 && a2[N] === C[N];
          };
          a.Fd = function(b) {
            return a.Oc(b) && b[r] && b[r].wb;
          };
          a.b("computed", a.o);
          a.b("dependentObservable", a.o);
          a.b("isComputed", a.Oc);
          a.b("isPureComputed", a.Fd);
          a.b("computed.fn", C);
          a.L(C, "peek", C.v);
          a.L(C, "dispose", C.s);
          a.L(C, "isActive", C.ja);
          a.L(C, "getDependenciesCount", C.qa);
          a.L(C, "getDependencies", C.Va);
          a.xb = function(b, c) {
            if ("function" === typeof b)
              return a.o(
                b,
                c,
                { pure: true }
              );
            b = a.a.extend({}, b);
            b.pure = true;
            return a.o(b, c);
          };
          a.b("pureComputed", a.xb);
          (function() {
            function b(a2, f, g) {
              g = g || new d();
              a2 = f(a2);
              if ("object" != typeof a2 || null === a2 || a2 === n || a2 instanceof RegExp || a2 instanceof Date || a2 instanceof String || a2 instanceof Number || a2 instanceof Boolean)
                return a2;
              var h = a2 instanceof Array ? [] : {};
              g.save(a2, h);
              c(a2, function(c2) {
                var d2 = f(a2[c2]);
                switch (typeof d2) {
                  case "boolean":
                  case "number":
                  case "string":
                  case "function":
                    h[c2] = d2;
                    break;
                  case "object":
                  case "undefined":
                    var l = g.get(d2);
                    h[c2] = l !== n ? l : b(d2, f, g);
                }
              });
              return h;
            }
            function c(a2, b2) {
              if (a2 instanceof Array) {
                for (var c2 = 0; c2 < a2.length; c2++)
                  b2(c2);
                "function" == typeof a2.toJSON && b2("toJSON");
              } else
                for (c2 in a2)
                  b2(c2);
            }
            function d() {
              this.keys = [];
              this.values = [];
            }
            a.ad = function(c2) {
              if (0 == arguments.length)
                throw Error("When calling ko.toJS, pass the object you want to convert.");
              return b(c2, function(b2) {
                for (var c3 = 0; a.O(b2) && 10 > c3; c3++)
                  b2 = b2();
                return b2;
              });
            };
            a.toJSON = function(b2, c2, d2) {
              b2 = a.ad(b2);
              return a.a.hc(b2, c2, d2);
            };
            d.prototype = { constructor: d, save: function(b2, c2) {
              var d2 = a.a.A(
                this.keys,
                b2
              );
              0 <= d2 ? this.values[d2] = c2 : (this.keys.push(b2), this.values.push(c2));
            }, get: function(b2) {
              b2 = a.a.A(this.keys, b2);
              return 0 <= b2 ? this.values[b2] : n;
            } };
          })();
          a.b("toJS", a.ad);
          a.b("toJSON", a.toJSON);
          a.Wd = function(b, c, d) {
            function e(c2) {
              var e2 = a.xb(b, d).extend({ ma: "always" }), h = e2.subscribe(function(a2) {
                a2 && (h.s(), c2(a2));
              });
              e2.notifySubscribers(e2.v());
              return h;
            }
            return "function" !== typeof Promise || c ? e(c.bind(d)) : new Promise(e);
          };
          a.b("when", a.Wd);
          (function() {
            a.w = { M: function(b) {
              switch (a.a.R(b)) {
                case "option":
                  return true === b.__ko__hasDomDataOptionValue__ ? a.a.g.get(b, a.c.options.$b) : 7 >= a.a.W ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                case "select":
                  return 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) : n;
                default:
                  return b.value;
              }
            }, cb: function(b, c, d) {
              switch (a.a.R(b)) {
                case "option":
                  "string" === typeof c ? (a.a.g.set(b, a.c.options.$b, n), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c) : (a.a.g.set(b, a.c.options.$b, c), b.__ko__hasDomDataOptionValue__ = true, b.value = "number" === typeof c ? c : "");
                  break;
                case "select":
                  if ("" === c || null === c)
                    c = n;
                  for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f)
                    if (h = a.w.M(b.options[f]), h == c || "" === h && c === n) {
                      e = f;
                      break;
                    }
                  if (d || 0 <= e || c === n && 1 < b.size)
                    b.selectedIndex = e, 6 === a.a.W && a.a.setTimeout(function() {
                      b.selectedIndex = e;
                    }, 0);
                  break;
                default:
                  if (null === c || c === n)
                    c = "";
                  b.value = c;
              }
            } };
          })();
          a.b("selectExtensions", a.w);
          a.b("selectExtensions.readValue", a.w.M);
          a.b("selectExtensions.writeValue", a.w.cb);
          a.m = function() {
            function b(b2) {
              b2 = a.a.Db(b2);
              123 === b2.charCodeAt(0) && (b2 = b2.slice(
                1,
                -1
              ));
              b2 += "\n,";
              var c2 = [], d2 = b2.match(e), p, q = [], h2 = 0;
              if (1 < d2.length) {
                for (var x = 0, B; B = d2[x]; ++x) {
                  var u = B.charCodeAt(0);
                  if (44 === u) {
                    if (0 >= h2) {
                      c2.push(p && q.length ? { key: p, value: q.join("") } : { unknown: p || q.join("") });
                      p = h2 = 0;
                      q = [];
                      continue;
                    }
                  } else if (58 === u) {
                    if (!h2 && !p && 1 === q.length) {
                      p = q.pop();
                      continue;
                    }
                  } else if (47 === u && 1 < B.length && (47 === B.charCodeAt(1) || 42 === B.charCodeAt(1)))
                    continue;
                  else
                    47 === u && x && 1 < B.length ? (u = d2[x - 1].match(f)) && !g[u[0]] && (b2 = b2.substr(b2.indexOf(B) + 1), d2 = b2.match(e), x = -1, B = "/") : 40 === u || 123 === u || 91 === u ? ++h2 : 41 === u || 125 === u || 93 === u ? --h2 : p || q.length || 34 !== u && 39 !== u || (B = B.slice(1, -1));
                  q.push(B);
                }
                if (0 < h2)
                  throw Error("Unbalanced parentheses, braces, or brackets");
              }
              return c2;
            }
            var c = ["true", "false", "null", "undefined"], d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"), f = /[\])"'A-Za-z0-9_$]+$/, g = { "in": 1, "return": 1, "typeof": 1 }, h = {};
            return { Ra: [], wa: h, ac: b, vb: function(e2, f2) {
              function l(b2, e3) {
                var f3;
                if (!x) {
                  var k = a.getBindingHandler(b2);
                  if (k && k.preprocess && !(e3 = k.preprocess(e3, b2, l)))
                    return;
                  if (k = h[b2])
                    f3 = e3, 0 <= a.a.A(c, f3) ? f3 = false : (k = f3.match(d), f3 = null === k ? false : k[1] ? "Object(" + k[1] + ")" + k[2] : f3), k = f3;
                  k && q.push("'" + ("string" == typeof h[b2] ? h[b2] : b2) + "':function(_z){" + f3 + "=_z}");
                }
                g2 && (e3 = "function(){return " + e3 + " }");
                p.push("'" + b2 + "':" + e3);
              }
              f2 = f2 || {};
              var p = [], q = [], g2 = f2.valueAccessors, x = f2.bindingParams, B = "string" === typeof e2 ? b(e2) : e2;
              a.a.D(B, function(a2) {
                l(
                  a2.key || a2.unknown,
                  a2.value
                );
              });
              q.length && l("_ko_property_writers", "{" + q.join(",") + " }");
              return p.join(",");
            }, Id: function(a2, b2) {
              for (var c2 = 0; c2 < a2.length; c2++)
                if (a2[c2].key == b2)
                  return true;
              return false;
            }, eb: function(b2, c2, d2, e2, f2) {
              if (b2 && a.O(b2))
                !a.Za(b2) || f2 && b2.v() === e2 || b2(e2);
              else if ((b2 = c2.get("_ko_property_writers")) && b2[d2])
                b2[d2](e2);
            } };
          }();
          a.b("expressionRewriting", a.m);
          a.b("expressionRewriting.bindingRewriteValidators", a.m.Ra);
          a.b("expressionRewriting.parseObjectLiteral", a.m.ac);
          a.b("expressionRewriting.preProcessBindings", a.m.vb);
          a.b(
            "expressionRewriting._twoWayBindings",
            a.m.wa
          );
          a.b("jsonExpressionRewriting", a.m);
          a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.m.vb);
          (function() {
            function b(a2) {
              return 8 == a2.nodeType && g.test(f ? a2.text : a2.nodeValue);
            }
            function c(a2) {
              return 8 == a2.nodeType && h.test(f ? a2.text : a2.nodeValue);
            }
            function d(d2, e2) {
              for (var f2 = d2, h2 = 1, g2 = []; f2 = f2.nextSibling; ) {
                if (c(f2) && (a.a.g.set(f2, k, true), h2--, 0 === h2))
                  return g2;
                g2.push(f2);
                b(f2) && h2++;
              }
              if (!e2)
                throw Error("Cannot find closing comment tag to match: " + d2.nodeValue);
              return null;
            }
            function e(a2, b2) {
              var c2 = d(a2, b2);
              return c2 ? 0 < c2.length ? c2[c2.length - 1].nextSibling : a2.nextSibling : null;
            }
            var f = w2 && "<!--test-->" === w2.createComment("test").text, g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, m = { ul: true, ol: true }, k = "__ko_matchedEndComment__";
            a.h = { ea: {}, childNodes: function(a2) {
              return b(a2) ? d(a2) : a2.childNodes;
            }, Ea: function(c2) {
              if (b(c2)) {
                c2 = a.h.childNodes(c2);
                for (var d2 = 0, e2 = c2.length; d2 < e2; d2++)
                  a.removeNode(c2[d2]);
              } else
                a.a.Tb(c2);
            }, va: function(c2, d2) {
              if (b(c2)) {
                a.h.Ea(c2);
                for (var e2 = c2.nextSibling, f2 = 0, k2 = d2.length; f2 < k2; f2++)
                  e2.parentNode.insertBefore(d2[f2], e2);
              } else
                a.a.va(c2, d2);
            }, Vc: function(a2, c2) {
              var d2;
              b(a2) ? (d2 = a2.nextSibling, a2 = a2.parentNode) : d2 = a2.firstChild;
              d2 ? c2 !== d2 && a2.insertBefore(c2, d2) : a2.appendChild(c2);
            }, Wb: function(c2, d2, e2) {
              e2 ? (e2 = e2.nextSibling, b(c2) && (c2 = c2.parentNode), e2 ? d2 !== e2 && c2.insertBefore(d2, e2) : c2.appendChild(d2)) : a.h.Vc(c2, d2);
            }, firstChild: function(a2) {
              if (b(a2))
                return !a2.nextSibling || c(a2.nextSibling) ? null : a2.nextSibling;
              if (a2.firstChild && c(a2.firstChild))
                throw Error("Found invalid end comment, as the first child of " + a2);
              return a2.firstChild;
            }, nextSibling: function(d2) {
              b(d2) && (d2 = e(d2));
              if (d2.nextSibling && c(d2.nextSibling)) {
                var f2 = d2.nextSibling;
                if (c(f2) && !a.a.g.get(f2, k))
                  throw Error("Found end comment without a matching opening comment, as child of " + d2);
                return null;
              }
              return d2.nextSibling;
            }, Cd: b, Vd: function(a2) {
              return (a2 = (f ? a2.text : a2.nodeValue).match(g)) ? a2[1] : null;
            }, Sc: function(d2) {
              if (m[a.a.R(d2)]) {
                var f2 = d2.firstChild;
                if (f2) {
                  do
                    if (1 === f2.nodeType) {
                      var k2;
                      k2 = f2.firstChild;
                      var h2 = null;
                      if (k2) {
                        do
                          if (h2)
                            h2.push(k2);
                          else if (b(k2)) {
                            var g2 = e(k2, true);
                            g2 ? k2 = g2 : h2 = [k2];
                          } else
                            c(k2) && (h2 = [k2]);
                        while (k2 = k2.nextSibling);
                      }
                      if (k2 = h2)
                        for (h2 = f2.nextSibling, g2 = 0; g2 < k2.length; g2++)
                          h2 ? d2.insertBefore(k2[g2], h2) : d2.appendChild(k2[g2]);
                    }
                  while (f2 = f2.nextSibling);
                }
              }
            } };
          })();
          a.b("virtualElements", a.h);
          a.b("virtualElements.allowedBindings", a.h.ea);
          a.b("virtualElements.emptyNode", a.h.Ea);
          a.b("virtualElements.insertAfter", a.h.Wb);
          a.b("virtualElements.prepend", a.h.Vc);
          a.b("virtualElements.setDomNodeChildren", a.h.va);
          (function() {
            a.ga = function() {
              this.nd = {};
            };
            a.a.extend(a.ga.prototype, {
              nodeHasBindings: function(b) {
                switch (b.nodeType) {
                  case 1:
                    return null != b.getAttribute("data-bind") || a.j.getComponentNameForNode(b);
                  case 8:
                    return a.h.Cd(b);
                  default:
                    return false;
                }
              },
              getBindings: function(b, c) {
                var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b) : null;
                return a.j.tc(d, b, c, false);
              },
              getBindingAccessors: function(b, c) {
                var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b, { valueAccessors: true }) : null;
                return a.j.tc(d, b, c, true);
              },
              getBindingsString: function(b) {
                switch (b.nodeType) {
                  case 1:
                    return b.getAttribute("data-bind");
                  case 8:
                    return a.h.Vd(b);
                  default:
                    return null;
                }
              },
              parseBindingsString: function(b, c, d, e) {
                try {
                  var f = this.nd, g = b + (e && e.valueAccessors || ""), h;
                  if (!(h = f[g])) {
                    var m, k = "with($context){with($data||{}){return{" + a.m.vb(b, e) + "}}}";
                    m = new Function("$context", "$element", k);
                    h = f[g] = m;
                  }
                  return h(c, d);
                } catch (l) {
                  throw l.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + l.message, l;
                }
              }
            });
            a.ga.instance = new a.ga();
          })();
          a.b("bindingProvider", a.ga);
          (function() {
            function b(b2) {
              var c2 = (b2 = a.a.g.get(b2, z)) && b2.N;
              c2 && (b2.N = null, c2.Tc());
            }
            function c(c2, d2, e2) {
              this.node = c2;
              this.yc = d2;
              this.kb = [];
              this.H = false;
              d2.N || a.a.K.za(c2, b);
              e2 && e2.N && (e2.N.kb.push(c2), this.Kb = e2);
            }
            function d(a2) {
              return function() {
                return a2;
              };
            }
            function e(a2) {
              return a2();
            }
            function f(b2) {
              return a.a.Ga(a.u.G(b2), function(a2, c2) {
                return function() {
                  return b2()[c2];
                };
              });
            }
            function g(b2, c2, e2) {
              return "function" === typeof b2 ? f(b2.bind(null, c2, e2)) : a.a.Ga(b2, d);
            }
            function h(a2, b2) {
              return f(this.getBindings.bind(this, a2, b2));
            }
            function m(b2, c2) {
              var d2 = a.h.firstChild(c2);
              if (d2) {
                var e2, f2 = a.ga.instance, l2 = f2.preprocessNode;
                if (l2) {
                  for (; e2 = d2; )
                    d2 = a.h.nextSibling(e2), l2.call(f2, e2);
                  d2 = a.h.firstChild(c2);
                }
                for (; e2 = d2; )
                  d2 = a.h.nextSibling(e2), k(b2, e2);
              }
              a.i.ma(c2, a.i.H);
            }
            function k(b2, c2) {
              var d2 = b2, e2 = 1 === c2.nodeType;
              e2 && a.h.Sc(c2);
              if (e2 || a.ga.instance.nodeHasBindings(c2))
                d2 = p(c2, null, b2).bindingContextForDescendants;
              d2 && !u[a.a.R(c2)] && m(d2, c2);
            }
            function l(b2) {
              var c2 = [], d2 = {}, e2 = [];
              a.a.P(b2, function ca(f2) {
                if (!d2[f2]) {
                  var k2 = a.getBindingHandler(f2);
                  k2 && (k2.after && (e2.push(f2), a.a.D(k2.after, function(c3) {
                    if (b2[c3]) {
                      if (-1 !== a.a.A(e2, c3))
                        throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e2.join(", "));
                      ca(c3);
                    }
                  }), e2.length--), c2.push({ key: f2, Mc: k2 }));
                  d2[f2] = true;
                }
              });
              return c2;
            }
            function p(b2, c2, d2) {
              var f2 = a.a.g.Ub(b2, z, {}), k2 = f2.hd;
              if (!c2) {
                if (k2)
                  throw Error("You cannot apply bindings multiple times to the same element.");
                f2.hd = true;
              }
              k2 || (f2.context = d2);
              f2.Zb || (f2.Zb = {});
              var g2;
              if (c2 && "function" !== typeof c2)
                g2 = c2;
              else {
                var p2 = a.ga.instance, q2 = p2.getBindingAccessors || h, m2 = a.$(function() {
                  if (g2 = c2 ? c2(d2, b2) : q2.call(p2, b2, d2)) {
                    if (d2[t])
                      d2[t]();
                    if (d2[B])
                      d2[B]();
                  }
                  return g2;
                }, null, { l: b2 });
                g2 && m2.ja() || (m2 = null);
              }
              var x2 = d2, u2;
              if (g2) {
                var J2 = function() {
                  return a.a.Ga(m2 ? m2() : g2, e);
                }, r2 = m2 ? function(a2) {
                  return function() {
                    return e(m2()[a2]);
                  };
                } : function(a2) {
                  return g2[a2];
                };
                J2.get = function(a2) {
                  return g2[a2] && e(r2(a2));
                };
                J2.has = function(a2) {
                  return a2 in g2;
                };
                a.i.H in g2 && a.i.subscribe(b2, a.i.H, function() {
                  var c3 = (0, g2[a.i.H])();
                  if (c3) {
                    var d3 = a.h.childNodes(b2);
                    d3.length && c3(d3, a.Ec(d3[0]));
                  }
                });
                a.i.pa in g2 && (x2 = a.i.Cb(b2, d2), a.i.subscribe(b2, a.i.pa, function() {
                  var c3 = (0, g2[a.i.pa])();
                  c3 && a.h.firstChild(b2) && c3(b2);
                }));
                f2 = l(g2);
                a.a.D(f2, function(c3) {
                  var d3 = c3.Mc.init, e2 = c3.Mc.update, f3 = c3.key;
                  if (8 === b2.nodeType && !a.h.ea[f3])
                    throw Error("The binding '" + f3 + "' cannot be used with virtual elements");
                  try {
                    "function" == typeof d3 && a.u.G(function() {
                      var a2 = d3(b2, r2(f3), J2, x2.$data, x2);
                      if (a2 && a2.controlsDescendantBindings) {
                        if (u2 !== n)
                          throw Error("Multiple bindings (" + u2 + " and " + f3 + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                        u2 = f3;
                      }
                    }), "function" == typeof e2 && a.$(function() {
                      e2(b2, r2(f3), J2, x2.$data, x2);
                    }, null, { l: b2 });
                  } catch (k3) {
                    throw k3.message = 'Unable to process binding "' + f3 + ": " + g2[f3] + '"\nMessage: ' + k3.message, k3;
                  }
                });
              }
              f2 = u2 === n;
              return { shouldBindDescendants: f2, bindingContextForDescendants: f2 && x2 };
            }
            function q(b2, c2) {
              return b2 && b2 instanceof a.fa ? b2 : new a.fa(b2, n, n, c2);
            }
            var t = a.a.Da("_subscribable"), x = a.a.Da("_ancestorBindingInfo"), B = a.a.Da("_dataDependency");
            a.c = {};
            var u = { script: true, textarea: true, template: true };
            a.getBindingHandler = function(b2) {
              return a.c[b2];
            };
            var J = {};
            a.fa = function(b2, c2, d2, e2, f2) {
              function k2() {
                var b3 = p2 ? h2() : h2, f3 = a.a.f(b3);
                c2 ? (a.a.extend(l2, c2), x in c2 && (l2[x] = c2[x])) : (l2.$parents = [], l2.$root = f3, l2.ko = a);
                l2[t] = q2;
                g2 ? f3 = l2.$data : (l2.$rawData = b3, l2.$data = f3);
                d2 && (l2[d2] = f3);
                e2 && e2(l2, c2, f3);
                if (c2 && c2[t] && !a.S.o().Vb(c2[t]))
                  c2[t]();
                m2 && (l2[B] = m2);
                return l2.$data;
              }
              var l2 = this, g2 = b2 === J, h2 = g2 ? n : b2, p2 = "function" == typeof h2 && !a.O(h2), q2, m2 = f2 && f2.dataDependency;
              f2 && f2.exportDependencies ? k2() : (q2 = a.xb(k2), q2.v(), q2.ja() ? q2.equalityComparer = null : l2[t] = n);
            };
            a.fa.prototype.createChildContext = function(b2, c2, d2, e2) {
              !e2 && c2 && "object" == typeof c2 && (e2 = c2, c2 = e2.as, d2 = e2.extend);
              if (c2 && e2 && e2.noChildContext) {
                var f2 = "function" == typeof b2 && !a.O(b2);
                return new a.fa(J, this, null, function(a2) {
                  d2 && d2(a2);
                  a2[c2] = f2 ? b2() : b2;
                }, e2);
              }
              return new a.fa(
                b2,
                this,
                c2,
                function(a2, b3) {
                  a2.$parentContext = b3;
                  a2.$parent = b3.$data;
                  a2.$parents = (b3.$parents || []).slice(0);
                  a2.$parents.unshift(a2.$parent);
                  d2 && d2(a2);
                },
                e2
              );
            };
            a.fa.prototype.extend = function(b2, c2) {
              return new a.fa(J, this, null, function(c3) {
                a.a.extend(c3, "function" == typeof b2 ? b2(c3) : b2);
              }, c2);
            };
            var z = a.a.g.Z();
            c.prototype.Tc = function() {
              this.Kb && this.Kb.N && this.Kb.N.sd(this.node);
            };
            c.prototype.sd = function(b2) {
              a.a.Pa(this.kb, b2);
              !this.kb.length && this.H && this.Cc();
            };
            c.prototype.Cc = function() {
              this.H = true;
              this.yc.N && !this.kb.length && (this.yc.N = null, a.a.K.yb(this.node, b), a.i.ma(this.node, a.i.pa), this.Tc());
            };
            a.i = { H: "childrenComplete", pa: "descendantsComplete", subscribe: function(b2, c2, d2, e2, f2) {
              var k2 = a.a.g.Ub(b2, z, {});
              k2.Fa || (k2.Fa = new a.T());
              f2 && f2.notifyImmediately && k2.Zb[c2] && a.u.G(d2, e2, [b2]);
              return k2.Fa.subscribe(d2, e2, c2);
            }, ma: function(b2, c2) {
              var d2 = a.a.g.get(b2, z);
              if (d2 && (d2.Zb[c2] = true, d2.Fa && d2.Fa.notifySubscribers(b2, c2), c2 == a.i.H)) {
                if (d2.N)
                  d2.N.Cc();
                else if (d2.N === n && d2.Fa && d2.Fa.Wa(a.i.pa))
                  throw Error("descendantsComplete event not supported for bindings on this node");
              }
            }, Cb: function(b2, d2) {
              var e2 = a.a.g.Ub(b2, z, {});
              e2.N || (e2.N = new c(b2, e2, d2[x]));
              return d2[x] == e2 ? d2 : d2.extend(function(a2) {
                a2[x] = e2;
              });
            } };
            a.Td = function(b2) {
              return (b2 = a.a.g.get(b2, z)) && b2.context;
            };
            a.ib = function(b2, c2, d2) {
              1 === b2.nodeType && a.h.Sc(b2);
              return p(b2, c2, q(d2));
            };
            a.ld = function(b2, c2, d2) {
              d2 = q(d2);
              return a.ib(b2, g(c2, d2, b2), d2);
            };
            a.Oa = function(a2, b2) {
              1 !== b2.nodeType && 8 !== b2.nodeType || m(q(a2), b2);
            };
            a.vc = function(a2, b2, c2) {
              !v && A.jQuery && (v = A.jQuery);
              if (2 > arguments.length) {
                if (b2 = w2.body, !b2)
                  throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
              } else if (!b2 || 1 !== b2.nodeType && 8 !== b2.nodeType)
                throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
              k(q(a2, c2), b2);
            };
            a.Dc = function(b2) {
              return !b2 || 1 !== b2.nodeType && 8 !== b2.nodeType ? n : a.Td(b2);
            };
            a.Ec = function(b2) {
              return (b2 = a.Dc(b2)) ? b2.$data : n;
            };
            a.b("bindingHandlers", a.c);
            a.b("bindingEvent", a.i);
            a.b("bindingEvent.subscribe", a.i.subscribe);
            a.b("bindingEvent.startPossiblyAsyncContentBinding", a.i.Cb);
            a.b("applyBindings", a.vc);
            a.b("applyBindingsToDescendants", a.Oa);
            a.b("applyBindingAccessorsToNode", a.ib);
            a.b("applyBindingsToNode", a.ld);
            a.b("contextFor", a.Dc);
            a.b("dataFor", a.Ec);
          })();
          (function(b) {
            function c(c2, e2) {
              var k = Object.prototype.hasOwnProperty.call(f, c2) ? f[c2] : b, l;
              k ? k.subscribe(e2) : (k = f[c2] = new a.T(), k.subscribe(e2), d(c2, function(b2, d2) {
                var e3 = !(!d2 || !d2.synchronous);
                g[c2] = { definition: b2, Gd: e3 };
                delete f[c2];
                l || e3 ? k.notifySubscribers(b2) : a.na.zb(function() {
                  k.notifySubscribers(b2);
                });
              }), l = true);
            }
            function d(a2, b2) {
              e("getConfig", [a2], function(c2) {
                c2 ? e("loadComponent", [a2, c2], function(a3) {
                  b2(
                    a3,
                    c2
                  );
                }) : b2(null, null);
              });
            }
            function e(c2, d2, f2, l) {
              l || (l = a.j.loaders.slice(0));
              var g2 = l.shift();
              if (g2) {
                var q = g2[c2];
                if (q) {
                  var t = false;
                  if (q.apply(g2, d2.concat(function(a2) {
                    t ? f2(null) : null !== a2 ? f2(a2) : e(c2, d2, f2, l);
                  })) !== b && (t = true, !g2.suppressLoaderExceptions))
                    throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                } else
                  e(c2, d2, f2, l);
              } else
                f2(null);
            }
            var f = {}, g = {};
            a.j = { get: function(d2, e2) {
              var f2 = Object.prototype.hasOwnProperty.call(g, d2) ? g[d2] : b;
              f2 ? f2.Gd ? a.u.G(function() {
                e2(f2.definition);
              }) : a.na.zb(function() {
                e2(f2.definition);
              }) : c(d2, e2);
            }, Bc: function(a2) {
              delete g[a2];
            }, oc: e };
            a.j.loaders = [];
            a.b("components", a.j);
            a.b("components.get", a.j.get);
            a.b("components.clearCachedDefinition", a.j.Bc);
          })();
          (function() {
            function b(b2, c2, d2, e2) {
              function g2() {
                0 === --B && e2(h2);
              }
              var h2 = {}, B = 2, u = d2.template;
              d2 = d2.viewModel;
              u ? f(c2, u, function(c3) {
                a.j.oc("loadTemplate", [b2, c3], function(a2) {
                  h2.template = a2;
                  g2();
                });
              }) : g2();
              d2 ? f(c2, d2, function(c3) {
                a.j.oc("loadViewModel", [b2, c3], function(a2) {
                  h2[m] = a2;
                  g2();
                });
              }) : g2();
            }
            function c(a2, b2, d2) {
              if ("function" === typeof b2)
                d2(function(a3) {
                  return new b2(a3);
                });
              else if ("function" === typeof b2[m])
                d2(b2[m]);
              else if ("instance" in b2) {
                var e2 = b2.instance;
                d2(function() {
                  return e2;
                });
              } else
                "viewModel" in b2 ? c(a2, b2.viewModel, d2) : a2("Unknown viewModel value: " + b2);
            }
            function d(b2) {
              switch (a.a.R(b2)) {
                case "script":
                  return a.a.ua(b2.text);
                case "textarea":
                  return a.a.ua(b2.value);
                case "template":
                  if (e(b2.content))
                    return a.a.Ca(b2.content.childNodes);
              }
              return a.a.Ca(b2.childNodes);
            }
            function e(a2) {
              return A.DocumentFragment ? a2 instanceof DocumentFragment : a2 && 11 === a2.nodeType;
            }
            function f(a2, b2, c2) {
              "string" === typeof b2.require ? T || A.require ? (T || A.require)([b2.require], function(a3) {
                a3 && "object" === typeof a3 && a3.Xd && a3["default"] && (a3 = a3["default"]);
                c2(a3);
              }) : a2("Uses require, but no AMD loader is present") : c2(b2);
            }
            function g(a2) {
              return function(b2) {
                throw Error("Component '" + a2 + "': " + b2);
              };
            }
            var h = {};
            a.j.register = function(b2, c2) {
              if (!c2)
                throw Error("Invalid configuration for " + b2);
              if (a.j.tb(b2))
                throw Error("Component " + b2 + " is already registered");
              h[b2] = c2;
            };
            a.j.tb = function(a2) {
              return Object.prototype.hasOwnProperty.call(h, a2);
            };
            a.j.unregister = function(b2) {
              delete h[b2];
              a.j.Bc(b2);
            };
            a.j.Fc = { getConfig: function(b2, c2) {
              c2(a.j.tb(b2) ? h[b2] : null);
            }, loadComponent: function(a2, c2, d2) {
              var e2 = g(a2);
              f(e2, c2, function(c3) {
                b(a2, e2, c3, d2);
              });
            }, loadTemplate: function(b2, c2, f2) {
              b2 = g(b2);
              if ("string" === typeof c2)
                f2(a.a.ua(c2));
              else if (c2 instanceof Array)
                f2(c2);
              else if (e(c2))
                f2(a.a.la(c2.childNodes));
              else if (c2.element)
                if (c2 = c2.element, A.HTMLElement ? c2 instanceof HTMLElement : c2 && c2.tagName && 1 === c2.nodeType)
                  f2(d(c2));
                else if ("string" === typeof c2) {
                  var h2 = w2.getElementById(c2);
                  h2 ? f2(d(h2)) : b2("Cannot find element with ID " + c2);
                } else
                  b2("Unknown element type: " + c2);
              else
                b2("Unknown template value: " + c2);
            }, loadViewModel: function(a2, b2, d2) {
              c(g(a2), b2, d2);
            } };
            var m = "createViewModel";
            a.b("components.register", a.j.register);
            a.b("components.isRegistered", a.j.tb);
            a.b("components.unregister", a.j.unregister);
            a.b("components.defaultLoader", a.j.Fc);
            a.j.loaders.push(a.j.Fc);
            a.j.dd = h;
          })();
          (function() {
            function b(b2, e) {
              var f = b2.getAttribute("params");
              if (f) {
                var f = c.parseBindingsString(f, e, b2, { valueAccessors: true, bindingParams: true }), f = a.a.Ga(f, function(c2) {
                  return a.o(c2, null, { l: b2 });
                }), g = a.a.Ga(
                  f,
                  function(c2) {
                    var e2 = c2.v();
                    return c2.ja() ? a.o({ read: function() {
                      return a.a.f(c2());
                    }, write: a.Za(e2) && function(a2) {
                      c2()(a2);
                    }, l: b2 }) : e2;
                  }
                );
                Object.prototype.hasOwnProperty.call(g, "$raw") || (g.$raw = f);
                return g;
              }
              return { $raw: {} };
            }
            a.j.getComponentNameForNode = function(b2) {
              var c2 = a.a.R(b2);
              if (a.j.tb(c2) && (-1 != c2.indexOf("-") || "[object HTMLUnknownElement]" == "" + b2 || 8 >= a.a.W && b2.tagName === c2))
                return c2;
            };
            a.j.tc = function(c2, e, f, g) {
              if (1 === e.nodeType) {
                var h = a.j.getComponentNameForNode(e);
                if (h) {
                  c2 = c2 || {};
                  if (c2.component)
                    throw Error('Cannot use the "component" binding on a custom element matching a component');
                  var m = { name: h, params: b(e, f) };
                  c2.component = g ? function() {
                    return m;
                  } : m;
                }
              }
              return c2;
            };
            var c = new a.ga();
            9 > a.a.W && (a.j.register = function(a2) {
              return function(b2) {
                return a2.apply(this, arguments);
              };
            }(a.j.register), w2.createDocumentFragment = function(b2) {
              return function() {
                var c2 = b2(), f = a.j.dd, g;
                for (g in f)
                  ;
                return c2;
              };
            }(w2.createDocumentFragment));
          })();
          (function() {
            function b(b2, c2, d2) {
              c2 = c2.template;
              if (!c2)
                throw Error("Component '" + b2 + "' has no template");
              b2 = a.a.Ca(c2);
              a.h.va(d2, b2);
            }
            function c(a2, b2, c2) {
              var d2 = a2.createViewModel;
              return d2 ? d2.call(
                a2,
                b2,
                c2
              ) : b2;
            }
            var d = 0;
            a.c.component = { init: function(e, f, g, h, m) {
              function k() {
                var a2 = l && l.dispose;
                "function" === typeof a2 && a2.call(l);
                q && q.s();
                p = l = q = null;
              }
              var l, p, q, t = a.a.la(a.h.childNodes(e));
              a.h.Ea(e);
              a.a.K.za(e, k);
              a.o(function() {
                var g2 = a.a.f(f()), h2, u;
                "string" === typeof g2 ? h2 = g2 : (h2 = a.a.f(g2.name), u = a.a.f(g2.params));
                if (!h2)
                  throw Error("No component name specified");
                var n2 = a.i.Cb(e, m), z = p = ++d;
                a.j.get(h2, function(d2) {
                  if (p === z) {
                    k();
                    if (!d2)
                      throw Error("Unknown component '" + h2 + "'");
                    b(h2, d2, e);
                    var f2 = c(d2, u, { element: e, templateNodes: t });
                    d2 = n2.createChildContext(f2, { extend: function(a2) {
                      a2.$component = f2;
                      a2.$componentTemplateNodes = t;
                    } });
                    f2 && f2.koDescendantsComplete && (q = a.i.subscribe(e, a.i.pa, f2.koDescendantsComplete, f2));
                    l = f2;
                    a.Oa(d2, e);
                  }
                });
              }, null, { l: e });
              return { controlsDescendantBindings: true };
            } };
            a.h.ea.component = true;
          })();
          var V = { "class": "className", "for": "htmlFor" };
          a.c.attr = { update: function(b, c) {
            var d = a.a.f(c()) || {};
            a.a.P(d, function(c2, d2) {
              d2 = a.a.f(d2);
              var g = c2.indexOf(":"), g = "lookupNamespaceURI" in b && 0 < g && b.lookupNamespaceURI(c2.substr(0, g)), h = false === d2 || null === d2 || d2 === n;
              h ? g ? b.removeAttributeNS(g, c2) : b.removeAttribute(c2) : d2 = d2.toString();
              8 >= a.a.W && c2 in V ? (c2 = V[c2], h ? b.removeAttribute(c2) : b[c2] = d2) : h || (g ? b.setAttributeNS(g, c2, d2) : b.setAttribute(c2, d2));
              "name" === c2 && a.a.Yc(b, h ? "" : d2);
            });
          } };
          (function() {
            a.c.checked = { after: ["value", "attr"], init: function(b, c, d) {
              function e() {
                var e2 = b.checked, f2 = g();
                if (!a.S.Ya() && (e2 || !m && !a.S.qa())) {
                  var k2 = a.u.G(c);
                  if (l) {
                    var q2 = p ? k2.v() : k2, z = t;
                    t = f2;
                    z !== f2 ? e2 && (a.a.Na(q2, f2, true), a.a.Na(q2, z, false)) : a.a.Na(q2, f2, e2);
                    p && a.Za(k2) && k2(q2);
                  } else
                    h && (f2 === n ? f2 = e2 : e2 || (f2 = n)), a.m.eb(
                      k2,
                      d,
                      "checked",
                      f2,
                      true
                    );
                }
              }
              function f() {
                var d2 = a.a.f(c()), e2 = g();
                l ? (b.checked = 0 <= a.a.A(d2, e2), t = e2) : b.checked = h && e2 === n ? !!d2 : g() === d2;
              }
              var g = a.xb(function() {
                if (d.has("checkedValue"))
                  return a.a.f(d.get("checkedValue"));
                if (q)
                  return d.has("value") ? a.a.f(d.get("value")) : b.value;
              }), h = "checkbox" == b.type, m = "radio" == b.type;
              if (h || m) {
                var k = c(), l = h && a.a.f(k) instanceof Array, p = !(l && k.push && k.splice), q = m || l, t = l ? g() : n;
                m && !b.name && a.c.uniqueName.init(b, function() {
                  return true;
                });
                a.o(e, null, { l: b });
                a.a.B(b, "click", e);
                a.o(f, null, { l: b });
                k = n;
              }
            } };
            a.m.wa.checked = true;
            a.c.checkedValue = { update: function(b, c) {
              b.value = a.a.f(c());
            } };
          })();
          a.c["class"] = { update: function(b, c) {
            var d = a.a.Db(a.a.f(c()));
            a.a.Eb(b, b.__ko__cssValue, false);
            b.__ko__cssValue = d;
            a.a.Eb(b, d, true);
          } };
          a.c.css = { update: function(b, c) {
            var d = a.a.f(c());
            null !== d && "object" == typeof d ? a.a.P(d, function(c2, d2) {
              d2 = a.a.f(d2);
              a.a.Eb(b, c2, d2);
            }) : a.c["class"].update(b, c);
          } };
          a.c.enable = { update: function(b, c) {
            var d = a.a.f(c());
            d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = true);
          } };
          a.c.disable = { update: function(b, c) {
            a.c.enable.update(b, function() {
              return !a.a.f(c());
            });
          } };
          a.c.event = { init: function(b, c, d, e, f) {
            var g = c() || {};
            a.a.P(g, function(g2) {
              "string" == typeof g2 && a.a.B(b, g2, function(b2) {
                var k, l = c()[g2];
                if (l) {
                  try {
                    var p = a.a.la(arguments);
                    e = f.$data;
                    p.unshift(e);
                    k = l.apply(e, p);
                  } finally {
                    true !== k && (b2.preventDefault ? b2.preventDefault() : b2.returnValue = false);
                  }
                  false === d.get(g2 + "Bubble") && (b2.cancelBubble = true, b2.stopPropagation && b2.stopPropagation());
                }
              });
            });
          } };
          a.c.foreach = { Rc: function(b) {
            return function() {
              var c = b(), d = a.a.bc(c);
              if (!d || "number" == typeof d.length)
                return { foreach: c, templateEngine: a.ba.Ma };
              a.a.f(c);
              return { foreach: d.data, as: d.as, noChildContext: d.noChildContext, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.ba.Ma };
            };
          }, init: function(b, c) {
            return a.c.template.init(b, a.c.foreach.Rc(c));
          }, update: function(b, c, d, e, f) {
            return a.c.template.update(b, a.c.foreach.Rc(c), d, e, f);
          } };
          a.m.Ra.foreach = false;
          a.h.ea.foreach = true;
          a.c.hasfocus = { init: function(b, c, d) {
            function e(e2) {
              b.__ko_hasfocusUpdating = true;
              var f2 = b.ownerDocument;
              if ("activeElement" in f2) {
                var g2;
                try {
                  g2 = f2.activeElement;
                } catch (l) {
                  g2 = f2.body;
                }
                e2 = g2 === b;
              }
              f2 = c();
              a.m.eb(f2, d, "hasfocus", e2, true);
              b.__ko_hasfocusLastValue = e2;
              b.__ko_hasfocusUpdating = false;
            }
            var f = e.bind(null, true), g = e.bind(null, false);
            a.a.B(b, "focus", f);
            a.a.B(b, "focusin", f);
            a.a.B(b, "blur", g);
            a.a.B(b, "focusout", g);
            b.__ko_hasfocusLastValue = false;
          }, update: function(b, c) {
            var d = !!a.a.f(c());
            b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(), a.u.G(a.a.Fb, null, [b, d ? "focusin" : "focusout"]));
          } };
          a.m.wa.hasfocus = true;
          a.c.hasFocus = a.c.hasfocus;
          a.m.wa.hasFocus = "hasfocus";
          a.c.html = { init: function() {
            return { controlsDescendantBindings: true };
          }, update: function(b, c) {
            a.a.fc(b, c());
          } };
          (function() {
            function b(b2, d, e) {
              a.c[b2] = { init: function(b3, c, h, m, k) {
                var l, p, q = {}, t, x, n2;
                if (d) {
                  m = h.get("as");
                  var u = h.get("noChildContext");
                  n2 = !(m && u);
                  q = { as: m, noChildContext: u, exportDependencies: n2 };
                }
                x = (t = "render" == h.get("completeOn")) || h.has(a.i.pa);
                a.o(function() {
                  var h2 = a.a.f(c()), m2 = !e !== !h2, u2 = !p, r2;
                  if (n2 || m2 !== l) {
                    x && (k = a.i.Cb(b3, k));
                    if (m2) {
                      if (!d || n2)
                        q.dataDependency = a.S.o();
                      r2 = d ? k.createChildContext("function" == typeof h2 ? h2 : c, q) : a.S.qa() ? k.extend(null, q) : k;
                    }
                    u2 && a.S.qa() && (p = a.a.Ca(a.h.childNodes(b3), true));
                    m2 ? (u2 || a.h.va(b3, a.a.Ca(p)), a.Oa(r2, b3)) : (a.h.Ea(b3), t || a.i.ma(b3, a.i.H));
                    l = m2;
                  }
                }, null, { l: b3 });
                return { controlsDescendantBindings: true };
              } };
              a.m.Ra[b2] = false;
              a.h.ea[b2] = true;
            }
            b("if");
            b("ifnot", false, true);
            b("with", true);
          })();
          a.c.let = { init: function(b, c, d, e, f) {
            c = f.extend(c);
            a.Oa(c, b);
            return { controlsDescendantBindings: true };
          } };
          a.h.ea.let = true;
          var Q = {};
          a.c.options = { init: function(b) {
            if ("select" !== a.a.R(b))
              throw Error("options binding applies only to SELECT elements");
            for (; 0 < b.length; )
              b.remove(0);
            return { controlsDescendantBindings: true };
          }, update: function(b, c, d) {
            function e() {
              return a.a.jb(b.options, function(a2) {
                return a2.selected;
              });
            }
            function f(a2, b2, c2) {
              var d2 = typeof b2;
              return "function" == d2 ? b2(a2) : "string" == d2 ? a2[b2] : c2;
            }
            function g(c2, d2) {
              if (x && l)
                a.i.ma(b, a.i.H);
              else if (t.length) {
                var e2 = 0 <= a.a.A(t, a.w.M(d2[0]));
                a.a.Zc(d2[0], e2);
                x && !e2 && a.u.G(a.a.Fb, null, [b, "change"]);
              }
            }
            var h = b.multiple, m = 0 != b.length && h ? b.scrollTop : null, k = a.a.f(c()), l = d.get("valueAllowUnset") && d.has("value"), p = d.get("optionsIncludeDestroyed");
            c = {};
            var q, t = [];
            l || (h ? t = a.a.Mb(e(), a.w.M) : 0 <= b.selectedIndex && t.push(a.w.M(b.options[b.selectedIndex])));
            k && ("undefined" == typeof k.length && (k = [k]), q = a.a.jb(k, function(b2) {
              return p || b2 === n || null === b2 || !a.a.f(b2._destroy);
            }), d.has("optionsCaption") && (k = a.a.f(d.get("optionsCaption")), null !== k && k !== n && q.unshift(Q)));
            var x = false;
            c.beforeRemove = function(a2) {
              b.removeChild(a2);
            };
            k = g;
            d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (k = function(b2, c2) {
              g(0, c2);
              a.u.G(d.get("optionsAfterRender"), null, [c2[0], b2 !== Q ? b2 : n]);
            });
            a.a.ec(b, q, function(c2, e2, g2) {
              g2.length && (t = !l && g2[0].selected ? [a.w.M(g2[0])] : [], x = true);
              e2 = b.ownerDocument.createElement("option");
              c2 === Q ? (a.a.Bb(e2, d.get("optionsCaption")), a.w.cb(e2, n)) : (g2 = f(c2, d.get("optionsValue"), c2), a.w.cb(e2, a.a.f(g2)), c2 = f(c2, d.get("optionsText"), g2), a.a.Bb(e2, c2));
              return [e2];
            }, c, k);
            if (!l) {
              var B;
              h ? B = t.length && e().length < t.length : B = t.length && 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) !== t[0] : t.length || 0 <= b.selectedIndex;
              B && a.u.G(a.a.Fb, null, [b, "change"]);
            }
            (l || a.S.Ya()) && a.i.ma(b, a.i.H);
            a.a.wd(b);
            m && 20 < Math.abs(m - b.scrollTop) && (b.scrollTop = m);
          } };
          a.c.options.$b = a.a.g.Z();
          a.c.selectedOptions = { init: function(b, c, d) {
            function e() {
              var e2 = c(), f2 = [];
              a.a.D(b.getElementsByTagName("option"), function(b2) {
                b2.selected && f2.push(a.w.M(b2));
              });
              a.m.eb(
                e2,
                d,
                "selectedOptions",
                f2
              );
            }
            function f() {
              var d2 = a.a.f(c()), e2 = b.scrollTop;
              d2 && "number" == typeof d2.length && a.a.D(b.getElementsByTagName("option"), function(b2) {
                var c2 = 0 <= a.a.A(d2, a.w.M(b2));
                b2.selected != c2 && a.a.Zc(b2, c2);
              });
              b.scrollTop = e2;
            }
            if ("select" != a.a.R(b))
              throw Error("selectedOptions binding applies only to SELECT elements");
            var g;
            a.i.subscribe(b, a.i.H, function() {
              g ? e() : (a.a.B(b, "change", e), g = a.o(f, null, { l: b }));
            }, null, { notifyImmediately: true });
          }, update: function() {
          } };
          a.m.wa.selectedOptions = true;
          a.c.style = { update: function(b, c) {
            var d = a.a.f(c() || {});
            a.a.P(d, function(c2, d2) {
              d2 = a.a.f(d2);
              if (null === d2 || d2 === n || false === d2)
                d2 = "";
              if (v)
                v(b).css(c2, d2);
              else if (/^--/.test(c2))
                b.style.setProperty(c2, d2);
              else {
                c2 = c2.replace(/-(\w)/g, function(a2, b2) {
                  return b2.toUpperCase();
                });
                var g = b.style[c2];
                b.style[c2] = d2;
                d2 === g || b.style[c2] != g || isNaN(d2) || (b.style[c2] = d2 + "px");
              }
            });
          } };
          a.c.submit = { init: function(b, c, d, e, f) {
            if ("function" != typeof c())
              throw Error("The value for a submit binding must be a function");
            a.a.B(b, "submit", function(a2) {
              var d2, e2 = c();
              try {
                d2 = e2.call(f.$data, b);
              } finally {
                true !== d2 && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false);
              }
            });
          } };
          a.c.text = { init: function() {
            return { controlsDescendantBindings: true };
          }, update: function(b, c) {
            a.a.Bb(b, c());
          } };
          a.h.ea.text = true;
          (function() {
            if (A && A.navigator) {
              var b = function(a2) {
                if (a2)
                  return parseFloat(a2[1]);
              }, c = A.navigator.userAgent, d, e, f, g, h;
              (d = A.opera && A.opera.version && parseInt(A.opera.version())) || (h = b(c.match(/Edge\/([^ ]+)$/))) || b(c.match(/Chrome\/([^ ]+)/)) || (e = b(c.match(/Version\/([^ ]+) Safari/))) || (f = b(c.match(/Firefox\/([^ ]+)/))) || (g = a.a.W || b(c.match(/MSIE ([^ ]+)/))) || (g = b(c.match(/rv:([^ )]+)/)));
            }
            if (8 <= g && 10 > g)
              var m = a.a.g.Z(), k = a.a.g.Z(), l = function(b2) {
                var c2 = this.activeElement;
                (c2 = c2 && a.a.g.get(c2, k)) && c2(b2);
              }, p = function(b2, c2) {
                var d2 = b2.ownerDocument;
                a.a.g.get(d2, m) || (a.a.g.set(d2, m, true), a.a.B(d2, "selectionchange", l));
                a.a.g.set(b2, k, c2);
              };
            a.c.textInput = { init: function(b2, c2, k2) {
              function l2(c3, d2) {
                a.a.B(b2, c3, d2);
              }
              function m2() {
                var d2 = a.a.f(c2());
                if (null === d2 || d2 === n)
                  d2 = "";
                L !== n && d2 === L ? a.a.setTimeout(m2, 4) : b2.value !== d2 && (y = true, b2.value = d2, y = false, v2 = b2.value);
              }
              function r2() {
                w3 || (L = b2.value, w3 = a.a.setTimeout(
                  z,
                  4
                ));
              }
              function z() {
                clearTimeout(w3);
                L = w3 = n;
                var d2 = b2.value;
                v2 !== d2 && (v2 = d2, a.m.eb(c2(), k2, "textInput", d2));
              }
              var v2 = b2.value, w3, L, A2 = 9 == a.a.W ? r2 : z, y = false;
              g && l2("keypress", z);
              11 > g && l2("propertychange", function(a2) {
                y || "value" !== a2.propertyName || A2(a2);
              });
              8 == g && (l2("keyup", z), l2("keydown", z));
              p && (p(b2, A2), l2("dragend", r2));
              (!g || 9 <= g) && l2("input", A2);
              5 > e && "textarea" === a.a.R(b2) ? (l2("keydown", r2), l2("paste", r2), l2("cut", r2)) : 11 > d ? l2("keydown", r2) : 4 > f ? (l2("DOMAutoComplete", z), l2("dragdrop", z), l2("drop", z)) : h && "number" === b2.type && l2("keydown", r2);
              l2(
                "change",
                z
              );
              l2("blur", z);
              a.o(m2, null, { l: b2 });
            } };
            a.m.wa.textInput = true;
            a.c.textinput = { preprocess: function(a2, b2, c2) {
              c2("textInput", a2);
            } };
          })();
          a.c.uniqueName = { init: function(b, c) {
            if (c()) {
              var d = "ko_unique_" + ++a.c.uniqueName.rd;
              a.a.Yc(b, d);
            }
          } };
          a.c.uniqueName.rd = 0;
          a.c.using = { init: function(b, c, d, e, f) {
            var g;
            d.has("as") && (g = { as: d.get("as"), noChildContext: d.get("noChildContext") });
            c = f.createChildContext(c, g);
            a.Oa(c, b);
            return { controlsDescendantBindings: true };
          } };
          a.h.ea.using = true;
          a.c.value = { init: function(b, c, d) {
            var e = a.a.R(b), f = "input" == e;
            if (!f || "checkbox" != b.type && "radio" != b.type) {
              var g = [], h = d.get("valueUpdate"), m = false, k = null;
              h && ("string" == typeof h ? g = [h] : g = a.a.wc(h), a.a.Pa(g, "change"));
              var l = function() {
                k = null;
                m = false;
                var e2 = c(), f2 = a.w.M(b);
                a.m.eb(e2, d, "value", f2);
              };
              !a.a.W || !f || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.A(g, "propertychange") || (a.a.B(b, "propertychange", function() {
                m = true;
              }), a.a.B(b, "focus", function() {
                m = false;
              }), a.a.B(b, "blur", function() {
                m && l();
              }));
              a.a.D(g, function(c2) {
                var d2 = l;
                a.a.Ud(c2, "after") && (d2 = function() {
                  k = a.w.M(b);
                  a.a.setTimeout(l, 0);
                }, c2 = c2.substring(5));
                a.a.B(b, c2, d2);
              });
              var p;
              p = f && "file" == b.type ? function() {
                var d2 = a.a.f(c());
                null === d2 || d2 === n || "" === d2 ? b.value = "" : a.u.G(l);
              } : function() {
                var f2 = a.a.f(c()), g2 = a.w.M(b);
                if (null !== k && f2 === k)
                  a.a.setTimeout(p, 0);
                else if (f2 !== g2 || g2 === n)
                  "select" === e ? (g2 = d.get("valueAllowUnset"), a.w.cb(b, f2, g2), g2 || f2 === a.w.M(b) || a.u.G(l)) : a.w.cb(b, f2);
              };
              if ("select" === e) {
                var q;
                a.i.subscribe(
                  b,
                  a.i.H,
                  function() {
                    q ? d.get("valueAllowUnset") ? p() : l() : (a.a.B(b, "change", l), q = a.o(p, null, { l: b }));
                  },
                  null,
                  { notifyImmediately: true }
                );
              } else
                a.a.B(b, "change", l), a.o(p, null, { l: b });
            } else
              a.ib(b, { checkedValue: c });
          }, update: function() {
          } };
          a.m.wa.value = true;
          a.c.visible = { update: function(b, c) {
            var d = a.a.f(c()), e = "none" != b.style.display;
            d && !e ? b.style.display = "" : !d && e && (b.style.display = "none");
          } };
          a.c.hidden = { update: function(b, c) {
            a.c.visible.update(b, function() {
              return !a.a.f(c());
            });
          } };
          (function(b) {
            a.c[b] = { init: function(c, d, e, f, g) {
              return a.c.event.init.call(this, c, function() {
                var a2 = {};
                a2[b] = d();
                return a2;
              }, e, f, g);
            } };
          })("click");
          a.ca = function() {
          };
          a.ca.prototype.renderTemplateSource = function() {
            throw Error("Override renderTemplateSource");
          };
          a.ca.prototype.createJavaScriptEvaluatorBlock = function() {
            throw Error("Override createJavaScriptEvaluatorBlock");
          };
          a.ca.prototype.makeTemplateSource = function(b, c) {
            if ("string" == typeof b) {
              c = c || w2;
              var d = c.getElementById(b);
              if (!d)
                throw Error("Cannot find template with ID " + b);
              return new a.C.F(d);
            }
            if (1 == b.nodeType || 8 == b.nodeType)
              return new a.C.ia(b);
            throw Error("Unknown template type: " + b);
          };
          a.ca.prototype.renderTemplate = function(a2, c, d, e) {
            a2 = this.makeTemplateSource(a2, e);
            return this.renderTemplateSource(a2, c, d, e);
          };
          a.ca.prototype.isTemplateRewritten = function(a2, c) {
            return false === this.allowTemplateRewriting ? true : this.makeTemplateSource(a2, c).data("isRewritten");
          };
          a.ca.prototype.rewriteTemplate = function(a2, c, d) {
            a2 = this.makeTemplateSource(a2, d);
            c = c(a2.text());
            a2.text(c);
            a2.data("isRewritten", true);
          };
          a.b("templateEngine", a.ca);
          a.kc = function() {
            function b(b2, c2, d2, h) {
              b2 = a.m.ac(b2);
              for (var m = a.m.Ra, k = 0; k < b2.length; k++) {
                var l = b2[k].key;
                if (Object.prototype.hasOwnProperty.call(
                  m,
                  l
                )) {
                  var p = m[l];
                  if ("function" === typeof p) {
                    if (l = p(b2[k].value))
                      throw Error(l);
                  } else if (!p)
                    throw Error("This template engine does not support the '" + l + "' binding within its templates");
                }
              }
              d2 = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.m.vb(b2, { valueAccessors: true }) + " } })()},'" + d2.toLowerCase() + "')";
              return h.createJavaScriptEvaluatorBlock(d2) + c2;
            }
            var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
            return { xd: function(b2, c2, d2) {
              c2.isTemplateRewritten(b2, d2) || c2.rewriteTemplate(b2, function(b3) {
                return a.kc.Ld(b3, c2);
              }, d2);
            }, Ld: function(a2, f) {
              return a2.replace(c, function(a3, c2, d2, e, l) {
                return b(l, c2, d2, f);
              }).replace(d, function(a3, c2) {
                return b(c2, "<!-- ko -->", "#comment", f);
              });
            }, md: function(b2, c2) {
              return a.aa.Xb(function(d2, h) {
                var m = d2.nextSibling;
                m && m.nodeName.toLowerCase() === c2 && a.ib(m, b2, h);
              });
            } };
          }();
          a.b("__tr_ambtns", a.kc.md);
          (function() {
            a.C = {};
            a.C.F = function(b2) {
              if (this.F = b2) {
                var c2 = a.a.R(b2);
                this.ab = "script" === c2 ? 1 : "textarea" === c2 ? 2 : "template" == c2 && b2.content && 11 === b2.content.nodeType ? 3 : 4;
              }
            };
            a.C.F.prototype.text = function() {
              var b2 = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
              if (0 == arguments.length)
                return this.F[b2];
              var c2 = arguments[0];
              "innerHTML" === b2 ? a.a.fc(this.F, c2) : this.F[b2] = c2;
            };
            var b = a.a.g.Z() + "_";
            a.C.F.prototype.data = function(c2) {
              if (1 === arguments.length)
                return a.a.g.get(this.F, b + c2);
              a.a.g.set(this.F, b + c2, arguments[1]);
            };
            var c = a.a.g.Z();
            a.C.F.prototype.nodes = function() {
              var b2 = this.F;
              if (0 == arguments.length) {
                var e = a.a.g.get(b2, c) || {}, f = e.lb || (3 === this.ab ? b2.content : 4 === this.ab ? b2 : n);
                if (!f || e.jd) {
                  var g = this.text();
                  g && g !== e.bb && (f = a.a.Md(g, b2.ownerDocument), a.a.g.set(b2, c, { lb: f, bb: g, jd: true }));
                }
                return f;
              }
              e = arguments[0];
              this.ab !== n && this.text("");
              a.a.g.set(b2, c, { lb: e });
            };
            a.C.ia = function(a2) {
              this.F = a2;
            };
            a.C.ia.prototype = new a.C.F();
            a.C.ia.prototype.constructor = a.C.ia;
            a.C.ia.prototype.text = function() {
              if (0 == arguments.length) {
                var b2 = a.a.g.get(this.F, c) || {};
                b2.bb === n && b2.lb && (b2.bb = b2.lb.innerHTML);
                return b2.bb;
              }
              a.a.g.set(
                this.F,
                c,
                { bb: arguments[0] }
              );
            };
            a.b("templateSources", a.C);
            a.b("templateSources.domElement", a.C.F);
            a.b("templateSources.anonymousTemplate", a.C.ia);
          })();
          (function() {
            function b(b2, c2, d2) {
              var e2;
              for (c2 = a.h.nextSibling(c2); b2 && (e2 = b2) !== c2; )
                b2 = a.h.nextSibling(e2), d2(e2, b2);
            }
            function c(c2, d2) {
              if (c2.length) {
                var e2 = c2[0], f2 = c2[c2.length - 1], g2 = e2.parentNode, h2 = a.ga.instance, m2 = h2.preprocessNode;
                if (m2) {
                  b(e2, f2, function(a2, b2) {
                    var c3 = a2.previousSibling, d3 = m2.call(h2, a2);
                    d3 && (a2 === e2 && (e2 = d3[0] || b2), a2 === f2 && (f2 = d3[d3.length - 1] || c3));
                  });
                  c2.length = 0;
                  if (!e2)
                    return;
                  e2 === f2 ? c2.push(e2) : (c2.push(e2, f2), a.a.Ua(c2, g2));
                }
                b(e2, f2, function(b2) {
                  1 !== b2.nodeType && 8 !== b2.nodeType || a.vc(d2, b2);
                });
                b(e2, f2, function(b2) {
                  1 !== b2.nodeType && 8 !== b2.nodeType || a.aa.cd(b2, [d2]);
                });
                a.a.Ua(c2, g2);
              }
            }
            function d(a2) {
              return a2.nodeType ? a2 : 0 < a2.length ? a2[0] : null;
            }
            function e(b2, e2, f2, h2, m2) {
              m2 = m2 || {};
              var n2 = (b2 && d(b2) || f2 || {}).ownerDocument, B = m2.templateEngine || g;
              a.kc.xd(f2, B, n2);
              f2 = B.renderTemplate(f2, h2, m2, n2);
              if ("number" != typeof f2.length || 0 < f2.length && "number" != typeof f2[0].nodeType)
                throw Error("Template engine must return an array of DOM nodes");
              n2 = false;
              switch (e2) {
                case "replaceChildren":
                  a.h.va(
                    b2,
                    f2
                  );
                  n2 = true;
                  break;
                case "replaceNode":
                  a.a.Xc(b2, f2);
                  n2 = true;
                  break;
                case "ignoreTargetNode":
                  break;
                default:
                  throw Error("Unknown renderMode: " + e2);
              }
              n2 && (c(f2, h2), m2.afterRender && a.u.G(m2.afterRender, null, [f2, h2[m2.as || "$data"]]), "replaceChildren" == e2 && a.i.ma(b2, a.i.H));
              return f2;
            }
            function f(b2, c2, d2) {
              return a.O(b2) ? b2() : "function" === typeof b2 ? b2(c2, d2) : b2;
            }
            var g;
            a.gc = function(b2) {
              if (b2 != n && !(b2 instanceof a.ca))
                throw Error("templateEngine must inherit from ko.templateEngine");
              g = b2;
            };
            a.dc = function(b2, c2, h2, m2, t) {
              h2 = h2 || {};
              if ((h2.templateEngine || g) == n)
                throw Error("Set a template engine before calling renderTemplate");
              t = t || "replaceChildren";
              if (m2) {
                var x = d(m2);
                return a.$(function() {
                  var g2 = c2 && c2 instanceof a.fa ? c2 : new a.fa(c2, null, null, null, { exportDependencies: true }), n2 = f(b2, g2.$data, g2), g2 = e(m2, t, n2, g2, h2);
                  "replaceNode" == t && (m2 = g2, x = d(m2));
                }, null, { Sa: function() {
                  return !x || !a.a.Sb(x);
                }, l: x && "replaceNode" == t ? x.parentNode : x });
              }
              return a.aa.Xb(function(d2) {
                a.dc(b2, c2, h2, d2, "replaceNode");
              });
            };
            a.Qd = function(b2, d2, g2, h2, m2) {
              function x(b3, c2) {
                a.u.G(a.a.ec, null, [h2, b3, u, g2, r2, c2]);
                a.i.ma(h2, a.i.H);
              }
              function r2(a2, b3) {
                c(b3, v2);
                g2.afterRender && g2.afterRender(b3, a2);
                v2 = null;
              }
              function u(a2, c2) {
                v2 = m2.createChildContext(a2, { as: z, noChildContext: g2.noChildContext, extend: function(a3) {
                  a3.$index = c2;
                  z && (a3[z + "Index"] = c2);
                } });
                var d3 = f(b2, a2, v2);
                return e(h2, "ignoreTargetNode", d3, v2, g2);
              }
              var v2, z = g2.as, w3 = false === g2.includeDestroyed || a.options.foreachHidesDestroyed && !g2.includeDestroyed;
              if (w3 || g2.beforeRemove || !a.Pc(d2))
                return a.$(function() {
                  var b3 = a.a.f(d2) || [];
                  "undefined" == typeof b3.length && (b3 = [b3]);
                  w3 && (b3 = a.a.jb(b3, function(b4) {
                    return b4 === n || null === b4 || !a.a.f(b4._destroy);
                  }));
                  x(b3);
                }, null, { l: h2 });
              x(d2.v());
              var A2 = d2.subscribe(function(a2) {
                x(d2(), a2);
              }, null, "arrayChange");
              A2.l(h2);
              return A2;
            };
            var h = a.a.g.Z(), m = a.a.g.Z();
            a.c.template = { init: function(b2, c2) {
              var d2 = a.a.f(c2());
              if ("string" == typeof d2 || "name" in d2)
                a.h.Ea(b2);
              else if ("nodes" in d2) {
                d2 = d2.nodes || [];
                if (a.O(d2))
                  throw Error('The "nodes" option must be a plain, non-observable array.');
                var e2 = d2[0] && d2[0].parentNode;
                e2 && a.a.g.get(e2, m) || (e2 = a.a.Yb(d2), a.a.g.set(e2, m, true));
                new a.C.ia(b2).nodes(e2);
              } else if (d2 = a.h.childNodes(b2), 0 < d2.length)
                e2 = a.a.Yb(d2), new a.C.ia(b2).nodes(e2);
              else
                throw Error("Anonymous template defined, but no template content was provided");
              return { controlsDescendantBindings: true };
            }, update: function(b2, c2, d2, e2, f2) {
              var g2 = c2();
              c2 = a.a.f(g2);
              d2 = true;
              e2 = null;
              "string" == typeof c2 ? c2 = {} : (g2 = "name" in c2 ? c2.name : b2, "if" in c2 && (d2 = a.a.f(c2["if"])), d2 && "ifnot" in c2 && (d2 = !a.a.f(c2.ifnot)), d2 && !g2 && (d2 = false));
              "foreach" in c2 ? e2 = a.Qd(g2, d2 && c2.foreach || [], c2, b2, f2) : d2 ? (d2 = f2, "data" in c2 && (d2 = f2.createChildContext(c2.data, { as: c2.as, noChildContext: c2.noChildContext, exportDependencies: true })), e2 = a.dc(g2, d2, c2, b2)) : a.h.Ea(b2);
              f2 = e2;
              (c2 = a.a.g.get(b2, h)) && "function" == typeof c2.s && c2.s();
              a.a.g.set(b2, h, !f2 || f2.ja && !f2.ja() ? n : f2);
            } };
            a.m.Ra.template = function(b2) {
              b2 = a.m.ac(b2);
              return 1 == b2.length && b2[0].unknown || a.m.Id(b2, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
            };
            a.h.ea.template = true;
          })();
          a.b("setTemplateEngine", a.gc);
          a.b("renderTemplate", a.dc);
          a.a.Kc = function(a2, c, d) {
            if (a2.length && c.length) {
              var e, f, g, h, m;
              for (e = f = 0; (!d || e < d) && (h = a2[f]); ++f) {
                for (g = 0; m = c[g]; ++g)
                  if (h.value === m.value) {
                    h.moved = m.index;
                    m.moved = h.index;
                    c.splice(g, 1);
                    e = g = 0;
                    break;
                  }
                e += g;
              }
            }
          };
          a.a.Pb = function() {
            function b(b2, d, e, f, g) {
              var h = Math.min, m = Math.max, k = [], l, p = b2.length, q, n2 = d.length, r2 = n2 - p || 1, v2 = p + n2 + 1, u, w3, z;
              for (l = 0; l <= p; l++)
                for (w3 = u, k.push(u = []), z = h(n2, l + r2), q = m(0, l - 1); q <= z; q++)
                  u[q] = q ? l ? b2[l - 1] === d[q - 1] ? w3[q - 1] : h(w3[q] || v2, u[q - 1] || v2) + 1 : q + 1 : l + 1;
              h = [];
              m = [];
              r2 = [];
              l = p;
              for (q = n2; l || q; )
                n2 = k[l][q] - 1, q && n2 === k[l][q - 1] ? m.push(h[h.length] = { status: e, value: d[--q], index: q }) : l && n2 === k[l - 1][q] ? r2.push(h[h.length] = { status: f, value: b2[--l], index: l }) : (--q, --l, g.sparse || h.push({ status: "retained", value: d[q] }));
              a.a.Kc(r2, m, !g.dontLimitMoves && 10 * p);
              return h.reverse();
            }
            return function(a2, d, e) {
              e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {};
              a2 = a2 || [];
              d = d || [];
              return a2.length < d.length ? b(a2, d, "added", "deleted", e) : b(d, a2, "deleted", "added", e);
            };
          }();
          a.b("utils.compareArrays", a.a.Pb);
          (function() {
            function b(b2, c2, d2, h, m) {
              var k = [], l = a.$(function() {
                var l2 = c2(d2, m, a.a.Ua(k, b2)) || [];
                0 < k.length && (a.a.Xc(k, l2), h && a.u.G(h, null, [d2, l2, m]));
                k.length = 0;
                a.a.Nb(k, l2);
              }, null, { l: b2, Sa: function() {
                return !a.a.kd(k);
              } });
              return { Y: k, $: l.ja() ? l : n };
            }
            var c = a.a.g.Z(), d = a.a.g.Z();
            a.a.ec = function(e, f, g, h, m, k) {
              function l(b2) {
                y = { Aa: b2, pb: a.ta(w3++) };
                v2.push(y);
                r2 || F2.push(y);
              }
              function p(b2) {
                y = t[b2];
                w3 !== y.pb.v() && D2.push(y);
                y.pb(w3++);
                a.a.Ua(y.Y, e);
                v2.push(y);
              }
              function q(b2, c2) {
                if (b2)
                  for (var d2 = 0, e2 = c2.length; d2 < e2; d2++)
                    a.a.D(c2[d2].Y, function(a2) {
                      b2(a2, d2, c2[d2].Aa);
                    });
              }
              f = f || [];
              "undefined" == typeof f.length && (f = [f]);
              h = h || {};
              var t = a.a.g.get(e, c), r2 = !t, v2 = [], u = 0, w3 = 0, z = [], A2 = [], C2 = [], D2 = [], F2 = [], y, I2 = 0;
              if (r2)
                a.a.D(f, l);
              else {
                if (!k || t && t._countWaitingForRemove) {
                  var E = a.a.Mb(t, function(a2) {
                    return a2.Aa;
                  });
                  k = a.a.Pb(E, f, { dontLimitMoves: h.dontLimitMoves, sparse: true });
                }
                for (var E = 0, G2, H2, K2; G2 = k[E]; E++)
                  switch (H2 = G2.moved, K2 = G2.index, G2.status) {
                    case "deleted":
                      for (; u < K2; )
                        p(u++);
                      H2 === n && (y = t[u], y.$ && (y.$.s(), y.$ = n), a.a.Ua(y.Y, e).length && (h.beforeRemove && (v2.push(y), I2++, y.Aa === d ? y = null : C2.push(y)), y && z.push.apply(z, y.Y)));
                      u++;
                      break;
                    case "added":
                      for (; w3 < K2; )
                        p(u++);
                      H2 !== n ? (A2.push(v2.length), p(H2)) : l(G2.value);
                  }
                for (; w3 < f.length; )
                  p(u++);
                v2._countWaitingForRemove = I2;
              }
              a.a.g.set(e, c, v2);
              q(h.beforeMove, D2);
              a.a.D(
                z,
                h.beforeRemove ? a.oa : a.removeNode
              );
              var M, O, P;
              try {
                P = e.ownerDocument.activeElement;
              } catch (N2) {
              }
              if (A2.length)
                for (; (E = A2.shift()) != n; ) {
                  y = v2[E];
                  for (M = n; E; )
                    if ((O = v2[--E].Y) && O.length) {
                      M = O[O.length - 1];
                      break;
                    }
                  for (f = 0; u = y.Y[f]; M = u, f++)
                    a.h.Wb(e, u, M);
                }
              for (E = 0; y = v2[E]; E++) {
                y.Y || a.a.extend(y, b(e, g, y.Aa, m, y.pb));
                for (f = 0; u = y.Y[f]; M = u, f++)
                  a.h.Wb(e, u, M);
                !y.Ed && m && (m(y.Aa, y.Y, y.pb), y.Ed = true, M = y.Y[y.Y.length - 1]);
              }
              P && e.ownerDocument.activeElement != P && P.focus();
              q(h.beforeRemove, C2);
              for (E = 0; E < C2.length; ++E)
                C2[E].Aa = d;
              q(h.afterMove, D2);
              q(h.afterAdd, F2);
            };
          })();
          a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.ec);
          a.ba = function() {
            this.allowTemplateRewriting = false;
          };
          a.ba.prototype = new a.ca();
          a.ba.prototype.constructor = a.ba;
          a.ba.prototype.renderTemplateSource = function(b, c, d, e) {
            if (c = (9 > a.a.W ? 0 : b.nodes) ? b.nodes() : null)
              return a.a.la(c.cloneNode(true).childNodes);
            b = b.text();
            return a.a.ua(b, e);
          };
          a.ba.Ma = new a.ba();
          a.gc(a.ba.Ma);
          a.b("nativeTemplateEngine", a.ba);
          (function() {
            a.$a = function() {
              var a2 = this.Hd = function() {
                if (!v || !v.tmpl)
                  return 0;
                try {
                  if (0 <= v.tmpl.tag.tmpl.open.toString().indexOf("__"))
                    return 2;
                } catch (a3) {
                }
                return 1;
              }();
              this.renderTemplateSource = function(b2, e, f, g) {
                g = g || w2;
                f = f || {};
                if (2 > a2)
                  throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                var h = b2.data("precompiled");
                h || (h = b2.text() || "", h = v.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b2.data("precompiled", h));
                b2 = [e.$data];
                e = v.extend({ koBindingContext: e }, f.templateOptions);
                e = v.tmpl(h, b2, e);
                e.appendTo(g.createElement("div"));
                v.fragments = {};
                return e;
              };
              this.createJavaScriptEvaluatorBlock = function(a3) {
                return "{{ko_code ((function() { return " + a3 + " })()) }}";
              };
              this.addTemplate = function(a3, b2) {
                w2.write("<script type='text/html' id='" + a3 + "'>" + b2 + "<\/script>");
              };
              0 < a2 && (v.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, v.tmpl.tag.ko_with = { open: "with($1) {", close: "} " });
            };
            a.$a.prototype = new a.ca();
            a.$a.prototype.constructor = a.$a;
            var b = new a.$a();
            0 < b.Hd && a.gc(b);
            a.b("jqueryTmplTemplateEngine", a.$a);
          })();
        });
      })();
    })();
  }
});

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w2) {
          if (!w2.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w2);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.6.0", jQuery2 = function(selector, context) {
        return new jQuery2.fn.init(selector, context);
      };
      jQuery2.fn = jQuery2.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery2,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
          var ret = jQuery2.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery2.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery2.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery2.extend = jQuery2.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery2.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery2.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        // results is for internal usage only
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery2.merge(
                ret,
                typeof arr2 === "string" ? [arr2] : arr2
              );
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support
      });
      if (typeof Symbol === "function") {
        jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery2.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      var Sizzle = (
        /*!
         * Sizzle CSS Selector Engine v2.3.6
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2021-02-16
         */
        function(window3) {
          var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * /* @__PURE__ */ new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
            var i2 = 0, len = list.length;
            for (; i2 < len; i2++) {
              if (list[i2] === elem) {
                return i2;
              }
            }
            return -1;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
          // or strings [capture 3 or capture 4]"
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            return nonHex ? (
              // Strip the backslash prefix from a non-hex escape sequence
              nonHex
            ) : (
              // Replace a hexadecimal escape sequence with the encoded Unicode code point
              // Support: IE <=11+
              // For values outside the Basic Multilingual Plane (BMP), manually construct a
              // surrogate pair
              high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
            );
          }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
              if (ch === "\0") {
                return "\uFFFD";
              }
              return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            return "\\" + ch;
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
            },
            { dir: "parentNode", next: "legend" }
          );
          try {
            push2.apply(
              arr2 = slice2.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr2[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: arr2.length ? (
                // Leverage slice if possible
                function(target, els) {
                  pushNative.apply(target, slice2.call(els));
                }
              ) : (
                // Support: IE<9
                // Otherwise append directly
                function(target, els) {
                  var j = target.length, i2 = 0;
                  while (target[j++] = els[i2++]) {
                  }
                  target.length = j - 1;
                }
              )
            };
          }
          function Sizzle2(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && // Support: IE 8 only
                // Exclude object elements
                (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext !== context || !support2.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = nid.replace(rcssescape, fcssescape);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim2, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function addHandle(attrs, handler) {
            var arr3 = attrs.split("|"), i2 = arr3.length;
            while (i2--) {
              Expr.attrHandle[arr3[i2]] = handler;
            }
          }
          function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            if (diff) {
              return diff;
            }
            if (cur) {
              while (cur = cur.nextSibling) {
                if (cur === b) {
                  return -1;
                }
              }
            }
            return a ? 1 : -1;
          }
          function createInputPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                  /* jshint -W018 */
                  elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          support2 = Sizzle2.support = {};
          isXML = Sizzle2.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
          };
          setDocument = Sizzle2.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            docElem = document3.documentElement;
            documentIsHTML = !isXML(document3);
            if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              if (subWindow.addEventListener) {
                subWindow.addEventListener("unload", unloadHandler, false);
              } else if (subWindow.attachEvent) {
                subWindow.attachEvent("onunload", unloadHandler);
              }
            }
            support2.scope = assert(function(el) {
              docElem.appendChild(el).appendChild(document3.createElement("div"));
              return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            support2.attributes = assert(function(el) {
              el.className = "i";
              return !el.getAttribute("className");
            });
            support2.getElementsByTagName = assert(function(el) {
              el.appendChild(document3.createComment(""));
              return !el.getElementsByTagName("*").length;
            });
            support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
            support2.getById = assert(function(el) {
              docElem.appendChild(el).id = expando;
              return !document3.getElementsByName || !document3.getElementsByName(expando).length;
            });
            if (support2.getById) {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else if (support2.qsa) {
                return context.querySelectorAll(tag);
              }
            } : function(tag, context) {
              var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
              if (tag === "*") {
                while (elem = results[i2++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem);
                  }
                }
                return tmp;
              }
              return results;
            };
            Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support2.qsa = rnative.test(document3.querySelectorAll)) {
              assert(function(el) {
                var input;
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (el.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`);
                }
                if (!el.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                }
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }
                input = document3.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
                }
                if (!el.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
                el.querySelectorAll("\\\f");
                rbuggyQSA.push("[\\r\\n\\f]");
              });
              assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var input = document3.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                if (el.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                }
                if (el.querySelectorAll(":enabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
              });
            }
            if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function(el) {
                support2.disconnectedMatch = matches.call(el, "*");
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
              });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
              var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
              return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
              if (b) {
                while (b = b.parentNode) {
                  if (b === a) {
                    return true;
                  }
                }
              }
              return false;
            };
            sortOrder = hasCompare ? function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
                // Otherwise we know they are disconnected
                1
              );
              if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a == document3 || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                  return -1;
                }
                if (b == document3 || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            } : function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
              if (!aup || !bup) {
                return a == document3 ? -1 : b == document3 ? 1 : (
                  /* eslint-enable eqeqeq */
                  aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0
                );
              } else if (aup === bup) {
                return siblingCheck(a, b);
              }
              cur = a;
              while (cur = cur.parentNode) {
                ap.unshift(cur);
              }
              cur = b;
              while (cur = cur.parentNode) {
                bp.unshift(cur);
              }
              while (ap[i2] === bp[i2]) {
                i2++;
              }
              return i2 ? (
                // Do a sibling check if the nodes have a common ancestor
                siblingCheck(ap[i2], bp[i2])
              ) : (
                // Otherwise nodes in our document sort first
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */
                ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : (
                  /* eslint-enable eqeqeq */
                  0
                )
              );
            };
            return document3;
          };
          Sizzle2.matches = function(expr, elements) {
            return Sizzle2(expr, null, null, elements);
          };
          Sizzle2.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support2.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return Sizzle2(expr, document3, null, [elem]).length > 0;
          };
          Sizzle2.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return contains(context, elem);
          };
          Sizzle2.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          };
          Sizzle2.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
          };
          Sizzle2.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          Sizzle2.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support2.detectDuplicates;
            sortInput = !support2.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          getText = Sizzle2.getText = function(elem) {
            var node, ret = "", i2 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i2++]) {
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === "string") {
                return elem.textContent;
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          };
          Expr = Sizzle2.selectors = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              "ATTR": function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              "CHILD": function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  Sizzle2.error(match[0]);
                }
                return match;
              },
              "PSEUDO": function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr["CHILD"].test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              "TAG": function(nodeNameSelector) {
                var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
                };
              },
              "CLASS": function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(
                  className,
                  function(elem) {
                    return pattern.test(
                      typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                    );
                  }
                );
              },
              "ATTR": function(name, operator, check) {
                return function(elem) {
                  var result = Sizzle2.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                };
              },
              "CHILD": function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? (
                  // Shortcut for :nth-*(n)
                  function(elem) {
                    return !!elem.parentNode;
                  }
                ) : function(elem, _context, xml) {
                  var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      node = parent;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                              uniqueCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              "PSEUDO": function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf2(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              // Potentially complex pseudos
              "not": markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              "has": markFunction(function(selector) {
                return function(elem) {
                  return Sizzle2(selector, elem).length > 0;
                };
              }),
              "contains": markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || getText(elem)).indexOf(text) > -1;
                };
              }),
              // "Whether an element is represented by a :lang() selector
              // is based solely on the element's language value
              // being equal to the identifier C,
              // or beginning with the identifier C immediately followed by "-".
              // The matching of C against the element's language value is performed case-insensitively.
              // The identifier C does not have to be a valid language name."
              // http://www.w3.org/TR/selectors/#lang-pseudo
              "lang": markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  Sizzle2.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              // Miscellaneous
              "target": function(elem) {
                var hash = window3.location && window3.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              "root": function(elem) {
                return elem === docElem;
              },
              "focus": function(elem) {
                return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              // Boolean properties
              "enabled": createDisabledPseudo(false),
              "disabled": createDisabledPseudo(true),
              "checked": function(elem) {
                var nodeName2 = elem.nodeName.toLowerCase();
                return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
              },
              "selected": function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              // Contents
              "empty": function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              "parent": function(elem) {
                return !Expr.pseudos["empty"](elem);
              },
              // Element/input types
              "header": function(elem) {
                return rheader.test(elem.nodeName);
              },
              "input": function(elem) {
                return rinputs.test(elem.nodeName);
              },
              "button": function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
              },
              "text": function(elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && // Support: IE<8
                // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              // Position-in-collection
              "first": createPositionalPseudo(function() {
                return [0];
              }),
              "last": createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              "even": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "odd": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument > length ? length : argument;
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos["nth"] = Expr.pseudos["eq"];
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rcombinators.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  // Cast descendant combinators to space
                  type: match[0].replace(rtrim2, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : (
              // Cache the tokens
              tokenCache(selector, groups).slice(0)
            );
          };
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? (
              // Check against closest ancestor/preceding element
              function(elem, context, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context, xml) {
                var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                } else {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                      if (skip && skip === elem.nodeName.toLowerCase()) {
                        elem = elem[dir2] || elem;
                      } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                        return newCache[2] = oldCache[2];
                      } else {
                        uniqueCache[key] = newCache;
                        if (newCache[2] = matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  }
                }
                return false;
              }
            );
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              Sizzle2(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? (
                // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                  // ...intermediate processing is necessary
                  []
                ) : (
                  // ...otherwise use results directly
                  results
                )
              ) : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf2(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i2 > 1 && elementMatcher(matchers),
                    i2 > 1 && toSelector(
                      // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                      tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                    ).replace(rtrim2, "$1"),
                    matcher,
                    i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          compile = Sizzle2.compile = function(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          };
          select = Sizzle2.select = function(selector, context, results, seed) {
            var i2, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find = Expr.find[type]) {
                  if (seed = find(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          };
          support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          support2.detectDuplicates = !!hasDuplicate;
          setDocument();
          support2.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
          })) {
            addHandle("type|href|height|width", function(elem, name, isXML2) {
              if (!isXML2) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }
          if (!support2.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
          })) {
            addHandle("value", function(elem, _name, isXML2) {
              if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
              }
            });
          }
          if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
          })) {
            addHandle(booleans, function(elem, name, isXML2) {
              var val;
              if (!isXML2) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
              }
            });
          }
          return Sizzle2;
        }(window2)
      );
      jQuery2.find = Sizzle;
      jQuery2.expr = Sizzle.selectors;
      jQuery2.expr[":"] = jQuery2.expr.pseudos;
      jQuery2.uniqueSort = jQuery2.unique = Sizzle.uniqueSort;
      jQuery2.text = Sizzle.getText;
      jQuery2.isXMLDoc = Sizzle.isXML;
      jQuery2.contains = Sizzle.contains;
      jQuery2.escapeSelector = Sizzle.escape;
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery2(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery2.expr.match.needsContext;
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery2.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery2.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery2.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery2.filter(qualifier, elements, not);
      }
      jQuery2.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery2.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery2(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery2.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery2.find(selector, self[i], ret);
          }
          return len > 1 ? jQuery2.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery2 ? context[0] : context;
              jQuery2.merge(this, jQuery2.parseHTML(
                match[1],
                context && context.nodeType ? context.ownerDocument || context : document2,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : (
            // Execute immediately if ready is not present
            selector(jQuery2)
          );
        }
        return jQuery2.makeArray(selector, this);
      };
      init.prototype = jQuery2.fn;
      rootjQuery = jQuery2(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery2.fn.extend({
        has: function(target) {
          var targets = jQuery2(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery2.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                  // Don't pass non-elements to Sizzle
                  cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)
                ))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery2(elem), this[0]);
          }
          return indexOf.call(
            this,
            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(
            jQuery2.uniqueSort(
              jQuery2.merge(this.get(), jQuery2(selector, context))
            )
          );
        },
        addBack: function(selector) {
          return this.add(
            selector == null ? this.prevObject : this.prevObject.filter(selector)
          );
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery2.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery2.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery2.fn[name] = function(until, selector) {
          var matched = jQuery2.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery2.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery2.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery2.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery2.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          // Remove a callback from the list
          remove: function() {
            jQuery2.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(fn) {
            return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery2.extend({
        Deferred: function(func) {
          var tuples = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              jQuery2.Callbacks("memory"),
              jQuery2.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var fns = arguments;
              return jQuery2.Deferred(function(newDefer) {
                jQuery2.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](
                        this,
                        fn ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery2.Deferred.exceptionHook) {
                        jQuery2.Deferred.exceptionHook(
                          e,
                          process.stackTrace
                        );
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery2.Deferred.getStackHook) {
                      process.stackTrace = jQuery2.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery2.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(obj) {
              return obj != null ? jQuery2.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery2.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
                  state = stateString;
                },
                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable,
                // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable,
                // progress_callbacks.lock
                tuples[0][2].lock,
                // progress_handlers.lock
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(
              singleValue,
              primary.done(updateFunc(i)).resolve,
              primary.reject,
              !remaining
            );
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery2.Deferred.exceptionHook = function(error, stack) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
      };
      jQuery2.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery2.Deferred();
      jQuery2.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery2.readyException(error);
        });
        return this;
      };
      jQuery2.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
          if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
            return;
          }
          jQuery2.isReady = true;
          if (wait !== true && --jQuery2.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery2]);
        }
      });
      jQuery2.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery2.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery2.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value2) {
                return bulk.call(jQuery2(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(
                elems[i],
                key,
                raw ? value : value.call(elems[i], i, fn(elems[i], key))
              );
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery2.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : (
            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)]
          );
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery2.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery2.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery2.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery2.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery2.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
            jQuery2.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery2.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery2.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery2.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery2.queue(this, type, data);
            jQuery2._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery2.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery2.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery2.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery2.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery2.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery2.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery2.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery2.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery2.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery2(this).show();
            } else {
              jQuery2(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery2.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
          );
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery2.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery2.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function expectSync(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
      }
      function safeActiveElement() {
        try {
          return document2.activeElement;
        } catch (err) {
        }
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery2().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
        }
        return elem.each(function() {
          jQuery2.event.add(this, types, fn, data, selector);
        });
      }
      jQuery2.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery2.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery2.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery2.event.special[type] || {};
            handleObj = jQuery2.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery2.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery2.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery2.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery2.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery2.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", returnTrue);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, expectSync2) {
        if (!expectSync2) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery2.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery2.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var notAsync, result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved.length) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                notAsync = expectSync2(this, type);
                this[type]();
                result = dataPriv.get(this, type);
                if (saved !== result || notAsync) {
                  dataPriv.set(this, type, false);
                } else {
                  result = {};
                }
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result && result.value;
                }
              } else if ((jQuery2.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved.length) {
              dataPriv.set(this, type, {
                value: jQuery2.event.trigger(
                  // Support: IE <=9 - 11+
                  // Extend with the prototype to reset the above stopImmediatePropagation()
                  jQuery2.extend(saved[0], jQuery2.Event.prototype),
                  saved.slice(1),
                  this
                )
              });
              event.stopImmediatePropagation();
            }
          }
        });
      }
      jQuery2.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery2.Event = function(src, props) {
        if (!(this instanceof jQuery2.Event)) {
          return new jQuery2.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery2.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery2.expando] = true;
      };
      jQuery2.Event.prototype = {
        constructor: jQuery2.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery2.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
      }, jQuery2.event.addProp);
      jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        jQuery2.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            leverageNative(this, type, expectSync);
            return false;
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          // Suppress native focus or blur as it's already being fired
          // in leverageNative.
          _default: function() {
            return true;
          },
          delegateType
        };
      });
      jQuery2.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery2.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery2.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery2.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery2(types.delegateTarget).off(
              handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery2.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery2(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery2.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery2.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery2.clone(node, true, true);
                if (hasScripts) {
                  jQuery2.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery2.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery2._evalUrl && !node.noModule) {
                      jQuery2._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery2.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery2.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery2.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery2.event.remove(elem, type);
                    } else {
                      jQuery2.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery2.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery2.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery2.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery2.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery2.inArray(this, ignored) < 0) {
              jQuery2.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery2.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery2.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery2(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery2.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed2) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed2 = computed2 || getStyles(elem);
        if (computed2) {
          ret = computed2.getPropertyValue(name) || computed2[name];
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery2.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed2.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + ""
        ) : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery2.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
        ) : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            delta += jQuery2.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }
        return delta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          val
        ) + "px";
      }
      jQuery2.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed2) {
              if (computed2) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          "animationIterationCount": true,
          "columnCount": true,
          "fillOpacity": true,
          "flexGrow": true,
          "flexShrink": true,
          "fontWeight": true,
          "gridArea": true,
          "gridColumn": true,
          "gridColumnEnd": true,
          "gridColumnStart": true,
          "gridRow": true,
          "gridRowEnd": true,
          "gridRowStart": true,
          "lineHeight": true,
          "opacity": true,
          "order": true,
          "orphans": true,
          "widows": true,
          "zIndex": true,
          "zoom": true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery2.each(["height", "width"], function(_i, dimension) {
        jQuery2.cssHooks[dimension] = {
          get: function(elem, computed2, extra) {
            if (computed2) {
              return rdisplayswap.test(jQuery2.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
              elem,
              dimension,
              extra,
              isBorderBox,
              styles
            ) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
              );
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery2.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery2.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed2) {
          if (computed2) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        }
      );
      jQuery2.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery2.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery2.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery2.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery2.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery2.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery2.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery2.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery2.fx.step[tween.prop]) {
              jQuery2.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery2.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery2.fx = Tween.prototype.init;
      jQuery2.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery2.fx.interval);
          }
          jQuery2.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = { height: type };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery2._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery2.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
          }
        }
        propTween = !jQuery2.isEmptyObject(props);
        if (!propTween && jQuery2.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery2.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery2.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery2.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery2.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery2.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery2.extend({}, properties),
          opts: jQuery2.extend(true, {
            specialEasing: {},
            easing: jQuery2.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery2.Tween(
              elem,
              animation.opts,
              prop,
              end,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery2.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery2.fx.timer(
          jQuery2.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );
        return animation;
      }
      jQuery2.Animation = jQuery2.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery2.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery2.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery2.fx.speeds) {
              opt.duration = jQuery2.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery2.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery2.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery2.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery2.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery2.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery2.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery2.fn[name];
        jQuery2.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery2.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery2.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery2.timers = [];
      jQuery2.fx.tick = function() {
        var timer, i = 0, timers = jQuery2.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery2.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery2.fx.timer = function(timer) {
        jQuery2.timers.push(timer);
        jQuery2.fx.start();
      };
      jQuery2.fx.interval = 13;
      jQuery2.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery2.fx.stop = function() {
        inProgress = null;
      };
      jQuery2.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      };
      jQuery2.fn.delay = function(time, type) {
        time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery2.expr.attrHandle;
      jQuery2.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery2.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery2.removeAttr(this, name);
          });
        }
      });
      jQuery2.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery2.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery2.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery2.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery2.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery2.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery2.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery2.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery2.propFix[name] || name];
          });
        }
      });
      jQuery2.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            name = jQuery2.propFix[name] || name;
            hooks = jQuery2.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery2.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery2.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery2.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery2.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery2.fn.extend({
        addClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction(value)) {
            return this.each(function(j2) {
              jQuery2(this).addClass(value.call(this, j2, getClass(this)));
            });
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  if (cur.indexOf(" " + clazz + " ") < 0) {
                    cur += clazz + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        removeClass: function(value) {
          var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
          if (isFunction(value)) {
            return this.each(function(j2) {
              jQuery2(this).removeClass(value.call(this, j2, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classes = classesToArray(value);
          if (classes.length) {
            while (elem = this[i++]) {
              curValue = getClass(elem);
              cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                j = 0;
                while (clazz = classes[j++]) {
                  while (cur.indexOf(" " + clazz + " ") > -1) {
                    cur = cur.replace(" " + clazz + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  elem.setAttribute("class", finalValue);
                }
              }
            }
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          if (isFunction(value)) {
            return this.each(function(i) {
              jQuery2(this).toggleClass(
                value.call(this, i, getClass(this), stateVal),
                stateVal
              );
            });
          }
          return this.each(function() {
            var className, i, self, classNames;
            if (isValidValue) {
              i = 0;
              self = jQuery2(this);
              classNames = classesToArray(value);
              while (className = classNames[i++]) {
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery2.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery2(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery2.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery2.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery2.find.attr(elem, "value");
              return val != null ? val : (
                // Support: IE <=10 - 11 only
                // option.text throws exceptions (#14686, #14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery2.text(elem))
              );
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery2(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery2.each(["radio", "checkbox"], function() {
        jQuery2.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery2.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      support.focusin = "onfocusin" in window2;
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery2.extend(jQuery2.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery2.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery2.makeArray(data, [event]);
          special = jQuery2.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery2.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery2.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
          var e = jQuery2.extend(
            new jQuery2.Event(),
            event,
            {
              type,
              isSimulated: true
            }
          );
          jQuery2.event.trigger(e, null, elem);
        }
      });
      jQuery2.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery2.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery2.event.trigger(type, data, elem, true);
          }
        }
      });
      if (!support.focusin) {
        jQuery2.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
          var handler = function(event) {
            jQuery2.event.simulate(fix, event.target, jQuery2.event.fix(event));
          };
          jQuery2.event.special[fix] = {
            setup: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
              if (!attaches) {
                doc.addEventListener(orig, handler, true);
              }
              dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
              var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
              if (!attaches) {
                doc.removeEventListener(orig, handler, true);
                dataPriv.remove(doc, fix);
              } else {
                dataPriv.access(doc, fix, attaches);
              }
            }
          };
        });
      }
      var location = window2.location;
      var nonce = { guid: Date.now() };
      var rquery = /\?/;
      jQuery2.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery2.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery2.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
          jQuery2.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery2.fn.extend({
        serialize: function() {
          return jQuery2.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery2.prop(this, "elements");
            return elements ? jQuery2.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery2(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery2.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery2.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return { state: "success", data: response };
      }
      jQuery2.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery2.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
          return settings ? (
            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings)
          ) : (
            // Extending ajaxSettings
            ajaxExtend(jQuery2.ajaxSettings, target)
          );
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            // Status-dependent callbacks
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            // Cancel the request
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery2.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery2.event && s.global;
          if (fireGlobals && jQuery2.active++ === 0) {
            jQuery2.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery2.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
            }
            if (jQuery2.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
          );
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery2.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery2.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              );
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery2.active) {
                jQuery2.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery2.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery2.get(url, void 0, callback, "script");
        }
      });
      jQuery2.each(["get", "post"], function(_i, method) {
        jQuery2[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery2.ajax(jQuery2.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery2.isPlainObject(url) && url));
        };
      });
      jQuery2.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery2._evalUrl = function(url, options, doc) {
        return jQuery2.ajax({
          url,
          // Make this explicit, since user can override this through ajaxSetup (#11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery2.globalEval(response, options, doc);
          }
        });
      };
      jQuery2.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery2(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self = jQuery2(this), contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery2(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery2.expr.pseudos.hidden = function(elem) {
        return !jQuery2.expr.pseudos.visible(elem);
      };
      jQuery2.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery2.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // #1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, xhrSupported = jQuery2.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery2.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          // File: protocol always yields status 0; see #8605, #14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery2.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery2.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery2.globalEval(text);
            return text;
          }
        }
      });
      jQuery2.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery2.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery2.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery2.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery2.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery2(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery2.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery2(scripts).remove();
        }
        return jQuery2.merge([], parsed.childNodes);
      };
      jQuery2.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self.length > 0) {
          jQuery2.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery2.expr.pseudos.animated = function(elem) {
        return jQuery2.grep(jQuery2.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery2.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery2.css(elem, "top");
          curCSSLeft = jQuery2.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery2.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery2.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery2.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery2.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery2(offsetParent).offset();
              parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
          };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery2.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(
                !top ? val2 : win.pageXOffset,
                top ? val2 : win.pageYOffset
              );
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery2.each(["top", "left"], function(_i, prop) {
        jQuery2.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function(elem, computed2) {
            if (computed2) {
              computed2 = curCSS(elem, prop);
              return rnumnonpx.test(computed2) ? jQuery2(elem).position()[prop] + "px" : computed2;
            }
          }
        );
      });
      jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery2.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery2.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                );
              }
              return value2 === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                jQuery2.css(elem, type2, extra)
              ) : (
                // Set width or height on the element
                jQuery2.style(elem, type2, value2, extra)
              );
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery2.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery2.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery2.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
      });
      jQuery2.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(_i, name) {
          jQuery2.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        }
      );
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      jQuery2.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
        return proxy;
      };
      jQuery2.holdReady = function(hold) {
        if (hold) {
          jQuery2.readyWait++;
        } else {
          jQuery2.ready(true);
        }
      };
      jQuery2.isArray = Array.isArray;
      jQuery2.parseJSON = JSON.parse;
      jQuery2.nodeName = nodeName;
      jQuery2.isFunction = isFunction;
      jQuery2.isWindow = isWindow;
      jQuery2.camelCase = camelCase;
      jQuery2.type = toType;
      jQuery2.now = Date.now;
      jQuery2.isNumeric = function(obj) {
        var type = jQuery2.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };
      jQuery2.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery2;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery2.noConflict = function(deep) {
        if (window2.$ === jQuery2) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery2) {
          window2.jQuery = _jQuery;
        }
        return jQuery2;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery2;
      }
      return jQuery2;
    });
  }
});

// node_modules/jquery-knob/dist/jquery.knob.min.js
var require_jquery_knob_min = __commonJS({
  "node_modules/jquery-knob/dist/jquery.knob.min.js"() {
    (function(e) {
      if (typeof define === "function" && define.amd) {
        define(["jquery"], e);
      } else {
        e(jQuery);
      }
    })(function(e) {
      "use strict";
      var t = {}, n = Math.max, r = Math.min;
      t.c = {};
      t.c.d = e(document);
      t.c.t = function(e2) {
        return e2.originalEvent.touches.length - 1;
      };
      t.o = function() {
        var n2 = this;
        this.o = null;
        this.$ = null;
        this.i = null;
        this.g = null;
        this.v = null;
        this.cv = null;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.$c = null;
        this.c = null;
        this.t = 0;
        this.isInit = false;
        this.fgColor = null;
        this.pColor = null;
        this.dH = null;
        this.cH = null;
        this.eH = null;
        this.rH = null;
        this.scale = 1;
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null;
        this.run = function() {
          var t2 = function(e2, t3) {
            var r2;
            for (r2 in t3) {
              n2.o[r2] = t3[r2];
            }
            n2._carve().init();
            n2._configure()._draw();
          };
          if (this.$.data("kontroled"))
            return;
          this.$.data("kontroled", true);
          this.extend();
          this.o = e.extend({ min: this.$.data("min") !== void 0 ? this.$.data("min") : 0, max: this.$.data("max") !== void 0 ? this.$.data("max") : 100, stopper: true, readOnly: this.$.data("readonly") || this.$.attr("readonly") === "readonly", cursor: this.$.data("cursor") === true && 30 || this.$.data("cursor") || 0, thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), 0.01) || 0.35, lineCap: this.$.data("linecap") || "butt", width: this.$.data("width") || 200, height: this.$.data("height") || 200, displayInput: this.$.data("displayinput") == null || this.$.data("displayinput"), displayPrevious: this.$.data("displayprevious"), fgColor: this.$.data("fgcolor") || "#87CEEB", inputColor: this.$.data("inputcolor"), font: this.$.data("font") || "Arial", fontWeight: this.$.data("font-weight") || "bold", inline: false, step: this.$.data("step") || 1, rotation: this.$.data("rotation"), draw: null, change: null, cancel: null, release: null, format: function(e2) {
            return e2;
          }, parse: function(e2) {
            return parseFloat(e2);
          } }, this.o);
          this.o.flip = this.o.rotation === "anticlockwise" || this.o.rotation === "acw";
          if (!this.o.inputColor) {
            this.o.inputColor = this.o.fgColor;
          }
          if (this.$.is("fieldset")) {
            this.v = {};
            this.i = this.$.find("input");
            this.i.each(function(t3) {
              var r2 = e(this);
              n2.i[t3] = r2;
              n2.v[t3] = n2.o.parse(r2.val());
              r2.bind("change blur", function() {
                var e2 = {};
                e2[t3] = r2.val();
                n2.val(n2._validate(e2));
              });
            });
            this.$.find("legend").remove();
          } else {
            this.i = this.$;
            this.v = this.o.parse(this.$.val());
            this.v === "" && (this.v = this.o.min);
            this.$.bind("change blur", function() {
              n2.val(n2._validate(n2.o.parse(n2.$.val())));
            });
          }
          !this.o.displayInput && this.$.hide();
          this.$c = e(document.createElement("canvas")).attr({ width: this.o.width, height: this.o.height });
          this.$div = e('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>');
          this.$.wrap(this.$div).before(this.$c);
          this.$div = this.$.parent();
          if (typeof G_vmlCanvasManager !== "undefined") {
            G_vmlCanvasManager.initElement(this.$c[0]);
          }
          this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null;
          if (!this.c) {
            throw { name: "CanvasNotSupportedException", message: "Canvas not supported. Please use excanvas on IE8.0.", toString: function() {
              return this.name + ": " + this.message;
            } };
          }
          this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1);
          this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%");
          this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%");
          this.relative = this.relativeWidth || this.relativeHeight;
          this._carve();
          if (this.v instanceof Object) {
            this.cv = {};
            this.copy(this.v, this.cv);
          } else {
            this.cv = this.v;
          }
          this.$.bind("configure", t2).parent().bind("configure", t2);
          this._listen()._configure()._xy().init();
          this.isInit = true;
          this.$.val(this.o.format(this.v));
          this._draw();
          return this;
        };
        this._carve = function() {
          if (this.relative) {
            var e2 = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(), t2 = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
            this.w = this.h = Math.min(e2, t2);
          } else {
            this.w = this.o.width;
            this.h = this.o.height;
          }
          this.$div.css({ width: this.w + "px", height: this.h + "px" });
          this.$c.attr({ width: this.w, height: this.h });
          if (this.scale !== 1) {
            this.$c[0].width = this.$c[0].width * this.scale;
            this.$c[0].height = this.$c[0].height * this.scale;
            this.$c.width(this.w);
            this.$c.height(this.h);
          }
          return this;
        };
        this._draw = function() {
          var e2 = true;
          n2.g = n2.c;
          n2.clear();
          n2.dH && (e2 = n2.dH());
          e2 !== false && n2.draw();
        };
        this._touch = function(e2) {
          var r2 = function(e3) {
            var t2 = n2.xy2val(e3.originalEvent.touches[n2.t].pageX, e3.originalEvent.touches[n2.t].pageY);
            if (t2 == n2.cv)
              return;
            if (n2.cH && n2.cH(t2) === false)
              return;
            n2.change(n2._validate(t2));
            n2._draw();
          };
          this.t = t.c.t(e2);
          r2(e2);
          t.c.d.bind("touchmove.k", r2).bind("touchend.k", function() {
            t.c.d.unbind("touchmove.k touchend.k");
            n2.val(n2.cv);
          });
          return this;
        };
        this._mouse = function(e2) {
          var r2 = function(e3) {
            var t2 = n2.xy2val(e3.pageX, e3.pageY);
            if (t2 == n2.cv)
              return;
            if (n2.cH && n2.cH(t2) === false)
              return;
            n2.change(n2._validate(t2));
            n2._draw();
          };
          r2(e2);
          t.c.d.bind("mousemove.k", r2).bind("keyup.k", function(e3) {
            if (e3.keyCode === 27) {
              t.c.d.unbind("mouseup.k mousemove.k keyup.k");
              if (n2.eH && n2.eH() === false)
                return;
              n2.cancel();
            }
          }).bind("mouseup.k", function(e3) {
            t.c.d.unbind("mousemove.k mouseup.k keyup.k");
            n2.val(n2.cv);
          });
          return this;
        };
        this._xy = function() {
          var e2 = this.$c.offset();
          this.x = e2.left;
          this.y = e2.top;
          return this;
        };
        this._listen = function() {
          if (!this.o.readOnly) {
            this.$c.bind("mousedown", function(e2) {
              e2.preventDefault();
              n2._xy()._mouse(e2);
            }).bind("touchstart", function(e2) {
              e2.preventDefault();
              n2._xy()._touch(e2);
            });
            this.listen();
          } else {
            this.$.attr("readonly", "readonly");
          }
          if (this.relative) {
            e(window).resize(function() {
              n2._carve().init();
              n2._draw();
            });
          }
          return this;
        };
        this._configure = function() {
          if (this.o.draw)
            this.dH = this.o.draw;
          if (this.o.change)
            this.cH = this.o.change;
          if (this.o.cancel)
            this.eH = this.o.cancel;
          if (this.o.release)
            this.rH = this.o.release;
          if (this.o.displayPrevious) {
            this.pColor = this.h2rgba(this.o.fgColor, "0.4");
            this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
          } else {
            this.fgColor = this.o.fgColor;
          }
          return this;
        };
        this._clear = function() {
          this.$c[0].width = this.$c[0].width;
        };
        this._validate = function(e2) {
          var t2 = ~~((e2 < 0 ? -0.5 : 0.5) + e2 / this.o.step) * this.o.step;
          return Math.round(t2 * 100) / 100;
        };
        this.listen = function() {
        };
        this.extend = function() {
        };
        this.init = function() {
        };
        this.change = function(e2) {
        };
        this.val = function(e2) {
        };
        this.xy2val = function(e2, t2) {
        };
        this.draw = function() {
        };
        this.clear = function() {
          this._clear();
        };
        this.h2rgba = function(e2, t2) {
          var n3;
          e2 = e2.substring(1, 7);
          n3 = [parseInt(e2.substring(0, 2), 16), parseInt(e2.substring(2, 4), 16), parseInt(e2.substring(4, 6), 16)];
          return "rgba(" + n3[0] + "," + n3[1] + "," + n3[2] + "," + t2 + ")";
        };
        this.copy = function(e2, t2) {
          for (var n3 in e2) {
            t2[n3] = e2[n3];
          }
        };
      };
      t.Dial = function() {
        t.o.call(this);
        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2 * Math.PI;
        this.extend = function() {
          this.o = e.extend({ bgColor: this.$.data("bgcolor") || "#EEEEEE", angleOffset: this.$.data("angleoffset") || 0, angleArc: this.$.data("anglearc") || 360, inline: true }, this.o);
        };
        this.val = function(e2, t2) {
          if (null != e2) {
            e2 = this.o.parse(e2);
            if (t2 !== false && e2 != this.v && this.rH && this.rH(e2) === false) {
              return;
            }
            this.cv = this.o.stopper ? n(r(e2, this.o.max), this.o.min) : e2;
            this.v = this.cv;
            this.$.val(this.o.format(this.v));
            this._draw();
          } else {
            return this.v;
          }
        };
        this.xy2val = function(e2, t2) {
          var i, s;
          i = Math.atan2(e2 - (this.x + this.w2), -(t2 - this.y - this.w2)) - this.angleOffset;
          if (this.o.flip) {
            i = this.angleArc - i - this.PI2;
          }
          if (this.angleArc != this.PI2 && i < 0 && i > -0.5) {
            i = 0;
          } else if (i < 0) {
            i += this.PI2;
          }
          s = i * (this.o.max - this.o.min) / this.angleArc + this.o.min;
          this.o.stopper && (s = n(r(s, this.o.max), this.o.min));
          return s;
        };
        this.listen = function() {
          var t2 = this, i, s, o = function(e2) {
            e2.preventDefault();
            var o2 = e2.originalEvent, u2 = o2.detail || o2.wheelDeltaX, a2 = o2.detail || o2.wheelDeltaY, f2 = t2._validate(t2.o.parse(t2.$.val())) + (u2 > 0 || a2 > 0 ? t2.o.step : u2 < 0 || a2 < 0 ? -t2.o.step : 0);
            f2 = n(r(f2, t2.o.max), t2.o.min);
            t2.val(f2, false);
            if (t2.rH) {
              clearTimeout(i);
              i = setTimeout(function() {
                t2.rH(f2);
                i = null;
              }, 100);
              if (!s) {
                s = setTimeout(function() {
                  if (i)
                    t2.rH(f2);
                  s = null;
                }, 200);
              }
            }
          }, u, a, f = 1, l = { 37: -t2.o.step, 38: t2.o.step, 39: t2.o.step, 40: -t2.o.step };
          this.$.bind("keydown", function(i2) {
            var s2 = i2.keyCode;
            if (s2 >= 96 && s2 <= 105) {
              s2 = i2.keyCode = s2 - 48;
            }
            u = parseInt(String.fromCharCode(s2));
            if (isNaN(u)) {
              s2 !== 13 && s2 !== 8 && s2 !== 9 && s2 !== 189 && (s2 !== 190 || t2.$.val().match(/\./)) && i2.preventDefault();
              if (e.inArray(s2, [37, 38, 39, 40]) > -1) {
                i2.preventDefault();
                var o2 = t2.o.parse(t2.$.val()) + l[s2] * f;
                t2.o.stopper && (o2 = n(r(o2, t2.o.max), t2.o.min));
                t2.change(t2._validate(o2));
                t2._draw();
                a = window.setTimeout(function() {
                  f *= 2;
                }, 30);
              }
            }
          }).bind("keyup", function(e2) {
            if (isNaN(u)) {
              if (a) {
                window.clearTimeout(a);
                a = null;
                f = 1;
                t2.val(t2.$.val());
              }
            } else {
              t2.$.val() > t2.o.max && t2.$.val(t2.o.max) || t2.$.val() < t2.o.min && t2.$.val(t2.o.min);
            }
          });
          this.$c.bind("mousewheel DOMMouseScroll", o);
          this.$.bind("mousewheel DOMMouseScroll", o);
        };
        this.init = function() {
          if (this.v < this.o.min || this.v > this.o.max) {
            this.v = this.o.min;
          }
          this.$.val(this.v);
          this.w2 = this.w / 2;
          this.cursorExt = this.o.cursor / 100;
          this.xy = this.w2 * this.scale;
          this.lineWidth = this.xy * this.o.thickness;
          this.lineCap = this.o.lineCap;
          this.radius = this.xy - this.lineWidth / 2;
          this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);
          this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);
          this.angleOffset = this.o.angleOffset * Math.PI / 180;
          this.angleArc = this.o.angleArc * Math.PI / 180;
          this.startAngle = 1.5 * Math.PI + this.angleOffset;
          this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
          var e2 = n(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
          this.o.displayInput && this.i.css({ width: (this.w / 2 + 4 >> 0) + "px", height: (this.w / 3 >> 0) + "px", position: "absolute", "vertical-align": "middle", "margin-top": (this.w / 3 >> 0) + "px", "margin-left": "-" + (this.w * 3 / 4 + 2 >> 0) + "px", border: 0, background: "none", font: this.o.fontWeight + " " + (this.w / e2 >> 0) + "px " + this.o.font, "text-align": "center", color: this.o.inputColor || this.o.fgColor, padding: "0px", "-webkit-appearance": "none" }) || this.i.css({ width: "0px", visibility: "hidden" });
        };
        this.change = function(e2) {
          this.cv = e2;
          this.$.val(this.o.format(e2));
        };
        this.angle = function(e2) {
          return (e2 - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };
        this.arc = function(e2) {
          var t2, n2;
          e2 = this.angle(e2);
          if (this.o.flip) {
            t2 = this.endAngle + 1e-5;
            n2 = t2 - e2 - 1e-5;
          } else {
            t2 = this.startAngle - 1e-5;
            n2 = t2 + e2 + 1e-5;
          }
          this.o.cursor && (t2 = n2 - this.cursorExt) && (n2 = n2 + this.cursorExt);
          return { s: t2, e: n2, d: this.o.flip && !this.o.cursor };
        };
        this.draw = function() {
          var e2 = this.g, t2 = this.arc(this.cv), n2, r2 = 1;
          e2.lineWidth = this.lineWidth;
          e2.lineCap = this.lineCap;
          if (this.o.bgColor !== "none") {
            e2.beginPath();
            e2.strokeStyle = this.o.bgColor;
            e2.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, true);
            e2.stroke();
          }
          if (this.o.displayPrevious) {
            n2 = this.arc(this.v);
            e2.beginPath();
            e2.strokeStyle = this.pColor;
            e2.arc(this.xy, this.xy, this.radius, n2.s, n2.e, n2.d);
            e2.stroke();
            r2 = this.cv == this.v;
          }
          e2.beginPath();
          e2.strokeStyle = r2 ? this.o.fgColor : this.fgColor;
          e2.arc(this.xy, this.xy, this.radius, t2.s, t2.e, t2.d);
          e2.stroke();
        };
        this.cancel = function() {
          this.val(this.v);
        };
      };
      e.fn.dial = e.fn.knob = function(n2) {
        return this.each(function() {
          var r2 = new t.Dial();
          r2.o = n2;
          r2.$ = e(this);
          r2.run();
        }).parent();
      };
    });
  }
});

// main.ts
var ko = __toESM(require_knockout_latest(), 1);
var import_jquery = __toESM(require_jquery(), 1);
var ProgVm = class {
  name = ko.observable("Item");
  percent = ko.observable(0);
  roundPercent = ko.computed(() => Math.round(this.percent() * 100));
  paused = ko.observable(false);
  perTick = ko.observable(5e-3);
  pause() {
    this.paused(true);
  }
  unpause() {
    this.paused(false);
  }
  speedUp() {
    this.perTick(this.perTick() * 2);
  }
  slowDown() {
    this.perTick(this.perTick() / 2);
  }
  tick() {
    if (!this.paused() && this.percent() < 1) {
      this.percent(Math.min(this.percent() + this.perTick(), 1));
    }
  }
  finish() {
    this.percent(1);
  }
};
var CompRadProgVm = class {
  minBar = 1;
  maxGrowthPerTick = 90;
  maxCatchPerTick = 15;
  catchSpinRate = 2;
  growthSpinRate = 1;
  spinTicks = 2;
  spinTickCount = 0;
  spinRate = 1;
  inprogress = ko.observableArray();
  targetPercent = ko.computed(
    () => this.inprogress().length > 0 ? this.inprogress().map((item) => item.percent()).reduce((a, b) => a + b) / this.inprogress().length : 0
  );
  targetRoundPercent = ko.computed(() => Math.round(this.targetPercent() * 100));
  targetVal = ko.computed(() => Math.round(this.targetPercent() * 360));
  currentVal = ko.observable(0);
  currentOffset = ko.observable(0);
  constructor(dial2) {
    this.currentVal.subscribe((v) => dial2.val(v).trigger("change"));
    this.currentOffset.subscribe(
      (v) => dial2.trigger("configure", { angleOffset: this.currentOffset() })
    );
  }
  pauseAll() {
    this.inprogress().forEach((item) => item.paused(true));
  }
  unpauseAll() {
    this.inprogress().forEach((item) => item.paused(false));
  }
  addItem() {
    this.inprogress.unshift(new ProgVm());
  }
  tick() {
    this.inprogress().forEach((item) => item.tick());
    if (this.currentVal() < this.minBar) {
      this.currentVal(this.minBar);
    }
    if (this.targetVal() > this.currentVal()) {
      const diff = Math.min(
        this.targetVal() - this.currentVal(),
        this.maxGrowthPerTick
      );
      this.currentVal(this.currentVal() + diff);
      if (this.growthSpinRate) {
        this.currentOffset(this.currentOffset() + this.growthSpinRate);
      }
      this.spinTickCount = 0;
    } else if (this.targetVal() < this.currentVal() && this.currentVal() > this.minBar) {
      const diff = Math.min(
        this.currentVal() - this.targetVal(),
        this.maxCatchPerTick
      );
      this.currentVal(Math.max(this.currentVal() - diff, this.minBar));
      const offset = (this.currentOffset() + diff + this.catchSpinRate) % 360;
      this.currentOffset(offset);
      this.spinTickCount = 0;
    } else if (this.currentVal() < 360) {
      this.spinTickCount++;
      if (this.spinTickCount == this.spinTicks) {
        this.currentOffset((this.currentOffset() + this.spinRate) % 360);
        this.spinTickCount = 0;
      }
    } else if (this.currentVal() == 360 && this.currentOffset() != 0) {
      this.currentOffset(0);
    }
  }
};
var dial = (0, import_jquery.default)("#dial");
var w = window;
w.jQuery = w.$ = import_jquery.default;
await Promise.resolve().then(() => __toESM(require_jquery_knob_min(), 1));
dial.knob();
var vm = new CompRadProgVm(dial);
ko.applyBindings(vm);
setInterval(() => vm.tick(), 500);
export {
  CompRadProgVm,
  ProgVm
};
/*! Bundled license information:

knockout/build/output/knockout-latest.js:
  (*!
   * Knockout JavaScript library v3.5.1
   * (c) The Knockout.js team - http://knockoutjs.com/
   * License: MIT (http://www.opensource.org/licenses/mit-license.php)
   *)

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.6.0
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2021-03-02T17:08Z
   *)
*/
