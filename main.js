var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
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

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global2, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global2.document ? factory(global2, true) : function(w2) {
          if (!w2.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w2);
        };
      } else {
        factory(global2);
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
      var toString2 = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction2 = function isFunction3(obj) {
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
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString2.call(obj)] || "object" : typeof obj;
      }
      var version = "3.6.0", jQuery2 = function(selector, context2) {
        return new jQuery2.fn.init(selector, context2);
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
        if (typeof target !== "object" && !isFunction2(target)) {
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
          if (!obj || toString2.call(obj) !== "[object Object]") {
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
          if (isArrayLike2(obj)) {
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
            if (isArrayLike2(Object(arr2))) {
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
          var callbackInverse, matches2 = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches2.push(elems[i]);
            }
          }
          return matches2;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike2(elems)) {
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
      function isArrayLike2(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction2(obj) || isWindow(obj)) {
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
          var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches2, contains, expando = "sizzle" + 1 * /* @__PURE__ */ new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
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
          function Sizzle2(selector, context2, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context2 && context2.ownerDocument, nodeType = context2 ? context2.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context2);
              context2 = context2 || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context2.getElementById(m)) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && contains(context2, elem) && elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context2.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && support2.getElementsByClassName && context2.getElementsByClassName) {
                    push2.apply(results, context2.getElementsByClassName(m));
                    return results;
                  }
                }
                if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && // Support: IE 8 only
                // Exclude object elements
                (nodeType !== 1 || context2.nodeName.toLowerCase() !== "object")) {
                  newSelector = selector;
                  newContext = context2;
                  if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context2.parentNode) || context2;
                    if (newContext !== context2 || !support2.scope) {
                      if (nid = context2.getAttribute("id")) {
                        nid = nid.replace(rcssescape, fcssescape);
                      } else {
                        context2.setAttribute("id", nid = expando);
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
                      context2.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim2, "$1"), context2, results, seed);
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
              return markFunction(function(seed, matches3) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches3[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context2) {
            return context2 && typeof context2.getElementsByTagName !== "undefined" && context2;
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
              Expr.find["ID"] = function(id, context2) {
                if (typeof context2.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context2.getElementById(id);
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
              Expr.find["ID"] = function(id, context2) {
                if (typeof context2.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context2.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context2.getElementsByName(id);
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
            Expr.find["TAG"] = support2.getElementsByTagName ? function(tag2, context2) {
              if (typeof context2.getElementsByTagName !== "undefined") {
                return context2.getElementsByTagName(tag2);
              } else if (support2.qsa) {
                return context2.querySelectorAll(tag2);
              }
            } : function(tag2, context2) {
              var elem, tmp = [], i2 = 0, results = context2.getElementsByTagName(tag2);
              if (tag2 === "*") {
                while (elem = results[i2++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem);
                  }
                }
                return tmp;
              }
              return results;
            };
            Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context2) {
              if (typeof context2.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context2.getElementsByClassName(className);
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
            if (support2.matchesSelector = rnative.test(matches2 = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function(el) {
                support2.disconnectedMatch = matches2.call(el, "*");
                matches2.call(el, "[s!='']:x");
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
                var ret = matches2.call(elem, expr);
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
          Sizzle2.contains = function(context2, elem) {
            if ((context2.ownerDocument || context2) != document3) {
              setDocument(context2);
            }
            return contains(context2, elem);
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
              "CHILD": function(type, what, _argument, first, last2) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last2 === 0 ? (
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
                    diff -= last2;
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
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches3) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf2(seed, matched[i2]);
                      seed[idx] = !(matches3[idx] = matched[i2]);
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
                return matcher[expando] ? markFunction(function(seed, matches3, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches3[i2] = elem);
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
              function(elem, context2, xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    return matcher(elem, context2, xml);
                  }
                }
                return false;
              }
            ) : (
              // Check against all ancestor/preceding elements
              function(elem, context2, xml) {
                var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                if (xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      if (matcher(elem, context2, xml)) {
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
                        if (newCache[2] = matcher(elem, context2, xml)) {
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
            return matchers.length > 1 ? function(elem, context2, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context2, xml)) {
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
          function condense(unmatched, map2, filter2, context2, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map2 != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter2 || filter2(elem, context2, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map2.push(i2);
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
            return markFunction(function(seed, results, context2, xml) {
              var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context2.nodeType ? [context2] : context2,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context2, xml) : elems, matcherOut = matcher ? (
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
                matcher(matcherIn, matcherOut, context2, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context2, xml);
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
            }, implicitRelative, true), matchers = [function(elem, context2, xml) {
              var ret = !leadingRelative && (xml || context2 !== outermostContext) || ((checkContext = context2).nodeType ? matchContext(elem, context2, xml) : matchAnyContext(elem, context2, xml));
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
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context2, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context2 == document3 || context2 || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context2 && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context2 || document3, xml)) {
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
                  matcher(unmatched, setMatched, context2, xml);
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
          select = Sizzle2.select = function(selector, context2, results, seed) {
            var i2, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context2.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context2 = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context2) || [])[0];
                if (!context2) {
                  return results;
                } else if (compiled) {
                  context2 = context2.parentNode;
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
                    rsibling.test(tokens[0].type) && testContext(context2.parentNode) || context2
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
              context2,
              !documentIsHTML,
              results,
              !context2 || rsibling.test(selector) && testContext(context2.parentNode) || context2
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
        if (isFunction2(qualifier)) {
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
          var i, ret, len = this.length, self2 = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery2(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery2.contains(self2[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery2.find(selector, self2[i], ret);
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
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context2, root) {
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
          if (match && (match[1] || !context2)) {
            if (match[1]) {
              context2 = context2 instanceof jQuery2 ? context2[0] : context2;
              jQuery2.merge(this, jQuery2.parseHTML(
                match[1],
                context2 && context2.nodeType ? context2.ownerDocument || context2 : document2,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context2)) {
                for (match in context2) {
                  if (isFunction2(this[match])) {
                    this[match](context2[match]);
                  } else {
                    this.attr(match, context2[match]);
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
          } else if (!context2 || context2.jquery) {
            return (context2 || root).find(selector);
          } else {
            return this.constructor(context2).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction2(selector)) {
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
        closest: function(selectors, context2) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context2; cur = cur.parentNode) {
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
        add: function(selector, context2) {
          return this.pushStack(
            jQuery2.uniqueSort(
              jQuery2.merge(this.get(), jQuery2(selector, context2))
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
        }, self2 = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery2.each(args, function(_, arg) {
                  if (isFunction2(arg)) {
                    if (!options.unique || !self2.has(arg)) {
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
          fireWith: function(context2, args) {
            if (!locked) {
              args = args || [];
              args = [context2, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            self2.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self2;
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
          if (value && isFunction2(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction2(method = value.then)) {
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
                  var fn = isFunction2(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction2(returned.promise)) {
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
                    if (isFunction2(then)) {
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
                  }, process2 = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery2.Deferred.exceptionHook) {
                        jQuery2.Deferred.exceptionHook(
                          e,
                          process2.stackTrace
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
                    process2();
                  } else {
                    if (jQuery2.Deferred.getStackHook) {
                      process2.stackTrace = jQuery2.Deferred.getStackHook();
                    }
                    window2.setTimeout(process2);
                  }
                };
              }
              return jQuery2.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction2(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction2(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction2(onRejected) ? onRejected : Thrower
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
            if (primary.state() === "pending" || isFunction2(resolveValues[i] && resolveValues[i].then)) {
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
          if (!isFunction2(value)) {
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
          var tmp, count = 1, defer2 = jQuery2.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer2.resolveWith(elements, [elements]);
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
          return defer2.promise(obj);
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
      function getAll(context2, tag2) {
        var ret;
        if (typeof context2.getElementsByTagName !== "undefined") {
          ret = context2.getElementsByTagName(tag2 || "*");
        } else if (typeof context2.querySelectorAll !== "undefined") {
          ret = context2.querySelectorAll(tag2 || "*");
        } else {
          ret = [];
        }
        if (tag2 === void 0 || tag2 && nodeName(context2, tag2)) {
          return jQuery2.merge([context2], ret);
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
      function buildFragment(elems, context2, scripts, selection, ignored) {
        var elem, tmp, tag2, wrap2, attached, j, fragment = context2.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context2.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context2.createElement("div"));
              tag2 = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap2 = wrapMap[tag2] || wrapMap._default;
              tmp.innerHTML = wrap2[1] + jQuery2.htmlPrefilter(elem) + wrap2[2];
              j = wrap2[0];
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
        addProp: function(name, hook2) {
          Object.defineProperty(jQuery2.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction2(hook2) ? function() {
              if (this.originalEvent) {
                return hook2(this.originalEvent);
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
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction2(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self2 = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self2.html());
            }
            domManip(self2, args, callback, ignored);
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
          var elems, ret = [], insert = jQuery2(selector), last2 = insert.length - 1, i = 0;
          for (; i <= last2; i++) {
            elems = i === last2 ? this : this.clone(true);
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
      var swap2 = function(elem, options, callback) {
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
          container2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container2).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container2);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container2 = document2.createElement("div"), div = document2.createElement("div");
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
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery2.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
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
        var matches2 = rcssNum.exec(value);
        return matches2 ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches2[2] - (subtract || 0)) + (matches2[3] || "px")
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
            get: function(elem, computed) {
              if (computed) {
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
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery2.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap2(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches2, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
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
            if (subtract && (matches2 = rcssNum.exec(value)) && (matches2[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery2.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery2.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap2(elem, { marginLeft: 0 }, function() {
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
            var styles, len, map2 = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map2[name2[i]] = jQuery2.css(elem, name2[i], false, styles);
              }
              return map2;
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
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden2 = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
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
            if (value === (hidden2 ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden2 = true;
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
                hidden2 = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden2;
            }
            if (hidden2) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden2) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery2.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden2 ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden2) {
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
            if (isFunction2(result.stop)) {
              jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery2.map(props, createTween, animation);
        if (isFunction2(animation.opts.start)) {
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
          if (isFunction2(props)) {
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
          complete: fn || !fn && easing || isFunction2(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction2(easing) && easing
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
          if (isFunction2(opt.old)) {
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
        var timer2, i = 0, timers = jQuery2.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer2 = timers[i];
          if (!timer2() && timers[i] === timer2) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery2.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery2.fx.timer = function(timer2) {
        jQuery2.timers.push(timer2);
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
          if (isFunction2(value)) {
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
          if (isFunction2(value)) {
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
          if (isFunction2(value)) {
            return this.each(function(i) {
              jQuery2(this).toggleClass(
                value.call(this, i, getClass(this), stateVal),
                stateVal
              );
            });
          }
          return this.each(function() {
            var className, i, self2, classNames;
            if (isValidValue) {
              i = 0;
              self2 = jQuery2(this);
              classNames = classesToArray(value);
              while (className = classNames[i++]) {
                if (self2.hasClass(className)) {
                  self2.removeClass(className);
                } else {
                  self2.addClass(className);
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
          valueIsFunction = isFunction2(value);
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
              if (ontype && isFunction2(elem[type]) && !isWindow(elem)) {
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
          var value = isFunction2(valueOrFunction) ? valueOrFunction() : valueOrFunction;
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
          if (isFunction2(func)) {
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
            statusCode: function(map2) {
              var code;
              if (map2) {
                if (completed2) {
                  jqXHR.always(map2[jqXHR.status]);
                } else {
                  for (code in map2) {
                    statusCode[code] = [statusCode[code], map2[code]];
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
          if (isFunction2(data)) {
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
          var wrap2;
          if (this[0]) {
            if (isFunction2(html)) {
              html = html.call(this[0]);
            }
            wrap2 = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap2.insertBefore(this[0]);
            }
            wrap2.map(function() {
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
          if (isFunction2(html)) {
            return this.each(function(i) {
              jQuery2(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self2 = jQuery2(this), contents = self2.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self2.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction2(html);
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
          callbackName = s.jsonpCallback = isFunction2(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
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
            if (responseContainer && isFunction2(overwritten)) {
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
      jQuery2.parseHTML = function(data, context2, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context2 === "boolean") {
          keepScripts = context2;
          context2 = false;
        }
        var base, parsed, scripts;
        if (!context2) {
          if (support.createHTMLDocument) {
            context2 = document2.implementation.createHTMLDocument("");
            base = context2.createElement("base");
            base.href = document2.location.href;
            context2.head.appendChild(base);
          } else {
            context2 = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context2.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context2, scripts);
        if (scripts && scripts.length) {
          jQuery2(scripts).remove();
        }
        return jQuery2.merge([], parsed.childNodes);
      };
      jQuery2.fn.load = function(url, params, callback) {
        var selector, type, response, self2 = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction2(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self2.length > 0) {
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
            self2.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self2.each(function() {
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
          if (isFunction2(options)) {
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
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
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
      jQuery2.proxy = function(fn, context2) {
        var tmp, args, proxy;
        if (typeof context2 === "string") {
          tmp = fn[context2];
          context2 = fn;
          fn = tmp;
        }
        if (!isFunction2(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context2 || this, args.concat(slice.call(arguments)));
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
      jQuery2.isFunction = isFunction2;
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

// node_modules/tslib/tslib.es6.mjs
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from2.length, ar; i < l; i++) {
      if (ar || !(i in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}

// node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
}

// node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

// node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
              _b.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty = new Subscription2();
    empty.closed = true;
    return empty;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

// node_modules/rxjs/dist/esm5/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

// node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
  setTimeout: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {
}

// node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = function() {
  return createNotification("C", void 0, void 0);
}();
function errorNotification(error) {
  return createNotification("E", void 0, error);
}
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

// node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a = context, errorThrown = _a.errorThrown, error = _a.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function() {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};

// node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

// node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
  return x;
}

// node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}

// node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
  function Observable4(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable4.prototype.lift = function(operator) {
    var observable3 = new Observable4();
    observable3.source = this;
    observable3.operator = operator;
    return observable3;
  };
  Observable4.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable4.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable4.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable4.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable4.prototype[observable] = function() {
    return this;
  };
  Observable4.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable4.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable4.create = function(subscribe) {
    return new Observable4(subscribe);
  };
  return Observable4;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}

// node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);

// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js
var animationFrameProvider = {
  schedule: function(callback) {
    var request = requestAnimationFrame;
    var cancel = cancelAnimationFrame;
    var delegate = animationFrameProvider.delegate;
    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }
    var handle = request(function(timestamp) {
      cancel = void 0;
      callback(timestamp);
    });
    return new Subscription(function() {
      return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
    });
  },
  requestAnimationFrame: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  },
  cancelAnimationFrame: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});

// node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable3 = new Observable();
    observable3.source = this;
    return observable3;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
var BehaviorSubject = function(_super) {
  __extends(BehaviorSubject2, _super);
  function BehaviorSubject2(_value) {
    var _this = _super.call(this) || this;
    _this._value = _value;
    return _this;
  }
  Object.defineProperty(BehaviorSubject2.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  BehaviorSubject2.prototype._subscribe = function(subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };
  BehaviorSubject2.prototype.getValue = function() {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  };
  BehaviorSubject2.prototype.next = function(value) {
    _super.prototype.next.call(this, this._value = value);
  };
  return BehaviorSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
  now: function() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
var ReplaySubject = function(_super) {
  __extends(ReplaySubject2, _super);
  function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
    if (_bufferSize === void 0) {
      _bufferSize = Infinity;
    }
    if (_windowTime === void 0) {
      _windowTime = Infinity;
    }
    if (_timestampProvider === void 0) {
      _timestampProvider = dateTimestampProvider;
    }
    var _this = _super.call(this) || this;
    _this._bufferSize = _bufferSize;
    _this._windowTime = _windowTime;
    _this._timestampProvider = _timestampProvider;
    _this._buffer = [];
    _this._infiniteTimeWindow = true;
    _this._infiniteTimeWindow = _windowTime === Infinity;
    _this._bufferSize = Math.max(1, _bufferSize);
    _this._windowTime = Math.max(1, _windowTime);
    return _this;
  }
  ReplaySubject2.prototype.next = function(value) {
    var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    _super.prototype.next.call(this, value);
  };
  ReplaySubject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    var subscription = this._innerSubscribe(subscriber);
    var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
    var copy = _buffer.slice();
    for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  };
  ReplaySubject2.prototype._trimBuffer = function() {
    var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
    var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      var now = _timestampProvider.now();
      var last2 = 0;
      for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last2 = i;
      }
      last2 && _buffer.splice(0, last2 + 1);
    }
  };
  return ReplaySubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
var Action = function(_super) {
  __extends(Action2, _super);
  function Action2(scheduler, work) {
    return _super.call(this) || this;
  }
  Action2.prototype.schedule = function(state, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return this;
  };
  return Action2;
}(Subscription);

// node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
var intervalProvider = {
  setInterval: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = intervalProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearInterval: function(handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
var AsyncAction = function(_super) {
  __extends(AsyncAction2, _super);
  function AsyncAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction2.prototype.schedule = function(state, delay2) {
    var _a;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay2);
    }
    this.pending = true;
    this.delay = delay2;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay2);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay2);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null && this.delay === delay2 && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state, delay2) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state, delay2);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var _a = this, id = _a.id, scheduler = _a.scheduler;
      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction2;
}(Action);

// node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler = function() {
  function Scheduler2(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler2.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  Scheduler2.prototype.schedule = function(work, delay2, state) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state, delay2);
  };
  Scheduler2.now = dateTimestampProvider.now;
  return Scheduler2;
}();

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = function(_super) {
  __extends(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    return _this;
  }
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler2;
}(Scheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/async.js
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;

// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js
var AnimationFrameAction = function(_super) {
  __extends(AnimationFrameAction2, _super);
  function AnimationFrameAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay2) {
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 !== null && delay2 > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(function() {
      return scheduler.flush(void 0);
    }));
  };
  AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay2) {
    var _a;
    if (delay2 === void 0) {
      delay2 = 0;
    }
    if (delay2 != null ? delay2 > 0 : this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
    }
    var actions = scheduler.actions;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      animationFrameProvider.cancelAnimationFrame(id);
      scheduler._scheduled = void 0;
    }
    return void 0;
  };
  return AnimationFrameAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameScheduler.js
var AnimationFrameScheduler = function(_super) {
  __extends(AnimationFrameScheduler2, _super);
  function AnimationFrameScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AnimationFrameScheduler2.prototype.flush = function(action) {
    this._active = true;
    var flushId = this._scheduled;
    this._scheduled = void 0;
    var actions = this.actions;
    var error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AnimationFrameScheduler2;
}(AsyncScheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js
var animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);

// node_modules/rxjs/dist/esm5/internal/observable/empty.js
var EMPTY = new Observable(function(subscriber) {
  return subscriber.complete();
});

// node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
  return value && isFunction(value.schedule);
}

// node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === "number" ? args.pop() : defaultValue;
}

// node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = function(x) {
  return x && typeof x.length === "number" && typeof x !== "function";
};

// node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}

// node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return isFunction(input[observable]);
}

// node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

// node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();

// node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          if (false)
            return [3, 8];
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done)
            return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

// node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
          _a.call(iterable_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
            return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
            return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2)
            throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay2, repeat) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  if (repeat === void 0) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay2));
    } else {
      this.unsubscribe();
    }
  }, delay2);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

// node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay2);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay2);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay2);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay2) {
  if (delay2 === void 0) {
    delay2 = 0;
  }
  return operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay2));
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator2;
    executeSchedule(subscriber, scheduler, function() {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a;
        var value;
        var done;
        try {
          _a = iterator2.next(), value = _a.value, done = _a.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
    };
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/of.js
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  return from(args, scheduler);
}

// node_modules/rxjs/dist/esm5/internal/observable/throwError.js
function throwError(errorOrErrorFactory, scheduler) {
  var errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
    return errorOrErrorFactory;
  };
  var init = function(subscriber) {
    return subscriber.error(errorFactory());
  };
  return new Observable(scheduler ? function(subscriber) {
    return scheduler.schedule(init, 0, subscriber);
  } : init);
}

// node_modules/rxjs/dist/esm5/internal/Notification.js
var NotificationKind;
(function(NotificationKind2) {
  NotificationKind2["NEXT"] = "N";
  NotificationKind2["ERROR"] = "E";
  NotificationKind2["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = function() {
  function Notification2(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === "N";
  }
  Notification2.prototype.observe = function(observer) {
    return observeNotification(this, observer);
  };
  Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
    var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
    return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
  };
  Notification2.prototype.accept = function(nextOrObserver, error, complete) {
    var _a;
    return isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
  };
  Notification2.prototype.toObservable = function() {
    var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
    var result = kind === "N" ? of(value) : kind === "E" ? throwError(function() {
      return error;
    }) : kind === "C" ? EMPTY : 0;
    if (!result) {
      throw new TypeError("Unexpected notification kind " + kind);
    }
    return result;
  };
  Notification2.createNext = function(value) {
    return new Notification2("N", value);
  };
  Notification2.createError = function(err) {
    return new Notification2("E", void 0, err);
  };
  Notification2.createComplete = function() {
    return Notification2.completeNotification;
  };
  Notification2.completeNotification = new Notification2("C");
  return Notification2;
}();
function observeNotification(notification, observer) {
  var _a, _b, _c;
  var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
  if (typeof kind !== "string") {
    throw new TypeError('Invalid notification, missing "kind"');
  }
  kind === "N" ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}

// node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
var EmptyError = createErrorClass(function(_super) {
  return function EmptyErrorImpl() {
    _super(this);
    this.name = "EmptyError";
    this.message = "no elements in sequence";
  };
});

// node_modules/rxjs/dist/esm5/internal/firstValueFrom.js
function firstValueFrom(source, config2) {
  var hasConfig = typeof config2 === "object";
  return new Promise(function(resolve, reject) {
    var subscriber = new SafeSubscriber({
      next: function(value) {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: function() {
        if (hasConfig) {
          resolve(config2.defaultValue);
        } else {
          reject(new EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

// node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

// node_modules/rxjs/dist/esm5/internal/operators/map.js
function map(project, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var isArray = Array.isArray;
function callOrApply(fn, args) {
  return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return map(function(args) {
    return callOrApply(fn, args);
  });
}

// node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
var isArray2 = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf;
var objectProto = Object.prototype;
var getKeys = Object.keys;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    var first_1 = args[0];
    if (isArray2(first_1)) {
      return { args: first_1, keys: null };
    }
    if (isPOJO(first_1)) {
      var keys = getKeys(first_1);
      return {
        args: keys.map(function(key) {
          return first_1[key];
        }),
        keys
      };
    }
  }
  return { args, keys: null };
}
function isPOJO(obj) {
  return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
}

// node_modules/rxjs/dist/esm5/internal/util/createObject.js
function createObject(keys, values) {
  return keys.reduce(function(result, key, i) {
    return result[key] = values[i], result;
  }, {});
}

// node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js
function combineLatest() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  var resultSelector = popResultSelector(args);
  var _a = argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
  if (observables.length === 0) {
    return from([], scheduler);
  }
  var result = new Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
    return createObject(keys, values);
  } : identity));
  return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform) {
  if (valueTransform === void 0) {
    valueTransform = identity;
  }
  return function(subscriber) {
    maybeSchedule(scheduler, function() {
      var length = observables.length;
      var values = new Array(length);
      var active = length;
      var remainingFirstValues = length;
      var _loop_1 = function(i2) {
        maybeSchedule(scheduler, function() {
          var source = from(observables[i2], scheduler);
          var hasFirstValue = false;
          source.subscribe(createOperatorSubscriber(subscriber, function(value) {
            values[i2] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, function() {
            if (!--active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      };
      for (var i = 0; i < length; i++) {
        _loop_1(i);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    executeSchedule(subscription, scheduler, execute);
  } else {
    execute();
  }
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [];
  var active = 0;
  var index = 0;
  var isComplete = false;
  var checkComplete = function() {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  var outerNext = function(value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  };
  var doInnerSub = function(value) {
    expand && subscriber.next(value);
    active++;
    var innerComplete = false;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function() {
      innerComplete = true;
    }, void 0, function() {
      if (innerComplete) {
        try {
          active--;
          var _loop_1 = function() {
            var bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              executeSchedule(subscriber, innerSubScheduler, function() {
                return doInnerSub(bufferedValue);
              });
            } else {
              doInnerSub(bufferedValue);
            }
          };
          while (buffer.length && active < concurrent) {
            _loop_1();
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
    isComplete = true;
    checkComplete();
  }));
  return function() {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  if (isFunction(resultSelector)) {
    return mergeMap(function(a, i) {
      return map(function(b, ii) {
        return resultSelector(a, b, i, ii);
      })(innerFrom(project(a, i)));
    }, concurrent);
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return operate(function(source, subscriber) {
    return mergeInternals(source, subscriber, project, concurrent);
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  return mergeMap(identity, concurrent);
}

// node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
function concatAll() {
  return mergeAll(1);
}

// node_modules/rxjs/dist/esm5/internal/observable/concat.js
function concat() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return concatAll()(from(args, popScheduler(args)));
}

// node_modules/rxjs/dist/esm5/internal/observable/defer.js
function defer(observableFactory) {
  return new Observable(function(subscriber) {
    innerFrom(observableFactory()).subscribe(subscriber);
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js
function forkJoin() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var resultSelector = popResultSelector(args);
  var _a = argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
  var result = new Observable(function(subscriber) {
    var length = sources.length;
    if (!length) {
      subscriber.complete();
      return;
    }
    var values = new Array(length);
    var remainingCompletions = length;
    var remainingEmissions = length;
    var _loop_1 = function(sourceIndex2) {
      var hasValue = false;
      innerFrom(sources[sourceIndex2]).subscribe(createOperatorSubscriber(subscriber, function(value) {
        if (!hasValue) {
          hasValue = true;
          remainingEmissions--;
        }
        values[sourceIndex2] = value;
      }, function() {
        return remainingCompletions--;
      }, void 0, function() {
        if (!remainingCompletions || !hasValue) {
          if (!remainingEmissions) {
            subscriber.next(keys ? createObject(keys, values) : values);
          }
          subscriber.complete();
        }
      }));
    };
    for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
      _loop_1(sourceIndex);
    }
  });
  return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}

// node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
var nodeEventEmitterMethods = ["addListener", "removeListener"];
var eventTargetMethods = ["addEventListener", "removeEventListener"];
var jqueryMethods = ["on", "off"];
function fromEvent(target, eventName, options, resultSelector) {
  if (isFunction(options)) {
    resultSelector = options;
    options = void 0;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
  }
  var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
    return function(handler) {
      return target[methodName](eventName, handler, options);
    };
  }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
  if (!add) {
    if (isArrayLike(target)) {
      return mergeMap(function(subTarget) {
        return fromEvent(subTarget, eventName, options);
      })(innerFrom(target));
    }
  }
  if (!add) {
    throw new TypeError("Invalid event target");
  }
  return new Observable(function(subscriber) {
    var handler = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return subscriber.next(1 < args.length ? args : args[0]);
    };
    add(handler);
    return function() {
      return remove(handler);
    };
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return function(methodName) {
    return function(handler) {
      return target[methodName](eventName, handler);
    };
  };
}
function isNodeStyleEventEmitter(target) {
  return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
  return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}

// node_modules/rxjs/dist/esm5/internal/observable/timer.js
function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function(subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n = 0;
    return scheduler.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(void 0, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/interval.js
function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }
  if (scheduler === void 0) {
    scheduler = asyncScheduler;
  }
  if (period < 0) {
    period = 0;
  }
  return timer(period, period, scheduler);
}

// node_modules/rxjs/dist/esm5/internal/observable/merge.js
function merge() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  var concurrent = popNumber(args, Infinity);
  var sources = args;
  return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}

// node_modules/rxjs/dist/esm5/internal/observable/never.js
var NEVER = new Observable(noop);

// node_modules/rxjs/dist/esm5/internal/operators/filter.js
function filter(predicate, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/bufferTime.js
function bufferTime(bufferTimeSpan) {
  var _a, _b;
  var otherArgs = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    otherArgs[_i - 1] = arguments[_i];
  }
  var scheduler = (_a = popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : asyncScheduler;
  var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
  var maxBufferSize = otherArgs[1] || Infinity;
  return operate(function(source, subscriber) {
    var bufferRecords = [];
    var restartOnEmit = false;
    var emit = function(record) {
      var buffer = record.buffer, subs = record.subs;
      subs.unsubscribe();
      arrRemove(bufferRecords, record);
      subscriber.next(buffer);
      restartOnEmit && startBuffer();
    };
    var startBuffer = function() {
      if (bufferRecords) {
        var subs = new Subscription();
        subscriber.add(subs);
        var buffer = [];
        var record_1 = {
          buffer,
          subs
        };
        bufferRecords.push(record_1);
        executeSchedule(subs, scheduler, function() {
          return emit(record_1);
        }, bufferTimeSpan);
      }
    };
    if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
      executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
    } else {
      restartOnEmit = true;
    }
    startBuffer();
    var bufferTimeSubscriber = createOperatorSubscriber(subscriber, function(value) {
      var e_1, _a2;
      var recordsCopy = bufferRecords.slice();
      try {
        for (var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
          var record = recordsCopy_1_1.value;
          var buffer = record.buffer;
          buffer.push(value);
          maxBufferSize <= buffer.length && emit(record);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a2 = recordsCopy_1.return))
            _a2.call(recordsCopy_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }, function() {
      while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
        subscriber.next(bufferRecords.shift().buffer);
      }
      bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
      subscriber.complete();
      subscriber.unsubscribe();
    }, void 0, function() {
      return bufferRecords = null;
    });
    source.subscribe(bufferTimeSubscriber);
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
  return function(source, subscriber) {
    var hasState = hasSeed;
    var state = seed;
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var i = index++;
      state = hasState ? accumulator(state, value, i) : (hasState = true, value);
      emitOnNext && subscriber.next(state);
    }, emitBeforeComplete && function() {
      hasState && subscriber.next(state);
      subscriber.complete();
    }));
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/reduce.js
function reduce(accumulator, seed) {
  return operate(scanInternals(accumulator, seed, arguments.length >= 2, false, true));
}

// node_modules/rxjs/dist/esm5/internal/operators/toArray.js
var arrReducer = function(arr, value) {
  return arr.push(value), arr;
};
function toArray() {
  return operate(function(source, subscriber) {
    reduce(arrReducer, [])(source).subscribe(subscriber);
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/joinAllInternals.js
function joinAllInternals(joinFn, project) {
  return pipe(toArray(), mergeMap(function(sources) {
    return joinFn(sources);
  }), project ? mapOneOrManyArgs(project) : identity);
}

// node_modules/rxjs/dist/esm5/internal/operators/combineLatestAll.js
function combineLatestAll(project) {
  return joinAllInternals(combineLatest, project);
}

// node_modules/rxjs/dist/esm5/internal/operators/concatMap.js
function concatMap(project, resultSelector) {
  return isFunction(resultSelector) ? mergeMap(project, resultSelector, 1) : mergeMap(project, 1);
}

// node_modules/rxjs/dist/esm5/internal/operators/take.js
function take(count) {
  return count <= 0 ? function() {
    return EMPTY;
  } : operate(function(source, subscriber) {
    var seen = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js
function ignoreElements() {
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, noop));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
function mapTo(value) {
  return map(function() {
    return value;
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js
function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return function(source) {
      return concat(subscriptionDelay.pipe(take(1), ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
    };
  }
  return mergeMap(function(value, index) {
    return innerFrom(delayDurationSelector(value, index)).pipe(take(1), mapTo(value));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/delay.js
function delay(due, scheduler) {
  if (scheduler === void 0) {
    scheduler = asyncScheduler;
  }
  var duration = timer(due, scheduler);
  return delayWhen(function() {
    return duration;
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/dematerialize.js
function dematerialize() {
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(notification) {
      return observeNotification(notification, subscriber);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
function distinctUntilChanged(comparator, keySelector) {
  if (keySelector === void 0) {
    keySelector = identity;
  }
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return operate(function(source, subscriber) {
    var previousKey;
    var first = true;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}

// node_modules/rxjs/dist/esm5/internal/operators/materialize.js
function materialize() {
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(Notification.createNext(value));
    }, function() {
      subscriber.next(Notification.createComplete());
      subscriber.complete();
    }, function(err) {
      subscriber.next(Notification.createError(err));
      subscriber.complete();
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/scan.js
function scan(accumulator, seed) {
  return operate(scanInternals(accumulator, seed, arguments.length >= 2, true));
}

// node_modules/rxjs/dist/esm5/internal/operators/share.js
function share(options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.connector, connector = _a === void 0 ? function() {
    return new Subject();
  } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
  return function(wrapperSource) {
    var connection;
    var resetConnection;
    var subject;
    var refCount = 0;
    var hasCompleted = false;
    var hasErrored = false;
    var cancelReset = function() {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = void 0;
    };
    var reset = function() {
      cancelReset();
      connection = subject = void 0;
      hasCompleted = hasErrored = false;
    };
    var resetAndUnsubscribe = function() {
      var conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return operate(function(source, subscriber) {
      refCount++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(function() {
        refCount--;
        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection && refCount > 0) {
        connection = new SafeSubscriber({
          next: function(value) {
            return dest.next(value);
          },
          error: function(err) {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: function() {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        innerFrom(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset, on) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (on === true) {
    reset();
    return;
  }
  if (on === false) {
    return;
  }
  var onSubscriber = new SafeSubscriber({
    next: function() {
      onSubscriber.unsubscribe();
      reset();
    }
  });
  return innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
}

// node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
function shareReplay(configOrBufferSize, windowTime, scheduler) {
  var _a, _b, _c;
  var bufferSize;
  var refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === "object") {
    _a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return share({
    connector: function() {
      return new ReplaySubject(bufferSize, windowTime, scheduler);
    },
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
function switchMap(project, resultSelector) {
  return operate(function(source, subscriber) {
    var innerSubscriber = null;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
      return isComplete && !innerSubscriber && subscriber.complete();
    };
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      var innerIndex = 0;
      var outerIndex = index++;
      innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function(innerValue) {
        return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
      }, function() {
        innerSubscriber = null;
        checkComplete();
      }));
    }, function() {
      isComplete = true;
      checkComplete();
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js
function withLatestFrom() {
  var inputs = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    inputs[_i] = arguments[_i];
  }
  var project = popResultSelector(inputs);
  return operate(function(source, subscriber) {
    var len = inputs.length;
    var otherValues = new Array(len);
    var hasValue = inputs.map(function() {
      return false;
    });
    var ready = false;
    var _loop_1 = function(i2) {
      innerFrom(inputs[i2]).subscribe(createOperatorSubscriber(subscriber, function(value) {
        otherValues[i2] = value;
        if (!ready && !hasValue[i2]) {
          hasValue[i2] = true;
          (ready = hasValue.every(identity)) && (hasValue = null);
        }
      }, noop));
    };
    for (var i = 0; i < len; i++) {
      _loop_1(i);
    }
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      if (ready) {
        var values = __spreadArray([value], __read(otherValues));
        subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
      }
    }));
  });
}

// node_modules/butterfloat/events.js
var ButterfloatEvent = Symbol("Butterfloat Event");
var EventProxyHandler = class {
  #subjects = /* @__PURE__ */ new WeakMap();
  #componentName;
  get componentName() {
    return this.#componentName;
  }
  constructor(componentName) {
    this.#componentName = componentName;
  }
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    const subject = new Subject();
    const observable3 = subject.asObservable();
    observable3[ButterfloatEvent] = `${this.componentName} ${prop}`;
    this.#subjects.set(observable3, subject);
    target[prop] = observable3;
    return target[prop];
  }
  applyEvent(event, element, eventName) {
    const subject = this.#subjects.get(event);
    if (!subject) {
      throw new Error(`Unhandled event subject: ${event[ButterfloatEvent]}`);
    }
    if (eventName === "bfDomAttach") {
      subject.next(element);
      return new Subscription();
    }
    const observable3 = fromEvent(element, eventName);
    return observable3.subscribe(subject);
  }
};
function makeEventProxy(componentName, baseEvents = {}) {
  const events = { ...baseEvents };
  const handler = new EventProxyHandler(componentName);
  const proxy = new Proxy(events, handler);
  return { events: proxy, handler };
}

// node_modules/butterfloat/component.js
function hasAnyBinds(description) {
  return description.childrenBind || Object.keys(description.bind).length > 0 || Object.keys(description.immediateBind).length > 0 || Object.keys(description.events).length > 0;
}

// node_modules/butterfloat/butterfly.js
function butterfly(startingValue) {
  const subject = new BehaviorSubject(startingValue);
  function setState(value) {
    if (typeof value === "function") {
      const setter = value;
      subject.next(setter(subject.getValue()));
    } else {
      subject.next(value);
    }
  }
  return [
    subject.asObservable(),
    setState,
    subject.error.bind(subject),
    subject.complete.bind(subject)
  ];
}

// node_modules/butterfloat/jsx.js
function Children({ context: context2 }) {
  return {
    type: "children",
    context: context2
  };
}
function Fragment(attributes, ...children) {
  const { childrenBind, childrenPrepend, ...otherAttributes } = attributes ?? {};
  return {
    type: "fragment",
    attributes: otherAttributes,
    children,
    childrenBind,
    childrenPrepend
  };
}
function jsx(element, attributes, ...children) {
  if (typeof element === "string") {
    const { bind: bind2, immediateBind, childrenBind, childrenPrepend, events, ...otherAttributes } = attributes ?? {};
    return {
      type: "element",
      element,
      attributes: otherAttributes,
      bind: bind2 ?? {},
      immediateBind: immediateBind ?? {},
      children,
      childrenBind,
      childrenPrepend,
      events: events ?? {}
    };
  }
  if (typeof element === "function") {
    const { childrenBind, childrenPrepend, ...otherAttributes } = attributes ?? {};
    if (element === Fragment) {
      return {
        type: "fragment",
        attributes: otherAttributes,
        children,
        childrenBind,
        childrenPrepend
      };
    } else if (element === Children) {
      const { context: context2 } = otherAttributes;
      return {
        type: "children",
        context: context2
      };
    }
    return {
      type: "component",
      component: element,
      properties: otherAttributes,
      children,
      childrenBind,
      childrenPrepend
    };
  }
  throw new Error(`Unsupported jsx in ${element}`);
}
/* @__PURE__ */ (function(jsx2) {
})(jsx || (jsx = {}));

// node_modules/butterfloat/binding.js
function bindObjectKey(item, key, observable3, error, complete) {
  return observable3.subscribe({
    next: (value) => {
      item[key] = value;
    },
    error,
    complete
  });
}
function bindObjectChanges(item, observable3, error, complete) {
  return observable3.subscribe({
    next: (changes) => {
      Object.assign(item, changes);
    },
    error,
    complete
  });
}
function bufferEntries(observable3, suspense) {
  if (suspense) {
    return combineLatest([suspense, observable3]).pipe(bufferTime(0, animationFrameScheduler), map((states) => states.reduce((acc, [suspend, entry]) => ({
      suspend,
      entries: [...acc.entries, entry]
    }), { suspend: false, entries: [] })), scan((acc, cur) => ({
      changes: acc.suspend && cur.suspend ? Object.assign(acc.changes, Object.fromEntries(cur.entries)) : Object.fromEntries(cur.entries),
      suspend: cur.suspend
    }), { suspend: false, changes: {} }), filter(({ suspend }) => !suspend), map(({ changes }) => changes));
  }
  return observable3.pipe(bufferTime(0, animationFrameScheduler), map((entries) => Object.fromEntries(entries)));
}
function schedulable(key, immediate) {
  return !(immediate || key === "value");
}
function makeEntries(key, observable3) {
  return observable3.pipe(map((value) => [key, value]));
}
function bindElement(element, description, context2, document2 = globalThis.document) {
  const { complete, componentRunner, error, eventBinder, suspense, subscription } = context2;
  const schedulables = [];
  const binds = [
    ...Object.entries(description.bind).map(([key, observable3]) => [key, observable3, false]),
    ...Object.entries(description.immediateBind).map(([key, observable3]) => [key, observable3, true])
  ];
  for (const [key, observable3, immediate] of binds) {
    if (schedulable(key, immediate)) {
      schedulables.push([key, observable3]);
    } else {
      subscription.add(bindObjectKey(element, key, observable3, error, complete));
    }
  }
  const scheduled2 = schedulables.map(([key, observable3]) => makeEntries(key, observable3));
  subscription.add(bindObjectChanges(element, bufferEntries(merge(...scheduled2), suspense), error, complete));
  for (const [key, event] of Object.entries(description.events)) {
    subscription.add(eventBinder.applyEvent(event, element, key));
  }
  if (description.childrenBind) {
    subscription.add(description.childrenBind.subscribe({
      next(child) {
        const placeholder = document2.createComment(`${child.name} component`);
        if (description.childrenPrepend) {
          element.prepend(placeholder);
        } else {
          element.append(placeholder);
        }
        subscription.add(componentRunner(element, {
          type: "component",
          component: child,
          properties: {},
          children: []
        }, context2, placeholder));
      },
      error,
      complete
    }));
  }
  return subscription;
}
function bindFragmentChildren(nodeDescription, node, subscription, context2) {
  const { complete, error, componentRunner } = context2;
  if (nodeDescription.childrenBind) {
    subscription.add(nodeDescription.childrenBind.subscribe({
      next(child) {
        const parent = node.parentElement;
        if (!parent) {
          throw new Error("Attempted to bind children to an unattached fragment");
        }
        const placeholder = document.createComment(`${child.name} component`);
        if (nodeDescription.childrenPrepend) {
          parent.insertBefore(node, placeholder);
        } else {
          const next = node.nextSibling;
          if (next) {
            parent.insertBefore(next, placeholder);
          } else {
            parent.append(placeholder);
          }
        }
        subscription.add(componentRunner(parent, {
          type: "component",
          component: child,
          properties: {},
          children: []
        }, context2, placeholder));
      },
      error,
      complete
    }));
  }
}

// node_modules/butterfloat/static-dom.js
function buildElement(description, document2 = globalThis.document) {
  const element = document2.createElement(description.element);
  for (const [key, value] of Object.entries(description.attributes)) {
    ;
    element[key] = value;
  }
  return element;
}
function buildNode(description, container2, elementBinds, nodeBinds, document2 = globalThis.document) {
  switch (description.type) {
    case "element": {
      const element = buildElement(description, document2);
      if (hasAnyBinds(description)) {
        elementBinds.push([element, description]);
      }
      container2.appendChild(element);
      return element;
    }
    case "children": {
      const childrenComment = document2.createComment("Children component");
      container2.appendChild(childrenComment);
      nodeBinds.push([childrenComment, description]);
      return null;
    }
    case "component": {
      const componentComment = document2.createComment(`${description.component.name} component`);
      container2.appendChild(componentComment);
      nodeBinds.push([componentComment, description]);
      return null;
    }
    case "fragment":
      if (description.childrenBind && description.childrenPrepend) {
        const fragmentComment = document2.createComment("fragment children binding");
        container2.appendChild(fragmentComment);
        nodeBinds.push([fragmentComment, description]);
      }
      for (const child of description.children) {
        if (typeof child === "string") {
          container2.appendChild(document2.createTextNode(child));
          continue;
        }
        buildTree(child, container2, elementBinds, nodeBinds, document2);
      }
      if (description.childrenBind && !description.childrenPrepend) {
        const fragmentComment = document2.createComment("fragment children binding");
        container2.appendChild(fragmentComment);
        nodeBinds.push([fragmentComment, description]);
      }
      return container2;
  }
}
function buildTree(description, container2 = null, elementBinds = [], nodeBinds = [], document2 = globalThis.document) {
  if (!container2 && description.type === "element") {
    const element = buildElement(description, document2);
    container2 = element;
    if (hasAnyBinds(description)) {
      elementBinds.push([element, description]);
    }
  } else if (!container2) {
    container2 = document2.createDocumentFragment();
    buildNode(description, container2, elementBinds, nodeBinds, document2);
  } else {
    const nextNode = buildNode(description, container2, elementBinds, nodeBinds, document2);
    if (nextNode !== null) {
      container2 = nextNode;
    }
  }
  if (description.type !== "children" && description.type !== "fragment") {
    for (const child of description.children) {
      if (typeof child === "string") {
        container2.appendChild(document2.createTextNode(child));
        continue;
      }
      buildTree(child, container2, elementBinds, nodeBinds, document2);
    }
  }
  return {
    elementBinds,
    nodeBinds,
    container: container2
  };
}

// node_modules/butterfloat/wiring.js
var contextChildrenDescriptions = /* @__PURE__ */ new WeakMap();
function wireInternal(description, subscriber, context2, document2 = globalThis.document) {
  const subscription = new Subscription();
  const error = (error2) => {
    console.error(`Error in component ${description.component.name}`, error2);
  };
  const complete = () => subscriber.complete();
  const { events, handler } = makeEventProxy(description.component.name);
  const componentContext = {
    bindEffect(observable3, effect) {
      context2.isStaticComponent = false;
      subscription.add(observable3.pipe(delay(0, animationFrameScheduler)).subscribe({
        next: effect,
        error,
        complete
      }));
    },
    bindImmediateEffect(observable3, effect) {
      context2.isStaticComponent = false;
      subscription.add(observable3.subscribe({
        next: effect,
        error,
        complete
      }));
    },
    events
  };
  contextChildrenDescriptions.set(componentContext, description);
  const tree = description.component(description.properties, componentContext);
  const { elementBinds, nodeBinds, container: container2 } = buildTree(tree, void 0, void 0, void 0, document2);
  context2.isStaticComponent &&= elementBinds.length === 0;
  context2.isStaticTree &&= context2.isStaticComponent;
  subscriber.next(container2);
  const bindContext = {
    ...context2,
    complete,
    error,
    componentRunner: run,
    eventBinder: handler,
    subscription
  };
  for (const [element, bindDescription] of elementBinds) {
    subscription.add(bindElement(element, bindDescription, bindContext, document2));
  }
  for (const [node, nodeDescription] of nodeBinds) {
    switch (nodeDescription.type) {
      case "component": {
        const nestedContext = {
          ...context2,
          isStaticComponent: true,
          isStaticTree: true
        };
        subscription.add(run(container2, nodeDescription, nestedContext, node));
        context2.isStaticTree &&= nestedContext.isStaticTree;
        break;
      }
      case "children": {
        const nestedContext = {
          ...context2,
          isStaticComponent: true,
          isStaticTree: true
        };
        subscription.add(wireChildrenComponent(nodeDescription, componentContext, description, container2, nestedContext, node));
        context2.isStaticTree &&= nestedContext.isStaticTree;
        break;
      }
      case "fragment":
        context2.isStaticComponent = false;
        context2.isStaticTree = false;
        bindFragmentChildren(nodeDescription, node, subscription, bindContext);
        break;
    }
  }
  return () => {
    subscription.unsubscribe();
  };
}
function wireChildrenComponent(nodeDescription, componentContext, description, container2, context2, node) {
  const parentDescription = contextChildrenDescriptions.get(nodeDescription.context ?? componentContext);
  if (!parentDescription) {
    throw new Error(`Unable to bind children for Children request in ${description.component.name}`);
  }
  const childrenComponent = () => ({
    type: "fragment",
    attributes: {},
    children: [...parentDescription.children],
    childrenBind: parentDescription.childrenBind,
    childrenPrepend: parentDescription.childrenPrepend
  });
  return run(container2, {
    type: "component",
    component: childrenComponent,
    properties: {},
    children: []
  }, context2, node);
}
function wire(component, context2, document2 = globalThis.document) {
  let description;
  if ("type" in component) {
    description = component;
  } else {
    description = {
      type: "component",
      component,
      children: [],
      properties: {}
    };
  }
  if (description.component === Suspense) {
    return wireSuspense(description, context2, document2);
  }
  return new Observable((subscriber) => wireInternal(description, subscriber, context2, document2));
}
function run(container2, component, context2, placeholder, document2 = globalThis.document) {
  const observable3 = wire(component, context2 ?? { isStaticComponent: true, isStaticTree: true }, document2);
  let previousNode = null;
  return observable3.subscribe({
    next(node) {
      if (previousNode) {
        container2.replaceChild(node, previousNode);
      } else if (placeholder) {
        container2.replaceChild(node, placeholder);
      } else {
        container2.appendChild(node);
      }
      previousNode = node;
    },
    error(error) {
      if ("type" in component) {
        console.error(`Error in component ${component.component.name}`, error);
      } else {
        console.error(`Error in component ${component.name}`, error);
      }
    },
    complete() {
      if (!context2?.preserveOnComplete && previousNode) {
        container2.removeChild(previousNode);
      }
    }
  });
}

// node_modules/butterfloat/suspense.js
var Suspense = () => {
  throw new Error("Suspense is a custom-wired component");
};
function wireSuspense(description, context2, document2 = globalThis.document) {
  context2.isStaticComponent = false;
  context2.isStaticTree = false;
  const props = description.properties;
  const suspense = context2.suspense ? combineLatest([props.when, context2.suspense]).pipe(map(([a, b]) => a || b)) : props.when;
  const mainComponentFragment = {
    type: "fragment",
    attributes: {},
    children: description.children,
    childrenBind: description.childrenBind,
    childrenPrepend: description.childrenPrepend
  };
  const mainComponent = () => mainComponentFragment;
  const mainContext = { ...context2, suspense };
  const main = wire(mainComponent, mainContext, document2);
  if (props.suspenseView) {
    const suspenseView = wire(props.suspenseView, { ...context2 }, document2);
    return combineLatest([props.when, main, suspenseView]).pipe(map(([suspend, main2, suspenseView2]) => suspend ? suspenseView2 : main2), distinctUntilChanged());
  } else {
    return main;
  }
}

// main.tsx
var import_jquery = __toESM(require_jquery(), 1);

// node_modules/rxjs-spy/esm/index.js
var noop_ = function noop_2() {
};
var hook_ = noop_;
function detect(id) {
  hook_(id);
}
function hook(hook2) {
  hook_ = hook2 || noop_;
}
var defaultLogger = console;
function toLogger(partialLogger) {
  if (partialLogger.error && partialLogger.group && partialLogger.groupCollapsed && partialLogger.groupEnd && partialLogger.warn) {
    return partialLogger;
  }
  var spaces = 2;
  var indent = 0;
  return {
    error: function error(message) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      call.apply(void 0, ["error", message].concat(args));
    },
    group: function group(title) {
      call("log", title);
      indent += spaces;
    },
    groupCollapsed: function groupCollapsed(title) {
      call("log", title);
      indent += spaces;
    },
    groupEnd: function groupEnd() {
      indent = Math.max(0, indent - spaces);
    },
    log: function log(message) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      call.apply(void 0, ["log", message].concat(args));
    },
    warn: function warn(message) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      call.apply(void 0, ["warn", message].concat(args));
    }
  };
  function call(method, message) {
    var _ref;
    var padding = " ".repeat(indent);
    if (message) {
      message = padding + message;
    } else {
      message = padding;
    }
    for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      args[_key4 - 2] = arguments[_key4];
    }
    (_ref = partialLogger[method] || partialLogger.log).call.apply(_ref, [partialLogger, message].concat(args));
  }
}
var idSymbol = Symbol("id");
var lastId = 0;
function identify(instance) {
  var id = instance[idSymbol] = instance[idSymbol] || (++lastId).toString();
  return id;
}
function isSubscriptionRef(subscriberRef) {
  return subscriberRef && subscriberRef["subscription"];
}
function inferPath(observable3) {
  var _ref = observable3, source = _ref.source;
  if (source) {
    return "".concat(inferPath(source), "/").concat(inferType(observable3));
  }
  return "/".concat(inferType(observable3));
}
function inferType(observable3) {
  var _ref2 = observable3, operator = _ref2.operator;
  var prototype = Object.getPrototypeOf(operator ? operator : observable3);
  if (prototype.constructor && prototype.constructor.name) {
    var name = prototype.constructor.name;
    name = "".concat(name.charAt(0).toLowerCase()).concat(name.substring(1));
    return name.replace(/^(\w+)(Observable|Operator)$/, function(match, p) {
      return p;
    });
  }
  return "unknown";
}
function isObservable(arg) {
  return arg && arg.subscribe;
}
var SafeSubscriberCtor;
var observable2 = new Observable(function(subscriber) {
  SafeSubscriberCtor = Object.getPrototypeOf(subscriber).constructor;
});
observable2.subscribe(function() {
}).unsubscribe();
function toSubscriber(observerOrNext, error, complete) {
  if (observerOrNext instanceof Subscriber) {
    return observerOrNext;
  }
  var next;
  if (typeof observerOrNext === "function") {
    next = observerOrNext;
  } else if (observerOrNext) {
    complete = observerOrNext.complete;
    error = observerOrNext.error;
    next = observerOrNext.next;
    next = next ? function(value) {
      return observerOrNext.next(value);
    } : void 0;
    error = error ? function(error2) {
      return observerOrNext.error(error2);
    } : void 0;
    complete = complete ? function() {
      return observerOrNext.complete();
    } : void 0;
  }
  return new SafeSubscriberCtor({
    complete,
    error,
    next
  });
}
function matches(arg, match, value) {
  var observable3;
  var subscriber = void 0;
  var subscription = void 0;
  if (isObservable(arg)) {
    observable3 = arg;
  } else {
    observable3 = arg.observable;
    subscriber = arg.subscriber;
    subscription = isSubscriptionRef(arg) ? arg.subscription : void 0;
  }
  if (isObservable(match)) {
    return observable3 === match;
  }
  var observableId = identify(observable3);
  var subscriberId = subscriber ? identify(subscriber) : void 0;
  var subscriptionId = subscription ? identify(subscription) : void 0;
  var tag2 = value || read(observable3);
  if (typeof match === "function") {
    return match(tag2, observable3);
  }
  if (typeof match === "string") {
    return match === observableId || match === subscriberId || match === subscriptionId || match === tag2;
  }
  if (tag2 === void 0) {
    return false;
  }
  return match.test(tag2);
}
function read(observable3) {
  var operator = observable3["operator"];
  if (!operator) {
    return void 0;
  }
  var tag2 = operator["tag"];
  if (!tag2) {
    return void 0;
  }
  return tag2;
}
function toString(match) {
  if (isObservable(match)) {
    return "[Observable]";
  } else if (typeof match === "function") {
    return "[Function]";
  }
  return match.toString();
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var BasePlugin = /* @__PURE__ */ function() {
  function BasePlugin2(name) {
    _classCallCheck(this, BasePlugin2);
    this.name = name;
  }
  _createClass(BasePlugin2, [{
    key: "afterComplete",
    value: function afterComplete(ref) {
    }
  }, {
    key: "afterError",
    value: function afterError(ref, error) {
    }
  }, {
    key: "afterNext",
    value: function afterNext(ref, value) {
    }
  }, {
    key: "afterSubscribe",
    value: function afterSubscribe(ref) {
    }
  }, {
    key: "afterUnsubscribe",
    value: function afterUnsubscribe(ref) {
    }
  }, {
    key: "beforeComplete",
    value: function beforeComplete(ref) {
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
    }
  }, {
    key: "flush",
    value: function flush() {
    }
  }, {
    key: "select",
    value: function select(ref) {
      return void 0;
    }
  }, {
    key: "teardown",
    value: function teardown() {
    }
  }]);
  return BasePlugin2;
}();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var stackframe = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    function _isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function _capitalize(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    }
    function _getter(p) {
      return function() {
        return this[p];
      };
    }
    var booleanProps = ["isConstructor", "isEval", "isNative", "isToplevel"];
    var numericProps = ["columnNumber", "lineNumber"];
    var stringProps = ["fileName", "functionName", "source"];
    var arrayProps = ["args"];
    var objectProps = ["evalOrigin"];
    var props = booleanProps.concat(numericProps, stringProps, arrayProps, objectProps);
    function StackFrame(obj) {
      if (!obj)
        return;
      for (var i2 = 0; i2 < props.length; i2++) {
        if (obj[props[i2]] !== void 0) {
          this["set" + _capitalize(props[i2])](obj[props[i2]]);
        }
      }
    }
    StackFrame.prototype = {
      getArgs: function getArgs() {
        return this.args;
      },
      setArgs: function setArgs(v) {
        if (Object.prototype.toString.call(v) !== "[object Array]") {
          throw new TypeError("Args must be an Array");
        }
        this.args = v;
      },
      getEvalOrigin: function getEvalOrigin() {
        return this.evalOrigin;
      },
      setEvalOrigin: function setEvalOrigin(v) {
        if (v instanceof StackFrame) {
          this.evalOrigin = v;
        } else if (v instanceof Object) {
          this.evalOrigin = new StackFrame(v);
        } else {
          throw new TypeError("Eval Origin must be an Object or StackFrame");
        }
      },
      toString: function toString2() {
        var fileName = this.getFileName() || "";
        var lineNumber = this.getLineNumber() || "";
        var columnNumber = this.getColumnNumber() || "";
        var functionName = this.getFunctionName() || "";
        if (this.getIsEval()) {
          if (fileName) {
            return "[eval] (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
          }
          return "[eval]:" + lineNumber + ":" + columnNumber;
        }
        if (functionName) {
          return functionName + " (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
        }
        return fileName + ":" + lineNumber + ":" + columnNumber;
      }
    };
    StackFrame.fromString = function StackFrame$$fromString(str) {
      var argsStartIndex = str.indexOf("(");
      var argsEndIndex = str.lastIndexOf(")");
      var functionName = str.substring(0, argsStartIndex);
      var args = str.substring(argsStartIndex + 1, argsEndIndex).split(",");
      var locationString = str.substring(argsEndIndex + 1);
      if (locationString.indexOf("@") === 0) {
        var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, "");
        var fileName = parts[1];
        var lineNumber = parts[2];
        var columnNumber = parts[3];
      }
      return new StackFrame({
        functionName,
        args: args || void 0,
        fileName,
        lineNumber: lineNumber || void 0,
        columnNumber: columnNumber || void 0
      });
    };
    for (var i = 0; i < booleanProps.length; i++) {
      StackFrame.prototype["get" + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
      StackFrame.prototype["set" + _capitalize(booleanProps[i])] = function(p) {
        return function(v) {
          this[p] = Boolean(v);
        };
      }(booleanProps[i]);
    }
    for (var j = 0; j < numericProps.length; j++) {
      StackFrame.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]);
      StackFrame.prototype["set" + _capitalize(numericProps[j])] = function(p) {
        return function(v) {
          if (!_isNumber(v)) {
            throw new TypeError(p + " must be a Number");
          }
          this[p] = Number(v);
        };
      }(numericProps[j]);
    }
    for (var k = 0; k < stringProps.length; k++) {
      StackFrame.prototype["get" + _capitalize(stringProps[k])] = _getter(stringProps[k]);
      StackFrame.prototype["set" + _capitalize(stringProps[k])] = function(p) {
        return function(v) {
          this[p] = String(v);
        };
      }(stringProps[k]);
    }
    return StackFrame;
  });
});
var errorStackParser = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(stackframe);
    }
  })(commonjsGlobal, function ErrorStackParser(StackFrame) {
    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
    return {
      /**
       * Given an Error object, extract the most information from it.
       *
       * @param {Error} error object
       * @return {Array} of StackFrames
       */
      parse: function ErrorStackParser$$parse(error) {
        if (typeof error.stacktrace !== "undefined" || typeof error["opera#sourceloc"] !== "undefined") {
          return this.parseOpera(error);
        } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
          return this.parseV8OrIE(error);
        } else if (error.stack) {
          return this.parseFFOrSafari(error);
        } else {
          throw new Error("Cannot parse given Error object");
        }
      },
      // Separate line and column numbers from a string of the form: (URI:Line:Column)
      extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
        if (urlLike.indexOf(":") === -1) {
          return [urlLike];
        }
        var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
        var parts = regExp.exec(urlLike.replace(/[()]/g, ""));
        return [parts[1], parts[2] || void 0, parts[3] || void 0];
      },
      parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
        var filtered = error.stack.split("\n").filter(function(line) {
          return !!line.match(CHROME_IE_STACK_REGEXP);
        }, this);
        return filtered.map(function(line) {
          if (line.indexOf("(eval ") > -1) {
            line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, "");
          }
          var sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(");
          var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);
          sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
          var tokens = sanitizedLine.split(/\s+/).slice(1);
          var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
          var functionName = tokens.join(" ") || void 0;
          var fileName = ["eval", "<anonymous>"].indexOf(locationParts[0]) > -1 ? void 0 : locationParts[0];
          return new StackFrame({
            functionName,
            fileName,
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }, this);
      },
      parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
        var filtered = error.stack.split("\n").filter(function(line) {
          return !line.match(SAFARI_NATIVE_CODE_REGEXP);
        }, this);
        return filtered.map(function(line) {
          if (line.indexOf(" > eval") > -1) {
            line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
          }
          if (line.indexOf("@") === -1 && line.indexOf(":") === -1) {
            return new StackFrame({
              functionName: line
            });
          } else {
            var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
            var matches2 = line.match(functionNameRegex);
            var functionName = matches2 && matches2[1] ? matches2[1] : void 0;
            var locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
            return new StackFrame({
              functionName,
              fileName: locationParts[0],
              lineNumber: locationParts[1],
              columnNumber: locationParts[2],
              source: line
            });
          }
        }, this);
      },
      parseOpera: function ErrorStackParser$$parseOpera(e) {
        if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
          return this.parseOpera9(e);
        } else if (!e.stack) {
          return this.parseOpera10(e);
        } else {
          return this.parseOpera11(e);
        }
      },
      parseOpera9: function ErrorStackParser$$parseOpera9(e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
        var lines = e.message.split("\n");
        var result = [];
        for (var i = 2, len = lines.length; i < len; i += 2) {
          var match = lineRE.exec(lines[i]);
          if (match) {
            result.push(new StackFrame({
              fileName: match[2],
              lineNumber: match[1],
              source: lines[i]
            }));
          }
        }
        return result;
      },
      parseOpera10: function ErrorStackParser$$parseOpera10(e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
        var lines = e.stacktrace.split("\n");
        var result = [];
        for (var i = 0, len = lines.length; i < len; i += 2) {
          var match = lineRE.exec(lines[i]);
          if (match) {
            result.push(new StackFrame({
              functionName: match[3] || void 0,
              fileName: match[2],
              lineNumber: match[1],
              source: lines[i]
            }));
          }
        }
        return result;
      },
      // Opera 10.65+ Error.stack very similar to FF/Safari
      parseOpera11: function ErrorStackParser$$parseOpera11(error) {
        var filtered = error.stack.split("\n").filter(function(line) {
          return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
        }, this);
        return filtered.map(function(line) {
          var tokens = line.split("@");
          var locationParts = this.extractLocation(tokens.pop());
          var functionCall = tokens.shift() || "";
          var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
          var argsRaw;
          if (functionCall.match(/\(([^)]*)\)/)) {
            argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, "$1");
          }
          var args = argsRaw === void 0 || argsRaw === "[arguments not available]" ? void 0 : argsRaw.split(",");
          return new StackFrame({
            functionName,
            args,
            fileName: locationParts[0],
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }, this);
      }
    };
  });
});
var util = createCommonjsModule(function(module, exports) {
  function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
      return aArgs[aName];
    } else if (arguments.length === 3) {
      return aDefaultValue;
    } else {
      throw new Error('"' + aName + '" is a required argument.');
    }
  }
  exports.getArg = getArg;
  var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
  var dataUrlRegexp = /^data:.+\,.+$/;
  function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) {
      return null;
    }
    return {
      scheme: match[1],
      auth: match[2],
      host: match[3],
      port: match[4],
      path: match[5]
    };
  }
  exports.urlParse = urlParse;
  function urlGenerate(aParsedUrl) {
    var url = "";
    if (aParsedUrl.scheme) {
      url += aParsedUrl.scheme + ":";
    }
    url += "//";
    if (aParsedUrl.auth) {
      url += aParsedUrl.auth + "@";
    }
    if (aParsedUrl.host) {
      url += aParsedUrl.host;
    }
    if (aParsedUrl.port) {
      url += ":" + aParsedUrl.port;
    }
    if (aParsedUrl.path) {
      url += aParsedUrl.path;
    }
    return url;
  }
  exports.urlGenerate = urlGenerate;
  function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
      if (!url.path) {
        return aPath;
      }
      path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);
    var parts = path.split(/\/+/);
    for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
      part = parts[i];
      if (part === ".") {
        parts.splice(i, 1);
      } else if (part === "..") {
        up++;
      } else if (up > 0) {
        if (part === "") {
          parts.splice(i + 1, up);
          up = 0;
        } else {
          parts.splice(i, 2);
          up--;
        }
      }
    }
    path = parts.join("/");
    if (path === "") {
      path = isAbsolute ? "/" : ".";
    }
    if (url) {
      url.path = path;
      return urlGenerate(url);
    }
    return path;
  }
  exports.normalize = normalize;
  function join(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    if (aPath === "") {
      aPath = ".";
    }
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) {
      aRoot = aRootUrl.path || "/";
    }
    if (aPathUrl && !aPathUrl.scheme) {
      if (aRootUrl) {
        aPathUrl.scheme = aRootUrl.scheme;
      }
      return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) {
      return aPath;
    }
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
      aRootUrl.host = aPath;
      return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
    if (aRootUrl) {
      aRootUrl.path = joined;
      return urlGenerate(aRootUrl);
    }
    return joined;
  }
  exports.join = join;
  exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === "/" || !!aPath.match(urlRegexp);
  };
  function relative(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    aRoot = aRoot.replace(/\/$/, "");
    var level = 0;
    while (aPath.indexOf(aRoot + "/") !== 0) {
      var index = aRoot.lastIndexOf("/");
      if (index < 0) {
        return aPath;
      }
      aRoot = aRoot.slice(0, index);
      if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
        return aPath;
      }
      ++level;
    }
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
  }
  exports.relative = relative;
  var supportsNullProto = function() {
    var obj = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in obj);
  }();
  function identity2(s) {
    return s;
  }
  function toSetString(aStr) {
    if (isProtoString(aStr)) {
      return "$" + aStr;
    }
    return aStr;
  }
  exports.toSetString = supportsNullProto ? identity2 : toSetString;
  function fromSetString(aStr) {
    if (isProtoString(aStr)) {
      return aStr.slice(1);
    }
    return aStr;
  }
  exports.fromSetString = supportsNullProto ? identity2 : fromSetString;
  function isProtoString(s) {
    if (!s) {
      return false;
    }
    var length = s.length;
    if (length < 9) {
      return false;
    }
    if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
      return false;
    }
    for (var i = length - 10; i >= 0; i--) {
      if (s.charCodeAt(i) !== 36) {
        return false;
      }
    }
    return true;
  }
  function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = mappingA.source - mappingB.source;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    return mappingA.name - mappingB.name;
  }
  exports.compareByOriginalPositions = compareByOriginalPositions;
  function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
      return cmp;
    }
    cmp = mappingA.source - mappingB.source;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return mappingA.name - mappingB.name;
  }
  exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
  function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) {
      return 0;
    }
    if (aStr1 > aStr2) {
      return 1;
    }
    return -1;
  }
  function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
});
var binarySearch = createCommonjsModule(function(module, exports) {
  exports.GREATEST_LOWER_BOUND = 1;
  exports.LEAST_UPPER_BOUND = 2;
  function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) {
      return mid;
    } else if (cmp > 0) {
      if (aHigh - mid > 1) {
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return aHigh < aHaystack.length ? aHigh : -1;
      } else {
        return mid;
      }
    } else {
      if (mid - aLow > 1) {
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return mid;
      } else {
        return aLow < 0 ? -1 : aLow;
      }
    }
  }
  exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) {
      return -1;
    }
    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) {
      return -1;
    }
    while (index - 1 >= 0) {
      if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
        break;
      }
      --index;
    }
    return index;
  };
});
var has = Object.prototype.hasOwnProperty;
function ArraySet$1() {
  this._array = [];
  this._set = /* @__PURE__ */ Object.create(null);
}
ArraySet$1.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet$1();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};
ArraySet$1.prototype.size = function ArraySet_size() {
  return Object.getOwnPropertyNames(this._set).length;
};
ArraySet$1.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = util.toSetString(aStr);
  var isDuplicate = has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    this._set[sStr] = idx;
  }
};
ArraySet$1.prototype.has = function ArraySet_has(aStr) {
  var sStr = util.toSetString(aStr);
  return has.call(this._set, sStr);
};
ArraySet$1.prototype.indexOf = function ArraySet_indexOf(aStr) {
  var sStr = util.toSetString(aStr);
  if (has.call(this._set, sStr)) {
    return this._set[sStr];
  }
  throw new Error('"' + aStr + '" is not in the set.');
};
ArraySet$1.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error("No element indexed by " + aIdx);
};
ArraySet$1.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};
var ArraySet_1 = ArraySet$1;
var arraySet = {
  ArraySet: ArraySet_1
};
var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
var encode$1 = function encode(number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};
var decode$1 = function decode(charCode) {
  var bigA = 65;
  var bigZ = 90;
  var littleA = 97;
  var littleZ = 122;
  var zero = 48;
  var nine = 57;
  var plus = 43;
  var slash = 47;
  var littleOffset = 26;
  var numberOffset = 52;
  if (bigA <= charCode && charCode <= bigZ) {
    return charCode - bigA;
  }
  if (littleA <= charCode && charCode <= littleZ) {
    return charCode - littleA + littleOffset;
  }
  if (zero <= charCode && charCode <= nine) {
    return charCode - zero + numberOffset;
  }
  if (charCode == plus) {
    return 62;
  }
  if (charCode == slash) {
    return 63;
  }
  return -1;
};
var base64 = {
  encode: encode$1,
  decode: decode$1
};
var VLQ_BASE_SHIFT = 5;
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
var VLQ_BASE_MASK = VLQ_BASE - 1;
var VLQ_CONTINUATION_BIT = VLQ_BASE;
function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
var encode2 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);
  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);
  return encoded;
};
var decode2 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;
  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }
    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }
    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);
  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};
var base64Vlq = {
  encode: encode2,
  decode: decode2
};
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}
function randomIntInRange(low, high) {
  return Math.round(low + Math.random() * (high - low));
}
function doQuickSort(ary, comparator, p, r) {
  if (p < r) {
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;
    swap(ary, pivotIndex, r);
    var pivot = ary[r];
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }
    swap(ary, i + 1, j);
    var q = i + 1;
    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}
var quickSort_1 = function quickSort_12(ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};
var quickSort$1 = {
  quickSort: quickSort_1
};
var ArraySet = arraySet.ArraySet;
var quickSort = quickSort$1.quickSort;
function SourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ""));
  }
  return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap) : new BasicSourceMapConsumer(sourceMap);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
};
SourceMapConsumer.prototype._version = 3;
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
  get: function get() {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__generatedMappings;
  }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
  get: function get2() {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__originalMappings;
  }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
  var c = aStr.charAt(index);
  return c === ";" || c === ",";
};
SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
  var context2 = aContext || null;
  var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
  var mappings;
  switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
  }
  var sourceRoot = this.sourceRoot;
  mappings.map(function(mapping) {
    var source = mapping.source === null ? null : this._sources.at(mapping.source);
    if (source != null && sourceRoot != null) {
      source = util.join(sourceRoot, source);
    }
    return {
      source,
      generatedLine: mapping.generatedLine,
      generatedColumn: mapping.generatedColumn,
      originalLine: mapping.originalLine,
      originalColumn: mapping.originalColumn,
      name: mapping.name === null ? null : this._names.at(mapping.name)
    };
  }, this).forEach(aCallback, context2);
};
SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
  var line = util.getArg(aArgs, "line");
  var needle = {
    source: util.getArg(aArgs, "source"),
    originalLine: line,
    originalColumn: util.getArg(aArgs, "column", 0)
  };
  if (this.sourceRoot != null) {
    needle.source = util.relative(this.sourceRoot, needle.source);
  }
  if (!this._sources.has(needle.source)) {
    return [];
  }
  needle.source = this._sources.indexOf(needle.source);
  var mappings = [];
  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
  if (index >= 0) {
    var mapping = this._originalMappings[index];
    if (aArgs.column === void 0) {
      var originalLine = mapping.originalLine;
      while (mapping && mapping.originalLine === originalLine) {
        mappings.push({
          line: util.getArg(mapping, "generatedLine", null),
          column: util.getArg(mapping, "generatedColumn", null),
          lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
        });
        mapping = this._originalMappings[++index];
      }
    } else {
      var originalColumn = mapping.originalColumn;
      while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
        mappings.push({
          line: util.getArg(mapping, "generatedLine", null),
          column: util.getArg(mapping, "generatedColumn", null),
          lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
        });
        mapping = this._originalMappings[++index];
      }
    }
  }
  return mappings;
};
var SourceMapConsumer_1 = SourceMapConsumer;
function BasicSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ""));
  }
  var version = util.getArg(sourceMap, "version");
  var sources = util.getArg(sourceMap, "sources");
  var names = util.getArg(sourceMap, "names", []);
  var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
  var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
  var mappings = util.getArg(sourceMap, "mappings");
  var file = util.getArg(sourceMap, "file", null);
  if (version != this._version) {
    throw new Error("Unsupported version: " + version);
  }
  sources = sources.map(String).map(util.normalize).map(function(source) {
    return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
  });
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);
  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap) {
  var smc = Object.create(BasicSourceMapConsumer.prototype);
  var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
  var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
  smc.sourceRoot = aSourceMap._sourceRoot;
  smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
  smc.file = aSourceMap._file;
  var generatedMappings = aSourceMap._mappings.toArray().slice();
  var destGeneratedMappings = smc.__generatedMappings = [];
  var destOriginalMappings = smc.__originalMappings = [];
  for (var i = 0, length = generatedMappings.length; i < length; i++) {
    var srcMapping = generatedMappings[i];
    var destMapping = new Mapping();
    destMapping.generatedLine = srcMapping.generatedLine;
    destMapping.generatedColumn = srcMapping.generatedColumn;
    if (srcMapping.source) {
      destMapping.source = sources.indexOf(srcMapping.source);
      destMapping.originalLine = srcMapping.originalLine;
      destMapping.originalColumn = srcMapping.originalColumn;
      if (srcMapping.name) {
        destMapping.name = names.indexOf(srcMapping.name);
      }
      destOriginalMappings.push(destMapping);
    }
    destGeneratedMappings.push(destMapping);
  }
  quickSort(smc.__originalMappings, util.compareByOriginalPositions);
  return smc;
};
BasicSourceMapConsumer.prototype._version = 3;
Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
  get: function get3() {
    return this._sources.toArray().map(function(s) {
      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
    }, this);
  }
});
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings2(aStr, aSourceRoot) {
  var generatedLine = 1;
  var previousGeneratedColumn = 0;
  var previousOriginalLine = 0;
  var previousOriginalColumn = 0;
  var previousSource = 0;
  var previousName = 0;
  var length = aStr.length;
  var index = 0;
  var cachedSegments = {};
  var temp = {};
  var originalMappings = [];
  var generatedMappings = [];
  var mapping, str, segment, end, value;
  while (index < length) {
    if (aStr.charAt(index) === ";") {
      generatedLine++;
      index++;
      previousGeneratedColumn = 0;
    } else if (aStr.charAt(index) === ",") {
      index++;
    } else {
      mapping = new Mapping();
      mapping.generatedLine = generatedLine;
      for (end = index; end < length; end++) {
        if (this._charIsMappingSeparator(aStr, end)) {
          break;
        }
      }
      str = aStr.slice(index, end);
      segment = cachedSegments[str];
      if (segment) {
        index += str.length;
      } else {
        segment = [];
        while (index < end) {
          base64Vlq.decode(aStr, index, temp);
          value = temp.value;
          index = temp.rest;
          segment.push(value);
        }
        if (segment.length === 2) {
          throw new Error("Found a source, but no line and column");
        }
        if (segment.length === 3) {
          throw new Error("Found a source and line, but no column");
        }
        cachedSegments[str] = segment;
      }
      mapping.generatedColumn = previousGeneratedColumn + segment[0];
      previousGeneratedColumn = mapping.generatedColumn;
      if (segment.length > 1) {
        mapping.source = previousSource + segment[1];
        previousSource += segment[1];
        mapping.originalLine = previousOriginalLine + segment[2];
        previousOriginalLine = mapping.originalLine;
        mapping.originalLine += 1;
        mapping.originalColumn = previousOriginalColumn + segment[3];
        previousOriginalColumn = mapping.originalColumn;
        if (segment.length > 4) {
          mapping.name = previousName + segment[4];
          previousName += segment[4];
        }
      }
      generatedMappings.push(mapping);
      if (typeof mapping.originalLine === "number") {
        originalMappings.push(mapping);
      }
    }
  }
  quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
  this.__generatedMappings = generatedMappings;
  quickSort(originalMappings, util.compareByOriginalPositions);
  this.__originalMappings = originalMappings;
};
BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
  if (aNeedle[aLineName] <= 0) {
    throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
  }
  if (aNeedle[aColumnName] < 0) {
    throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
  }
  return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
  for (var index = 0; index < this._generatedMappings.length; ++index) {
    var mapping = this._generatedMappings[index];
    if (index + 1 < this._generatedMappings.length) {
      var nextMapping = this._generatedMappings[index + 1];
      if (mapping.generatedLine === nextMapping.generatedLine) {
        mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
        continue;
      }
    }
    mapping.lastGeneratedColumn = Infinity;
  }
};
BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, "line"),
    generatedColumn: util.getArg(aArgs, "column")
  };
  var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
  if (index >= 0) {
    var mapping = this._generatedMappings[index];
    if (mapping.generatedLine === needle.generatedLine) {
      var source = util.getArg(mapping, "source", null);
      if (source !== null) {
        source = this._sources.at(source);
        if (this.sourceRoot != null) {
          source = util.join(this.sourceRoot, source);
        }
      }
      var name = util.getArg(mapping, "name", null);
      if (name !== null) {
        name = this._names.at(name);
      }
      return {
        source,
        line: util.getArg(mapping, "originalLine", null),
        column: util.getArg(mapping, "originalColumn", null),
        name
      };
    }
  }
  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
  if (!this.sourcesContent) {
    return false;
  }
  return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
    return sc == null;
  });
};
BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  if (!this.sourcesContent) {
    return null;
  }
  if (this.sourceRoot != null) {
    aSource = util.relative(this.sourceRoot, aSource);
  }
  if (this._sources.has(aSource)) {
    return this.sourcesContent[this._sources.indexOf(aSource)];
  }
  var url;
  if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
    var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
    if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
      return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
    }
    if ((!url.path || url.path == "/") && this._sources.has("/" + aSource)) {
      return this.sourcesContent[this._sources.indexOf("/" + aSource)];
    }
  }
  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
  var source = util.getArg(aArgs, "source");
  if (this.sourceRoot != null) {
    source = util.relative(this.sourceRoot, source);
  }
  if (!this._sources.has(source)) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }
  source = this._sources.indexOf(source);
  var needle = {
    source,
    originalLine: util.getArg(aArgs, "line"),
    originalColumn: util.getArg(aArgs, "column")
  };
  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
  if (index >= 0) {
    var mapping = this._originalMappings[index];
    if (mapping.source === needle.source) {
      return {
        line: util.getArg(mapping, "generatedLine", null),
        column: util.getArg(mapping, "generatedColumn", null),
        lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
      };
    }
  }
  return {
    line: null,
    column: null,
    lastColumn: null
  };
};
var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;
function IndexedSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ""));
  }
  var version = util.getArg(sourceMap, "version");
  var sections = util.getArg(sourceMap, "sections");
  if (version != this._version) {
    throw new Error("Unsupported version: " + version);
  }
  this._sources = new ArraySet();
  this._names = new ArraySet();
  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function(s) {
    if (s.url) {
      throw new Error("Support for url field in sections not implemented.");
    }
    var offset = util.getArg(s, "offset");
    var offsetLine = util.getArg(offset, "line");
    var offsetColumn = util.getArg(offset, "column");
    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
      throw new Error("Section offsets must be ordered and non-overlapping.");
    }
    lastOffset = offset;
    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, "map"))
    };
  });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
IndexedSourceMapConsumer.prototype._version = 3;
Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
  get: function get4() {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});
IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, "line"),
    generatedColumn: util.getArg(aArgs, "column")
  };
  var sectionIndex = binarySearch.search(needle, this._sections, function(needle2, section2) {
    var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
    if (cmp) {
      return cmp;
    }
    return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
  });
  var section = this._sections[sectionIndex];
  if (!section) {
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }
  return section.consumer.originalPositionFor({
    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
    bias: aArgs.bias
  });
};
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
  return this._sections.every(function(s) {
    return s.consumer.hasContentsOfAllSources();
  });
};
IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var content = section.consumer.sourceContentFor(aSource, true);
    if (content) {
      return content;
    }
  }
  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    if (section.consumer.sources.indexOf(util.getArg(aArgs, "source")) === -1) {
      continue;
    }
    var generatedPosition = section.consumer.generatedPositionFor(aArgs);
    if (generatedPosition) {
      var ret = {
        line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
        column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
      };
      return ret;
    }
  }
  return {
    line: null,
    column: null
  };
};
IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  this.__generatedMappings = [];
  this.__originalMappings = [];
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var sectionMappings = section.consumer._generatedMappings;
    for (var j = 0; j < sectionMappings.length; j++) {
      var mapping = sectionMappings[j];
      var source = section.consumer._sources.at(mapping.source);
      if (section.consumer.sourceRoot !== null) {
        source = util.join(section.consumer.sourceRoot, source);
      }
      this._sources.add(source);
      source = this._sources.indexOf(source);
      var name = section.consumer._names.at(mapping.name);
      this._names.add(name);
      name = this._names.indexOf(name);
      var adjustedMapping = {
        source,
        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
        generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name
      };
      this.__generatedMappings.push(adjustedMapping);
      if (typeof adjustedMapping.originalLine === "number") {
        this.__originalMappings.push(adjustedMapping);
      }
    }
  }
  quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
  quickSort(this.__originalMappings, util.compareByOriginalPositions);
};
var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;
var sourceMapConsumer = {
  SourceMapConsumer: SourceMapConsumer_1,
  BasicSourceMapConsumer: BasicSourceMapConsumer_1,
  IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};
var stacktraceGps = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(sourceMapConsumer, stackframe);
    }
  })(commonjsGlobal, function(SourceMap, StackFrame) {
    function _xdr(url) {
      return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open("get", url);
        req.onerror = reject;
        req.onreadystatechange = function onreadystatechange() {
          if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 300 || url.substr(0, 7) === "file://" && req.responseText) {
              resolve(req.responseText);
            } else {
              reject(new Error("HTTP status: " + req.status + " retrieving " + url));
            }
          }
        };
        req.send();
      });
    }
    function _atob(b64str) {
      if (typeof window !== "undefined" && window.atob) {
        return window.atob(b64str);
      } else {
        throw new Error("You must supply a polyfill for window.atob in this environment");
      }
    }
    function _parseJson(string) {
      if (typeof JSON !== "undefined" && JSON.parse) {
        return JSON.parse(string);
      } else {
        throw new Error("You must supply a polyfill for JSON.parse in this environment");
      }
    }
    function _findFunctionName(source, lineNumber) {
      var syntaxes = [
        // {name} = function ({args}) TODO args capture
        /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/,
        // function {name}({args}) m[1]=name m[2]=args
        /function\s+([^('"`]*?)\s*\(([^)]*)\)/,
        // {name} = eval()
        /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/,
        // fn_name() {
        /\b(?!(?:if|for|switch|while|with|catch)\b)(?:(?:static)\s+)?(\S+)\s*\(.*?\)\s*\{/,
        // {name} = () => {
        /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*\(.*?\)\s*=>/
      ];
      var lines = source.split("\n");
      var code = "";
      var maxLines = Math.min(lineNumber, 20);
      for (var i = 0; i < maxLines; ++i) {
        var line = lines[lineNumber - i - 1];
        var commentPos = line.indexOf("//");
        if (commentPos >= 0) {
          line = line.substr(0, commentPos);
        }
        if (line) {
          code = line + code;
          var len = syntaxes.length;
          for (var index = 0; index < len; index++) {
            var m = syntaxes[index].exec(code);
            if (m && m[1]) {
              return m[1];
            }
          }
        }
      }
      return void 0;
    }
    function _ensureSupportedEnvironment() {
      if (typeof Object.defineProperty !== "function" || typeof Object.create !== "function") {
        throw new Error("Unable to consume source maps in older browsers");
      }
    }
    function _ensureStackFrameIsLegit(stackframe2) {
      if (_typeof(stackframe2) !== "object") {
        throw new TypeError("Given StackFrame is not an object");
      } else if (typeof stackframe2.fileName !== "string") {
        throw new TypeError("Given file name is not a String");
      } else if (typeof stackframe2.lineNumber !== "number" || stackframe2.lineNumber % 1 !== 0 || stackframe2.lineNumber < 1) {
        throw new TypeError("Given line number must be a positive integer");
      } else if (typeof stackframe2.columnNumber !== "number" || stackframe2.columnNumber % 1 !== 0 || stackframe2.columnNumber < 0) {
        throw new TypeError("Given column number must be a non-negative integer");
      }
      return true;
    }
    function _findSourceMappingURL(source) {
      var sourceMappingUrlRegExp = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/mg;
      var lastSourceMappingUrl;
      var matchSourceMappingUrl;
      while (matchSourceMappingUrl = sourceMappingUrlRegExp.exec(source)) {
        lastSourceMappingUrl = matchSourceMappingUrl[1];
      }
      if (lastSourceMappingUrl) {
        return lastSourceMappingUrl;
      } else {
        throw new Error("sourceMappingURL not found");
      }
    }
    function _extractLocationInfoFromSourceMapSource(stackframe2, sourceMapConsumer2, sourceCache) {
      return new Promise(function(resolve, reject) {
        var loc = sourceMapConsumer2.originalPositionFor({
          line: stackframe2.lineNumber,
          column: stackframe2.columnNumber
        });
        if (loc.source) {
          var mappedSource = sourceMapConsumer2.sourceContentFor(loc.source);
          if (mappedSource) {
            sourceCache[loc.source] = mappedSource;
          }
          resolve(
            // given stackframe and source location, update stackframe
            new StackFrame({
              functionName: loc.name || stackframe2.functionName,
              args: stackframe2.args,
              fileName: loc.source,
              lineNumber: loc.line,
              columnNumber: loc.column
            })
          );
        } else {
          reject(new Error("Could not get original source for given stackframe and source map"));
        }
      });
    }
    return function StackTraceGPS(opts) {
      if (!(this instanceof StackTraceGPS)) {
        return new StackTraceGPS(opts);
      }
      opts = opts || {};
      this.sourceCache = opts.sourceCache || {};
      this.sourceMapConsumerCache = opts.sourceMapConsumerCache || {};
      this.ajax = opts.ajax || _xdr;
      this._atob = opts.atob || _atob;
      this._get = function _get(location) {
        return new Promise(function(resolve, reject) {
          var isDataUrl = location.substr(0, 5) === "data:";
          if (this.sourceCache[location]) {
            resolve(this.sourceCache[location]);
          } else if (opts.offline && !isDataUrl) {
            reject(new Error("Cannot make network requests in offline mode"));
          } else {
            if (isDataUrl) {
              var supportedEncodingRegexp = /^data:application\/json;([\w=:"-]+;)*base64,/;
              var match = location.match(supportedEncodingRegexp);
              if (match) {
                var sourceMapStart = match[0].length;
                var encodedSource = location.substr(sourceMapStart);
                var source = this._atob(encodedSource);
                this.sourceCache[location] = source;
                resolve(source);
              } else {
                reject(new Error("The encoding of the inline sourcemap is not supported"));
              }
            } else {
              var xhrPromise = this.ajax(location, {
                method: "get"
              });
              this.sourceCache[location] = xhrPromise;
              xhrPromise.then(resolve, reject);
            }
          }
        }.bind(this));
      };
      this._getSourceMapConsumer = function _getSourceMapConsumer(sourceMappingURL, defaultSourceRoot) {
        return new Promise(function(resolve) {
          if (this.sourceMapConsumerCache[sourceMappingURL]) {
            resolve(this.sourceMapConsumerCache[sourceMappingURL]);
          } else {
            var sourceMapConsumerPromise = new Promise(function(resolve2, reject) {
              return this._get(sourceMappingURL).then(function(sourceMapSource) {
                if (typeof sourceMapSource === "string") {
                  sourceMapSource = _parseJson(sourceMapSource.replace(/^\)\]\}'/, ""));
                }
                if (typeof sourceMapSource.sourceRoot === "undefined") {
                  sourceMapSource.sourceRoot = defaultSourceRoot;
                }
                resolve2(new SourceMap.SourceMapConsumer(sourceMapSource));
              }, reject);
            }.bind(this));
            this.sourceMapConsumerCache[sourceMappingURL] = sourceMapConsumerPromise;
            resolve(sourceMapConsumerPromise);
          }
        }.bind(this));
      };
      this.pinpoint = function StackTraceGPS$$pinpoint(stackframe2) {
        return new Promise(function(resolve, reject) {
          this.getMappedLocation(stackframe2).then(function(mappedStackFrame) {
            function resolveMappedStackFrame() {
              resolve(mappedStackFrame);
            }
            this.findFunctionName(mappedStackFrame).then(resolve, resolveMappedStackFrame)["catch"](resolveMappedStackFrame);
          }.bind(this), reject);
        }.bind(this));
      };
      this.findFunctionName = function StackTraceGPS$$findFunctionName(stackframe2) {
        return new Promise(function(resolve, reject) {
          _ensureStackFrameIsLegit(stackframe2);
          this._get(stackframe2.fileName).then(function getSourceCallback(source) {
            var lineNumber = stackframe2.lineNumber;
            var columnNumber = stackframe2.columnNumber;
            var guessedFunctionName = _findFunctionName(source, lineNumber);
            if (guessedFunctionName) {
              resolve(new StackFrame({
                functionName: guessedFunctionName,
                args: stackframe2.args,
                fileName: stackframe2.fileName,
                lineNumber,
                columnNumber
              }));
            } else {
              resolve(stackframe2);
            }
          }, reject)["catch"](reject);
        }.bind(this));
      };
      this.getMappedLocation = function StackTraceGPS$$getMappedLocation(stackframe2) {
        return new Promise(function(resolve, reject) {
          _ensureSupportedEnvironment();
          _ensureStackFrameIsLegit(stackframe2);
          var sourceCache = this.sourceCache;
          var fileName = stackframe2.fileName;
          this._get(fileName).then(function(source) {
            var sourceMappingURL = _findSourceMappingURL(source);
            var isDataUrl = sourceMappingURL.substr(0, 5) === "data:";
            var defaultSourceRoot = fileName.substring(0, fileName.lastIndexOf("/") + 1);
            if (sourceMappingURL[0] !== "/" && !isDataUrl && !/^https?:\/\/|^\/\//i.test(sourceMappingURL)) {
              sourceMappingURL = defaultSourceRoot + sourceMappingURL;
            }
            return this._getSourceMapConsumer(sourceMappingURL, defaultSourceRoot).then(function(sourceMapConsumer2) {
              return _extractLocationInfoFromSourceMapSource(stackframe2, sourceMapConsumer2, sourceCache).then(resolve)["catch"](function() {
                resolve(stackframe2);
              });
            });
          }.bind(this), reject)["catch"](reject);
        }.bind(this));
      };
    };
  });
});
var StackTraceGps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), stacktraceGps, {
  "default": stacktraceGps
}));
function hide() {
  return function hideOperation(source) {
    return source.lift(new HideOperator());
  };
}
var HideOperator = /* @__PURE__ */ function() {
  function HideOperator2() {
    _classCallCheck(this, HideOperator2);
    _defineProperty(this, "hide", true);
  }
  _createClass(HideOperator2, [{
    key: "call",
    value: function call(subscriber, source) {
      return source.subscribe(subscriber);
    }
  }]);
  return HideOperator2;
}();
var stackTraceRefSymbol = Symbol("stackTraceRef");
function getMappedStackTrace(ref) {
  var stackTraceRef = getStackTraceRef(ref);
  return stackTraceRef ? stackTraceRef.mappedStackTrace : of([]);
}
function getStackTrace(ref) {
  var stackTraceRef = getStackTraceRef(ref);
  return stackTraceRef ? stackTraceRef.stackTrace : [];
}
function getStackTraceRef(ref) {
  return ref[stackTraceRefSymbol];
}
function setStackTraceRef(ref, value) {
  ref[stackTraceRefSymbol] = value;
  return value;
}
var StackTracePlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(StackTracePlugin2, _BasePlugin);
  var _super = _createSuper(StackTracePlugin2);
  function StackTracePlugin2() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$sourceMaps = _ref.sourceMaps, sourceMaps = _ref$sourceMaps === void 0 ? false : _ref$sourceMaps;
    _classCallCheck(this, StackTracePlugin2);
    _this = _super.call(this, "stackTrace");
    _defineProperty(_assertThisInitialized(_this), "sourceCache_", void 0);
    _defineProperty(_assertThisInitialized(_this), "sourceMaps_", void 0);
    _this.sourceCache_ = {};
    _this.sourceMaps_ = sourceMaps;
    return _this;
  }
  _createClass(StackTracePlugin2, [{
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var _this2 = this;
      var stackFrames = this.getStackFrames_();
      if (this.sourceMaps_ && typeof window !== "undefined" && window.location.protocol !== "file:") {
        setStackTraceRef(ref, {
          mappedStackTrace: defer(function() {
            var gps = new StackTraceGps({
              sourceCache: _this2.sourceCache_
            });
            return Promise.all(stackFrames.map(function(stackFrame) {
              return gps.pinpoint(stackFrame)["catch"](function() {
                return stackFrame;
              });
            }));
          }).pipe(shareReplay(1), hide()),
          stackTrace: stackFrames
        });
      } else {
        setStackTraceRef(ref, {
          mappedStackTrace: of(stackFrames).pipe(hide()),
          stackTrace: stackFrames
        });
      }
    }
  }, {
    key: "teardown",
    value: function teardown() {
      this.sourceCache_ = {};
    }
  }, {
    key: "getStackFrames_",
    value: function getStackFrames_() {
      try {
        throw new Error();
      } catch (error) {
        var core = true;
        return errorStackParser.parse(error).filter(function(stackFrame) {
          var result = !core;
          if (/coreSubscribe_/.test(stackFrame.functionName || "")) {
            core = false;
          }
          return result;
        });
      }
    }
  }]);
  return StackTracePlugin2;
}(BasePlugin);
var cycleDetectedSymbol = Symbol("cycleDetected");
var cycleWarnedSymbol = Symbol("cycleWarned");
var CyclePlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(CyclePlugin2, _BasePlugin);
  var _super = _createSuper(CyclePlugin2);
  function CyclePlugin2(spy2, partialLogger) {
    var _this;
    _classCallCheck(this, CyclePlugin2);
    _this = _super.call(this, "cycle");
    _defineProperty(_assertThisInitialized(_this), "logger_", void 0);
    _defineProperty(_assertThisInitialized(_this), "nexts_", []);
    _defineProperty(_assertThisInitialized(_this), "spy_", void 0);
    _this.logger_ = toLogger(partialLogger);
    _this.spy_ = spy2;
    return _this;
  }
  _createClass(CyclePlugin2, [{
    key: "afterNext",
    value: function afterNext(ref, value) {
      var nexts_ = this.nexts_;
      nexts_.pop();
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var logger_ = this.logger_, nexts_ = this.nexts_, spy_ = this.spy_;
      var observable3 = ref.observable, subscription = ref.subscription;
      if (nexts_.indexOf(ref) !== -1) {
        if (!subscription[cycleDetectedSymbol]) {
          subscription[cycleDetectedSymbol] = true;
          if (nexts_.findIndex(function(n) {
            return n.subscription[cycleWarnedSymbol];
          }) === -1) {
            subscription[cycleWarnedSymbol] = true;
            var stackFrames = getStackTrace(ref);
            if (stackFrames.length === 0) {
              spy_.warnOnce(console, "Stack tracing is not enabled; add the StackTracePlugin before the CyclePlugin.");
            }
            var stackTrace = stackFrames.length ? "; subscribed at\n".concat(stackFrames.join("\n")) : "";
            var type = inferType(observable3);
            logger_.warn("Cyclic next detected; type = ".concat(type, "; value = ").concat(value).concat(stackTrace));
          }
        }
      }
      nexts_.push(ref);
    }
  }]);
  return CyclePlugin2;
}(BasePlugin);
var DebugPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(DebugPlugin2, _BasePlugin);
  var _super = _createSuper(DebugPlugin2);
  function DebugPlugin2(match, notifications) {
    var _this;
    _classCallCheck(this, DebugPlugin2);
    _this = _super.call(this, "debug(".concat(toString(match), ")"));
    _defineProperty(_assertThisInitialized(_this), "notifications_", void 0);
    _defineProperty(_assertThisInitialized(_this), "matcher_", void 0);
    _this.notifications_ = notifications;
    _this.matcher_ = function(ref, notification) {
      return matches(ref, match) && _this.notifications_.indexOf(notification) !== -1;
    };
    return _this;
  }
  _createClass(DebugPlugin2, [{
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      var matcher_ = this.matcher_;
      if (matcher_(ref, "complete")) {
        debugger;
      }
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      var matcher_ = this.matcher_;
      if (matcher_(ref, "error")) {
        debugger;
      }
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var matcher_ = this.matcher_;
      if (matcher_(ref, "next")) {
        debugger;
      }
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var matcher_ = this.matcher_;
      if (matcher_(ref, "subscribe")) {
        debugger;
      }
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      var matcher_ = this.matcher_;
      if (matcher_(ref, "unsubscribe")) {
        debugger;
      }
    }
  }]);
  return DebugPlugin2;
}(BasePlugin);
var graphRefSymbol = Symbol("graphRef");
function getGraphRef(ref) {
  return ref[graphRefSymbol];
}
function setGraphRef(ref, value) {
  ref[graphRefSymbol] = value;
  return value;
}
var GraphPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(GraphPlugin2, _BasePlugin);
  var _super = _createSuper(GraphPlugin2);
  function GraphPlugin2() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$keptDuration = _ref.keptDuration, keptDuration = _ref$keptDuration === void 0 ? 3e4 : _ref$keptDuration;
    _classCallCheck(this, GraphPlugin2);
    _this = _super.call(this, "graph");
    _defineProperty(_assertThisInitialized(_this), "flushIntervalId_", void 0);
    _defineProperty(_assertThisInitialized(_this), "flushQueue_", void 0);
    _defineProperty(_assertThisInitialized(_this), "keptDuration_", void 0);
    _defineProperty(_assertThisInitialized(_this), "notifications_", void 0);
    _defineProperty(_assertThisInitialized(_this), "sentinel_", void 0);
    _this.flushIntervalId_ = void 0;
    _this.flushQueue_ = [];
    _this.keptDuration_ = keptDuration;
    _this.notifications_ = [];
    _this.sentinel_ = {
      depth: 0,
      flattened: false,
      flattenings: [],
      flatteningsFlushed: 0,
      link: void 0,
      rootSink: void 0,
      sentinel: void 0,
      sink: void 0,
      sources: [],
      sourcesFlushed: 0
    };
    _this.sentinel_.link = _this.sentinel_;
    _this.sentinel_.sentinel = _this.sentinel_;
    return _this;
  }
  _createClass(GraphPlugin2, [{
    key: "afterNext",
    value: function afterNext(ref, value) {
      var notifications_ = this.notifications_;
      notifications_.pop();
    }
  }, {
    key: "afterSubscribe",
    value: function afterSubscribe(ref) {
      var notifications_ = this.notifications_;
      notifications_.pop();
    }
  }, {
    key: "afterUnsubscribe",
    value: function afterUnsubscribe(ref) {
      var notifications_ = this.notifications_;
      notifications_.pop();
      this.flush_(ref);
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var notifications_ = this.notifications_;
      notifications_.push({
        notification: "next",
        ref
      });
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var notifications_ = this.notifications_, sentinel_ = this.sentinel_;
      var graphRef = setGraphRef(ref, {
        depth: 1,
        flattened: false,
        flattenings: [],
        flatteningsFlushed: 0,
        link: sentinel_,
        rootSink: void 0,
        sentinel: sentinel_,
        sink: void 0,
        sources: [],
        sourcesFlushed: 0
      });
      var length = notifications_.length;
      if (length > 0 && notifications_[length - 1].notification === "next") {
        var sinkRef = notifications_[length - 1].ref;
        var sinkGraphRef = getGraphRef(sinkRef);
        sinkGraphRef.flattenings.push(ref);
        graphRef.link = sinkGraphRef;
        graphRef.flattened = true;
        graphRef.rootSink = sinkGraphRef.rootSink || sinkRef;
        graphRef.sink = sinkRef;
      } else {
        for (var n = length - 1; n > -1; --n) {
          if (notifications_[n].notification === "subscribe") {
            var _sinkRef = notifications_[length - 1].ref;
            var _sinkGraphRef = getGraphRef(_sinkRef);
            _sinkGraphRef.sources.push(ref);
            graphRef.depth = _sinkGraphRef.depth + 1;
            graphRef.link = _sinkGraphRef;
            graphRef.rootSink = _sinkGraphRef.rootSink || _sinkRef;
            graphRef.sink = _sinkRef;
            break;
          }
        }
      }
      if (graphRef.link === graphRef.sentinel) {
        graphRef.sentinel.sources.push(ref);
      }
      notifications_.push({
        notification: "subscribe",
        ref
      });
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      var notifications_ = this.notifications_;
      notifications_.push({
        notification: "unsubscribe",
        ref
      });
    }
  }, {
    key: "teardown",
    value: function teardown() {
      if (this.flushIntervalId_ !== void 0) {
        clearInterval(this.flushIntervalId_);
        this.flushIntervalId_ = void 0;
      }
    }
  }, {
    key: "flush_",
    value: function flush_(ref) {
      var _this2 = this;
      var graphRef = getGraphRef(ref);
      var flattenings = graphRef.flattenings, sources = graphRef.sources;
      if (!ref.unsubscribed || !flattenings.every(function(ref2) {
        return ref2.unsubscribed;
      }) || !sources.every(function(ref2) {
        return ref2.unsubscribed;
      })) {
        return;
      }
      var keptDuration_ = this.keptDuration_;
      var link = graphRef.link;
      var flush = function flush2() {
        var flattenings2 = link.flattenings, sources2 = link.sources;
        var flatteningIndex = flattenings2.indexOf(ref);
        if (flatteningIndex !== -1) {
          flattenings2.splice(flatteningIndex, 1);
          ++link.flatteningsFlushed;
        }
        var sourceIndex = sources2.indexOf(ref);
        if (sourceIndex !== -1) {
          sources2.splice(sourceIndex, 1);
          ++link.sourcesFlushed;
        }
      };
      if (keptDuration_ === 0) {
        flush();
      } else if (keptDuration_ > 0 && keptDuration_ < Infinity) {
        this.flushQueue_.push({
          due: Date.now() + keptDuration_,
          flush
        });
        if (this.flushIntervalId_ === void 0) {
          this.flushIntervalId_ = setInterval(function() {
            var now = Date.now();
            _this2.flushQueue_ = _this2.flushQueue_.filter(function(q) {
              if (q.due > now) {
                return true;
              }
              q.flush();
              return false;
            });
            if (_this2.flushQueue_.length === 0) {
              clearInterval(_this2.flushIntervalId_);
              _this2.flushIntervalId_ = void 0;
            }
          }, keptDuration_);
        }
      }
    }
  }]);
  return GraphPlugin2;
}(BasePlugin);
var LetPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(LetPlugin2, _BasePlugin);
  var _super = _createSuper(LetPlugin2);
  function LetPlugin2(match, select) {
    var _this;
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$complete = _ref.complete, complete = _ref$complete === void 0 ? true : _ref$complete;
    _classCallCheck(this, LetPlugin2);
    _this = _super.call(this, "let(".concat(toString(match), ")"));
    _defineProperty(_assertThisInitialized(_this), "match_", void 0);
    _defineProperty(_assertThisInitialized(_this), "select_", void 0);
    _this.match_ = match;
    _this.select_ = complete ? select : function(source) {
      return merge(NEVER, select(source));
    };
    return _this;
  }
  _createClass(LetPlugin2, [{
    key: "select",
    value: function select(ref) {
      var match_ = this.match_, select_ = this.select_;
      if (matches(ref, match_)) {
        return select_;
      }
      return void 0;
    }
  }]);
  return LetPlugin2;
}(BasePlugin);
var LogPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(LogPlugin2, _BasePlugin);
  var _super = _createSuper(LogPlugin2);
  function LogPlugin2(spy2, tagMatch) {
    var _this;
    _classCallCheck(this, LogPlugin2);
    _this = _super.call(this, "log(".concat(toString(tagMatch), ")"));
    _defineProperty(_assertThisInitialized(_this), "auditor_", void 0);
    _defineProperty(_assertThisInitialized(_this), "logger_", void 0);
    _defineProperty(_assertThisInitialized(_this), "notificationMatch_", void 0);
    _defineProperty(_assertThisInitialized(_this), "tagMatch_", void 0);
    _this.auditor_ = spy2.auditor;
    _this.tagMatch_ = tagMatch;
    var defaultMatch = /.+/;
    switch (arguments.length <= 2 ? 0 : arguments.length - 2) {
      case 0:
        _this.notificationMatch_ = defaultMatch;
        _this.logger_ = toLogger(defaultLogger);
        break;
      case 1:
        if (typeof (arguments.length <= 2 ? void 0 : arguments[2]) === "function") {
          _this.notificationMatch_ = arguments.length <= 2 ? void 0 : arguments[2];
          _this.logger_ = toLogger(defaultLogger);
        } else {
          _this.notificationMatch_ = defaultMatch;
          _this.logger_ = toLogger(arguments.length <= 2 ? void 0 : arguments[2]);
        }
        break;
      default:
        _this.notificationMatch_ = arguments.length <= 2 ? void 0 : arguments[2];
        _this.logger_ = toLogger(arguments.length <= 3 ? void 0 : arguments[3]);
        break;
    }
    return _this;
  }
  _createClass(LogPlugin2, [{
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      this.log_(ref, "complete");
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      this.log_(ref, "error", error);
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      this.log_(ref, "next", value);
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      this.log_(ref, "subscribe");
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      this.log_(ref, "unsubscribe");
    }
  }, {
    key: "log_",
    value: function log_(ref, notification, param) {
      var _this2 = this;
      var auditor_ = this.auditor_, notificationMatch_ = this.notificationMatch_, tagMatch_ = this.tagMatch_;
      if (matches(ref, tagMatch_) && matches(ref, notificationMatch_, notification)) {
        auditor_.audit(this, function(ignored) {
          var logger_ = _this2.logger_;
          var observable3 = ref.observable;
          var tag2 = read(observable3);
          var type = inferType(observable3);
          var matching = typeof tagMatch_ === "string" ? "" : "; matching ".concat(toString(tagMatch_));
          var audit = ignored === 0 ? "" : "; ignored ".concat(ignored);
          var description = tag2 ? "Tag = ".concat(tag2, "; notification = ").concat(notification).concat(matching).concat(audit) : "Type = ".concat(type, "; notification = ").concat(notification).concat(matching).concat(audit);
          switch (notification) {
            case "error":
              logger_.error("".concat(description, "; error ="), param);
              break;
            case "next":
              logger_.log("".concat(description, "; value ="), param);
              break;
            default:
              logger_.log(description);
              break;
          }
        });
      }
    }
  }]);
  return LogPlugin2;
}(BasePlugin);
var Deck = /* @__PURE__ */ function() {
  function Deck2(match) {
    _classCallCheck(this, Deck2);
    _defineProperty(this, "teardown", void 0);
    _defineProperty(this, "match_", void 0);
    _defineProperty(this, "paused_", true);
    _defineProperty(this, "states_", /* @__PURE__ */ new Map());
    _defineProperty(this, "stats_", void 0);
    this.match_ = match;
    this.stats_ = new Subject();
  }
  _createClass(Deck2, [{
    key: "stats",
    get: function get5() {
      return this.stats_.asObservable();
    }
  }, {
    key: "paused",
    get: function get5() {
      return this.paused_;
    }
  }, {
    key: "clear",
    value: function clear() {
      var predicate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
        return true;
      };
      this.states_.forEach(function(state) {
        state.notifications_ = state.notifications_.filter(function(notification) {
          return !predicate(notification);
        });
      });
      this.broadcast_();
    }
  }, {
    key: "log",
    value: function log() {
      var partialLogger = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultLogger;
      var logger = toLogger(partialLogger);
      logger.group("Deck matching ".concat(toString(this.match_)));
      logger.log("Paused =", this.paused_);
      this.states_.forEach(function(state) {
        logger.group("Observable; tag = ".concat(state.tag_));
        logger.log("Notifications =", state.notifications_);
        logger.groupEnd();
      });
      logger.groupEnd();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused_ = true;
      this.broadcast_();
    }
  }, {
    key: "resume",
    value: function resume() {
      this.states_.forEach(function(state) {
        while (state.notifications_.length > 0) {
          state.subject_.next(state.notifications_.shift());
        }
      });
      this.paused_ = false;
      this.broadcast_();
    }
  }, {
    key: "select",
    value: function select(ref) {
      var _this = this;
      var observable3 = ref.observable;
      return function(source) {
        var state = _this.states_.get(observable3);
        if (state) {
          state.subscription_.unsubscribe();
        } else {
          state = {
            notifications_: [],
            subject_: new Subject(),
            subscription_: void 0,
            tag_: read(observable3)
          };
          _this.states_.set(observable3, state);
        }
        state.subscription_ = source.pipe(materialize(), hide()).subscribe({
          next: function next(notification) {
            if (_this.paused_) {
              state.notifications_.push(notification);
            } else {
              state.subject_.next(notification);
            }
            _this.broadcast_();
          }
        });
        _this.broadcast_();
        return state.subject_.asObservable().pipe(dematerialize());
      };
    }
  }, {
    key: "skip",
    value: function skip() {
      this.states_.forEach(function(state) {
        if (state.notifications_.length > 0) {
          state.notifications_.shift();
        }
      });
      this.broadcast_();
    }
  }, {
    key: "step",
    value: function step() {
      this.states_.forEach(function(state) {
        if (state.notifications_.length > 0) {
          state.subject_.next(state.notifications_.shift());
        }
      });
      this.broadcast_();
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.states_.forEach(function(state) {
        if (state.subscription_) {
          state.subscription_.unsubscribe();
          state.subscription_ = void 0;
        }
      });
      this.broadcast_();
    }
  }, {
    key: "broadcast_",
    value: function broadcast_() {
      var paused_ = this.paused_, states_ = this.states_, stats_ = this.stats_;
      var notifications = 0;
      states_.forEach(function(state) {
        return notifications += state.notifications_.length;
      });
      stats_.next({
        notifications,
        paused: paused_
      });
    }
  }]);
  return Deck2;
}();
var PausePlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(PausePlugin2, _BasePlugin);
  var _super = _createSuper(PausePlugin2);
  function PausePlugin2(match) {
    var _this2;
    _classCallCheck(this, PausePlugin2);
    _this2 = _super.call(this, "pause(".concat(toString(match), ")"));
    _defineProperty(_assertThisInitialized(_this2), "match_", void 0);
    _defineProperty(_assertThisInitialized(_this2), "deck_", void 0);
    _this2.deck_ = new Deck(match);
    _this2.match_ = match;
    return _this2;
  }
  _createClass(PausePlugin2, [{
    key: "deck",
    get: function get5() {
      var deck_ = this.deck_;
      return deck_;
    }
  }, {
    key: "match",
    get: function get5() {
      var match_ = this.match_;
      return match_;
    }
  }, {
    key: "select",
    value: function select(ref) {
      var deck_ = this.deck_, match_ = this.match_;
      if (matches(ref, match_)) {
        return deck_.select(ref);
      }
      return void 0;
    }
  }, {
    key: "teardown",
    value: function teardown() {
      var deck_ = this.deck_;
      if (deck_) {
        deck_.resume();
        deck_.unsubscribe();
      }
    }
  }]);
  return PausePlugin2;
}(BasePlugin);
var snapshotRefSymbol = Symbol("snapshotRef");
function getSnapshotRef(ref) {
  return ref[snapshotRefSymbol];
}
function mapStackTraces(snapshots) {
  var observables = [of(null)];
  snapshots.forEach(function(snapshot) {
    if (snapshot.subscriptions) {
      snapshot.subscriptions.forEach(mapSubscriptionStackTraces);
    } else {
      mapSubscriptionStackTraces(snapshot);
    }
  });
  return forkJoin(observables).pipe(mapTo(void 0), hide());
  function mapSubscriptionStackTraces(subscriptionSnapshot) {
    observables.push(subscriptionSnapshot.mappedStackTrace);
    if (subscriptionSnapshot.rootSink) {
      observables.push(subscriptionSnapshot.rootSink.mappedStackTrace);
    }
  }
}
function setSnapshotRef(ref, value) {
  ref[snapshotRefSymbol] = value;
  return value;
}
var SnapshotPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(SnapshotPlugin2, _BasePlugin);
  var _super = _createSuper(SnapshotPlugin2);
  function SnapshotPlugin2(spy2) {
    var _this;
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$keptValues = _ref.keptValues, keptValues = _ref$keptValues === void 0 ? 4 : _ref$keptValues;
    _classCallCheck(this, SnapshotPlugin2);
    _this = _super.call(this, "snapshot");
    _defineProperty(_assertThisInitialized(_this), "keptValues_", void 0);
    _defineProperty(_assertThisInitialized(_this), "sentinel_", void 0);
    _defineProperty(_assertThisInitialized(_this), "spy_", void 0);
    _this.keptValues_ = keptValues;
    _this.sentinel_ = void 0;
    _this.spy_ = spy2;
    return _this;
  }
  _createClass(SnapshotPlugin2, [{
    key: "afterUnsubscribe",
    value: function afterUnsubscribe(ref) {
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = this.spy_.tick;
      snapshotRef.unsubscribed = true;
    }
  }, {
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = this.spy_.tick;
      snapshotRef.complete = true;
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = this.spy_.tick;
      snapshotRef.error = error;
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var tick = this.spy_.tick;
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = tick;
      snapshotRef.values.push({
        tick,
        timestamp: Date.now(),
        value
      });
      var keptValues_ = this.keptValues_;
      var count = snapshotRef.values.length - keptValues_;
      if (count > 0) {
        snapshotRef.values.splice(0, count);
        snapshotRef.valuesFlushed += count;
      }
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      setSnapshotRef(ref, {
        complete: false,
        error: void 0,
        tick: this.spy_.tick,
        timestamp: Date.now(),
        unsubscribed: false,
        values: [],
        valuesFlushed: 0
      });
      var graphRef = getGraphRef(ref);
      if (graphRef) {
        this.sentinel_ = graphRef.sentinel;
      } else {
        this.spy_.warnOnce(console, "Graphing is not enabled; add the GraphPlugin before the SnapshotPlugin.");
      }
    }
  }, {
    key: "snapshotAll",
    value: function snapshotAll() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, since = _ref2.since;
      var observables = /* @__PURE__ */ new Map();
      var subscribers = /* @__PURE__ */ new Map();
      var subscriptions = /* @__PURE__ */ new Map();
      var subscriptionRefs = this.getSubscriptionRefs_();
      subscriptionRefs.forEach(function(unused, ref) {
        var _subscriberSnapshot$v;
        var observable3 = ref.observable, subscriber = ref.subscriber, subscription = ref.subscription;
        var graphRef = getGraphRef(ref);
        var flatteningsFlushed = graphRef.flatteningsFlushed, sourcesFlushed = graphRef.sourcesFlushed;
        var snapshotRef = getSnapshotRef(ref);
        var complete = snapshotRef.complete, error = snapshotRef.error, tick = snapshotRef.tick, timestamp = snapshotRef.timestamp, unsubscribed = snapshotRef.unsubscribed, values = snapshotRef.values, valuesFlushed = snapshotRef.valuesFlushed;
        var subscriptionSnapshot = {
          complete,
          error,
          flattenings: /* @__PURE__ */ new Map(),
          flatteningsFlushed,
          id: identify(ref),
          mappedStackTrace: getMappedStackTrace(ref),
          observable: observable3,
          rootSink: void 0,
          sink: void 0,
          sources: /* @__PURE__ */ new Map(),
          sourcesFlushed,
          stackTrace: getStackTrace(ref),
          subscriber,
          subscription,
          tick,
          timestamp,
          unsubscribed
        };
        subscriptions.set(subscription, subscriptionSnapshot);
        var subscriberSnapshot = subscribers.get(subscriber);
        if (!subscriberSnapshot) {
          subscriberSnapshot = {
            id: identify(subscriber),
            subscriber,
            subscriptions: /* @__PURE__ */ new Map(),
            tick,
            values: [],
            valuesFlushed: 0
          };
          subscribers.set(subscriber, subscriberSnapshot);
        }
        subscriberSnapshot.subscriptions.set(subscription, subscriptionSnapshot);
        subscriberSnapshot.tick = Math.max(subscriberSnapshot.tick, tick);
        (_subscriberSnapshot$v = subscriberSnapshot.values).push.apply(_subscriberSnapshot$v, _toConsumableArray(values));
        subscriberSnapshot.valuesFlushed += valuesFlushed;
        var observableSnapshot = observables.get(observable3);
        if (!observableSnapshot) {
          observableSnapshot = {
            id: identify(observable3),
            observable: observable3,
            path: inferPath(observable3),
            subscriptions: /* @__PURE__ */ new Map(),
            tag: read(observable3),
            tick,
            type: inferType(observable3)
          };
          observables.set(observable3, observableSnapshot);
        }
        observableSnapshot.subscriptions.set(subscription, subscriptionSnapshot);
        observableSnapshot.tick = Math.max(observableSnapshot.tick, tick);
      });
      subscriptionRefs.forEach(function(unused, ref) {
        var graphRef = getGraphRef(ref);
        var subscriptionSnapshot = subscriptions.get(ref.subscription);
        if (graphRef.sink) {
          subscriptionSnapshot.sink = subscriptions.get(graphRef.sink.subscription);
        }
        if (graphRef.rootSink) {
          subscriptionSnapshot.rootSink = subscriptions.get(graphRef.rootSink.subscription);
        }
        graphRef.flattenings.forEach(function(m) {
          return subscriptionSnapshot.flattenings.set(m.subscription, subscriptions.get(m.subscription));
        });
        graphRef.sources.forEach(function(s) {
          return subscriptionSnapshot.sources.set(s.subscription, subscriptions.get(s.subscription));
        });
      });
      subscribers.forEach(function(subscriberSnapshot) {
        subscriberSnapshot.values.sort(function(a, b) {
          return a.tick - b.tick;
        });
      });
      if (since !== void 0) {
        observables.forEach(function(value, key) {
          if (value.tick <= since.tick) {
            observables["delete"](key);
          }
        });
        subscribers.forEach(function(value, key) {
          if (value.tick <= since.tick) {
            subscribers["delete"](key);
          }
        });
        subscriptions.forEach(function(value, key) {
          if (value.tick <= since.tick) {
            subscriptions["delete"](key);
          }
        });
      }
      return {
        mapStackTraces,
        observables,
        subscribers,
        subscriptions,
        tick: this.spy_.tick
      };
    }
  }, {
    key: "snapshotObservable",
    value: function snapshotObservable(ref) {
      var snapshot = this.snapshotAll();
      return snapshot.observables.get(ref.observable);
    }
  }, {
    key: "snapshotSubscriber",
    value: function snapshotSubscriber(ref) {
      var snapshot = this.snapshotAll();
      return snapshot.subscribers.get(ref.subscriber);
    }
  }, {
    key: "addSubscriptionRefs_",
    value: function addSubscriptionRefs_(ref, map2) {
      var _this2 = this;
      map2.set(ref, true);
      var graphRef = getGraphRef(ref);
      graphRef.flattenings.forEach(function(m) {
        return _this2.addSubscriptionRefs_(m, map2);
      });
      graphRef.sources.forEach(function(s) {
        return _this2.addSubscriptionRefs_(s, map2);
      });
    }
  }, {
    key: "getSubscriptionRefs_",
    value: function getSubscriptionRefs_() {
      var _this3 = this;
      var sentinel_ = this.sentinel_;
      var map2 = /* @__PURE__ */ new Map();
      if (sentinel_) {
        sentinel_.sources.forEach(function(ref) {
          return _this3.addSubscriptionRefs_(ref, map2);
        });
      }
      return map2;
    }
  }]);
  return SnapshotPlugin2;
}(BasePlugin);
var StatsPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(StatsPlugin2, _BasePlugin);
  var _super = _createSuper(StatsPlugin2);
  function StatsPlugin2(spy2) {
    var _this;
    _classCallCheck(this, StatsPlugin2);
    _this = _super.call(this, "stats");
    _defineProperty(_assertThisInitialized(_this), "spy_", void 0);
    _defineProperty(_assertThisInitialized(_this), "stats_", void 0);
    _defineProperty(_assertThisInitialized(_this), "time_", void 0);
    _this.spy_ = spy2;
    _this.stats_ = {
      completes: 0,
      errors: 0,
      flattenedSubscribes: 0,
      leafSubscribes: 0,
      maxDepth: 0,
      nexts: 0,
      rootSubscribes: 0,
      subscribes: 0,
      tick: 0,
      timespan: 0,
      totalDepth: 0,
      unsubscribes: 0
    };
    _this.time_ = 0;
    return _this;
  }
  _createClass(StatsPlugin2, [{
    key: "afterSubscribe",
    value: function afterSubscribe(ref) {
      var stats_ = this.stats_;
      var graphRef = getGraphRef(ref);
      if (graphRef) {
        var depth = graphRef.depth, flattened = graphRef.flattened, flattenings = graphRef.flattenings, flatteningsFlushed = graphRef.flatteningsFlushed, rootSink = graphRef.rootSink, sources = graphRef.sources, sourcesFlushed = graphRef.sourcesFlushed;
        if (!rootSink) {
          stats_.rootSubscribes += 1;
        }
        if (flattened) {
          stats_.flattenedSubscribes += 1;
        }
        if (flattenings.length + flatteningsFlushed + sources.length + sourcesFlushed === 0) {
          if (stats_.maxDepth < depth) {
            stats_.maxDepth = depth;
          }
          stats_.leafSubscribes += 1;
          stats_.totalDepth += depth;
        }
      }
    }
  }, {
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      var stats_ = this.stats_;
      ++stats_.completes;
      this.all_();
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      var stats_ = this.stats_;
      ++stats_.errors;
      this.all_();
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var stats_ = this.stats_;
      ++stats_.nexts;
      this.all_();
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var stats_ = this.stats_;
      ++stats_.subscribes;
      this.all_();
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      var stats_ = this.stats_;
      ++stats_.unsubscribes;
      this.all_();
    }
  }, {
    key: "stats",
    get: function get5() {
      var stats_ = this.stats_;
      return _objectSpread2({}, stats_);
    }
  }, {
    key: "all_",
    value: function all_() {
      var spy_ = this.spy_, stats_ = this.stats_, time_ = this.time_;
      if (time_ === 0) {
        this.time_ = Date.now();
      } else {
        stats_.timespan = Date.now() - time_;
      }
      stats_.tick = spy_.tick;
    }
  }]);
  return StatsPlugin2;
}(BasePlugin);
var Auditor = /* @__PURE__ */ function() {
  function Auditor2(duration) {
    _classCallCheck(this, Auditor2);
    this.duration = duration;
    _defineProperty(this, "queue_", []);
    _defineProperty(this, "timeoutId_", void 0);
  }
  _createClass(Auditor2, [{
    key: "audit",
    value: function audit(source, task) {
      var duration = this.duration, queue_ = this.queue_;
      if (duration <= 0) {
        task(0);
      } else {
        var queued = {
          ignored: 0,
          source,
          task,
          timestamp: Date.now()
        };
        var index = queue_.findIndex(function(q) {
          return q.source === source;
        });
        if (index !== -1) {
          var _queue_$index = queue_[index], _ignored = _queue_$index.ignored, timestamp = _queue_$index.timestamp;
          queued.ignored += _ignored + 1;
          queued.timestamp = timestamp;
          queue_.splice(index, 1);
        }
        queue_.push(queued);
        this.wait_();
      }
    }
  }, {
    key: "wait_",
    value: function wait_() {
      var _this = this;
      var duration = this.duration, queue_ = this.queue_;
      if (this.timeoutId_ === void 0 && queue_.length > 0) {
        var queued = queue_[0];
        this.timeoutId_ = setTimeout(function() {
          var before = Date.now() - duration;
          while (queue_.length > 0 && queue_[0].timestamp <= before) {
            var dequeued = queue_.shift();
            dequeued.task(dequeued.ignored);
          }
          _this.timeoutId_ = void 0;
          _this.wait_();
        }, Math.max(0, queued.timestamp + duration - Date.now()));
      }
    }
  }]);
  return Auditor2;
}();
var Detector = /* @__PURE__ */ function() {
  function Detector2(spy2) {
    _classCallCheck(this, Detector2);
    _defineProperty(this, "detectorRecords_", void 0);
    _defineProperty(this, "snapshotPlugin_", void 0);
    _defineProperty(this, "spy_", void 0);
    this.detectorRecords_ = /* @__PURE__ */ new Map();
    this.snapshotPlugin_ = spy2.find(SnapshotPlugin);
    this.spy_ = spy2;
  }
  _createClass(Detector2, [{
    key: "detect",
    value: function detect2(id) {
      var detectorRecords_ = this.detectorRecords_, snapshotPlugin_ = this.snapshotPlugin_, spy_ = this.spy_;
      if (!snapshotPlugin_) {
        spy_.warnOnce(console, "Snapshotting is not enabled.");
        return void 0;
      }
      var detectorRecord = detectorRecords_.get(id);
      var snapshotRecord = this.record_(snapshotPlugin_.snapshotAll());
      if (detectorRecord) {
        detectorRecord.snapshotRecords.push(snapshotRecord);
      } else {
        detectorRecord = {
          snapshotRecords: [snapshotRecord]
        };
        detectorRecords_.set(id, detectorRecord);
      }
      if (detectorRecord.snapshotRecords.length > 2) {
        detectorRecord.snapshotRecords.shift();
      }
      if (detectorRecord.snapshotRecords.length < 2) {
        return void 0;
      }
      var _detectorRecord$snaps = _slicedToArray(detectorRecord.snapshotRecords, 2), previous = _detectorRecord$snaps[0], current = _detectorRecord$snaps[1];
      return this.compare_(id, previous, current);
    }
  }, {
    key: "compare_",
    value: function compare_(id, previous, current) {
      var subscriptions = [];
      var unsubscriptions = [];
      var flatteningSubscriptions = [];
      var flatteningUnsubscriptions = [];
      var previousSubscriptions = previous.rootSubscriptions;
      var currentSubscriptions = current.rootSubscriptions;
      previousSubscriptions.forEach(function(previous2, key) {
        if (!currentSubscriptions.has(key)) {
          unsubscriptions.push(previous2);
        }
      });
      currentSubscriptions.forEach(function(current2, key) {
        var previous2 = previousSubscriptions.get(key);
        if (previous2) {
          var previousFlattenings = previous2.flattenings;
          var currentFlattenings = current2.flattenings;
          previousFlattenings.forEach(function(flattening, key2) {
            if (!currentFlattenings.has(key2)) {
              flatteningUnsubscriptions.push(flattening);
            }
          });
          currentFlattenings.forEach(function(flattening, key2) {
            if (!previousFlattenings.has(key2)) {
              flatteningSubscriptions.push(flattening);
            }
          });
        } else {
          subscriptions.push(current2);
        }
      });
      if (flatteningSubscriptions.length === 0 && flatteningUnsubscriptions.length === 0 && subscriptions.length === 0 && unsubscriptions.length === 0) {
        return void 0;
      }
      return {
        flatteningSubscriptions,
        flatteningUnsubscriptions,
        subscriptions: subscriptions.map(function(s) {
          return s.subscriptionSnapshot;
        }),
        unsubscriptions: unsubscriptions.map(function(s) {
          return s.subscriptionSnapshot;
        })
      };
    }
  }, {
    key: "findFlatteningSubscriptions_",
    value: function findFlatteningSubscriptions_(snapshot, subscriptionRecord) {
      var flattenings = subscriptionRecord.flattenings, subscriptionSnapshot = subscriptionRecord.subscriptionSnapshot;
      snapshot.subscriptions.forEach(function(s) {
        if (s.rootSink === subscriptionSnapshot) {
          s.flattenings.forEach(function(f) {
            var subscription = f.subscription;
            if (!subscription.closed) {
              flattenings.set(subscription, f);
            }
          });
        }
      });
    }
  }, {
    key: "findRootSubscriptions_",
    value: function findRootSubscriptions_(snapshot, rootSubscriptions) {
      var _this = this;
      snapshot.observables.forEach(function(observableSnapshot) {
        observableSnapshot.subscriptions.forEach(function(subscriptionSnapshot) {
          var complete = subscriptionSnapshot.complete, error = subscriptionSnapshot.error, sink = subscriptionSnapshot.sink, subscription = subscriptionSnapshot.subscription;
          if (!complete && !error && !sink && !subscription.closed) {
            var subscriptionRecord = {
              flattenings: /* @__PURE__ */ new Map(),
              subscriptionSnapshot
            };
            _this.findFlatteningSubscriptions_(snapshot, subscriptionRecord);
            rootSubscriptions.set(subscription, subscriptionRecord);
          }
        });
      });
    }
  }, {
    key: "record_",
    value: function record_(snapshot) {
      var rootSubscriptions = /* @__PURE__ */ new Map();
      this.findRootSubscriptions_(snapshot, rootSubscriptions);
      return {
        rootSubscriptions,
        snapshot
      };
    }
  }]);
  return Detector2;
}();
function hidden(observable3) {
  var operator = observable3["operator"];
  return Boolean(operator && operator["hide"]);
}
function wrap(core) {
  var deprecation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  };
  return {
    deck: function deck(call) {
      deprecation();
      var pausePlugins = core.findAll(PausePlugin);
      if (call === void 0) {
        var logger = toLogger(defaultLogger);
        logger.group("".concat(pausePlugins.length, " Deck(s)"));
        pausePlugins.forEach(function(pausePlugin2, index) {
          return logger.log("".concat(index + 1, " pause(").concat(pausePlugin2.name, ")"));
        });
        logger.groupEnd();
      } else {
        var pausePlugin = pausePlugins[call - 1];
        return pausePlugin ? pausePlugin.deck : void 0;
      }
    },
    debug: function debug() {
      deprecation();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      core.debug.apply(core, args);
    },
    detect: function detect$1() {
      var id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      deprecation();
      detect(id);
    },
    flush: function flush() {
      deprecation();
      core.flush();
    },
    inferPath,
    inferType,
    "let": function _let() {
      deprecation();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      core["let"].apply(core, args);
    },
    log: function log() {
      deprecation();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      core.log.apply(core, args);
    },
    maxLogged: function maxLogged() {
      deprecation();
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      core.maxLogged.apply(core, args);
    },
    pause: function pause() {
      deprecation();
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return core.pause.apply(core, args);
    },
    query: function query() {
      deprecation();
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      core.query.apply(core, args);
    },
    show: function show() {
      deprecation();
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      core.show.apply(core, args);
    },
    stats: function stats() {
      deprecation();
      core.stats();
    },
    undo: function undo() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      if (args.length === 0) {
        var logger = toLogger(defaultLogger);
        logger.group("".concat(core.undos.length, " undo(s)"));
        core.undos.forEach(function(undo2, index) {
          return logger.log("".concat(index + 1, " ").concat(undo2.name));
        });
        logger.groupEnd();
      } else {
        args.map(function(at) {
          return core.undos[at - 1];
        }).filter(Boolean).forEach(function(undo2) {
          return core.unplug(undo2);
        });
      }
    }
  };
}
var observableSubscribe = Observable.prototype.subscribe;
var previousWindow = {};
var SpyCore = /* @__PURE__ */ function() {
  function SpyCore2() {
    var _this = this;
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, SpyCore2);
    _defineProperty(this, "auditor_", void 0);
    _defineProperty(this, "defaultLogger_", void 0);
    _defineProperty(this, "maxLogged_", 20);
    _defineProperty(this, "plugins_", void 0);
    _defineProperty(this, "pluginsSubject_", void 0);
    _defineProperty(this, "teardown_", void 0);
    _defineProperty(this, "tick_", void 0);
    _defineProperty(this, "undos_", void 0);
    _defineProperty(this, "warned_", void 0);
    if (SpyCore2.spy_) {
      throw new Error("Already spying on Observable.prototype.subscribe.");
    }
    if (options.warning) {
      console.warn("Spying on Observable.prototype.subscribe.");
    }
    SpyCore2.spy_ = this;
    Observable.prototype.subscribe = SpyCore2.coreSubscribe_;
    this.auditor_ = new Auditor(options.audit || 0);
    this.defaultLogger_ = options.defaultLogger || defaultLogger;
    if (options.defaultPlugins === false) {
      this.plugins_ = [];
    } else {
      this.plugins_ = [new StackTracePlugin(options), new GraphPlugin(options), new SnapshotPlugin(this, options), new CyclePlugin(this, this.defaultLogger_), new StatsPlugin(this)];
    }
    this.pluginsSubject_ = new BehaviorSubject(this.plugins_);
    this.tick_ = 0;
    this.undos_ = [];
    this.warned_ = {};
    var detector = new Detector(this);
    hook(function(id) {
      return _this.detect_(id, detector);
    });
    if (typeof window !== "undefined") {
      [options.global || "spy", "rxSpy"].forEach(function(key) {
        if (window.hasOwnProperty(key)) {
          _this.defaultLogger_.log("Overwriting window.".concat(key));
          previousWindow[key] = window[key];
        }
        window[key] = wrap(_this, key === "rxSpy" ? function() {
          return _this.warnOnce(_this.defaultLogger_, "window.".concat(key, " is deprecated and has been renamed; use window.spy instead"));
        } : void 0);
      });
    }
    this.teardown_ = function() {
      if (typeof window !== "undefined") {
        [options.global || "spy", "rxSpy"].forEach(function(key) {
          if (previousWindow.hasOwnProperty(key)) {
            _this.defaultLogger_.log("Restoring window.".concat(key));
            window[key] = previousWindow[key];
            delete previousWindow[key];
          } else {
            delete window[key];
          }
        });
      }
      hook(void 0);
      _this.plugins_.forEach(function(plugin) {
        return plugin.teardown();
      });
      _this.plugins_ = [];
      _this.pluginsSubject_.next(_this.plugins_);
      _this.undos_ = [];
      SpyCore2.spy_ = void 0;
      Observable.prototype.subscribe = observableSubscribe;
    };
  }
  _createClass(SpyCore2, [{
    key: "auditor",
    get: function get5() {
      return this.auditor_;
    }
  }, {
    key: "tick",
    get: function get5() {
      return this.tick_;
    }
  }, {
    key: "undos",
    get: function get5() {
      return _toConsumableArray(this.undos_);
    }
  }, {
    key: "version",
    get: function get5() {
      return "8.0.2";
    }
  }, {
    key: "debug",
    value: function debug(match) {
      for (var _len = arguments.length, notifications = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        notifications[_key - 1] = arguments[_key];
      }
      if (notifications.length === 0) {
        notifications = ["complete", "error", "next", "subscribe", "unsubscribe"];
      }
      return this.plug(new DebugPlugin(match, notifications));
    }
  }, {
    key: "find",
    value: function find(ctor) {
      var found = this.plugins_.find(function(plugin) {
        return plugin instanceof ctor;
      });
      return found ? found : void 0;
    }
  }, {
    key: "findAll",
    value: function findAll(ctor) {
      return ctor ? this.plugins_.filter(function(plugin) {
        return plugin instanceof ctor;
      }) : this.plugins_;
    }
  }, {
    key: "flush",
    value: function flush() {
      this.plugins_.forEach(function(plugin) {
        return plugin.flush();
      });
    }
  }, {
    key: "let",
    value: function _let(match, select, options) {
      return this.plug(new LetPlugin(match, select, options));
    }
  }, {
    key: "log",
    value: function log() {
      var tagMatch = /.+/;
      var notificationMatch = /.+/;
      var partialLogger = this.defaultLogger_;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (args.length === 1) {
        var arg = args[0];
        if (typeof arg.log === "function") {
          partialLogger = arg;
        } else {
          tagMatch = arg;
        }
      } else if (args.length === 2) {
        var _arg;
        tagMatch = args[0];
        _arg = args[1];
        if (typeof _arg.log === "function") {
          partialLogger = _arg;
        } else {
          notificationMatch = _arg;
        }
      } else if (args.length === 3) {
        tagMatch = args[0];
        notificationMatch = args[1];
        partialLogger = args[2];
      }
      return this.plug(new LogPlugin(this, tagMatch, notificationMatch, partialLogger));
    }
  }, {
    key: "maxLogged",
    value: function maxLogged(value) {
      this.maxLogged_ = Math.max(value, 1);
    }
  }, {
    key: "pause",
    value: function pause(match) {
      var pausePlugin = new PausePlugin(match);
      var teardown = this.plug(pausePlugin);
      var deck = pausePlugin.deck;
      deck.teardown = teardown;
      return deck;
    }
  }, {
    key: "plug",
    value: function plug() {
      var _this$plugins_, _this$undos_, _this2 = this;
      for (var _len3 = arguments.length, plugins = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        plugins[_key3] = arguments[_key3];
      }
      (_this$plugins_ = this.plugins_).push.apply(_this$plugins_, plugins);
      this.pluginsSubject_.next(this.plugins_);
      (_this$undos_ = this.undos_).push.apply(_this$undos_, plugins);
      return function() {
        return _this2.unplug.apply(_this2, plugins);
      };
    }
  }, {
    key: "query",
    value: function query(predicate, partialLogger) {
      var _this3 = this;
      var snapshotPlugin = this.find(SnapshotPlugin);
      if (!snapshotPlugin) {
        this.warnOnce(console, "Snapshotting is not enabled.");
        return;
      }
      var snapshot = snapshotPlugin.snapshotAll();
      var observableSnapshots = Array.from(snapshot.observables.values());
      var logger = toLogger(partialLogger || this.defaultLogger_);
      snapshot.mapStackTraces(observableSnapshots).subscribe(function() {
        var found = [];
        observableSnapshots.forEach(function(observableSnapshot) {
          var find;
          var subscriptions = observableSnapshot.subscriptions;
          subscriptions.forEach(function(subscriptionSnapshot) {
            var subscriberSnapshot = snapshot.subscribers.get(subscriptionSnapshot.subscriber);
            if (subscriberSnapshot) {
              if (predicate({
                complete: subscriptionSnapshot.complete,
                error: subscriptionSnapshot.error,
                incomplete: !subscriptionSnapshot.complete && !subscriptionSnapshot.error,
                path: observableSnapshot.path,
                root: subscriptionSnapshot.sink === subscriptionSnapshot.rootSink,
                tag: observableSnapshot.tag,
                type: observableSnapshot.type,
                unsubscribed: subscriptionSnapshot.unsubscribed
              })) {
                if (!find) {
                  find = {
                    observable: observableSnapshot,
                    subs: []
                  };
                }
                find.subs.push({
                  subscriber: subscriberSnapshot,
                  subscription: subscriptionSnapshot
                });
              }
            }
          });
          if (find) {
            found.push(find);
          }
        });
        var maxLogged_ = _this3.maxLogged_;
        var notLogged = found.length > maxLogged_ ? found.length - maxLogged_ : 0;
        if (notLogged) {
          found.splice(maxLogged_, notLogged);
        }
        logger.group("".concat(found.length + notLogged, " snapshot(s) found"));
        var observableGroupMethod = found.length > 3 ? "groupCollapsed" : "group";
        found.forEach(function(find) {
          var observableSnapshot = find.observable;
          logger[observableGroupMethod].call(logger, observableSnapshot.tag ? "Tag = ".concat(observableSnapshot.tag) : "Type = ".concat(observableSnapshot.type));
          logger.log("Path =", observableSnapshot.path);
          var subs = find.subs;
          var subscriberGroupMethod = find.subs.length > 3 ? "groupCollapsed" : "group";
          logger.group("".concat(subs.length, " subscriber(s)"));
          subs.forEach(function(sub) {
            var subscriptionSnapshot = sub.subscription;
            var subscriberSnapshot = sub.subscriber;
            var values = subscriberSnapshot.values, valuesFlushed = subscriberSnapshot.valuesFlushed;
            logger[subscriberGroupMethod].call(logger, "Subscriber");
            logger.log("Value count =", values.length + valuesFlushed);
            if (values.length > 0) {
              logger.log("Last value =", values[values.length - 1].value);
            }
            logSubscription(logger, subscriptionSnapshot);
            var otherSubscriptions = Array.from(subscriberSnapshot.subscriptions.values()).filter(function(otherSubscriptionSnapshot) {
              return otherSubscriptionSnapshot !== subscriptionSnapshot;
            });
            otherSubscriptions.forEach(function(otherSubscriptionSnapshot) {
              logger.groupCollapsed("Other subscription");
              logSubscription(logger, otherSubscriptionSnapshot);
              logger.groupEnd();
            });
            logger.groupEnd();
          });
          logger.groupEnd();
          logger.groupEnd();
        });
        if (notLogged) {
          logger.log("... another ".concat(notLogged, " snapshot(s) not logged."));
        }
        logger.groupEnd();
      });
    }
  }, {
    key: "show",
    value: function show(match, partialLogger) {
      var anyTagged = /.+/;
      if (!match) {
        match = anyTagged;
      } else if (typeof match.log === "function") {
        partialLogger = match;
        match = anyTagged;
      }
      var snapshotPlugin = this.find(SnapshotPlugin);
      if (!snapshotPlugin) {
        this.warnOnce(console, "Snapshotting is not enabled.");
        return;
      }
      var snapshot = snapshotPlugin.snapshotAll();
      var matched = Array.from(snapshot.observables.values()).filter(function(observableSnapshot) {
        return matches(observableSnapshot.observable, match);
      });
      var logger = toLogger(partialLogger || this.defaultLogger_);
      var maxLogged_ = this.maxLogged_;
      var notLogged = matched.length > maxLogged_ ? matched.length - maxLogged_ : 0;
      if (notLogged) {
        matched.splice(maxLogged_, notLogged);
      }
      snapshot.mapStackTraces(matched).subscribe(function() {
        logger.group("".concat(matched.length + notLogged, " snapshot(s) matching ").concat(toString(match)));
        var observableGroupMethod = matched.length > 3 ? "groupCollapsed" : "group";
        matched.forEach(function(observableSnapshot) {
          logger[observableGroupMethod].call(logger, observableSnapshot.tag ? "Tag = ".concat(observableSnapshot.tag) : "Type = ".concat(observableSnapshot.type));
          logger.log("Path =", observableSnapshot.path);
          var subscriptions = observableSnapshot.subscriptions;
          var subscriberGroupMethod = subscriptions.size > 3 ? "groupCollapsed" : "group";
          logger.group("".concat(subscriptions.size, " subscriber(s)"));
          subscriptions.forEach(function(subscriptionSnapshot) {
            var subscriberSnapshot = snapshot.subscribers.get(subscriptionSnapshot.subscriber);
            if (subscriberSnapshot) {
              var values = subscriberSnapshot.values, valuesFlushed = subscriberSnapshot.valuesFlushed;
              logger[subscriberGroupMethod].call(logger, "Subscriber");
              logger.log("Value count =", values.length + valuesFlushed);
              if (values.length > 0) {
                logger.log("Last value =", values[values.length - 1].value);
              }
              logSubscription(logger, subscriptionSnapshot);
              var otherSubscriptions = Array.from(subscriberSnapshot.subscriptions.values()).filter(function(otherSubscriptionSnapshot) {
                return otherSubscriptionSnapshot !== subscriptionSnapshot;
              });
              otherSubscriptions.forEach(function(otherSubscriptionSnapshot) {
                logger.groupCollapsed("Other subscription");
                logSubscription(logger, otherSubscriptionSnapshot);
                logger.groupEnd();
              });
              logger.groupEnd();
            } else {
              logger.warn("Cannot find subscriber snapshot");
            }
          });
          logger.groupEnd();
          logger.groupEnd();
        });
        if (notLogged) {
          logger.log("... another ".concat(notLogged, " snapshot(s) not logged."));
        }
        logger.groupEnd();
      });
    }
  }, {
    key: "stats",
    value: function stats(partialLogger) {
      var statsPlugin = this.find(StatsPlugin);
      if (!statsPlugin) {
        this.warnOnce(console, "Stats are not enabled.");
        return;
      }
      var stats2 = statsPlugin.stats;
      var leafSubscribes = stats2.leafSubscribes, maxDepth = stats2.maxDepth, flattenedSubscribes = stats2.flattenedSubscribes, rootSubscribes = stats2.rootSubscribes, totalDepth = stats2.totalDepth;
      var logger = toLogger(partialLogger || this.defaultLogger_);
      logger.group("Stats");
      logger.log("Subscribes =", stats2.subscribes);
      if (rootSubscribes > 0) {
        logger.log("Root subscribes =", rootSubscribes);
      }
      if (leafSubscribes > 0) {
        logger.log("Leaf subscribes =", leafSubscribes);
      }
      if (flattenedSubscribes > 0) {
        logger.log("Flattened subscribes =", flattenedSubscribes);
      }
      logger.log("Unsubscribes =", stats2.unsubscribes);
      logger.log("Nexts =", stats2.nexts);
      logger.log("Errors =", stats2.errors);
      logger.log("Completes =", stats2.completes);
      if (maxDepth > 0) {
        logger.log("Max. depth =", maxDepth);
        logger.log("Avg. depth =", (totalDepth / leafSubscribes).toFixed(1));
      }
      logger.log("Tick =", stats2.tick);
      logger.log("Timespan =", stats2.timespan);
      logger.groupEnd();
    }
  }, {
    key: "teardown",
    value: function teardown() {
      if (this.teardown_) {
        this.teardown_();
        this.teardown_ = void 0;
      }
    }
  }, {
    key: "unplug",
    value: function unplug() {
      var _this4 = this;
      for (var _len4 = arguments.length, plugins = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        plugins[_key4] = arguments[_key4];
      }
      plugins.forEach(function(plugin) {
        plugin.teardown();
        _this4.plugins_ = _this4.plugins_.filter(function(p) {
          return p !== plugin;
        });
        _this4.pluginsSubject_.next(_this4.plugins_);
        _this4.undos_ = _this4.undos_.filter(function(u) {
          return u !== plugin;
        });
      });
    }
    /** @deprecated Use warnOnce */
  }, {
    key: "warn",
    value: function warn(logger, message) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        args[_key5 - 2] = arguments[_key5];
      }
      this.warnOnce.apply(this, [logger, message].concat(args));
    }
  }, {
    key: "warnOnce",
    value: function warnOnce(logger, message) {
      if (!this.warned_[message]) {
        var _toLogger;
        for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
          args[_key6 - 2] = arguments[_key6];
        }
        (_toLogger = toLogger(logger)).warn.apply(_toLogger, [message].concat(args));
        this.warned_[message] = true;
      }
    }
    /*tslint:disable-next-line:member-ordering*/
  }, {
    key: "detect_",
    value: function detect_(id, detector) {
      var auditor_ = this.auditor_, defaultLogger_ = this.defaultLogger_;
      auditor_.audit(id, function(ignored) {
        var detected = detector.detect(id);
        var logger = toLogger(defaultLogger_);
        if (detected) {
          var audit = ignored === 0 ? "" : "; ignored ".concat(ignored);
          logger.group("Subscription changes detected; id = '".concat(id, "'").concat(audit));
          detected.subscriptions.forEach(function(s) {
            logSubscription2(logger, "Subscription", s);
          });
          detected.unsubscriptions.forEach(function(s) {
            logSubscription2(logger, "Unsubscription", s);
          });
          detected.flatteningSubscriptions.forEach(function(s) {
            logSubscription2(logger, "Flattening subscription", s);
          });
          detected.flatteningUnsubscriptions.forEach(function(s) {
            logSubscription2(logger, "Flattening unsubscription", s);
          });
          logger.groupEnd();
        }
        function logSubscription2(logger2, name, subscription) {
          logger2.group(name);
          logger2.log("Root subscribe", subscription.rootSink ? subscription.rootSink.stackTrace : subscription.stackTrace);
          logger2.log("Subscribe", subscription.stackTrace);
          logger2.groupEnd();
        }
      });
    }
  }], [{
    key: "coreSubscribe_",
    value: function coreSubscribe_() {
      var observable3 = this;
      var spy_ = SpyCore2.spy_;
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      if (!spy_) {
        return observableSubscribe.apply(observable3, args);
      }
      if (hidden(observable3)) {
        SpyCore2.spy_ = void 0;
        try {
          return observableSubscribe.apply(observable3, args);
        } finally {
          SpyCore2.spy_ = spy_;
        }
      }
      var notify_ = function notify_2(before, block, after) {
        ++spy_.tick_;
        spy_.plugins_.forEach(before);
        block();
        spy_.plugins_.forEach(after);
      };
      var subscriber = toSubscriber.apply(void 0, args);
      var ref = {
        observable: observable3,
        subscriber,
        subscription: new Subscription(),
        timestamp: Date.now(),
        unsubscribed: false
      };
      identify(observable3);
      identify(subscriber);
      identify(ref);
      var subscriberUnsubscribe = subscriber.unsubscribe;
      subscriber.unsubscribe = function() {
        if (!subscriber.closed) {
          notify_(function(plugin) {
            return plugin.beforeUnsubscribe(ref);
          }, function() {
            ref.subscription.unsubscribe();
            ref.unsubscribed = true;
            subscriberUnsubscribe.call(subscriber);
          }, function(plugin) {
            return plugin.afterUnsubscribe(ref);
          });
        } else {
          subscriberUnsubscribe.call(subscriber);
        }
      };
      var postSelectObserver = {
        complete: function complete() {
          notify_(function(plugin) {
            return plugin.beforeComplete(ref);
          }, function() {
            return subscriber.complete();
          }, function(plugin) {
            return plugin.afterComplete(ref);
          });
        },
        error: function error(_error) {
          notify_(function(plugin) {
            return plugin.beforeError(ref, _error);
          }, function() {
            return subscriber.error(_error);
          }, function(plugin) {
            return plugin.afterError(ref, _error);
          });
        },
        next: function next(value) {
          notify_(function(plugin) {
            return plugin.beforeNext(ref, value);
          }, function() {
            return subscriber.next(value);
          }, function(plugin) {
            return plugin.afterNext(ref, value);
          });
        }
      };
      var preSelectObserver = {
        complete: function complete() {
          this.completed = true;
          if (this.preSelectSubject) {
            this.preSelectSubject.complete();
          } else {
            this.postSelectObserver.complete();
          }
        },
        completed: false,
        error: function error(_error2) {
          this.errored = true;
          if (this.preSelectSubject) {
            this.preSelectSubject.error(_error2);
          } else {
            this.postSelectObserver.error(_error2);
          }
        },
        errored: false,
        "let": function _let(plugins) {
          var selectors = plugins.map(function(plugin) {
            return plugin.select(ref);
          }).filter(Boolean);
          if (selectors.length > 0) {
            if (!this.preSelectSubject) {
              this.preSelectSubject = new Subject();
            }
            if (this.postSelectSubscription) {
              this.postSelectSubscription.unsubscribe();
            }
            var _source = this.preSelectSubject.asObservable();
            selectors.forEach(function(selector) {
              return _source = selector(_source);
            });
            this.postSelectSubscription = _source.pipe(hide()).subscribe(postSelectObserver);
          } else if (this.postSelectSubscription) {
            this.postSelectSubscription.unsubscribe();
            this.postSelectSubscription = void 0;
            this.preSelectSubject = void 0;
          }
        },
        next: function next(value) {
          if (this.preSelectSubject) {
            this.preSelectSubject.next(value);
          } else {
            this.postSelectObserver.next(value);
          }
        },
        postSelectObserver,
        postSelectSubscription: void 0,
        preSelectSubject: void 0,
        unsubscribe: function unsubscribe() {
          if (!this.unsubscribed) {
            this.unsubscribed = true;
            if (!this.completed && !this.errored) {
              if (this.postSelectSubscription) {
                this.postSelectSubscription.unsubscribe();
                this.postSelectSubscription = void 0;
              }
            }
          }
        },
        unsubscribed: false
      };
      subscriber.add(spy_.pluginsSubject_.pipe(hide()).subscribe({
        next: function next(plugins) {
          return preSelectObserver["let"](plugins);
        }
      }));
      notify_(function(plugin) {
        return plugin.beforeSubscribe(ref);
      }, function() {
        subscriber.add(observableSubscribe.call(observable3, preSelectObserver));
        subscriber.add(function() {
          return preSelectObserver.unsubscribe();
        });
      }, function(plugin) {
        return plugin.afterSubscribe(ref);
      });
      return subscriber;
    }
  }]);
  return SpyCore2;
}();
_defineProperty(SpyCore, "spy_", void 0);
function logStackTrace(logger, subscriptionSnapshot) {
  var mappedStackTrace = subscriptionSnapshot.mappedStackTrace, rootSink = subscriptionSnapshot.rootSink;
  var mapped = rootSink ? rootSink.mappedStackTrace : mappedStackTrace;
  mapped.subscribe(function(stackTrace) {
    return logger.log("Root subscribe", stackTrace);
  });
}
function logSubscription(logger, subscriptionSnapshot) {
  var complete = subscriptionSnapshot.complete, error = subscriptionSnapshot.error, unsubscribed = subscriptionSnapshot.unsubscribed;
  logger.log("State =", complete ? "complete" : error ? "error" : "incomplete");
  if (error) {
    logger.error("Error =", error);
  }
  if (unsubscribed) {
    logger.log("Unsubscribed =", true);
  }
  logStackTrace(logger, subscriptionSnapshot);
}
function create() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return new SpyCore(options);
}

