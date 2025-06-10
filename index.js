// node_modules/tslib/tslib.es6.mjs
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
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
    if (t[0] & 1) throw t[1];
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
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
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
          if (t[2]) _.ops.pop();
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
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
    if (ar || !(i in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
      ar[i] = from2[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function(v) {
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
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
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
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
            } finally {
              if (e_1) throw e_1.error;
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
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
          } finally {
            if (e_2) throw e_2.error;
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
  function Observable5(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable5.prototype.lift = function(operator) {
    var observable3 = new Observable5();
    observable3.source = this;
    observable3.operator = operator;
    return observable3;
  };
  Observable5.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable5.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable5.prototype.forEach = function(next, promiseCtor) {
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
  Observable5.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable5.prototype[observable] = function() {
    return this;
  };
  Observable5.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable5.prototype.toPromise = function(promiseCtor) {
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
  Observable5.create = function(subscribe) {
    return new Observable5(subscribe);
  };
  return Observable5;
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
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
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
  Action2.prototype.schedule = function(state, delay) {
    if (delay === void 0) {
      delay = 0;
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
  AsyncAction2.prototype.schedule = function(state, delay) {
    var _a;
    if (delay === void 0) {
      delay = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state, delay) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state, delay);
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
  Scheduler2.prototype.schedule = function(work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
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
  AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(function() {
      return scheduler.flush(void 0);
    }));
  };
  AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
    var _a;
    if (delay === void 0) {
      delay = 0;
    }
    if (delay != null ? delay > 0 : this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
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
          if (false) return [3, 8];
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done) return [3, 5];
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
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
      } finally {
        if (e_1) throw e_1.error;
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
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
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
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2) throw e_2.error;
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
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
  if (delay === void 0) {
    delay = 0;
  }
  if (repeat === void 0) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

// node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay));
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

// node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function isObservable(obj) {
  return !!obj && (obj instanceof Observable || isFunction(obj.lift) && isFunction(obj.subscribe));
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
          if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a2 = recordsCopy_1.return)) _a2.call(recordsCopy_1);
        } finally {
          if (e_1) throw e_1.error;
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

// node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
function mapTo(value) {
  return map(function() {
    return value;
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
  return Boolean(description.childrenBind) || Object.keys(description.bind).length > 0 || Object.keys(description.immediateBind).length > 0 || Object.keys(description.events).length > 0 || Object.keys(description.styleBind).length > 0 || Object.keys(description.immediateStyleBind).length > 0 || Object.keys(description.classBind).length > 0 || Object.keys(description.immediateClassBind).length > 0;
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
  const { childrenBind, childrenBindMode, ...otherAttributes } = attributes ?? {};
  return {
    type: "fragment",
    attributes: otherAttributes,
    children,
    childrenBind,
    childrenBindMode
  };
}
function Static({ element }) {
  return {
    type: "static",
    element
  };
}
function Comment({ comment }) {
  return {
    type: "comment",
    comment
  };
}
function Empty() {
  return {
    type: "empty"
  };
}
function jsx(element, attributes, ...children) {
  children = children.flat().map((child) => {
    if (typeof child === "number") {
      return child.toLocaleString();
    }
    return child;
  });
  if (typeof element === "string") {
    const { bind: bind2, immediateBind, childrenBind, childrenBindMode, events, styleBind, immediateStyleBind, classBind, immediateClassBind, ...otherAttributes } = attributes ?? {};
    return {
      type: "element",
      element,
      attributes: otherAttributes,
      bind: bind2 ?? {},
      immediateBind: immediateBind ?? {},
      children,
      childrenBind,
      childrenBindMode,
      events: events ?? {},
      styleBind: styleBind ?? {},
      immediateStyleBind: immediateStyleBind ?? {},
      classBind: classBind ?? {},
      immediateClassBind: immediateClassBind ?? {}
    };
  }
  if (typeof element === "function") {
    if (element === Fragment || element === Children || element === Static || element === Empty || element === Comment) {
      const func = element;
      return func(attributes ?? {}, ...children);
    }
    const { childrenBind, childrenBindMode, ...otherAttributes } = attributes ?? {};
    return {
      type: "component",
      component: element,
      properties: otherAttributes,
      children,
      childrenBind,
      childrenBindMode
    };
  }
  throw new Error(`Unsupported jsx in ${element}`);
}

// node_modules/butterfloat/binding.js
function bindObjectKey(item, key, observable3, error, complete) {
  return observable3.subscribe({
    next: (value) => {
      item[key] = value;
    },
    error,
    complete: () => {
      console.debug(`${key.toString()} binding completed`, item);
      complete();
    }
  });
}
function bindObjectChanges(item, observable3, error, complete) {
  return observable3.subscribe({
    next: (changes) => {
      Object.assign(item, changes);
    },
    error,
    complete: () => {
      console.debug(`Change binding completed`, item);
      complete();
    }
  });
}
function bindClassListKey(item, key, observable3, error, complete) {
  return observable3.subscribe({
    next: (value) => {
      if (value) {
        item.classList.add(key);
      } else {
        item.classList.remove(key);
      }
    },
    error,
    complete: () => {
      console.debug(`${key.toString()} classList binding completed`, item);
      complete();
    }
  });
}
function bindClassListChanges(item, observable3, error, complete) {
  return observable3.subscribe({
    next: (changes) => {
      const adds = [];
      const removes = [];
      for (const [key, add] of Object.entries(changes)) {
        if (add) {
          adds.push(key);
        } else {
          removes.push(key);
        }
      }
      if (adds.length > 0) {
        item.classList.add(...adds);
      }
      if (removes.length > 0) {
        item.classList.remove(...removes);
      }
    },
    error,
    complete: () => {
      console.debug(`classList changes binding completed`, item);
      complete();
    }
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
function scheduledKey(key) {
  if (key === "bfDelayValue") {
    return "value";
  }
  return key;
}
function makeEntries(key, observable3) {
  return observable3.pipe(map((value) => [key, value]));
}
function bindElementBinds(element, description, { complete, error, suspense, subscription }) {
  const schedulables = [];
  const binds = [
    ...Object.entries(description.bind).map(([key, observable3]) => [key, observable3, false]),
    ...Object.entries(description.immediateBind).map(([key, observable3]) => [key, observable3, true])
  ];
  for (const [key, observable3, immediate] of binds) {
    if (schedulable(key, immediate)) {
      schedulables.push([scheduledKey(key), observable3]);
    } else {
      subscription.add(bindObjectKey(element, key, observable3, error, complete));
    }
  }
  if (schedulables.length) {
    const scheduled2 = schedulables.map(([key, observable3]) => makeEntries(key, observable3));
    subscription.add(bindObjectChanges(element, bufferEntries(merge(...scheduled2), suspense), error, complete));
  }
}
function bindElementEvents(element, description, { eventBinder, subscription }) {
  for (const [key, event] of Object.entries(description.events)) {
    subscription.add(eventBinder.applyEvent(event, element, key));
  }
}
function bindElementChildren(element, description, context2, document2 = globalThis.document) {
  const { complete, componentRunner, componentWirer, error, subscription } = context2;
  if (description.childrenBind) {
    if (description.childrenBindMode === "replace") {
      const placeholder = document2.createComment(`replaceable child component`);
      element.append(placeholder);
      const activeChild = description.childrenBind.pipe(switchMap((child) => componentWirer(child, context2, void 0, document2)));
      const childComponent = activeChild;
      childComponent.name = `${element.nodeName} replaceable child`;
      subscription.add(componentRunner(element, childComponent, context2, placeholder, document2));
    } else {
      subscription.add(description.childrenBind.subscribe({
        next(child) {
          const placeholder = document2.createComment(`${child.name} component`);
          if (description.childrenBindMode === "prepend") {
            element.prepend(placeholder);
          } else {
            element.append(placeholder);
          }
          subscription.add(componentRunner(element, child, context2, placeholder, document2));
        },
        error,
        complete: () => {
          console.debug(`Children binding completed`, element);
          complete();
        }
      }));
    }
  }
}
function bindElementClasses(element, description, { complete, error, subscription, suspense }) {
  if (Object.keys(description.classBind).length > 0) {
    const entries = [];
    for (const [key, observable3] of Object.entries(description.classBind)) {
      entries.push(makeEntries(key, observable3));
    }
    subscription.add(bindClassListChanges(element, bufferEntries(merge(...entries), suspense), error, complete));
  }
  for (const [key, observable3] of Object.entries(description.immediateClassBind)) {
    subscription.add(bindClassListKey(element, key, observable3, error, complete));
  }
}
function bindElementStyles(element, description, { complete, error, subscription, suspense }) {
  if (Object.keys(description.styleBind).length > 0) {
    const entries = [];
    for (const [key, observable3] of Object.entries(description.styleBind)) {
      entries.push(makeEntries(key, observable3));
    }
    subscription.add(bindObjectChanges(element.style, bufferEntries(merge(...entries), suspense), error, complete));
  }
  for (const [key, observable3] of Object.entries(description.immediateStyleBind)) {
    subscription.add(bindObjectKey(element.style, key, observable3, error, complete));
  }
}
function bindElement(element, description, context2, document2 = globalThis.document) {
  const { subscription } = context2;
  bindElementBinds(element, description, context2);
  bindElementEvents(element, description, context2);
  bindElementChildren(element, description, context2, document2);
  bindElementClasses(element, description, context2);
  bindElementStyles(element, description, context2);
  return subscription;
}
function bindFragmentChildren(nodeDescription, node, subscription, context2, document2 = globalThis.document) {
  const { complete, error, componentRunner, componentWirer } = context2;
  if (nodeDescription.childrenBind) {
    const parent = node.parentElement;
    if (!parent) {
      throw new Error("Attempted to bind children to an unattached fragment");
    }
    if (nodeDescription.childrenBindMode === "replace") {
      const activeChild = nodeDescription.childrenBind.pipe(switchMap((child) => componentWirer(child, context2, void 0, document2)));
      const childComponent = activeChild;
      childComponent.name = `${node.nodeName} replaceable child`;
      subscription.add(componentRunner(node.parentElement, childComponent, context2, node, document2));
    } else {
      subscription.add(nodeDescription.childrenBind.subscribe({
        next(child) {
          const placeholder = document2.createComment(`${child.name} component`);
          if (nodeDescription.childrenBindMode === "prepend") {
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
    childrenBindMode: description.childrenBindMode
  };
  const mainComponent = () => mainComponentFragment;
  const mainContext = { ...context2, suspense };
  const main = wire(mainComponent, mainContext, void 0, document2);
  if (props.suspenseView) {
    const suspenseView = wire(props.suspenseView, { ...context2 }, void 0, document2);
    return combineLatest([props.when, main, suspenseView]).pipe(map(([suspend, main2, suspenseView2]) => suspend ? suspenseView2 : main2), distinctUntilChanged());
  } else {
    return main;
  }
}

// node_modules/butterfloat/wiring.js
var contextChildrenDescriptions = /* @__PURE__ */ new WeakMap();
function isCommentNode(node) {
  return node.nodeType === node.COMMENT_NODE;
}
function wireInternal(description, subscriber, context2, outerContainer, document2 = globalThis.document) {
  const { treeError } = context2;
  const subscription = new Subscription();
  const componentName = description.component.name;
  const error = treeError ? (error2) => {
    console.error(`Error in component ${componentName}`, error2);
    treeError(error2);
  } : (error2) => {
    console.error(`Error in component ${componentName}`, error2);
  };
  const { events, handler } = makeEventProxy(componentName);
  const componentContext = {
    bindEffect(observable3, effect) {
      context2.isStaticComponent = false;
      subscription.add(observable3.pipe(observeOn(animationFrameScheduler)).subscribe({
        next(value) {
          const promise = effect(value);
          if (promise && "catch" in promise) {
            promise.catch(error);
          }
        },
        error,
        complete: () => {
          console.debug(`Effect in component ${componentName} completed`);
          subscriber.complete();
        }
      }));
    },
    bindImmediateEffect(observable3, effect) {
      context2.isStaticComponent = false;
      subscription.add(observable3.subscribe({
        next(value) {
          const promise = effect(value);
          if (promise && "catch" in promise) {
            promise.catch(error);
          }
        },
        error,
        complete: () => {
          console.debug(`Immediate effect in component ${componentName} completed`);
          subscriber.complete();
        }
      }));
    },
    events
  };
  contextChildrenDescriptions.set(componentContext, description);
  try {
    const { elementBinds, nodeBinds, container: container2, isSameContainer } = context2.domStrategy(description.component, description.properties, componentContext, outerContainer, document2);
    context2.isStaticComponent &&= elementBinds.length === 0;
    context2.isStaticTree &&= context2.isStaticComponent;
    if (!isSameContainer) {
      subscriber.next(container2);
    } else {
      subscriber.next(document2.createComment("prestamp bound"));
    }
    if (isCommentNode(container2)) {
      if (elementBinds.length > 0 || nodeBinds.length > 0) {
        console.warn(`Trying to bind to an empty component named ${componentName}`);
      }
      return () => {
        subscription.unsubscribe();
      };
    }
    const bindContext = {
      ...context2,
      complete: () => {
        console.debug(`Binding in component ${componentName} completed`);
        subscriber.complete();
      },
      error,
      componentRunner: runInternal,
      componentWirer: wire,
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
          subscription.add(runInternal(container2, nodeDescription, nestedContext, node));
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
  } catch (err) {
    subscriber.error(err);
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
    childrenBindMode: parentDescription.childrenBindMode
  });
  return runInternal(container2, {
    type: "component",
    component: childrenComponent,
    properties: {},
    children: []
  }, context2, node);
}
function wire(component, context2, outerContainer, document2 = globalThis.document) {
  if (isObservable(component)) {
    return component;
  }
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
  if (description.component === ErrorBoundary) {
    return wireErrorBoundary(description, context2, document2);
  }
  if (description.component === Suspense) {
    return wireSuspense(description, context2, document2);
  }
  return new Observable((subscriber) => wireInternal(description, subscriber, context2, outerContainer, document2));
}
function runInternal(container2, component, context2, placeholder, document2 = globalThis.document) {
  const isObservableComponent = isObservable(component);
  const observable3 = isObservableComponent ? component : wire(component, context2, container2, document2);
  let previousNode = null;
  const componentName = "type" in component ? component.component.name : component.name;
  return observable3.subscribe({
    next(node) {
      if (isObservableComponent) {
        container2.replaceChildren(node);
      } else if (previousNode) {
        try {
          previousNode.replaceWith(node);
        } catch (error) {
          console.warn(`Cannot exactly replace previous node in ${componentName}, replacing all children in container`, node, previousNode);
          container2.replaceChildren(node);
        }
      } else if (placeholder) {
        placeholder.replaceWith(node);
      } else {
        container2.appendChild(node);
      }
      previousNode = node;
    },
    error(error) {
      console.error(`Error in component ${componentName}`, error);
    },
    complete() {
      if (!context2?.preserveOnComplete && previousNode) {
        previousNode.remove();
      }
    }
  });
}

// node_modules/butterfloat/error-boundary.js
var ErrorBoundary = () => {
  throw new Error("ErrorBoundary is a custom-wired component");
};
function wireErrorBoundary(description, context2, document2 = globalThis.document) {
  context2.isStaticComponent = false;
  context2.isStaticTree = false;
  const { errorView, errorViewBindMode, preserveOnComplete } = description.properties;
  const errorOccurred = new Subject();
  const treeError = errorOccurred.next.bind(errorOccurred);
  const errorViewChildren = errorOccurred.pipe(map((error) => () => {
    const childComponent = {
      type: "component",
      component: errorView,
      children: [],
      properties: { error }
    };
    return childComponent;
  }));
  const mainComponentFragment = {
    type: "fragment",
    attributes: {},
    children: description.children,
    childrenBind: description.childrenBind,
    childrenBindMode: description.childrenBindMode
  };
  const errorViewComponentFragment = {
    type: "fragment",
    attributes: {},
    children: [mainComponentFragment],
    childrenBind: errorViewChildren,
    childrenBindMode: errorViewBindMode ?? "prepend"
  };
  const mainComponent = () => errorViewComponentFragment;
  const mainContext = { ...context2, treeError, preserveOnComplete };
  const main = wire(mainComponent, mainContext, void 0, document2);
  return main;
}

// node_modules/butterfloat/static-dom.js
function buildElement(description, context2, document2 = globalThis.document) {
  if (description.attributes.xmlns) {
    context2 = {
      defaultNamespace: description.attributes.xmlns,
      namespaceMap: { ...context2?.namespaceMap }
    };
  }
  let element;
  if (description.element.includes(":")) {
    const [nsAbbrev, elementName] = description.element.split(":");
    let ns = context2?.namespaceMap[nsAbbrev];
    if (!ns) {
      for (const [key, value] of Object.entries(description.attributes)) {
        if (key.startsWith("xmlns:")) {
          const nsAbbrev2 = key.replace("xmlns:", "");
          context2 = {
            ...context2,
            defaultNamespace: context2?.defaultNamespace ?? null,
            namespaceMap: {
              ...context2?.namespaceMap,
              [nsAbbrev2]: value
            }
          };
        }
      }
      ns = context2?.namespaceMap[nsAbbrev];
      if (!ns) {
        throw new Error(`Unknown namespace for '${description.element}'`);
      }
    }
    element = document2.createElementNS(ns, elementName);
  } else if (context2?.defaultNamespace) {
    element = document2.createElementNS(context2.defaultNamespace, description.element);
  } else {
    element = document2.createElement(description.element);
  }
  for (const [key, value] of Object.entries(description.attributes)) {
    if (key.startsWith("xmlns:")) {
      const nsAbbrev = key.replace("xmlns:", "");
      context2 = {
        ...context2,
        defaultNamespace: context2?.defaultNamespace ?? null,
        namespaceMap: {
          ...context2?.namespaceMap,
          [nsAbbrev]: value
        }
      };
    } else if (key.includes(":")) {
      const [nsAbbrev, attributeName] = key.split(":");
      const ns = context2?.namespaceMap?.[nsAbbrev];
      if (!ns) {
        throw new Error(`Unknown namespace for '${key}' attribute`);
      }
      element.setAttributeNS(ns, attributeName, (value ?? "").toString());
    } else if (key.includes("-")) {
      element.setAttribute(key, (value ?? "").toString());
    } else if (key === "class") {
      element.className = value;
    } else if (key === "for") {
      ;
      element.htmlFor = value;
    } else {
      ;
      element[key] = value;
    }
  }
  return { element, context: context2 };
}
function buildNode(description, container2, elementBinds, nodeBinds, context2, document2 = globalThis.document) {
  switch (description.type) {
    case "element": {
      const { element, context: newContext } = buildElement(description, context2, document2);
      if (hasAnyBinds(description)) {
        elementBinds.push([element, description]);
      }
      container2.appendChild(element);
      return { container: element, context: newContext };
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
      if (description.childrenBind && description.childrenBindMode === "prepend") {
        const fragmentComment = document2.createComment("fragment children binding");
        container2.appendChild(fragmentComment);
        nodeBinds.push([fragmentComment, description]);
      }
      for (const child of description.children) {
        if (typeof child === "string") {
          container2.appendChild(document2.createTextNode(child));
          continue;
        }
        buildTree(child, container2, elementBinds, nodeBinds, context2, document2);
      }
      if (description.childrenBind && description.childrenBindMode !== "prepend") {
        const fragmentComment = document2.createComment("fragment children binding");
        container2.appendChild(fragmentComment);
        nodeBinds.push([fragmentComment, description]);
      }
      return { container: container2, context: context2 };
    case "static":
      container2.appendChild(description.element);
      return { container: container2, context: context2 };
    case "empty":
      if (!context2?.skipEmpty) {
        const emptyComment = document2.createComment("empty");
        container2.appendChild(emptyComment);
      }
      return { container: container2, context: context2 };
    case "comment": {
      const comment = document2.createComment(description.comment);
      container2.appendChild(comment);
      return { container: container2, context: context2 };
    }
  }
}
function buildTree(description, container2 = null, elementBinds = [], nodeBinds = [], context2, document2 = globalThis.document) {
  if (!container2 && description.type === "element") {
    const { element, context: newContext } = buildElement(description, context2, document2);
    context2 = newContext;
    container2 = element;
    if (hasAnyBinds(description)) {
      elementBinds.push([element, description]);
    }
  } else if (!container2 && description.type === "static") {
    return {
      elementBinds,
      nodeBinds,
      container: description.element
    };
  } else if (!container2 && description.type === "empty" && !context2?.skipEmpty) {
    const emptyComment = document2.createComment("empty");
    return {
      elementBinds,
      nodeBinds,
      container: emptyComment
    };
  } else if (!container2) {
    container2 = document2.createDocumentFragment();
    buildNode(description, container2, elementBinds, nodeBinds, context2, document2);
  } else {
    const nextNode = buildNode(description, container2, elementBinds, nodeBinds, context2, document2);
    if (nextNode !== null) {
      const { container: newContainer, context: newContext } = nextNode;
      container2 = newContainer;
      context2 = newContext;
    }
  }
  if (description.type !== "children" && description.type !== "fragment" && description.type !== "static" && description.type !== "comment" && description.type !== "empty") {
    for (const child of description.children) {
      if (typeof child === "string") {
        container2.appendChild(document2.createTextNode(child));
        continue;
      }
      buildTree(child, container2, elementBinds, nodeBinds, context2, document2);
    }
  }
  return {
    elementBinds,
    nodeBinds,
    container: container2
  };
}

// node_modules/butterfloat/wiring-dom-build.js
var buildDomStrategy = (component, properties, context2, container2, document2) => {
  const tree = component(properties, context2);
  return {
    ...buildTree(tree, void 0, void 0, void 0, void 0, document2),
    isSameContainer: false
  };
};
var wiring_dom_build_default = buildDomStrategy;

// node_modules/butterfloat/runtime.js
function run(container2, component, options, placeholder, document2 = globalThis.document) {
  const { preserveOnComplete } = options ?? {};
  return runInternal(container2, component, {
    domStrategy: wiring_dom_build_default,
    isStaticComponent: true,
    isStaticTree: true,
    preserveOnComplete
  }, placeholder, document2);
}

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
function isObservable2(arg) {
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
  if (isObservable2(arg)) {
    observable3 = arg;
  } else {
    observable3 = arg.observable;
    subscriber = arg.subscriber;
    subscription = isSubscriptionRef(arg) ? arg.subscription : void 0;
  }
  if (isObservable2(match)) {
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
  if (isObservable2(match)) {
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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
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
  if (superClass) _setPrototypeOf(subClass, superClass);
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
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
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
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
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
      if (!obj) return;
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
      StackFrame.prototype["set" + _capitalize(booleanProps[i])] = /* @__PURE__ */ function(p) {
        return function(v) {
          this[p] = Boolean(v);
        };
      }(booleanProps[i]);
    }
    for (var j = 0; j < numericProps.length; j++) {
      StackFrame.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]);
      StackFrame.prototype["set" + _capitalize(numericProps[j])] = /* @__PURE__ */ function(p) {
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
      StackFrame.prototype["set" + _capitalize(stringProps[k])] = /* @__PURE__ */ function(p) {
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

// node_modules/lucide/dist/esm/createElement.js
var createElement = (tag2, attrs, children = []) => {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag2);
  Object.keys(attrs).forEach((name) => {
    element.setAttribute(name, String(attrs[name]));
  });
  if (children.length) {
    children.forEach((child) => {
      const childElement = createElement(...child);
      element.appendChild(childElement);
    });
  }
  return element;
};
var createElement$1 = ([tag2, attrs, children]) => createElement(tag2, attrs, children);

// node_modules/lucide/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

// node_modules/lucide/dist/esm/icons/fast-forward.js
var FastForward = [
  "svg",
  defaultAttributes,
  [
    ["polygon", { points: "13 19 22 12 13 5 13 19" }],
    ["polygon", { points: "2 19 11 12 2 5 2 19" }]
  ]
];

// node_modules/lucide/dist/esm/icons/github.js
var Github = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2" }]
  ]
];

// node_modules/lucide/dist/esm/icons/pause.js
var Pause = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "4", height: "16", x: "6", y: "4" }],
    ["rect", { width: "4", height: "16", x: "14", y: "4" }]
  ]
];

// node_modules/lucide/dist/esm/icons/play.js
var Play = ["svg", defaultAttributes, [["polygon", { points: "5 3 19 12 5 21 5 3" }]]];

// node_modules/lucide/dist/esm/icons/plus.js
var Plus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 12h14" }],
    ["path", { d: "M12 5v14" }]
  ]
];

// node_modules/lucide/dist/esm/icons/rewind.js
var Rewind = [
  "svg",
  defaultAttributes,
  [
    ["polygon", { points: "11 19 2 12 11 5 11 19" }],
    ["polygon", { points: "22 19 13 12 22 5 22 19" }]
  ]
];

// node_modules/lucide/dist/esm/icons/skip-forward.js
var SkipForward = [
  "svg",
  defaultAttributes,
  [
    ["polygon", { points: "5 4 15 12 5 20 5 4" }],
    ["line", { x1: "19", x2: "19", y1: "5", y2: "19" }]
  ]
];

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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties2(Constructor, staticProps);
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
      map((percent) => percent.toLocaleString(void 0, { style: "percent" })),
      tag("progvm-round-percent"),
      shareReplay(1)
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
    this.#setPercent((percent) => Math.min(percent + perTick, 1));
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
  constructor(ticks) {
    ;
    [this.#progressAdded, this.#addProgress] = butterfly(null);
    this.#targetPercent = concat(
      of(0),
      this.progressAdded.pipe(
        switchMap(() => {
          return combineLatest(
            this.#inprogress.map((progress) => progress.percent)
          );
        }),
        tag("target-percent-progresses"),
        map(
          (progresses) => progresses.length ? progresses.reduce((a, b) => a + b, 0) / progresses.length : 0
        )
      )
    ).pipe(tag("target-percent-raw"), shareReplay(1));
    this.#targetRoundPercent = this.targetPercent.pipe(
      map((target) => target.toLocaleString(void 0, { style: "percent" }))
    );
    this.#targetVal = this.targetPercent.pipe(
      map((target) => Math.round(target * 360))
    );
    const current = concat(
      of([0, 0]),
      (ticks ?? interval(500)).pipe(
        switchMap(
          () => Promise.all(this.#inprogress.map((item) => item.tick()))
        ),
        withLatestFrom(this.targetVal),
        scan(
          ([currentVal, currentOffset], [, targetVal]) => this.#onTick(currentVal, currentOffset, targetVal),
          [0, 0]
        )
      )
    ).pipe(tag("vm-current"), shareReplay(1));
    this.#currentVal = current.pipe(map(([currentVal]) => currentVal));
    this.#currentOffset = current.pipe(
      map(([, currentOffset]) => currentOffset)
    );
  }
  pauseAll() {
    this.#inprogress.forEach((item) => item.pause());
  }
  unpauseAll() {
    this.#inprogress.forEach((item) => item.unpause());
  }
  addItem() {
    const progress = new ProgVm();
    this.#inprogress.unshift(progress);
    this.#addProgress(progress);
  }
  #onTick(currentVal, currentOffset, targetVal) {
    if (currentVal < this.minBar) {
      currentVal = this.minBar;
    }
    if (targetVal > currentVal) {
      const diff = Math.min(targetVal - currentVal, this.maxGrowthPerTick);
      currentVal += diff;
      if (this.growthSpinRate) {
        currentOffset = (currentOffset + this.growthSpinRate) % 360;
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
};

// icon.tsx
function Icon({ icon }) {
  return /* @__PURE__ */ jsx(Static, { element: createElement$1(icon) });
}

// progress.tsx
function Progress({ item }, { bindImmediateEffect, events }) {
  const { finish, pause, slowDown, speedUp, unpause } = events;
  const pauseDisplay = item.paused.pipe(
    map((paused) => paused ? `none` : `block`)
  );
  const unpauseDisplay = item.paused.pipe(
    map((paused) => paused ? `block` : `none`)
  );
  const notPaused = item.paused.pipe(map((paused) => !paused));
  bindImmediateEffect(finish, () => item.finish());
  bindImmediateEffect(pause, () => item.pause());
  bindImmediateEffect(slowDown, () => item.slowDown());
  bindImmediateEffect(speedUp, () => item.speedUp());
  bindImmediateEffect(unpause, () => item.unpause());
  return /* @__PURE__ */ jsx("div", { className: "card" }, /* @__PURE__ */ jsx("div", { className: "level" }, /* @__PURE__ */ jsx("div", { className: "level-item" }, /* @__PURE__ */ jsx("div", { className: "buttons has-addons" }, /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      title: "Pause",
      className: "button",
      styleBind: { display: pauseDisplay },
      events: { click: pause }
    },
    /* @__PURE__ */ jsx("span", { className: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: Pause }))
  ), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      title: "Unpause",
      className: "button",
      styleBind: { display: unpauseDisplay },
      events: { click: unpause }
    },
    /* @__PURE__ */ jsx("span", { className: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: Play }))
  ), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      title: "Slow Down",
      className: "button",
      events: { click: slowDown }
    },
    /* @__PURE__ */ jsx("span", { className: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: Rewind }))
  ), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      title: "Speed Up",
      className: "button",
      events: { click: speedUp }
    },
    /* @__PURE__ */ jsx("span", { className: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: FastForward }))
  ), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      title: "Finish",
      className: "button",
      events: { click: finish }
    },
    /* @__PURE__ */ jsx("span", { className: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: SkipForward }))
  ))), /* @__PURE__ */ jsx("div", { className: "level-item" }, /* @__PURE__ */ jsx("div", null, /* @__PURE__ */ jsx("div", { className: "heading is-capitalized" }, "Item Progress"), /* @__PURE__ */ jsx(
    "div",
    {
      className: "title",
      bind: { innerText: item.roundPercent }
    }
  ))), /* @__PURE__ */ jsx("div", { className: "level-item is-flex-grow-5" }, /* @__PURE__ */ jsx(
    "progress",
    {
      className: "progress",
      bind: {
        innerText: item.roundPercent,
        bfDelayValue: item.percent
      },
      classBind: {
        "is-info": notPaused,
        "is-warning": item.paused
      }
    }
  ))));
}

