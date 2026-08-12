require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8905:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var isObject = __nccwpck_require__(6403);

module.exports = function extend(o/*, objects*/) {
  if (!isObject(o)) { o = {}; }

  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];

    if (isObject(obj)) {
      assign(o, obj);
    }
  }
  return o;
};

function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}

/**
 * Returns true if the given `key` is an own property of `obj`.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


/***/ }),

/***/ 6403:
/***/ ((module) => {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function isExtendable(val) {
  return typeof val !== 'undefined' && val !== null
    && (typeof val === 'object' || typeof val === 'function');
};


/***/ }),

/***/ 112:
/***/ ((module) => {

/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.T
 * @example
 *
 *      R.F(); //=> false
 */
var F = function () {
  return false;
};
module.exports = F;

/***/ }),

/***/ 7850:
/***/ ((module) => {

/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = function () {
  return true;
};
module.exports = T;

/***/ }),

/***/ 2782:
/***/ ((module) => {

/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @name __
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      const greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
module.exports = {
  '@@functional/placeholder': true
};

/***/ }),

/***/ 1509:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
var add = /*#__PURE__*/_curry2(function add(a, b) {
  return Number(a) + Number(b);
});
module.exports = add;

/***/ }),

/***/ 1073:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig (((a ...) -> b) ... -> [a] -> *) -> (((a ..., Int, [a]) -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      const mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
var addIndex = /*#__PURE__*/_curry1(function addIndex(fn) {
  return curryN(fn.length, function () {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
module.exports = addIndex;

/***/ }),

/***/ 8475:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
/**
 * As with `addIndex`, `addIndexRight` creates a new list iteration function
 * from an existing one by adding two new parameters to its callback function:
 * the current index, and the entire list.
 *
 * Unlike `addIndex`, `addIndexRight` iterates from the right to the left.
 *
 * @func
 * @memberOf R
 * @since v0.29.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      const revmap = (fn, ary) => R.map(fn, R.reverse(ary));
 *      const revmapIndexed = R.addIndexRight(revmap);
 *      revmapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> [ '5-r', '4-a', '3-b', '2-o', '1-o', '0-f' ]
 */
var addIndexRight = /*#__PURE__*/_curry1(function addIndex(fn) {
  return curryN(fn.length, function () {
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var idx = list.length - 1;
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function () {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx -= 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
module.exports = addIndexRight;

/***/ }),

/***/ 6951:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * When `idx < -list.length || idx >= list.length`, the original list is returned.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> (a -> a) -> [a] -> [a]
 * @param {Number} idx The index.
 * @param {Function} fn The function to apply.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
 *      R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
 *
 *      // out-of-range returns original list
 *      R.adjust(4, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'b', 'c', 'd']
 *      R.adjust(-5, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'd']
 * @symb R.adjust(-1, f, [a, b]) = [a, f(b)]
 * @symb R.adjust(0, f, [a, b]) = [f(a), b]
 */
var adjust = /*#__PURE__*/_curry3(function adjust(idx, fn, list) {
  var len = list.length;
  if (idx >= len || idx < -len) {
    return list;
  }
  var _idx = (len + idx) % len;
  var _list = _concat(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});
module.exports = adjust;

/***/ }),

/***/ 2197:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xall = /*#__PURE__*/__nccwpck_require__(3260);
/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      const equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
var all = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['all'], _xall, function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));
module.exports = all;

/***/ }),

/***/ 4408:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
var max = /*#__PURE__*/__nccwpck_require__(6292);
var pluck = /*#__PURE__*/__nccwpck_require__(7519);
var reduce = /*#__PURE__*/__nccwpck_require__(7466);
/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass, R.both
 * @example
 *
 *      const isQueen = R.propEq('Q', 'rank');
 *      const isSpade = R.propEq('♠︎', 'suit');
 *      const isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
var allPass = /*#__PURE__*/_curry1(function allPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
module.exports = allPass;

/***/ }),

/***/ 7529:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
var always = /*#__PURE__*/_curry1(function always(val) {
  return function () {
    return val;
  };
});
module.exports = always;

/***/ }),

/***/ 2719:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns the first argument if it is falsy, otherwise the second argument.
 * Acts as the boolean `and` statement if both inputs are `Boolean`s.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any}
 * @see R.both, R.or
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
var and = /*#__PURE__*/_curry2(function and(a, b) {
  return a && b;
});
module.exports = and;

/***/ }),

/***/ 8644:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _assertPromise = /*#__PURE__*/__nccwpck_require__(2564);
/**
 * Returns the result of applying the onSuccess function to the value inside
 * a successfully resolved promise. This is useful for working with promises
 * inside function compositions.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Function
 * @sig (a -> b) -> (Promise e a) -> (Promise e b)
 * @sig (a -> (Promise e b)) -> (Promise e a) -> (Promise e b)
 * @param {Function} onSuccess The function to apply. Can return a value or a promise of a value.
 * @param {Promise} p
 * @return {Promise} The result of calling `p.then(onSuccess)`
 * @see R.otherwise, R.pipeWith
 * @example
 *
 *      const makeQuery = email => ({ query: { email }});
 *      const fetchMember = request =>
 *        Promise.resolve({ firstName: 'Bob', lastName: 'Loblaw', id: 42 });
 *      const pickName = R.pick(['firstName', 'lastName'])
 *
 *      //getMemberName :: String -> Promise ({ firstName, lastName })
 *      const getMemberName = R.pipe(
 *        makeQuery,
 *        fetchMember,
 *        R.andThen(pickName),
 *      );
 *
 *      // Alternately
 *      const getMemberName = R.pipe(
 *        makeQuery,
 *        fetchMember,
 *      )
 *
 *      R.pipeWith(R.andThen, [getMemberName, pickName])('bob@gmail.com').then(console.log)
 *      // logs {"firstName":"Bob","lastName":"Loblaw"}
 *
 *      getMemberName('bob@gmail.com').then(console.log);
 */
var andThen = /*#__PURE__*/_curry2(function andThen(f, p) {
  _assertPromise('andThen', p);
  return p.then(f);
});
module.exports = andThen;

/***/ }),

/***/ 6444:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xany = /*#__PURE__*/__nccwpck_require__(5457);
/**
 * Returns `true` if at least one of the elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      const lessThan0 = R.flip(R.lt)(0);
 *      const lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
var any = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['any'], _xany, function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));
module.exports = any;

/***/ }),

/***/ 2965:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
var max = /*#__PURE__*/__nccwpck_require__(6292);
var pluck = /*#__PURE__*/__nccwpck_require__(7519);
var reduce = /*#__PURE__*/__nccwpck_require__(7466);
/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass, R.either
 * @example
 *
 *      const isClub = R.propEq('♣', 'suit');
 *      const isSpade = R.propEq('♠', 'suit');
 *      const isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
var anyPass = /*#__PURE__*/_curry1(function anyPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});
module.exports = anyPass;

/***/ }),

/***/ 4057:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _reduce = /*#__PURE__*/__nccwpck_require__(2261);
var map = /*#__PURE__*/__nccwpck_require__(9692);
/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the first argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
var ap = /*#__PURE__*/_curry2(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } : _reduce(function (acc, f) {
    return _concat(acc, map(f, applyX));
  }, [], applyF);
});
module.exports = ap;

/***/ }),

/***/ 1872:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _aperture = /*#__PURE__*/__nccwpck_require__(939);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xaperture = /*#__PURE__*/__nccwpck_require__(2147);
/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
var aperture = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xaperture, _aperture));
module.exports = aperture;

/***/ }),

/***/ 2431:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
var append = /*#__PURE__*/_curry2(function append(el, list) {
  return _concat(list, [el]);
});
module.exports = append;

/***/ }),

/***/ 6890:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      const nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
var apply = /*#__PURE__*/_curry2(function apply(fn, args) {
  return fn.apply(this, args);
});
module.exports = apply;

/***/ }),

/***/ 7837:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var apply = /*#__PURE__*/__nccwpck_require__(6890);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
var max = /*#__PURE__*/__nccwpck_require__(6292);
var pluck = /*#__PURE__*/__nccwpck_require__(7519);
var reduce = /*#__PURE__*/__nccwpck_require__(7466);
var keys = /*#__PURE__*/__nccwpck_require__(3716);
var values = /*#__PURE__*/__nccwpck_require__(534); // Use custom mapValues function to avoid issues with specs that include a "map" key and R.map
// delegating calls to .map
function mapValues(fn, obj) {
  return _isArray(obj) ? obj.map(fn) : keys(obj).reduce(function (acc, key) {
    acc[key] = fn(obj[key]);
    return acc;
  }, {});
}

/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      const getMetrics = R.applySpec({
 *        sum: R.add,
 *        nested: { mul: R.multiply }
 *      });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
var applySpec = /*#__PURE__*/_curry1(function applySpec(spec) {
  spec = mapValues(function (v) {
    return typeof v == 'function' ? v : applySpec(v);
  }, spec);
  return curryN(reduce(max, 0, pluck('length', values(spec))), function () {
    var args = arguments;
    return mapValues(function (f) {
      return apply(f, args);
    }, spec);
  });
});
module.exports = applySpec;

/***/ }),

/***/ 1759:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Takes a value and applies a function to it.
 *
 * This function is also known as the `thrush` combinator.
 *
 * @func
 * @memberOf R
 * @since v0.25.0
 * @category Function
 * @sig a -> (a -> b) -> b
 * @param {*} x The value
 * @param {Function} f The function to apply
 * @return {*} The result of applying `f` to `x`
 * @example
 *
 *      const t42 = R.applyTo(42);
 *      t42(R.identity); //=> 42
 *      t42(R.add(1)); //=> 43
 */
var applyTo = /*#__PURE__*/_curry2(function applyTo(x, f) {
  return f(x);
});
module.exports = applyTo;

/***/ }),

/***/ 3782:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend, R.ascendNatural, R.descendNatural
 * @example
 *
 *      const byAge = R.ascend(R.prop('age'));
 *      const people = [
 *        { name: 'Emma', age: 70 },
 *        { name: 'Peter', age: 78 },
 *        { name: 'Mikhail', age: 62 },
 *      ];
 *      const peopleByYoungestFirst = R.sort(byAge, people);
 *        //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
 */
var ascend = /*#__PURE__*/_curry3(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});
module.exports = ascend;

/***/ }),

/***/ 6425:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var curry = /*#__PURE__*/__nccwpck_require__(5273);
/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with natural sorting using localeCompare.
 *
 * @func
 * @memberOf R
 * @since v0.30.1
 * @category Function
 * @sig s -> (a -> String) -> a -> a -> Number
 * @param {String|Array} locales A string with a BCP 47 language tag, or an array of such strings. Corresponds to the locales parameter of the Intl.Collator() constructor.
 * @param {Function} fn A function of arity one that returns a string that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if a occurs before b, `1` if a occurs after b, otherwise `0`
 * @see R.ascend
 * @example
 *
 *      const unsorted = ['3', '1', '10', 'Ørjan', 'Bob', 'Älva'];
 *
 *      R.sort(R.ascendNatural('en', R.identity), unsorted);
 *      // => ['1', '3', '10', 'Älva', 'Bob', 'Ørjan']
 *
 *      R.sort(R.ascendNatural('sv', R.identity), unsorted);
 *      // => ['1', '3', '10', 'Bob', 'Älva', 'Ørjan']
 *
 *     R.sort(R.ascend(R.identity), unsorted);
 *      // => ['1', '10', '3', 'Bob', 'Älva', 'Ørjan']
 */
var ascendNatural = /*#__PURE__*/curry(function ascendNatural(locales, fn, a, b) {
  const aa = fn(a);
  const bb = fn(b);
  return aa.localeCompare(bb, locales, {
    numeric: true
  });
});
module.exports = ascendNatural;

/***/ }),

/***/ 9093:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var assocPath = /*#__PURE__*/__nccwpck_require__(9330);
/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig Idx -> a -> {k: v} -> {k: v}
 * @param {String|Number} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc, R.pick
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 *
 *      R.assoc(4, 3, [1, 2]); //=> [1, 2, undefined, undefined, 3]
 *      R.assoc(-1, 3, [1, 2]); //=> [1, 3]
 */
var assoc = /*#__PURE__*/_curry3(function assoc(prop, val, obj) {
  return assocPath([prop], val, obj);
});
module.exports = assoc;

/***/ }),

/***/ 9330:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _isInteger = /*#__PURE__*/__nccwpck_require__(6065);
var _assoc = /*#__PURE__*/__nccwpck_require__(9860);
var isNil = /*#__PURE__*/__nccwpck_require__(3261);
var _prop = /*#__PURE__*/__nccwpck_require__(9574);
/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 *      R.assocPath(['a', 1, 'c'], 42, {a: []}); // => {a: [undefined, {c: 42}]}
 *      R.assocPath(['a', -1], 42, {a: [1, 2]}); // => {a: [1, 42]}
 */
var assocPath = /*#__PURE__*/_curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = _prop(idx, obj);
    if (isNil(nextObj) || typeof nextObj !== 'object') {
      nextObj = _isInteger(path[1]) ? [] : {};
    }
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  return _assoc(idx, val, obj);
});
module.exports = assocPath;

/***/ }),

/***/ 3741:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var nAry = /*#__PURE__*/__nccwpck_require__(5492);
/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> ((a, b) -> z)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      const takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      const takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
var binary = /*#__PURE__*/_curry1(function binary(fn) {
  return nAry(2, fn);
});
module.exports = binary;

/***/ }),

/***/ 3543:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arity = /*#__PURE__*/__nccwpck_require__(2);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind = /*#__PURE__*/_curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
module.exports = bind;

/***/ }),

/***/ 315:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isFunction = /*#__PURE__*/__nccwpck_require__(4715);
var and = /*#__PURE__*/__nccwpck_require__(2719);
var lift = /*#__PURE__*/__nccwpck_require__(7005);
/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.either, R.allPass, R.and
 * @example
 *
 *      const gt10 = R.gt(R.__, 10)
 *      const lt20 = R.lt(R.__, 20)
 *      const f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 *
 *      R.both(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(false)
 *      R.both([false, false, 'a'], [11]); //=> [false, false, 11]
 */
var both = /*#__PURE__*/_curry2(function both(f, g) {
  return _isFunction(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : lift(and)(f, g);
});
module.exports = both;

/***/ }),

/***/ 4572:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig ((*... -> a), *...) -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      const indentN = R.pipe(
 *        R.repeat(' '),
 *        R.join(''),
 *        R.replace(/^(?!$)/gm)
 *      );
 *
 *      const format = R.converge(
 *        R.call,
 *        [
 *          R.pipe(R.prop('indent'), indentN),
 *          R.prop('value')
 *        ]
 *      );
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
var call = /*#__PURE__*/_curry1(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
module.exports = call;

/***/ }),

/***/ 8331:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _chain = /*#__PURE__*/__nccwpck_require__(9214);
/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries.
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * If second argument is a function, `chain(f, g)(x)` is equivalent to `f(g(x), x)`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      const duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
var chain = /*#__PURE__*/_curry2(_chain);
module.exports = chain;

/***/ }),

/***/ 1225:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
var clamp = /*#__PURE__*/_curry3(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min : value > max ? max : value;
});
module.exports = clamp;

/***/ }),

/***/ 1019:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _clone = /*#__PURE__*/__nccwpck_require__(8090);
var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Creates a deep copy of the source that can be used in place of the source
 * object without retaining any references to it.
 * The source object may contain (nested) `Array`s and `Object`s,
 * `Number`s, `String`s, `Boolean`s and `Date`s.
 * `Function`s are assigned by reference rather than copied.
 *
 * Dispatches to a `clone` method if present.
 *
 * Note that if the source object has multiple nodes that share a reference,
 * the returned object will have the same structure, but the references will
 * be pointed to the location within the cloned value.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      const objects = [{}, {}, {}];
 *      const objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
var clone = /*#__PURE__*/_curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, true);
});
module.exports = clone;

/***/ }),

/***/ 4833:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _reduce = /*#__PURE__*/__nccwpck_require__(2261);
/**
 * Splits a list into sub-lists, based on the result of calling a key-returning function on each element,
 * and grouping the results according to values returned.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category List
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx a => (b -> a) -> [b] -> [[b]]
 * @param {Function} fn Function :: a -> Idx
 * @param {Array} list The array to group
 * @return {Array}
 *    An array of arrays where each sub-array contains items for which
 *    the String-returning function has returned the same value.
 * @see R.groupBy, R.partition
 * @example
 *      R.collectBy(R.prop('type'), [
 *        {type: 'breakfast', item: '☕️'},
 *        {type: 'lunch', item: '🌯'},
 *        {type: 'dinner', item: '🍝'},
 *        {type: 'breakfast', item: '🥐'},
 *        {type: 'lunch', item: '🍕'}
 *      ]);
 *
 *      // [ [ {type: 'breakfast', item: '☕️'},
 *      //     {type: 'breakfast', item: '🥐'} ],
 *      //   [ {type: 'lunch', item: '🌯'},
 *      //     {type: 'lunch', item: '🍕'} ],
 *      //   [ {type: 'dinner', item: '🍝'} ] ]
 */
var collectBy = /*#__PURE__*/_curry2(function collectBy(fn, list) {
  var group = _reduce(function (o, x) {
    var tag = fn(x);
    if (o[tag] === undefined) {
      o[tag] = [];
    }
    o[tag].push(x);
    return o;
  }, {}, list);
  var newList = [];
  for (var tag in group) {
    newList.push(group[tag]);
  }
  return newList;
});
module.exports = collectBy;

/***/ }),

/***/ 9732:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      const byAge = R.comparator((a, b) => a.age < b.age);
 *      const people = [
 *        { name: 'Emma', age: 70 },
 *        { name: 'Peter', age: 78 },
 *        { name: 'Mikhail', age: 62 },
 *      ];
 *      const peopleByIncreasingAge = R.sort(byAge, people);
 *        //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
 */
var comparator = /*#__PURE__*/_curry1(function comparator(pred) {
  return function (a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});
module.exports = comparator;

/***/ }),

/***/ 7128:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var lift = /*#__PURE__*/__nccwpck_require__(7005);
var not = /*#__PURE__*/__nccwpck_require__(1727);
/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      const isNotNil = R.complement(R.isNil);
 *      R.isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      R.isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
var complement = /*#__PURE__*/lift(not);
module.exports = complement;

/***/ }),

/***/ 7810:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var pipe = /*#__PURE__*/__nccwpck_require__(4944);
var reverse = /*#__PURE__*/__nccwpck_require__(9608);
/**
 * Performs right-to-left function composition. The last argument may have
 * any arity; the remaining arguments must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      const yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 * @symb R.compose(f, g, h)(a)(b) = f(g(h(a)))(b)
 */
function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
}
module.exports = compose;

/***/ }),

/***/ 9950:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var pipeWith = /*#__PURE__*/__nccwpck_require__(1352);
var reverse = /*#__PURE__*/__nccwpck_require__(9608);
/**
 * Performs right-to-left function composition using transforming function. The last function may have
 * any arity; the remaining functions must be unary. Unlike `compose`, functions are passed in an array.
 *
 * **Note:** The result of composeWith is not automatically curried. Transforming function is not used
 * on the last argument.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig ((* -> *), [(y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)]) -> ((a, b, ..., n) -> z)
 * @param {Function} transformer The transforming function
 * @param {Array} functions The functions to compose
 * @return {Function}
 * @see R.compose, R.pipeWith
 * @example
 *
 *      const composeWhileNotNil = R.composeWith((f, res) => R.isNil(res) ? res : f(res));
 *
 *      composeWhileNotNil([R.inc, R.prop('age')])({age: 1}) //=> 2
 *      composeWhileNotNil([R.inc, R.prop('age')])({}) //=> undefined
 *
 * @symb R.composeWith(f)([g, h, i])(...args) = f(g, f(h, i(...args)))
 */
var composeWith = /*#__PURE__*/_curry2(function composeWith(xf, list) {
  return pipeWith.apply(this, [xf, reverse(list)]);
});
module.exports = composeWith;

/***/ }),

/***/ 868:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var _isFunction = /*#__PURE__*/__nccwpck_require__(4715);
var _isString = /*#__PURE__*/__nccwpck_require__(934);
var toString = /*#__PURE__*/__nccwpck_require__(1104);
/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
var concat = /*#__PURE__*/_curry2(function concat(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString(b) + ' is not an array');
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString(b) + ' is not a string');
  }
  if (a != null && _isFunction(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
module.exports = concat;

/***/ }),

/***/ 9032:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arity = /*#__PURE__*/__nccwpck_require__(2);
var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var map = /*#__PURE__*/__nccwpck_require__(9692);
var max = /*#__PURE__*/__nccwpck_require__(6292);
var reduce = /*#__PURE__*/__nccwpck_require__(7466);
/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * **Please note**: This is not a direct substitute for a `switch` statement.
 * Remember that both elements of every pair passed to `cond` are *functions*,
 * and `cond` returns a function.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @see R.ifElse, R.unless, R.when
 * @example
 *
 *      const fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
var cond = /*#__PURE__*/_curry1(function cond(pairs) {
  var arity = reduce(max, 0, map(function (pair) {
    return pair[0].length;
  }, pairs));
  return _arity(arity, function () {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});
module.exports = cond;

/***/ }),

/***/ 8071:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var constructN = /*#__PURE__*/__nccwpck_require__(3173);
/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      const AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      const animalTypes = ["Lion", "Tiger", "Bear"];
 *      const animalSighting = R.invoker(0, 'sighting');
 *      const sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
var construct = /*#__PURE__*/_curry1(function construct(Fn) {
  return constructN(Fn.length, Fn);
});
module.exports = construct;

/***/ }),

/***/ 3173:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var curry = /*#__PURE__*/__nccwpck_require__(5273);
var nAry = /*#__PURE__*/__nccwpck_require__(5492);
/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      }
 *
 *      Salad.prototype.recipe = function() {
 *        const instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
 *        return R.join('\n', instructions);
 *      };
 *
 *      const ThreeLayerSalad = R.constructN(3, Salad);
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      const salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
 *
 *      console.log(salad.recipe());
 *      // Add a dollop of Mayonnaise
 *      // Add a dollop of Potato Chips
 *      // Add a dollop of Ketchup
 */
var constructN = /*#__PURE__*/_curry2(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function () {
      return new Fn();
    };
  }
  return curry(nAry(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (n) {
      case 1:
        return new Fn($0);
      case 2:
        return new Fn($0, $1);
      case 3:
        return new Fn($0, $1, $2);
      case 4:
        return new Fn($0, $1, $2, $3);
      case 5:
        return new Fn($0, $1, $2, $3, $4);
      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);
      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);
      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});
module.exports = constructN;

/***/ }),

/***/ 1329:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _map = /*#__PURE__*/__nccwpck_require__(1357);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
var max = /*#__PURE__*/__nccwpck_require__(6292);
var pluck = /*#__PURE__*/__nccwpck_require__(7519);
var reduce = /*#__PURE__*/__nccwpck_require__(7466);
/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. The arity of the new function is the same as the arity of
 * the longest branching function. When invoked, this new function is applied
 * to some arguments, and each branching function is applied to those same
 * arguments. The results of each branching function are passed as arguments
 * to the converging function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      const average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      const strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
var converge = /*#__PURE__*/_curry2(function converge(after, fns) {
  return curryN(reduce(max, 0, pluck('length', fns)), function () {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function (fn) {
      return fn.apply(context, args);
    }, fns));
  });
});
module.exports = converge;

/***/ }),

/***/ 2953:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _reduce = /*#__PURE__*/__nccwpck_require__(2261);
var curry = /*#__PURE__*/__nccwpck_require__(5273);
/**
 * Returns the number of items in a given `list` matching the predicate `f`
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} predicate The function to match items against.
 * @param {Array} list The list to count elements from.
 * @return {Number} The count of items matching the predicate.
 * @example
 *
 *      const even = x => x % 2 == 0;
 *
 *      R.count(even, [1, 2, 3, 4, 5]); // => 2
 *      R.map(R.count(even), [[1, 1, 1], [2, 3, 4, 5], [6]]); // => [0, 2, 1]
 */
var count = /*#__PURE__*/curry(function (pred, list) {
  return _reduce(function (a, e) {
    return pred(e) ? a + 1 : a;
  }, 0, list);
});
module.exports = count;

/***/ }),

/***/ 5316:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var reduceBy = /*#__PURE__*/__nccwpck_require__(4607);
/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      const letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
var countBy = /*#__PURE__*/reduceBy(function (acc, elem) {
  return acc + 1;
}, 0);
module.exports = countBy;

/***/ }),

/***/ 5273:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * Please note that default parameters don't count towards a [function arity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
 * and therefore `curry` won't work well with those.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN, R.partial
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 *
 *      // R.curry not working well with default parameters
 *      const h = R.curry((a, b, c = 2) => a + b + c);
 *      h(1)(2)(7); //=> Error! (`3` is not a function!)
 */
var curry = /*#__PURE__*/_curry1(function curry(fn) {
  return curryN(fn.length, fn);
});
module.exports = curry;

/***/ }),

/***/ 4111:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arity = /*#__PURE__*/__nccwpck_require__(2);
var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _curryN = /*#__PURE__*/__nccwpck_require__(7336);
/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */
var curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});
module.exports = curryN;

/***/ }),

/***/ 8854:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var add = /*#__PURE__*/__nccwpck_require__(1509);
/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
var dec = /*#__PURE__*/add(-1);
module.exports = dec;

/***/ }),

/***/ 4786:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      const defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42(false);  //=> false
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
var defaultTo = /*#__PURE__*/_curry2(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});
module.exports = defaultTo;

/***/ }),

/***/ 5636:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend, R.descendNatural, R.ascendNatural
 * @example
 *
 *      const byAge = R.descend(R.prop('age'));
 *      const people = [
 *        { name: 'Emma', age: 70 },
 *        { name: 'Peter', age: 78 },
 *        { name: 'Mikhail', age: 62 },
 *      ];
 *      const peopleByOldestFirst = R.sort(byAge, people);
 *        //=> [{ name: 'Peter', age: 78 }, { name: 'Emma', age: 70 }, { name: 'Mikhail', age: 62 }]
 */
var descend = /*#__PURE__*/_curry3(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});
module.exports = descend;

/***/ }),

/***/ 1371:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var curry = /*#__PURE__*/__nccwpck_require__(5273);
/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with natural sorting using localeCompare.
 *
 * @func
 * @memberOf R
 * @since v0.30.1
 * @category Function
 * @sig s -> (a -> String) -> a -> a -> Number
 * @param {String|Array} locales A string with a BCP 47 language tag, or an array of such strings. Corresponds to the locales parameter of the Intl.Collator() constructor.
 * @param {Function} fn A function of arity one that returns a string that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if a occurs after b, `1` if a occurs before b, otherwise `0`
 * @see R.descend
 * @example
 *
 *      const unsorted = ['3', '1', '10', 'Ørjan', 'Bob', 'Älva'];
 *
 *      R.sort(R.descendNatural('en', R.identity), unsorted);
 *      // => ['Ørjan', 'Bob', 'Älva', '10', '3', '1']
 *
 *      R.sort(R.descendNatural('sv', R.identity), unsorted);
 *      // => ['Ørjan', 'Älva', 'Bob', '10', '3', '1']
 *
 *     R.sort(R.descend(R.identity), unsorted);
 *      // => ['Ørjan', 'Älva', 'Bob', '3', '10', '1']
 */
var descendNatural = /*#__PURE__*/curry(function descendNatural(locales, fn, a, b) {
  const aa = fn(a);
  const bb = fn(b);
  return bb.localeCompare(aa, locales, {
    numeric: true
  });
});
module.exports = descendNatural;

/***/ }),

/***/ 3175:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _Set = /*#__PURE__*/__nccwpck_require__(2667);
/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
var difference = /*#__PURE__*/_curry2(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  var secondLen = second.length;
  var toFilterOut = new _Set();
  for (var i = 0; i < secondLen; i += 1) {
    toFilterOut.add(second[i]);
  }
  while (idx < firstLen) {
    if (toFilterOut.add(first[idx])) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
module.exports = difference;

/***/ }),

/***/ 3935:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _includesWith = /*#__PURE__*/__nccwpck_require__(1310);
var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      const cmp = (x, y) => x.a === y.a;
 *      const l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      const l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 *
 *      R.differenceWith(R.equals, [1, 2, 3, 3, 3], []); //=> [1, 2, 3]
 *      R.differenceWith(R.equals, [1, 2, 3, 3, 3], [1]); //=> [2, 3]
 */
var differenceWith = /*#__PURE__*/_curry3(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});
module.exports = differenceWith;

/***/ }),

/***/ 5255:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var dissocPath = /*#__PURE__*/__nccwpck_require__(6852);
/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc, R.omit
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
var dissoc = /*#__PURE__*/_curry2(function dissoc(prop, obj) {
  return dissocPath([prop], obj);
});
module.exports = dissoc;

/***/ }),

/***/ 6852:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dissoc = /*#__PURE__*/__nccwpck_require__(4304);
var _isInteger = /*#__PURE__*/__nccwpck_require__(6065);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var assoc = /*#__PURE__*/__nccwpck_require__(9093);
/**
 * Makes a shallow clone of an object. Note that this copies and flattens
 * prototype properties onto the new object as well. All non-primitive
 * properties are copied by reference.
 *
 * @private
 * @param {String|Integer} prop The prop operating
 * @param {Object|Array} obj The object to clone
 * @return {Object|Array} A new object equivalent to the original.
 */
function _shallowCloneObject(prop, obj) {
  if (_isInteger(prop) && _isArray(obj)) {
    return [].concat(obj);
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  return result;
}

/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
var dissocPath = /*#__PURE__*/_curry2(function dissocPath(path, obj) {
  if (obj == null) {
    return obj;
  }
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return _dissoc(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return _shallowCloneObject(head, obj);
      } else {
        return assoc(head, dissocPath(tail, obj[head]), obj);
      }
  }
});
module.exports = dissocPath;

/***/ }),

/***/ 8097:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      const half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      const reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
var divide = /*#__PURE__*/_curry2(function divide(a, b) {
  return a / b;
});
module.exports = divide;

/***/ }),

/***/ 4785:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xdrop = /*#__PURE__*/__nccwpck_require__(9506);
var slice = /*#__PURE__*/__nccwpck_require__(8772);
/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
var drop = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['drop'], _xdrop, function drop(n, xs) {
  return slice(Math.max(0, n), Infinity, xs);
}));
module.exports = drop;

/***/ }),

/***/ 8621:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _dropLast = /*#__PURE__*/__nccwpck_require__(6566);
var _xdropLast = /*#__PURE__*/__nccwpck_require__(510);
/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
var dropLast = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xdropLast, _dropLast));
module.exports = dropLast;

/***/ }),

/***/ 9340:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _dropLastWhile = /*#__PURE__*/__nccwpck_require__(6569);
var _xdropLastWhile = /*#__PURE__*/__nccwpck_require__(7041);
/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} predicate The function to be called on each element
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      const lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 *
 *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
 */
var dropLastWhile = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xdropLastWhile, _dropLastWhile));
module.exports = dropLastWhile;

/***/ }),

/***/ 9001:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xdropRepeatsWith = /*#__PURE__*/__nccwpck_require__(1860);
var dropRepeatsWith = /*#__PURE__*/__nccwpck_require__(1997);
var equals = /*#__PURE__*/__nccwpck_require__(4461);
/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
var dropRepeats = /*#__PURE__*/_curry1( /*#__PURE__*/_dispatchable([], function () {
  return _xdropRepeatsWith(equals);
}, /*#__PURE__*/dropRepeatsWith(equals)));
module.exports = dropRepeats;

/***/ }),

/***/ 6516:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xdropRepeatsWith = /*#__PURE__*/__nccwpck_require__(1860);
var dropRepeatsWith = /*#__PURE__*/__nccwpck_require__(1997);
var eqBy = /*#__PURE__*/__nccwpck_require__(1771);
/**
 * Returns a new list without any consecutively repeating elements,
 * based upon the value returned by applying the supplied function to
 * each list element. [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.29.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeatsBy(Math.abs, [1, -1, -1, 2, 3, -4, 4, 2, 2]); //=> [1, 2, 3, -4, 2]
 */
var dropRepeatsBy = /*#__PURE__*/_curry2(function (fn, list) {
  return _dispatchable([], function () {
    return _xdropRepeatsWith(eqBy(fn));
  }, dropRepeatsWith(eqBy(fn)))(list);
});
module.exports = dropRepeatsBy;

/***/ }),

/***/ 1997:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xdropRepeatsWith = /*#__PURE__*/__nccwpck_require__(1860);
var last = /*#__PURE__*/__nccwpck_require__(5452);
/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
var dropRepeatsWith = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(last(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));
module.exports = dropRepeatsWith;

/***/ }),

/***/ 5792:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xdropWhile = /*#__PURE__*/__nccwpck_require__(2693);
var slice = /*#__PURE__*/__nccwpck_require__(8772);
/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      const lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 *
 *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
 */
var dropWhile = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }
  return slice(idx, Infinity, xs);
}));
module.exports = dropWhile;

/***/ }),

/***/ 1621:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isFunction = /*#__PURE__*/__nccwpck_require__(4715);
var lift = /*#__PURE__*/__nccwpck_require__(7005);
var or = /*#__PURE__*/__nccwpck_require__(809);
/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.both, R.anyPass, R.or
 * @example
 *
 *      const gt10 = x => x > 10;
 *      const even = x => x % 2 === 0;
 *      const f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 *
 *      R.either(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(55)
 *      R.either([false, false, 'a'], [11]) // => [11, 11, "a"]
 */
var either = /*#__PURE__*/_curry2(function either(f, g) {
  return _isFunction(f) ? function _either() {
    return f.apply(this, arguments) || g.apply(this, arguments);
  } : lift(or)(f, g);
});
module.exports = either;

/***/ }),

/***/ 2259:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _isArguments = /*#__PURE__*/__nccwpck_require__(9071);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var _isObject = /*#__PURE__*/__nccwpck_require__(5960);
var _isString = /*#__PURE__*/__nccwpck_require__(934);
var _isTypedArray = /*#__PURE__*/__nccwpck_require__(374);
/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), Map (`new Map()`), Set (`new Set()`),
 * TypedArray (`Uint8Array []`, `Float32Array []`, etc), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));               //=> Nothing()
 *      R.empty([1, 2, 3]);              //=> []
 *      R.empty('unicorns');             //=> ''
 *      R.empty({x: 1, y: 2});           //=> {}
 *      R.empty(Uint8Array.from('123')); //=> Uint8Array []
 *      R.empty(Set);                    //=> Set()
 */
var empty = /*#__PURE__*/_curry1(function empty(x) {
  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : x == Set || x instanceof Set ? new Set() : x == Map || x instanceof Map ? new Map() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {
    return arguments;
  }() : _isTypedArray(x) ? x.constructor.from('') : void 0 // else
  ;
});
module.exports = empty;

/***/ }),

/***/ 4514:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var equals = /*#__PURE__*/__nccwpck_require__(4461);
var takeLast = /*#__PURE__*/__nccwpck_require__(8643);
/**
 * Checks if a list ends with the provided sublist.
 *
 * Similarly, checks if a string ends with the provided substring.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> [a] -> Boolean
 * @sig String -> String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @see R.startsWith
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var endsWith = /*#__PURE__*/_curry2(function (suffix, list) {
  return equals(takeLast(suffix.length, list), suffix);
});
module.exports = endsWith;