// node_modules/rxjs-spy/esm/operators/index.js
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  return Constructor;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function tag(tag2) {
  return function tagOperation(source) {
    return source.lift(new TagOperator(tag2));
  };
}
var TagOperator = /* @__PURE__ */ function() {
  function TagOperator2(tag2) {
    _classCallCheck2(this, TagOperator2);
    _defineProperty2(this, "tag", void 0);
    this.tag = tag2;
  }
  _createClass2(TagOperator2, [{
    key: "call",
    value: function call(subscriber, source) {
      return source.subscribe(subscriber);
    }
  }]);
  return TagOperator2;
}();

// progvm.ts
var BaseSpeed = 5e-3;
var SpeedMultiplier = 2;
var ProgVm = class {
  #name;
  #setName;
  get name() {
    return this.#name;
  }
  #percent;
  #setPercent;
  get percent() {
    return this.#percent;
  }
  #roundPercent;
  get roundPercent() {
    return this.#roundPercent;
  }
  #paused;
  #setPaused;
  get paused() {
    return this.#paused;
  }
  #perTick;
  #setPerTick;
  get perTick() {
    return this.#perTick;
  }
  constructor() {
    ;
    [this.#name, this.#setName] = butterfly("Item");
    [this.#percent, this.#setPercent] = butterfly(0);
    [this.#paused, this.#setPaused] = butterfly(false);
    [this.#perTick, this.#setPerTick] = butterfly(BaseSpeed);
    this.#roundPercent = this.percent.pipe(
      map((percent) => percent.toLocaleString(void 0, { style: "percent" }))
    );
  }
  pause() {
    this.#setPaused(true);
  }
  unpause() {
    this.#setPaused(false);
  }
  speedUp() {
    this.#setPerTick((perTick) => perTick * SpeedMultiplier);
  }
  slowDown() {
    this.#setPerTick((perTick) => perTick / SpeedMultiplier);
  }
  async tick() {
    const paused = await firstValueFrom(this.paused);
    const perTick = paused ? 0 : await firstValueFrom(this.perTick);
    this.#setPercent((percent) => percent + perTick);
  }
  finish() {
    this.#setPercent(1);
  }
};

// compradprogvm.ts
var CompRadProgVm = class {
  // *** Experiment modification fields ***
  minBar = 1;
  maxGrowthPerTick = 90;
  maxCatchPerTick = 15;
  catchSpinRate = 2;
  growthSpinRate = 1;
  spinTicks = 2;
  spinRate = 1;
  // Internal counter during ticks
  #spinTickCount = 0;
  #subscription = new Subscription();
  // *** Butterflies and observables ***
  #progressAdded;
  #addProgress;
  get progressAdded() {
    return this.#progressAdded;
  }
  #inprogress = [];
  get progressCount() {
    return this.#inprogress.length;
  }
  get pausedStatus() {
    return combineLatest(this.#inprogress.map((prog) => prog.paused));
  }
  #targetPercent;
  get targetPercent() {
    return this.#targetPercent;
  }
  #targetRoundPercent;
  get targetRoundPercent() {
    return this.#targetRoundPercent;
  }
  #targetVal;
  get targetVal() {
    return this.#targetVal;
  }
  #currentVal;
  get currentVal() {
    return this.#currentVal;
  }
  #currentOffset;
  get currentOffset() {
    return this.#currentOffset;
  }
  constructor(dial, ticks) {
    ;
    [this.#progressAdded, this.#addProgress] = butterfly(null);
    this.#targetPercent = this.progressAdded.pipe(
      filter((progress) => progress !== null),
      map((progress) => progress.percent),
      combineLatestAll(),
      map(
        (progresses) => progresses.reduce((a, b) => a + b) / progresses.length
      ),
      shareReplay(1)
    );
    this.#targetRoundPercent = this.targetPercent.pipe(
      map((target) => target.toLocaleString(void 0, { style: "percent" }))
    );
    this.#targetVal = this.targetPercent.pipe(
      map((target) => Math.round(target * 360))
    );
    const current = concat(
      of([0, 0]),
      (ticks ?? interval(500)).pipe(
        concatMap(
          () => Promise.all(this.#inprogress.map((item) => item.tick()))
        ),
        withLatestFrom(this.targetVal),
        scan(
          ([currentVal, currentOffset], [, targetVal]) => this.#onTick(currentVal, currentOffset, targetVal),
          [0, 0]
        ),
        shareReplay(1)
      )
    );
    this.#currentVal = current.pipe(map(([currentVal]) => currentVal));
    this.#currentOffset = current.pipe(
      map(([, currentOffset]) => currentOffset)
    );
    if (dial) {
      this.#subscription.add(
        this.currentVal.subscribe(
          (currentVal) => dial.val(currentVal).trigger("change")
        )
      );
      this.#subscription.add(
        this.currentOffset.subscribe(
          (currentOffset) => dial.trigger("configure", { angleOffset: currentOffset })
        )
      );
    } else {
      console.warn("Unable to subscribe jQuery Knob dial to progress changes");
    }
  }
  pauseAll() {
    this.#inprogress.forEach((item) => item.pause());
  }
  unpauseAll() {
    this.#inprogress.forEach((item) => item.unpause());
  }
  addItem() {
    const progress = new ProgVm();
    this.#addProgress(progress);
    this.#inprogress.unshift(new ProgVm());
  }
  #onTick(currentVal, currentOffset, targetVal) {
    if (currentVal < this.minBar) {
      currentVal = this.minBar;
    }
    if (targetVal > currentVal) {
      const diff = Math.min(targetVal - currentVal, this.maxGrowthPerTick);
      currentVal += diff;
      if (this.growthSpinRate) {
        currentOffset += this.growthSpinRate;
      }
      this.#spinTickCount = 0;
    } else if (targetVal < currentVal && currentVal > this.minBar) {
      const diff = Math.min(currentVal - targetVal, this.maxCatchPerTick);
      currentVal = Math.max(currentVal - diff, this.minBar);
      const offset = (currentOffset + diff + this.catchSpinRate) % 360;
      currentOffset = offset;
      this.#spinTickCount = 0;
    } else if (currentVal < 360) {
      this.#spinTickCount++;
      if (this.#spinTickCount == this.spinTicks) {
        currentOffset = (currentOffset + this.spinRate) % 360;
        this.#spinTickCount = 0;
      }
    } else if (currentVal == 360 && currentOffset != 0) {
      currentOffset = 0;
    }
    return [currentVal, currentOffset];
  }
  unsubscribe() {
    this.#subscription.unsubscribe();
  }
};

