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

  var version = "1.0.4";

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

  /** @module Number */
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
    return Math.floor(val) === val;
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

  var number = /*#__PURE__*/Object.freeze({
    isInt: isInt,
    toThousands: toThousands,
    inRange: inRange,
    round: round,
    random: random
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
   * @param {*} [boundArgs] - 默认参数。
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

  var date = /*#__PURE__*/Object.freeze({
    dateFormat: dateFormat,
    getMonthDays: getMonthDays,
    getWeekday: getWeekday,
    prevMonth: prevMonth,
    nextMonth: nextMonth,
    isAfterDate: isAfterDate
  });

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
   * 初始化一个给定长度以及值的数组。当value是函数时提供迭代的i和数组长度len两个参数。
   * @function initArray
   * @param {number} len - 数组长度
   * @param {*} [value=null] - 可选，初始化的值，默认为null，当value是函数时提供迭代的i和数组长度len两个参数。
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
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return isFunction(value) ? Array.from({
      length: len
    }, function (item, i) {
      return value(i, len);
    }) : Array.from({
      length: len
    }).fill(value);
  };

  var array = /*#__PURE__*/Object.freeze({
    lastItem: lastItem,
    uniqueItems: uniqueItems,
    repeatItems: repeatItems,
    initArray: initArray
  });

  /** @module Object */

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
      clone[k] = _typeof_1(obj[k]) === 'object' ? deepClone(obj[k]) : obj[k];
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