/***/ }),

/***/ 1771:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var equals = /*#__PURE__*/__nccwpck_require__(4461);
/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
var eqBy = /*#__PURE__*/_curry3(function eqBy(f, x, y) {
  return equals(f(x), f(y));
});
module.exports = eqBy;

/***/ }),

/***/ 6426:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var equals = /*#__PURE__*/__nccwpck_require__(4461);
/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      const o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      const o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
var eqProps = /*#__PURE__*/_curry3(function eqProps(prop, obj1, obj2) {
  return equals(obj1[prop], obj2[prop]);
});
module.exports = eqProps;

/***/ }),

/***/ 4461:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _equals = /*#__PURE__*/__nccwpck_require__(6582);
/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = /*#__PURE__*/_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});
module.exports = equals;

/***/ }),

/***/ 6625:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var _isObject = /*#__PURE__*/__nccwpck_require__(5960);
/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      const transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
var evolve = /*#__PURE__*/_curry2(function evolve(transformations, object) {
  if (!_isObject(object) && !_isArray(object)) {
    return object;
  }
  var result = object instanceof Array ? [] : {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
  }
  return result;
});
module.exports = evolve;

/***/ }),

/***/ 4178:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arrayReduce = /*#__PURE__*/__nccwpck_require__(5208);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _filter = /*#__PURE__*/__nccwpck_require__(1921);
var _filterMap = /*#__PURE__*/__nccwpck_require__(4719);
var _isMap = /*#__PURE__*/__nccwpck_require__(6293);
var _isObject = /*#__PURE__*/__nccwpck_require__(5960);
var _xfilter = /*#__PURE__*/__nccwpck_require__(9065);
var keys = /*#__PURE__*/__nccwpck_require__(3716);
/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects, Maps, or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @category Object
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/filter', 'filter'], _xfilter, function (pred, filterable) {
  return _isObject(filterable) ? _arrayReduce(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, keys(filterable)) : _isMap(filterable) ? _filterMap(pred, filterable) :
  // else
  _filter(pred, filterable);
}));
module.exports = filter;

/***/ }),

/***/ 3203:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xfind = /*#__PURE__*/__nccwpck_require__(9812);
/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      const xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq(2, 'a'))(xs); //=> {a: 2}
 *      R.find(R.propEq(4, 'a'))(xs); //=> undefined
 */
var find = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['find'], _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));
module.exports = find;

/***/ }),

/***/ 6903:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xfindIndex = /*#__PURE__*/__nccwpck_require__(9470);
/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce, R.indexOf
 * @example
 *
 *      const xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq(2, 'a'))(xs); //=> 1
 *      R.findIndex(R.propEq(4, 'a'))(xs); //=> -1
 */
var findIndex = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xfindIndex, function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));
module.exports = findIndex;

/***/ }),

/***/ 19:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xfindLast = /*#__PURE__*/__nccwpck_require__(9588);
/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq(1, 'a'))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq(4, 'a'))(xs); //=> undefined
 */
var findLast = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xfindLast, function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));
module.exports = findLast;

/***/ }),

/***/ 4903:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xfindLastIndex = /*#__PURE__*/__nccwpck_require__(6238);
/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce, R.lastIndexOf
 * @example
 *
 *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq(1, 'a'))(xs); //=> 1
 *      R.findLastIndex(R.propEq(4, 'a'))(xs); //=> -1
 */
var findLastIndex = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));
module.exports = findLastIndex;

/***/ }),

/***/ 2556:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _makeFlat = /*#__PURE__*/__nccwpck_require__(9194);
/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
var flatten = /*#__PURE__*/_curry1( /*#__PURE__*/_makeFlat(true));
module.exports = flatten;

/***/ }),

/***/ 483:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      const mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
var flip = /*#__PURE__*/_curry1(function flip(fn) {
  return curryN(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});
module.exports = flip;

/***/ }),

/***/ 8896:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var applyTo = /*#__PURE__*/__nccwpck_require__(1759);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _reduce = /*#__PURE__*/__nccwpck_require__(2261);
/**
 * Takes the value of an expression and applies it to a function
 * which is the left-to-right serial composition of the functions
 * given in the second argument.
 *
 * The functions in the pipeline should be unary functions.
 *
 * `flow` is helps to avoid introducing an extra function with named arguments
 * for computing the result of a function pipeline which depends on given initial values.
 * Rather than defining a referential transparent function `f = (_x, _y) => R.pipe(g(_x), h(_y), …)`
 * which is only later needed once `z = f(x, y)`,
 * the introduction of `f`, `_x` and `_y` can be avoided: `z = flow(x, [g, h(y),…]`
 *
 * In some libraries this function is named `pipe`.
 *
 * @func
 * @memberOf R
 * @since v0.30.0
 * @category Function
 * @sig a → [(a → b), …, (y → z)] → z
 * @param {*} a The seed value
 * @param {Array<Function>} pipeline functions composing the pipeline
 * @return {*} z The result of applying the seed value to the function pipeline
 * @see R.pipe
 * @example
 *      R.flow(9, [Math.sqrt, R.negate, R.inc]); //=> -2
 *
 *      const personObj = { first: 'Jane', last: 'Doe' };
 *      const fullName = R.flow(personObj, [R.values, R.join(' ')]); //=> "Jane Doe"
 *      const givenName = R.flow('    ', [R.trim, R.when(R.isEmpty, R.always(fullName))]); //=> "Jane Doe"
 */
var flow = /*#__PURE__*/_curry2(function flow(seed, pipeline) {
  return _reduce(applyTo, seed, pipeline);
});
module.exports = flow;

/***/ }),

/***/ 708:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _checkForMethod = /*#__PURE__*/__nccwpck_require__(9685);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      const printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
var forEach = /*#__PURE__*/_curry2( /*#__PURE__*/_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));
module.exports = forEach;

/***/ }),

/***/ 9058:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var keys = /*#__PURE__*/__nccwpck_require__(3716);
/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
var forEachObjIndexed = /*#__PURE__*/_curry2(function forEachObjIndexed(fn, obj) {
  var keyList = keys(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});
module.exports = forEachObjIndexed;

/***/ }),

/***/ 1839:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _fromPairs = /*#__PURE__*/__nccwpck_require__(6770);
/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
var fromPairs = /*#__PURE__*/_curry1(_fromPairs);
module.exports = fromPairs;

/***/ }),

/***/ 2972:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _checkForMethod = /*#__PURE__*/__nccwpck_require__(9685);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var reduceBy = /*#__PURE__*/__nccwpck_require__(4607);
/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a key-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx a => (b -> a) -> [b] -> {a: [b]}
 * @param {Function} fn Function :: a -> Idx
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.reduceBy, R.transduce, R.indexBy, R.collectBy
 * @example
 *
 *      const byGrade = R.groupBy(function(student) {
 *        const score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      const students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
var groupBy = /*#__PURE__*/_curry2( /*#__PURE__*/_checkForMethod('groupBy', /*#__PURE__*/reduceBy(function (acc, item) {
  acc.push(item);
  return acc;
}, [])));
module.exports = groupBy;

/***/ }),

/***/ 8693:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * const isVowel = R.test(/^[aeiou]$/i);
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
var groupWith = /*#__PURE__*/_curry2(function (fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});
module.exports = groupWith;

/***/ }),

/***/ 5147:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
var gt = /*#__PURE__*/_curry2(function gt(a, b) {
  return a > b;
});
module.exports = gt;

/***/ }),

/***/ 8120:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
var gte = /*#__PURE__*/_curry2(function gte(a, b) {
  return a >= b;
});
module.exports = gte;

/***/ }),

/***/ 2230:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var hasPath = /*#__PURE__*/__nccwpck_require__(4441);
/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      const hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      const point = {x: 0, y: 0};
 *      const pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
var has = /*#__PURE__*/_curry2(function has(prop, obj) {
  return hasPath([prop], obj);
});
module.exports = has;

/***/ }),

/***/ 5825:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var isNil = /*#__PURE__*/__nccwpck_require__(3261);
/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      const square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
var hasIn = /*#__PURE__*/_curry2(function hasIn(prop, obj) {
  if (isNil(obj)) {
    return false;
  }
  return prop in obj;
});
module.exports = hasIn;

/***/ }),

/***/ 4441:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
var isNil = /*#__PURE__*/__nccwpck_require__(3261);
/**
 * Returns whether or not a path exists in an object. Only the object's
 * own properties are checked.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {a} -> Boolean
 * @param {Array} path The path to use.
 * @param {Object} obj The object to check the path in.
 * @return {Boolean} Whether the path exists.
 * @see R.has
 * @example
 *
 *      R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
 *      R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
 *      R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
 *      R.hasPath(['a', 'b'], {});                  // => false
 */
var hasPath = /*#__PURE__*/_curry2(function hasPath(_path, obj) {
  if (_path.length === 0 || isNil(obj)) {
    return false;
  }
  var val = obj;
  var idx = 0;
  while (idx < _path.length) {
    if (!isNil(val) && _has(_path[idx], val)) {
      val = val[_path[idx]];
      idx += 1;
    } else {
      return false;
    }
  }
  return true;
});
module.exports = hasPath;

/***/ }),

/***/ 5558:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _nth = /*#__PURE__*/__nccwpck_require__(8477);
/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String | Undefined
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head([1, 2, 3]);  //=> 1
 *      R.head([1]);        //=> 1
 *      R.head([]);         //=> undefined
 *
 *      R.head('abc');  //=> 'a'
 *      R.head('a');    //=> 'a'
 *      R.head('');     //=> undefined
 */
var head = /*#__PURE__*/_curry1(function (list) {
  return _nth(0, list);
});
module.exports = head;

/***/ }),

/***/ 1369:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _objectIs = /*#__PURE__*/__nccwpck_require__(5564);
/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * Note this is merely a curried version of ES6 `Object.is`.
 *
 * `identical` does not support the `__` placeholder.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      const o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
var identical = function (a, b) {
  switch (arguments.length) {
    case 0:
      return identical;
    case 1:
      return function () {
        return function unaryIdentical(_b) {
          switch (arguments.length) {
            case 0:
              return unaryIdentical;
            default:
              return _objectIs(a, _b);
          }
        };
      }();
    default:
      return _objectIs(a, b);
  }
};

// In order to support Cross-origin Window objects as arguments to identical,
// it cannot be implemented as _curry2(_objectIs).
// The reason is that _curry2 checks if a function argument is the placeholder __
// by accessing a paritcular property. However, across URL origins access
// to most properties of Window is forbidden.
module.exports = identical;

/***/ }),

/***/ 5410:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _identity = /*#__PURE__*/__nccwpck_require__(3137);
/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      const obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
var identity = /*#__PURE__*/_curry1(_identity);
module.exports = identity;

/***/ }),

/***/ 1046:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * Note that `ifElse` takes its arity from the longest of the three functions passed to it.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when, R.cond
 * @example
 *
 *      const incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({ count: 1 }); //=> { count: 2 }
 *      incCount({});           //=> { count: 1 }
 */
var ifElse = /*#__PURE__*/_curry3(function ifElse(condition, onTrue, onFalse) {
  return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
module.exports = ifElse;

/***/ }),

/***/ 9814:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var add = /*#__PURE__*/__nccwpck_require__(1509);
/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
var inc = /*#__PURE__*/add(1);
module.exports = inc;

/***/ }),

/***/ 6741:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _includes = /*#__PURE__*/__nccwpck_require__(4642);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 * Also works with strings.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.includes(3, [1, 2, 3]); //=> true
 *      R.includes(4, [1, 2, 3]); //=> false
 *      R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.includes([42], [[42]]); //=> true
 *      R.includes('ba', 'banana'); //=>true
 */
var includes = /*#__PURE__*/_curry2(_includes);
module.exports = includes;

/***/ }),

/***/ 9254:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = {};
module.exports.F = __nccwpck_require__(112);
module.exports.T = __nccwpck_require__(7850);
module.exports.__ = __nccwpck_require__(2782);
module.exports.add = __nccwpck_require__(1509);
module.exports.addIndex = __nccwpck_require__(1073);
module.exports.addIndexRight = __nccwpck_require__(8475);
module.exports.adjust = __nccwpck_require__(6951);
module.exports.all = __nccwpck_require__(2197);
module.exports.allPass = __nccwpck_require__(4408);
module.exports.always = __nccwpck_require__(7529);
module.exports.and = __nccwpck_require__(2719);
module.exports.any = __nccwpck_require__(6444);
module.exports.anyPass = __nccwpck_require__(2965);
module.exports.ap = __nccwpck_require__(4057);
module.exports.aperture = __nccwpck_require__(1872);
module.exports.append = __nccwpck_require__(2431);
module.exports.apply = __nccwpck_require__(6890);
module.exports.applySpec = __nccwpck_require__(7837);
module.exports.applyTo = __nccwpck_require__(1759);
module.exports.ascend = __nccwpck_require__(3782);
module.exports.ascendNatural = __nccwpck_require__(6425);
module.exports.assoc = __nccwpck_require__(9093);
module.exports.assocPath = __nccwpck_require__(9330);
module.exports.binary = __nccwpck_require__(3741);
module.exports.bind = __nccwpck_require__(3543);
module.exports.both = __nccwpck_require__(315);
module.exports.call = __nccwpck_require__(4572);
module.exports.chain = __nccwpck_require__(8331);
module.exports.clamp = __nccwpck_require__(1225);
module.exports.clone = __nccwpck_require__(1019);
module.exports.collectBy = __nccwpck_require__(4833);
module.exports.comparator = __nccwpck_require__(9732);
module.exports.complement = __nccwpck_require__(7128);
module.exports.compose = __nccwpck_require__(7810);
module.exports.composeWith = __nccwpck_require__(9950);
module.exports.concat = __nccwpck_require__(868);
module.exports.cond = __nccwpck_require__(9032);
module.exports.construct = __nccwpck_require__(8071);
module.exports.constructN = __nccwpck_require__(3173);
module.exports.converge = __nccwpck_require__(1329);
module.exports.count = __nccwpck_require__(2953);
module.exports.countBy = __nccwpck_require__(5316);
module.exports.curry = __nccwpck_require__(5273);
module.exports.curryN = __nccwpck_require__(4111);
module.exports.dec = __nccwpck_require__(8854);
module.exports.defaultTo = __nccwpck_require__(4786);
module.exports.descend = __nccwpck_require__(5636);
module.exports.descendNatural = __nccwpck_require__(1371);
module.exports.difference = __nccwpck_require__(3175);
module.exports.differenceWith = __nccwpck_require__(3935);
module.exports.dissoc = __nccwpck_require__(5255);
module.exports.dissocPath = __nccwpck_require__(6852);
module.exports.divide = __nccwpck_require__(8097);
module.exports.drop = __nccwpck_require__(4785);
module.exports.dropLast = __nccwpck_require__(8621);
module.exports.dropLastWhile = __nccwpck_require__(9340);
module.exports.dropRepeats = __nccwpck_require__(9001);
module.exports.dropRepeatsBy = __nccwpck_require__(6516);
module.exports.dropRepeatsWith = __nccwpck_require__(1997);
module.exports.dropWhile = __nccwpck_require__(5792);
module.exports.either = __nccwpck_require__(1621);
module.exports.empty = __nccwpck_require__(2259);
module.exports.endsWith = __nccwpck_require__(4514);
module.exports.eqBy = __nccwpck_require__(1771);
module.exports.eqProps = __nccwpck_require__(6426);
module.exports.equals = __nccwpck_require__(4461);
module.exports.evolve = __nccwpck_require__(6625);
module.exports.filter = __nccwpck_require__(4178);
module.exports.find = __nccwpck_require__(3203);
module.exports.findIndex = __nccwpck_require__(6903);
module.exports.findLast = __nccwpck_require__(19);
module.exports.findLastIndex = __nccwpck_require__(4903);
module.exports.flatten = __nccwpck_require__(2556);
module.exports.flip = __nccwpck_require__(483);
module.exports.flow = __nccwpck_require__(8896);
module.exports.forEach = __nccwpck_require__(708);
module.exports.forEachObjIndexed = __nccwpck_require__(9058);
module.exports.fromPairs = __nccwpck_require__(1839);
module.exports.groupBy = __nccwpck_require__(2972);
module.exports.groupWith = __nccwpck_require__(8693);
module.exports.gt = __nccwpck_require__(5147);
module.exports.gte = __nccwpck_require__(8120);
module.exports.has = __nccwpck_require__(2230);
module.exports.hasIn = __nccwpck_require__(5825);
module.exports.hasPath = __nccwpck_require__(4441);
module.exports.head = __nccwpck_require__(5558);
module.exports.identical = __nccwpck_require__(1369);
module.exports.identity = __nccwpck_require__(5410);
module.exports.ifElse = __nccwpck_require__(1046);
module.exports.inc = __nccwpck_require__(9814);
module.exports.includes = __nccwpck_require__(6741);
module.exports.indexBy = __nccwpck_require__(8731);
module.exports.indexOf = __nccwpck_require__(6551);
module.exports.init = __nccwpck_require__(7458);
module.exports.innerJoin = __nccwpck_require__(5502);
module.exports.insert = __nccwpck_require__(4009);
module.exports.insertAll = __nccwpck_require__(5670);
module.exports.intersection = __nccwpck_require__(9357);
module.exports.intersperse = __nccwpck_require__(3676);
module.exports.into = __nccwpck_require__(8166);
module.exports.invert = __nccwpck_require__(1516);
module.exports.invertObj = __nccwpck_require__(2651);
module.exports.invoker = __nccwpck_require__(1804);
module.exports.is = __nccwpck_require__(7160);
module.exports.isEmpty = __nccwpck_require__(2095);
module.exports.isNil = __nccwpck_require__(3261);
module.exports.isNotEmpty = __nccwpck_require__(278);
module.exports.isNotNil = __nccwpck_require__(8104);
module.exports.join = __nccwpck_require__(3436);
module.exports.juxt = __nccwpck_require__(1301);
module.exports.keys = __nccwpck_require__(3716);
module.exports.keysIn = __nccwpck_require__(6859);
module.exports.last = __nccwpck_require__(5452);
module.exports.lastIndexOf = __nccwpck_require__(5191);
module.exports.length = __nccwpck_require__(8100);
module.exports.lens = __nccwpck_require__(2268);
module.exports.lensIndex = __nccwpck_require__(5990);
module.exports.lensPath = __nccwpck_require__(3279);
module.exports.lensProp = __nccwpck_require__(7389);
module.exports.lift = __nccwpck_require__(7005);
module.exports.liftN = __nccwpck_require__(787);
module.exports.lt = __nccwpck_require__(1124);
module.exports.lte = __nccwpck_require__(897);
module.exports.map = __nccwpck_require__(9692);
module.exports.mapAccum = __nccwpck_require__(4609);
module.exports.mapAccumRight = __nccwpck_require__(9195);
module.exports.mapKeys = __nccwpck_require__(6500);
module.exports.mapObjIndexed = __nccwpck_require__(5034);
module.exports.match = __nccwpck_require__(8239);
module.exports.mathMod = __nccwpck_require__(7116);
module.exports.max = __nccwpck_require__(6292);
module.exports.maxBy = __nccwpck_require__(4741);
module.exports.mean = __nccwpck_require__(5997);
module.exports.median = __nccwpck_require__(1838);
module.exports.memoizeWith = __nccwpck_require__(7334);
module.exports.mergeAll = __nccwpck_require__(3307);
module.exports.mergeDeepLeft = __nccwpck_require__(7569);
module.exports.mergeDeepRight = __nccwpck_require__(2152);
module.exports.mergeDeepWith = __nccwpck_require__(8980);
module.exports.mergeDeepWithKey = __nccwpck_require__(7593);
module.exports.mergeLeft = __nccwpck_require__(8823);
module.exports.mergeRight = __nccwpck_require__(6006);
module.exports.mergeWith = __nccwpck_require__(3562);
module.exports.mergeWithKey = __nccwpck_require__(1943);
module.exports.min = __nccwpck_require__(3354);
module.exports.minBy = __nccwpck_require__(1871);
module.exports.modify = __nccwpck_require__(5478);
module.exports.modifyPath = __nccwpck_require__(8713);
module.exports.modulo = __nccwpck_require__(5266);
module.exports.move = __nccwpck_require__(8209);
module.exports.multiply = __nccwpck_require__(7188);
module.exports.nAry = __nccwpck_require__(5492);
module.exports.partialObject = __nccwpck_require__(6904);
module.exports.negate = __nccwpck_require__(8806);
module.exports.none = __nccwpck_require__(810);
module.exports.not = __nccwpck_require__(1727);
module.exports.nth = __nccwpck_require__(1932);
module.exports.nthArg = __nccwpck_require__(8254);
module.exports.o = __nccwpck_require__(9935);
module.exports.objOf = __nccwpck_require__(5718);
module.exports.of = __nccwpck_require__(5749);
module.exports.omit = __nccwpck_require__(7893);
module.exports.on = __nccwpck_require__(1165);
module.exports.once = __nccwpck_require__(6053);
module.exports.or = __nccwpck_require__(809);
module.exports.otherwise = __nccwpck_require__(2736);
module.exports.over = __nccwpck_require__(2078);
module.exports.pair = __nccwpck_require__(6428);
module.exports.partial = __nccwpck_require__(2051);
module.exports.partialRight = __nccwpck_require__(3049);
module.exports.partition = __nccwpck_require__(1752);
module.exports.path = __nccwpck_require__(8639);
module.exports.paths = __nccwpck_require__(8602);
module.exports.pathEq = __nccwpck_require__(5541);
module.exports.pathOr = __nccwpck_require__(1238);
module.exports.pathSatisfies = __nccwpck_require__(9954);
module.exports.pick = __nccwpck_require__(9922);
module.exports.pickAll = __nccwpck_require__(4490);
module.exports.pickBy = __nccwpck_require__(355);
module.exports.pipe = __nccwpck_require__(4944);
module.exports.pipeWith = __nccwpck_require__(1352);
module.exports.pluck = __nccwpck_require__(7519);
module.exports.prepend = __nccwpck_require__(7958);
module.exports.product = __nccwpck_require__(193);
module.exports.project = __nccwpck_require__(2435);
module.exports.promap = __nccwpck_require__(4543);
module.exports.prop = __nccwpck_require__(5117);
module.exports.propEq = __nccwpck_require__(883);
module.exports.propIs = __nccwpck_require__(6121);
module.exports.propOr = __nccwpck_require__(9135);
module.exports.propSatisfies = __nccwpck_require__(9380);
module.exports.props = __nccwpck_require__(5880);
module.exports.range = __nccwpck_require__(379);
module.exports.rebuild = __nccwpck_require__(6529);
module.exports.reduce = __nccwpck_require__(7466);
module.exports.reduceBy = __nccwpck_require__(4607);
module.exports.reduceRight = __nccwpck_require__(938);
module.exports.reduceWhile = __nccwpck_require__(7709);
module.exports.reduced = __nccwpck_require__(7836);
module.exports.reject = __nccwpck_require__(7899);
module.exports.remove = __nccwpck_require__(6915);
module.exports.renameKeys = __nccwpck_require__(5542);
module.exports.repeat = __nccwpck_require__(8127);
module.exports.replace = __nccwpck_require__(9874);
module.exports.reverse = __nccwpck_require__(9608);
module.exports.scan = __nccwpck_require__(9929);
module.exports.sequence = __nccwpck_require__(4553);
module.exports.set = __nccwpck_require__(8654);
module.exports.slice = __nccwpck_require__(8772);
module.exports.sort = __nccwpck_require__(6084);
module.exports.sortBy = __nccwpck_require__(4565);
module.exports.sortWith = __nccwpck_require__(44);
module.exports.split = __nccwpck_require__(6710);
module.exports.splitAt = __nccwpck_require__(5391);
module.exports.splitEvery = __nccwpck_require__(4971);
module.exports.splitWhen = __nccwpck_require__(1946);
module.exports.splitWhenever = __nccwpck_require__(5434);
module.exports.startsWith = __nccwpck_require__(1561);
module.exports.subtract = __nccwpck_require__(120);
module.exports.sum = __nccwpck_require__(3957);
module.exports.swap = __nccwpck_require__(511);
module.exports.symmetricDifference = __nccwpck_require__(9034);
module.exports.symmetricDifferenceWith = __nccwpck_require__(3766);
module.exports.tail = __nccwpck_require__(8998);
module.exports.take = __nccwpck_require__(2755);
module.exports.takeLast = __nccwpck_require__(8643);
module.exports.takeLastWhile = __nccwpck_require__(2330);
module.exports.takeWhile = __nccwpck_require__(5258);
module.exports.tap = __nccwpck_require__(5791);
module.exports.test = __nccwpck_require__(648);
module.exports.andThen = __nccwpck_require__(8644);
module.exports.times = __nccwpck_require__(7940);
module.exports.toLower = __nccwpck_require__(8076);
module.exports.toPairs = __nccwpck_require__(4872);
module.exports.toPairsIn = __nccwpck_require__(9463);
module.exports.toString = __nccwpck_require__(1104);
module.exports.toUpper = __nccwpck_require__(5433);
module.exports.transduce = __nccwpck_require__(2763);
module.exports.transpose = __nccwpck_require__(2541);
module.exports.traverse = __nccwpck_require__(3278);
module.exports.trim = __nccwpck_require__(4532);
module.exports.tryCatch = __nccwpck_require__(8212);
module.exports.type = __nccwpck_require__(7204);
module.exports.unapply = __nccwpck_require__(8987);
module.exports.unary = __nccwpck_require__(5793);
module.exports.uncurryN = __nccwpck_require__(5772);
module.exports.unfold = __nccwpck_require__(6796);
module.exports.union = __nccwpck_require__(3369);
module.exports.unionWith = __nccwpck_require__(9229);
module.exports.uniq = __nccwpck_require__(3785);
module.exports.uniqBy = __nccwpck_require__(3204);
module.exports.uniqWith = __nccwpck_require__(7085);
module.exports.unless = __nccwpck_require__(8210);
module.exports.unnest = __nccwpck_require__(8613);
module.exports.until = __nccwpck_require__(9850);
module.exports.unwind = __nccwpck_require__(1505);
module.exports.update = __nccwpck_require__(2233);
module.exports.useWith = __nccwpck_require__(9341);
module.exports.values = __nccwpck_require__(534);
module.exports.valuesIn = __nccwpck_require__(1441);
module.exports.view = __nccwpck_require__(4597);
module.exports.when = __nccwpck_require__(9168);
module.exports.where = __nccwpck_require__(7857);
module.exports.whereAny = __nccwpck_require__(3943);
module.exports.whereEq = __nccwpck_require__(7215);
module.exports.without = __nccwpck_require__(354);
module.exports.xor = __nccwpck_require__(5259);
module.exports.xprod = __nccwpck_require__(3187);
module.exports.zip = __nccwpck_require__(2393);
module.exports.zipObj = __nccwpck_require__(4560);
module.exports.zipWith = __nccwpck_require__(9261);
module.exports.thunkify = __nccwpck_require__(9166);

/***/ }),

/***/ 8731:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var reduceBy = /*#__PURE__*/__nccwpck_require__(4607);
/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx a => (b -> a) -> [b] -> {a: b}
 * @param {Function} fn Function :: a -> Idx
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @see R.groupBy
 * @example
 *
 *      const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
var indexBy = /*#__PURE__*/reduceBy(function (acc, elem) {
  return elem;
}, null);
module.exports = indexBy;

/***/ }),

/***/ 6551:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _indexOf = /*#__PURE__*/__nccwpck_require__(1530);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf, R.findIndex
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
var indexOf = /*#__PURE__*/_curry2(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
});
module.exports = indexOf;

/***/ }),

/***/ 7458:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var slice = /*#__PURE__*/__nccwpck_require__(8772);
/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
var init = /*#__PURE__*/slice(0, -1);
module.exports = init;

/***/ }),

/***/ 5502:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _includesWith = /*#__PURE__*/__nccwpck_require__(1310);
var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _filter = /*#__PURE__*/__nccwpck_require__(1921);
/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
var innerJoin = /*#__PURE__*/_curry3(function innerJoin(pred, xs, ys) {
  return _filter(function (x) {
    return _includesWith(pred, x, ys);
  }, xs);
});
module.exports = innerJoin;

/***/ }),

/***/ 4009:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
var insert = /*#__PURE__*/_curry3(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});
module.exports = insert;

/***/ }),

/***/ 5670:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
var insertAll = /*#__PURE__*/_curry3(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
});
module.exports = insertAll;

/***/ }),

/***/ 2667:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _includes = /*#__PURE__*/__nccwpck_require__(4642);
var _Set = /*#__PURE__*/function () {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }
  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  return _Set;
}();
function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;
  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }
          return false;
        }
      }
      // these types can all utilise the native Set
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }
          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }
          return false;
        }
      }
    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;
        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }
        return false;
      }
    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!_includes(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
      }
    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }
        return false;
      }
    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }
          return false;
        }
        return true;
      }
    /* falls through */
    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);
      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }
        return false;
      }
      // scan through all previously applied items
      if (!_includes(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }
        return false;
      }
      return true;
  }
}

// A simple Set type that honours R.equals semantics
module.exports = _Set;

/***/ }),

/***/ 939:
/***/ ((module) => {

function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}
module.exports = _aperture;

/***/ }),

/***/ 2:
/***/ ((module) => {

function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}
module.exports = _arity;

/***/ }),

/***/ 2400:
/***/ ((module) => {

function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}
module.exports = _arrayFromIterator;

/***/ }),

/***/ 5208:
/***/ ((module) => {

function _arrayReduce(reducer, acc, list) {
  var index = 0;
  var length = list.length;
  while (index < length) {
    acc = reducer(acc, list[index]);
    index += 1;
  }
  return acc;
}
module.exports = _arrayReduce;

/***/ }),

/***/ 2564:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _isFunction = /*#__PURE__*/__nccwpck_require__(4715);
var _toString = /*#__PURE__*/__nccwpck_require__(2935);
function _assertPromise(name, p) {
  if (p == null || !_isFunction(p.then)) {
    throw new TypeError('`' + name + '` expected a Promise, received ' + _toString(p, []));
  }
}
module.exports = _assertPromise;

/***/ }),

/***/ 9860:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var _isInteger = /*#__PURE__*/__nccwpck_require__(6065);
/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @private
 * @param {String|Number} prop The property name to set
 * @param {*} val The new value
 * @param {Object|Array} obj The object to clone
 * @return {Object|Array} A new object equivalent to the original except for the changed property.
 */
function _assoc(prop, val, obj) {
  if (_isInteger(prop) && _isArray(obj)) {
    var _idx = prop < 0 ? obj.length + prop : prop;
    var arr = [].concat(obj);
    arr[_idx] = val;
    return arr;
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
}
module.exports = _assoc;

/***/ }),

/***/ 9214:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _makeFlat = /*#__PURE__*/__nccwpck_require__(9194);
var _xchain = /*#__PURE__*/__nccwpck_require__(3670);
var map = /*#__PURE__*/__nccwpck_require__(9692);
module.exports = /*#__PURE__*/_dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function (x) {
      return fn(monad(x))(x);
    };
  }
  return _makeFlat(false)(map(fn, monad));
});

/***/ }),

/***/ 9685:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implementation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}
module.exports = _checkForMethod;

/***/ }),

/***/ 8090:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _cloneRegExp = /*#__PURE__*/__nccwpck_require__(2043);
var type = /*#__PURE__*/__nccwpck_require__(7204);
/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
function _clone(value, deep, map) {
  map || (map = new _ObjectMap());

  // this avoids the slower switch with a quick if decision removing some milliseconds in each run.
  if (_isPrimitive(value)) {
    return value;
  }
  var copy = function copy(copiedValue) {
    // Check for circular and same references on the object graph and return its corresponding clone.
    var cachedCopy = map.get(value);
    if (cachedCopy) {
      return cachedCopy;
    }
    map.set(value, copiedValue);
    for (var key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        copiedValue[key] = deep ? _clone(value[key], true, map) : value[key];
      }
    }
    return copiedValue;
  };
  switch (type(value)) {
    case 'Object':
      return copy(Object.create(Object.getPrototypeOf(value)));
    case 'Array':
      return copy(Array(value.length));
    case 'Date':
      return new Date(value.valueOf());
    case 'RegExp':
      return _cloneRegExp(value);
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'BigInt64Array':
    case 'BigUint64Array':
      return value.slice();
    default:
      return value;
  }
}
module.exports = _clone;
function _isPrimitive(param) {
  var type = typeof param;
  return param == null || type != 'object' && type != 'function';
}
var _ObjectMap = /*#__PURE__*/function () {
  function _ObjectMap() {
    this.map = {};
    this.length = 0;
  }
  _ObjectMap.prototype.set = function (key, value) {
    var hashedKey = this.hash(key);
    var bucket = this.map[hashedKey];
    if (!bucket) {
      this.map[hashedKey] = bucket = [];
    }
    bucket.push([key, value]);
    this.length += 1;
  };
  _ObjectMap.prototype.hash = function (key) {
    var hashedKey = [];
    for (var value in key) {
      hashedKey.push(Object.prototype.toString.call(key[value]));
    }
    return hashedKey.join();
  };
  _ObjectMap.prototype.get = function (key) {
    /**
     * depending on the number of objects to be cloned is faster to just iterate over the items in the map just because the hash function is so costly,
     * on my tests this number is 180, anything above that using the hash function is faster.
     */
    if (this.length <= 180) {
      for (var p in this.map) {
        var bucket = this.map[p];
        for (var i = 0; i < bucket.length; i += 1) {
          var element = bucket[i];
          if (element[0] === key) {
            return element[1];
          }
        }
      }
      return;
    }
    var hashedKey = this.hash(key);
    var bucket = this.map[hashedKey];
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i += 1) {
      var element = bucket[i];
      if (element[0] === key) {
        return element[1];
      }
    }
  };
  return _ObjectMap;
}();

/***/ }),

/***/ 2043:
/***/ ((module) => {

function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, pattern.flags ? pattern.flags : (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : '') + (pattern.dotAll ? 's' : ''));
}
module.exports = _cloneRegExp;

/***/ }),

/***/ 5435:
/***/ ((module) => {

function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}
module.exports = _complement;

/***/ }),

/***/ 3667:
/***/ ((module) => {

/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];
  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}
module.exports = _concat;

/***/ }),

/***/ 5183:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arity = /*#__PURE__*/__nccwpck_require__(2);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
function _createPartialApplicator(concat) {
  return _curry2(function (fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function () {
      return fn.apply(this, concat(args, arguments));
    });
  });
}
module.exports = _createPartialApplicator;

/***/ }),

/***/ 6129:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _isArrayLike = /*#__PURE__*/__nccwpck_require__(6525);
var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
function _createReduce(arrayReduce, methodReduce, iterableReduce) {
  return function _reduce(xf, acc, list) {
    if (_isArrayLike(list)) {
      return arrayReduce(xf, acc, list);
    }
    if (list == null) {
      return acc;
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
      return methodReduce(xf, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
      return iterableReduce(xf, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return iterableReduce(xf, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return methodReduce(xf, acc, list, 'reduce');
    }
    throw new TypeError('reduce: list must be array or iterable');
  };
}
module.exports = _createReduce;

/***/ }),

/***/ 5733:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _isPlaceholder = /*#__PURE__*/__nccwpck_require__(3674);
/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
module.exports = _curry1;

/***/ }),