// progress.tsx
function Progress({ item }, { bindEffect, events }) {
  const { finish, pause, slowDown, speedUp, unpause } = events;
  const progressStyle = item.roundPercent.pipe(
    map((percent) => `min-width: 2em; width: ${percent}`)
  );
  const pauseVisible = item.paused.pipe(
    map((paused) => paused ? `visibility: hidden` : `visibility: visible`)
  );
  const unpauseVisible = item.paused.pipe(
    map((paused) => paused ? `visibility: visible` : `visibility: hidden`)
  );
  bindEffect(finish, item.finish);
  bindEffect(pause, item.pause);
  bindEffect(slowDown, item.slowDown);
  bindEffect(speedUp, item.speedUp);
  bindEffect(unpause, item.unpause);
  return /* @__PURE__ */ jsx("div", { className: "list-group-item" }, /* @__PURE__ */ jsx("div", { className: "progress" }, /* @__PURE__ */ jsx(
    "div",
    {
      title: "Item Progress",
      className: "progress-bar",
      role: "progressbar",
      style: "min-width: 2em",
      bind: { innerText: item.roundPercent, style: progressStyle }
    }
  )), /* @__PURE__ */ jsx("div", { className: "btn-group" }, /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      title: "Pause",
      className: "btn btn-default",
      bind: { style: pauseVisible },
      events: { click: pause }
    },
    /* @__PURE__ */ jsx("span", { className: "glyphicon glyphicon-pause" })
  ), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      title: "Unpause",
      className: "btn btn-default",
      bind: { style: unpauseVisible },
      events: { click: unpause }
    },
    /* @__PURE__ */ jsx("span", { class: "glyphicon glyphicon-play" })
  ), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      title: "Slow Down",
      className: "btn btn-default",
      events: { click: slowDown }
    },
    /* @__PURE__ */ jsx("span", { class: "glyphicon glyphicon-backward" })
  ), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      title: "Speed Up",
      className: "btn btn-default",
      events: { click: speedUp }
    },
    /* @__PURE__ */ jsx("span", { class: "glyphicon glyphicon-forward" })
  ), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      title: "Finish",
      className: "btn btn-default",
      events: { click: finish }
    },
    /* @__PURE__ */ jsx("span", { class: "glyphicon glyphicon-fast-forward" })
  )));
}