// main.tsx
function Main(_props, { bindImmediateEffect, events }) {
  const { addItem, attach, pauseAll, unpauseAll } = events;
  const vm = new CompRadProgVm(interval(500));
  const { targetPercent, targetRoundPercent, currentOffset, currentVal } = vm;
  const angleClass = currentOffset.pipe(
    map((offset) => `angle-${offset}`),
    tag("angle-class")
  );
  const currentValueStyle = currentVal.pipe(
    map((val) => `--o-progress: ${val};`),
    tag("current-value-style")
  );
  bindImmediateEffect(addItem, () => vm.addItem());
  bindImmediateEffect(attach, (el) => {
    el.setAttribute("max", "360");
  });
  bindImmediateEffect(pauseAll, () => vm.unpauseAll());
  bindImmediateEffect(unpauseAll, () => vm.unpauseAll());
  const children = vm.progressAdded.pipe(
    filter((progVm) => progVm !== null),
    map((progVm) => () => /* @__PURE__ */ jsx(Progress, { item: progVm })),
    tag("children")
  );
  const menuIsActive = events.toggleMenu.pipe(
    scan((acc) => !acc, false),
    shareReplay(1)
  );
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("section", { class: "hero is-primary" }, /* @__PURE__ */ jsx("div", { class: "hero-head" }, /* @__PURE__ */ jsx("nav", { class: "navbar" }, /* @__PURE__ */ jsx("div", { class: "container" }, /* @__PURE__ */ jsx("div", { class: "navbar-brand" }, /* @__PURE__ */ jsx(
    "a",
    {
      class: "navbar-item",
      href: "https://worldmaker.net/compradprog/"
    },
    "CompRadProg"
  ), /* @__PURE__ */ jsx(
    "a",
    {
      role: "button",
      class: "navbar-burger",
      title: "menu",
      bind: {
        ariaExpanded: menuIsActive.pipe(map((a) => a.toString()))
      },
      classBind: { "is-active": menuIsActive },
      events: { click: events.toggleMenu }
    },
    /* @__PURE__ */ jsx("span", null),
    /* @__PURE__ */ jsx("span", null),
    /* @__PURE__ */ jsx("span", null)
  )), /* @__PURE__ */ jsx(
    "div",
    {
      class: "navbar-menu",
      classBind: { "is-active": menuIsActive }
    },
    /* @__PURE__ */ jsx("div", { class: "navbar-end" }, /* @__PURE__ */ jsx(
      "a",
      {
        class: "navbar-item is-active",
        href: "https://worldmaker.net/compradprog/"
      },
      "Demo"
    ), /* @__PURE__ */ jsx(
      "a",
      {
        class: "navbar-item",
        href: "https://blog.worldmaker.net/2015/03/17/compradprog/"
      },
      "Motivation"
    ), /* @__PURE__ */ jsx("span", { class: "navbar-item" }, /* @__PURE__ */ jsx(
      "a",
      {
        class: "button is-primary is-inverted",
        href: "https://github.com/WorldMaker/compradprog/"
      },
      /* @__PURE__ */ jsx("span", { class: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: Github })),
      /* @__PURE__ */ jsx("span", null, "Source")
    )))
  )))), /* @__PURE__ */ jsx("div", { class: "hero-body" }, /* @__PURE__ */ jsx("div", { class: "container has-text-centered" }, /* @__PURE__ */ jsx("p", { class: "title" }, "Composite Radial Progress Demo"), /* @__PURE__ */ jsx("p", { class: "subtitle" }, "Visualize complex multi-item progress with a combined radial")))), /* @__PURE__ */ jsx("section", { class: "section" }, /* @__PURE__ */ jsx("div", { class: "dashboard" }, /* @__PURE__ */ jsx("div", { class: "bigbang dial" }, /* @__PURE__ */ jsx("div", { class: "gravity-spot" }, /* @__PURE__ */ jsx("div", { class: "orbit-4" }, /* @__PURE__ */ jsx(
    "o-progress",
    {
      shape: "circle",
      bind: {
        /* can't bind to o-progress `value` because attribute not property, can't use styleBind because variable not a property */
        style: currentValueStyle,
        /* can't use classBind because "dynamic" class name */
        className: angleClass
      },
      events: { bfDomAttach: attach }
    }
  )), /* @__PURE__ */ jsx("div", { class: "orbit-0" }, /* @__PURE__ */ jsx("div", { class: "satellite" }, /* @__PURE__ */ jsx(
    "div",
    {
      class: "capsule",
      bind: { innerText: targetRoundPercent }
    }
  ))))), /* @__PURE__ */ jsx("div", { className: "total" }, /* @__PURE__ */ jsx("div", { className: "level" }, /* @__PURE__ */ jsx("div", { className: "level-item" }, /* @__PURE__ */ jsx("div", null, /* @__PURE__ */ jsx("div", { className: "heading is-capitalized" }, "Total Progress"), /* @__PURE__ */ jsx(
    "div",
    {
      className: "title",
      bind: { innerText: targetRoundPercent }
    }
  ))), /* @__PURE__ */ jsx("div", { className: "level-item is-flex-grow-5" }, /* @__PURE__ */ jsx(
    "progress",
    {
      className: "progress is-info",
      bind: {
        innerText: targetRoundPercent,
        bfDelayValue: targetPercent
      }
    }
  ))), /* @__PURE__ */ jsx("div", { className: "level" }, /* @__PURE__ */ jsx("div", { className: "level-left" }, /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "button",
      events: { click: addItem }
    },
    /* @__PURE__ */ jsx("span", { className: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: Plus })),
    /* @__PURE__ */ jsx("span", null, "Add Item")
  )), /* @__PURE__ */ jsx("div", { className: "level-right" }, /* @__PURE__ */ jsx("div", { className: "buttons has-addons" }, /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "button",
      title: "Pause All",
      events: { click: pauseAll }
    },
    /* @__PURE__ */ jsx("span", { className: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: Pause })),
    /* @__PURE__ */ jsx("span", null, "All")
  ), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "button",
      title: "Resume All",
      events: { click: unpauseAll }
    },
    /* @__PURE__ */ jsx("span", { className: "icon" }, /* @__PURE__ */ jsx(Icon, { icon: Play })),
    /* @__PURE__ */ jsx("span", null, "All")
  ))))), /* @__PURE__ */ jsx(
    "div",
    {
      className: "items",
      childrenBind: children,
      childrenBindMode: "prepend"
    }
  ))));
}