/***/ 8780:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _isPlaceholder = /*#__PURE__*/__nccwpck_require__(3674);
/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}
module.exports = _curry2;

/***/ }),

/***/ 6771:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isPlaceholder = /*#__PURE__*/__nccwpck_require__(3674);
/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}
module.exports = _curry3;

/***/ }),

/***/ 7336:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arity = /*#__PURE__*/__nccwpck_require__(2);
var _isPlaceholder = /*#__PURE__*/__nccwpck_require__(3674);
/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    var hasPlaceholder = false;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      } else {
        hasPlaceholder = true;
      }
      combinedIdx += 1;
    }
    return !hasPlaceholder && left <= 0 ? fn.apply(this, combined) : _arity(Math.max(0, left), _curryN(length, combined, fn));
  };
}
module.exports = _curryN;

/***/ }),

/***/ 4125:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var _isTransformer = /*#__PURE__*/__nccwpck_require__(1348);
/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer created by [transducerCreator] to return a new transformer
 * (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} transducerCreator transducer factory if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable(methodNames, transducerCreator, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var obj = arguments[arguments.length - 1];
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}
module.exports = _dispatchable;

/***/ }),

/***/ 4304:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _isInteger = /*#__PURE__*/__nccwpck_require__(6065);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var remove = /*#__PURE__*/__nccwpck_require__(6915);
/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @private
 * @param {String|Number} prop The name of the property to dissociate
 * @param {Object|Array} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 */
function _dissoc(prop, obj) {
  if (obj == null) {
    return obj;
  }
  if (_isInteger(prop) && _isArray(obj)) {
    return remove(prop, 1, obj);
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
}
module.exports = _dissoc;

/***/ }),

/***/ 6566:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var take = /*#__PURE__*/__nccwpck_require__(2755);
function dropLast(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
}
module.exports = dropLast;

/***/ }),

/***/ 6569:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var slice = /*#__PURE__*/__nccwpck_require__(8772);
function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return slice(0, idx + 1, xs);
}
module.exports = dropLastWhile;

/***/ }),

/***/ 6582:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arrayFromIterator = /*#__PURE__*/__nccwpck_require__(2400);
var _includesWith = /*#__PURE__*/__nccwpck_require__(1310);
var _functionName = /*#__PURE__*/__nccwpck_require__(4812);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
var _objectIs = /*#__PURE__*/__nccwpck_require__(5564);
var keys = /*#__PURE__*/__nccwpck_require__(3716);
var type = /*#__PURE__*/__nccwpck_require__(7204);
/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparison of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !_includesWith(function (b, aItem) {
    return !_includesWith(eq, aItem, b);
  }, b, a);
}
function _equals(a, b, stackA, stackB) {
  if (_objectIs(a, b)) {
    return true;
  }
  var typeA = type(a);
  if (typeA !== type(b)) {
    return false;
  }
  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }
  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }
  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && _objectIs(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!_objectIs(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }
  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}
module.exports = _equals;

/***/ }),

/***/ 1921:
/***/ ((module) => {

function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}
module.exports = _filter;

/***/ }),

/***/ 4719:
/***/ ((module) => {

function _filterMap(fn, map) {
  var result = new Map();
  var iterator = map.entries();
  var current = iterator.next();
  while (!current.done) {
    if (fn(current.value[1])) {
      result.set(current.value[0], current.value[1]);
    }
    current = iterator.next();
  }
  return result;
}
module.exports = _filterMap;

/***/ }),

/***/ 4534:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _forceReduced = /*#__PURE__*/__nccwpck_require__(1444);
var _isArrayLike = /*#__PURE__*/__nccwpck_require__(6525);
var _xArrayReduce = /*#__PURE__*/__nccwpck_require__(9296);
var _xReduce = /*#__PURE__*/__nccwpck_require__(4493);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var tInit = '@@transducer/init';
var tStep = '@@transducer/step';
var tResult = '@@transducer/result';
var XPreservingReduced = /*#__PURE__*/function () {
  function XPreservingReduced(xf) {
    this.xf = xf;
  }
  XPreservingReduced.prototype[tInit] = _xfBase.init;
  XPreservingReduced.prototype[tResult] = _xfBase.result;
  XPreservingReduced.prototype[tStep] = function (result, input) {
    var ret = this.xf[tStep](result, input);
    return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
  };
  return XPreservingReduced;
}();
var XFlatCat = /*#__PURE__*/function () {
  function XFlatCat(xf) {
    this.xf = new XPreservingReduced(xf);
  }
  XFlatCat.prototype[tInit] = _xfBase.init;
  XFlatCat.prototype[tResult] = _xfBase.result;
  XFlatCat.prototype[tStep] = function (result, input) {
    return !_isArrayLike(input) ? _xArrayReduce(this.xf, result, [input]) : _xReduce(this.xf, result, input);
  };
  return XFlatCat;
}();
var _flatCat = function _xcat(xf) {
  return new XFlatCat(xf);
};
module.exports = _flatCat;

/***/ }),

/***/ 1444:
/***/ ((module) => {

function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}
module.exports = _forceReduced;

/***/ }),

/***/ 6770:
/***/ ((module) => {

function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
}
module.exports = fromPairs;

/***/ }),

/***/ 4812:
/***/ ((module) => {

function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}
module.exports = _functionName;

/***/ }),

/***/ 6515:
/***/ ((module) => {

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
module.exports = _has;

/***/ }),

/***/ 3137:
/***/ ((module) => {

function _identity(x) {
  return x;
}
module.exports = _identity;

/***/ }),

/***/ 4642:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _indexOf = /*#__PURE__*/__nccwpck_require__(1530);
function _includes(a, list) {
  return _indexOf(list, a, 0) >= 0;
}
module.exports = _includes;

/***/ }),

/***/ 1310:
/***/ ((module) => {

function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}
module.exports = _includesWith;

/***/ }),

/***/ 1530:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var equals = /*#__PURE__*/__nccwpck_require__(4461);
function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);
      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}
module.exports = _indexOf;

/***/ }),

/***/ 9071:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _has = /*#__PURE__*/__nccwpck_require__(6515);
var toString = Object.prototype.toString;
var _isArguments = /*#__PURE__*/function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
}();
module.exports = _isArguments;

/***/ }),

/***/ 8450:
/***/ ((module) => {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

/***/ }),

/***/ 6525:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var _isString = /*#__PURE__*/__nccwpck_require__(934);
/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 *      _isArrayLike({nodeType: 1, length: 1}) // => false
 */
var _isArrayLike = /*#__PURE__*/_curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
module.exports = _isArrayLike;

/***/ }),

/***/ 4715:
/***/ ((module) => {

function _isFunction(x) {
  var type = Object.prototype.toString.call(x);
  return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object AsyncGeneratorFunction]';
}
module.exports = _isFunction;

/***/ }),

/***/ 6065:
/***/ ((module) => {

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
module.exports = Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
};

/***/ }),

/***/ 6293:
/***/ ((module) => {

function _isMap(x) {
  return Object.prototype.toString.call(x) === '[object Map]';
}
module.exports = _isMap;

/***/ }),

/***/ 1438:
/***/ ((module) => {

function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}
module.exports = _isNumber;

/***/ }),

/***/ 5960:
/***/ ((module) => {

function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}
module.exports = _isObject;

/***/ }),

/***/ 3674:
/***/ ((module) => {

function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}
module.exports = _isPlaceholder;

/***/ }),

/***/ 2546:
/***/ ((module) => {

function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
}
module.exports = _isRegExp;

/***/ }),

/***/ 934:
/***/ ((module) => {

function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}
module.exports = _isString;

/***/ }),

/***/ 1348:
/***/ ((module) => {

function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}
module.exports = _isTransformer;

/***/ }),

/***/ 374:
/***/ ((module) => {

/**
 * Tests whether or not an object is a typed array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is a typed array, `false` otherwise.
 * @example
 *
 *      _isTypedArray(new Uint8Array([])); //=> true
 *      _isTypedArray(new Float32Array([])); //=> true
 *      _isTypedArray([]); //=> false
 *      _isTypedArray(null); //=> false
 *      _isTypedArray({}); //=> false
 */
function _isTypedArray(val) {
  var type = Object.prototype.toString.call(val);
  return type === '[object Uint8ClampedArray]' || type === '[object Int8Array]' || type === '[object Uint8Array]' || type === '[object Int16Array]' || type === '[object Uint16Array]' || type === '[object Int32Array]' || type === '[object Uint32Array]' || type === '[object Float32Array]' || type === '[object Float64Array]' || type === '[object BigInt64Array]' || type === '[object BigUint64Array]';
}
module.exports = _isTypedArray;

/***/ }),

/***/ 9194:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _isArrayLike = /*#__PURE__*/__nccwpck_require__(6525);
/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;
    while (idx < ilen) {
      if (_isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}
module.exports = _makeFlat;

/***/ }),

/***/ 1357:
/***/ ((module) => {

function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}
module.exports = _map;

/***/ }),

/***/ 2009:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _rebuild = /*#__PURE__*/__nccwpck_require__(752);
var mapKeys = function mapKeys(fn, obj) {
  return _rebuild(function (k, v) {
    return [[fn(k), v]];
  }, obj);
};
module.exports = mapKeys;

/***/ }),

/***/ 7541:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var _isInteger = /*#__PURE__*/__nccwpck_require__(6065);
/**
 * Makes a shallow clone of an object, applying the given fn to the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @private
 * @param {String|Number} prop The property name to set
 * @param {Function} fn The function to apply to the property
 * @param {Object|Array} obj The object to clone
 * @return {Object|Array} A new object equivalent to the original except for the changed property.
 */
function _modify(prop, fn, obj) {
  if (_isInteger(prop) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[prop] = fn(arr[prop]);
    return arr;
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = fn(result[prop]);
  return result;
}
module.exports = _modify;

/***/ }),

/***/ 8477:
/***/ ((module) => {

function _nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return list[idx];
}
module.exports = _nth;

/***/ }),

/***/ 2949:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _has = /*#__PURE__*/__nccwpck_require__(6515); // Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}
module.exports = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

/***/ }),

/***/ 5564:
/***/ ((module) => {

// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}
module.exports = typeof Object.is === 'function' ? Object.is : _objectIs;

/***/ }),

/***/ 8400:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _isInteger = /*#__PURE__*/__nccwpck_require__(6065);
var _nth = /*#__PURE__*/__nccwpck_require__(8477);
function _path(pathAr, obj) {
  var val = obj;
  for (var i = 0; i < pathAr.length; i += 1) {
    if (val == null) {
      return undefined;
    }
    var p = pathAr[i];
    if (_isInteger(p)) {
      val = _nth(p, val);
    } else {
      val = val[p];
    }
  }
  return val;
}
module.exports = _path;

/***/ }),

/***/ 1391:
/***/ ((module) => {

function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}
module.exports = _pipe;

/***/ }),

/***/ 6172:
/***/ ((module) => {

function _promap(f, g, profunctor) {
  return function (x) {
    return g(profunctor(f(x)));
  };
}
module.exports = _promap;

/***/ }),

/***/ 9574:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _isInteger = /*#__PURE__*/__nccwpck_require__(6065);
var _nth = /*#__PURE__*/__nccwpck_require__(8477);
function _prop(p, obj) {
  if (obj == null) {
    return;
  }
  return _isInteger(p) ? _nth(p, obj) : obj[p];
}
module.exports = _prop;

/***/ }),

/***/ 5847:
/***/ ((module) => {

function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
  return '"' + escaped.replace(/"/g, '\\"') + '"';
}
module.exports = _quote;

/***/ }),

/***/ 752:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _fromPairs = /*#__PURE__*/__nccwpck_require__(6770);
var _toPairs = /*#__PURE__*/__nccwpck_require__(561);
var _chain = /*#__PURE__*/__nccwpck_require__(9214);
var rebuild = function (convert, obj) {
  return _fromPairs(_chain(function (pair) {
    return convert(pair[0], pair[1]);
  }, _toPairs(obj)));
};
module.exports = rebuild;

/***/ }),

/***/ 2261:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arrayReduce = /*#__PURE__*/__nccwpck_require__(5208);
var _createReduce = /*#__PURE__*/__nccwpck_require__(6129);
function _iterableReduce(reducer, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = reducer(acc, step.value);
    step = iter.next();
  }
  return acc;
}
function _methodReduce(reducer, acc, obj, methodName) {
  return obj[methodName](reducer, acc);
}
var _reduce = /*#__PURE__*/_createReduce(_arrayReduce, _methodReduce, _iterableReduce);
module.exports = _reduce;

/***/ }),

/***/ 1797:
/***/ ((module) => {

function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}
module.exports = _reduced;

/***/ }),

/***/ 4941:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _objectAssign = /*#__PURE__*/__nccwpck_require__(2949);
var _identity = /*#__PURE__*/__nccwpck_require__(3137);
var _isArrayLike = /*#__PURE__*/__nccwpck_require__(6525);
var _isTransformer = /*#__PURE__*/__nccwpck_require__(1348);
var objOf = /*#__PURE__*/__nccwpck_require__(5718);
var _stepCatArray = {
  '@@transducer/init': Array,
  '@@transducer/step': function (xs, x) {
    xs.push(x);
    return xs;
  },
  '@@transducer/result': _identity
};
var _stepCatString = {
  '@@transducer/init': String,
  '@@transducer/step': function (a, b) {
    return a + b;
  },
  '@@transducer/result': _identity
};
var _stepCatObject = {
  '@@transducer/init': Object,
  '@@transducer/step': function (result, input) {
    return _objectAssign(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
  },
  '@@transducer/result': _identity
};
function _stepCat(obj) {
  if (_isTransformer(obj)) {
    return obj;
  }
  if (_isArrayLike(obj)) {
    return _stepCatArray;
  }
  if (typeof obj === 'string') {
    return _stepCatString;
  }
  if (typeof obj === 'object') {
    return _stepCatObject;
  }
  throw new Error('Cannot create transformer for ' + obj);
}
module.exports = _stepCat;

/***/ }),

/***/ 3884:
/***/ ((module) => {

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};
var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};
module.exports = _toISOString;

/***/ }),

/***/ 561:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _has = /*#__PURE__*/__nccwpck_require__(6515);
function _toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
}
module.exports = _toPairs;

/***/ }),

/***/ 2935:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _includes = /*#__PURE__*/__nccwpck_require__(4642);
var _map = /*#__PURE__*/__nccwpck_require__(1357);
var _quote = /*#__PURE__*/__nccwpck_require__(5847);
var _toISOString = /*#__PURE__*/__nccwpck_require__(3884);
var keys = /*#__PURE__*/__nccwpck_require__(3716);
var reject = /*#__PURE__*/__nccwpck_require__(7899);
function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _includes(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function (obj, keys) {
    return _map(function (k) {
      return _quote(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };
  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
        return /^\d+$/.test(k);
      }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Map]':
      return 'new Map(' + recur(Array.from(x)) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object Set]':
      return 'new Set(' + recur(Array.from(x).sort()) + ')';
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
}
module.exports = _toString;

/***/ }),

/***/ 9296:
/***/ ((module) => {

function _xArrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}
module.exports = _xArrayReduce;

/***/ }),

/***/ 4493:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _createReduce = /*#__PURE__*/__nccwpck_require__(6129);
var _xArrayReduce = /*#__PURE__*/__nccwpck_require__(9296);
var bind = /*#__PURE__*/__nccwpck_require__(3543);
function _xIterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}
function _xMethodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
}
var _xReduce = /*#__PURE__*/_createReduce(_xArrayReduce, _xMethodReduce, _xIterableReduce);
module.exports = _xReduce;

/***/ }),

/***/ 3260:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _reduced = /*#__PURE__*/__nccwpck_require__(1797);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XAll = /*#__PURE__*/function () {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = _xfBase.init;
  XAll.prototype['@@transducer/result'] = function (result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };
  return XAll;
}();
function _xall(f) {
  return function (xf) {
    return new XAll(f, xf);
  };
}
module.exports = _xall;

/***/ }),

/***/ 5457:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _reduced = /*#__PURE__*/__nccwpck_require__(1797);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XAny = /*#__PURE__*/function () {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = _xfBase.init;
  XAny.prototype['@@transducer/result'] = function (result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };
  return XAny;
}();
function _xany(f) {
  return function (xf) {
    return new XAny(f, xf);
  };
}
module.exports = _xany;

/***/ }),

/***/ 2147:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XAperture = /*#__PURE__*/function () {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = _xfBase.init;
  XAperture.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function (result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function () {
    return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };
  return XAperture;
}();
function _xaperture(n) {
  return function (xf) {
    return new XAperture(n, xf);
  };
}
module.exports = _xaperture;

/***/ }),

/***/ 3670:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _flatCat = /*#__PURE__*/__nccwpck_require__(4534);
var _xmap = /*#__PURE__*/__nccwpck_require__(2853);
function _xchain(f) {
  return function (xf) {
    return _xmap(f)(_flatCat(xf));
  };
}
module.exports = _xchain;

/***/ }),

/***/ 9506:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XDrop = /*#__PURE__*/function () {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = _xfBase.init;
  XDrop.prototype['@@transducer/result'] = _xfBase.result;
  XDrop.prototype['@@transducer/step'] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };
  return XDrop;
}();
function _xdrop(n) {
  return function (xf) {
    return new XDrop(n, xf);
  };
}
module.exports = _xdrop;

/***/ }),

/***/ 510:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XDropLast = /*#__PURE__*/function () {
  function XDropLast(n, xf) {
    if (n <= 0) {
      return xf;
    }
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = _xfBase.init;
  XDropLast.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  return XDropLast;
}();
function _xdropLast(n) {
  return function (xf) {
    return new XDropLast(n, xf);
  };
}
module.exports = _xdropLast;

/***/ }),

/***/ 7041:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var _xReduce = /*#__PURE__*/__nccwpck_require__(4493);
var XDropLastWhile = /*#__PURE__*/function () {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropLastWhile.prototype['@@transducer/result'] = function (result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function (result, input) {
    result = _xReduce(this.xf, result, this.retained);
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function (result, input) {
    this.retained.push(input);
    return result;
  };
  return XDropLastWhile;
}();
function _xdropLastWhile(fn) {
  return function (xf) {
    return new XDropLastWhile(fn, xf);
  };
}
module.exports = _xdropLastWhile;

/***/ }),

/***/ 1860:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XDropRepeatsWith = /*#__PURE__*/function () {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }
  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };
  return XDropRepeatsWith;
}();
function _xdropRepeatsWith(pred) {
  return function (xf) {
    return new XDropRepeatsWith(pred, xf);
  };
}
module.exports = _xdropRepeatsWith;

/***/ }),

/***/ 2693:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XDropWhile = /*#__PURE__*/function () {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };
  return XDropWhile;
}();
function _xdropWhile(f) {
  return function (xf) {
    return new XDropWhile(f, xf);
  };
}
module.exports = _xdropWhile;

/***/ }),

/***/ 1488:
/***/ ((module) => {

module.exports = {
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
};

/***/ }),

/***/ 9065:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XFilter = /*#__PURE__*/function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };
  return XFilter;
}();
function _xfilter(f) {
  return function (xf) {
    return new XFilter(f, xf);
  };
}
module.exports = _xfilter;

/***/ }),

/***/ 9812:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _reduced = /*#__PURE__*/__nccwpck_require__(1797);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XFind = /*#__PURE__*/function () {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = _xfBase.init;
  XFind.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };
  return XFind;
}();
function _xfind(f) {
  return function (xf) {
    return new XFind(f, xf);
  };
}
module.exports = _xfind;

/***/ }),

/***/ 9470:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _reduced = /*#__PURE__*/__nccwpck_require__(1797);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XFindIndex = /*#__PURE__*/function () {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindIndex.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };
  return XFindIndex;
}();
function _xfindIndex(f) {
  return function (xf) {
    return new XFindIndex(f, xf);
  };
}
module.exports = _xfindIndex;

/***/ }),

/***/ 9588:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XFindLast = /*#__PURE__*/function () {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = _xfBase.init;
  XFindLast.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };
  return XFindLast;
}();
function _xfindLast(f) {
  return function (xf) {
    return new XFindLast(f, xf);
  };
}
module.exports = _xfindLast;

/***/ }),

/***/ 6238:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XFindLastIndex = /*#__PURE__*/function () {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindLastIndex.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };
  return XFindLastIndex;
}();
function _xfindLastIndex(f) {
  return function (xf) {
    return new XFindLastIndex(f, xf);
  };
}
module.exports = _xfindLastIndex;

/***/ }),

/***/ 2853:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XMap = /*#__PURE__*/function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };
  return XMap;
}();
var _xmap = function _xmap(f) {
  return function (xf) {
    return new XMap(f, xf);
  };
};
module.exports = _xmap;

/***/ }),

/***/ 9572:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var _promap = /*#__PURE__*/__nccwpck_require__(6172);
var XPromap = /*#__PURE__*/function () {
  function XPromap(f, g, xf) {
    this.xf = xf;
    this.f = f;
    this.g = g;
  }
  XPromap.prototype['@@transducer/init'] = _xfBase.init;
  XPromap.prototype['@@transducer/result'] = _xfBase.result;
  XPromap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, _promap(this.f, this.g, input));
  };
  return XPromap;
}();
function _xpromap(f, g) {
  return function (xf) {
    return new XPromap(f, g, xf);
  };
}
module.exports = _xpromap;

/***/ }),

/***/ 7720:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _clone = /*#__PURE__*/__nccwpck_require__(8090);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XReduceBy = /*#__PURE__*/function () {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
  XReduceBy.prototype['@@transducer/result'] = function (result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, _clone(this.valueAcc, false)];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };
  return XReduceBy;
}();
function _xreduceBy(valueFn, valueAcc, keyFn) {
  return function (xf) {
    return new XReduceBy(valueFn, valueAcc, keyFn, xf);
  };
}
module.exports = _xreduceBy;

/***/ }),

/***/ 3654:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var tInit = '@@transducer/init';
var tStep = '@@transducer/step';
var XScan = /*#__PURE__*/function () {
  function XScan(reducer, acc, xf) {
    this.xf = xf;
    this.f = reducer;
    this.acc = acc;
  }
  XScan.prototype[tInit] = function () {
    return this.xf[tStep](this.xf[tInit](), this.acc);
  };
  XScan.prototype['@@transducer/result'] = _xfBase.result;
  XScan.prototype[tStep] = function (result, input) {
    if (result['@@transducer/reduced']) {
      return result;
    }
    this.acc = this.f(this.acc, input);
    return this.xf[tStep](result, this.acc);
  };
  return XScan;
}();
var _xscan = /*#__PURE__*/_curry3(function _xscan(reducer, acc, xf) {
  return new XScan(reducer, acc, xf);
});
module.exports = _xscan;

/***/ }),

/***/ 6236:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _reduced = /*#__PURE__*/__nccwpck_require__(1797);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XTake = /*#__PURE__*/function () {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;
  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };
  return XTake;
}();
function _xtake(n) {
  return function (xf) {
    return new XTake(n, xf);
  };
}
module.exports = _xtake;

/***/ }),

/***/ 7887:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _reduced = /*#__PURE__*/__nccwpck_require__(1797);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XTakeWhile = /*#__PURE__*/function () {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
  };
  return XTakeWhile;
}();
function _xtakeWhile(f) {
  return function (xf) {
    return new XTakeWhile(f, xf);
  };
}
module.exports = _xtakeWhile;

/***/ }),

/***/ 8890:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XTap = /*#__PURE__*/function () {
  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap.prototype['@@transducer/init'] = _xfBase.init;
  XTap.prototype['@@transducer/result'] = _xfBase.result;
  XTap.prototype['@@transducer/step'] = function (result, input) {
    this.f(input);
    return this.xf['@@transducer/step'](result, input);
  };
  return XTap;
}();
function _xtap(f) {
  return function (xf) {
    return new XTap(f, xf);
  };
}
module.exports = _xtap;

/***/ }),

/***/ 759:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _Set = /*#__PURE__*/__nccwpck_require__(2667);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XUniqBy = /*#__PURE__*/function () {
  function XUniqBy(f, xf) {
    this.xf = xf;
    this.f = f;
    this.set = new _Set();
  }
  XUniqBy.prototype['@@transducer/init'] = _xfBase.init;
  XUniqBy.prototype['@@transducer/result'] = _xfBase.result;
  XUniqBy.prototype['@@transducer/step'] = function (result, input) {
    return this.set.add(this.f(input)) ? this.xf['@@transducer/step'](result, input) : result;
  };
  return XUniqBy;
}();
function _xuniqBy(f) {
  return function (xf) {
    return new XUniqBy(f, xf);
  };
}
module.exports = _xuniqBy;

/***/ }),

/***/ 9198:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _includesWith = /*#__PURE__*/__nccwpck_require__(1310);
var _xfBase = /*#__PURE__*/__nccwpck_require__(1488);
var XUniqWith = /*#__PURE__*/function () {
  function XUniqWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.items = [];
  }
  XUniqWith.prototype['@@transducer/init'] = _xfBase.init;
  XUniqWith.prototype['@@transducer/result'] = _xfBase.result;
  XUniqWith.prototype['@@transducer/step'] = function (result, input) {
    if (_includesWith(this.pred, input, this.items)) {
      return result;
    } else {
      this.items.push(input);
      return this.xf['@@transducer/step'](result, input);
    }
  };
  return XUniqWith;
}();
function _xuniqWith(pred) {
  return function (xf) {
    return new XUniqWith(pred, xf);
  };
}
module.exports = _xuniqWith;

/***/ }),

/***/ 2351:
/***/ ((module) => {

var XWrap = /*#__PURE__*/function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };
  return XWrap;
}();
function _xwrap(fn) {
  return new XWrap(fn);
}
module.exports = _xwrap;

/***/ }),

/***/ 9357:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _filter = /*#__PURE__*/__nccwpck_require__(1921);
var _Set = /*#__PURE__*/__nccwpck_require__(2667);
var uniq = /*#__PURE__*/__nccwpck_require__(3785);
/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
var intersection = /*#__PURE__*/_curry2(function intersection(list1, list2) {
  var toKeep = new _Set();
  for (var i = 0; i < list1.length; i += 1) {
    toKeep.add(list1[i]);
  }
  return uniq(_filter(toKeep.has.bind(toKeep), list2));
});
module.exports = intersection;

/***/ }),

/***/ 3676:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _checkForMethod = /*#__PURE__*/__nccwpck_require__(9685);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']
 */
var intersperse = /*#__PURE__*/_curry2( /*#__PURE__*/_checkForMethod('intersperse', function _intersperse(separator, list) {
  var length = list.length;
  if (length === 0) {
    return [];
  }
  var out = Array(length * 2 - 1);
  var idx = 0;
  while (idx < length) {
    var i = idx * 2;
    if (idx === length - 1) {
      out[i] = list[idx];
    } else {
      out[i] = list[idx];
      out[i + 1] = separator;
    }
    idx += 1;
  }
  return out;
}));
module.exports = intersperse;

/***/ }),

/***/ 8166:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _isTransformer = /*#__PURE__*/__nccwpck_require__(1348);
var _xReduce = /*#__PURE__*/__nccwpck_require__(4493);
var _stepCat = /*#__PURE__*/__nccwpck_require__(4941);
/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.transduce
 * @example
 *
 *      const numbers = [1, 2, 3, 4];
 *      const transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      const intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
var into = /*#__PURE__*/_curry3(function into(acc, transducer, list) {
  var xf = transducer(_isTransformer(acc) ? acc : _stepCat(acc));
  return _xReduce(xf, xf['@@transducer/init'](), list);
});
module.exports = into;

/***/ }),

/***/ 1516:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
var keys = /*#__PURE__*/__nccwpck_require__(3716);
/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      const raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
var invert = /*#__PURE__*/_curry1(function invert(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }
  return out;
});
module.exports = invert;

/***/ }),

/***/ 2651:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var keys = /*#__PURE__*/__nccwpck_require__(3716);
/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      const raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      const raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
var invertObj = /*#__PURE__*/_curry1(function invertObj(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});
module.exports = invertObj;

/***/ }),

/***/ 1804:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isFunction = /*#__PURE__*/__nccwpck_require__(4715);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
var toString = /*#__PURE__*/__nccwpck_require__(1104);
/**
 * Given an `arity` (Number) and a `name` (String) the `invoker` function
 * returns a curried function that takes `arity` arguments and a `context`
 * object. It will "invoke" the `name`'d function (a method) on the `context`
 * object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of any of the target object's methods to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *      // A function with no arguments
 *      const asJson = invoker(0, "json")
 *      // Just like calling .then((response) => response.json())
 *      fetch("http://example.com/index.json").then(asJson)
 *
 *      // A function with one argument
 *      const sliceFrom = invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *
 *      // A function with two arguments
 *      const sliceFrom6 = invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 *
 *      // NOTE: You can't simply pass some of the arguments to the initial invoker function.
 *      const firstCreditCardSection = invoker(2, "slice", 0, 4)
 *      firstCreditCardSection("4242 4242 4242 4242") // => Function<...>
 *
 *      // Since invoker returns a curried function, you may partially apply it to create the function you need.
 *      const firstCreditCardSection = invoker(2, "slice")(0, 4)
 *      firstCreditCardSection("4242 4242 4242 4242") // => "4242"
 *
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
var invoker = /*#__PURE__*/_curry2(function invoker(arity, method) {
  return curryN(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
  });
});
module.exports = invoker;

/***/ }),

/***/ 7160:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * See if an object (i.e. `val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 * If `val` was created using `Object.create`, `R.is(Object, val) === true`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
var is = /*#__PURE__*/_curry2(function is(Ctor, val) {
  return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === 'Object' && typeof val === 'object');
});
module.exports = is;

/***/ }),

/***/ 2095:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var empty = /*#__PURE__*/__nccwpck_require__(2259);
var equals = /*#__PURE__*/__nccwpck_require__(4461);
/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty, R.isNotEmpty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);           //=> false
 *      R.isEmpty([]);                  //=> true
 *      R.isEmpty('');                  //=> true
 *      R.isEmpty(null);                //=> false
 *      R.isEmpty({});                  //=> true
 *      R.isEmpty({length: 0});         //=> false
 *      R.isEmpty(Uint8Array.from('')); //=> true
 *      R.isEmpty(new Set())            //=> true
 *      R.isEmpty(new Map())            //=> true
 */
var isEmpty = /*#__PURE__*/_curry1(function isEmpty(x) {
  return x != null && equals(x, empty(x));
});
module.exports = isEmpty;

/***/ }),

/***/ 3261:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
var isNil = /*#__PURE__*/_curry1(function isNil(x) {
  return x == null;
});
module.exports = isNil;

/***/ }),

/***/ 278:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var isEmpty = /*#__PURE__*/__nccwpck_require__(2095);
/**
 * Returns `false` if the given value is its type's empty value; `true`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.29.2
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty, R.isEmpty
 * @example
 *
 *      R.isNotEmpty([1, 2, 3]);           //=> true
 *      R.isNotEmpty([]);                  //=> false
 *      R.isNotEmpty('');                  //=> false
 *      R.isNotEmpty(null);                //=> true
 *      R.isNotEmpty({});                  //=> false
 *      R.isNotEmpty({length: 0});         //=> true
 *      R.isNotEmpty(Uint8Array.from('')); //=> false
 */
var isNotEmpty = /*#__PURE__*/_curry1(function isNotEmpty(x) {
  return !isEmpty(x);
});
module.exports = isNotEmpty;

/***/ }),

/***/ 8104:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var isNil = /*#__PURE__*/__nccwpck_require__(3261);
var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Checks if the input value is not `null` and not `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.29.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is not `undefined` or not `null`, otherwise `false`.
 * @example
 *
 *      R.isNotNil(null); //=> false
 *      R.isNotNil(undefined); //=> false
 *      R.isNotNil(0); //=> true
 *      R.isNotNil([]); //=> true
 */
var isNotNil = /*#__PURE__*/_curry1(function isNotNil(x) {
  return !isNil(x);
});
module.exports = isNotNil;

/***/ }),

/***/ 3436:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var invoker = /*#__PURE__*/__nccwpck_require__(1804);
/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      const spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
var join = /*#__PURE__*/invoker(1, 'join');
module.exports = join;

/***/ }),

/***/ 1301:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var converge = /*#__PURE__*/__nccwpck_require__(1329);
/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      const getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
var juxt = /*#__PURE__*/_curry1(function juxt(fns) {
  return converge(function () {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
module.exports = juxt;

/***/ }),

/***/ 3716:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
var _isArguments = /*#__PURE__*/__nccwpck_require__(9071); // cover IE < 9 keys issues
var hasEnumBug = ! /*#__PURE__*/{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();
var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values, R.toPairs
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /*#__PURE__*/_curry1(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /*#__PURE__*/_curry1(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
module.exports = keys;

/***/ }),

/***/ 6859:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      const F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      const f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
var keysIn = /*#__PURE__*/_curry1(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});
module.exports = keysIn;

/***/ }),

/***/ 5452:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _nth = /*#__PURE__*/__nccwpck_require__(8477);
/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String | Undefined
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last([1, 2, 3]);  //=> 3
 *      R.last([1]);        //=> 1
 *      R.last([]);         //=> undefined
 *
 *      R.last('abc');  //=> 'c'
 *      R.last('a');    //=> 'a'
 *      R.last('');     //=> undefined
 */
var last = /*#__PURE__*/_curry1(function (list) {
  return _nth(-1, list);
});
module.exports = last;

/***/ }),

/***/ 5191:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var equals = /*#__PURE__*/__nccwpck_require__(4461);
/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf, R.findLastIndex
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
var lastIndexOf = /*#__PURE__*/_curry2(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});
module.exports = lastIndexOf;

/***/ }),

/***/ 8100:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _isNumber = /*#__PURE__*/__nccwpck_require__(1438);
/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
var length = /*#__PURE__*/_curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});
module.exports = length;

/***/ }),

/***/ 2268:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var map = /*#__PURE__*/__nccwpck_require__(9692);
/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      const xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lens = /*#__PURE__*/_curry2(function lens(getter, setter) {
  return function (toFunctorFn) {
    return function (target) {
      return map(function (focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});
module.exports = lens;

/***/ }),

/***/ 5990:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _nth = /*#__PURE__*/__nccwpck_require__(8477);
var lens = /*#__PURE__*/__nccwpck_require__(2268);
var update = /*#__PURE__*/__nccwpck_require__(2233);
/**
 * Returns a lens whose focus is the specified index.
 *
 * When `idx < -list.length || idx >= list.length`, `R.set` or `R.over`, the original list is returned.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over, R.nth
 * @example
 *
 *      const headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 *
 *      // out-of-range returns original list
 *      R.set(R.lensIndex(3), 'x', ['a', 'b', 'c']);         //=> ['a', 'b', 'c']
 *      R.over(R.lensIndex(-4), R.toUpper, ['a', 'b', 'c']); //=> ['a', 'b', 'c']
 */
var lensIndex = /*#__PURE__*/_curry1(function lensIndex(n) {
  return lens(function (val) {
    return _nth(n, val);
  }, update(n));
});
module.exports = lensIndex;

/***/ }),

