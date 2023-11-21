import {
  ProgVm,
  Subscription,
  __commonJS,
  __toESM,
  butterfly,
  combineLatest,
  combineLatestAll,
  filter,
  map,
  require_Notification,
  require_NotificationFactories,
  require_Observable,
  require_Subject,
  require_Subscription,
  require_VirtualTimeScheduler,
  require_animationFrameProvider,
  require_cjs,
  require_dateTimestampProvider,
  require_immediateProvider,
  require_intervalProvider,
  require_performanceTimestampProvider,
  require_timeoutProvider,
  shareReplay
} from "./chunk-33WHBTN2.js";

// node_modules/rxjs/dist/cjs/internal/testing/SubscriptionLog.js
var require_SubscriptionLog = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/testing/SubscriptionLog.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionLog = void 0;
    var SubscriptionLog = function() {
      function SubscriptionLog2(subscribedFrame, unsubscribedFrame) {
        if (unsubscribedFrame === void 0) {
          unsubscribedFrame = Infinity;
        }
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
      }
      return SubscriptionLog2;
    }();
    exports.SubscriptionLog = SubscriptionLog;
  }
});

// node_modules/rxjs/dist/cjs/internal/testing/SubscriptionLoggable.js
var require_SubscriptionLoggable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/testing/SubscriptionLoggable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionLoggable = void 0;
    var SubscriptionLog_1 = require_SubscriptionLog();
    var SubscriptionLoggable = function() {
      function SubscriptionLoggable2() {
        this.subscriptions = [];
      }
      SubscriptionLoggable2.prototype.logSubscribedFrame = function() {
        this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
        return this.subscriptions.length - 1;
      };
      SubscriptionLoggable2.prototype.logUnsubscribedFrame = function(index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
      };
      return SubscriptionLoggable2;
    }();
    exports.SubscriptionLoggable = SubscriptionLoggable;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/applyMixins.js
var require_applyMixins = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/applyMixins.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.applyMixins = void 0;
    function applyMixins(derivedCtor, baseCtors) {
      for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
          var name_1 = propertyKeys[j];
          derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
      }
    }
    exports.applyMixins = applyMixins;
  }
});

// node_modules/rxjs/dist/cjs/internal/testing/ColdObservable.js
var require_ColdObservable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/testing/ColdObservable.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
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
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColdObservable = void 0;
    var Observable_1 = require_Observable();
    var Subscription_1 = require_Subscription();
    var SubscriptionLoggable_1 = require_SubscriptionLoggable();
    var applyMixins_1 = require_applyMixins();
    var Notification_1 = require_Notification();
    var ColdObservable = function(_super) {
      __extends(ColdObservable2, _super);
      function ColdObservable2(messages, scheduler) {
        var _this = _super.call(this, function(subscriber) {
          var observable = this;
          var index = observable.logSubscribedFrame();
          var subscription = new Subscription_1.Subscription();
          subscription.add(new Subscription_1.Subscription(function() {
            observable.logUnsubscribedFrame(index);
          }));
          observable.scheduleMessages(subscriber);
          return subscription;
        }) || this;
        _this.messages = messages;
        _this.subscriptions = [];
        _this.scheduler = scheduler;
        return _this;
      }
      ColdObservable2.prototype.scheduleMessages = function(subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
          var message = this.messages[i];
          subscriber.add(this.scheduler.schedule(function(state) {
            var _a = state, notification = _a.message.notification, destination = _a.subscriber;
            Notification_1.observeNotification(notification, destination);
          }, message.frame, { message, subscriber }));
        }
      };
      return ColdObservable2;
    }(Observable_1.Observable);
    exports.ColdObservable = ColdObservable;
    applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
  }
});