// main.tsx
var spy = create();
spy.log(/./);
var w = window;
w.jQuery = w.$ = import_jquery.default;
await Promise.resolve().then(() => __toESM(require_jquery_knob_min(), 1));
function Main(_props, { bindEffect, events }) {
  const { addItem, pauseAll, unpauseAll } = events;
  const bfDomAttach = events.attach;
  const vm = bfDomAttach.pipe(
    switchMap((element) => {
      return new Observable((subscriber) => {
        element.dataset.min = "0";
        element.dataset.max = "360";
        element.dataset.readOnly = "true";
        element.dataset.displayInput = "false";
        const dial = (0, import_jquery.default)(element);
        dial.knob();
        const vm2 = new CompRadProgVm(dial, interval(500));
        subscriber.next(vm2);
        return () => vm2.unsubscribe();
      });
    }),
    tag("vm"),
    shareReplay(1)
  );
  const targetRoundPercent = vm.pipe(
    switchMap((vm2) => vm2.targetRoundPercent),
    tag("target-percent"),
    shareReplay(1)
  );
  const progressStyle = targetRoundPercent.pipe(
    map((targetRoundPercent2) => `min-width: 2em; width: ${targetRoundPercent2}`),
    tag("progress-style")
  );
  bindEffect(
    addItem.pipe(withLatestFrom(vm), tag("add-item")),
    ([, vm2]) => vm2.addItem()
  );
  bindEffect(
    pauseAll.pipe(withLatestFrom(vm), tag("pause-all")),
    ([, vm2]) => vm2.unpauseAll()
  );
  bindEffect(
    unpauseAll.pipe(withLatestFrom(vm), tag("unpause-all")),
    ([, vm2]) => vm2.unpauseAll()
  );
  const children = vm.pipe(
    switchMap((vm2) => vm2.progressAdded),
    filter((progVm) => progVm !== null),
    map((progVm) => () => /* @__PURE__ */ jsx(Progress, { item: progVm })),
    tag("children")
  );
  return /* @__PURE__ */ jsx("div", { className: "row" }, /* @__PURE__ */ jsx("div", { className: "col-md-6" }, /* @__PURE__ */ jsx(
    "input",
    {
      type: "text",
      id: "dial",
      className: "dial",
      value: "0",
      events: { bfDomAttach }
    }
  ), /* @__PURE__ */ jsx("label", { htmlFor: "dial", className: "hidden" }, "Total Progress")), /* @__PURE__ */ jsx("div", { className: "col-md-6" }, /* @__PURE__ */ jsx("div", { className: "progress" }, /* @__PURE__ */ jsx(
    "div",
    {
      className: "progress-bar",
      role: "progressbar",
      style: "min-width: 2em",
      bind: { innerText: targetRoundPercent, style: progressStyle }
    }
  )), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "btn btn-default",
      events: { click: addItem }
    },
    /* @__PURE__ */ jsx("span", { className: "glyphicon glyphicon-plus" }),
    " Add Item"
  ), /* @__PURE__ */ jsx("div", { className: "btn-group" }, /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "btn btn-default",
      events: { click: pauseAll }
    },
    /* @__PURE__ */ jsx("span", { className: "glyphicon glyphicon-pause" }),
    " All"
  ), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "btn btn-default",
      events: { click: unpauseAll }
    },
    /* @__PURE__ */ jsx("span", { className: "glyphicon glyphicon-play" }),
    " All"
  )), /* @__PURE__ */ jsx("div", { className: "list-group", childrenBind: children, childrenPrepend: true })));
}
var container = document.getElementById("container");
run(container, Main, {
  isStaticComponent: true,
  isStaticTree: true,
  preserveOnComplete: true
});
/*! Bundled license information:

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

rxjs-spy/esm/index.js:
  (**
   * @license Use of this source code is governed by an MIT-style license that
   * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
   *)

rxjs-spy/esm/index.js:
  (**
   * @license Use of this source code is governed by an MIT-style license that
   * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
   *)

rxjs-spy/esm/operators/index.js:
  (**
   * @license Use of this source code is governed by an MIT-style license that
   * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
   *)

rxjs-spy/esm/operators/index.js:
  (**
   * @license Use of this source code is governed by an MIT-style license that
   * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
   *)
*/