/***/ 3279:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var assocPath = /*#__PURE__*/__nccwpck_require__(9330);
var lens = /*#__PURE__*/__nccwpck_require__(2268);
var _path = /*#__PURE__*/__nccwpck_require__(8400);
/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      const xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
var lensPath = /*#__PURE__*/_curry1(function lensPath(p) {
  return lens(function (val) {
    return _path(p, val);
  }, assocPath(p));
});
module.exports = lensPath;

/***/ }),

/***/ 7389:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var assoc = /*#__PURE__*/__nccwpck_require__(9093);
var lens = /*#__PURE__*/__nccwpck_require__(2268);
var prop = /*#__PURE__*/__nccwpck_require__(5117);
/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
var lensProp = /*#__PURE__*/_curry1(function lensProp(k) {
  return lens(prop(k), assoc(k));
});
module.exports = lensProp;

/***/ }),

/***/ 7005:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var liftN = /*#__PURE__*/__nccwpck_require__(787);
/**
 * "lifts" a function of arity >= 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      const madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([100, 200], [30, 40], [5, 6, 7]); //=> [135, 136, 137, 145, 146, 147, 235, 236, 237, 245, 246, 247]
 *
 *      const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([10, 20], [1], [2, 3], [4], [100, 200]); //=> [117, 217, 118, 218, 127, 227, 128, 228]
 */
var lift = /*#__PURE__*/_curry1(function lift(fn) {
  return liftN(fn.length, fn);
});
module.exports = lift;

/***/ }),

/***/ 787:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _arrayReduce = /*#__PURE__*/__nccwpck_require__(5208);
var ap = /*#__PURE__*/__nccwpck_require__(4057);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
var map = /*#__PURE__*/__nccwpck_require__(9692);
/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      const madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
var liftN = /*#__PURE__*/_curry2(function liftN(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function () {
    return _arrayReduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
module.exports = liftN;

/***/ }),

/***/ 1124:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
var lt = /*#__PURE__*/_curry2(function lt(a, b) {
  return a < b;
});
module.exports = lt;

/***/ }),

/***/ 897:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
var lte = /*#__PURE__*/_curry2(function lte(a, b) {
  return a <= b;
});
module.exports = lte;

/***/ }),

/***/ 9692:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arrayReduce = /*#__PURE__*/__nccwpck_require__(5208);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _map = /*#__PURE__*/__nccwpck_require__(1357);
var _xmap = /*#__PURE__*/__nccwpck_require__(2853);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
var keys = /*#__PURE__*/__nccwpck_require__(3716);
/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex, R.pluck, R.project
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _arrayReduce(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));
module.exports = map;

/***/ }),

/***/ 4609:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.scan, R.addIndex, R.mapAccumRight
 * @example
 *
 *      const digits = ['1', '2', '3', '4'];
 *      const appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
var mapAccum = /*#__PURE__*/_curry3(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = Array(len);
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});
module.exports = mapAccum;

/***/ }),

/***/ 9195:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      const digits = ['1', '2', '3', '4'];
 *      const appender = (a, b) => [b + a, b + a];
 *
 *      R.mapAccumRight(appender, 5, digits); //=> ['12345', ['12345', '2345', '345', '45']]
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   f(f(f(a, d)[0], c)[0], b)[0],
 *   [
 *     f(a, d)[1],
 *     f(f(a, d)[0], c)[1],
 *     f(f(f(a, d)[0], c)[0], b)[1]
 *   ]
 * ]
 */
var mapAccumRight = /*#__PURE__*/_curry3(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = Array(list.length);
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [tuple[0], result];
});
module.exports = mapAccumRight;

/***/ }),

/***/ 6500:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _mapKeys = /*#__PURE__*/__nccwpck_require__(2009);
/**
 * Transforms an object by converting the keys to new values.
 *
 * **Note** that if multiple keys map to the same new key, the last one processed will dominate.
 *
 * @func
 * @memberOf R
 * @since v0.31.0
 * @category Object
 * @sig (String -> String) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map, R.rebuild, R.renameKeys
 * @example
 *
 *      R.mapKeys(toUpper, {foo: 1, bar: 2, baz: 3}) //=> {FOO: 1, BAR: 2, BAZ: 3}
 */
var mapKeys = /*#__PURE__*/_curry2(_mapKeys);
module.exports = mapKeys;

/***/ }),

/***/ 5034:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arrayReduce = /*#__PURE__*/__nccwpck_require__(5208);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var keys = /*#__PURE__*/__nccwpck_require__(3716);
/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      const xyz = { x: 1, y: 2, z: 3 };
 *      const prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
var mapObjIndexed = /*#__PURE__*/_curry2(function mapObjIndexed(fn, obj) {
  return _arrayReduce(function (acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys(obj));
});
module.exports = mapObjIndexed;

/***/ }),

/***/ 8239:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
var match = /*#__PURE__*/_curry2(function match(rx, str) {
  return str.match(rx) || [];
});
module.exports = match;

/***/ }),

/***/ 7116:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isInteger = /*#__PURE__*/__nccwpck_require__(6065);
/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      const clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      const seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
var mathMod = /*#__PURE__*/_curry2(function mathMod(m, p) {
  if (!_isInteger(m)) {
    return NaN;
  }
  if (!_isInteger(p) || p < 1) {
    return NaN;
  }
  return (m % p + p) % p;
});
module.exports = mathMod;

/***/ }),

/***/ 6292:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var toString = /*#__PURE__*/__nccwpck_require__(1104);
/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
var max = /*#__PURE__*/_curry2(function max(a, b) {
  if (a === b) {
    return b;
  }
  function safeMax(x, y) {
    if (x > y !== y > x) {
      return y > x ? y : x;
    }
    return undefined;
  }
  var maxByValue = safeMax(a, b);
  if (maxByValue !== undefined) {
    return maxByValue;
  }
  var maxByType = safeMax(typeof a, typeof b);
  if (maxByType !== undefined) {
    return maxByType === typeof a ? a : b;
  }
  var stringA = toString(a);
  var maxByStringValue = safeMax(stringA, toString(b));
  if (maxByStringValue !== undefined) {
    return maxByStringValue === stringA ? a : b;
  }
  return b;
});
module.exports = max;

/***/ }),

/***/ 4741:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var max = /*#__PURE__*/__nccwpck_require__(6292);
/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      const square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
var maxBy = /*#__PURE__*/_curry3(function maxBy(f, a, b) {
  var resultB = f(b);
  return max(f(a), resultB) === resultB ? b : a;
});
module.exports = maxBy;

/***/ }),

/***/ 5997:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var sum = /*#__PURE__*/__nccwpck_require__(3957);
/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
var mean = /*#__PURE__*/_curry1(function mean(list) {
  return sum(list) / list.length;
});
module.exports = mean;

/***/ }),

/***/ 1838:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var mean = /*#__PURE__*/__nccwpck_require__(5997);
/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
var median = /*#__PURE__*/_curry1(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list, 0).sort(function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});
module.exports = median;

/***/ }),

/***/ 7334:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arity = /*#__PURE__*/__nccwpck_require__(2);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
/**
 * Takes a string-returning function `keyGen` and a function `fn` and returns
 * a new function that returns cached results for subsequent
 * calls with the same arguments.
 *
 * When the function is invoked, `keyGen` is applied to the same arguments
 * and its result becomes the cache key. If the cache contains something
 * under that key, the function simply returns it and does not invoke `fn` at all.
 *
 * Otherwise `fn` is applied to the same arguments and its return value
 * is cached under that key and returned by the function.
 *
 * Care must be taken when implementing `keyGen` to avoid key collision,
 * or if tracking references, memory leaks and mutating arguments.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} keyGen The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @example
 *      const withAge = memoizeWith(o => `${o.birth}/${o.death}`, ({birth, death}) => {
 *      //                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^
 *      //                          keyGen                        fn
 *        console.log(`computing age for ${birth}/${death}`);
 *        return ({birth, death, age: death - birth});
 *      });
 *
 *      withAge({birth: 1921, death: 1999});
 *      //=> LOG: computing age for 1921/1999
 *      //=> {birth: 1921, death: 1999, age: 78} (returned from fn)
 *
 *      withAge({birth: 1921, death: 1999});
 *      //=> {birth: 1921, death: 1999, age: 78} (returned from cache)
 */
var memoizeWith = /*#__PURE__*/_curry2(function memoizeWith(keyGen, fn) {
  var cache = {};
  return _arity(fn.length, function () {
    var key = keyGen.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});
module.exports = memoizeWith;

/***/ }),

/***/ 3307:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _objectAssign = /*#__PURE__*/__nccwpck_require__(2949);
var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Creates one new object with the own properties from a list of objects.
 * If a key exists in more than one object, the value from the last
 * object it exists in will be used.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
var mergeAll = /*#__PURE__*/_curry1(function mergeAll(list) {
  return _objectAssign.apply(null, [{}].concat(list));
});
module.exports = mergeAll;

/***/ }),

/***/ 7569:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var mergeDeepWithKey = /*#__PURE__*/__nccwpck_require__(7593);
/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */
var mergeDeepLeft = /*#__PURE__*/_curry2(function mergeDeepLeft(lObj, rObj) {
  return mergeDeepWithKey(function (k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});
module.exports = mergeDeepLeft;

/***/ }),

/***/ 2152:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var mergeDeepWithKey = /*#__PURE__*/__nccwpck_require__(7593);
/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
var mergeDeepRight = /*#__PURE__*/_curry2(function mergeDeepRight(lObj, rObj) {
  return mergeDeepWithKey(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
module.exports = mergeDeepRight;

/***/ }),

/***/ 8980:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var mergeDeepWithKey = /*#__PURE__*/__nccwpck_require__(7593);
/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
var mergeDeepWith = /*#__PURE__*/_curry3(function mergeDeepWith(fn, lObj, rObj) {
  return mergeDeepWithKey(function (k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});
module.exports = mergeDeepWith;

/***/ }),

/***/ 7593:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _isObject = /*#__PURE__*/__nccwpck_require__(5960);
var mergeWithKey = /*#__PURE__*/__nccwpck_require__(1943);
/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
var mergeDeepWithKey = /*#__PURE__*/_curry3(function mergeDeepWithKey(fn, lObj, rObj) {
  return mergeWithKey(function (k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
module.exports = mergeDeepWithKey;

/***/ }),

/***/ 8823:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _objectAssign = /*#__PURE__*/__nccwpck_require__(2949);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeRight, R.mergeDeepLeft, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const resetToDefault = R.mergeLeft({x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.mergeLeft(a, b) = {...b, ...a}
 */
var mergeLeft = /*#__PURE__*/_curry2(function mergeLeft(l, r) {
  return _objectAssign({}, r, l);
});
module.exports = mergeLeft;

/***/ }),

/***/ 6006:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _objectAssign = /*#__PURE__*/__nccwpck_require__(2949);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeLeft, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const withDefaults = R.mergeRight({x: 0, y: 0});
 *      withDefaults({y: 2}); //=> {x: 0, y: 2}
 * @symb R.mergeRight(a, b) = {...a, ...b}
 */
var mergeRight = /*#__PURE__*/_curry2(function mergeRight(l, r) {
  return _objectAssign({}, l, r);
});
module.exports = mergeRight;

/***/ }),

/***/ 3562:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var mergeWithKey = /*#__PURE__*/__nccwpck_require__(1943);
/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
var mergeWith = /*#__PURE__*/_curry3(function mergeWith(fn, l, r) {
  return mergeWithKey(function (_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});
module.exports = mergeWith;

/***/ }),

/***/ 1943:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
var mergeWithKey = /*#__PURE__*/_curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;
  l = l || {};
  r = r || {};
  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }
  for (k in r) {
    if (_has(k, r) && !_has(k, result)) {
      result[k] = r[k];
    }
  }
  return result;
});
module.exports = mergeWithKey;

/***/ }),

/***/ 3354:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var toString = /*#__PURE__*/__nccwpck_require__(1104);
/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
var min = /*#__PURE__*/_curry2(function min(a, b) {
  if (a === b) {
    return a;
  }
  function safeMin(x, y) {
    if (x < y !== y < x) {
      return y < x ? y : x;
    }
    return undefined;
  }
  var minByValue = safeMin(a, b);
  if (minByValue !== undefined) {
    return minByValue;
  }
  var minByType = safeMin(typeof a, typeof b);
  if (minByType !== undefined) {
    return minByType === typeof a ? a : b;
  }
  var stringA = toString(a);
  var minByStringValue = safeMin(stringA, toString(b));
  if (minByStringValue !== undefined) {
    return minByStringValue === stringA ? a : b;
  }
  return a;
});
module.exports = min;

/***/ }),

/***/ 1871:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var min = /*#__PURE__*/__nccwpck_require__(3354);
/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      const square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
var minBy = /*#__PURE__*/_curry3(function minBy(f, a, b) {
  var resultB = f(b);
  return min(f(a), resultB) === resultB ? b : a;
});
module.exports = minBy;

/***/ }),

/***/ 5478:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var modifyPath = /*#__PURE__*/__nccwpck_require__(8713);
/**
 * Creates a copy of the passed object by applying an `fn` function to the given `prop` property.
 *
 * The function will not be invoked, and the object will not change
 * if its corresponding property does not exist in the object.
 * All non-primitive properties are copied to the new object by reference.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig Idx -> (v -> v) -> {k: v} -> {k: v}
 * @param {String|Number} prop The property to be modified.
 * @param {Function} fn The function to apply to the property.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const person = {name: 'James', age: 20, pets: ['dog', 'cat']};
 *      R.modify('age', R.add(1), person); //=> {name: 'James', age: 21, pets: ['dog', 'cat']}
 *      R.modify('pets', R.append('turtle'), person); //=> {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}
 */
var modify = /*#__PURE__*/_curry3(function modify(prop, fn, object) {
  return modifyPath([prop], fn, object);
});
module.exports = modify;

/***/ }),

/***/ 8713:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var _isObject = /*#__PURE__*/__nccwpck_require__(5960);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
var _assoc = /*#__PURE__*/__nccwpck_require__(9860);
var _modify = /*#__PURE__*/__nccwpck_require__(7541);
/**
 * Creates a shallow clone of the passed object by applying an `fn` function
 * to the value at the given path.
 *
 * The function will not be invoked, and the object will not change
 * if its corresponding path does not exist in the object.
 * All non-primitive properties are copied to the new object by reference.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig [Idx] -> (v -> v) -> {k: v} -> {k: v}
 * @param {Array} path The path to be modified.
 * @param {Function} fn The function to apply to the path.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const person = {name: 'James', address: { zipCode: '90216' }};
 *      R.modifyPath(['address', 'zipCode'], R.reverse, person); //=> {name: 'James', address: { zipCode: '61209' }}
 *
 *      // Can handle arrays too
 *      const person = {name: 'James', addresses: [{ zipCode: '90216' }]};
 *      R.modifyPath(['addresses', 0, 'zipCode'], R.reverse, person); //=> {name: 'James', addresses: [{ zipCode: '61209' }]}
 */
var modifyPath = /*#__PURE__*/_curry3(function modifyPath(path, fn, object) {
  if (!_isObject(object) && !_isArray(object)) {
    return object;
  }
  if (path.length === 0) {
    return fn(object);
  }
  var idx = path[0];
  if (!_has(idx, object)) {
    return object;
  }
  if (path.length === 1) {
    return _modify(idx, fn, object);
  }
  var val = modifyPath(Array.prototype.slice.call(path, 1), fn, object[idx]);
  if (val === object[idx]) {
    return object;
  }
  return _assoc(idx, val, object);
});
module.exports = modifyPath;

/***/ }),

/***/ 5266:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      const isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
var modulo = /*#__PURE__*/_curry2(function modulo(a, b) {
  return a % b;
});
module.exports = modulo;

/***/ }),

/***/ 8209:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Move an item, at index `from`, to index `to`, in a list of elements.
 * A new list will be created containing the new elements order.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} from The source index
 * @param {Number} to The destination index
 * @param {Array} list The list which will serve to realise the move
 * @return {Array} The new list reordered
 * @example
 *
 *      R.move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['b', 'c', 'a', 'd', 'e', 'f']
 *      R.move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'a', 'b', 'c', 'd', 'e'] list rotation
 */
var move = /*#__PURE__*/_curry3(function (from, to, list) {
  var length = list.length;
  var result = list.slice();
  var positiveFrom = from < 0 ? length + from : from;
  var positiveTo = to < 0 ? length + to : to;
  var item = result.splice(positiveFrom, 1);
  return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
});
module.exports = move;

/***/ }),

/***/ 7188:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      const double = R.multiply(2);
 *      const triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
var multiply = /*#__PURE__*/_curry2(function multiply(a, b) {
  return a * b;
});
module.exports = multiply;

/***/ }),

/***/ 5492:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      const takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      const takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
var nAry = /*#__PURE__*/_curry2(function nAry(n, fn) {
  switch (n) {
    case 0:
      return function () {
        return fn.call(this);
      };
    case 1:
      return function (a0) {
        return fn.call(this, a0);
      };
    case 2:
      return function (a0, a1) {
        return fn.call(this, a0, a1);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.call(this, a0, a1, a2);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.call(this, a0, a1, a2, a3);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.call(this, a0, a1, a2, a3, a4);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.call(this, a0, a1, a2, a3, a4, a5);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      };
    default:
      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});
module.exports = nAry;

/***/ }),

/***/ 8806:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
var negate = /*#__PURE__*/_curry1(function negate(n) {
  return -n;
});
module.exports = negate;

/***/ }),

/***/ 810:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _complement = /*#__PURE__*/__nccwpck_require__(5435);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var all = /*#__PURE__*/__nccwpck_require__(2197);
/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *      const isOdd = n => n % 2 !== 0;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
 */
var none = /*#__PURE__*/_curry2(function none(fn, input) {
  return all(_complement(fn), input);
});
module.exports = none;

/***/ }),

/***/ 1727:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
var not = /*#__PURE__*/_curry1(function not(a) {
  return !a;
});
module.exports = not;

/***/ }),

/***/ 1932:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _nth = /*#__PURE__*/__nccwpck_require__(8477);
/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String | Undefined
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> undefined
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
var nth = /*#__PURE__*/_curry2(_nth);
module.exports = nth;

/***/ }),

/***/ 8254:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _nth = /*#__PURE__*/__nccwpck_require__(8477);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
var nthArg = /*#__PURE__*/_curry1(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN(arity, function () {
    return _nth(n, arguments);
  });
});
module.exports = nthArg;

/***/ }),

/***/ 9935:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument. Also, unlike [`compose`](#compose), `o` is
 * limited to accepting only 2 unary functions. The name o was chosen because
 * of its similarity to the mathematical composition operator ∘.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
 *      const yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */
var o = /*#__PURE__*/_curry3(function o(f, g, x) {
  return f(g(x));
});
module.exports = o;

/***/ }),

/***/ 5718:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      const matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
var objOf = /*#__PURE__*/_curry2(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});
module.exports = objOf;

/***/ }),

/***/ 5749:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Given a constructor and a value, returns a new instance of that constructor
 * containing the value.
 *
 * Dispatches to the `fantasy-land/of` method of the constructor first (if present)
 * or to the `of` method last (if present). When neither are present, wraps the
 * value in an array.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig (* -> {*}) -> a -> {a}
 * @param {Object} Ctor A constructor
 * @param {*} val any value
 * @return {*} An instance of the `Ctor` wrapping `val`.
 * @example
 *
 *      R.of(Array, 42);   //=> [42]
 *      R.of(Array, [42]); //=> [[42]]
 *      R.of(Maybe, 42);   //=> Maybe.Just(42)
 */
var of = /*#__PURE__*/_curry2(function of(Ctor, val) {
  return typeof Ctor['fantasy-land/of'] === 'function' ? Ctor['fantasy-land/of'](val) : typeof Ctor.of === 'function' ? Ctor.of(val) : [val];
});
module.exports = of;

/***/ }),

/***/ 7893:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
var omit = /*#__PURE__*/_curry2(function omit(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }
  for (var prop in obj) {
    if (!index.hasOwnProperty(prop)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
module.exports = omit;

/***/ }),

/***/ 1165:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var curryN = /*#__PURE__*/__nccwpck_require__(7336);
/**
 * Takes a binary function `f`, a unary function `g`, and two values.
 * Applies `g` to each value, then applies the result of each to `f`.
 *
 * Also known as the P combinator.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Function
 * @sig ((a, a) -> b) -> (c -> a) -> c -> c -> b
 * @param {Function} f a binary function
 * @param {Function} g a unary function
 * @param {any} a any value
 * @param {any} b any value
 * @return {any} The result of `f`
 * @example
 *
 *      const eqBy = R.on((a, b) => a === b);
 *      eqBy(R.prop('a'), {b:0, a:1}, {a:1}) //=> true;
 *
 *      const containsInsensitive = R.on(R.includes, R.toLower);
 *      containsInsensitive('o', 'FOO'); //=> true
 * @symb R.on(f, g, a, b) = f(g(a), g(b))
 */
var on = /*#__PURE__*/curryN(4, [], function on(f, g, a, b) {
  return f(g(a), g(b));
});
module.exports = on;

/***/ }),

/***/ 6053:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arity = /*#__PURE__*/__nccwpck_require__(2);
var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      const addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
var once = /*#__PURE__*/_curry1(function once(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function () {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});
module.exports = once;

/***/ }),

/***/ 809:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns the first argument if it is truthy, otherwise the second argument.
 * Acts as the boolean `or` statement if both inputs are `Boolean`s.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any}
 * @see R.either, R.and
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
var or = /*#__PURE__*/_curry2(function or(a, b) {
  return a || b;
});
module.exports = or;

/***/ }),

/***/ 2736:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _assertPromise = /*#__PURE__*/__nccwpck_require__(2564);
/**
 * Returns the result of applying the onFailure function to the value inside
 * a failed promise. This is useful for handling rejected promises
 * inside function compositions.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig (e -> b) -> (Promise e a) -> (Promise e b)
 * @sig (e -> (Promise f b)) -> (Promise e a) -> (Promise f b)
 * @param {Function} onFailure The function to apply. Can return a value or a promise of a value.
 * @param {Promise} p
 * @return {Promise} The result of calling `p.then(null, onFailure)`
 * @see R.andThen
 * @example
 *
 *      const failedFetch = id => Promise.reject('bad ID');
 *      const useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' });
 *
 *      //recoverFromFailure :: String -> Promise ({ firstName, lastName })
 *      const recoverFromFailure = R.pipe(
 *        failedFetch,
 *        R.otherwise(useDefault),
 *        R.andThen(R.pick(['firstName', 'lastName'])),
 *      );
 *      recoverFromFailure(12345).then(console.log);
 */
var otherwise = /*#__PURE__*/_curry2(function otherwise(f, p) {
  _assertPromise('otherwise', p);
  return p.then(null, f);
});
module.exports = otherwise;

/***/ }),

/***/ 2078:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771); // `Identity` is a functor that holds a single value, where `map` simply
// transforms the held value with the provided function.
var Identity = function (x) {
  return {
    value: x,
    map: function (f) {
      return Identity(f(x));
    }
  };
};

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.view, R.set, R.lens, R.lensIndex, R.lensProp, R.lensPath
 * @example
 *
 *      const headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
var over = /*#__PURE__*/_curry3(function over(lens, f, x) {
  // The value returned by the getter function is first transformed with `f`,
  // then set as the value of an `Identity`. This is then mapped over with the
  // setter function of the lens.
  return lens(function (y) {
    return Identity(f(y));
  })(x).value;
});
module.exports = over;

/***/ }),

/***/ 6428:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
var pair = /*#__PURE__*/_curry2(function pair(fst, snd) {
  return [fst, snd];
});
module.exports = pair;

/***/ }),

/***/ 2051:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _createPartialApplicator = /*#__PURE__*/__nccwpck_require__(5183);
/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight, R.curry
 * @example
 *
 *      const multiply2 = (a, b) => a * b;
 *      const double = R.partial(multiply2, [2]);
 *      double(3); //=> 6
 *
 *      const greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      const sayHello = R.partial(greet, ['Hello']);
 *      const sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
var partial = /*#__PURE__*/_createPartialApplicator(_concat);
module.exports = partial;

/***/ }),

/***/ 6904:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var mergeDeepRight = /*#__PURE__*/__nccwpck_require__(2152);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Takes a function `f` and an object, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the object
 * provided initially merged deeply (right) with the object provided as an argument to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Function
 * @sig (({ a, b, c, ..., n }) -> x) -> { a, b, c, ...} -> ({ d, e, f, ..., n } -> x)
 * @param {Function} f
 * @param {Object} props
 * @return {Function}
 * @see R.partial, R.partialRight, R.curry, R.mergeDeepRight
 * @example
 *
 *      const multiply2 = ({ a, b }) => a * b;
 *      const double = R.partialObject(multiply2, { a: 2 });
 *      double({ b: 2 }); //=> 4
 *
 *      const greet = ({ salutation, title, firstName, lastName }) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      const sayHello = R.partialObject(greet, { salutation: 'Hello' });
 *      const sayHelloToMs = R.partialObject(sayHello, { title: 'Ms.' });
 *      sayHelloToMs({ firstName: 'Jane', lastName: 'Jones' }); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialObject(f, { a, b })({ c, d }) = f({ a, b, c, d })
 */
var partialObject = /*#__PURE__*/_curry2(function partialObject(f, o) {
  return function _partialObject(props) {
    return f(mergeDeepRight(o, props));
  };
});
module.exports = partialObject;

/***/ }),

/***/ 3049:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _createPartialApplicator = /*#__PURE__*/__nccwpck_require__(5183);
var flip = /*#__PURE__*/__nccwpck_require__(483);
/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      const greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
var partialRight = /*#__PURE__*/_createPartialApplicator( /*#__PURE__*/flip(_concat));
module.exports = partialRight;

/***/ }),

/***/ 1752:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var filter = /*#__PURE__*/__nccwpck_require__(4178);
var juxt = /*#__PURE__*/__nccwpck_require__(1301);
var reject = /*#__PURE__*/__nccwpck_require__(7899);
/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.includes('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
var partition = /*#__PURE__*/juxt([filter, reject]);
module.exports = partition;

/***/ }),

/***/ 8639:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _path = /*#__PURE__*/__nccwpck_require__(8400);
/**
 * Retrieves the value at a given path. The nodes of the path can be arbitrary strings or non-negative integers.
 * For anything else, the value is unspecified. Integer paths are meant to index arrays, strings are meant for objects.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {a} -> a | Undefined
 * @sig Idx = String | NonNegativeInt
 * @param {Array} path The path to use.
 * @param {Object} obj The object or array to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop, R.nth, R.assocPath, R.dissocPath
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 *      R.path([2], {'2': 2}); //=> 2
 *      R.path([-2], {'-2': 'a'}); //=> undefined
 */
var path = /*#__PURE__*/_curry2(_path);
module.exports = path;

/***/ }),

/***/ 5541:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _path = /*#__PURE__*/__nccwpck_require__(8400);
var equals = /*#__PURE__*/__nccwpck_require__(4461);
/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int | Symbol
 * @sig a -> [Idx] -> {a} -> Boolean
 * @param {*} val The value to compare the nested property with
 * @param {Array} path The path of the nested property to use
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @see R.whereEq, R.propEq, R.pathSatisfies, R.equals
 * @example
 *
 *      const user1 = { address: { zipCode: 90210 } };
 *      const user2 = { address: { zipCode: 55555 } };
 *      const user3 = { name: 'Bob' };
 *      const users = [ user1, user2, user3 ];
 *      const isFamous = R.pathEq(90210, ['address', 'zipCode']);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
var pathEq = /*#__PURE__*/_curry3(function pathEq(val, pathAr, obj) {
  return equals(_path(pathAr, obj), val);
});
module.exports = pathEq;

/***/ }),

/***/ 1238:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _path = /*#__PURE__*/__nccwpck_require__(8400);
var defaultTo = /*#__PURE__*/__nccwpck_require__(4786);
/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
var pathOr = /*#__PURE__*/_curry3(function pathOr(d, p, obj) {
  return defaultTo(d, _path(p, obj));
});
module.exports = pathOr;

/***/ }),

/***/ 9954:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _path = /*#__PURE__*/__nccwpck_require__(8400);
/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int | Symbol
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 *      R.pathSatisfies(R.is(Object), [], {x: {y: 2}}); //=> true
 */
var pathSatisfies = /*#__PURE__*/_curry3(function pathSatisfies(pred, propPath, obj) {
  return pred(_path(propPath, obj));
});
module.exports = pathSatisfies;

/***/ }),

/***/ 8602:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isInteger = /*#__PURE__*/__nccwpck_require__(6065);
var _nth = /*#__PURE__*/__nccwpck_require__(8477);
/**
 * Retrieves the values at given paths of an object.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Object
 * @typedefn Idx = [String | Int | Symbol]
 * @sig [Idx] -> {a} -> [a | Undefined]
 * @param {Array} pathsArray The array of paths to be fetched.
 * @param {Object} obj The object to retrieve the nested properties from.
 * @return {Array} A list consisting of values at paths specified by "pathsArray".
 * @see R.path
 * @example
 *
 *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
 */
var paths = /*#__PURE__*/_curry2(function paths(pathsArray, obj) {
  return pathsArray.map(function (paths) {
    var val = obj;
    var idx = 0;
    var p;
    while (idx < paths.length) {
      if (val == null) {
        return;
      }
      p = paths[idx];
      val = _isInteger(p) ? _nth(p, val) : val[p];
      idx += 1;
    }
    return val;
  });
});
module.exports = paths;

/***/ }),

/***/ 9922:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
var pick = /*#__PURE__*/_curry2(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
module.exports = pick;

/***/ }),

/***/ 4490:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
var pickAll = /*#__PURE__*/_curry2(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});
module.exports = pickAll;

/***/ }),

/***/ 355:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      const isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
var pickBy = /*#__PURE__*/_curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});
module.exports = pickBy;

/***/ }),

/***/ 4944:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arity = /*#__PURE__*/__nccwpck_require__(2);
var _pipe = /*#__PURE__*/__nccwpck_require__(1391);
var reduce = /*#__PURE__*/__nccwpck_require__(7466);
var tail = /*#__PURE__*/__nccwpck_require__(8998);
/**
 * Performs left-to-right function composition. The first argument may have
 * any arity; the remaining arguments must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 * @symb R.pipe(f, g, h)(a)(b) = h(g(f(a)))(b)
 */
function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
}
module.exports = pipe;

/***/ }),

/***/ 1352:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arity = /*#__PURE__*/__nccwpck_require__(2);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var head = /*#__PURE__*/__nccwpck_require__(5558);
var _reduce = /*#__PURE__*/__nccwpck_require__(2261);
var tail = /*#__PURE__*/__nccwpck_require__(8998);
var identity = /*#__PURE__*/__nccwpck_require__(5410);
/**
 * Performs left-to-right function composition using transforming function. The first function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of pipeWith is not automatically curried. Transforming function is not used on the
 * first argument.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig ((* -> *), [((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)]) -> ((a, b, ..., n) -> z)
 * @param {Function} transformer The transforming function
 * @param {Array} functions The functions to pipe
 * @return {Function}
 * @see R.andThen, R.composeWith, R.pipe
 * @examples
 *
 *      const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));
 *
 *      pipeWhileNotNil([R.prop('age'), R.inc ])({age: 1}) //=> 2
 *      pipeWhileNotNil([R.prop('age'), R.inc ])({}) //=> undefined
 * @symb R.pipeWith(f)([g, h, i])(...args) = f(i, f(h, g(...args)))
 */
var pipeWith = /*#__PURE__*/_curry2(function pipeWith(xf, list) {
  if (list.length <= 0) {
    return identity;
  }
  var headList = head(list);
  var tailList = tail(list);
  return _arity(headList.length, function () {
    return _reduce(function (result, f) {
      return xf.call(this, f, result);
    }, headList.apply(this, arguments), tailList);
  });
});
module.exports = pipeWith;

/***/ }),

/***/ 7519:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var map = /*#__PURE__*/__nccwpck_require__(9692);
var prop = /*#__PURE__*/__nccwpck_require__(5117);
/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.project, R.prop, R.props
 * @example
 *
 *      var getAges = R.pluck('age');
 *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
 *
 *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
var pluck = /*#__PURE__*/_curry2(function pluck(p, list) {
  return map(prop(p), list);
});
module.exports = pluck;

/***/ }),

/***/ 7958:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
var prepend = /*#__PURE__*/_curry2(function prepend(el, list) {
  return _concat([el], list);
});
module.exports = prepend;

/***/ }),

/***/ 193:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var multiply = /*#__PURE__*/__nccwpck_require__(7188);
var reduce = /*#__PURE__*/__nccwpck_require__(7466);
/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
var product = /*#__PURE__*/reduce(multiply, 1);
module.exports = product;

/***/ }),

/***/ 2435:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _map = /*#__PURE__*/__nccwpck_require__(1357);
var identity = /*#__PURE__*/__nccwpck_require__(5410);
var pickAll = /*#__PURE__*/__nccwpck_require__(4490);
var useWith = /*#__PURE__*/__nccwpck_require__(9341);
/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @see R.pluck, R.props, R.prop
 * @example
 *
 *      const abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      const fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      const kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
var project = /*#__PURE__*/useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity
module.exports = project;

/***/ }),

/***/ 4543:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _promap = /*#__PURE__*/__nccwpck_require__(6172);
var _xpromap = /*#__PURE__*/__nccwpck_require__(9572);
/**
 * Takes two functions as pre- and post- processors respectively for a third function,
 * i.e. `promap(f, g, h)(x) === g(h(f(x)))`.
 *
 * Dispatches to the `promap` method of the third argument, if present,
 * according to the [FantasyLand Profunctor spec](https://github.com/fantasyland/fantasy-land#profunctor).
 *
 * Acts as a transducer if a transformer is given in profunctor position.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Function
 * @sig (a -> b) -> (c -> d) -> (b -> c) -> (a -> d)
 * @sig Profunctor p => (a -> b) -> (c -> d) -> p b c -> p a d
 * @param {Function} f The preprocessor function, a -> b
 * @param {Function} g The postprocessor function, c -> d
 * @param {Profunctor} profunctor The profunctor instance to be promapped, e.g. b -> c
 * @return {Profunctor} The new profunctor instance, e.g. a -> d
 * @see R.transduce
 * @example
 *
 *      const decodeChar = R.promap(s => s.charCodeAt(), String.fromCharCode, R.add(-8))
 *      const decodeString = R.promap(R.split(''), R.join(''), R.map(decodeChar))
 *      decodeString("ziuli") //=> "ramda"
 *
 * @symb R.promap(f, g, h) = x => g(h(f(x)))
 * @symb R.promap(f, g, profunctor) = profunctor.promap(f, g)
 */
var promap = /*#__PURE__*/_curry3( /*#__PURE__*/_dispatchable(['fantasy-land/promap', 'promap'], _xpromap, _promap));
module.exports = promap;

/***/ }),

/***/ 5117:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _prop = /*#__PURE__*/__nccwpck_require__(9574);
/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx -> {s: a} -> a | Undefined
 * @param {String|Number} p The property name or array index
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path, R.props, R.pluck, R.project, R.nth
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.prop(0, [100]); //=> 100
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */
var prop = /*#__PURE__*/_curry2(_prop);
module.exports = prop;

/***/ }),