// node_modules/rxjs/dist/cjs/internal/testing/HotObservable.js
var require_HotObservable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/testing/HotObservable.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
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
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HotObservable = void 0;
    var Subject_1 = require_Subject();
    var Subscription_1 = require_Subscription();
    var SubscriptionLoggable_1 = require_SubscriptionLoggable();
    var applyMixins_1 = require_applyMixins();
    var Notification_1 = require_Notification();
    var HotObservable = function(_super) {
      __extends(HotObservable2, _super);
      function HotObservable2(messages, scheduler) {
        var _this = _super.call(this) || this;
        _this.messages = messages;
        _this.subscriptions = [];
        _this.scheduler = scheduler;
        return _this;
      }
      HotObservable2.prototype._subscribe = function(subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        var subscription = new Subscription_1.Subscription();
        subscription.add(new Subscription_1.Subscription(function() {
          subject.logUnsubscribedFrame(index);
        }));
        subscription.add(_super.prototype._subscribe.call(this, subscriber));
        return subscription;
      };
      HotObservable2.prototype.setup = function() {
        var subject = this;
        var messagesLength = subject.messages.length;
        var _loop_1 = function(i2) {
          (function() {
            var _a = subject.messages[i2], notification = _a.notification, frame = _a.frame;
            subject.scheduler.schedule(function() {
              Notification_1.observeNotification(notification, subject);
            }, frame);
          })();
        };
        for (var i = 0; i < messagesLength; i++) {
          _loop_1(i);
        }
      };
      return HotObservable2;
    }(Subject_1.Subject);
    exports.HotObservable = HotObservable;
    applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
  }
});