// node_modules/@zumer/orbit/dist/orbit.js
(() => {
  var OrbitProgress = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
      <style>
        :host {
        --o-fill: var(--o-gray-light);
        --o-stroke: var(--o-fill);
        --o-stroke-width: 1;
        --o-back-fill: transparent;
        --o-back-stroke: none;
        --o-back-stroke-width: 1;
      }
      :host(:hover){
        --o-fill: var(--o-gray-light);
        --o-stroke: var(--o-fill);
        --o-stroke-width: 1;
        --o-back-fill: transparent;
        --o-back-stroke: none;
        --o-back-stroke-width: 1;
      }
      svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
        }
        svg * {
          pointer-events: visiblePainted;
        }
        .progress-bar {
          fill: var(--o-fill);
          stroke: var(--o-stroke);
          stroke-width: var(--o-stroke-width);
          transition: fill 0.25s, stroke 0.25s;
          stroke-linejoin: round;
        }
        .progress-bg {
          fill: var(--o-back-fill);
          stroke: var(--o-back-stroke);
          stroke-width: var(--o-back-stroke-width);
        }
      </style>
      <svg viewBox="0 0 100 100">
        <path class="progress-bg" shape-rendering="geometricPrecision" vector-effect="non-scaling-stroke"></path>
        <path class="progress-bar" shape-rendering="geometricPrecision" vector-effect="non-scaling-stroke"></path>
      </svg>
    `;
    }
    connectedCallback() {
      this.update();
      this.observer = new MutationObserver((mutations) => {
        this.observer.disconnect();
        mutations.forEach((mutation) => {
          this.update();
        });
        this.observer.observe(this, { attributes: true, childList: true });
      });
      this.observer.observe(this, { attributes: true, childList: true });
    }
    update() {
      const progressBg = this.shadowRoot.querySelector(".progress-bg");
      const progressBar = this.shadowRoot.querySelector(".progress-bar");
      this.updateArc(progressBg, true);
      this.updateArc(progressBar, false);
    }
    updateArc(arc, full) {
      const { d } = this.calculateArcParameters(full);
      arc.setAttribute("d", d);
    }
    getAttributes() {
      const orbitRadius = parseFloat(getComputedStyle(this).getPropertyValue("r") || 0);
      let orbitNumber = parseFloat(getComputedStyle(this).getPropertyValue("--o-orbit-number"));
      let size = parseFloat(getComputedStyle(this).getPropertyValue("--o-size-ratio"));
      const range = parseFloat(getComputedStyle(this).getPropertyValue("--o-range") || 360);
      const progress = parseFloat(getComputedStyle(this).getPropertyValue("--o-progress") || this.getAttribute("value") || 0);
      const shape = this.getAttribute("shape") || "none";
      const strokeWidth = parseFloat(getComputedStyle(this).getPropertyValue("--o-stroke-width"));
      const arcHeight = orbitRadius / orbitNumber * size - strokeWidth + 0.3;
      const arcHeightPercentage = arcHeight / 2 * 100 / orbitRadius / 2;
      const maxAngle = range;
      const maxValue = parseFloat(this.getAttribute("max")) || 100;
      let innerOuter;
      if (this.classList.contains("outer-orbit")) {
        innerOuter = arcHeightPercentage;
      } else if (this.classList.contains("quarter-outer-orbit")) {
        innerOuter = arcHeightPercentage * -0.5;
      } else if (this.classList.contains("inner-orbit")) {
        innerOuter = arcHeightPercentage * -1;
      } else if (this.classList.contains("quarter-inner-orbit")) {
        innerOuter = arcHeightPercentage * 0.5;
      } else {
        innerOuter = 0;
      }
      const realRadius = 50 + innerOuter;
      return {
        orbitRadius,
        progress,
        strokeWidth,
        realRadius,
        maxAngle,
        maxValue,
        shape,
        arcHeightPercentage,
        orbitNumber,
        arcHeight
      };
    }
    getProgressAngle(full) {
      const { maxAngle, progress, maxValue } = this.getAttributes();
      return full ? (maxValue - 1e-5) / maxValue * maxAngle : progress / maxValue * maxAngle;
    }
    getControlPoint(x, y, x1, y1, direction = "clockwise") {
      let xm = (x + x1) / 2;
      let ym = (y + y1) / 2;
      let dx = x1 - x;
      let dy = y1 - y;
      let xc, yc;
      if (direction === "clockwise") {
        xc = xm + dy * 0.4;
        yc = ym - dx * 0.4;
      } else {
        xc = xm - dy * 0.4;
        yc = ym + dx * 0.4;
      }
      return { xc, yc };
    }
    arcPoint(radius, angle, radiusAdjustment = 0, angleOffsetDegrees = 0) {
      const adjustedRadius = radius + radiusAdjustment;
      const adjustedAngle = angle + angleOffsetDegrees * Math.PI / 180;
      return {
        x: 50 + adjustedRadius * Math.cos(adjustedAngle),
        y: 50 + adjustedRadius * Math.sin(adjustedAngle)
      };
    }
    calculateArcParameters(full) {
      const arcAngle = this.getProgressAngle(full);
      const { realRadius, arcHeightPercentage, orbitNumber, shape, strokeWidth, arcHeight } = this.getAttributes();
      const radius = realRadius;
      let largeArcFlag, d;
      let offset = Math.PI / 2;
      let stroke = strokeWidth;
      let fangle = arcAngle * Math.PI / 180;
      let bigRadius = radius + arcHeightPercentage;
      let smallRadius = radius - arcHeightPercentage !== 0 ? radius - arcHeightPercentage : radius;
      let bigGap = stroke * 1.25 / orbitNumber / bigRadius;
      let smallGap = stroke * 1.25 / orbitNumber / smallRadius;
      let upperAngleStart = bigGap - offset;
      let upperAngleEnd = fangle - bigGap - offset;
      let innerAngleStart = smallGap - offset;
      let innerAngleEnd = fangle - smallGap - offset;
      let upperArcStart = this.arcPoint(bigRadius, upperAngleStart);
      let upperArcEnd = this.arcPoint(bigRadius, upperAngleEnd);
      let innerArcStart = this.arcPoint(smallRadius, innerAngleStart);
      let innerArcEnd = this.arcPoint(smallRadius, innerAngleEnd);
      largeArcFlag = arcAngle <= 180 ? 0 : 1;
      if (shape === "rounded") {
        let curve = arcHeight < 10 ? 5 : arcHeight < 5 ? 2.5 : 10;
        let newUpperStart = this.arcPoint(bigRadius, upperAngleStart, 0, curve / orbitNumber);
        let newUpperEnd = this.arcPoint(bigRadius, upperAngleEnd, 0, -curve / orbitNumber);
        let newInnerStart = this.arcPoint(smallRadius, innerAngleStart, 0, curve / orbitNumber);
        let newInnerEnd = this.arcPoint(smallRadius, innerAngleEnd, 0, -curve / orbitNumber);
        let upperPointStart = this.arcPoint(bigRadius, upperAngleStart, -(curve / 2) / orbitNumber, 0);
        let upperPointEnd = this.arcPoint(bigRadius, upperAngleEnd, -(curve / 2) / orbitNumber, 0);
        let innerPointStart = this.arcPoint(smallRadius, innerAngleStart, curve / 2 / orbitNumber, 0);
        let innerPointEnd = this.arcPoint(smallRadius, innerAngleEnd, curve / 2 / orbitNumber, 0);
        let Q = this.getControlPoint(newUpperEnd.x, newUpperEnd.y, upperPointEnd.x, upperPointEnd.y);
        let Q1 = this.getControlPoint(innerPointEnd.x, innerPointEnd.y, newInnerEnd.x, newInnerEnd.y);
        let Q2 = this.getControlPoint(newInnerStart.x, newInnerStart.y, innerPointStart.x, innerPointStart.y);
        let Q3 = this.getControlPoint(upperPointStart.x, upperPointStart.y, newUpperStart.x, newUpperStart.y);
        d = `M ${newUpperStart.x},${newUpperStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${newUpperEnd.x},${newUpperEnd.y}`;
        d += `Q ${Q.xc}, ${Q.yc} ${upperPointEnd.x}  ${upperPointEnd.y} `;
        d += `L ${upperPointEnd.x} ${upperPointEnd.y}`;
        d += `L ${innerPointEnd.x} ${innerPointEnd.y}`;
        d += `Q ${Q1.xc}, ${Q1.yc} ${newInnerEnd.x} ${newInnerEnd.y} `;
        d += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${newInnerStart.x},${newInnerStart.y}`;
        d += `Q ${Q2.xc}, ${Q2.yc} ${innerPointStart.x}  ${innerPointStart.y} `;
        d += `L ${innerPointStart.x} ${innerPointStart.y}`;
        d += `L ${upperPointStart.x} ${upperPointStart.y}`;
        d += ` Q ${Q3.xc}, ${Q3.yc} ${newUpperStart.x} ${newUpperStart.y} `;
        d += ` Z`;
      } else if (shape === "circle" || shape === "circle-a" || shape === "bullet") {
        d = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        d += ` A 1,1 0 0 1 ${innerArcEnd.x},${innerArcEnd.y} `;
        d += ` A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x},${innerArcStart.y}`;
        d += ` A 1,1 0 0 ${shape === "circle" || shape === "circle-a" ? 1 : 0} ${upperArcStart.x},${upperArcStart.y} `;
        d += ` Z`;
      } else if (shape === "circle-b") {
        let segment = arcHeight * 1.36;
        let newUpperStart = this.arcPoint(bigRadius, upperAngleStart, 0, segment / orbitNumber);
        let newUpperEnd = this.arcPoint(bigRadius, upperAngleEnd, 0, -(segment / orbitNumber));
        let newInnerStart = this.arcPoint(smallRadius, innerAngleStart, 0, segment / orbitNumber);
        let newInnerEnd = this.arcPoint(smallRadius, innerAngleEnd, 0, -(segment / orbitNumber));
        d = `M ${newUpperStart.x},${newUpperStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${newUpperEnd.x},${newUpperEnd.y}`;
        d += ` A 1,1 0 0 1 ${newInnerEnd.x},${newInnerEnd.y} `;
        d += ` A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${newInnerStart.x},${newInnerStart.y}`;
        d += ` A 1,1 0 0 1 ${newUpperStart.x},${newUpperStart.y} `;
        d += ` Z`;
      } else if (shape === "arrow") {
        let middleEnd = this.arcPoint(radius, upperAngleEnd, 0, 24 / orbitNumber / 2);
        let middleStart = this.arcPoint(radius, upperAngleStart, 0, 24 / orbitNumber / 2);
        d = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        d += `L ${middleEnd.x} ${middleEnd.y}`;
        d += `L ${innerArcEnd.x} ${innerArcEnd.y}`;
        d += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x}, ${innerArcStart.y}`;
        d += `L ${middleStart.x} ${middleStart.y}  `;
        d += `Z`;
      } else if (shape === "backslash" || shape === "slash") {
        let newUpperStart = this.arcPoint(bigRadius, upperAngleStart, 0, shape === "backslash" ? 0 : 24 / orbitNumber / 2);
        let newUpperEnd = this.arcPoint(bigRadius, upperAngleEnd, 0, shape === "backslash" ? 0 : 24 / orbitNumber / 2);
        let newInnerStart = this.arcPoint(smallRadius, innerAngleStart, 0, shape === "backslash" ? 24 / orbitNumber / 2 : 0);
        let newInnerEnd = this.arcPoint(smallRadius, innerAngleEnd, 0, shape === "backslash" ? 24 / orbitNumber / 2 : 0);
        d = `M ${newUpperStart.x},${newUpperStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${newUpperEnd.x},${newUpperEnd.y}`;
        d += `L ${newInnerEnd.x} ${newInnerEnd.y}`;
        d += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${newInnerStart.x}, ${newInnerStart.y}`;
        d += `Z`;
      } else if (shape === "zigzag") {
        let s2 = this.arcPoint(radius, upperAngleStart, -arcHeight / orbitNumber / 2, 3);
        let s3 = this.arcPoint(radius, upperAngleStart, 0 / orbitNumber / 2, 0);
        let s4 = this.arcPoint(radius, upperAngleStart, arcHeight / orbitNumber / 2, 3);
        let e2 = this.arcPoint(radius, innerAngleEnd, arcHeight / orbitNumber / 2, 3);
        let e3 = this.arcPoint(radius, innerAngleEnd, 0 / orbitNumber / 2, 0);
        let e4 = this.arcPoint(radius, innerAngleEnd, -arcHeight / orbitNumber / 2, 3);
        d = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        d += `L ${e2.x} ${e2.y}`;
        d += `L ${e3.x} ${e3.y}`;
        d += `L ${e4.x} ${e4.y}`;
        d += `L ${innerArcEnd.x} ${innerArcEnd.y}`;
        d += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x}, ${innerArcStart.y}`;
        d += `L ${s2.x} ${s2.y}`;
        d += `L ${s3.x} ${s3.y}`;
        d += `L ${s4.x} ${s4.y}`;
        d += `Z`;
      } else {
        d = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        d += `L ${innerArcEnd.x} ${innerArcEnd.y}`;
        d += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x}, ${innerArcStart.y}`;
        d += `Z`;
      }
      return { d };
    }
  };
  var template = document.createElement("template");
  template.innerHTML = `
   <style>
      :host {
        --o-fill: var(--o-gray-light);
        --o-stroke: var(--o-fill);
        --o-stroke-width: 1;
        --o-color: currentcolor;
      }
      :host(:hover){
        --o-fill: var(--o-gray-light);
        --o-stroke: var(--o-fill);
        --o-stroke-width: 1;
        --o-color: currentcolor;
      }
      svg {
        width: 100%;
        height: 100%;
        overflow: visible;
        pointer-events: none;
      }
      svg * {
        pointer-events: visiblePainted;
      }
      #orbitShape {
        fill: var(--o-fill);
        stroke: var(--o-stroke);
        stroke-width: var(--o-stroke-width);
        transition: fill 0.25s, stroke 0.25s;
       
      }
      text {
       fill: var(--o-color);
      }
      #orbitPath {
        fill: transparent;
        stroke: none;
        stroke-width: 0;
      }
   </style>
   <svg viewBox="0 0 100 100">
     <path id="orbitShape" shape-rendering="geometricPrecision" vector-effect="non-scaling-stroke"></path>
     <path id="orbitPath"  shape-rendering="geometricPrecision" vector-effect="non-scaling-stroke" ></path>
     <text>
        <textPath href="#orbitPath"  alignment-baseline="middle"></textPath>
      </text>
   </svg>
 `;
  var OrbitArc = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
      this.update();
      this.observer = new MutationObserver((mutations) => {
        this.observer.disconnect();
        mutations.forEach((mutation) => {
          this.update();
        });
        this.observer.observe(this, { attributes: true, childList: true });
      });
      this.observer.observe(this, { attributes: true, childList: true });
      this.textObserver = new MutationObserver(() => {
        const textPath = this.shadowRoot.querySelector("textPath");
        textPath.textContent = this.textContent;
      });
      this.textObserver.observe(this, { characterData: true, subtree: true });
    }
    disconnectedCallback() {
      this.observer.disconnect();
      this.textObserver.disconnect();
    }
    update() {
      const { length, fontSize, textAnchor, fitRange } = this.getAttributes();
      const orbitPath = this.shadowRoot.getElementById("orbitPath");
      const orbitShape = this.shadowRoot.getElementById("orbitShape");
      const text = this.shadowRoot.querySelector("text");
      const textPath = this.shadowRoot.querySelector("textPath");
      const { dShape } = this.calculateArcParameters();
      const { dPath } = this.calculateTextArcParameters();
      orbitShape.setAttribute("d", dShape);
      orbitPath.setAttribute("d", dPath);
      if (textAnchor === "start") {
        textPath.setAttribute("startOffset", "0%");
        textPath.setAttribute("text-anchor", "start");
      } else if (textAnchor === "middle") {
        textPath.setAttribute("startOffset", "50%");
        textPath.setAttribute("text-anchor", "middle");
      } else if (textAnchor === "end") {
        textPath.setAttribute("startOffset", "100%");
        textPath.setAttribute("text-anchor", "end");
      }
      if (fitRange)
        textPath.parentElement.setAttribute("textLength", orbitPath.getTotalLength());
      text.style.fontSize = `calc(${fontSize} * (100 / (${length}) * (12 /  var(--o-orbit-number) ))`;
      textPath.textContent = this.textContent;
    }
    getAttributes() {
      let rawAngle, arcAngle, orbitNumber, size, innerOuter;
      const strokeWidth = parseFloat(getComputedStyle(this).getPropertyValue("--o-stroke-width"));
      const orbitRadius = parseFloat(getComputedStyle(this).getPropertyValue("r") || 0);
      const shape = this.getAttribute("shape") || "none";
      const flip = this.hasAttribute("flip") || this.classList.contains("flip");
      const fitRange = this.hasAttribute("fit-range") || this.classList.contains("fit-range") || false;
      const length = parseFloat(getComputedStyle(this).getPropertyValue("--o-force"));
      const textAnchor = this.getAttribute("text-anchor") || "middle";
      const fontSize = getComputedStyle(this).getPropertyValue("font-size") || getComputedStyle(this).getPropertyValue("--font-size");
      const range = parseFloat(getComputedStyle(this).getPropertyValue("--o-range") || 360);
      const value = parseFloat(this.getAttribute("value"));
      if (value) {
        arcAngle = this.getProgressAngle(range, value);
        const prevElement = this.previousElementSibling;
        const stackOffset = prevElement ? parseFloat(getComputedStyle(prevElement).getPropertyValue("--o_stack")) : 0;
        this.style.setProperty("--o_stack", stackOffset + arcAngle);
        if (stackOffset >= 0 && flip)
          this.style.setProperty("--o-angle-composite", parseFloat(stackOffset) + "deg");
        if (stackOffset > 0 && !flip)
          this.style.setProperty("--o-angle-composite", parseFloat(stackOffset) + "deg");
      } else {
        rawAngle = getComputedStyle(this).getPropertyValue("--o-angle");
        arcAngle = calcularExpresionCSS(rawAngle);
      }
      orbitNumber = parseFloat(getComputedStyle(this).getPropertyValue("--o-orbit-number"));
      size = parseFloat(getComputedStyle(this).getPropertyValue("--o-size-ratio"));
      const arcHeight = orbitRadius / orbitNumber * size - strokeWidth + 0.3;
      const arcHeightPercentage = arcHeight / 2 * 100 / orbitRadius / 2;
      const gap = parseFloat(getComputedStyle(this).getPropertyValue("--o-gap"));
      if (this.classList.contains("outer-orbit")) {
        innerOuter = arcHeightPercentage;
      } else if (this.classList.contains("quarter-outer-orbit")) {
        innerOuter = arcHeightPercentage * -0.5;
      } else if (this.classList.contains("inner-orbit")) {
        innerOuter = arcHeightPercentage * -1;
      } else if (this.classList.contains("quarter-inner-orbit")) {
        innerOuter = arcHeightPercentage * 0.5;
      } else {
        innerOuter = 0;
      }
      const realRadius = 50 + innerOuter;
      return {
        orbitRadius,
        arcHeight,
        realRadius,
        gap,
        arcAngle,
        shape,
        length,
        fontSize,
        flip,
        fitRange,
        textAnchor,
        arcHeightPercentage,
        innerOuter,
        orbitNumber,
        size,
        strokeWidth
      };
    }
    getProgressAngle(maxAngle, value) {
      const progress = value;
      const maxValue = parseFloat(this.getAttribute("max")) || 100;
      return progress / maxValue * maxAngle;
    }
    getControlPoint(x, y, x1, y1, direction = "clockwise") {
      let xm = (x + x1) / 2;
      let ym = (y + y1) / 2;
      let dx = x1 - x;
      let dy = y1 - y;
      let xc, yc;
      if (direction === "clockwise") {
        xc = xm + dy * 0.4;
        yc = ym - dx * 0.4;
      } else {
        xc = xm - dy * 0.4;
        yc = ym + dx * 0.4;
      }
      return { xc, yc };
    }
    arcPoint(radius, angle, radiusAdjustment = 0, angleOffsetDegrees = 0) {
      const adjustedRadius = radius + radiusAdjustment;
      const adjustedAngle = angle + angleOffsetDegrees * Math.PI / 180;
      return {
        x: 50 + adjustedRadius * Math.cos(adjustedAngle),
        y: 50 + adjustedRadius * Math.sin(adjustedAngle)
      };
    }
    calculateArcParameters() {
      const { arcAngle, realRadius, gap, arcHeightPercentage, orbitNumber, shape, strokeWidth, arcHeight } = this.getAttributes();
      const radius = realRadius;
      let largeArcFlag, dShape;
      let offset = Math.PI / 2;
      let stroke = strokeWidth;
      let fangle = arcAngle * Math.PI / 180;
      let bigRadius = radius + arcHeightPercentage;
      let smallRadius = radius - arcHeightPercentage !== 0 ? radius - arcHeightPercentage : radius;
      let bigGap = (gap + stroke * 1.25) / orbitNumber / bigRadius;
      let smallGap = (gap + stroke * 1.25) / orbitNumber / smallRadius;
      let upperAngleStart = bigGap - offset;
      let upperAngleEnd = fangle - bigGap - offset;
      let innerAngleStart = smallGap - offset;
      let innerAngleEnd = fangle - smallGap - offset;
      let upperArcStart = this.arcPoint(bigRadius, upperAngleStart);
      let upperArcEnd = this.arcPoint(bigRadius, upperAngleEnd);
      let innerArcStart = this.arcPoint(smallRadius, innerAngleStart);
      let innerArcEnd = this.arcPoint(smallRadius, innerAngleEnd);
      largeArcFlag = arcAngle <= 180 ? 0 : 1;
      if (shape === "rounded") {
        let curve = arcHeight < 10 ? 5 : arcHeight < 5 ? 2.5 : 10;
        let newUpperStart = this.arcPoint(bigRadius, upperAngleStart, 0, curve / orbitNumber);
        let newUpperEnd = this.arcPoint(bigRadius, upperAngleEnd, 0, -curve / orbitNumber);
        let newInnerStart = this.arcPoint(smallRadius, innerAngleStart, 0, curve / orbitNumber);
        let newInnerEnd = this.arcPoint(smallRadius, innerAngleEnd, 0, -curve / orbitNumber);
        let upperPointStart = this.arcPoint(bigRadius, upperAngleStart, -(curve / 2) / orbitNumber, 0);
        let upperPointEnd = this.arcPoint(bigRadius, upperAngleEnd, -(curve / 2) / orbitNumber, 0);
        let innerPointStart = this.arcPoint(smallRadius, innerAngleStart, curve / 2 / orbitNumber, 0);
        let innerPointEnd = this.arcPoint(smallRadius, innerAngleEnd, curve / 2 / orbitNumber, 0);
        let Q = this.getControlPoint(newUpperEnd.x, newUpperEnd.y, upperPointEnd.x, upperPointEnd.y);
        let Q1 = this.getControlPoint(innerPointEnd.x, innerPointEnd.y, newInnerEnd.x, newInnerEnd.y);
        let Q2 = this.getControlPoint(newInnerStart.x, newInnerStart.y, innerPointStart.x, innerPointStart.y);
        let Q3 = this.getControlPoint(upperPointStart.x, upperPointStart.y, newUpperStart.x, newUpperStart.y);
        dShape = `M ${newUpperStart.x},${newUpperStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${newUpperEnd.x},${newUpperEnd.y}`;
        dShape += `Q ${Q.xc}, ${Q.yc} ${upperPointEnd.x}  ${upperPointEnd.y} `;
        dShape += `L ${upperPointEnd.x} ${upperPointEnd.y}`;
        dShape += `L ${innerPointEnd.x} ${innerPointEnd.y}`;
        dShape += `Q ${Q1.xc}, ${Q1.yc} ${newInnerEnd.x} ${newInnerEnd.y} `;
        dShape += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${newInnerStart.x},${newInnerStart.y}`;
        dShape += `Q ${Q2.xc}, ${Q2.yc} ${innerPointStart.x}  ${innerPointStart.y} `;
        dShape += `L ${innerPointStart.x} ${innerPointStart.y}`;
        dShape += `L ${upperPointStart.x} ${upperPointStart.y}`;
        dShape += ` Q ${Q3.xc}, ${Q3.yc} ${newUpperStart.x} ${newUpperStart.y} `;
        dShape += ` Z`;
      } else if (shape === "circle" || shape === "circle-a" || shape === "bullet") {
        dShape = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        dShape += ` A 1,1 0 0 1 ${innerArcEnd.x},${innerArcEnd.y} `;
        dShape += ` A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x},${innerArcStart.y}`;
        dShape += ` A 1,1 0 0 ${shape === "circle" || shape === "circle-a" ? 1 : 0} ${upperArcStart.x},${upperArcStart.y} `;
        dShape += ` Z`;
      } else if (shape === "circle-b") {
        let segment = arcHeight * 1.36;
        let newUpperStart = this.arcPoint(bigRadius, upperAngleStart, 0, segment / orbitNumber);
        let newUpperEnd = this.arcPoint(bigRadius, upperAngleEnd, 0, -(segment / orbitNumber));
        let newInnerStart = this.arcPoint(smallRadius, innerAngleStart, 0, segment / orbitNumber);
        let newInnerEnd = this.arcPoint(smallRadius, innerAngleEnd, 0, -(segment / orbitNumber));
        dShape = `M ${newUpperStart.x},${newUpperStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${newUpperEnd.x},${newUpperEnd.y}`;
        dShape += ` A 1,1 0 0 1 ${newInnerEnd.x},${newInnerEnd.y} `;
        dShape += ` A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${newInnerStart.x},${newInnerStart.y}`;
        dShape += ` A 1,1 0 0 1 ${newUpperStart.x},${newUpperStart.y} `;
        dShape += ` Z`;
      } else if (shape === "arrow") {
        let middleEnd = this.arcPoint(radius, upperAngleEnd, 0, 24 / orbitNumber / 2);
        let middleStart = this.arcPoint(radius, upperAngleStart, 0, 24 / orbitNumber / 2);
        dShape = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        dShape += `L ${middleEnd.x} ${middleEnd.y}`;
        dShape += `L ${innerArcEnd.x} ${innerArcEnd.y}`;
        dShape += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x}, ${innerArcStart.y}`;
        dShape += `L ${middleStart.x} ${middleStart.y}  `;
        dShape += `Z`;
      } else if (shape === "backslash" || shape === "slash") {
        let newUpperStart = this.arcPoint(bigRadius, upperAngleStart, 0, shape === "backslash" ? 0 : 24 / orbitNumber / 2);
        let newUpperEnd = this.arcPoint(bigRadius, upperAngleEnd, 0, shape === "backslash" ? 0 : 24 / orbitNumber / 2);
        let newInnerStart = this.arcPoint(smallRadius, innerAngleStart, 0, shape === "backslash" ? 24 / orbitNumber / 2 : 0);
        let newInnerEnd = this.arcPoint(smallRadius, innerAngleEnd, 0, shape === "backslash" ? 24 / orbitNumber / 2 : 0);
        dShape = `M ${newUpperStart.x},${newUpperStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${newUpperEnd.x},${newUpperEnd.y}`;
        dShape += `L ${newInnerEnd.x} ${newInnerEnd.y}`;
        dShape += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${newInnerStart.x}, ${newInnerStart.y}`;
        dShape += `Z`;
      } else if (shape === "zigzag") {
        let s2 = this.arcPoint(radius, upperAngleStart, -arcHeight / orbitNumber / 2, 3);
        let s3 = this.arcPoint(radius, upperAngleStart, 0 / orbitNumber / 2, 0);
        let s4 = this.arcPoint(radius, upperAngleStart, arcHeight / orbitNumber / 2, 3);
        let e2 = this.arcPoint(radius, innerAngleEnd, arcHeight / orbitNumber / 2, 3);
        let e3 = this.arcPoint(radius, innerAngleEnd, 0 / orbitNumber / 2, 0);
        let e4 = this.arcPoint(radius, innerAngleEnd, -arcHeight / orbitNumber / 2, 3);
        dShape = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        dShape += `L ${e2.x} ${e2.y}`;
        dShape += `L ${e3.x} ${e3.y}`;
        dShape += `L ${e4.x} ${e4.y}`;
        dShape += `L ${innerArcEnd.x} ${innerArcEnd.y}`;
        dShape += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x}, ${innerArcStart.y}`;
        dShape += `L ${s2.x} ${s2.y}`;
        dShape += `L ${s3.x} ${s3.y}`;
        dShape += `L ${s4.x} ${s4.y}`;
        dShape += `Z`;
      } else {
        dShape = `M ${upperArcStart.x},${upperArcStart.y} A ${bigRadius},${bigRadius} 0 ${largeArcFlag} 1 ${upperArcEnd.x},${upperArcEnd.y}`;
        dShape += `L ${innerArcEnd.x} ${innerArcEnd.y}`;
        dShape += `A ${smallRadius},${smallRadius} 0 ${largeArcFlag} 0 ${innerArcStart.x}, ${innerArcStart.y}`;
        dShape += `Z`;
      }
      return { dShape };
    }
    calculateTextArcParameters() {
      const { arcAngle, realRadius, gap, flip } = this.getAttributes();
      const radius = realRadius;
      let startX, startY, endX, endY, largeArcFlag, dPath, sweepFlag;
      let adjustedGap = gap * 0.5;
      sweepFlag = flip ? 0 : 1;
      largeArcFlag = arcAngle <= 180 ? 0 : 1;
      let coordX1 = 50 + radius * Math.cos((-90 + adjustedGap) * (Math.PI / 180));
      let coordY1 = 50 + radius * Math.sin((-90 + adjustedGap) * (Math.PI / 180));
      let coordX2 = 50 + radius * Math.cos((arcAngle - 90 - adjustedGap) * Math.PI / 180);
      let coordY2 = 50 + radius * Math.sin((arcAngle - 90 - adjustedGap) * Math.PI / 180);
      if (flip) {
        startX = coordX2;
        startY = coordY2;
        endX = coordX1;
        endY = coordY1;
      } else {
        startX = coordX1;
        startY = coordY1;
        endX = coordX2;
        endY = coordY2;
      }
      dPath = `M ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX},${endY}`;
      return { dPath };
    }
  };
  function calcularExpresionCSS(cssExpression) {
    const match = cssExpression.match(
      /calc\(\s*([\d.]+)deg\s*\/\s*\(\s*(\d+)\s*-\s*(\d+)\s*\)\s*\)/
    );
    if (match) {
      const value = parseFloat(match[1]);
      const divisor = parseInt(match[2]) - parseInt(match[3]);
      if (!isNaN(value) && !isNaN(divisor) && divisor !== 0) {
        return value / divisor;
      }
    }
  }
  var Orbit = {};
  Orbit = {
    resize: (parentElementSelector) => {
      const parentElement = document.querySelector(parentElementSelector);
      if (!parentElement) {
        console.error(`Not found: ${parentElementSelector}`);
        return;
      }
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width } = entry.contentRect;
          const childElements = parentElement.querySelectorAll(".gravity-spot");
          if (childElements) {
            childElements.forEach((childElement) => {
              let gravityForce = getComputedStyle(childElement).getPropertyValue("--o-force");
              let forceRatio = width / 500;
              childElement.style.setProperty("--o-force-ratio", `${forceRatio}`);
            });
          } else {
            console.error("No gravity-spot found");
          }
        }
      });
      resizeObserver.observe(parentElement);
    }
  };
  if (!customElements.get("o-progress")) {
    customElements.define("o-progress", OrbitProgress);
  }
  if (!customElements.get("o-arc")) {
    customElements.define("o-arc", OrbitArc);
  }
  window.Orbit = Orbit;
})();

// index.ts
var spy = create();
var container = document.getElementById("container");
run(container, Main);
/*! Bundled license information:

rxjs-spy/esm/index.js:
rxjs-spy/esm/index.js:
rxjs-spy/esm/operators/index.js:
rxjs-spy/esm/operators/index.js:
  (**
   * @license Use of this source code is governed by an MIT-style license that
   * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
   *)

lucide/dist/esm/createElement.js:
lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/icons/fast-forward.js:
lucide/dist/esm/icons/github.js:
lucide/dist/esm/icons/pause.js:
lucide/dist/esm/icons/play.js:
lucide/dist/esm/icons/plus.js:
lucide/dist/esm/icons/rewind.js:
lucide/dist/esm/icons/skip-forward.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.307.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