/***/ 883:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var prop = /*#__PURE__*/__nccwpck_require__(5117);
var equals = /*#__PURE__*/__nccwpck_require__(4461);
/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.whereEq`](#whereEq),
 * and test nested path property with [`R.pathEq`](#pathEq).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig a -> String -> Object -> Boolean
 * @param {*} val The value to compare the property with
 * @param {String} name the specified object property's key
 * @param {*} obj The object to check the property in
 * @return {Boolean} `true` if the value equals the specified object property,
 *         `false` otherwise.
 * @see R.whereEq, R.pathEq, R.propSatisfies, R.equals
 * @example
 *
 *      const abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      const fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      const alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      const kids = [abby, fred, rusty, alois];
 *      const hasBrownHair = R.propEq('brown', 'hair');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
var propEq = /*#__PURE__*/_curry3(function propEq(val, name, obj) {
  return equals(val, prop(name, obj));
});
module.exports = propEq;

/***/ }),

/***/ 6121:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var prop = /*#__PURE__*/__nccwpck_require__(5117);
var is = /*#__PURE__*/__nccwpck_require__(7160);
/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
var propIs = /*#__PURE__*/_curry3(function propIs(type, name, obj) {
  return is(type, prop(name, obj));
});
module.exports = propIs;

/***/ }),

/***/ 9135:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var defaultTo = /*#__PURE__*/__nccwpck_require__(4786);
var prop = /*#__PURE__*/__nccwpck_require__(5117);
/**
 * Return the specified property of the given non-null object if the property
 * is present and it's value is not `null`, `undefined` or `NaN`.
 *
 * Otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const favorite = R.prop('favoriteLibrary');
 *      const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
var propOr = /*#__PURE__*/_curry3(function propOr(val, p, obj) {
  return defaultTo(val, prop(p, obj));
});
module.exports = propOr;

/***/ }),

/***/ 9380:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var prop = /*#__PURE__*/__nccwpck_require__(5117);
/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
var propSatisfies = /*#__PURE__*/_curry3(function propSatisfies(pred, name, obj) {
  return pred(prop(name, obj));
});
module.exports = propSatisfies;

/***/ }),

/***/ 5880:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var prop = /*#__PURE__*/__nccwpck_require__(5117);
/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @see R.prop, R.pluck, R.project
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
var props = /*#__PURE__*/_curry2(function props(ps, obj) {
  return ps.map(function (p) {
    return prop(p, obj);
  });
});
module.exports = props;

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isNumber = /*#__PURE__*/__nccwpck_require__(1438);
/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in the set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(1, 5.5);  //=> [1, 2, 3, 4, 5]
 *      R.range(1.5, 5.5);  //=> [1.5, 2.5, 3.5, 4.5]
 */
var range = /*#__PURE__*/_curry2(function range(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var length = from < to ? Math.ceil(to - from) : 0;
  var result = Array(length);
  var idx = 0;
  while (idx < length) {
    result[idx] = idx + from;
    idx += 1;
  }
  return result;
});
module.exports = range;

/***/ }),

/***/ 6529:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _rebuild = /*#__PURE__*/__nccwpck_require__(752);
/**
 * Transforms an object into a new one, applying to every key-value pair a
 * function creating zero, one, or many new key-value pairs, and combining
 * the results into a single object.
 *
 * @func
 * @memberOf R
 * @since v0.31.0
 * @category List
 * @sig ([String, a] -> [[String, b]]) -> {k: a} -> {k: b}
 * @param {Function} convert A function that converts a key and a value to an array of key-value arrays.
 * @param {Object} obj The structure to convert
 * @return {Array} A new object whose key-value pairs are the result of applying the `convert` function
 *         to every key-value pair in `obj`.
 * @see R.map, R.mapKeys, R.renameKeys
 * @example
 *
 *      R.rebuild((k, v) => [[k.toUpperCase(), v * v]], {a: 1, b: 2, c: 3}) //=> {A: 1, B: 4, C: 9}
 */
var rebuild = /*#__PURE__*/_curry2(_rebuild);
module.exports = rebuild;

/***/ }),

/***/ 7466:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _xReduce = /*#__PURE__*/__nccwpck_require__(4493);
var _xwrap = /*#__PURE__*/__nccwpck_require__(2351);
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Be cautious of mutating and returning the accumulator. If you reuse it across
 * invocations, it will continue to accumulate onto the same value. The general
 * recommendation is to always return a new value. If you can't do so for
 * performance reasons, then be sure to reinitialize the accumulator on each
 * invocation.
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = /*#__PURE__*/_curry3(function (xf, acc, list) {
  return _xReduce(typeof xf === 'function' ? _xwrap(xf) : xf, acc, list);
});
module.exports = reduce;

/***/ }),

/***/ 4607:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _clone = /*#__PURE__*/__nccwpck_require__(8090);
var _curryN = /*#__PURE__*/__nccwpck_require__(7336);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
var _reduced = /*#__PURE__*/__nccwpck_require__(1797);
var _xReduce = /*#__PURE__*/__nccwpck_require__(4493);
var _xreduceBy = /*#__PURE__*/__nccwpck_require__(7720);
var _xwrap = /*#__PURE__*/__nccwpck_require__(2351);
/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * The value function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to short circuit the iteration.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce, R.reduced
 * @example
 *
 *      const groupNames = (acc, {name}) => acc.concat(name)
 *      const toGrade = ({score}) =>
 *        score < 65 ? 'F' :
 *        score < 70 ? 'D' :
 *        score < 80 ? 'C' :
 *        score < 90 ? 'B' : 'A'
 *
 *      var students = [
 *        {name: 'Abby', score: 83},
 *        {name: 'Bart', score: 62},
 *        {name: 'Curt', score: 88},
 *        {name: 'Dora', score: 92},
 *      ]
 *
 *      reduceBy(groupNames, [], toGrade, students)
 *      //=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}
 */
var reduceBy = /*#__PURE__*/_curryN(4, [], /*#__PURE__*/_dispatchable([], _xreduceBy, function reduceBy(valueFn, valueAcc, keyFn, list) {
  var xf = _xwrap(function (acc, elt) {
    var key = keyFn(elt);
    var value = valueFn(_has(key, acc) ? acc[key] : _clone(valueAcc, false), elt);
    if (value && value['@@transducer/reduced']) {
      return _reduced(acc);
    }
    acc[key] = value;
    return acc;
  });
  return _xReduce(xf, {}, list);
}));
module.exports = reduceBy;

/***/ }),

/***/ 938:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*. `reduceRight` may use [`reduced`](#reduced)
 * to short circuit the iteration.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * Be cautious of mutating and returning the accumulator. If you reuse it across
 * invocations, it will continue to accumulate onto the same value. The general
 * recommendation is to always return a new value. If you can't do so for
 * performance reasons, then be sure to reinitialize the accumulator on each
 * invocation.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex, R.reduced
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *      //    -               -2
 *      //   / \              / \
 *      //  1   -            1   3
 *      //     / \              / \
 *      //    2   -     ==>    2  -1
 *      //       / \              / \
 *      //      3   -            3   4
 *      //         / \              / \
 *      //        4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
var reduceRight = /*#__PURE__*/_curry3(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx -= 1;
  }
  return acc;
});
module.exports = reduceRight;

/***/ }),

/***/ 7709:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curryN = /*#__PURE__*/__nccwpck_require__(7336);
var _xReduce = /*#__PURE__*/__nccwpck_require__(4493);
var _xwrap = /*#__PURE__*/__nccwpck_require__(2351);
var _reduced = /*#__PURE__*/__nccwpck_require__(1797);
/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator. `reduceWhile` may alternatively be short-circuited
 * via [`reduced`](#reduced).
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      const isOdd = (acc, x) => x % 2 !== 0;
 *      const xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      const ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
var reduceWhile = /*#__PURE__*/_curryN(4, [], function _reduceWhile(pred, fn, a, list) {
  var xf = _xwrap(function (acc, x) {
    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
  });
  return _xReduce(xf, a, list);
});
module.exports = reduceWhile;

/***/ }),

/***/ 7836:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _reduced = /*#__PURE__*/__nccwpck_require__(1797);
/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * This optimization is available to the below functions:
 * - [`reduce`](#reduce)
 * - [`reduceWhile`](#reduceWhile)
 * - [`reduceBy`](#reduceBy)
 * - [`reduceRight`](#reduceRight)
 * - [`transduce`](#transduce)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.reduceWhile, R.reduceBy, R.reduceRight, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */
var reduced = /*#__PURE__*/_curry1(_reduced);
module.exports = reduced;

/***/ }),

/***/ 7899:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _complement = /*#__PURE__*/__nccwpck_require__(5435);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var filter = /*#__PURE__*/__nccwpck_require__(4178);
/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 !== 0;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = /*#__PURE__*/_curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});
module.exports = reject;

/***/ }),

/***/ 6915:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @see R.without
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
var remove = /*#__PURE__*/_curry3(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});
module.exports = remove;

/***/ }),

/***/ 5542:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
var _mapKeys = /*#__PURE__*/__nccwpck_require__(2009);
/**
 * Converts an object to a new one by changing all keys that are also found as keys in a mapping
 * object to their corresponding values from that object.
 *
 * @func
 * @memberOf R
 * @since v0.31.0
 * @category Object
 * @sig Object -> Object -> Object
 * @param {Function} mapping An object pairing existing keys with new ones
 * @param {Object} obj A target object to convert
 * @return {Object} The result of replacing existing keys with their mapping counterparts when such exist
 * @see R.mapKeys, R.rebuild
 * @example
 *
 *      var mapping = { name: 'firstName', address: 'street' };
 *      var obj = { name: 'John', city: 'Paris' };
 *
 *      R.renameKeys(mapping, obj) //=>  { firstName: 'John', city: 'Paris' }
 */
var renameKeys = /*#__PURE__*/_curry2(function renameKeys(mapping, obj) {
  return _mapKeys(function (key) {
    return _has(key, mapping) ? mapping[key] : key;
  }, obj);
});
module.exports = renameKeys;

/***/ }),

/***/ 8127:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var always = /*#__PURE__*/__nccwpck_require__(7529);
var times = /*#__PURE__*/__nccwpck_require__(7940);
/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      const obj = {};
 *      const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
var repeat = /*#__PURE__*/_curry2(function repeat(value, n) {
  return times(always(value), n);
});
module.exports = repeat;

/***/ }),

/***/ 9874:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * The first two parameters correspond to the parameters of the
 * `String.prototype.replace()` function, so the second parameter can also be a
 * function.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
var replace = /*#__PURE__*/_curry3(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});
module.exports = replace;

/***/ }),

/***/ 9608:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _isString = /*#__PURE__*/__nccwpck_require__(934);
/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
var reverse = /*#__PURE__*/_curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});
module.exports = reverse;

/***/ }),

/***/ 9929:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xscan = /*#__PURE__*/__nccwpck_require__(3654);
/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce, R.mapAccum
 * @example
 *
 *      const numbers = [1, 2, 3, 4];
 *      const factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
var scan = /*#__PURE__*/_curry3( /*#__PURE__*/_dispatchable([], _xscan, function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = Array(len + 1);
  result[0] = acc;
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
}));
module.exports = scan;

/***/ }),

/***/ 4553:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var ap = /*#__PURE__*/__nccwpck_require__(4057);
var map = /*#__PURE__*/__nccwpck_require__(9692);
var prepend = /*#__PURE__*/__nccwpck_require__(7958);
var reduceRight = /*#__PURE__*/__nccwpck_require__(938);
var identity = /*#__PURE__*/__nccwpck_require__(3137);
/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `"fantasy-land/traverse"` or the `traverse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig fantasy-land/of :: TypeRep f => f ~> a -> f a
 * @sig (Applicative f, Traversable t) => TypeRep f -> t (f a) -> f (t a)
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Object|Function} TypeRepresentative with an `of` or `fantasy-land/of` method
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of(Array), Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of(Array), Nothing());       //=> [Nothing()]
 */
var sequence = /*#__PURE__*/_curry2(function sequence(F, traversable) {
  var of = typeof F['fantasy-land/of'] === 'function' ? F['fantasy-land/of'] : typeof F.of === 'function' ? F.of : F;
  var TypeRep = {
    'fantasy-land/of': of
  };
  return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](TypeRep, identity) : typeof traversable.traverse === 'function' ? traversable.traverse(TypeRep, identity) : reduceRight(function (x, acc) {
    return ap(map(prepend, x), acc);
  }, of([]), traversable);
});
module.exports = sequence;

/***/ }),

/***/ 8654:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var always = /*#__PURE__*/__nccwpck_require__(7529);
var over = /*#__PURE__*/__nccwpck_require__(2078);
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.view, R.over, R.lens, R.lensIndex, R.lensProp, R.lensPath
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
var set = /*#__PURE__*/_curry3(function set(lens, v, x) {
  return over(lens, always(v), x);
});
module.exports = set;

/***/ }),

/***/ 8772:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _checkForMethod = /*#__PURE__*/__nccwpck_require__(9685);
var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
var slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
module.exports = slice;

/***/ }),

/***/ 6084:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, a) -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @see R.ascend, R.descend
 * @example
 *
 *      const diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
var sort = /*#__PURE__*/_curry2(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});
module.exports = sort;

/***/ }),

/***/ 4565:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      const sortByFirstItem = R.sortBy(R.prop(0));
 *      const pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *
 *      const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      const clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      const people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
var sortBy = /*#__PURE__*/_curry2(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});
module.exports = sortBy;

/***/ }),

/***/ 44:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [(a, a) -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @see R.ascend, R.descend
 * @example
 *
 *      const alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      const bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      const clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      const people = [clara, bob, alice];
 *      const ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
var sortWith = /*#__PURE__*/_curry2(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function (a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});
module.exports = sortWith;

/***/ }),

/***/ 6710:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var invoker = /*#__PURE__*/__nccwpck_require__(1804);
/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `sep`.
 * @see R.join
 * @example
 *
 *      const pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
var split = /*#__PURE__*/invoker(1, 'split');
module.exports = split;

/***/ }),

/***/ 5391:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var length = /*#__PURE__*/__nccwpck_require__(8100);
var slice = /*#__PURE__*/__nccwpck_require__(8772);
/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
var splitAt = /*#__PURE__*/_curry2(function splitAt(index, array) {
  return [slice(0, index, array), slice(index, length(array), array)];
});
module.exports = splitAt;

/***/ }),

/***/ 4971:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var slice = /*#__PURE__*/__nccwpck_require__(8772);
/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
var splitEvery = /*#__PURE__*/_curry2(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice(idx, idx += n, list));
  }
  return result;
});
module.exports = splitEvery;

/***/ }),

/***/ 1946:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
var splitWhen = /*#__PURE__*/_curry2(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];
  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }
  return [prefix, Array.prototype.slice.call(list, idx)];
});
module.exports = splitWhen;

/***/ }),

/***/ 5434:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curryN = /*#__PURE__*/__nccwpck_require__(7336);
/**
 * Splits an array into slices on every occurrence of a value.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhenever(R.equals(2), [1, 2, 3, 2, 4, 5, 2, 6, 7]); //=> [[1], [3], [4, 5], [6, 7]]
 */
var splitWhenever = /*#__PURE__*/_curryN(2, [], function splitWhenever(pred, list) {
  var acc = [];
  var curr = [];
  for (var i = 0; i < list.length; i = i + 1) {
    if (!pred(list[i])) {
      curr.push(list[i]);
    }
    if ((i < list.length - 1 && pred(list[i + 1]) || i === list.length - 1) && curr.length > 0) {
      acc.push(curr);
      curr = [];
    }
  }
  return acc;
});
module.exports = splitWhenever;

/***/ }),

/***/ 1561:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var equals = /*#__PURE__*/__nccwpck_require__(4461);
var take = /*#__PURE__*/__nccwpck_require__(2755);
/**
 * Checks if a list starts with the provided sublist.
 *
 * Similarly, checks if a string starts with the provided substring.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> [a] -> Boolean
 * @sig String -> String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @see R.endsWith
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var startsWith = /*#__PURE__*/_curry2(function (prefix, list) {
  return equals(take(prefix.length, list), prefix);
});
module.exports = startsWith;

/***/ }),

/***/ 120:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      const minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      const complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
var subtract = /*#__PURE__*/_curry2(function subtract(a, b) {
  return Number(a) - Number(b);
});
module.exports = subtract;

/***/ }),

/***/ 3957:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var add = /*#__PURE__*/__nccwpck_require__(1509);
var reduce = /*#__PURE__*/__nccwpck_require__(7466);
/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
var sum = /*#__PURE__*/reduce(add, 0);
module.exports = sum;

/***/ }),

/***/ 511:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var _isString = /*#__PURE__*/__nccwpck_require__(934);
var clone = /*#__PURE__*/__nccwpck_require__(1019);
var swapObject = function (indexA, indexB, o) {
  var copy = clone(o);
  var properties = Object.getOwnPropertyNames(copy);
  if (properties.includes(indexA) && properties.includes(indexB)) {
    var tmp = copy[indexA];
    copy[indexA] = copy[indexB];
    copy[indexB] = tmp;
  }
  return copy;
};
var swapList = function (indexA, indexB, list) {
  var length = list.length;
  var result = list.slice();
  var positiveIndexA = indexA < 0 ? length + indexA : indexA;
  var positiveIndexB = indexB < 0 ? length + indexB : indexB;
  var positiveMin = Math.min(positiveIndexA, positiveIndexB);
  var positiveMax = Math.max(positiveIndexA, positiveIndexB);
  if (positiveIndexA < 0 || positiveIndexA > length) {
    return result;
  }
  if (positiveIndexB < 0 || positiveIndexB > length) {
    return result;
  }
  if (positiveIndexA === positiveIndexB) {
    return result;
  }
  result = [].concat(result.slice(0, positiveMin)).concat([result[positiveMax]]).concat(result.slice(positiveMin + 1, positiveMax)).concat([result[positiveMin]]).concat(result.slice(positiveMax + 1, length));
  return result;
};
var swapString = function (indexA, indexB, s) {
  var result = swapList(indexA, indexB, s);
  return _isArray(result) ? result.join('') : result;
};

/**
 * Swap an item, at index `indexA` with another item, at index `indexB`, in an object or a list of elements.
 * A new result will be created containing the new elements order.
 *
 * @func
 * @memberOf R
 * @since v0.29.0
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number|string|Object} indexA The first index
 * @param {Number|string|Object} indexB The second index
 * @param {Array|Object} o Either the object or list which will serve to realise the swap
 * @return {Array|Object} The new object or list reordered
 * @example
 *
 *      R.swap(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['c', 'b', 'a', 'd', 'e', 'f']
 *      R.swap(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'b', 'c', 'd', 'e', 'a']
 *      R.swap('a', 'b', {a: 1, b: 2}); //=> {a: 2, b: 1}
 *      R.swap(0, 2, 'foo'); //=> 'oof'
 */
var swap = /*#__PURE__*/_curry3(function (indexA, indexB, o) {
  if (_isArray(o)) {
    return swapList(indexA, indexB, o);
  } else if (_isString(o)) {
    return swapString(indexA, indexB, o);
  } else {
    return swapObject(indexA, indexB, o);
  }
});
module.exports = swap;

/***/ }),

/***/ 9034:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var concat = /*#__PURE__*/__nccwpck_require__(868);
var difference = /*#__PURE__*/__nccwpck_require__(3175);
/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
var symmetricDifference = /*#__PURE__*/_curry2(function symmetricDifference(list1, list2) {
  return concat(difference(list1, list2), difference(list2, list1));
});
module.exports = symmetricDifference;

/***/ }),

/***/ 3766:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var concat = /*#__PURE__*/__nccwpck_require__(868);
var differenceWith = /*#__PURE__*/__nccwpck_require__(3935);
/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      const eqA = R.eqBy(R.prop('a'));
 *      const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
var symmetricDifferenceWith = /*#__PURE__*/_curry3(function symmetricDifferenceWith(pred, list1, list2) {
  return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
});
module.exports = symmetricDifferenceWith;

/***/ }),

/***/ 8998:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _checkForMethod = /*#__PURE__*/__nccwpck_require__(9685);
var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var slice = /*#__PURE__*/__nccwpck_require__(8772);
/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
var tail = /*#__PURE__*/_curry1( /*#__PURE__*/_checkForMethod('tail', /*#__PURE__*/slice(1, Infinity)));
module.exports = tail;

/***/ }),

/***/ 2755:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xtake = /*#__PURE__*/__nccwpck_require__(6236);
var slice = /*#__PURE__*/__nccwpck_require__(8772);
/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      const personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      const takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
var take = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));
module.exports = take;

/***/ }),

/***/ 8643:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var drop = /*#__PURE__*/__nccwpck_require__(4785);
/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
var takeLast = /*#__PURE__*/_curry2(function takeLast(n, xs) {
  return drop(n >= 0 ? xs.length - n : 0, xs);
});
module.exports = takeLast;

/***/ }),

/***/ 2330:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var slice = /*#__PURE__*/__nccwpck_require__(8772);
/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      const isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 *
 *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
 */
var takeLastWhile = /*#__PURE__*/_curry2(function takeLastWhile(fn, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }
  return slice(idx + 1, Infinity, xs);
});
module.exports = takeLastWhile;

/***/ }),

/***/ 5258:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xtakeWhile = /*#__PURE__*/__nccwpck_require__(7887);
var slice = /*#__PURE__*/__nccwpck_require__(8772);
/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      const isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 *
 *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
 */
var takeWhile = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && fn(xs[idx])) {
    idx += 1;
  }
  return slice(0, idx, xs);
}));
module.exports = takeWhile;

/***/ }),

/***/ 5791:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xtap = /*#__PURE__*/__nccwpck_require__(8890);
/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      const sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = (f(a), a)
 */
var tap = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xtap, function tap(fn, x) {
  fn(x);
  return x;
}));
module.exports = tap;

/***/ }),

/***/ 648:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _cloneRegExp = /*#__PURE__*/__nccwpck_require__(2043);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isRegExp = /*#__PURE__*/__nccwpck_require__(2546);
var toString = /*#__PURE__*/__nccwpck_require__(1104);
/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
var test = /*#__PURE__*/_curry2(function test(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});
module.exports = test;

/***/ }),

/***/ 9166:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var curryN = /*#__PURE__*/__nccwpck_require__(4111);
var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Creates a thunk out of a function. A thunk delays a calculation until
 * its result is needed, providing lazy evaluation of arguments.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig ((a, b, ..., j) -> k) -> (a, b, ..., j) -> (() -> k)
 * @param {Function} fn A function to wrap in a thunk
 * @return {Function} Expects arguments for `fn` and returns a new function
 *  that, when called, applies those arguments to `fn`.
 * @see R.partial, R.partialRight
 * @example
 *
 *      R.thunkify(R.identity)(42)(); //=> 42
 *      R.thunkify((a, b) => a + b)(25, 17)(); //=> 42
 */
var thunkify = /*#__PURE__*/_curry1(function thunkify(fn) {
  return curryN(fn.length, function createThunk() {
    var fnArgs = arguments;
    return function invokeThunk() {
      return fn.apply(this, fnArgs);
    };
  });
});
module.exports = thunkify;

/***/ }),

/***/ 7940:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
var times = /*#__PURE__*/_curry2(function times(fn, n) {
  var len = Number(n);
  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  var idx = 0;
  var list = Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});
module.exports = times;

/***/ }),

/***/ 8076:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var invoker = /*#__PURE__*/__nccwpck_require__(1804);
/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
var toLower = /*#__PURE__*/invoker(0, 'toLowerCase');
module.exports = toLower;

/***/ }),

/***/ 4872:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _toPairs = /*#__PURE__*/__nccwpck_require__(561);
/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs, R.keys, R.values
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
var toPairs = /*#__PURE__*/_curry1(_toPairs);
module.exports = toPairs;

/***/ }),

/***/ 9463:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      const F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      const f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
var toPairsIn = /*#__PURE__*/_curry1(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});
module.exports = toPairsIn;

/***/ }),

/***/ 1104:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var _toString = /*#__PURE__*/__nccwpck_require__(2935);
/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
var toString = /*#__PURE__*/_curry1(function toString(val) {
  return _toString(val, []);
});
module.exports = toString;

/***/ }),

/***/ 5433:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var invoker = /*#__PURE__*/__nccwpck_require__(1804);
/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
var toUpper = /*#__PURE__*/invoker(0, 'toUpperCase');
module.exports = toUpper;

/***/ }),

/***/ 2763:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _xReduce = /*#__PURE__*/__nccwpck_require__(4493);
var _xwrap = /*#__PURE__*/__nccwpck_require__(2351);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      const numbers = [1, 2, 3, 4];
 *      const transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      const isOdd = (x) => x % 2 !== 0;
 *      const firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
var transduce = /*#__PURE__*/curryN(4, function transduce(xf, fn, acc, list) {
  return _xReduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
});
module.exports = transduce;

/***/ }),

/***/ 2541:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
var transpose = /*#__PURE__*/_curry1(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});
module.exports = transpose;

/***/ }),