// node_modules/rxjs/dist/cjs/internal/testing/TestScheduler.js
var require_TestScheduler = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/testing/TestScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
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
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __read = exports && exports.__read || function(o, n) {
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
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    var __values = exports && exports.__values || function(o) {
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
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TestScheduler = void 0;
    var Observable_1 = require_Observable();
    var ColdObservable_1 = require_ColdObservable();
    var HotObservable_1 = require_HotObservable();
    var SubscriptionLog_1 = require_SubscriptionLog();
    var VirtualTimeScheduler_1 = require_VirtualTimeScheduler();
    var NotificationFactories_1 = require_NotificationFactories();
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var performanceTimestampProvider_1 = require_performanceTimestampProvider();
    var animationFrameProvider_1 = require_animationFrameProvider();
    var immediateProvider_1 = require_immediateProvider();
    var intervalProvider_1 = require_intervalProvider();
    var timeoutProvider_1 = require_timeoutProvider();
    var defaultMaxFrame = 750;
    var TestScheduler2 = function(_super) {
      __extends(TestScheduler3, _super);
      function TestScheduler3(assertDeepEqual) {
        var _this = _super.call(this, VirtualTimeScheduler_1.VirtualAction, defaultMaxFrame) || this;
        _this.assertDeepEqual = assertDeepEqual;
        _this.hotObservables = [];
        _this.coldObservables = [];
        _this.flushTests = [];
        _this.runMode = false;
        return _this;
      }
      TestScheduler3.prototype.createTime = function(marbles) {
        var indexOf = this.runMode ? marbles.trim().indexOf("|") : marbles.indexOf("|");
        if (indexOf === -1) {
          throw new Error('marble diagram for time should have a completion marker "|"');
        }
        return indexOf * TestScheduler3.frameTimeFactor;
      };
      TestScheduler3.prototype.createColdObservable = function(marbles, values, error) {
        if (marbles.indexOf("^") !== -1) {
          throw new Error('cold observable cannot have subscription offset "^"');
        }
        if (marbles.indexOf("!") !== -1) {
          throw new Error('cold observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler3.parseMarbles(marbles, values, error, void 0, this.runMode);
        var cold = new ColdObservable_1.ColdObservable(messages, this);
        this.coldObservables.push(cold);
        return cold;
      };
      TestScheduler3.prototype.createHotObservable = function(marbles, values, error) {
        if (marbles.indexOf("!") !== -1) {
          throw new Error('hot observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler3.parseMarbles(marbles, values, error, void 0, this.runMode);
        var subject = new HotObservable_1.HotObservable(messages, this);
        this.hotObservables.push(subject);
        return subject;
      };
      TestScheduler3.prototype.materializeInnerObservable = function(observable, outerFrame) {
        var _this = this;
        var messages = [];
        observable.subscribe({
          next: function(value) {
            messages.push({ frame: _this.frame - outerFrame, notification: NotificationFactories_1.nextNotification(value) });
          },
          error: function(error) {
            messages.push({ frame: _this.frame - outerFrame, notification: NotificationFactories_1.errorNotification(error) });
          },
          complete: function() {
            messages.push({ frame: _this.frame - outerFrame, notification: NotificationFactories_1.COMPLETE_NOTIFICATION });
          }
        });
        return messages;
      };
      TestScheduler3.prototype.expectObservable = function(observable, subscriptionMarbles) {
        var _this = this;
        if (subscriptionMarbles === void 0) {
          subscriptionMarbles = null;
        }
        var actual = [];
        var flushTest = { actual, ready: false };
        var subscriptionParsed = TestScheduler3.parseMarblesAsSubscriptions(subscriptionMarbles, this.runMode);
        var subscriptionFrame = subscriptionParsed.subscribedFrame === Infinity ? 0 : subscriptionParsed.subscribedFrame;
        var unsubscriptionFrame = subscriptionParsed.unsubscribedFrame;
        var subscription;
        this.schedule(function() {
          subscription = observable.subscribe({
            next: function(x) {
              var value = x instanceof Observable_1.Observable ? _this.materializeInnerObservable(x, _this.frame) : x;
              actual.push({ frame: _this.frame, notification: NotificationFactories_1.nextNotification(value) });
            },
            error: function(error) {
              actual.push({ frame: _this.frame, notification: NotificationFactories_1.errorNotification(error) });
            },
            complete: function() {
              actual.push({ frame: _this.frame, notification: NotificationFactories_1.COMPLETE_NOTIFICATION });
            }
          });
        }, subscriptionFrame);
        if (unsubscriptionFrame !== Infinity) {
          this.schedule(function() {
            return subscription.unsubscribe();
          }, unsubscriptionFrame);
        }
        this.flushTests.push(flushTest);
        var runMode = this.runMode;
        return {
          toBe: function(marbles, values, errorValue) {
            flushTest.ready = true;
            flushTest.expected = TestScheduler3.parseMarbles(marbles, values, errorValue, true, runMode);
          },
          toEqual: function(other) {
            flushTest.ready = true;
            flushTest.expected = [];
            _this.schedule(function() {
              subscription = other.subscribe({
                next: function(x) {
                  var value = x instanceof Observable_1.Observable ? _this.materializeInnerObservable(x, _this.frame) : x;
                  flushTest.expected.push({ frame: _this.frame, notification: NotificationFactories_1.nextNotification(value) });
                },
                error: function(error) {
                  flushTest.expected.push({ frame: _this.frame, notification: NotificationFactories_1.errorNotification(error) });
                },
                complete: function() {
                  flushTest.expected.push({ frame: _this.frame, notification: NotificationFactories_1.COMPLETE_NOTIFICATION });
                }
              });
            }, subscriptionFrame);
          }
        };
      };
      TestScheduler3.prototype.expectSubscriptions = function(actualSubscriptionLogs) {
        var flushTest = { actual: actualSubscriptionLogs, ready: false };
        this.flushTests.push(flushTest);
        var runMode = this.runMode;
        return {
          toBe: function(marblesOrMarblesArray) {
            var marblesArray = typeof marblesOrMarblesArray === "string" ? [marblesOrMarblesArray] : marblesOrMarblesArray;
            flushTest.ready = true;
            flushTest.expected = marblesArray.map(function(marbles) {
              return TestScheduler3.parseMarblesAsSubscriptions(marbles, runMode);
            }).filter(function(marbles) {
              return marbles.subscribedFrame !== Infinity;
            });
          }
        };
      };
      TestScheduler3.prototype.flush = function() {
        var _this = this;
        var hotObservables = this.hotObservables;
        while (hotObservables.length > 0) {
          hotObservables.shift().setup();
        }
        _super.prototype.flush.call(this);
        this.flushTests = this.flushTests.filter(function(test) {
          if (test.ready) {
            _this.assertDeepEqual(test.actual, test.expected);
            return false;
          }
          return true;
        });
      };
      TestScheduler3.parseMarblesAsSubscriptions = function(marbles, runMode) {
        var _this = this;
        if (runMode === void 0) {
          runMode = false;
        }
        if (typeof marbles !== "string") {
          return new SubscriptionLog_1.SubscriptionLog(Infinity);
        }
        var characters = __spreadArray([], __read(marbles));
        var len = characters.length;
        var groupStart = -1;
        var subscriptionFrame = Infinity;
        var unsubscriptionFrame = Infinity;
        var frame = 0;
        var _loop_1 = function(i2) {
          var nextFrame = frame;
          var advanceFrameBy = function(count) {
            nextFrame += count * _this.frameTimeFactor;
          };
          var c = characters[i2];
          switch (c) {
            case " ":
              if (!runMode) {
                advanceFrameBy(1);
              }
              break;
            case "-":
              advanceFrameBy(1);
              break;
            case "(":
              groupStart = frame;
              advanceFrameBy(1);
              break;
            case ")":
              groupStart = -1;
              advanceFrameBy(1);
              break;
            case "^":
              if (subscriptionFrame !== Infinity) {
                throw new Error("found a second subscription point '^' in a subscription marble diagram. There can only be one.");
              }
              subscriptionFrame = groupStart > -1 ? groupStart : frame;
              advanceFrameBy(1);
              break;
            case "!":
              if (unsubscriptionFrame !== Infinity) {
                throw new Error("found a second unsubscription point '!' in a subscription marble diagram. There can only be one.");
              }
              unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
              break;
            default:
              if (runMode && c.match(/^[0-9]$/)) {
                if (i2 === 0 || characters[i2 - 1] === " ") {
                  var buffer = characters.slice(i2).join("");
                  var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                  if (match) {
                    i2 += match[0].length - 1;
                    var duration = parseFloat(match[1]);
                    var unit = match[2];
                    var durationInMs = void 0;
                    switch (unit) {
                      case "ms":
                        durationInMs = duration;
                        break;
                      case "s":
                        durationInMs = duration * 1e3;
                        break;
                      case "m":
                        durationInMs = duration * 1e3 * 60;
                        break;
                      default:
                        break;
                    }
                    advanceFrameBy(durationInMs / this_1.frameTimeFactor);
                    break;
                  }
                }
              }
              throw new Error("there can only be '^' and '!' markers in a subscription marble diagram. Found instead '" + c + "'.");
          }
          frame = nextFrame;
          out_i_1 = i2;
        };
        var this_1 = this, out_i_1;
        for (var i = 0; i < len; i++) {
          _loop_1(i);
          i = out_i_1;
        }
        if (unsubscriptionFrame < 0) {
          return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame);
        } else {
          return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
        }
      };
      TestScheduler3.parseMarbles = function(marbles, values, errorValue, materializeInnerObservables, runMode) {
        var _this = this;
        if (materializeInnerObservables === void 0) {
          materializeInnerObservables = false;
        }
        if (runMode === void 0) {
          runMode = false;
        }
        if (marbles.indexOf("!") !== -1) {
          throw new Error('conventional marble diagrams cannot have the unsubscription marker "!"');
        }
        var characters = __spreadArray([], __read(marbles));
        var len = characters.length;
        var testMessages = [];
        var subIndex = runMode ? marbles.replace(/^[ ]+/, "").indexOf("^") : marbles.indexOf("^");
        var frame = subIndex === -1 ? 0 : subIndex * -this.frameTimeFactor;
        var getValue = typeof values !== "object" ? function(x) {
          return x;
        } : function(x) {
          if (materializeInnerObservables && values[x] instanceof ColdObservable_1.ColdObservable) {
            return values[x].messages;
          }
          return values[x];
        };
        var groupStart = -1;
        var _loop_2 = function(i2) {
          var nextFrame = frame;
          var advanceFrameBy = function(count) {
            nextFrame += count * _this.frameTimeFactor;
          };
          var notification = void 0;
          var c = characters[i2];
          switch (c) {
            case " ":
              if (!runMode) {
                advanceFrameBy(1);
              }
              break;
            case "-":
              advanceFrameBy(1);
              break;
            case "(":
              groupStart = frame;
              advanceFrameBy(1);
              break;
            case ")":
              groupStart = -1;
              advanceFrameBy(1);
              break;
            case "|":
              notification = NotificationFactories_1.COMPLETE_NOTIFICATION;
              advanceFrameBy(1);
              break;
            case "^":
              advanceFrameBy(1);
              break;
            case "#":
              notification = NotificationFactories_1.errorNotification(errorValue || "error");
              advanceFrameBy(1);
              break;
            default:
              if (runMode && c.match(/^[0-9]$/)) {
                if (i2 === 0 || characters[i2 - 1] === " ") {
                  var buffer = characters.slice(i2).join("");
                  var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                  if (match) {
                    i2 += match[0].length - 1;
                    var duration = parseFloat(match[1]);
                    var unit = match[2];
                    var durationInMs = void 0;
                    switch (unit) {
                      case "ms":
                        durationInMs = duration;
                        break;
                      case "s":
                        durationInMs = duration * 1e3;
                        break;
                      case "m":
                        durationInMs = duration * 1e3 * 60;
                        break;
                      default:
                        break;
                    }
                    advanceFrameBy(durationInMs / this_2.frameTimeFactor);
                    break;
                  }
                }
              }
              notification = NotificationFactories_1.nextNotification(getValue(c));
              advanceFrameBy(1);
              break;
          }
          if (notification) {
            testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification });
          }
          frame = nextFrame;
          out_i_2 = i2;
        };
        var this_2 = this, out_i_2;
        for (var i = 0; i < len; i++) {
          _loop_2(i);
          i = out_i_2;
        }
        return testMessages;
      };
      TestScheduler3.prototype.createAnimator = function() {
        var _this = this;
        if (!this.runMode) {
          throw new Error("animate() must only be used in run mode");
        }
        var lastHandle = 0;
        var map2;
        var delegate = {
          requestAnimationFrame: function(callback) {
            if (!map2) {
              throw new Error("animate() was not called within run()");
            }
            var handle = ++lastHandle;
            map2.set(handle, callback);
            return handle;
          },
          cancelAnimationFrame: function(handle) {
            if (!map2) {
              throw new Error("animate() was not called within run()");
            }
            map2.delete(handle);
          }
        };
        var animate = function(marbles) {
          var e_1, _a;
          if (map2) {
            throw new Error("animate() must not be called more than once within run()");
          }
          if (/[|#]/.test(marbles)) {
            throw new Error("animate() must not complete or error");
          }
          map2 = /* @__PURE__ */ new Map();
          var messages = TestScheduler3.parseMarbles(marbles, void 0, void 0, void 0, true);
          try {
            for (var messages_1 = __values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
              var message = messages_1_1.value;
              _this.schedule(function() {
                var e_2, _a2;
                var now = _this.now();
                var callbacks = Array.from(map2.values());
                map2.clear();
                try {
                  for (var callbacks_1 = (e_2 = void 0, __values(callbacks)), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                    var callback = callbacks_1_1.value;
                    callback(now);
                  }
                } catch (e_2_1) {
                  e_2 = { error: e_2_1 };
                } finally {
                  try {
                    if (callbacks_1_1 && !callbacks_1_1.done && (_a2 = callbacks_1.return))
                      _a2.call(callbacks_1);
                  } finally {
                    if (e_2)
                      throw e_2.error;
                  }
                }
              }, message.frame);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (messages_1_1 && !messages_1_1.done && (_a = messages_1.return))
                _a.call(messages_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        };
        return { animate, delegate };
      };
      TestScheduler3.prototype.createDelegates = function() {
        var _this = this;
        var lastHandle = 0;
        var scheduleLookup = /* @__PURE__ */ new Map();
        var run = function() {
          var now = _this.now();
          var scheduledRecords = Array.from(scheduleLookup.values());
          var scheduledRecordsDue = scheduledRecords.filter(function(_a2) {
            var due = _a2.due;
            return due <= now;
          });
          var dueImmediates = scheduledRecordsDue.filter(function(_a2) {
            var type = _a2.type;
            return type === "immediate";
          });
          if (dueImmediates.length > 0) {
            var _a = dueImmediates[0], handle = _a.handle, handler = _a.handler;
            scheduleLookup.delete(handle);
            handler();
            return;
          }
          var dueIntervals = scheduledRecordsDue.filter(function(_a2) {
            var type = _a2.type;
            return type === "interval";
          });
          if (dueIntervals.length > 0) {
            var firstDueInterval = dueIntervals[0];
            var duration = firstDueInterval.duration, handler = firstDueInterval.handler;
            firstDueInterval.due = now + duration;
            firstDueInterval.subscription = _this.schedule(run, duration);
            handler();
            return;
          }
          var dueTimeouts = scheduledRecordsDue.filter(function(_a2) {
            var type = _a2.type;
            return type === "timeout";
          });
          if (dueTimeouts.length > 0) {
            var _b = dueTimeouts[0], handle = _b.handle, handler = _b.handler;
            scheduleLookup.delete(handle);
            handler();
            return;
          }
          throw new Error("Expected a due immediate or interval");
        };
        var immediate = {
          setImmediate: function(handler) {
            var handle = ++lastHandle;
            scheduleLookup.set(handle, {
              due: _this.now(),
              duration: 0,
              handle,
              handler,
              subscription: _this.schedule(run, 0),
              type: "immediate"
            });
            return handle;
          },
          clearImmediate: function(handle) {
            var value = scheduleLookup.get(handle);
            if (value) {
              value.subscription.unsubscribe();
              scheduleLookup.delete(handle);
            }
          }
        };
        var interval = {
          setInterval: function(handler, duration) {
            if (duration === void 0) {
              duration = 0;
            }
            var handle = ++lastHandle;
            scheduleLookup.set(handle, {
              due: _this.now() + duration,
              duration,
              handle,
              handler,
              subscription: _this.schedule(run, duration),
              type: "interval"
            });
            return handle;
          },
          clearInterval: function(handle) {
            var value = scheduleLookup.get(handle);
            if (value) {
              value.subscription.unsubscribe();
              scheduleLookup.delete(handle);
            }
          }
        };
        var timeout = {
          setTimeout: function(handler, duration) {
            if (duration === void 0) {
              duration = 0;
            }
            var handle = ++lastHandle;
            scheduleLookup.set(handle, {
              due: _this.now() + duration,
              duration,
              handle,
              handler,
              subscription: _this.schedule(run, duration),
              type: "timeout"
            });
            return handle;
          },
          clearTimeout: function(handle) {
            var value = scheduleLookup.get(handle);
            if (value) {
              value.subscription.unsubscribe();
              scheduleLookup.delete(handle);
            }
          }
        };
        return { immediate, interval, timeout };
      };
      TestScheduler3.prototype.run = function(callback) {
        var prevFrameTimeFactor = TestScheduler3.frameTimeFactor;
        var prevMaxFrames = this.maxFrames;
        TestScheduler3.frameTimeFactor = 1;
        this.maxFrames = Infinity;
        this.runMode = true;
        var animator = this.createAnimator();
        var delegates = this.createDelegates();
        animationFrameProvider_1.animationFrameProvider.delegate = animator.delegate;
        dateTimestampProvider_1.dateTimestampProvider.delegate = this;
        immediateProvider_1.immediateProvider.delegate = delegates.immediate;
        intervalProvider_1.intervalProvider.delegate = delegates.interval;
        timeoutProvider_1.timeoutProvider.delegate = delegates.timeout;
        performanceTimestampProvider_1.performanceTimestampProvider.delegate = this;
        var helpers = {
          cold: this.createColdObservable.bind(this),
          hot: this.createHotObservable.bind(this),
          flush: this.flush.bind(this),
          time: this.createTime.bind(this),
          expectObservable: this.expectObservable.bind(this),
          expectSubscriptions: this.expectSubscriptions.bind(this),
          animate: animator.animate
        };
        try {
          var ret = callback(helpers);
          this.flush();
          return ret;
        } finally {
          TestScheduler3.frameTimeFactor = prevFrameTimeFactor;
          this.maxFrames = prevMaxFrames;
          this.runMode = false;
          animationFrameProvider_1.animationFrameProvider.delegate = void 0;
          dateTimestampProvider_1.dateTimestampProvider.delegate = void 0;
          immediateProvider_1.immediateProvider.delegate = void 0;
          intervalProvider_1.intervalProvider.delegate = void 0;
          timeoutProvider_1.timeoutProvider.delegate = void 0;
          performanceTimestampProvider_1.performanceTimestampProvider.delegate = void 0;
        }
      };
      TestScheduler3.frameTimeFactor = 10;
      return TestScheduler3;
    }(VirtualTimeScheduler_1.VirtualTimeScheduler);
    exports.TestScheduler = TestScheduler2;
  }
});

// node_modules/rxjs/dist/cjs/testing/index.js
var require_testing = __commonJS({
  "node_modules/rxjs/dist/cjs/testing/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TestScheduler = void 0;
    var TestScheduler_1 = require_TestScheduler();
    Object.defineProperty(exports, "TestScheduler", { enumerable: true, get: function() {
      return TestScheduler_1.TestScheduler;
    } });
  }
});

// compradprogvm.test.ts
var import_rxjs = __toESM(require_cjs(), 1);
var import_testing = __toESM(require_testing(), 1);
import { deepEqual, ok } from "node:assert/strict";
import { describe, it } from "node:test";

// compradprogvm.js
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
  #ticks;
  #tick;
  #currentVal;
  #setCurrentVal;
  get currentVal() {
    return this.#currentVal;
  }
  #currentOffset;
  #setCurrentOffset;
  get currentOffset() {
    return this.#currentOffset;
  }
  constructor(dial) {
    ;
    [this.#progressAdded, this.#addProgress] = butterfly(null);
    [this.#ticks, this.#tick] = butterfly(void 0);
    [this.#currentVal, this.#setCurrentVal] = butterfly(0);
    [this.#currentOffset, this.#setCurrentOffset] = butterfly(0);
    this.#targetPercent = this.progressAdded.pipe(
      filter((progress) => progress !== null),
      map((progress) => progress.percent),
      combineLatestAll(),
      map((progresses) => progresses.reduce((a, b) => a + b) / progresses.length),
      shareReplay(1)
    );
    this.#targetRoundPercent = this.targetPercent.pipe(
      map((target) => Math.round(target * 100))
    );
    this.#targetVal = this.targetPercent.pipe(
      map((target) => Math.round(target * 360))
    );
    const current = combineLatest([this.currentVal, this.currentOffset, this.targetVal, this.#ticks]).pipe(
      map(([currentVal, currentOffset, targetVal]) => this.onTick(currentVal, currentOffset, targetVal))
    );
    this.#subscription.add(
      current.subscribe({
        next: ([currentVal, currentOffset]) => {
          this.#setCurrentVal(currentVal);
          this.#setCurrentOffset(currentOffset);
        }
      })
    );
    if (dial) {
      this.#subscription.add(this.currentVal.subscribe((currentVal) => dial.val(currentVal).trigger("change")));
      this.#subscription.add(this.currentOffset.subscribe(
        (currentOffset) => dial.trigger("configure", { angleOffset: currentOffset })
      ));
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
  tick() {
    this.#inprogress.forEach((item) => item.tick());
    this.#tick(void 0);
  }
  onTick(currentVal, currentOffset, targetVal) {
    if (currentVal < this.minBar) {
      currentVal = this.minBar;
    }
    if (targetVal > currentVal) {
      const diff = Math.min(
        targetVal - currentVal,
        this.maxGrowthPerTick
      );
      currentVal += diff;
      if (this.growthSpinRate) {
        currentOffset += this.growthSpinRate;
      }
      this.#spinTickCount = 0;
    } else if (targetVal < currentVal && currentVal > this.minBar) {
      const diff = Math.min(
        currentVal - targetVal,
        this.maxCatchPerTick
      );
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

// compradprogvm.test.ts
describe("CompRadProgVm", () => {
  it("adds items", () => {
    const vm = new CompRadProgVm();
    const startlength = vm.progressCount;
    vm.addItem();
    ok(vm.progressCount > startlength);
  });
  it("pauses all", async () => {
    const vm = new CompRadProgVm();
    vm.addItem();
    vm.addItem();
    vm.pauseAll();
    const paused = await (0, import_rxjs.firstValueFrom)(vm.pausedStatus);
    ok(paused.every((paused2) => paused2));
  });
  it("unpauses all", async () => {
    const vm = new CompRadProgVm();
    vm.addItem();
    vm.addItem();
    vm.pauseAll();
    vm.unpauseAll();
    const paused = await (0, import_rxjs.firstValueFrom)(vm.pausedStatus);
    ok(paused.every((paused2) => !paused2));
  });
  it.skip("ticks forward", async () => {
    const testScheduler = new import_testing.TestScheduler(
      (actual, expected) => deepEqual(actual, expected)
    );
    testScheduler.run(({ cold, expectObservable }) => {
      const ticks = cold("--x--x");
      const expected = "  a-b--c";
      const expectedValues = {
        a: 0,
        b: 1,
        c: 1
      };
      const vm = new CompRadProgVm(void 0, ticks);
      vm.addItem();
      vm.addItem();
      expectObservable(vm.currentVal).toBe(expected, expectedValues);
    });
  });
});
