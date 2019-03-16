(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.U = factory());
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var objectSpread = _objectSpread;

  var version = "2.2.0";

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
    function _typeof2(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof2(obj) {
          return typeof obj;
        };
      } else {
        _typeof2 = function _typeof2(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof2(obj);
    }

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        module.exports = _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        module.exports = _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    module.exports = _typeof;
  });

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var document = _global.document; // typeof document.createElement is 'object' in old IE

  var is = _isObject(document) && _isObject(document.createElement);

  var _domCreate = function (it) {
    return is ? document.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string

  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;
  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var _objectDp = {
    f: f
  };

  var dP$1 = _objectDp.f;
  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name'; // 19.2.4.2 name

  NAME in FProto || _descriptors && dP$1(FProto, NAME, {
    configurable: true,
    get: function () {
      try {
        return ('' + this).match(nameRE)[1];
      } catch (e) {
        return '';
      }
    }
  });

  /** @module Type */

  /**
   * 返回val的类型。
   * @function getType
   * @param {*} val - 需要检查的值。
   * @return {string}
   * @example
   * U.getType(new Set([1, 2]))
   * // => 'set'
   */
  var getType = function getType(val) {
    return isUndefined(val) ? 'undefined' : isNull(val) ? 'null' : val.constructor.name.toLowerCase();
  };
  /**
   * 检查value是否为number类型。使用typeof来检查，返回布尔值。
   * @function isNumber
   * @param {*} value - 需要检查的值。
   * @return {boolean}
   * @example
   * U.isNumber(3)
   * // => true
   *
   * U.isNumber(Number.MIN_VALUE)
   * // => true
   *
   * U.isNumber(Infinity)
   * // => true
   *
   * U.isNumber('3')
   * // => false 
   */

  var isNumber = function isNumber(value) {
    return typeof value === 'number';
  };
  /**
   * 检查值是否为字符串。使用typeof来检查，返回布尔值。
   * @function isString
   * @param {*} value - 需要检查的值。
   * @return {boolean}
   * @example
   * U.isString(3)
   * // => false
   *
   * U.isString('3')
   * // => true
   */

  var isString = function isString(value) {
    return typeof value === 'string';
  };
  /**
   * 检查值是否为null对象。使用typeof来检查，返回布尔值。
   * @function isNull
   * @param {*} value - 需要检查的值。
   * @return {boolean}
   * @example
   * U.isNull(3)
   * // => false
   *
   * U.isNull(null)
   * // => true
   */

  var isNull = function isNull(value) {
    return value === null;
  };
  /**
   * 检查值是否为undefined对象。使用typeof来检查，返回布尔值。
   * @function isUndefined
   * @param {*} value - 需要检查的值。
   * @return {boolean}
   * @example
   * U.isUndefined(undefined)
   * // => true
   *
   * U.isUndefined(null)
   * // => false
   */

  var isUndefined = function isUndefined(value) {
    return value === undefined;
  };
  /**
   * 检查值是否为布尔值。使用typeof来检查，返回布尔值。
   * @function isBoolean
   * @param {*} value - 需要检查的值。
   * @return {boolean}
   * @example
   * U.isBoolean(false)
   * // => true
   *
   * U.isBoolean(null)
   * // => false
   */

  var isBoolean = function isBoolean(value) {
    return typeof value === 'boolean';
  };
  /**
   * 检查值是否为symbol类型。使用typeof来检查，返回布尔值。
   * @function isSymbol
   * @param {*} value - 需要检查的值。
   * @return {boolean}
   * @example
   * U.isSymbol(Symbol('x'))
   * // => true
   */

  var isSymbol = function isSymbol(value) {
    return _typeof_1(value) === 'symbol';
  };
  /**
   * 检查值是否为function类型。使用typeof来检查，返回布尔值。
   * @function isFunction
   * @param {*} value - 需要检查的值。
   * @return {boolean}
   * @example
   * U.isFunction(3)
   * // => false
   *
   * U.isFunction(function () {})
   * // => true
   */

  var isFunction = function isFunction(value) {
    return typeof value === 'function';
  };
  /**
   * 使用Array.isArray方法检查arr是否为数组类型，返回布尔值。
   * @function isArray
   * @param {*} arr - 需要检查的值。
   * @return {boolean}
   * @example
   * U.isArray([])
   * // => true
   *
   * U.isArray(null)
   * // => false
   */

  var isArray = function isArray(arr) {
    return Array.isArray(arr);
  };
  /**
   * 检查alue是否为对象类型，返回布尔值。
   * @function isObject
   * @param {*} value - 需要检查的值。
   * @return {boolean}
   * @example
   * U.isObject(null)
   * // => false
   *
   * U.isObject([1, 2])
   * // => false
   *
   * U.isObject({})
   * // => true
   */

  var isObject = function isObject(value) {
    return value instanceof Object && !isArray(value);
  };

  var type = /*#__PURE__*/Object.freeze({
    getType: getType,
    isNumber: isNumber,
    isString: isString,
    isNull: isNull,
    isUndefined: isUndefined,
    isBoolean: isBoolean,
    isSymbol: isSymbol,
    isFunction: isFunction,
    isArray: isArray,
    isObject: isObject
  });

  var _core = createCommonjsModule(function (module) {
    var core = module.exports = {
      version: '2.6.0'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var id = 0;
  var px = Math.random();

  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _redefine = createCommonjsModule(function (module) {
    var SRC = _uid('src');
    var TO_STRING = 'toString';
    var $toString = Function[TO_STRING];
    var TPL = ('' + $toString).split(TO_STRING);

    _core.inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

      if (O === _global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        _hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        _hide(O, key, val);
      } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;

    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

      out = (own ? target : source)[key]; // bind timers to global for call from export context

      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // extend global

      if (target) _redefine(target, key, out, type & $export.U); // export

      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };

  _global.core = _core; // type bitmap

  $export.F = 1; // forced

  $export.G = 2; // global

  $export.S = 4; // static

  $export.P = 8; // proto

  $export.B = 16; // bind

  $export.W = 32; // wrap

  $export.U = 64; // safe

  $export.R = 128; // real proto method for `library`

  var _export = $export;

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;

  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  var min = Math.min;

  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  var _stringRepeat = function repeat(count) {
    var str = String(_defined(this));
    var res = '';
    var n = _toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;

    return res;
  };

  var _stringPad = function (that, maxLength, fillString, left) {
    var S = String(_defined(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = _toLength(maxLength);
    if (intMaxLength <= stringLength || fillStr == '') return S;
    var fillLen = intMaxLength - stringLength;
    var stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };

  var navigator = _global.navigator;

  var _userAgent = navigator && navigator.userAgent || '';

  // https://github.com/zloirock/core-js/issues/280


  _export(_export.P + _export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(_userAgent), 'String', {
    padEnd: function padEnd(maxLength
    /* , fillString = ' ' */
    ) {
      return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });

  _export(_export.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: _stringRepeat
  });

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // false -> String#codePointAt

  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var at = _stringAt(true); // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex

  var _advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
  };

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var _library = false;

  var _shared = createCommonjsModule(function (module) {
    var SHARED = '__core-js_shared__';
    var store = _global[SHARED] || (_global[SHARED] = {});
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: _core.version,
      mode: _library ? 'pure' : 'global',
      copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
    });
  });

  var _wks = createCommonjsModule(function (module) {
    var store = _shared('wks');
    var Symbol = _global.Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
    };

    $exports.store = store;
  });

  var TAG = _wks('toStringTag'); // ES3 wrong here

  var ARG = _cof(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) {
      /* empty */
    }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
    : ARG ? _cof(O) // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec

  var _regexpExecAbstract = function (R, S) {
    var exec = R.exec;

    if (typeof exec === 'function') {
      var result = exec.call(R, S);

      if (typeof result !== 'object') {
        throw new TypeError('RegExp exec method returned something other than an Object or null');
      }

      return result;
    }

    if (_classof(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }

    return builtinExec.call(R, S);
  };

  var _flags = function () {
    var that = _anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.

  var nativeReplace = String.prototype.replace;
  var patchedExec = nativeExec;
  var LAST_INDEX = 'lastIndex';

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/,
        re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
  }(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var _regexpExec = patchedExec;

  _export({
    target: 'RegExp',
    proto: true,
    forced: _regexpExec !== /./.exec
  }, {
    exec: _regexpExec
  });

  var SPECIES = _wks('species');
  var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };

    return ''.replace(re, '$<a>') !== '7';
  });

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
  }();

  var _fixReWks = function (KEY, length, exec) {
    var SYMBOL = _wks(KEY);
    var DELEGATES_TO_SYMBOL = !_fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      re.exec = function () {
        execCalled = true;
        return null;
      };

      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};

        re.constructor[SPECIES] = function () {
          return re;
        };
      }

      re[SYMBOL]('');
      return !execCalled;
    }) : undefined;

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var fns = exec(_defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === _regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      });
      var strfn = fns[0];
      var rxfn = fns[1];
      _redefine(String.prototype, KEY, strfn);
      _hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return rxfn.call(string, this, arg);
      } // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return rxfn.call(string, this);
      });
    }
  };

  var max = Math.max;
  var min$1 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  }; // @@replace logic


  _fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
    return [// `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = _regexpExecAbstract(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min$1(_toInteger(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + S.slice(nextSourcePosition);
    }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

      if (namedCaptures !== undefined) {
        namedCaptures = _toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }

      return $replace.call(replacement, symbols, function (match, ch) {
        var capture;

        switch (ch.charAt(0)) {
          case '$':
            return '$';

          case '&':
            return matched;

          case '`':
            return str.slice(0, position);

          case "'":
            return str.slice(tailPos);

          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;

          default:
            // \d\d?
            var n = +ch;
            if (n === 0) return ch;

            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return ch;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return ch;
            }

            capture = captures[n - 1];
        }

        return capture === undefined ? '' : capture;
      });
    }
  });

  var MATCH = _wks('match');

  var _isRegexp = function (it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
  };

  var SPECIES$1 = _wks('species');

  var _speciesConstructor = function (O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES$1]) == undefined ? D : _aFunction(S);
  };

  var $min = Math.min;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX$1 = 'lastIndex'; // eslint-disable-next-line no-empty

  var SUPPORTS_Y = !!function () {
    try {
      return new RegExp('x', 'y');
    } catch (e) {}
  }(); // @@split logic

  _fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
    var internalSplit = $split;

    if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

        if (!_isRegexp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? 4294967295 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = _regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy[LAST_INDEX$1];

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }

          if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
        }

        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      }; // Chakra, V8

    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
      };
    }

    return [// `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      var C = _speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? 0xffffffff : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;

        if (z === null || (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
          q = _advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      A.push(S.slice(p));
      return A;
    }];
  });

  var f$1 = {}.propertyIsEnumerable;
  var _objectPie = {
    f: f$1
  };

  // eslint-disable-next-line no-prototype-builtins

  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  var gOPD = Object.getOwnPropertyDescriptor;
  var f$2 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) try {
      return gOPD(O, P);
    } catch (e) {
      /* empty */
    }
    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
  };
  var _objectGopd = {
    f: f$2
  };

  /* eslint-disable no-proto */

  var check = function (O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };

  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }

      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };

  var setPrototypeOf = _setProto.set;

  var _inheritIfRequired = function (that, target, C) {
    var S = target.constructor;
    var P;

    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    }

    return that;
  };

  var max$1 = Math.max;
  var min$2 = Math.min;

  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max$1(index + length, 0) : min$2(index, length);
  };

  // true  -> Array#includes

  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key); // Don't enum bug & hidden keys


    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }

    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

  var _objectGopn = {
    f: f$3
  };

  var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var space = '[' + _stringWs + ']';
  var non = '\u200b\u0085';
  var ltrim = RegExp('^' + space + space + '*');
  var rtrim = RegExp(space + space + '*$');

  var exporter = function (KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = _fails(function () {
      return !!_stringWs[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    _export(_export.P + _export.F * FORCE, 'String', exp);
  }; // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim


  var trim = exporter.trim = function (string, TYPE) {
    string = String(_defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  var _stringTrim = exporter;

  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;

    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);

    return O;
  };

  var document$1 = _global.document;

  var _html = document$1 && document$1.documentElement;

  var IE_PROTO$1 = _sharedKey('IE_PROTO');

  var Empty = function () {
    /* empty */
  };

  var PROTOTYPE$1 = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);

    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;

    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];

    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = createDict();

    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var gOPN = _objectGopn.f;
  var gOPD$1 = _objectGopd.f;
  var dP$2 = _objectDp.f;
  var $trim = _stringTrim.trim;
  var NUMBER = 'Number';
  var $Number = _global[NUMBER];
  var Base = $Number;
  var proto = $Number.prototype; // Opera ~12 has broken Object#toString

  var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
  var TRIM = 'trim' in String.prototype; // 7.1.3 ToNumber(argument)

  var toNumber = function (argument) {
    var it = _toPrimitive(argument, false);

    if (typeof it == 'string' && it.length > 2) {
      it = TRIM ? it.trim() : $trim(it, 3);
      var first = it.charCodeAt(0);
      var third, radix, maxCode;

      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal /^0b[01]+$/i

          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal /^0o[0-7]+$/i

          default:
            return +it;
        }

        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
          code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols

          if (code < 48 || code > maxCode) return NaN;
        }

        return parseInt(digits, radix);
      }
    }

    return +it;
  };

  if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
    $Number = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var that = this;
      return that instanceof $Number // check on 1..constructor(foo) case
      && (BROKEN_COF ? _fails(function () {
        proto.valueOf.call(that);
      }) : _cof(that) != NUMBER) ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };

    for (var keys = _descriptors ? gOPN(Base) : ( // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
      if (_has(Base, key = keys[j]) && !_has($Number, key)) {
        dP$2($Number, key, gOPD$1(Base, key));
      }
    }

    $Number.prototype = proto;
    proto.constructor = $Number;
    _redefine(_global, NUMBER, $Number);
  }

  var floor$2 = Math.floor;

  var _isInteger = function isInteger(it) {
    return !_isObject(it) && isFinite(it) && floor$2(it) === it;
  };

  _export(_export.S, 'Number', {
    isInteger: _isInteger
  });

  /**
   * 检查给定值是否为整数，返回布尔值。
   * @function isInt
   * @param {*} val - 需要检查的值。
   * @return {boolean}
   * @example
   * U.isInt(0)
   * // => true
   *
   * U.isInt(1.15)
   * // => false
   * 
   * U.isInt('3')
   * // => false
   */

  var isInt = function isInt(val) {
    return Number.isInteger(val);
  };
  /**
   * 将数字value格式化为千位符数字字符串。如果value是数字，则返回格式化后的字符串，否则报错。
   * @function toThousands
   * @param {number|string} value - 需要千位符格式化的值。
   * @param {string} [separator=','] - 可选，分隔符。
   * @returns {string|NaN}
   * @example
   * U.toThousands(-1545454)
   * // => '-1,545,454'
   *
   * U.toThousands(1545454.1545)
   * // => '1,545,454.1545'
   * 
   * U.toThousands('1545454.1545', '-')
   * // => '1-545-454.1545'
   *
   * U.toThousands(0)
   * // => '0'
   *
   * U.toThousands(null)
   * // => '0'
   *
   * U.toThousands(undefined)
   * // => NaN
   */

  var toThousands = function toThousands(value) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
    return isNull(value) ? '0' : isNaN(Number(value)) ? NaN : "".concat(value).split('.').map(function (v, i) {
      return i === 0 ? v.replace(/([-|+]?\d)(?=(\d{3})+$)/g, "$1".concat(separator)) : v;
    }).join('.');
  };
  /**
   * 数字value是否在两个数之间。如果不设置end，则start默认为0，判断value是否在0与start之间。
   * @function inRange
   * @param {number} value - 需要判断的数值。
   * @param {number} [start=0] - 起点值，只提供两个参数时start默认为0。
   * @param {number} end - 终点值，只提供两个参数时取第二个参数值为该值，且起点值为0。
   * @return {boolean}
   * @example
   * U.inRange(5, 4)
   * // => false
   *
   * U.inRange(5, 7)
   * // => true
   *
   * U.inRange(5, 4, 7)
   * // => true
   *
   * U.inRange(5, 7, 10)
   * // => false
   *
   * U.inRange(5, 10, 7)
   * // => false
   */

  var inRange = function inRange(value, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (end && start > end) {
      var _ref = [start, end];
      end = _ref[0];
      start = _ref[1];
    }

    return isNull(end) ? value >= 0 && value < start : value >= start && value < end;
  };
  /**
   * 四舍五入函数
   * @function round
   * @param {number} val - 数字。
   * @param {number} [decimals=0] - 可选，保留的数字精度，默认为0。
   * @return {number}
   * @example
   * U.round(1.2006, 3)
   * // => 1.201
   *
   * U.round(1.2006)
   * // => 1
   */

  var round = function round(val) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Number("".concat(Math.round("".concat(val, "e").concat(decimals)), "e-").concat(decimals));
  };
  /**
   * 生成一个start～end之间随机数字
   * @function random
   * @param {number} start - 可选，数字。
   * @param {number} end - 可选，数字。
   * @return {number}
   * @example
   * const a = U.random()
   * // => 0 < a < 1
   *
   * const b = U.random(3)
   * // => 0 < b < 3
   * 
   * const c = U.random(3, 5)
   * // => 3 < c < 5
   * 
   * const d = U.random(5, 3)
   * // => 3 < d < 5
   * 
   * const e = U.random(-1)
   * // => -1 < e < 0
   * 
   * const f = U.random(-1, 1)
   * // => -1 < f < 1
   */

  var random = function random(start, end) {
    return start && end ? Math.random() * Math.abs(start - end) + Math.min(start, end) : Math.random() * (start || end || 1);
  };
  /**
   * 保留小数位数
   * @function keepFixed
   * @param {number|string} val - 数值
   * @param {number} precision - 非负整数，保留小数的位数
   * @param {boolean} [useFiller=true] - 可选，小数位数不足时是否使用0填充，默认为true
   * @return {string}
   * @example
   * U.keepFixed(-15.12, 4)
   * // => -15.1200
   * 
   * * U.keepFixed(15.1234, 2)
   * // => -15.12
   */

  var keepFixed = function keepFixed(val, precision) {
    var useFiller = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var i = "".concat(val).indexOf('.');

    if (i < 0) {
      return useFiller ? "".concat(val, ".").concat('0'.repeat(precision)) : "".concat(val);
    }

    i += precision + 1;
    val = "".concat(val).substring(0, i);
    return useFiller ? val.padEnd(i, '0') : val;
  };

  var number = /*#__PURE__*/Object.freeze({
    isInt: isInt,
    toThousands: toThousands,
    inRange: inRange,
    round: round,
    random: random,
    keepFixed: keepFixed
  });

  /** @module Function */

  /**
   * 将函数fn转为一次函数。返回函数，函数只能执行一次。
   * @function noce
   * @param {function} fn - 执行的函数。
   * @return {function}
   * @example
   * const fn = once(() => '5')
   * console.log([fn(), fn()])
   * // => ['5', undefined]
   */
  var once = function once(fn) {
    var called = false;
    return function () {
      if (called) return;
      called = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return fn.apply(this, args);
    };
  };
  /**
   * 创建一个新的函数fn，在调用时设置this关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。
   * @function bind
   * @param {function} fn - 函数。
   * @param {obj} context - this绑定的对象。
   * @param {*} boundArgs - 默认参数。
   * @return {function}
   * @example
   * function greet(greeting, punctuation) {
   *   return greeting + ' ' + this.user + punctuation
   * }
   * const freddy = { user: 'fred' }
   * const freddyBound = U.bind(greet, freddy)
   * console.log(freddyBound('hi', '!')); 
   * // => 'hi fred!'
   */

  var bind = function bind(fn, context) {
    for (var _len2 = arguments.length, boundArgs = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      boundArgs[_key2 - 2] = arguments[_key2];
    }

    return function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return fn.apply(context, boundArgs.concat(args));
    };
  };
  /**
   * 将函数fn转为防抖函数。返回防抖函数。
   * @function debounce
   * @param {function} fn - 函数。
   * @param {number} [delay=0] - 可选，防抖动延迟时长，单位为ms，默认为0。
   * @returns {function}
   * @example
   * window.addEventListener('resize', U.debounce(() => {
   *   console.log(window.innerWidth);
   *   console.log(window.innerHeight);
   * }, 250));
   * // => 调整浏览器窗口尺寸，在250ms后控制台将打印一次窗口尺寸
   */

  var debounce = function debounce(fn) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var timeoutId;
    return function () {
      var _this = this;

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        return fn.apply(_this, args);
      }, delay);
    };
  };
  /**
   * 将函数fn转为节流函数。返回节流函数。
   * @function throttle
   * @param {function} fn - 函数。
   * @param {number} wait - 节流时长，单位为ms。
   * @return {function}
   * @example
   * window.addEventListener('resize', U.throttle(function(evt) {
   *   console.log(window.innerWidth);
   *   console.log(window.innerHeight);
   * }, 250));
   * // 调整浏览器窗口尺寸，没间隔250ms控制台将打印一次窗口尺寸
   */

  var throttle = function throttle(fn, wait) {
    var inThrottle, lastFn, lastTime;
    return function () {
      var context = this,
          args = arguments;

      if (!inThrottle) {
        fn.apply(context, args);
        lastTime = Date.now();
        inThrottle = true;
      } else {
        clearTimeout(lastFn);
        lastFn = setTimeout(function () {
          if (Date.now() - lastTime >= wait) {
            fn.apply(context, args);
            lastTime = Date.now();
          }
        }, Math.max(wait - (Date.now() - lastTime), 0));
      }
    };
  };

  var fn = /*#__PURE__*/Object.freeze({
    once: once,
    bind: bind,
    debounce: debounce,
    throttle: throttle
  });

  /** @module Date */

  /**
   * 格式化日期。如果value无法被new Date()转换为日期对象，返回空字符串。
   * @function dateFormat
   * @param {date} [date=new Date()] - 可选，需要格式化的日期，默认是当前时间。
   * @param {string} [format='YYYY-MM-DD']- 可选，格式化的格式，默认是`YYYY-MM-DD`格式。
   * @return {string}
   * @example
   * U.dateFormat(new Date(2018, 11, 10))
   * // => '2018-12-10'
   *
   * U.dateFormat(new Date(2018, 11, 10, 10, 29, 36), 'YYYY-MM-DD hh:mm:ss')
   * // => '2018-12-10 10:29:36'
   *
   * U.dateFormat(1545484848484, 'YYYY-MM-DD hh:mm:ss')
   * // => '2018-12-22 21:20:48'
   */
  var dateFormat = function dateFormat() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
    var d = new Date(date);

    var zeroize = function zeroize(val) {
      return val < 10 ? "0".concat(val) : "".concat(val);
    };

    return format.replace(/YYYY|MM|DD|hh|mm|ss/g, function (word) {
      return {
        'YYYY': d.getFullYear(),
        'MM': zeroize(d.getMonth() + 1),
        'DD': zeroize(d.getDate()),
        'hh': zeroize(d.getHours()),
        'mm': zeroize(d.getMinutes()),
        'ss': zeroize(d.getSeconds())
      }[word] || word;
    });
  };
  /**
   * 获取某月的总天数，date可以是任意能被new Date()格式化为日期对象的值。
   * @function getMonthDays
   * @param {date} [date=new Date()] - 可选，日期，默认是当前时间。
   * @return {number}
   * @example
   * U.getMonthDays(new Date(2018, 1))
   * // => 28
   *
   * U.getMonthDays(153454878787)
   * // => 30
   */

  var getMonthDays = function getMonthDays() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var d = new Date(date);
    d.setMonth(d.getMonth() + 1);
    d.setDate(0);
    return d.getDate();
  };
  /**
   * 获取星期名称，lang代表输出语言。date为日期，可以是任意能被new Date()格式化为日期对象的值。
   * @function getWeekday
   * @param {string} [lang='zh'] - 可选，输出语言，默认为'zh'，当该值为undefined时取'zh'——表示中文，'en'——表示英文。
   * @param {data} [date=new Date()] - 可选，日期，默认为当前日期。
   * @return {string}
   * @example
   * U.getWeekday('zh', new Date(2018, 1, 1))
   * // => '星期四'
   *
   * * U.getWeekday('zh', '2018/2/1')
   * // => '星期四'
   * 
   * U.getWeekday('en', 153454878787)
   * // => 'Tuesday'
   */

  var getWeekday = function getWeekday() {
    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'zh';
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
    var day = new Date(date).getDay();
    return lang === 'en' ? ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day] : '星期' + '日一二三四五六'.charAt(day);
  };
  /**
   * 获取上一个月份
   * @function prevMonth
   * @param {*} [date=new Date()]- 可选，日期，默认是当前时间。
   * @return {date}
   * @example
   * U.prevMonth()
   * // => 2018-11-20T17:07:37.937Z (当前时间为2018-12)
   *
   * U.prevMonth(new Date(2018, 10, 9))
   * // => 2018-10-08T16:00:00.000Z
   * 
   * U.prevMonth(153454878787)
   * // => 1974-10-12T02:21:18.787Z
   * 
   * U.prevMonth('2018/12/3')
   * // => 2018-11-02T16:00:00.000Z
   */

  var prevMonth = function prevMonth() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var d = new Date(date);
    d.setMonth(d.getMonth() - 1);
    return d;
  };
  /**
   * 获取下一个月份
   * @function nextMonth
   * @param {date} [date=new Date()] - 可选，日期，默认是当前时间。
   * @return {date}
   * @example
   * U.nextMonth()
   * // => 2019-01-20T17:13:15.179Z (当前时间为2018-12)
   *
   * U.nextMonth(new Date(2018, 10, 9))
   * // => 2018-10-08T16:00:00.000Z
   * 
   * U.nextMonth(153454878787)
   * // => 1974-12-12T02:21:18.787Z
   * 
   * U.nextMonth('2018/12/3')
   * // => 2018-11-02T16:00:00.000Z
   */

  var nextMonth = function nextMonth() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var d = new Date(date);
    d.setMonth(d.getMonth() + 1);
    return d;
  };
  /**
   * 比较日期dateA是否是dateB之后的日期，返回布尔值
   * @function isAfterDate
   * @param {date} dateA - 较后的日期。
   * @param {date} dateB - 较前的日期。
   * @return {boolean}
   * @example
   * U.isAfterDate('2018/11/1', '2018/11/30')
   * // => false
   *
   * U.isAfterDate(new Date(2018, 12, 11), new Date(2018, 12, 10))
   * // => true
   */

  var isAfterDate = function isAfterDate(dateA, dateB) {
    return new Date(dateA) > new Date(dateB);
  };
  /**
   * 返回距离date为n天的日期
   * @function spreadDate
   * @param {number} n - 天数。当n为负数，返回过去的日期；当n为正数，返回未来的日期。
   * @param {date} [date=new Date()] - 可选，日期，默认为当前日期。
   * @return {date}
   * @example
   * U.spreadDate(1)
   * // => Thu Feb 21 2019 21:01:53 GMT+0800 (当前时间：Wed Feb 20 2019 21:01:53 GMT+0800 )
   *
   * U.spreadDate(1)
   * // => Thu Feb 19 2019 21:01:53 GMT+0800 (当前时间：Wed Feb 20 2019 21:01:53 GMT+0800 )
   * 
   * U.spreadDate(7, new Date(2018, 9, 10))
   * // => Wed Oct 17 2018 00:00:00 GMT+0800 (中国标准时间)
   */

  var spreadDate = function spreadDate(n) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
    return new Date(+date + n * 24 * 60 * 60 * 1000);
  };

  var date = /*#__PURE__*/Object.freeze({
    dateFormat: dateFormat,
    getMonthDays: getMonthDays,
    getWeekday: getWeekday,
    prevMonth: prevMonth,
    nextMonth: nextMonth,
    isAfterDate: isAfterDate,
    spreadDate: spreadDate
  });

  var _arrayFill = function fill(value
  /* , start = 0, end = @length */
  ) {
    var O = _toObject(this);
    var length = _toLength(O.length);
    var aLen = arguments.length;
    var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
    var end = aLen > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);

    while (endPos > index) O[index++] = value;

    return O;
  };

  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});

  var _addToUnscopables = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };

  _export(_export.P, 'Array', {
    fill: _arrayFill
  });
  _addToUnscopables('fill');

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  var _iterators = {};

  var ITERATOR = _wks('iterator');
  var ArrayProto$1 = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR] === it);
  };

  var _createProperty = function (object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
  };

  var ITERATOR$1 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$1] || it['@@iterator'] || _iterators[_classof(it)];
  };

  var ITERATOR$2 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$2]();

    riter['return'] = function () {
      SAFE_CLOSING = true;
    }; // eslint-disable-next-line no-throw-literal
  } catch (e) {
    /* empty */
  }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;

    try {
      var arr = [7];
      var iter = arr[ITERATOR$2]();

      iter.next = function () {
        return {
          done: safe = true
        };
      };

      arr[ITERATOR$2] = function () {
        return iter;
      };

      exec(arr);
    } catch (e) {
      /* empty */
    }

    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) {
  }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike
    /* , mapfn = undefined, thisArg = undefined */
    ) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);

        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }

      result.length = index;
      return result;
    }
  });

  var _iterStep = function (done, value) {
    return {
      value: value,
      done: !!done
    };
  };

  var def = _objectDp.f;
  var TAG$1 = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, {
      configurable: true,
      value: tag
    });
  };

  var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

  _hide(IteratorPrototype, _wks('iterator'), function () {
    return this;
  });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, {
      next: _propertyDesc(1, next)
    });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR$3 = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () {
    return this;
  };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);

    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];

      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };

        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }

      return function entries() {
        return new Constructor(this, kind);
      };
    };

    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR$3] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype; // Fix native

    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));

      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

        if (!_library && typeof IteratorPrototype[ITERATOR$3] != 'function') _hide(IteratorPrototype, ITERATOR$3, returnThis);
      }
    } // fix Array#{values, @@iterator}.name in V8 / FF


    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;

      $default = function values() {
        return $native.call(this);
      };
    } // Define iterator


    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR$3])) {
      _hide(proto, ITERATOR$3, $default);
    } // Plug for library


    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;

    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }

    return methods;
  };

  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()


  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target

    this._i = 0; // next index

    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;

    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }

    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

  _iterators.Arguments = _iterators.Array;
  _addToUnscopables('keys');
  _addToUnscopables('values');
  _addToUnscopables('entries');

  var ITERATOR$4 = _wks('iterator');
  var TO_STRING_TAG = _wks('toStringTag');
  var ArrayValues = _iterators.Array;
  var DOMIterables = {
    CSSRuleList: true,
    // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true,
    // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true,
    // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
    var NAME$1 = collections[i];
    var explicit = DOMIterables[NAME$1];
    var Collection = _global[NAME$1];
    var proto$1 = Collection && Collection.prototype;
    var key$1;

    if (proto$1) {
      if (!proto$1[ITERATOR$4]) _hide(proto$1, ITERATOR$4, ArrayValues);
      if (!proto$1[TO_STRING_TAG]) _hide(proto$1, TO_STRING_TAG, NAME$1);
      _iterators[NAME$1] = ArrayValues;
      if (explicit) for (key$1 in es6_array_iterator) if (!proto$1[key$1]) _redefine(proto$1, key$1, es6_array_iterator[key$1], true);
    }
  }

  var $at = _stringAt(true); // 21.1.3.27 String.prototype[@@iterator]()

  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target

    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });

  var _redefineAll = function (target, src, safe) {
    for (var key in src) _redefine(target, key, src[key], safe);

    return target;
  };

  var _anInstance = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }

    return it;
  };

  var _forOf = createCommonjsModule(function (module) {
    var BREAK = {};
    var RETURN = {};

    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : core_getIteratorMethod(iterable);
      var f = _ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

      if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
        result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = _iterCall(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };

    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  });

  var SPECIES$2 = _wks('species');

  var _setSpecies = function (KEY) {
    var C = _global[KEY];
    if (_descriptors && C && !C[SPECIES$2]) _objectDp.f(C, SPECIES$2, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  };

  var _meta = createCommonjsModule(function (module) {
    var META = _uid('meta');
    var setDesc = _objectDp.f;
    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var FREEZE = !_fails(function () {
      return isExtensible(Object.preventExtensions({}));
    });

    var setMeta = function (it) {
      setDesc(it, META, {
        value: {
          i: 'O' + ++id,
          // object ID
          w: {} // weak collections IDs

        }
      });
    };

    var fastKey = function (it, create) {
      // return primitive with prefix
      if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMeta(it); // return object ID
      }

      return it[META].i;
    };

    var getWeak = function (it, create) {
      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMeta(it); // return hash weak collections IDs
      }

      return it[META].w;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function (it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
      return it;
    };

    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var _validateCollection = function (it, TYPE) {
    if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var dP$3 = _objectDp.f;
  var fastKey = _meta.fastKey;
  var SIZE = _descriptors ? '_s' : 'size';

  var getEntry = function (that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== 'F') return that._i[index]; // frozen object case

    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  var _collectionStrong = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance(that, C, NAME, '_i');
        that._t = NAME; // collection type

        that._i = _objectCreate(null); // index

        that._f = undefined; // first entry

        that._l = undefined; // last entry

        that[SIZE] = 0; // size

        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }

          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function (key) {
          var that = _validateCollection(this, NAME);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          }

          return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          _validateCollection(this, NAME);
          var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;

          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this); // revert to the last existing entry

            while (entry && entry.r) entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(_validateCollection(this, NAME), key);
        }
      });
      if (_descriptors) dP$3(C.prototype, 'size', {
        get: function () {
          return _validateCollection(this, NAME)[SIZE];
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var entry = getEntry(that, key);
      var prev, index; // change existing entry

      if (entry) {
        entry.v = value; // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          // <- index
          k: key,
          // <- key
          v: value,
          // <- value
          p: prev = that._l,
          // <- previous entry
          n: undefined,
          // <- next entry
          r: false // <- removed

        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++; // add to index

        if (index !== 'F') that._i[index] = entry;
      }

      return that;
    },
    getEntry: getEntry,
    setStrong: function (C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      _iterDefine(C, NAME, function (iterated, kind) {
        this._t = _validateCollection(iterated, NAME); // target

        this._k = kind; // kind

        this._l = undefined; // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l; // revert to the last existing entry

        while (entry && entry.r) entry = entry.p; // get next entry


        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return _iterStep(1);
        } // return step by kind


        if (kind == 'keys') return _iterStep(0, entry.k);
        if (kind == 'values') return _iterStep(0, entry.v);
        return _iterStep(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

      _setSpecies(NAME);
    }
  };

  var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = _global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};

    var fixMethod = function (KEY) {
      var fn = proto[KEY];
      _redefine(proto, KEY, KEY == 'delete' ? function (a) {
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) {
        fn.call(this, a === 0 ? 0 : a);
        return this;
      } : function set(a, b) {
        fn.call(this, a === 0 ? 0 : a, b);
        return this;
      });
    };

    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      _redefineAll(C.prototype, methods);
      _meta.NEED = true;
    } else {
      var instance = new C(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = _fails(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly

      var ACCEPT_ITERABLES = _iterDetect(function (iter) {
        new C(iter);
      }); // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same

      var BUGGY_ZERO = !IS_WEAK && _fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C();
        var index = 5;

        while (index--) $instance[ADDER](index, index);

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        C = wrapper(function (target, iterable) {
          _anInstance(target, C, NAME);
          var that = _inheritIfRequired(new Base(), target, C);
          if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && proto.clear) delete proto.clear;
    }

    _setToStringTag(C, NAME);
    O[NAME] = C;
    _export(_export.G + _export.W + _export.F * (C != Base), O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
  };

  var SET = 'Set'; // 23.2 Set Objects

  var es6_set = _collection(SET, function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
    }
  }, _collectionStrong);

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  /**
   * 获取数组的最后一个值
   * @function lastItem
   * @param {array} arr - 源数组
   * @return {*}
   * @example
   * let value = U.lastItem([1, 1, 2, 3])
   * // => 3
   *
   * let value = U.lastItem([])
   * // => undefined
   */

  var lastItem = function lastItem(arr) {
    return arr[arr.length - 1];
  };
  /**
   * 数组去重，返回无重复值的新数组。
   * @function uniqueItems
   * @param {array} arr - 需要去重的源数组
   * @return {array}
   * @example
   * let arr = [1, 1, 2, 3, 3, 4, 5]
   * arr = U.uniqueItems(arr)
   * // => [1, 2, 3, 4, 5]
   */

  var uniqueItems = function uniqueItems(arr) {
    return toConsumableArray(new Set(arr));
  };
  /**
   * 根据提供的比较器函数返回数组的所有唯一值。
   * @function uniqueItemsBy
   * @param {array} arr - 数组
   * @param {function} fn - 比较器函数
   * @param {*} fn.a - 比较元素
   * @param {*} fn.b - 比较元素
   * @param {boolean} [isRight=false] - 可选，默认false，是否从数组最后一个元素开始比较
   * @return {array}
   * @example
   * U.uniqueItemsBy([
   *  { id: 0, value: 'a' },
   *  { id: 1, value: 'b' },
   *  { id: 2, value: 'c' },
   *  { id: 0, value: 'd' }
   * ],
   * (a, b) => a.id == b.id)
   * // => [{ id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' }]
   * 
   * U.uniqueItemsBy([
   *  { id: 0, value: 'a' },
   *  { id: 1, value: 'b' },
   *  { id: 2, value: 'c' },
   *  { id: 0, value: 'd' }
   * ],
   * (a, b) => a.id == b.id,
   * true)
   * // => [{ id: 0, value: 'd' }, { id: 2, value: 'c' }, { id: 1, value: 'b' }]
   */

  var uniqueItemsBy = function uniqueItemsBy(arr, fn, isRight) {
    return arr[isRight ? 'reduceRight' : 'reduce'](function (acc, x) {
      if (!acc.some(function (y) {
        return fn(x, y);
      })) acc.push(x);
      return acc;
    }, []);
  };
  /**
   * 检索数组重复元素，返回新数组。
   * @function repeatItems
   * @param {array} arr - 数组
   * @return {array}
   * @example
   * U.repeatItems([1, 1, 2, 3, 3, 4, 5])
   * // => [1, 3]
   */

  var repeatItems = function repeatItems(arr) {
    return arr.filter(function (item, i) {
      return arr.indexOf(item) === i && arr.indexOf(item) !== arr.lastIndexOf(item);
    });
  };
  /**
   * 初始化一个给定长度以及值的数组。当映射是一个函数时提供迭代的i和数组长度len两个参数。
   * @function initArray
   * @param {number} len - 数组长度
   * @param {*|function} [val|fn=null] - 可选，数组元素的映射值，默认为null；当映射是一个函数时，该函数参数如下表：
   * @param {number} fn.index - 可选，数组中正在处理的当前元素的索引
   * @param {number} fn.length - 可选，数组的长度
   * @return {array}
   * @example
   * console.log(U.initArray(3))
   * // => [null, null, null]
   *
   * const arr = U.initArray(3, {a: 1, b: 2})
   * // => [ { a: 1, b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 } ]
   *
   * const arr = U.initArray(3, (i) => i * 2)
   * // => [ 0, 2, 4 ]
   */

  var initArray = function initArray(len) {
    var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return isFunction(val) ? Array.from({
      length: len
    }, function (item, i) {
      return val(i, len);
    }) : Array.from({
      length: len
    }).fill(val);
  };
  /**
   * 使用函数将数组的值映射到对象，其中键 - 值对由数组原始值作为键和映射值组成。
   * @function mapObject
   * @param {array} arr - 对象键名的数组
   * @param {function(currentValue, index, array)} fn - 生成对象值的映射函数
   * @param {*} fn.currentValue - 数组中正在处理的当前元素
   * @param {number} fn.index - 可选，数组中正在处理的当前元素的索引
   * @param {array} fn.array - 可选，当前正在处理的数组
   * @return {object}
   * @example
   * const obj = mapObject([1, 2, 3], i => i * 2)
   * // => {1: 2, 2: 4, 3: 6}
   */

  var mapObject = function mapObject(arr, fn) {
    arr = [arr, arr.map(fn)];
    return arr[0].reduce(function (acc, val, i) {
      acc[val] = arr[1][i];
      return acc;
    }, {});
  };

  var array = /*#__PURE__*/Object.freeze({
    lastItem: lastItem,
    uniqueItems: uniqueItems,
    uniqueItemsBy: uniqueItemsBy,
    repeatItems: repeatItems,
    initArray: initArray,
    mapObject: mapObject
  });

  var $includes = _arrayIncludes(true);
  _export(_export.P, 'Array', {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables('includes');

  var _stringContext = function (that, searchString, NAME) {
    if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(_defined(that));
  };

  var MATCH$1 = _wks('match');

  var _failsIsRegexp = function (KEY) {
    var re = /./;

    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH$1] = false;
        return !'/./'[KEY](re);
      } catch (f) {
        /* empty */
      }
    }

    return true;
  };

  var INCLUDES = 'includes';
  _export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
    includes: function includes(searchString
    /* , position = 0 */
    ) {
      return !!~_stringContext(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var _objectSap = function (KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(_export.S + _export.F * _fails(function () {
      fn(1);
    }), 'Object', exp);
  };

  var meta = _meta.onFreeze;
  _objectSap('freeze', function ($freeze) {
    return function freeze(it) {
      return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
    };
  });

  _objectSap('keys', function () {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });

  var f$4 = Object.getOwnPropertySymbols;
  var _objectGops = {
    f: f$4
  };

  var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {}; // eslint-disable-next-line no-undef

    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;

    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }

    return T;
  } : $assign;

  _export(_export.S + _export.F, 'Object', {
    assign: _objectAssign
  });

  /**
   * 对象深复制函数
   * @function deepClone
   * @param {object} obj - 深复制的源对象
   * @return {object}
   * @example
   * var a = { foo: 'bar', obj: { a: 1, b: 2 } }
   * var b = U.deepClone(a)
   * b.foo = 'foo'
   * // => a = { foo: 'bar', obj: { a: 1, b: 2 } }, b = { foo: 'foo', obj: { a: 1, b: 2 } }
   */

  var deepClone = function deepClone(obj) {
    var clone = Object.assign({}, obj);
    Object.keys(clone).forEach(function (k) {
      clone[k] = isObject(obj[k]) ? deepClone(obj[k]) : obj[k];
    });
    return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
  };
  /**
   * 对象深冻结函数
   * @function deepFreeze
   * @param {object} obj - 深冻结的源对象
   * @return {object}
   * @example
   * let arr = [1, [2, 3]]
   * const o = U.deepFreeze(arr)
   * o[0] = 3
   * o[1][0] = 4
   * // => arr = [1, [2, 3]], o = [1, [2, 3]]
   */

  var deepFreeze = function deepFreeze(obj) {
    Object.keys(obj).forEach(function (prop) {
      if (obj[prop] instanceof Object && obj[prop] !== null) {
        deepFreeze(obj[prop]);
      }
    });
    return Object.freeze(obj);
  };
  /**
   * 为对象中的属性分配默认值。
   * @function defaults
   * @param {object} obj - 目标对象
   * @param {...object} defs - 源对象（用于扩展目标对象属性）
   * @return {object}
   * @example
   * U.defaults({ a: 1, c: 5, d: 8}, { b: 2 }, { a: 3, c: 7})
   * // => { a: 1, c: 5, d: 8, b: 2 }
   */

  var defaults = function defaults(obj) {
    for (var _len = arguments.length, defs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      defs[_key - 1] = arguments[_key];
    }

    return Object.assign.apply(Object, [{}, obj].concat(toConsumableArray(defs.reverse()), [obj]));
  };
  /**
   * 重命名对象的key名称。
   * @function renameKeys
   * @param {object} map - 由oldKey：newKey键值对组成的对象
   * @param {object} obj - 目标对象
   * @return {object}
   * @example
   * let obj = {name: 'john', job: 'fonts', detail: [1, 2]}
   * U.renameKeys({job: 'possion'}, obj)
   * // => { name: 'john', possion: 'fonts', detail: [ 1, 2 ] }
   */

  var renameKeys = function renameKeys(map, obj) {
    return Object.keys(obj).reduce(function (acc, key) {
      return objectSpread({}, acc, defineProperty({}, map[key] || key, obj[key]));
    }, {});
  };
  /**
   * 从对象中省略与给定键对应的键值对。
   * @function omit
   * @param {object} obj - 目标对象
   * @param {array} arr - 省略的键名数组
   * @return {object}
   * @example
   * U.omit({ a: 1, b: '2', c: 3 }, ['b'])
   * // => { a: 1, c: 3 }
   */

  var omit = function omit(obj, arr) {
    return Object.keys(obj).filter(function (k) {
      return !arr.includes(k);
    }).reduce(function (acc, key) {
      return acc[key] = obj[key], acc;
    }, {});
  };
  /**
   * 判断val是否是空对象。
   * @function isEmpty
   * @param {*} val - 检查的对象
   * @return {boolean}
   * @example
   * U.isEmpty(new Map()) // => true
   * U.isEmpty(new Set()) // => true
   * U.isEmpty({}) // => true
   * U.isEmpty([]) // => true
   * U.isEmpty('') // => true
   * U.isEmpty({a: 1}) // => false
   * U.isEmpty([2]) // => false
   * U.isEmpty('text') // => false
   * U.isEmpty(123) // => true
   * U.isEmpty(true) // => true
   * U.isEmpty(false) // => true
   */

  var isEmpty = function isEmpty(val) {
    return !(Object.keys(val) || val).length;
  };

  var object = /*#__PURE__*/Object.freeze({
    deepClone: deepClone,
    deepFreeze: deepFreeze,
    defaults: defaults,
    renameKeys: renameKeys,
    omit: omit,
    isEmpty: isEmpty
  });

  _fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      if (!rx.global) return _regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = _regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  /** @module String */

  /**
   * 获取字符串的字节长度
   * @function byteSize
   * @param {string} str - 字符串
   * @return {number}
   * @example
   * U.byteSize('日')
   * // => 3
   *
   * U.byteSize('12')
   * // => 2
   *
   * U.byteSize('hello')
   * // => 5
   */
  var byteSize = function byteSize(str) {
    return new Blob([str]).size;
  };
  /**
   * 反转字符串
   * @function reverseString
   * @param {string} str - 字符串
   * @return {str}
   * @example
   * U.reverseString('hello!')
   * // => '!olleh'
   */

  var reverseString = function reverseString(str) {
    return toConsumableArray(str).reverse().join('');
  };
  /**
   * 向URL追加参数
   * @function stringifyURL
   * @param {string} url - URL路径
   * @param {object} params - 参数对象
   * @return {string}
   * @example
   * U.stringifyURL('https://www.google.com/', {name: 'john', age: 30})
   * // => 'https://www.google.com/?name=john&age=30'
   */

  var stringifyURL = function stringifyURL(url, params) {
    return url + '?' + Object.keys(params).map(function (key) {
      return "".concat(key, "=").concat(params[key]);
    }).join('&');
  };
  /**
   * 解析URL参数
   * @function parseURL
   * @param {string} url - 字符串
   * @return {object}
   * @example
   * U.parseURL('http://url.com/page?name=Adam&surname=Smith')
   * // => {name: 'Adam', surname: 'Smith'}
   *
   * U.parseURL('https://www.google.com/')
   * // => {}
   */

  var parseURL = function parseURL(url) {
    var arr = url.match(/([^?=&]+)(=([^&]*))/g) || [];
    return arr.reduce(function (a, v) {
      return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
    }, {});
  };
  /**
   * 移除字符串中的HTML标签
   * @function removeHTML
   * @param {string} str - 字符串
   * @return {string}
   * @example
   * const str = '<p>这是<em>一个</em>段落。</p>'
   * U.removeHTML(str)
   * // => '这是一个段落。'
   */

  var removeHTML = function removeHTML(str) {
    return str.replace(/<[^>]*>/g, '');
  };
  /**
   * 转义特殊字符
   * @function escapeHTML
   * @param {string} str - 字符串
   * @return {string}
   * @example
   * const str = '<a href="#">you & me</a>'
   * U.escapeHTML(str)
   * // => '&lt;a href=&quot;#&quot;&gt;you &amp; me&lt;/a&gt;'
   */

  var escapeHTML = function escapeHTML(str) {
    return str.replace(/[&<>"]/g, function (tag) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
      }[tag] || tag;
    });
  };
  /**
   * 反转义特殊字符
   * @function unescapeHTML
   * @param {string} str - 字符串
   * @return {string}
   * @example
   * const str = '&lt;a href=&quot;#&quot;&gt;you &amp; me&lt;/a&gt;'
   * U.unescapeHTML(str)
   * // => '<a href="#">you & me</a>'
   */

  var unescapeHTML = function unescapeHTML(str) {
    return str.replace(/&amp;|&lt;|&gt;|&quot;/g, function (tag) {
      return {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"'
      }[tag] || tag;
    });
  };
  /**
   * 使用指定的掩码字符替换start~end之间的所有字符
   * @function mask
   * @param {string|number} str - 字符串
   * @param {number} [start=0] - 可选，开始位置，默认为0（即字符串开头）
   * @param {number} [end=0] - 可选，结束位置，默认为0（即字符串结尾）
   * @param {string} [mask='*'] - 可选，掩码字符，默认为'*'号
   * @return {string}
   * @example
   * U.mask(123456789) // => *********
   * U.mask(123456789, 3) // => 123******
   * U.mask(str, 0, 4) // => *****6789
   * U.mask(str, 3, 4) // => 123**6789
   * U.mask(str, 3, 4, '&') // => 123&&6789
   */

  var mask = function mask(str) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var mask = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '*';
    return toConsumableArray("".concat(str)).map(function (v, i) {
      return i >= start && i < "".concat(str).length - end ? mask : v;
    }).join('');
  };

  var string = /*#__PURE__*/Object.freeze({
    byteSize: byteSize,
    reverseString: reverseString,
    stringifyURL: stringifyURL,
    parseURL: parseURL,
    removeHTML: removeHTML,
    escapeHTML: escapeHTML,
    unescapeHTML: unescapeHTML,
    mask: mask
  });

  var usually = objectSpread({
    version: version
  }, type, number, fn, date, array, object, string);

  return usually;

})));