/***/ 3278:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var map = /*#__PURE__*/__nccwpck_require__(9692);
var sequence = /*#__PURE__*/__nccwpck_require__(4553);
/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig fantasy-land/of :: TypeRep f => f ~> a -> f a
 * @sig (Applicative f, Traversable t) => TypeRep f -> (a -> f b) -> t a -> f (t b)
 * @sig (Applicative f, Traversable t) => (b -> f b) -> (a -> f b) -> t a -> f (t b)
 * @param {Object|Function} TypeRepresentative with an `of` or `fantasy-land/of` method
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Maybe.Nothing` if the given divisor is `0`
 *      const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing
 *
 *      // Using a Type Representative
 *      R.traverse(Maybe, safeDiv(10), Right(4)); //=> Just(Right(2.5))
 *      R.traverse(Maybe, safeDiv(10), Right(0)); //=> Nothing
 *      R.traverse(Maybe, safeDiv(10), Left("X")); //=> Just(Left("X"))
 */
var traverse = /*#__PURE__*/_curry3(function traverse(F, f, traversable) {
  var of = typeof F['fantasy-land/of'] === 'function' ? F['fantasy-land/of'] : typeof F.of === 'function' ? F.of : F;
  var TypeRep = {
    'fantasy-land/of': of
  };
  return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](TypeRep, f) : typeof traversable.traverse === 'function' ? traversable.traverse(TypeRep, f) : sequence(TypeRep, map(f, traversable));
});
module.exports = traverse;

/***/ }),

/***/ 4532:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
var zeroWidth = '\u200b';
var hasProtoTrim = typeof String.prototype.trim === 'function';
/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
var trim = !hasProtoTrim || /*#__PURE__*/ws.trim() || ! /*#__PURE__*/zeroWidth.trim() ? /*#__PURE__*/_curry1(function trim(str) {
  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
  return str.replace(beginRx, '').replace(endRx, '');
}) : /*#__PURE__*/_curry1(function trim(str) {
  return str.trim();
});
module.exports = trim;

/***/ }),

/***/ 8212:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _arity = /*#__PURE__*/__nccwpck_require__(2);
var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send them to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(() => { throw 'foo'}, R.always('caught'))('bar') // =>
 *      'caught'
 *      R.tryCatch(R.times(R.identity), R.always([]))('s') // => []
 *      R.tryCatch(() => { throw 'this is not a valid value'}, (err, value)=>({error : err,  value }))('bar') // => {'error': 'this is not a valid value', 'value': 'bar'}
 */
var tryCatch = /*#__PURE__*/_curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function () {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});
module.exports = tryCatch;

/***/ }),

/***/ 7204:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig * -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(new Map); //=> "Map"
 *      R.type(new Set); //=> "Set"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(async () => {}); //=> "AsyncFunction"
 *      R.type(undefined); //=> "Undefined"
 *      R.type(BigInt(123)); //=> "BigInt"
 */
var type = /*#__PURE__*/_curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
module.exports = type;

/***/ }),

/***/ 8987:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
var unapply = /*#__PURE__*/_curry1(function unapply(fn) {
  return function () {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
module.exports = unapply;

/***/ }),

/***/ 5793:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var nAry = /*#__PURE__*/__nccwpck_require__(5492);
/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> (a -> z)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      const takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      const takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
var unary = /*#__PURE__*/_curry1(function unary(fn) {
  return nAry(1, fn);
});
module.exports = unary;

/***/ }),

/***/ 5772:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
/**
 * Returns a function of arity `n` from a (manually) curried function.
 * Note that, the returned function is actually a ramda style
 * curryied function, which can accept one or more arguments in each
 * function calling.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b -> c ... -> z) -> ((a -> b -> c ...) -> z)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry, R.curryN
 * @example
 *
 *      const addFour = a => b => c => d => a + b + c + d;
 *
 *      const uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
var uncurryN = /*#__PURE__*/_curry2(function uncurryN(depth, fn) {
  return curryN(depth, function () {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});
module.exports = uncurryN;

/***/ }),

/***/ 6796:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      const f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
var unfold = /*#__PURE__*/_curry2(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});
module.exports = unfold;

/***/ }),

/***/ 3369:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var compose = /*#__PURE__*/__nccwpck_require__(7810);
var uniq = /*#__PURE__*/__nccwpck_require__(3785);
/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
var union = /*#__PURE__*/_curry2( /*#__PURE__*/compose(uniq, _concat));
module.exports = union;

/***/ }),

/***/ 9229:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _concat = /*#__PURE__*/__nccwpck_require__(3667);
var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var uniqWith = /*#__PURE__*/__nccwpck_require__(7085);
/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements. If an element exists
 * in both lists, the first element from the first list will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      const l1 = [{a: 1}, {a: 2}];
 *      const l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
var unionWith = /*#__PURE__*/_curry3(function unionWith(pred, list1, list2) {
  return uniqWith(pred, _concat(list1, list2));
});
module.exports = unionWith;

/***/ }),

/***/ 3785:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var identity = /*#__PURE__*/__nccwpck_require__(5410);
var uniqBy = /*#__PURE__*/__nccwpck_require__(3204);
/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
var uniq = /*#__PURE__*/uniqBy(identity);
module.exports = uniq;

/***/ }),

/***/ 3204:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _Set = /*#__PURE__*/__nccwpck_require__(2667);
var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _xuniqBy = /*#__PURE__*/__nccwpck_require__(759);
/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
var uniqBy = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xuniqBy, function (fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;
  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
}));
module.exports = uniqBy;

/***/ }),

/***/ 7085:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _dispatchable = /*#__PURE__*/__nccwpck_require__(4125);
var _includesWith = /*#__PURE__*/__nccwpck_require__(1310);
var _xuniqWith = /*#__PURE__*/__nccwpck_require__(9198);
/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      const strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
var uniqWith = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable([], _xuniqWith, function (pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!_includesWith(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
}));
module.exports = uniqWith;

/***/ }),

/***/ 8210:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> b) -> a -> a | b
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when, R.cond
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
var unless = /*#__PURE__*/_curry3(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});
module.exports = unless;

/***/ }),

/***/ 8613:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _identity = /*#__PURE__*/__nccwpck_require__(3137);
var chain = /*#__PURE__*/__nccwpck_require__(8331);
/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
var unnest = /*#__PURE__*/chain(_identity);
module.exports = unnest;

/***/ }),

/***/ 9850:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
var until = /*#__PURE__*/_curry3(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});
module.exports = until;

/***/ }),

/***/ 1505:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _isArray = /*#__PURE__*/__nccwpck_require__(8450);
var _map = /*#__PURE__*/__nccwpck_require__(1357);
var _assoc = /*#__PURE__*/__nccwpck_require__(9860);
/**
 *
 * Deconstructs an array field from the input documents to output a document for each element.
 * Each output document is the input document with the value of the array field replaced by the element.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig String -> {k: [v]} -> [{k: v}]
 * @param {String} key The key to determine which property of the object should be unwound.
 * @param {Object} object The object containing the list to unwind at the property named by the key.
 * @return {List} A list of new objects, each having the given key associated to an item from the unwound list.
 * @example
 *
 * R.unwind('hobbies', {
 *   name: 'alice',
 *   hobbies: ['Golf', 'Hacking'],
 *   colors: ['red', 'green'],
 * });
 * // [
 * //   { name: 'alice', hobbies: 'Golf', colors: ['red', 'green'] },
 * //   { name: 'alice', hobbies: 'Hacking', colors: ['red', 'green'] }
 * // ]
 */
var unwind = /*#__PURE__*/_curry2(function (key, object) {
  // If key is not in object or key is not as a list in object
  if (!(key in object && _isArray(object[key]))) {
    return [object];
  }
  // Map over object[key] which is a list and assoc each element with key
  return _map(function (item) {
    return _assoc(key, item, object);
  }, object[key]);
});
module.exports = unwind;

/***/ }),

/***/ 2233:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
var adjust = /*#__PURE__*/__nccwpck_require__(6951);
var always = /*#__PURE__*/__nccwpck_require__(7529);
/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * When `idx < -list.length || idx >= list.length`, the original list is returned.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
 *      R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
 *
 *      // out-of-range returns original list
 *      R.update(3, '_', ['a', 'b', 'c']);      //=> ['a', 'b', 'c']
 *      R.update(-4, '_', ['a', 'b', 'c']);     //=> ['a', 'b', 'c']
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
var update = /*#__PURE__*/_curry3(function update(idx, x, list) {
  return adjust(idx, always(x), list);
});
module.exports = update;

/***/ }),

/***/ 9341:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var curryN = /*#__PURE__*/__nccwpck_require__(4111);
/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
var useWith = /*#__PURE__*/_curry2(function useWith(fn, transformers) {
  return curryN(transformers.length, function () {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});
module.exports = useWith;

/***/ }),

/***/ 534:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
var keys = /*#__PURE__*/__nccwpck_require__(3716);
/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys, R.toPairs
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
var values = /*#__PURE__*/_curry1(function values(obj) {
  var props = keys(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});
module.exports = values;

/***/ }),

/***/ 1441:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry1 = /*#__PURE__*/__nccwpck_require__(5733);
/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      const F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      const f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
var valuesIn = /*#__PURE__*/_curry1(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});
module.exports = valuesIn;

/***/ }),

/***/ 4597:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780); // `Const` is a functor that effectively ignores the function given to `map`.
var Const = function (x) {
  return {
    value: x,
    'fantasy-land/map': function () {
      return this;
    }
  };
};

/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.set, R.over, R.lens, R.lensIndex, R.lensProp, R.lensPath
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
var view = /*#__PURE__*/_curry2(function view(lens, x) {
  // Using `Const` effectively ignores the setter function of the `lens`,
  // leaving the value returned by the getter function unmodified.
  return lens(Const)(x).value;
});
module.exports = view;

/***/ }),

/***/ 9168:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> b) -> a -> a | b
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless, R.cond
 * @example
 *
 *      // truncate :: String -> String
 *      const truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
var when = /*#__PURE__*/_curry3(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});
module.exports = when;

/***/ }),

/***/ 7857:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propSatisfies, R.whereEq
 * @example
 *
 *      // pred :: Object -> Boolean
 *      const pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
var where = /*#__PURE__*/_curry2(function where(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});
module.exports = where;

/***/ }),

/***/ 3943:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _has = /*#__PURE__*/__nccwpck_require__(6515);
/**
 * Takes a spec object and a test object; each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `whereAny` returns true if at least one of the predicates return true,
 * false otherwise.
 *
 * `whereAny` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propSatisfies, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      const pred = R.whereAny({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('xxx')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 8, y: 34}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 9, y: 21}); //=> false
 *      pred({a: 'bar', b: 'xxx', x: 10, y: 20}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 10, y: 20}); //=> true
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> true
 */
var whereAny = /*#__PURE__*/_curry2(function whereAny(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && spec[prop](testObj[prop])) {
      return true;
    }
  }
  return false;
});
module.exports = whereAny;

/***/ }),

/***/ 7215:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var equals = /*#__PURE__*/__nccwpck_require__(4461);
var map = /*#__PURE__*/__nccwpck_require__(9692);
var where = /*#__PURE__*/__nccwpck_require__(7857);
/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propEq, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      const pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
var whereEq = /*#__PURE__*/_curry2(function whereEq(spec, testObj) {
  return where(map(equals, spec), testObj);
});
module.exports = whereEq;

/***/ }),

/***/ 354:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
var _Set = /*#__PURE__*/__nccwpck_require__(2667);
var reject = /*#__PURE__*/__nccwpck_require__(7899);
/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference, R.remove
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
var without = /*#__PURE__*/_curry2(function without(xs, list) {
  var toRemove = new _Set();
  for (var i = 0; i < xs.length; i += 1) {
    toRemove.add(xs[i]);
  }
  return reject(toRemove.has.bind(toRemove), list);
});
module.exports = without;

/***/ }),

/***/ 5259:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Exclusive disjunction logical operation.
 * Returns `true` if one of the arguments is truthy and the other is falsy.
 * Otherwise, it returns `false`.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Logic
 * @sig a -> b -> Boolean
 * @param {Any} a
 * @param {Any} b
 * @return {Boolean} true if one of the arguments is truthy and the other is falsy
 * @see R.or, R.and
 * @example
 *
 *      R.xor(true, true); //=> false
 *      R.xor(true, false); //=> true
 *      R.xor(false, true); //=> true
 *      R.xor(false, false); //=> false
 */
var xor = /*#__PURE__*/_curry2(function xor(a, b) {
  return Boolean(!a ^ !b);
});
module.exports = xor;

/***/ }),

/***/ 3187:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
var xprod = /*#__PURE__*/_curry2(function xprod(a, b) {
  // = xprodWith(prepend); (takes about 3 times as long...)
  var i = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = Array(ilen * jlen);
  while (i < ilen) {
    j = 0;
    while (j < jlen) {
      result[i * jlen + j] = [a[i], b[j]];
      j += 1;
    }
    i += 1;
  }
  return result;
});
module.exports = xprod;

/***/ }),

/***/ 2393:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
var zip = /*#__PURE__*/_curry2(function zip(a, b) {
  var len = Math.min(a.length, b.length);
  var rv = Array(len);
  var idx = 0;
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});
module.exports = zip;

/***/ }),

/***/ 4560:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry2 = /*#__PURE__*/__nccwpck_require__(8780);
/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
var zipObj = /*#__PURE__*/_curry2(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});
module.exports = zipObj;

/***/ }),

/***/ 9261:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var _curry3 = /*#__PURE__*/__nccwpck_require__(6771);
/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      const f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
var zipWith = /*#__PURE__*/_curry3(function zipWith(fn, a, b) {
  var len = Math.min(a.length, b.length);
  var rv = Array(len);
  var idx = 0;
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});
module.exports = zipWith;

/***/ }),

/***/ 6880:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var extend = __nccwpck_require__(8905);
var regexCache = {};
var all;

var charSets = {
  default: {
    '&quot;': '"',
    '&#34;': '"',

    '&apos;': '\'',
    '&#39;': '\'',

    '&amp;': '&',
    '&#38;': '&',

    '&gt;': '>',
    '&#62;': '>',

    '&lt;': '<',
    '&#60;': '<'
  },
  extras: {
    '&cent;': '¢',
    '&#162;': '¢',

    '&copy;': '©',
    '&#169;': '©',

    '&euro;': '€',
    '&#8364;': '€',

    '&pound;': '£',
    '&#163;': '£',

    '&reg;': '®',
    '&#174;': '®',

    '&yen;': '¥',
    '&#165;': '¥'
  }
};

// don't merge char sets unless "all" is explicitly called
Object.defineProperty(charSets, 'all', {
  get: function() {
    return all || (all = extend({}, charSets.default, charSets.extras));
  }
});

/**
 * Convert HTML entities to HTML characters.
 *
 * @param  {String} `str` String with HTML entities to un-escape.
 * @return {String}
 */

function unescape(str, type) {
  if (!isString(str)) return '';
  var chars = charSets[type || 'default'];
  var regex = toRegex(type, chars);
  return str.replace(regex, function(m) {
    return chars[m];
  });
}

function toRegex(type, chars) {
  if (regexCache[type]) {
    return regexCache[type];
  }
  var keys = Object.keys(chars).join('|');
  var regex = new RegExp('(?=(' + keys + '))\\1', 'g');
  regexCache[type] = regex;
  return regex;
}

/**
 * Returns true if str is a non-empty string
 */

function isString(str) {
  return str && typeof str === 'string';
}

/**
 * Expose charSets
 */

unescape.chars = charSets.default;
unescape.extras = charSets.extras;
// don't trip the "charSets" getter unless it's explicitly called
Object.defineProperty(unescape, 'all', {
  get: function() {
    return charSets.all;
  }
});

/**
 * Expose `unescape`
 */

module.exports = unescape;


/***/ }),

/***/ 105:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.annotationsForPath = annotationsForPath;
const core = __importStar(__nccwpck_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@actions/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const fast_xml_parser_1 = __nccwpck_require__(591);
const fs_1 = __importDefault(__nccwpck_require__(9896));
const path = __importStar(__nccwpck_require__(6928));
const github_1 = __nccwpck_require__(9248);
const ramda_1 = __nccwpck_require__(9254);
const unescape_1 = __importDefault(__nccwpck_require__(6880));
const XML_PARSE_OPTIONS = {
    allowBooleanAttributes: true,
    ignoreAttributes: false,
    attributeNamePrefix: ''
};
function asArray(arg) {
    return !arg ? [] : Array.isArray(arg) ? arg : [arg];
}
function getWarningLevel(arg) {
    switch (arg) {
        case '1':
            return github_1.AnnotationLevel.failure;
        case '2':
        case '3':
            return github_1.AnnotationLevel.warning;
        default:
            return github_1.AnnotationLevel.notice;
    }
}
function annotationsForPath(resultFile) {
    var _a;
    core.info(`Creating annotations for ${resultFile}`);
    const root = process.env['GITHUB_WORKSPACE'] || '';
    const parser = new fast_xml_parser_1.XMLParser(XML_PARSE_OPTIONS);
    const result = parser.parse(fs_1.default.readFileSync(resultFile, 'UTF-8'));
    return (0, ramda_1.chain)(file => {
        return (0, ramda_1.map)(violation => {
            const annotation = {
                annotation_level: getWarningLevel(violation.priority),
                path: path.relative(root, file.name),
                start_line: Number(violation.beginline || 1),
                end_line: Number(violation.endline || violation.beginline || 1),
                title: `${violation.ruleset} ${violation.rule}`,
                message: (0, unescape_1.default)(violation['#text'])
            };
            return annotation;
        }, asArray(file.violation));
    }, asArray((_a = result.pmd) === null || _a === void 0 ? void 0 : _a.file));
}


/***/ }),

/***/ 7242:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Inputs = void 0;
var Inputs;
(function (Inputs) {
    Inputs["Name"] = "name";
    Inputs["Title"] = "title";
    Inputs["Path"] = "path";
    Inputs["Token"] = "token";
    Inputs["FailOnViolation"] = "fail-on-violation";
})(Inputs || (exports.Inputs = Inputs = {}));


/***/ }),

/***/ 9248:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnnotationLevel = void 0;
var AnnotationLevel;
(function (AnnotationLevel) {
    AnnotationLevel["notice"] = "notice";
    AnnotationLevel["warning"] = "warning";
    AnnotationLevel["failure"] = "failure";
})(AnnotationLevel || (exports.AnnotationLevel = AnnotationLevel = {}));


/***/ }),

/***/ 1730:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@actions/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const search_1 = __nccwpck_require__(8019);
const constants_1 = __nccwpck_require__(7242);
const annotations_1 = __nccwpck_require__(105);
const ramda_1 = __nccwpck_require__(9254);
const github_1 = __nccwpck_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@actions/github'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const MAX_ANNOTATIONS_PER_REQUEST = 50;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const path = core.getInput(constants_1.Inputs.Path, { required: true });
            const name = core.getInput(constants_1.Inputs.Name);
            const title = core.getInput(constants_1.Inputs.Title);
            const failOnViolations = core.getBooleanInput(constants_1.Inputs.FailOnViolation, {
                required: false
            });
            const searchResult = yield (0, search_1.findResults)(path);
            if (searchResult.filesToUpload.length === 0) {
                core.warning(`No files were found for the provided path: ${path}. No results will be uploaded.`);
            }
            else {
                core.info(`With the provided path, there will be ${searchResult.filesToUpload.length} results uploaded`);
                core.debug(`Root artifact directory is ${searchResult.rootDirectory}`);
                const annotations = (0, ramda_1.chain)(annotations_1.annotationsForPath, searchResult.filesToUpload);
                core.debug(`Grouping ${annotations.length} annotations into chunks of ${MAX_ANNOTATIONS_PER_REQUEST}`);
                const groupedAnnotations = annotations.length > MAX_ANNOTATIONS_PER_REQUEST
                    ? (0, ramda_1.splitEvery)(MAX_ANNOTATIONS_PER_REQUEST, annotations)
                    : [annotations];
                core.debug(`Created ${groupedAnnotations.length} buckets`);
                for (const annotationSet of groupedAnnotations) {
                    yield createCheck(name, title, annotationSet, annotations.length, failOnViolations);
                }
            }
        }
        catch (error) {
            core.setFailed(error instanceof Error ? error : String(error));
        }
    });
}
function createCheck(name, title, annotations, numErrors, failOnViolations) {
    return __awaiter(this, void 0, void 0, function* () {
        const octokit = (0, github_1.getOctokit)(core.getInput(constants_1.Inputs.Token));
        let sha = github_1.context.sha;
        if (github_1.context.payload.pull_request) {
            sha = github_1.context.payload.pull_request.head.sha;
        }
        const req = Object.assign(Object.assign({}, github_1.context.repo), { ref: sha });
        const res = yield octokit.rest.checks.listForRef(req);
        const existingCheckRun = res.data.check_runs.find((check) => check.name === name);
        if (!existingCheckRun) {
            const createRequest = Object.assign(Object.assign({}, github_1.context.repo), { head_sha: sha, name, status: 'completed', conclusion: numErrors === 0
                    ? 'success'
                    : failOnViolations
                        ? 'failure'
                        : 'neutral', output: {
                    title,
                    summary: `${numErrors} violation(s) found`,
                    annotations
                } });
            yield octokit.rest.checks.create(createRequest);
        }
        else {
            const check_run_id = existingCheckRun.id;
            const update_req = Object.assign(Object.assign({}, github_1.context.repo), { check_run_id, status: 'completed', conclusion: numErrors === 0
                    ? 'success'
                    : failOnViolations
                        ? 'failure'
                        : 'neutral', output: {
                    title,
                    summary: `${numErrors} violation(s) found`,
                    annotations
                } });
            yield octokit.rest.checks.update(update_req);
        }
    });
}
run();


/***/ }),

/***/ 8019:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findResults = findResults;
const glob = __importStar(__nccwpck_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@actions/glob'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const core_1 = __nccwpck_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@actions/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const fs_1 = __nccwpck_require__(9896);
const path_1 = __nccwpck_require__(6928);
function getDefaultGlobOptions() {
    return {
        followSymbolicLinks: true,
        implicitDescendants: true,
        omitBrokenSymbolicLinks: true
    };
}
function findResults(searchPath, globOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchResults = [];
        const globber = yield glob.create(searchPath, globOptions || getDefaultGlobOptions());
        const rawSearchResults = yield globber.glob();
        /*
            Directories will be rejected if attempted to be uploaded. This includes just empty
            directories so filter any directories out from the raw search results
          */
        for (const searchResult of rawSearchResults) {
            if (!(0, fs_1.lstatSync)(searchResult).isDirectory()) {
                (0, core_1.debug)(`File:${searchResult} was found using the provided searchPath`);
                searchResults.push(searchResult);
            }
            else {
                (0, core_1.debug)(`Removing ${searchResult} from rawSearchResults because it is a directory`);
            }
        }
        /*
            Only a single search pattern is being included so only 1 searchResult is expected. In the future if multiple search patterns are
            simultaneously supported this will change
          */
        const searchPaths = globber.getSearchPaths();
        if (searchPaths.length > 1) {
            throw new Error('Only 1 search path should be returned');
        }
        /*
            Special case for a single file artifact that is uploaded without a directory or wildcard pattern. The directory structure is
            not preserved and the root directory will be the single files parent directory
          */
        if (searchResults.length === 1 && searchPaths[0] === searchResults[0]) {
            return {
                filesToUpload: searchResults,
                rootDirectory: (0, path_1.dirname)(searchResults[0])
            };
        }
        return {
            filesToUpload: searchResults,
            rootDirectory: searchPaths[0]
        };
    });
}


/***/ }),

/***/ 9896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 6928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 591:
/***/ ((module) => {

(()=>{"use strict";var t={d:(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{XMLBuilder:()=>Oe,XMLParser:()=>re,XMLValidator:()=>je});const i=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",n=new RegExp("^["+i+"]["+i+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");function r(t,e){const i=[];let n=e.exec(t);for(;n;){const r=[];r.startIndex=e.lastIndex-n[0].length;const s=n.length;for(let t=0;t<s;t++)r.push(n[t]);i.push(r),n=e.exec(t)}return i}const s=function(t){return!(null==n.exec(t))},o=["hasOwnProperty","toString","valueOf","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__"],a=["__proto__","constructor","prototype"],l={allowBooleanAttributes:!1,unpairedTags:[]};function p(t,e){e=Object.assign({},l,e);const i=[];let n=!1,r=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(let s=0;s<t.length;s++)if("<"===t[s]&&"?"===t[s+1]){if(s+=2,s=h(t,s),s.err)return s}else{if("<"!==t[s]){if(c(t[s]))continue;return y("InvalidChar","char '"+t[s]+"' is not expected.",w(t,s))}{let o=s;if(s++,"!"===t[s]){s=d(t,s);continue}{let a=!1;"/"===t[s]&&(a=!0,s++);let l="";for(;s<t.length&&">"!==t[s]&&" "!==t[s]&&"\t"!==t[s]&&"\n"!==t[s]&&"\r"!==t[s];s++)l+=t[s];if(l=l.trim(),"/"===l[l.length-1]&&(l=l.substring(0,l.length-1),s--),!E(l)){let e;return e=0===l.trim().length?"Invalid space after '<'.":"Tag '"+l+"' is an invalid name.",y("InvalidTag",e,w(t,s))}const p=g(t,s);if(!1===p)return y("InvalidAttr","Attributes for '"+l+"' have open quote.",w(t,s));let u=p.value;if(s=p.index,"/"===u[u.length-1]){const i=s-u.length;u=u.substring(0,u.length-1);const r=x(u,e);if(!0!==r)return y(r.err.code,r.err.msg,w(t,i+r.err.line));n=!0}else if(a){if(!p.tagClosed)return y("InvalidTag","Closing tag '"+l+"' doesn't have proper closing.",w(t,s));if(u.trim().length>0)return y("InvalidTag","Closing tag '"+l+"' can't have attributes or invalid starting.",w(t,o));if(0===i.length)return y("InvalidTag","Closing tag '"+l+"' has not been opened.",w(t,o));{const e=i.pop();if(l!==e.tagName){let i=w(t,e.tagStartPos);return y("InvalidTag","Expected closing tag '"+e.tagName+"' (opened in line "+i.line+", col "+i.col+") instead of closing tag '"+l+"'.",w(t,o))}0==i.length&&(r=!0)}}else{const a=x(u,e);if(!0!==a)return y(a.err.code,a.err.msg,w(t,s-u.length+a.err.line));if(!0===r)return y("InvalidXml","Multiple possible root nodes found.",w(t,s));-1!==e.unpairedTags.indexOf(l)||i.push({tagName:l,tagStartPos:o}),n=!0}for(s++;s<t.length;s++)if("<"===t[s]){if("!"===t[s+1]){s++,s=d(t,s);continue}if("?"!==t[s+1])break;if(s=h(t,++s),s.err)return s}else if("&"===t[s]){const e=b(t,s);if(-1==e)return y("InvalidChar","char '&' is not expected.",w(t,s));s=e}else if(!0===r&&!c(t[s]))return y("InvalidXml","Extra text at the end",w(t,s));"<"===t[s]&&s--}}}return n?1==i.length?y("InvalidTag","Unclosed tag '"+i[0].tagName+"'.",w(t,i[0].tagStartPos)):!(i.length>0)||y("InvalidXml","Invalid '"+JSON.stringify(i.map(t=>t.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):y("InvalidXml","Start tag expected.",1)}function c(t){return" "===t||"\t"===t||"\n"===t||"\r"===t}function h(t,e){const i=e;for(;e<t.length;e++)if("?"==t[e]||" "==t[e]){const n=t.substr(i,e-i);if(e>5&&"xml"===n)return y("InvalidXml","XML declaration allowed only at the start of the document.",w(t,e));if("?"==t[e]&&">"==t[e+1]){e++;break}continue}return e}function d(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){let i=1;for(e+=8;e<t.length;e++)if("<"===t[e])i++;else if(">"===t[e]&&(i--,0===i))break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}const u='"',f="'";function g(t,e){let i="",n="",r=!1;for(;e<t.length;e++){if(t[e]===u||t[e]===f)""===n?n=t[e]:n!==t[e]||(n="");else if(">"===t[e]&&""===n){r=!0;break}i+=t[e]}return""===n&&{value:i,index:e,tagClosed:r}}const m=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function x(t,e){const i=r(t,m),n={};for(let t=0;t<i.length;t++){if(0===i[t][1].length)return y("InvalidAttr","Attribute '"+i[t][2]+"' has no space in starting.",v(i[t]));if(void 0!==i[t][3]&&void 0===i[t][4])return y("InvalidAttr","Attribute '"+i[t][2]+"' is without value.",v(i[t]));if(void 0===i[t][3]&&!e.allowBooleanAttributes)return y("InvalidAttr","boolean attribute '"+i[t][2]+"' is not allowed.",v(i[t]));const r=i[t][2];if(!N(r))return y("InvalidAttr","Attribute '"+r+"' is an invalid name.",v(i[t]));if(Object.prototype.hasOwnProperty.call(n,r))return y("InvalidAttr","Attribute '"+r+"' is repeated.",v(i[t]));n[r]=1}return!0}function b(t,e){if(";"===t[++e])return-1;if("#"===t[e])return function(t,e){let i=/\d/;for("x"===t[e]&&(e++,i=/[\da-fA-F]/);e<t.length;e++){if(";"===t[e])return e;if(!t[e].match(i))break}return-1}(t,++e);let i=0;for(;e<t.length;e++,i++)if(!(t[e].match(/\w/)&&i<20)){if(";"===t[e])break;return-1}return e}function y(t,e,i){return{err:{code:t,msg:e,line:i.line||i,col:i.col}}}function N(t){return s(t)}function E(t){return s(t)}function w(t,e){const i=t.substring(0,e).split(/\r?\n/);return{line:i.length,col:i[i.length-1].length+1}}function v(t){return t.startIndex+t[1].length}const S=t=>o.includes(t)?"__"+t:t,A={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0,unicode:!1},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,entityDecoder:null,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,i){return t},captureMetaData:!1,maxNestedTags:100,strictReservedNames:!0,jPath:!0,onDangerousProperty:S};function T(t,e){if("string"!=typeof t)return;const i=t.toLowerCase();if(o.some(t=>i===t.toLowerCase()))throw new Error(`[SECURITY] Invalid ${e}: "${t}" is a reserved JavaScript keyword that could cause prototype pollution`);if(a.some(t=>i===t.toLowerCase()))throw new Error(`[SECURITY] Invalid ${e}: "${t}" is a reserved JavaScript keyword that could cause prototype pollution`)}function _(t,e){return"boolean"==typeof t?{enabled:t,maxEntitySize:1e4,maxExpansionDepth:1e4,maxTotalExpansions:1/0,maxExpandedLength:1e5,maxEntityCount:1e3,allowedTags:null,tagFilter:null,appliesTo:"all"}:"object"==typeof t&&null!==t?{enabled:!1!==t.enabled,maxEntitySize:Math.max(1,t.maxEntitySize??1e4),maxExpansionDepth:Math.max(1,t.maxExpansionDepth??1e4),maxTotalExpansions:Math.max(1,t.maxTotalExpansions??1/0),maxExpandedLength:Math.max(1,t.maxExpandedLength??1e5),maxEntityCount:Math.max(1,t.maxEntityCount??1e3),allowedTags:t.allowedTags??null,tagFilter:t.tagFilter??null,appliesTo:t.appliesTo??"all"}:_(!0)}const C=function(t){const e=Object.assign({},A,t),i=[{value:e.attributeNamePrefix,name:"attributeNamePrefix"},{value:e.attributesGroupName,name:"attributesGroupName"},{value:e.textNodeName,name:"textNodeName"},{value:e.cdataPropName,name:"cdataPropName"},{value:e.commentPropName,name:"commentPropName"}];for(const{value:t,name:e}of i)t&&T(t,e);return null===e.onDangerousProperty&&(e.onDangerousProperty=S),e.processEntities=_(e.processEntities,e.htmlEntities),e.unpairedTagsSet=new Set(e.unpairedTags),e.stopNodes&&Array.isArray(e.stopNodes)&&(e.stopNodes=e.stopNodes.map(t=>"string"==typeof t&&t.startsWith("*.")?".."+t.substring(2):t)),e};let $;$="function"!=typeof Symbol?"@@xmlMetadata":Symbol("XML Node Metadata");class P{constructor(t){this.tagname=t,this.child=[],this[":@"]=Object.create(null)}add(t,e){"__proto__"===t&&(t="#__proto__"),this.child.push({[t]:e})}addChild(t,e){"__proto__"===t.tagname&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child}),void 0!==e&&(this.child[this.child.length-1][$]={startIndex:e})}static getMetaDataSymbol(){return $}}const O=":A-Za-z_À-ÖØ-öø-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�",j=":A-Za-z_À-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿",I=j+"\\-\\.\\d·̀-ͯ҇‿-⁀",k=(t,e,i="")=>{const n=`[${t.replace(":","")}][${e.replace(":","")}]*`;return{name:new RegExp(`^[${t}][${e}]*$`,i),ncName:new RegExp(`^${n}$`,i),qName:new RegExp(`^${n}(?::${n})?$`,i),nmToken:new RegExp(`^[${e}]+$`,i),nmTokens:new RegExp(`^[${e}]+(?:\\s+[${e}]+)*$`,i)}},L=k(O,O+"\\-\\.\\d·̀-ͯ‿-⁀"),D=k(j,I,"u"),R=":A-Za-z_",M=k(R,R+"\\-\\.\\d"),V=(t,{xmlVersion:e="1.0",asciiOnly:i=!1}={})=>((t="1.0",e=!1)=>e?M:"1.1"===t?D:L)(e,i).qName.test(t);class q{constructor(t,e){this.suppressValidationErr=!t,this.options=t,this.xmlVersion=e||1}setXmlVersion(t=1){this.xmlVersion=t}readDocType(t,e){const i=Object.create(null);let n=0;if("O"!==t[e+3]||"C"!==t[e+4]||"T"!==t[e+5]||"Y"!==t[e+6]||"P"!==t[e+7]||"E"!==t[e+8])throw new Error("Invalid Tag instead of DOCTYPE");{e+=9;let r=1,s=!1,o=!1,a="";for(;e<t.length;e++)if("<"!==t[e]||o)if(">"===t[e]){if(o?"-"===t[e-1]&&"-"===t[e-2]&&(o=!1,r--):r--,0===r)break}else"["===t[e]?s=!0:a+=t[e];else{if(s&&U(t,"!ENTITY",e)){let r,s;if(e+=7,[r,s,e]=this.readEntityExp(t,e+1,this.suppressValidationErr),-1===s.indexOf("&")){if(!1!==this.options.enabled&&null!=this.options.maxEntityCount&&n>=this.options.maxEntityCount)throw new Error(`Entity count (${n+1}) exceeds maximum allowed (${this.options.maxEntityCount})`);i[r]=s,n++}}else if(s&&U(t,"!ELEMENT",e)){e+=8;const{index:i}=this.readElementExp(t,e+1);e=i}else if(s&&U(t,"!ATTLIST",e))e+=8;else if(s&&U(t,"!NOTATION",e)){e+=9;const{index:i}=this.readNotationExp(t,e+1,this.suppressValidationErr);e=i}else{if(!U(t,"!--",e))throw new Error("Invalid DOCTYPE");o=!0}r++,a=""}if(0!==r)throw new Error("Unclosed DOCTYPE")}return{entities:i,i:e}}readEntityExp(t,e){const i=e=F(t,e);for(;e<t.length&&!/\s/.test(t[e])&&'"'!==t[e]&&"'"!==t[e];)e++;let n=t.substring(i,e);if(B(n,{xmlVersion:this.xmlVersion}),e=F(t,e),!this.suppressValidationErr){if("SYSTEM"===t.substring(e,e+6).toUpperCase())throw new Error("External entities are not supported");if("%"===t[e])throw new Error("Parameter entities are not supported")}let r="";if([e,r]=this.readIdentifierVal(t,e,"entity"),!1!==this.options.enabled&&null!=this.options.maxEntitySize&&r.length>this.options.maxEntitySize)throw new Error(`Entity "${n}" size (${r.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);return[n,r,--e]}readNotationExp(t,e){const i=e=F(t,e);for(;e<t.length&&!/\s/.test(t[e]);)e++;let n=t.substring(i,e);!this.suppressValidationErr&&B(n,{xmlVersion:this.xmlVersion}),e=F(t,e);const r=t.substring(e,e+6).toUpperCase();if(!this.suppressValidationErr&&"SYSTEM"!==r&&"PUBLIC"!==r)throw new Error(`Expected SYSTEM or PUBLIC, found "${r}"`);e+=r.length,e=F(t,e);let s=null,o=null;if("PUBLIC"===r)[e,s]=this.readIdentifierVal(t,e,"publicIdentifier"),'"'!==t[e=F(t,e)]&&"'"!==t[e]||([e,o]=this.readIdentifierVal(t,e,"systemIdentifier"));else if("SYSTEM"===r&&([e,o]=this.readIdentifierVal(t,e,"systemIdentifier"),!this.suppressValidationErr&&!o))throw new Error("Missing mandatory system identifier for SYSTEM notation");return{notationName:n,publicIdentifier:s,systemIdentifier:o,index:--e}}readIdentifierVal(t,e,i){let n="";const r=t[e];if('"'!==r&&"'"!==r)throw new Error(`Expected quoted string, found "${r}"`);const s=++e;for(;e<t.length&&t[e]!==r;)e++;if(n=t.substring(s,e),t[e]!==r)throw new Error(`Unterminated ${i} value`);return[++e,n]}readElementExp(t,e){const i=e=F(t,e);for(;e<t.length&&!/\s/.test(t[e]);)e++;let n=t.substring(i,e);if(!this.suppressValidationErr&&!V(n,{xmlVersion:this.xmlVersion}))throw new Error(`Invalid element name: "${n}"`);let r="";if("E"===t[e=F(t,e)]&&U(t,"MPTY",e))e+=4;else if("A"===t[e]&&U(t,"NY",e))e+=2;else if("("===t[e]){const i=++e;for(;e<t.length&&")"!==t[e];)e++;if(r=t.substring(i,e),")"!==t[e])throw new Error("Unterminated content model")}else if(!this.suppressValidationErr)throw new Error(`Invalid Element Expression, found "${t[e]}"`);return{elementName:n,contentModel:r.trim(),index:e}}readAttlistExp(t,e){let i=e=F(t,e);for(;e<t.length&&!/\s/.test(t[e]);)e++;let n=t.substring(i,e);for(B(n,{xmlVersion:this.xmlVersion}),i=e=F(t,e);e<t.length&&!/\s/.test(t[e]);)e++;let r=t.substring(i,e);if(!B(r,{xmlVersion:this.xmlVersion}))throw new Error(`Invalid attribute name: "${r}"`);e=F(t,e);let s="";if("NOTATION"===t.substring(e,e+8).toUpperCase()){if(s="NOTATION","("!==t[e=F(t,e+=8)])throw new Error(`Expected '(', found "${t[e]}"`);e++;let i=[];for(;e<t.length&&")"!==t[e];){const n=e;for(;e<t.length&&"|"!==t[e]&&")"!==t[e];)e++;let r=t.substring(n,e);if(r=r.trim(),!B(r,{xmlVersion:this.xmlVersion}))throw new Error(`Invalid notation name: "${r}"`);i.push(r),"|"===t[e]&&(e++,e=F(t,e))}if(")"!==t[e])throw new Error("Unterminated list of notations");e++,s+=" ("+i.join("|")+")"}else{const i=e;for(;e<t.length&&!/\s/.test(t[e]);)e++;s+=t.substring(i,e);const n=["CDATA","ID","IDREF","IDREFS","ENTITY","ENTITIES","NMTOKEN","NMTOKENS"];if(!this.suppressValidationErr&&!n.includes(s.toUpperCase()))throw new Error(`Invalid attribute type: "${s}"`)}e=F(t,e);let o="";return"#REQUIRED"===t.substring(e,e+8).toUpperCase()?(o="#REQUIRED",e+=8):"#IMPLIED"===t.substring(e,e+7).toUpperCase()?(o="#IMPLIED",e+=7):[e,o]=this.readIdentifierVal(t,e,"ATTLIST"),{elementName:n,attributeName:r,attributeType:s,defaultValue:o,index:e}}}const F=(t,e)=>{for(;e<t.length&&/\s/.test(t[e]);)e++;return e};function U(t,e,i){for(let n=0;n<e.length;n++)if(e[n]!==t[i+n+1])return!1;return!0}function B(t,e){if(V(t,{xmlVersion:e}))return t;throw new Error(`Invalid entity name ${t}`)}const G=[48,1632,1776,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,65296,120782,120792,120802,120812,120822,66720,68912,69734,69872,69942,70096,70384,70736,70864,71248,71360,71472,71904,72016,72688,72784,73040,73120,73552,92768,92864,93008,123200,123632,124144,125264,130032],X=new Map,W=1632,z=new Uint8Array(63904).fill(255);for(const t of G)for(let e=0;e<10;e++){const i=t+e;i<=65535?z[i-W]=e:X.set(i,e)}const Y=new Set([8722,65293,65123]),H=/^[-+]?0x[a-fA-F0-9]+$/,Q=/^0b[01]+$/,J=/^0o[0-7]+$/,Z=/^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,K={hex:!0,binary:!1,octal:!1,leadingZeros:!0,decimalPoint:".",eNotation:!0,infinity:"original",unicode:!1};function tt(t,e={}){if(e=Object.assign({},K,e),!t||"string"!=typeof t)return t;let i=t.trim();if(0===i.length)return t;if(void 0!==e.skipLike&&e.skipLike.test(i))return t;if("0"===i)return 0;if(e.unicode&&(i=function(t){if("string"!=typeof t)return t;const e=t.length;if(0===e)return t;let i=-1;for(let n=0;n<e;n++){const r=t.charCodeAt(n);if(!(r>=48&&r<=57||45===r))if(r<W){if(Y.has(r)){i=n;break}}else if(r>=55296&&r<=56319){if(n+1<e){const e=t.charCodeAt(n+1);if(e>=56320&&e<=57343){const t=65536+(r-55296<<10)+(e-56320);if(X.has(t)){i=n;break}}}}else if(255!==z[r-W]||Y.has(r)){i=n;break}}if(-1===i)return t;const n=[];i>0&&n.push(t.slice(0,i));for(let r=i;r<e;r++){const i=t.charCodeAt(r);if(i>=48&&i<=57||45===i){n.push(t[r]);continue}if(i<W){n.push(Y.has(i)?"-":t[r]);continue}if(i>=55296&&i<=56319){if(r+1<e){const e=t.charCodeAt(r+1);if(e>=56320&&e<=57343){const t=65536+(i-55296<<10)+(e-56320),s=X.get(t);if(void 0!==s){n.push(String.fromCharCode(s+48)),r++;continue}}}n.push(t[r]);continue}if(Y.has(i)){n.push("-");continue}const s=z[i-W];n.push(255!==s?String.fromCharCode(s+48):t[r])}return n.join("")}(i),"0"===i))return 0;if(e.hex&&H.test(i))return it(i,16);if(e.binary&&Q.test(i))return it(i,2);if(e.octal&&J.test(i))return it(i,8);if(isFinite(i)){if(i.includes("e")||i.includes("E"))return function(t,e,i){if(!i.eNotation)return t;const n=e.match(et);if(n){let r=n[1]||"";const s=-1===n[3].indexOf("e")?"E":"e",o=n[2],a=r?t[o.length+1]===s:t[o.length]===s;return o.length>1&&a?t:(1!==o.length||!n[3].startsWith(`.${s}`)&&n[3][0]!==s)&&o.length>0?i.leadingZeros&&!a?(e=(n[1]||"")+n[3],Number(e)):t:Number(e)}return t}(t,i,e);{const r=Z.exec(i);if(r){const s=r[1]||"",o=r[2];let a=(n=r[3])&&-1!==n.indexOf(".")?("."===(n=n.replace(/0+$/,""))?n="0":"."===n[0]?n="0"+n:"."===n[n.length-1]&&(n=n.substring(0,n.length-1)),n):n;const l=s?"."===t[o.length+1]:"."===t[o.length];if(!e.leadingZeros&&(o.length>1||1===o.length&&!l))return t;{const n=Number(i),r=String(n);if(0===n)return n;if(-1!==r.search(/[eE]/))return e.eNotation?n:t;if(-1!==i.indexOf("."))return"0"===r||r===a||r===`${s}${a}`?n:t;let l=o?a:i;return o?l===r||s+l===r?n:t:l===r||l===s+r?n:t}}return t}}var n;return function(t,e,i){const n=e===1/0;switch(i.infinity.toLowerCase()){case"null":return null;case"infinity":return e;case"string":return n?"Infinity":"-Infinity";default:return t}}(t,Number(i),e)}const et=/^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;function it(t,e){const i=t.trim();if(2!==e&&8!==e||(t=i.substring(2)),parseInt)return parseInt(t,e);if(Number.parseInt)return Number.parseInt(t,e);if(window&&window.parseInt)return window.parseInt(t,e);throw new Error("parseInt, Number.parseInt, window.parseInt are not supported")}class nt{constructor(t){this._matcher=t}get separator(){return this._matcher.separator}getCurrentTag(){const t=this._matcher.path;return t.length>0?t[t.length-1].tag:void 0}getCurrentNamespace(){const t=this._matcher.path;return t.length>0?t[t.length-1].namespace:void 0}getAttrValue(t){const e=this._matcher.path;if(0!==e.length)return e[e.length-1].values?.[t]}hasAttr(t){const e=this._matcher.path;if(0===e.length)return!1;const i=e[e.length-1];return void 0!==i.values&&t in i.values}getAnyParentAttr(t){return this._matcher.getAnyParentAttr(t)}hasAnyParentAttr(t){return this._matcher.hasAnyParentAttr(t)}getPosition(){const t=this._matcher.path;return 0===t.length?-1:t[t.length-1].position??0}getCounter(){const t=this._matcher.path;return 0===t.length?-1:t[t.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this._matcher.path.length}toString(t,e=!0){return this._matcher.toString(t,e)}toArray(){return this._matcher.path.map(t=>t.tag)}matches(t){return this._matcher.matches(t)}matchesAny(t){return t.matchesAny(this._matcher)}}class rt{constructor(t={}){this.separator=t.separator||".",this.path=[],this.siblingStacks=[],this._pathStringCache=null,this._view=new nt(this),this._keptAttrs=[]}push(t,e=null,i=null,n=null){this._pathStringCache=null,this.path.length>0&&(this.path[this.path.length-1].values=void 0);const r=this.path.length;let s=this.siblingStacks[r];s||(s={counts:new Map,total:0},this.siblingStacks[r]=s);const o=i?`${i}:${t}`:t,a=s.counts.get(o)||0,l=s.total;s.counts.set(o,a+1),s.total++;const p={tag:t,position:l,counter:a};null!=i&&(p.namespace=i),null!=e&&(p.values=e),this.path.push(p);const c=this.path.length,h=null!==n?n.keep:null;if(null!=h&&h.length>0&&e)for(let t=0;t<h.length;t++){const i=h[t];void 0!==e[i]&&this._keptAttrs.push({depth:c,name:i,value:e[i]})}}pop(){if(0===this.path.length)return;this._pathStringCache=null;const t=this.path.pop();this.siblingStacks.length>this.path.length+1&&(this.siblingStacks.length=this.path.length+1);const e=this.path.length+1;for(;this._keptAttrs.length>0&&this._keptAttrs[this._keptAttrs.length-1].depth>=e;)this._keptAttrs.pop();return t}updateCurrent(t){if(this.path.length>0){const e=this.path[this.path.length-1];null!=t&&(e.values=t)}}getCurrentTag(){return this.path.length>0?this.path[this.path.length-1].tag:void 0}getCurrentNamespace(){return this.path.length>0?this.path[this.path.length-1].namespace:void 0}getAttrValue(t){if(0!==this.path.length)return this.path[this.path.length-1].values?.[t]}hasAttr(t){if(0===this.path.length)return!1;const e=this.path[this.path.length-1];return void 0!==e.values&&t in e.values}getAnyParentAttr(t){const e=this._keptAttrs;for(let i=e.length-1;i>=0;i--)if(e[i].name===t)return e[i].value}hasAnyParentAttr(t){const e=this._keptAttrs;for(let i=e.length-1;i>=0;i--)if(e[i].name===t)return!0;return!1}getPosition(){return 0===this.path.length?-1:this.path[this.path.length-1].position??0}getCounter(){return 0===this.path.length?-1:this.path[this.path.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this.path.length}toString(t,e=!0){const i=t||this.separator;if(i===this.separator&&!0===e){if(null!==this._pathStringCache)return this._pathStringCache;const t=this.path.map(t=>t.namespace?`${t.namespace}:${t.tag}`:t.tag).join(i);return this._pathStringCache=t,t}return this.path.map(t=>e&&t.namespace?`${t.namespace}:${t.tag}`:t.tag).join(i)}toArray(){return this.path.map(t=>t.tag)}reset(){this._pathStringCache=null,this.path=[],this.siblingStacks=[],this._keptAttrs=[]}matches(t){const e=t.segments;return 0!==e.length&&(t.hasDeepWildcard()?this._matchWithDeepWildcard(e):this._matchSimple(e))}_matchSimple(t){if(this.path.length!==t.length)return!1;for(let e=0;e<t.length;e++)if(!this._matchSegment(t[e],this.path[e],e===this.path.length-1))return!1;return!0}_matchWithDeepWildcard(t){let e=this.path.length-1,i=t.length-1;for(;i>=0&&e>=0;){const n=t[i];if("deep-wildcard"===n.type){if(i--,i<0)return!0;const n=t[i];let r=!1;for(let t=e;t>=0;t--)if(this._matchSegment(n,this.path[t],t===this.path.length-1)){e=t-1,i--,r=!0;break}if(!r)return!1}else{if(!this._matchSegment(n,this.path[e],e===this.path.length-1))return!1;e--,i--}}return i<0}_matchSegment(t,e,i){if("*"!==t.tag&&t.tag!==e.tag)return!1;if(void 0!==t.namespace&&"*"!==t.namespace&&t.namespace!==e.namespace)return!1;if(void 0!==t.attrName){if(!i)return!1;if(!e.values||!(t.attrName in e.values))return!1;if(void 0!==t.attrValue&&String(e.values[t.attrName])!==String(t.attrValue))return!1}if(void 0!==t.position){if(!i)return!1;const n=e.counter??0;if("first"===t.position&&0!==n)return!1;if("odd"===t.position&&n%2!=1)return!1;if("even"===t.position&&n%2!=0)return!1;if("nth"===t.position&&n!==t.positionValue)return!1}return!0}matchesAny(t){return t.matchesAny(this)}snapshot(){return{path:this.path.map(t=>({...t})),siblingStacks:this.siblingStacks.map(t=>t?{counts:new Map(t.counts),total:t.total}:t),keptAttrs:this._keptAttrs.map(t=>({...t}))}}restore(t){this._pathStringCache=null,this.path=t.path.map(t=>({...t})),this.siblingStacks=t.siblingStacks.map(t=>t?{counts:new Map(t.counts),total:t.total}:t),this._keptAttrs=(t.keptAttrs||[]).map(t=>({...t}))}readOnly(){return this._view}}class st{constructor(t,e={},i){this.pattern=t,this.separator=e.separator||".",this.segments=this._parse(t),this.data=i,this._hasDeepWildcard=this.segments.some(t=>"deep-wildcard"===t.type),this._hasAttributeCondition=this.segments.some(t=>void 0!==t.attrName),this._hasPositionSelector=this.segments.some(t=>void 0!==t.position)}_parse(t){const e=[];let i=0,n="";for(;i<t.length;)t[i]===this.separator?i+1<t.length&&t[i+1]===this.separator?(n.trim()&&(e.push(this._parseSegment(n.trim())),n=""),e.push({type:"deep-wildcard"}),i+=2):(n.trim()&&e.push(this._parseSegment(n.trim())),n="",i++):(n+=t[i],i++);return n.trim()&&e.push(this._parseSegment(n.trim())),e}_parseSegment(t){const e={type:"tag"};let i=null,n=t;const r=t.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);if(r&&(n=r[1]+r[3],r[2])){const t=r[2].slice(1,-1);t&&(i=t)}let s,o,a=n;if(n.includes("::")){const e=n.indexOf("::");if(s=n.substring(0,e).trim(),a=n.substring(e+2).trim(),!s)throw new Error(`Invalid namespace in pattern: ${t}`)}let l=null;if(a.includes(":")){const t=a.lastIndexOf(":"),e=a.substring(0,t).trim(),i=a.substring(t+1).trim();["first","last","odd","even"].includes(i)||/^nth\(\d+\)$/.test(i)?(o=e,l=i):o=a}else o=a;if(!o)throw new Error(`Invalid segment pattern: ${t}`);if(e.tag=o,s&&(e.namespace=s),i)if(i.includes("=")){const t=i.indexOf("=");e.attrName=i.substring(0,t).trim(),e.attrValue=i.substring(t+1).trim()}else e.attrName=i.trim();if(l){const t=l.match(/^nth\((\d+)\)$/);t?(e.position="nth",e.positionValue=parseInt(t[1],10)):e.position=l}return e}get length(){return this.segments.length}hasDeepWildcard(){return this._hasDeepWildcard}hasAttributeCondition(){return this._hasAttributeCondition}hasPositionSelector(){return this._hasPositionSelector}toString(){return this.pattern}}class ot{constructor(){this._byDepthAndTag=new Map,this._wildcardByDepth=new Map,this._deepWildcards=[],this._deepByTerminalTag=new Map,this._patterns=new Set,this._sealed=!1}add(t){if(this._sealed)throw new TypeError("ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.");if(this._patterns.has(t.pattern))return this;if(this._patterns.add(t.pattern),t.hasDeepWildcard()){const e=t.segments[t.segments.length-1];if(e&&"deep-wildcard"!==e.type&&"*"!==e.tag){const i=e.tag;this._deepByTerminalTag.has(i)||this._deepByTerminalTag.set(i,[]),this._deepByTerminalTag.get(i).push(t)}else this._deepWildcards.push(t);return this}const e=t.length,i=t.segments[t.segments.length-1],n=i?.tag;if(n&&"*"!==n){const i=`${e}:${n}`;this._byDepthAndTag.has(i)||this._byDepthAndTag.set(i,[]),this._byDepthAndTag.get(i).push(t)}else this._wildcardByDepth.has(e)||this._wildcardByDepth.set(e,[]),this._wildcardByDepth.get(e).push(t);return this}addAll(t){for(const e of t)this.add(e);return this}has(t){return this._patterns.has(t.pattern)}get size(){return this._patterns.size}seal(){return this._sealed=!0,this}get isSealed(){return this._sealed}matchesAny(t){return null!==this.findMatch(t)}findMatch(t){const e=t.getDepth(),i=t.getCurrentTag(),n=`${e}:${i}`,r=this._byDepthAndTag.get(n);if(r)for(let e=0;e<r.length;e++)if(t.matches(r[e]))return r[e];const s=this._wildcardByDepth.get(e);if(s)for(let e=0;e<s.length;e++)if(t.matches(s[e]))return s[e];const o=this._deepByTerminalTag.get(i);if(o)for(let e=0;e<o.length;e++)if(t.matches(o[e]))return o[e];for(let e=0;e<this._deepWildcards.length;e++)if(t.matches(this._deepWildcards[e]))return this._deepWildcards[e];return null}}const at={cent:"¢",pound:"£",curren:"¤",yen:"¥",euro:"€",dollar:"$",fnof:"ƒ",inr:"₹",af:"؋",birr:"ብር",peso:"₱",rub:"₽",won:"₩",yuan:"¥",cedil:"¸"},lt={amp:"&",apos:"'",gt:">",lt:"<",quot:'"'},pt={nbsp:" ",copy:"©",reg:"®",trade:"™",mdash:"—",ndash:"–",hellip:"…",laquo:"«",raquo:"»",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",para:"¶",sect:"§",deg:"°",frac12:"½",frac14:"¼",frac34:"¾"},ct=Object.freeze({ALLOW:"allow",BLOCK:"block",THROW:"throw"}),ht=new Set("!?\\\\/[]$%{}^&*()<>|+");function dt(t){if("#"===t[0])throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${t}"`);for(const e of t)if(ht.has(e))throw new Error(`[EntityReplacer] Invalid character '${e}' in entity name: "${t}"`);return t}function ut(...t){const e=Object.create(null);for(const i of t)if(i)for(const t of Object.keys(i)){const n=i[t];if("string"==typeof n)e[t]=n;else if(n&&"object"==typeof n&&void 0!==n.val){const i=n.val;"string"==typeof i&&(e[t]=i)}}return e}const ft="external",gt="base",mt="all",xt=Object.freeze({allow:0,leave:1,remove:2,throw:3}),bt=new Set([9,10,13]);class yt{constructor(t={}){var e;this._limit=t.limit||{},this._maxTotalExpansions=this._limit.maxTotalExpansions||0,this._maxExpandedLength=this._limit.maxExpandedLength||0,this._postCheck="function"==typeof t.postCheck?t.postCheck:t=>t,this._limitTiers=(e=this._limit.applyLimitsTo??ft)&&e!==ft?e===mt?new Set([mt]):e===gt?new Set([gt]):Array.isArray(e)?new Set(e):new Set([ft]):new Set([ft]),this._numericAllowed=t.numericAllowed??!0,this._baseMap=ut(lt,t.namedEntities||null),this._externalMap=Object.create(null),this._inputMap=Object.create(null),this._totalExpansions=0,this._expandedLength=0,this._removeSet=new Set(t.remove&&Array.isArray(t.remove)?t.remove:[]),this._leaveSet=new Set(t.leave&&Array.isArray(t.leave)?t.leave:[]);const i=function(t){if(!t)return{xmlVersion:1,onLevel:xt.allow,nullLevel:xt.remove};const e=1.1===t.xmlVersion?1.1:1,i=xt[t.onNCR]??xt.allow,n=xt[t.nullNCR]??xt.remove;return{xmlVersion:e,onLevel:i,nullLevel:Math.max(n,xt.remove)}}(t.ncr);this._ncrXmlVersion=i.xmlVersion,this._ncrOnLevel=i.onLevel,this._ncrNullLevel=i.nullLevel,this._onExternalEntity="function"==typeof t.onExternalEntity?t.onExternalEntity:null,this._onInputEntity="function"==typeof t.onInputEntity?t.onInputEntity:null}_applyRegistrationHook(t,e,i,n){if(!t)return!0;const r=t(e,i);if(r===ct.BLOCK)return!1;if(r===ct.THROW)throw new Error(`[EntityDecoder] Registration of ${n} entity "&${e};" was rejected by hook`);return!0}setExternalEntities(t){if(t)for(const e of Object.keys(t))dt(e);if(!this._onExternalEntity)return void(this._externalMap=ut(t));const e=ut(t),i=Object.create(null);for(const[t,n]of Object.entries(e))this._applyRegistrationHook(this._onExternalEntity,t,n,"external")&&(i[t]=n);this._externalMap=i}addExternalEntity(t,e){dt(t),"string"==typeof e&&-1===e.indexOf("&")&&this._applyRegistrationHook(this._onExternalEntity,t,e,"external")&&(this._externalMap[t]=e)}addInputEntities(t){if(this._totalExpansions=0,this._expandedLength=0,!this._onInputEntity)return void(this._inputMap=ut(t));const e=ut(t),i=Object.create(null);for(const[t,n]of Object.entries(e))this._applyRegistrationHook(this._onInputEntity,t,n,"input")&&(i[t]=n);this._inputMap=i}reset(){return this._inputMap=Object.create(null),this._totalExpansions=0,this._expandedLength=0,this}setXmlVersion(t){this._ncrXmlVersion=1.1===t?1.1:1}decode(t){if("string"!=typeof t||0===t.length)return t;if(-1===t.indexOf("&"))return t;const e=t,i=[],n=t.length;let r=0,s=0;const o=this._maxTotalExpansions>0,a=this._maxExpandedLength>0,l=o||a;for(;s<n;){if(38!==t.charCodeAt(s)){s++;continue}let e=s+1;for(;e<n&&59!==t.charCodeAt(e)&&e-s<=32;)e++;if(e>=n||59!==t.charCodeAt(e)){s++;continue}const p=t.slice(s+1,e);if(0===p.length){s++;continue}let c,h;if(this._removeSet.has(p))c="",void 0===h&&(h=ft);else{if(this._leaveSet.has(p)){s++;continue}if(35===p.charCodeAt(0)){const t=this._resolveNCR(p);if(void 0===t){s++;continue}c=t,h=gt}else{const t=this._resolveName(p);c=t?.value,h=t?.tier}}if(void 0!==c){if(s>r&&i.push(t.slice(r,s)),i.push(c),r=e+1,s=r,l&&this._tierCounts(h)){if(o&&(this._totalExpansions++,this._totalExpansions>this._maxTotalExpansions))throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);if(a){const t=c.length-(p.length+2);if(t>0&&(this._expandedLength+=t,this._expandedLength>this._maxExpandedLength))throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`)}}}else s++}r<n&&i.push(t.slice(r));const p=0===i.length?t:i.join("");return this._postCheck(p,e)}_tierCounts(t){return!!this._limitTiers.has(mt)||this._limitTiers.has(t)}_resolveName(t){return t in this._inputMap?{value:this._inputMap[t],tier:ft}:t in this._externalMap?{value:this._externalMap[t],tier:ft}:t in this._baseMap?{value:this._baseMap[t],tier:gt}:void 0}_classifyNCR(t){return 0===t?this._ncrNullLevel:t>=55296&&t<=57343||1===this._ncrXmlVersion&&t>=1&&t<=31&&!bt.has(t)?xt.remove:-1}_applyNCRAction(t,e,i){switch(t){case xt.allow:return String.fromCodePoint(i);case xt.remove:return"";case xt.leave:return;case xt.throw:throw new Error(`[EntityDecoder] Prohibited numeric character reference &${e}; (U+${i.toString(16).toUpperCase().padStart(4,"0")})`);default:return String.fromCodePoint(i)}}_resolveNCR(t){const e=t.charCodeAt(1);let i;if(i=120===e||88===e?parseInt(t.slice(2),16):parseInt(t.slice(1),10),Number.isNaN(i)||i<0||i>1114111)return;const n=this._classifyNCR(i);if(!this._numericAllowed&&n<xt.remove)return;const r=-1===n?this._ncrOnLevel:Math.max(this._ncrOnLevel,n);return this._applyNCRAction(r,t,i)}}const Nt=[{id:"sql-block-comment-open",description:"SQL block comment open: /* ... */ — unusual in legitimate user text",pattern:/\/\*/},{id:"sql-union-select",description:"UNION SELECT — most common SQL injection aggregation attack",pattern:/\bUNION\s{1,20}(?:ALL\s{1,20})?SELECT\b/i},{id:"sql-drop-table",description:"DROP TABLE — destructive DDL injection",pattern:/\bDROP\s{1,20}TABLE\b/i},{id:"sql-drop-database",description:"DROP DATABASE — destructive DDL injection",pattern:/\bDROP\s{1,20}DATABASE\b/i},{id:"sql-insert-into",description:"INSERT INTO — data injection",pattern:/\bINSERT\s{1,20}INTO\b/i},{id:"sql-delete-from",description:"DELETE FROM — data deletion injection",pattern:/\bDELETE\s{1,20}FROM\b/i},{id:"sql-update-set",description:"UPDATE ... SET — data modification injection",pattern:/\bUPDATE\b[\s\S]{1,60}\bSET\b/i},{id:"sql-exec-xp",description:"EXEC xp_ — MSSQL extended stored procedure execution",pattern:/\bEXEC(?:UTE)?\s{1,20}xp_/i},{id:"sql-tautology-string",description:'Classic string tautology: \' OR \'1\'=\'1 or " OR "1"="1"',pattern:/'\s{0,10}OR\s{0,10}'[^']{0,20}'\s*=\s*'[^']{0,20}/i},{id:"sql-tautology-numeric",description:"Numeric tautology: OR 1=1",pattern:/\bOR\s{1,10}1\s*=\s*1\b/i},{id:"sql-always-true-zero",description:"Numeric tautology: OR 0=0",pattern:/\bOR\s{1,10}0\s*=\s*0\b/i},{id:"sql-sleep-benchmark",description:"Time-based blind injection: SLEEP() or BENCHMARK()",pattern:/\b(?:SLEEP|BENCHMARK)\s*\(/i},{id:"sql-waitfor-delay",description:"MSSQL time-based blind injection: WAITFOR DELAY",pattern:/\bWAITFOR\s{1,20}DELAY\b/i},{id:"sql-char-function",description:"CHAR() function — used to obfuscate injected strings",pattern:/\bCHAR\s*\(\s*\d{1,3}/i},{id:"sql-information-schema",description:"INFORMATION_SCHEMA — reconnaissance query for table/column enumeration",pattern:/\bINFORMATION_SCHEMA\b/i}],Et=[...Nt,{id:"sql-line-comment",description:"SQL line comment: -- followed by whitespace or end of string",pattern:/--(?:\s|$)/},{id:"sql-stacked-query",description:"Stacked queries: semicolon immediately followed by a SQL keyword",pattern:/;\s{0,10}(?:SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC)\b/i},{id:"sql-hex-encoding",description:"Hex-encoded string injection: 0x41414141 style (MySQL)",pattern:/\b0x[0-9a-f]{4,}/i}],wt=[{id:"html-script-open",description:"<script opening tag",pattern:/<script[\s>/]/i},{id:"html-script-close",description:"<\/script closing tag",pattern:/<\/script[\s>]/i},{id:"html-javascript-protocol",description:"javascript: URI scheme (with optional whitespace/encoding)",pattern:/j[\t\n\r ]*a[\t\n\r ]*v[\t\n\r ]*a[\t\n\r ]*s[\t\n\r ]*c[\t\n\r ]*r[\t\n\r ]*i[\t\n\r ]*p[\t\n\r ]*t[\t\n\r ]*:/i},{id:"html-vbscript-protocol",description:"vbscript: URI scheme",pattern:/vbscript[\t\n\r ]*:/i},{id:"html-data-html",description:"data:text/html URI — can execute scripts in browsers",pattern:/data[\t\n\r ]*:[\t\n\r ]*text\/html/i},{id:"html-data-xhtml",description:"data:application/xhtml+xml URI",pattern:/data[\t\n\r ]*:[\t\n\r ]*application\/xhtml/i},{id:"html-data-svg",description:"data:image/svg+xml URI — can execute scripts",pattern:/data[\t\n\r ]*:[\t\n\r ]*image\/svg\+xml/i},{id:"html-inline-event-handler",description:"Inline event handler attributes: onclick=, onerror=, onload=, etc.",pattern:/\bon\w{1,30}\s*=/i},{id:"html-entity-obfuscated-script",description:"HTML-entity-encoded <script (e.g. &#x3C;script or &lt;script)",pattern:/(?:&#x0*3[Cc];?|&#0*60;?|&lt;)\s*script/i},{id:"html-entity-obfuscated-javascript",description:'HTML-entity-encoded javascript: (partial — catches common &#106; or &#x6a; for "j")',pattern:/(?:&#x0*6[Aa];?|&#0*106;?)\s*(?:&#x0*61;?|a)[\s\S]{0,80}script\s*:/i},{id:"html-style-expression",description:"CSS expression() — IE-era code execution in style attributes",pattern:/style[\s\S]{0,20}expression\s*\(/i},{id:"html-object-embed",description:"<object or <embed tags that can load active content",pattern:/<(?:object|embed)[\s>/]/i},{id:"html-base-tag",description:"<base href= — can hijack all relative URLs on a page",pattern:/<base[\s>]/i},{id:"html-meta-refresh",description:'<meta http-equiv="refresh" — can redirect users',pattern:/<meta[\s\S]{0,40}http-equiv[\s\S]{0,20}refresh/i},{id:"html-srcdoc",description:"srcdoc= attribute on iframes — embeds HTML that can run scripts",pattern:/srcdoc\s*=/i},{id:"html-iframe",description:"<iframe tag",pattern:/<iframe[\s>/]/i},{id:"html-form",description:"<form tag — can be used for phishing / credential harvesting injection",pattern:/<form[\s>/]/i}],vt=[{id:"xml-cdata-injection",description:"CDATA section injection: <![CDATA[ breaks out of text node context",pattern:/<!\[CDATA\[/i},{id:"xml-cdata-close",description:"CDATA close sequence: ]]> can terminate an enclosing CDATA section",pattern:/\]\]>/},{id:"xml-processing-instruction",description:"XML processing instruction: <?xml-stylesheet or <?php etc.",pattern:/<\?(?:xml[\- ]|php|asp)/i},{id:"xml-doctype-injection",description:"DOCTYPE declaration embedded in content — can define entities",pattern:/<!DOCTYPE(?:[\s[]|$)/i},{id:"xml-entity-system",description:"SYSTEM keyword — used in external entity declarations (XXE)",pattern:/\bSYSTEM\s+["']/i},{id:"xml-entity-public",description:"PUBLIC keyword — used in external entity declarations (XXE)",pattern:/\bPUBLIC\s+["']/i},{id:"xml-entity-declaration",description:"<!ENTITY declaration — defines entities, potential XXE or entity expansion",pattern:/<!ENTITY[\s%]/i},{id:"xml-billion-laughs",description:"Entity reference chaining / billion laughs: repeated &eX; style references",pattern:/(?:&\w{1,20};){3,}/},{id:"xml-namespace-confusion",description:"xmlns: attribute injection — can redefine namespaces to confuse parsers",pattern:/\bxmlns\s*(?::\w{1,40})?\s*=/i},{id:"xml-comment-injection",description:"\x3c!-- comment injection — can hide content from some parsers",pattern:/<!--/},{id:"xml-comment-close",description:"--\x3e closes an enclosing XML comment",pattern:/-->/},{id:"xml-pi-close",description:"?> closes an enclosing processing instruction",pattern:/\?>/}],St=[{id:"svg-script-element",description:"<script element inside SVG executes JavaScript",pattern:/<script[\s>/]/i},{id:"svg-xlink-href-javascript",description:"xlink:href with javascript: — classic SVG XSS via <a> or <use>",pattern:/xlink\s*:\s*href\s*=\s*["']?\s*javascript\s*:/i},{id:"svg-href-javascript",description:"href= with javascript: in SVG context (<a>, <animate>, etc.)",pattern:/href\s*=\s*["']?\s*javascript\s*:/i},{id:"svg-foreignobject",description:"<foreignObject embeds HTML inside SVG — can execute scripts",pattern:/<foreignObject[\s>/]/i},{id:"svg-use-external",description:"<use xlink:href or href pointing to external resource (non-fragment URL)",pattern:/<use[\s\S]{0,60}(?:xlink\s*:\s*)?href\s*=\s*(?:["'][^#]|[^"'#\s>])/i},{id:"svg-animate-href",description:'<animate attributeName="href" — can dynamically change href to javascript:',pattern:/<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*href["']/i},{id:"svg-animate-xlinkhref",description:'<animate attributeName="xlink:href"',pattern:/<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*xlink\s*:\s*href["']/i},{id:"svg-set-javascript",description:'<set to="javascript:..." — sets an attribute to a javascript: URI',pattern:/<set[\s\S]{0,80}to\s*=\s*["']?\s*javascript\s*:/i},{id:"svg-event-handler",description:"SVG-specific event handler attributes: onload=, onerror=, onactivate=, etc.",pattern:/\bon(?:load|error|activate|begin|end|repeat|focus|blur|click|mouse\w{1,20}|key\w{1,20})\s*=/i},{id:"svg-handler-generic",description:"Generic on* handler catch-all for SVG attributes",pattern:/\bon\w{1,30}\s*=/i},{id:"svg-filter-feimage",description:"<feImage href= — filter primitive that can load external resources",pattern:/<feImage[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=/i},{id:"svg-image-external",description:"<image xlink:href with http/https or javascript protocol",pattern:/<image[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=\s*["']?\s*(?:https?|javascript)\s*:/i},{id:"svg-style-javascript",description:"style= attribute containing javascript: (e.g. background:url(javascript:...))",pattern:/style\s*=[\s\S]{0,60}javascript\s*:/i}],At=[{id:"shell-path-traversal-unix",description:"Unix path traversal: ../  — climbing the directory tree",pattern:/\.\.\//},{id:"shell-path-traversal-windows",description:"Windows path traversal: ..\\ — climbing the directory tree",pattern:/\.\.\\/},{id:"shell-path-traversal-encoded",description:"URL-encoded path traversal: %2e%2e or %2f variants",pattern:/%2e%2e|%2f\.\.|\.\.%2f/i},{id:"shell-null-byte",description:"Null byte injection: \\x00 or %00 — truncates strings in C-backed functions",pattern:/\x00|%00/},{id:"shell-semicolon",description:"Semicolon command separator: cmd1; cmd2",pattern:/;/},{id:"shell-pipe",description:"Pipe operator: cmd1 | cmd2",pattern:/\|/},{id:"shell-and-operator",description:"AND operator: cmd1 && cmd2",pattern:/&&/},{id:"shell-or-operator",description:"OR operator: cmd1 || cmd2",pattern:/\|\|/},{id:"shell-backtick",description:"Backtick command substitution: `cmd`",pattern:/`/},{id:"shell-dollar-paren",description:"Dollar-paren command substitution: $(cmd)",pattern:/\$\(/},{id:"shell-dollar-brace",description:"Dollar-brace variable expansion: ${var} — can be abused for injection",pattern:/\$\{/},{id:"shell-redirect-out",description:"Output redirection: cmd > file or cmd >> file",pattern:/>{1,2}/},{id:"shell-redirect-in",description:"Input redirection: cmd < file",pattern:/</},{id:"shell-newline-injection",description:"Newline injection: \\n or \\r — can inject new shell commands",pattern:/[\n\r]/},{id:"shell-glob-star",description:"Glob expansion: * or ? — can expand to unintended files",pattern:/[/\\][*?]/},{id:"shell-absolute-root",description:"Absolute root path injection: string starting with / or \\ (Windows UNC)",pattern:/^(?:\/|\\\\)/},{id:"shell-windows-drive",description:"Windows drive letter path injection: C:\\ or D:/",pattern:/^[a-zA-Z]:[/\\]/},{id:"shell-curl-wget",description:"curl/wget with URL or flags — can exfiltrate data or download payloads",pattern:/\b(?:curl|wget)\s+(?:https?:\/\/|ftp:\/\/|-)/i}],Tt=[{id:"redos-nested-quantifier-plus",description:"Nested + quantifier inside a group with outer quantifier: (a+)+, (.+b)*, etc.",pattern:/\([^)]*\+[^)]*\)[+*]/},{id:"redos-nested-quantifier-star",description:"Nested * quantifier: (a*)* or (a*)+ — catastrophic backtracking",pattern:/\([^)]*\*[^)]*\)[*+]/},{id:"redos-nested-groups",description:"Doubly nested quantified groups: ((a+)+) — guaranteed catastrophic",pattern:/\(\([^)]{0,40}\)[+*]\)[+*]/},{id:"redos-alternation-overlap",description:"Overlapping alternation under quantifier: (a|a)+ — ambiguous NFA paths",pattern:/\(([^|()]{1,20})\|(?:\1)(?:\|[^|()]{1,20}){0,5}\)[+*?]{1,2}/},{id:"redos-star-plus-concat",description:"(x*x)+ pattern — triggers super-linear backtracking",pattern:/\([^)]{0,10}\*[^)]{0,10}\)[+*]/},{id:"redos-dot-star-greedy",description:"(.*){n,} or (.+){n,} — repeated greedy dot quantifiers",pattern:/\(\.[*+]\)\{?\d/},{id:"redos-large-repetition",description:"Very large fixed or range repetition count {1000,} or {1000,n} — denial of service via backtracking",pattern:/\{\d{4,}(?:,\d*)?\}/},{id:"redos-catastrophic-alternation",description:"Long alternation with many similar branches — polynomial backtracking risk",pattern:/\([^)]{0,200}(?:\|[^|)]{0,50}){9,}\)/}],_t="[\"'\\s]*:",Ct=[{id:"nosql-where-operator",description:"$where — executes arbitrary JavaScript server-side in MongoDB",pattern:new RegExp(`\\$where${_t}`,"i")},{id:"nosql-ne-operator",description:'$ne — "not equal" operator used to bypass equality checks',pattern:new RegExp(`\\$ne${_t}`,"i")},{id:"nosql-gt-operator",description:'$gt — "greater than" used to bypass password/value checks',pattern:new RegExp(`\\$gte?${_t}`,"i")},{id:"nosql-lt-operator",description:'$lt / $lte — "less than" bypass variants',pattern:new RegExp(`\\$lte?${_t}`,"i")},{id:"nosql-regex-operator",description:"$regex — can be used to extract data character by character (blind injection)",pattern:new RegExp(`\\$regex${_t}`,"i")},{id:"nosql-or-operator",description:"$or — logical OR; used to create always-true conditions",pattern:new RegExp(`\\$or${_t}\\s*\\[`,"i")},{id:"nosql-and-operator",description:"$and — logical AND operator injection",pattern:new RegExp(`\\$and${_t}\\s*\\[`,"i")},{id:"nosql-nor-operator",description:"$nor — logical NOR operator injection",pattern:new RegExp(`\\$nor${_t}\\s*\\[`,"i")},{id:"nosql-exists-operator",description:"$exists — can enumerate fields to determine schema",pattern:new RegExp(`\\$exists${_t}`,"i")},{id:"nosql-in-operator",description:"$in — matches any value in a list; can enumerate values",pattern:new RegExp(`\\$in${_t}\\s*\\[`,"i")},{id:"nosql-expr-operator",description:"$expr — allows aggregation expressions in queries (MongoDB 3.6+)",pattern:new RegExp(`\\$expr${_t}`,"i")},{id:"nosql-function-operator",description:"$function — executes arbitrary JavaScript in MongoDB 4.4+",pattern:new RegExp(`\\$function${_t}`,"i")},{id:"nosql-accumulator-operator",description:"$accumulator — custom aggregation with arbitrary JS execution",pattern:new RegExp(`\\$accumulator${_t}`,"i")},{id:"nosql-proto-pollution",description:"__proto__ — prototype pollution via object key injection",pattern:/__proto__/},{id:"nosql-constructor-prototype",description:"constructor.prototype — alternative prototype pollution vector (dot notation or JSON key)",pattern:/constructor[\s"':.,{\[]*prototype/i},{id:"nosql-proto-bracket",description:'["__proto__"] — bracket-notation prototype pollution',pattern:/\[["']__proto__["']\]/}],$t=[{id:"log-crlf-injection",description:"CRLF injection: literal \\r or \\n embeds fake log lines",pattern:/[\r\n]/},{id:"log-url-encoded-crlf",description:"URL-encoded CRLF: %0d, %0a, %0D, %0A — decoded by some log parsers",pattern:/%0[dDaA]/},{id:"log-unicode-newline",description:"Unicode newline variants: U+2028 (line separator), U+2029 (paragraph separator)",pattern:/[\u2028\u2029]/},{id:"log-log4shell-jndi",description:"Log4Shell: ${jndi:...} triggers remote code execution in Apache Log4j",pattern:/\$\{jndi\s*:/i},{id:"log-log4shell-obfuscated",description:"Obfuscated Log4Shell: ${::-j}... lookup-bypass prefix used to evade WAF detection",pattern:/\$\{::-/},{id:"log-log4j-lookup",description:"Log4j lookup syntax: ${env:...}, ${sys:...}, ${ctx:...} — data exfiltration",pattern:/\$\{(?:env|sys|ctx|main|map|sd|web|docker|k8s|spring)\s*:/i},{id:"log-ssti-double-brace",description:"SSTI double-brace: {{expression}} — Jinja2, Twig, Handlebars, etc.",pattern:/\{\{[\s\S]{0,80}\}\}/},{id:"log-ssti-hash-brace",description:"SSTI hash-brace: #{expression} — Thymeleaf, Velocity, Ruby ERB",pattern:/#\{[\s\S]{0,80}\}/},{id:"log-ssti-dollar-brace",description:"SSTI/EL injection: ${expression with operators or method calls} — JSP EL, Freemarker, SpEL",pattern:/\$\{[^}]*(?:\.|\(|\*|\+|\bclass\b|\bruntime\b|\bprocess\b|\bexec\b)[^}]{0,80}\}/i},{id:"log-ssti-percent-tag",description:"SSTI ERB/ASP tag: <%= expression %> — Ruby ERB, ASP",pattern:/<%=[\s\S]{0,80}%>/},{id:"log-null-byte",description:"Null byte: \\x00 or %00 — can truncate log entries in C-backed loggers",pattern:/\x00|%00/},{id:"log-ansi-escape",description:"ANSI escape sequence: ESC[ — can manipulate terminal output when logs are tailed",pattern:/\x1b\[/}];function Pt(t,e){const i=e.label??"CUSTOM";for(const n of e)if(n.pattern.test(t))return{context:i,id:n.id,description:n.description,pattern:n.pattern};return null}function Ot(t,e){(function(t){if("string"!=typeof t)throw new TypeError("is-unsafe: first argument must be a string, got "+typeof t)})(t),function(t){if(!(t instanceof RegExp)){if(!Array.isArray(t))throw new TypeError("is-unsafe: second argument must be a PatternList (e.g. HTML), an array of PatternLists (e.g. [HTML, XML]), or a RegExp. Got: "+typeof t);if(0===t.length)throw new TypeError("is-unsafe: context must not be an empty array");if(Array.isArray(t[0]))for(const e of t)if(!Array.isArray(e)||0===e.length)throw new TypeError("is-unsafe: each context in the array must be a non-empty pattern array (PatternList)")}}(e);const{lists:i,regex:n}=function(t){return t instanceof RegExp?{lists:null,regex:t}:Array.isArray(t[0])?{lists:t,regex:null}:{lists:[t],regex:null}}(e);if(n)return n.test(t);for(const e of i)if(null!==Pt(t,e))return!0;return!1}function jt(t,e){if(!t)return{};const i=e.attributesGroupName?t[e.attributesGroupName]:t;if(!i)return{};const n={};for(const t in i)t.startsWith(e.attributeNamePrefix)?n[t.substring(e.attributeNamePrefix.length)]=i[t]:n[t]=i[t];return n}function It(t){if(!t||"string"!=typeof t)return;const e=t.indexOf(":");if(-1!==e&&e>0){const i=t.substring(0,e);if("xmlns"!==i)return i}}wt.label="HTML",vt.label="XML",St.label="SVG",Nt.label="SQL",Et.label="SQL-STRICT",At.label="SHELL",Tt.label="REDOS",Ct.label="NOSQL",$t.label="LOG",Object.freeze({HTML:wt,XML:vt,SVG:St,SQL:Nt,"SQL-STRICT":Et,SHELL:At,REDOS:Tt,NOSQL:Ct,LOG:$t});class kt{constructor(t,e){var i;this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.parseXml=Vt,this.parseTextData=Lt,this.resolveNameSpace=Dt,this.buildAttributesMap=Mt,this.isItStopNode=Bt,this.replaceEntitiesValue=Ft,this.readStopNodeData=zt,this.saveTextToParentTag=Ut,this.addChild=qt,this.ignoreAttributesFn="function"==typeof(i=this.options.ignoreAttributes)?i:Array.isArray(i)?t=>{for(const e of i){if("string"==typeof e&&t===e)return!0;if(e instanceof RegExp&&e.test(t))return!0}}:()=>!1,this.entityExpansionCount=0,this.currentExpandedLength=0,this.doctypefound=!1;let n={...lt};this.options.entityDecoder?this.entityDecoder=this.options.entityDecoder:("object"==typeof this.options.htmlEntities?n=this.options.htmlEntities:!0===this.options.htmlEntities&&(n={...pt,...at}),this.entityDecoder=new yt({namedEntities:{...n,...e},numericAllowed:this.options.htmlEntities,limit:{maxTotalExpansions:this.options.processEntities.maxTotalExpansions,maxExpandedLength:this.options.processEntities.maxExpandedLength,applyLimitsTo:this.options.processEntities.appliesTo},onInputEntity:(t,e)=>Ot(e,[wt,vt])?ct.BLOCK:ct.ALLOW})),this.matcher=new rt,this.readonlyMatcher=this.matcher.readOnly(),this.isCurrentNodeStopNode=!1,this.stopNodeExpressionsSet=new ot;const r=this.options.stopNodes;if(r&&r.length>0){for(let t=0;t<r.length;t++){const e=r[t];"string"==typeof e?this.stopNodeExpressionsSet.add(new st(e)):e instanceof st&&this.stopNodeExpressionsSet.add(e)}this.stopNodeExpressionsSet.seal()}}}function Lt(t,e,i,n,r,s,o){const a=this.options;if(void 0!==t&&(a.trimValues&&!n&&(t=t.trim()),t.length>0)){o||(t=this.replaceEntitiesValue(t,e,i));const n=a.jPath?i.toString():i,l=a.tagValueProcessor(e,t,n,r,s);return null==l?t:typeof l!=typeof t||l!==t?l:a.trimValues||t.trim()===t?Yt(t,a.parseTagValue,a.numberParseOptions):t}}function Dt(t){if(this.options.removeNSPrefix){const e=t.split(":"),i="/"===t.charAt(0)?"/":"";if("xmlns"===e[0])return"";2===e.length&&(t=i+e[1])}return t}const Rt=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");function Mt(t,e,i,n=!1){const s=this.options;if(!0===n||!0!==s.ignoreAttributes&&"string"==typeof t){const n=r(t,Rt),o=n.length,a={},l=new Array(o);let p=!1;const c={};for(let t=0;t<o;t++){const e=this.resolveNameSpace(n[t][1]),r=n[t][4];if(e.length&&void 0!==r){let n=r;s.trimValues&&(n=n.trim()),n=this.replaceEntitiesValue(n,i,this.readonlyMatcher),l[t]=n,c[e]=n,p=!0}}p&&"object"==typeof e&&e.updateCurrent&&e.updateCurrent(c);const h=s.jPath?e.toString():this.readonlyMatcher;let d=!1;for(let t=0;t<o;t++){const e=this.resolveNameSpace(n[t][1]);if(this.ignoreAttributesFn(e,h))continue;let i=s.attributeNamePrefix+e;if(e.length)if(s.transformAttributeName&&(i=s.transformAttributeName(i)),i=Qt(i,s),void 0!==n[t][4]){const n=l[t],r=s.attributeValueProcessor(e,n,h);a[i]=null==r?n:typeof r!=typeof n||r!==n?r:Yt(n,s.parseAttributeValue,s.numberParseOptions),d=!0}else s.allowBooleanAttributes&&(a[i]=!0,d=!0)}if(!d)return;if(s.attributesGroupName&&!s.preserveOrder){const t={};return t[s.attributesGroupName]=a,t}return a}}const Vt=function(t){t=t.replace(/\r\n?/g,"\n");const e=new P("!xml");let i=e,n="";this.matcher.reset(),this.entityDecoder.reset(),this.entityExpansionCount=0,this.currentExpandedLength=0,this.doctypefound=!1;const r=this.options,s=new q(r.processEntities),o=t.length;for(let a=0;a<o;a++)if("<"===t[a]){const l=t.charCodeAt(a+1);if(47===l){const e=Gt(t,">",a,"Closing Tag is not closed.");let s=t.substring(a+2,e).trim();if(r.removeNSPrefix){const t=s.indexOf(":");-1!==t&&(s=s.substr(t+1))}s=Ht(r.transformTagName,s,"",r).tagName,i&&(n=this.saveTextToParentTag(n,i,this.readonlyMatcher));const o=this.matcher.getCurrentTag();if(s&&r.unpairedTagsSet.has(s))throw new Error(`Unpaired tag can not be used as closing tag: </${s}>`);o&&r.unpairedTagsSet.has(o)&&(this.matcher.pop(),this.tagsNodeStack.pop()),this.matcher.pop(),this.isCurrentNodeStopNode=!1,i=this.tagsNodeStack.pop(),n="",a=e}else if(63===l){let e=Wt(t,a,!1,"?>");if(!e)throw new Error("Pi Tag is not closed.");n=this.saveTextToParentTag(n,i,this.readonlyMatcher);const o=this.buildAttributesMap(e.tagExp,this.matcher,e.tagName,!0);if(o){const t=o[this.options.attributeNamePrefix+"version"];this.entityDecoder.setXmlVersion(Number(t)||1),s.setXmlVersion(Number(t)||1)}if(r.ignoreDeclaration&&"?xml"===e.tagName||r.ignorePiTags);else{const t=new P(e.tagName);t.add(r.textNodeName,""),e.tagName!==e.tagExp&&e.attrExpPresent&&!0!==r.ignoreAttributes&&(t[":@"]=o),this.addChild(i,t,this.readonlyMatcher,a)}a=e.closeIndex+1}else if(33===l&&45===t.charCodeAt(a+2)&&45===t.charCodeAt(a+3)){const e=Gt(t,"--\x3e",a+4,"Comment is not closed.");if(r.commentPropName){const s=t.substring(a+4,e-2);n=this.saveTextToParentTag(n,i,this.readonlyMatcher),i.add(r.commentPropName,[{[r.textNodeName]:s}])}a=e}else if(33===l&&68===t.charCodeAt(a+2)){if(this.doctypefound)throw new Error("Multiple DOCTYPE declarations found.");this.doctypefound=!0;const e=s.readDocType(t,a);this.entityDecoder.addInputEntities(e.entities),a=e.i}else if(33===l&&91===t.charCodeAt(a+2)){const e=Gt(t,"]]>",a,"CDATA is not closed.")-2,s=t.substring(a+9,e);n=this.saveTextToParentTag(n,i,this.readonlyMatcher);let o=this.parseTextData(s,i.tagname,this.readonlyMatcher,!0,!1,!0,!0);null==o&&(o=""),r.cdataPropName?i.add(r.cdataPropName,[{[r.textNodeName]:s}]):i.add(r.textNodeName,o),a=e+2}else{let s=Wt(t,a,r.removeNSPrefix);if(!s){const e=t.substring(Math.max(0,a-50),Math.min(o,a+50));throw new Error(`readTagExp returned undefined at position ${a}. Context: "${e}"`)}let l=s.tagName;const p=s.rawTagName;let c=s.tagExp,h=s.attrExpPresent,d=s.closeIndex;if(({tagName:l,tagExp:c}=Ht(r.transformTagName,l,c,r)),r.strictReservedNames&&(l===r.commentPropName||l===r.cdataPropName||l===r.textNodeName||l===r.attributesGroupName))throw new Error(`Invalid tag name: ${l}`);i&&n&&"!xml"!==i.tagname&&(n=this.saveTextToParentTag(n,i,this.readonlyMatcher,!1));const u=i;u&&r.unpairedTagsSet.has(u.tagname)&&(i=this.tagsNodeStack.pop(),this.matcher.pop());let f=!1;c.length>0&&c.lastIndexOf("/")===c.length-1&&(f=!0,"/"===l[l.length-1]?(l=l.substr(0,l.length-1),c=l):c=c.substr(0,c.length-1),h=l!==c);let g,m=null,x={};g=It(p),l!==e.tagname&&this.matcher.push(l,{},g),l!==c&&h&&(m=this.buildAttributesMap(c,this.matcher,l),m&&(x=jt(m,r))),l!==e.tagname&&(this.isCurrentNodeStopNode=this.isItStopNode());const b=a;if(this.isCurrentNodeStopNode){let e="";if(f)a=s.closeIndex;else if(r.unpairedTagsSet.has(l))a=s.closeIndex;else{const i=this.readStopNodeData(t,p,d+1);if(!i)throw new Error(`Unexpected end of ${p}`);a=i.i,e=i.tagContent}const n=new P(l);m&&(n[":@"]=m),n.add(r.textNodeName,e),this.matcher.pop(),this.isCurrentNodeStopNode=!1,this.addChild(i,n,this.readonlyMatcher,b)}else{if(f){({tagName:l,tagExp:c}=Ht(r.transformTagName,l,c,r));const t=new P(l);m&&(t[":@"]=m),this.addChild(i,t,this.readonlyMatcher,b),this.matcher.pop(),this.isCurrentNodeStopNode=!1}else{if(r.unpairedTagsSet.has(l)){const t=new P(l);m&&(t[":@"]=m),this.addChild(i,t,this.readonlyMatcher,b),this.matcher.pop(),this.isCurrentNodeStopNode=!1,a=s.closeIndex;continue}{const t=new P(l);if(this.tagsNodeStack.length>r.maxNestedTags)throw new Error("Maximum nested tags exceeded");this.tagsNodeStack.push(i),m&&(t[":@"]=m),this.addChild(i,t,this.readonlyMatcher,b),i=t}}n="",a=d}}}else n+=t[a];return e.child};function qt(t,e,i,n){this.options.captureMetaData||(n=void 0);const r=this.options.jPath?i.toString():i,s=this.options.updateTag(e.tagname,r,e[":@"]);!1===s||("string"==typeof s?(e.tagname=s,t.addChild(e,n)):t.addChild(e,n))}function Ft(t,e,i){const n=this.options.processEntities;if(!n||!n.enabled)return t;if(n.allowedTags){const r=this.options.jPath?i.toString():i;if(!(Array.isArray(n.allowedTags)?n.allowedTags.includes(e):n.allowedTags(e,r)))return t}if(n.tagFilter){const r=this.options.jPath?i.toString():i;if(!n.tagFilter(e,r))return t}return this.entityDecoder.decode(t)}function Ut(t,e,i,n){return t&&(void 0===n&&(n=0===e.child.length),void 0!==(t=this.parseTextData(t,e.tagname,i,!1,!!e[":@"]&&0!==Object.keys(e[":@"]).length,n))&&""!==t&&e.add(this.options.textNodeName,t),t=""),t}function Bt(){return 0!==this.stopNodeExpressionsSet.size&&this.matcher.matchesAny(this.stopNodeExpressionsSet)}function Gt(t,e,i,n){const r=t.indexOf(e,i);if(-1===r)throw new Error(n);return r+e.length-1}function Xt(t,e,i,n){const r=t.indexOf(e,i);if(-1===r)throw new Error(n);return r}function Wt(t,e,i,n=">"){const r=function(t,e,i=">"){let n=0;const r=t.length,s=i.charCodeAt(0),o=i.length>1?i.charCodeAt(1):-1;let a="",l=e;for(let i=e;i<r;i++){const e=t.charCodeAt(i);if(n)e===n&&(n=0);else if(34===e||39===e)n=e;else if(e===s){if(-1===o)return a+=t.substring(l,i),{data:a,index:i};if(t.charCodeAt(i+1)===o)return a+=t.substring(l,i),{data:a,index:i}}else 9!==e||n||(a+=t.substring(l,i)+" ",l=i+1)}}(t,e+1,n);if(!r)return;let s=r.data;const o=r.index,a=s.search(/\s/);let l=s,p=!0;-1!==a&&(l=s.substring(0,a),s=s.substring(a+1).trimStart());const c=l;if(i){const t=l.indexOf(":");-1!==t&&(l=l.substr(t+1),p=l!==r.data.substr(t+1))}return{tagName:l,tagExp:s,closeIndex:o,attrExpPresent:p,rawTagName:c}}function zt(t,e,i){const n=i;let r=1;const s=t.length;for(;i<s;i++)if("<"===t[i]){const s=t.charCodeAt(i+1);if(47===s){const s=Xt(t,">",i,`${e} is not closed`);if(t.substring(i+2,s).trim()===e&&(r--,0===r))return{tagContent:t.substring(n,i),i:s};i=s}else if(63===s)i=Gt(t,"?>",i+1,"StopNode is not closed.");else if(33===s&&45===t.charCodeAt(i+2)&&45===t.charCodeAt(i+3))i=Gt(t,"--\x3e",i+3,"StopNode is not closed.");else if(33===s&&91===t.charCodeAt(i+2))i=Gt(t,"]]>",i,"StopNode is not closed.")-2;else{const n=Wt(t,i,!1);n&&((n&&n.tagName)===e&&"/"!==n.tagExp[n.tagExp.length-1]&&r++,i=n.closeIndex)}}}function Yt(t,e,i){if(e&&"string"==typeof t){const e=t.trim();return"true"===e||"false"!==e&&tt(t,i)}return void 0!==t?t:""}function Ht(t,e,i,n){if(t){const n=t(e);i===e&&(i=n),e=n}return{tagName:e=Qt(e,n),tagExp:i}}function Qt(t,e){if(a.includes(t))throw new Error(`[SECURITY] Invalid name: "${t}" is a reserved JavaScript keyword that could cause prototype pollution`);return o.includes(t)?e.onDangerousProperty(t):t}const Jt=P.getMetaDataSymbol();function Zt(t,e){if(!t||"object"!=typeof t)return{};if(!e)return t;const i={};for(const n in t)n.startsWith(e)?i[n.substring(e.length)]=t[n]:i[n]=t[n];return i}function Kt(t,e,i,n){return te(t,e,i,n)}function te(t,e,i,n){let r;const s={};for(let o=0;o<t.length;o++){const a=t[o],l=ee(a);if(void 0!==l&&l!==e.textNodeName){const t=Zt(a[":@"]||{},e.attributeNamePrefix);i.push(l,t)}if(l===e.textNodeName)void 0===r?r=a[l]:r+=""+a[l];else{if(void 0===l)continue;if(a[l]){let t=te(a[l],e,i,n);const r=ne(t,e);if(0===Object.keys(t).length&&e.alwaysCreateTextNode&&(t[e.textNodeName]=""),a[":@"]?ie(t,a[":@"],n,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==a[Jt]&&"object"==typeof t&&null!==t&&(t[Jt]=a[Jt]),void 0!==s[l]&&Object.prototype.hasOwnProperty.call(s,l))Array.isArray(s[l])||(s[l]=[s[l]]),s[l].push(t);else{const i=e.jPath?n.toString():n;e.isArray(l,i,r)?s[l]=[t]:s[l]=t}void 0!==l&&l!==e.textNodeName&&i.pop()}}}return"string"==typeof r?r.length>0&&(s[e.textNodeName]=r):void 0!==r&&(s[e.textNodeName]=r),s}function ee(t){const e=Object.keys(t);for(let t=0;t<e.length;t++){const i=e[t];if(":@"!==i)return i}}function ie(t,e,i,n){if(e){const r=Object.keys(e),s=r.length;for(let o=0;o<s;o++){const s=r[o],a=s.startsWith(n.attributeNamePrefix)?s.substring(n.attributeNamePrefix.length):s,l=n.jPath?i.toString()+"."+a:i;n.isArray(s,l,!0,!0)?t[s]=[e[s]]:t[s]=e[s]}}}function ne(t,e){const{textNodeName:i}=e,n=Object.keys(t).length;return 0===n||!(1!==n||!t[i]&&"boolean"!=typeof t[i]&&0!==t[i])}class re{constructor(t){this.externalEntities={},this.options=C(t)}parse(t,e){if("string"!=typeof t&&t.toString)t=t.toString();else if("string"!=typeof t)throw new Error("XML data is accepted in String or Bytes[] form.");if(e){!0===e&&(e={});const i=p(t,e);if(!0!==i)throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`)}const i=new kt(this.options,this.externalEntities),n=i.parseXml(t);return this.options.preserveOrder||void 0===n?n:Kt(n,this.options,i.matcher,i.readonlyMatcher)}addEntity(t,e){if(-1!==e.indexOf("&"))throw new Error("Entity value can't have '&'");if(-1!==t.indexOf("&")||-1!==t.indexOf(";"))throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if("&"===e)throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=e}static getMetaDataSymbol(){return P.getMetaDataSymbol()}}function se(t){return String(t).replace(/--/g,"- -").replace(/--/g,"- -").replace(/-$/,"- ")}function oe(t){return String(t).replace(/\]\]>/g,"]]]]><![CDATA[>")}function ae(t){return String(t).replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const le=":A-Za-z_À-ÖØ-öø-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�",pe=":A-Za-z_À-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿",ce=pe+"\\-\\.\\d·̀-ͯ҇‿-⁀",he=(t,e,i="")=>{const n=`[${t.replace(":","")}][${e.replace(":","")}]*`;return{name:new RegExp(`^[${t}][${e}]*$`,i),ncName:new RegExp(`^${n}$`,i),qName:new RegExp(`^${n}(?::${n})?$`,i),nmToken:new RegExp(`^[${e}]+$`,i),nmTokens:new RegExp(`^[${e}]+(?:\\s+[${e}]+)*$`,i)}},de=he(le,le+"\\-\\.\\d·̀-ͯ‿-⁀"),ue=he(pe,ce,"u"),fe=(t,{xmlVersion:e="1.0"}={})=>((t="1.0")=>"1.1"===t?ue:de)(e).qName.test(t);function ge(t,e,i,n,r){return i.sanitizeName?fe(t,{xmlVersion:r})?t:i.sanitizeName(t,{isAttribute:e,matcher:n.readOnly()}):t}function me(t,e){let i="";e.format&&(i="\n");const n=[];if(e.stopNodes&&Array.isArray(e.stopNodes))for(let t=0;t<e.stopNodes.length;t++){const i=e.stopNodes[t];"string"==typeof i?n.push(new st(i)):i instanceof st&&n.push(i)}const r=function(t,e){if(!Array.isArray(t)||0===t.length)return"1.0";const i=t[0];if("?xml"===Ee(i)){const t=i[":@"];if(t){const i=e.attributeNamePrefix+"version";if(t[i])return t[i]}}return"1.0"}(t,e);return xe(t,e,i,new rt,n,r)}function xe(t,e,i,n,r,s){let o="",a=!1;if(e.maxNestedTags&&n.getDepth()>e.maxNestedTags)throw new Error("Maximum nested tags exceeded");if(!Array.isArray(t)){if(null!=t){let i=t.toString();return i=Se(i,e),i}return""}for(let l=0;l<t.length;l++){const p=t[l],c=Ee(p);if(void 0===c)continue;const h=c===e.textNodeName||c===e.cdataPropName||c===e.commentPropName||"?"===c[0]?c:ge(c,!1,e,n,s),d=be(p[":@"],e);n.push(h,d);const u=ve(n,r);if(h===e.textNodeName){let t=p[c];u||(t=e.tagValueProcessor(h,t),t=Se(t,e)),a&&(o+=i),o+=t,a=!1,n.pop();continue}if(h===e.cdataPropName){a&&(o+=i),o+=`<![CDATA[${oe(p[c][0][e.textNodeName])}]]>`,a=!1,n.pop();continue}if(h===e.commentPropName){o+=i+`\x3c!--${se(p[c][0][e.textNodeName])}--\x3e`,a=!0,n.pop();continue}if("?"===h[0]){o+=("?xml"===h?"":i)+`<${h}${we(p[":@"],e,u,n,s)}?>`,a=!0,n.pop();continue}let f=i;""!==f&&(f+=e.indentBy);const g=i+`<${h}${we(p[":@"],e,u,n,s)}`;let m;m=u?ye(p[c],e):xe(p[c],e,f,n,r,s),-1!==e.unpairedTags.indexOf(h)?e.suppressUnpairedNode?o+=g+">":o+=g+"/>":m&&0!==m.length||!e.suppressEmptyNode?m&&m.endsWith(">")?o+=g+`>${m}${i}</${h}>`:(o+=g+">",m&&""!==i&&(m.includes("/>")||m.includes("</"))?o+=i+e.indentBy+m+i:o+=m,o+=`</${h}>`):o+=g+"/>",a=!0,n.pop()}return o}function be(t,e){if(!t||e.ignoreAttributes)return null;const i={};let n=!1;for(let r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r.startsWith(e.attributeNamePrefix)?r.substr(e.attributeNamePrefix.length):r]=ae(t[r]),n=!0);return n?i:null}function ye(t,e){if(!Array.isArray(t))return null!=t?t.toString():"";let i="";for(let n=0;n<t.length;n++){const r=t[n],s=Ee(r);if(s===e.textNodeName)i+=r[s];else if(s===e.cdataPropName)i+=r[s][0][e.textNodeName];else if(s===e.commentPropName)i+=r[s][0][e.textNodeName];else{if(s&&"?"===s[0])continue;if(s){const t=Ne(r[":@"],e),n=ye(r[s],e);n&&0!==n.length?i+=`<${s}${t}>${n}</${s}>`:i+=`<${s}${t}/>`}}}return i}function Ne(t,e){let i="";if(t&&!e.ignoreAttributes)for(let n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;let r=t[n];!0===r&&e.suppressBooleanAttributes?i+=` ${n.substr(e.attributeNamePrefix.length)}`:i+=` ${n.substr(e.attributeNamePrefix.length)}="${ae(r)}"`}return i}function Ee(t){const e=Object.keys(t);for(let i=0;i<e.length;i++){const n=e[i];if(Object.prototype.hasOwnProperty.call(t,n)&&":@"!==n)return n}}function we(t,e,i,n,r){let s="";if(t&&!e.ignoreAttributes)for(let o in t){if(!Object.prototype.hasOwnProperty.call(t,o))continue;const a=o.substr(e.attributeNamePrefix.length),l=i?a:ge(a,!0,e,n,r);let p;i?p=t[o]:(p=e.attributeValueProcessor(o,t[o]),p=Se(p,e)),!0===p&&e.suppressBooleanAttributes?s+=` ${l}`:s+=` ${l}="${ae(p)}"`}return s}function ve(t,e){if(!e||0===e.length)return!1;for(let i=0;i<e.length;i++)if(t.matches(e[i]))return!0;return!1}function Se(t,e){if(t&&t.length>0&&e.processEntities)for(let i=0;i<e.entities.length;i++){const n=e.entities[i];t=t.replace(n.regex,n.val)}return t}const Ae={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1,maxNestedTags:100,jPath:!0,sanitizeName:!1};function Te(t){if(this.options=Object.assign({},Ae,t),this.options.stopNodes&&Array.isArray(this.options.stopNodes)&&(this.options.stopNodes=this.options.stopNodes.map(t=>"string"==typeof t&&t.startsWith("*.")?".."+t.substring(2):t)),this.stopNodeExpressions=[],this.options.stopNodes&&Array.isArray(this.options.stopNodes))for(let t=0;t<this.options.stopNodes.length;t++){const e=this.options.stopNodes[t];"string"==typeof e?this.stopNodeExpressions.push(new st(e)):e instanceof st&&this.stopNodeExpressions.push(e)}var e;!0===this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.ignoreAttributesFn="function"==typeof(e=this.options.ignoreAttributes)?e:Array.isArray(e)?t=>{for(const i of e){if("string"==typeof i&&t===i)return!0;if(i instanceof RegExp&&i.test(t))return!0}}:()=>!1,this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=Pe),this.processTextOrObjNode=Ce,this.options.format?(this.indentate=$e,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function _e(t,e,i,n,r){return i.sanitizeName?fe(t,{xmlVersion:r})?t:i.sanitizeName(t,{isAttribute:e,matcher:n.readOnly()}):t}function Ce(t,e,i,n,r){const s=this.extractAttributes(t);if(n.push(e,s),this.checkStopNode(n)){const r=this.buildRawContent(t),s=this.buildAttributesForStopNode(t);return n.pop(),this.buildObjectNode(r,e,s,i)}const o=this.j2x(t,i+1,n,r);return n.pop(),"?"===e[0]?this.buildTextValNode("",e,o.attrStr,i,n):void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,o.attrStr,i,n):this.buildObjectNode(o.val,e,o.attrStr,i)}function $e(t){return this.options.indentBy.repeat(t)}function Pe(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}Te.prototype.build=function(t){if(this.options.preserveOrder)return me(t,this.options);{Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t});const e=new rt,i=function(t,e){const i=t["?xml"];if(i&&"object"==typeof i){if(e.attributesGroupName&&i[e.attributesGroupName]){const t=i[e.attributesGroupName][e.attributeNamePrefix+"version"];if(t)return t}const t=i[e.attributeNamePrefix+"version"];if(t)return t}return"1.0"}(t,this.options);return this.j2x(t,0,e,i).val}},Te.prototype.j2x=function(t,e,i,n){let r="",s="";if(this.options.maxNestedTags&&i.getDepth()>=this.options.maxNestedTags)throw new Error("Maximum nested tags exceeded");const o=this.options.jPath?i.toString():i,a=this.checkStopNode(i);for(let l in t){if(!Object.prototype.hasOwnProperty.call(t,l))continue;const p=l===this.options.textNodeName||l===this.options.cdataPropName||l===this.options.commentPropName||this.options.attributesGroupName&&l===this.options.attributesGroupName||this.isAttribute(l)||"?"===l[0]?l:_e(l,!1,this.options,i,n);if(void 0===t[l])this.isAttribute(l)&&(s+="");else if(null===t[l])this.isAttribute(l)||p===this.options.cdataPropName||p===this.options.commentPropName?s+="":"?"===p[0]?s+=this.indentate(e)+"<"+p+"?"+this.tagEndChar:s+=this.indentate(e)+"<"+p+"/"+this.tagEndChar;else if(t[l]instanceof Date)s+=this.buildTextValNode(t[l],p,"",e,i);else if("object"!=typeof t[l]){const c=this.isAttribute(l);if(c&&!this.ignoreAttributesFn(c,o)){const e=_e(c,!0,this.options,i,n);r+=this.buildAttrPairStr(e,""+t[l],a)}else if(!c)if(l===this.options.textNodeName){let e=this.options.tagValueProcessor(l,""+t[l]);s+=this.replaceEntitiesValue(e)}else{i.push(p);const n=this.checkStopNode(i);if(i.pop(),n){const i=""+t[l];s+=""===i?this.indentate(e)+"<"+p+this.closeTag(p)+this.tagEndChar:this.indentate(e)+"<"+p+">"+i+"</"+p+this.tagEndChar}else s+=this.buildTextValNode(t[l],p,"",e,i)}}else if(Array.isArray(t[l])){const r=t[l].length;let o="",a="";for(let c=0;c<r;c++){const r=t[l][c];if(void 0===r);else if(null===r)"?"===p[0]?s+=this.indentate(e)+"<"+p+"?"+this.tagEndChar:s+=this.indentate(e)+"<"+p+"/"+this.tagEndChar;else if("object"==typeof r)if(this.options.oneListGroup){i.push(p);const t=this.j2x(r,e+1,i,n);i.pop(),o+=t.val,this.options.attributesGroupName&&r.hasOwnProperty(this.options.attributesGroupName)&&(a+=t.attrStr)}else o+=this.processTextOrObjNode(r,p,e,i,n);else if(this.options.oneListGroup){let t=this.options.tagValueProcessor(p,r);t=this.replaceEntitiesValue(t),o+=t}else{i.push(p);const t=this.checkStopNode(i);if(i.pop(),t){const t=""+r;o+=""===t?this.indentate(e)+"<"+p+this.closeTag(p)+this.tagEndChar:this.indentate(e)+"<"+p+">"+t+"</"+p+this.tagEndChar}else o+=this.buildTextValNode(r,p,"",e,i)}}this.options.oneListGroup&&(o=this.buildObjectNode(o,p,a,e)),s+=o}else if(this.options.attributesGroupName&&l===this.options.attributesGroupName){const e=Object.keys(t[l]),s=e.length;for(let o=0;o<s;o++){const s=_e(e[o],!0,this.options,i,n);r+=this.buildAttrPairStr(s,""+t[l][e[o]],a)}}else s+=this.processTextOrObjNode(t[l],p,e,i,n)}return{attrStr:r,val:s}},Te.prototype.buildAttrPairStr=function(t,e,i){return i||(e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e)),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+ae(e)+'"'},Te.prototype.extractAttributes=function(t){if(!t||"object"!=typeof t)return null;const e={};let i=!1;if(this.options.attributesGroupName&&t[this.options.attributesGroupName]){const n=t[this.options.attributesGroupName];for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t.startsWith(this.options.attributeNamePrefix)?t.substring(this.options.attributeNamePrefix.length):t]=ae(n[t]),i=!0)}else for(let n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;const r=this.isAttribute(n);r&&(e[r]=ae(t[n]),i=!0)}return i?e:null},Te.prototype.buildRawContent=function(t){if("string"==typeof t)return t;if("object"!=typeof t||null===t)return String(t);if(void 0!==t[this.options.textNodeName])return t[this.options.textNodeName];let e="";for(let i in t){if(!Object.prototype.hasOwnProperty.call(t,i))continue;if(this.isAttribute(i))continue;if(this.options.attributesGroupName&&i===this.options.attributesGroupName)continue;const n=t[i];if(i===this.options.textNodeName)e+=n;else if(Array.isArray(n)){for(let t of n)if("string"==typeof t||"number"==typeof t)e+=`<${i}>${t}</${i}>`;else if("object"==typeof t&&null!==t){const n=this.buildRawContent(t),r=this.buildAttributesForStopNode(t);e+=""===n?`<${i}${r}/>`:`<${i}${r}>${n}</${i}>`}}else if("object"==typeof n&&null!==n){const t=this.buildRawContent(n),r=this.buildAttributesForStopNode(n);e+=""===t?`<${i}${r}/>`:`<${i}${r}>${t}</${i}>`}else e+=`<${i}>${n}</${i}>`}return e},Te.prototype.buildAttributesForStopNode=function(t){if(!t||"object"!=typeof t)return"";let e="";if(this.options.attributesGroupName&&t[this.options.attributesGroupName]){const i=t[this.options.attributesGroupName];for(let t in i){if(!Object.prototype.hasOwnProperty.call(i,t))continue;const n=t.startsWith(this.options.attributeNamePrefix)?t.substring(this.options.attributeNamePrefix.length):t,r=i[t];!0===r&&this.options.suppressBooleanAttributes?e+=" "+n:e+=" "+n+'="'+r+'"'}}else for(let i in t){if(!Object.prototype.hasOwnProperty.call(t,i))continue;const n=this.isAttribute(i);if(n){const r=t[i];!0===r&&this.options.suppressBooleanAttributes?e+=" "+n:e+=" "+n+'="'+r+'"'}}return e},Te.prototype.buildObjectNode=function(t,e,i,n){if(""===t)return"?"===e[0]?this.indentate(n)+"<"+e+i+"?"+this.tagEndChar:this.indentate(n)+"<"+e+i+this.closeTag(e)+this.tagEndChar;if("?"===e[0])return this.indentate(n)+"<"+e+i+"?"+this.tagEndChar;{let r="</"+e+this.tagEndChar,s="";return"?"===e[0]&&(s="?",r=""),!i&&""!==i||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===s.length?this.indentate(n)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(n)+"<"+e+i+s+this.tagEndChar+t+this.indentate(n)+r:this.indentate(n)+"<"+e+i+s+">"+t+r}},Te.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},Te.prototype.checkStopNode=function(t){if(!this.stopNodeExpressions||0===this.stopNodeExpressions.length)return!1;for(let e=0;e<this.stopNodeExpressions.length;e++)if(t.matches(this.stopNodeExpressions[e]))return!0;return!1},Te.prototype.buildTextValNode=function(t,e,i,n,r){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName){const e=oe(t);return this.indentate(n)+`<![CDATA[${e}]]>`+this.newLine}if(!1!==this.options.commentPropName&&e===this.options.commentPropName){const e=se(t);return this.indentate(n)+`\x3c!--${e}--\x3e`+this.newLine}if("?"===e[0])return this.indentate(n)+"<"+e+i+"?"+this.tagEndChar;{let r=this.options.tagValueProcessor(e,t);return r=this.replaceEntitiesValue(r),""===r?this.indentate(n)+"<"+e+i+this.closeTag(e)+this.tagEndChar:this.indentate(n)+"<"+e+i+">"+r+"</"+e+this.tagEndChar}},Te.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const i=this.options.entities[e];t=t.replace(i.regex,i.val)}return t};const Oe=Te,je={validate:p};module.exports=e})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(1730);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map