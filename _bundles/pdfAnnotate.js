(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pdfAnnotate", [], factory);
	else if(typeof exports === 'object')
		exports["pdfAnnotate"] = factory();
	else
		root["pdfAnnotate"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/pako/index.js":
/*!************************************!*\
  !*** ./node_modules/pako/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Top level file is just a mixin of submodules & constants


var assign    = __webpack_require__(/*! ./lib/utils/common */ "./node_modules/pako/lib/utils/common.js").assign;

var deflate   = __webpack_require__(/*! ./lib/deflate */ "./node_modules/pako/lib/deflate.js");
var inflate   = __webpack_require__(/*! ./lib/inflate */ "./node_modules/pako/lib/inflate.js");
var constants = __webpack_require__(/*! ./lib/zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;


/***/ }),

/***/ "./node_modules/pako/lib/deflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/deflate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_deflate = __webpack_require__(/*! ./zlib/deflate */ "./node_modules/pako/lib/zlib/deflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;


/***/ }),

/***/ "./node_modules/pako/lib/inflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/inflate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_inflate = __webpack_require__(/*! ./zlib/inflate */ "./node_modules/pako/lib/zlib/inflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var c            = __webpack_require__(/*! ./zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");
var GZheader     = __webpack_require__(/*! ./zlib/gzheader */ "./node_modules/pako/lib/zlib/gzheader.js");

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 aligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;


/***/ }),

/***/ "./node_modules/pako/lib/utils/common.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/utils/common.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');

function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);


/***/ }),

/***/ "./node_modules/pako/lib/utils/strings.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/utils/strings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// String encode/decode helpers



var utils = __webpack_require__(/*! ./common */ "./node_modules/pako/lib/utils/common.js");


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/adler32.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/adler32.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/pako/lib/zlib/constants.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/crc32.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/crc32.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/deflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/deflate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var trees   = __webpack_require__(/*! ./trees */ "./node_modules/pako/lib/zlib/trees.js");
var adler32 = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32   = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var msg     = __webpack_require__(/*! ./messages */ "./node_modules/pako/lib/zlib/messages.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/


/***/ }),

/***/ "./node_modules/pako/lib/zlib/gzheader.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/gzheader.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inffast.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inffast.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inflate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var adler32       = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32         = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var inflate_fast  = __webpack_require__(/*! ./inffast */ "./node_modules/pako/lib/zlib/inffast.js");
var inflate_table = __webpack_require__(/*! ./inftrees */ "./node_modules/pako/lib/zlib/inftrees.js");

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0;           /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }
        state.dmax = 1 << len;
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Array(state.head.extra_len);
              }
              utils.arraySet(
                state.head.extra,
                input,
                next,
                // extra field is limited to 65536 bytes
                // - no need for additional size check
                copy,
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          utils.arraySet(output, input, next, copy, put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inflate_fast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
                /*UPDATE(state.check, put - _out, _out);*/
                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inftrees.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/inftrees.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/messages.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/messages.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/trees.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/trees.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/zstream.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/zstream.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/annotation.ts":
/*!***************************!*\
  !*** ./src/annotation.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = __webpack_require__(/*! ./parser */ "./src/parser.ts");
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const writer_1 = __webpack_require__(/*! ./writer */ "./src/writer.ts");
/**
 * The annotation factory provides methods to create annotations. Those are stored temporary
 * and than encoded into PDF code when the PDF document is outputted and for instance downloaded.
 * That
 * */
class AnnotationFactory {
    constructor(data) {
        this.data = data;
        this.annotations = [];
        this.toDelete = [];
        this.data = data;
        this.parser = new parser_1.PDFDocumentParser(this.data);
    }
    /**
     * Returns the number of annotations that will be added to the PDF document
     * */
    getAnnotationCount() {
        return this.annotations.length;
    }
    /**
     * Load a PDF file referenced by the given 'path'
     * */
    static loadFile(path) {
        return new Promise((resolve) => {
            if (typeof window !== 'undefined') { // browser environment
                fetch(path).then((r) => r.blob()).then((data) => {
                    let reader = new FileReader();
                    reader.onload = () => {
                        resolve(new AnnotationFactory(reader.result));
                    };
                    reader.readAsArrayBuffer(data);
                });
            }
            else if (typeof process === 'object') { // node environment
                throw Error("Not yet implemented");
            }
            else {
                throw Error("Unsupported environment");
            }
        });
    }
    /**
     * Generates a unique identifier necessary for creating the annotation
     * */
    generateUniqueIdentifier() {
        return "(pdfAnnotate-" + util_1.Util.convertDateToPDFDate(new Date()).slice(3, 17) + "-" + this.annotations.length + ")";
    }
    /**
     * Generates a default border
     * */
    createDefaultBorder() {
        return {
            vertical_corner_radius: 0,
            horizontal_corner_radius: 0,
            border_width: 1
        };
    }
    /**
     * Writes the made annotations into a bytestream
     * */
    write() {
        if (this.annotations.length === 0 && this.toDelete.length === 0)
            return this.data;
        let writer = new writer_1.Writer(this.data, this.annotations, this.toDelete, this.parser);
        return writer.write();
    }
    /**
     * Checks the 'rect' parameter, whether all the entries are of type number and if the the number of entries is correct
     * */
    checkRect(nr, rect) {
        if (rect.length !== nr)
            throw Error("Rect has invalid number of entries: " + rect + " has " + rect.length + " entries, but should have " + nr + " entries");
        rect.forEach((a) => {
            if ('number' !== typeof a)
                throw Error("Rect " + rect + " has invalid entry: " + a);
        });
    }
    /**
     * Extracts the rectangular hull from a quadPoint definition
     * */
    extractRectFromQuadPoints(quadPoints) {
        let x_values = quadPoints.filter((element, index) => index % 2 === 0);
        let y_values = quadPoints.filter((element, index) => index % 2 !== 0);
        return [Math.min(...x_values), Math.min(...y_values), Math.max(...x_values), Math.max(...y_values)];
    }
    /**
     * Checks the 'quadPoints' parameter
     * */
    checkQuadPoints(quadPoints) {
        if (quadPoints.length % 8 !== 0)
            throw Error(`Quadpoints array has length ${quadPoints.length} but must be a multiple of 8`);
        quadPoints.forEach((a) => {
            if ('number' !== typeof a)
                throw Error("Quadpoint " + quadPoints + " has invalid entry: " + a);
        });
    }
    /**
     * Creates a base annotation that mean the raw object of annotation or those parts that are all existing
     * and equally set in all types of annotations
     * */
    createBaseAnnotation(page, rect, contents, author) {
        let annot = new parser_1.Annotation();
        annot.type = "/Annot",
            annot.page = page,
            annot.object_id = this.parser.getFreeObjectId(),
            annot.id = this.generateUniqueIdentifier(),
            annot.rect = rect,
            annot.author = author,
            annot.pageReference = this.parser.getPage(page),
            annot.updateDate = util_1.Util.convertDateToPDFDate(new Date()),
            annot.contents = contents,
            annot.border = this.createDefaultBorder();
        return annot;
    }
    /**
     * Creates a text annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createTextAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
        if (!contents)
            contents = "";
        if (!author)
            author = "";
        this.checkRect(4, rect);
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color
        });
        annot.type = "/Text";
        this.annotations.push(annot);
    }
    /**
     * Creates a text markup annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * subtype : the subtype of the Textmarkup annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createTextMarkupAnnotation(page, rect, contents, author, subtype, color = { r: 1, g: 1, b: 0 }, quadPoints = []) {
        if (0 === quadPoints.length)
            quadPoints = [rect[0], rect[3], rect[2], rect[3], rect[0], rect[1], rect[2], rect[1]];
        else {
            this.checkQuadPoints(quadPoints);
        }
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            quadPoints: quadPoints
        });
        annot.type = subtype;
        return annot;
    }
    /**
     * Creates a highlight annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createHighlightAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }, quadPoints = []) {
        this.checkQuadPoints(quadPoints);
        if (rect.length === 0 && quadPoints.length > 0) {
            rect = this.extractRectFromQuadPoints(quadPoints);
        }
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Highlight", color, quadPoints);
        this.annotations.push(annot);
    }
    /**
     * Creates an underline annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createUnderlineAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }, quadPoints = []) {
        this.checkQuadPoints(quadPoints);
        if (rect.length === 0 && quadPoints.length > 0) {
            rect = this.extractRectFromQuadPoints(quadPoints);
        }
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Underline", color, quadPoints);
        this.annotations.push(annot);
    }
    /**
     * Creates a squiggle annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createSquigglyAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }, quadPoints = []) {
        this.checkQuadPoints(quadPoints);
        if (rect.length === 0 && quadPoints.length > 0) {
            rect = this.extractRectFromQuadPoints(quadPoints);
        }
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/Squiggly", color, quadPoints);
        this.annotations.push(annot);
    }
    /**
     * Creates a strike out annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createStrikeOutAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }, quadPoints = []) {
        this.checkQuadPoints(quadPoints);
        if (rect.length === 0 && quadPoints.length > 0) {
            rect = this.extractRectFromQuadPoints(quadPoints);
        }
        this.checkRect(4, rect);
        let annot = this.createTextMarkupAnnotation(page, rect, contents, author, "/StrikeOut", color, quadPoints);
        this.annotations.push(annot);
    }
    /**
     * Creates a free text annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createFreeTextAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            textAlignment: "right-justified",
            defaultAppearance: "/Invalid_font 9 Tf"
        });
        annot.type = "/FreeText";
        this.annotations.push(annot);
    }
    createLineAnnotation() {
        throw Error("No yet implemented");
    }
    /**
     * Creates the base annotation object of a circle and square annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createSquareCircleAnnotation(page, rect, contents, author, subtype, color = { r: 1, g: 1, b: 0 }) {
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color
        });
        annot.type = subtype;
        return annot;
    }
    /**
     * Creates a square annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createSquareAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createSquareCircleAnnotation(page, rect, contents, author, "/Square", color);
        this.annotations.push(annot);
    }
    /**
     * Creates a circle annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createCircleAnnotation(page, rect, contents, author, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createSquareCircleAnnotation(page, rect, contents, author, "/Circle", color);
        this.annotations.push(annot);
    }
    /**
     * Creates the base object of a polygon or polyline annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * vertices : the vertices defining the arrangement of the object
     * subtyp: Polygon or PolyLine
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createPolygonPolyLineAnnotation(page, rect, contents, author, vertices, subtype, color = { r: 1, g: 1, b: 0 }) {
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            vertices: vertices
        });
        annot.type = subtype;
        return annot;
    }
    /**
     * Creates a polygon annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * vertices : the vertices defining the arrangement of the object
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createPolygonAnnotation(page, rect, contents, author, vertices, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createPolygonPolyLineAnnotation(page, rect, contents, author, vertices, "/Polygon", color);
        this.annotations.push(annot);
    }
    /**
     * Creates a polyline annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * vertices : the vertices defining the arrangement of the object
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createPolyLineAnnotation(page, rect, contents, author, vertices, color = { r: 1, g: 1, b: 0 }) {
        this.checkRect(4, rect);
        let annot = this.createPolygonPolyLineAnnotation(page, rect, contents, author, vertices, "/PolyLine", color);
        this.annotations.push(annot);
    }
    /**
     * Creates an ink annotation
     * page : the number of the PDF document page, where the annotation must be attached
     * rect : the position of the annotation on the page
     * contents : the content of the annotation
     * author : the author of the annotation
     * inkList : a list of list containing the points for drawing the lines
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createInkAnnotation(page, rect, contents, author, inkList, color = { r: 0, g: 1, b: 0 }) {
        if (inkList.length === 0)
            throw Error("InkList is empty");
        let _inkList = [];
        if ('number' === typeof inkList[0]) {
            _inkList = [inkList];
        }
        else {
            _inkList = inkList;
        }
        let annot = Object.assign(this.createBaseAnnotation(page, rect, contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            inkList: _inkList
        });
        annot.type = "/Ink";
        this.annotations.push(annot);
    }
    /**
     * Creates a stamp annotation. There exists a number of predifined stamps that can be attached to PDF documents.
     * page : the number of the PDF document page, where the annotation must be attached
     * contents : the content of the annotation
     * author : the author of the annotation
     * stampType : the name of the used stamp type. Can be: [Approved, Experimental, NotApproved, AsIs, Expired, NotForPublicRelease, Confidential, Final, Sold, Departmental, ForComment, TopSecret, Draft, ForPublicRelease]
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createStampAnnotation(page, contents, author, stampType = "Draft", color = { r: 1, g: 1, b: 0 }) {
        let annot = Object.assign(this.createBaseAnnotation(page, [50, 50, 80, 80], contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            stampType: stampType
        });
        annot.type = "/Stamp";
        this.annotations.push(annot);
    }
    /**
     * Creates a visual symbol that indcates the existance of text edits.
     * page : the number of the PDF document page, where the annotation must be attached
     * contents : the content of the annotation
     * author : the author of the annotation
     * caretSymbol : None or P, with P for using the paragraph symbol as caret
     * color : the color of the annotation in rgb. Can be of domain 0 - 255 or 0 - 1
     * */
    createCaretAnnotation(page, contents, author, caretSymbol = "P", color = { r: 1, g: 1, b: 0 }) {
        let annot = Object.assign(this.createBaseAnnotation(page, [], contents, author), {
            opacity: 1,
            initiallyOpen: false,
            annotation_flag: 4,
            color: color,
            caretSymbol: caretSymbol
        });
        annot.type = "/Caret";
        this.annotations.push(annot);
    }
    /**
     * Deletes the annotation with the given id or the given reference object
     * */
    deleteAnnotation(id) {
        return new Promise((resolve) => {
            // delete if it was just created but is not in the pdf document
            for (let i = 0; i < this.annotations.length; ++i) {
                if ('string' === typeof id && this.annotations[i].id === id) {
                    this.annotations = this.annotations.slice(i, 1);
                    resolve(this.toDelete);
                    return;
                }
                else if (id.obj && this.annotations[i].object_id && id.obj === this.annotations[i].object_id.obj && id.generation && id.generation === this.annotations[i].object_id.generation) {
                    this.annotations = this.annotations.slice(i, 1);
                    resolve(this.toDelete);
                    return;
                }
            }
            this.getAnnotations().then((annots) => {
                for (let _annots of annots) {
                    for (let annot of _annots) {
                        if ('string' === typeof id && annot.id === id) {
                            this.toDelete.push(annot);
                            resolve(this.toDelete);
                            return;
                        }
                        else if (id.obj && annot.object_id && id.obj === annot.object_id.obj && id.generation && id.generation === annot.object_id.generation) {
                            this.toDelete.push(annot);
                            resolve(this.toDelete);
                            return;
                        }
                    }
                }
            });
        });
    }
    /**
     * Returns a promise with the resul of all annotations that are part of the document. This will
     * comprise those that are already exists and those that were created using this library
     * */
    getAnnotations() {
        return new Promise((resolve) => {
            let existingAnnots = this.parser.extractAnnotations();
            for (let newAnnot of this.annotations) {
                existingAnnots[newAnnot.page].push(newAnnot);
            }
            resolve(existingAnnots);
        });
    }
    createPopupAnnotation() {
        throw Error("No yet implemented");
    }
    /**
     * Downloads the adapted PDF document
     * */
    download(fileName = "output.pdf") {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        let extended_pdf = this.write();
        let blob = new Blob([extended_pdf], { type: "application/pdf" });
        let url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    }
    /**
     * Saves the adapted PDF document in a nodejs environment
     * */
    // see https://github.com/angular/angular-cli/issues/9827
    // why is it so reprehensible to create libraries for both environments (browser and nodejs)? Those guys at angular might know.
    //
    // uncomment it if you want to use it.
    save(fileName = "output.pdf") {
        //     if (typeof process === 'undefined' && (<any>process).release.name !== 'node') {
        //         console.error('Use download() in a browser environment')
        //         return
        //     }
        //     const fs = require('fs')
        //     let data = this.write()
        //     fs.writeFile(fileName, Buffer.from(new Uint8Array(data)), (err: any) => {
        //         if (err) {
        //             return console.log(err);
        //         }
        //         console.log(`The file was written to: ${fileName}`);
        //     })
    }
}
exports.AnnotationFactory = AnnotationFactory;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/array-util.ts":
/*!***************************!*\
  !*** ./src/array-util.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const object_util_1 = __webpack_require__(/*! ./object-util */ "./src/object-util.ts");
/**
 * Holds the logic for extracting arrays
 * */
class ArrayUtil {
    /**
     * Extracts array of numbers and arrays of references
     *
     * The function supports arbitrarily nesting of arrays and multiple types.
     * */
    static extractArray(data, ptr) {
        util_1.Util.debug_printIndexed(data);
        console.log("######################### RUN ARRAY EXTRACTION");
        ptr = util_1.Util.skipSpaces(data, ptr);
        if (data[ptr] !== util_1.Util.ARRAY_START[0])
            throw Error("Invalid array sequence -- does not start with '['");
        ptr += 1;
        let next = util_1.Util.readNextWord(data, ptr);
        let next_string = next.result;
        console.log(`Process ${util_1.Util.convertAsciiToString(next_string)} with end index: ${next.end_index}`);
        let ret_list = [];
        while (next_string) {
            if (next_string[0] === util_1.Util.ARRAY_START[0]) {
                let sub_array = ArrayUtil.extractArray(data, ptr);
                ptr = sub_array.end_index;
                ret_list.push(sub_array.result);
            }
            else if (next_string[0] === util_1.Util.STRING_END[0]) {
                return { result: ret_list, end_index: next.end_index };
            }
            else if (next_string[0] === util_1.Util.STRING_START[0]) {
                let extracted_string = util_1.Util.extractString(data, ptr);
                ret_list.push(extracted_string.result);
                ptr = extracted_string.end_index;
            }
            else if (next_string[0] === util_1.Util.DICT_START[0]) { // <
                let lookup_word = util_1.Util.readNextWord(data, next.end_index + 1);
                if (lookup_word.result && lookup_word.result[0] === util_1.Util.DICT_START[0]) {
                    let dict = {};
                    ptr = object_util_1.ObjectUtil.extractDictValueRec(data, ptr, dict);
                    ret_list.push(dict);
                }
                else {
                    let hex_string = util_1.Util.extractHexString(data, ptr);
                    ret_list.push(hex_string.result);
                    ptr = hex_string.end_index;
                }
            }
            else if (next_string[0] === 47) { // /
                let opt_value = util_1.Util.extractOptionValue(data, ptr);
                ret_list.push("/" + opt_value.result);
                ptr = opt_value.end_index;
            }
            else if (next_string[0] === util_1.Util.R[0]) { // /
                let obj = ret_list[ret_list.length - 2];
                let generation = ret_list[ret_list.length - 1];
                ret_list = ret_list.slice(0, ret_list.length - 2);
                ret_list.push({ obj: obj, generation: generation });
                ptr = next.end_index;
            }
            else if (next_string[0] === util_1.Util.ARRAY_END[0]) {
                break;
            }
            else {
                console.log("---------------------NUMBER");
                let nbr = util_1.Util.extractNumber(data, ptr);
                ret_list.push(nbr.result);
                ptr = nbr.end_index;
                console.log(JSON.stringify(nbr));
            }
            console.log(`Set ptr to ${ptr}`);
            ++ptr;
            next = util_1.Util.readNextWord(data, ptr);
            next_string = next.result;
            console.log(`Process ${util_1.Util.convertAsciiToString(next_string)} at index ${next.end_index}`);
        }
        console.log(ret_list);
        return { result: ret_list, end_index: next.end_index };
    }
}
exports.ArrayUtil = ArrayUtil;


/***/ }),

/***/ "./src/document-history.ts":
/*!*********************************!*\
  !*** ./src/document-history.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const object_util_1 = __webpack_require__(/*! ./object-util */ "./src/object-util.ts");
/**
 * Holds the complete information of one update section in the Cross-Reference-Stream Object format.
 *
 * */
class CrossReferenceStreamObject {
    constructor(data) {
        this.data = data;
        this.refs = [];
        this.trailer = { size: -1, root: { obj: -1, generation: -1 } };
        this.streamLength = -1;
        this.w = [];
        this.index = [];
        this.start_pointer = 0;
    }
    /**
     * Extracts a cross reference section that is a continuous definition of cross reference entries
     * */
    extractCrossReferenceSection(first_object_id, object_count, stream) {
        let current_object_id = first_object_id;
        for (let i = 0; i < object_count; ++i) {
            let _type = stream.getNBytesAsNumber(this.w[0]);
            let xref = undefined;
            switch (_type) {
                case 0:
                    xref = { id: current_object_id++, pointer: stream.getNBytesAsNumber(this.w[1]), generation: this.w[2] === 0 ? 0 : stream.getNBytesAsNumber(this.w[2]), free: true, update: false };
                    break;
                case 1:
                    xref = { id: current_object_id++, pointer: stream.getNBytesAsNumber(this.w[1]), generation: this.w[2] === 0 ? 0 : stream.getNBytesAsNumber(this.w[2]), free: false, update: true };
                    break;
                case 2:
                    // in this case the pointer becomes the stream object id that contains the compressed object and the generation represents the index of the object in the stream
                    xref = { id: current_object_id++, pointer: stream.getNBytesAsNumber(this.w[1]), generation: this.w[2] === 0 ? 0 : stream.getNBytesAsNumber(this.w[2]), free: true, update: false, compressed: true };
                    break;
            }
            if (xref)
                this.refs.push(xref);
            else
                throw Error(`Invalid cross-reference-stream type ${_type}`);
        }
    }
    /**
     * Extracts the cross-reference-table from the stream
     * */
    extractStream(stream) {
        let cross_reference_length = this.w.reduce((a, b) => a + b, 0);
        // check if the data stream has a valid size
        if (stream.getLength() !== cross_reference_length * this.index.filter((v, i) => i % 2 === 1).reduce((a, b) => a + b, 0))
            throw Error(`Invalid stream length - is ${stream.getLength()} but should be ${cross_reference_length * this.index.filter((v, i) => i % 2 === 1).reduce((a, b) => a + b, 0)}`);
        if (this.index.length % 2 === 1)
            throw Error(`Invalid index flag ${this.index}`);
        for (let i = 0; i < this.index.length; i += 2) {
            this.extractCrossReferenceSection(this.index[i], this.index[i + 1], stream);
        }
    }
    /**
     * Parses the Cross-Reference-Stream-Object at the given index
     * */
    extract(xref) {
        let index = xref.pointer;
        this.start_pointer = index;
        let crs_object = object_util_1.ObjectUtil.extractObject(this.data, xref);
        let ptr_object_end = util_1.Util.locateSequence(util_1.Util.ENDOBJ, this.data, index);
        this.data = this.data.slice(index, ptr_object_end);
        // check type
        if (crs_object.value["/Type"] !== "/XRef")
            throw Error(`Invalid Cross-Reference-Stream-object type: ${crs_object.value["/Type"]}`);
        // extract size
        if (!crs_object.value["/Size"])
            throw Error(`Invalid size value ${crs_object.value["/Size"]}`);
        this.trailer.size = crs_object.value["/Size"];
        // extract ROOT if it exists
        if (crs_object.value["/Root"])
            this.trailer.root = crs_object.value["/Root"];
        // extract PREV if it exists
        if (crs_object.value["/Prev"])
            this.trailer.prev = crs_object.value["/Prev"];
        // extract W parameter
        this.w = crs_object.value["/W"];
        if (!this.w || 0 === this.w.length)
            throw Error("Invalid /W parameter in Cross-Reference-Stream-Object");
        // extract Index parameter
        this.index = crs_object.value["/Index"];
        if (!this.index || 0 === this.index.length)
            throw Error("Invalid /Index parameter in Cross-Reference-Stream-Object");
        if (!crs_object.stream)
            throw Error("Missing stream at cross reference stream object");
        let stream = crs_object.stream;
        if (!stream)
            throw Error("Invalid stream object");
        this.streamLength = crs_object.value["/Length"];
        this.extractStream(stream);
        // the cross-reference-stream object is also a known reference
        this.refs.push({ id: crs_object.id.obj, pointer: this.start_pointer, generation: crs_object.id.generation, free: false, update: true });
    }
    /**
     * Returs the update section representing this CrossReferenceStreamObject
     * */
    getUpdateSection() {
        return {
            start_pointer: this.start_pointer,
            size: this.trailer.size,
            prev: this.trailer.prev,
            root: this.trailer.root,
            refs: this.refs
        };
    }
}
exports.CrossReferenceStreamObject = CrossReferenceStreamObject;
/**
 * Holds the complete information of one update section in the Cross-Reference-Table format. That comprises:
 * - the body update
 * - the crossiste reference table
 * - the trailer
 * */
class CrossReferenceTable {
    constructor(data) {
        this.data = data;
        this.refs = [];
        this.start_pointer = -1;
        this.trailer = { size: -1, root: { obj: -1, generation: -1 } };
    }
    /**
     * Returns the reference with the given id
     * */
    getReference(id) {
        for (let ref of this.refs) {
            if (ref.id === id)
                return ref;
        }
        return undefined;
    }
    /**
     * Returs the update section representing this CrossReferenceTable
     * */
    getUpdateSection() {
        return {
            start_pointer: this.start_pointer,
            size: this.trailer.size,
            refs: this.refs,
            prev: this.trailer.prev,
            root: this.trailer.root
        };
    }
    /**
     * Extracts the header of a sub section. For instance
     *
     * 0 1 // <--
     * ...
     *
     * So the obejct id 0 and the number of sub section entries 1
     * */
    extractSubSectionHeader(index) {
        let ptr = util_1.Util.locateDelimiter(this.data, index);
        let obj_id = util_1.Util.extractNumber(this.data, index, ptr).result;
        ptr = util_1.Util.skipDelimiter(this.data, ptr + 1);
        let ptr_ref_count = ptr;
        ptr = util_1.Util.locateDelimiter(this.data, ptr);
        let reference_count = util_1.Util.extractNumber(this.data, ptr_ref_count, ptr).result;
        return { id: obj_id, count: reference_count, end_ptr: ptr };
    }
    /**
     * Extracts the references of a sub section. The index points to the start of
     * the first reference and count represents the number of references that are
     * contained in the subsection.
     *
     * The first_object_id is the id provided in the sub section header
     *
     * By definition of the PDF standard one entry is 20 bytes long
     * */
    extractReferences(index, count, first_object_id) {
        let _refs = [];
        for (let i = 0; i < count; ++i, index += 20) {
            let ptr_end_pointer = util_1.Util.locateDelimiter(this.data, index);
            let pointer = util_1.Util.extractNumber(this.data, index, ptr_end_pointer).result;
            let ptr_gen_start = util_1.Util.skipDelimiter(this.data, ptr_end_pointer + 1);
            let ptr_gen_end = util_1.Util.locateDelimiter(this.data, ptr_gen_start);
            let generation = util_1.Util.extractNumber(this.data, ptr_gen_start, ptr_gen_end).result;
            let ptr_flag = util_1.Util.skipDelimiter(this.data, ptr_gen_end + 1);
            let isFree = this.data[ptr_flag] === 102; // 102 = f
            _refs.push({
                id: first_object_id + i,
                pointer: pointer,
                generation: generation,
                free: isFree,
                update: !isFree
            });
        }
        return _refs;
    }
    /**
     * Extracts the trailer of the subsection that means the part stating with the 'trailer' keyword and
     * in particular the trailer dictionary
     * */
    extractTrailer(index) {
        let end_trailer_index = util_1.Util.locateSequence(util_1.Util.STARTXREF, this.data, index, true);
        let _data = this.data.slice(index, end_trailer_index);
        index = 0;
        let ptr_start_size = util_1.Util.locateSequence(util_1.Util.SIZE, _data, index, true) + util_1.Util.SIZE.length;
        ptr_start_size = util_1.Util.skipDelimiter(_data, ptr_start_size);
        let size = util_1.Util.extractNumber(_data, ptr_start_size).result;
        let ptr_start_root = util_1.Util.locateSequence(util_1.Util.ROOT, _data, index, true) + util_1.Util.ROOT.length;
        ptr_start_root = util_1.Util.skipDelimiter(_data, ptr_start_root);
        let root_reference = util_1.Util.extractReferenceTyped(_data, ptr_start_root);
        let ptr_start_prev = util_1.Util.locateSequence(util_1.Util.PREV, _data, index, true);
        let prev = undefined;
        if (-1 != ptr_start_prev) {
            ptr_start_prev = util_1.Util.skipDelimiter(_data, ptr_start_prev + util_1.Util.PREV.length);
            prev = util_1.Util.extractNumber(_data, ptr_start_prev).result;
        }
        return {
            size: size,
            root: root_reference.result,
            prev: prev
        };
    }
    /**
     * Parses the Cross Reference Table at the given index
     * */
    extract(index) {
        this.start_pointer = index;
        let start_ptr = index + 5; // + length(xref) + blank
        start_ptr = util_1.Util.skipDelimiter(this.data, start_ptr);
        let first_header = this.extractSubSectionHeader(start_ptr);
        let ref_start = util_1.Util.skipDelimiter(this.data, first_header.end_ptr + 1);
        // extract first reference
        this.refs = this.refs.concat(this.extractReferences(ref_start, first_header.count, first_header.id));
        // extract remaining references
        start_ptr = ref_start + first_header.count * 20;
        while (this.data[start_ptr] !== 116) { // 116 = 't' start of the word trailer that concludes the crosssite reference section
            let header = this.extractSubSectionHeader(start_ptr);
            ref_start = util_1.Util.skipDelimiter(this.data, header.end_ptr + 1);
            let references = this.extractReferences(ref_start, header.count, header.id);
            this.refs = this.refs.concat(references);
            start_ptr = ref_start + header.count * 20;
        }
        this.trailer = this.extractTrailer(start_ptr);
    }
}
exports.CrossReferenceTable = CrossReferenceTable;
/**
 * Represents the complete PDF document history and therefore holds the
 * updated body parts, the crosssite references and the document trailers
 * */
class DocumentHistory {
    constructor(data) {
        this.data = data;
        this.updates = [];
        this.trailerSize = -1;
        /**
         * Holds object ids that were formerly freed and are now 'already' reused.
         * This is used to prevent a freed object a second time */
        this.already_reused_ids = [];
        this.data = new Uint8Array(data);
    }
    /**
     * Extracts the cross reference table starting at the given index
     * */
    extractCrossReferenceTable(index) {
        let crt = new CrossReferenceTable(this.data);
        crt.extract(index);
        return crt;
    }
    /**
     * Extracts the cross reference stream object starting at the given index
     * */
    extractCrossReferenceStreamObject(xref) {
        let crs = new CrossReferenceStreamObject(this.data);
        crs.extract(xref);
        return crs;
    }
    /**
     * Extracts the last update section of a document (that means
     * the most recent update locating at the end of the file)
     * */
    extractDocumentEntry() {
        let ptr = this.data.length - 1;
        let ptr_startxref = util_1.Util.locateSequenceReversed(util_1.Util.STARTXREF, this.data, ptr, true) + 9;
        ptr = util_1.Util.extractNumber(this.data, ptr_startxref).result;
        return ptr;
    }
    /**
     * Extracts the entire update sections
     *
     * Needs to adapt depending whether the document uses a cross-reference table or a cross-reference stream object
     * */
    extractDocumentHistory() {
        let ptr = this.extractDocumentEntry();
        let xref = {
            id: -1,
            pointer: ptr,
            generation: 0,
            free: false,
            update: true
        };
        // Handle cross reference table
        if (util_1.Util.areArraysEqual(this.data.slice(ptr, ptr + util_1.Util.XREF.length), util_1.Util.XREF)) {
            let crt = this.extractCrossReferenceTable(ptr);
            this.updates.push(crt.getUpdateSection());
            let us = this.updates[0];
            while (us.prev) {
                crt = this.extractCrossReferenceTable(us.prev);
                this.updates.push(crt.getUpdateSection());
                us = this.updates[this.updates.length - 1];
            }
        }
        else { // handle cross reference stream object
            let crs = this.extractCrossReferenceStreamObject(xref);
            this.updates.push(crs.getUpdateSection());
            let us = this.updates[0];
            while (us.prev) {
                let _xref = {
                    id: -1,
                    pointer: us.prev,
                    generation: 0,
                    free: false,
                    update: true
                };
                crs = this.extractCrossReferenceStreamObject(_xref);
                this.updates.push(crs.getUpdateSection());
                us = this.updates[this.updates.length - 1];
            }
        }
        this.trailerSize = this.getRecentUpdate().size;
    }
    /**
     * Primarily for clarification. The first element is the most recent. We parsed backwards.
     * */
    getRecentUpdate() {
        return this.updates[0];
    }
    /**
     * By running through the PDf history we can for every object id determine the pointer address to the most recent version, and
     * whether the object id is still in used.
     *
     * So the object lookup table has an entry for every existing object id, a pointer to the the most recent object definition, as long
     * as the object exists, or an according indication otherwise.
     * */
    createObjectLookupTable() {
        let objTable = {};
        let update = this.getRecentUpdate();
        let obj_count = update.size;
        let i = 1;
        while (Object.keys(objTable).length < obj_count) {
            let refs = update.refs;
            for (let ref of refs) {
                if (!objTable.hasOwnProperty(ref.id)) {
                    objTable[ref.id] = ref;
                }
            }
            update = this.updates[i];
            ++i;
        }
        return objTable;
    }
    /**
     * Returns the new object id. It primarily tries to reuse an existing id, but if no such exists it will return a
     * new one
     * */
    getFreeObjectId() {
        let objectLookupTable = this.createObjectLookupTable();
        let free_header = objectLookupTable[0];
        if (!free_header)
            throw Error("Crosssite reference has no header for the linked list of free objects");
        // if the pointer of object 0 points to 0 there is no freed object that can be reused
        if (0 === free_header.pointer) {
            if (-1 === this.trailerSize)
                throw Error("Trailer size not set");
            return { obj: this.trailerSize++, generation: 0, reused: false };
        }
        // get list head
        let ptr = free_header.pointer;
        let freedHeaderList = [];
        while (ptr !== 0) {
            freedHeaderList.push(free_header);
            free_header = objectLookupTable[ptr];
            if (!free_header.free) {
                // handle the case of an incosistent xref
                return { obj: this.trailerSize++, generation: 0, reused: false };
            }
            ptr = free_header.pointer;
        }
        let getFreeHeader = (freeHeaderList) => {
            for (let p of freeHeaderList.reverse()) {
                if (p.generation < 65535 && // max generation number
                    -1 === this.already_reused_ids.indexOf(p)) { // not already reused
                    return p;
                }
            }
            return undefined;
        };
        let reused_free_header = getFreeHeader(freedHeaderList);
        if (reused_free_header) {
            free_header = reused_free_header;
            // store used id to make sure it will not be selected again
            this.already_reused_ids.push(free_header);
        }
        else {
            // handle the case that all freed object ids are already reused
            return { obj: this.trailerSize++, generation: 0, reused: false };
        }
        return { obj: free_header.pointer, generation: objectLookupTable[free_header.id].generation, reused: true };
    }
}
exports.DocumentHistory = DocumentHistory;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = __webpack_require__(/*! ./parser */ "./src/parser.ts");
exports.PDFDocumentParser = parser_1.PDFDocumentParser;
var util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
exports.Util = util_1.Util;
var annotation_1 = __webpack_require__(/*! ./annotation */ "./src/annotation.ts");
exports.AnnotationFactory = annotation_1.AnnotationFactory;


/***/ }),

/***/ "./src/object-util.ts":
/*!****************************!*\
  !*** ./src/object-util.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const array_util_1 = __webpack_require__(/*! ./array-util */ "./src/array-util.ts");
const stream_1 = __webpack_require__(/*! ./stream */ "./src/stream.ts");
/**
 * While the general Util class holds low level methods to navigate through the pdf data, the ObjectUtil
 * is purposefully build to extract complete objects. It returns those as json dictionaries.
 * */
class ObjectUtil {
    static extractDictKeyRec(data, ptr, dict) {
        console.log(`read next word from ${ptr}`);
        let next = util_1.Util.readNextWord(data, ptr);
        let next_string = next.result;
        if (!next_string)
            return ptr;
        let _ptr = util_1.Util.skipDelimiter(next_string, 0);
        if (next_string)
            console.log(`Process Key ${util_1.Util.convertAsciiToString(next_string)}`);
        else
            console.log("Process key undefined");
        if (next_string[0] && util_1.Util.DICT_END[0] === next_string[0]) {
            let wordLookup = util_1.Util.readNextWord(data, next.end_index + 1);
            console.log(wordLookup);
            console.log(`Next word lookup ${util_1.Util.convertAsciiToString(wordLookup.result)}`);
            if (wordLookup.result && util_1.Util.DICT_END[0] === wordLookup.result[0]) {
                return wordLookup.end_index;
            }
        }
        return ObjectUtil.extractDictValueRec(data, next.end_index + 1, dict, util_1.Util.convertAsciiToString(next_string));
    }
    static extractDictValueRec(data, ptr, dict, current_key = undefined) {
        let next = util_1.Util.readNextWord(data, ptr);
        let next_string = next.result || new Uint8Array([]);
        ptr = next.end_index - next_string.length + 1;
        console.log(`read next word from ${ptr}`);
        console.log(`Process Value ${util_1.Util.convertAsciiToString(next_string)}`);
        if (next_string[0] === util_1.Util.ARRAY_START[0]) {
            if (!current_key)
                throw Error("Invalid anonymous array definition");
            // handle array
            let extracted_array = array_util_1.ArrayUtil.extractArray(data, ptr);
            dict[current_key] = extracted_array.result;
            return ObjectUtil.extractDictKeyRec(data, extracted_array.end_index + 1, dict);
        }
        else if (next_string[0] === util_1.Util.STRING_START[0]) {
            if (!current_key)
                throw Error("Invalid anonymous string definition");
            let extracted_string = util_1.Util.extractString(data, ptr);
            dict[current_key] = extracted_string.result;
            return ObjectUtil.extractDictKeyRec(data, extracted_string.end_index + 1, dict);
        }
        else if (next_string[0] === util_1.Util.DICT_START[0]) { // <
            if (data[next.end_index + 1] === util_1.Util.DICT_START[0]) {
                console.log("DICT START");
                if (current_key) {
                    let sup_dict = {};
                    let end_sub_dict = ObjectUtil.extractDictKeyRec(data, next.end_index + 2, sup_dict);
                    dict[current_key] = sup_dict;
                    return ObjectUtil.extractDictKeyRec(data, end_sub_dict + 1, dict);
                }
                else {
                    return ObjectUtil.extractDictKeyRec(data, next.end_index + 2, dict);
                }
            }
        }
        else if (next_string[0] === 47) { // /
            console.log("OPTION VALUE");
            if (!current_key)
                throw Error("Invalid anonymous property definition");
            let opt_value = util_1.Util.extractOptionValue(data, ptr);
            dict[current_key] = "/" + opt_value.result;
            return ObjectUtil.extractDictKeyRec(data, opt_value.end_index + 1, dict);
        }
        else { // It is a number, but this number might be part of a Reference
            let lookupNext = util_1.Util.readNextWord(data, next.end_index + 1);
            let lookupNextWord = lookupNext.result || new Uint8Array([]);
            if (!current_key)
                throw Error("Invalid anonymous reference/number definition");
            let value_end_ptr = next.end_index + 1;
            if (lookupNextWord[0] === 47 || lookupNextWord[0] === util_1.Util.DICT_END[0]) { // is a number
                dict[current_key] = util_1.Util.extractNumber(data, ptr).result;
            }
            else { // is a rereference
                let extracted_reference = util_1.Util.extractReferenceTyped(data, ptr);
                dict[current_key] = extracted_reference.result;
                value_end_ptr = extracted_reference.end_index + 1;
            }
            // handle Reference
            return ObjectUtil.extractDictKeyRec(data, value_end_ptr, dict);
        }
        throw Error(`Could not interpret: ${util_1.Util.convertAsciiToString(next_string)}`);
    }
    /**
     * Parses a PDF object and returns a dictionary containing its fields
     * */
    static extractObject(data, xref, objectLookupTable = undefined) {
        console.log(`Extract object ${JSON.stringify(xref)}`);
        if (typeof xref !== 'number' && xref.compressed) {
            if (!objectLookupTable)
                throw Error("Provide ObjectLookupTable to extract stream object");
            return ObjectUtil.extractStreamObject(data, xref.id, xref.generation, objectLookupTable[xref.pointer]);
        }
        let ret_obj = {};
        let ptr = typeof xref === 'number' ? xref : xref.pointer;
        let object_id = util_1.Util.extractObjectId(data, ptr);
        ret_obj.id = object_id;
        ptr = util_1.Util.locateSequence(util_1.Util.OBJ, data, ptr) + util_1.Util.OBJ.length;
        let ptr_obj_end = util_1.Util.locateSequence(util_1.Util.ENDOBJ, data, ptr);
        data = data.slice(ptr, ptr_obj_end);
        util_1.Util.debug_printIndexed(data);
        // determine the type of the object:
        let next = util_1.Util.readNextWord(data, 0);
        if (next.result && next.result[0] === util_1.Util.DICT_START[0]) { // object contains a dict
            let result_dict = {};
            ObjectUtil.extractDictValueRec(data, 0, result_dict);
            ret_obj.value = result_dict;
        }
        else if (next.result && next.result[0] === util_1.Util.ARRAY_START[0]) { // object contains an array
            let lst = array_util_1.ArrayUtil.extractArray(data, 0);
            ret_obj.value = lst.result;
        }
        else {
            throw Error(`Invalid object type - starting with: ${next.result}`);
        }
        // check if the object has a stream part
        ptr = util_1.Util.locateSequence(util_1.Util.STREAM, data, 0);
        if (-1 !== ptr) {
            // extract stream part
            let ptr_stream_data_start = ptr + util_1.Util.STREAM.length;
            ptr_stream_data_start = util_1.Util.skipDelimiter(data, ptr_stream_data_start);
            let ptr_stream_data_end = ptr_stream_data_start + ret_obj.value["/Length"];
            ret_obj.stream = ObjectUtil.extractStreamData(data.slice(ptr_stream_data_start, ptr_stream_data_end), ret_obj.value["/Filter"]);
        }
        return ret_obj;
    }
    static extractStreamObject(data, object_id_to_extract, offset, streamObj_xref) {
        let ptr = streamObj_xref.pointer;
        let ret_obj = {};
        // extract object id
        let object_id = util_1.Util.extractObjectId(data, ptr);
        ret_obj.id = object_id;
        ptr = util_1.Util.locateSequence(util_1.Util.OBJ, data, ptr) + util_1.Util.OBJ.length;
        let ptr_obj_end = util_1.Util.locateSequence(util_1.Util.ENDOBJ, data, ptr);
        data = data.slice(ptr, ptr_obj_end);
        // extract dict part
        let next = util_1.Util.readNextWord(data, 0);
        if (!next.result || next.result[0] !== util_1.Util.DICT_START[0]) {
            throw Error("Invalid stream object -- no dict");
        }
        let result_dict = {};
        ObjectUtil.extractDictValueRec(data, 0, result_dict);
        ret_obj.value = result_dict;
        // check if filter is supported
        if (!result_dict["/Filter"] || result_dict["/Filter"] !== "/FlateDecode")
            throw Error(`Unsupported stream filter: ${result_dict["/Filter"]} - Only supported filter is FlateDecode`);
        if (!result_dict["/Type"] || result_dict["/Type"] !== "/ObjStm")
            throw Error(`Invalid stream object type: ${result_dict["/Type"]}`);
        // extract the stream length
        let streamLength = result_dict["/Length"];
        // extract stream part
        let ptr_stream_data_start = util_1.Util.locateSequence(util_1.Util.STREAM, data) + util_1.Util.STREAM.length;
        ptr_stream_data_start = util_1.Util.skipDelimiter(data, ptr_stream_data_start);
        let ptr_stream_data_end = ptr_stream_data_start + streamLength;
        let stream = ObjectUtil.extractStreamData(data.slice(ptr_stream_data_start, ptr_stream_data_end), result_dict["/Filter"]);
        if (!result_dict["/N"])
            throw Error("Invalid stream object -- no number of objects specified");
        if (!result_dict["/First"])
            throw Error("Invalid stream object -- no offset to the first objct specified");
        let streamReferences = ObjectUtil.extractStreamObjectTable(stream, result_dict["/N"], result_dict["/First"]);
        if (!streamReferences[object_id_to_extract])
            throw Error(`Object ${object_id_to_extract} not in stream object`);
        let result_obj = { id: { object_id_to_extract, generation: 0 } };
        let value = {};
        ObjectUtil.extractDictValueRec(stream.getData(), streamReferences[object_id_to_extract], value);
        result_obj.value = value;
        return result_obj;
    }
    static extractStreamObjectTable(stream, number_of_obj, offset_first_obj) {
        let references = {};
        for (let i = 0; i < number_of_obj; ++i) {
            let obj_id = stream.getNumber();
            let pointer = stream.getNumber() + offset_first_obj;
            references[obj_id] = pointer;
        }
        return references;
    }
    static extractStreamData(streamData, compression) {
        let stream = undefined;
        if (compression === '/FlateDecode') {
            stream = new stream_1.FlateStream(streamData);
        }
        else {
            throw Error(`Unsupported stream filter: ${compression} - Only supported filter is FlateDecode (right now)`);
        }
        if (!stream)
            throw Error("Could not derive stream");
        return stream;
    }
}
exports.ObjectUtil = ObjectUtil;
ObjectUtil.i = 0;


/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const object_util_1 = __webpack_require__(/*! ./object-util */ "./src/object-util.ts");
const document_history_1 = __webpack_require__(/*! ./document-history */ "./src/document-history.ts");
class Annotation {
    constructor(data = new Uint8Array([])) {
        this.data = data;
        this.page = -1; // the target page of the annotation
        this.type = ""; // the sub type of the array (Text, Highlight, ...)
        this.object_id = null; // an unused object id
        this.id = ""; // unique annation identifier
        this.rect = []; // the location of the annotation
        this.author = ""; // the author of the annotation
        this.pageReference = null; // The reference to the page object to which the annotation is added
        this.updateDate = ""; // The date when the annotation was created or updated
        this.border = null; // define the border
        this.color = null; // the color set
        this.data = new Uint8Array(data);
    }
    /**
     * Extract the annotation object (partially)
     * */
    extract(xref, page, objectLookupTable) {
        console.log(`Try to extract ${JSON.stringify(xref)}`);
        let annot_obj = object_util_1.ObjectUtil.extractObject(this.data, xref, objectLookupTable);
        console.log("EXTRACTED ANNOTATION OBJECT");
        this.object_id = annot_obj.id;
        annot_obj = annot_obj.value;
        this.type = annot_obj["/Type"];
        this.rect = annot_obj["/Rect"];
        this.pageReference = page;
        this.updateDate = annot_obj["/M"];
        this.border = annot_obj["/Border"];
        this.color = annot_obj["/C"];
        this.author = annot_obj["/T"];
        this.author = annot_obj["/NM"];
        this.contents = annot_obj["/Contents"];
        this.quadPoints = annot_obj["/Quadpoints"];
        this.inkList = annot_obj["/Inklist"];
    }
}
exports.Annotation = Annotation;
/**
 * Represents the Catalog object of the PDF document
 * */
class CatalogObject {
    /**
     * Extracts the data representing the object.
     * */
    constructor(data, xref, objectLookupTable) {
        this.data = data;
        this.xref = xref;
        this.objectLookupTable = objectLookupTable;
        this.pagesObjectId = { obj: -1, generation: -1 };
        this.data = new Uint8Array(data);
        let page_obj = object_util_1.ObjectUtil.extractObject(this.data, xref, objectLookupTable).value;
        if (page_obj["/Type"] !== "/Catalog")
            throw Error(`Invalid catalog object at position ${xref.pointer}`);
        this.pagesObjectId = page_obj["/Pages"];
    }
    getPagesObjectId() {
        return this.pagesObjectId;
    }
}
exports.CatalogObject = CatalogObject;
/**
 * Represents the PageTree object of the PDF document
 * This is the object with /Type /Pages
 * */
class PageTree {
    constructor(data, objectLookupTable) {
        this.data = data;
        this.objectLookupTable = objectLookupTable;
        this.pageCount = -1;
        this.pageReferences = [];
        this.data = new Uint8Array(data);
    }
    /**
     * Extracts the kids references recursively.
     * For every kid it checks if the referenced object type is:
     * - a /Pages object then it recursively lookups its children
     * - a /Page object then it adds the references
     * */
    extractPageReferences(references) {
        console.log(`Extract references: ${JSON.stringify(references)}`);
        for (let reference of references) {
            let xref = this.objectLookupTable[reference.obj];
            let kid_page_obj = object_util_1.ObjectUtil.extractObject(this.data, xref, this.objectLookupTable).value;
            if (kid_page_obj["/Type"] === "/Page") {
                this.pageReferences.push(reference);
            }
            else if (kid_page_obj["/Type"] === "/Pages") {
                this.extractPageReferences(kid_page_obj["/Kids"]);
            }
            else {
                throw Error(`Invalid object type ${kid_page_obj["/Type"]}`);
            }
        }
    }
    /**
     * Extract the object data at the given pointer
     * */
    extract(xref, objectLookupTable) {
        let page_tree_obj = object_util_1.ObjectUtil.extractObject(this.data, xref, objectLookupTable).value;
        this.pageCount = page_tree_obj["/Count"];
        if (!page_tree_obj["/Kids"])
            throw Error(`Could not find index of /Kids in /Pages object`);
        let refs = page_tree_obj["/Kids"];
        this.pageReferences = [];
        this.extractPageReferences(refs);
    }
    /**
     * Returns the number of pages the page tree comprises
     * */
    getPageCount() {
        return this.pageCount;
    }
    /**
     * Returns the reference to the page objects
     * */
    getPageReferences() {
        return this.pageReferences;
    }
}
exports.PageTree = PageTree;
/**
 * Represents a page object in the PDF document
 * */
class Page {
    constructor(data, documentHistory) {
        this.data = data;
        this.documentHistory = documentHistory;
        this.annots = [];
        this.hasAnnotsField = false;
        this.data = new Uint8Array(data);
    }
    /**
     * Extracts the references in the linked annotations array
     * */
    extractAnnotationArray() {
        let obj_table = this.documentHistory.createObjectLookupTable();
        if (!this.annotsPointer)
            throw Error("Annotations pointer not set");
        let ref_annot_table = obj_table[this.annotsPointer.obj];
        let annotations_obj = object_util_1.ObjectUtil.extractObject(this.data, ref_annot_table, obj_table);
        this.annots = annotations_obj.value;
    }
    /**
     * Extracts the page object starting at position ptr
     * */
    extract(xref, objectLookupTable) {
        let page_obj = object_util_1.ObjectUtil.extractObject(this.data, xref, objectLookupTable);
        this.object_id = page_obj.id;
        let annots = page_obj.value["/Annots"];
        if (annots) {
            this.hasAnnotsField = true;
            if (Array.isArray(annots)) {
                this.annots = annots;
            }
            else {
                this.annotsPointer = annots;
                this.extractAnnotationArray();
            }
        }
    }
}
exports.Page = Page;
/**
 * Parses the relevant parts of the PDF document and provides functionality to extract the necessary information for
 * adding annotations
 * */
class PDFDocumentParser {
    constructor(data) {
        this.data = data;
        this.version = undefined;
        this.documentHistory = new document_history_1.DocumentHistory(new Uint8Array([]));
        this.catalogObject = undefined;
        this.pageTree = undefined;
        this.data = new Uint8Array(data);
        this.documentHistory = new document_history_1.DocumentHistory(this.data);
        this.documentHistory.extractDocumentHistory();
    }
    /**
     * Returns the major and minor version of the pdf document
     * */
    getPDFVersion() {
        if (this.version)
            return this.version;
        this.version = util_1.Util.extractVersion(this.data, 0);
        return this.version;
    }
    /**
     * Returns a free object id. It first checks wether there can be an freed object id reused. If that is not the case
     * it creates a new one
     * */
    getFreeObjectId() {
        return this.documentHistory.getFreeObjectId();
    }
    /**
     * Returns the catalog object of the PDF file
     * */
    getCatalog() {
        let recent_update = this.documentHistory.getRecentUpdate();
        if (recent_update.root) {
            let root_obj = recent_update.root;
            let obj_table = this.documentHistory.createObjectLookupTable();
            return new CatalogObject(this.data, obj_table[root_obj.obj], obj_table);
        }
        else { // If we do not know the catalogue object we need to look it up
            // In cross reference stream objects no /ROOT field is required, however often it is provided anyway
            // otherwise run this routine, but buffer the catalog object
            if (this.catalogObject)
                return this.catalogObject;
            throw Error("Does not work for compressed data");
            //let obj_table = this.documentHistory.createObjectLookupTable()
            //for (let i = 1; i < recent_update.size; ++i) {
            //    let _type = Util.extractField(this.data, Util._TYPE, obj_table[i].pointer)
            //    if (Util.areArraysEqual(_type, Util.CATALOG)) {
            //        this.catalogObject = new CatalogObject(this.data, obj_table[i])
            //        if (this.catalogObject)
            //            return this.catalogObject
            //    }
            //}
        }
        throw Error("Could not identify catalog object");
    }
    /**
     * Returns the latest version of the page tree object of the document
     * */
    getPageTree() {
        if (this.pageTree)
            return this.pageTree;
        let obj_table = this.documentHistory.createObjectLookupTable();
        let catalog_object = this.getCatalog();
        let pages_id = catalog_object.getPagesObjectId();
        let pages_ref = obj_table[pages_id.obj];
        let pageTree = new PageTree(this.data, obj_table);
        pageTree.extract(pages_ref, obj_table);
        this.pageTree = pageTree;
        return pageTree;
    }
    /**
     * Returns the latest version of the page with the given pageNumber
     * */
    getPage(pageNumber) {
        let pageTree = this.getPageTree();
        let pageId = pageTree.getPageReferences()[pageNumber];
        let obj_table = this.documentHistory.createObjectLookupTable();
        let obj_ptr = obj_table[pageId.obj];
        let page = new Page(this.data, this.documentHistory);
        page.extract(obj_ptr, obj_table);
        return page;
    }
    /**
     * Returns the annotations that exist in the document
     * */
    extractAnnotations() {
        let annots = [];
        let pt = this.getPageTree();
        let obj_table = this.documentHistory.createObjectLookupTable();
        let pageCount = pt.getPageCount();
        console.log(pageCount);
        for (let i = 0; i < pageCount; ++i) {
            console.log(`Extract annotations of page ${i}`);
            let page = this.getPage(i);
            console.log("HERE");
            let annotationReferences = page.annots;
            console.log("PAGE ANNOTS");
            console.log(page.annots);
            let pageAnnots = [];
            for (let refPtr of annotationReferences) {
                console.log("ENTER LOOP");
                let a = new Annotation(this.data);
                a.extract(obj_table[refPtr.obj], page, obj_table);
                console.log(`Annotaton ${a}`);
                a.page = i;
                pageAnnots.push(a);
                console.log("HERE 2");
            }
            annots.push(pageAnnots);
        }
        return annots;
    }
}
exports.PDFDocumentParser = PDFDocumentParser;


/***/ }),

/***/ "./src/stream.ts":
/*!***********************!*\
  !*** ./src/stream.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const Pako = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");
class Stream {
    constructor(data) {
        this.data = data;
        this._ptr = 0;
    }
    getData() {
        return this.data;
    }
    getLength() {
        return this.data.length;
    }
    peekNBytes(n = 1, ptr = 0) {
        return this.data.slice(ptr, ptr + n);
    }
    peekNBytesAsNumber(n = 1, ptr = 0) {
        let res = 0;
        for (let i = 0; i < n; ++i) {
            res += (this.data[i + ptr] << 8 * (n - i - 1));
        }
        return res;
    }
    /**
     * reads the next 'n' bytes of position 'ptr' and returns its content as a number
     * */
    getNBytesAsNumber(n = 1) {
        let res = this.peekNBytesAsNumber(n, this._ptr);
        this._ptr += n;
        return res;
    }
    /**
     * Skips spaces and than adds as many bytes to the number until another space is reached
     * */
    getNumber() {
        let nbr = util_1.Util.extractNumber(this.data, this._ptr);
        this._ptr = nbr.end_index;
        return nbr.result;
    }
}
exports.Stream = Stream;
class FlateStream extends Stream {
    constructor(data) {
        super(data);
        this.data = data;
        this.data = Pako.inflate(data);
    }
}
exports.FlateStream = FlateStream;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class provides methods to navigate through the byte array representing the PDF document
 * */
class Util {
    /**
     * Extracts the version information of a PDF file
     * */
    static extractVersion(data, index = 0) {
        let ptr_version_start = Util.locateSequence(Util.VERSION, data, index) + Util.VERSION.length;
        let ptr_delimiter = Util.locateSequence([Util.DOT], data, ptr_version_start);
        let major_version = Util.extractNumber(data, ptr_version_start, ptr_delimiter).result;
        let ptr_end = Util.locateDelimiter(data, ptr_delimiter);
        let minor_version = Util.extractNumber(data, ptr_delimiter + 1, ptr_end).result;
        return { major: major_version, minor: minor_version };
    }
    /**
     * Returns the next word. These are bytes that are not separated by a delimiter and a ptr to the position where the word ends
     * It ignores/skips comments.
     * */
    static readNextWord(data, index = 0) {
        if (index >= data.length) {
            return { result: undefined, end_index: data.length - 1 };
        }
        index = Util.skipSpaces(data, index);
        if (data[index] === 37) {
            // in case of a comment run to the end of the line
            while (data[index] !== 13 && data[index] != 10 && index < data.length)
                ++index;
            index = Util.skipSpaces(data, index);
        }
        let start_index = index;
        index++;
        while (!Util.isDelimiter(data[index]) && index < data.length)
            ++index;
        if (index <= data.length)
            return { result: data.slice(start_index, index), end_index: index - 1 };
        return { result: undefined, end_index: index - 1 };
    }
    /**
     * Assumes that at position index is a delimiter and than runs as long forward until it finds
     * another delimiter or reaches the end of the document
     * */
    static skipDelimiter(data, index = 0) {
        while (index < data.length && this.isDelimiter(data[index]))
            ++index;
        return index;
    }
    /**
     * Skips only spaces
     * */
    static skipSpaces(data, index = 0) {
        while (index < data.length && (data[index] === 10 || data[index] === 13 || data[index] === 32))
            ++index;
        return index;
    }
    /**
     * Assumes that at position index is a delimiter and than runs as long backwards until it finds
     * another delimiter or reaches the end of the document
     * */
    static skipDelimiterReverse(data, index = 0) {
        while (index > 0 && this.isDelimiter(data[index]))
            --index;
        return index;
    }
    /**
     * Transforms a string into an array of the corresponding ascii values
     * */
    static convertStringToAscii(toConvert) {
        let asciis = [];
        for (let i = 0; i < toConvert.length; ++i) {
            asciis.push(+toConvert.charCodeAt(i));
        }
        return asciis;
    }
    static isSpace(value) {
        return value === Util.LF ||
            value === Util.CR ||
            value === Util.SPACE;
    }
    static isDelimiter(value) {
        return Util.isSpace(value) ||
            value === 47 || // /
            value === 37 || // %
            value === 60 || // <
            value === 62 || // >
            value === 91 || // [
            value === 93 || // ]
            value === 40 || // (
            value === 41; // )
    }
    /**
     * Search the sequence in data starting at the offset
     *
     * Set the 'closed' flag to check if the suceeding char after the sequence is a line feed (10), a carriage return (13), the end
     * of the whole sequence or a space (32)
     * */
    static locateSequence(sequence, data, offset = 0, closed = false) {
        let i = offset;
        for (let j = 0; i < data.length; ++i) {
            if (data[i] == sequence[j]) {
                if (j == sequence.length - 1) {
                    if (!closed || data.length == i + 1 || this.isDelimiter(data[i + 1])) {
                        return i - (sequence.length - 1);
                    }
                    else {
                        j = -1;
                    }
                }
                ++j;
            }
            else {
                j = 0;
            }
        }
        return -1;
    }
    /**
     * Search the sequence in data starting at the offset in reverse direction
     *
     * Set the 'closed' flag to check if the preceding char before the sequence is a line feed (10), a carriage return (13), the start
     * of the whole data sequence or a space (32)
     * */
    static locateSequenceReversed(sequence, data, offset = data.length - 1, closed = false) {
        let i = offset;
        for (let j = sequence.length - 1; i >= 0; --i) {
            if (data[i] == sequence[j]) {
                if (j == 0) {
                    if (!closed || i - 1 < 0 || this.isDelimiter(data[i - 1])) {
                        return i;
                    }
                    else {
                        j = sequence.length;
                    }
                }
                --j;
            }
            else {
                j = sequence.length - 1;
            }
        }
        return -1;
    }
    /**
     * Locates the index before the next delimiter. Delimiters can be a line feed (10), a carriage return (13), the end of the whole sequence
     * or a space (32)
     * */
    static locateDelimiter(data, offset = 0) {
        while (offset < data.length && !this.isDelimiter(data[offset]))
            ++offset;
        return offset - 1;
    }
    /**
     * Locates the index after the last delimiter. Delimiters can be a line feed (10), a carriage return (13), the end of the whole sequence
     * or a space (32)
     * */
    static locateDelimiterReversed(data, offset = data.length - 1) {
        while (offset > 0 && !this.isDelimiter(data[offset]))
            --offset;
        if (offset <= 0)
            return offset;
        return offset - 1;
    }
    /**
     * Extract an object identifier
     * <ID> <GEN> obj
     * */
    static extractObjectId(data, index) {
        index = Util.skipDelimiter(data, index);
        let end_obj_ptr = Util.locateDelimiter(data, index + 1);
        let obj = Util.extractNumber(data, index, end_obj_ptr).result;
        let start_gen_ptr = Util.skipDelimiter(data, end_obj_ptr + 1);
        let end_gen_ptr = Util.locateDelimiter(data, start_gen_ptr + 1);
        let gen = Util.extractNumber(data, start_gen_ptr, end_gen_ptr).result;
        return { obj: obj, generation: gen };
    }
    /**
     * Extract the reference starting at position 'index'
     * */
    static extractReference(data, index) {
        index = Util.skipDelimiter(data, index);
        let r_index = this.locateSequence(this.convertStringToAscii(" R"), data, index, true);
        return data.slice(index, r_index);
    }
    /**
     * Returns a reference as typed object
     * */
    static extractReferenceTyped(data, index) {
        let ref_data = this.extractReference(data, index);
        let del_index = this.locateDelimiter(ref_data, 0);
        let id = this.extractNumber(ref_data, 0, del_index).result;
        let gen = this.extractNumber(ref_data, del_index + 2).result;
        return { result: { obj: id, generation: gen }, end_index: index + ref_data.length + 1 }; // + _R
    }
    /**
     * Extracts a string in Hex notation <...>
     * */
    static extractHexString(data, index) {
        let string_start = Util.locateSequence(Util.HEX_STRING_START, data, index);
        let string_end = Util.locateSequence(Util.HEX_STRING_END, data, index);
        data = data.slice(string_start + 1, string_end);
        return { result: Util.convertUnicodeToString(data), end_index: string_end };
    }
    /**
     * Extratcs a string (...)
     * */
    static extractString(data, index) {
        let string_start = Util.locateSequence(Util.STRING_START, data, index);
        let string_end = Util.locateSequence(Util.STRING_END, data, index);
        data = data.slice(string_start + 1, string_end);
        return { result: Util.convertUnicodeToString(data), end_index: string_end };
    }
    /**
     * Returns the value of an option
     * /<option>
     *
     * so for instance for /Highlight it would return 'Highlight'
     *
     * The index must point to the "/"
     * */
    static extractOptionValue(data, index = 0) {
        if (data[index] !== 47)
            throw Error("misplaced option value pointer");
        let end = Util.locateDelimiter(data, index + 1);
        return { result: Util.convertAsciiToString(Array.from(data.slice(index + 1, end + 1))), end_index: end };
    }
    /**
     * Parses the ascii encoded number of the PDF file
     * */
    static extractNumber(data, start, end = -1) {
        start = Util.skipDelimiter(data, start);
        if (-1 == end) {
            end = Util.locateDelimiter(data, start);
        }
        if (end < start) {
            throw Error(`Could not identify number bounds: [${start},${end}]`);
        }
        let str_id = "";
        for (let i = start; i <= end; ++i) {
            str_id += String.fromCharCode(data[i]);
        }
        if ("" === str_id) {
            throw Error(`Could not parse number at position ${start}`);
        }
        return { result: +str_id, end_index: end };
    }
    /**
     * Converts the given date into PDF formatting
     * */
    static convertDateToPDFDate(date) {
        let date_str = "(D:";
        date_str += date.getFullYear();
        let month = String(date.getMonth() + 1);
        date_str += (month.length == 1 ? "0" : "") + month;
        let day = String(date.getDate());
        date_str += (day.length == 1 ? "0" : "") + day;
        let hours = String(date.getHours());
        date_str += (hours.length == 1 ? "0" : "") + hours;
        let minutes = String(date.getMinutes());
        date_str += (minutes.length == 1 ? "0" : "") + minutes;
        let seconds = String(date.getSeconds());
        date_str += (seconds.length == 1 ? "0" : "") + seconds;
        return date_str + ")";
    }
    /**
     * Converts a unicode sequence into a string
     * */
    static convertUnicodeToString(val) {
        if (val instanceof Uint8Array)
            val = new Uint8Array(val);
        if (val[0] === 254 && val[1] === 255) {
            val = val.slice(2, val.length);
            let uintToString = (uintArray) => {
                let ret = "";
                for (let i = 0; i < uintArray.length - 1; i += 2) {
                    ret += String.fromCharCode((uintArray[i] << 8) | uintArray[i + 1] & 0xFF);
                }
                return ret;
            };
            let ret = uintToString(val);
            return ret;
        }
        // handle utf-8 compression
        let Utf8ArrayToStr = (array) => {
            let ret = "";
            let i = 0;
            while (i < array.length) {
                let char1 = array[i++];
                let char2;
                switch (char1 >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // one byte
                        ret += String.fromCharCode(char1);
                        break;
                    case 12:
                    case 13:
                        // two byte sequence
                        char2 = array[i++];
                        ret += String.fromCharCode(((char1 & 0x1F) << 6) | (char2 & 0x3F));
                        break;
                    case 14:
                        // three byte sequence
                        char2 = array[i++];
                        let char3 = array[i++];
                        ret += String.fromCharCode(((char1 & 0x0F) << 12) |
                            ((char2 & 0x3F) << 6) |
                            ((char3 & 0x3F) << 0));
                        break;
                }
            }
            return ret;
        };
        let ret = Utf8ArrayToStr(Array.from(val));
        return ret;
    }
    static convertAsciiToString(val) {
        let ret = "";
        for (let i = 0; i < val.length; ++i) {
            ret += String.fromCharCode(val[i]);
        }
        return ret;
    }
    /**
     * takes a number and returns an array of its char representations
     * */
    static convertNumberToCharArray(nbr) {
        return Util.convertStringToAscii(String(nbr));
    }
    /**
     * takes two arrays and checks their equality
     * */
    static areArraysEqual(array_one, array_two) {
        if (array_one.length !== array_two.length)
            return false;
        for (let i = 0; i < array_one.length; ++i) {
            if (array_one[i] !== array_two[i])
                return false;
        }
        return true;
    }
    /**
     * Prints the array with leading indexes 10 bytes in a row
     * Delimiter are substituted by '.'
     * */
    static debug_printIndexed(array) {
        let outp = "";
        for (let i = 0; i < array.length; ++i) {
            if (i % 10 === 0) {
                outp += "\n" + i + ":";
            }
            if (Util.isSpace(array[i]))
                outp += " .";
            else
                outp += " " + String.fromCharCode(array[i]);
        }
        console.log(outp);
    }
}
exports.Util = Util;
Util.VERSION = [37, 80, 68, 70, 45]; // %PDF-
Util.DOT = 46;
Util.CR = 13;
Util.LF = 10;
Util.TYPE = "/Type ";
Util.SPACE = 32;
Util.OBJ = [111, 98, 106]; // 'obj'
Util.ENDOBJ = [101, 110, 100, 111, 98, 106]; // 'endobj'
Util.ARRAY_START = [91]; // '['
Util.ARRAY_END = [93]; // ']'
Util.STRING_START = [40]; // '('
Util.HEX_STRING_START = [60]; // '<'
Util.STRING_END = [41]; // ')'
Util.HEX_STRING_END = [62]; // '>'
Util.R = [82]; // 'R'
Util.ANNOTS = [47, 65, 110, 110, 111, 116, 115]; // '/Annot'
Util.DICT_START = [60, 60]; // '<<'
Util.DICT_END = [62, 62]; // '>>'
Util.PAGE = [47, 80, 97, 103, 101];
Util.SIZE = [47, 83, 105, 122, 101]; // /Size
Util.ROOT = [47, 82, 111, 111, 116]; // /Root
Util.PREV = [47, 80, 114, 101, 118]; // /Prev
Util.STARTXREF = [115, 116, 97, 114, 116, 120, 114, 101, 102]; // = 'startxref'
Util.XREF = [120, 114, 101, 102]; // = 'xref'
Util.STREAM = [115, 116, 114, 101, 97, 109]; // = 'stream'


/***/ }),

/***/ "./src/writer-util.ts":
/*!****************************!*\
  !*** ./src/writer-util.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
class WriterUtil {
    /**
     * Writes a reference pointer
     *
     * <obj_id> <generation> R
     *
     * The 'R' and the preceding space is only written in case 'referenced' is true
     * */
    static writeReferencePointer(ref, referenced = false) {
        let ret = util_1.Util.convertNumberToCharArray(ref.obj);
        ret.push(util_1.Util.SPACE);
        ret = ret.concat(util_1.Util.convertNumberToCharArray(ref.generation));
        if (referenced) {
            ret.push(util_1.Util.SPACE);
            ret.push(...util_1.Util.R);
        }
        return ret;
    }
    /**
     * Adds preceding zeros (0) in front of the 'value' to match the length
     * */
    static pad(length, value) {
        value = String(value);
        let ret = [];
        for (let i = 0; i < length - value.length; ++i) {
            ret.push(48);
        }
        ret = ret.concat(util_1.Util.convertNumberToCharArray(value));
        return ret;
    }
    /**
     * Writes a nested number array
     * */
    static writeNestedNumberArray(array) {
        let ret = util_1.Util.ARRAY_START;
        for (let subArray of array) {
            ret = ret.concat(WriterUtil.writeNumberArray(subArray));
            ret.push(util_1.Util.SPACE);
        }
        ret.push(...util_1.Util.ARRAY_END);
        return ret;
    }
    /**
     * Writes a javascript number array to a PDF number array
     * */
    static writeNumberArray(array) {
        let ret = util_1.Util.ARRAY_START;
        for (let i of array) {
            ret = ret.concat(util_1.Util.convertNumberToCharArray(i));
            ret.push(util_1.Util.SPACE);
        }
        ret.push(...util_1.Util.ARRAY_END);
        return ret;
    }
    /**
     * Replaces the /Annots field in an page object
     *
     * ptr : Pointer to the page object
     * annot_array_reference : The reference to the annotation array
     * */
    static replaceAnnotsFieldInPageObject(data, page, page_ptr, annot_array_reference) {
        let ptr_objend = util_1.Util.locateSequence(util_1.Util.ENDOBJ, data, page_ptr, true);
        let complete_page_object_data = data.slice(page_ptr, ptr_objend + util_1.Util.ENDOBJ.length);
        let ret = [];
        if (page.hasAnnotsField) {
            // in this case the page object directly contains an array of references and
            // does not point to an array array object -- we replace the array of references with a pointer
            // to the reference array
            let ptr_annots = util_1.Util.locateSequence(util_1.Util.ANNOTS, complete_page_object_data, 0, true);
            ret = Array.from(complete_page_object_data.slice(0, ptr_annots + util_1.Util.ANNOTS.length));
            ret.push(util_1.Util.SPACE);
            ret = ret.concat(WriterUtil.writeReferencePointer(annot_array_reference, true));
            ret.push(util_1.Util.SPACE);
            let ptr_annots_array_end = util_1.Util.locateSequence(util_1.Util.ARRAY_END, complete_page_object_data, ptr_annots, true) + util_1.Util.ARRAY_END.length;
            ret = ret.concat(Array.from(complete_page_object_data.slice(ptr_annots_array_end, complete_page_object_data.length)));
        }
        else {
            util_1.Util.debug_printIndexed(complete_page_object_data);
            let ptr_dict_end = util_1.Util.locateSequenceReversed(util_1.Util.DICT_END, complete_page_object_data, complete_page_object_data.length - 1);
            if (-1 === ptr_dict_end)
                throw Error("Could not identify dictionary end");
            ret = Array.from(complete_page_object_data.slice(0, ptr_dict_end));
            util_1.Util.debug_printIndexed(ret);
            ret = ret.concat(util_1.Util.ANNOTS);
            ret.push(util_1.Util.SPACE);
            ret = ret.concat(WriterUtil.writeReferencePointer(annot_array_reference, true));
            ret.push(util_1.Util.SPACE);
            ret = ret.concat(Array.from(complete_page_object_data.slice(ptr_dict_end, complete_page_object_data.length)));
        }
        ret.push(util_1.Util.CR);
        ret.push(util_1.Util.LF);
        return ret;
    }
}
exports.WriterUtil = WriterUtil;


/***/ }),

/***/ "./src/writer.ts":
/*!***********************!*\
  !*** ./src/writer.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const writer_util_1 = __webpack_require__(/*! ./writer-util */ "./src/writer-util.ts");
/**
 * Creats the byte array that must be attached to the end of the document
 * */
class Writer {
    /**
     * data : The data representing the original PDF document
     * aannotations : The annotations to add to the document
     * */
    constructor(data, annotations, toDelete, parser) {
        this.data = data;
        this.annotations = annotations;
        this.toDelete = toDelete;
        this.parser = parser;
        /**
         * Holds the crossite reference table
         * */
        this.xrefs = [];
        this.data = new Uint8Array(data);
    }
    /**
     * Sorts the annotations pagewise.
     *
     * This is necessary since the annotation arrays of the sites must be extended
     * and it makes sense to do this update in one step.
     * */
    sortPageWise(annotations) {
        let pageAnnots = {};
        for (let annot of annotations) {
            if (!pageAnnots[annot.page])
                pageAnnots[annot.page] = [];
            pageAnnots[annot.page].push(annot);
        }
        return pageAnnots;
    }
    /**
     * It returns the page object either extended by a /Annots field, if this did not exist yet or with the annots field replaced by a rerference pointer
     * to an array if the page object contains the list of annotations directly
     *
     * ptr : Pointer to the page object
     * annot_array_reference : The reference to the annotation array
     * */
    adaptPageObject(page, annot_array_reference) {
        if (!page.object_id)
            throw Error("Page without object id");
        let ret = [];
        let lookupTable = this.parser.documentHistory.createObjectLookupTable();
        let page_ptr = lookupTable[page.object_id.obj];
        return writer_util_1.WriterUtil.replaceAnnotsFieldInPageObject(this.data, page, page_ptr.pointer, annot_array_reference);
    }
    /**
     * Takes the annotations of >>one<< page and derives the annotations array from it.
     * Thereby it also considers the potentially existing annotation array.
     *
     * toDelete := contains those annotations that must be deleted. It removes them from the reference array
     * and marks them as removed
     * */
    writeAnnotArray(annots, toDelete) {
        let page = annots[0].pageReference;
        if (!page)
            throw Error("Missing page reference");
        if (!page.object_id)
            throw Error("Page without object id");
        let references = page.annots;
        references = references.concat(annots.map((x) => {
            if (!x.object_id)
                throw Error("Annotation with object_id null");
            return x.object_id;
        }));
        // remove annotation references from the array that must be deleted and mark them as deleted
        references = references.filter((a) => {
            let toDel = toDelete.find((t) => t.object_id.obj === a.obj && t.object_id.generation === a.generation);
            if (toDel) {
                toDel.is_deleted = true;
                return false;
            }
            return true;
        });
        let refArray_id = page.annotsPointer;
        let page_data = [];
        if (!refArray_id) {
            refArray_id = this.parser.getFreeObjectId();
            page_data = this.adaptPageObject(page, refArray_id);
        }
        let ret = writer_util_1.WriterUtil.writeReferencePointer(refArray_id);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.OBJ);
        ret.push(Writer.SPACE);
        ret.push(Writer.ARRAY_START);
        for (let an of references) {
            ret = ret.concat(writer_util_1.WriterUtil.writeReferencePointer(an, true));
            ret.push(Writer.SPACE);
        }
        ret.push(Writer.ARRAY_END);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.ENDOBJ);
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        return { ptr: refArray_id, data: ret, pageReference: page.object_id, pageData: page_data };
    }
    /**
     * Converts a subtype to its byte representation
     * */
    convertSubtype(st) {
        switch (st) {
            case 'Text':
            case '/Text':
                return [47, 84, 101, 120, 116]; // = '/Text'
            case 'Highlight':
            case '/Highlight':
                return [47, 72, 105, 103, 104, 108, 105, 103, 104, 116]; // = '/Highlight'
            case 'Underline':
            case '/Underline':
                return [47, 85, 110, 100, 101, 114, 108, 105, 110, 101]; // = '/Underline'
            case 'Squiggly':
            case '/Squiggly':
                return [47, 83, 113, 117, 105, 103, 103, 108, 121]; // = '/Squiggly'
            case 'StrikeOut':
            case '/StrikeOut':
                return [47, 83, 116, 114, 105, 107, 101, 79, 117, 116]; // = '/StrikeOut'
            case 'Square':
            case '/Square':
                return [47, 83, 113, 117, 97, 114, 101]; // = '/Square'
            case 'Circle':
            case '/Circle':
                return [47, 67, 105, 114, 99, 108, 101]; // = '/Circle'
            case 'FreeText':
            case '/FreeText':
                return [47, 70, 114, 101, 101, 84, 101, 120, 116]; // = '/FreeText'
            case 'Polygon':
            case '/Polygon':
                return [47, 80, 111, 108, 121, 103, 111, 110]; // = '/Polygon'
            case 'PolyLine':
            case '/PolyLine':
                return [47, 80, 111, 108, 121, 76, 105, 110, 101]; // '/PolyLine
            case 'Stamp':
            case '/Stamp':
                return [47, 83, 116, 97, 109, 112]; // = '/Stamp'
            case 'Caret':
            case '/Caret':
                return [47, 67, 97, 114, 101, 116]; // = '/Caret'
            case 'Ink':
            case '/Ink':
                return [47, 73, 110, 107]; // = '/Ink'
        }
        return [];
    }
    /**
     * Writes an annotation object
     * */
    writeAnnotationObject(annot) {
        if (!annot.author)
            annot.author = "";
        if (!annot.contents)
            annot.contents = "";
        if (!annot.object_id)
            throw Error("No object_id");
        let ret = writer_util_1.WriterUtil.writeReferencePointer(annot.object_id);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.OBJ);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.DICT_START);
        ret = ret.concat(Writer.TYPE_ANNOT);
        ret.push(Writer.SPACE);
        if (annot.rect && annot.rect.length > 0) {
            ret = ret.concat(Writer.RECT);
            ret.push(Writer.SPACE);
            ret = ret.concat(writer_util_1.WriterUtil.writeNumberArray(annot.rect));
            ret.push(Writer.SPACE);
        }
        ret = ret.concat(Writer.SUBTYPE);
        ret.push(Writer.SPACE);
        ret = ret.concat(this.convertSubtype(annot.type));
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.UPDATE_DATE);
        ret.push(Writer.SPACE);
        ret = ret.concat(util_1.Util.convertStringToAscii(annot.updateDate));
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.AUTHOR);
        ret.push(Writer.SPACE);
        ret.push(Writer.BRACKET_START);
        ret = ret.concat(util_1.Util.convertStringToAscii(annot.author));
        ret.push(Writer.BRACKET_END);
        ret.push(Writer.SPACE);
        if (annot.contents) {
            ret = ret.concat(Writer.CONTENTS);
            ret.push(Writer.SPACE);
            ret.push(Writer.BRACKET_START);
            ret = ret.concat(util_1.Util.convertStringToAscii(annot.contents));
            ret.push(Writer.BRACKET_END);
            ret.push(Writer.SPACE);
        }
        ret = ret.concat(Writer.ID);
        ret.push(Writer.SPACE);
        ret = ret.concat(util_1.Util.convertStringToAscii(annot.id));
        ret.push(Writer.SPACE);
        if (annot.annotation_flag) {
            ret = ret.concat(Writer.FLAG);
            ret.push(Writer.SPACE);
            ret = ret.concat(util_1.Util.convertNumberToCharArray(annot.annotation_flag));
            ret.push(Writer.SPACE);
        }
        if (annot.color) {
            if (annot.color.r > 1)
                annot.color.r /= 255;
            if (annot.color.g > 1)
                annot.color.g /= 255;
            if (annot.color.b > 1)
                annot.color.b /= 255;
            ret.push(Writer.SPACE);
            ret = ret.concat(Writer.COLOR);
            ret.push(Writer.SPACE);
            ret = ret.concat(writer_util_1.WriterUtil.writeNumberArray([annot.color.r, annot.color.g, annot.color.b]));
            ret.push(Writer.SPACE);
        }
        let opacity = annot.opacity;
        if (opacity) {
            ret = ret.concat(Writer.OPACITY);
            ret.push(Writer.SPACE);
            ret = ret.concat(util_1.Util.convertNumberToCharArray(opacity));
            ret.push(Writer.SPACE);
        }
        if (annot.border) {
            ret.push(Writer.SPACE);
            ret = ret.concat(Writer.BORDER);
            ret.push(Writer.SPACE);
            ret = ret.concat(writer_util_1.WriterUtil.writeNumberArray([annot.border.horizontal_corner_radius, annot.border.vertical_corner_radius, annot.border.border_width]));
            ret.push(Writer.SPACE);
        }
        if (annot.defaultAppearance) {
            ret.push(Writer.SPACE);
            ret = ret.concat(Writer.DEFAULT_APPEARANCE);
            ret.push(Writer.SPACE);
            ret.push(Writer.BRACKET_START);
            ret = ret.concat(util_1.Util.convertStringToAscii(annot.defaultAppearance));
            ret.push(Writer.BRACKET_END);
            ret.push(Writer.SPACE);
        }
        if (!annot.pageReference)
            throw Error("No page reference");
        if (annot.pageReference.object_id) {
            ret.push(Writer.SPACE);
            ret = ret.concat(Writer.PAGE_REFERENCE);
            ret.push(Writer.SPACE);
            ret = ret.concat(writer_util_1.WriterUtil.writeReferencePointer(annot.pageReference.object_id, true));
            ret.push(Writer.SPACE);
        }
        if (annot.quadPoints) {
            ret = ret.concat(Writer.QUADPOINTS);
            ret.push(Writer.SPACE);
            ret = ret.concat(writer_util_1.WriterUtil.writeNumberArray(annot.quadPoints));
            ret.push(Writer.SPACE);
        }
        if (annot.vertices) {
            ret = ret.concat(Writer.VERTICES);
            ret.push(Writer.SPACE);
            ret = ret.concat(writer_util_1.WriterUtil.writeNumberArray(annot.vertices));
            ret.push(Writer.SPACE);
        }
        if (annot.stampType) {
            ret = ret.concat(Writer.NAME);
            ret.push(Writer.SPACE);
            ret = ret.concat(Writer.DRAFT);
            ret.push(Writer.SPACE);
        }
        if (annot.caretSymbol) {
            ret = ret.concat(Writer.SY);
            ret.push(Writer.SPACE);
            ret.push(Writer.P);
            ret.push(Writer.SPACE);
        }
        if (annot.inkList) {
            ret = ret.concat(Writer.INKLIST);
            ret.push(Writer.SPACE);
            ret = ret.concat(writer_util_1.WriterUtil.writeNestedNumberArray(annot.inkList));
            ret.push(Writer.SPACE);
        }
        ret = ret.concat(Writer.DICT_END);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.ENDOBJ);
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        return { ptr: annot.object_id, data: ret };
    }
    /**
     * Takes all the cross site reference table entries and extracts the consecutive sequences
     * */
    computeXrefSequences() {
        let seqs = [];
        let ordered_xrefs = this.xrefs.sort((a, b) => {
            if (a.id < b.id)
                return -1;
            if (a.id > b.id)
                return 1;
            return 0;
        });
        let seq = [ordered_xrefs[0]];
        let last_id = ordered_xrefs[0].id;
        seqs.push(seq);
        for (let i = 1; i < ordered_xrefs.length; ++i) {
            if (ordered_xrefs[i].id === last_id + 1) {
                seq.push(ordered_xrefs[i]);
            }
            else {
                seq = [ordered_xrefs[i]];
                seqs.push(seq);
            }
            last_id = ordered_xrefs[i].id;
        }
        return seqs;
    }
    /**
     * Constructs the pointers of the linked list that contains the ids of freed objects
     * */
    applyObjectFreeing(refs) {
        // write free object head
        let head = this.parser.documentHistory.createObjectLookupTable()[0];
        let last_freed_object_id = head.id;
        let freed_objs = refs.filter(r => r.free);
        freed_objs = freed_objs.sort((a, b) => {
            if (a.id < b.id)
                return -1;
            if (a.id > b.id)
                return 1;
            return 0;
        });
        let lastobj = undefined;
        for (let obj of freed_objs) {
            if (!lastobj) {
                // set first object as list header
                head.pointer = obj.id;
            }
            if (lastobj) {
                lastobj.pointer = obj.id;
            }
            lastobj = obj;
        }
        if (freed_objs.length > 0)
            freed_objs[freed_objs.length - 1].pointer = last_freed_object_id;
        refs.push(head);
        return refs;
    }
    /**
     * Writes the crossite reference table
     * */
    writeCrossSiteReferenceTable() {
        let ret = Writer.XREF;
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        this.xrefs = this.applyObjectFreeing(this.xrefs);
        let ordered_sequences = this.computeXrefSequences();
        for (let sequence of ordered_sequences) {
            let head = sequence[0];
            ret = ret.concat(util_1.Util.convertNumberToCharArray(head.id));
            ret.push(Writer.SPACE);
            ret = ret.concat(util_1.Util.convertNumberToCharArray(sequence.length));
            ret.push(Writer.CR);
            ret.push(Writer.LF);
            for (let i = 0; i < sequence.length; ++i) {
                let _ret = [];
                _ret = _ret.concat(writer_util_1.WriterUtil.pad(10, sequence[i].pointer));
                _ret.push(Writer.SPACE);
                _ret = _ret.concat(writer_util_1.WriterUtil.pad(5, sequence[i].generation));
                _ret.push(Writer.SPACE);
                if (sequence[i].free)
                    _ret.push(Writer.F);
                if (sequence[i].update)
                    _ret.push(Writer.N);
                _ret.push(Writer.CR);
                _ret.push(Writer.LF);
                if (_ret.length < 20)
                    throw Error("XRef entry < 20 bytes");
                ret = ret.concat(_ret);
            }
        }
        return ret;
    }
    /**
     * Writes the trailer
     * */
    writeTrailer(posXref) {
        let ret = Writer.TRAILER;
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        ret = ret.concat(Writer.DICT_START);
        ret = ret.concat(Writer.SIZE);
        ret.push(Writer.SPACE);
        ret = ret.concat(util_1.Util.convertNumberToCharArray(this.parser.documentHistory.trailerSize));
        ret.push(Writer.SPACE);
        let trailer = this.parser.documentHistory.getRecentUpdate();
        ret = ret.concat(Writer.ROOT);
        ret.push(Writer.SPACE);
        if (!trailer.root)
            throw Error("No root object in trailer, although this is an cross reference table document");
        ret = ret.concat(writer_util_1.WriterUtil.writeReferencePointer(trailer.root, true));
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.PREV);
        ret.push(Writer.SPACE);
        ret = ret.concat(util_1.Util.convertNumberToCharArray(this.parser.documentHistory.getRecentUpdate().start_pointer));
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.DICT_END);
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        ret = ret.concat(Writer.STARTXREF);
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        ret = ret.concat(util_1.Util.convertNumberToCharArray(posXref));
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        ret = ret.concat(Writer.EOF);
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        return ret;
    }
    /**
     * Writes the annations at the end of the PDF byte representation and returns
     * the byte array
     * */
    write() {
        let pageWiseSorted = this.sortPageWise(this.annotations);
        let ptr = this.data.length;
        let new_data = [];
        // Fix case that there is no linebreak after the end of the file
        if (this.data[ptr - 1] === 70) { // 70 = 'F' (from [%%EO]F
            new_data.push(Writer.CR);
            new_data.push(Writer.LF);
            ptr += 2;
        }
        for (let key in pageWiseSorted) {
            let pageAnnots = pageWiseSorted[key];
            // write the array referencing to annotations of a certain page
            // it also removes references of annotations that must be deleted
            let annot_array = this.writeAnnotArray(pageAnnots, this.toDelete);
            this.xrefs.push({
                id: annot_array.ptr.obj,
                pointer: ptr,
                generation: annot_array.ptr.generation,
                free: false,
                update: true
            });
            new_data = new_data.concat(annot_array.data);
            ptr += annot_array.data.length;
            // add adapted page object if it exists -- In the case the page had no annotation yet there exists
            // no such array referring to its annotations. A pointer to such an array must be added to the
            // page object. If this was done the `pageData` paramater is set and contains the adapted page object
            if (annot_array.pageData.length > 0) {
                this.xrefs.push({
                    id: annot_array.pageReference.obj,
                    pointer: ptr,
                    generation: annot_array.pageReference.generation,
                    free: false,
                    update: true
                });
                new_data = new_data.concat(annot_array.pageData);
                ptr += annot_array.pageData.length;
            }
            // writes the actual annotation object
            for (let annot of pageAnnots) {
                let annot_obj = this.writeAnnotationObject(annot);
                this.xrefs.push({
                    id: annot_obj.ptr.obj,
                    pointer: ptr,
                    generation: annot_obj.ptr.generation,
                    free: false,
                    update: true
                });
                new_data = new_data.concat(annot_obj.data);
                ptr += annot_obj.data.length;
            }
        }
        // take all annotations that are not deleted yet
        let _toDelete = this.toDelete.filter((t) => !t.is_deleted);
        let pageWiseSortedToDelete = this.sortPageWise(_toDelete);
        // adapt the remaining annotation reference tables
        for (let key in pageWiseSortedToDelete) {
            let del_data = this.updatePageAnnotationReferenceArray(pageWiseSortedToDelete[key]);
            this.xrefs.push({
                id: del_data.ptr.obj,
                pointer: ptr,
                generation: del_data.ptr.generation,
                free: false,
                update: true
            });
            new_data = new_data.concat(del_data.data);
            ptr += del_data.data.length;
        }
        // at this point all references to annotation objects in pages should be removed and we can free
        // the annotation object ids
        for (let toDel of this.toDelete) {
            if (!toDel.object_id)
                continue;
            this.xrefs.push({
                id: toDel.object_id.obj,
                pointer: -1,
                generation: toDel.object_id.generation + 1,
                free: true,
                update: false
            });
        }
        let crtable = this.writeCrossSiteReferenceTable();
        new_data = new_data.concat(crtable);
        let trailer = this.writeTrailer(ptr);
        new_data = new_data.concat(trailer);
        let new_data_array = new Uint8Array(new_data);
        let ret_array = new Uint8Array(this.data.length + new_data_array.length);
        ret_array.set(this.data);
        ret_array.set(new_data, this.data.length);
        return ret_array;
    }
    /**
     * Removes the given annotation
     * */
    updatePageAnnotationReferenceArray(toDelete) {
        let page = toDelete[0].pageReference;
        if (!page)
            throw Error("Missing page reference");
        if (!page.object_id) {
            throw Error("Page without object id");
        }
        let references = page.annots;
        // remove annotation references from the array that must be deleted and mark them as deleted
        references = references.filter((a) => {
            let toDel = toDelete.find((t) => t.object_id.obj === a.obj && t.object_id.generation === a.generation);
            if (toDel) {
                toDel.is_deleted = true;
                return false;
            }
            return true;
        });
        let refArray_id = page.annotsPointer;
        let ret = writer_util_1.WriterUtil.writeReferencePointer(refArray_id);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.OBJ);
        ret.push(Writer.SPACE);
        ret.push(Writer.ARRAY_START);
        for (let an of references) {
            ret = ret.concat(writer_util_1.WriterUtil.writeReferencePointer(an, true));
            ret.push(Writer.SPACE);
        }
        ret.push(Writer.ARRAY_END);
        ret.push(Writer.SPACE);
        ret = ret.concat(Writer.ENDOBJ);
        ret.push(Writer.CR);
        ret.push(Writer.LF);
        return { ptr: refArray_id, data: ret };
    }
}
exports.Writer = Writer;
Writer.N = 110;
Writer.F = 102;
Writer.SPACE = 32;
Writer.CR = 13;
Writer.LF = 10;
Writer.OBJ = [111, 98, 106];
Writer.ENDOBJ = [101, 110, 100, 111, 98, 106];
Writer.ARRAY_START = 91;
Writer.ARRAY_END = 93;
Writer.DICT_START = [60, 60];
Writer.DICT_END = [62, 62];
Writer.TYPE_ANNOT = [47, 84, 121, 112, 101, Writer.SPACE, 47, 65, 110, 110, 111, 116];
Writer.RECT = [47, 82, 101, 99, 116];
Writer.SUBTYPE = [47, 83, 117, 98, 116, 121, 112, 101];
Writer.UPDATE_DATE = [47, 77]; // = '/M'
Writer.AUTHOR = [47, 84]; // = '/T'
Writer.CONTENTS = [47, 67, 111, 110, 116, 101, 110, 116, 115]; // = '/Contents'
Writer.BRACKET_START = 40;
Writer.BRACKET_END = 41;
Writer.FLAG = [47, 70]; // = '/F'
Writer.ID = [47, 78, 77]; // = '/NM'
Writer.COLOR = [47, 67]; // = '/C'
Writer.OPACITY = [47, 67, 65]; // = '/CA'
Writer.BORDER = [47, 66, 111, 114, 100, 101, 114]; // = '/Border'
Writer.PAGE_REFERENCE = [47, 80]; // = '/P'
Writer.DEFAULT_APPEARANCE = [47, 68, 65]; // = '/DA'
Writer.INKLIST = [47, 73, 110, 107, 76, 105, 115, 116]; // = '/InkList'
Writer.TRAILER = [116, 114, 97, 105, 108, 101, 114]; // = 'trailer'
Writer.SIZE = [47, 83, 105, 122, 101]; // = '/Size'
Writer.ROOT = [47, 82, 111, 111, 116]; // = '/Root'
Writer.PREV = [47, 80, 114, 101, 118]; // ='/Prev'
Writer.STARTXREF = [115, 116, 97, 114, 116, 120, 114, 101, 102]; // = 'startxref'
Writer.EOF = [37, 37, 69, 79, 70]; // = '%%EOF'
Writer.XREF = [120, 114, 101, 102]; // = 'xref'
Writer.QUADPOINTS = [47, 81, 117, 97, 100, 80, 111, 105, 110, 116, 115]; // = '/QuadPoints'
Writer.VERTICES = [47, 86, 101, 114, 116, 105, 99, 101, 115]; // = '/Vertices'
Writer.NAME = [47, 78, 97, 109, 101]; // = '/Name'
Writer.DRAFT = [47, 68, 114, 97, 102, 116]; // = '/Draft'
Writer.SY = [47, 83, 121]; // = '/Sy'
Writer.P = 80;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcGFrby9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi9kZWZsYXRlLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL2luZmxhdGUuanMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3V0aWxzL3N0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi9hZGxlcjMyLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvY3JjMzIuanMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi9kZWZsYXRlLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvZ3poZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi9pbmZmYXN0LmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvaW5mbGF0ZS5qcyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL2luZnRyZWVzLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi90cmVlcy5qcyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL3pzdHJlYW0uanMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL2Fubm90YXRpb24udHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvYXJyYXktdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9kb2N1bWVudC1oaXN0b3J5LnRzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL29iamVjdC11dGlsLnRzIiwid2VicGFjazovL3BkZkFubm90YXRlLy4vc3JjL3BhcnNlci50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy9zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vcGRmQW5ub3RhdGUvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXItdXRpbC50cyIsIndlYnBhY2s6Ly9wZGZBbm5vdGF0ZS8uL3NyYy93cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixjQUFjO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtFQUFrRTs7QUFFdkY7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGFBQWE7O0FBRWIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FOztBQUVuRTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsYUFBYTs7QUFFYjs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixPQUFPLEVBQUU7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLG1CQUFtQjs7QUFFbkI7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixPQUFPLEVBQUU7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9FQUFvRTtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsMkJBQTJCO0FBQzNCLHVCQUF1Qjs7QUFFdkIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1COztBQUVuQixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQixvQkFBb0I7QUFDcEIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQixvQkFBb0I7O0FBRXBCO0FBQ0E7O0FBRUEsc0JBQXNCOztBQUV0Qjs7QUFFQTs7QUFFQSwyQ0FBMkM7QUFDM0MsNkNBQTZDO0FBQzdDLDRDQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQiwrQ0FBK0M7QUFDL0M7O0FBRUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQixrQkFBa0I7OztBQUdsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSw2QkFBNkIsdUJBQXVCO0FBQ3BELDhCQUE4Qix1QkFBdUI7QUFDckQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckIsc0NBQXNDOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1QkFBdUI7QUFDcEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtB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QUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLGNBQWM7QUFDckUsV0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFlBQVk7QUFDckQsV0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFlBQVk7QUFDckQsV0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFdBQVc7QUFDcEQsZ0JBQVMsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUMsZ0JBQWdCO0FBQ25GLFVBQUcsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBQyxZQUFZO0FBRWpELFdBQUksR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFdBQVc7QUFFakQsaUJBQVUsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxrQkFBa0I7QUFDN0YsZUFBUSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxnQkFBZ0I7QUFDaEYsV0FBSSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDLFlBQVk7QUFDcEQsWUFBSyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQyxhQUFhO0FBRTNELFNBQUUsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUMsVUFBVTtBQUN2QyxRQUFDLEdBQVcsRUFBRSIsImZpbGUiOiJwZGZBbm5vdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicGRmQW5ub3RhdGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGRmQW5ub3RhdGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGRmQW5ub3RhdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gVG9wIGxldmVsIGZpbGUgaXMganVzdCBhIG1peGluIG9mIHN1Ym1vZHVsZXMgJiBjb25zdGFudHNcbid1c2Ugc3RyaWN0JztcblxudmFyIGFzc2lnbiAgICA9IHJlcXVpcmUoJy4vbGliL3V0aWxzL2NvbW1vbicpLmFzc2lnbjtcblxudmFyIGRlZmxhdGUgICA9IHJlcXVpcmUoJy4vbGliL2RlZmxhdGUnKTtcbnZhciBpbmZsYXRlICAgPSByZXF1aXJlKCcuL2xpYi9pbmZsYXRlJyk7XG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9saWIvemxpYi9jb25zdGFudHMnKTtcblxudmFyIHBha28gPSB7fTtcblxuYXNzaWduKHBha28sIGRlZmxhdGUsIGluZmxhdGUsIGNvbnN0YW50cyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFrbztcbiIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgemxpYl9kZWZsYXRlID0gcmVxdWlyZSgnLi96bGliL2RlZmxhdGUnKTtcbnZhciB1dGlscyAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2NvbW1vbicpO1xudmFyIHN0cmluZ3MgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvc3RyaW5ncycpO1xudmFyIG1zZyAgICAgICAgICA9IHJlcXVpcmUoJy4vemxpYi9tZXNzYWdlcycpO1xudmFyIFpTdHJlYW0gICAgICA9IHJlcXVpcmUoJy4vemxpYi96c3RyZWFtJyk7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qIFB1YmxpYyBjb25zdGFudHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG52YXIgWl9OT19GTFVTSCAgICAgID0gMDtcbnZhciBaX0ZJTklTSCAgICAgICAgPSA0O1xuXG52YXIgWl9PSyAgICAgICAgICAgID0gMDtcbnZhciBaX1NUUkVBTV9FTkQgICAgPSAxO1xudmFyIFpfU1lOQ19GTFVTSCAgICA9IDI7XG5cbnZhciBaX0RFRkFVTFRfQ09NUFJFU1NJT04gPSAtMTtcblxudmFyIFpfREVGQVVMVF9TVFJBVEVHWSAgICA9IDA7XG5cbnZhciBaX0RFRkxBVEVEICA9IDg7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxuLyoqXG4gKiBjbGFzcyBEZWZsYXRlXG4gKlxuICogR2VuZXJpYyBKUy1zdHlsZSB3cmFwcGVyIGZvciB6bGliIGNhbGxzLiBJZiB5b3UgZG9uJ3QgbmVlZFxuICogc3RyZWFtaW5nIGJlaGF2aW91ciAtIHVzZSBtb3JlIHNpbXBsZSBmdW5jdGlvbnM6IFtbZGVmbGF0ZV1dLFxuICogW1tkZWZsYXRlUmF3XV0gYW5kIFtbZ3ppcF1dLlxuICoqL1xuXG4vKiBpbnRlcm5hbFxuICogRGVmbGF0ZS5jaHVua3MgLT4gQXJyYXlcbiAqXG4gKiBDaHVua3Mgb2Ygb3V0cHV0IGRhdGEsIGlmIFtbRGVmbGF0ZSNvbkRhdGFdXSBub3Qgb3ZlcnJpZGRlbi5cbiAqKi9cblxuLyoqXG4gKiBEZWZsYXRlLnJlc3VsdCAtPiBVaW50OEFycmF5fEFycmF5XG4gKlxuICogQ29tcHJlc3NlZCByZXN1bHQsIGdlbmVyYXRlZCBieSBkZWZhdWx0IFtbRGVmbGF0ZSNvbkRhdGFdXVxuICogYW5kIFtbRGVmbGF0ZSNvbkVuZF1dIGhhbmRsZXJzLiBGaWxsZWQgYWZ0ZXIgeW91IHB1c2ggbGFzdCBjaHVua1xuICogKGNhbGwgW1tEZWZsYXRlI3B1c2hdXSB3aXRoIGBaX0ZJTklTSGAgLyBgdHJ1ZWAgcGFyYW0pICBvciBpZiB5b3VcbiAqIHB1c2ggYSBjaHVuayB3aXRoIGV4cGxpY2l0IGZsdXNoIChjYWxsIFtbRGVmbGF0ZSNwdXNoXV0gd2l0aFxuICogYFpfU1lOQ19GTFVTSGAgcGFyYW0pLlxuICoqL1xuXG4vKipcbiAqIERlZmxhdGUuZXJyIC0+IE51bWJlclxuICpcbiAqIEVycm9yIGNvZGUgYWZ0ZXIgZGVmbGF0ZSBmaW5pc2hlZC4gMCAoWl9PSykgb24gc3VjY2Vzcy5cbiAqIFlvdSB3aWxsIG5vdCBuZWVkIGl0IGluIHJlYWwgbGlmZSwgYmVjYXVzZSBkZWZsYXRlIGVycm9yc1xuICogYXJlIHBvc3NpYmxlIG9ubHkgb24gd3Jvbmcgb3B0aW9ucyBvciBiYWQgYG9uRGF0YWAgLyBgb25FbmRgXG4gKiBjdXN0b20gaGFuZGxlcnMuXG4gKiovXG5cbi8qKlxuICogRGVmbGF0ZS5tc2cgLT4gU3RyaW5nXG4gKlxuICogRXJyb3IgbWVzc2FnZSwgaWYgW1tEZWZsYXRlLmVycl1dICE9IDBcbiAqKi9cblxuXG4vKipcbiAqIG5ldyBEZWZsYXRlKG9wdGlvbnMpXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgZGVmbGF0ZSBvcHRpb25zLlxuICpcbiAqIENyZWF0ZXMgbmV3IGRlZmxhdG9yIGluc3RhbmNlIHdpdGggc3BlY2lmaWVkIHBhcmFtcy4gVGhyb3dzIGV4Y2VwdGlvblxuICogb24gYmFkIHBhcmFtcy4gU3VwcG9ydGVkIG9wdGlvbnM6XG4gKlxuICogLSBgbGV2ZWxgXG4gKiAtIGB3aW5kb3dCaXRzYFxuICogLSBgbWVtTGV2ZWxgXG4gKiAtIGBzdHJhdGVneWBcbiAqIC0gYGRpY3Rpb25hcnlgXG4gKlxuICogW2h0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZF0oaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkKVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhlc2UuXG4gKlxuICogQWRkaXRpb25hbCBvcHRpb25zLCBmb3IgaW50ZXJuYWwgbmVlZHM6XG4gKlxuICogLSBgY2h1bmtTaXplYCAtIHNpemUgb2YgZ2VuZXJhdGVkIGRhdGEgY2h1bmtzICgxNksgYnkgZGVmYXVsdClcbiAqIC0gYHJhd2AgKEJvb2xlYW4pIC0gZG8gcmF3IGRlZmxhdGVcbiAqIC0gYGd6aXBgIChCb29sZWFuKSAtIGNyZWF0ZSBnemlwIHdyYXBwZXJcbiAqIC0gYHRvYCAoU3RyaW5nKSAtIGlmIGVxdWFsIHRvICdzdHJpbmcnLCB0aGVuIHJlc3VsdCB3aWxsIGJlIFwiYmluYXJ5IHN0cmluZ1wiXG4gKiAgICAoZWFjaCBjaGFyIGNvZGUgWzAuLjI1NV0pXG4gKiAtIGBoZWFkZXJgIChPYmplY3QpIC0gY3VzdG9tIGhlYWRlciBmb3IgZ3ppcFxuICogICAtIGB0ZXh0YCAoQm9vbGVhbikgLSB0cnVlIGlmIGNvbXByZXNzZWQgZGF0YSBiZWxpZXZlZCB0byBiZSB0ZXh0XG4gKiAgIC0gYHRpbWVgIChOdW1iZXIpIC0gbW9kaWZpY2F0aW9uIHRpbWUsIHVuaXggdGltZXN0YW1wXG4gKiAgIC0gYG9zYCAoTnVtYmVyKSAtIG9wZXJhdGlvbiBzeXN0ZW0gY29kZVxuICogICAtIGBleHRyYWAgKEFycmF5KSAtIGFycmF5IG9mIGJ5dGVzIHdpdGggZXh0cmEgZGF0YSAobWF4IDY1NTM2KVxuICogICAtIGBuYW1lYCAoU3RyaW5nKSAtIGZpbGUgbmFtZSAoYmluYXJ5IHN0cmluZylcbiAqICAgLSBgY29tbWVudGAgKFN0cmluZykgLSBjb21tZW50IChiaW5hcnkgc3RyaW5nKVxuICogICAtIGBoY3JjYCAoQm9vbGVhbikgLSB0cnVlIGlmIGhlYWRlciBjcmMgc2hvdWxkIGJlIGFkZGVkXG4gKlxuICogIyMjIyMgRXhhbXBsZTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgcGFrbyA9IHJlcXVpcmUoJ3Bha28nKVxuICogICAsIGNodW5rMSA9IFVpbnQ4QXJyYXkoWzEsMiwzLDQsNSw2LDcsOCw5XSlcbiAqICAgLCBjaHVuazIgPSBVaW50OEFycmF5KFsxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOV0pO1xuICpcbiAqIHZhciBkZWZsYXRlID0gbmV3IHBha28uRGVmbGF0ZSh7IGxldmVsOiAzfSk7XG4gKlxuICogZGVmbGF0ZS5wdXNoKGNodW5rMSwgZmFsc2UpO1xuICogZGVmbGF0ZS5wdXNoKGNodW5rMiwgdHJ1ZSk7ICAvLyB0cnVlIC0+IGxhc3QgY2h1bmtcbiAqXG4gKiBpZiAoZGVmbGF0ZS5lcnIpIHsgdGhyb3cgbmV3IEVycm9yKGRlZmxhdGUuZXJyKTsgfVxuICpcbiAqIGNvbnNvbGUubG9nKGRlZmxhdGUucmVzdWx0KTtcbiAqIGBgYFxuICoqL1xuZnVuY3Rpb24gRGVmbGF0ZShvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEZWZsYXRlKSkgcmV0dXJuIG5ldyBEZWZsYXRlKG9wdGlvbnMpO1xuXG4gIHRoaXMub3B0aW9ucyA9IHV0aWxzLmFzc2lnbih7XG4gICAgbGV2ZWw6IFpfREVGQVVMVF9DT01QUkVTU0lPTixcbiAgICBtZXRob2Q6IFpfREVGTEFURUQsXG4gICAgY2h1bmtTaXplOiAxNjM4NCxcbiAgICB3aW5kb3dCaXRzOiAxNSxcbiAgICBtZW1MZXZlbDogOCxcbiAgICBzdHJhdGVneTogWl9ERUZBVUxUX1NUUkFURUdZLFxuICAgIHRvOiAnJ1xuICB9LCBvcHRpb25zIHx8IHt9KTtcblxuICB2YXIgb3B0ID0gdGhpcy5vcHRpb25zO1xuXG4gIGlmIChvcHQucmF3ICYmIChvcHQud2luZG93Qml0cyA+IDApKSB7XG4gICAgb3B0LndpbmRvd0JpdHMgPSAtb3B0LndpbmRvd0JpdHM7XG4gIH1cblxuICBlbHNlIGlmIChvcHQuZ3ppcCAmJiAob3B0LndpbmRvd0JpdHMgPiAwKSAmJiAob3B0LndpbmRvd0JpdHMgPCAxNikpIHtcbiAgICBvcHQud2luZG93Qml0cyArPSAxNjtcbiAgfVxuXG4gIHRoaXMuZXJyICAgID0gMDsgICAgICAvLyBlcnJvciBjb2RlLCBpZiBoYXBwZW5zICgwID0gWl9PSylcbiAgdGhpcy5tc2cgICAgPSAnJzsgICAgIC8vIGVycm9yIG1lc3NhZ2VcbiAgdGhpcy5lbmRlZCAgPSBmYWxzZTsgIC8vIHVzZWQgdG8gYXZvaWQgbXVsdGlwbGUgb25FbmQoKSBjYWxsc1xuICB0aGlzLmNodW5rcyA9IFtdOyAgICAgLy8gY2h1bmtzIG9mIGNvbXByZXNzZWQgZGF0YVxuXG4gIHRoaXMuc3RybSA9IG5ldyBaU3RyZWFtKCk7XG4gIHRoaXMuc3RybS5hdmFpbF9vdXQgPSAwO1xuXG4gIHZhciBzdGF0dXMgPSB6bGliX2RlZmxhdGUuZGVmbGF0ZUluaXQyKFxuICAgIHRoaXMuc3RybSxcbiAgICBvcHQubGV2ZWwsXG4gICAgb3B0Lm1ldGhvZCxcbiAgICBvcHQud2luZG93Qml0cyxcbiAgICBvcHQubWVtTGV2ZWwsXG4gICAgb3B0LnN0cmF0ZWd5XG4gICk7XG5cbiAgaWYgKHN0YXR1cyAhPT0gWl9PSykge1xuICAgIHRocm93IG5ldyBFcnJvcihtc2dbc3RhdHVzXSk7XG4gIH1cblxuICBpZiAob3B0LmhlYWRlcikge1xuICAgIHpsaWJfZGVmbGF0ZS5kZWZsYXRlU2V0SGVhZGVyKHRoaXMuc3RybSwgb3B0LmhlYWRlcik7XG4gIH1cblxuICBpZiAob3B0LmRpY3Rpb25hcnkpIHtcbiAgICB2YXIgZGljdDtcbiAgICAvLyBDb252ZXJ0IGRhdGEgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBvcHQuZGljdGlvbmFyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIElmIHdlIG5lZWQgdG8gY29tcHJlc3MgdGV4dCwgY2hhbmdlIGVuY29kaW5nIHRvIHV0ZjguXG4gICAgICBkaWN0ID0gc3RyaW5ncy5zdHJpbmcyYnVmKG9wdC5kaWN0aW9uYXJ5KTtcbiAgICB9IGVsc2UgaWYgKHRvU3RyaW5nLmNhbGwob3B0LmRpY3Rpb25hcnkpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG4gICAgICBkaWN0ID0gbmV3IFVpbnQ4QXJyYXkob3B0LmRpY3Rpb25hcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaWN0ID0gb3B0LmRpY3Rpb25hcnk7XG4gICAgfVxuXG4gICAgc3RhdHVzID0gemxpYl9kZWZsYXRlLmRlZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSwgZGljdCk7XG5cbiAgICBpZiAoc3RhdHVzICE9PSBaX09LKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobXNnW3N0YXR1c10pO1xuICAgIH1cblxuICAgIHRoaXMuX2RpY3Rfc2V0ID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIERlZmxhdGUjcHVzaChkYXRhWywgbW9kZV0pIC0+IEJvb2xlYW5cbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheXxBcnJheUJ1ZmZlcnxTdHJpbmcpOiBpbnB1dCBkYXRhLiBTdHJpbmdzIHdpbGwgYmVcbiAqICAgY29udmVydGVkIHRvIHV0ZjggYnl0ZSBzZXF1ZW5jZS5cbiAqIC0gbW9kZSAoTnVtYmVyfEJvb2xlYW4pOiAwLi42IGZvciBjb3JyZXNwb25kaW5nIFpfTk9fRkxVU0guLlpfVFJFRSBtb2Rlcy5cbiAqICAgU2VlIGNvbnN0YW50cy4gU2tpcHBlZCBvciBgZmFsc2VgIG1lYW5zIFpfTk9fRkxVU0gsIGB0cnVlYCBtZWFucyBaX0ZJTklTSC5cbiAqXG4gKiBTZW5kcyBpbnB1dCBkYXRhIHRvIGRlZmxhdGUgcGlwZSwgZ2VuZXJhdGluZyBbW0RlZmxhdGUjb25EYXRhXV0gY2FsbHMgd2l0aFxuICogbmV3IGNvbXByZXNzZWQgY2h1bmtzLiBSZXR1cm5zIGB0cnVlYCBvbiBzdWNjZXNzLiBUaGUgbGFzdCBkYXRhIGJsb2NrIG11c3QgaGF2ZVxuICogbW9kZSBaX0ZJTklTSCAob3IgYHRydWVgKS4gVGhhdCB3aWxsIGZsdXNoIGludGVybmFsIHBlbmRpbmcgYnVmZmVycyBhbmQgY2FsbFxuICogW1tEZWZsYXRlI29uRW5kXV0uIEZvciBpbnRlcmltIGV4cGxpY2l0IGZsdXNoZXMgKHdpdGhvdXQgZW5kaW5nIHRoZSBzdHJlYW0pIHlvdVxuICogY2FuIHVzZSBtb2RlIFpfU1lOQ19GTFVTSCwga2VlcGluZyB0aGUgY29tcHJlc3Npb24gY29udGV4dC5cbiAqXG4gKiBPbiBmYWlsIGNhbGwgW1tEZWZsYXRlI29uRW5kXV0gd2l0aCBlcnJvciBjb2RlIGFuZCByZXR1cm4gZmFsc2UuXG4gKlxuICogV2Ugc3Ryb25nbHkgcmVjb21tZW5kIHRvIHVzZSBgVWludDhBcnJheWAgb24gaW5wdXQgZm9yIGJlc3Qgc3BlZWQgKG91dHB1dFxuICogYXJyYXkgZm9ybWF0IGlzIGRldGVjdGVkIGF1dG9tYXRpY2FsbHkpLiBBbHNvLCBkb24ndCBza2lwIGxhc3QgcGFyYW0gYW5kIGFsd2F5c1xuICogdXNlIHRoZSBzYW1lIHR5cGUgaW4geW91ciBjb2RlIChib29sZWFuIG9yIG51bWJlcikuIFRoYXQgd2lsbCBpbXByb3ZlIEpTIHNwZWVkLlxuICpcbiAqIEZvciByZWd1bGFyIGBBcnJheWAtcyBtYWtlIHN1cmUgYWxsIGVsZW1lbnRzIGFyZSBbMC4uMjU1XS5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogcHVzaChjaHVuaywgZmFsc2UpOyAvLyBwdXNoIG9uZSBvZiBkYXRhIGNodW5rc1xuICogLi4uXG4gKiBwdXNoKGNodW5rLCB0cnVlKTsgIC8vIHB1c2ggbGFzdCBjaHVua1xuICogYGBgXG4gKiovXG5EZWZsYXRlLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGRhdGEsIG1vZGUpIHtcbiAgdmFyIHN0cm0gPSB0aGlzLnN0cm07XG4gIHZhciBjaHVua1NpemUgPSB0aGlzLm9wdGlvbnMuY2h1bmtTaXplO1xuICB2YXIgc3RhdHVzLCBfbW9kZTtcblxuICBpZiAodGhpcy5lbmRlZCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBfbW9kZSA9IChtb2RlID09PSB+fm1vZGUpID8gbW9kZSA6ICgobW9kZSA9PT0gdHJ1ZSkgPyBaX0ZJTklTSCA6IFpfTk9fRkxVU0gpO1xuXG4gIC8vIENvbnZlcnQgZGF0YSBpZiBuZWVkZWRcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIC8vIElmIHdlIG5lZWQgdG8gY29tcHJlc3MgdGV4dCwgY2hhbmdlIGVuY29kaW5nIHRvIHV0ZjguXG4gICAgc3RybS5pbnB1dCA9IHN0cmluZ3Muc3RyaW5nMmJ1ZihkYXRhKTtcbiAgfSBlbHNlIGlmICh0b1N0cmluZy5jYWxsKGRhdGEpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG4gICAgc3RybS5pbnB1dCA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHN0cm0uaW5wdXQgPSBkYXRhO1xuICB9XG5cbiAgc3RybS5uZXh0X2luID0gMDtcbiAgc3RybS5hdmFpbF9pbiA9IHN0cm0uaW5wdXQubGVuZ3RoO1xuXG4gIGRvIHtcbiAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHN0cm0ub3V0cHV0ID0gbmV3IHV0aWxzLkJ1ZjgoY2h1bmtTaXplKTtcbiAgICAgIHN0cm0ubmV4dF9vdXQgPSAwO1xuICAgICAgc3RybS5hdmFpbF9vdXQgPSBjaHVua1NpemU7XG4gICAgfVxuICAgIHN0YXR1cyA9IHpsaWJfZGVmbGF0ZS5kZWZsYXRlKHN0cm0sIF9tb2RlKTsgICAgLyogbm8gYmFkIHJldHVybiB2YWx1ZSAqL1xuXG4gICAgaWYgKHN0YXR1cyAhPT0gWl9TVFJFQU1fRU5EICYmIHN0YXR1cyAhPT0gWl9PSykge1xuICAgICAgdGhpcy5vbkVuZChzdGF0dXMpO1xuICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCB8fCAoc3RybS5hdmFpbF9pbiA9PT0gMCAmJiAoX21vZGUgPT09IFpfRklOSVNIIHx8IF9tb2RlID09PSBaX1NZTkNfRkxVU0gpKSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy50byA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5vbkRhdGEoc3RyaW5ncy5idWYyYmluc3RyaW5nKHV0aWxzLnNocmlua0J1ZihzdHJtLm91dHB1dCwgc3RybS5uZXh0X291dCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25EYXRhKHV0aWxzLnNocmlua0J1ZihzdHJtLm91dHB1dCwgc3RybS5uZXh0X291dCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSB3aGlsZSAoKHN0cm0uYXZhaWxfaW4gPiAwIHx8IHN0cm0uYXZhaWxfb3V0ID09PSAwKSAmJiBzdGF0dXMgIT09IFpfU1RSRUFNX0VORCk7XG5cbiAgLy8gRmluYWxpemUgb24gdGhlIGxhc3QgY2h1bmsuXG4gIGlmIChfbW9kZSA9PT0gWl9GSU5JU0gpIHtcbiAgICBzdGF0dXMgPSB6bGliX2RlZmxhdGUuZGVmbGF0ZUVuZCh0aGlzLnN0cm0pO1xuICAgIHRoaXMub25FbmQoc3RhdHVzKTtcbiAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gc3RhdHVzID09PSBaX09LO1xuICB9XG5cbiAgLy8gY2FsbGJhY2sgaW50ZXJpbSByZXN1bHRzIGlmIFpfU1lOQ19GTFVTSC5cbiAgaWYgKF9tb2RlID09PSBaX1NZTkNfRkxVU0gpIHtcbiAgICB0aGlzLm9uRW5kKFpfT0spO1xuICAgIHN0cm0uYXZhaWxfb3V0ID0gMDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuXG4vKipcbiAqIERlZmxhdGUjb25EYXRhKGNodW5rKSAtPiBWb2lkXG4gKiAtIGNodW5rIChVaW50OEFycmF5fEFycmF5fFN0cmluZyk6IG91dHB1dCBkYXRhLiBUeXBlIG9mIGFycmF5IGRlcGVuZHNcbiAqICAgb24ganMgZW5naW5lIHN1cHBvcnQuIFdoZW4gc3RyaW5nIG91dHB1dCByZXF1ZXN0ZWQsIGVhY2ggY2h1bmtcbiAqICAgd2lsbCBiZSBzdHJpbmcuXG4gKlxuICogQnkgZGVmYXVsdCwgc3RvcmVzIGRhdGEgYmxvY2tzIGluIGBjaHVua3NbXWAgcHJvcGVydHkgYW5kIGdsdWVcbiAqIHRob3NlIGluIGBvbkVuZGAuIE92ZXJyaWRlIHRoaXMgaGFuZGxlciwgaWYgeW91IG5lZWQgYW5vdGhlciBiZWhhdmlvdXIuXG4gKiovXG5EZWZsYXRlLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgdGhpcy5jaHVua3MucHVzaChjaHVuayk7XG59O1xuXG5cbi8qKlxuICogRGVmbGF0ZSNvbkVuZChzdGF0dXMpIC0+IFZvaWRcbiAqIC0gc3RhdHVzIChOdW1iZXIpOiBkZWZsYXRlIHN0YXR1cy4gMCAoWl9PSykgb24gc3VjY2VzcyxcbiAqICAgb3RoZXIgaWYgbm90LlxuICpcbiAqIENhbGxlZCBvbmNlIGFmdGVyIHlvdSB0ZWxsIGRlZmxhdGUgdGhhdCB0aGUgaW5wdXQgc3RyZWFtIGlzXG4gKiBjb21wbGV0ZSAoWl9GSU5JU0gpIG9yIHNob3VsZCBiZSBmbHVzaGVkIChaX1NZTkNfRkxVU0gpXG4gKiBvciBpZiBhbiBlcnJvciBoYXBwZW5lZC4gQnkgZGVmYXVsdCAtIGpvaW4gY29sbGVjdGVkIGNodW5rcyxcbiAqIGZyZWUgbWVtb3J5IGFuZCBmaWxsIGByZXN1bHRzYCAvIGBlcnJgIHByb3BlcnRpZXMuXG4gKiovXG5EZWZsYXRlLnByb3RvdHlwZS5vbkVuZCA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgLy8gT24gc3VjY2VzcyAtIGpvaW5cbiAgaWYgKHN0YXR1cyA9PT0gWl9PSykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuY2h1bmtzLmpvaW4oJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc3VsdCA9IHV0aWxzLmZsYXR0ZW5DaHVua3ModGhpcy5jaHVua3MpO1xuICAgIH1cbiAgfVxuICB0aGlzLmNodW5rcyA9IFtdO1xuICB0aGlzLmVyciA9IHN0YXR1cztcbiAgdGhpcy5tc2cgPSB0aGlzLnN0cm0ubXNnO1xufTtcblxuXG4vKipcbiAqIGRlZmxhdGUoZGF0YVssIG9wdGlvbnNdKSAtPiBVaW50OEFycmF5fEFycmF5fFN0cmluZ1xuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5fFN0cmluZyk6IGlucHV0IGRhdGEgdG8gY29tcHJlc3MuXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgZGVmbGF0ZSBvcHRpb25zLlxuICpcbiAqIENvbXByZXNzIGBkYXRhYCB3aXRoIGRlZmxhdGUgYWxnb3JpdGhtIGFuZCBgb3B0aW9uc2AuXG4gKlxuICogU3VwcG9ydGVkIG9wdGlvbnMgYXJlOlxuICpcbiAqIC0gbGV2ZWxcbiAqIC0gd2luZG93Qml0c1xuICogLSBtZW1MZXZlbFxuICogLSBzdHJhdGVneVxuICogLSBkaWN0aW9uYXJ5XG4gKlxuICogW2h0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZF0oaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkKVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhlc2UuXG4gKlxuICogU3VnYXIgKG9wdGlvbnMpOlxuICpcbiAqIC0gYHJhd2AgKEJvb2xlYW4pIC0gc2F5IHRoYXQgd2Ugd29yayB3aXRoIHJhdyBzdHJlYW0sIGlmIHlvdSBkb24ndCB3aXNoIHRvIHNwZWNpZnlcbiAqICAgbmVnYXRpdmUgd2luZG93Qml0cyBpbXBsaWNpdGx5LlxuICogLSBgdG9gIChTdHJpbmcpIC0gaWYgZXF1YWwgdG8gJ3N0cmluZycsIHRoZW4gcmVzdWx0IHdpbGwgYmUgXCJiaW5hcnkgc3RyaW5nXCJcbiAqICAgIChlYWNoIGNoYXIgY29kZSBbMC4uMjU1XSlcbiAqXG4gKiAjIyMjIyBFeGFtcGxlOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBwYWtvID0gcmVxdWlyZSgncGFrbycpXG4gKiAgICwgZGF0YSA9IFVpbnQ4QXJyYXkoWzEsMiwzLDQsNSw2LDcsOCw5XSk7XG4gKlxuICogY29uc29sZS5sb2cocGFrby5kZWZsYXRlKGRhdGEpKTtcbiAqIGBgYFxuICoqL1xuZnVuY3Rpb24gZGVmbGF0ZShpbnB1dCwgb3B0aW9ucykge1xuICB2YXIgZGVmbGF0b3IgPSBuZXcgRGVmbGF0ZShvcHRpb25zKTtcblxuICBkZWZsYXRvci5wdXNoKGlucHV0LCB0cnVlKTtcblxuICAvLyBUaGF0IHdpbGwgbmV2ZXIgaGFwcGVucywgaWYgeW91IGRvbid0IGNoZWF0IHdpdGggb3B0aW9ucyA6KVxuICBpZiAoZGVmbGF0b3IuZXJyKSB7IHRocm93IGRlZmxhdG9yLm1zZyB8fCBtc2dbZGVmbGF0b3IuZXJyXTsgfVxuXG4gIHJldHVybiBkZWZsYXRvci5yZXN1bHQ7XG59XG5cblxuLyoqXG4gKiBkZWZsYXRlUmF3KGRhdGFbLCBvcHRpb25zXSkgLT4gVWludDhBcnJheXxBcnJheXxTdHJpbmdcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheXxTdHJpbmcpOiBpbnB1dCBkYXRhIHRvIGNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBUaGUgc2FtZSBhcyBbW2RlZmxhdGVdXSwgYnV0IGNyZWF0ZXMgcmF3IGRhdGEsIHdpdGhvdXQgd3JhcHBlclxuICogKGhlYWRlciBhbmQgYWRsZXIzMiBjcmMpLlxuICoqL1xuZnVuY3Rpb24gZGVmbGF0ZVJhdyhpbnB1dCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5yYXcgPSB0cnVlO1xuICByZXR1cm4gZGVmbGF0ZShpbnB1dCwgb3B0aW9ucyk7XG59XG5cblxuLyoqXG4gKiBnemlwKGRhdGFbLCBvcHRpb25zXSkgLT4gVWludDhBcnJheXxBcnJheXxTdHJpbmdcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheXxTdHJpbmcpOiBpbnB1dCBkYXRhIHRvIGNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGRlZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBUaGUgc2FtZSBhcyBbW2RlZmxhdGVdXSwgYnV0IGNyZWF0ZSBnemlwIHdyYXBwZXIgaW5zdGVhZCBvZlxuICogZGVmbGF0ZSBvbmUuXG4gKiovXG5mdW5jdGlvbiBnemlwKGlucHV0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmd6aXAgPSB0cnVlO1xuICByZXR1cm4gZGVmbGF0ZShpbnB1dCwgb3B0aW9ucyk7XG59XG5cblxuZXhwb3J0cy5EZWZsYXRlID0gRGVmbGF0ZTtcbmV4cG9ydHMuZGVmbGF0ZSA9IGRlZmxhdGU7XG5leHBvcnRzLmRlZmxhdGVSYXcgPSBkZWZsYXRlUmF3O1xuZXhwb3J0cy5nemlwID0gZ3ppcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgemxpYl9pbmZsYXRlID0gcmVxdWlyZSgnLi96bGliL2luZmxhdGUnKTtcbnZhciB1dGlscyAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzL2NvbW1vbicpO1xudmFyIHN0cmluZ3MgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvc3RyaW5ncycpO1xudmFyIGMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vemxpYi9jb25zdGFudHMnKTtcbnZhciBtc2cgICAgICAgICAgPSByZXF1aXJlKCcuL3psaWIvbWVzc2FnZXMnKTtcbnZhciBaU3RyZWFtICAgICAgPSByZXF1aXJlKCcuL3psaWIvenN0cmVhbScpO1xudmFyIEdaaGVhZGVyICAgICA9IHJlcXVpcmUoJy4vemxpYi9nemhlYWRlcicpO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIGNsYXNzIEluZmxhdGVcbiAqXG4gKiBHZW5lcmljIEpTLXN0eWxlIHdyYXBwZXIgZm9yIHpsaWIgY2FsbHMuIElmIHlvdSBkb24ndCBuZWVkXG4gKiBzdHJlYW1pbmcgYmVoYXZpb3VyIC0gdXNlIG1vcmUgc2ltcGxlIGZ1bmN0aW9uczogW1tpbmZsYXRlXV1cbiAqIGFuZCBbW2luZmxhdGVSYXddXS5cbiAqKi9cblxuLyogaW50ZXJuYWxcbiAqIGluZmxhdGUuY2h1bmtzIC0+IEFycmF5XG4gKlxuICogQ2h1bmtzIG9mIG91dHB1dCBkYXRhLCBpZiBbW0luZmxhdGUjb25EYXRhXV0gbm90IG92ZXJyaWRkZW4uXG4gKiovXG5cbi8qKlxuICogSW5mbGF0ZS5yZXN1bHQgLT4gVWludDhBcnJheXxBcnJheXxTdHJpbmdcbiAqXG4gKiBVbmNvbXByZXNzZWQgcmVzdWx0LCBnZW5lcmF0ZWQgYnkgZGVmYXVsdCBbW0luZmxhdGUjb25EYXRhXV1cbiAqIGFuZCBbW0luZmxhdGUjb25FbmRdXSBoYW5kbGVycy4gRmlsbGVkIGFmdGVyIHlvdSBwdXNoIGxhc3QgY2h1bmtcbiAqIChjYWxsIFtbSW5mbGF0ZSNwdXNoXV0gd2l0aCBgWl9GSU5JU0hgIC8gYHRydWVgIHBhcmFtKSBvciBpZiB5b3VcbiAqIHB1c2ggYSBjaHVuayB3aXRoIGV4cGxpY2l0IGZsdXNoIChjYWxsIFtbSW5mbGF0ZSNwdXNoXV0gd2l0aFxuICogYFpfU1lOQ19GTFVTSGAgcGFyYW0pLlxuICoqL1xuXG4vKipcbiAqIEluZmxhdGUuZXJyIC0+IE51bWJlclxuICpcbiAqIEVycm9yIGNvZGUgYWZ0ZXIgaW5mbGF0ZSBmaW5pc2hlZC4gMCAoWl9PSykgb24gc3VjY2Vzcy5cbiAqIFNob3VsZCBiZSBjaGVja2VkIGlmIGJyb2tlbiBkYXRhIHBvc3NpYmxlLlxuICoqL1xuXG4vKipcbiAqIEluZmxhdGUubXNnIC0+IFN0cmluZ1xuICpcbiAqIEVycm9yIG1lc3NhZ2UsIGlmIFtbSW5mbGF0ZS5lcnJdXSAhPSAwXG4gKiovXG5cblxuLyoqXG4gKiBuZXcgSW5mbGF0ZShvcHRpb25zKVxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGluZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBDcmVhdGVzIG5ldyBpbmZsYXRvciBpbnN0YW5jZSB3aXRoIHNwZWNpZmllZCBwYXJhbXMuIFRocm93cyBleGNlcHRpb25cbiAqIG9uIGJhZCBwYXJhbXMuIFN1cHBvcnRlZCBvcHRpb25zOlxuICpcbiAqIC0gYHdpbmRvd0JpdHNgXG4gKiAtIGBkaWN0aW9uYXJ5YFxuICpcbiAqIFtodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWRdKGh0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZClcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoZXNlLlxuICpcbiAqIEFkZGl0aW9uYWwgb3B0aW9ucywgZm9yIGludGVybmFsIG5lZWRzOlxuICpcbiAqIC0gYGNodW5rU2l6ZWAgLSBzaXplIG9mIGdlbmVyYXRlZCBkYXRhIGNodW5rcyAoMTZLIGJ5IGRlZmF1bHQpXG4gKiAtIGByYXdgIChCb29sZWFuKSAtIGRvIHJhdyBpbmZsYXRlXG4gKiAtIGB0b2AgKFN0cmluZykgLSBpZiBlcXVhbCB0byAnc3RyaW5nJywgdGhlbiByZXN1bHQgd2lsbCBiZSBjb252ZXJ0ZWRcbiAqICAgZnJvbSB1dGY4IHRvIHV0ZjE2IChqYXZhc2NyaXB0KSBzdHJpbmcuIFdoZW4gc3RyaW5nIG91dHB1dCByZXF1ZXN0ZWQsXG4gKiAgIGNodW5rIGxlbmd0aCBjYW4gZGlmZmVyIGZyb20gYGNodW5rU2l6ZWAsIGRlcGVuZGluZyBvbiBjb250ZW50LlxuICpcbiAqIEJ5IGRlZmF1bHQsIHdoZW4gbm8gb3B0aW9ucyBzZXQsIGF1dG9kZXRlY3QgZGVmbGF0ZS9nemlwIGRhdGEgZm9ybWF0IHZpYVxuICogd3JhcHBlciBoZWFkZXIuXG4gKlxuICogIyMjIyMgRXhhbXBsZTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgcGFrbyA9IHJlcXVpcmUoJ3Bha28nKVxuICogICAsIGNodW5rMSA9IFVpbnQ4QXJyYXkoWzEsMiwzLDQsNSw2LDcsOCw5XSlcbiAqICAgLCBjaHVuazIgPSBVaW50OEFycmF5KFsxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOV0pO1xuICpcbiAqIHZhciBpbmZsYXRlID0gbmV3IHBha28uSW5mbGF0ZSh7IGxldmVsOiAzfSk7XG4gKlxuICogaW5mbGF0ZS5wdXNoKGNodW5rMSwgZmFsc2UpO1xuICogaW5mbGF0ZS5wdXNoKGNodW5rMiwgdHJ1ZSk7ICAvLyB0cnVlIC0+IGxhc3QgY2h1bmtcbiAqXG4gKiBpZiAoaW5mbGF0ZS5lcnIpIHsgdGhyb3cgbmV3IEVycm9yKGluZmxhdGUuZXJyKTsgfVxuICpcbiAqIGNvbnNvbGUubG9nKGluZmxhdGUucmVzdWx0KTtcbiAqIGBgYFxuICoqL1xuZnVuY3Rpb24gSW5mbGF0ZShvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbmZsYXRlKSkgcmV0dXJuIG5ldyBJbmZsYXRlKG9wdGlvbnMpO1xuXG4gIHRoaXMub3B0aW9ucyA9IHV0aWxzLmFzc2lnbih7XG4gICAgY2h1bmtTaXplOiAxNjM4NCxcbiAgICB3aW5kb3dCaXRzOiAwLFxuICAgIHRvOiAnJ1xuICB9LCBvcHRpb25zIHx8IHt9KTtcblxuICB2YXIgb3B0ID0gdGhpcy5vcHRpb25zO1xuXG4gIC8vIEZvcmNlIHdpbmRvdyBzaXplIGZvciBgcmF3YCBkYXRhLCBpZiBub3Qgc2V0IGRpcmVjdGx5LFxuICAvLyBiZWNhdXNlIHdlIGhhdmUgbm8gaGVhZGVyIGZvciBhdXRvZGV0ZWN0LlxuICBpZiAob3B0LnJhdyAmJiAob3B0LndpbmRvd0JpdHMgPj0gMCkgJiYgKG9wdC53aW5kb3dCaXRzIDwgMTYpKSB7XG4gICAgb3B0LndpbmRvd0JpdHMgPSAtb3B0LndpbmRvd0JpdHM7XG4gICAgaWYgKG9wdC53aW5kb3dCaXRzID09PSAwKSB7IG9wdC53aW5kb3dCaXRzID0gLTE1OyB9XG4gIH1cblxuICAvLyBJZiBgd2luZG93Qml0c2Agbm90IGRlZmluZWQgKGFuZCBtb2RlIG5vdCByYXcpIC0gc2V0IGF1dG9kZXRlY3QgZmxhZyBmb3IgZ3ppcC9kZWZsYXRlXG4gIGlmICgob3B0LndpbmRvd0JpdHMgPj0gMCkgJiYgKG9wdC53aW5kb3dCaXRzIDwgMTYpICYmXG4gICAgICAhKG9wdGlvbnMgJiYgb3B0aW9ucy53aW5kb3dCaXRzKSkge1xuICAgIG9wdC53aW5kb3dCaXRzICs9IDMyO1xuICB9XG5cbiAgLy8gR3ppcCBoZWFkZXIgaGFzIG5vIGluZm8gYWJvdXQgd2luZG93cyBzaXplLCB3ZSBjYW4gZG8gYXV0b2RldGVjdCBvbmx5XG4gIC8vIGZvciBkZWZsYXRlLiBTbywgaWYgd2luZG93IHNpemUgbm90IHNldCwgZm9yY2UgaXQgdG8gbWF4IHdoZW4gZ3ppcCBwb3NzaWJsZVxuICBpZiAoKG9wdC53aW5kb3dCaXRzID4gMTUpICYmIChvcHQud2luZG93Qml0cyA8IDQ4KSkge1xuICAgIC8vIGJpdCAzICgxNikgLT4gZ3ppcHBlZCBkYXRhXG4gICAgLy8gYml0IDQgKDMyKSAtPiBhdXRvZGV0ZWN0IGd6aXAvZGVmbGF0ZVxuICAgIGlmICgob3B0LndpbmRvd0JpdHMgJiAxNSkgPT09IDApIHtcbiAgICAgIG9wdC53aW5kb3dCaXRzIHw9IDE1O1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuZXJyICAgID0gMDsgICAgICAvLyBlcnJvciBjb2RlLCBpZiBoYXBwZW5zICgwID0gWl9PSylcbiAgdGhpcy5tc2cgICAgPSAnJzsgICAgIC8vIGVycm9yIG1lc3NhZ2VcbiAgdGhpcy5lbmRlZCAgPSBmYWxzZTsgIC8vIHVzZWQgdG8gYXZvaWQgbXVsdGlwbGUgb25FbmQoKSBjYWxsc1xuICB0aGlzLmNodW5rcyA9IFtdOyAgICAgLy8gY2h1bmtzIG9mIGNvbXByZXNzZWQgZGF0YVxuXG4gIHRoaXMuc3RybSAgID0gbmV3IFpTdHJlYW0oKTtcbiAgdGhpcy5zdHJtLmF2YWlsX291dCA9IDA7XG5cbiAgdmFyIHN0YXR1cyAgPSB6bGliX2luZmxhdGUuaW5mbGF0ZUluaXQyKFxuICAgIHRoaXMuc3RybSxcbiAgICBvcHQud2luZG93Qml0c1xuICApO1xuXG4gIGlmIChzdGF0dXMgIT09IGMuWl9PSykge1xuICAgIHRocm93IG5ldyBFcnJvcihtc2dbc3RhdHVzXSk7XG4gIH1cblxuICB0aGlzLmhlYWRlciA9IG5ldyBHWmhlYWRlcigpO1xuXG4gIHpsaWJfaW5mbGF0ZS5pbmZsYXRlR2V0SGVhZGVyKHRoaXMuc3RybSwgdGhpcy5oZWFkZXIpO1xuXG4gIC8vIFNldHVwIGRpY3Rpb25hcnlcbiAgaWYgKG9wdC5kaWN0aW9uYXJ5KSB7XG4gICAgLy8gQ29udmVydCBkYXRhIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2Ygb3B0LmRpY3Rpb25hcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHQuZGljdGlvbmFyeSA9IHN0cmluZ3Muc3RyaW5nMmJ1ZihvcHQuZGljdGlvbmFyeSk7XG4gICAgfSBlbHNlIGlmICh0b1N0cmluZy5jYWxsKG9wdC5kaWN0aW9uYXJ5KSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuICAgICAgb3B0LmRpY3Rpb25hcnkgPSBuZXcgVWludDhBcnJheShvcHQuZGljdGlvbmFyeSk7XG4gICAgfVxuICAgIGlmIChvcHQucmF3KSB7IC8vSW4gcmF3IG1vZGUgd2UgbmVlZCB0byBzZXQgdGhlIGRpY3Rpb25hcnkgZWFybHlcbiAgICAgIHN0YXR1cyA9IHpsaWJfaW5mbGF0ZS5pbmZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sIG9wdC5kaWN0aW9uYXJ5KTtcbiAgICAgIGlmIChzdGF0dXMgIT09IGMuWl9PSykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnW3N0YXR1c10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEluZmxhdGUjcHVzaChkYXRhWywgbW9kZV0pIC0+IEJvb2xlYW5cbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheXxBcnJheUJ1ZmZlcnxTdHJpbmcpOiBpbnB1dCBkYXRhXG4gKiAtIG1vZGUgKE51bWJlcnxCb29sZWFuKTogMC4uNiBmb3IgY29ycmVzcG9uZGluZyBaX05PX0ZMVVNILi5aX1RSRUUgbW9kZXMuXG4gKiAgIFNlZSBjb25zdGFudHMuIFNraXBwZWQgb3IgYGZhbHNlYCBtZWFucyBaX05PX0ZMVVNILCBgdHJ1ZWAgbWVhbnMgWl9GSU5JU0guXG4gKlxuICogU2VuZHMgaW5wdXQgZGF0YSB0byBpbmZsYXRlIHBpcGUsIGdlbmVyYXRpbmcgW1tJbmZsYXRlI29uRGF0YV1dIGNhbGxzIHdpdGhcbiAqIG5ldyBvdXRwdXQgY2h1bmtzLiBSZXR1cm5zIGB0cnVlYCBvbiBzdWNjZXNzLiBUaGUgbGFzdCBkYXRhIGJsb2NrIG11c3QgaGF2ZVxuICogbW9kZSBaX0ZJTklTSCAob3IgYHRydWVgKS4gVGhhdCB3aWxsIGZsdXNoIGludGVybmFsIHBlbmRpbmcgYnVmZmVycyBhbmQgY2FsbFxuICogW1tJbmZsYXRlI29uRW5kXV0uIEZvciBpbnRlcmltIGV4cGxpY2l0IGZsdXNoZXMgKHdpdGhvdXQgZW5kaW5nIHRoZSBzdHJlYW0pIHlvdVxuICogY2FuIHVzZSBtb2RlIFpfU1lOQ19GTFVTSCwga2VlcGluZyB0aGUgZGVjb21wcmVzc2lvbiBjb250ZXh0LlxuICpcbiAqIE9uIGZhaWwgY2FsbCBbW0luZmxhdGUjb25FbmRdXSB3aXRoIGVycm9yIGNvZGUgYW5kIHJldHVybiBmYWxzZS5cbiAqXG4gKiBXZSBzdHJvbmdseSByZWNvbW1lbmQgdG8gdXNlIGBVaW50OEFycmF5YCBvbiBpbnB1dCBmb3IgYmVzdCBzcGVlZCAob3V0cHV0XG4gKiBmb3JtYXQgaXMgZGV0ZWN0ZWQgYXV0b21hdGljYWxseSkuIEFsc28sIGRvbid0IHNraXAgbGFzdCBwYXJhbSBhbmQgYWx3YXlzXG4gKiB1c2UgdGhlIHNhbWUgdHlwZSBpbiB5b3VyIGNvZGUgKGJvb2xlYW4gb3IgbnVtYmVyKS4gVGhhdCB3aWxsIGltcHJvdmUgSlMgc3BlZWQuXG4gKlxuICogRm9yIHJlZ3VsYXIgYEFycmF5YC1zIG1ha2Ugc3VyZSBhbGwgZWxlbWVudHMgYXJlIFswLi4yNTVdLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBwdXNoKGNodW5rLCBmYWxzZSk7IC8vIHB1c2ggb25lIG9mIGRhdGEgY2h1bmtzXG4gKiAuLi5cbiAqIHB1c2goY2h1bmssIHRydWUpOyAgLy8gcHVzaCBsYXN0IGNodW5rXG4gKiBgYGBcbiAqKi9cbkluZmxhdGUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoZGF0YSwgbW9kZSkge1xuICB2YXIgc3RybSA9IHRoaXMuc3RybTtcbiAgdmFyIGNodW5rU2l6ZSA9IHRoaXMub3B0aW9ucy5jaHVua1NpemU7XG4gIHZhciBkaWN0aW9uYXJ5ID0gdGhpcy5vcHRpb25zLmRpY3Rpb25hcnk7XG4gIHZhciBzdGF0dXMsIF9tb2RlO1xuICB2YXIgbmV4dF9vdXRfdXRmOCwgdGFpbCwgdXRmOHN0cjtcblxuICAvLyBGbGFnIHRvIHByb3Blcmx5IHByb2Nlc3MgWl9CVUZfRVJST1Igb24gdGVzdGluZyBpbmZsYXRlIGNhbGxcbiAgLy8gd2hlbiB3ZSBjaGVjayB0aGF0IGFsbCBvdXRwdXQgZGF0YSB3YXMgZmx1c2hlZC5cbiAgdmFyIGFsbG93QnVmRXJyb3IgPSBmYWxzZTtcblxuICBpZiAodGhpcy5lbmRlZCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgX21vZGUgPSAobW9kZSA9PT0gfn5tb2RlKSA/IG1vZGUgOiAoKG1vZGUgPT09IHRydWUpID8gYy5aX0ZJTklTSCA6IGMuWl9OT19GTFVTSCk7XG5cbiAgLy8gQ29udmVydCBkYXRhIGlmIG5lZWRlZFxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gT25seSBiaW5hcnkgc3RyaW5ncyBjYW4gYmUgZGVjb21wcmVzc2VkIG9uIHByYWN0aWNlXG4gICAgc3RybS5pbnB1dCA9IHN0cmluZ3MuYmluc3RyaW5nMmJ1ZihkYXRhKTtcbiAgfSBlbHNlIGlmICh0b1N0cmluZy5jYWxsKGRhdGEpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG4gICAgc3RybS5pbnB1dCA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHN0cm0uaW5wdXQgPSBkYXRhO1xuICB9XG5cbiAgc3RybS5uZXh0X2luID0gMDtcbiAgc3RybS5hdmFpbF9pbiA9IHN0cm0uaW5wdXQubGVuZ3RoO1xuXG4gIGRvIHtcbiAgICBpZiAoc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHN0cm0ub3V0cHV0ID0gbmV3IHV0aWxzLkJ1ZjgoY2h1bmtTaXplKTtcbiAgICAgIHN0cm0ubmV4dF9vdXQgPSAwO1xuICAgICAgc3RybS5hdmFpbF9vdXQgPSBjaHVua1NpemU7XG4gICAgfVxuXG4gICAgc3RhdHVzID0gemxpYl9pbmZsYXRlLmluZmxhdGUoc3RybSwgYy5aX05PX0ZMVVNIKTsgICAgLyogbm8gYmFkIHJldHVybiB2YWx1ZSAqL1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gYy5aX05FRURfRElDVCAmJiBkaWN0aW9uYXJ5KSB7XG4gICAgICBzdGF0dXMgPSB6bGliX2luZmxhdGUuaW5mbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLCBkaWN0aW9uYXJ5KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBjLlpfQlVGX0VSUk9SICYmIGFsbG93QnVmRXJyb3IgPT09IHRydWUpIHtcbiAgICAgIHN0YXR1cyA9IGMuWl9PSztcbiAgICAgIGFsbG93QnVmRXJyb3IgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzICE9PSBjLlpfU1RSRUFNX0VORCAmJiBzdGF0dXMgIT09IGMuWl9PSykge1xuICAgICAgdGhpcy5vbkVuZChzdGF0dXMpO1xuICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHN0cm0ubmV4dF9vdXQpIHtcbiAgICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCB8fCBzdGF0dXMgPT09IGMuWl9TVFJFQU1fRU5EIHx8IChzdHJtLmF2YWlsX2luID09PSAwICYmIChfbW9kZSA9PT0gYy5aX0ZJTklTSCB8fCBfbW9kZSA9PT0gYy5aX1NZTkNfRkxVU0gpKSkge1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG8gPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgICBuZXh0X291dF91dGY4ID0gc3RyaW5ncy51dGY4Ym9yZGVyKHN0cm0ub3V0cHV0LCBzdHJtLm5leHRfb3V0KTtcblxuICAgICAgICAgIHRhaWwgPSBzdHJtLm5leHRfb3V0IC0gbmV4dF9vdXRfdXRmODtcbiAgICAgICAgICB1dGY4c3RyID0gc3RyaW5ncy5idWYyc3RyaW5nKHN0cm0ub3V0cHV0LCBuZXh0X291dF91dGY4KTtcblxuICAgICAgICAgIC8vIG1vdmUgdGFpbFxuICAgICAgICAgIHN0cm0ubmV4dF9vdXQgPSB0YWlsO1xuICAgICAgICAgIHN0cm0uYXZhaWxfb3V0ID0gY2h1bmtTaXplIC0gdGFpbDtcbiAgICAgICAgICBpZiAodGFpbCkgeyB1dGlscy5hcnJheVNldChzdHJtLm91dHB1dCwgc3RybS5vdXRwdXQsIG5leHRfb3V0X3V0ZjgsIHRhaWwsIDApOyB9XG5cbiAgICAgICAgICB0aGlzLm9uRGF0YSh1dGY4c3RyKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25EYXRhKHV0aWxzLnNocmlua0J1ZihzdHJtLm91dHB1dCwgc3RybS5uZXh0X291dCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2hlbiBubyBtb3JlIGlucHV0IGRhdGEsIHdlIHNob3VsZCBjaGVjayB0aGF0IGludGVybmFsIGluZmxhdGUgYnVmZmVyc1xuICAgIC8vIGFyZSBmbHVzaGVkLiBUaGUgb25seSB3YXkgdG8gZG8gaXQgd2hlbiBhdmFpbF9vdXQgPSAwIC0gcnVuIG9uZSBtb3JlXG4gICAgLy8gaW5mbGF0ZSBwYXNzLiBCdXQgaWYgb3V0cHV0IGRhdGEgbm90IGV4aXN0cywgaW5mbGF0ZSByZXR1cm4gWl9CVUZfRVJST1IuXG4gICAgLy8gSGVyZSB3ZSBzZXQgZmxhZyB0byBwcm9jZXNzIHRoaXMgZXJyb3IgcHJvcGVybHkuXG4gICAgLy9cbiAgICAvLyBOT1RFLiBEZWZsYXRlIGRvZXMgbm90IHJldHVybiBlcnJvciBpbiB0aGlzIGNhc2UgYW5kIGRvZXMgbm90IG5lZWRzIHN1Y2hcbiAgICAvLyBsb2dpYy5cbiAgICBpZiAoc3RybS5hdmFpbF9pbiA9PT0gMCAmJiBzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgYWxsb3dCdWZFcnJvciA9IHRydWU7XG4gICAgfVxuXG4gIH0gd2hpbGUgKChzdHJtLmF2YWlsX2luID4gMCB8fCBzdHJtLmF2YWlsX291dCA9PT0gMCkgJiYgc3RhdHVzICE9PSBjLlpfU1RSRUFNX0VORCk7XG5cbiAgaWYgKHN0YXR1cyA9PT0gYy5aX1NUUkVBTV9FTkQpIHtcbiAgICBfbW9kZSA9IGMuWl9GSU5JU0g7XG4gIH1cblxuICAvLyBGaW5hbGl6ZSBvbiB0aGUgbGFzdCBjaHVuay5cbiAgaWYgKF9tb2RlID09PSBjLlpfRklOSVNIKSB7XG4gICAgc3RhdHVzID0gemxpYl9pbmZsYXRlLmluZmxhdGVFbmQodGhpcy5zdHJtKTtcbiAgICB0aGlzLm9uRW5kKHN0YXR1cyk7XG4gICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgcmV0dXJuIHN0YXR1cyA9PT0gYy5aX09LO1xuICB9XG5cbiAgLy8gY2FsbGJhY2sgaW50ZXJpbSByZXN1bHRzIGlmIFpfU1lOQ19GTFVTSC5cbiAgaWYgKF9tb2RlID09PSBjLlpfU1lOQ19GTFVTSCkge1xuICAgIHRoaXMub25FbmQoYy5aX09LKTtcbiAgICBzdHJtLmF2YWlsX291dCA9IDA7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuLyoqXG4gKiBJbmZsYXRlI29uRGF0YShjaHVuaykgLT4gVm9pZFxuICogLSBjaHVuayAoVWludDhBcnJheXxBcnJheXxTdHJpbmcpOiBvdXRwdXQgZGF0YS4gVHlwZSBvZiBhcnJheSBkZXBlbmRzXG4gKiAgIG9uIGpzIGVuZ2luZSBzdXBwb3J0LiBXaGVuIHN0cmluZyBvdXRwdXQgcmVxdWVzdGVkLCBlYWNoIGNodW5rXG4gKiAgIHdpbGwgYmUgc3RyaW5nLlxuICpcbiAqIEJ5IGRlZmF1bHQsIHN0b3JlcyBkYXRhIGJsb2NrcyBpbiBgY2h1bmtzW11gIHByb3BlcnR5IGFuZCBnbHVlXG4gKiB0aG9zZSBpbiBgb25FbmRgLiBPdmVycmlkZSB0aGlzIGhhbmRsZXIsIGlmIHlvdSBuZWVkIGFub3RoZXIgYmVoYXZpb3VyLlxuICoqL1xuSW5mbGF0ZS5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gIHRoaXMuY2h1bmtzLnB1c2goY2h1bmspO1xufTtcblxuXG4vKipcbiAqIEluZmxhdGUjb25FbmQoc3RhdHVzKSAtPiBWb2lkXG4gKiAtIHN0YXR1cyAoTnVtYmVyKTogaW5mbGF0ZSBzdGF0dXMuIDAgKFpfT0spIG9uIHN1Y2Nlc3MsXG4gKiAgIG90aGVyIGlmIG5vdC5cbiAqXG4gKiBDYWxsZWQgZWl0aGVyIGFmdGVyIHlvdSB0ZWxsIGluZmxhdGUgdGhhdCB0aGUgaW5wdXQgc3RyZWFtIGlzXG4gKiBjb21wbGV0ZSAoWl9GSU5JU0gpIG9yIHNob3VsZCBiZSBmbHVzaGVkIChaX1NZTkNfRkxVU0gpXG4gKiBvciBpZiBhbiBlcnJvciBoYXBwZW5lZC4gQnkgZGVmYXVsdCAtIGpvaW4gY29sbGVjdGVkIGNodW5rcyxcbiAqIGZyZWUgbWVtb3J5IGFuZCBmaWxsIGByZXN1bHRzYCAvIGBlcnJgIHByb3BlcnRpZXMuXG4gKiovXG5JbmZsYXRlLnByb3RvdHlwZS5vbkVuZCA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgLy8gT24gc3VjY2VzcyAtIGpvaW5cbiAgaWYgKHN0YXR1cyA9PT0gYy5aX09LKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50byA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIEdsdWUgJiBjb252ZXJ0IGhlcmUsIHVudGlsIHdlIHRlYWNoIHBha28gdG8gc2VuZFxuICAgICAgLy8gdXRmOCBhbGlnbmVkIHN0cmluZ3MgdG8gb25EYXRhXG4gICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuY2h1bmtzLmpvaW4oJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc3VsdCA9IHV0aWxzLmZsYXR0ZW5DaHVua3ModGhpcy5jaHVua3MpO1xuICAgIH1cbiAgfVxuICB0aGlzLmNodW5rcyA9IFtdO1xuICB0aGlzLmVyciA9IHN0YXR1cztcbiAgdGhpcy5tc2cgPSB0aGlzLnN0cm0ubXNnO1xufTtcblxuXG4vKipcbiAqIGluZmxhdGUoZGF0YVssIG9wdGlvbnNdKSAtPiBVaW50OEFycmF5fEFycmF5fFN0cmluZ1xuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5fFN0cmluZyk6IGlucHV0IGRhdGEgdG8gZGVjb21wcmVzcy5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBpbmZsYXRlIG9wdGlvbnMuXG4gKlxuICogRGVjb21wcmVzcyBgZGF0YWAgd2l0aCBpbmZsYXRlL3VuZ3ppcCBhbmQgYG9wdGlvbnNgLiBBdXRvZGV0ZWN0XG4gKiBmb3JtYXQgdmlhIHdyYXBwZXIgaGVhZGVyIGJ5IGRlZmF1bHQuIFRoYXQncyB3aHkgd2UgZG9uJ3QgcHJvdmlkZVxuICogc2VwYXJhdGUgYHVuZ3ppcGAgbWV0aG9kLlxuICpcbiAqIFN1cHBvcnRlZCBvcHRpb25zIGFyZTpcbiAqXG4gKiAtIHdpbmRvd0JpdHNcbiAqXG4gKiBbaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkXShodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWQpXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBTdWdhciAob3B0aW9ucyk6XG4gKlxuICogLSBgcmF3YCAoQm9vbGVhbikgLSBzYXkgdGhhdCB3ZSB3b3JrIHdpdGggcmF3IHN0cmVhbSwgaWYgeW91IGRvbid0IHdpc2ggdG8gc3BlY2lmeVxuICogICBuZWdhdGl2ZSB3aW5kb3dCaXRzIGltcGxpY2l0bHkuXG4gKiAtIGB0b2AgKFN0cmluZykgLSBpZiBlcXVhbCB0byAnc3RyaW5nJywgdGhlbiByZXN1bHQgd2lsbCBiZSBjb252ZXJ0ZWRcbiAqICAgZnJvbSB1dGY4IHRvIHV0ZjE2IChqYXZhc2NyaXB0KSBzdHJpbmcuIFdoZW4gc3RyaW5nIG91dHB1dCByZXF1ZXN0ZWQsXG4gKiAgIGNodW5rIGxlbmd0aCBjYW4gZGlmZmVyIGZyb20gYGNodW5rU2l6ZWAsIGRlcGVuZGluZyBvbiBjb250ZW50LlxuICpcbiAqXG4gKiAjIyMjIyBFeGFtcGxlOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBwYWtvID0gcmVxdWlyZSgncGFrbycpXG4gKiAgICwgaW5wdXQgPSBwYWtvLmRlZmxhdGUoWzEsMiwzLDQsNSw2LDcsOCw5XSlcbiAqICAgLCBvdXRwdXQ7XG4gKlxuICogdHJ5IHtcbiAqICAgb3V0cHV0ID0gcGFrby5pbmZsYXRlKGlucHV0KTtcbiAqIH0gY2F0Y2ggKGVycilcbiAqICAgY29uc29sZS5sb2coZXJyKTtcbiAqIH1cbiAqIGBgYFxuICoqL1xuZnVuY3Rpb24gaW5mbGF0ZShpbnB1dCwgb3B0aW9ucykge1xuICB2YXIgaW5mbGF0b3IgPSBuZXcgSW5mbGF0ZShvcHRpb25zKTtcblxuICBpbmZsYXRvci5wdXNoKGlucHV0LCB0cnVlKTtcblxuICAvLyBUaGF0IHdpbGwgbmV2ZXIgaGFwcGVucywgaWYgeW91IGRvbid0IGNoZWF0IHdpdGggb3B0aW9ucyA6KVxuICBpZiAoaW5mbGF0b3IuZXJyKSB7IHRocm93IGluZmxhdG9yLm1zZyB8fCBtc2dbaW5mbGF0b3IuZXJyXTsgfVxuXG4gIHJldHVybiBpbmZsYXRvci5yZXN1bHQ7XG59XG5cblxuLyoqXG4gKiBpbmZsYXRlUmF3KGRhdGFbLCBvcHRpb25zXSkgLT4gVWludDhBcnJheXxBcnJheXxTdHJpbmdcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheXxTdHJpbmcpOiBpbnB1dCBkYXRhIHRvIGRlY29tcHJlc3MuXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgaW5mbGF0ZSBvcHRpb25zLlxuICpcbiAqIFRoZSBzYW1lIGFzIFtbaW5mbGF0ZV1dLCBidXQgY3JlYXRlcyByYXcgZGF0YSwgd2l0aG91dCB3cmFwcGVyXG4gKiAoaGVhZGVyIGFuZCBhZGxlcjMyIGNyYykuXG4gKiovXG5mdW5jdGlvbiBpbmZsYXRlUmF3KGlucHV0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLnJhdyA9IHRydWU7XG4gIHJldHVybiBpbmZsYXRlKGlucHV0LCBvcHRpb25zKTtcbn1cblxuXG4vKipcbiAqIHVuZ3ppcChkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nKTogaW5wdXQgZGF0YSB0byBkZWNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGluZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBKdXN0IHNob3J0Y3V0IHRvIFtbaW5mbGF0ZV1dLCBiZWNhdXNlIGl0IGF1dG9kZXRlY3RzIGZvcm1hdFxuICogYnkgaGVhZGVyLmNvbnRlbnQuIERvbmUgZm9yIGNvbnZlbmllbmNlLlxuICoqL1xuXG5cbmV4cG9ydHMuSW5mbGF0ZSA9IEluZmxhdGU7XG5leHBvcnRzLmluZmxhdGUgPSBpbmZsYXRlO1xuZXhwb3J0cy5pbmZsYXRlUmF3ID0gaW5mbGF0ZVJhdztcbmV4cG9ydHMudW5nemlwICA9IGluZmxhdGU7XG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIFRZUEVEX09LID0gICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpICYmXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBVaW50MTZBcnJheSAhPT0gJ3VuZGVmaW5lZCcpICYmXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyk7XG5cbmZ1bmN0aW9uIF9oYXMob2JqLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbmV4cG9ydHMuYXNzaWduID0gZnVuY3Rpb24gKG9iaiAvKmZyb20xLCBmcm9tMiwgZnJvbTMsIC4uLiovKSB7XG4gIHZhciBzb3VyY2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgd2hpbGUgKHNvdXJjZXMubGVuZ3RoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgICBpZiAoIXNvdXJjZSkgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHNvdXJjZSArICdtdXN0IGJlIG5vbi1vYmplY3QnKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBwIGluIHNvdXJjZSkge1xuICAgICAgaWYgKF9oYXMoc291cmNlLCBwKSkge1xuICAgICAgICBvYmpbcF0gPSBzb3VyY2VbcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cblxuLy8gcmVkdWNlIGJ1ZmZlciBzaXplLCBhdm9pZGluZyBtZW0gY29weVxuZXhwb3J0cy5zaHJpbmtCdWYgPSBmdW5jdGlvbiAoYnVmLCBzaXplKSB7XG4gIGlmIChidWYubGVuZ3RoID09PSBzaXplKSB7IHJldHVybiBidWY7IH1cbiAgaWYgKGJ1Zi5zdWJhcnJheSkgeyByZXR1cm4gYnVmLnN1YmFycmF5KDAsIHNpemUpOyB9XG4gIGJ1Zi5sZW5ndGggPSBzaXplO1xuICByZXR1cm4gYnVmO1xufTtcblxuXG52YXIgZm5UeXBlZCA9IHtcbiAgYXJyYXlTZXQ6IGZ1bmN0aW9uIChkZXN0LCBzcmMsIHNyY19vZmZzLCBsZW4sIGRlc3Rfb2Zmcykge1xuICAgIGlmIChzcmMuc3ViYXJyYXkgJiYgZGVzdC5zdWJhcnJheSkge1xuICAgICAgZGVzdC5zZXQoc3JjLnN1YmFycmF5KHNyY19vZmZzLCBzcmNfb2ZmcyArIGxlbiksIGRlc3Rfb2Zmcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZhbGxiYWNrIHRvIG9yZGluYXJ5IGFycmF5XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgZGVzdFtkZXN0X29mZnMgKyBpXSA9IHNyY1tzcmNfb2ZmcyArIGldO1xuICAgIH1cbiAgfSxcbiAgLy8gSm9pbiBhcnJheSBvZiBjaHVua3MgdG8gc2luZ2xlIGFycmF5LlxuICBmbGF0dGVuQ2h1bmtzOiBmdW5jdGlvbiAoY2h1bmtzKSB7XG4gICAgdmFyIGksIGwsIGxlbiwgcG9zLCBjaHVuaywgcmVzdWx0O1xuXG4gICAgLy8gY2FsY3VsYXRlIGRhdGEgbGVuZ3RoXG4gICAgbGVuID0gMDtcbiAgICBmb3IgKGkgPSAwLCBsID0gY2h1bmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGVuICs9IGNodW5rc1tpXS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gam9pbiBjaHVua3NcbiAgICByZXN1bHQgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICAgIHBvcyA9IDA7XG4gICAgZm9yIChpID0gMCwgbCA9IGNodW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNodW5rID0gY2h1bmtzW2ldO1xuICAgICAgcmVzdWx0LnNldChjaHVuaywgcG9zKTtcbiAgICAgIHBvcyArPSBjaHVuay5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcblxudmFyIGZuVW50eXBlZCA9IHtcbiAgYXJyYXlTZXQ6IGZ1bmN0aW9uIChkZXN0LCBzcmMsIHNyY19vZmZzLCBsZW4sIGRlc3Rfb2Zmcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGRlc3RbZGVzdF9vZmZzICsgaV0gPSBzcmNbc3JjX29mZnMgKyBpXTtcbiAgICB9XG4gIH0sXG4gIC8vIEpvaW4gYXJyYXkgb2YgY2h1bmtzIHRvIHNpbmdsZSBhcnJheS5cbiAgZmxhdHRlbkNodW5rczogZnVuY3Rpb24gKGNodW5rcykge1xuICAgIHJldHVybiBbXS5jb25jYXQuYXBwbHkoW10sIGNodW5rcyk7XG4gIH1cbn07XG5cblxuLy8gRW5hYmxlL0Rpc2FibGUgdHlwZWQgYXJyYXlzIHVzZSwgZm9yIHRlc3Rpbmdcbi8vXG5leHBvcnRzLnNldFR5cGVkID0gZnVuY3Rpb24gKG9uKSB7XG4gIGlmIChvbikge1xuICAgIGV4cG9ydHMuQnVmOCAgPSBVaW50OEFycmF5O1xuICAgIGV4cG9ydHMuQnVmMTYgPSBVaW50MTZBcnJheTtcbiAgICBleHBvcnRzLkJ1ZjMyID0gSW50MzJBcnJheTtcbiAgICBleHBvcnRzLmFzc2lnbihleHBvcnRzLCBmblR5cGVkKTtcbiAgfSBlbHNlIHtcbiAgICBleHBvcnRzLkJ1ZjggID0gQXJyYXk7XG4gICAgZXhwb3J0cy5CdWYxNiA9IEFycmF5O1xuICAgIGV4cG9ydHMuQnVmMzIgPSBBcnJheTtcbiAgICBleHBvcnRzLmFzc2lnbihleHBvcnRzLCBmblVudHlwZWQpO1xuICB9XG59O1xuXG5leHBvcnRzLnNldFR5cGVkKFRZUEVEX09LKTtcbiIsIi8vIFN0cmluZyBlbmNvZGUvZGVjb2RlIGhlbHBlcnNcbid1c2Ugc3RyaWN0JztcblxuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL2NvbW1vbicpO1xuXG5cbi8vIFF1aWNrIGNoZWNrIGlmIHdlIGNhbiB1c2UgZmFzdCBhcnJheSB0byBiaW4gc3RyaW5nIGNvbnZlcnNpb25cbi8vXG4vLyAtIGFwcGx5KEFycmF5KSBjYW4gZmFpbCBvbiBBbmRyb2lkIDIuMlxuLy8gLSBhcHBseShVaW50OEFycmF5KSBjYW4gZmFpbCBvbiBpT1MgNS4xIFNhZmFyaVxuLy9cbnZhciBTVFJfQVBQTFlfT0sgPSB0cnVlO1xudmFyIFNUUl9BUFBMWV9VSUFfT0sgPSB0cnVlO1xuXG50cnkgeyBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIFsgMCBdKTsgfSBjYXRjaCAoX18pIHsgU1RSX0FQUExZX09LID0gZmFsc2U7IH1cbnRyeSB7IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoMSkpOyB9IGNhdGNoIChfXykgeyBTVFJfQVBQTFlfVUlBX09LID0gZmFsc2U7IH1cblxuXG4vLyBUYWJsZSB3aXRoIHV0ZjggbGVuZ3RocyAoY2FsY3VsYXRlZCBieSBmaXJzdCBieXRlIG9mIHNlcXVlbmNlKVxuLy8gTm90ZSwgdGhhdCA1ICYgNi1ieXRlIHZhbHVlcyBhbmQgc29tZSA0LWJ5dGUgdmFsdWVzIGNhbiBub3QgYmUgcmVwcmVzZW50ZWQgaW4gSlMsXG4vLyBiZWNhdXNlIG1heCBwb3NzaWJsZSBjb2RlcG9pbnQgaXMgMHgxMGZmZmZcbnZhciBfdXRmOGxlbiA9IG5ldyB1dGlscy5CdWY4KDI1Nik7XG5mb3IgKHZhciBxID0gMDsgcSA8IDI1NjsgcSsrKSB7XG4gIF91dGY4bGVuW3FdID0gKHEgPj0gMjUyID8gNiA6IHEgPj0gMjQ4ID8gNSA6IHEgPj0gMjQwID8gNCA6IHEgPj0gMjI0ID8gMyA6IHEgPj0gMTkyID8gMiA6IDEpO1xufVxuX3V0ZjhsZW5bMjU0XSA9IF91dGY4bGVuWzI1NF0gPSAxOyAvLyBJbnZhbGlkIHNlcXVlbmNlIHN0YXJ0XG5cblxuLy8gY29udmVydCBzdHJpbmcgdG8gYXJyYXkgKHR5cGVkLCB3aGVuIHBvc3NpYmxlKVxuZXhwb3J0cy5zdHJpbmcyYnVmID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgYnVmLCBjLCBjMiwgbV9wb3MsIGksIHN0cl9sZW4gPSBzdHIubGVuZ3RoLCBidWZfbGVuID0gMDtcblxuICAvLyBjb3VudCBiaW5hcnkgc2l6ZVxuICBmb3IgKG1fcG9zID0gMDsgbV9wb3MgPCBzdHJfbGVuOyBtX3BvcysrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KG1fcG9zKTtcbiAgICBpZiAoKGMgJiAweGZjMDApID09PSAweGQ4MDAgJiYgKG1fcG9zICsgMSA8IHN0cl9sZW4pKSB7XG4gICAgICBjMiA9IHN0ci5jaGFyQ29kZUF0KG1fcG9zICsgMSk7XG4gICAgICBpZiAoKGMyICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKChjIC0gMHhkODAwKSA8PCAxMCkgKyAoYzIgLSAweGRjMDApO1xuICAgICAgICBtX3BvcysrO1xuICAgICAgfVxuICAgIH1cbiAgICBidWZfbGVuICs9IGMgPCAweDgwID8gMSA6IGMgPCAweDgwMCA/IDIgOiBjIDwgMHgxMDAwMCA/IDMgOiA0O1xuICB9XG5cbiAgLy8gYWxsb2NhdGUgYnVmZmVyXG4gIGJ1ZiA9IG5ldyB1dGlscy5CdWY4KGJ1Zl9sZW4pO1xuXG4gIC8vIGNvbnZlcnRcbiAgZm9yIChpID0gMCwgbV9wb3MgPSAwOyBpIDwgYnVmX2xlbjsgbV9wb3MrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChtX3Bvcyk7XG4gICAgaWYgKChjICYgMHhmYzAwKSA9PT0gMHhkODAwICYmIChtX3BvcyArIDEgPCBzdHJfbGVuKSkge1xuICAgICAgYzIgPSBzdHIuY2hhckNvZGVBdChtX3BvcyArIDEpO1xuICAgICAgaWYgKChjMiAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xuICAgICAgICBjID0gMHgxMDAwMCArICgoYyAtIDB4ZDgwMCkgPDwgMTApICsgKGMyIC0gMHhkYzAwKTtcbiAgICAgICAgbV9wb3MrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAvKiBvbmUgYnl0ZSAqL1xuICAgICAgYnVmW2krK10gPSBjO1xuICAgIH0gZWxzZSBpZiAoYyA8IDB4ODAwKSB7XG4gICAgICAvKiB0d28gYnl0ZXMgKi9cbiAgICAgIGJ1ZltpKytdID0gMHhDMCB8IChjID4+PiA2KTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjICYgMHgzZik7XG4gICAgfSBlbHNlIGlmIChjIDwgMHgxMDAwMCkge1xuICAgICAgLyogdGhyZWUgYnl0ZXMgKi9cbiAgICAgIGJ1ZltpKytdID0gMHhFMCB8IChjID4+PiAxMik7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyA+Pj4gNiAmIDB4M2YpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgJiAweDNmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogZm91ciBieXRlcyAqL1xuICAgICAgYnVmW2krK10gPSAweGYwIHwgKGMgPj4+IDE4KTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjID4+PiAxMiAmIDB4M2YpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgPj4+IDYgJiAweDNmKTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjICYgMHgzZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1Zjtcbn07XG5cbi8vIEhlbHBlciAodXNlZCBpbiAyIHBsYWNlcylcbmZ1bmN0aW9uIGJ1ZjJiaW5zdHJpbmcoYnVmLCBsZW4pIHtcbiAgLy8gT24gQ2hyb21lLCB0aGUgYXJndW1lbnRzIGluIGEgZnVuY3Rpb24gY2FsbCB0aGF0IGFyZSBhbGxvd2VkIGlzIGA2NTUzNGAuXG4gIC8vIElmIHRoZSBsZW5ndGggb2YgdGhlIGJ1ZmZlciBpcyBzbWFsbGVyIHRoYW4gdGhhdCwgd2UgY2FuIHVzZSB0aGlzIG9wdGltaXphdGlvbixcbiAgLy8gb3RoZXJ3aXNlIHdlIHdpbGwgdGFrZSBhIHNsb3dlciBwYXRoLlxuICBpZiAobGVuIDwgNjU1MzQpIHtcbiAgICBpZiAoKGJ1Zi5zdWJhcnJheSAmJiBTVFJfQVBQTFlfVUlBX09LKSB8fCAoIWJ1Zi5zdWJhcnJheSAmJiBTVFJfQVBQTFlfT0spKSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCB1dGlscy5zaHJpbmtCdWYoYnVmLCBsZW4pKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuLy8gQ29udmVydCBieXRlIGFycmF5IHRvIGJpbmFyeSBzdHJpbmdcbmV4cG9ydHMuYnVmMmJpbnN0cmluZyA9IGZ1bmN0aW9uIChidWYpIHtcbiAgcmV0dXJuIGJ1ZjJiaW5zdHJpbmcoYnVmLCBidWYubGVuZ3RoKTtcbn07XG5cblxuLy8gQ29udmVydCBiaW5hcnkgc3RyaW5nICh0eXBlZCwgd2hlbiBwb3NzaWJsZSlcbmV4cG9ydHMuYmluc3RyaW5nMmJ1ZiA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIGJ1ZiA9IG5ldyB1dGlscy5CdWY4KHN0ci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYnVmW2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIGJ1Zjtcbn07XG5cblxuLy8gY29udmVydCBhcnJheSB0byBzdHJpbmdcbmV4cG9ydHMuYnVmMnN0cmluZyA9IGZ1bmN0aW9uIChidWYsIG1heCkge1xuICB2YXIgaSwgb3V0LCBjLCBjX2xlbjtcbiAgdmFyIGxlbiA9IG1heCB8fCBidWYubGVuZ3RoO1xuXG4gIC8vIFJlc2VydmUgbWF4IHBvc3NpYmxlIGxlbmd0aCAoMiB3b3JkcyBwZXIgY2hhcilcbiAgLy8gTkI6IGJ5IHVua25vd24gcmVhc29ucywgQXJyYXkgaXMgc2lnbmlmaWNhbnRseSBmYXN0ZXIgZm9yXG4gIC8vICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5IHRoYW4gVWludDE2QXJyYXkuXG4gIHZhciB1dGYxNmJ1ZiA9IG5ldyBBcnJheShsZW4gKiAyKTtcblxuICBmb3IgKG91dCA9IDAsIGkgPSAwOyBpIDwgbGVuOykge1xuICAgIGMgPSBidWZbaSsrXTtcbiAgICAvLyBxdWljayBwcm9jZXNzIGFzY2lpXG4gICAgaWYgKGMgPCAweDgwKSB7IHV0ZjE2YnVmW291dCsrXSA9IGM7IGNvbnRpbnVlOyB9XG5cbiAgICBjX2xlbiA9IF91dGY4bGVuW2NdO1xuICAgIC8vIHNraXAgNSAmIDYgYnl0ZSBjb2Rlc1xuICAgIGlmIChjX2xlbiA+IDQpIHsgdXRmMTZidWZbb3V0KytdID0gMHhmZmZkOyBpICs9IGNfbGVuIC0gMTsgY29udGludWU7IH1cblxuICAgIC8vIGFwcGx5IG1hc2sgb24gZmlyc3QgYnl0ZVxuICAgIGMgJj0gY19sZW4gPT09IDIgPyAweDFmIDogY19sZW4gPT09IDMgPyAweDBmIDogMHgwNztcbiAgICAvLyBqb2luIHRoZSByZXN0XG4gICAgd2hpbGUgKGNfbGVuID4gMSAmJiBpIDwgbGVuKSB7XG4gICAgICBjID0gKGMgPDwgNikgfCAoYnVmW2krK10gJiAweDNmKTtcbiAgICAgIGNfbGVuLS07XG4gICAgfVxuXG4gICAgLy8gdGVybWluYXRlZCBieSBlbmQgb2Ygc3RyaW5nP1xuICAgIGlmIChjX2xlbiA+IDEpIHsgdXRmMTZidWZbb3V0KytdID0gMHhmZmZkOyBjb250aW51ZTsgfVxuXG4gICAgaWYgKGMgPCAweDEwMDAwKSB7XG4gICAgICB1dGYxNmJ1ZltvdXQrK10gPSBjO1xuICAgIH0gZWxzZSB7XG4gICAgICBjIC09IDB4MTAwMDA7XG4gICAgICB1dGYxNmJ1ZltvdXQrK10gPSAweGQ4MDAgfCAoKGMgPj4gMTApICYgMHgzZmYpO1xuICAgICAgdXRmMTZidWZbb3V0KytdID0gMHhkYzAwIHwgKGMgJiAweDNmZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZjJiaW5zdHJpbmcodXRmMTZidWYsIG91dCk7XG59O1xuXG5cbi8vIENhbGN1bGF0ZSBtYXggcG9zc2libGUgcG9zaXRpb24gaW4gdXRmOCBidWZmZXIsXG4vLyB0aGF0IHdpbGwgbm90IGJyZWFrIHNlcXVlbmNlLiBJZiB0aGF0J3Mgbm90IHBvc3NpYmxlXG4vLyAtICh2ZXJ5IHNtYWxsIGxpbWl0cykgcmV0dXJuIG1heCBzaXplIGFzIGlzLlxuLy9cbi8vIGJ1ZltdIC0gdXRmOCBieXRlcyBhcnJheVxuLy8gbWF4ICAgLSBsZW5ndGggbGltaXQgKG1hbmRhdG9yeSk7XG5leHBvcnRzLnV0Zjhib3JkZXIgPSBmdW5jdGlvbiAoYnVmLCBtYXgpIHtcbiAgdmFyIHBvcztcblxuICBtYXggPSBtYXggfHwgYnVmLmxlbmd0aDtcbiAgaWYgKG1heCA+IGJ1Zi5sZW5ndGgpIHsgbWF4ID0gYnVmLmxlbmd0aDsgfVxuXG4gIC8vIGdvIGJhY2sgZnJvbSBsYXN0IHBvc2l0aW9uLCB1bnRpbCBzdGFydCBvZiBzZXF1ZW5jZSBmb3VuZFxuICBwb3MgPSBtYXggLSAxO1xuICB3aGlsZSAocG9zID49IDAgJiYgKGJ1Zltwb3NdICYgMHhDMCkgPT09IDB4ODApIHsgcG9zLS07IH1cblxuICAvLyBWZXJ5IHNtYWxsIGFuZCBicm9rZW4gc2VxdWVuY2UsXG4gIC8vIHJldHVybiBtYXgsIGJlY2F1c2Ugd2Ugc2hvdWxkIHJldHVybiBzb21ldGhpbmcgYW55d2F5LlxuICBpZiAocG9zIDwgMCkgeyByZXR1cm4gbWF4OyB9XG5cbiAgLy8gSWYgd2UgY2FtZSB0byBzdGFydCBvZiBidWZmZXIgLSB0aGF0IG1lYW5zIGJ1ZmZlciBpcyB0b28gc21hbGwsXG4gIC8vIHJldHVybiBtYXggdG9vLlxuICBpZiAocG9zID09PSAwKSB7IHJldHVybiBtYXg7IH1cblxuICByZXR1cm4gKHBvcyArIF91dGY4bGVuW2J1Zltwb3NdXSA+IG1heCkgPyBwb3MgOiBtYXg7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBOb3RlOiBhZGxlcjMyIHRha2VzIDEyJSBmb3IgbGV2ZWwgMCBhbmQgMiUgZm9yIGxldmVsIDYuXG4vLyBJdCBpc24ndCB3b3J0aCBpdCB0byBtYWtlIGFkZGl0aW9uYWwgb3B0aW1pemF0aW9ucyBhcyBpbiBvcmlnaW5hbC5cbi8vIFNtYWxsIHNpemUgaXMgcHJlZmVyYWJsZS5cblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG5mdW5jdGlvbiBhZGxlcjMyKGFkbGVyLCBidWYsIGxlbiwgcG9zKSB7XG4gIHZhciBzMSA9IChhZGxlciAmIDB4ZmZmZikgfDAsXG4gICAgICBzMiA9ICgoYWRsZXIgPj4+IDE2KSAmIDB4ZmZmZikgfDAsXG4gICAgICBuID0gMDtcblxuICB3aGlsZSAobGVuICE9PSAwKSB7XG4gICAgLy8gU2V0IGxpbWl0IH4gdHdpY2UgbGVzcyB0aGFuIDU1NTIsIHRvIGtlZXBcbiAgICAvLyBzMiBpbiAzMS1iaXRzLCBiZWNhdXNlIHdlIGZvcmNlIHNpZ25lZCBpbnRzLlxuICAgIC8vIGluIG90aGVyIGNhc2UgJT0gd2lsbCBmYWlsLlxuICAgIG4gPSBsZW4gPiAyMDAwID8gMjAwMCA6IGxlbjtcbiAgICBsZW4gLT0gbjtcblxuICAgIGRvIHtcbiAgICAgIHMxID0gKHMxICsgYnVmW3BvcysrXSkgfDA7XG4gICAgICBzMiA9IChzMiArIHMxKSB8MDtcbiAgICB9IHdoaWxlICgtLW4pO1xuXG4gICAgczEgJT0gNjU1MjE7XG4gICAgczIgJT0gNjU1MjE7XG4gIH1cblxuICByZXR1cm4gKHMxIHwgKHMyIDw8IDE2KSkgfDA7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBhZGxlcjMyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8qIEFsbG93ZWQgZmx1c2ggdmFsdWVzOyBzZWUgZGVmbGF0ZSgpIGFuZCBpbmZsYXRlKCkgYmVsb3cgZm9yIGRldGFpbHMgKi9cbiAgWl9OT19GTFVTSDogICAgICAgICAwLFxuICBaX1BBUlRJQUxfRkxVU0g6ICAgIDEsXG4gIFpfU1lOQ19GTFVTSDogICAgICAgMixcbiAgWl9GVUxMX0ZMVVNIOiAgICAgICAzLFxuICBaX0ZJTklTSDogICAgICAgICAgIDQsXG4gIFpfQkxPQ0s6ICAgICAgICAgICAgNSxcbiAgWl9UUkVFUzogICAgICAgICAgICA2LFxuXG4gIC8qIFJldHVybiBjb2RlcyBmb3IgdGhlIGNvbXByZXNzaW9uL2RlY29tcHJlc3Npb24gZnVuY3Rpb25zLiBOZWdhdGl2ZSB2YWx1ZXNcbiAgKiBhcmUgZXJyb3JzLCBwb3NpdGl2ZSB2YWx1ZXMgYXJlIHVzZWQgZm9yIHNwZWNpYWwgYnV0IG5vcm1hbCBldmVudHMuXG4gICovXG4gIFpfT0s6ICAgICAgICAgICAgICAgMCxcbiAgWl9TVFJFQU1fRU5EOiAgICAgICAxLFxuICBaX05FRURfRElDVDogICAgICAgIDIsXG4gIFpfRVJSTk86ICAgICAgICAgICAtMSxcbiAgWl9TVFJFQU1fRVJST1I6ICAgIC0yLFxuICBaX0RBVEFfRVJST1I6ICAgICAgLTMsXG4gIC8vWl9NRU1fRVJST1I6ICAgICAtNCxcbiAgWl9CVUZfRVJST1I6ICAgICAgIC01LFxuICAvL1pfVkVSU0lPTl9FUlJPUjogLTYsXG5cbiAgLyogY29tcHJlc3Npb24gbGV2ZWxzICovXG4gIFpfTk9fQ09NUFJFU1NJT046ICAgICAgICAgMCxcbiAgWl9CRVNUX1NQRUVEOiAgICAgICAgICAgICAxLFxuICBaX0JFU1RfQ09NUFJFU1NJT046ICAgICAgIDksXG4gIFpfREVGQVVMVF9DT01QUkVTU0lPTjogICAtMSxcblxuXG4gIFpfRklMVEVSRUQ6ICAgICAgICAgICAgICAgMSxcbiAgWl9IVUZGTUFOX09OTFk6ICAgICAgICAgICAyLFxuICBaX1JMRTogICAgICAgICAgICAgICAgICAgIDMsXG4gIFpfRklYRUQ6ICAgICAgICAgICAgICAgICAgNCxcbiAgWl9ERUZBVUxUX1NUUkFURUdZOiAgICAgICAwLFxuXG4gIC8qIFBvc3NpYmxlIHZhbHVlcyBvZiB0aGUgZGF0YV90eXBlIGZpZWxkICh0aG91Z2ggc2VlIGluZmxhdGUoKSkgKi9cbiAgWl9CSU5BUlk6ICAgICAgICAgICAgICAgICAwLFxuICBaX1RFWFQ6ICAgICAgICAgICAgICAgICAgIDEsXG4gIC8vWl9BU0NJSTogICAgICAgICAgICAgICAgMSwgLy8gPSBaX1RFWFQgKGRlcHJlY2F0ZWQpXG4gIFpfVU5LTk9XTjogICAgICAgICAgICAgICAgMixcblxuICAvKiBUaGUgZGVmbGF0ZSBjb21wcmVzc2lvbiBtZXRob2QgKi9cbiAgWl9ERUZMQVRFRDogICAgICAgICAgICAgICA4XG4gIC8vWl9OVUxMOiAgICAgICAgICAgICAgICAgbnVsbCAvLyBVc2UgLTEgb3IgbnVsbCBpbmxpbmUsIGRlcGVuZGluZyBvbiB2YXIgdHlwZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gTm90ZTogd2UgY2FuJ3QgZ2V0IHNpZ25pZmljYW50IHNwZWVkIGJvb3N0IGhlcmUuXG4vLyBTbyB3cml0ZSBjb2RlIHRvIG1pbmltaXplIHNpemUgLSBubyBwcmVnZW5lcmF0ZWQgdGFibGVzXG4vLyBhbmQgYXJyYXkgdG9vbHMgZGVwZW5kZW5jaWVzLlxuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbi8vIFVzZSBvcmRpbmFyeSBhcnJheSwgc2luY2UgdW50eXBlZCBtYWtlcyBubyBib29zdCBoZXJlXG5mdW5jdGlvbiBtYWtlVGFibGUoKSB7XG4gIHZhciBjLCB0YWJsZSA9IFtdO1xuXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgMjU2OyBuKyspIHtcbiAgICBjID0gbjtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgYyA9ICgoYyAmIDEpID8gKDB4RURCODgzMjAgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcbiAgICB9XG4gICAgdGFibGVbbl0gPSBjO1xuICB9XG5cbiAgcmV0dXJuIHRhYmxlO1xufVxuXG4vLyBDcmVhdGUgdGFibGUgb24gbG9hZC4gSnVzdCAyNTUgc2lnbmVkIGxvbmdzLiBOb3QgYSBwcm9ibGVtLlxudmFyIGNyY1RhYmxlID0gbWFrZVRhYmxlKCk7XG5cblxuZnVuY3Rpb24gY3JjMzIoY3JjLCBidWYsIGxlbiwgcG9zKSB7XG4gIHZhciB0ID0gY3JjVGFibGUsXG4gICAgICBlbmQgPSBwb3MgKyBsZW47XG5cbiAgY3JjIF49IC0xO1xuXG4gIGZvciAodmFyIGkgPSBwb3M7IGkgPCBlbmQ7IGkrKykge1xuICAgIGNyYyA9IChjcmMgPj4+IDgpIF4gdFsoY3JjIF4gYnVmW2ldKSAmIDB4RkZdO1xuICB9XG5cbiAgcmV0dXJuIChjcmMgXiAoLTEpKTsgLy8gPj4+IDA7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjcmMzMjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG52YXIgdXRpbHMgICA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbW1vbicpO1xudmFyIHRyZWVzICAgPSByZXF1aXJlKCcuL3RyZWVzJyk7XG52YXIgYWRsZXIzMiA9IHJlcXVpcmUoJy4vYWRsZXIzMicpO1xudmFyIGNyYzMyICAgPSByZXF1aXJlKCcuL2NyYzMyJyk7XG52YXIgbXNnICAgICA9IHJlcXVpcmUoJy4vbWVzc2FnZXMnKTtcblxuLyogUHVibGljIGNvbnN0YW50cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxuLyogQWxsb3dlZCBmbHVzaCB2YWx1ZXM7IHNlZSBkZWZsYXRlKCkgYW5kIGluZmxhdGUoKSBiZWxvdyBmb3IgZGV0YWlscyAqL1xudmFyIFpfTk9fRkxVU0ggICAgICA9IDA7XG52YXIgWl9QQVJUSUFMX0ZMVVNIID0gMTtcbi8vdmFyIFpfU1lOQ19GTFVTSCAgICA9IDI7XG52YXIgWl9GVUxMX0ZMVVNIICAgID0gMztcbnZhciBaX0ZJTklTSCAgICAgICAgPSA0O1xudmFyIFpfQkxPQ0sgICAgICAgICA9IDU7XG4vL3ZhciBaX1RSRUVTICAgICAgICAgPSA2O1xuXG5cbi8qIFJldHVybiBjb2RlcyBmb3IgdGhlIGNvbXByZXNzaW9uL2RlY29tcHJlc3Npb24gZnVuY3Rpb25zLiBOZWdhdGl2ZSB2YWx1ZXNcbiAqIGFyZSBlcnJvcnMsIHBvc2l0aXZlIHZhbHVlcyBhcmUgdXNlZCBmb3Igc3BlY2lhbCBidXQgbm9ybWFsIGV2ZW50cy5cbiAqL1xudmFyIFpfT0sgICAgICAgICAgICA9IDA7XG52YXIgWl9TVFJFQU1fRU5EICAgID0gMTtcbi8vdmFyIFpfTkVFRF9ESUNUICAgICA9IDI7XG4vL3ZhciBaX0VSUk5PICAgICAgICAgPSAtMTtcbnZhciBaX1NUUkVBTV9FUlJPUiAgPSAtMjtcbnZhciBaX0RBVEFfRVJST1IgICAgPSAtMztcbi8vdmFyIFpfTUVNX0VSUk9SICAgICA9IC00O1xudmFyIFpfQlVGX0VSUk9SICAgICA9IC01O1xuLy92YXIgWl9WRVJTSU9OX0VSUk9SID0gLTY7XG5cblxuLyogY29tcHJlc3Npb24gbGV2ZWxzICovXG4vL3ZhciBaX05PX0NPTVBSRVNTSU9OICAgICAgPSAwO1xuLy92YXIgWl9CRVNUX1NQRUVEICAgICAgICAgID0gMTtcbi8vdmFyIFpfQkVTVF9DT01QUkVTU0lPTiAgICA9IDk7XG52YXIgWl9ERUZBVUxUX0NPTVBSRVNTSU9OID0gLTE7XG5cblxudmFyIFpfRklMVEVSRUQgICAgICAgICAgICA9IDE7XG52YXIgWl9IVUZGTUFOX09OTFkgICAgICAgID0gMjtcbnZhciBaX1JMRSAgICAgICAgICAgICAgICAgPSAzO1xudmFyIFpfRklYRUQgICAgICAgICAgICAgICA9IDQ7XG52YXIgWl9ERUZBVUxUX1NUUkFURUdZICAgID0gMDtcblxuLyogUG9zc2libGUgdmFsdWVzIG9mIHRoZSBkYXRhX3R5cGUgZmllbGQgKHRob3VnaCBzZWUgaW5mbGF0ZSgpKSAqL1xuLy92YXIgWl9CSU5BUlkgICAgICAgICAgICAgID0gMDtcbi8vdmFyIFpfVEVYVCAgICAgICAgICAgICAgICA9IDE7XG4vL3ZhciBaX0FTQ0lJICAgICAgICAgICAgICAgPSAxOyAvLyA9IFpfVEVYVFxudmFyIFpfVU5LTk9XTiAgICAgICAgICAgICA9IDI7XG5cblxuLyogVGhlIGRlZmxhdGUgY29tcHJlc3Npb24gbWV0aG9kICovXG52YXIgWl9ERUZMQVRFRCAgPSA4O1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbnZhciBNQVhfTUVNX0xFVkVMID0gOTtcbi8qIE1heGltdW0gdmFsdWUgZm9yIG1lbUxldmVsIGluIGRlZmxhdGVJbml0MiAqL1xudmFyIE1BWF9XQklUUyA9IDE1O1xuLyogMzJLIExaNzcgd2luZG93ICovXG52YXIgREVGX01FTV9MRVZFTCA9IDg7XG5cblxudmFyIExFTkdUSF9DT0RFUyAgPSAyOTtcbi8qIG51bWJlciBvZiBsZW5ndGggY29kZXMsIG5vdCBjb3VudGluZyB0aGUgc3BlY2lhbCBFTkRfQkxPQ0sgY29kZSAqL1xudmFyIExJVEVSQUxTICAgICAgPSAyNTY7XG4vKiBudW1iZXIgb2YgbGl0ZXJhbCBieXRlcyAwLi4yNTUgKi9cbnZhciBMX0NPREVTICAgICAgID0gTElURVJBTFMgKyAxICsgTEVOR1RIX0NPREVTO1xuLyogbnVtYmVyIG9mIExpdGVyYWwgb3IgTGVuZ3RoIGNvZGVzLCBpbmNsdWRpbmcgdGhlIEVORF9CTE9DSyBjb2RlICovXG52YXIgRF9DT0RFUyAgICAgICA9IDMwO1xuLyogbnVtYmVyIG9mIGRpc3RhbmNlIGNvZGVzICovXG52YXIgQkxfQ09ERVMgICAgICA9IDE5O1xuLyogbnVtYmVyIG9mIGNvZGVzIHVzZWQgdG8gdHJhbnNmZXIgdGhlIGJpdCBsZW5ndGhzICovXG52YXIgSEVBUF9TSVpFICAgICA9IDIgKiBMX0NPREVTICsgMTtcbi8qIG1heGltdW0gaGVhcCBzaXplICovXG52YXIgTUFYX0JJVFMgID0gMTU7XG4vKiBBbGwgY29kZXMgbXVzdCBub3QgZXhjZWVkIE1BWF9CSVRTIGJpdHMgKi9cblxudmFyIE1JTl9NQVRDSCA9IDM7XG52YXIgTUFYX01BVENIID0gMjU4O1xudmFyIE1JTl9MT09LQUhFQUQgPSAoTUFYX01BVENIICsgTUlOX01BVENIICsgMSk7XG5cbnZhciBQUkVTRVRfRElDVCA9IDB4MjA7XG5cbnZhciBJTklUX1NUQVRFID0gNDI7XG52YXIgRVhUUkFfU1RBVEUgPSA2OTtcbnZhciBOQU1FX1NUQVRFID0gNzM7XG52YXIgQ09NTUVOVF9TVEFURSA9IDkxO1xudmFyIEhDUkNfU1RBVEUgPSAxMDM7XG52YXIgQlVTWV9TVEFURSA9IDExMztcbnZhciBGSU5JU0hfU1RBVEUgPSA2NjY7XG5cbnZhciBCU19ORUVEX01PUkUgICAgICA9IDE7IC8qIGJsb2NrIG5vdCBjb21wbGV0ZWQsIG5lZWQgbW9yZSBpbnB1dCBvciBtb3JlIG91dHB1dCAqL1xudmFyIEJTX0JMT0NLX0RPTkUgICAgID0gMjsgLyogYmxvY2sgZmx1c2ggcGVyZm9ybWVkICovXG52YXIgQlNfRklOSVNIX1NUQVJURUQgPSAzOyAvKiBmaW5pc2ggc3RhcnRlZCwgbmVlZCBvbmx5IG1vcmUgb3V0cHV0IGF0IG5leHQgZGVmbGF0ZSAqL1xudmFyIEJTX0ZJTklTSF9ET05FICAgID0gNDsgLyogZmluaXNoIGRvbmUsIGFjY2VwdCBubyBtb3JlIGlucHV0IG9yIG91dHB1dCAqL1xuXG52YXIgT1NfQ09ERSA9IDB4MDM7IC8vIFVuaXggOikgLiBEb24ndCBkZXRlY3QsIHVzZSB0aGlzIGRlZmF1bHQuXG5cbmZ1bmN0aW9uIGVycihzdHJtLCBlcnJvckNvZGUpIHtcbiAgc3RybS5tc2cgPSBtc2dbZXJyb3JDb2RlXTtcbiAgcmV0dXJuIGVycm9yQ29kZTtcbn1cblxuZnVuY3Rpb24gcmFuayhmKSB7XG4gIHJldHVybiAoKGYpIDw8IDEpIC0gKChmKSA+IDQgPyA5IDogMCk7XG59XG5cbmZ1bmN0aW9uIHplcm8oYnVmKSB7IHZhciBsZW4gPSBidWYubGVuZ3RoOyB3aGlsZSAoLS1sZW4gPj0gMCkgeyBidWZbbGVuXSA9IDA7IH0gfVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZsdXNoIGFzIG11Y2ggcGVuZGluZyBvdXRwdXQgYXMgcG9zc2libGUuIEFsbCBkZWZsYXRlKCkgb3V0cHV0IGdvZXNcbiAqIHRocm91Z2ggdGhpcyBmdW5jdGlvbiBzbyBzb21lIGFwcGxpY2F0aW9ucyBtYXkgd2lzaCB0byBtb2RpZnkgaXRcbiAqIHRvIGF2b2lkIGFsbG9jYXRpbmcgYSBsYXJnZSBzdHJtLT5vdXRwdXQgYnVmZmVyIGFuZCBjb3B5aW5nIGludG8gaXQuXG4gKiAoU2VlIGFsc28gcmVhZF9idWYoKSkuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoX3BlbmRpbmcoc3RybSkge1xuICB2YXIgcyA9IHN0cm0uc3RhdGU7XG5cbiAgLy9fdHJfZmx1c2hfYml0cyhzKTtcbiAgdmFyIGxlbiA9IHMucGVuZGluZztcbiAgaWYgKGxlbiA+IHN0cm0uYXZhaWxfb3V0KSB7XG4gICAgbGVuID0gc3RybS5hdmFpbF9vdXQ7XG4gIH1cbiAgaWYgKGxlbiA9PT0gMCkgeyByZXR1cm47IH1cblxuICB1dGlscy5hcnJheVNldChzdHJtLm91dHB1dCwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nX291dCwgbGVuLCBzdHJtLm5leHRfb3V0KTtcbiAgc3RybS5uZXh0X291dCArPSBsZW47XG4gIHMucGVuZGluZ19vdXQgKz0gbGVuO1xuICBzdHJtLnRvdGFsX291dCArPSBsZW47XG4gIHN0cm0uYXZhaWxfb3V0IC09IGxlbjtcbiAgcy5wZW5kaW5nIC09IGxlbjtcbiAgaWYgKHMucGVuZGluZyA9PT0gMCkge1xuICAgIHMucGVuZGluZ19vdXQgPSAwO1xuICB9XG59XG5cblxuZnVuY3Rpb24gZmx1c2hfYmxvY2tfb25seShzLCBsYXN0KSB7XG4gIHRyZWVzLl90cl9mbHVzaF9ibG9jayhzLCAocy5ibG9ja19zdGFydCA+PSAwID8gcy5ibG9ja19zdGFydCA6IC0xKSwgcy5zdHJzdGFydCAtIHMuYmxvY2tfc3RhcnQsIGxhc3QpO1xuICBzLmJsb2NrX3N0YXJ0ID0gcy5zdHJzdGFydDtcbiAgZmx1c2hfcGVuZGluZyhzLnN0cm0pO1xufVxuXG5cbmZ1bmN0aW9uIHB1dF9ieXRlKHMsIGIpIHtcbiAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSBiO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFB1dCBhIHNob3J0IGluIHRoZSBwZW5kaW5nIGJ1ZmZlci4gVGhlIDE2LWJpdCB2YWx1ZSBpcyBwdXQgaW4gTVNCIG9yZGVyLlxuICogSU4gYXNzZXJ0aW9uOiB0aGUgc3RyZWFtIHN0YXRlIGlzIGNvcnJlY3QgYW5kIHRoZXJlIGlzIGVub3VnaCByb29tIGluXG4gKiBwZW5kaW5nX2J1Zi5cbiAqL1xuZnVuY3Rpb24gcHV0U2hvcnRNU0IocywgYikge1xuLy8gIHB1dF9ieXRlKHMsIChCeXRlKShiID4+IDgpKTtcbi8vICBwdXRfYnl0ZShzLCAoQnl0ZSkoYiAmIDB4ZmYpKTtcbiAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSAoYiA+Pj4gOCkgJiAweGZmO1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IGIgJiAweGZmO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUmVhZCBhIG5ldyBidWZmZXIgZnJvbSB0aGUgY3VycmVudCBpbnB1dCBzdHJlYW0sIHVwZGF0ZSB0aGUgYWRsZXIzMlxuICogYW5kIHRvdGFsIG51bWJlciBvZiBieXRlcyByZWFkLiAgQWxsIGRlZmxhdGUoKSBpbnB1dCBnb2VzIHRocm91Z2hcbiAqIHRoaXMgZnVuY3Rpb24gc28gc29tZSBhcHBsaWNhdGlvbnMgbWF5IHdpc2ggdG8gbW9kaWZ5IGl0IHRvIGF2b2lkXG4gKiBhbGxvY2F0aW5nIGEgbGFyZ2Ugc3RybS0+aW5wdXQgYnVmZmVyIGFuZCBjb3B5aW5nIGZyb20gaXQuXG4gKiAoU2VlIGFsc28gZmx1c2hfcGVuZGluZygpKS5cbiAqL1xuZnVuY3Rpb24gcmVhZF9idWYoc3RybSwgYnVmLCBzdGFydCwgc2l6ZSkge1xuICB2YXIgbGVuID0gc3RybS5hdmFpbF9pbjtcblxuICBpZiAobGVuID4gc2l6ZSkgeyBsZW4gPSBzaXplOyB9XG4gIGlmIChsZW4gPT09IDApIHsgcmV0dXJuIDA7IH1cblxuICBzdHJtLmF2YWlsX2luIC09IGxlbjtcblxuICAvLyB6bWVtY3B5KGJ1Ziwgc3RybS0+bmV4dF9pbiwgbGVuKTtcbiAgdXRpbHMuYXJyYXlTZXQoYnVmLCBzdHJtLmlucHV0LCBzdHJtLm5leHRfaW4sIGxlbiwgc3RhcnQpO1xuICBpZiAoc3RybS5zdGF0ZS53cmFwID09PSAxKSB7XG4gICAgc3RybS5hZGxlciA9IGFkbGVyMzIoc3RybS5hZGxlciwgYnVmLCBsZW4sIHN0YXJ0KTtcbiAgfVxuXG4gIGVsc2UgaWYgKHN0cm0uc3RhdGUud3JhcCA9PT0gMikge1xuICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBidWYsIGxlbiwgc3RhcnQpO1xuICB9XG5cbiAgc3RybS5uZXh0X2luICs9IGxlbjtcbiAgc3RybS50b3RhbF9pbiArPSBsZW47XG5cbiAgcmV0dXJuIGxlbjtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNldCBtYXRjaF9zdGFydCB0byB0aGUgbG9uZ2VzdCBtYXRjaCBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gc3RyaW5nIGFuZFxuICogcmV0dXJuIGl0cyBsZW5ndGguIE1hdGNoZXMgc2hvcnRlciBvciBlcXVhbCB0byBwcmV2X2xlbmd0aCBhcmUgZGlzY2FyZGVkLFxuICogaW4gd2hpY2ggY2FzZSB0aGUgcmVzdWx0IGlzIGVxdWFsIHRvIHByZXZfbGVuZ3RoIGFuZCBtYXRjaF9zdGFydCBpc1xuICogZ2FyYmFnZS5cbiAqIElOIGFzc2VydGlvbnM6IGN1cl9tYXRjaCBpcyB0aGUgaGVhZCBvZiB0aGUgaGFzaCBjaGFpbiBmb3IgdGhlIGN1cnJlbnRcbiAqICAgc3RyaW5nIChzdHJzdGFydCkgYW5kIGl0cyBkaXN0YW5jZSBpcyA8PSBNQVhfRElTVCwgYW5kIHByZXZfbGVuZ3RoID49IDFcbiAqIE9VVCBhc3NlcnRpb246IHRoZSBtYXRjaCBsZW5ndGggaXMgbm90IGdyZWF0ZXIgdGhhbiBzLT5sb29rYWhlYWQuXG4gKi9cbmZ1bmN0aW9uIGxvbmdlc3RfbWF0Y2gocywgY3VyX21hdGNoKSB7XG4gIHZhciBjaGFpbl9sZW5ndGggPSBzLm1heF9jaGFpbl9sZW5ndGg7ICAgICAgLyogbWF4IGhhc2ggY2hhaW4gbGVuZ3RoICovXG4gIHZhciBzY2FuID0gcy5zdHJzdGFydDsgLyogY3VycmVudCBzdHJpbmcgKi9cbiAgdmFyIG1hdGNoOyAgICAgICAgICAgICAgICAgICAgICAgLyogbWF0Y2hlZCBzdHJpbmcgKi9cbiAgdmFyIGxlbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBsZW5ndGggb2YgY3VycmVudCBtYXRjaCAqL1xuICB2YXIgYmVzdF9sZW4gPSBzLnByZXZfbGVuZ3RoOyAgICAgICAgICAgICAgLyogYmVzdCBtYXRjaCBsZW5ndGggc28gZmFyICovXG4gIHZhciBuaWNlX21hdGNoID0gcy5uaWNlX21hdGNoOyAgICAgICAgICAgICAvKiBzdG9wIGlmIG1hdGNoIGxvbmcgZW5vdWdoICovXG4gIHZhciBsaW1pdCA9IChzLnN0cnN0YXJ0ID4gKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkpID9cbiAgICAgIHMuc3Ryc3RhcnQgLSAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSA6IDAvKk5JTCovO1xuXG4gIHZhciBfd2luID0gcy53aW5kb3c7IC8vIHNob3J0Y3V0XG5cbiAgdmFyIHdtYXNrID0gcy53X21hc2s7XG4gIHZhciBwcmV2ICA9IHMucHJldjtcblxuICAvKiBTdG9wIHdoZW4gY3VyX21hdGNoIGJlY29tZXMgPD0gbGltaXQuIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLFxuICAgKiB3ZSBwcmV2ZW50IG1hdGNoZXMgd2l0aCB0aGUgc3RyaW5nIG9mIHdpbmRvdyBpbmRleCAwLlxuICAgKi9cblxuICB2YXIgc3RyZW5kID0gcy5zdHJzdGFydCArIE1BWF9NQVRDSDtcbiAgdmFyIHNjYW5fZW5kMSAgPSBfd2luW3NjYW4gKyBiZXN0X2xlbiAtIDFdO1xuICB2YXIgc2Nhbl9lbmQgICA9IF93aW5bc2NhbiArIGJlc3RfbGVuXTtcblxuICAvKiBUaGUgY29kZSBpcyBvcHRpbWl6ZWQgZm9yIEhBU0hfQklUUyA+PSA4IGFuZCBNQVhfTUFUQ0gtMiBtdWx0aXBsZSBvZiAxNi5cbiAgICogSXQgaXMgZWFzeSB0byBnZXQgcmlkIG9mIHRoaXMgb3B0aW1pemF0aW9uIGlmIG5lY2Vzc2FyeS5cbiAgICovXG4gIC8vIEFzc2VydChzLT5oYXNoX2JpdHMgPj0gOCAmJiBNQVhfTUFUQ0ggPT0gMjU4LCBcIkNvZGUgdG9vIGNsZXZlclwiKTtcblxuICAvKiBEbyBub3Qgd2FzdGUgdG9vIG11Y2ggdGltZSBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBnb29kIG1hdGNoOiAqL1xuICBpZiAocy5wcmV2X2xlbmd0aCA+PSBzLmdvb2RfbWF0Y2gpIHtcbiAgICBjaGFpbl9sZW5ndGggPj49IDI7XG4gIH1cbiAgLyogRG8gbm90IGxvb2sgZm9yIG1hdGNoZXMgYmV5b25kIHRoZSBlbmQgb2YgdGhlIGlucHV0LiBUaGlzIGlzIG5lY2Vzc2FyeVxuICAgKiB0byBtYWtlIGRlZmxhdGUgZGV0ZXJtaW5pc3RpYy5cbiAgICovXG4gIGlmIChuaWNlX21hdGNoID4gcy5sb29rYWhlYWQpIHsgbmljZV9tYXRjaCA9IHMubG9va2FoZWFkOyB9XG5cbiAgLy8gQXNzZXJ0KCh1bGcpcy0+c3Ryc3RhcnQgPD0gcy0+d2luZG93X3NpemUtTUlOX0xPT0tBSEVBRCwgXCJuZWVkIGxvb2thaGVhZFwiKTtcblxuICBkbyB7XG4gICAgLy8gQXNzZXJ0KGN1cl9tYXRjaCA8IHMtPnN0cnN0YXJ0LCBcIm5vIGZ1dHVyZVwiKTtcbiAgICBtYXRjaCA9IGN1cl9tYXRjaDtcblxuICAgIC8qIFNraXAgdG8gbmV4dCBtYXRjaCBpZiB0aGUgbWF0Y2ggbGVuZ3RoIGNhbm5vdCBpbmNyZWFzZVxuICAgICAqIG9yIGlmIHRoZSBtYXRjaCBsZW5ndGggaXMgbGVzcyB0aGFuIDIuICBOb3RlIHRoYXQgdGhlIGNoZWNrcyBiZWxvd1xuICAgICAqIGZvciBpbnN1ZmZpY2llbnQgbG9va2FoZWFkIG9ubHkgb2NjdXIgb2NjYXNpb25hbGx5IGZvciBwZXJmb3JtYW5jZVxuICAgICAqIHJlYXNvbnMuICBUaGVyZWZvcmUgdW5pbml0aWFsaXplZCBtZW1vcnkgd2lsbCBiZSBhY2Nlc3NlZCwgYW5kXG4gICAgICogY29uZGl0aW9uYWwganVtcHMgd2lsbCBiZSBtYWRlIHRoYXQgZGVwZW5kIG9uIHRob3NlIHZhbHVlcy5cbiAgICAgKiBIb3dldmVyIHRoZSBsZW5ndGggb2YgdGhlIG1hdGNoIGlzIGxpbWl0ZWQgdG8gdGhlIGxvb2thaGVhZCwgc29cbiAgICAgKiB0aGUgb3V0cHV0IG9mIGRlZmxhdGUgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSB1bmluaXRpYWxpemVkIHZhbHVlcy5cbiAgICAgKi9cblxuICAgIGlmIChfd2luW21hdGNoICsgYmVzdF9sZW5dICAgICAhPT0gc2Nhbl9lbmQgIHx8XG4gICAgICAgIF93aW5bbWF0Y2ggKyBiZXN0X2xlbiAtIDFdICE9PSBzY2FuX2VuZDEgfHxcbiAgICAgICAgX3dpblttYXRjaF0gICAgICAgICAgICAgICAgIT09IF93aW5bc2Nhbl0gfHxcbiAgICAgICAgX3dpblsrK21hdGNoXSAgICAgICAgICAgICAgIT09IF93aW5bc2NhbiArIDFdKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKiBUaGUgY2hlY2sgYXQgYmVzdF9sZW4tMSBjYW4gYmUgcmVtb3ZlZCBiZWNhdXNlIGl0IHdpbGwgYmUgbWFkZVxuICAgICAqIGFnYWluIGxhdGVyLiAoVGhpcyBoZXVyaXN0aWMgaXMgbm90IGFsd2F5cyBhIHdpbi4pXG4gICAgICogSXQgaXMgbm90IG5lY2Vzc2FyeSB0byBjb21wYXJlIHNjYW5bMl0gYW5kIG1hdGNoWzJdIHNpbmNlIHRoZXlcbiAgICAgKiBhcmUgYWx3YXlzIGVxdWFsIHdoZW4gdGhlIG90aGVyIGJ5dGVzIG1hdGNoLCBnaXZlbiB0aGF0XG4gICAgICogdGhlIGhhc2gga2V5cyBhcmUgZXF1YWwgYW5kIHRoYXQgSEFTSF9CSVRTID49IDguXG4gICAgICovXG4gICAgc2NhbiArPSAyO1xuICAgIG1hdGNoKys7XG4gICAgLy8gQXNzZXJ0KCpzY2FuID09ICptYXRjaCwgXCJtYXRjaFsyXT9cIik7XG5cbiAgICAvKiBXZSBjaGVjayBmb3IgaW5zdWZmaWNpZW50IGxvb2thaGVhZCBvbmx5IGV2ZXJ5IDh0aCBjb21wYXJpc29uO1xuICAgICAqIHRoZSAyNTZ0aCBjaGVjayB3aWxsIGJlIG1hZGUgYXQgc3Ryc3RhcnQrMjU4LlxuICAgICAqL1xuICAgIGRvIHtcbiAgICAgIC8qanNoaW50IG5vZW1wdHk6ZmFsc2UqL1xuICAgIH0gd2hpbGUgKF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJiBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiZcbiAgICAgICAgICAgICBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiYgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmXG4gICAgICAgICAgICAgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJlxuICAgICAgICAgICAgIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJiBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiZcbiAgICAgICAgICAgICBzY2FuIDwgc3RyZW5kKTtcblxuICAgIC8vIEFzc2VydChzY2FuIDw9IHMtPndpbmRvdysodW5zaWduZWQpKHMtPndpbmRvd19zaXplLTEpLCBcIndpbGQgc2NhblwiKTtcblxuICAgIGxlbiA9IE1BWF9NQVRDSCAtIChzdHJlbmQgLSBzY2FuKTtcbiAgICBzY2FuID0gc3RyZW5kIC0gTUFYX01BVENIO1xuXG4gICAgaWYgKGxlbiA+IGJlc3RfbGVuKSB7XG4gICAgICBzLm1hdGNoX3N0YXJ0ID0gY3VyX21hdGNoO1xuICAgICAgYmVzdF9sZW4gPSBsZW47XG4gICAgICBpZiAobGVuID49IG5pY2VfbWF0Y2gpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzY2FuX2VuZDEgID0gX3dpbltzY2FuICsgYmVzdF9sZW4gLSAxXTtcbiAgICAgIHNjYW5fZW5kICAgPSBfd2luW3NjYW4gKyBiZXN0X2xlbl07XG4gICAgfVxuICB9IHdoaWxlICgoY3VyX21hdGNoID0gcHJldltjdXJfbWF0Y2ggJiB3bWFza10pID4gbGltaXQgJiYgLS1jaGFpbl9sZW5ndGggIT09IDApO1xuXG4gIGlmIChiZXN0X2xlbiA8PSBzLmxvb2thaGVhZCkge1xuICAgIHJldHVybiBiZXN0X2xlbjtcbiAgfVxuICByZXR1cm4gcy5sb29rYWhlYWQ7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGaWxsIHRoZSB3aW5kb3cgd2hlbiB0aGUgbG9va2FoZWFkIGJlY29tZXMgaW5zdWZmaWNpZW50LlxuICogVXBkYXRlcyBzdHJzdGFydCBhbmQgbG9va2FoZWFkLlxuICpcbiAqIElOIGFzc2VydGlvbjogbG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRFxuICogT1VUIGFzc2VydGlvbnM6IHN0cnN0YXJ0IDw9IHdpbmRvd19zaXplLU1JTl9MT09LQUhFQURcbiAqICAgIEF0IGxlYXN0IG9uZSBieXRlIGhhcyBiZWVuIHJlYWQsIG9yIGF2YWlsX2luID09IDA7IHJlYWRzIGFyZVxuICogICAgcGVyZm9ybWVkIGZvciBhdCBsZWFzdCB0d28gYnl0ZXMgKHJlcXVpcmVkIGZvciB0aGUgemlwIHRyYW5zbGF0ZV9lb2xcbiAqICAgIG9wdGlvbiAtLSBub3Qgc3VwcG9ydGVkIGhlcmUpLlxuICovXG5mdW5jdGlvbiBmaWxsX3dpbmRvdyhzKSB7XG4gIHZhciBfd19zaXplID0gcy53X3NpemU7XG4gIHZhciBwLCBuLCBtLCBtb3JlLCBzdHI7XG5cbiAgLy9Bc3NlcnQocy0+bG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCwgXCJhbHJlYWR5IGVub3VnaCBsb29rYWhlYWRcIik7XG5cbiAgZG8ge1xuICAgIG1vcmUgPSBzLndpbmRvd19zaXplIC0gcy5sb29rYWhlYWQgLSBzLnN0cnN0YXJ0O1xuXG4gICAgLy8gSlMgaW50cyBoYXZlIDMyIGJpdCwgYmxvY2sgYmVsb3cgbm90IG5lZWRlZFxuICAgIC8qIERlYWwgd2l0aCAhQCMkJSA2NEsgbGltaXQ6ICovXG4gICAgLy9pZiAoc2l6ZW9mKGludCkgPD0gMikge1xuICAgIC8vICAgIGlmIChtb3JlID09IDAgJiYgcy0+c3Ryc3RhcnQgPT0gMCAmJiBzLT5sb29rYWhlYWQgPT0gMCkge1xuICAgIC8vICAgICAgICBtb3JlID0gd3NpemU7XG4gICAgLy9cbiAgICAvLyAgfSBlbHNlIGlmIChtb3JlID09ICh1bnNpZ25lZCkoLTEpKSB7XG4gICAgLy8gICAgICAgIC8qIFZlcnkgdW5saWtlbHksIGJ1dCBwb3NzaWJsZSBvbiAxNiBiaXQgbWFjaGluZSBpZlxuICAgIC8vICAgICAgICAgKiBzdHJzdGFydCA9PSAwICYmIGxvb2thaGVhZCA9PSAxIChpbnB1dCBkb25lIGEgYnl0ZSBhdCB0aW1lKVxuICAgIC8vICAgICAgICAgKi9cbiAgICAvLyAgICAgICAgbW9yZS0tO1xuICAgIC8vICAgIH1cbiAgICAvL31cblxuXG4gICAgLyogSWYgdGhlIHdpbmRvdyBpcyBhbG1vc3QgZnVsbCBhbmQgdGhlcmUgaXMgaW5zdWZmaWNpZW50IGxvb2thaGVhZCxcbiAgICAgKiBtb3ZlIHRoZSB1cHBlciBoYWxmIHRvIHRoZSBsb3dlciBvbmUgdG8gbWFrZSByb29tIGluIHRoZSB1cHBlciBoYWxmLlxuICAgICAqL1xuICAgIGlmIChzLnN0cnN0YXJ0ID49IF93X3NpemUgKyAoX3dfc2l6ZSAtIE1JTl9MT09LQUhFQUQpKSB7XG5cbiAgICAgIHV0aWxzLmFycmF5U2V0KHMud2luZG93LCBzLndpbmRvdywgX3dfc2l6ZSwgX3dfc2l6ZSwgMCk7XG4gICAgICBzLm1hdGNoX3N0YXJ0IC09IF93X3NpemU7XG4gICAgICBzLnN0cnN0YXJ0IC09IF93X3NpemU7XG4gICAgICAvKiB3ZSBub3cgaGF2ZSBzdHJzdGFydCA+PSBNQVhfRElTVCAqL1xuICAgICAgcy5ibG9ja19zdGFydCAtPSBfd19zaXplO1xuXG4gICAgICAvKiBTbGlkZSB0aGUgaGFzaCB0YWJsZSAoY291bGQgYmUgYXZvaWRlZCB3aXRoIDMyIGJpdCB2YWx1ZXNcbiAgICAgICBhdCB0aGUgZXhwZW5zZSBvZiBtZW1vcnkgdXNhZ2UpLiBXZSBzbGlkZSBldmVuIHdoZW4gbGV2ZWwgPT0gMFxuICAgICAgIHRvIGtlZXAgdGhlIGhhc2ggdGFibGUgY29uc2lzdGVudCBpZiB3ZSBzd2l0Y2ggYmFjayB0byBsZXZlbCA+IDBcbiAgICAgICBsYXRlci4gKFVzaW5nIGxldmVsIDAgcGVybWFuZW50bHkgaXMgbm90IGFuIG9wdGltYWwgdXNhZ2Ugb2ZcbiAgICAgICB6bGliLCBzbyB3ZSBkb24ndCBjYXJlIGFib3V0IHRoaXMgcGF0aG9sb2dpY2FsIGNhc2UuKVxuICAgICAgICovXG5cbiAgICAgIG4gPSBzLmhhc2hfc2l6ZTtcbiAgICAgIHAgPSBuO1xuICAgICAgZG8ge1xuICAgICAgICBtID0gcy5oZWFkWy0tcF07XG4gICAgICAgIHMuaGVhZFtwXSA9IChtID49IF93X3NpemUgPyBtIC0gX3dfc2l6ZSA6IDApO1xuICAgICAgfSB3aGlsZSAoLS1uKTtcblxuICAgICAgbiA9IF93X3NpemU7XG4gICAgICBwID0gbjtcbiAgICAgIGRvIHtcbiAgICAgICAgbSA9IHMucHJldlstLXBdO1xuICAgICAgICBzLnByZXZbcF0gPSAobSA+PSBfd19zaXplID8gbSAtIF93X3NpemUgOiAwKTtcbiAgICAgICAgLyogSWYgbiBpcyBub3Qgb24gYW55IGhhc2ggY2hhaW4sIHByZXZbbl0gaXMgZ2FyYmFnZSBidXRcbiAgICAgICAgICogaXRzIHZhbHVlIHdpbGwgbmV2ZXIgYmUgdXNlZC5cbiAgICAgICAgICovXG4gICAgICB9IHdoaWxlICgtLW4pO1xuXG4gICAgICBtb3JlICs9IF93X3NpemU7XG4gICAgfVxuICAgIGlmIChzLnN0cm0uYXZhaWxfaW4gPT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8qIElmIHRoZXJlIHdhcyBubyBzbGlkaW5nOlxuICAgICAqICAgIHN0cnN0YXJ0IDw9IFdTSVpFK01BWF9ESVNULTEgJiYgbG9va2FoZWFkIDw9IE1JTl9MT09LQUhFQUQgLSAxICYmXG4gICAgICogICAgbW9yZSA9PSB3aW5kb3dfc2l6ZSAtIGxvb2thaGVhZCAtIHN0cnN0YXJ0XG4gICAgICogPT4gbW9yZSA+PSB3aW5kb3dfc2l6ZSAtIChNSU5fTE9PS0FIRUFELTEgKyBXU0laRSArIE1BWF9ESVNULTEpXG4gICAgICogPT4gbW9yZSA+PSB3aW5kb3dfc2l6ZSAtIDIqV1NJWkUgKyAyXG4gICAgICogSW4gdGhlIEJJR19NRU0gb3IgTU1BUCBjYXNlIChub3QgeWV0IHN1cHBvcnRlZCksXG4gICAgICogICB3aW5kb3dfc2l6ZSA9PSBpbnB1dF9zaXplICsgTUlOX0xPT0tBSEVBRCAgJiZcbiAgICAgKiAgIHN0cnN0YXJ0ICsgcy0+bG9va2FoZWFkIDw9IGlucHV0X3NpemUgPT4gbW9yZSA+PSBNSU5fTE9PS0FIRUFELlxuICAgICAqIE90aGVyd2lzZSwgd2luZG93X3NpemUgPT0gMipXU0laRSBzbyBtb3JlID49IDIuXG4gICAgICogSWYgdGhlcmUgd2FzIHNsaWRpbmcsIG1vcmUgPj0gV1NJWkUuIFNvIGluIGFsbCBjYXNlcywgbW9yZSA+PSAyLlxuICAgICAqL1xuICAgIC8vQXNzZXJ0KG1vcmUgPj0gMiwgXCJtb3JlIDwgMlwiKTtcbiAgICBuID0gcmVhZF9idWYocy5zdHJtLCBzLndpbmRvdywgcy5zdHJzdGFydCArIHMubG9va2FoZWFkLCBtb3JlKTtcbiAgICBzLmxvb2thaGVhZCArPSBuO1xuXG4gICAgLyogSW5pdGlhbGl6ZSB0aGUgaGFzaCB2YWx1ZSBub3cgdGhhdCB3ZSBoYXZlIHNvbWUgaW5wdXQ6ICovXG4gICAgaWYgKHMubG9va2FoZWFkICsgcy5pbnNlcnQgPj0gTUlOX01BVENIKSB7XG4gICAgICBzdHIgPSBzLnN0cnN0YXJ0IC0gcy5pbnNlcnQ7XG4gICAgICBzLmluc19oID0gcy53aW5kb3dbc3RyXTtcblxuICAgICAgLyogVVBEQVRFX0hBU0gocywgcy0+aW5zX2gsIHMtPndpbmRvd1tzdHIgKyAxXSk7ICovXG4gICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzdHIgKyAxXSkgJiBzLmhhc2hfbWFzaztcbi8vI2lmIE1JTl9NQVRDSCAhPSAzXG4vLyAgICAgICAgQ2FsbCB1cGRhdGVfaGFzaCgpIE1JTl9NQVRDSC0zIG1vcmUgdGltZXNcbi8vI2VuZGlmXG4gICAgICB3aGlsZSAocy5pbnNlcnQpIHtcbiAgICAgICAgLyogVVBEQVRFX0hBU0gocywgcy0+aW5zX2gsIHMtPndpbmRvd1tzdHIgKyBNSU5fTUFUQ0gtMV0pOyAqL1xuICAgICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzdHIgKyBNSU5fTUFUQ0ggLSAxXSkgJiBzLmhhc2hfbWFzaztcblxuICAgICAgICBzLnByZXZbc3RyICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzdHI7XG4gICAgICAgIHN0cisrO1xuICAgICAgICBzLmluc2VydC0tO1xuICAgICAgICBpZiAocy5sb29rYWhlYWQgKyBzLmluc2VydCA8IE1JTl9NQVRDSCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qIElmIHRoZSB3aG9sZSBpbnB1dCBoYXMgbGVzcyB0aGFuIE1JTl9NQVRDSCBieXRlcywgaW5zX2ggaXMgZ2FyYmFnZSxcbiAgICAgKiBidXQgdGhpcyBpcyBub3QgaW1wb3J0YW50IHNpbmNlIG9ubHkgbGl0ZXJhbCBieXRlcyB3aWxsIGJlIGVtaXR0ZWQuXG4gICAgICovXG5cbiAgfSB3aGlsZSAocy5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEICYmIHMuc3RybS5hdmFpbF9pbiAhPT0gMCk7XG5cbiAgLyogSWYgdGhlIFdJTl9JTklUIGJ5dGVzIGFmdGVyIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgZGF0YSBoYXZlIG5ldmVyIGJlZW5cbiAgICogd3JpdHRlbiwgdGhlbiB6ZXJvIHRob3NlIGJ5dGVzIGluIG9yZGVyIHRvIGF2b2lkIG1lbW9yeSBjaGVjayByZXBvcnRzIG9mXG4gICAqIHRoZSB1c2Ugb2YgdW5pbml0aWFsaXplZCAob3IgdW5pbml0aWFsaXNlZCBhcyBKdWxpYW4gd3JpdGVzKSBieXRlcyBieVxuICAgKiB0aGUgbG9uZ2VzdCBtYXRjaCByb3V0aW5lcy4gIFVwZGF0ZSB0aGUgaGlnaCB3YXRlciBtYXJrIGZvciB0aGUgbmV4dFxuICAgKiB0aW1lIHRocm91Z2ggaGVyZS4gIFdJTl9JTklUIGlzIHNldCB0byBNQVhfTUFUQ0ggc2luY2UgdGhlIGxvbmdlc3QgbWF0Y2hcbiAgICogcm91dGluZXMgYWxsb3cgc2Nhbm5pbmcgdG8gc3Ryc3RhcnQgKyBNQVhfTUFUQ0gsIGlnbm9yaW5nIGxvb2thaGVhZC5cbiAgICovXG4vLyAgaWYgKHMuaGlnaF93YXRlciA8IHMud2luZG93X3NpemUpIHtcbi8vICAgIHZhciBjdXJyID0gcy5zdHJzdGFydCArIHMubG9va2FoZWFkO1xuLy8gICAgdmFyIGluaXQgPSAwO1xuLy9cbi8vICAgIGlmIChzLmhpZ2hfd2F0ZXIgPCBjdXJyKSB7XG4vLyAgICAgIC8qIFByZXZpb3VzIGhpZ2ggd2F0ZXIgbWFyayBiZWxvdyBjdXJyZW50IGRhdGEgLS0gemVybyBXSU5fSU5JVFxuLy8gICAgICAgKiBieXRlcyBvciB1cCB0byBlbmQgb2Ygd2luZG93LCB3aGljaGV2ZXIgaXMgbGVzcy5cbi8vICAgICAgICovXG4vLyAgICAgIGluaXQgPSBzLndpbmRvd19zaXplIC0gY3Vycjtcbi8vICAgICAgaWYgKGluaXQgPiBXSU5fSU5JVClcbi8vICAgICAgICBpbml0ID0gV0lOX0lOSVQ7XG4vLyAgICAgIHptZW16ZXJvKHMtPndpbmRvdyArIGN1cnIsICh1bnNpZ25lZClpbml0KTtcbi8vICAgICAgcy0+aGlnaF93YXRlciA9IGN1cnIgKyBpbml0O1xuLy8gICAgfVxuLy8gICAgZWxzZSBpZiAocy0+aGlnaF93YXRlciA8ICh1bGcpY3VyciArIFdJTl9JTklUKSB7XG4vLyAgICAgIC8qIEhpZ2ggd2F0ZXIgbWFyayBhdCBvciBhYm92ZSBjdXJyZW50IGRhdGEsIGJ1dCBiZWxvdyBjdXJyZW50IGRhdGFcbi8vICAgICAgICogcGx1cyBXSU5fSU5JVCAtLSB6ZXJvIG91dCB0byBjdXJyZW50IGRhdGEgcGx1cyBXSU5fSU5JVCwgb3IgdXBcbi8vICAgICAgICogdG8gZW5kIG9mIHdpbmRvdywgd2hpY2hldmVyIGlzIGxlc3MuXG4vLyAgICAgICAqL1xuLy8gICAgICBpbml0ID0gKHVsZyljdXJyICsgV0lOX0lOSVQgLSBzLT5oaWdoX3dhdGVyO1xuLy8gICAgICBpZiAoaW5pdCA+IHMtPndpbmRvd19zaXplIC0gcy0+aGlnaF93YXRlcilcbi8vICAgICAgICBpbml0ID0gcy0+d2luZG93X3NpemUgLSBzLT5oaWdoX3dhdGVyO1xuLy8gICAgICB6bWVtemVybyhzLT53aW5kb3cgKyBzLT5oaWdoX3dhdGVyLCAodW5zaWduZWQpaW5pdCk7XG4vLyAgICAgIHMtPmhpZ2hfd2F0ZXIgKz0gaW5pdDtcbi8vICAgIH1cbi8vICB9XG4vL1xuLy8gIEFzc2VydCgodWxnKXMtPnN0cnN0YXJ0IDw9IHMtPndpbmRvd19zaXplIC0gTUlOX0xPT0tBSEVBRCxcbi8vICAgIFwibm90IGVub3VnaCByb29tIGZvciBzZWFyY2hcIik7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weSB3aXRob3V0IGNvbXByZXNzaW9uIGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSB0aGUgaW5wdXQgc3RyZWFtLCByZXR1cm5cbiAqIHRoZSBjdXJyZW50IGJsb2NrIHN0YXRlLlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBpbnNlcnQgbmV3IHN0cmluZ3MgaW4gdGhlIGRpY3Rpb25hcnkgc2luY2VcbiAqIHVuY29tcHJlc3NpYmxlIGRhdGEgaXMgcHJvYmFibHkgbm90IHVzZWZ1bC4gVGhpcyBmdW5jdGlvbiBpcyB1c2VkXG4gKiBvbmx5IGZvciB0aGUgbGV2ZWw9MCBjb21wcmVzc2lvbiBvcHRpb24uXG4gKiBOT1RFOiB0aGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBvcHRpbWl6ZWQgdG8gYXZvaWQgZXh0cmEgY29weWluZyBmcm9tXG4gKiB3aW5kb3cgdG8gcGVuZGluZ19idWYuXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVfc3RvcmVkKHMsIGZsdXNoKSB7XG4gIC8qIFN0b3JlZCBibG9ja3MgYXJlIGxpbWl0ZWQgdG8gMHhmZmZmIGJ5dGVzLCBwZW5kaW5nX2J1ZiBpcyBsaW1pdGVkXG4gICAqIHRvIHBlbmRpbmdfYnVmX3NpemUsIGFuZCBlYWNoIHN0b3JlZCBibG9jayBoYXMgYSA1IGJ5dGUgaGVhZGVyOlxuICAgKi9cbiAgdmFyIG1heF9ibG9ja19zaXplID0gMHhmZmZmO1xuXG4gIGlmIChtYXhfYmxvY2tfc2l6ZSA+IHMucGVuZGluZ19idWZfc2l6ZSAtIDUpIHtcbiAgICBtYXhfYmxvY2tfc2l6ZSA9IHMucGVuZGluZ19idWZfc2l6ZSAtIDU7XG4gIH1cblxuICAvKiBDb3B5IGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSBpbnB1dCB0byBvdXRwdXQ6ICovXG4gIGZvciAoOzspIHtcbiAgICAvKiBGaWxsIHRoZSB3aW5kb3cgYXMgbXVjaCBhcyBwb3NzaWJsZTogKi9cbiAgICBpZiAocy5sb29rYWhlYWQgPD0gMSkge1xuXG4gICAgICAvL0Fzc2VydChzLT5zdHJzdGFydCA8IHMtPndfc2l6ZStNQVhfRElTVChzKSB8fFxuICAgICAgLy8gIHMtPmJsb2NrX3N0YXJ0ID49IChsb25nKXMtPndfc2l6ZSwgXCJzbGlkZSB0b28gbGF0ZVwiKTtcbi8vICAgICAgaWYgKCEocy5zdHJzdGFydCA8IHMud19zaXplICsgKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkgfHxcbi8vICAgICAgICBzLmJsb2NrX3N0YXJ0ID49IHMud19zaXplKSkge1xuLy8gICAgICAgIHRocm93ICBuZXcgRXJyb3IoXCJzbGlkZSB0b28gbGF0ZVwiKTtcbi8vICAgICAgfVxuXG4gICAgICBmaWxsX3dpbmRvdyhzKTtcbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCAmJiBmbHVzaCA9PT0gWl9OT19GTFVTSCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuXG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgIH1cbiAgICAvL0Fzc2VydChzLT5ibG9ja19zdGFydCA+PSAwTCwgXCJibG9jayBnb25lXCIpO1xuLy8gICAgaWYgKHMuYmxvY2tfc3RhcnQgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJibG9jayBnb25lXCIpO1xuXG4gICAgcy5zdHJzdGFydCArPSBzLmxvb2thaGVhZDtcbiAgICBzLmxvb2thaGVhZCA9IDA7XG5cbiAgICAvKiBFbWl0IGEgc3RvcmVkIGJsb2NrIGlmIHBlbmRpbmdfYnVmIHdpbGwgYmUgZnVsbDogKi9cbiAgICB2YXIgbWF4X3N0YXJ0ID0gcy5ibG9ja19zdGFydCArIG1heF9ibG9ja19zaXplO1xuXG4gICAgaWYgKHMuc3Ryc3RhcnQgPT09IDAgfHwgcy5zdHJzdGFydCA+PSBtYXhfc3RhcnQpIHtcbiAgICAgIC8qIHN0cnN0YXJ0ID09IDAgaXMgcG9zc2libGUgd2hlbiB3cmFwYXJvdW5kIG9uIDE2LWJpdCBtYWNoaW5lICovXG4gICAgICBzLmxvb2thaGVhZCA9IHMuc3Ryc3RhcnQgLSBtYXhfc3RhcnQ7XG4gICAgICBzLnN0cnN0YXJ0ID0gbWF4X3N0YXJ0O1xuICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgLyoqKi9cblxuXG4gICAgfVxuICAgIC8qIEZsdXNoIGlmIHdlIG1heSBoYXZlIHRvIHNsaWRlLCBvdGhlcndpc2UgYmxvY2tfc3RhcnQgbWF5IGJlY29tZVxuICAgICAqIG5lZ2F0aXZlIGFuZCB0aGUgZGF0YSB3aWxsIGJlIGdvbmU6XG4gICAgICovXG4gICAgaWYgKHMuc3Ryc3RhcnQgLSBzLmJsb2NrX3N0YXJ0ID49IChzLndfc2l6ZSAtIE1JTl9MT09LQUhFQUQpKSB7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuICAgIH1cbiAgfVxuXG4gIHMuaW5zZXJ0ID0gMDtcblxuICBpZiAoZmx1c2ggPT09IFpfRklOSVNIKSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAxKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgdHJ1ZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19GSU5JU0hfU1RBUlRFRDtcbiAgICB9XG4gICAgLyoqKi9cbiAgICByZXR1cm4gQlNfRklOSVNIX0RPTkU7XG4gIH1cblxuICBpZiAocy5zdHJzdGFydCA+IHMuYmxvY2tfc3RhcnQpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgfVxuICAgIC8qKiovXG4gIH1cblxuICByZXR1cm4gQlNfTkVFRF9NT1JFO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbXByZXNzIGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSB0aGUgaW5wdXQgc3RyZWFtLCByZXR1cm4gdGhlIGN1cnJlbnRcbiAqIGJsb2NrIHN0YXRlLlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdCBwZXJmb3JtIGxhenkgZXZhbHVhdGlvbiBvZiBtYXRjaGVzIGFuZCBpbnNlcnRzXG4gKiBuZXcgc3RyaW5ncyBpbiB0aGUgZGljdGlvbmFyeSBvbmx5IGZvciB1bm1hdGNoZWQgc3RyaW5ncyBvciBmb3Igc2hvcnRcbiAqIG1hdGNoZXMuIEl0IGlzIHVzZWQgb25seSBmb3IgdGhlIGZhc3QgY29tcHJlc3Npb24gb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZV9mYXN0KHMsIGZsdXNoKSB7XG4gIHZhciBoYXNoX2hlYWQ7ICAgICAgICAvKiBoZWFkIG9mIHRoZSBoYXNoIGNoYWluICovXG4gIHZhciBiZmx1c2g7ICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cblxuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG4gICAgICogYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgZmlsZS4gV2UgbmVlZCBNQVhfTUFUQ0ggYnl0ZXNcbiAgICAgKiBmb3IgdGhlIG5leHQgbWF0Y2gsIHBsdXMgTUlOX01BVENIIGJ5dGVzIHRvIGluc2VydCB0aGVcbiAgICAgKiBzdHJpbmcgZm9sbG93aW5nIHRoZSBuZXh0IG1hdGNoLlxuICAgICAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQpIHtcbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCAmJiBmbHVzaCA9PT0gWl9OT19GTFVTSCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICAgIGJyZWFrOyAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEluc2VydCB0aGUgc3RyaW5nIHdpbmRvd1tzdHJzdGFydCAuLiBzdHJzdGFydCsyXSBpbiB0aGVcbiAgICAgKiBkaWN0aW9uYXJ5LCBhbmQgc2V0IGhhc2hfaGVhZCB0byB0aGUgaGVhZCBvZiB0aGUgaGFzaCBjaGFpbjpcbiAgICAgKi9cbiAgICBoYXNoX2hlYWQgPSAwLypOSUwqLztcbiAgICBpZiAocy5sb29rYWhlYWQgPj0gTUlOX01BVENIKSB7XG4gICAgICAvKioqIElOU0VSVF9TVFJJTkcocywgcy5zdHJzdGFydCwgaGFzaF9oZWFkKTsgKioqL1xuICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbcy5zdHJzdGFydCArIE1JTl9NQVRDSCAtIDFdKSAmIHMuaGFzaF9tYXNrO1xuICAgICAgaGFzaF9oZWFkID0gcy5wcmV2W3Muc3Ryc3RhcnQgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG4gICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzLnN0cnN0YXJ0O1xuICAgICAgLyoqKi9cbiAgICB9XG5cbiAgICAvKiBGaW5kIHRoZSBsb25nZXN0IG1hdGNoLCBkaXNjYXJkaW5nIHRob3NlIDw9IHByZXZfbGVuZ3RoLlxuICAgICAqIEF0IHRoaXMgcG9pbnQgd2UgaGF2ZSBhbHdheXMgbWF0Y2hfbGVuZ3RoIDwgTUlOX01BVENIXG4gICAgICovXG4gICAgaWYgKGhhc2hfaGVhZCAhPT0gMC8qTklMKi8gJiYgKChzLnN0cnN0YXJ0IC0gaGFzaF9oZWFkKSA8PSAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSkpIHtcbiAgICAgIC8qIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLCB3ZSBwcmV2ZW50IG1hdGNoZXMgd2l0aCB0aGUgc3RyaW5nXG4gICAgICAgKiBvZiB3aW5kb3cgaW5kZXggMCAoaW4gcGFydGljdWxhciB3ZSBoYXZlIHRvIGF2b2lkIGEgbWF0Y2hcbiAgICAgICAqIG9mIHRoZSBzdHJpbmcgd2l0aCBpdHNlbGYgYXQgdGhlIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWxlKS5cbiAgICAgICAqL1xuICAgICAgcy5tYXRjaF9sZW5ndGggPSBsb25nZXN0X21hdGNoKHMsIGhhc2hfaGVhZCk7XG4gICAgICAvKiBsb25nZXN0X21hdGNoKCkgc2V0cyBtYXRjaF9zdGFydCAqL1xuICAgIH1cbiAgICBpZiAocy5tYXRjaF9sZW5ndGggPj0gTUlOX01BVENIKSB7XG4gICAgICAvLyBjaGVja19tYXRjaChzLCBzLnN0cnN0YXJ0LCBzLm1hdGNoX3N0YXJ0LCBzLm1hdGNoX2xlbmd0aCk7IC8vIGZvciBkZWJ1ZyBvbmx5XG5cbiAgICAgIC8qKiogX3RyX3RhbGx5X2Rpc3Qocywgcy5zdHJzdGFydCAtIHMubWF0Y2hfc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICBzLm1hdGNoX2xlbmd0aCAtIE1JTl9NQVRDSCwgYmZsdXNoKTsgKioqL1xuICAgICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIHMuc3Ryc3RhcnQgLSBzLm1hdGNoX3N0YXJ0LCBzLm1hdGNoX2xlbmd0aCAtIE1JTl9NQVRDSCk7XG5cbiAgICAgIHMubG9va2FoZWFkIC09IHMubWF0Y2hfbGVuZ3RoO1xuXG4gICAgICAvKiBJbnNlcnQgbmV3IHN0cmluZ3MgaW4gdGhlIGhhc2ggdGFibGUgb25seSBpZiB0aGUgbWF0Y2ggbGVuZ3RoXG4gICAgICAgKiBpcyBub3QgdG9vIGxhcmdlLiBUaGlzIHNhdmVzIHRpbWUgYnV0IGRlZ3JhZGVzIGNvbXByZXNzaW9uLlxuICAgICAgICovXG4gICAgICBpZiAocy5tYXRjaF9sZW5ndGggPD0gcy5tYXhfbGF6eV9tYXRjaC8qbWF4X2luc2VydF9sZW5ndGgqLyAmJiBzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgICAgcy5tYXRjaF9sZW5ndGgtLTsgLyogc3RyaW5nIGF0IHN0cnN0YXJ0IGFscmVhZHkgaW4gdGFibGUgKi9cbiAgICAgICAgZG8ge1xuICAgICAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICAgICAgICAvKioqIElOU0VSVF9TVFJJTkcocywgcy5zdHJzdGFydCwgaGFzaF9oZWFkKTsgKioqL1xuICAgICAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3Muc3Ryc3RhcnQgKyBNSU5fTUFUQ0ggLSAxXSkgJiBzLmhhc2hfbWFzaztcbiAgICAgICAgICBoYXNoX2hlYWQgPSBzLnByZXZbcy5zdHJzdGFydCAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcbiAgICAgICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzLnN0cnN0YXJ0O1xuICAgICAgICAgIC8qKiovXG4gICAgICAgICAgLyogc3Ryc3RhcnQgbmV2ZXIgZXhjZWVkcyBXU0laRS1NQVhfTUFUQ0gsIHNvIHRoZXJlIGFyZVxuICAgICAgICAgICAqIGFsd2F5cyBNSU5fTUFUQ0ggYnl0ZXMgYWhlYWQuXG4gICAgICAgICAgICovXG4gICAgICAgIH0gd2hpbGUgKC0tcy5tYXRjaF9sZW5ndGggIT09IDApO1xuICAgICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgICB9IGVsc2VcbiAgICAgIHtcbiAgICAgICAgcy5zdHJzdGFydCArPSBzLm1hdGNoX2xlbmd0aDtcbiAgICAgICAgcy5tYXRjaF9sZW5ndGggPSAwO1xuICAgICAgICBzLmluc19oID0gcy53aW5kb3dbcy5zdHJzdGFydF07XG4gICAgICAgIC8qIFVQREFURV9IQVNIKHMsIHMuaW5zX2gsIHMud2luZG93W3Muc3Ryc3RhcnQrMV0pOyAqL1xuICAgICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzLnN0cnN0YXJ0ICsgMV0pICYgcy5oYXNoX21hc2s7XG5cbi8vI2lmIE1JTl9NQVRDSCAhPSAzXG4vLyAgICAgICAgICAgICAgICBDYWxsIFVQREFURV9IQVNIKCkgTUlOX01BVENILTMgbW9yZSB0aW1lc1xuLy8jZW5kaWZcbiAgICAgICAgLyogSWYgbG9va2FoZWFkIDwgTUlOX01BVENILCBpbnNfaCBpcyBnYXJiYWdlLCBidXQgaXQgZG9lcyBub3RcbiAgICAgICAgICogbWF0dGVyIHNpbmNlIGl0IHdpbGwgYmUgcmVjb21wdXRlZCBhdCBuZXh0IGRlZmxhdGUgY2FsbC5cbiAgICAgICAgICovXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIE5vIG1hdGNoLCBvdXRwdXQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy53aW5kb3dbcy5zdHJzdGFydF0pKTtcbiAgICAgIC8qKiogX3RyX3RhbGx5X2xpdChzLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSwgYmZsdXNoKTsgKioqL1xuICAgICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIDAsIHMud2luZG93W3Muc3Ryc3RhcnRdKTtcblxuICAgICAgcy5sb29rYWhlYWQtLTtcbiAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICB9XG4gICAgaWYgKGJmbHVzaCkge1xuICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgLyoqKi9cbiAgICB9XG4gIH1cbiAgcy5pbnNlcnQgPSAoKHMuc3Ryc3RhcnQgPCAoTUlOX01BVENIIC0gMSkpID8gcy5zdHJzdGFydCA6IE1JTl9NQVRDSCAtIDEpO1xuICBpZiAoZmx1c2ggPT09IFpfRklOSVNIKSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAxKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgdHJ1ZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19GSU5JU0hfU1RBUlRFRDtcbiAgICB9XG4gICAgLyoqKi9cbiAgICByZXR1cm4gQlNfRklOSVNIX0RPTkU7XG4gIH1cbiAgaWYgKHMubGFzdF9saXQpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgfVxuICAgIC8qKiovXG4gIH1cbiAgcmV0dXJuIEJTX0JMT0NLX0RPTkU7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2FtZSBhcyBhYm92ZSwgYnV0IGFjaGlldmVzIGJldHRlciBjb21wcmVzc2lvbi4gV2UgdXNlIGEgbGF6eVxuICogZXZhbHVhdGlvbiBmb3IgbWF0Y2hlczogYSBtYXRjaCBpcyBmaW5hbGx5IGFkb3B0ZWQgb25seSBpZiB0aGVyZSBpc1xuICogbm8gYmV0dGVyIG1hdGNoIGF0IHRoZSBuZXh0IHdpbmRvdyBwb3NpdGlvbi5cbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZV9zbG93KHMsIGZsdXNoKSB7XG4gIHZhciBoYXNoX2hlYWQ7ICAgICAgICAgIC8qIGhlYWQgb2YgaGFzaCBjaGFpbiAqL1xuICB2YXIgYmZsdXNoOyAgICAgICAgICAgICAgLyogc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkICovXG5cbiAgdmFyIG1heF9pbnNlcnQ7XG5cbiAgLyogUHJvY2VzcyB0aGUgaW5wdXQgYmxvY2suICovXG4gIGZvciAoOzspIHtcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCB3ZSBhbHdheXMgaGF2ZSBlbm91Z2ggbG9va2FoZWFkLCBleGNlcHRcbiAgICAgKiBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCBmaWxlLiBXZSBuZWVkIE1BWF9NQVRDSCBieXRlc1xuICAgICAqIGZvciB0aGUgbmV4dCBtYXRjaCwgcGx1cyBNSU5fTUFUQ0ggYnl0ZXMgdG8gaW5zZXJ0IHRoZVxuICAgICAqIHN0cmluZyBmb2xsb3dpbmcgdGhlIG5leHQgbWF0Y2guXG4gICAgICovXG4gICAgaWYgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCkge1xuICAgICAgZmlsbF93aW5kb3cocyk7XG4gICAgICBpZiAocy5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEICYmIGZsdXNoID09PSBaX05PX0ZMVVNIKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHsgYnJlYWs7IH0gLyogZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2sgKi9cbiAgICB9XG5cbiAgICAvKiBJbnNlcnQgdGhlIHN0cmluZyB3aW5kb3dbc3Ryc3RhcnQgLi4gc3Ryc3RhcnQrMl0gaW4gdGhlXG4gICAgICogZGljdGlvbmFyeSwgYW5kIHNldCBoYXNoX2hlYWQgdG8gdGhlIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW46XG4gICAgICovXG4gICAgaGFzaF9oZWFkID0gMC8qTklMKi87XG4gICAgaWYgKHMubG9va2FoZWFkID49IE1JTl9NQVRDSCkge1xuICAgICAgLyoqKiBJTlNFUlRfU1RSSU5HKHMsIHMuc3Ryc3RhcnQsIGhhc2hfaGVhZCk7ICoqKi9cbiAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3Muc3Ryc3RhcnQgKyBNSU5fTUFUQ0ggLSAxXSkgJiBzLmhhc2hfbWFzaztcbiAgICAgIGhhc2hfaGVhZCA9IHMucHJldltzLnN0cnN0YXJ0ICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgcy5oZWFkW3MuaW5zX2hdID0gcy5zdHJzdGFydDtcbiAgICAgIC8qKiovXG4gICAgfVxuXG4gICAgLyogRmluZCB0aGUgbG9uZ2VzdCBtYXRjaCwgZGlzY2FyZGluZyB0aG9zZSA8PSBwcmV2X2xlbmd0aC5cbiAgICAgKi9cbiAgICBzLnByZXZfbGVuZ3RoID0gcy5tYXRjaF9sZW5ndGg7XG4gICAgcy5wcmV2X21hdGNoID0gcy5tYXRjaF9zdGFydDtcbiAgICBzLm1hdGNoX2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG5cbiAgICBpZiAoaGFzaF9oZWFkICE9PSAwLypOSUwqLyAmJiBzLnByZXZfbGVuZ3RoIDwgcy5tYXhfbGF6eV9tYXRjaCAmJlxuICAgICAgICBzLnN0cnN0YXJ0IC0gaGFzaF9oZWFkIDw9IChzLndfc2l6ZSAtIE1JTl9MT09LQUhFQUQpLypNQVhfRElTVChzKSovKSB7XG4gICAgICAvKiBUbyBzaW1wbGlmeSB0aGUgY29kZSwgd2UgcHJldmVudCBtYXRjaGVzIHdpdGggdGhlIHN0cmluZ1xuICAgICAgICogb2Ygd2luZG93IGluZGV4IDAgKGluIHBhcnRpY3VsYXIgd2UgaGF2ZSB0byBhdm9pZCBhIG1hdGNoXG4gICAgICAgKiBvZiB0aGUgc3RyaW5nIHdpdGggaXRzZWxmIGF0IHRoZSBzdGFydCBvZiB0aGUgaW5wdXQgZmlsZSkuXG4gICAgICAgKi9cbiAgICAgIHMubWF0Y2hfbGVuZ3RoID0gbG9uZ2VzdF9tYXRjaChzLCBoYXNoX2hlYWQpO1xuICAgICAgLyogbG9uZ2VzdF9tYXRjaCgpIHNldHMgbWF0Y2hfc3RhcnQgKi9cblxuICAgICAgaWYgKHMubWF0Y2hfbGVuZ3RoIDw9IDUgJiZcbiAgICAgICAgIChzLnN0cmF0ZWd5ID09PSBaX0ZJTFRFUkVEIHx8IChzLm1hdGNoX2xlbmd0aCA9PT0gTUlOX01BVENIICYmIHMuc3Ryc3RhcnQgLSBzLm1hdGNoX3N0YXJ0ID4gNDA5Ni8qVE9PX0ZBUiovKSkpIHtcblxuICAgICAgICAvKiBJZiBwcmV2X21hdGNoIGlzIGFsc28gTUlOX01BVENILCBtYXRjaF9zdGFydCBpcyBnYXJiYWdlXG4gICAgICAgICAqIGJ1dCB3ZSB3aWxsIGlnbm9yZSB0aGUgY3VycmVudCBtYXRjaCBhbnl3YXkuXG4gICAgICAgICAqL1xuICAgICAgICBzLm1hdGNoX2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIC8qIElmIHRoZXJlIHdhcyBhIG1hdGNoIGF0IHRoZSBwcmV2aW91cyBzdGVwIGFuZCB0aGUgY3VycmVudFxuICAgICAqIG1hdGNoIGlzIG5vdCBiZXR0ZXIsIG91dHB1dCB0aGUgcHJldmlvdXMgbWF0Y2g6XG4gICAgICovXG4gICAgaWYgKHMucHJldl9sZW5ndGggPj0gTUlOX01BVENIICYmIHMubWF0Y2hfbGVuZ3RoIDw9IHMucHJldl9sZW5ndGgpIHtcbiAgICAgIG1heF9pbnNlcnQgPSBzLnN0cnN0YXJ0ICsgcy5sb29rYWhlYWQgLSBNSU5fTUFUQ0g7XG4gICAgICAvKiBEbyBub3QgaW5zZXJ0IHN0cmluZ3MgaW4gaGFzaCB0YWJsZSBiZXlvbmQgdGhpcy4gKi9cblxuICAgICAgLy9jaGVja19tYXRjaChzLCBzLnN0cnN0YXJ0LTEsIHMucHJldl9tYXRjaCwgcy5wcmV2X2xlbmd0aCk7XG5cbiAgICAgIC8qKipfdHJfdGFsbHlfZGlzdChzLCBzLnN0cnN0YXJ0IC0gMSAtIHMucHJldl9tYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgIHMucHJldl9sZW5ndGggLSBNSU5fTUFUQ0gsIGJmbHVzaCk7KioqL1xuICAgICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIHMuc3Ryc3RhcnQgLSAxIC0gcy5wcmV2X21hdGNoLCBzLnByZXZfbGVuZ3RoIC0gTUlOX01BVENIKTtcbiAgICAgIC8qIEluc2VydCBpbiBoYXNoIHRhYmxlIGFsbCBzdHJpbmdzIHVwIHRvIHRoZSBlbmQgb2YgdGhlIG1hdGNoLlxuICAgICAgICogc3Ryc3RhcnQtMSBhbmQgc3Ryc3RhcnQgYXJlIGFscmVhZHkgaW5zZXJ0ZWQuIElmIHRoZXJlIGlzIG5vdFxuICAgICAgICogZW5vdWdoIGxvb2thaGVhZCwgdGhlIGxhc3QgdHdvIHN0cmluZ3MgYXJlIG5vdCBpbnNlcnRlZCBpblxuICAgICAgICogdGhlIGhhc2ggdGFibGUuXG4gICAgICAgKi9cbiAgICAgIHMubG9va2FoZWFkIC09IHMucHJldl9sZW5ndGggLSAxO1xuICAgICAgcy5wcmV2X2xlbmd0aCAtPSAyO1xuICAgICAgZG8ge1xuICAgICAgICBpZiAoKytzLnN0cnN0YXJ0IDw9IG1heF9pbnNlcnQpIHtcbiAgICAgICAgICAvKioqIElOU0VSVF9TVFJJTkcocywgcy5zdHJzdGFydCwgaGFzaF9oZWFkKTsgKioqL1xuICAgICAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3Muc3Ryc3RhcnQgKyBNSU5fTUFUQ0ggLSAxXSkgJiBzLmhhc2hfbWFzaztcbiAgICAgICAgICBoYXNoX2hlYWQgPSBzLnByZXZbcy5zdHJzdGFydCAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcbiAgICAgICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzLnN0cnN0YXJ0O1xuICAgICAgICAgIC8qKiovXG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKC0tcy5wcmV2X2xlbmd0aCAhPT0gMCk7XG4gICAgICBzLm1hdGNoX2F2YWlsYWJsZSA9IDA7XG4gICAgICBzLm1hdGNoX2xlbmd0aCA9IE1JTl9NQVRDSCAtIDE7XG4gICAgICBzLnN0cnN0YXJ0Kys7XG5cbiAgICAgIGlmIChiZmx1c2gpIHtcbiAgICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgICB9XG4gICAgICAgIC8qKiovXG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHMubWF0Y2hfYXZhaWxhYmxlKSB7XG4gICAgICAvKiBJZiB0aGVyZSB3YXMgbm8gbWF0Y2ggYXQgdGhlIHByZXZpb3VzIHBvc2l0aW9uLCBvdXRwdXQgYVxuICAgICAgICogc2luZ2xlIGxpdGVyYWwuIElmIHRoZXJlIHdhcyBhIG1hdGNoIGJ1dCB0aGUgY3VycmVudCBtYXRjaFxuICAgICAgICogaXMgbG9uZ2VyLCB0cnVuY2F0ZSB0aGUgcHJldmlvdXMgbWF0Y2ggdG8gYSBzaW5nbGUgbGl0ZXJhbC5cbiAgICAgICAqL1xuICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsXCIlY1wiLCBzLT53aW5kb3dbcy0+c3Ryc3RhcnQtMV0pKTtcbiAgICAgIC8qKiogX3RyX3RhbGx5X2xpdChzLCBzLndpbmRvd1tzLnN0cnN0YXJ0LTFdLCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydCAtIDFdKTtcblxuICAgICAgaWYgKGJmbHVzaCkge1xuICAgICAgICAvKioqIEZMVVNIX0JMT0NLX09OTFkocywgMCkgKioqL1xuICAgICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgICAgLyoqKi9cbiAgICAgIH1cbiAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICAgIHMubG9va2FoZWFkLS07XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBUaGVyZSBpcyBubyBwcmV2aW91cyBtYXRjaCB0byBjb21wYXJlIHdpdGgsIHdhaXQgZm9yXG4gICAgICAgKiB0aGUgbmV4dCBzdGVwIHRvIGRlY2lkZS5cbiAgICAgICAqL1xuICAgICAgcy5tYXRjaF9hdmFpbGFibGUgPSAxO1xuICAgICAgcy5zdHJzdGFydCsrO1xuICAgICAgcy5sb29rYWhlYWQtLTtcbiAgICB9XG4gIH1cbiAgLy9Bc3NlcnQgKGZsdXNoICE9IFpfTk9fRkxVU0gsIFwibm8gZmx1c2g/XCIpO1xuICBpZiAocy5tYXRjaF9hdmFpbGFibGUpIHtcbiAgICAvL1RyYWNldnYoKHN0ZGVycixcIiVjXCIsIHMtPndpbmRvd1tzLT5zdHJzdGFydC0xXSkpO1xuICAgIC8qKiogX3RyX3RhbGx5X2xpdChzLCBzLndpbmRvd1tzLnN0cnN0YXJ0LTFdLCBiZmx1c2gpOyAqKiovXG4gICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIDAsIHMud2luZG93W3Muc3Ryc3RhcnQgLSAxXSk7XG5cbiAgICBzLm1hdGNoX2F2YWlsYWJsZSA9IDA7XG4gIH1cbiAgcy5pbnNlcnQgPSBzLnN0cnN0YXJ0IDwgTUlOX01BVENIIC0gMSA/IHMuc3Ryc3RhcnQgOiBNSU5fTUFUQ0ggLSAxO1xuICBpZiAoZmx1c2ggPT09IFpfRklOSVNIKSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAxKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgdHJ1ZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19GSU5JU0hfU1RBUlRFRDtcbiAgICB9XG4gICAgLyoqKi9cbiAgICByZXR1cm4gQlNfRklOSVNIX0RPTkU7XG4gIH1cbiAgaWYgKHMubGFzdF9saXQpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgfVxuICAgIC8qKiovXG4gIH1cblxuICByZXR1cm4gQlNfQkxPQ0tfRE9ORTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZvciBaX1JMRSwgc2ltcGx5IGxvb2sgZm9yIHJ1bnMgb2YgYnl0ZXMsIGdlbmVyYXRlIG1hdGNoZXMgb25seSBvZiBkaXN0YW5jZVxuICogb25lLiAgRG8gbm90IG1haW50YWluIGEgaGFzaCB0YWJsZS4gIChJdCB3aWxsIGJlIHJlZ2VuZXJhdGVkIGlmIHRoaXMgcnVuIG9mXG4gKiBkZWZsYXRlIHN3aXRjaGVzIGF3YXkgZnJvbSBaX1JMRS4pXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVfcmxlKHMsIGZsdXNoKSB7XG4gIHZhciBiZmx1c2g7ICAgICAgICAgICAgLyogc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkICovXG4gIHZhciBwcmV2OyAgICAgICAgICAgICAgLyogYnl0ZSBhdCBkaXN0YW5jZSBvbmUgdG8gbWF0Y2ggKi9cbiAgdmFyIHNjYW4sIHN0cmVuZDsgICAgICAvKiBzY2FuIGdvZXMgdXAgdG8gc3RyZW5kIGZvciBsZW5ndGggb2YgcnVuICovXG5cbiAgdmFyIF93aW4gPSBzLndpbmRvdztcblxuICBmb3IgKDs7KSB7XG4gICAgLyogTWFrZSBzdXJlIHRoYXQgd2UgYWx3YXlzIGhhdmUgZW5vdWdoIGxvb2thaGVhZCwgZXhjZXB0XG4gICAgICogYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgZmlsZS4gV2UgbmVlZCBNQVhfTUFUQ0ggYnl0ZXNcbiAgICAgKiBmb3IgdGhlIGxvbmdlc3QgcnVuLCBwbHVzIG9uZSBmb3IgdGhlIHVucm9sbGVkIGxvb3AuXG4gICAgICovXG4gICAgaWYgKHMubG9va2FoZWFkIDw9IE1BWF9NQVRDSCkge1xuICAgICAgZmlsbF93aW5kb3cocyk7XG4gICAgICBpZiAocy5sb29rYWhlYWQgPD0gTUFYX01BVENIICYmIGZsdXNoID09PSBaX05PX0ZMVVNIKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHsgYnJlYWs7IH0gLyogZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2sgKi9cbiAgICB9XG5cbiAgICAvKiBTZWUgaG93IG1hbnkgdGltZXMgdGhlIHByZXZpb3VzIGJ5dGUgcmVwZWF0cyAqL1xuICAgIHMubWF0Y2hfbGVuZ3RoID0gMDtcbiAgICBpZiAocy5sb29rYWhlYWQgPj0gTUlOX01BVENIICYmIHMuc3Ryc3RhcnQgPiAwKSB7XG4gICAgICBzY2FuID0gcy5zdHJzdGFydCAtIDE7XG4gICAgICBwcmV2ID0gX3dpbltzY2FuXTtcbiAgICAgIGlmIChwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSkge1xuICAgICAgICBzdHJlbmQgPSBzLnN0cnN0YXJ0ICsgTUFYX01BVENIO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgLypqc2hpbnQgbm9lbXB0eTpmYWxzZSovXG4gICAgICAgIH0gd2hpbGUgKHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiZcbiAgICAgICAgICAgICAgICAgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJlxuICAgICAgICAgICAgICAgICBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmXG4gICAgICAgICAgICAgICAgIHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiZcbiAgICAgICAgICAgICAgICAgc2NhbiA8IHN0cmVuZCk7XG4gICAgICAgIHMubWF0Y2hfbGVuZ3RoID0gTUFYX01BVENIIC0gKHN0cmVuZCAtIHNjYW4pO1xuICAgICAgICBpZiAocy5tYXRjaF9sZW5ndGggPiBzLmxvb2thaGVhZCkge1xuICAgICAgICAgIHMubWF0Y2hfbGVuZ3RoID0gcy5sb29rYWhlYWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vQXNzZXJ0KHNjYW4gPD0gcy0+d2luZG93Kyh1SW50KShzLT53aW5kb3dfc2l6ZS0xKSwgXCJ3aWxkIHNjYW5cIik7XG4gICAgfVxuXG4gICAgLyogRW1pdCBtYXRjaCBpZiBoYXZlIHJ1biBvZiBNSU5fTUFUQ0ggb3IgbG9uZ2VyLCBlbHNlIGVtaXQgbGl0ZXJhbCAqL1xuICAgIGlmIChzLm1hdGNoX2xlbmd0aCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgIC8vY2hlY2tfbWF0Y2gocywgcy5zdHJzdGFydCwgcy5zdHJzdGFydCAtIDEsIHMubWF0Y2hfbGVuZ3RoKTtcblxuICAgICAgLyoqKiBfdHJfdGFsbHlfZGlzdChzLCAxLCBzLm1hdGNoX2xlbmd0aCAtIE1JTl9NQVRDSCwgYmZsdXNoKTsgKioqL1xuICAgICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIDEsIHMubWF0Y2hfbGVuZ3RoIC0gTUlOX01BVENIKTtcblxuICAgICAgcy5sb29rYWhlYWQgLT0gcy5tYXRjaF9sZW5ndGg7XG4gICAgICBzLnN0cnN0YXJ0ICs9IHMubWF0Y2hfbGVuZ3RoO1xuICAgICAgcy5tYXRjaF9sZW5ndGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiBObyBtYXRjaCwgb3V0cHV0IGEgbGl0ZXJhbCBieXRlICovXG4gICAgICAvL1RyYWNldnYoKHN0ZGVycixcIiVjXCIsIHMtPndpbmRvd1tzLT5zdHJzdGFydF0pKTtcbiAgICAgIC8qKiogX3RyX3RhbGx5X2xpdChzLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSwgYmZsdXNoKTsgKioqL1xuICAgICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIDAsIHMud2luZG93W3Muc3Ryc3RhcnRdKTtcblxuICAgICAgcy5sb29rYWhlYWQtLTtcbiAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICB9XG4gICAgaWYgKGJmbHVzaCkge1xuICAgICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgICAgfVxuICAgICAgLyoqKi9cbiAgICB9XG4gIH1cbiAgcy5pbnNlcnQgPSAwO1xuICBpZiAoZmx1c2ggPT09IFpfRklOSVNIKSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAxKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgdHJ1ZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19GSU5JU0hfU1RBUlRFRDtcbiAgICB9XG4gICAgLyoqKi9cbiAgICByZXR1cm4gQlNfRklOSVNIX0RPTkU7XG4gIH1cbiAgaWYgKHMubGFzdF9saXQpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCBmYWxzZSk7XG4gICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgfVxuICAgIC8qKiovXG4gIH1cbiAgcmV0dXJuIEJTX0JMT0NLX0RPTkU7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRm9yIFpfSFVGRk1BTl9PTkxZLCBkbyBub3QgbG9vayBmb3IgbWF0Y2hlcy4gIERvIG5vdCBtYWludGFpbiBhIGhhc2ggdGFibGUuXG4gKiAoSXQgd2lsbCBiZSByZWdlbmVyYXRlZCBpZiB0aGlzIHJ1biBvZiBkZWZsYXRlIHN3aXRjaGVzIGF3YXkgZnJvbSBIdWZmbWFuLilcbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZV9odWZmKHMsIGZsdXNoKSB7XG4gIHZhciBiZmx1c2g7ICAgICAgICAgICAgIC8qIHNldCBpZiBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZCAqL1xuXG4gIGZvciAoOzspIHtcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCB3ZSBoYXZlIGEgbGl0ZXJhbCB0byB3cml0ZS4gKi9cbiAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9OT19GTFVTSCkge1xuICAgICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7ICAgICAgLyogZmx1c2ggdGhlIGN1cnJlbnQgYmxvY2sgKi9cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBPdXRwdXQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICBzLm1hdGNoX2xlbmd0aCA9IDA7XG4gICAgLy9UcmFjZXZ2KChzdGRlcnIsXCIlY1wiLCBzLT53aW5kb3dbcy0+c3Ryc3RhcnRdKSk7XG4gICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnRdLCBiZmx1c2gpOyAqKiovXG4gICAgYmZsdXNoID0gdHJlZXMuX3RyX3RhbGx5KHMsIDAsIHMud2luZG93W3Muc3Ryc3RhcnRdKTtcbiAgICBzLmxvb2thaGVhZC0tO1xuICAgIHMuc3Ryc3RhcnQrKztcbiAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuICAgIH1cbiAgfVxuICBzLmluc2VydCA9IDA7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDEpOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCB0cnVlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX0ZJTklTSF9TVEFSVEVEO1xuICAgIH1cbiAgICAvKioqL1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuICBpZiAocy5sYXN0X2xpdCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICB9XG4gICAgLyoqKi9cbiAgfVxuICByZXR1cm4gQlNfQkxPQ0tfRE9ORTtcbn1cblxuLyogVmFsdWVzIGZvciBtYXhfbGF6eV9tYXRjaCwgZ29vZF9tYXRjaCBhbmQgbWF4X2NoYWluX2xlbmd0aCwgZGVwZW5kaW5nIG9uXG4gKiB0aGUgZGVzaXJlZCBwYWNrIGxldmVsICgwLi45KS4gVGhlIHZhbHVlcyBnaXZlbiBiZWxvdyBoYXZlIGJlZW4gdHVuZWQgdG9cbiAqIGV4Y2x1ZGUgd29yc3QgY2FzZSBwZXJmb3JtYW5jZSBmb3IgcGF0aG9sb2dpY2FsIGZpbGVzLiBCZXR0ZXIgdmFsdWVzIG1heSBiZVxuICogZm91bmQgZm9yIHNwZWNpZmljIGZpbGVzLlxuICovXG5mdW5jdGlvbiBDb25maWcoZ29vZF9sZW5ndGgsIG1heF9sYXp5LCBuaWNlX2xlbmd0aCwgbWF4X2NoYWluLCBmdW5jKSB7XG4gIHRoaXMuZ29vZF9sZW5ndGggPSBnb29kX2xlbmd0aDtcbiAgdGhpcy5tYXhfbGF6eSA9IG1heF9sYXp5O1xuICB0aGlzLm5pY2VfbGVuZ3RoID0gbmljZV9sZW5ndGg7XG4gIHRoaXMubWF4X2NoYWluID0gbWF4X2NoYWluO1xuICB0aGlzLmZ1bmMgPSBmdW5jO1xufVxuXG52YXIgY29uZmlndXJhdGlvbl90YWJsZTtcblxuY29uZmlndXJhdGlvbl90YWJsZSA9IFtcbiAgLyogICAgICBnb29kIGxhenkgbmljZSBjaGFpbiAqL1xuICBuZXcgQ29uZmlnKDAsIDAsIDAsIDAsIGRlZmxhdGVfc3RvcmVkKSwgICAgICAgICAgLyogMCBzdG9yZSBvbmx5ICovXG4gIG5ldyBDb25maWcoNCwgNCwgOCwgNCwgZGVmbGF0ZV9mYXN0KSwgICAgICAgICAgICAvKiAxIG1heCBzcGVlZCwgbm8gbGF6eSBtYXRjaGVzICovXG4gIG5ldyBDb25maWcoNCwgNSwgMTYsIDgsIGRlZmxhdGVfZmFzdCksICAgICAgICAgICAvKiAyICovXG4gIG5ldyBDb25maWcoNCwgNiwgMzIsIDMyLCBkZWZsYXRlX2Zhc3QpLCAgICAgICAgICAvKiAzICovXG5cbiAgbmV3IENvbmZpZyg0LCA0LCAxNiwgMTYsIGRlZmxhdGVfc2xvdyksICAgICAgICAgIC8qIDQgbGF6eSBtYXRjaGVzICovXG4gIG5ldyBDb25maWcoOCwgMTYsIDMyLCAzMiwgZGVmbGF0ZV9zbG93KSwgICAgICAgICAvKiA1ICovXG4gIG5ldyBDb25maWcoOCwgMTYsIDEyOCwgMTI4LCBkZWZsYXRlX3Nsb3cpLCAgICAgICAvKiA2ICovXG4gIG5ldyBDb25maWcoOCwgMzIsIDEyOCwgMjU2LCBkZWZsYXRlX3Nsb3cpLCAgICAgICAvKiA3ICovXG4gIG5ldyBDb25maWcoMzIsIDEyOCwgMjU4LCAxMDI0LCBkZWZsYXRlX3Nsb3cpLCAgICAvKiA4ICovXG4gIG5ldyBDb25maWcoMzIsIDI1OCwgMjU4LCA0MDk2LCBkZWZsYXRlX3Nsb3cpICAgICAvKiA5IG1heCBjb21wcmVzc2lvbiAqL1xuXTtcblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEluaXRpYWxpemUgdGhlIFwibG9uZ2VzdCBtYXRjaFwiIHJvdXRpbmVzIGZvciBhIG5ldyB6bGliIHN0cmVhbVxuICovXG5mdW5jdGlvbiBsbV9pbml0KHMpIHtcbiAgcy53aW5kb3dfc2l6ZSA9IDIgKiBzLndfc2l6ZTtcblxuICAvKioqIENMRUFSX0hBU0gocyk7ICoqKi9cbiAgemVybyhzLmhlYWQpOyAvLyBGaWxsIHdpdGggTklMICg9IDApO1xuXG4gIC8qIFNldCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnM6XG4gICAqL1xuICBzLm1heF9sYXp5X21hdGNoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5tYXhfbGF6eTtcbiAgcy5nb29kX21hdGNoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5nb29kX2xlbmd0aDtcbiAgcy5uaWNlX21hdGNoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5uaWNlX2xlbmd0aDtcbiAgcy5tYXhfY2hhaW5fbGVuZ3RoID0gY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5tYXhfY2hhaW47XG5cbiAgcy5zdHJzdGFydCA9IDA7XG4gIHMuYmxvY2tfc3RhcnQgPSAwO1xuICBzLmxvb2thaGVhZCA9IDA7XG4gIHMuaW5zZXJ0ID0gMDtcbiAgcy5tYXRjaF9sZW5ndGggPSBzLnByZXZfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgcy5tYXRjaF9hdmFpbGFibGUgPSAwO1xuICBzLmluc19oID0gMDtcbn1cblxuXG5mdW5jdGlvbiBEZWZsYXRlU3RhdGUoKSB7XG4gIHRoaXMuc3RybSA9IG51bGw7ICAgICAgICAgICAgLyogcG9pbnRlciBiYWNrIHRvIHRoaXMgemxpYiBzdHJlYW0gKi9cbiAgdGhpcy5zdGF0dXMgPSAwOyAgICAgICAgICAgIC8qIGFzIHRoZSBuYW1lIGltcGxpZXMgKi9cbiAgdGhpcy5wZW5kaW5nX2J1ZiA9IG51bGw7ICAgICAgLyogb3V0cHV0IHN0aWxsIHBlbmRpbmcgKi9cbiAgdGhpcy5wZW5kaW5nX2J1Zl9zaXplID0gMDsgIC8qIHNpemUgb2YgcGVuZGluZ19idWYgKi9cbiAgdGhpcy5wZW5kaW5nX291dCA9IDA7ICAgICAgIC8qIG5leHQgcGVuZGluZyBieXRlIHRvIG91dHB1dCB0byB0aGUgc3RyZWFtICovXG4gIHRoaXMucGVuZGluZyA9IDA7ICAgICAgICAgICAvKiBuYiBvZiBieXRlcyBpbiB0aGUgcGVuZGluZyBidWZmZXIgKi9cbiAgdGhpcy53cmFwID0gMDsgICAgICAgICAgICAgIC8qIGJpdCAwIHRydWUgZm9yIHpsaWIsIGJpdCAxIHRydWUgZm9yIGd6aXAgKi9cbiAgdGhpcy5nemhlYWQgPSBudWxsOyAgICAgICAgIC8qIGd6aXAgaGVhZGVyIGluZm9ybWF0aW9uIHRvIHdyaXRlICovXG4gIHRoaXMuZ3ppbmRleCA9IDA7ICAgICAgICAgICAvKiB3aGVyZSBpbiBleHRyYSwgbmFtZSwgb3IgY29tbWVudCAqL1xuICB0aGlzLm1ldGhvZCA9IFpfREVGTEFURUQ7IC8qIGNhbiBvbmx5IGJlIERFRkxBVEVEICovXG4gIHRoaXMubGFzdF9mbHVzaCA9IC0xOyAgIC8qIHZhbHVlIG9mIGZsdXNoIHBhcmFtIGZvciBwcmV2aW91cyBkZWZsYXRlIGNhbGwgKi9cblxuICB0aGlzLndfc2l6ZSA9IDA7ICAvKiBMWjc3IHdpbmRvdyBzaXplICgzMksgYnkgZGVmYXVsdCkgKi9cbiAgdGhpcy53X2JpdHMgPSAwOyAgLyogbG9nMih3X3NpemUpICAoOC4uMTYpICovXG4gIHRoaXMud19tYXNrID0gMDsgIC8qIHdfc2l6ZSAtIDEgKi9cblxuICB0aGlzLndpbmRvdyA9IG51bGw7XG4gIC8qIFNsaWRpbmcgd2luZG93LiBJbnB1dCBieXRlcyBhcmUgcmVhZCBpbnRvIHRoZSBzZWNvbmQgaGFsZiBvZiB0aGUgd2luZG93LFxuICAgKiBhbmQgbW92ZSB0byB0aGUgZmlyc3QgaGFsZiBsYXRlciB0byBrZWVwIGEgZGljdGlvbmFyeSBvZiBhdCBsZWFzdCB3U2l6ZVxuICAgKiBieXRlcy4gV2l0aCB0aGlzIG9yZ2FuaXphdGlvbiwgbWF0Y2hlcyBhcmUgbGltaXRlZCB0byBhIGRpc3RhbmNlIG9mXG4gICAqIHdTaXplLU1BWF9NQVRDSCBieXRlcywgYnV0IHRoaXMgZW5zdXJlcyB0aGF0IElPIGlzIGFsd2F5c1xuICAgKiBwZXJmb3JtZWQgd2l0aCBhIGxlbmd0aCBtdWx0aXBsZSBvZiB0aGUgYmxvY2sgc2l6ZS5cbiAgICovXG5cbiAgdGhpcy53aW5kb3dfc2l6ZSA9IDA7XG4gIC8qIEFjdHVhbCBzaXplIG9mIHdpbmRvdzogMip3U2l6ZSwgZXhjZXB0IHdoZW4gdGhlIHVzZXIgaW5wdXQgYnVmZmVyXG4gICAqIGlzIGRpcmVjdGx5IHVzZWQgYXMgc2xpZGluZyB3aW5kb3cuXG4gICAqL1xuXG4gIHRoaXMucHJldiA9IG51bGw7XG4gIC8qIExpbmsgdG8gb2xkZXIgc3RyaW5nIHdpdGggc2FtZSBoYXNoIGluZGV4LiBUbyBsaW1pdCB0aGUgc2l6ZSBvZiB0aGlzXG4gICAqIGFycmF5IHRvIDY0SywgdGhpcyBsaW5rIGlzIG1haW50YWluZWQgb25seSBmb3IgdGhlIGxhc3QgMzJLIHN0cmluZ3MuXG4gICAqIEFuIGluZGV4IGluIHRoaXMgYXJyYXkgaXMgdGh1cyBhIHdpbmRvdyBpbmRleCBtb2R1bG8gMzJLLlxuICAgKi9cblxuICB0aGlzLmhlYWQgPSBudWxsOyAgIC8qIEhlYWRzIG9mIHRoZSBoYXNoIGNoYWlucyBvciBOSUwuICovXG5cbiAgdGhpcy5pbnNfaCA9IDA7ICAgICAgIC8qIGhhc2ggaW5kZXggb2Ygc3RyaW5nIHRvIGJlIGluc2VydGVkICovXG4gIHRoaXMuaGFzaF9zaXplID0gMDsgICAvKiBudW1iZXIgb2YgZWxlbWVudHMgaW4gaGFzaCB0YWJsZSAqL1xuICB0aGlzLmhhc2hfYml0cyA9IDA7ICAgLyogbG9nMihoYXNoX3NpemUpICovXG4gIHRoaXMuaGFzaF9tYXNrID0gMDsgICAvKiBoYXNoX3NpemUtMSAqL1xuXG4gIHRoaXMuaGFzaF9zaGlmdCA9IDA7XG4gIC8qIE51bWJlciBvZiBiaXRzIGJ5IHdoaWNoIGluc19oIG11c3QgYmUgc2hpZnRlZCBhdCBlYWNoIGlucHV0XG4gICAqIHN0ZXAuIEl0IG11c3QgYmUgc3VjaCB0aGF0IGFmdGVyIE1JTl9NQVRDSCBzdGVwcywgdGhlIG9sZGVzdFxuICAgKiBieXRlIG5vIGxvbmdlciB0YWtlcyBwYXJ0IGluIHRoZSBoYXNoIGtleSwgdGhhdCBpczpcbiAgICogICBoYXNoX3NoaWZ0ICogTUlOX01BVENIID49IGhhc2hfYml0c1xuICAgKi9cblxuICB0aGlzLmJsb2NrX3N0YXJ0ID0gMDtcbiAgLyogV2luZG93IHBvc2l0aW9uIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgb3V0cHV0IGJsb2NrLiBHZXRzXG4gICAqIG5lZ2F0aXZlIHdoZW4gdGhlIHdpbmRvdyBpcyBtb3ZlZCBiYWNrd2FyZHMuXG4gICAqL1xuXG4gIHRoaXMubWF0Y2hfbGVuZ3RoID0gMDsgICAgICAvKiBsZW5ndGggb2YgYmVzdCBtYXRjaCAqL1xuICB0aGlzLnByZXZfbWF0Y2ggPSAwOyAgICAgICAgLyogcHJldmlvdXMgbWF0Y2ggKi9cbiAgdGhpcy5tYXRjaF9hdmFpbGFibGUgPSAwOyAgIC8qIHNldCBpZiBwcmV2aW91cyBtYXRjaCBleGlzdHMgKi9cbiAgdGhpcy5zdHJzdGFydCA9IDA7ICAgICAgICAgIC8qIHN0YXJ0IG9mIHN0cmluZyB0byBpbnNlcnQgKi9cbiAgdGhpcy5tYXRjaF9zdGFydCA9IDA7ICAgICAgIC8qIHN0YXJ0IG9mIG1hdGNoaW5nIHN0cmluZyAqL1xuICB0aGlzLmxvb2thaGVhZCA9IDA7ICAgICAgICAgLyogbnVtYmVyIG9mIHZhbGlkIGJ5dGVzIGFoZWFkIGluIHdpbmRvdyAqL1xuXG4gIHRoaXMucHJldl9sZW5ndGggPSAwO1xuICAvKiBMZW5ndGggb2YgdGhlIGJlc3QgbWF0Y2ggYXQgcHJldmlvdXMgc3RlcC4gTWF0Y2hlcyBub3QgZ3JlYXRlciB0aGFuIHRoaXNcbiAgICogYXJlIGRpc2NhcmRlZC4gVGhpcyBpcyB1c2VkIGluIHRoZSBsYXp5IG1hdGNoIGV2YWx1YXRpb24uXG4gICAqL1xuXG4gIHRoaXMubWF4X2NoYWluX2xlbmd0aCA9IDA7XG4gIC8qIFRvIHNwZWVkIHVwIGRlZmxhdGlvbiwgaGFzaCBjaGFpbnMgYXJlIG5ldmVyIHNlYXJjaGVkIGJleW9uZCB0aGlzXG4gICAqIGxlbmd0aC4gIEEgaGlnaGVyIGxpbWl0IGltcHJvdmVzIGNvbXByZXNzaW9uIHJhdGlvIGJ1dCBkZWdyYWRlcyB0aGVcbiAgICogc3BlZWQuXG4gICAqL1xuXG4gIHRoaXMubWF4X2xhenlfbWF0Y2ggPSAwO1xuICAvKiBBdHRlbXB0IHRvIGZpbmQgYSBiZXR0ZXIgbWF0Y2ggb25seSB3aGVuIHRoZSBjdXJyZW50IG1hdGNoIGlzIHN0cmljdGx5XG4gICAqIHNtYWxsZXIgdGhhbiB0aGlzIHZhbHVlLiBUaGlzIG1lY2hhbmlzbSBpcyB1c2VkIG9ubHkgZm9yIGNvbXByZXNzaW9uXG4gICAqIGxldmVscyA+PSA0LlxuICAgKi9cbiAgLy8gVGhhdCdzIGFsaWFzIHRvIG1heF9sYXp5X21hdGNoLCBkb24ndCB1c2UgZGlyZWN0bHlcbiAgLy90aGlzLm1heF9pbnNlcnRfbGVuZ3RoID0gMDtcbiAgLyogSW5zZXJ0IG5ldyBzdHJpbmdzIGluIHRoZSBoYXNoIHRhYmxlIG9ubHkgaWYgdGhlIG1hdGNoIGxlbmd0aCBpcyBub3RcbiAgICogZ3JlYXRlciB0aGFuIHRoaXMgbGVuZ3RoLiBUaGlzIHNhdmVzIHRpbWUgYnV0IGRlZ3JhZGVzIGNvbXByZXNzaW9uLlxuICAgKiBtYXhfaW5zZXJ0X2xlbmd0aCBpcyB1c2VkIG9ubHkgZm9yIGNvbXByZXNzaW9uIGxldmVscyA8PSAzLlxuICAgKi9cblxuICB0aGlzLmxldmVsID0gMDsgICAgIC8qIGNvbXByZXNzaW9uIGxldmVsICgxLi45KSAqL1xuICB0aGlzLnN0cmF0ZWd5ID0gMDsgIC8qIGZhdm9yIG9yIGZvcmNlIEh1ZmZtYW4gY29kaW5nKi9cblxuICB0aGlzLmdvb2RfbWF0Y2ggPSAwO1xuICAvKiBVc2UgYSBmYXN0ZXIgc2VhcmNoIHdoZW4gdGhlIHByZXZpb3VzIG1hdGNoIGlzIGxvbmdlciB0aGFuIHRoaXMgKi9cblxuICB0aGlzLm5pY2VfbWF0Y2ggPSAwOyAvKiBTdG9wIHNlYXJjaGluZyB3aGVuIGN1cnJlbnQgbWF0Y2ggZXhjZWVkcyB0aGlzICovXG5cbiAgICAgICAgICAgICAgLyogdXNlZCBieSB0cmVlcy5jOiAqL1xuXG4gIC8qIERpZG4ndCB1c2UgY3RfZGF0YSB0eXBlZGVmIGJlbG93IHRvIHN1cHByZXNzIGNvbXBpbGVyIHdhcm5pbmcgKi9cblxuICAvLyBzdHJ1Y3QgY3RfZGF0YV9zIGR5bl9sdHJlZVtIRUFQX1NJWkVdOyAgIC8qIGxpdGVyYWwgYW5kIGxlbmd0aCB0cmVlICovXG4gIC8vIHN0cnVjdCBjdF9kYXRhX3MgZHluX2R0cmVlWzIqRF9DT0RFUysxXTsgLyogZGlzdGFuY2UgdHJlZSAqL1xuICAvLyBzdHJ1Y3QgY3RfZGF0YV9zIGJsX3RyZWVbMipCTF9DT0RFUysxXTsgIC8qIEh1ZmZtYW4gdHJlZSBmb3IgYml0IGxlbmd0aHMgKi9cblxuICAvLyBVc2UgZmxhdCBhcnJheSBvZiBET1VCTEUgc2l6ZSwgd2l0aCBpbnRlcmxlYXZlZCBmYXRhLFxuICAvLyBiZWNhdXNlIEpTIGRvZXMgbm90IHN1cHBvcnQgZWZmZWN0aXZlXG4gIHRoaXMuZHluX2x0cmVlICA9IG5ldyB1dGlscy5CdWYxNihIRUFQX1NJWkUgKiAyKTtcbiAgdGhpcy5keW5fZHRyZWUgID0gbmV3IHV0aWxzLkJ1ZjE2KCgyICogRF9DT0RFUyArIDEpICogMik7XG4gIHRoaXMuYmxfdHJlZSAgICA9IG5ldyB1dGlscy5CdWYxNigoMiAqIEJMX0NPREVTICsgMSkgKiAyKTtcbiAgemVybyh0aGlzLmR5bl9sdHJlZSk7XG4gIHplcm8odGhpcy5keW5fZHRyZWUpO1xuICB6ZXJvKHRoaXMuYmxfdHJlZSk7XG5cbiAgdGhpcy5sX2Rlc2MgICA9IG51bGw7ICAgICAgICAgLyogZGVzYy4gZm9yIGxpdGVyYWwgdHJlZSAqL1xuICB0aGlzLmRfZGVzYyAgID0gbnVsbDsgICAgICAgICAvKiBkZXNjLiBmb3IgZGlzdGFuY2UgdHJlZSAqL1xuICB0aGlzLmJsX2Rlc2MgID0gbnVsbDsgICAgICAgICAvKiBkZXNjLiBmb3IgYml0IGxlbmd0aCB0cmVlICovXG5cbiAgLy91c2ggYmxfY291bnRbTUFYX0JJVFMrMV07XG4gIHRoaXMuYmxfY291bnQgPSBuZXcgdXRpbHMuQnVmMTYoTUFYX0JJVFMgKyAxKTtcbiAgLyogbnVtYmVyIG9mIGNvZGVzIGF0IGVhY2ggYml0IGxlbmd0aCBmb3IgYW4gb3B0aW1hbCB0cmVlICovXG5cbiAgLy9pbnQgaGVhcFsyKkxfQ09ERVMrMV07ICAgICAgLyogaGVhcCB1c2VkIHRvIGJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzICovXG4gIHRoaXMuaGVhcCA9IG5ldyB1dGlscy5CdWYxNigyICogTF9DT0RFUyArIDEpOyAgLyogaGVhcCB1c2VkIHRvIGJ1aWxkIHRoZSBIdWZmbWFuIHRyZWVzICovXG4gIHplcm8odGhpcy5oZWFwKTtcblxuICB0aGlzLmhlYXBfbGVuID0gMDsgICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGhlYXAgKi9cbiAgdGhpcy5oZWFwX21heCA9IDA7ICAgICAgICAgICAgICAgLyogZWxlbWVudCBvZiBsYXJnZXN0IGZyZXF1ZW5jeSAqL1xuICAvKiBUaGUgc29ucyBvZiBoZWFwW25dIGFyZSBoZWFwWzIqbl0gYW5kIGhlYXBbMipuKzFdLiBoZWFwWzBdIGlzIG5vdCB1c2VkLlxuICAgKiBUaGUgc2FtZSBoZWFwIGFycmF5IGlzIHVzZWQgdG8gYnVpbGQgYWxsIHRyZWVzLlxuICAgKi9cblxuICB0aGlzLmRlcHRoID0gbmV3IHV0aWxzLkJ1ZjE2KDIgKiBMX0NPREVTICsgMSk7IC8vdWNoIGRlcHRoWzIqTF9DT0RFUysxXTtcbiAgemVybyh0aGlzLmRlcHRoKTtcbiAgLyogRGVwdGggb2YgZWFjaCBzdWJ0cmVlIHVzZWQgYXMgdGllIGJyZWFrZXIgZm9yIHRyZWVzIG9mIGVxdWFsIGZyZXF1ZW5jeVxuICAgKi9cblxuICB0aGlzLmxfYnVmID0gMDsgICAgICAgICAgLyogYnVmZmVyIGluZGV4IGZvciBsaXRlcmFscyBvciBsZW5ndGhzICovXG5cbiAgdGhpcy5saXRfYnVmc2l6ZSA9IDA7XG4gIC8qIFNpemUgb2YgbWF0Y2ggYnVmZmVyIGZvciBsaXRlcmFscy9sZW5ndGhzLiAgVGhlcmUgYXJlIDQgcmVhc29ucyBmb3JcbiAgICogbGltaXRpbmcgbGl0X2J1ZnNpemUgdG8gNjRLOlxuICAgKiAgIC0gZnJlcXVlbmNpZXMgY2FuIGJlIGtlcHQgaW4gMTYgYml0IGNvdW50ZXJzXG4gICAqICAgLSBpZiBjb21wcmVzc2lvbiBpcyBub3Qgc3VjY2Vzc2Z1bCBmb3IgdGhlIGZpcnN0IGJsb2NrLCBhbGwgaW5wdXRcbiAgICogICAgIGRhdGEgaXMgc3RpbGwgaW4gdGhlIHdpbmRvdyBzbyB3ZSBjYW4gc3RpbGwgZW1pdCBhIHN0b3JlZCBibG9jayBldmVuXG4gICAqICAgICB3aGVuIGlucHV0IGNvbWVzIGZyb20gc3RhbmRhcmQgaW5wdXQuICAoVGhpcyBjYW4gYWxzbyBiZSBkb25lIGZvclxuICAgKiAgICAgYWxsIGJsb2NrcyBpZiBsaXRfYnVmc2l6ZSBpcyBub3QgZ3JlYXRlciB0aGFuIDMySy4pXG4gICAqICAgLSBpZiBjb21wcmVzc2lvbiBpcyBub3Qgc3VjY2Vzc2Z1bCBmb3IgYSBmaWxlIHNtYWxsZXIgdGhhbiA2NEssIHdlIGNhblxuICAgKiAgICAgZXZlbiBlbWl0IGEgc3RvcmVkIGZpbGUgaW5zdGVhZCBvZiBhIHN0b3JlZCBibG9jayAoc2F2aW5nIDUgYnl0ZXMpLlxuICAgKiAgICAgVGhpcyBpcyBhcHBsaWNhYmxlIG9ubHkgZm9yIHppcCAobm90IGd6aXAgb3IgemxpYikuXG4gICAqICAgLSBjcmVhdGluZyBuZXcgSHVmZm1hbiB0cmVlcyBsZXNzIGZyZXF1ZW50bHkgbWF5IG5vdCBwcm92aWRlIGZhc3RcbiAgICogICAgIGFkYXB0YXRpb24gdG8gY2hhbmdlcyBpbiB0aGUgaW5wdXQgZGF0YSBzdGF0aXN0aWNzLiAoVGFrZSBmb3JcbiAgICogICAgIGV4YW1wbGUgYSBiaW5hcnkgZmlsZSB3aXRoIHBvb3JseSBjb21wcmVzc2libGUgY29kZSBmb2xsb3dlZCBieVxuICAgKiAgICAgYSBoaWdobHkgY29tcHJlc3NpYmxlIHN0cmluZyB0YWJsZS4pIFNtYWxsZXIgYnVmZmVyIHNpemVzIGdpdmVcbiAgICogICAgIGZhc3QgYWRhcHRhdGlvbiBidXQgaGF2ZSBvZiBjb3Vyc2UgdGhlIG92ZXJoZWFkIG9mIHRyYW5zbWl0dGluZ1xuICAgKiAgICAgdHJlZXMgbW9yZSBmcmVxdWVudGx5LlxuICAgKiAgIC0gSSBjYW4ndCBjb3VudCBhYm92ZSA0XG4gICAqL1xuXG4gIHRoaXMubGFzdF9saXQgPSAwOyAgICAgIC8qIHJ1bm5pbmcgaW5kZXggaW4gbF9idWYgKi9cblxuICB0aGlzLmRfYnVmID0gMDtcbiAgLyogQnVmZmVyIGluZGV4IGZvciBkaXN0YW5jZXMuIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLCBkX2J1ZiBhbmQgbF9idWYgaGF2ZVxuICAgKiB0aGUgc2FtZSBudW1iZXIgb2YgZWxlbWVudHMuIFRvIHVzZSBkaWZmZXJlbnQgbGVuZ3RocywgYW4gZXh0cmEgZmxhZ1xuICAgKiBhcnJheSB3b3VsZCBiZSBuZWNlc3NhcnkuXG4gICAqL1xuXG4gIHRoaXMub3B0X2xlbiA9IDA7ICAgICAgIC8qIGJpdCBsZW5ndGggb2YgY3VycmVudCBibG9jayB3aXRoIG9wdGltYWwgdHJlZXMgKi9cbiAgdGhpcy5zdGF0aWNfbGVuID0gMDsgICAgLyogYml0IGxlbmd0aCBvZiBjdXJyZW50IGJsb2NrIHdpdGggc3RhdGljIHRyZWVzICovXG4gIHRoaXMubWF0Y2hlcyA9IDA7ICAgICAgIC8qIG51bWJlciBvZiBzdHJpbmcgbWF0Y2hlcyBpbiBjdXJyZW50IGJsb2NrICovXG4gIHRoaXMuaW5zZXJ0ID0gMDsgICAgICAgIC8qIGJ5dGVzIGF0IGVuZCBvZiB3aW5kb3cgbGVmdCB0byBpbnNlcnQgKi9cblxuXG4gIHRoaXMuYmlfYnVmID0gMDtcbiAgLyogT3V0cHV0IGJ1ZmZlci4gYml0cyBhcmUgaW5zZXJ0ZWQgc3RhcnRpbmcgYXQgdGhlIGJvdHRvbSAobGVhc3RcbiAgICogc2lnbmlmaWNhbnQgYml0cykuXG4gICAqL1xuICB0aGlzLmJpX3ZhbGlkID0gMDtcbiAgLyogTnVtYmVyIG9mIHZhbGlkIGJpdHMgaW4gYmlfYnVmLiAgQWxsIGJpdHMgYWJvdmUgdGhlIGxhc3QgdmFsaWQgYml0XG4gICAqIGFyZSBhbHdheXMgemVyby5cbiAgICovXG5cbiAgLy8gVXNlZCBmb3Igd2luZG93IG1lbW9yeSBpbml0LiBXZSBzYWZlbHkgaWdub3JlIGl0IGZvciBKUy4gVGhhdCBtYWtlc1xuICAvLyBzZW5zZSBvbmx5IGZvciBwb2ludGVycyBhbmQgbWVtb3J5IGNoZWNrIHRvb2xzLlxuICAvL3RoaXMuaGlnaF93YXRlciA9IDA7XG4gIC8qIEhpZ2ggd2F0ZXIgbWFyayBvZmZzZXQgaW4gd2luZG93IGZvciBpbml0aWFsaXplZCBieXRlcyAtLSBieXRlcyBhYm92ZVxuICAgKiB0aGlzIGFyZSBzZXQgdG8gemVybyBpbiBvcmRlciB0byBhdm9pZCBtZW1vcnkgY2hlY2sgd2FybmluZ3Mgd2hlblxuICAgKiBsb25nZXN0IG1hdGNoIHJvdXRpbmVzIGFjY2VzcyBieXRlcyBwYXN0IHRoZSBpbnB1dC4gIFRoaXMgaXMgdGhlblxuICAgKiB1cGRhdGVkIHRvIHRoZSBuZXcgaGlnaCB3YXRlciBtYXJrLlxuICAgKi9cbn1cblxuXG5mdW5jdGlvbiBkZWZsYXRlUmVzZXRLZWVwKHN0cm0pIHtcbiAgdmFyIHM7XG5cbiAgaWYgKCFzdHJtIHx8ICFzdHJtLnN0YXRlKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCBaX1NUUkVBTV9FUlJPUik7XG4gIH1cblxuICBzdHJtLnRvdGFsX2luID0gc3RybS50b3RhbF9vdXQgPSAwO1xuICBzdHJtLmRhdGFfdHlwZSA9IFpfVU5LTk9XTjtcblxuICBzID0gc3RybS5zdGF0ZTtcbiAgcy5wZW5kaW5nID0gMDtcbiAgcy5wZW5kaW5nX291dCA9IDA7XG5cbiAgaWYgKHMud3JhcCA8IDApIHtcbiAgICBzLndyYXAgPSAtcy53cmFwO1xuICAgIC8qIHdhcyBtYWRlIG5lZ2F0aXZlIGJ5IGRlZmxhdGUoLi4uLCBaX0ZJTklTSCk7ICovXG4gIH1cbiAgcy5zdGF0dXMgPSAocy53cmFwID8gSU5JVF9TVEFURSA6IEJVU1lfU1RBVEUpO1xuICBzdHJtLmFkbGVyID0gKHMud3JhcCA9PT0gMikgP1xuICAgIDAgIC8vIGNyYzMyKDAsIFpfTlVMTCwgMClcbiAgOlxuICAgIDE7IC8vIGFkbGVyMzIoMCwgWl9OVUxMLCAwKVxuICBzLmxhc3RfZmx1c2ggPSBaX05PX0ZMVVNIO1xuICB0cmVlcy5fdHJfaW5pdChzKTtcbiAgcmV0dXJuIFpfT0s7XG59XG5cblxuZnVuY3Rpb24gZGVmbGF0ZVJlc2V0KHN0cm0pIHtcbiAgdmFyIHJldCA9IGRlZmxhdGVSZXNldEtlZXAoc3RybSk7XG4gIGlmIChyZXQgPT09IFpfT0spIHtcbiAgICBsbV9pbml0KHN0cm0uc3RhdGUpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cblxuZnVuY3Rpb24gZGVmbGF0ZVNldEhlYWRlcihzdHJtLCBoZWFkKSB7XG4gIGlmICghc3RybSB8fCAhc3RybS5zdGF0ZSkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1I7IH1cbiAgaWYgKHN0cm0uc3RhdGUud3JhcCAhPT0gMikgeyByZXR1cm4gWl9TVFJFQU1fRVJST1I7IH1cbiAgc3RybS5zdGF0ZS5nemhlYWQgPSBoZWFkO1xuICByZXR1cm4gWl9PSztcbn1cblxuXG5mdW5jdGlvbiBkZWZsYXRlSW5pdDIoc3RybSwgbGV2ZWwsIG1ldGhvZCwgd2luZG93Qml0cywgbWVtTGV2ZWwsIHN0cmF0ZWd5KSB7XG4gIGlmICghc3RybSkgeyAvLyA9PT0gWl9OVUxMXG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuICB9XG4gIHZhciB3cmFwID0gMTtcblxuICBpZiAobGV2ZWwgPT09IFpfREVGQVVMVF9DT01QUkVTU0lPTikge1xuICAgIGxldmVsID0gNjtcbiAgfVxuXG4gIGlmICh3aW5kb3dCaXRzIDwgMCkgeyAvKiBzdXBwcmVzcyB6bGliIHdyYXBwZXIgKi9cbiAgICB3cmFwID0gMDtcbiAgICB3aW5kb3dCaXRzID0gLXdpbmRvd0JpdHM7XG4gIH1cblxuICBlbHNlIGlmICh3aW5kb3dCaXRzID4gMTUpIHtcbiAgICB3cmFwID0gMjsgICAgICAgICAgIC8qIHdyaXRlIGd6aXAgd3JhcHBlciBpbnN0ZWFkICovXG4gICAgd2luZG93Qml0cyAtPSAxNjtcbiAgfVxuXG5cbiAgaWYgKG1lbUxldmVsIDwgMSB8fCBtZW1MZXZlbCA+IE1BWF9NRU1fTEVWRUwgfHwgbWV0aG9kICE9PSBaX0RFRkxBVEVEIHx8XG4gICAgd2luZG93Qml0cyA8IDggfHwgd2luZG93Qml0cyA+IDE1IHx8IGxldmVsIDwgMCB8fCBsZXZlbCA+IDkgfHxcbiAgICBzdHJhdGVneSA8IDAgfHwgc3RyYXRlZ3kgPiBaX0ZJWEVEKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCBaX1NUUkVBTV9FUlJPUik7XG4gIH1cblxuXG4gIGlmICh3aW5kb3dCaXRzID09PSA4KSB7XG4gICAgd2luZG93Qml0cyA9IDk7XG4gIH1cbiAgLyogdW50aWwgMjU2LWJ5dGUgd2luZG93IGJ1ZyBmaXhlZCAqL1xuXG4gIHZhciBzID0gbmV3IERlZmxhdGVTdGF0ZSgpO1xuXG4gIHN0cm0uc3RhdGUgPSBzO1xuICBzLnN0cm0gPSBzdHJtO1xuXG4gIHMud3JhcCA9IHdyYXA7XG4gIHMuZ3poZWFkID0gbnVsbDtcbiAgcy53X2JpdHMgPSB3aW5kb3dCaXRzO1xuICBzLndfc2l6ZSA9IDEgPDwgcy53X2JpdHM7XG4gIHMud19tYXNrID0gcy53X3NpemUgLSAxO1xuXG4gIHMuaGFzaF9iaXRzID0gbWVtTGV2ZWwgKyA3O1xuICBzLmhhc2hfc2l6ZSA9IDEgPDwgcy5oYXNoX2JpdHM7XG4gIHMuaGFzaF9tYXNrID0gcy5oYXNoX3NpemUgLSAxO1xuICBzLmhhc2hfc2hpZnQgPSB+figocy5oYXNoX2JpdHMgKyBNSU5fTUFUQ0ggLSAxKSAvIE1JTl9NQVRDSCk7XG5cbiAgcy53aW5kb3cgPSBuZXcgdXRpbHMuQnVmOChzLndfc2l6ZSAqIDIpO1xuICBzLmhlYWQgPSBuZXcgdXRpbHMuQnVmMTYocy5oYXNoX3NpemUpO1xuICBzLnByZXYgPSBuZXcgdXRpbHMuQnVmMTYocy53X3NpemUpO1xuXG4gIC8vIERvbid0IG5lZWQgbWVtIGluaXQgbWFnaWMgZm9yIEpTLlxuICAvL3MuaGlnaF93YXRlciA9IDA7ICAvKiBub3RoaW5nIHdyaXR0ZW4gdG8gcy0+d2luZG93IHlldCAqL1xuXG4gIHMubGl0X2J1ZnNpemUgPSAxIDw8IChtZW1MZXZlbCArIDYpOyAvKiAxNksgZWxlbWVudHMgYnkgZGVmYXVsdCAqL1xuXG4gIHMucGVuZGluZ19idWZfc2l6ZSA9IHMubGl0X2J1ZnNpemUgKiA0O1xuXG4gIC8vb3ZlcmxheSA9ICh1c2hmICopIFpBTExPQyhzdHJtLCBzLT5saXRfYnVmc2l6ZSwgc2l6ZW9mKHVzaCkrMik7XG4gIC8vcy0+cGVuZGluZ19idWYgPSAodWNoZiAqKSBvdmVybGF5O1xuICBzLnBlbmRpbmdfYnVmID0gbmV3IHV0aWxzLkJ1Zjgocy5wZW5kaW5nX2J1Zl9zaXplKTtcblxuICAvLyBJdCBpcyBvZmZzZXQgZnJvbSBgcy5wZW5kaW5nX2J1ZmAgKHNpemUgaXMgYHMubGl0X2J1ZnNpemUgKiAyYClcbiAgLy9zLT5kX2J1ZiA9IG92ZXJsYXkgKyBzLT5saXRfYnVmc2l6ZS9zaXplb2YodXNoKTtcbiAgcy5kX2J1ZiA9IDEgKiBzLmxpdF9idWZzaXplO1xuXG4gIC8vcy0+bF9idWYgPSBzLT5wZW5kaW5nX2J1ZiArICgxK3NpemVvZih1c2gpKSpzLT5saXRfYnVmc2l6ZTtcbiAgcy5sX2J1ZiA9ICgxICsgMikgKiBzLmxpdF9idWZzaXplO1xuXG4gIHMubGV2ZWwgPSBsZXZlbDtcbiAgcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICBzLm1ldGhvZCA9IG1ldGhvZDtcblxuICByZXR1cm4gZGVmbGF0ZVJlc2V0KHN0cm0pO1xufVxuXG5mdW5jdGlvbiBkZWZsYXRlSW5pdChzdHJtLCBsZXZlbCkge1xuICByZXR1cm4gZGVmbGF0ZUluaXQyKHN0cm0sIGxldmVsLCBaX0RFRkxBVEVELCBNQVhfV0JJVFMsIERFRl9NRU1fTEVWRUwsIFpfREVGQVVMVF9TVFJBVEVHWSk7XG59XG5cblxuZnVuY3Rpb24gZGVmbGF0ZShzdHJtLCBmbHVzaCkge1xuICB2YXIgb2xkX2ZsdXNoLCBzO1xuICB2YXIgYmVnLCB2YWw7IC8vIGZvciBnemlwIGhlYWRlciB3cml0ZSBvbmx5XG5cbiAgaWYgKCFzdHJtIHx8ICFzdHJtLnN0YXRlIHx8XG4gICAgZmx1c2ggPiBaX0JMT0NLIHx8IGZsdXNoIDwgMCkge1xuICAgIHJldHVybiBzdHJtID8gZXJyKHN0cm0sIFpfU1RSRUFNX0VSUk9SKSA6IFpfU1RSRUFNX0VSUk9SO1xuICB9XG5cbiAgcyA9IHN0cm0uc3RhdGU7XG5cbiAgaWYgKCFzdHJtLm91dHB1dCB8fFxuICAgICAgKCFzdHJtLmlucHV0ICYmIHN0cm0uYXZhaWxfaW4gIT09IDApIHx8XG4gICAgICAocy5zdGF0dXMgPT09IEZJTklTSF9TVEFURSAmJiBmbHVzaCAhPT0gWl9GSU5JU0gpKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCAoc3RybS5hdmFpbF9vdXQgPT09IDApID8gWl9CVUZfRVJST1IgOiBaX1NUUkVBTV9FUlJPUik7XG4gIH1cblxuICBzLnN0cm0gPSBzdHJtOyAvKiBqdXN0IGluIGNhc2UgKi9cbiAgb2xkX2ZsdXNoID0gcy5sYXN0X2ZsdXNoO1xuICBzLmxhc3RfZmx1c2ggPSBmbHVzaDtcblxuICAvKiBXcml0ZSB0aGUgaGVhZGVyICovXG4gIGlmIChzLnN0YXR1cyA9PT0gSU5JVF9TVEFURSkge1xuXG4gICAgaWYgKHMud3JhcCA9PT0gMikgeyAvLyBHWklQIGhlYWRlclxuICAgICAgc3RybS5hZGxlciA9IDA7ICAvL2NyYzMyKDBMLCBaX05VTEwsIDApO1xuICAgICAgcHV0X2J5dGUocywgMzEpO1xuICAgICAgcHV0X2J5dGUocywgMTM5KTtcbiAgICAgIHB1dF9ieXRlKHMsIDgpO1xuICAgICAgaWYgKCFzLmd6aGVhZCkgeyAvLyBzLT5nemhlYWQgPT0gWl9OVUxMXG4gICAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgICAgcHV0X2J5dGUocywgMCk7XG4gICAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgICAgcHV0X2J5dGUocywgcy5sZXZlbCA9PT0gOSA/IDIgOlxuICAgICAgICAgICAgICAgICAgICAocy5zdHJhdGVneSA+PSBaX0hVRkZNQU5fT05MWSB8fCBzLmxldmVsIDwgMiA/XG4gICAgICAgICAgICAgICAgICAgICA0IDogMCkpO1xuICAgICAgICBwdXRfYnl0ZShzLCBPU19DT0RFKTtcbiAgICAgICAgcy5zdGF0dXMgPSBCVVNZX1NUQVRFO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC50ZXh0ID8gMSA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgKHMuZ3poZWFkLmhjcmMgPyAyIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAoIXMuZ3poZWFkLmV4dHJhID8gMCA6IDQpICtcbiAgICAgICAgICAgICAgICAgICAgKCFzLmd6aGVhZC5uYW1lID8gMCA6IDgpICtcbiAgICAgICAgICAgICAgICAgICAgKCFzLmd6aGVhZC5jb21tZW50ID8gMCA6IDE2KVxuICAgICAgICApO1xuICAgICAgICBwdXRfYnl0ZShzLCBzLmd6aGVhZC50aW1lICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC50aW1lID4+IDgpICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC50aW1lID4+IDE2KSAmIDB4ZmYpO1xuICAgICAgICBwdXRfYnl0ZShzLCAocy5nemhlYWQudGltZSA+PiAyNCkgJiAweGZmKTtcbiAgICAgICAgcHV0X2J5dGUocywgcy5sZXZlbCA9PT0gOSA/IDIgOlxuICAgICAgICAgICAgICAgICAgICAocy5zdHJhdGVneSA+PSBaX0hVRkZNQU5fT05MWSB8fCBzLmxldmVsIDwgMiA/XG4gICAgICAgICAgICAgICAgICAgICA0IDogMCkpO1xuICAgICAgICBwdXRfYnl0ZShzLCBzLmd6aGVhZC5vcyAmIDB4ZmYpO1xuICAgICAgICBpZiAocy5nemhlYWQuZXh0cmEgJiYgcy5nemhlYWQuZXh0cmEubGVuZ3RoKSB7XG4gICAgICAgICAgcHV0X2J5dGUocywgcy5nemhlYWQuZXh0cmEubGVuZ3RoICYgMHhmZik7XG4gICAgICAgICAgcHV0X2J5dGUocywgKHMuZ3poZWFkLmV4dHJhLmxlbmd0aCA+PiA4KSAmIDB4ZmYpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzLmd6aGVhZC5oY3JjKSB7XG4gICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgcy5nemluZGV4ID0gMDtcbiAgICAgICAgcy5zdGF0dXMgPSBFWFRSQV9TVEFURTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSAvLyBERUZMQVRFIGhlYWRlclxuICAgIHtcbiAgICAgIHZhciBoZWFkZXIgPSAoWl9ERUZMQVRFRCArICgocy53X2JpdHMgLSA4KSA8PCA0KSkgPDwgODtcbiAgICAgIHZhciBsZXZlbF9mbGFncyA9IC0xO1xuXG4gICAgICBpZiAocy5zdHJhdGVneSA+PSBaX0hVRkZNQU5fT05MWSB8fCBzLmxldmVsIDwgMikge1xuICAgICAgICBsZXZlbF9mbGFncyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHMubGV2ZWwgPCA2KSB7XG4gICAgICAgIGxldmVsX2ZsYWdzID0gMTtcbiAgICAgIH0gZWxzZSBpZiAocy5sZXZlbCA9PT0gNikge1xuICAgICAgICBsZXZlbF9mbGFncyA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXZlbF9mbGFncyA9IDM7XG4gICAgICB9XG4gICAgICBoZWFkZXIgfD0gKGxldmVsX2ZsYWdzIDw8IDYpO1xuICAgICAgaWYgKHMuc3Ryc3RhcnQgIT09IDApIHsgaGVhZGVyIHw9IFBSRVNFVF9ESUNUOyB9XG4gICAgICBoZWFkZXIgKz0gMzEgLSAoaGVhZGVyICUgMzEpO1xuXG4gICAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG4gICAgICBwdXRTaG9ydE1TQihzLCBoZWFkZXIpO1xuXG4gICAgICAvKiBTYXZlIHRoZSBhZGxlcjMyIG9mIHRoZSBwcmVzZXQgZGljdGlvbmFyeTogKi9cbiAgICAgIGlmIChzLnN0cnN0YXJ0ICE9PSAwKSB7XG4gICAgICAgIHB1dFNob3J0TVNCKHMsIHN0cm0uYWRsZXIgPj4+IDE2KTtcbiAgICAgICAgcHV0U2hvcnRNU0Iocywgc3RybS5hZGxlciAmIDB4ZmZmZik7XG4gICAgICB9XG4gICAgICBzdHJtLmFkbGVyID0gMTsgLy8gYWRsZXIzMigwTCwgWl9OVUxMLCAwKTtcbiAgICB9XG4gIH1cblxuLy8jaWZkZWYgR1pJUFxuICBpZiAocy5zdGF0dXMgPT09IEVYVFJBX1NUQVRFKSB7XG4gICAgaWYgKHMuZ3poZWFkLmV4dHJhLyogIT0gWl9OVUxMKi8pIHtcbiAgICAgIGJlZyA9IHMucGVuZGluZzsgIC8qIHN0YXJ0IG9mIGJ5dGVzIHRvIHVwZGF0ZSBjcmMgKi9cblxuICAgICAgd2hpbGUgKHMuZ3ppbmRleCA8IChzLmd6aGVhZC5leHRyYS5sZW5ndGggJiAweGZmZmYpKSB7XG4gICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgICAgICBiZWcgPSBzLnBlbmRpbmc7XG4gICAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHV0X2J5dGUocywgcy5nemhlYWQuZXh0cmFbcy5nemluZGV4XSAmIDB4ZmYpO1xuICAgICAgICBzLmd6aW5kZXgrKztcbiAgICAgIH1cbiAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgfVxuICAgICAgaWYgKHMuZ3ppbmRleCA9PT0gcy5nemhlYWQuZXh0cmEubGVuZ3RoKSB7XG4gICAgICAgIHMuZ3ppbmRleCA9IDA7XG4gICAgICAgIHMuc3RhdHVzID0gTkFNRV9TVEFURTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzLnN0YXR1cyA9IE5BTUVfU1RBVEU7XG4gICAgfVxuICB9XG4gIGlmIChzLnN0YXR1cyA9PT0gTkFNRV9TVEFURSkge1xuICAgIGlmIChzLmd6aGVhZC5uYW1lLyogIT0gWl9OVUxMKi8pIHtcbiAgICAgIGJlZyA9IHMucGVuZGluZzsgIC8qIHN0YXJ0IG9mIGJ5dGVzIHRvIHVwZGF0ZSBjcmMgKi9cbiAgICAgIC8vaW50IHZhbDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAocy5wZW5kaW5nID09PSBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcgLSBiZWcsIGJlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgICAgICAgYmVnID0gcy5wZW5kaW5nO1xuICAgICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgICAgdmFsID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBKUyBzcGVjaWZpYzogbGl0dGxlIG1hZ2ljIHRvIGFkZCB6ZXJvIHRlcm1pbmF0b3IgdG8gZW5kIG9mIHN0cmluZ1xuICAgICAgICBpZiAocy5nemluZGV4IDwgcy5nemhlYWQubmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICB2YWwgPSBzLmd6aGVhZC5uYW1lLmNoYXJDb2RlQXQocy5nemluZGV4KyspICYgMHhmZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWwgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHB1dF9ieXRlKHMsIHZhbCk7XG4gICAgICB9IHdoaWxlICh2YWwgIT09IDApO1xuXG4gICAgICBpZiAocy5nemhlYWQuaGNyYyAmJiBzLnBlbmRpbmcgPiBiZWcpIHtcbiAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPT09IDApIHtcbiAgICAgICAgcy5nemluZGV4ID0gMDtcbiAgICAgICAgcy5zdGF0dXMgPSBDT01NRU5UX1NUQVRFO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHMuc3RhdHVzID0gQ09NTUVOVF9TVEFURTtcbiAgICB9XG4gIH1cbiAgaWYgKHMuc3RhdHVzID09PSBDT01NRU5UX1NUQVRFKSB7XG4gICAgaWYgKHMuZ3poZWFkLmNvbW1lbnQvKiAhPSBaX05VTEwqLykge1xuICAgICAgYmVnID0gcy5wZW5kaW5nOyAgLyogc3RhcnQgb2YgYnl0ZXMgdG8gdXBkYXRlIGNyYyAqL1xuICAgICAgLy9pbnQgdmFsO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgICAgICBiZWcgPSBzLnBlbmRpbmc7XG4gICAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgICB2YWwgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEpTIHNwZWNpZmljOiBsaXR0bGUgbWFnaWMgdG8gYWRkIHplcm8gdGVybWluYXRvciB0byBlbmQgb2Ygc3RyaW5nXG4gICAgICAgIGlmIChzLmd6aW5kZXggPCBzLmd6aGVhZC5jb21tZW50Lmxlbmd0aCkge1xuICAgICAgICAgIHZhbCA9IHMuZ3poZWFkLmNvbW1lbnQuY2hhckNvZGVBdChzLmd6aW5kZXgrKykgJiAweGZmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcHV0X2J5dGUocywgdmFsKTtcbiAgICAgIH0gd2hpbGUgKHZhbCAhPT0gMCk7XG5cbiAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbCA9PT0gMCkge1xuICAgICAgICBzLnN0YXR1cyA9IEhDUkNfU1RBVEU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcy5zdGF0dXMgPSBIQ1JDX1NUQVRFO1xuICAgIH1cbiAgfVxuICBpZiAocy5zdGF0dXMgPT09IEhDUkNfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQuaGNyYykge1xuICAgICAgaWYgKHMucGVuZGluZyArIDIgPiBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgIH1cbiAgICAgIGlmIChzLnBlbmRpbmcgKyAyIDw9IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICBwdXRfYnl0ZShzLCBzdHJtLmFkbGVyICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzdHJtLmFkbGVyID4+IDgpICYgMHhmZik7XG4gICAgICAgIHN0cm0uYWRsZXIgPSAwOyAvL2NyYzMyKDBMLCBaX05VTEwsIDApO1xuICAgICAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcy5zdGF0dXMgPSBCVVNZX1NUQVRFO1xuICAgIH1cbiAgfVxuLy8jZW5kaWZcblxuICAvKiBGbHVzaCBhcyBtdWNoIHBlbmRpbmcgb3V0cHV0IGFzIHBvc3NpYmxlICovXG4gIGlmIChzLnBlbmRpbmcgIT09IDApIHtcbiAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgLyogU2luY2UgYXZhaWxfb3V0IGlzIDAsIGRlZmxhdGUgd2lsbCBiZSBjYWxsZWQgYWdhaW4gd2l0aFxuICAgICAgICogbW9yZSBvdXRwdXQgc3BhY2UsIGJ1dCBwb3NzaWJseSB3aXRoIGJvdGggcGVuZGluZyBhbmRcbiAgICAgICAqIGF2YWlsX2luIGVxdWFsIHRvIHplcm8uIFRoZXJlIHdvbid0IGJlIGFueXRoaW5nIHRvIGRvLFxuICAgICAgICogYnV0IHRoaXMgaXMgbm90IGFuIGVycm9yIHNpdHVhdGlvbiBzbyBtYWtlIHN1cmUgd2VcbiAgICAgICAqIHJldHVybiBPSyBpbnN0ZWFkIG9mIEJVRl9FUlJPUiBhdCBuZXh0IGNhbGwgb2YgZGVmbGF0ZTpcbiAgICAgICAqL1xuICAgICAgcy5sYXN0X2ZsdXNoID0gLTE7XG4gICAgICByZXR1cm4gWl9PSztcbiAgICB9XG5cbiAgICAvKiBNYWtlIHN1cmUgdGhlcmUgaXMgc29tZXRoaW5nIHRvIGRvIGFuZCBhdm9pZCBkdXBsaWNhdGUgY29uc2VjdXRpdmVcbiAgICAgKiBmbHVzaGVzLiBGb3IgcmVwZWF0ZWQgYW5kIHVzZWxlc3MgY2FsbHMgd2l0aCBaX0ZJTklTSCwgd2Uga2VlcFxuICAgICAqIHJldHVybmluZyBaX1NUUkVBTV9FTkQgaW5zdGVhZCBvZiBaX0JVRl9FUlJPUi5cbiAgICAgKi9cbiAgfSBlbHNlIGlmIChzdHJtLmF2YWlsX2luID09PSAwICYmIHJhbmsoZmx1c2gpIDw9IHJhbmsob2xkX2ZsdXNoKSAmJlxuICAgIGZsdXNoICE9PSBaX0ZJTklTSCkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9CVUZfRVJST1IpO1xuICB9XG5cbiAgLyogVXNlciBtdXN0IG5vdCBwcm92aWRlIG1vcmUgaW5wdXQgYWZ0ZXIgdGhlIGZpcnN0IEZJTklTSDogKi9cbiAgaWYgKHMuc3RhdHVzID09PSBGSU5JU0hfU1RBVEUgJiYgc3RybS5hdmFpbF9pbiAhPT0gMCkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9CVUZfRVJST1IpO1xuICB9XG5cbiAgLyogU3RhcnQgYSBuZXcgYmxvY2sgb3IgY29udGludWUgdGhlIGN1cnJlbnQgb25lLlxuICAgKi9cbiAgaWYgKHN0cm0uYXZhaWxfaW4gIT09IDAgfHwgcy5sb29rYWhlYWQgIT09IDAgfHxcbiAgICAoZmx1c2ggIT09IFpfTk9fRkxVU0ggJiYgcy5zdGF0dXMgIT09IEZJTklTSF9TVEFURSkpIHtcbiAgICB2YXIgYnN0YXRlID0gKHMuc3RyYXRlZ3kgPT09IFpfSFVGRk1BTl9PTkxZKSA/IGRlZmxhdGVfaHVmZihzLCBmbHVzaCkgOlxuICAgICAgKHMuc3RyYXRlZ3kgPT09IFpfUkxFID8gZGVmbGF0ZV9ybGUocywgZmx1c2gpIDpcbiAgICAgICAgY29uZmlndXJhdGlvbl90YWJsZVtzLmxldmVsXS5mdW5jKHMsIGZsdXNoKSk7XG5cbiAgICBpZiAoYnN0YXRlID09PSBCU19GSU5JU0hfU1RBUlRFRCB8fCBic3RhdGUgPT09IEJTX0ZJTklTSF9ET05FKSB7XG4gICAgICBzLnN0YXR1cyA9IEZJTklTSF9TVEFURTtcbiAgICB9XG4gICAgaWYgKGJzdGF0ZSA9PT0gQlNfTkVFRF9NT1JFIHx8IGJzdGF0ZSA9PT0gQlNfRklOSVNIX1NUQVJURUQpIHtcbiAgICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICBzLmxhc3RfZmx1c2ggPSAtMTtcbiAgICAgICAgLyogYXZvaWQgQlVGX0VSUk9SIG5leHQgY2FsbCwgc2VlIGFib3ZlICovXG4gICAgICB9XG4gICAgICByZXR1cm4gWl9PSztcbiAgICAgIC8qIElmIGZsdXNoICE9IFpfTk9fRkxVU0ggJiYgYXZhaWxfb3V0ID09IDAsIHRoZSBuZXh0IGNhbGxcbiAgICAgICAqIG9mIGRlZmxhdGUgc2hvdWxkIHVzZSB0aGUgc2FtZSBmbHVzaCBwYXJhbWV0ZXIgdG8gbWFrZSBzdXJlXG4gICAgICAgKiB0aGF0IHRoZSBmbHVzaCBpcyBjb21wbGV0ZS4gU28gd2UgZG9uJ3QgaGF2ZSB0byBvdXRwdXQgYW5cbiAgICAgICAqIGVtcHR5IGJsb2NrIGhlcmUsIHRoaXMgd2lsbCBiZSBkb25lIGF0IG5leHQgY2FsbC4gVGhpcyBhbHNvXG4gICAgICAgKiBlbnN1cmVzIHRoYXQgZm9yIGEgdmVyeSBzbWFsbCBvdXRwdXQgYnVmZmVyLCB3ZSBlbWl0IGF0IG1vc3RcbiAgICAgICAqIG9uZSBlbXB0eSBibG9jay5cbiAgICAgICAqL1xuICAgIH1cbiAgICBpZiAoYnN0YXRlID09PSBCU19CTE9DS19ET05FKSB7XG4gICAgICBpZiAoZmx1c2ggPT09IFpfUEFSVElBTF9GTFVTSCkge1xuICAgICAgICB0cmVlcy5fdHJfYWxpZ24ocyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChmbHVzaCAhPT0gWl9CTE9DSykgeyAvKiBGVUxMX0ZMVVNIIG9yIFNZTkNfRkxVU0ggKi9cblxuICAgICAgICB0cmVlcy5fdHJfc3RvcmVkX2Jsb2NrKHMsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgLyogRm9yIGEgZnVsbCBmbHVzaCwgdGhpcyBlbXB0eSBibG9jayB3aWxsIGJlIHJlY29nbml6ZWRcbiAgICAgICAgICogYXMgYSBzcGVjaWFsIG1hcmtlciBieSBpbmZsYXRlX3N5bmMoKS5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9GVUxMX0ZMVVNIKSB7XG4gICAgICAgICAgLyoqKiBDTEVBUl9IQVNIKHMpOyAqKiovICAgICAgICAgICAgIC8qIGZvcmdldCBoaXN0b3J5ICovXG4gICAgICAgICAgemVybyhzLmhlYWQpOyAvLyBGaWxsIHdpdGggTklMICg9IDApO1xuXG4gICAgICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwKSB7XG4gICAgICAgICAgICBzLnN0cnN0YXJ0ID0gMDtcbiAgICAgICAgICAgIHMuYmxvY2tfc3RhcnQgPSAwO1xuICAgICAgICAgICAgcy5pbnNlcnQgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICBzLmxhc3RfZmx1c2ggPSAtMTsgLyogYXZvaWQgQlVGX0VSUk9SIGF0IG5leHQgY2FsbCwgc2VlIGFib3ZlICovXG4gICAgICAgIHJldHVybiBaX09LO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL0Fzc2VydChzdHJtLT5hdmFpbF9vdXQgPiAwLCBcImJ1ZzJcIik7XG4gIC8vaWYgKHN0cm0uYXZhaWxfb3V0IDw9IDApIHsgdGhyb3cgbmV3IEVycm9yKFwiYnVnMlwiKTt9XG5cbiAgaWYgKGZsdXNoICE9PSBaX0ZJTklTSCkgeyByZXR1cm4gWl9PSzsgfVxuICBpZiAocy53cmFwIDw9IDApIHsgcmV0dXJuIFpfU1RSRUFNX0VORDsgfVxuXG4gIC8qIFdyaXRlIHRoZSB0cmFpbGVyICovXG4gIGlmIChzLndyYXAgPT09IDIpIHtcbiAgICBwdXRfYnl0ZShzLCBzdHJtLmFkbGVyICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0uYWRsZXIgPj4gOCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiAxNikgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiAyNCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCBzdHJtLnRvdGFsX2luICYgMHhmZik7XG4gICAgcHV0X2J5dGUocywgKHN0cm0udG90YWxfaW4gPj4gOCkgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS50b3RhbF9pbiA+PiAxNikgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS50b3RhbF9pbiA+PiAyNCkgJiAweGZmKTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBwdXRTaG9ydE1TQihzLCBzdHJtLmFkbGVyID4+PiAxNik7XG4gICAgcHV0U2hvcnRNU0Iocywgc3RybS5hZGxlciAmIDB4ZmZmZik7XG4gIH1cblxuICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAvKiBJZiBhdmFpbF9vdXQgaXMgemVybywgdGhlIGFwcGxpY2F0aW9uIHdpbGwgY2FsbCBkZWZsYXRlIGFnYWluXG4gICAqIHRvIGZsdXNoIHRoZSByZXN0LlxuICAgKi9cbiAgaWYgKHMud3JhcCA+IDApIHsgcy53cmFwID0gLXMud3JhcDsgfVxuICAvKiB3cml0ZSB0aGUgdHJhaWxlciBvbmx5IG9uY2UhICovXG4gIHJldHVybiBzLnBlbmRpbmcgIT09IDAgPyBaX09LIDogWl9TVFJFQU1fRU5EO1xufVxuXG5mdW5jdGlvbiBkZWZsYXRlRW5kKHN0cm0pIHtcbiAgdmFyIHN0YXR1cztcblxuICBpZiAoIXN0cm0vKj09IFpfTlVMTCovIHx8ICFzdHJtLnN0YXRlLyo9PSBaX05VTEwqLykge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuXG4gIHN0YXR1cyA9IHN0cm0uc3RhdGUuc3RhdHVzO1xuICBpZiAoc3RhdHVzICE9PSBJTklUX1NUQVRFICYmXG4gICAgc3RhdHVzICE9PSBFWFRSQV9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gTkFNRV9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gQ09NTUVOVF9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gSENSQ19TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gQlVTWV9TVEFURSAmJlxuICAgIHN0YXR1cyAhPT0gRklOSVNIX1NUQVRFXG4gICkge1xuICAgIHJldHVybiBlcnIoc3RybSwgWl9TVFJFQU1fRVJST1IpO1xuICB9XG5cbiAgc3RybS5zdGF0ZSA9IG51bGw7XG5cbiAgcmV0dXJuIHN0YXR1cyA9PT0gQlVTWV9TVEFURSA/IGVycihzdHJtLCBaX0RBVEFfRVJST1IpIDogWl9PSztcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplcyB0aGUgY29tcHJlc3Npb24gZGljdGlvbmFyeSBmcm9tIHRoZSBnaXZlbiBieXRlXG4gKiBzZXF1ZW5jZSB3aXRob3V0IHByb2R1Y2luZyBhbnkgY29tcHJlc3NlZCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIGRlZmxhdGVTZXREaWN0aW9uYXJ5KHN0cm0sIGRpY3Rpb25hcnkpIHtcbiAgdmFyIGRpY3RMZW5ndGggPSBkaWN0aW9uYXJ5Lmxlbmd0aDtcblxuICB2YXIgcztcbiAgdmFyIHN0ciwgbjtcbiAgdmFyIHdyYXA7XG4gIHZhciBhdmFpbDtcbiAgdmFyIG5leHQ7XG4gIHZhciBpbnB1dDtcbiAgdmFyIHRtcERpY3Q7XG5cbiAgaWYgKCFzdHJtLyo9PSBaX05VTEwqLyB8fCAhc3RybS5zdGF0ZS8qPT0gWl9OVUxMKi8pIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICBzID0gc3RybS5zdGF0ZTtcbiAgd3JhcCA9IHMud3JhcDtcblxuICBpZiAod3JhcCA9PT0gMiB8fCAod3JhcCA9PT0gMSAmJiBzLnN0YXR1cyAhPT0gSU5JVF9TVEFURSkgfHwgcy5sb29rYWhlYWQpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICAvKiB3aGVuIHVzaW5nIHpsaWIgd3JhcHBlcnMsIGNvbXB1dGUgQWRsZXItMzIgZm9yIHByb3ZpZGVkIGRpY3Rpb25hcnkgKi9cbiAgaWYgKHdyYXAgPT09IDEpIHtcbiAgICAvKiBhZGxlcjMyKHN0cm0tPmFkbGVyLCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoKTsgKi9cbiAgICBzdHJtLmFkbGVyID0gYWRsZXIzMihzdHJtLmFkbGVyLCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoLCAwKTtcbiAgfVxuXG4gIHMud3JhcCA9IDA7ICAgLyogYXZvaWQgY29tcHV0aW5nIEFkbGVyLTMyIGluIHJlYWRfYnVmICovXG5cbiAgLyogaWYgZGljdGlvbmFyeSB3b3VsZCBmaWxsIHdpbmRvdywganVzdCByZXBsYWNlIHRoZSBoaXN0b3J5ICovXG4gIGlmIChkaWN0TGVuZ3RoID49IHMud19zaXplKSB7XG4gICAgaWYgKHdyYXAgPT09IDApIHsgICAgICAgICAgICAvKiBhbHJlYWR5IGVtcHR5IG90aGVyd2lzZSAqL1xuICAgICAgLyoqKiBDTEVBUl9IQVNIKHMpOyAqKiovXG4gICAgICB6ZXJvKHMuaGVhZCk7IC8vIEZpbGwgd2l0aCBOSUwgKD0gMCk7XG4gICAgICBzLnN0cnN0YXJ0ID0gMDtcbiAgICAgIHMuYmxvY2tfc3RhcnQgPSAwO1xuICAgICAgcy5pbnNlcnQgPSAwO1xuICAgIH1cbiAgICAvKiB1c2UgdGhlIHRhaWwgKi9cbiAgICAvLyBkaWN0aW9uYXJ5ID0gZGljdGlvbmFyeS5zbGljZShkaWN0TGVuZ3RoIC0gcy53X3NpemUpO1xuICAgIHRtcERpY3QgPSBuZXcgdXRpbHMuQnVmOChzLndfc2l6ZSk7XG4gICAgdXRpbHMuYXJyYXlTZXQodG1wRGljdCwgZGljdGlvbmFyeSwgZGljdExlbmd0aCAtIHMud19zaXplLCBzLndfc2l6ZSwgMCk7XG4gICAgZGljdGlvbmFyeSA9IHRtcERpY3Q7XG4gICAgZGljdExlbmd0aCA9IHMud19zaXplO1xuICB9XG4gIC8qIGluc2VydCBkaWN0aW9uYXJ5IGludG8gd2luZG93IGFuZCBoYXNoICovXG4gIGF2YWlsID0gc3RybS5hdmFpbF9pbjtcbiAgbmV4dCA9IHN0cm0ubmV4dF9pbjtcbiAgaW5wdXQgPSBzdHJtLmlucHV0O1xuICBzdHJtLmF2YWlsX2luID0gZGljdExlbmd0aDtcbiAgc3RybS5uZXh0X2luID0gMDtcbiAgc3RybS5pbnB1dCA9IGRpY3Rpb25hcnk7XG4gIGZpbGxfd2luZG93KHMpO1xuICB3aGlsZSAocy5sb29rYWhlYWQgPj0gTUlOX01BVENIKSB7XG4gICAgc3RyID0gcy5zdHJzdGFydDtcbiAgICBuID0gcy5sb29rYWhlYWQgLSAoTUlOX01BVENIIC0gMSk7XG4gICAgZG8ge1xuICAgICAgLyogVVBEQVRFX0hBU0gocywgcy0+aW5zX2gsIHMtPndpbmRvd1tzdHIgKyBNSU5fTUFUQ0gtMV0pOyAqL1xuICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbc3RyICsgTUlOX01BVENIIC0gMV0pICYgcy5oYXNoX21hc2s7XG5cbiAgICAgIHMucHJldltzdHIgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG5cbiAgICAgIHMuaGVhZFtzLmluc19oXSA9IHN0cjtcbiAgICAgIHN0cisrO1xuICAgIH0gd2hpbGUgKC0tbik7XG4gICAgcy5zdHJzdGFydCA9IHN0cjtcbiAgICBzLmxvb2thaGVhZCA9IE1JTl9NQVRDSCAtIDE7XG4gICAgZmlsbF93aW5kb3cocyk7XG4gIH1cbiAgcy5zdHJzdGFydCArPSBzLmxvb2thaGVhZDtcbiAgcy5ibG9ja19zdGFydCA9IHMuc3Ryc3RhcnQ7XG4gIHMuaW5zZXJ0ID0gcy5sb29rYWhlYWQ7XG4gIHMubG9va2FoZWFkID0gMDtcbiAgcy5tYXRjaF9sZW5ndGggPSBzLnByZXZfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgcy5tYXRjaF9hdmFpbGFibGUgPSAwO1xuICBzdHJtLm5leHRfaW4gPSBuZXh0O1xuICBzdHJtLmlucHV0ID0gaW5wdXQ7XG4gIHN0cm0uYXZhaWxfaW4gPSBhdmFpbDtcbiAgcy53cmFwID0gd3JhcDtcbiAgcmV0dXJuIFpfT0s7XG59XG5cblxuZXhwb3J0cy5kZWZsYXRlSW5pdCA9IGRlZmxhdGVJbml0O1xuZXhwb3J0cy5kZWZsYXRlSW5pdDIgPSBkZWZsYXRlSW5pdDI7XG5leHBvcnRzLmRlZmxhdGVSZXNldCA9IGRlZmxhdGVSZXNldDtcbmV4cG9ydHMuZGVmbGF0ZVJlc2V0S2VlcCA9IGRlZmxhdGVSZXNldEtlZXA7XG5leHBvcnRzLmRlZmxhdGVTZXRIZWFkZXIgPSBkZWZsYXRlU2V0SGVhZGVyO1xuZXhwb3J0cy5kZWZsYXRlID0gZGVmbGF0ZTtcbmV4cG9ydHMuZGVmbGF0ZUVuZCA9IGRlZmxhdGVFbmQ7XG5leHBvcnRzLmRlZmxhdGVTZXREaWN0aW9uYXJ5ID0gZGVmbGF0ZVNldERpY3Rpb25hcnk7XG5leHBvcnRzLmRlZmxhdGVJbmZvID0gJ3Bha28gZGVmbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdCknO1xuXG4vKiBOb3QgaW1wbGVtZW50ZWRcbmV4cG9ydHMuZGVmbGF0ZUJvdW5kID0gZGVmbGF0ZUJvdW5kO1xuZXhwb3J0cy5kZWZsYXRlQ29weSA9IGRlZmxhdGVDb3B5O1xuZXhwb3J0cy5kZWZsYXRlUGFyYW1zID0gZGVmbGF0ZVBhcmFtcztcbmV4cG9ydHMuZGVmbGF0ZVBlbmRpbmcgPSBkZWZsYXRlUGVuZGluZztcbmV4cG9ydHMuZGVmbGF0ZVByaW1lID0gZGVmbGF0ZVByaW1lO1xuZXhwb3J0cy5kZWZsYXRlVHVuZSA9IGRlZmxhdGVUdW5lO1xuKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG5mdW5jdGlvbiBHWmhlYWRlcigpIHtcbiAgLyogdHJ1ZSBpZiBjb21wcmVzc2VkIGRhdGEgYmVsaWV2ZWQgdG8gYmUgdGV4dCAqL1xuICB0aGlzLnRleHQgICAgICAgPSAwO1xuICAvKiBtb2RpZmljYXRpb24gdGltZSAqL1xuICB0aGlzLnRpbWUgICAgICAgPSAwO1xuICAvKiBleHRyYSBmbGFncyAobm90IHVzZWQgd2hlbiB3cml0aW5nIGEgZ3ppcCBmaWxlKSAqL1xuICB0aGlzLnhmbGFncyAgICAgPSAwO1xuICAvKiBvcGVyYXRpbmcgc3lzdGVtICovXG4gIHRoaXMub3MgICAgICAgICA9IDA7XG4gIC8qIHBvaW50ZXIgdG8gZXh0cmEgZmllbGQgb3IgWl9OVUxMIGlmIG5vbmUgKi9cbiAgdGhpcy5leHRyYSAgICAgID0gbnVsbDtcbiAgLyogZXh0cmEgZmllbGQgbGVuZ3RoICh2YWxpZCBpZiBleHRyYSAhPSBaX05VTEwpICovXG4gIHRoaXMuZXh0cmFfbGVuICA9IDA7IC8vIEFjdHVhbGx5LCB3ZSBkb24ndCBuZWVkIGl0IGluIEpTLFxuICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgbGVhdmUgZm9yIGZldyBjb2RlIG1vZGlmaWNhdGlvbnNcblxuICAvL1xuICAvLyBTZXR1cCBsaW1pdHMgaXMgbm90IG5lY2Vzc2FyeSBiZWNhdXNlIGluIGpzIHdlIHNob3VsZCBub3QgcHJlYWxsb2NhdGUgbWVtb3J5XG4gIC8vIGZvciBpbmZsYXRlIHVzZSBjb25zdGFudCBsaW1pdCBpbiA2NTUzNiBieXRlc1xuICAvL1xuXG4gIC8qIHNwYWNlIGF0IGV4dHJhIChvbmx5IHdoZW4gcmVhZGluZyBoZWFkZXIpICovXG4gIC8vIHRoaXMuZXh0cmFfbWF4ICA9IDA7XG4gIC8qIHBvaW50ZXIgdG8gemVyby10ZXJtaW5hdGVkIGZpbGUgbmFtZSBvciBaX05VTEwgKi9cbiAgdGhpcy5uYW1lICAgICAgID0gJyc7XG4gIC8qIHNwYWNlIGF0IG5hbWUgKG9ubHkgd2hlbiByZWFkaW5nIGhlYWRlcikgKi9cbiAgLy8gdGhpcy5uYW1lX21heCAgID0gMDtcbiAgLyogcG9pbnRlciB0byB6ZXJvLXRlcm1pbmF0ZWQgY29tbWVudCBvciBaX05VTEwgKi9cbiAgdGhpcy5jb21tZW50ICAgID0gJyc7XG4gIC8qIHNwYWNlIGF0IGNvbW1lbnQgKG9ubHkgd2hlbiByZWFkaW5nIGhlYWRlcikgKi9cbiAgLy8gdGhpcy5jb21tX21heCAgID0gMDtcbiAgLyogdHJ1ZSBpZiB0aGVyZSB3YXMgb3Igd2lsbCBiZSBhIGhlYWRlciBjcmMgKi9cbiAgdGhpcy5oY3JjICAgICAgID0gMDtcbiAgLyogdHJ1ZSB3aGVuIGRvbmUgcmVhZGluZyBnemlwIGhlYWRlciAobm90IHVzZWQgd2hlbiB3cml0aW5nIGEgZ3ppcCBmaWxlKSAqL1xuICB0aGlzLmRvbmUgICAgICAgPSBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHWmhlYWRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG4vLyBTZWUgc3RhdGUgZGVmcyBmcm9tIGluZmxhdGUuanNcbnZhciBCQUQgPSAzMDsgICAgICAgLyogZ290IGEgZGF0YSBlcnJvciAtLSByZW1haW4gaGVyZSB1bnRpbCByZXNldCAqL1xudmFyIFRZUEUgPSAxMjsgICAgICAvKiBpOiB3YWl0aW5nIGZvciB0eXBlIGJpdHMsIGluY2x1ZGluZyBsYXN0LWZsYWcgYml0ICovXG5cbi8qXG4gICBEZWNvZGUgbGl0ZXJhbCwgbGVuZ3RoLCBhbmQgZGlzdGFuY2UgY29kZXMgYW5kIHdyaXRlIG91dCB0aGUgcmVzdWx0aW5nXG4gICBsaXRlcmFsIGFuZCBtYXRjaCBieXRlcyB1bnRpbCBlaXRoZXIgbm90IGVub3VnaCBpbnB1dCBvciBvdXRwdXQgaXNcbiAgIGF2YWlsYWJsZSwgYW4gZW5kLW9mLWJsb2NrIGlzIGVuY291bnRlcmVkLCBvciBhIGRhdGEgZXJyb3IgaXMgZW5jb3VudGVyZWQuXG4gICBXaGVuIGxhcmdlIGVub3VnaCBpbnB1dCBhbmQgb3V0cHV0IGJ1ZmZlcnMgYXJlIHN1cHBsaWVkIHRvIGluZmxhdGUoKSwgZm9yXG4gICBleGFtcGxlLCBhIDE2SyBpbnB1dCBidWZmZXIgYW5kIGEgNjRLIG91dHB1dCBidWZmZXIsIG1vcmUgdGhhbiA5NSUgb2YgdGhlXG4gICBpbmZsYXRlIGV4ZWN1dGlvbiB0aW1lIGlzIHNwZW50IGluIHRoaXMgcm91dGluZS5cblxuICAgRW50cnkgYXNzdW1wdGlvbnM6XG5cbiAgICAgICAgc3RhdGUubW9kZSA9PT0gTEVOXG4gICAgICAgIHN0cm0uYXZhaWxfaW4gPj0gNlxuICAgICAgICBzdHJtLmF2YWlsX291dCA+PSAyNThcbiAgICAgICAgc3RhcnQgPj0gc3RybS5hdmFpbF9vdXRcbiAgICAgICAgc3RhdGUuYml0cyA8IDhcblxuICAgT24gcmV0dXJuLCBzdGF0ZS5tb2RlIGlzIG9uZSBvZjpcblxuICAgICAgICBMRU4gLS0gcmFuIG91dCBvZiBlbm91Z2ggb3V0cHV0IHNwYWNlIG9yIGVub3VnaCBhdmFpbGFibGUgaW5wdXRcbiAgICAgICAgVFlQRSAtLSByZWFjaGVkIGVuZCBvZiBibG9jayBjb2RlLCBpbmZsYXRlKCkgdG8gaW50ZXJwcmV0IG5leHQgYmxvY2tcbiAgICAgICAgQkFEIC0tIGVycm9yIGluIGJsb2NrIGRhdGFcblxuICAgTm90ZXM6XG5cbiAgICAtIFRoZSBtYXhpbXVtIGlucHV0IGJpdHMgdXNlZCBieSBhIGxlbmd0aC9kaXN0YW5jZSBwYWlyIGlzIDE1IGJpdHMgZm9yIHRoZVxuICAgICAgbGVuZ3RoIGNvZGUsIDUgYml0cyBmb3IgdGhlIGxlbmd0aCBleHRyYSwgMTUgYml0cyBmb3IgdGhlIGRpc3RhbmNlIGNvZGUsXG4gICAgICBhbmQgMTMgYml0cyBmb3IgdGhlIGRpc3RhbmNlIGV4dHJhLiAgVGhpcyB0b3RhbHMgNDggYml0cywgb3Igc2l4IGJ5dGVzLlxuICAgICAgVGhlcmVmb3JlIGlmIHN0cm0uYXZhaWxfaW4gPj0gNiwgdGhlbiB0aGVyZSBpcyBlbm91Z2ggaW5wdXQgdG8gYXZvaWRcbiAgICAgIGNoZWNraW5nIGZvciBhdmFpbGFibGUgaW5wdXQgd2hpbGUgZGVjb2RpbmcuXG5cbiAgICAtIFRoZSBtYXhpbXVtIGJ5dGVzIHRoYXQgYSBzaW5nbGUgbGVuZ3RoL2Rpc3RhbmNlIHBhaXIgY2FuIG91dHB1dCBpcyAyNThcbiAgICAgIGJ5dGVzLCB3aGljaCBpcyB0aGUgbWF4aW11bSBsZW5ndGggdGhhdCBjYW4gYmUgY29kZWQuICBpbmZsYXRlX2Zhc3QoKVxuICAgICAgcmVxdWlyZXMgc3RybS5hdmFpbF9vdXQgPj0gMjU4IGZvciBlYWNoIGxvb3AgdG8gYXZvaWQgY2hlY2tpbmcgZm9yXG4gICAgICBvdXRwdXQgc3BhY2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5mbGF0ZV9mYXN0KHN0cm0sIHN0YXJ0KSB7XG4gIHZhciBzdGF0ZTtcbiAgdmFyIF9pbjsgICAgICAgICAgICAgICAgICAgIC8qIGxvY2FsIHN0cm0uaW5wdXQgKi9cbiAgdmFyIGxhc3Q7ICAgICAgICAgICAgICAgICAgIC8qIGhhdmUgZW5vdWdoIGlucHV0IHdoaWxlIGluIDwgbGFzdCAqL1xuICB2YXIgX291dDsgICAgICAgICAgICAgICAgICAgLyogbG9jYWwgc3RybS5vdXRwdXQgKi9cbiAgdmFyIGJlZzsgICAgICAgICAgICAgICAgICAgIC8qIGluZmxhdGUoKSdzIGluaXRpYWwgc3RybS5vdXRwdXQgKi9cbiAgdmFyIGVuZDsgICAgICAgICAgICAgICAgICAgIC8qIHdoaWxlIG91dCA8IGVuZCwgZW5vdWdoIHNwYWNlIGF2YWlsYWJsZSAqL1xuLy8jaWZkZWYgSU5GTEFURV9TVFJJQ1RcbiAgdmFyIGRtYXg7ICAgICAgICAgICAgICAgICAgIC8qIG1heGltdW0gZGlzdGFuY2UgZnJvbSB6bGliIGhlYWRlciAqL1xuLy8jZW5kaWZcbiAgdmFyIHdzaXplOyAgICAgICAgICAgICAgICAgIC8qIHdpbmRvdyBzaXplIG9yIHplcm8gaWYgbm90IHVzaW5nIHdpbmRvdyAqL1xuICB2YXIgd2hhdmU7ICAgICAgICAgICAgICAgICAgLyogdmFsaWQgYnl0ZXMgaW4gdGhlIHdpbmRvdyAqL1xuICB2YXIgd25leHQ7ICAgICAgICAgICAgICAgICAgLyogd2luZG93IHdyaXRlIGluZGV4ICovXG4gIC8vIFVzZSBgc193aW5kb3dgIGluc3RlYWQgYHdpbmRvd2AsIGF2b2lkIGNvbmZsaWN0IHdpdGggaW5zdHJ1bWVudGF0aW9uIHRvb2xzXG4gIHZhciBzX3dpbmRvdzsgICAgICAgICAgICAgICAvKiBhbGxvY2F0ZWQgc2xpZGluZyB3aW5kb3csIGlmIHdzaXplICE9IDAgKi9cbiAgdmFyIGhvbGQ7ICAgICAgICAgICAgICAgICAgIC8qIGxvY2FsIHN0cm0uaG9sZCAqL1xuICB2YXIgYml0czsgICAgICAgICAgICAgICAgICAgLyogbG9jYWwgc3RybS5iaXRzICovXG4gIHZhciBsY29kZTsgICAgICAgICAgICAgICAgICAvKiBsb2NhbCBzdHJtLmxlbmNvZGUgKi9cbiAgdmFyIGRjb2RlOyAgICAgICAgICAgICAgICAgIC8qIGxvY2FsIHN0cm0uZGlzdGNvZGUgKi9cbiAgdmFyIGxtYXNrOyAgICAgICAgICAgICAgICAgIC8qIG1hc2sgZm9yIGZpcnN0IGxldmVsIG9mIGxlbmd0aCBjb2RlcyAqL1xuICB2YXIgZG1hc2s7ICAgICAgICAgICAgICAgICAgLyogbWFzayBmb3IgZmlyc3QgbGV2ZWwgb2YgZGlzdGFuY2UgY29kZXMgKi9cbiAgdmFyIGhlcmU7ICAgICAgICAgICAgICAgICAgIC8qIHJldHJpZXZlZCB0YWJsZSBlbnRyeSAqL1xuICB2YXIgb3A7ICAgICAgICAgICAgICAgICAgICAgLyogY29kZSBiaXRzLCBvcGVyYXRpb24sIGV4dHJhIGJpdHMsIG9yICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAgd2luZG93IHBvc2l0aW9uLCB3aW5kb3cgYnl0ZXMgdG8gY29weSAqL1xuICB2YXIgbGVuOyAgICAgICAgICAgICAgICAgICAgLyogbWF0Y2ggbGVuZ3RoLCB1bnVzZWQgYnl0ZXMgKi9cbiAgdmFyIGRpc3Q7ICAgICAgICAgICAgICAgICAgIC8qIG1hdGNoIGRpc3RhbmNlICovXG4gIHZhciBmcm9tOyAgICAgICAgICAgICAgICAgICAvKiB3aGVyZSB0byBjb3B5IG1hdGNoIGZyb20gKi9cbiAgdmFyIGZyb21fc291cmNlO1xuXG5cbiAgdmFyIGlucHV0LCBvdXRwdXQ7IC8vIEpTIHNwZWNpZmljLCBiZWNhdXNlIHdlIGhhdmUgbm8gcG9pbnRlcnNcblxuICAvKiBjb3B5IHN0YXRlIHRvIGxvY2FsIHZhcmlhYmxlcyAqL1xuICBzdGF0ZSA9IHN0cm0uc3RhdGU7XG4gIC8vaGVyZSA9IHN0YXRlLmhlcmU7XG4gIF9pbiA9IHN0cm0ubmV4dF9pbjtcbiAgaW5wdXQgPSBzdHJtLmlucHV0O1xuICBsYXN0ID0gX2luICsgKHN0cm0uYXZhaWxfaW4gLSA1KTtcbiAgX291dCA9IHN0cm0ubmV4dF9vdXQ7XG4gIG91dHB1dCA9IHN0cm0ub3V0cHV0O1xuICBiZWcgPSBfb3V0IC0gKHN0YXJ0IC0gc3RybS5hdmFpbF9vdXQpO1xuICBlbmQgPSBfb3V0ICsgKHN0cm0uYXZhaWxfb3V0IC0gMjU3KTtcbi8vI2lmZGVmIElORkxBVEVfU1RSSUNUXG4gIGRtYXggPSBzdGF0ZS5kbWF4O1xuLy8jZW5kaWZcbiAgd3NpemUgPSBzdGF0ZS53c2l6ZTtcbiAgd2hhdmUgPSBzdGF0ZS53aGF2ZTtcbiAgd25leHQgPSBzdGF0ZS53bmV4dDtcbiAgc193aW5kb3cgPSBzdGF0ZS53aW5kb3c7XG4gIGhvbGQgPSBzdGF0ZS5ob2xkO1xuICBiaXRzID0gc3RhdGUuYml0cztcbiAgbGNvZGUgPSBzdGF0ZS5sZW5jb2RlO1xuICBkY29kZSA9IHN0YXRlLmRpc3Rjb2RlO1xuICBsbWFzayA9ICgxIDw8IHN0YXRlLmxlbmJpdHMpIC0gMTtcbiAgZG1hc2sgPSAoMSA8PCBzdGF0ZS5kaXN0Yml0cykgLSAxO1xuXG5cbiAgLyogZGVjb2RlIGxpdGVyYWxzIGFuZCBsZW5ndGgvZGlzdGFuY2VzIHVudGlsIGVuZC1vZi1ibG9jayBvciBub3QgZW5vdWdoXG4gICAgIGlucHV0IGRhdGEgb3Igb3V0cHV0IHNwYWNlICovXG5cbiAgdG9wOlxuICBkbyB7XG4gICAgaWYgKGJpdHMgPCAxNSkge1xuICAgICAgaG9sZCArPSBpbnB1dFtfaW4rK10gPDwgYml0cztcbiAgICAgIGJpdHMgKz0gODtcbiAgICAgIGhvbGQgKz0gaW5wdXRbX2luKytdIDw8IGJpdHM7XG4gICAgICBiaXRzICs9IDg7XG4gICAgfVxuXG4gICAgaGVyZSA9IGxjb2RlW2hvbGQgJiBsbWFza107XG5cbiAgICBkb2xlbjpcbiAgICBmb3IgKDs7KSB7IC8vIEdvdG8gZW11bGF0aW9uXG4gICAgICBvcCA9IGhlcmUgPj4+IDI0LypoZXJlLmJpdHMqLztcbiAgICAgIGhvbGQgPj4+PSBvcDtcbiAgICAgIGJpdHMgLT0gb3A7XG4gICAgICBvcCA9IChoZXJlID4+PiAxNikgJiAweGZmLypoZXJlLm9wKi87XG4gICAgICBpZiAob3AgPT09IDApIHsgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGxpdGVyYWwgKi9cbiAgICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsIGhlcmUudmFsID49IDB4MjAgJiYgaGVyZS52YWwgPCAweDdmID9cbiAgICAgICAgLy8gICAgICAgIFwiaW5mbGF0ZTogICAgICAgICBsaXRlcmFsICclYydcXG5cIiA6XG4gICAgICAgIC8vICAgICAgICBcImluZmxhdGU6ICAgICAgICAgbGl0ZXJhbCAweCUwMnhcXG5cIiwgaGVyZS52YWwpKTtcbiAgICAgICAgb3V0cHV0W19vdXQrK10gPSBoZXJlICYgMHhmZmZmLypoZXJlLnZhbCovO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob3AgJiAxNikgeyAgICAgICAgICAgICAgICAgICAgIC8qIGxlbmd0aCBiYXNlICovXG4gICAgICAgIGxlbiA9IGhlcmUgJiAweGZmZmYvKmhlcmUudmFsKi87XG4gICAgICAgIG9wICY9IDE1OyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBleHRyYSBiaXRzICovXG4gICAgICAgIGlmIChvcCkge1xuICAgICAgICAgIGlmIChiaXRzIDwgb3ApIHtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbX2luKytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxlbiArPSBob2xkICYgKCgxIDw8IG9wKSAtIDEpO1xuICAgICAgICAgIGhvbGQgPj4+PSBvcDtcbiAgICAgICAgICBiaXRzIC09IG9wO1xuICAgICAgICB9XG4gICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgbGVuZ3RoICV1XFxuXCIsIGxlbikpO1xuICAgICAgICBpZiAoYml0cyA8IDE1KSB7XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtfaW4rK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtfaW4rK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgaGVyZSA9IGRjb2RlW2hvbGQgJiBkbWFza107XG5cbiAgICAgICAgZG9kaXN0OlxuICAgICAgICBmb3IgKDs7KSB7IC8vIGdvdG8gZW11bGF0aW9uXG4gICAgICAgICAgb3AgPSBoZXJlID4+PiAyNC8qaGVyZS5iaXRzKi87XG4gICAgICAgICAgaG9sZCA+Pj49IG9wO1xuICAgICAgICAgIGJpdHMgLT0gb3A7XG4gICAgICAgICAgb3AgPSAoaGVyZSA+Pj4gMTYpICYgMHhmZi8qaGVyZS5vcCovO1xuXG4gICAgICAgICAgaWYgKG9wICYgMTYpIHsgICAgICAgICAgICAgICAgICAgICAgLyogZGlzdGFuY2UgYmFzZSAqL1xuICAgICAgICAgICAgZGlzdCA9IGhlcmUgJiAweGZmZmYvKmhlcmUudmFsKi87XG4gICAgICAgICAgICBvcCAmPSAxNTsgICAgICAgICAgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBleHRyYSBiaXRzICovXG4gICAgICAgICAgICBpZiAoYml0cyA8IG9wKSB7XG4gICAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbX2luKytdIDw8IGJpdHM7XG4gICAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgICAgaWYgKGJpdHMgPCBvcCkge1xuICAgICAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbX2luKytdIDw8IGJpdHM7XG4gICAgICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXN0ICs9IGhvbGQgJiAoKDEgPDwgb3ApIC0gMSk7XG4vLyNpZmRlZiBJTkZMQVRFX1NUUklDVFxuICAgICAgICAgICAgaWYgKGRpc3QgPiBkbWF4KSB7XG4gICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrJztcbiAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgICAgYnJlYWsgdG9wO1xuICAgICAgICAgICAgfVxuLy8jZW5kaWZcbiAgICAgICAgICAgIGhvbGQgPj4+PSBvcDtcbiAgICAgICAgICAgIGJpdHMgLT0gb3A7XG4gICAgICAgICAgICAvL1RyYWNldnYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICAgIGRpc3RhbmNlICV1XFxuXCIsIGRpc3QpKTtcbiAgICAgICAgICAgIG9wID0gX291dCAtIGJlZzsgICAgICAgICAgICAgICAgLyogbWF4IGRpc3RhbmNlIGluIG91dHB1dCAqL1xuICAgICAgICAgICAgaWYgKGRpc3QgPiBvcCkgeyAgICAgICAgICAgICAgICAvKiBzZWUgaWYgY29weSBmcm9tIHdpbmRvdyAqL1xuICAgICAgICAgICAgICBvcCA9IGRpc3QgLSBvcDsgICAgICAgICAgICAgICAvKiBkaXN0YW5jZSBiYWNrIGluIHdpbmRvdyAqL1xuICAgICAgICAgICAgICBpZiAob3AgPiB3aGF2ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zYW5lKSB7XG4gICAgICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFjayc7XG4gICAgICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgICAgICAgICAgYnJlYWsgdG9wO1xuICAgICAgICAgICAgICAgIH1cblxuLy8gKCEpIFRoaXMgYmxvY2sgaXMgZGlzYWJsZWQgaW4gemxpYiBkZWZhdWx0cyxcbi8vIGRvbid0IGVuYWJsZSBpdCBmb3IgYmluYXJ5IGNvbXBhdGliaWxpdHlcbi8vI2lmZGVmIElORkxBVEVfQUxMT1dfSU5WQUxJRF9ESVNUQU5DRV9UT09GQVJfQVJSUlxuLy8gICAgICAgICAgICAgICAgaWYgKGxlbiA8PSBvcCAtIHdoYXZlKSB7XG4vLyAgICAgICAgICAgICAgICAgIGRvIHtcbi8vICAgICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IDA7XG4vLyAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKC0tbGVuKTtcbi8vICAgICAgICAgICAgICAgICAgY29udGludWUgdG9wO1xuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgbGVuIC09IG9wIC0gd2hhdmU7XG4vLyAgICAgICAgICAgICAgICBkbyB7XG4vLyAgICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gMDtcbi8vICAgICAgICAgICAgICAgIH0gd2hpbGUgKC0tb3AgPiB3aGF2ZSk7XG4vLyAgICAgICAgICAgICAgICBpZiAob3AgPT09IDApIHtcbi8vICAgICAgICAgICAgICAgICAgZnJvbSA9IF9vdXQgLSBkaXN0O1xuLy8gICAgICAgICAgICAgICAgICBkbyB7XG4vLyAgICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBvdXRwdXRbZnJvbSsrXTtcbi8vICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1sZW4pO1xuLy8gICAgICAgICAgICAgICAgICBjb250aW51ZSB0b3A7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyNlbmRpZlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZyb20gPSAwOyAvLyB3aW5kb3cgaW5kZXhcbiAgICAgICAgICAgICAgZnJvbV9zb3VyY2UgPSBzX3dpbmRvdztcbiAgICAgICAgICAgICAgaWYgKHduZXh0ID09PSAwKSB7ICAgICAgICAgICAvKiB2ZXJ5IGNvbW1vbiBjYXNlICovXG4gICAgICAgICAgICAgICAgZnJvbSArPSB3c2l6ZSAtIG9wO1xuICAgICAgICAgICAgICAgIGlmIChvcCA8IGxlbikgeyAgICAgICAgIC8qIHNvbWUgZnJvbSB3aW5kb3cgKi9cbiAgICAgICAgICAgICAgICAgIGxlbiAtPSBvcDtcbiAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBzX3dpbmRvd1tmcm9tKytdO1xuICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1vcCk7XG4gICAgICAgICAgICAgICAgICBmcm9tID0gX291dCAtIGRpc3Q7ICAvKiByZXN0IGZyb20gb3V0cHV0ICovXG4gICAgICAgICAgICAgICAgICBmcm9tX3NvdXJjZSA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZiAod25leHQgPCBvcCkgeyAgICAgIC8qIHdyYXAgYXJvdW5kIHdpbmRvdyAqL1xuICAgICAgICAgICAgICAgIGZyb20gKz0gd3NpemUgKyB3bmV4dCAtIG9wO1xuICAgICAgICAgICAgICAgIG9wIC09IHduZXh0O1xuICAgICAgICAgICAgICAgIGlmIChvcCA8IGxlbikgeyAgICAgICAgIC8qIHNvbWUgZnJvbSBlbmQgb2Ygd2luZG93ICovXG4gICAgICAgICAgICAgICAgICBsZW4gLT0gb3A7XG4gICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gc193aW5kb3dbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKC0tb3ApO1xuICAgICAgICAgICAgICAgICAgZnJvbSA9IDA7XG4gICAgICAgICAgICAgICAgICBpZiAod25leHQgPCBsZW4pIHsgIC8qIHNvbWUgZnJvbSBzdGFydCBvZiB3aW5kb3cgKi9cbiAgICAgICAgICAgICAgICAgICAgb3AgPSB3bmV4dDtcbiAgICAgICAgICAgICAgICAgICAgbGVuIC09IG9wO1xuICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBzX3dpbmRvd1tmcm9tKytdO1xuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLW9wKTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSA9IF9vdXQgLSBkaXN0OyAgICAgIC8qIHJlc3QgZnJvbSBvdXRwdXQgKi9cbiAgICAgICAgICAgICAgICAgICAgZnJvbV9zb3VyY2UgPSBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAvKiBjb250aWd1b3VzIGluIHdpbmRvdyAqL1xuICAgICAgICAgICAgICAgIGZyb20gKz0gd25leHQgLSBvcDtcbiAgICAgICAgICAgICAgICBpZiAob3AgPCBsZW4pIHsgICAgICAgICAvKiBzb21lIGZyb20gd2luZG93ICovXG4gICAgICAgICAgICAgICAgICBsZW4gLT0gb3A7XG4gICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gc193aW5kb3dbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKC0tb3ApO1xuICAgICAgICAgICAgICAgICAgZnJvbSA9IF9vdXQgLSBkaXN0OyAgLyogcmVzdCBmcm9tIG91dHB1dCAqL1xuICAgICAgICAgICAgICAgICAgZnJvbV9zb3VyY2UgPSBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdoaWxlIChsZW4gPiAyKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBmcm9tX3NvdXJjZVtmcm9tKytdO1xuICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gZnJvbV9zb3VyY2VbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IGZyb21fc291cmNlW2Zyb20rK107XG4gICAgICAgICAgICAgICAgbGVuIC09IDM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gZnJvbV9zb3VyY2VbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBpZiAobGVuID4gMSkge1xuICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBmcm9tX3NvdXJjZVtmcm9tKytdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGZyb20gPSBfb3V0IC0gZGlzdDsgICAgICAgICAgLyogY29weSBkaXJlY3QgZnJvbSBvdXRwdXQgKi9cbiAgICAgICAgICAgICAgZG8geyAgICAgICAgICAgICAgICAgICAgICAgIC8qIG1pbmltdW0gbGVuZ3RoIGlzIHRocmVlICovXG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBvdXRwdXRbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IG91dHB1dFtmcm9tKytdO1xuICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gb3V0cHV0W2Zyb20rK107XG4gICAgICAgICAgICAgICAgbGVuIC09IDM7XG4gICAgICAgICAgICAgIH0gd2hpbGUgKGxlbiA+IDIpO1xuICAgICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBvdXRwdXRbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBpZiAobGVuID4gMSkge1xuICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBvdXRwdXRbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoKG9wICYgNjQpID09PSAwKSB7ICAgICAgICAgIC8qIDJuZCBsZXZlbCBkaXN0YW5jZSBjb2RlICovXG4gICAgICAgICAgICBoZXJlID0gZGNvZGVbKGhlcmUgJiAweGZmZmYpLypoZXJlLnZhbCovICsgKGhvbGQgJiAoKDEgPDwgb3ApIC0gMSkpXTtcbiAgICAgICAgICAgIGNvbnRpbnVlIGRvZGlzdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIGNvZGUnO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgIGJyZWFrIHRvcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhazsgLy8gbmVlZCB0byBlbXVsYXRlIGdvdG8gdmlhIFwiY29udGludWVcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgob3AgJiA2NCkgPT09IDApIHsgICAgICAgICAgICAgIC8qIDJuZCBsZXZlbCBsZW5ndGggY29kZSAqL1xuICAgICAgICBoZXJlID0gbGNvZGVbKGhlcmUgJiAweGZmZmYpLypoZXJlLnZhbCovICsgKGhvbGQgJiAoKDEgPDwgb3ApIC0gMSkpXTtcbiAgICAgICAgY29udGludWUgZG9sZW47XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcCAmIDMyKSB7ICAgICAgICAgICAgICAgICAgICAgLyogZW5kLW9mLWJsb2NrICovXG4gICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgZW5kIG9mIGJsb2NrXFxuXCIpKTtcbiAgICAgICAgc3RhdGUubW9kZSA9IFRZUEU7XG4gICAgICAgIGJyZWFrIHRvcDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGUnO1xuICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICBicmVhayB0b3A7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrOyAvLyBuZWVkIHRvIGVtdWxhdGUgZ290byB2aWEgXCJjb250aW51ZVwiXG4gICAgfVxuICB9IHdoaWxlIChfaW4gPCBsYXN0ICYmIF9vdXQgPCBlbmQpO1xuXG4gIC8qIHJldHVybiB1bnVzZWQgYnl0ZXMgKG9uIGVudHJ5LCBiaXRzIDwgOCwgc28gaW4gd29uJ3QgZ28gdG9vIGZhciBiYWNrKSAqL1xuICBsZW4gPSBiaXRzID4+IDM7XG4gIF9pbiAtPSBsZW47XG4gIGJpdHMgLT0gbGVuIDw8IDM7XG4gIGhvbGQgJj0gKDEgPDwgYml0cykgLSAxO1xuXG4gIC8qIHVwZGF0ZSBzdGF0ZSBhbmQgcmV0dXJuICovXG4gIHN0cm0ubmV4dF9pbiA9IF9pbjtcbiAgc3RybS5uZXh0X291dCA9IF9vdXQ7XG4gIHN0cm0uYXZhaWxfaW4gPSAoX2luIDwgbGFzdCA/IDUgKyAobGFzdCAtIF9pbikgOiA1IC0gKF9pbiAtIGxhc3QpKTtcbiAgc3RybS5hdmFpbF9vdXQgPSAoX291dCA8IGVuZCA/IDI1NyArIChlbmQgLSBfb3V0KSA6IDI1NyAtIChfb3V0IC0gZW5kKSk7XG4gIHN0YXRlLmhvbGQgPSBob2xkO1xuICBzdGF0ZS5iaXRzID0gYml0cztcbiAgcmV0dXJuO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG52YXIgdXRpbHMgICAgICAgICA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbW1vbicpO1xudmFyIGFkbGVyMzIgICAgICAgPSByZXF1aXJlKCcuL2FkbGVyMzInKTtcbnZhciBjcmMzMiAgICAgICAgID0gcmVxdWlyZSgnLi9jcmMzMicpO1xudmFyIGluZmxhdGVfZmFzdCAgPSByZXF1aXJlKCcuL2luZmZhc3QnKTtcbnZhciBpbmZsYXRlX3RhYmxlID0gcmVxdWlyZSgnLi9pbmZ0cmVlcycpO1xuXG52YXIgQ09ERVMgPSAwO1xudmFyIExFTlMgPSAxO1xudmFyIERJU1RTID0gMjtcblxuLyogUHVibGljIGNvbnN0YW50cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxuLyogQWxsb3dlZCBmbHVzaCB2YWx1ZXM7IHNlZSBkZWZsYXRlKCkgYW5kIGluZmxhdGUoKSBiZWxvdyBmb3IgZGV0YWlscyAqL1xuLy92YXIgWl9OT19GTFVTSCAgICAgID0gMDtcbi8vdmFyIFpfUEFSVElBTF9GTFVTSCA9IDE7XG4vL3ZhciBaX1NZTkNfRkxVU0ggICAgPSAyO1xuLy92YXIgWl9GVUxMX0ZMVVNIICAgID0gMztcbnZhciBaX0ZJTklTSCAgICAgICAgPSA0O1xudmFyIFpfQkxPQ0sgICAgICAgICA9IDU7XG52YXIgWl9UUkVFUyAgICAgICAgID0gNjtcblxuXG4vKiBSZXR1cm4gY29kZXMgZm9yIHRoZSBjb21wcmVzc2lvbi9kZWNvbXByZXNzaW9uIGZ1bmN0aW9ucy4gTmVnYXRpdmUgdmFsdWVzXG4gKiBhcmUgZXJyb3JzLCBwb3NpdGl2ZSB2YWx1ZXMgYXJlIHVzZWQgZm9yIHNwZWNpYWwgYnV0IG5vcm1hbCBldmVudHMuXG4gKi9cbnZhciBaX09LICAgICAgICAgICAgPSAwO1xudmFyIFpfU1RSRUFNX0VORCAgICA9IDE7XG52YXIgWl9ORUVEX0RJQ1QgICAgID0gMjtcbi8vdmFyIFpfRVJSTk8gICAgICAgICA9IC0xO1xudmFyIFpfU1RSRUFNX0VSUk9SICA9IC0yO1xudmFyIFpfREFUQV9FUlJPUiAgICA9IC0zO1xudmFyIFpfTUVNX0VSUk9SICAgICA9IC00O1xudmFyIFpfQlVGX0VSUk9SICAgICA9IC01O1xuLy92YXIgWl9WRVJTSU9OX0VSUk9SID0gLTY7XG5cbi8qIFRoZSBkZWZsYXRlIGNvbXByZXNzaW9uIG1ldGhvZCAqL1xudmFyIFpfREVGTEFURUQgID0gODtcblxuXG4vKiBTVEFURVMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG52YXIgICAgSEVBRCA9IDE7ICAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIG1hZ2ljIGhlYWRlciAqL1xudmFyICAgIEZMQUdTID0gMjsgICAgICAvKiBpOiB3YWl0aW5nIGZvciBtZXRob2QgYW5kIGZsYWdzIChnemlwKSAqL1xudmFyICAgIFRJTUUgPSAzOyAgICAgICAvKiBpOiB3YWl0aW5nIGZvciBtb2RpZmljYXRpb24gdGltZSAoZ3ppcCkgKi9cbnZhciAgICBPUyA9IDQ7ICAgICAgICAgLyogaTogd2FpdGluZyBmb3IgZXh0cmEgZmxhZ3MgYW5kIG9wZXJhdGluZyBzeXN0ZW0gKGd6aXApICovXG52YXIgICAgRVhMRU4gPSA1OyAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIGV4dHJhIGxlbmd0aCAoZ3ppcCkgKi9cbnZhciAgICBFWFRSQSA9IDY7ICAgICAgLyogaTogd2FpdGluZyBmb3IgZXh0cmEgYnl0ZXMgKGd6aXApICovXG52YXIgICAgTkFNRSA9IDc7ICAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIGVuZCBvZiBmaWxlIG5hbWUgKGd6aXApICovXG52YXIgICAgQ09NTUVOVCA9IDg7ICAgIC8qIGk6IHdhaXRpbmcgZm9yIGVuZCBvZiBjb21tZW50IChnemlwKSAqL1xudmFyICAgIEhDUkMgPSA5OyAgICAgICAvKiBpOiB3YWl0aW5nIGZvciBoZWFkZXIgY3JjIChnemlwKSAqL1xudmFyICAgIERJQ1RJRCA9IDEwOyAgICAvKiBpOiB3YWl0aW5nIGZvciBkaWN0aW9uYXJ5IGNoZWNrIHZhbHVlICovXG52YXIgICAgRElDVCA9IDExOyAgICAgIC8qIHdhaXRpbmcgZm9yIGluZmxhdGVTZXREaWN0aW9uYXJ5KCkgY2FsbCAqL1xudmFyICAgICAgICBUWVBFID0gMTI7ICAgICAgLyogaTogd2FpdGluZyBmb3IgdHlwZSBiaXRzLCBpbmNsdWRpbmcgbGFzdC1mbGFnIGJpdCAqL1xudmFyICAgICAgICBUWVBFRE8gPSAxMzsgICAgLyogaTogc2FtZSwgYnV0IHNraXAgY2hlY2sgdG8gZXhpdCBpbmZsYXRlIG9uIG5ldyBibG9jayAqL1xudmFyICAgICAgICBTVE9SRUQgPSAxNDsgICAgLyogaTogd2FpdGluZyBmb3Igc3RvcmVkIHNpemUgKGxlbmd0aCBhbmQgY29tcGxlbWVudCkgKi9cbnZhciAgICAgICAgQ09QWV8gPSAxNTsgICAgIC8qIGkvbzogc2FtZSBhcyBDT1BZIGJlbG93LCBidXQgb25seSBmaXJzdCB0aW1lIGluICovXG52YXIgICAgICAgIENPUFkgPSAxNjsgICAgICAvKiBpL286IHdhaXRpbmcgZm9yIGlucHV0IG9yIG91dHB1dCB0byBjb3B5IHN0b3JlZCBibG9jayAqL1xudmFyICAgICAgICBUQUJMRSA9IDE3OyAgICAgLyogaTogd2FpdGluZyBmb3IgZHluYW1pYyBibG9jayB0YWJsZSBsZW5ndGhzICovXG52YXIgICAgICAgIExFTkxFTlMgPSAxODsgICAvKiBpOiB3YWl0aW5nIGZvciBjb2RlIGxlbmd0aCBjb2RlIGxlbmd0aHMgKi9cbnZhciAgICAgICAgQ09ERUxFTlMgPSAxOTsgIC8qIGk6IHdhaXRpbmcgZm9yIGxlbmd0aC9saXQgYW5kIGRpc3RhbmNlIGNvZGUgbGVuZ3RocyAqL1xudmFyICAgICAgICAgICAgTEVOXyA9IDIwOyAgICAgIC8qIGk6IHNhbWUgYXMgTEVOIGJlbG93LCBidXQgb25seSBmaXJzdCB0aW1lIGluICovXG52YXIgICAgICAgICAgICBMRU4gPSAyMTsgICAgICAgLyogaTogd2FpdGluZyBmb3IgbGVuZ3RoL2xpdC9lb2IgY29kZSAqL1xudmFyICAgICAgICAgICAgTEVORVhUID0gMjI7ICAgIC8qIGk6IHdhaXRpbmcgZm9yIGxlbmd0aCBleHRyYSBiaXRzICovXG52YXIgICAgICAgICAgICBESVNUID0gMjM7ICAgICAgLyogaTogd2FpdGluZyBmb3IgZGlzdGFuY2UgY29kZSAqL1xudmFyICAgICAgICAgICAgRElTVEVYVCA9IDI0OyAgIC8qIGk6IHdhaXRpbmcgZm9yIGRpc3RhbmNlIGV4dHJhIGJpdHMgKi9cbnZhciAgICAgICAgICAgIE1BVENIID0gMjU7ICAgICAvKiBvOiB3YWl0aW5nIGZvciBvdXRwdXQgc3BhY2UgdG8gY29weSBzdHJpbmcgKi9cbnZhciAgICAgICAgICAgIExJVCA9IDI2OyAgICAgICAvKiBvOiB3YWl0aW5nIGZvciBvdXRwdXQgc3BhY2UgdG8gd3JpdGUgbGl0ZXJhbCAqL1xudmFyICAgIENIRUNLID0gMjc7ICAgICAvKiBpOiB3YWl0aW5nIGZvciAzMi1iaXQgY2hlY2sgdmFsdWUgKi9cbnZhciAgICBMRU5HVEggPSAyODsgICAgLyogaTogd2FpdGluZyBmb3IgMzItYml0IGxlbmd0aCAoZ3ppcCkgKi9cbnZhciAgICBET05FID0gMjk7ICAgICAgLyogZmluaXNoZWQgY2hlY2ssIGRvbmUgLS0gcmVtYWluIGhlcmUgdW50aWwgcmVzZXQgKi9cbnZhciAgICBCQUQgPSAzMDsgICAgICAgLyogZ290IGEgZGF0YSBlcnJvciAtLSByZW1haW4gaGVyZSB1bnRpbCByZXNldCAqL1xudmFyICAgIE1FTSA9IDMxOyAgICAgICAvKiBnb3QgYW4gaW5mbGF0ZSgpIG1lbW9yeSBlcnJvciAtLSByZW1haW4gaGVyZSB1bnRpbCByZXNldCAqL1xudmFyICAgIFNZTkMgPSAzMjsgICAgICAvKiBsb29raW5nIGZvciBzeW5jaHJvbml6YXRpb24gYnl0ZXMgdG8gcmVzdGFydCBpbmZsYXRlKCkgKi9cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG5cbnZhciBFTk9VR0hfTEVOUyA9IDg1MjtcbnZhciBFTk9VR0hfRElTVFMgPSA1OTI7XG4vL3ZhciBFTk9VR0ggPSAgKEVOT1VHSF9MRU5TK0VOT1VHSF9ESVNUUyk7XG5cbnZhciBNQVhfV0JJVFMgPSAxNTtcbi8qIDMySyBMWjc3IHdpbmRvdyAqL1xudmFyIERFRl9XQklUUyA9IE1BWF9XQklUUztcblxuXG5mdW5jdGlvbiB6c3dhcDMyKHEpIHtcbiAgcmV0dXJuICAoKChxID4+PiAyNCkgJiAweGZmKSArXG4gICAgICAgICAgKChxID4+PiA4KSAmIDB4ZmYwMCkgK1xuICAgICAgICAgICgocSAmIDB4ZmYwMCkgPDwgOCkgK1xuICAgICAgICAgICgocSAmIDB4ZmYpIDw8IDI0KSk7XG59XG5cblxuZnVuY3Rpb24gSW5mbGF0ZVN0YXRlKCkge1xuICB0aGlzLm1vZGUgPSAwOyAgICAgICAgICAgICAvKiBjdXJyZW50IGluZmxhdGUgbW9kZSAqL1xuICB0aGlzLmxhc3QgPSBmYWxzZTsgICAgICAgICAgLyogdHJ1ZSBpZiBwcm9jZXNzaW5nIGxhc3QgYmxvY2sgKi9cbiAgdGhpcy53cmFwID0gMDsgICAgICAgICAgICAgIC8qIGJpdCAwIHRydWUgZm9yIHpsaWIsIGJpdCAxIHRydWUgZm9yIGd6aXAgKi9cbiAgdGhpcy5oYXZlZGljdCA9IGZhbHNlOyAgICAgIC8qIHRydWUgaWYgZGljdGlvbmFyeSBwcm92aWRlZCAqL1xuICB0aGlzLmZsYWdzID0gMDsgICAgICAgICAgICAgLyogZ3ppcCBoZWFkZXIgbWV0aG9kIGFuZCBmbGFncyAoMCBpZiB6bGliKSAqL1xuICB0aGlzLmRtYXggPSAwOyAgICAgICAgICAgICAgLyogemxpYiBoZWFkZXIgbWF4IGRpc3RhbmNlIChJTkZMQVRFX1NUUklDVCkgKi9cbiAgdGhpcy5jaGVjayA9IDA7ICAgICAgICAgICAgIC8qIHByb3RlY3RlZCBjb3B5IG9mIGNoZWNrIHZhbHVlICovXG4gIHRoaXMudG90YWwgPSAwOyAgICAgICAgICAgICAvKiBwcm90ZWN0ZWQgY29weSBvZiBvdXRwdXQgY291bnQgKi9cbiAgLy8gVE9ETzogbWF5IGJlIHt9XG4gIHRoaXMuaGVhZCA9IG51bGw7ICAgICAgICAgICAvKiB3aGVyZSB0byBzYXZlIGd6aXAgaGVhZGVyIGluZm9ybWF0aW9uICovXG5cbiAgLyogc2xpZGluZyB3aW5kb3cgKi9cbiAgdGhpcy53Yml0cyA9IDA7ICAgICAgICAgICAgIC8qIGxvZyBiYXNlIDIgb2YgcmVxdWVzdGVkIHdpbmRvdyBzaXplICovXG4gIHRoaXMud3NpemUgPSAwOyAgICAgICAgICAgICAvKiB3aW5kb3cgc2l6ZSBvciB6ZXJvIGlmIG5vdCB1c2luZyB3aW5kb3cgKi9cbiAgdGhpcy53aGF2ZSA9IDA7ICAgICAgICAgICAgIC8qIHZhbGlkIGJ5dGVzIGluIHRoZSB3aW5kb3cgKi9cbiAgdGhpcy53bmV4dCA9IDA7ICAgICAgICAgICAgIC8qIHdpbmRvdyB3cml0ZSBpbmRleCAqL1xuICB0aGlzLndpbmRvdyA9IG51bGw7ICAgICAgICAgLyogYWxsb2NhdGVkIHNsaWRpbmcgd2luZG93LCBpZiBuZWVkZWQgKi9cblxuICAvKiBiaXQgYWNjdW11bGF0b3IgKi9cbiAgdGhpcy5ob2xkID0gMDsgICAgICAgICAgICAgIC8qIGlucHV0IGJpdCBhY2N1bXVsYXRvciAqL1xuICB0aGlzLmJpdHMgPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGJpdHMgaW4gXCJpblwiICovXG5cbiAgLyogZm9yIHN0cmluZyBhbmQgc3RvcmVkIGJsb2NrIGNvcHlpbmcgKi9cbiAgdGhpcy5sZW5ndGggPSAwOyAgICAgICAgICAgIC8qIGxpdGVyYWwgb3IgbGVuZ3RoIG9mIGRhdGEgdG8gY29weSAqL1xuICB0aGlzLm9mZnNldCA9IDA7ICAgICAgICAgICAgLyogZGlzdGFuY2UgYmFjayB0byBjb3B5IHN0cmluZyBmcm9tICovXG5cbiAgLyogZm9yIHRhYmxlIGFuZCBjb2RlIGRlY29kaW5nICovXG4gIHRoaXMuZXh0cmEgPSAwOyAgICAgICAgICAgICAvKiBleHRyYSBiaXRzIG5lZWRlZCAqL1xuXG4gIC8qIGZpeGVkIGFuZCBkeW5hbWljIGNvZGUgdGFibGVzICovXG4gIHRoaXMubGVuY29kZSA9IG51bGw7ICAgICAgICAgIC8qIHN0YXJ0aW5nIHRhYmxlIGZvciBsZW5ndGgvbGl0ZXJhbCBjb2RlcyAqL1xuICB0aGlzLmRpc3Rjb2RlID0gbnVsbDsgICAgICAgICAvKiBzdGFydGluZyB0YWJsZSBmb3IgZGlzdGFuY2UgY29kZXMgKi9cbiAgdGhpcy5sZW5iaXRzID0gMDsgICAgICAgICAgIC8qIGluZGV4IGJpdHMgZm9yIGxlbmNvZGUgKi9cbiAgdGhpcy5kaXN0Yml0cyA9IDA7ICAgICAgICAgIC8qIGluZGV4IGJpdHMgZm9yIGRpc3Rjb2RlICovXG5cbiAgLyogZHluYW1pYyB0YWJsZSBidWlsZGluZyAqL1xuICB0aGlzLm5jb2RlID0gMDsgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGNvZGUgbGVuZ3RoIGNvZGUgbGVuZ3RocyAqL1xuICB0aGlzLm5sZW4gPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGxlbmd0aCBjb2RlIGxlbmd0aHMgKi9cbiAgdGhpcy5uZGlzdCA9IDA7ICAgICAgICAgICAgIC8qIG51bWJlciBvZiBkaXN0YW5jZSBjb2RlIGxlbmd0aHMgKi9cbiAgdGhpcy5oYXZlID0gMDsgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBjb2RlIGxlbmd0aHMgaW4gbGVuc1tdICovXG4gIHRoaXMubmV4dCA9IG51bGw7ICAgICAgICAgICAgICAvKiBuZXh0IGF2YWlsYWJsZSBzcGFjZSBpbiBjb2Rlc1tdICovXG5cbiAgdGhpcy5sZW5zID0gbmV3IHV0aWxzLkJ1ZjE2KDMyMCk7IC8qIHRlbXBvcmFyeSBzdG9yYWdlIGZvciBjb2RlIGxlbmd0aHMgKi9cbiAgdGhpcy53b3JrID0gbmV3IHV0aWxzLkJ1ZjE2KDI4OCk7IC8qIHdvcmsgYXJlYSBmb3IgY29kZSB0YWJsZSBidWlsZGluZyAqL1xuXG4gIC8qXG4gICBiZWNhdXNlIHdlIGRvbid0IGhhdmUgcG9pbnRlcnMgaW4ganMsIHdlIHVzZSBsZW5jb2RlIGFuZCBkaXN0Y29kZSBkaXJlY3RseVxuICAgYXMgYnVmZmVycyBzbyB3ZSBkb24ndCBuZWVkIGNvZGVzXG4gICovXG4gIC8vdGhpcy5jb2RlcyA9IG5ldyB1dGlscy5CdWYzMihFTk9VR0gpOyAgICAgICAvKiBzcGFjZSBmb3IgY29kZSB0YWJsZXMgKi9cbiAgdGhpcy5sZW5keW4gPSBudWxsOyAgICAgICAgICAgICAgLyogZHluYW1pYyB0YWJsZSBmb3IgbGVuZ3RoL2xpdGVyYWwgY29kZXMgKEpTIHNwZWNpZmljKSAqL1xuICB0aGlzLmRpc3RkeW4gPSBudWxsOyAgICAgICAgICAgICAvKiBkeW5hbWljIHRhYmxlIGZvciBkaXN0YW5jZSBjb2RlcyAoSlMgc3BlY2lmaWMpICovXG4gIHRoaXMuc2FuZSA9IDA7ICAgICAgICAgICAgICAgICAgIC8qIGlmIGZhbHNlLCBhbGxvdyBpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgKi9cbiAgdGhpcy5iYWNrID0gMDsgICAgICAgICAgICAgICAgICAgLyogYml0cyBiYWNrIG9mIGxhc3QgdW5wcm9jZXNzZWQgbGVuZ3RoL2xpdCAqL1xuICB0aGlzLndhcyA9IDA7ICAgICAgICAgICAgICAgICAgICAvKiBpbml0aWFsIGxlbmd0aCBvZiBtYXRjaCAqL1xufVxuXG5mdW5jdGlvbiBpbmZsYXRlUmVzZXRLZWVwKHN0cm0pIHtcbiAgdmFyIHN0YXRlO1xuXG4gIGlmICghc3RybSB8fCAhc3RybS5zdGF0ZSkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1I7IH1cbiAgc3RhdGUgPSBzdHJtLnN0YXRlO1xuICBzdHJtLnRvdGFsX2luID0gc3RybS50b3RhbF9vdXQgPSBzdGF0ZS50b3RhbCA9IDA7XG4gIHN0cm0ubXNnID0gJyc7IC8qWl9OVUxMKi9cbiAgaWYgKHN0YXRlLndyYXApIHsgICAgICAgLyogdG8gc3VwcG9ydCBpbGwtY29uY2VpdmVkIEphdmEgdGVzdCBzdWl0ZSAqL1xuICAgIHN0cm0uYWRsZXIgPSBzdGF0ZS53cmFwICYgMTtcbiAgfVxuICBzdGF0ZS5tb2RlID0gSEVBRDtcbiAgc3RhdGUubGFzdCA9IDA7XG4gIHN0YXRlLmhhdmVkaWN0ID0gMDtcbiAgc3RhdGUuZG1heCA9IDMyNzY4O1xuICBzdGF0ZS5oZWFkID0gbnVsbC8qWl9OVUxMKi87XG4gIHN0YXRlLmhvbGQgPSAwO1xuICBzdGF0ZS5iaXRzID0gMDtcbiAgLy9zdGF0ZS5sZW5jb2RlID0gc3RhdGUuZGlzdGNvZGUgPSBzdGF0ZS5uZXh0ID0gc3RhdGUuY29kZXM7XG4gIHN0YXRlLmxlbmNvZGUgPSBzdGF0ZS5sZW5keW4gPSBuZXcgdXRpbHMuQnVmMzIoRU5PVUdIX0xFTlMpO1xuICBzdGF0ZS5kaXN0Y29kZSA9IHN0YXRlLmRpc3RkeW4gPSBuZXcgdXRpbHMuQnVmMzIoRU5PVUdIX0RJU1RTKTtcblxuICBzdGF0ZS5zYW5lID0gMTtcbiAgc3RhdGUuYmFjayA9IC0xO1xuICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6IHJlc2V0XFxuXCIpKTtcbiAgcmV0dXJuIFpfT0s7XG59XG5cbmZ1bmN0aW9uIGluZmxhdGVSZXNldChzdHJtKSB7XG4gIHZhciBzdGF0ZTtcblxuICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUpIHsgcmV0dXJuIFpfU1RSRUFNX0VSUk9SOyB9XG4gIHN0YXRlID0gc3RybS5zdGF0ZTtcbiAgc3RhdGUud3NpemUgPSAwO1xuICBzdGF0ZS53aGF2ZSA9IDA7XG4gIHN0YXRlLnduZXh0ID0gMDtcbiAgcmV0dXJuIGluZmxhdGVSZXNldEtlZXAoc3RybSk7XG5cbn1cblxuZnVuY3Rpb24gaW5mbGF0ZVJlc2V0MihzdHJtLCB3aW5kb3dCaXRzKSB7XG4gIHZhciB3cmFwO1xuICB2YXIgc3RhdGU7XG5cbiAgLyogZ2V0IHRoZSBzdGF0ZSAqL1xuICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUpIHsgcmV0dXJuIFpfU1RSRUFNX0VSUk9SOyB9XG4gIHN0YXRlID0gc3RybS5zdGF0ZTtcblxuICAvKiBleHRyYWN0IHdyYXAgcmVxdWVzdCBmcm9tIHdpbmRvd0JpdHMgcGFyYW1ldGVyICovXG4gIGlmICh3aW5kb3dCaXRzIDwgMCkge1xuICAgIHdyYXAgPSAwO1xuICAgIHdpbmRvd0JpdHMgPSAtd2luZG93Qml0cztcbiAgfVxuICBlbHNlIHtcbiAgICB3cmFwID0gKHdpbmRvd0JpdHMgPj4gNCkgKyAxO1xuICAgIGlmICh3aW5kb3dCaXRzIDwgNDgpIHtcbiAgICAgIHdpbmRvd0JpdHMgJj0gMTU7XG4gICAgfVxuICB9XG5cbiAgLyogc2V0IG51bWJlciBvZiB3aW5kb3cgYml0cywgZnJlZSB3aW5kb3cgaWYgZGlmZmVyZW50ICovXG4gIGlmICh3aW5kb3dCaXRzICYmICh3aW5kb3dCaXRzIDwgOCB8fCB3aW5kb3dCaXRzID4gMTUpKSB7XG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuICB9XG4gIGlmIChzdGF0ZS53aW5kb3cgIT09IG51bGwgJiYgc3RhdGUud2JpdHMgIT09IHdpbmRvd0JpdHMpIHtcbiAgICBzdGF0ZS53aW5kb3cgPSBudWxsO1xuICB9XG5cbiAgLyogdXBkYXRlIHN0YXRlIGFuZCByZXNldCB0aGUgcmVzdCBvZiBpdCAqL1xuICBzdGF0ZS53cmFwID0gd3JhcDtcbiAgc3RhdGUud2JpdHMgPSB3aW5kb3dCaXRzO1xuICByZXR1cm4gaW5mbGF0ZVJlc2V0KHN0cm0pO1xufVxuXG5mdW5jdGlvbiBpbmZsYXRlSW5pdDIoc3RybSwgd2luZG93Qml0cykge1xuICB2YXIgcmV0O1xuICB2YXIgc3RhdGU7XG5cbiAgaWYgKCFzdHJtKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuICAvL3N0cm0ubXNnID0gWl9OVUxMOyAgICAgICAgICAgICAgICAgLyogaW4gY2FzZSB3ZSByZXR1cm4gYW4gZXJyb3IgKi9cblxuICBzdGF0ZSA9IG5ldyBJbmZsYXRlU3RhdGUoKTtcblxuICAvL2lmIChzdGF0ZSA9PT0gWl9OVUxMKSByZXR1cm4gWl9NRU1fRVJST1I7XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogYWxsb2NhdGVkXFxuXCIpKTtcbiAgc3RybS5zdGF0ZSA9IHN0YXRlO1xuICBzdGF0ZS53aW5kb3cgPSBudWxsLypaX05VTEwqLztcbiAgcmV0ID0gaW5mbGF0ZVJlc2V0MihzdHJtLCB3aW5kb3dCaXRzKTtcbiAgaWYgKHJldCAhPT0gWl9PSykge1xuICAgIHN0cm0uc3RhdGUgPSBudWxsLypaX05VTEwqLztcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBpbmZsYXRlSW5pdChzdHJtKSB7XG4gIHJldHVybiBpbmZsYXRlSW5pdDIoc3RybSwgREVGX1dCSVRTKTtcbn1cblxuXG4vKlxuIFJldHVybiBzdGF0ZSB3aXRoIGxlbmd0aCBhbmQgZGlzdGFuY2UgZGVjb2RpbmcgdGFibGVzIGFuZCBpbmRleCBzaXplcyBzZXQgdG9cbiBmaXhlZCBjb2RlIGRlY29kaW5nLiAgTm9ybWFsbHkgdGhpcyByZXR1cm5zIGZpeGVkIHRhYmxlcyBmcm9tIGluZmZpeGVkLmguXG4gSWYgQlVJTERGSVhFRCBpcyBkZWZpbmVkLCB0aGVuIGluc3RlYWQgdGhpcyByb3V0aW5lIGJ1aWxkcyB0aGUgdGFibGVzIHRoZVxuIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCByZXR1cm5zIHRob3NlIHRhYmxlcyB0aGUgZmlyc3QgdGltZSBhbmRcbiB0aGVyZWFmdGVyLiAgVGhpcyByZWR1Y2VzIHRoZSBzaXplIG9mIHRoZSBjb2RlIGJ5IGFib3V0IDJLIGJ5dGVzLCBpblxuIGV4Y2hhbmdlIGZvciBhIGxpdHRsZSBleGVjdXRpb24gdGltZS4gIEhvd2V2ZXIsIEJVSUxERklYRUQgc2hvdWxkIG5vdCBiZVxuIHVzZWQgZm9yIHRocmVhZGVkIGFwcGxpY2F0aW9ucywgc2luY2UgdGhlIHJld3JpdGluZyBvZiB0aGUgdGFibGVzIGFuZCB2aXJnaW5cbiBtYXkgbm90IGJlIHRocmVhZC1zYWZlLlxuICovXG52YXIgdmlyZ2luID0gdHJ1ZTtcblxudmFyIGxlbmZpeCwgZGlzdGZpeDsgLy8gV2UgaGF2ZSBubyBwb2ludGVycyBpbiBKUywgc28ga2VlcCB0YWJsZXMgc2VwYXJhdGVcblxuZnVuY3Rpb24gZml4ZWR0YWJsZXMoc3RhdGUpIHtcbiAgLyogYnVpbGQgZml4ZWQgaHVmZm1hbiB0YWJsZXMgaWYgZmlyc3QgY2FsbCAobWF5IG5vdCBiZSB0aHJlYWQgc2FmZSkgKi9cbiAgaWYgKHZpcmdpbikge1xuICAgIHZhciBzeW07XG5cbiAgICBsZW5maXggPSBuZXcgdXRpbHMuQnVmMzIoNTEyKTtcbiAgICBkaXN0Zml4ID0gbmV3IHV0aWxzLkJ1ZjMyKDMyKTtcblxuICAgIC8qIGxpdGVyYWwvbGVuZ3RoIHRhYmxlICovXG4gICAgc3ltID0gMDtcbiAgICB3aGlsZSAoc3ltIDwgMTQ0KSB7IHN0YXRlLmxlbnNbc3ltKytdID0gODsgfVxuICAgIHdoaWxlIChzeW0gPCAyNTYpIHsgc3RhdGUubGVuc1tzeW0rK10gPSA5OyB9XG4gICAgd2hpbGUgKHN5bSA8IDI4MCkgeyBzdGF0ZS5sZW5zW3N5bSsrXSA9IDc7IH1cbiAgICB3aGlsZSAoc3ltIDwgMjg4KSB7IHN0YXRlLmxlbnNbc3ltKytdID0gODsgfVxuXG4gICAgaW5mbGF0ZV90YWJsZShMRU5TLCAgc3RhdGUubGVucywgMCwgMjg4LCBsZW5maXgsICAgMCwgc3RhdGUud29yaywgeyBiaXRzOiA5IH0pO1xuXG4gICAgLyogZGlzdGFuY2UgdGFibGUgKi9cbiAgICBzeW0gPSAwO1xuICAgIHdoaWxlIChzeW0gPCAzMikgeyBzdGF0ZS5sZW5zW3N5bSsrXSA9IDU7IH1cblxuICAgIGluZmxhdGVfdGFibGUoRElTVFMsIHN0YXRlLmxlbnMsIDAsIDMyLCAgIGRpc3RmaXgsIDAsIHN0YXRlLndvcmssIHsgYml0czogNSB9KTtcblxuICAgIC8qIGRvIHRoaXMganVzdCBvbmNlICovXG4gICAgdmlyZ2luID0gZmFsc2U7XG4gIH1cblxuICBzdGF0ZS5sZW5jb2RlID0gbGVuZml4O1xuICBzdGF0ZS5sZW5iaXRzID0gOTtcbiAgc3RhdGUuZGlzdGNvZGUgPSBkaXN0Zml4O1xuICBzdGF0ZS5kaXN0Yml0cyA9IDU7XG59XG5cblxuLypcbiBVcGRhdGUgdGhlIHdpbmRvdyB3aXRoIHRoZSBsYXN0IHdzaXplIChub3JtYWxseSAzMkspIGJ5dGVzIHdyaXR0ZW4gYmVmb3JlXG4gcmV0dXJuaW5nLiAgSWYgd2luZG93IGRvZXMgbm90IGV4aXN0IHlldCwgY3JlYXRlIGl0LiAgVGhpcyBpcyBvbmx5IGNhbGxlZFxuIHdoZW4gYSB3aW5kb3cgaXMgYWxyZWFkeSBpbiB1c2UsIG9yIHdoZW4gb3V0cHV0IGhhcyBiZWVuIHdyaXR0ZW4gZHVyaW5nIHRoaXNcbiBpbmZsYXRlIGNhbGwsIGJ1dCB0aGUgZW5kIG9mIHRoZSBkZWZsYXRlIHN0cmVhbSBoYXMgbm90IGJlZW4gcmVhY2hlZCB5ZXQuXG4gSXQgaXMgYWxzbyBjYWxsZWQgdG8gY3JlYXRlIGEgd2luZG93IGZvciBkaWN0aW9uYXJ5IGRhdGEgd2hlbiBhIGRpY3Rpb25hcnlcbiBpcyBsb2FkZWQuXG5cbiBQcm92aWRpbmcgb3V0cHV0IGJ1ZmZlcnMgbGFyZ2VyIHRoYW4gMzJLIHRvIGluZmxhdGUoKSBzaG91bGQgcHJvdmlkZSBhIHNwZWVkXG4gYWR2YW50YWdlLCBzaW5jZSBvbmx5IHRoZSBsYXN0IDMySyBvZiBvdXRwdXQgaXMgY29waWVkIHRvIHRoZSBzbGlkaW5nIHdpbmRvd1xuIHVwb24gcmV0dXJuIGZyb20gaW5mbGF0ZSgpLCBhbmQgc2luY2UgYWxsIGRpc3RhbmNlcyBhZnRlciB0aGUgZmlyc3QgMzJLIG9mXG4gb3V0cHV0IHdpbGwgZmFsbCBpbiB0aGUgb3V0cHV0IGRhdGEsIG1ha2luZyBtYXRjaCBjb3BpZXMgc2ltcGxlciBhbmQgZmFzdGVyLlxuIFRoZSBhZHZhbnRhZ2UgbWF5IGJlIGRlcGVuZGVudCBvbiB0aGUgc2l6ZSBvZiB0aGUgcHJvY2Vzc29yJ3MgZGF0YSBjYWNoZXMuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZXdpbmRvdyhzdHJtLCBzcmMsIGVuZCwgY29weSkge1xuICB2YXIgZGlzdDtcbiAgdmFyIHN0YXRlID0gc3RybS5zdGF0ZTtcblxuICAvKiBpZiBpdCBoYXNuJ3QgYmVlbiBkb25lIGFscmVhZHksIGFsbG9jYXRlIHNwYWNlIGZvciB0aGUgd2luZG93ICovXG4gIGlmIChzdGF0ZS53aW5kb3cgPT09IG51bGwpIHtcbiAgICBzdGF0ZS53c2l6ZSA9IDEgPDwgc3RhdGUud2JpdHM7XG4gICAgc3RhdGUud25leHQgPSAwO1xuICAgIHN0YXRlLndoYXZlID0gMDtcblxuICAgIHN0YXRlLndpbmRvdyA9IG5ldyB1dGlscy5CdWY4KHN0YXRlLndzaXplKTtcbiAgfVxuXG4gIC8qIGNvcHkgc3RhdGUtPndzaXplIG9yIGxlc3Mgb3V0cHV0IGJ5dGVzIGludG8gdGhlIGNpcmN1bGFyIHdpbmRvdyAqL1xuICBpZiAoY29weSA+PSBzdGF0ZS53c2l6ZSkge1xuICAgIHV0aWxzLmFycmF5U2V0KHN0YXRlLndpbmRvdywgc3JjLCBlbmQgLSBzdGF0ZS53c2l6ZSwgc3RhdGUud3NpemUsIDApO1xuICAgIHN0YXRlLnduZXh0ID0gMDtcbiAgICBzdGF0ZS53aGF2ZSA9IHN0YXRlLndzaXplO1xuICB9XG4gIGVsc2Uge1xuICAgIGRpc3QgPSBzdGF0ZS53c2l6ZSAtIHN0YXRlLnduZXh0O1xuICAgIGlmIChkaXN0ID4gY29weSkge1xuICAgICAgZGlzdCA9IGNvcHk7XG4gICAgfVxuICAgIC8vem1lbWNweShzdGF0ZS0+d2luZG93ICsgc3RhdGUtPnduZXh0LCBlbmQgLSBjb3B5LCBkaXN0KTtcbiAgICB1dGlscy5hcnJheVNldChzdGF0ZS53aW5kb3csIHNyYywgZW5kIC0gY29weSwgZGlzdCwgc3RhdGUud25leHQpO1xuICAgIGNvcHkgLT0gZGlzdDtcbiAgICBpZiAoY29weSkge1xuICAgICAgLy96bWVtY3B5KHN0YXRlLT53aW5kb3csIGVuZCAtIGNvcHksIGNvcHkpO1xuICAgICAgdXRpbHMuYXJyYXlTZXQoc3RhdGUud2luZG93LCBzcmMsIGVuZCAtIGNvcHksIGNvcHksIDApO1xuICAgICAgc3RhdGUud25leHQgPSBjb3B5O1xuICAgICAgc3RhdGUud2hhdmUgPSBzdGF0ZS53c2l6ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzdGF0ZS53bmV4dCArPSBkaXN0O1xuICAgICAgaWYgKHN0YXRlLnduZXh0ID09PSBzdGF0ZS53c2l6ZSkgeyBzdGF0ZS53bmV4dCA9IDA7IH1cbiAgICAgIGlmIChzdGF0ZS53aGF2ZSA8IHN0YXRlLndzaXplKSB7IHN0YXRlLndoYXZlICs9IGRpc3Q7IH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGluZmxhdGUoc3RybSwgZmx1c2gpIHtcbiAgdmFyIHN0YXRlO1xuICB2YXIgaW5wdXQsIG91dHB1dDsgICAgICAgICAgLy8gaW5wdXQvb3V0cHV0IGJ1ZmZlcnNcbiAgdmFyIG5leHQ7ICAgICAgICAgICAgICAgICAgIC8qIG5leHQgaW5wdXQgSU5ERVggKi9cbiAgdmFyIHB1dDsgICAgICAgICAgICAgICAgICAgIC8qIG5leHQgb3V0cHV0IElOREVYICovXG4gIHZhciBoYXZlLCBsZWZ0OyAgICAgICAgICAgICAvKiBhdmFpbGFibGUgaW5wdXQgYW5kIG91dHB1dCAqL1xuICB2YXIgaG9sZDsgICAgICAgICAgICAgICAgICAgLyogYml0IGJ1ZmZlciAqL1xuICB2YXIgYml0czsgICAgICAgICAgICAgICAgICAgLyogYml0cyBpbiBiaXQgYnVmZmVyICovXG4gIHZhciBfaW4sIF9vdXQ7ICAgICAgICAgICAgICAvKiBzYXZlIHN0YXJ0aW5nIGF2YWlsYWJsZSBpbnB1dCBhbmQgb3V0cHV0ICovXG4gIHZhciBjb3B5OyAgICAgICAgICAgICAgICAgICAvKiBudW1iZXIgb2Ygc3RvcmVkIG9yIG1hdGNoIGJ5dGVzIHRvIGNvcHkgKi9cbiAgdmFyIGZyb207ICAgICAgICAgICAgICAgICAgIC8qIHdoZXJlIHRvIGNvcHkgbWF0Y2ggYnl0ZXMgZnJvbSAqL1xuICB2YXIgZnJvbV9zb3VyY2U7XG4gIHZhciBoZXJlID0gMDsgICAgICAgICAgICAgICAvKiBjdXJyZW50IGRlY29kaW5nIHRhYmxlIGVudHJ5ICovXG4gIHZhciBoZXJlX2JpdHMsIGhlcmVfb3AsIGhlcmVfdmFsOyAvLyBwYWtlZCBcImhlcmVcIiBkZW5vcm1hbGl6ZWQgKEpTIHNwZWNpZmljKVxuICAvL3ZhciBsYXN0OyAgICAgICAgICAgICAgICAgICAvKiBwYXJlbnQgdGFibGUgZW50cnkgKi9cbiAgdmFyIGxhc3RfYml0cywgbGFzdF9vcCwgbGFzdF92YWw7IC8vIHBha2VkIFwibGFzdFwiIGRlbm9ybWFsaXplZCAoSlMgc3BlY2lmaWMpXG4gIHZhciBsZW47ICAgICAgICAgICAgICAgICAgICAvKiBsZW5ndGggdG8gY29weSBmb3IgcmVwZWF0cywgYml0cyB0byBkcm9wICovXG4gIHZhciByZXQ7ICAgICAgICAgICAgICAgICAgICAvKiByZXR1cm4gY29kZSAqL1xuICB2YXIgaGJ1ZiA9IG5ldyB1dGlscy5CdWY4KDQpOyAgICAvKiBidWZmZXIgZm9yIGd6aXAgaGVhZGVyIGNyYyBjYWxjdWxhdGlvbiAqL1xuICB2YXIgb3B0cztcblxuICB2YXIgbjsgLy8gdGVtcG9yYXJ5IHZhciBmb3IgTkVFRF9CSVRTXG5cbiAgdmFyIG9yZGVyID0gLyogcGVybXV0YXRpb24gb2YgY29kZSBsZW5ndGhzICovXG4gICAgWyAxNiwgMTcsIDE4LCAwLCA4LCA3LCA5LCA2LCAxMCwgNSwgMTEsIDQsIDEyLCAzLCAxMywgMiwgMTQsIDEsIDE1IF07XG5cblxuICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUgfHwgIXN0cm0ub3V0cHV0IHx8XG4gICAgICAoIXN0cm0uaW5wdXQgJiYgc3RybS5hdmFpbF9pbiAhPT0gMCkpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICBzdGF0ZSA9IHN0cm0uc3RhdGU7XG4gIGlmIChzdGF0ZS5tb2RlID09PSBUWVBFKSB7IHN0YXRlLm1vZGUgPSBUWVBFRE87IH0gICAgLyogc2tpcCBjaGVjayAqL1xuXG5cbiAgLy8tLS0gTE9BRCgpIC0tLVxuICBwdXQgPSBzdHJtLm5leHRfb3V0O1xuICBvdXRwdXQgPSBzdHJtLm91dHB1dDtcbiAgbGVmdCA9IHN0cm0uYXZhaWxfb3V0O1xuICBuZXh0ID0gc3RybS5uZXh0X2luO1xuICBpbnB1dCA9IHN0cm0uaW5wdXQ7XG4gIGhhdmUgPSBzdHJtLmF2YWlsX2luO1xuICBob2xkID0gc3RhdGUuaG9sZDtcbiAgYml0cyA9IHN0YXRlLmJpdHM7XG4gIC8vLS0tXG5cbiAgX2luID0gaGF2ZTtcbiAgX291dCA9IGxlZnQ7XG4gIHJldCA9IFpfT0s7XG5cbiAgaW5mX2xlYXZlOiAvLyBnb3RvIGVtdWxhdGlvblxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChzdGF0ZS5tb2RlKSB7XG4gICAgICBjYXNlIEhFQUQ6XG4gICAgICAgIGlmIChzdGF0ZS53cmFwID09PSAwKSB7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IFRZUEVETztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLz09PSBORUVEQklUUygxNik7XG4gICAgICAgIHdoaWxlIChiaXRzIDwgMTYpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgaWYgKChzdGF0ZS53cmFwICYgMikgJiYgaG9sZCA9PT0gMHg4YjFmKSB7ICAvKiBnemlwIGhlYWRlciAqL1xuICAgICAgICAgIHN0YXRlLmNoZWNrID0gMC8qY3JjMzIoMEwsIFpfTlVMTCwgMCkqLztcbiAgICAgICAgICAvLz09PSBDUkMyKHN0YXRlLmNoZWNrLCBob2xkKTtcbiAgICAgICAgICBoYnVmWzBdID0gaG9sZCAmIDB4ZmY7XG4gICAgICAgICAgaGJ1ZlsxXSA9IChob2xkID4+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgc3RhdGUuY2hlY2sgPSBjcmMzMihzdGF0ZS5jaGVjaywgaGJ1ZiwgMiwgMCk7XG4gICAgICAgICAgLy89PT0vL1xuXG4gICAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgICBob2xkID0gMDtcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgc3RhdGUubW9kZSA9IEZMQUdTO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmZsYWdzID0gMDsgICAgICAgICAgIC8qIGV4cGVjdCB6bGliIGhlYWRlciAqL1xuICAgICAgICBpZiAoc3RhdGUuaGVhZCkge1xuICAgICAgICAgIHN0YXRlLmhlYWQuZG9uZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHN0YXRlLndyYXAgJiAxKSB8fCAgIC8qIGNoZWNrIGlmIHpsaWIgaGVhZGVyIGFsbG93ZWQgKi9cbiAgICAgICAgICAoKChob2xkICYgMHhmZikvKkJJVFMoOCkqLyA8PCA4KSArIChob2xkID4+IDgpKSAlIDMxKSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAnaW5jb3JyZWN0IGhlYWRlciBjaGVjayc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGhvbGQgJiAweDBmKS8qQklUUyg0KSovICE9PSBaX0RFRkxBVEVEKSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAndW5rbm93biBjb21wcmVzc2lvbiBtZXRob2QnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8tLS0gRFJPUEJJVFMoNCkgLS0tLy9cbiAgICAgICAgaG9sZCA+Pj49IDQ7XG4gICAgICAgIGJpdHMgLT0gNDtcbiAgICAgICAgLy8tLS0vL1xuICAgICAgICBsZW4gPSAoaG9sZCAmIDB4MGYpLypCSVRTKDQpKi8gKyA4O1xuICAgICAgICBpZiAoc3RhdGUud2JpdHMgPT09IDApIHtcbiAgICAgICAgICBzdGF0ZS53Yml0cyA9IGxlbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChsZW4gPiBzdGF0ZS53Yml0cykge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgd2luZG93IHNpemUnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuZG1heCA9IDEgPDwgbGVuO1xuICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgemxpYiBoZWFkZXIgb2tcXG5cIikpO1xuICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSAxLyphZGxlcjMyKDBMLCBaX05VTEwsIDApKi87XG4gICAgICAgIHN0YXRlLm1vZGUgPSBob2xkICYgMHgyMDAgPyBESUNUSUQgOiBUWVBFO1xuICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICBob2xkID0gMDtcbiAgICAgICAgYml0cyA9IDA7XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZMQUdTOlxuICAgICAgICAvLz09PSBORUVEQklUUygxNik7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMTYpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUuZmxhZ3MgPSBob2xkO1xuICAgICAgICBpZiAoKHN0YXRlLmZsYWdzICYgMHhmZikgIT09IFpfREVGTEFURUQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICd1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZCc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweGUwMDApIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICd1bmtub3duIGhlYWRlciBmbGFncyBzZXQnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICBzdGF0ZS5oZWFkLnRleHQgPSAoKGhvbGQgPj4gOCkgJiAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDAyMDApIHtcbiAgICAgICAgICAvLz09PSBDUkMyKHN0YXRlLmNoZWNrLCBob2xkKTtcbiAgICAgICAgICBoYnVmWzBdID0gaG9sZCAmIDB4ZmY7XG4gICAgICAgICAgaGJ1ZlsxXSA9IChob2xkID4+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgc3RhdGUuY2hlY2sgPSBjcmMzMihzdGF0ZS5jaGVjaywgaGJ1ZiwgMiwgMCk7XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICB9XG4gICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgIGhvbGQgPSAwO1xuICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5tb2RlID0gVElNRTtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBUSU1FOlxuICAgICAgICAvLz09PSBORUVEQklUUygzMik7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMzIpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICBzdGF0ZS5oZWFkLnRpbWUgPSBob2xkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xuICAgICAgICAgIC8vPT09IENSQzQoc3RhdGUuY2hlY2ssIGhvbGQpXG4gICAgICAgICAgaGJ1ZlswXSA9IGhvbGQgJiAweGZmO1xuICAgICAgICAgIGhidWZbMV0gPSAoaG9sZCA+Pj4gOCkgJiAweGZmO1xuICAgICAgICAgIGhidWZbMl0gPSAoaG9sZCA+Pj4gMTYpICYgMHhmZjtcbiAgICAgICAgICBoYnVmWzNdID0gKGhvbGQgPj4+IDI0KSAmIDB4ZmY7XG4gICAgICAgICAgc3RhdGUuY2hlY2sgPSBjcmMzMihzdGF0ZS5jaGVjaywgaGJ1ZiwgNCwgMCk7XG4gICAgICAgICAgLy89PT1cbiAgICAgICAgfVxuICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICBob2xkID0gMDtcbiAgICAgICAgYml0cyA9IDA7XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUubW9kZSA9IE9TO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIE9TOlxuICAgICAgICAvLz09PSBORUVEQklUUygxNik7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMTYpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICBzdGF0ZS5oZWFkLnhmbGFncyA9IChob2xkICYgMHhmZik7XG4gICAgICAgICAgc3RhdGUuaGVhZC5vcyA9IChob2xkID4+IDgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xuICAgICAgICAgIC8vPT09IENSQzIoc3RhdGUuY2hlY2ssIGhvbGQpO1xuICAgICAgICAgIGhidWZbMF0gPSBob2xkICYgMHhmZjtcbiAgICAgICAgICBoYnVmWzFdID0gKGhvbGQgPj4+IDgpICYgMHhmZjtcbiAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyKHN0YXRlLmNoZWNrLCBoYnVmLCAyLCAwKTtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgIH1cbiAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgaG9sZCA9IDA7XG4gICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAvLz09PS8vXG4gICAgICAgIHN0YXRlLm1vZGUgPSBFWExFTjtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBFWExFTjpcbiAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwNDAwKSB7XG4gICAgICAgICAgLy89PT0gTkVFREJJVFMoMTYpOyAqL1xuICAgICAgICAgIHdoaWxlIChiaXRzIDwgMTYpIHtcbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICBzdGF0ZS5sZW5ndGggPSBob2xkO1xuICAgICAgICAgIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgICBzdGF0ZS5oZWFkLmV4dHJhX2xlbiA9IGhvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xuICAgICAgICAgICAgLy89PT0gQ1JDMihzdGF0ZS5jaGVjaywgaG9sZCk7XG4gICAgICAgICAgICBoYnVmWzBdID0gaG9sZCAmIDB4ZmY7XG4gICAgICAgICAgICBoYnVmWzFdID0gKGhvbGQgPj4+IDgpICYgMHhmZjtcbiAgICAgICAgICAgIHN0YXRlLmNoZWNrID0gY3JjMzIoc3RhdGUuY2hlY2ssIGhidWYsIDIsIDApO1xuICAgICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICAgIGhvbGQgPSAwO1xuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC5leHRyYSA9IG51bGwvKlpfTlVMTCovO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLm1vZGUgPSBFWFRSQTtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBFWFRSQTpcbiAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwNDAwKSB7XG4gICAgICAgICAgY29weSA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgICBpZiAoY29weSA+IGhhdmUpIHsgY29weSA9IGhhdmU7IH1cbiAgICAgICAgICBpZiAoY29weSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICAgICAgbGVuID0gc3RhdGUuaGVhZC5leHRyYV9sZW4gLSBzdGF0ZS5sZW5ndGg7XG4gICAgICAgICAgICAgIGlmICghc3RhdGUuaGVhZC5leHRyYSkge1xuICAgICAgICAgICAgICAgIC8vIFVzZSB1bnR5cGVkIGFycmF5IGZvciBtb3JlIGNvbnZlbmllbnQgcHJvY2Vzc2luZyBsYXRlclxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQuZXh0cmEgPSBuZXcgQXJyYXkoc3RhdGUuaGVhZC5leHRyYV9sZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHV0aWxzLmFycmF5U2V0KFxuICAgICAgICAgICAgICAgIHN0YXRlLmhlYWQuZXh0cmEsXG4gICAgICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICAgICAgbmV4dCxcbiAgICAgICAgICAgICAgICAvLyBleHRyYSBmaWVsZCBpcyBsaW1pdGVkIHRvIDY1NTM2IGJ5dGVzXG4gICAgICAgICAgICAgICAgLy8gLSBubyBuZWVkIGZvciBhZGRpdGlvbmFsIHNpemUgY2hlY2tcbiAgICAgICAgICAgICAgICBjb3B5LFxuICAgICAgICAgICAgICAgIC8qbGVuICsgY29weSA+IHN0YXRlLmhlYWQuZXh0cmFfbWF4IC0gbGVuID8gc3RhdGUuaGVhZC5leHRyYV9tYXggOiBjb3B5LCovXG4gICAgICAgICAgICAgICAgbGVuXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIC8vem1lbWNweShzdGF0ZS5oZWFkLmV4dHJhICsgbGVuLCBuZXh0LFxuICAgICAgICAgICAgICAvLyAgICAgICAgbGVuICsgY29weSA+IHN0YXRlLmhlYWQuZXh0cmFfbWF4ID9cbiAgICAgICAgICAgICAgLy8gICAgICAgIHN0YXRlLmhlYWQuZXh0cmFfbWF4IC0gbGVuIDogY29weSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDAyMDApIHtcbiAgICAgICAgICAgICAgc3RhdGUuY2hlY2sgPSBjcmMzMihzdGF0ZS5jaGVjaywgaW5wdXQsIGNvcHksIG5leHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGF2ZSAtPSBjb3B5O1xuICAgICAgICAgICAgbmV4dCArPSBjb3B5O1xuICAgICAgICAgICAgc3RhdGUubGVuZ3RoIC09IGNvcHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGF0ZS5sZW5ndGgpIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUubGVuZ3RoID0gMDtcbiAgICAgICAgc3RhdGUubW9kZSA9IE5BTUU7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgTkFNRTpcbiAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwODAwKSB7XG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgY29weSA9IDA7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgLy8gVE9ETzogMiBvciAxIGJ5dGVzP1xuICAgICAgICAgICAgbGVuID0gaW5wdXRbbmV4dCArIGNvcHkrK107XG4gICAgICAgICAgICAvKiB1c2UgY29uc3RhbnQgbGltaXQgYmVjYXVzZSBpbiBqcyB3ZSBzaG91bGQgbm90IHByZWFsbG9jYXRlIG1lbW9yeSAqL1xuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgJiYgbGVuICYmXG4gICAgICAgICAgICAgICAgKHN0YXRlLmxlbmd0aCA8IDY1NTM2IC8qc3RhdGUuaGVhZC5uYW1lX21heCovKSkge1xuICAgICAgICAgICAgICBzdGF0ZS5oZWFkLm5hbWUgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShsZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gd2hpbGUgKGxlbiAmJiBjb3B5IDwgaGF2ZSk7XG5cbiAgICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDAyMDApIHtcbiAgICAgICAgICAgIHN0YXRlLmNoZWNrID0gY3JjMzIoc3RhdGUuY2hlY2ssIGlucHV0LCBjb3B5LCBuZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGF2ZSAtPSBjb3B5O1xuICAgICAgICAgIG5leHQgKz0gY29weTtcbiAgICAgICAgICBpZiAobGVuKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICBzdGF0ZS5oZWFkLm5hbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmxlbmd0aCA9IDA7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBDT01NRU5UO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIENPTU1FTlQ6XG4gICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MTAwMCkge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGNvcHkgPSAwO1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGxlbiA9IGlucHV0W25leHQgKyBjb3B5KytdO1xuICAgICAgICAgICAgLyogdXNlIGNvbnN0YW50IGxpbWl0IGJlY2F1c2UgaW4ganMgd2Ugc2hvdWxkIG5vdCBwcmVhbGxvY2F0ZSBtZW1vcnkgKi9cbiAgICAgICAgICAgIGlmIChzdGF0ZS5oZWFkICYmIGxlbiAmJlxuICAgICAgICAgICAgICAgIChzdGF0ZS5sZW5ndGggPCA2NTUzNiAvKnN0YXRlLmhlYWQuY29tbV9tYXgqLykpIHtcbiAgICAgICAgICAgICAgc3RhdGUuaGVhZC5jb21tZW50ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IHdoaWxlIChsZW4gJiYgY29weSA8IGhhdmUpO1xuICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xuICAgICAgICAgICAgc3RhdGUuY2hlY2sgPSBjcmMzMihzdGF0ZS5jaGVjaywgaW5wdXQsIGNvcHksIG5leHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoYXZlIC09IGNvcHk7XG4gICAgICAgICAgbmV4dCArPSBjb3B5O1xuICAgICAgICAgIGlmIChsZW4pIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUuaGVhZCkge1xuICAgICAgICAgIHN0YXRlLmhlYWQuY29tbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUubW9kZSA9IEhDUkM7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgSENSQzpcbiAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwMjAwKSB7XG4gICAgICAgICAgLy89PT0gTkVFREJJVFMoMTYpOyAqL1xuICAgICAgICAgIHdoaWxlIChiaXRzIDwgMTYpIHtcbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICBpZiAoaG9sZCAhPT0gKHN0YXRlLmNoZWNrICYgMHhmZmZmKSkge1xuICAgICAgICAgICAgc3RybS5tc2cgPSAnaGVhZGVyIGNyYyBtaXNtYXRjaCc7XG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgICAgaG9sZCA9IDA7XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC5oY3JjID0gKChzdGF0ZS5mbGFncyA+PiA5KSAmIDEpO1xuICAgICAgICAgIHN0YXRlLmhlYWQuZG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc3RybS5hZGxlciA9IHN0YXRlLmNoZWNrID0gMDtcbiAgICAgICAgc3RhdGUubW9kZSA9IFRZUEU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBESUNUSUQ6XG4gICAgICAgIC8vPT09IE5FRURCSVRTKDMyKTsgKi9cbiAgICAgICAgd2hpbGUgKGJpdHMgPCAzMikge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSB6c3dhcDMyKGhvbGQpO1xuICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICBob2xkID0gMDtcbiAgICAgICAgYml0cyA9IDA7XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUubW9kZSA9IERJQ1Q7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgRElDVDpcbiAgICAgICAgaWYgKHN0YXRlLmhhdmVkaWN0ID09PSAwKSB7XG4gICAgICAgICAgLy8tLS0gUkVTVE9SRSgpIC0tLVxuICAgICAgICAgIHN0cm0ubmV4dF9vdXQgPSBwdXQ7XG4gICAgICAgICAgc3RybS5hdmFpbF9vdXQgPSBsZWZ0O1xuICAgICAgICAgIHN0cm0ubmV4dF9pbiA9IG5leHQ7XG4gICAgICAgICAgc3RybS5hdmFpbF9pbiA9IGhhdmU7XG4gICAgICAgICAgc3RhdGUuaG9sZCA9IGhvbGQ7XG4gICAgICAgICAgc3RhdGUuYml0cyA9IGJpdHM7XG4gICAgICAgICAgLy8tLS1cbiAgICAgICAgICByZXR1cm4gWl9ORUVEX0RJQ1Q7XG4gICAgICAgIH1cbiAgICAgICAgc3RybS5hZGxlciA9IHN0YXRlLmNoZWNrID0gMS8qYWRsZXIzMigwTCwgWl9OVUxMLCAwKSovO1xuICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRTtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBUWVBFOlxuICAgICAgICBpZiAoZmx1c2ggPT09IFpfQkxPQ0sgfHwgZmx1c2ggPT09IFpfVFJFRVMpIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgVFlQRURPOlxuICAgICAgICBpZiAoc3RhdGUubGFzdCkge1xuICAgICAgICAgIC8vLS0tIEJZVEVCSVRTKCkgLS0tLy9cbiAgICAgICAgICBob2xkID4+Pj0gYml0cyAmIDc7XG4gICAgICAgICAgYml0cyAtPSBiaXRzICYgNztcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgc3RhdGUubW9kZSA9IENIRUNLO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vPT09IE5FRURCSVRTKDMpOyAqL1xuICAgICAgICB3aGlsZSAoYml0cyA8IDMpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUubGFzdCA9IChob2xkICYgMHgwMSkvKkJJVFMoMSkqLztcbiAgICAgICAgLy8tLS0gRFJPUEJJVFMoMSkgLS0tLy9cbiAgICAgICAgaG9sZCA+Pj49IDE7XG4gICAgICAgIGJpdHMgLT0gMTtcbiAgICAgICAgLy8tLS0vL1xuXG4gICAgICAgIHN3aXRjaCAoKGhvbGQgJiAweDAzKS8qQklUUygyKSovKSB7XG4gICAgICAgICAgY2FzZSAwOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogc3RvcmVkIGJsb2NrICovXG4gICAgICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICBzdG9yZWQgYmxvY2slc1xcblwiLFxuICAgICAgICAgICAgLy8gICAgICAgIHN0YXRlLmxhc3QgPyBcIiAobGFzdClcIiA6IFwiXCIpKTtcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBTVE9SRUQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBmaXhlZCBibG9jayAqL1xuICAgICAgICAgICAgZml4ZWR0YWJsZXMoc3RhdGUpO1xuICAgICAgICAgICAgLy9UcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgZml4ZWQgY29kZXMgYmxvY2slc1xcblwiLFxuICAgICAgICAgICAgLy8gICAgICAgIHN0YXRlLmxhc3QgPyBcIiAobGFzdClcIiA6IFwiXCIpKTtcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBMRU5fOyAgICAgICAgICAgICAvKiBkZWNvZGUgY29kZXMgKi9cbiAgICAgICAgICAgIGlmIChmbHVzaCA9PT0gWl9UUkVFUykge1xuICAgICAgICAgICAgICAvLy0tLSBEUk9QQklUUygyKSAtLS0vL1xuICAgICAgICAgICAgICBob2xkID4+Pj0gMjtcbiAgICAgICAgICAgICAgYml0cyAtPSAyO1xuICAgICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgICAgIGJyZWFrIGluZl9sZWF2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGR5bmFtaWMgYmxvY2sgKi9cbiAgICAgICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgIGR5bmFtaWMgY29kZXMgYmxvY2slc1xcblwiLFxuICAgICAgICAgICAgLy8gICAgICAgIHN0YXRlLmxhc3QgPyBcIiAobGFzdClcIiA6IFwiXCIpKTtcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBUQUJMRTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgYmxvY2sgdHlwZSc7XG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICB9XG4gICAgICAgIC8vLS0tIERST1BCSVRTKDIpIC0tLS8vXG4gICAgICAgIGhvbGQgPj4+PSAyO1xuICAgICAgICBiaXRzIC09IDI7XG4gICAgICAgIC8vLS0tLy9cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNUT1JFRDpcbiAgICAgICAgLy8tLS0gQllURUJJVFMoKSAtLS0vLyAvKiBnbyB0byBieXRlIGJvdW5kYXJ5ICovXG4gICAgICAgIGhvbGQgPj4+PSBiaXRzICYgNztcbiAgICAgICAgYml0cyAtPSBiaXRzICYgNztcbiAgICAgICAgLy8tLS0vL1xuICAgICAgICAvLz09PSBORUVEQklUUygzMik7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMzIpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgaWYgKChob2xkICYgMHhmZmZmKSAhPT0gKChob2xkID4+PiAxNikgXiAweGZmZmYpKSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBzdG9yZWQgYmxvY2sgbGVuZ3Rocyc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5sZW5ndGggPSBob2xkICYgMHhmZmZmO1xuICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIHN0b3JlZCBsZW5ndGggJXVcXG5cIixcbiAgICAgICAgLy8gICAgICAgIHN0YXRlLmxlbmd0aCkpO1xuICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICBob2xkID0gMDtcbiAgICAgICAgYml0cyA9IDA7XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUubW9kZSA9IENPUFlfO1xuICAgICAgICBpZiAoZmx1c2ggPT09IFpfVFJFRVMpIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgQ09QWV86XG4gICAgICAgIHN0YXRlLm1vZGUgPSBDT1BZO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIENPUFk6XG4gICAgICAgIGNvcHkgPSBzdGF0ZS5sZW5ndGg7XG4gICAgICAgIGlmIChjb3B5KSB7XG4gICAgICAgICAgaWYgKGNvcHkgPiBoYXZlKSB7IGNvcHkgPSBoYXZlOyB9XG4gICAgICAgICAgaWYgKGNvcHkgPiBsZWZ0KSB7IGNvcHkgPSBsZWZ0OyB9XG4gICAgICAgICAgaWYgKGNvcHkgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgLy8tLS0gem1lbWNweShwdXQsIG5leHQsIGNvcHkpOyAtLS1cbiAgICAgICAgICB1dGlscy5hcnJheVNldChvdXRwdXQsIGlucHV0LCBuZXh0LCBjb3B5LCBwdXQpO1xuICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICBoYXZlIC09IGNvcHk7XG4gICAgICAgICAgbmV4dCArPSBjb3B5O1xuICAgICAgICAgIGxlZnQgLT0gY29weTtcbiAgICAgICAgICBwdXQgKz0gY29weTtcbiAgICAgICAgICBzdGF0ZS5sZW5ndGggLT0gY29weTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIHN0b3JlZCBlbmRcXG5cIikpO1xuICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRBQkxFOlxuICAgICAgICAvLz09PSBORUVEQklUUygxNCk7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMTQpIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICB9XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUubmxlbiA9IChob2xkICYgMHgxZikvKkJJVFMoNSkqLyArIDI1NztcbiAgICAgICAgLy8tLS0gRFJPUEJJVFMoNSkgLS0tLy9cbiAgICAgICAgaG9sZCA+Pj49IDU7XG4gICAgICAgIGJpdHMgLT0gNTtcbiAgICAgICAgLy8tLS0vL1xuICAgICAgICBzdGF0ZS5uZGlzdCA9IChob2xkICYgMHgxZikvKkJJVFMoNSkqLyArIDE7XG4gICAgICAgIC8vLS0tIERST1BCSVRTKDUpIC0tLS8vXG4gICAgICAgIGhvbGQgPj4+PSA1O1xuICAgICAgICBiaXRzIC09IDU7XG4gICAgICAgIC8vLS0tLy9cbiAgICAgICAgc3RhdGUubmNvZGUgPSAoaG9sZCAmIDB4MGYpLypCSVRTKDQpKi8gKyA0O1xuICAgICAgICAvLy0tLSBEUk9QQklUUyg0KSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gNDtcbiAgICAgICAgYml0cyAtPSA0O1xuICAgICAgICAvLy0tLS8vXG4vLyNpZm5kZWYgUEtaSVBfQlVHX1dPUktBUk9VTkRcbiAgICAgICAgaWYgKHN0YXRlLm5sZW4gPiAyODYgfHwgc3RhdGUubmRpc3QgPiAzMCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ3RvbyBtYW55IGxlbmd0aCBvciBkaXN0YW5jZSBzeW1ib2xzJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4vLyNlbmRpZlxuICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIHRhYmxlIHNpemVzIG9rXFxuXCIpKTtcbiAgICAgICAgc3RhdGUuaGF2ZSA9IDA7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBMRU5MRU5TO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIExFTkxFTlM6XG4gICAgICAgIHdoaWxlIChzdGF0ZS5oYXZlIDwgc3RhdGUubmNvZGUpIHtcbiAgICAgICAgICAvLz09PSBORUVEQklUUygzKTtcbiAgICAgICAgICB3aGlsZSAoYml0cyA8IDMpIHtcbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICBzdGF0ZS5sZW5zW29yZGVyW3N0YXRlLmhhdmUrK11dID0gKGhvbGQgJiAweDA3KTsvL0JJVFMoMyk7XG4gICAgICAgICAgLy8tLS0gRFJPUEJJVFMoMykgLS0tLy9cbiAgICAgICAgICBob2xkID4+Pj0gMztcbiAgICAgICAgICBiaXRzIC09IDM7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChzdGF0ZS5oYXZlIDwgMTkpIHtcbiAgICAgICAgICBzdGF0ZS5sZW5zW29yZGVyW3N0YXRlLmhhdmUrK11dID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIHNlcGFyYXRlIHRhYmxlcyAmIG5vIHBvaW50ZXJzLiAyIGNvbW1lbnRlZCBsaW5lcyBiZWxvdyBub3QgbmVlZGVkLlxuICAgICAgICAvL3N0YXRlLm5leHQgPSBzdGF0ZS5jb2RlcztcbiAgICAgICAgLy9zdGF0ZS5sZW5jb2RlID0gc3RhdGUubmV4dDtcbiAgICAgICAgLy8gU3dpdGNoIHRvIHVzZSBkeW5hbWljIHRhYmxlXG4gICAgICAgIHN0YXRlLmxlbmNvZGUgPSBzdGF0ZS5sZW5keW47XG4gICAgICAgIHN0YXRlLmxlbmJpdHMgPSA3O1xuXG4gICAgICAgIG9wdHMgPSB7IGJpdHM6IHN0YXRlLmxlbmJpdHMgfTtcbiAgICAgICAgcmV0ID0gaW5mbGF0ZV90YWJsZShDT0RFUywgc3RhdGUubGVucywgMCwgMTksIHN0YXRlLmxlbmNvZGUsIDAsIHN0YXRlLndvcmssIG9wdHMpO1xuICAgICAgICBzdGF0ZS5sZW5iaXRzID0gb3B0cy5iaXRzO1xuXG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGNvZGUgbGVuZ3RocyBzZXQnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy9UcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICBjb2RlIGxlbmd0aHMgb2tcXG5cIikpO1xuICAgICAgICBzdGF0ZS5oYXZlID0gMDtcbiAgICAgICAgc3RhdGUubW9kZSA9IENPREVMRU5TO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIENPREVMRU5TOlxuICAgICAgICB3aGlsZSAoc3RhdGUuaGF2ZSA8IHN0YXRlLm5sZW4gKyBzdGF0ZS5uZGlzdCkge1xuICAgICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgIGhlcmUgPSBzdGF0ZS5sZW5jb2RlW2hvbGQgJiAoKDEgPDwgc3RhdGUubGVuYml0cykgLSAxKV07LypCSVRTKHN0YXRlLmxlbmJpdHMpKi9cbiAgICAgICAgICAgIGhlcmVfYml0cyA9IGhlcmUgPj4+IDI0O1xuICAgICAgICAgICAgaGVyZV9vcCA9IChoZXJlID4+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgaGVyZV92YWwgPSBoZXJlICYgMHhmZmZmO1xuXG4gICAgICAgICAgICBpZiAoKGhlcmVfYml0cykgPD0gYml0cykgeyBicmVhazsgfVxuICAgICAgICAgICAgLy8tLS0gUFVMTEJZVEUoKSAtLS0vL1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhlcmVfdmFsIDwgMTYpIHtcbiAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKGhlcmUuYml0cykgLS0tLy9cbiAgICAgICAgICAgIGhvbGQgPj4+PSBoZXJlX2JpdHM7XG4gICAgICAgICAgICBiaXRzIC09IGhlcmVfYml0cztcbiAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgIHN0YXRlLmxlbnNbc3RhdGUuaGF2ZSsrXSA9IGhlcmVfdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoZXJlX3ZhbCA9PT0gMTYpIHtcbiAgICAgICAgICAgICAgLy89PT0gTkVFREJJVFMoaGVyZS5iaXRzICsgMik7XG4gICAgICAgICAgICAgIG4gPSBoZXJlX2JpdHMgKyAyO1xuICAgICAgICAgICAgICB3aGlsZSAoYml0cyA8IG4pIHtcbiAgICAgICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICAgICAgLy8tLS0gRFJPUEJJVFMoaGVyZS5iaXRzKSAtLS0vL1xuICAgICAgICAgICAgICBob2xkID4+Pj0gaGVyZV9iaXRzO1xuICAgICAgICAgICAgICBiaXRzIC09IGhlcmVfYml0cztcbiAgICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgICAgICBpZiAoc3RhdGUuaGF2ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgYml0IGxlbmd0aCByZXBlYXQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGVuID0gc3RhdGUubGVuc1tzdGF0ZS5oYXZlIC0gMV07XG4gICAgICAgICAgICAgIGNvcHkgPSAzICsgKGhvbGQgJiAweDAzKTsvL0JJVFMoMik7XG4gICAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKDIpIC0tLS8vXG4gICAgICAgICAgICAgIGhvbGQgPj4+PSAyO1xuICAgICAgICAgICAgICBiaXRzIC09IDI7XG4gICAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhlcmVfdmFsID09PSAxNykge1xuICAgICAgICAgICAgICAvLz09PSBORUVEQklUUyhoZXJlLmJpdHMgKyAzKTtcbiAgICAgICAgICAgICAgbiA9IGhlcmVfYml0cyArIDM7XG4gICAgICAgICAgICAgIHdoaWxlIChiaXRzIDwgbikge1xuICAgICAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy89PT0vL1xuICAgICAgICAgICAgICAvLy0tLSBEUk9QQklUUyhoZXJlLmJpdHMpIC0tLS8vXG4gICAgICAgICAgICAgIGhvbGQgPj4+PSBoZXJlX2JpdHM7XG4gICAgICAgICAgICAgIGJpdHMgLT0gaGVyZV9iaXRzO1xuICAgICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgICAgIGxlbiA9IDA7XG4gICAgICAgICAgICAgIGNvcHkgPSAzICsgKGhvbGQgJiAweDA3KTsvL0JJVFMoMyk7XG4gICAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKDMpIC0tLS8vXG4gICAgICAgICAgICAgIGhvbGQgPj4+PSAzO1xuICAgICAgICAgICAgICBiaXRzIC09IDM7XG4gICAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAvLz09PSBORUVEQklUUyhoZXJlLmJpdHMgKyA3KTtcbiAgICAgICAgICAgICAgbiA9IGhlcmVfYml0cyArIDc7XG4gICAgICAgICAgICAgIHdoaWxlIChiaXRzIDwgbikge1xuICAgICAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy89PT0vL1xuICAgICAgICAgICAgICAvLy0tLSBEUk9QQklUUyhoZXJlLmJpdHMpIC0tLS8vXG4gICAgICAgICAgICAgIGhvbGQgPj4+PSBoZXJlX2JpdHM7XG4gICAgICAgICAgICAgIGJpdHMgLT0gaGVyZV9iaXRzO1xuICAgICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgICAgIGxlbiA9IDA7XG4gICAgICAgICAgICAgIGNvcHkgPSAxMSArIChob2xkICYgMHg3Zik7Ly9CSVRTKDcpO1xuICAgICAgICAgICAgICAvLy0tLSBEUk9QQklUUyg3KSAtLS0vL1xuICAgICAgICAgICAgICBob2xkID4+Pj0gNztcbiAgICAgICAgICAgICAgYml0cyAtPSA3O1xuICAgICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGF2ZSArIGNvcHkgPiBzdGF0ZS5ubGVuICsgc3RhdGUubmRpc3QpIHtcbiAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdCc7XG4gICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGNvcHktLSkge1xuICAgICAgICAgICAgICBzdGF0ZS5sZW5zW3N0YXRlLmhhdmUrK10gPSBsZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogaGFuZGxlIGVycm9yIGJyZWFrcyBpbiB3aGlsZSAqL1xuICAgICAgICBpZiAoc3RhdGUubW9kZSA9PT0gQkFEKSB7IGJyZWFrOyB9XG5cbiAgICAgICAgLyogY2hlY2sgZm9yIGVuZC1vZi1ibG9jayBjb2RlIChiZXR0ZXIgaGF2ZSBvbmUpICovXG4gICAgICAgIGlmIChzdGF0ZS5sZW5zWzI1Nl0gPT09IDApIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGNvZGUgLS0gbWlzc2luZyBlbmQtb2YtYmxvY2snO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBidWlsZCBjb2RlIHRhYmxlcyAtLSBub3RlOiBkbyBub3QgY2hhbmdlIHRoZSBsZW5iaXRzIG9yIGRpc3RiaXRzXG4gICAgICAgICAgIHZhbHVlcyBoZXJlICg5IGFuZCA2KSB3aXRob3V0IHJlYWRpbmcgdGhlIGNvbW1lbnRzIGluIGluZnRyZWVzLmhcbiAgICAgICAgICAgY29uY2VybmluZyB0aGUgRU5PVUdIIGNvbnN0YW50cywgd2hpY2ggZGVwZW5kIG9uIHRob3NlIHZhbHVlcyAqL1xuICAgICAgICBzdGF0ZS5sZW5iaXRzID0gOTtcblxuICAgICAgICBvcHRzID0geyBiaXRzOiBzdGF0ZS5sZW5iaXRzIH07XG4gICAgICAgIHJldCA9IGluZmxhdGVfdGFibGUoTEVOUywgc3RhdGUubGVucywgMCwgc3RhdGUubmxlbiwgc3RhdGUubGVuY29kZSwgMCwgc3RhdGUud29yaywgb3B0cyk7XG4gICAgICAgIC8vIFdlIGhhdmUgc2VwYXJhdGUgdGFibGVzICYgbm8gcG9pbnRlcnMuIDIgY29tbWVudGVkIGxpbmVzIGJlbG93IG5vdCBuZWVkZWQuXG4gICAgICAgIC8vIHN0YXRlLm5leHRfaW5kZXggPSBvcHRzLnRhYmxlX2luZGV4O1xuICAgICAgICBzdGF0ZS5sZW5iaXRzID0gb3B0cy5iaXRzO1xuICAgICAgICAvLyBzdGF0ZS5sZW5jb2RlID0gc3RhdGUubmV4dDtcblxuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBsaXRlcmFsL2xlbmd0aHMgc2V0JztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuZGlzdGJpdHMgPSA2O1xuICAgICAgICAvL3N0YXRlLmRpc3Rjb2RlLmNvcHkoc3RhdGUuY29kZXMpO1xuICAgICAgICAvLyBTd2l0Y2ggdG8gdXNlIGR5bmFtaWMgdGFibGVcbiAgICAgICAgc3RhdGUuZGlzdGNvZGUgPSBzdGF0ZS5kaXN0ZHluO1xuICAgICAgICBvcHRzID0geyBiaXRzOiBzdGF0ZS5kaXN0Yml0cyB9O1xuICAgICAgICByZXQgPSBpbmZsYXRlX3RhYmxlKERJU1RTLCBzdGF0ZS5sZW5zLCBzdGF0ZS5ubGVuLCBzdGF0ZS5uZGlzdCwgc3RhdGUuZGlzdGNvZGUsIDAsIHN0YXRlLndvcmssIG9wdHMpO1xuICAgICAgICAvLyBXZSBoYXZlIHNlcGFyYXRlIHRhYmxlcyAmIG5vIHBvaW50ZXJzLiAyIGNvbW1lbnRlZCBsaW5lcyBiZWxvdyBub3QgbmVlZGVkLlxuICAgICAgICAvLyBzdGF0ZS5uZXh0X2luZGV4ID0gb3B0cy50YWJsZV9pbmRleDtcbiAgICAgICAgc3RhdGUuZGlzdGJpdHMgPSBvcHRzLmJpdHM7XG4gICAgICAgIC8vIHN0YXRlLmRpc3Rjb2RlID0gc3RhdGUubmV4dDtcblxuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBkaXN0YW5jZXMgc2V0JztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vVHJhY2V2KChzdGRlcnIsICdpbmZsYXRlOiAgICAgICBjb2RlcyBva1xcbicpKTtcbiAgICAgICAgc3RhdGUubW9kZSA9IExFTl87XG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9UUkVFUykgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBMRU5fOlxuICAgICAgICBzdGF0ZS5tb2RlID0gTEVOO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIExFTjpcbiAgICAgICAgaWYgKGhhdmUgPj0gNiAmJiBsZWZ0ID49IDI1OCkge1xuICAgICAgICAgIC8vLS0tIFJFU1RPUkUoKSAtLS1cbiAgICAgICAgICBzdHJtLm5leHRfb3V0ID0gcHV0O1xuICAgICAgICAgIHN0cm0uYXZhaWxfb3V0ID0gbGVmdDtcbiAgICAgICAgICBzdHJtLm5leHRfaW4gPSBuZXh0O1xuICAgICAgICAgIHN0cm0uYXZhaWxfaW4gPSBoYXZlO1xuICAgICAgICAgIHN0YXRlLmhvbGQgPSBob2xkO1xuICAgICAgICAgIHN0YXRlLmJpdHMgPSBiaXRzO1xuICAgICAgICAgIC8vLS0tXG4gICAgICAgICAgaW5mbGF0ZV9mYXN0KHN0cm0sIF9vdXQpO1xuICAgICAgICAgIC8vLS0tIExPQUQoKSAtLS1cbiAgICAgICAgICBwdXQgPSBzdHJtLm5leHRfb3V0O1xuICAgICAgICAgIG91dHB1dCA9IHN0cm0ub3V0cHV0O1xuICAgICAgICAgIGxlZnQgPSBzdHJtLmF2YWlsX291dDtcbiAgICAgICAgICBuZXh0ID0gc3RybS5uZXh0X2luO1xuICAgICAgICAgIGlucHV0ID0gc3RybS5pbnB1dDtcbiAgICAgICAgICBoYXZlID0gc3RybS5hdmFpbF9pbjtcbiAgICAgICAgICBob2xkID0gc3RhdGUuaG9sZDtcbiAgICAgICAgICBiaXRzID0gc3RhdGUuYml0cztcbiAgICAgICAgICAvLy0tLVxuXG4gICAgICAgICAgaWYgKHN0YXRlLm1vZGUgPT09IFRZUEUpIHtcbiAgICAgICAgICAgIHN0YXRlLmJhY2sgPSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuYmFjayA9IDA7XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICBoZXJlID0gc3RhdGUubGVuY29kZVtob2xkICYgKCgxIDw8IHN0YXRlLmxlbmJpdHMpIC0gMSldOyAgLypCSVRTKHN0YXRlLmxlbmJpdHMpKi9cbiAgICAgICAgICBoZXJlX2JpdHMgPSBoZXJlID4+PiAyNDtcbiAgICAgICAgICBoZXJlX29wID0gKGhlcmUgPj4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgaGVyZV92YWwgPSBoZXJlICYgMHhmZmZmO1xuXG4gICAgICAgICAgaWYgKGhlcmVfYml0cyA8PSBiaXRzKSB7IGJyZWFrOyB9XG4gICAgICAgICAgLy8tLS0gUFVMTEJZVEUoKSAtLS0vL1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZXJlX29wICYmIChoZXJlX29wICYgMHhmMCkgPT09IDApIHtcbiAgICAgICAgICBsYXN0X2JpdHMgPSBoZXJlX2JpdHM7XG4gICAgICAgICAgbGFzdF9vcCA9IGhlcmVfb3A7XG4gICAgICAgICAgbGFzdF92YWwgPSBoZXJlX3ZhbDtcbiAgICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgICBoZXJlID0gc3RhdGUubGVuY29kZVtsYXN0X3ZhbCArXG4gICAgICAgICAgICAgICAgICAgICgoaG9sZCAmICgoMSA8PCAobGFzdF9iaXRzICsgbGFzdF9vcCkpIC0gMSkpLypCSVRTKGxhc3QuYml0cyArIGxhc3Qub3ApKi8gPj4gbGFzdF9iaXRzKV07XG4gICAgICAgICAgICBoZXJlX2JpdHMgPSBoZXJlID4+PiAyNDtcbiAgICAgICAgICAgIGhlcmVfb3AgPSAoaGVyZSA+Pj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIGhlcmVfdmFsID0gaGVyZSAmIDB4ZmZmZjtcblxuICAgICAgICAgICAgaWYgKChsYXN0X2JpdHMgKyBoZXJlX2JpdHMpIDw9IGJpdHMpIHsgYnJlYWs7IH1cbiAgICAgICAgICAgIC8vLS0tIFBVTExCWVRFKCkgLS0tLy9cbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vLS0tIERST1BCSVRTKGxhc3QuYml0cykgLS0tLy9cbiAgICAgICAgICBob2xkID4+Pj0gbGFzdF9iaXRzO1xuICAgICAgICAgIGJpdHMgLT0gbGFzdF9iaXRzO1xuICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICBzdGF0ZS5iYWNrICs9IGxhc3RfYml0cztcbiAgICAgICAgfVxuICAgICAgICAvLy0tLSBEUk9QQklUUyhoZXJlLmJpdHMpIC0tLS8vXG4gICAgICAgIGhvbGQgPj4+PSBoZXJlX2JpdHM7XG4gICAgICAgIGJpdHMgLT0gaGVyZV9iaXRzO1xuICAgICAgICAvLy0tLS8vXG4gICAgICAgIHN0YXRlLmJhY2sgKz0gaGVyZV9iaXRzO1xuICAgICAgICBzdGF0ZS5sZW5ndGggPSBoZXJlX3ZhbDtcbiAgICAgICAgaWYgKGhlcmVfb3AgPT09IDApIHtcbiAgICAgICAgICAvL1RyYWNldnYoKHN0ZGVyciwgaGVyZS52YWwgPj0gMHgyMCAmJiBoZXJlLnZhbCA8IDB4N2YgP1xuICAgICAgICAgIC8vICAgICAgICBcImluZmxhdGU6ICAgICAgICAgbGl0ZXJhbCAnJWMnXFxuXCIgOlxuICAgICAgICAgIC8vICAgICAgICBcImluZmxhdGU6ICAgICAgICAgbGl0ZXJhbCAweCUwMnhcXG5cIiwgaGVyZS52YWwpKTtcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gTElUO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZXJlX29wICYgMzIpIHtcbiAgICAgICAgICAvL1RyYWNldnYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgICAgIGVuZCBvZiBibG9ja1xcblwiKSk7XG4gICAgICAgICAgc3RhdGUuYmFjayA9IC0xO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZXJlX29wICYgNjQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGUnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuZXh0cmEgPSBoZXJlX29wICYgMTU7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBMRU5FWFQ7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgTEVORVhUOlxuICAgICAgICBpZiAoc3RhdGUuZXh0cmEpIHtcbiAgICAgICAgICAvLz09PSBORUVEQklUUyhzdGF0ZS5leHRyYSk7XG4gICAgICAgICAgbiA9IHN0YXRlLmV4dHJhO1xuICAgICAgICAgIHdoaWxlIChiaXRzIDwgbikge1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIHN0YXRlLmxlbmd0aCArPSBob2xkICYgKCgxIDw8IHN0YXRlLmV4dHJhKSAtIDEpLypCSVRTKHN0YXRlLmV4dHJhKSovO1xuICAgICAgICAgIC8vLS0tIERST1BCSVRTKHN0YXRlLmV4dHJhKSAtLS0vL1xuICAgICAgICAgIGhvbGQgPj4+PSBzdGF0ZS5leHRyYTtcbiAgICAgICAgICBiaXRzIC09IHN0YXRlLmV4dHJhO1xuICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICBzdGF0ZS5iYWNrICs9IHN0YXRlLmV4dHJhO1xuICAgICAgICB9XG4gICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgbGVuZ3RoICV1XFxuXCIsIHN0YXRlLmxlbmd0aCkpO1xuICAgICAgICBzdGF0ZS53YXMgPSBzdGF0ZS5sZW5ndGg7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBESVNUO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIERJU1Q6XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICBoZXJlID0gc3RhdGUuZGlzdGNvZGVbaG9sZCAmICgoMSA8PCBzdGF0ZS5kaXN0Yml0cykgLSAxKV07LypCSVRTKHN0YXRlLmRpc3RiaXRzKSovXG4gICAgICAgICAgaGVyZV9iaXRzID0gaGVyZSA+Pj4gMjQ7XG4gICAgICAgICAgaGVyZV9vcCA9IChoZXJlID4+PiAxNikgJiAweGZmO1xuICAgICAgICAgIGhlcmVfdmFsID0gaGVyZSAmIDB4ZmZmZjtcblxuICAgICAgICAgIGlmICgoaGVyZV9iaXRzKSA8PSBiaXRzKSB7IGJyZWFrOyB9XG4gICAgICAgICAgLy8tLS0gUFVMTEJZVEUoKSAtLS0vL1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICB9XG4gICAgICAgIGlmICgoaGVyZV9vcCAmIDB4ZjApID09PSAwKSB7XG4gICAgICAgICAgbGFzdF9iaXRzID0gaGVyZV9iaXRzO1xuICAgICAgICAgIGxhc3Rfb3AgPSBoZXJlX29wO1xuICAgICAgICAgIGxhc3RfdmFsID0gaGVyZV92YWw7XG4gICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgaGVyZSA9IHN0YXRlLmRpc3Rjb2RlW2xhc3RfdmFsICtcbiAgICAgICAgICAgICAgICAgICAgKChob2xkICYgKCgxIDw8IChsYXN0X2JpdHMgKyBsYXN0X29wKSkgLSAxKSkvKkJJVFMobGFzdC5iaXRzICsgbGFzdC5vcCkqLyA+PiBsYXN0X2JpdHMpXTtcbiAgICAgICAgICAgIGhlcmVfYml0cyA9IGhlcmUgPj4+IDI0O1xuICAgICAgICAgICAgaGVyZV9vcCA9IChoZXJlID4+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgaGVyZV92YWwgPSBoZXJlICYgMHhmZmZmO1xuXG4gICAgICAgICAgICBpZiAoKGxhc3RfYml0cyArIGhlcmVfYml0cykgPD0gYml0cykgeyBicmVhazsgfVxuICAgICAgICAgICAgLy8tLS0gUFVMTEJZVEUoKSAtLS0vL1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8tLS0gRFJPUEJJVFMobGFzdC5iaXRzKSAtLS0vL1xuICAgICAgICAgIGhvbGQgPj4+PSBsYXN0X2JpdHM7XG4gICAgICAgICAgYml0cyAtPSBsYXN0X2JpdHM7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIHN0YXRlLmJhY2sgKz0gbGFzdF9iaXRzO1xuICAgICAgICB9XG4gICAgICAgIC8vLS0tIERST1BCSVRTKGhlcmUuYml0cykgLS0tLy9cbiAgICAgICAgaG9sZCA+Pj49IGhlcmVfYml0cztcbiAgICAgICAgYml0cyAtPSBoZXJlX2JpdHM7XG4gICAgICAgIC8vLS0tLy9cbiAgICAgICAgc3RhdGUuYmFjayArPSBoZXJlX2JpdHM7XG4gICAgICAgIGlmIChoZXJlX29wICYgNjQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIGNvZGUnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUub2Zmc2V0ID0gaGVyZV92YWw7XG4gICAgICAgIHN0YXRlLmV4dHJhID0gKGhlcmVfb3ApICYgMTU7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBESVNURVhUO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIERJU1RFWFQ6XG4gICAgICAgIGlmIChzdGF0ZS5leHRyYSkge1xuICAgICAgICAgIC8vPT09IE5FRURCSVRTKHN0YXRlLmV4dHJhKTtcbiAgICAgICAgICBuID0gc3RhdGUuZXh0cmE7XG4gICAgICAgICAgd2hpbGUgKGJpdHMgPCBuKSB7XG4gICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgc3RhdGUub2Zmc2V0ICs9IGhvbGQgJiAoKDEgPDwgc3RhdGUuZXh0cmEpIC0gMSkvKkJJVFMoc3RhdGUuZXh0cmEpKi87XG4gICAgICAgICAgLy8tLS0gRFJPUEJJVFMoc3RhdGUuZXh0cmEpIC0tLS8vXG4gICAgICAgICAgaG9sZCA+Pj49IHN0YXRlLmV4dHJhO1xuICAgICAgICAgIGJpdHMgLT0gc3RhdGUuZXh0cmE7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIHN0YXRlLmJhY2sgKz0gc3RhdGUuZXh0cmE7XG4gICAgICAgIH1cbi8vI2lmZGVmIElORkxBVEVfU1RSSUNUXG4gICAgICAgIGlmIChzdGF0ZS5vZmZzZXQgPiBzdGF0ZS5kbWF4KSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2snO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbi8vI2VuZGlmXG4gICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgZGlzdGFuY2UgJXVcXG5cIiwgc3RhdGUub2Zmc2V0KSk7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBNQVRDSDtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBNQVRDSDpcbiAgICAgICAgaWYgKGxlZnQgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgIGNvcHkgPSBfb3V0IC0gbGVmdDtcbiAgICAgICAgaWYgKHN0YXRlLm9mZnNldCA+IGNvcHkpIHsgICAgICAgICAvKiBjb3B5IGZyb20gd2luZG93ICovXG4gICAgICAgICAgY29weSA9IHN0YXRlLm9mZnNldCAtIGNvcHk7XG4gICAgICAgICAgaWYgKGNvcHkgPiBzdGF0ZS53aGF2ZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnNhbmUpIHtcbiAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2snO1xuICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbi8vICghKSBUaGlzIGJsb2NrIGlzIGRpc2FibGVkIGluIHpsaWIgZGVmYXVsdHMsXG4vLyBkb24ndCBlbmFibGUgaXQgZm9yIGJpbmFyeSBjb21wYXRpYmlsaXR5XG4vLyNpZmRlZiBJTkZMQVRFX0FMTE9XX0lOVkFMSURfRElTVEFOQ0VfVE9PRkFSX0FSUlJcbi8vICAgICAgICAgIFRyYWNlKChzdGRlcnIsIFwiaW5mbGF0ZS5jIHRvbyBmYXJcXG5cIikpO1xuLy8gICAgICAgICAgY29weSAtPSBzdGF0ZS53aGF2ZTtcbi8vICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUubGVuZ3RoKSB7IGNvcHkgPSBzdGF0ZS5sZW5ndGg7IH1cbi8vICAgICAgICAgIGlmIChjb3B5ID4gbGVmdCkgeyBjb3B5ID0gbGVmdDsgfVxuLy8gICAgICAgICAgbGVmdCAtPSBjb3B5O1xuLy8gICAgICAgICAgc3RhdGUubGVuZ3RoIC09IGNvcHk7XG4vLyAgICAgICAgICBkbyB7XG4vLyAgICAgICAgICAgIG91dHB1dFtwdXQrK10gPSAwO1xuLy8gICAgICAgICAgfSB3aGlsZSAoLS1jb3B5KTtcbi8vICAgICAgICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHsgc3RhdGUubW9kZSA9IExFTjsgfVxuLy8gICAgICAgICAgYnJlYWs7XG4vLyNlbmRpZlxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29weSA+IHN0YXRlLnduZXh0KSB7XG4gICAgICAgICAgICBjb3B5IC09IHN0YXRlLnduZXh0O1xuICAgICAgICAgICAgZnJvbSA9IHN0YXRlLndzaXplIC0gY29weTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmcm9tID0gc3RhdGUud25leHQgLSBjb3B5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29weSA+IHN0YXRlLmxlbmd0aCkgeyBjb3B5ID0gc3RhdGUubGVuZ3RoOyB9XG4gICAgICAgICAgZnJvbV9zb3VyY2UgPSBzdGF0ZS53aW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogY29weSBmcm9tIG91dHB1dCAqL1xuICAgICAgICAgIGZyb21fc291cmNlID0gb3V0cHV0O1xuICAgICAgICAgIGZyb20gPSBwdXQgLSBzdGF0ZS5vZmZzZXQ7XG4gICAgICAgICAgY29weSA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29weSA+IGxlZnQpIHsgY29weSA9IGxlZnQ7IH1cbiAgICAgICAgbGVmdCAtPSBjb3B5O1xuICAgICAgICBzdGF0ZS5sZW5ndGggLT0gY29weTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIG91dHB1dFtwdXQrK10gPSBmcm9tX3NvdXJjZVtmcm9tKytdO1xuICAgICAgICB9IHdoaWxlICgtLWNvcHkpO1xuICAgICAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSB7IHN0YXRlLm1vZGUgPSBMRU47IH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExJVDpcbiAgICAgICAgaWYgKGxlZnQgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgIG91dHB1dFtwdXQrK10gPSBzdGF0ZS5sZW5ndGg7XG4gICAgICAgIGxlZnQtLTtcbiAgICAgICAgc3RhdGUubW9kZSA9IExFTjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIRUNLOlxuICAgICAgICBpZiAoc3RhdGUud3JhcCkge1xuICAgICAgICAgIC8vPT09IE5FRURCSVRTKDMyKTtcbiAgICAgICAgICB3aGlsZSAoYml0cyA8IDMyKSB7XG4gICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgIC8vIFVzZSAnfCcgaW5zdGVhZCBvZiAnKycgdG8gbWFrZSBzdXJlIHRoYXQgcmVzdWx0IGlzIHNpZ25lZFxuICAgICAgICAgICAgaG9sZCB8PSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICBfb3V0IC09IGxlZnQ7XG4gICAgICAgICAgc3RybS50b3RhbF9vdXQgKz0gX291dDtcbiAgICAgICAgICBzdGF0ZS50b3RhbCArPSBfb3V0O1xuICAgICAgICAgIGlmIChfb3V0KSB7XG4gICAgICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPVxuICAgICAgICAgICAgICAgIC8qVVBEQVRFKHN0YXRlLmNoZWNrLCBwdXQgLSBfb3V0LCBfb3V0KTsqL1xuICAgICAgICAgICAgICAgIChzdGF0ZS5mbGFncyA/IGNyYzMyKHN0YXRlLmNoZWNrLCBvdXRwdXQsIF9vdXQsIHB1dCAtIF9vdXQpIDogYWRsZXIzMihzdGF0ZS5jaGVjaywgb3V0cHV0LCBfb3V0LCBwdXQgLSBfb3V0KSk7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgX291dCA9IGxlZnQ7XG4gICAgICAgICAgLy8gTkI6IGNyYzMyIHN0b3JlZCBhcyBzaWduZWQgMzItYml0IGludCwgenN3YXAzMiByZXR1cm5zIHNpZ25lZCB0b29cbiAgICAgICAgICBpZiAoKHN0YXRlLmZsYWdzID8gaG9sZCA6IHpzd2FwMzIoaG9sZCkpICE9PSBzdGF0ZS5jaGVjaykge1xuICAgICAgICAgICAgc3RybS5tc2cgPSAnaW5jb3JyZWN0IGRhdGEgY2hlY2snO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICAgIGhvbGQgPSAwO1xuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgY2hlY2sgbWF0Y2hlcyB0cmFpbGVyXFxuXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5tb2RlID0gTEVOR1RIO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIExFTkdUSDpcbiAgICAgICAgaWYgKHN0YXRlLndyYXAgJiYgc3RhdGUuZmxhZ3MpIHtcbiAgICAgICAgICAvLz09PSBORUVEQklUUygzMik7XG4gICAgICAgICAgd2hpbGUgKGJpdHMgPCAzMikge1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIGlmIChob2xkICE9PSAoc3RhdGUudG90YWwgJiAweGZmZmZmZmZmKSkge1xuICAgICAgICAgICAgc3RybS5tc2cgPSAnaW5jb3JyZWN0IGxlbmd0aCBjaGVjayc7XG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgICAgaG9sZCA9IDA7XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICBsZW5ndGggbWF0Y2hlcyB0cmFpbGVyXFxuXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5tb2RlID0gRE9ORTtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBET05FOlxuICAgICAgICByZXQgPSBaX1NUUkVBTV9FTkQ7XG4gICAgICAgIGJyZWFrIGluZl9sZWF2ZTtcbiAgICAgIGNhc2UgQkFEOlxuICAgICAgICByZXQgPSBaX0RBVEFfRVJST1I7XG4gICAgICAgIGJyZWFrIGluZl9sZWF2ZTtcbiAgICAgIGNhc2UgTUVNOlxuICAgICAgICByZXR1cm4gWl9NRU1fRVJST1I7XG4gICAgICBjYXNlIFNZTkM6XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgICB9XG4gIH1cblxuICAvLyBpbmZfbGVhdmUgPC0gaGVyZSBpcyByZWFsIHBsYWNlIGZvciBcImdvdG8gaW5mX2xlYXZlXCIsIGVtdWxhdGVkIHZpYSBcImJyZWFrIGluZl9sZWF2ZVwiXG5cbiAgLypcbiAgICAgUmV0dXJuIGZyb20gaW5mbGF0ZSgpLCB1cGRhdGluZyB0aGUgdG90YWwgY291bnRzIGFuZCB0aGUgY2hlY2sgdmFsdWUuXG4gICAgIElmIHRoZXJlIHdhcyBubyBwcm9ncmVzcyBkdXJpbmcgdGhlIGluZmxhdGUoKSBjYWxsLCByZXR1cm4gYSBidWZmZXJcbiAgICAgZXJyb3IuICBDYWxsIHVwZGF0ZXdpbmRvdygpIHRvIGNyZWF0ZSBhbmQvb3IgdXBkYXRlIHRoZSB3aW5kb3cgc3RhdGUuXG4gICAgIE5vdGU6IGEgbWVtb3J5IGVycm9yIGZyb20gaW5mbGF0ZSgpIGlzIG5vbi1yZWNvdmVyYWJsZS5cbiAgICovXG5cbiAgLy8tLS0gUkVTVE9SRSgpIC0tLVxuICBzdHJtLm5leHRfb3V0ID0gcHV0O1xuICBzdHJtLmF2YWlsX291dCA9IGxlZnQ7XG4gIHN0cm0ubmV4dF9pbiA9IG5leHQ7XG4gIHN0cm0uYXZhaWxfaW4gPSBoYXZlO1xuICBzdGF0ZS5ob2xkID0gaG9sZDtcbiAgc3RhdGUuYml0cyA9IGJpdHM7XG4gIC8vLS0tXG5cbiAgaWYgKHN0YXRlLndzaXplIHx8IChfb3V0ICE9PSBzdHJtLmF2YWlsX291dCAmJiBzdGF0ZS5tb2RlIDwgQkFEICYmXG4gICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLm1vZGUgPCBDSEVDSyB8fCBmbHVzaCAhPT0gWl9GSU5JU0gpKSkge1xuICAgIGlmICh1cGRhdGV3aW5kb3coc3RybSwgc3RybS5vdXRwdXQsIHN0cm0ubmV4dF9vdXQsIF9vdXQgLSBzdHJtLmF2YWlsX291dCkpIHtcbiAgICAgIHN0YXRlLm1vZGUgPSBNRU07XG4gICAgICByZXR1cm4gWl9NRU1fRVJST1I7XG4gICAgfVxuICB9XG4gIF9pbiAtPSBzdHJtLmF2YWlsX2luO1xuICBfb3V0IC09IHN0cm0uYXZhaWxfb3V0O1xuICBzdHJtLnRvdGFsX2luICs9IF9pbjtcbiAgc3RybS50b3RhbF9vdXQgKz0gX291dDtcbiAgc3RhdGUudG90YWwgKz0gX291dDtcbiAgaWYgKHN0YXRlLndyYXAgJiYgX291dCkge1xuICAgIHN0cm0uYWRsZXIgPSBzdGF0ZS5jaGVjayA9IC8qVVBEQVRFKHN0YXRlLmNoZWNrLCBzdHJtLm5leHRfb3V0IC0gX291dCwgX291dCk7Ki9cbiAgICAgIChzdGF0ZS5mbGFncyA/IGNyYzMyKHN0YXRlLmNoZWNrLCBvdXRwdXQsIF9vdXQsIHN0cm0ubmV4dF9vdXQgLSBfb3V0KSA6IGFkbGVyMzIoc3RhdGUuY2hlY2ssIG91dHB1dCwgX291dCwgc3RybS5uZXh0X291dCAtIF9vdXQpKTtcbiAgfVxuICBzdHJtLmRhdGFfdHlwZSA9IHN0YXRlLmJpdHMgKyAoc3RhdGUubGFzdCA/IDY0IDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAoc3RhdGUubW9kZSA9PT0gVFlQRSA/IDEyOCA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLm1vZGUgPT09IExFTl8gfHwgc3RhdGUubW9kZSA9PT0gQ09QWV8gPyAyNTYgOiAwKTtcbiAgaWYgKCgoX2luID09PSAwICYmIF9vdXQgPT09IDApIHx8IGZsdXNoID09PSBaX0ZJTklTSCkgJiYgcmV0ID09PSBaX09LKSB7XG4gICAgcmV0ID0gWl9CVUZfRVJST1I7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gaW5mbGF0ZUVuZChzdHJtKSB7XG5cbiAgaWYgKCFzdHJtIHx8ICFzdHJtLnN0YXRlIC8qfHwgc3RybS0+emZyZWUgPT0gKGZyZWVfZnVuYykwKi8pIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICB2YXIgc3RhdGUgPSBzdHJtLnN0YXRlO1xuICBpZiAoc3RhdGUud2luZG93KSB7XG4gICAgc3RhdGUud2luZG93ID0gbnVsbDtcbiAgfVxuICBzdHJtLnN0YXRlID0gbnVsbDtcbiAgcmV0dXJuIFpfT0s7XG59XG5cbmZ1bmN0aW9uIGluZmxhdGVHZXRIZWFkZXIoc3RybSwgaGVhZCkge1xuICB2YXIgc3RhdGU7XG5cbiAgLyogY2hlY2sgc3RhdGUgKi9cbiAgaWYgKCFzdHJtIHx8ICFzdHJtLnN0YXRlKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuICBzdGF0ZSA9IHN0cm0uc3RhdGU7XG4gIGlmICgoc3RhdGUud3JhcCAmIDIpID09PSAwKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuXG4gIC8qIHNhdmUgaGVhZGVyIHN0cnVjdHVyZSAqL1xuICBzdGF0ZS5oZWFkID0gaGVhZDtcbiAgaGVhZC5kb25lID0gZmFsc2U7XG4gIHJldHVybiBaX09LO1xufVxuXG5mdW5jdGlvbiBpbmZsYXRlU2V0RGljdGlvbmFyeShzdHJtLCBkaWN0aW9uYXJ5KSB7XG4gIHZhciBkaWN0TGVuZ3RoID0gZGljdGlvbmFyeS5sZW5ndGg7XG5cbiAgdmFyIHN0YXRlO1xuICB2YXIgZGljdGlkO1xuICB2YXIgcmV0O1xuXG4gIC8qIGNoZWNrIHN0YXRlICovXG4gIGlmICghc3RybSAvKiA9PSBaX05VTEwgKi8gfHwgIXN0cm0uc3RhdGUgLyogPT0gWl9OVUxMICovKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuICBzdGF0ZSA9IHN0cm0uc3RhdGU7XG5cbiAgaWYgKHN0YXRlLndyYXAgIT09IDAgJiYgc3RhdGUubW9kZSAhPT0gRElDVCkge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuXG4gIC8qIGNoZWNrIGZvciBjb3JyZWN0IGRpY3Rpb25hcnkgaWRlbnRpZmllciAqL1xuICBpZiAoc3RhdGUubW9kZSA9PT0gRElDVCkge1xuICAgIGRpY3RpZCA9IDE7IC8qIGFkbGVyMzIoMCwgbnVsbCwgMCkqL1xuICAgIC8qIGRpY3RpZCA9IGFkbGVyMzIoZGljdGlkLCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoKTsgKi9cbiAgICBkaWN0aWQgPSBhZGxlcjMyKGRpY3RpZCwgZGljdGlvbmFyeSwgZGljdExlbmd0aCwgMCk7XG4gICAgaWYgKGRpY3RpZCAhPT0gc3RhdGUuY2hlY2spIHtcbiAgICAgIHJldHVybiBaX0RBVEFfRVJST1I7XG4gICAgfVxuICB9XG4gIC8qIGNvcHkgZGljdGlvbmFyeSB0byB3aW5kb3cgdXNpbmcgdXBkYXRld2luZG93KCksIHdoaWNoIHdpbGwgYW1lbmQgdGhlXG4gICBleGlzdGluZyBkaWN0aW9uYXJ5IGlmIGFwcHJvcHJpYXRlICovXG4gIHJldCA9IHVwZGF0ZXdpbmRvdyhzdHJtLCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoLCBkaWN0TGVuZ3RoKTtcbiAgaWYgKHJldCkge1xuICAgIHN0YXRlLm1vZGUgPSBNRU07XG4gICAgcmV0dXJuIFpfTUVNX0VSUk9SO1xuICB9XG4gIHN0YXRlLmhhdmVkaWN0ID0gMTtcbiAgLy8gVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICBkaWN0aW9uYXJ5IHNldFxcblwiKSk7XG4gIHJldHVybiBaX09LO1xufVxuXG5leHBvcnRzLmluZmxhdGVSZXNldCA9IGluZmxhdGVSZXNldDtcbmV4cG9ydHMuaW5mbGF0ZVJlc2V0MiA9IGluZmxhdGVSZXNldDI7XG5leHBvcnRzLmluZmxhdGVSZXNldEtlZXAgPSBpbmZsYXRlUmVzZXRLZWVwO1xuZXhwb3J0cy5pbmZsYXRlSW5pdCA9IGluZmxhdGVJbml0O1xuZXhwb3J0cy5pbmZsYXRlSW5pdDIgPSBpbmZsYXRlSW5pdDI7XG5leHBvcnRzLmluZmxhdGUgPSBpbmZsYXRlO1xuZXhwb3J0cy5pbmZsYXRlRW5kID0gaW5mbGF0ZUVuZDtcbmV4cG9ydHMuaW5mbGF0ZUdldEhlYWRlciA9IGluZmxhdGVHZXRIZWFkZXI7XG5leHBvcnRzLmluZmxhdGVTZXREaWN0aW9uYXJ5ID0gaW5mbGF0ZVNldERpY3Rpb25hcnk7XG5leHBvcnRzLmluZmxhdGVJbmZvID0gJ3Bha28gaW5mbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdCknO1xuXG4vKiBOb3QgaW1wbGVtZW50ZWRcbmV4cG9ydHMuaW5mbGF0ZUNvcHkgPSBpbmZsYXRlQ29weTtcbmV4cG9ydHMuaW5mbGF0ZUdldERpY3Rpb25hcnkgPSBpbmZsYXRlR2V0RGljdGlvbmFyeTtcbmV4cG9ydHMuaW5mbGF0ZU1hcmsgPSBpbmZsYXRlTWFyaztcbmV4cG9ydHMuaW5mbGF0ZVByaW1lID0gaW5mbGF0ZVByaW1lO1xuZXhwb3J0cy5pbmZsYXRlU3luYyA9IGluZmxhdGVTeW5jO1xuZXhwb3J0cy5pbmZsYXRlU3luY1BvaW50ID0gaW5mbGF0ZVN5bmNQb2ludDtcbmV4cG9ydHMuaW5mbGF0ZVVuZGVybWluZSA9IGluZmxhdGVVbmRlcm1pbmU7XG4qL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbW1vbicpO1xuXG52YXIgTUFYQklUUyA9IDE1O1xudmFyIEVOT1VHSF9MRU5TID0gODUyO1xudmFyIEVOT1VHSF9ESVNUUyA9IDU5Mjtcbi8vdmFyIEVOT1VHSCA9IChFTk9VR0hfTEVOUytFTk9VR0hfRElTVFMpO1xuXG52YXIgQ09ERVMgPSAwO1xudmFyIExFTlMgPSAxO1xudmFyIERJU1RTID0gMjtcblxudmFyIGxiYXNlID0gWyAvKiBMZW5ndGggY29kZXMgMjU3Li4yODUgYmFzZSAqL1xuICAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEzLCAxNSwgMTcsIDE5LCAyMywgMjcsIDMxLFxuICAzNSwgNDMsIDUxLCA1OSwgNjcsIDgzLCA5OSwgMTE1LCAxMzEsIDE2MywgMTk1LCAyMjcsIDI1OCwgMCwgMFxuXTtcblxudmFyIGxleHQgPSBbIC8qIExlbmd0aCBjb2RlcyAyNTcuLjI4NSBleHRyYSAqL1xuICAxNiwgMTYsIDE2LCAxNiwgMTYsIDE2LCAxNiwgMTYsIDE3LCAxNywgMTcsIDE3LCAxOCwgMTgsIDE4LCAxOCxcbiAgMTksIDE5LCAxOSwgMTksIDIwLCAyMCwgMjAsIDIwLCAyMSwgMjEsIDIxLCAyMSwgMTYsIDcyLCA3OFxuXTtcblxudmFyIGRiYXNlID0gWyAvKiBEaXN0YW5jZSBjb2RlcyAwLi4yOSBiYXNlICovXG4gIDEsIDIsIDMsIDQsIDUsIDcsIDksIDEzLCAxNywgMjUsIDMzLCA0OSwgNjUsIDk3LCAxMjksIDE5MyxcbiAgMjU3LCAzODUsIDUxMywgNzY5LCAxMDI1LCAxNTM3LCAyMDQ5LCAzMDczLCA0MDk3LCA2MTQ1LFxuICA4MTkzLCAxMjI4OSwgMTYzODUsIDI0NTc3LCAwLCAwXG5dO1xuXG52YXIgZGV4dCA9IFsgLyogRGlzdGFuY2UgY29kZXMgMC4uMjkgZXh0cmEgKi9cbiAgMTYsIDE2LCAxNiwgMTYsIDE3LCAxNywgMTgsIDE4LCAxOSwgMTksIDIwLCAyMCwgMjEsIDIxLCAyMiwgMjIsXG4gIDIzLCAyMywgMjQsIDI0LCAyNSwgMjUsIDI2LCAyNiwgMjcsIDI3LFxuICAyOCwgMjgsIDI5LCAyOSwgNjQsIDY0XG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluZmxhdGVfdGFibGUodHlwZSwgbGVucywgbGVuc19pbmRleCwgY29kZXMsIHRhYmxlLCB0YWJsZV9pbmRleCwgd29yaywgb3B0cylcbntcbiAgdmFyIGJpdHMgPSBvcHRzLmJpdHM7XG4gICAgICAvL2hlcmUgPSBvcHRzLmhlcmU7IC8qIHRhYmxlIGVudHJ5IGZvciBkdXBsaWNhdGlvbiAqL1xuXG4gIHZhciBsZW4gPSAwOyAgICAgICAgICAgICAgIC8qIGEgY29kZSdzIGxlbmd0aCBpbiBiaXRzICovXG4gIHZhciBzeW0gPSAwOyAgICAgICAgICAgICAgIC8qIGluZGV4IG9mIGNvZGUgc3ltYm9scyAqL1xuICB2YXIgbWluID0gMCwgbWF4ID0gMDsgICAgICAgICAgLyogbWluaW11bSBhbmQgbWF4aW11bSBjb2RlIGxlbmd0aHMgKi9cbiAgdmFyIHJvb3QgPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGluZGV4IGJpdHMgZm9yIHJvb3QgdGFibGUgKi9cbiAgdmFyIGN1cnIgPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGluZGV4IGJpdHMgZm9yIGN1cnJlbnQgdGFibGUgKi9cbiAgdmFyIGRyb3AgPSAwOyAgICAgICAgICAgICAgLyogY29kZSBiaXRzIHRvIGRyb3AgZm9yIHN1Yi10YWJsZSAqL1xuICB2YXIgbGVmdCA9IDA7ICAgICAgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBwcmVmaXggY29kZXMgYXZhaWxhYmxlICovXG4gIHZhciB1c2VkID0gMDsgICAgICAgICAgICAgIC8qIGNvZGUgZW50cmllcyBpbiB0YWJsZSB1c2VkICovXG4gIHZhciBodWZmID0gMDsgICAgICAgICAgICAgIC8qIEh1ZmZtYW4gY29kZSAqL1xuICB2YXIgaW5jcjsgICAgICAgICAgICAgIC8qIGZvciBpbmNyZW1lbnRpbmcgY29kZSwgaW5kZXggKi9cbiAgdmFyIGZpbGw7ICAgICAgICAgICAgICAvKiBpbmRleCBmb3IgcmVwbGljYXRpbmcgZW50cmllcyAqL1xuICB2YXIgbG93OyAgICAgICAgICAgICAgIC8qIGxvdyBiaXRzIGZvciBjdXJyZW50IHJvb3QgZW50cnkgKi9cbiAgdmFyIG1hc2s7ICAgICAgICAgICAgICAvKiBtYXNrIGZvciBsb3cgcm9vdCBiaXRzICovXG4gIHZhciBuZXh0OyAgICAgICAgICAgICAvKiBuZXh0IGF2YWlsYWJsZSBzcGFjZSBpbiB0YWJsZSAqL1xuICB2YXIgYmFzZSA9IG51bGw7ICAgICAvKiBiYXNlIHZhbHVlIHRhYmxlIHRvIHVzZSAqL1xuICB2YXIgYmFzZV9pbmRleCA9IDA7XG4vLyAgdmFyIHNob2V4dHJhOyAgICAvKiBleHRyYSBiaXRzIHRhYmxlIHRvIHVzZSAqL1xuICB2YXIgZW5kOyAgICAgICAgICAgICAgICAgICAgLyogdXNlIGJhc2UgYW5kIGV4dHJhIGZvciBzeW1ib2wgPiBlbmQgKi9cbiAgdmFyIGNvdW50ID0gbmV3IHV0aWxzLkJ1ZjE2KE1BWEJJVFMgKyAxKTsgLy9bTUFYQklUUysxXTsgICAgLyogbnVtYmVyIG9mIGNvZGVzIG9mIGVhY2ggbGVuZ3RoICovXG4gIHZhciBvZmZzID0gbmV3IHV0aWxzLkJ1ZjE2KE1BWEJJVFMgKyAxKTsgLy9bTUFYQklUUysxXTsgICAgIC8qIG9mZnNldHMgaW4gdGFibGUgZm9yIGVhY2ggbGVuZ3RoICovXG4gIHZhciBleHRyYSA9IG51bGw7XG4gIHZhciBleHRyYV9pbmRleCA9IDA7XG5cbiAgdmFyIGhlcmVfYml0cywgaGVyZV9vcCwgaGVyZV92YWw7XG5cbiAgLypcbiAgIFByb2Nlc3MgYSBzZXQgb2YgY29kZSBsZW5ndGhzIHRvIGNyZWF0ZSBhIGNhbm9uaWNhbCBIdWZmbWFuIGNvZGUuICBUaGVcbiAgIGNvZGUgbGVuZ3RocyBhcmUgbGVuc1swLi5jb2Rlcy0xXS4gIEVhY2ggbGVuZ3RoIGNvcnJlc3BvbmRzIHRvIHRoZVxuICAgc3ltYm9scyAwLi5jb2Rlcy0xLiAgVGhlIEh1ZmZtYW4gY29kZSBpcyBnZW5lcmF0ZWQgYnkgZmlyc3Qgc29ydGluZyB0aGVcbiAgIHN5bWJvbHMgYnkgbGVuZ3RoIGZyb20gc2hvcnQgdG8gbG9uZywgYW5kIHJldGFpbmluZyB0aGUgc3ltYm9sIG9yZGVyXG4gICBmb3IgY29kZXMgd2l0aCBlcXVhbCBsZW5ndGhzLiAgVGhlbiB0aGUgY29kZSBzdGFydHMgd2l0aCBhbGwgemVybyBiaXRzXG4gICBmb3IgdGhlIGZpcnN0IGNvZGUgb2YgdGhlIHNob3J0ZXN0IGxlbmd0aCwgYW5kIHRoZSBjb2RlcyBhcmUgaW50ZWdlclxuICAgaW5jcmVtZW50cyBmb3IgdGhlIHNhbWUgbGVuZ3RoLCBhbmQgemVyb3MgYXJlIGFwcGVuZGVkIGFzIHRoZSBsZW5ndGhcbiAgIGluY3JlYXNlcy4gIEZvciB0aGUgZGVmbGF0ZSBmb3JtYXQsIHRoZXNlIGJpdHMgYXJlIHN0b3JlZCBiYWNrd2FyZHNcbiAgIGZyb20gdGhlaXIgbW9yZSBuYXR1cmFsIGludGVnZXIgaW5jcmVtZW50IG9yZGVyaW5nLCBhbmQgc28gd2hlbiB0aGVcbiAgIGRlY29kaW5nIHRhYmxlcyBhcmUgYnVpbHQgaW4gdGhlIGxhcmdlIGxvb3AgYmVsb3csIHRoZSBpbnRlZ2VyIGNvZGVzXG4gICBhcmUgaW5jcmVtZW50ZWQgYmFja3dhcmRzLlxuXG4gICBUaGlzIHJvdXRpbmUgYXNzdW1lcywgYnV0IGRvZXMgbm90IGNoZWNrLCB0aGF0IGFsbCBvZiB0aGUgZW50cmllcyBpblxuICAgbGVuc1tdIGFyZSBpbiB0aGUgcmFuZ2UgMC4uTUFYQklUUy4gIFRoZSBjYWxsZXIgbXVzdCBhc3N1cmUgdGhpcy5cbiAgIDEuLk1BWEJJVFMgaXMgaW50ZXJwcmV0ZWQgYXMgdGhhdCBjb2RlIGxlbmd0aC4gIHplcm8gbWVhbnMgdGhhdCB0aGF0XG4gICBzeW1ib2wgZG9lcyBub3Qgb2NjdXIgaW4gdGhpcyBjb2RlLlxuXG4gICBUaGUgY29kZXMgYXJlIHNvcnRlZCBieSBjb21wdXRpbmcgYSBjb3VudCBvZiBjb2RlcyBmb3IgZWFjaCBsZW5ndGgsXG4gICBjcmVhdGluZyBmcm9tIHRoYXQgYSB0YWJsZSBvZiBzdGFydGluZyBpbmRpY2VzIGZvciBlYWNoIGxlbmd0aCBpbiB0aGVcbiAgIHNvcnRlZCB0YWJsZSwgYW5kIHRoZW4gZW50ZXJpbmcgdGhlIHN5bWJvbHMgaW4gb3JkZXIgaW4gdGhlIHNvcnRlZFxuICAgdGFibGUuICBUaGUgc29ydGVkIHRhYmxlIGlzIHdvcmtbXSwgd2l0aCB0aGF0IHNwYWNlIGJlaW5nIHByb3ZpZGVkIGJ5XG4gICB0aGUgY2FsbGVyLlxuXG4gICBUaGUgbGVuZ3RoIGNvdW50cyBhcmUgdXNlZCBmb3Igb3RoZXIgcHVycG9zZXMgYXMgd2VsbCwgaS5lLiBmaW5kaW5nXG4gICB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBsZW5ndGggY29kZXMsIGRldGVybWluaW5nIGlmIHRoZXJlIGFyZSBhbnlcbiAgIGNvZGVzIGF0IGFsbCwgY2hlY2tpbmcgZm9yIGEgdmFsaWQgc2V0IG9mIGxlbmd0aHMsIGFuZCBsb29raW5nIGFoZWFkXG4gICBhdCBsZW5ndGggY291bnRzIHRvIGRldGVybWluZSBzdWItdGFibGUgc2l6ZXMgd2hlbiBidWlsZGluZyB0aGVcbiAgIGRlY29kaW5nIHRhYmxlcy5cbiAgICovXG5cbiAgLyogYWNjdW11bGF0ZSBsZW5ndGhzIGZvciBjb2RlcyAoYXNzdW1lcyBsZW5zW10gYWxsIGluIDAuLk1BWEJJVFMpICovXG4gIGZvciAobGVuID0gMDsgbGVuIDw9IE1BWEJJVFM7IGxlbisrKSB7XG4gICAgY291bnRbbGVuXSA9IDA7XG4gIH1cbiAgZm9yIChzeW0gPSAwOyBzeW0gPCBjb2Rlczsgc3ltKyspIHtcbiAgICBjb3VudFtsZW5zW2xlbnNfaW5kZXggKyBzeW1dXSsrO1xuICB9XG5cbiAgLyogYm91bmQgY29kZSBsZW5ndGhzLCBmb3JjZSByb290IHRvIGJlIHdpdGhpbiBjb2RlIGxlbmd0aHMgKi9cbiAgcm9vdCA9IGJpdHM7XG4gIGZvciAobWF4ID0gTUFYQklUUzsgbWF4ID49IDE7IG1heC0tKSB7XG4gICAgaWYgKGNvdW50W21heF0gIT09IDApIHsgYnJlYWs7IH1cbiAgfVxuICBpZiAocm9vdCA+IG1heCkge1xuICAgIHJvb3QgPSBtYXg7XG4gIH1cbiAgaWYgKG1heCA9PT0gMCkgeyAgICAgICAgICAgICAgICAgICAgIC8qIG5vIHN5bWJvbHMgdG8gY29kZSBhdCBhbGwgKi9cbiAgICAvL3RhYmxlLm9wW29wdHMudGFibGVfaW5kZXhdID0gNjQ7ICAvL2hlcmUub3AgPSAodmFyIGNoYXIpNjQ7ICAgIC8qIGludmFsaWQgY29kZSBtYXJrZXIgKi9cbiAgICAvL3RhYmxlLmJpdHNbb3B0cy50YWJsZV9pbmRleF0gPSAxOyAgIC8vaGVyZS5iaXRzID0gKHZhciBjaGFyKTE7XG4gICAgLy90YWJsZS52YWxbb3B0cy50YWJsZV9pbmRleCsrXSA9IDA7ICAgLy9oZXJlLnZhbCA9ICh2YXIgc2hvcnQpMDtcbiAgICB0YWJsZVt0YWJsZV9pbmRleCsrXSA9ICgxIDw8IDI0KSB8ICg2NCA8PCAxNikgfCAwO1xuXG5cbiAgICAvL3RhYmxlLm9wW29wdHMudGFibGVfaW5kZXhdID0gNjQ7XG4gICAgLy90YWJsZS5iaXRzW29wdHMudGFibGVfaW5kZXhdID0gMTtcbiAgICAvL3RhYmxlLnZhbFtvcHRzLnRhYmxlX2luZGV4KytdID0gMDtcbiAgICB0YWJsZVt0YWJsZV9pbmRleCsrXSA9ICgxIDw8IDI0KSB8ICg2NCA8PCAxNikgfCAwO1xuXG4gICAgb3B0cy5iaXRzID0gMTtcbiAgICByZXR1cm4gMDsgICAgIC8qIG5vIHN5bWJvbHMsIGJ1dCB3YWl0IGZvciBkZWNvZGluZyB0byByZXBvcnQgZXJyb3IgKi9cbiAgfVxuICBmb3IgKG1pbiA9IDE7IG1pbiA8IG1heDsgbWluKyspIHtcbiAgICBpZiAoY291bnRbbWluXSAhPT0gMCkgeyBicmVhazsgfVxuICB9XG4gIGlmIChyb290IDwgbWluKSB7XG4gICAgcm9vdCA9IG1pbjtcbiAgfVxuXG4gIC8qIGNoZWNrIGZvciBhbiBvdmVyLXN1YnNjcmliZWQgb3IgaW5jb21wbGV0ZSBzZXQgb2YgbGVuZ3RocyAqL1xuICBsZWZ0ID0gMTtcbiAgZm9yIChsZW4gPSAxOyBsZW4gPD0gTUFYQklUUzsgbGVuKyspIHtcbiAgICBsZWZ0IDw8PSAxO1xuICAgIGxlZnQgLT0gY291bnRbbGVuXTtcbiAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9ICAgICAgICAvKiBvdmVyLXN1YnNjcmliZWQgKi9cbiAgfVxuICBpZiAobGVmdCA+IDAgJiYgKHR5cGUgPT09IENPREVTIHx8IG1heCAhPT0gMSkpIHtcbiAgICByZXR1cm4gLTE7ICAgICAgICAgICAgICAgICAgICAgIC8qIGluY29tcGxldGUgc2V0ICovXG4gIH1cblxuICAvKiBnZW5lcmF0ZSBvZmZzZXRzIGludG8gc3ltYm9sIHRhYmxlIGZvciBlYWNoIGxlbmd0aCBmb3Igc29ydGluZyAqL1xuICBvZmZzWzFdID0gMDtcbiAgZm9yIChsZW4gPSAxOyBsZW4gPCBNQVhCSVRTOyBsZW4rKykge1xuICAgIG9mZnNbbGVuICsgMV0gPSBvZmZzW2xlbl0gKyBjb3VudFtsZW5dO1xuICB9XG5cbiAgLyogc29ydCBzeW1ib2xzIGJ5IGxlbmd0aCwgYnkgc3ltYm9sIG9yZGVyIHdpdGhpbiBlYWNoIGxlbmd0aCAqL1xuICBmb3IgKHN5bSA9IDA7IHN5bSA8IGNvZGVzOyBzeW0rKykge1xuICAgIGlmIChsZW5zW2xlbnNfaW5kZXggKyBzeW1dICE9PSAwKSB7XG4gICAgICB3b3JrW29mZnNbbGVuc1tsZW5zX2luZGV4ICsgc3ltXV0rK10gPSBzeW07XG4gICAgfVxuICB9XG5cbiAgLypcbiAgIENyZWF0ZSBhbmQgZmlsbCBpbiBkZWNvZGluZyB0YWJsZXMuICBJbiB0aGlzIGxvb3AsIHRoZSB0YWJsZSBiZWluZ1xuICAgZmlsbGVkIGlzIGF0IG5leHQgYW5kIGhhcyBjdXJyIGluZGV4IGJpdHMuICBUaGUgY29kZSBiZWluZyB1c2VkIGlzIGh1ZmZcbiAgIHdpdGggbGVuZ3RoIGxlbi4gIFRoYXQgY29kZSBpcyBjb252ZXJ0ZWQgdG8gYW4gaW5kZXggYnkgZHJvcHBpbmcgZHJvcFxuICAgYml0cyBvZmYgb2YgdGhlIGJvdHRvbS4gIEZvciBjb2RlcyB3aGVyZSBsZW4gaXMgbGVzcyB0aGFuIGRyb3AgKyBjdXJyLFxuICAgdGhvc2UgdG9wIGRyb3AgKyBjdXJyIC0gbGVuIGJpdHMgYXJlIGluY3JlbWVudGVkIHRocm91Z2ggYWxsIHZhbHVlcyB0b1xuICAgZmlsbCB0aGUgdGFibGUgd2l0aCByZXBsaWNhdGVkIGVudHJpZXMuXG5cbiAgIHJvb3QgaXMgdGhlIG51bWJlciBvZiBpbmRleCBiaXRzIGZvciB0aGUgcm9vdCB0YWJsZS4gIFdoZW4gbGVuIGV4Y2VlZHNcbiAgIHJvb3QsIHN1Yi10YWJsZXMgYXJlIGNyZWF0ZWQgcG9pbnRlZCB0byBieSB0aGUgcm9vdCBlbnRyeSB3aXRoIGFuIGluZGV4XG4gICBvZiB0aGUgbG93IHJvb3QgYml0cyBvZiBodWZmLiAgVGhpcyBpcyBzYXZlZCBpbiBsb3cgdG8gY2hlY2sgZm9yIHdoZW4gYVxuICAgbmV3IHN1Yi10YWJsZSBzaG91bGQgYmUgc3RhcnRlZC4gIGRyb3AgaXMgemVybyB3aGVuIHRoZSByb290IHRhYmxlIGlzXG4gICBiZWluZyBmaWxsZWQsIGFuZCBkcm9wIGlzIHJvb3Qgd2hlbiBzdWItdGFibGVzIGFyZSBiZWluZyBmaWxsZWQuXG5cbiAgIFdoZW4gYSBuZXcgc3ViLXRhYmxlIGlzIG5lZWRlZCwgaXQgaXMgbmVjZXNzYXJ5IHRvIGxvb2sgYWhlYWQgaW4gdGhlXG4gICBjb2RlIGxlbmd0aHMgdG8gZGV0ZXJtaW5lIHdoYXQgc2l6ZSBzdWItdGFibGUgaXMgbmVlZGVkLiAgVGhlIGxlbmd0aFxuICAgY291bnRzIGFyZSB1c2VkIGZvciB0aGlzLCBhbmQgc28gY291bnRbXSBpcyBkZWNyZW1lbnRlZCBhcyBjb2RlcyBhcmVcbiAgIGVudGVyZWQgaW4gdGhlIHRhYmxlcy5cblxuICAgdXNlZCBrZWVwcyB0cmFjayBvZiBob3cgbWFueSB0YWJsZSBlbnRyaWVzIGhhdmUgYmVlbiBhbGxvY2F0ZWQgZnJvbSB0aGVcbiAgIHByb3ZpZGVkICp0YWJsZSBzcGFjZS4gIEl0IGlzIGNoZWNrZWQgZm9yIExFTlMgYW5kIERJU1QgdGFibGVzIGFnYWluc3RcbiAgIHRoZSBjb25zdGFudHMgRU5PVUdIX0xFTlMgYW5kIEVOT1VHSF9ESVNUUyB0byBndWFyZCBhZ2FpbnN0IGNoYW5nZXMgaW5cbiAgIHRoZSBpbml0aWFsIHJvb3QgdGFibGUgc2l6ZSBjb25zdGFudHMuICBTZWUgdGhlIGNvbW1lbnRzIGluIGluZnRyZWVzLmhcbiAgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gICBzeW0gaW5jcmVtZW50cyB0aHJvdWdoIGFsbCBzeW1ib2xzLCBhbmQgdGhlIGxvb3AgdGVybWluYXRlcyB3aGVuXG4gICBhbGwgY29kZXMgb2YgbGVuZ3RoIG1heCwgaS5lLiBhbGwgY29kZXMsIGhhdmUgYmVlbiBwcm9jZXNzZWQuICBUaGlzXG4gICByb3V0aW5lIHBlcm1pdHMgaW5jb21wbGV0ZSBjb2Rlcywgc28gYW5vdGhlciBsb29wIGFmdGVyIHRoaXMgb25lIGZpbGxzXG4gICBpbiB0aGUgcmVzdCBvZiB0aGUgZGVjb2RpbmcgdGFibGVzIHdpdGggaW52YWxpZCBjb2RlIG1hcmtlcnMuXG4gICAqL1xuXG4gIC8qIHNldCB1cCBmb3IgY29kZSB0eXBlICovXG4gIC8vIHBvb3IgbWFuIG9wdGltaXphdGlvbiAtIHVzZSBpZi1lbHNlIGluc3RlYWQgb2Ygc3dpdGNoLFxuICAvLyB0byBhdm9pZCBkZW9wdHMgaW4gb2xkIHY4XG4gIGlmICh0eXBlID09PSBDT0RFUykge1xuICAgIGJhc2UgPSBleHRyYSA9IHdvcms7ICAgIC8qIGR1bW15IHZhbHVlLS1ub3QgdXNlZCAqL1xuICAgIGVuZCA9IDE5O1xuXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gTEVOUykge1xuICAgIGJhc2UgPSBsYmFzZTtcbiAgICBiYXNlX2luZGV4IC09IDI1NztcbiAgICBleHRyYSA9IGxleHQ7XG4gICAgZXh0cmFfaW5kZXggLT0gMjU3O1xuICAgIGVuZCA9IDI1NjtcblxuICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgLyogRElTVFMgKi9cbiAgICBiYXNlID0gZGJhc2U7XG4gICAgZXh0cmEgPSBkZXh0O1xuICAgIGVuZCA9IC0xO1xuICB9XG5cbiAgLyogaW5pdGlhbGl6ZSBvcHRzIGZvciBsb29wICovXG4gIGh1ZmYgPSAwOyAgICAgICAgICAgICAgICAgICAvKiBzdGFydGluZyBjb2RlICovXG4gIHN5bSA9IDA7ICAgICAgICAgICAgICAgICAgICAvKiBzdGFydGluZyBjb2RlIHN5bWJvbCAqL1xuICBsZW4gPSBtaW47ICAgICAgICAgICAgICAgICAgLyogc3RhcnRpbmcgY29kZSBsZW5ndGggKi9cbiAgbmV4dCA9IHRhYmxlX2luZGV4OyAgICAgICAgICAgICAgLyogY3VycmVudCB0YWJsZSB0byBmaWxsIGluICovXG4gIGN1cnIgPSByb290OyAgICAgICAgICAgICAgICAvKiBjdXJyZW50IHRhYmxlIGluZGV4IGJpdHMgKi9cbiAgZHJvcCA9IDA7ICAgICAgICAgICAgICAgICAgIC8qIGN1cnJlbnQgYml0cyB0byBkcm9wIGZyb20gY29kZSBmb3IgaW5kZXggKi9cbiAgbG93ID0gLTE7ICAgICAgICAgICAgICAgICAgIC8qIHRyaWdnZXIgbmV3IHN1Yi10YWJsZSB3aGVuIGxlbiA+IHJvb3QgKi9cbiAgdXNlZCA9IDEgPDwgcm9vdDsgICAgICAgICAgLyogdXNlIHJvb3QgdGFibGUgZW50cmllcyAqL1xuICBtYXNrID0gdXNlZCAtIDE7ICAgICAgICAgICAgLyogbWFzayBmb3IgY29tcGFyaW5nIGxvdyAqL1xuXG4gIC8qIGNoZWNrIGF2YWlsYWJsZSB0YWJsZSBzcGFjZSAqL1xuICBpZiAoKHR5cGUgPT09IExFTlMgJiYgdXNlZCA+IEVOT1VHSF9MRU5TKSB8fFxuICAgICh0eXBlID09PSBESVNUUyAmJiB1c2VkID4gRU5PVUdIX0RJU1RTKSkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgLyogcHJvY2VzcyBhbGwgY29kZXMgYW5kIG1ha2UgdGFibGUgZW50cmllcyAqL1xuICBmb3IgKDs7KSB7XG4gICAgLyogY3JlYXRlIHRhYmxlIGVudHJ5ICovXG4gICAgaGVyZV9iaXRzID0gbGVuIC0gZHJvcDtcbiAgICBpZiAod29ya1tzeW1dIDwgZW5kKSB7XG4gICAgICBoZXJlX29wID0gMDtcbiAgICAgIGhlcmVfdmFsID0gd29ya1tzeW1dO1xuICAgIH1cbiAgICBlbHNlIGlmICh3b3JrW3N5bV0gPiBlbmQpIHtcbiAgICAgIGhlcmVfb3AgPSBleHRyYVtleHRyYV9pbmRleCArIHdvcmtbc3ltXV07XG4gICAgICBoZXJlX3ZhbCA9IGJhc2VbYmFzZV9pbmRleCArIHdvcmtbc3ltXV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGVyZV9vcCA9IDMyICsgNjQ7ICAgICAgICAgLyogZW5kIG9mIGJsb2NrICovXG4gICAgICBoZXJlX3ZhbCA9IDA7XG4gICAgfVxuXG4gICAgLyogcmVwbGljYXRlIGZvciB0aG9zZSBpbmRpY2VzIHdpdGggbG93IGxlbiBiaXRzIGVxdWFsIHRvIGh1ZmYgKi9cbiAgICBpbmNyID0gMSA8PCAobGVuIC0gZHJvcCk7XG4gICAgZmlsbCA9IDEgPDwgY3VycjtcbiAgICBtaW4gPSBmaWxsOyAgICAgICAgICAgICAgICAgLyogc2F2ZSBvZmZzZXQgdG8gbmV4dCB0YWJsZSAqL1xuICAgIGRvIHtcbiAgICAgIGZpbGwgLT0gaW5jcjtcbiAgICAgIHRhYmxlW25leHQgKyAoaHVmZiA+PiBkcm9wKSArIGZpbGxdID0gKGhlcmVfYml0cyA8PCAyNCkgfCAoaGVyZV9vcCA8PCAxNikgfCBoZXJlX3ZhbCB8MDtcbiAgICB9IHdoaWxlIChmaWxsICE9PSAwKTtcblxuICAgIC8qIGJhY2t3YXJkcyBpbmNyZW1lbnQgdGhlIGxlbi1iaXQgY29kZSBodWZmICovXG4gICAgaW5jciA9IDEgPDwgKGxlbiAtIDEpO1xuICAgIHdoaWxlIChodWZmICYgaW5jcikge1xuICAgICAgaW5jciA+Pj0gMTtcbiAgICB9XG4gICAgaWYgKGluY3IgIT09IDApIHtcbiAgICAgIGh1ZmYgJj0gaW5jciAtIDE7XG4gICAgICBodWZmICs9IGluY3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGh1ZmYgPSAwO1xuICAgIH1cblxuICAgIC8qIGdvIHRvIG5leHQgc3ltYm9sLCB1cGRhdGUgY291bnQsIGxlbiAqL1xuICAgIHN5bSsrO1xuICAgIGlmICgtLWNvdW50W2xlbl0gPT09IDApIHtcbiAgICAgIGlmIChsZW4gPT09IG1heCkgeyBicmVhazsgfVxuICAgICAgbGVuID0gbGVuc1tsZW5zX2luZGV4ICsgd29ya1tzeW1dXTtcbiAgICB9XG5cbiAgICAvKiBjcmVhdGUgbmV3IHN1Yi10YWJsZSBpZiBuZWVkZWQgKi9cbiAgICBpZiAobGVuID4gcm9vdCAmJiAoaHVmZiAmIG1hc2spICE9PSBsb3cpIHtcbiAgICAgIC8qIGlmIGZpcnN0IHRpbWUsIHRyYW5zaXRpb24gdG8gc3ViLXRhYmxlcyAqL1xuICAgICAgaWYgKGRyb3AgPT09IDApIHtcbiAgICAgICAgZHJvcCA9IHJvb3Q7XG4gICAgICB9XG5cbiAgICAgIC8qIGluY3JlbWVudCBwYXN0IGxhc3QgdGFibGUgKi9cbiAgICAgIG5leHQgKz0gbWluOyAgICAgICAgICAgIC8qIGhlcmUgbWluIGlzIDEgPDwgY3VyciAqL1xuXG4gICAgICAvKiBkZXRlcm1pbmUgbGVuZ3RoIG9mIG5leHQgdGFibGUgKi9cbiAgICAgIGN1cnIgPSBsZW4gLSBkcm9wO1xuICAgICAgbGVmdCA9IDEgPDwgY3VycjtcbiAgICAgIHdoaWxlIChjdXJyICsgZHJvcCA8IG1heCkge1xuICAgICAgICBsZWZ0IC09IGNvdW50W2N1cnIgKyBkcm9wXTtcbiAgICAgICAgaWYgKGxlZnQgPD0gMCkgeyBicmVhazsgfVxuICAgICAgICBjdXJyKys7XG4gICAgICAgIGxlZnQgPDw9IDE7XG4gICAgICB9XG5cbiAgICAgIC8qIGNoZWNrIGZvciBlbm91Z2ggc3BhY2UgKi9cbiAgICAgIHVzZWQgKz0gMSA8PCBjdXJyO1xuICAgICAgaWYgKCh0eXBlID09PSBMRU5TICYmIHVzZWQgPiBFTk9VR0hfTEVOUykgfHxcbiAgICAgICAgKHR5cGUgPT09IERJU1RTICYmIHVzZWQgPiBFTk9VR0hfRElTVFMpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICAvKiBwb2ludCBlbnRyeSBpbiByb290IHRhYmxlIHRvIHN1Yi10YWJsZSAqL1xuICAgICAgbG93ID0gaHVmZiAmIG1hc2s7XG4gICAgICAvKnRhYmxlLm9wW2xvd10gPSBjdXJyO1xuICAgICAgdGFibGUuYml0c1tsb3ddID0gcm9vdDtcbiAgICAgIHRhYmxlLnZhbFtsb3ddID0gbmV4dCAtIG9wdHMudGFibGVfaW5kZXg7Ki9cbiAgICAgIHRhYmxlW2xvd10gPSAocm9vdCA8PCAyNCkgfCAoY3VyciA8PCAxNikgfCAobmV4dCAtIHRhYmxlX2luZGV4KSB8MDtcbiAgICB9XG4gIH1cblxuICAvKiBmaWxsIGluIHJlbWFpbmluZyB0YWJsZSBlbnRyeSBpZiBjb2RlIGlzIGluY29tcGxldGUgKGd1YXJhbnRlZWQgdG8gaGF2ZVxuICAgYXQgbW9zdCBvbmUgcmVtYWluaW5nIGVudHJ5LCBzaW5jZSBpZiB0aGUgY29kZSBpcyBpbmNvbXBsZXRlLCB0aGVcbiAgIG1heGltdW0gY29kZSBsZW5ndGggdGhhdCB3YXMgYWxsb3dlZCB0byBnZXQgdGhpcyBmYXIgaXMgb25lIGJpdCkgKi9cbiAgaWYgKGh1ZmYgIT09IDApIHtcbiAgICAvL3RhYmxlLm9wW25leHQgKyBodWZmXSA9IDY0OyAgICAgICAgICAgIC8qIGludmFsaWQgY29kZSBtYXJrZXIgKi9cbiAgICAvL3RhYmxlLmJpdHNbbmV4dCArIGh1ZmZdID0gbGVuIC0gZHJvcDtcbiAgICAvL3RhYmxlLnZhbFtuZXh0ICsgaHVmZl0gPSAwO1xuICAgIHRhYmxlW25leHQgKyBodWZmXSA9ICgobGVuIC0gZHJvcCkgPDwgMjQpIHwgKDY0IDw8IDE2KSB8MDtcbiAgfVxuXG4gIC8qIHNldCByZXR1cm4gcGFyYW1ldGVycyAqL1xuICAvL29wdHMudGFibGVfaW5kZXggKz0gdXNlZDtcbiAgb3B0cy5iaXRzID0gcm9vdDtcbiAgcmV0dXJuIDA7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAyOiAgICAgICduZWVkIGRpY3Rpb25hcnknLCAgICAgLyogWl9ORUVEX0RJQ1QgICAgICAgMiAgKi9cbiAgMTogICAgICAnc3RyZWFtIGVuZCcsICAgICAgICAgIC8qIFpfU1RSRUFNX0VORCAgICAgIDEgICovXG4gIDA6ICAgICAgJycsICAgICAgICAgICAgICAgICAgICAvKiBaX09LICAgICAgICAgICAgICAwICAqL1xuICAnLTEnOiAgICdmaWxlIGVycm9yJywgICAgICAgICAgLyogWl9FUlJOTyAgICAgICAgICgtMSkgKi9cbiAgJy0yJzogICAnc3RyZWFtIGVycm9yJywgICAgICAgIC8qIFpfU1RSRUFNX0VSUk9SICAoLTIpICovXG4gICctMyc6ICAgJ2RhdGEgZXJyb3InLCAgICAgICAgICAvKiBaX0RBVEFfRVJST1IgICAgKC0zKSAqL1xuICAnLTQnOiAgICdpbnN1ZmZpY2llbnQgbWVtb3J5JywgLyogWl9NRU1fRVJST1IgICAgICgtNCkgKi9cbiAgJy01JzogICAnYnVmZmVyIGVycm9yJywgICAgICAgIC8qIFpfQlVGX0VSUk9SICAgICAoLTUpICovXG4gICctNic6ICAgJ2luY29tcGF0aWJsZSB2ZXJzaW9uJyAvKiBaX1ZFUlNJT05fRVJST1IgKC02KSAqL1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gKEMpIDE5OTUtMjAxMyBKZWFuLWxvdXAgR2FpbGx5IGFuZCBNYXJrIEFkbGVyXG4vLyAoQykgMjAxNC0yMDE3IFZpdGFseSBQdXpyaW4gYW5kIEFuZHJleSBUdXBpdHNpblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcHJvdmlkZWQgJ2FzLWlzJywgd2l0aG91dCBhbnkgZXhwcmVzcyBvciBpbXBsaWVkXG4vLyB3YXJyYW50eS4gSW4gbm8gZXZlbnQgd2lsbCB0aGUgYXV0aG9ycyBiZSBoZWxkIGxpYWJsZSBmb3IgYW55IGRhbWFnZXNcbi8vIGFyaXNpbmcgZnJvbSB0aGUgdXNlIG9mIHRoaXMgc29mdHdhcmUuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBncmFudGVkIHRvIGFueW9uZSB0byB1c2UgdGhpcyBzb2Z0d2FyZSBmb3IgYW55IHB1cnBvc2UsXG4vLyBpbmNsdWRpbmcgY29tbWVyY2lhbCBhcHBsaWNhdGlvbnMsIGFuZCB0byBhbHRlciBpdCBhbmQgcmVkaXN0cmlidXRlIGl0XG4vLyBmcmVlbHksIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6XG4vL1xuLy8gMS4gVGhlIG9yaWdpbiBvZiB0aGlzIHNvZnR3YXJlIG11c3Qgbm90IGJlIG1pc3JlcHJlc2VudGVkOyB5b3UgbXVzdCBub3Rcbi8vICAgY2xhaW0gdGhhdCB5b3Ugd3JvdGUgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLiBJZiB5b3UgdXNlIHRoaXMgc29mdHdhcmVcbi8vICAgaW4gYSBwcm9kdWN0LCBhbiBhY2tub3dsZWRnbWVudCBpbiB0aGUgcHJvZHVjdCBkb2N1bWVudGF0aW9uIHdvdWxkIGJlXG4vLyAgIGFwcHJlY2lhdGVkIGJ1dCBpcyBub3QgcmVxdWlyZWQuXG4vLyAyLiBBbHRlcmVkIHNvdXJjZSB2ZXJzaW9ucyBtdXN0IGJlIHBsYWlubHkgbWFya2VkIGFzIHN1Y2gsIGFuZCBtdXN0IG5vdCBiZVxuLy8gICBtaXNyZXByZXNlbnRlZCBhcyBiZWluZyB0aGUgb3JpZ2luYWwgc29mdHdhcmUuXG4vLyAzLiBUaGlzIG5vdGljZSBtYXkgbm90IGJlIHJlbW92ZWQgb3IgYWx0ZXJlZCBmcm9tIGFueSBzb3VyY2UgZGlzdHJpYnV0aW9uLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSBzcGFjZS11bmFyeS1vcHMgKi9cblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tbW9uJyk7XG5cbi8qIFB1YmxpYyBjb25zdGFudHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbi8vdmFyIFpfRklMVEVSRUQgICAgICAgICAgPSAxO1xuLy92YXIgWl9IVUZGTUFOX09OTFkgICAgICA9IDI7XG4vL3ZhciBaX1JMRSAgICAgICAgICAgICAgID0gMztcbnZhciBaX0ZJWEVEICAgICAgICAgICAgICAgPSA0O1xuLy92YXIgWl9ERUZBVUxUX1NUUkFURUdZICA9IDA7XG5cbi8qIFBvc3NpYmxlIHZhbHVlcyBvZiB0aGUgZGF0YV90eXBlIGZpZWxkICh0aG91Z2ggc2VlIGluZmxhdGUoKSkgKi9cbnZhciBaX0JJTkFSWSAgICAgICAgICAgICAgPSAwO1xudmFyIFpfVEVYVCAgICAgICAgICAgICAgICA9IDE7XG4vL3ZhciBaX0FTQ0lJICAgICAgICAgICAgID0gMTsgLy8gPSBaX1RFWFRcbnZhciBaX1VOS05PV04gICAgICAgICAgICAgPSAyO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbmZ1bmN0aW9uIHplcm8oYnVmKSB7IHZhciBsZW4gPSBidWYubGVuZ3RoOyB3aGlsZSAoLS1sZW4gPj0gMCkgeyBidWZbbGVuXSA9IDA7IH0gfVxuXG4vLyBGcm9tIHp1dGlsLmhcblxudmFyIFNUT1JFRF9CTE9DSyA9IDA7XG52YXIgU1RBVElDX1RSRUVTID0gMTtcbnZhciBEWU5fVFJFRVMgICAgPSAyO1xuLyogVGhlIHRocmVlIGtpbmRzIG9mIGJsb2NrIHR5cGUgKi9cblxudmFyIE1JTl9NQVRDSCAgICA9IDM7XG52YXIgTUFYX01BVENIICAgID0gMjU4O1xuLyogVGhlIG1pbmltdW0gYW5kIG1heGltdW0gbWF0Y2ggbGVuZ3RocyAqL1xuXG4vLyBGcm9tIGRlZmxhdGUuaFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbnRlcm5hbCBjb21wcmVzc2lvbiBzdGF0ZS5cbiAqL1xuXG52YXIgTEVOR1RIX0NPREVTICA9IDI5O1xuLyogbnVtYmVyIG9mIGxlbmd0aCBjb2Rlcywgbm90IGNvdW50aW5nIHRoZSBzcGVjaWFsIEVORF9CTE9DSyBjb2RlICovXG5cbnZhciBMSVRFUkFMUyAgICAgID0gMjU2O1xuLyogbnVtYmVyIG9mIGxpdGVyYWwgYnl0ZXMgMC4uMjU1ICovXG5cbnZhciBMX0NPREVTICAgICAgID0gTElURVJBTFMgKyAxICsgTEVOR1RIX0NPREVTO1xuLyogbnVtYmVyIG9mIExpdGVyYWwgb3IgTGVuZ3RoIGNvZGVzLCBpbmNsdWRpbmcgdGhlIEVORF9CTE9DSyBjb2RlICovXG5cbnZhciBEX0NPREVTICAgICAgID0gMzA7XG4vKiBudW1iZXIgb2YgZGlzdGFuY2UgY29kZXMgKi9cblxudmFyIEJMX0NPREVTICAgICAgPSAxOTtcbi8qIG51bWJlciBvZiBjb2RlcyB1c2VkIHRvIHRyYW5zZmVyIHRoZSBiaXQgbGVuZ3RocyAqL1xuXG52YXIgSEVBUF9TSVpFICAgICA9IDIgKiBMX0NPREVTICsgMTtcbi8qIG1heGltdW0gaGVhcCBzaXplICovXG5cbnZhciBNQVhfQklUUyAgICAgID0gMTU7XG4vKiBBbGwgY29kZXMgbXVzdCBub3QgZXhjZWVkIE1BWF9CSVRTIGJpdHMgKi9cblxudmFyIEJ1Zl9zaXplICAgICAgPSAxNjtcbi8qIHNpemUgb2YgYml0IGJ1ZmZlciBpbiBiaV9idWYgKi9cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbnN0YW50c1xuICovXG5cbnZhciBNQVhfQkxfQklUUyA9IDc7XG4vKiBCaXQgbGVuZ3RoIGNvZGVzIG11c3Qgbm90IGV4Y2VlZCBNQVhfQkxfQklUUyBiaXRzICovXG5cbnZhciBFTkRfQkxPQ0sgICA9IDI1Njtcbi8qIGVuZCBvZiBibG9jayBsaXRlcmFsIGNvZGUgKi9cblxudmFyIFJFUF8zXzYgICAgID0gMTY7XG4vKiByZXBlYXQgcHJldmlvdXMgYml0IGxlbmd0aCAzLTYgdGltZXMgKDIgYml0cyBvZiByZXBlYXQgY291bnQpICovXG5cbnZhciBSRVBaXzNfMTAgICA9IDE3O1xuLyogcmVwZWF0IGEgemVybyBsZW5ndGggMy0xMCB0aW1lcyAgKDMgYml0cyBvZiByZXBlYXQgY291bnQpICovXG5cbnZhciBSRVBaXzExXzEzOCA9IDE4O1xuLyogcmVwZWF0IGEgemVybyBsZW5ndGggMTEtMTM4IHRpbWVzICAoNyBiaXRzIG9mIHJlcGVhdCBjb3VudCkgKi9cblxuLyogZXNsaW50LWRpc2FibGUgY29tbWEtc3BhY2luZyxhcnJheS1icmFja2V0LXNwYWNpbmcgKi9cbnZhciBleHRyYV9sYml0cyA9ICAgLyogZXh0cmEgYml0cyBmb3IgZWFjaCBsZW5ndGggY29kZSAqL1xuICBbMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMiwyLDIsMiwzLDMsMywzLDQsNCw0LDQsNSw1LDUsNSwwXTtcblxudmFyIGV4dHJhX2RiaXRzID0gICAvKiBleHRyYSBiaXRzIGZvciBlYWNoIGRpc3RhbmNlIGNvZGUgKi9cbiAgWzAsMCwwLDAsMSwxLDIsMiwzLDMsNCw0LDUsNSw2LDYsNyw3LDgsOCw5LDksMTAsMTAsMTEsMTEsMTIsMTIsMTMsMTNdO1xuXG52YXIgZXh0cmFfYmxiaXRzID0gIC8qIGV4dHJhIGJpdHMgZm9yIGVhY2ggYml0IGxlbmd0aCBjb2RlICovXG4gIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDIsMyw3XTtcblxudmFyIGJsX29yZGVyID1cbiAgWzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdO1xuLyogZXNsaW50LWVuYWJsZSBjb21tYS1zcGFjaW5nLGFycmF5LWJyYWNrZXQtc3BhY2luZyAqL1xuXG4vKiBUaGUgbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aCBjb2RlcyBhcmUgc2VudCBpbiBvcmRlciBvZiBkZWNyZWFzaW5nXG4gKiBwcm9iYWJpbGl0eSwgdG8gYXZvaWQgdHJhbnNtaXR0aW5nIHRoZSBsZW5ndGhzIGZvciB1bnVzZWQgYml0IGxlbmd0aCBjb2Rlcy5cbiAqL1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIExvY2FsIGRhdGEuIFRoZXNlIGFyZSBpbml0aWFsaXplZCBvbmx5IG9uY2UuXG4gKi9cblxuLy8gV2UgcHJlLWZpbGwgYXJyYXlzIHdpdGggMCB0byBhdm9pZCB1bmluaXRpYWxpemVkIGdhcHNcblxudmFyIERJU1RfQ09ERV9MRU4gPSA1MTI7IC8qIHNlZSBkZWZpbml0aW9uIG9mIGFycmF5IGRpc3RfY29kZSBiZWxvdyAqL1xuXG4vLyAhISEhIFVzZSBmbGF0IGFycmF5IGluc3RlYWQgb2Ygc3RydWN0dXJlLCBGcmVxID0gaSoyLCBMZW4gPSBpKjIrMVxudmFyIHN0YXRpY19sdHJlZSAgPSBuZXcgQXJyYXkoKExfQ09ERVMgKyAyKSAqIDIpO1xuemVybyhzdGF0aWNfbHRyZWUpO1xuLyogVGhlIHN0YXRpYyBsaXRlcmFsIHRyZWUuIFNpbmNlIHRoZSBiaXQgbGVuZ3RocyBhcmUgaW1wb3NlZCwgdGhlcmUgaXMgbm9cbiAqIG5lZWQgZm9yIHRoZSBMX0NPREVTIGV4dHJhIGNvZGVzIHVzZWQgZHVyaW5nIGhlYXAgY29uc3RydWN0aW9uLiBIb3dldmVyXG4gKiBUaGUgY29kZXMgMjg2IGFuZCAyODcgYXJlIG5lZWRlZCB0byBidWlsZCBhIGNhbm9uaWNhbCB0cmVlIChzZWUgX3RyX2luaXRcbiAqIGJlbG93KS5cbiAqL1xuXG52YXIgc3RhdGljX2R0cmVlICA9IG5ldyBBcnJheShEX0NPREVTICogMik7XG56ZXJvKHN0YXRpY19kdHJlZSk7XG4vKiBUaGUgc3RhdGljIGRpc3RhbmNlIHRyZWUuIChBY3R1YWxseSBhIHRyaXZpYWwgdHJlZSBzaW5jZSBhbGwgY29kZXMgdXNlXG4gKiA1IGJpdHMuKVxuICovXG5cbnZhciBfZGlzdF9jb2RlICAgID0gbmV3IEFycmF5KERJU1RfQ09ERV9MRU4pO1xuemVybyhfZGlzdF9jb2RlKTtcbi8qIERpc3RhbmNlIGNvZGVzLiBUaGUgZmlyc3QgMjU2IHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSBkaXN0YW5jZXNcbiAqIDMgLi4gMjU4LCB0aGUgbGFzdCAyNTYgdmFsdWVzIGNvcnJlc3BvbmQgdG8gdGhlIHRvcCA4IGJpdHMgb2ZcbiAqIHRoZSAxNSBiaXQgZGlzdGFuY2VzLlxuICovXG5cbnZhciBfbGVuZ3RoX2NvZGUgID0gbmV3IEFycmF5KE1BWF9NQVRDSCAtIE1JTl9NQVRDSCArIDEpO1xuemVybyhfbGVuZ3RoX2NvZGUpO1xuLyogbGVuZ3RoIGNvZGUgZm9yIGVhY2ggbm9ybWFsaXplZCBtYXRjaCBsZW5ndGggKDAgPT0gTUlOX01BVENIKSAqL1xuXG52YXIgYmFzZV9sZW5ndGggICA9IG5ldyBBcnJheShMRU5HVEhfQ09ERVMpO1xuemVybyhiYXNlX2xlbmd0aCk7XG4vKiBGaXJzdCBub3JtYWxpemVkIGxlbmd0aCBmb3IgZWFjaCBjb2RlICgwID0gTUlOX01BVENIKSAqL1xuXG52YXIgYmFzZV9kaXN0ICAgICA9IG5ldyBBcnJheShEX0NPREVTKTtcbnplcm8oYmFzZV9kaXN0KTtcbi8qIEZpcnN0IG5vcm1hbGl6ZWQgZGlzdGFuY2UgZm9yIGVhY2ggY29kZSAoMCA9IGRpc3RhbmNlIG9mIDEpICovXG5cblxuZnVuY3Rpb24gU3RhdGljVHJlZURlc2Moc3RhdGljX3RyZWUsIGV4dHJhX2JpdHMsIGV4dHJhX2Jhc2UsIGVsZW1zLCBtYXhfbGVuZ3RoKSB7XG5cbiAgdGhpcy5zdGF0aWNfdHJlZSAgPSBzdGF0aWNfdHJlZTsgIC8qIHN0YXRpYyB0cmVlIG9yIE5VTEwgKi9cbiAgdGhpcy5leHRyYV9iaXRzICAgPSBleHRyYV9iaXRzOyAgIC8qIGV4dHJhIGJpdHMgZm9yIGVhY2ggY29kZSBvciBOVUxMICovXG4gIHRoaXMuZXh0cmFfYmFzZSAgID0gZXh0cmFfYmFzZTsgICAvKiBiYXNlIGluZGV4IGZvciBleHRyYV9iaXRzICovXG4gIHRoaXMuZWxlbXMgICAgICAgID0gZWxlbXM7ICAgICAgICAvKiBtYXggbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSB0cmVlICovXG4gIHRoaXMubWF4X2xlbmd0aCAgID0gbWF4X2xlbmd0aDsgICAvKiBtYXggYml0IGxlbmd0aCBmb3IgdGhlIGNvZGVzICovXG5cbiAgLy8gc2hvdyBpZiBgc3RhdGljX3RyZWVgIGhhcyBkYXRhIG9yIGR1bW15IC0gbmVlZGVkIGZvciBtb25vbW9ycGhpYyBvYmplY3RzXG4gIHRoaXMuaGFzX3N0cmVlICAgID0gc3RhdGljX3RyZWUgJiYgc3RhdGljX3RyZWUubGVuZ3RoO1xufVxuXG5cbnZhciBzdGF0aWNfbF9kZXNjO1xudmFyIHN0YXRpY19kX2Rlc2M7XG52YXIgc3RhdGljX2JsX2Rlc2M7XG5cblxuZnVuY3Rpb24gVHJlZURlc2MoZHluX3RyZWUsIHN0YXRfZGVzYykge1xuICB0aGlzLmR5bl90cmVlID0gZHluX3RyZWU7ICAgICAvKiB0aGUgZHluYW1pYyB0cmVlICovXG4gIHRoaXMubWF4X2NvZGUgPSAwOyAgICAgICAgICAgIC8qIGxhcmdlc3QgY29kZSB3aXRoIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xuICB0aGlzLnN0YXRfZGVzYyA9IHN0YXRfZGVzYzsgICAvKiB0aGUgY29ycmVzcG9uZGluZyBzdGF0aWMgdHJlZSAqL1xufVxuXG5cblxuZnVuY3Rpb24gZF9jb2RlKGRpc3QpIHtcbiAgcmV0dXJuIGRpc3QgPCAyNTYgPyBfZGlzdF9jb2RlW2Rpc3RdIDogX2Rpc3RfY29kZVsyNTYgKyAoZGlzdCA+Pj4gNyldO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogT3V0cHV0IGEgc2hvcnQgTFNCIGZpcnN0IG9uIHRoZSBzdHJlYW0uXG4gKiBJTiBhc3NlcnRpb246IHRoZXJlIGlzIGVub3VnaCByb29tIGluIHBlbmRpbmdCdWYuXG4gKi9cbmZ1bmN0aW9uIHB1dF9zaG9ydChzLCB3KSB7XG4vLyAgICBwdXRfYnl0ZShzLCAodWNoKSgodykgJiAweGZmKSk7XG4vLyAgICBwdXRfYnl0ZShzLCAodWNoKSgodXNoKSh3KSA+PiA4KSk7XG4gIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gKHcpICYgMHhmZjtcbiAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSAodyA+Pj4gOCkgJiAweGZmO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCBhIHZhbHVlIG9uIGEgZ2l2ZW4gbnVtYmVyIG9mIGJpdHMuXG4gKiBJTiBhc3NlcnRpb246IGxlbmd0aCA8PSAxNiBhbmQgdmFsdWUgZml0cyBpbiBsZW5ndGggYml0cy5cbiAqL1xuZnVuY3Rpb24gc2VuZF9iaXRzKHMsIHZhbHVlLCBsZW5ndGgpIHtcbiAgaWYgKHMuYmlfdmFsaWQgPiAoQnVmX3NpemUgLSBsZW5ndGgpKSB7XG4gICAgcy5iaV9idWYgfD0gKHZhbHVlIDw8IHMuYmlfdmFsaWQpICYgMHhmZmZmO1xuICAgIHB1dF9zaG9ydChzLCBzLmJpX2J1Zik7XG4gICAgcy5iaV9idWYgPSB2YWx1ZSA+PiAoQnVmX3NpemUgLSBzLmJpX3ZhbGlkKTtcbiAgICBzLmJpX3ZhbGlkICs9IGxlbmd0aCAtIEJ1Zl9zaXplO1xuICB9IGVsc2Uge1xuICAgIHMuYmlfYnVmIHw9ICh2YWx1ZSA8PCBzLmJpX3ZhbGlkKSAmIDB4ZmZmZjtcbiAgICBzLmJpX3ZhbGlkICs9IGxlbmd0aDtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHNlbmRfY29kZShzLCBjLCB0cmVlKSB7XG4gIHNlbmRfYml0cyhzLCB0cmVlW2MgKiAyXS8qLkNvZGUqLywgdHJlZVtjICogMiArIDFdLyouTGVuKi8pO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUmV2ZXJzZSB0aGUgZmlyc3QgbGVuIGJpdHMgb2YgYSBjb2RlLCB1c2luZyBzdHJhaWdodGZvcndhcmQgY29kZSAoYSBmYXN0ZXJcbiAqIG1ldGhvZCB3b3VsZCB1c2UgYSB0YWJsZSlcbiAqIElOIGFzc2VydGlvbjogMSA8PSBsZW4gPD0gMTVcbiAqL1xuZnVuY3Rpb24gYmlfcmV2ZXJzZShjb2RlLCBsZW4pIHtcbiAgdmFyIHJlcyA9IDA7XG4gIGRvIHtcbiAgICByZXMgfD0gY29kZSAmIDE7XG4gICAgY29kZSA+Pj49IDE7XG4gICAgcmVzIDw8PSAxO1xuICB9IHdoaWxlICgtLWxlbiA+IDApO1xuICByZXR1cm4gcmVzID4+PiAxO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRmx1c2ggdGhlIGJpdCBidWZmZXIsIGtlZXBpbmcgYXQgbW9zdCA3IGJpdHMgaW4gaXQuXG4gKi9cbmZ1bmN0aW9uIGJpX2ZsdXNoKHMpIHtcbiAgaWYgKHMuYmlfdmFsaWQgPT09IDE2KSB7XG4gICAgcHV0X3Nob3J0KHMsIHMuYmlfYnVmKTtcbiAgICBzLmJpX2J1ZiA9IDA7XG4gICAgcy5iaV92YWxpZCA9IDA7XG5cbiAgfSBlbHNlIGlmIChzLmJpX3ZhbGlkID49IDgpIHtcbiAgICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IHMuYmlfYnVmICYgMHhmZjtcbiAgICBzLmJpX2J1ZiA+Pj0gODtcbiAgICBzLmJpX3ZhbGlkIC09IDg7XG4gIH1cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbXB1dGUgdGhlIG9wdGltYWwgYml0IGxlbmd0aHMgZm9yIGEgdHJlZSBhbmQgdXBkYXRlIHRoZSB0b3RhbCBiaXQgbGVuZ3RoXG4gKiBmb3IgdGhlIGN1cnJlbnQgYmxvY2suXG4gKiBJTiBhc3NlcnRpb246IHRoZSBmaWVsZHMgZnJlcSBhbmQgZGFkIGFyZSBzZXQsIGhlYXBbaGVhcF9tYXhdIGFuZFxuICogICAgYWJvdmUgYXJlIHRoZSB0cmVlIG5vZGVzIHNvcnRlZCBieSBpbmNyZWFzaW5nIGZyZXF1ZW5jeS5cbiAqIE9VVCBhc3NlcnRpb25zOiB0aGUgZmllbGQgbGVuIGlzIHNldCB0byB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RoLCB0aGVcbiAqICAgICBhcnJheSBibF9jb3VudCBjb250YWlucyB0aGUgZnJlcXVlbmNpZXMgZm9yIGVhY2ggYml0IGxlbmd0aC5cbiAqICAgICBUaGUgbGVuZ3RoIG9wdF9sZW4gaXMgdXBkYXRlZDsgc3RhdGljX2xlbiBpcyBhbHNvIHVwZGF0ZWQgaWYgc3RyZWUgaXNcbiAqICAgICBub3QgbnVsbC5cbiAqL1xuZnVuY3Rpb24gZ2VuX2JpdGxlbihzLCBkZXNjKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIHRyZWVfZGVzYyAqZGVzYzsgICAgLyogdGhlIHRyZWUgZGVzY3JpcHRvciAqL1xue1xuICB2YXIgdHJlZSAgICAgICAgICAgID0gZGVzYy5keW5fdHJlZTtcbiAgdmFyIG1heF9jb2RlICAgICAgICA9IGRlc2MubWF4X2NvZGU7XG4gIHZhciBzdHJlZSAgICAgICAgICAgPSBkZXNjLnN0YXRfZGVzYy5zdGF0aWNfdHJlZTtcbiAgdmFyIGhhc19zdHJlZSAgICAgICA9IGRlc2Muc3RhdF9kZXNjLmhhc19zdHJlZTtcbiAgdmFyIGV4dHJhICAgICAgICAgICA9IGRlc2Muc3RhdF9kZXNjLmV4dHJhX2JpdHM7XG4gIHZhciBiYXNlICAgICAgICAgICAgPSBkZXNjLnN0YXRfZGVzYy5leHRyYV9iYXNlO1xuICB2YXIgbWF4X2xlbmd0aCAgICAgID0gZGVzYy5zdGF0X2Rlc2MubWF4X2xlbmd0aDtcbiAgdmFyIGg7ICAgICAgICAgICAgICAvKiBoZWFwIGluZGV4ICovXG4gIHZhciBuLCBtOyAgICAgICAgICAgLyogaXRlcmF0ZSBvdmVyIHRoZSB0cmVlIGVsZW1lbnRzICovXG4gIHZhciBiaXRzOyAgICAgICAgICAgLyogYml0IGxlbmd0aCAqL1xuICB2YXIgeGJpdHM7ICAgICAgICAgIC8qIGV4dHJhIGJpdHMgKi9cbiAgdmFyIGY7ICAgICAgICAgICAgICAvKiBmcmVxdWVuY3kgKi9cbiAgdmFyIG92ZXJmbG93ID0gMDsgICAvKiBudW1iZXIgb2YgZWxlbWVudHMgd2l0aCBiaXQgbGVuZ3RoIHRvbyBsYXJnZSAqL1xuXG4gIGZvciAoYml0cyA9IDA7IGJpdHMgPD0gTUFYX0JJVFM7IGJpdHMrKykge1xuICAgIHMuYmxfY291bnRbYml0c10gPSAwO1xuICB9XG5cbiAgLyogSW4gYSBmaXJzdCBwYXNzLCBjb21wdXRlIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGhzICh3aGljaCBtYXlcbiAgICogb3ZlcmZsb3cgaW4gdGhlIGNhc2Ugb2YgdGhlIGJpdCBsZW5ndGggdHJlZSkuXG4gICAqL1xuICB0cmVlW3MuaGVhcFtzLmhlYXBfbWF4XSAqIDIgKyAxXS8qLkxlbiovID0gMDsgLyogcm9vdCBvZiB0aGUgaGVhcCAqL1xuXG4gIGZvciAoaCA9IHMuaGVhcF9tYXggKyAxOyBoIDwgSEVBUF9TSVpFOyBoKyspIHtcbiAgICBuID0gcy5oZWFwW2hdO1xuICAgIGJpdHMgPSB0cmVlW3RyZWVbbiAqIDIgKyAxXS8qLkRhZCovICogMiArIDFdLyouTGVuKi8gKyAxO1xuICAgIGlmIChiaXRzID4gbWF4X2xlbmd0aCkge1xuICAgICAgYml0cyA9IG1heF9sZW5ndGg7XG4gICAgICBvdmVyZmxvdysrO1xuICAgIH1cbiAgICB0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IGJpdHM7XG4gICAgLyogV2Ugb3ZlcndyaXRlIHRyZWVbbl0uRGFkIHdoaWNoIGlzIG5vIGxvbmdlciBuZWVkZWQgKi9cblxuICAgIGlmIChuID4gbWF4X2NvZGUpIHsgY29udGludWU7IH0gLyogbm90IGEgbGVhZiBub2RlICovXG5cbiAgICBzLmJsX2NvdW50W2JpdHNdKys7XG4gICAgeGJpdHMgPSAwO1xuICAgIGlmIChuID49IGJhc2UpIHtcbiAgICAgIHhiaXRzID0gZXh0cmFbbiAtIGJhc2VdO1xuICAgIH1cbiAgICBmID0gdHJlZVtuICogMl0vKi5GcmVxKi87XG4gICAgcy5vcHRfbGVuICs9IGYgKiAoYml0cyArIHhiaXRzKTtcbiAgICBpZiAoaGFzX3N0cmVlKSB7XG4gICAgICBzLnN0YXRpY19sZW4gKz0gZiAqIChzdHJlZVtuICogMiArIDFdLyouTGVuKi8gKyB4Yml0cyk7XG4gICAgfVxuICB9XG4gIGlmIChvdmVyZmxvdyA9PT0gMCkgeyByZXR1cm47IH1cblxuICAvLyBUcmFjZSgoc3RkZXJyLFwiXFxuYml0IGxlbmd0aCBvdmVyZmxvd1xcblwiKSk7XG4gIC8qIFRoaXMgaGFwcGVucyBmb3IgZXhhbXBsZSBvbiBvYmoyIGFuZCBwaWMgb2YgdGhlIENhbGdhcnkgY29ycHVzICovXG5cbiAgLyogRmluZCB0aGUgZmlyc3QgYml0IGxlbmd0aCB3aGljaCBjb3VsZCBpbmNyZWFzZTogKi9cbiAgZG8ge1xuICAgIGJpdHMgPSBtYXhfbGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAocy5ibF9jb3VudFtiaXRzXSA9PT0gMCkgeyBiaXRzLS07IH1cbiAgICBzLmJsX2NvdW50W2JpdHNdLS07ICAgICAgLyogbW92ZSBvbmUgbGVhZiBkb3duIHRoZSB0cmVlICovXG4gICAgcy5ibF9jb3VudFtiaXRzICsgMV0gKz0gMjsgLyogbW92ZSBvbmUgb3ZlcmZsb3cgaXRlbSBhcyBpdHMgYnJvdGhlciAqL1xuICAgIHMuYmxfY291bnRbbWF4X2xlbmd0aF0tLTtcbiAgICAvKiBUaGUgYnJvdGhlciBvZiB0aGUgb3ZlcmZsb3cgaXRlbSBhbHNvIG1vdmVzIG9uZSBzdGVwIHVwLFxuICAgICAqIGJ1dCB0aGlzIGRvZXMgbm90IGFmZmVjdCBibF9jb3VudFttYXhfbGVuZ3RoXVxuICAgICAqL1xuICAgIG92ZXJmbG93IC09IDI7XG4gIH0gd2hpbGUgKG92ZXJmbG93ID4gMCk7XG5cbiAgLyogTm93IHJlY29tcHV0ZSBhbGwgYml0IGxlbmd0aHMsIHNjYW5uaW5nIGluIGluY3JlYXNpbmcgZnJlcXVlbmN5LlxuICAgKiBoIGlzIHN0aWxsIGVxdWFsIHRvIEhFQVBfU0laRS4gKEl0IGlzIHNpbXBsZXIgdG8gcmVjb25zdHJ1Y3QgYWxsXG4gICAqIGxlbmd0aHMgaW5zdGVhZCBvZiBmaXhpbmcgb25seSB0aGUgd3Jvbmcgb25lcy4gVGhpcyBpZGVhIGlzIHRha2VuXG4gICAqIGZyb20gJ2FyJyB3cml0dGVuIGJ5IEhhcnVoaWtvIE9rdW11cmEuKVxuICAgKi9cbiAgZm9yIChiaXRzID0gbWF4X2xlbmd0aDsgYml0cyAhPT0gMDsgYml0cy0tKSB7XG4gICAgbiA9IHMuYmxfY291bnRbYml0c107XG4gICAgd2hpbGUgKG4gIT09IDApIHtcbiAgICAgIG0gPSBzLmhlYXBbLS1oXTtcbiAgICAgIGlmIChtID4gbWF4X2NvZGUpIHsgY29udGludWU7IH1cbiAgICAgIGlmICh0cmVlW20gKiAyICsgMV0vKi5MZW4qLyAhPT0gYml0cykge1xuICAgICAgICAvLyBUcmFjZSgoc3RkZXJyLFwiY29kZSAlZCBiaXRzICVkLT4lZFxcblwiLCBtLCB0cmVlW21dLkxlbiwgYml0cykpO1xuICAgICAgICBzLm9wdF9sZW4gKz0gKGJpdHMgLSB0cmVlW20gKiAyICsgMV0vKi5MZW4qLykgKiB0cmVlW20gKiAyXS8qLkZyZXEqLztcbiAgICAgICAgdHJlZVttICogMiArIDFdLyouTGVuKi8gPSBiaXRzO1xuICAgICAgfVxuICAgICAgbi0tO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogR2VuZXJhdGUgdGhlIGNvZGVzIGZvciBhIGdpdmVuIHRyZWUgYW5kIGJpdCBjb3VudHMgKHdoaWNoIG5lZWQgbm90IGJlXG4gKiBvcHRpbWFsKS5cbiAqIElOIGFzc2VydGlvbjogdGhlIGFycmF5IGJsX2NvdW50IGNvbnRhaW5zIHRoZSBiaXQgbGVuZ3RoIHN0YXRpc3RpY3MgZm9yXG4gKiB0aGUgZ2l2ZW4gdHJlZSBhbmQgdGhlIGZpZWxkIGxlbiBpcyBzZXQgZm9yIGFsbCB0cmVlIGVsZW1lbnRzLlxuICogT1VUIGFzc2VydGlvbjogdGhlIGZpZWxkIGNvZGUgaXMgc2V0IGZvciBhbGwgdHJlZSBlbGVtZW50cyBvZiBub25cbiAqICAgICB6ZXJvIGNvZGUgbGVuZ3RoLlxuICovXG5mdW5jdGlvbiBnZW5fY29kZXModHJlZSwgbWF4X2NvZGUsIGJsX2NvdW50KVxuLy8gICAgY3RfZGF0YSAqdHJlZTsgICAgICAgICAgICAgLyogdGhlIHRyZWUgdG8gZGVjb3JhdGUgKi9cbi8vICAgIGludCBtYXhfY29kZTsgICAgICAgICAgICAgIC8qIGxhcmdlc3QgY29kZSB3aXRoIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xuLy8gICAgdXNoZiAqYmxfY291bnQ7ICAgICAgICAgICAgLyogbnVtYmVyIG9mIGNvZGVzIGF0IGVhY2ggYml0IGxlbmd0aCAqL1xue1xuICB2YXIgbmV4dF9jb2RlID0gbmV3IEFycmF5KE1BWF9CSVRTICsgMSk7IC8qIG5leHQgY29kZSB2YWx1ZSBmb3IgZWFjaCBiaXQgbGVuZ3RoICovXG4gIHZhciBjb2RlID0gMDsgICAgICAgICAgICAgIC8qIHJ1bm5pbmcgY29kZSB2YWx1ZSAqL1xuICB2YXIgYml0czsgICAgICAgICAgICAgICAgICAvKiBiaXQgaW5kZXggKi9cbiAgdmFyIG47ICAgICAgICAgICAgICAgICAgICAgLyogY29kZSBpbmRleCAqL1xuXG4gIC8qIFRoZSBkaXN0cmlidXRpb24gY291bnRzIGFyZSBmaXJzdCB1c2VkIHRvIGdlbmVyYXRlIHRoZSBjb2RlIHZhbHVlc1xuICAgKiB3aXRob3V0IGJpdCByZXZlcnNhbC5cbiAgICovXG4gIGZvciAoYml0cyA9IDE7IGJpdHMgPD0gTUFYX0JJVFM7IGJpdHMrKykge1xuICAgIG5leHRfY29kZVtiaXRzXSA9IGNvZGUgPSAoY29kZSArIGJsX2NvdW50W2JpdHMgLSAxXSkgPDwgMTtcbiAgfVxuICAvKiBDaGVjayB0aGF0IHRoZSBiaXQgY291bnRzIGluIGJsX2NvdW50IGFyZSBjb25zaXN0ZW50LiBUaGUgbGFzdCBjb2RlXG4gICAqIG11c3QgYmUgYWxsIG9uZXMuXG4gICAqL1xuICAvL0Fzc2VydCAoY29kZSArIGJsX2NvdW50W01BWF9CSVRTXS0xID09ICgxPDxNQVhfQklUUyktMSxcbiAgLy8gICAgICAgIFwiaW5jb25zaXN0ZW50IGJpdCBjb3VudHNcIik7XG4gIC8vVHJhY2V2KChzdGRlcnIsXCJcXG5nZW5fY29kZXM6IG1heF9jb2RlICVkIFwiLCBtYXhfY29kZSkpO1xuXG4gIGZvciAobiA9IDA7ICBuIDw9IG1heF9jb2RlOyBuKyspIHtcbiAgICB2YXIgbGVuID0gdHJlZVtuICogMiArIDFdLyouTGVuKi87XG4gICAgaWYgKGxlbiA9PT0gMCkgeyBjb250aW51ZTsgfVxuICAgIC8qIE5vdyByZXZlcnNlIHRoZSBiaXRzICovXG4gICAgdHJlZVtuICogMl0vKi5Db2RlKi8gPSBiaV9yZXZlcnNlKG5leHRfY29kZVtsZW5dKyssIGxlbik7XG5cbiAgICAvL1RyYWNlY3YodHJlZSAhPSBzdGF0aWNfbHRyZWUsIChzdGRlcnIsXCJcXG5uICUzZCAlYyBsICUyZCBjICU0eCAoJXgpIFwiLFxuICAgIC8vICAgICBuLCAoaXNncmFwaChuKSA/IG4gOiAnICcpLCBsZW4sIHRyZWVbbl0uQ29kZSwgbmV4dF9jb2RlW2xlbl0tMSkpO1xuICB9XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIHRoZSB2YXJpb3VzICdjb25zdGFudCcgdGFibGVzLlxuICovXG5mdW5jdGlvbiB0cl9zdGF0aWNfaW5pdCgpIHtcbiAgdmFyIG47ICAgICAgICAvKiBpdGVyYXRlcyBvdmVyIHRyZWUgZWxlbWVudHMgKi9cbiAgdmFyIGJpdHM7ICAgICAvKiBiaXQgY291bnRlciAqL1xuICB2YXIgbGVuZ3RoOyAgIC8qIGxlbmd0aCB2YWx1ZSAqL1xuICB2YXIgY29kZTsgICAgIC8qIGNvZGUgdmFsdWUgKi9cbiAgdmFyIGRpc3Q7ICAgICAvKiBkaXN0YW5jZSBpbmRleCAqL1xuICB2YXIgYmxfY291bnQgPSBuZXcgQXJyYXkoTUFYX0JJVFMgKyAxKTtcbiAgLyogbnVtYmVyIG9mIGNvZGVzIGF0IGVhY2ggYml0IGxlbmd0aCBmb3IgYW4gb3B0aW1hbCB0cmVlICovXG5cbiAgLy8gZG8gY2hlY2sgaW4gX3RyX2luaXQoKVxuICAvL2lmIChzdGF0aWNfaW5pdF9kb25lKSByZXR1cm47XG5cbiAgLyogRm9yIHNvbWUgZW1iZWRkZWQgdGFyZ2V0cywgZ2xvYmFsIHZhcmlhYmxlcyBhcmUgbm90IGluaXRpYWxpemVkOiAqL1xuLyojaWZkZWYgTk9fSU5JVF9HTE9CQUxfUE9JTlRFUlNcbiAgc3RhdGljX2xfZGVzYy5zdGF0aWNfdHJlZSA9IHN0YXRpY19sdHJlZTtcbiAgc3RhdGljX2xfZGVzYy5leHRyYV9iaXRzID0gZXh0cmFfbGJpdHM7XG4gIHN0YXRpY19kX2Rlc2Muc3RhdGljX3RyZWUgPSBzdGF0aWNfZHRyZWU7XG4gIHN0YXRpY19kX2Rlc2MuZXh0cmFfYml0cyA9IGV4dHJhX2RiaXRzO1xuICBzdGF0aWNfYmxfZGVzYy5leHRyYV9iaXRzID0gZXh0cmFfYmxiaXRzO1xuI2VuZGlmKi9cblxuICAvKiBJbml0aWFsaXplIHRoZSBtYXBwaW5nIGxlbmd0aCAoMC4uMjU1KSAtPiBsZW5ndGggY29kZSAoMC4uMjgpICovXG4gIGxlbmd0aCA9IDA7XG4gIGZvciAoY29kZSA9IDA7IGNvZGUgPCBMRU5HVEhfQ09ERVMgLSAxOyBjb2RlKyspIHtcbiAgICBiYXNlX2xlbmd0aFtjb2RlXSA9IGxlbmd0aDtcbiAgICBmb3IgKG4gPSAwOyBuIDwgKDEgPDwgZXh0cmFfbGJpdHNbY29kZV0pOyBuKyspIHtcbiAgICAgIF9sZW5ndGhfY29kZVtsZW5ndGgrK10gPSBjb2RlO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAobGVuZ3RoID09IDI1NiwgXCJ0cl9zdGF0aWNfaW5pdDogbGVuZ3RoICE9IDI1NlwiKTtcbiAgLyogTm90ZSB0aGF0IHRoZSBsZW5ndGggMjU1IChtYXRjaCBsZW5ndGggMjU4KSBjYW4gYmUgcmVwcmVzZW50ZWRcbiAgICogaW4gdHdvIGRpZmZlcmVudCB3YXlzOiBjb2RlIDI4NCArIDUgYml0cyBvciBjb2RlIDI4NSwgc28gd2VcbiAgICogb3ZlcndyaXRlIGxlbmd0aF9jb2RlWzI1NV0gdG8gdXNlIHRoZSBiZXN0IGVuY29kaW5nOlxuICAgKi9cbiAgX2xlbmd0aF9jb2RlW2xlbmd0aCAtIDFdID0gY29kZTtcblxuICAvKiBJbml0aWFsaXplIHRoZSBtYXBwaW5nIGRpc3QgKDAuLjMySykgLT4gZGlzdCBjb2RlICgwLi4yOSkgKi9cbiAgZGlzdCA9IDA7XG4gIGZvciAoY29kZSA9IDA7IGNvZGUgPCAxNjsgY29kZSsrKSB7XG4gICAgYmFzZV9kaXN0W2NvZGVdID0gZGlzdDtcbiAgICBmb3IgKG4gPSAwOyBuIDwgKDEgPDwgZXh0cmFfZGJpdHNbY29kZV0pOyBuKyspIHtcbiAgICAgIF9kaXN0X2NvZGVbZGlzdCsrXSA9IGNvZGU7XG4gICAgfVxuICB9XG4gIC8vQXNzZXJ0IChkaXN0ID09IDI1NiwgXCJ0cl9zdGF0aWNfaW5pdDogZGlzdCAhPSAyNTZcIik7XG4gIGRpc3QgPj49IDc7IC8qIGZyb20gbm93IG9uLCBhbGwgZGlzdGFuY2VzIGFyZSBkaXZpZGVkIGJ5IDEyOCAqL1xuICBmb3IgKDsgY29kZSA8IERfQ09ERVM7IGNvZGUrKykge1xuICAgIGJhc2VfZGlzdFtjb2RlXSA9IGRpc3QgPDwgNztcbiAgICBmb3IgKG4gPSAwOyBuIDwgKDEgPDwgKGV4dHJhX2RiaXRzW2NvZGVdIC0gNykpOyBuKyspIHtcbiAgICAgIF9kaXN0X2NvZGVbMjU2ICsgZGlzdCsrXSA9IGNvZGU7XG4gICAgfVxuICB9XG4gIC8vQXNzZXJ0IChkaXN0ID09IDI1NiwgXCJ0cl9zdGF0aWNfaW5pdDogMjU2K2Rpc3QgIT0gNTEyXCIpO1xuXG4gIC8qIENvbnN0cnVjdCB0aGUgY29kZXMgb2YgdGhlIHN0YXRpYyBsaXRlcmFsIHRyZWUgKi9cbiAgZm9yIChiaXRzID0gMDsgYml0cyA8PSBNQVhfQklUUzsgYml0cysrKSB7XG4gICAgYmxfY291bnRbYml0c10gPSAwO1xuICB9XG5cbiAgbiA9IDA7XG4gIHdoaWxlIChuIDw9IDE0Mykge1xuICAgIHN0YXRpY19sdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSA4O1xuICAgIG4rKztcbiAgICBibF9jb3VudFs4XSsrO1xuICB9XG4gIHdoaWxlIChuIDw9IDI1NSkge1xuICAgIHN0YXRpY19sdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSA5O1xuICAgIG4rKztcbiAgICBibF9jb3VudFs5XSsrO1xuICB9XG4gIHdoaWxlIChuIDw9IDI3OSkge1xuICAgIHN0YXRpY19sdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSA3O1xuICAgIG4rKztcbiAgICBibF9jb3VudFs3XSsrO1xuICB9XG4gIHdoaWxlIChuIDw9IDI4Nykge1xuICAgIHN0YXRpY19sdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSA4O1xuICAgIG4rKztcbiAgICBibF9jb3VudFs4XSsrO1xuICB9XG4gIC8qIENvZGVzIDI4NiBhbmQgMjg3IGRvIG5vdCBleGlzdCwgYnV0IHdlIG11c3QgaW5jbHVkZSB0aGVtIGluIHRoZVxuICAgKiB0cmVlIGNvbnN0cnVjdGlvbiB0byBnZXQgYSBjYW5vbmljYWwgSHVmZm1hbiB0cmVlIChsb25nZXN0IGNvZGVcbiAgICogYWxsIG9uZXMpXG4gICAqL1xuICBnZW5fY29kZXMoc3RhdGljX2x0cmVlLCBMX0NPREVTICsgMSwgYmxfY291bnQpO1xuXG4gIC8qIFRoZSBzdGF0aWMgZGlzdGFuY2UgdHJlZSBpcyB0cml2aWFsOiAqL1xuICBmb3IgKG4gPSAwOyBuIDwgRF9DT0RFUzsgbisrKSB7XG4gICAgc3RhdGljX2R0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IDU7XG4gICAgc3RhdGljX2R0cmVlW24gKiAyXS8qLkNvZGUqLyA9IGJpX3JldmVyc2UobiwgNSk7XG4gIH1cblxuICAvLyBOb3cgZGF0YSByZWFkeSBhbmQgd2UgY2FuIGluaXQgc3RhdGljIHRyZWVzXG4gIHN0YXRpY19sX2Rlc2MgPSBuZXcgU3RhdGljVHJlZURlc2Moc3RhdGljX2x0cmVlLCBleHRyYV9sYml0cywgTElURVJBTFMgKyAxLCBMX0NPREVTLCBNQVhfQklUUyk7XG4gIHN0YXRpY19kX2Rlc2MgPSBuZXcgU3RhdGljVHJlZURlc2Moc3RhdGljX2R0cmVlLCBleHRyYV9kYml0cywgMCwgICAgICAgICAgRF9DT0RFUywgTUFYX0JJVFMpO1xuICBzdGF0aWNfYmxfZGVzYyA9IG5ldyBTdGF0aWNUcmVlRGVzYyhuZXcgQXJyYXkoMCksIGV4dHJhX2JsYml0cywgMCwgICAgICAgICBCTF9DT0RFUywgTUFYX0JMX0JJVFMpO1xuXG4gIC8vc3RhdGljX2luaXRfZG9uZSA9IHRydWU7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIGEgbmV3IGJsb2NrLlxuICovXG5mdW5jdGlvbiBpbml0X2Jsb2NrKHMpIHtcbiAgdmFyIG47IC8qIGl0ZXJhdGVzIG92ZXIgdHJlZSBlbGVtZW50cyAqL1xuXG4gIC8qIEluaXRpYWxpemUgdGhlIHRyZWVzLiAqL1xuICBmb3IgKG4gPSAwOyBuIDwgTF9DT0RFUzsgIG4rKykgeyBzLmR5bl9sdHJlZVtuICogMl0vKi5GcmVxKi8gPSAwOyB9XG4gIGZvciAobiA9IDA7IG4gPCBEX0NPREVTOyAgbisrKSB7IHMuZHluX2R0cmVlW24gKiAyXS8qLkZyZXEqLyA9IDA7IH1cbiAgZm9yIChuID0gMDsgbiA8IEJMX0NPREVTOyBuKyspIHsgcy5ibF90cmVlW24gKiAyXS8qLkZyZXEqLyA9IDA7IH1cblxuICBzLmR5bl9sdHJlZVtFTkRfQkxPQ0sgKiAyXS8qLkZyZXEqLyA9IDE7XG4gIHMub3B0X2xlbiA9IHMuc3RhdGljX2xlbiA9IDA7XG4gIHMubGFzdF9saXQgPSBzLm1hdGNoZXMgPSAwO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRmx1c2ggdGhlIGJpdCBidWZmZXIgYW5kIGFsaWduIHRoZSBvdXRwdXQgb24gYSBieXRlIGJvdW5kYXJ5XG4gKi9cbmZ1bmN0aW9uIGJpX3dpbmR1cChzKVxue1xuICBpZiAocy5iaV92YWxpZCA+IDgpIHtcbiAgICBwdXRfc2hvcnQocywgcy5iaV9idWYpO1xuICB9IGVsc2UgaWYgKHMuYmlfdmFsaWQgPiAwKSB7XG4gICAgLy9wdXRfYnl0ZShzLCAoQnl0ZSlzLT5iaV9idWYpO1xuICAgIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gcy5iaV9idWY7XG4gIH1cbiAgcy5iaV9idWYgPSAwO1xuICBzLmJpX3ZhbGlkID0gMDtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5IGEgc3RvcmVkIGJsb2NrLCBzdG9yaW5nIGZpcnN0IHRoZSBsZW5ndGggYW5kIGl0c1xuICogb25lJ3MgY29tcGxlbWVudCBpZiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIGNvcHlfYmxvY2socywgYnVmLCBsZW4sIGhlYWRlcilcbi8vRGVmbGF0ZVN0YXRlICpzO1xuLy9jaGFyZiAgICAqYnVmOyAgICAvKiB0aGUgaW5wdXQgZGF0YSAqL1xuLy91bnNpZ25lZCBsZW47ICAgICAvKiBpdHMgbGVuZ3RoICovXG4vL2ludCAgICAgIGhlYWRlcjsgIC8qIHRydWUgaWYgYmxvY2sgaGVhZGVyIG11c3QgYmUgd3JpdHRlbiAqL1xue1xuICBiaV93aW5kdXAocyk7ICAgICAgICAvKiBhbGlnbiBvbiBieXRlIGJvdW5kYXJ5ICovXG5cbiAgaWYgKGhlYWRlcikge1xuICAgIHB1dF9zaG9ydChzLCBsZW4pO1xuICAgIHB1dF9zaG9ydChzLCB+bGVuKTtcbiAgfVxuLy8gIHdoaWxlIChsZW4tLSkge1xuLy8gICAgcHV0X2J5dGUocywgKmJ1ZisrKTtcbi8vICB9XG4gIHV0aWxzLmFycmF5U2V0KHMucGVuZGluZ19idWYsIHMud2luZG93LCBidWYsIGxlbiwgcy5wZW5kaW5nKTtcbiAgcy5wZW5kaW5nICs9IGxlbjtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb21wYXJlcyB0byBzdWJ0cmVlcywgdXNpbmcgdGhlIHRyZWUgZGVwdGggYXMgdGllIGJyZWFrZXIgd2hlblxuICogdGhlIHN1YnRyZWVzIGhhdmUgZXF1YWwgZnJlcXVlbmN5LiBUaGlzIG1pbmltaXplcyB0aGUgd29yc3QgY2FzZSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIHNtYWxsZXIodHJlZSwgbiwgbSwgZGVwdGgpIHtcbiAgdmFyIF9uMiA9IG4gKiAyO1xuICB2YXIgX20yID0gbSAqIDI7XG4gIHJldHVybiAodHJlZVtfbjJdLyouRnJlcSovIDwgdHJlZVtfbTJdLyouRnJlcSovIHx8XG4gICAgICAgICAodHJlZVtfbjJdLyouRnJlcSovID09PSB0cmVlW19tMl0vKi5GcmVxKi8gJiYgZGVwdGhbbl0gPD0gZGVwdGhbbV0pKTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBSZXN0b3JlIHRoZSBoZWFwIHByb3BlcnR5IGJ5IG1vdmluZyBkb3duIHRoZSB0cmVlIHN0YXJ0aW5nIGF0IG5vZGUgayxcbiAqIGV4Y2hhbmdpbmcgYSBub2RlIHdpdGggdGhlIHNtYWxsZXN0IG9mIGl0cyB0d28gc29ucyBpZiBuZWNlc3NhcnksIHN0b3BwaW5nXG4gKiB3aGVuIHRoZSBoZWFwIHByb3BlcnR5IGlzIHJlLWVzdGFibGlzaGVkIChlYWNoIGZhdGhlciBzbWFsbGVyIHRoYW4gaXRzXG4gKiB0d28gc29ucykuXG4gKi9cbmZ1bmN0aW9uIHBxZG93bmhlYXAocywgdHJlZSwgaylcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICBjdF9kYXRhICp0cmVlOyAgLyogdGhlIHRyZWUgdG8gcmVzdG9yZSAqL1xuLy8gICAgaW50IGs7ICAgICAgICAgICAgICAgLyogbm9kZSB0byBtb3ZlIGRvd24gKi9cbntcbiAgdmFyIHYgPSBzLmhlYXBba107XG4gIHZhciBqID0gayA8PCAxOyAgLyogbGVmdCBzb24gb2YgayAqL1xuICB3aGlsZSAoaiA8PSBzLmhlYXBfbGVuKSB7XG4gICAgLyogU2V0IGogdG8gdGhlIHNtYWxsZXN0IG9mIHRoZSB0d28gc29uczogKi9cbiAgICBpZiAoaiA8IHMuaGVhcF9sZW4gJiZcbiAgICAgIHNtYWxsZXIodHJlZSwgcy5oZWFwW2ogKyAxXSwgcy5oZWFwW2pdLCBzLmRlcHRoKSkge1xuICAgICAgaisrO1xuICAgIH1cbiAgICAvKiBFeGl0IGlmIHYgaXMgc21hbGxlciB0aGFuIGJvdGggc29ucyAqL1xuICAgIGlmIChzbWFsbGVyKHRyZWUsIHYsIHMuaGVhcFtqXSwgcy5kZXB0aCkpIHsgYnJlYWs7IH1cblxuICAgIC8qIEV4Y2hhbmdlIHYgd2l0aCB0aGUgc21hbGxlc3Qgc29uICovXG4gICAgcy5oZWFwW2tdID0gcy5oZWFwW2pdO1xuICAgIGsgPSBqO1xuXG4gICAgLyogQW5kIGNvbnRpbnVlIGRvd24gdGhlIHRyZWUsIHNldHRpbmcgaiB0byB0aGUgbGVmdCBzb24gb2YgayAqL1xuICAgIGogPDw9IDE7XG4gIH1cbiAgcy5oZWFwW2tdID0gdjtcbn1cblxuXG4vLyBpbmxpbmVkIG1hbnVhbGx5XG4vLyB2YXIgU01BTExFU1QgPSAxO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgdGhlIGJsb2NrIGRhdGEgY29tcHJlc3NlZCB1c2luZyB0aGUgZ2l2ZW4gSHVmZm1hbiB0cmVlc1xuICovXG5mdW5jdGlvbiBjb21wcmVzc19ibG9jayhzLCBsdHJlZSwgZHRyZWUpXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY29uc3QgY3RfZGF0YSAqbHRyZWU7IC8qIGxpdGVyYWwgdHJlZSAqL1xuLy8gICAgY29uc3QgY3RfZGF0YSAqZHRyZWU7IC8qIGRpc3RhbmNlIHRyZWUgKi9cbntcbiAgdmFyIGRpc3Q7ICAgICAgICAgICAvKiBkaXN0YW5jZSBvZiBtYXRjaGVkIHN0cmluZyAqL1xuICB2YXIgbGM7ICAgICAgICAgICAgIC8qIG1hdGNoIGxlbmd0aCBvciB1bm1hdGNoZWQgY2hhciAoaWYgZGlzdCA9PSAwKSAqL1xuICB2YXIgbHggPSAwOyAgICAgICAgIC8qIHJ1bm5pbmcgaW5kZXggaW4gbF9idWYgKi9cbiAgdmFyIGNvZGU7ICAgICAgICAgICAvKiB0aGUgY29kZSB0byBzZW5kICovXG4gIHZhciBleHRyYTsgICAgICAgICAgLyogbnVtYmVyIG9mIGV4dHJhIGJpdHMgdG8gc2VuZCAqL1xuXG4gIGlmIChzLmxhc3RfbGl0ICE9PSAwKSB7XG4gICAgZG8ge1xuICAgICAgZGlzdCA9IChzLnBlbmRpbmdfYnVmW3MuZF9idWYgKyBseCAqIDJdIDw8IDgpIHwgKHMucGVuZGluZ19idWZbcy5kX2J1ZiArIGx4ICogMiArIDFdKTtcbiAgICAgIGxjID0gcy5wZW5kaW5nX2J1ZltzLmxfYnVmICsgbHhdO1xuICAgICAgbHgrKztcblxuICAgICAgaWYgKGRpc3QgPT09IDApIHtcbiAgICAgICAgc2VuZF9jb2RlKHMsIGxjLCBsdHJlZSk7IC8qIHNlbmQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICAgICAgLy9UcmFjZWN2KGlzZ3JhcGgobGMpLCAoc3RkZXJyLFwiICclYycgXCIsIGxjKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBIZXJlLCBsYyBpcyB0aGUgbWF0Y2ggbGVuZ3RoIC0gTUlOX01BVENIICovXG4gICAgICAgIGNvZGUgPSBfbGVuZ3RoX2NvZGVbbGNdO1xuICAgICAgICBzZW5kX2NvZGUocywgY29kZSArIExJVEVSQUxTICsgMSwgbHRyZWUpOyAvKiBzZW5kIHRoZSBsZW5ndGggY29kZSAqL1xuICAgICAgICBleHRyYSA9IGV4dHJhX2xiaXRzW2NvZGVdO1xuICAgICAgICBpZiAoZXh0cmEgIT09IDApIHtcbiAgICAgICAgICBsYyAtPSBiYXNlX2xlbmd0aFtjb2RlXTtcbiAgICAgICAgICBzZW5kX2JpdHMocywgbGMsIGV4dHJhKTsgICAgICAgLyogc2VuZCB0aGUgZXh0cmEgbGVuZ3RoIGJpdHMgKi9cbiAgICAgICAgfVxuICAgICAgICBkaXN0LS07IC8qIGRpc3QgaXMgbm93IHRoZSBtYXRjaCBkaXN0YW5jZSAtIDEgKi9cbiAgICAgICAgY29kZSA9IGRfY29kZShkaXN0KTtcbiAgICAgICAgLy9Bc3NlcnQgKGNvZGUgPCBEX0NPREVTLCBcImJhZCBkX2NvZGVcIik7XG5cbiAgICAgICAgc2VuZF9jb2RlKHMsIGNvZGUsIGR0cmVlKTsgICAgICAgLyogc2VuZCB0aGUgZGlzdGFuY2UgY29kZSAqL1xuICAgICAgICBleHRyYSA9IGV4dHJhX2RiaXRzW2NvZGVdO1xuICAgICAgICBpZiAoZXh0cmEgIT09IDApIHtcbiAgICAgICAgICBkaXN0IC09IGJhc2VfZGlzdFtjb2RlXTtcbiAgICAgICAgICBzZW5kX2JpdHMocywgZGlzdCwgZXh0cmEpOyAgIC8qIHNlbmQgdGhlIGV4dHJhIGRpc3RhbmNlIGJpdHMgKi9cbiAgICAgICAgfVxuICAgICAgfSAvKiBsaXRlcmFsIG9yIG1hdGNoIHBhaXIgPyAqL1xuXG4gICAgICAvKiBDaGVjayB0aGF0IHRoZSBvdmVybGF5IGJldHdlZW4gcGVuZGluZ19idWYgYW5kIGRfYnVmK2xfYnVmIGlzIG9rOiAqL1xuICAgICAgLy9Bc3NlcnQoKHVJbnQpKHMtPnBlbmRpbmcpIDwgcy0+bGl0X2J1ZnNpemUgKyAyKmx4LFxuICAgICAgLy8gICAgICAgXCJwZW5kaW5nQnVmIG92ZXJmbG93XCIpO1xuXG4gICAgfSB3aGlsZSAobHggPCBzLmxhc3RfbGl0KTtcbiAgfVxuXG4gIHNlbmRfY29kZShzLCBFTkRfQkxPQ0ssIGx0cmVlKTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbnN0cnVjdCBvbmUgSHVmZm1hbiB0cmVlIGFuZCBhc3NpZ25zIHRoZSBjb2RlIGJpdCBzdHJpbmdzIGFuZCBsZW5ndGhzLlxuICogVXBkYXRlIHRoZSB0b3RhbCBiaXQgbGVuZ3RoIGZvciB0aGUgY3VycmVudCBibG9jay5cbiAqIElOIGFzc2VydGlvbjogdGhlIGZpZWxkIGZyZXEgaXMgc2V0IGZvciBhbGwgdHJlZSBlbGVtZW50cy5cbiAqIE9VVCBhc3NlcnRpb25zOiB0aGUgZmllbGRzIGxlbiBhbmQgY29kZSBhcmUgc2V0IHRvIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGhcbiAqICAgICBhbmQgY29ycmVzcG9uZGluZyBjb2RlLiBUaGUgbGVuZ3RoIG9wdF9sZW4gaXMgdXBkYXRlZDsgc3RhdGljX2xlbiBpc1xuICogICAgIGFsc28gdXBkYXRlZCBpZiBzdHJlZSBpcyBub3QgbnVsbC4gVGhlIGZpZWxkIG1heF9jb2RlIGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gYnVpbGRfdHJlZShzLCBkZXNjKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIHRyZWVfZGVzYyAqZGVzYzsgLyogdGhlIHRyZWUgZGVzY3JpcHRvciAqL1xue1xuICB2YXIgdHJlZSAgICAgPSBkZXNjLmR5bl90cmVlO1xuICB2YXIgc3RyZWUgICAgPSBkZXNjLnN0YXRfZGVzYy5zdGF0aWNfdHJlZTtcbiAgdmFyIGhhc19zdHJlZSA9IGRlc2Muc3RhdF9kZXNjLmhhc19zdHJlZTtcbiAgdmFyIGVsZW1zICAgID0gZGVzYy5zdGF0X2Rlc2MuZWxlbXM7XG4gIHZhciBuLCBtOyAgICAgICAgICAvKiBpdGVyYXRlIG92ZXIgaGVhcCBlbGVtZW50cyAqL1xuICB2YXIgbWF4X2NvZGUgPSAtMTsgLyogbGFyZ2VzdCBjb2RlIHdpdGggbm9uIHplcm8gZnJlcXVlbmN5ICovXG4gIHZhciBub2RlOyAgICAgICAgICAvKiBuZXcgbm9kZSBiZWluZyBjcmVhdGVkICovXG5cbiAgLyogQ29uc3RydWN0IHRoZSBpbml0aWFsIGhlYXAsIHdpdGggbGVhc3QgZnJlcXVlbnQgZWxlbWVudCBpblxuICAgKiBoZWFwW1NNQUxMRVNUXS4gVGhlIHNvbnMgb2YgaGVhcFtuXSBhcmUgaGVhcFsyKm5dIGFuZCBoZWFwWzIqbisxXS5cbiAgICogaGVhcFswXSBpcyBub3QgdXNlZC5cbiAgICovXG4gIHMuaGVhcF9sZW4gPSAwO1xuICBzLmhlYXBfbWF4ID0gSEVBUF9TSVpFO1xuXG4gIGZvciAobiA9IDA7IG4gPCBlbGVtczsgbisrKSB7XG4gICAgaWYgKHRyZWVbbiAqIDJdLyouRnJlcSovICE9PSAwKSB7XG4gICAgICBzLmhlYXBbKytzLmhlYXBfbGVuXSA9IG1heF9jb2RlID0gbjtcbiAgICAgIHMuZGVwdGhbbl0gPSAwO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gMDtcbiAgICB9XG4gIH1cblxuICAvKiBUaGUgcGt6aXAgZm9ybWF0IHJlcXVpcmVzIHRoYXQgYXQgbGVhc3Qgb25lIGRpc3RhbmNlIGNvZGUgZXhpc3RzLFxuICAgKiBhbmQgdGhhdCBhdCBsZWFzdCBvbmUgYml0IHNob3VsZCBiZSBzZW50IGV2ZW4gaWYgdGhlcmUgaXMgb25seSBvbmVcbiAgICogcG9zc2libGUgY29kZS4gU28gdG8gYXZvaWQgc3BlY2lhbCBjaGVja3MgbGF0ZXIgb24gd2UgZm9yY2UgYXQgbGVhc3RcbiAgICogdHdvIGNvZGVzIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeS5cbiAgICovXG4gIHdoaWxlIChzLmhlYXBfbGVuIDwgMikge1xuICAgIG5vZGUgPSBzLmhlYXBbKytzLmhlYXBfbGVuXSA9IChtYXhfY29kZSA8IDIgPyArK21heF9jb2RlIDogMCk7XG4gICAgdHJlZVtub2RlICogMl0vKi5GcmVxKi8gPSAxO1xuICAgIHMuZGVwdGhbbm9kZV0gPSAwO1xuICAgIHMub3B0X2xlbi0tO1xuXG4gICAgaWYgKGhhc19zdHJlZSkge1xuICAgICAgcy5zdGF0aWNfbGVuIC09IHN0cmVlW25vZGUgKiAyICsgMV0vKi5MZW4qLztcbiAgICB9XG4gICAgLyogbm9kZSBpcyAwIG9yIDEgc28gaXQgZG9lcyBub3QgaGF2ZSBleHRyYSBiaXRzICovXG4gIH1cbiAgZGVzYy5tYXhfY29kZSA9IG1heF9jb2RlO1xuXG4gIC8qIFRoZSBlbGVtZW50cyBoZWFwW2hlYXBfbGVuLzIrMSAuLiBoZWFwX2xlbl0gYXJlIGxlYXZlcyBvZiB0aGUgdHJlZSxcbiAgICogZXN0YWJsaXNoIHN1Yi1oZWFwcyBvZiBpbmNyZWFzaW5nIGxlbmd0aHM6XG4gICAqL1xuICBmb3IgKG4gPSAocy5oZWFwX2xlbiA+PiAxLyppbnQgLzIqLyk7IG4gPj0gMTsgbi0tKSB7IHBxZG93bmhlYXAocywgdHJlZSwgbik7IH1cblxuICAvKiBDb25zdHJ1Y3QgdGhlIEh1ZmZtYW4gdHJlZSBieSByZXBlYXRlZGx5IGNvbWJpbmluZyB0aGUgbGVhc3QgdHdvXG4gICAqIGZyZXF1ZW50IG5vZGVzLlxuICAgKi9cbiAgbm9kZSA9IGVsZW1zOyAgICAgICAgICAgICAgLyogbmV4dCBpbnRlcm5hbCBub2RlIG9mIHRoZSB0cmVlICovXG4gIGRvIHtcbiAgICAvL3BxcmVtb3ZlKHMsIHRyZWUsIG4pOyAgLyogbiA9IG5vZGUgb2YgbGVhc3QgZnJlcXVlbmN5ICovXG4gICAgLyoqKiBwcXJlbW92ZSAqKiovXG4gICAgbiA9IHMuaGVhcFsxLypTTUFMTEVTVCovXTtcbiAgICBzLmhlYXBbMS8qU01BTExFU1QqL10gPSBzLmhlYXBbcy5oZWFwX2xlbi0tXTtcbiAgICBwcWRvd25oZWFwKHMsIHRyZWUsIDEvKlNNQUxMRVNUKi8pO1xuICAgIC8qKiovXG5cbiAgICBtID0gcy5oZWFwWzEvKlNNQUxMRVNUKi9dOyAvKiBtID0gbm9kZSBvZiBuZXh0IGxlYXN0IGZyZXF1ZW5jeSAqL1xuXG4gICAgcy5oZWFwWy0tcy5oZWFwX21heF0gPSBuOyAvKiBrZWVwIHRoZSBub2RlcyBzb3J0ZWQgYnkgZnJlcXVlbmN5ICovXG4gICAgcy5oZWFwWy0tcy5oZWFwX21heF0gPSBtO1xuXG4gICAgLyogQ3JlYXRlIGEgbmV3IG5vZGUgZmF0aGVyIG9mIG4gYW5kIG0gKi9cbiAgICB0cmVlW25vZGUgKiAyXS8qLkZyZXEqLyA9IHRyZWVbbiAqIDJdLyouRnJlcSovICsgdHJlZVttICogMl0vKi5GcmVxKi87XG4gICAgcy5kZXB0aFtub2RlXSA9IChzLmRlcHRoW25dID49IHMuZGVwdGhbbV0gPyBzLmRlcHRoW25dIDogcy5kZXB0aFttXSkgKyAxO1xuICAgIHRyZWVbbiAqIDIgKyAxXS8qLkRhZCovID0gdHJlZVttICogMiArIDFdLyouRGFkKi8gPSBub2RlO1xuXG4gICAgLyogYW5kIGluc2VydCB0aGUgbmV3IG5vZGUgaW4gdGhlIGhlYXAgKi9cbiAgICBzLmhlYXBbMS8qU01BTExFU1QqL10gPSBub2RlKys7XG4gICAgcHFkb3duaGVhcChzLCB0cmVlLCAxLypTTUFMTEVTVCovKTtcblxuICB9IHdoaWxlIChzLmhlYXBfbGVuID49IDIpO1xuXG4gIHMuaGVhcFstLXMuaGVhcF9tYXhdID0gcy5oZWFwWzEvKlNNQUxMRVNUKi9dO1xuXG4gIC8qIEF0IHRoaXMgcG9pbnQsIHRoZSBmaWVsZHMgZnJlcSBhbmQgZGFkIGFyZSBzZXQuIFdlIGNhbiBub3dcbiAgICogZ2VuZXJhdGUgdGhlIGJpdCBsZW5ndGhzLlxuICAgKi9cbiAgZ2VuX2JpdGxlbihzLCBkZXNjKTtcblxuICAvKiBUaGUgZmllbGQgbGVuIGlzIG5vdyBzZXQsIHdlIGNhbiBnZW5lcmF0ZSB0aGUgYml0IGNvZGVzICovXG4gIGdlbl9jb2Rlcyh0cmVlLCBtYXhfY29kZSwgcy5ibF9jb3VudCk7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTY2FuIGEgbGl0ZXJhbCBvciBkaXN0YW5jZSB0cmVlIHRvIGRldGVybWluZSB0aGUgZnJlcXVlbmNpZXMgb2YgdGhlIGNvZGVzXG4gKiBpbiB0aGUgYml0IGxlbmd0aCB0cmVlLlxuICovXG5mdW5jdGlvbiBzY2FuX3RyZWUocywgdHJlZSwgbWF4X2NvZGUpXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY3RfZGF0YSAqdHJlZTsgICAvKiB0aGUgdHJlZSB0byBiZSBzY2FubmVkICovXG4vLyAgICBpbnQgbWF4X2NvZGU7ICAgIC8qIGFuZCBpdHMgbGFyZ2VzdCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xue1xuICB2YXIgbjsgICAgICAgICAgICAgICAgICAgICAvKiBpdGVyYXRlcyBvdmVyIGFsbCB0cmVlIGVsZW1lbnRzICovXG4gIHZhciBwcmV2bGVuID0gLTE7ICAgICAgICAgIC8qIGxhc3QgZW1pdHRlZCBsZW5ndGggKi9cbiAgdmFyIGN1cmxlbjsgICAgICAgICAgICAgICAgLyogbGVuZ3RoIG9mIGN1cnJlbnQgY29kZSAqL1xuXG4gIHZhciBuZXh0bGVuID0gdHJlZVswICogMiArIDFdLyouTGVuKi87IC8qIGxlbmd0aCBvZiBuZXh0IGNvZGUgKi9cblxuICB2YXIgY291bnQgPSAwOyAgICAgICAgICAgICAvKiByZXBlYXQgY291bnQgb2YgdGhlIGN1cnJlbnQgY29kZSAqL1xuICB2YXIgbWF4X2NvdW50ID0gNzsgICAgICAgICAvKiBtYXggcmVwZWF0IGNvdW50ICovXG4gIHZhciBtaW5fY291bnQgPSA0OyAgICAgICAgIC8qIG1pbiByZXBlYXQgY291bnQgKi9cblxuICBpZiAobmV4dGxlbiA9PT0gMCkge1xuICAgIG1heF9jb3VudCA9IDEzODtcbiAgICBtaW5fY291bnQgPSAzO1xuICB9XG4gIHRyZWVbKG1heF9jb2RlICsgMSkgKiAyICsgMV0vKi5MZW4qLyA9IDB4ZmZmZjsgLyogZ3VhcmQgKi9cblxuICBmb3IgKG4gPSAwOyBuIDw9IG1heF9jb2RlOyBuKyspIHtcbiAgICBjdXJsZW4gPSBuZXh0bGVuO1xuICAgIG5leHRsZW4gPSB0cmVlWyhuICsgMSkgKiAyICsgMV0vKi5MZW4qLztcblxuICAgIGlmICgrK2NvdW50IDwgbWF4X2NvdW50ICYmIGN1cmxlbiA9PT0gbmV4dGxlbikge1xuICAgICAgY29udGludWU7XG5cbiAgICB9IGVsc2UgaWYgKGNvdW50IDwgbWluX2NvdW50KSB7XG4gICAgICBzLmJsX3RyZWVbY3VybGVuICogMl0vKi5GcmVxKi8gKz0gY291bnQ7XG5cbiAgICB9IGVsc2UgaWYgKGN1cmxlbiAhPT0gMCkge1xuXG4gICAgICBpZiAoY3VybGVuICE9PSBwcmV2bGVuKSB7IHMuYmxfdHJlZVtjdXJsZW4gKiAyXS8qLkZyZXEqLysrOyB9XG4gICAgICBzLmJsX3RyZWVbUkVQXzNfNiAqIDJdLyouRnJlcSovKys7XG5cbiAgICB9IGVsc2UgaWYgKGNvdW50IDw9IDEwKSB7XG4gICAgICBzLmJsX3RyZWVbUkVQWl8zXzEwICogMl0vKi5GcmVxKi8rKztcblxuICAgIH0gZWxzZSB7XG4gICAgICBzLmJsX3RyZWVbUkVQWl8xMV8xMzggKiAyXS8qLkZyZXEqLysrO1xuICAgIH1cblxuICAgIGNvdW50ID0gMDtcbiAgICBwcmV2bGVuID0gY3VybGVuO1xuXG4gICAgaWYgKG5leHRsZW4gPT09IDApIHtcbiAgICAgIG1heF9jb3VudCA9IDEzODtcbiAgICAgIG1pbl9jb3VudCA9IDM7XG5cbiAgICB9IGVsc2UgaWYgKGN1cmxlbiA9PT0gbmV4dGxlbikge1xuICAgICAgbWF4X2NvdW50ID0gNjtcbiAgICAgIG1pbl9jb3VudCA9IDM7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbWF4X2NvdW50ID0gNztcbiAgICAgIG1pbl9jb3VudCA9IDQ7XG4gICAgfVxuICB9XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIGEgbGl0ZXJhbCBvciBkaXN0YW5jZSB0cmVlIGluIGNvbXByZXNzZWQgZm9ybSwgdXNpbmcgdGhlIGNvZGVzIGluXG4gKiBibF90cmVlLlxuICovXG5mdW5jdGlvbiBzZW5kX3RyZWUocywgdHJlZSwgbWF4X2NvZGUpXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgY3RfZGF0YSAqdHJlZTsgLyogdGhlIHRyZWUgdG8gYmUgc2Nhbm5lZCAqL1xuLy8gICAgaW50IG1heF9jb2RlOyAgICAgICAvKiBhbmQgaXRzIGxhcmdlc3QgY29kZSBvZiBub24gemVybyBmcmVxdWVuY3kgKi9cbntcbiAgdmFyIG47ICAgICAgICAgICAgICAgICAgICAgLyogaXRlcmF0ZXMgb3ZlciBhbGwgdHJlZSBlbGVtZW50cyAqL1xuICB2YXIgcHJldmxlbiA9IC0xOyAgICAgICAgICAvKiBsYXN0IGVtaXR0ZWQgbGVuZ3RoICovXG4gIHZhciBjdXJsZW47ICAgICAgICAgICAgICAgIC8qIGxlbmd0aCBvZiBjdXJyZW50IGNvZGUgKi9cblxuICB2YXIgbmV4dGxlbiA9IHRyZWVbMCAqIDIgKyAxXS8qLkxlbiovOyAvKiBsZW5ndGggb2YgbmV4dCBjb2RlICovXG5cbiAgdmFyIGNvdW50ID0gMDsgICAgICAgICAgICAgLyogcmVwZWF0IGNvdW50IG9mIHRoZSBjdXJyZW50IGNvZGUgKi9cbiAgdmFyIG1heF9jb3VudCA9IDc7ICAgICAgICAgLyogbWF4IHJlcGVhdCBjb3VudCAqL1xuICB2YXIgbWluX2NvdW50ID0gNDsgICAgICAgICAvKiBtaW4gcmVwZWF0IGNvdW50ICovXG5cbiAgLyogdHJlZVttYXhfY29kZSsxXS5MZW4gPSAtMTsgKi8gIC8qIGd1YXJkIGFscmVhZHkgc2V0ICovXG4gIGlmIChuZXh0bGVuID09PSAwKSB7XG4gICAgbWF4X2NvdW50ID0gMTM4O1xuICAgIG1pbl9jb3VudCA9IDM7XG4gIH1cblxuICBmb3IgKG4gPSAwOyBuIDw9IG1heF9jb2RlOyBuKyspIHtcbiAgICBjdXJsZW4gPSBuZXh0bGVuO1xuICAgIG5leHRsZW4gPSB0cmVlWyhuICsgMSkgKiAyICsgMV0vKi5MZW4qLztcblxuICAgIGlmICgrK2NvdW50IDwgbWF4X2NvdW50ICYmIGN1cmxlbiA9PT0gbmV4dGxlbikge1xuICAgICAgY29udGludWU7XG5cbiAgICB9IGVsc2UgaWYgKGNvdW50IDwgbWluX2NvdW50KSB7XG4gICAgICBkbyB7IHNlbmRfY29kZShzLCBjdXJsZW4sIHMuYmxfdHJlZSk7IH0gd2hpbGUgKC0tY291bnQgIT09IDApO1xuXG4gICAgfSBlbHNlIGlmIChjdXJsZW4gIT09IDApIHtcbiAgICAgIGlmIChjdXJsZW4gIT09IHByZXZsZW4pIHtcbiAgICAgICAgc2VuZF9jb2RlKHMsIGN1cmxlbiwgcy5ibF90cmVlKTtcbiAgICAgICAgY291bnQtLTtcbiAgICAgIH1cbiAgICAgIC8vQXNzZXJ0KGNvdW50ID49IDMgJiYgY291bnQgPD0gNiwgXCIgM182P1wiKTtcbiAgICAgIHNlbmRfY29kZShzLCBSRVBfM182LCBzLmJsX3RyZWUpO1xuICAgICAgc2VuZF9iaXRzKHMsIGNvdW50IC0gMywgMik7XG5cbiAgICB9IGVsc2UgaWYgKGNvdW50IDw9IDEwKSB7XG4gICAgICBzZW5kX2NvZGUocywgUkVQWl8zXzEwLCBzLmJsX3RyZWUpO1xuICAgICAgc2VuZF9iaXRzKHMsIGNvdW50IC0gMywgMyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc2VuZF9jb2RlKHMsIFJFUFpfMTFfMTM4LCBzLmJsX3RyZWUpO1xuICAgICAgc2VuZF9iaXRzKHMsIGNvdW50IC0gMTEsIDcpO1xuICAgIH1cblxuICAgIGNvdW50ID0gMDtcbiAgICBwcmV2bGVuID0gY3VybGVuO1xuICAgIGlmIChuZXh0bGVuID09PSAwKSB7XG4gICAgICBtYXhfY291bnQgPSAxMzg7XG4gICAgICBtaW5fY291bnQgPSAzO1xuXG4gICAgfSBlbHNlIGlmIChjdXJsZW4gPT09IG5leHRsZW4pIHtcbiAgICAgIG1heF9jb3VudCA9IDY7XG4gICAgICBtaW5fY291bnQgPSAzO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIG1heF9jb3VudCA9IDc7XG4gICAgICBtaW5fY291bnQgPSA0O1xuICAgIH1cbiAgfVxufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29uc3RydWN0IHRoZSBIdWZmbWFuIHRyZWUgZm9yIHRoZSBiaXQgbGVuZ3RocyBhbmQgcmV0dXJuIHRoZSBpbmRleCBpblxuICogYmxfb3JkZXIgb2YgdGhlIGxhc3QgYml0IGxlbmd0aCBjb2RlIHRvIHNlbmQuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkX2JsX3RyZWUocykge1xuICB2YXIgbWF4X2JsaW5kZXg7ICAvKiBpbmRleCBvZiBsYXN0IGJpdCBsZW5ndGggY29kZSBvZiBub24gemVybyBmcmVxICovXG5cbiAgLyogRGV0ZXJtaW5lIHRoZSBiaXQgbGVuZ3RoIGZyZXF1ZW5jaWVzIGZvciBsaXRlcmFsIGFuZCBkaXN0YW5jZSB0cmVlcyAqL1xuICBzY2FuX3RyZWUocywgcy5keW5fbHRyZWUsIHMubF9kZXNjLm1heF9jb2RlKTtcbiAgc2Nhbl90cmVlKHMsIHMuZHluX2R0cmVlLCBzLmRfZGVzYy5tYXhfY29kZSk7XG5cbiAgLyogQnVpbGQgdGhlIGJpdCBsZW5ndGggdHJlZTogKi9cbiAgYnVpbGRfdHJlZShzLCBzLmJsX2Rlc2MpO1xuICAvKiBvcHRfbGVuIG5vdyBpbmNsdWRlcyB0aGUgbGVuZ3RoIG9mIHRoZSB0cmVlIHJlcHJlc2VudGF0aW9ucywgZXhjZXB0XG4gICAqIHRoZSBsZW5ndGhzIG9mIHRoZSBiaXQgbGVuZ3RocyBjb2RlcyBhbmQgdGhlIDUrNSs0IGJpdHMgZm9yIHRoZSBjb3VudHMuXG4gICAqL1xuXG4gIC8qIERldGVybWluZSB0aGUgbnVtYmVyIG9mIGJpdCBsZW5ndGggY29kZXMgdG8gc2VuZC4gVGhlIHBremlwIGZvcm1hdFxuICAgKiByZXF1aXJlcyB0aGF0IGF0IGxlYXN0IDQgYml0IGxlbmd0aCBjb2RlcyBiZSBzZW50LiAoYXBwbm90ZS50eHQgc2F5c1xuICAgKiAzIGJ1dCB0aGUgYWN0dWFsIHZhbHVlIHVzZWQgaXMgNC4pXG4gICAqL1xuICBmb3IgKG1heF9ibGluZGV4ID0gQkxfQ09ERVMgLSAxOyBtYXhfYmxpbmRleCA+PSAzOyBtYXhfYmxpbmRleC0tKSB7XG4gICAgaWYgKHMuYmxfdHJlZVtibF9vcmRlclttYXhfYmxpbmRleF0gKiAyICsgMV0vKi5MZW4qLyAhPT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8qIFVwZGF0ZSBvcHRfbGVuIHRvIGluY2x1ZGUgdGhlIGJpdCBsZW5ndGggdHJlZSBhbmQgY291bnRzICovXG4gIHMub3B0X2xlbiArPSAzICogKG1heF9ibGluZGV4ICsgMSkgKyA1ICsgNSArIDQ7XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuZHluIHRyZWVzOiBkeW4gJWxkLCBzdGF0ICVsZFwiLFxuICAvLyAgICAgICAgcy0+b3B0X2xlbiwgcy0+c3RhdGljX2xlbikpO1xuXG4gIHJldHVybiBtYXhfYmxpbmRleDtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgdGhlIGhlYWRlciBmb3IgYSBibG9jayB1c2luZyBkeW5hbWljIEh1ZmZtYW4gdHJlZXM6IHRoZSBjb3VudHMsIHRoZVxuICogbGVuZ3RocyBvZiB0aGUgYml0IGxlbmd0aCBjb2RlcywgdGhlIGxpdGVyYWwgdHJlZSBhbmQgdGhlIGRpc3RhbmNlIHRyZWUuXG4gKiBJTiBhc3NlcnRpb246IGxjb2RlcyA+PSAyNTcsIGRjb2RlcyA+PSAxLCBibGNvZGVzID49IDQuXG4gKi9cbmZ1bmN0aW9uIHNlbmRfYWxsX3RyZWVzKHMsIGxjb2RlcywgZGNvZGVzLCBibGNvZGVzKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGludCBsY29kZXMsIGRjb2RlcywgYmxjb2RlczsgLyogbnVtYmVyIG9mIGNvZGVzIGZvciBlYWNoIHRyZWUgKi9cbntcbiAgdmFyIHJhbms7ICAgICAgICAgICAgICAgICAgICAvKiBpbmRleCBpbiBibF9vcmRlciAqL1xuXG4gIC8vQXNzZXJ0IChsY29kZXMgPj0gMjU3ICYmIGRjb2RlcyA+PSAxICYmIGJsY29kZXMgPj0gNCwgXCJub3QgZW5vdWdoIGNvZGVzXCIpO1xuICAvL0Fzc2VydCAobGNvZGVzIDw9IExfQ09ERVMgJiYgZGNvZGVzIDw9IERfQ09ERVMgJiYgYmxjb2RlcyA8PSBCTF9DT0RFUyxcbiAgLy8gICAgICAgIFwidG9vIG1hbnkgY29kZXNcIik7XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuYmwgY291bnRzOiBcIikpO1xuICBzZW5kX2JpdHMocywgbGNvZGVzIC0gMjU3LCA1KTsgLyogbm90ICsyNTUgYXMgc3RhdGVkIGluIGFwcG5vdGUudHh0ICovXG4gIHNlbmRfYml0cyhzLCBkY29kZXMgLSAxLCAgIDUpO1xuICBzZW5kX2JpdHMocywgYmxjb2RlcyAtIDQsICA0KTsgLyogbm90IC0zIGFzIHN0YXRlZCBpbiBhcHBub3RlLnR4dCAqL1xuICBmb3IgKHJhbmsgPSAwOyByYW5rIDwgYmxjb2RlczsgcmFuaysrKSB7XG4gICAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5ibCBjb2RlICUyZCBcIiwgYmxfb3JkZXJbcmFua10pKTtcbiAgICBzZW5kX2JpdHMocywgcy5ibF90cmVlW2JsX29yZGVyW3JhbmtdICogMiArIDFdLyouTGVuKi8sIDMpO1xuICB9XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxuYmwgdHJlZTogc2VudCAlbGRcIiwgcy0+Yml0c19zZW50KSk7XG5cbiAgc2VuZF90cmVlKHMsIHMuZHluX2x0cmVlLCBsY29kZXMgLSAxKTsgLyogbGl0ZXJhbCB0cmVlICovXG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiXFxubGl0IHRyZWU6IHNlbnQgJWxkXCIsIHMtPmJpdHNfc2VudCkpO1xuXG4gIHNlbmRfdHJlZShzLCBzLmR5bl9kdHJlZSwgZGNvZGVzIC0gMSk7IC8qIGRpc3RhbmNlIHRyZWUgKi9cbiAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5kaXN0IHRyZWU6IHNlbnQgJWxkXCIsIHMtPmJpdHNfc2VudCkpO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ2hlY2sgaWYgdGhlIGRhdGEgdHlwZSBpcyBURVhUIG9yIEJJTkFSWSwgdXNpbmcgdGhlIGZvbGxvd2luZyBhbGdvcml0aG06XG4gKiAtIFRFWFQgaWYgdGhlIHR3byBjb25kaXRpb25zIGJlbG93IGFyZSBzYXRpc2ZpZWQ6XG4gKiAgICBhKSBUaGVyZSBhcmUgbm8gbm9uLXBvcnRhYmxlIGNvbnRyb2wgY2hhcmFjdGVycyBiZWxvbmdpbmcgdG8gdGhlXG4gKiAgICAgICBcImJsYWNrIGxpc3RcIiAoMC4uNiwgMTQuLjI1LCAyOC4uMzEpLlxuICogICAgYikgVGhlcmUgaXMgYXQgbGVhc3Qgb25lIHByaW50YWJsZSBjaGFyYWN0ZXIgYmVsb25naW5nIHRvIHRoZVxuICogICAgICAgXCJ3aGl0ZSBsaXN0XCIgKDkge1RBQn0sIDEwIHtMRn0sIDEzIHtDUn0sIDMyLi4yNTUpLlxuICogLSBCSU5BUlkgb3RoZXJ3aXNlLlxuICogLSBUaGUgZm9sbG93aW5nIHBhcnRpYWxseS1wb3J0YWJsZSBjb250cm9sIGNoYXJhY3RlcnMgZm9ybSBhXG4gKiAgIFwiZ3JheSBsaXN0XCIgdGhhdCBpcyBpZ25vcmVkIGluIHRoaXMgZGV0ZWN0aW9uIGFsZ29yaXRobTpcbiAqICAgKDcge0JFTH0sIDgge0JTfSwgMTEge1ZUfSwgMTIge0ZGfSwgMjYge1NVQn0sIDI3IHtFU0N9KS5cbiAqIElOIGFzc2VydGlvbjogdGhlIGZpZWxkcyBGcmVxIG9mIGR5bl9sdHJlZSBhcmUgc2V0LlxuICovXG5mdW5jdGlvbiBkZXRlY3RfZGF0YV90eXBlKHMpIHtcbiAgLyogYmxhY2tfbWFzayBpcyB0aGUgYml0IG1hc2sgb2YgYmxhY2stbGlzdGVkIGJ5dGVzXG4gICAqIHNldCBiaXRzIDAuLjYsIDE0Li4yNSwgYW5kIDI4Li4zMVxuICAgKiAweGYzZmZjMDdmID0gYmluYXJ5IDExMTEwMDExMTExMTExMTExMTAwMDAwMDAxMTExMTExXG4gICAqL1xuICB2YXIgYmxhY2tfbWFzayA9IDB4ZjNmZmMwN2Y7XG4gIHZhciBuO1xuXG4gIC8qIENoZWNrIGZvciBub24tdGV4dHVhbCAoXCJibGFjay1saXN0ZWRcIikgYnl0ZXMuICovXG4gIGZvciAobiA9IDA7IG4gPD0gMzE7IG4rKywgYmxhY2tfbWFzayA+Pj49IDEpIHtcbiAgICBpZiAoKGJsYWNrX21hc2sgJiAxKSAmJiAocy5keW5fbHRyZWVbbiAqIDJdLyouRnJlcSovICE9PSAwKSkge1xuICAgICAgcmV0dXJuIFpfQklOQVJZO1xuICAgIH1cbiAgfVxuXG4gIC8qIENoZWNrIGZvciB0ZXh0dWFsIChcIndoaXRlLWxpc3RlZFwiKSBieXRlcy4gKi9cbiAgaWYgKHMuZHluX2x0cmVlWzkgKiAyXS8qLkZyZXEqLyAhPT0gMCB8fCBzLmR5bl9sdHJlZVsxMCAqIDJdLyouRnJlcSovICE9PSAwIHx8XG4gICAgICBzLmR5bl9sdHJlZVsxMyAqIDJdLyouRnJlcSovICE9PSAwKSB7XG4gICAgcmV0dXJuIFpfVEVYVDtcbiAgfVxuICBmb3IgKG4gPSAzMjsgbiA8IExJVEVSQUxTOyBuKyspIHtcbiAgICBpZiAocy5keW5fbHRyZWVbbiAqIDJdLyouRnJlcSovICE9PSAwKSB7XG4gICAgICByZXR1cm4gWl9URVhUO1xuICAgIH1cbiAgfVxuXG4gIC8qIFRoZXJlIGFyZSBubyBcImJsYWNrLWxpc3RlZFwiIG9yIFwid2hpdGUtbGlzdGVkXCIgYnl0ZXM6XG4gICAqIHRoaXMgc3RyZWFtIGVpdGhlciBpcyBlbXB0eSBvciBoYXMgdG9sZXJhdGVkIChcImdyYXktbGlzdGVkXCIpIGJ5dGVzIG9ubHkuXG4gICAqL1xuICByZXR1cm4gWl9CSU5BUlk7XG59XG5cblxudmFyIHN0YXRpY19pbml0X2RvbmUgPSBmYWxzZTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBJbml0aWFsaXplIHRoZSB0cmVlIGRhdGEgc3RydWN0dXJlcyBmb3IgYSBuZXcgemxpYiBzdHJlYW0uXG4gKi9cbmZ1bmN0aW9uIF90cl9pbml0KHMpXG57XG5cbiAgaWYgKCFzdGF0aWNfaW5pdF9kb25lKSB7XG4gICAgdHJfc3RhdGljX2luaXQoKTtcbiAgICBzdGF0aWNfaW5pdF9kb25lID0gdHJ1ZTtcbiAgfVxuXG4gIHMubF9kZXNjICA9IG5ldyBUcmVlRGVzYyhzLmR5bl9sdHJlZSwgc3RhdGljX2xfZGVzYyk7XG4gIHMuZF9kZXNjICA9IG5ldyBUcmVlRGVzYyhzLmR5bl9kdHJlZSwgc3RhdGljX2RfZGVzYyk7XG4gIHMuYmxfZGVzYyA9IG5ldyBUcmVlRGVzYyhzLmJsX3RyZWUsIHN0YXRpY19ibF9kZXNjKTtcblxuICBzLmJpX2J1ZiA9IDA7XG4gIHMuYmlfdmFsaWQgPSAwO1xuXG4gIC8qIEluaXRpYWxpemUgdGhlIGZpcnN0IGJsb2NrIG9mIHRoZSBmaXJzdCBmaWxlOiAqL1xuICBpbml0X2Jsb2NrKHMpO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCBhIHN0b3JlZCBibG9ja1xuICovXG5mdW5jdGlvbiBfdHJfc3RvcmVkX2Jsb2NrKHMsIGJ1Ziwgc3RvcmVkX2xlbiwgbGFzdClcbi8vRGVmbGF0ZVN0YXRlICpzO1xuLy9jaGFyZiAqYnVmOyAgICAgICAvKiBpbnB1dCBibG9jayAqL1xuLy91bGcgc3RvcmVkX2xlbjsgICAvKiBsZW5ndGggb2YgaW5wdXQgYmxvY2sgKi9cbi8vaW50IGxhc3Q7ICAgICAgICAgLyogb25lIGlmIHRoaXMgaXMgdGhlIGxhc3QgYmxvY2sgZm9yIGEgZmlsZSAqL1xue1xuICBzZW5kX2JpdHMocywgKFNUT1JFRF9CTE9DSyA8PCAxKSArIChsYXN0ID8gMSA6IDApLCAzKTsgICAgLyogc2VuZCBibG9jayB0eXBlICovXG4gIGNvcHlfYmxvY2socywgYnVmLCBzdG9yZWRfbGVuLCB0cnVlKTsgLyogd2l0aCBoZWFkZXIgKi9cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgb25lIGVtcHR5IHN0YXRpYyBibG9jayB0byBnaXZlIGVub3VnaCBsb29rYWhlYWQgZm9yIGluZmxhdGUuXG4gKiBUaGlzIHRha2VzIDEwIGJpdHMsIG9mIHdoaWNoIDcgbWF5IHJlbWFpbiBpbiB0aGUgYml0IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gX3RyX2FsaWduKHMpIHtcbiAgc2VuZF9iaXRzKHMsIFNUQVRJQ19UUkVFUyA8PCAxLCAzKTtcbiAgc2VuZF9jb2RlKHMsIEVORF9CTE9DSywgc3RhdGljX2x0cmVlKTtcbiAgYmlfZmx1c2gocyk7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBEZXRlcm1pbmUgdGhlIGJlc3QgZW5jb2RpbmcgZm9yIHRoZSBjdXJyZW50IGJsb2NrOiBkeW5hbWljIHRyZWVzLCBzdGF0aWNcbiAqIHRyZWVzIG9yIHN0b3JlLCBhbmQgb3V0cHV0IHRoZSBlbmNvZGVkIGJsb2NrIHRvIHRoZSB6aXAgZmlsZS5cbiAqL1xuZnVuY3Rpb24gX3RyX2ZsdXNoX2Jsb2NrKHMsIGJ1Ziwgc3RvcmVkX2xlbiwgbGFzdClcbi8vRGVmbGF0ZVN0YXRlICpzO1xuLy9jaGFyZiAqYnVmOyAgICAgICAvKiBpbnB1dCBibG9jaywgb3IgTlVMTCBpZiB0b28gb2xkICovXG4vL3VsZyBzdG9yZWRfbGVuOyAgIC8qIGxlbmd0aCBvZiBpbnB1dCBibG9jayAqL1xuLy9pbnQgbGFzdDsgICAgICAgICAvKiBvbmUgaWYgdGhpcyBpcyB0aGUgbGFzdCBibG9jayBmb3IgYSBmaWxlICovXG57XG4gIHZhciBvcHRfbGVuYiwgc3RhdGljX2xlbmI7ICAvKiBvcHRfbGVuIGFuZCBzdGF0aWNfbGVuIGluIGJ5dGVzICovXG4gIHZhciBtYXhfYmxpbmRleCA9IDA7ICAgICAgICAvKiBpbmRleCBvZiBsYXN0IGJpdCBsZW5ndGggY29kZSBvZiBub24gemVybyBmcmVxICovXG5cbiAgLyogQnVpbGQgdGhlIEh1ZmZtYW4gdHJlZXMgdW5sZXNzIGEgc3RvcmVkIGJsb2NrIGlzIGZvcmNlZCAqL1xuICBpZiAocy5sZXZlbCA+IDApIHtcblxuICAgIC8qIENoZWNrIGlmIHRoZSBmaWxlIGlzIGJpbmFyeSBvciB0ZXh0ICovXG4gICAgaWYgKHMuc3RybS5kYXRhX3R5cGUgPT09IFpfVU5LTk9XTikge1xuICAgICAgcy5zdHJtLmRhdGFfdHlwZSA9IGRldGVjdF9kYXRhX3R5cGUocyk7XG4gICAgfVxuXG4gICAgLyogQ29uc3RydWN0IHRoZSBsaXRlcmFsIGFuZCBkaXN0YW5jZSB0cmVlcyAqL1xuICAgIGJ1aWxkX3RyZWUocywgcy5sX2Rlc2MpO1xuICAgIC8vIFRyYWNldigoc3RkZXJyLCBcIlxcbmxpdCBkYXRhOiBkeW4gJWxkLCBzdGF0ICVsZFwiLCBzLT5vcHRfbGVuLFxuICAgIC8vICAgICAgICBzLT5zdGF0aWNfbGVuKSk7XG5cbiAgICBidWlsZF90cmVlKHMsIHMuZF9kZXNjKTtcbiAgICAvLyBUcmFjZXYoKHN0ZGVyciwgXCJcXG5kaXN0IGRhdGE6IGR5biAlbGQsIHN0YXQgJWxkXCIsIHMtPm9wdF9sZW4sXG4gICAgLy8gICAgICAgIHMtPnN0YXRpY19sZW4pKTtcbiAgICAvKiBBdCB0aGlzIHBvaW50LCBvcHRfbGVuIGFuZCBzdGF0aWNfbGVuIGFyZSB0aGUgdG90YWwgYml0IGxlbmd0aHMgb2ZcbiAgICAgKiB0aGUgY29tcHJlc3NlZCBibG9jayBkYXRhLCBleGNsdWRpbmcgdGhlIHRyZWUgcmVwcmVzZW50YXRpb25zLlxuICAgICAqL1xuXG4gICAgLyogQnVpbGQgdGhlIGJpdCBsZW5ndGggdHJlZSBmb3IgdGhlIGFib3ZlIHR3byB0cmVlcywgYW5kIGdldCB0aGUgaW5kZXhcbiAgICAgKiBpbiBibF9vcmRlciBvZiB0aGUgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgdG8gc2VuZC5cbiAgICAgKi9cbiAgICBtYXhfYmxpbmRleCA9IGJ1aWxkX2JsX3RyZWUocyk7XG5cbiAgICAvKiBEZXRlcm1pbmUgdGhlIGJlc3QgZW5jb2RpbmcuIENvbXB1dGUgdGhlIGJsb2NrIGxlbmd0aHMgaW4gYnl0ZXMuICovXG4gICAgb3B0X2xlbmIgPSAocy5vcHRfbGVuICsgMyArIDcpID4+PiAzO1xuICAgIHN0YXRpY19sZW5iID0gKHMuc3RhdGljX2xlbiArIDMgKyA3KSA+Pj4gMztcblxuICAgIC8vIFRyYWNldigoc3RkZXJyLCBcIlxcbm9wdCAlbHUoJWx1KSBzdGF0ICVsdSglbHUpIHN0b3JlZCAlbHUgbGl0ICV1IFwiLFxuICAgIC8vICAgICAgICBvcHRfbGVuYiwgcy0+b3B0X2xlbiwgc3RhdGljX2xlbmIsIHMtPnN0YXRpY19sZW4sIHN0b3JlZF9sZW4sXG4gICAgLy8gICAgICAgIHMtPmxhc3RfbGl0KSk7XG5cbiAgICBpZiAoc3RhdGljX2xlbmIgPD0gb3B0X2xlbmIpIHsgb3B0X2xlbmIgPSBzdGF0aWNfbGVuYjsgfVxuXG4gIH0gZWxzZSB7XG4gICAgLy8gQXNzZXJ0KGJ1ZiAhPSAoY2hhciopMCwgXCJsb3N0IGJ1ZlwiKTtcbiAgICBvcHRfbGVuYiA9IHN0YXRpY19sZW5iID0gc3RvcmVkX2xlbiArIDU7IC8qIGZvcmNlIGEgc3RvcmVkIGJsb2NrICovXG4gIH1cblxuICBpZiAoKHN0b3JlZF9sZW4gKyA0IDw9IG9wdF9sZW5iKSAmJiAoYnVmICE9PSAtMSkpIHtcbiAgICAvKiA0OiB0d28gd29yZHMgZm9yIHRoZSBsZW5ndGhzICovXG5cbiAgICAvKiBUaGUgdGVzdCBidWYgIT0gTlVMTCBpcyBvbmx5IG5lY2Vzc2FyeSBpZiBMSVRfQlVGU0laRSA+IFdTSVpFLlxuICAgICAqIE90aGVyd2lzZSB3ZSBjYW4ndCBoYXZlIHByb2Nlc3NlZCBtb3JlIHRoYW4gV1NJWkUgaW5wdXQgYnl0ZXMgc2luY2VcbiAgICAgKiB0aGUgbGFzdCBibG9jayBmbHVzaCwgYmVjYXVzZSBjb21wcmVzc2lvbiB3b3VsZCBoYXZlIGJlZW5cbiAgICAgKiBzdWNjZXNzZnVsLiBJZiBMSVRfQlVGU0laRSA8PSBXU0laRSwgaXQgaXMgbmV2ZXIgdG9vIGxhdGUgdG9cbiAgICAgKiB0cmFuc2Zvcm0gYSBibG9jayBpbnRvIGEgc3RvcmVkIGJsb2NrLlxuICAgICAqL1xuICAgIF90cl9zdG9yZWRfYmxvY2socywgYnVmLCBzdG9yZWRfbGVuLCBsYXN0KTtcblxuICB9IGVsc2UgaWYgKHMuc3RyYXRlZ3kgPT09IFpfRklYRUQgfHwgc3RhdGljX2xlbmIgPT09IG9wdF9sZW5iKSB7XG5cbiAgICBzZW5kX2JpdHMocywgKFNUQVRJQ19UUkVFUyA8PCAxKSArIChsYXN0ID8gMSA6IDApLCAzKTtcbiAgICBjb21wcmVzc19ibG9jayhzLCBzdGF0aWNfbHRyZWUsIHN0YXRpY19kdHJlZSk7XG5cbiAgfSBlbHNlIHtcbiAgICBzZW5kX2JpdHMocywgKERZTl9UUkVFUyA8PCAxKSArIChsYXN0ID8gMSA6IDApLCAzKTtcbiAgICBzZW5kX2FsbF90cmVlcyhzLCBzLmxfZGVzYy5tYXhfY29kZSArIDEsIHMuZF9kZXNjLm1heF9jb2RlICsgMSwgbWF4X2JsaW5kZXggKyAxKTtcbiAgICBjb21wcmVzc19ibG9jayhzLCBzLmR5bl9sdHJlZSwgcy5keW5fZHRyZWUpO1xuICB9XG4gIC8vIEFzc2VydCAocy0+Y29tcHJlc3NlZF9sZW4gPT0gcy0+Yml0c19zZW50LCBcImJhZCBjb21wcmVzc2VkIHNpemVcIik7XG4gIC8qIFRoZSBhYm92ZSBjaGVjayBpcyBtYWRlIG1vZCAyXjMyLCBmb3IgZmlsZXMgbGFyZ2VyIHRoYW4gNTEyIE1CXG4gICAqIGFuZCB1TG9uZyBpbXBsZW1lbnRlZCBvbiAzMiBiaXRzLlxuICAgKi9cbiAgaW5pdF9ibG9jayhzKTtcblxuICBpZiAobGFzdCkge1xuICAgIGJpX3dpbmR1cChzKTtcbiAgfVxuICAvLyBUcmFjZXYoKHN0ZGVycixcIlxcbmNvbXBybGVuICVsdSglbHUpIFwiLCBzLT5jb21wcmVzc2VkX2xlbj4+MyxcbiAgLy8gICAgICAgcy0+Y29tcHJlc3NlZF9sZW4tNypsYXN0KSk7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2F2ZSB0aGUgbWF0Y2ggaW5mbyBhbmQgdGFsbHkgdGhlIGZyZXF1ZW5jeSBjb3VudHMuIFJldHVybiB0cnVlIGlmXG4gKiB0aGUgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQuXG4gKi9cbmZ1bmN0aW9uIF90cl90YWxseShzLCBkaXN0LCBsYylcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICB1bnNpZ25lZCBkaXN0OyAgLyogZGlzdGFuY2Ugb2YgbWF0Y2hlZCBzdHJpbmcgKi9cbi8vICAgIHVuc2lnbmVkIGxjOyAgICAvKiBtYXRjaCBsZW5ndGgtTUlOX01BVENIIG9yIHVubWF0Y2hlZCBjaGFyIChpZiBkaXN0PT0wKSAqL1xue1xuICAvL3ZhciBvdXRfbGVuZ3RoLCBpbl9sZW5ndGgsIGRjb2RlO1xuXG4gIHMucGVuZGluZ19idWZbcy5kX2J1ZiArIHMubGFzdF9saXQgKiAyXSAgICAgPSAoZGlzdCA+Pj4gOCkgJiAweGZmO1xuICBzLnBlbmRpbmdfYnVmW3MuZF9idWYgKyBzLmxhc3RfbGl0ICogMiArIDFdID0gZGlzdCAmIDB4ZmY7XG5cbiAgcy5wZW5kaW5nX2J1ZltzLmxfYnVmICsgcy5sYXN0X2xpdF0gPSBsYyAmIDB4ZmY7XG4gIHMubGFzdF9saXQrKztcblxuICBpZiAoZGlzdCA9PT0gMCkge1xuICAgIC8qIGxjIGlzIHRoZSB1bm1hdGNoZWQgY2hhciAqL1xuICAgIHMuZHluX2x0cmVlW2xjICogMl0vKi5GcmVxKi8rKztcbiAgfSBlbHNlIHtcbiAgICBzLm1hdGNoZXMrKztcbiAgICAvKiBIZXJlLCBsYyBpcyB0aGUgbWF0Y2ggbGVuZ3RoIC0gTUlOX01BVENIICovXG4gICAgZGlzdC0tOyAgICAgICAgICAgICAvKiBkaXN0ID0gbWF0Y2ggZGlzdGFuY2UgLSAxICovXG4gICAgLy9Bc3NlcnQoKHVzaClkaXN0IDwgKHVzaClNQVhfRElTVChzKSAmJlxuICAgIC8vICAgICAgICh1c2gpbGMgPD0gKHVzaCkoTUFYX01BVENILU1JTl9NQVRDSCkgJiZcbiAgICAvLyAgICAgICAodXNoKWRfY29kZShkaXN0KSA8ICh1c2gpRF9DT0RFUywgIFwiX3RyX3RhbGx5OiBiYWQgbWF0Y2hcIik7XG5cbiAgICBzLmR5bl9sdHJlZVsoX2xlbmd0aF9jb2RlW2xjXSArIExJVEVSQUxTICsgMSkgKiAyXS8qLkZyZXEqLysrO1xuICAgIHMuZHluX2R0cmVlW2RfY29kZShkaXN0KSAqIDJdLyouRnJlcSovKys7XG4gIH1cblxuLy8gKCEpIFRoaXMgYmxvY2sgaXMgZGlzYWJsZWQgaW4gemxpYiBkZWZhdWx0cyxcbi8vIGRvbid0IGVuYWJsZSBpdCBmb3IgYmluYXJ5IGNvbXBhdGliaWxpdHlcblxuLy8jaWZkZWYgVFJVTkNBVEVfQkxPQ0tcbi8vICAvKiBUcnkgdG8gZ3Vlc3MgaWYgaXQgaXMgcHJvZml0YWJsZSB0byBzdG9wIHRoZSBjdXJyZW50IGJsb2NrIGhlcmUgKi9cbi8vICBpZiAoKHMubGFzdF9saXQgJiAweDFmZmYpID09PSAwICYmIHMubGV2ZWwgPiAyKSB7XG4vLyAgICAvKiBDb21wdXRlIGFuIHVwcGVyIGJvdW5kIGZvciB0aGUgY29tcHJlc3NlZCBsZW5ndGggKi9cbi8vICAgIG91dF9sZW5ndGggPSBzLmxhc3RfbGl0Kjg7XG4vLyAgICBpbl9sZW5ndGggPSBzLnN0cnN0YXJ0IC0gcy5ibG9ja19zdGFydDtcbi8vXG4vLyAgICBmb3IgKGRjb2RlID0gMDsgZGNvZGUgPCBEX0NPREVTOyBkY29kZSsrKSB7XG4vLyAgICAgIG91dF9sZW5ndGggKz0gcy5keW5fZHRyZWVbZGNvZGUqMl0vKi5GcmVxKi8gKiAoNSArIGV4dHJhX2RiaXRzW2Rjb2RlXSk7XG4vLyAgICB9XG4vLyAgICBvdXRfbGVuZ3RoID4+Pj0gMztcbi8vICAgIC8vVHJhY2V2KChzdGRlcnIsXCJcXG5sYXN0X2xpdCAldSwgaW4gJWxkLCBvdXQgfiVsZCglbGQlJSkgXCIsXG4vLyAgICAvLyAgICAgICBzLT5sYXN0X2xpdCwgaW5fbGVuZ3RoLCBvdXRfbGVuZ3RoLFxuLy8gICAgLy8gICAgICAgMTAwTCAtIG91dF9sZW5ndGgqMTAwTC9pbl9sZW5ndGgpKTtcbi8vICAgIGlmIChzLm1hdGNoZXMgPCAocy5sYXN0X2xpdD4+MSkvKmludCAvMiovICYmIG91dF9sZW5ndGggPCAoaW5fbGVuZ3RoPj4xKS8qaW50IC8yKi8pIHtcbi8vICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICB9XG4vLyAgfVxuLy8jZW5kaWZcblxuICByZXR1cm4gKHMubGFzdF9saXQgPT09IHMubGl0X2J1ZnNpemUgLSAxKTtcbiAgLyogV2UgYXZvaWQgZXF1YWxpdHkgd2l0aCBsaXRfYnVmc2l6ZSBiZWNhdXNlIG9mIHdyYXBhcm91bmQgYXQgNjRLXG4gICAqIG9uIDE2IGJpdCBtYWNoaW5lcyBhbmQgYmVjYXVzZSBzdG9yZWQgYmxvY2tzIGFyZSByZXN0cmljdGVkIHRvXG4gICAqIDY0Sy0xIGJ5dGVzLlxuICAgKi9cbn1cblxuZXhwb3J0cy5fdHJfaW5pdCAgPSBfdHJfaW5pdDtcbmV4cG9ydHMuX3RyX3N0b3JlZF9ibG9jayA9IF90cl9zdG9yZWRfYmxvY2s7XG5leHBvcnRzLl90cl9mbHVzaF9ibG9jayAgPSBfdHJfZmx1c2hfYmxvY2s7XG5leHBvcnRzLl90cl90YWxseSA9IF90cl90YWxseTtcbmV4cG9ydHMuX3RyX2FsaWduID0gX3RyX2FsaWduO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbmZ1bmN0aW9uIFpTdHJlYW0oKSB7XG4gIC8qIG5leHQgaW5wdXQgYnl0ZSAqL1xuICB0aGlzLmlucHV0ID0gbnVsbDsgLy8gSlMgc3BlY2lmaWMsIGJlY2F1c2Ugd2UgaGF2ZSBubyBwb2ludGVyc1xuICB0aGlzLm5leHRfaW4gPSAwO1xuICAvKiBudW1iZXIgb2YgYnl0ZXMgYXZhaWxhYmxlIGF0IGlucHV0ICovXG4gIHRoaXMuYXZhaWxfaW4gPSAwO1xuICAvKiB0b3RhbCBudW1iZXIgb2YgaW5wdXQgYnl0ZXMgcmVhZCBzbyBmYXIgKi9cbiAgdGhpcy50b3RhbF9pbiA9IDA7XG4gIC8qIG5leHQgb3V0cHV0IGJ5dGUgc2hvdWxkIGJlIHB1dCB0aGVyZSAqL1xuICB0aGlzLm91dHB1dCA9IG51bGw7IC8vIEpTIHNwZWNpZmljLCBiZWNhdXNlIHdlIGhhdmUgbm8gcG9pbnRlcnNcbiAgdGhpcy5uZXh0X291dCA9IDA7XG4gIC8qIHJlbWFpbmluZyBmcmVlIHNwYWNlIGF0IG91dHB1dCAqL1xuICB0aGlzLmF2YWlsX291dCA9IDA7XG4gIC8qIHRvdGFsIG51bWJlciBvZiBieXRlcyBvdXRwdXQgc28gZmFyICovXG4gIHRoaXMudG90YWxfb3V0ID0gMDtcbiAgLyogbGFzdCBlcnJvciBtZXNzYWdlLCBOVUxMIGlmIG5vIGVycm9yICovXG4gIHRoaXMubXNnID0gJycvKlpfTlVMTCovO1xuICAvKiBub3QgdmlzaWJsZSBieSBhcHBsaWNhdGlvbnMgKi9cbiAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gIC8qIGJlc3QgZ3Vlc3MgYWJvdXQgdGhlIGRhdGEgdHlwZTogYmluYXJ5IG9yIHRleHQgKi9cbiAgdGhpcy5kYXRhX3R5cGUgPSAyLypaX1VOS05PV04qLztcbiAgLyogYWRsZXIzMiB2YWx1ZSBvZiB0aGUgdW5jb21wcmVzc2VkIGRhdGEgKi9cbiAgdGhpcy5hZGxlciA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWlN0cmVhbTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQgeyBSZWZlcmVuY2VQb2ludGVyLCBQREZEb2N1bWVudFBhcnNlciwgUGFnZSwgQW5ub3RhdGlvbiwgQm9yZGVyLCBDb2xvciB9IGZyb20gJy4vcGFyc2VyJ1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IFdyaXRlciB9IGZyb20gJy4vd3JpdGVyJ1xuXG4vKipcbiAqIFRoZSBhbm5vdGF0aW9uIGZhY3RvcnkgcHJvdmlkZXMgbWV0aG9kcyB0byBjcmVhdGUgYW5ub3RhdGlvbnMuIFRob3NlIGFyZSBzdG9yZWQgdGVtcG9yYXJ5XG4gKiBhbmQgdGhhbiBlbmNvZGVkIGludG8gUERGIGNvZGUgd2hlbiB0aGUgUERGIGRvY3VtZW50IGlzIG91dHB1dHRlZCBhbmQgZm9yIGluc3RhbmNlIGRvd25sb2FkZWQuXG4gKiBUaGF0XG4gKiAqL1xuZXhwb3J0IGNsYXNzIEFubm90YXRpb25GYWN0b3J5IHtcbiAgICBwcml2YXRlIGFubm90YXRpb25zOiBBbm5vdGF0aW9uW10gPSBbXVxuXG4gICAgcHJpdmF0ZSB0b0RlbGV0ZTogQW5ub3RhdGlvbltdID0gW11cblxuICAgIHByaXZhdGUgcGFyc2VyOiBQREZEb2N1bWVudFBhcnNlclxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBuZXcgUERGRG9jdW1lbnRQYXJzZXIodGhpcy5kYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBhbm5vdGF0aW9ucyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFBERiBkb2N1bWVudFxuICAgICAqICovXG4gICAgZ2V0QW5ub3RhdGlvbkNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFubm90YXRpb25zLmxlbmd0aFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgYSBQREYgZmlsZSByZWZlcmVuY2VkIGJ5IHRoZSBnaXZlbiAncGF0aCdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxBbm5vdGF0aW9uRmFjdG9yeT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QW5ub3RhdGlvbkZhY3Rvcnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gYnJvd3NlciBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIGZldGNoKHBhdGgpLnRoZW4oKHIpID0+IHIuYmxvYigpKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXI6IGFueSA9IG5ldyBGaWxlUmVhZGVyKClcblxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQW5ub3RhdGlvbkZhY3RvcnkocmVhZGVyLnJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpIHsgLy8gbm9kZSBlbnZpcm9ubWVudFxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm90IHlldCBpbXBsZW1lbnRlZFwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlVuc3VwcG9ydGVkIGVudmlyb25tZW50XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgdW5pcXVlIGlkZW50aWZpZXIgbmVjZXNzYXJ5IGZvciBjcmVhdGluZyB0aGUgYW5ub3RhdGlvblxuICAgICAqICovXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVVuaXF1ZUlkZW50aWZpZXIoKSB7XG4gICAgICAgIHJldHVybiBcIihwZGZBbm5vdGF0ZS1cIiArIFV0aWwuY29udmVydERhdGVUb1BERkRhdGUobmV3IERhdGUoKSkuc2xpY2UoMywgMTcpICsgXCItXCIgKyB0aGlzLmFubm90YXRpb25zLmxlbmd0aCArIFwiKVwiXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgZGVmYXVsdCBib3JkZXJcbiAgICAgKiAqL1xuICAgIHByaXZhdGUgY3JlYXRlRGVmYXVsdEJvcmRlcigpOiBCb3JkZXIge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVydGljYWxfY29ybmVyX3JhZGl1czogMCxcbiAgICAgICAgICAgIGhvcml6b250YWxfY29ybmVyX3JhZGl1czogMCxcbiAgICAgICAgICAgIGJvcmRlcl93aWR0aDogMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSBtYWRlIGFubm90YXRpb25zIGludG8gYSBieXRlc3RyZWFtXG4gICAgICogKi9cbiAgICB3cml0ZSgpOiBVaW50OEFycmF5IHtcbiAgICAgICAgaWYgKHRoaXMuYW5ub3RhdGlvbnMubGVuZ3RoID09PSAwICYmIHRoaXMudG9EZWxldGUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuXG4gICAgICAgIGxldCB3cml0ZXI6IFdyaXRlciA9IG5ldyBXcml0ZXIodGhpcy5kYXRhLCB0aGlzLmFubm90YXRpb25zLCB0aGlzLnRvRGVsZXRlLCB0aGlzLnBhcnNlcilcblxuICAgICAgICByZXR1cm4gd3JpdGVyLndyaXRlKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdGhlICdyZWN0JyBwYXJhbWV0ZXIsIHdoZXRoZXIgYWxsIHRoZSBlbnRyaWVzIGFyZSBvZiB0eXBlIG51bWJlciBhbmQgaWYgdGhlIHRoZSBudW1iZXIgb2YgZW50cmllcyBpcyBjb3JyZWN0XG4gICAgICogKi9cbiAgICBwcml2YXRlIGNoZWNrUmVjdChucjogbnVtYmVyLCByZWN0OiBudW1iZXJbXSkge1xuICAgICAgICBpZiAocmVjdC5sZW5ndGggIT09IG5yKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJSZWN0IGhhcyBpbnZhbGlkIG51bWJlciBvZiBlbnRyaWVzOiBcIiArIHJlY3QgKyBcIiBoYXMgXCIgKyByZWN0Lmxlbmd0aCArIFwiIGVudHJpZXMsIGJ1dCBzaG91bGQgaGF2ZSBcIiArIG5yICsgXCIgZW50cmllc1wiKVxuXG4gICAgICAgIHJlY3QuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgYSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlJlY3QgXCIgKyByZWN0ICsgXCIgaGFzIGludmFsaWQgZW50cnk6IFwiICsgYSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcmVjdGFuZ3VsYXIgaHVsbCBmcm9tIGEgcXVhZFBvaW50IGRlZmluaXRpb25cbiAgICAgKiAqL1xuICAgIHByaXZhdGUgZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHhfdmFsdWVzID0gcXVhZFBvaW50cy5maWx0ZXIoKGVsZW1lbnQsIGluZGV4KSA9PiBpbmRleCAlIDIgPT09IDApXG4gICAgICAgIGxldCB5X3ZhbHVlcyA9IHF1YWRQb2ludHMuZmlsdGVyKChlbGVtZW50LCBpbmRleCkgPT4gaW5kZXggJSAyICE9PSAwKVxuXG4gICAgICAgIHJldHVybiBbTWF0aC5taW4oLi4ueF92YWx1ZXMpLCBNYXRoLm1pbiguLi55X3ZhbHVlcyksIE1hdGgubWF4KC4uLnhfdmFsdWVzKSwgTWF0aC5tYXgoLi4ueV92YWx1ZXMpXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgJ3F1YWRQb2ludHMnIHBhcmFtZXRlclxuICAgICAqICovXG4gICAgcHJpdmF0ZSBjaGVja1F1YWRQb2ludHMocXVhZFBvaW50czogbnVtYmVyW10pIHtcbiAgICAgICAgaWYgKHF1YWRQb2ludHMubGVuZ3RoICUgOCAhPT0gMClcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBRdWFkcG9pbnRzIGFycmF5IGhhcyBsZW5ndGggJHtxdWFkUG9pbnRzLmxlbmd0aH0gYnV0IG11c3QgYmUgYSBtdWx0aXBsZSBvZiA4YClcblxuICAgICAgICBxdWFkUG9pbnRzLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIGEpXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJRdWFkcG9pbnQgXCIgKyBxdWFkUG9pbnRzICsgXCIgaGFzIGludmFsaWQgZW50cnk6IFwiICsgYSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYmFzZSBhbm5vdGF0aW9uIHRoYXQgbWVhbiB0aGUgcmF3IG9iamVjdCBvZiBhbm5vdGF0aW9uIG9yIHRob3NlIHBhcnRzIHRoYXQgYXJlIGFsbCBleGlzdGluZ1xuICAgICAqIGFuZCBlcXVhbGx5IHNldCBpbiBhbGwgdHlwZXMgb2YgYW5ub3RhdGlvbnNcbiAgICAgKiAqL1xuICAgIGNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nKTogQW5ub3RhdGlvbiB7XG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IG5ldyBBbm5vdGF0aW9uKClcbiAgICAgICAgYW5ub3QudHlwZSA9IFwiL0Fubm90XCIsXG4gICAgICAgICAgICBhbm5vdC5wYWdlID0gcGFnZSxcbiAgICAgICAgICAgIGFubm90Lm9iamVjdF9pZCA9IHRoaXMucGFyc2VyLmdldEZyZWVPYmplY3RJZCgpLFxuICAgICAgICAgICAgYW5ub3QuaWQgPSB0aGlzLmdlbmVyYXRlVW5pcXVlSWRlbnRpZmllcigpLFxuICAgICAgICAgICAgYW5ub3QucmVjdCA9IHJlY3QsXG4gICAgICAgICAgICBhbm5vdC5hdXRob3IgPSBhdXRob3IsXG4gICAgICAgICAgICBhbm5vdC5wYWdlUmVmZXJlbmNlID0gdGhpcy5wYXJzZXIuZ2V0UGFnZShwYWdlKSxcbiAgICAgICAgICAgIGFubm90LnVwZGF0ZURhdGUgPSBVdGlsLmNvbnZlcnREYXRlVG9QREZEYXRlKG5ldyBEYXRlKCkpLFxuICAgICAgICAgICAgYW5ub3QuY29udGVudHMgPSBjb250ZW50cyxcbiAgICAgICAgICAgIGFubm90LmJvcmRlciA9IHRoaXMuY3JlYXRlRGVmYXVsdEJvcmRlcigpXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRleHQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVUZXh0QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgaWYgKCFjb250ZW50cylcbiAgICAgICAgICAgIGNvbnRlbnRzID0gXCJcIlxuXG4gICAgICAgIGlmICghYXV0aG9yKVxuICAgICAgICAgICAgYXV0aG9yID0gXCJcIlxuXG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yXG5cbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gXCIvVGV4dFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB0ZXh0IG1hcmt1cCBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogc3VidHlwZSA6IHRoZSBzdWJ0eXBlIG9mIHRoZSBUZXh0bWFya3VwIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHN1YnR5cGU6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pOiBBbm5vdGF0aW9uIHtcblxuICAgICAgICBpZiAoMCA9PT0gcXVhZFBvaW50cy5sZW5ndGgpXG4gICAgICAgICAgICBxdWFkUG9pbnRzID0gW3JlY3RbMF0sIHJlY3RbM10sIHJlY3RbMl0sIHJlY3RbM10sIHJlY3RbMF0sIHJlY3RbMV0sIHJlY3RbMl0sIHJlY3RbMV1dXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHF1YWRQb2ludHM6IHF1YWRQb2ludHNcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gc3VidHlwZVxuXG4gICAgICAgIHJldHVybiBhbm5vdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBoaWdobGlnaHQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVIaWdobGlnaHRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSwgcXVhZFBvaW50czogbnVtYmVyW10gPSBbXSkge1xuICAgICAgICB0aGlzLmNoZWNrUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuXG4gICAgICAgIGlmIChyZWN0Lmxlbmd0aCA9PT0gMCAmJiBxdWFkUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlY3QgPSB0aGlzLmV4dHJhY3RSZWN0RnJvbVF1YWRQb2ludHMocXVhZFBvaW50cylcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvSGlnaGxpZ2h0XCIsIGNvbG9yLCBxdWFkUG9pbnRzKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIHVuZGVybGluZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVVuZGVybGluZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9LCBxdWFkUG9pbnRzOiBudW1iZXJbXSA9IFtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFkUG9pbnRzKHF1YWRQb2ludHMpXG5cbiAgICAgICAgaWYgKHJlY3QubGVuZ3RoID09PSAwICYmIHF1YWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvVW5kZXJsaW5lXCIsIGNvbG9yLCBxdWFkUG9pbnRzKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3F1aWdnbGUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVTcXVpZ2dseUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9LCBxdWFkUG9pbnRzOiBudW1iZXJbXSA9IFtdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tRdWFkUG9pbnRzKHF1YWRQb2ludHMpXG5cbiAgICAgICAgaWYgKHJlY3QubGVuZ3RoID09PSAwICYmIHF1YWRQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZXh0cmFjdFJlY3RGcm9tUXVhZFBvaW50cyhxdWFkUG9pbnRzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdCA9IHRoaXMuY3JlYXRlVGV4dE1hcmt1cEFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvU3F1aWdnbHlcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzdHJpa2Ugb3V0IGFubm90YXRpb25cbiAgICAgKiBwYWdlIDogdGhlIG51bWJlciBvZiB0aGUgUERGIGRvY3VtZW50IHBhZ2UsIHdoZXJlIHRoZSBhbm5vdGF0aW9uIG11c3QgYmUgYXR0YWNoZWRcbiAgICAgKiByZWN0IDogdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uIG9uIHRoZSBwYWdlXG4gICAgICogY29udGVudHMgOiB0aGUgY29udGVudCBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGF1dGhvciA6IHRoZSBhdXRob3Igb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3RyaWtlT3V0QW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0sIHF1YWRQb2ludHM6IG51bWJlcltdID0gW10pIHtcbiAgICAgICAgdGhpcy5jaGVja1F1YWRQb2ludHMocXVhZFBvaW50cylcblxuICAgICAgICBpZiAocmVjdC5sZW5ndGggPT09IDAgJiYgcXVhZFBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWN0ID0gdGhpcy5leHRyYWN0UmVjdEZyb21RdWFkUG9pbnRzKHF1YWRQb2ludHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1JlY3QoNCwgcmVjdClcbiAgICAgICAgbGV0IGFubm90ID0gdGhpcy5jcmVhdGVUZXh0TWFya3VwQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TdHJpa2VPdXRcIiwgY29sb3IsIHF1YWRQb2ludHMpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBmcmVlIHRleHQgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVGcmVlVGV4dEFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwicmlnaHQtanVzdGlmaWVkXCIsXG4gICAgICAgICAgICBkZWZhdWx0QXBwZWFyYW5jZTogXCIvSW52YWxpZF9mb250IDkgVGZcIlxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9GcmVlVGV4dFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIGNyZWF0ZUxpbmVBbm5vdGF0aW9uKCkge1xuICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHlldCBpbXBsZW1lbnRlZFwiKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJhc2UgYW5ub3RhdGlvbiBvYmplY3Qgb2YgYSBjaXJjbGUgYW5kIHNxdWFyZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVNxdWFyZUNpcmNsZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHN1YnR5cGU6IHN0cmluZywgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pOiBBbm5vdGF0aW9uIHtcblxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIHJlY3QsIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gc3VidHlwZVxuXG4gICAgICAgIHJldHVybiBhbm5vdFxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNxdWFyZSBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVNxdWFyZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlU3F1YXJlQ2lyY2xlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCBcIi9TcXVhcmVcIiwgY29sb3IpXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjaXJjbGUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIGNvbG9yIDogdGhlIGNvbG9yIG9mIHRoZSBhbm5vdGF0aW9uIGluIHJnYi4gQ2FuIGJlIG9mIGRvbWFpbiAwIC0gMjU1IG9yIDAgLSAxXG4gICAgICogKi9cbiAgICBjcmVhdGVDaXJjbGVBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSB0aGlzLmNyZWF0ZVNxdWFyZUNpcmNsZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgXCIvQ2lyY2xlXCIsIGNvbG9yKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBiYXNlIG9iamVjdCBvZiBhIHBvbHlnb24gb3IgcG9seWxpbmUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIHZlcnRpY2VzIDogdGhlIHZlcnRpY2VzIGRlZmluaW5nIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgb2JqZWN0XG4gICAgICogc3VidHlwOiBQb2x5Z29uIG9yIFBvbHlMaW5lXG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVBvbHlnb25Qb2x5TGluZUFubm90YXRpb24ocGFnZTogbnVtYmVyLCByZWN0OiBudW1iZXJbXSwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHZlcnRpY2VzOiBudW1iZXJbXSwgc3VidHlwZTogc3RyaW5nLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSk6IEFubm90YXRpb24ge1xuXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY3JlYXRlQmFzZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIHZlcnRpY2VzOiB2ZXJ0aWNlc1xuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBzdWJ0eXBlXG5cbiAgICAgICAgcmV0dXJuIGFubm90XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHBvbHlnb24gYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIHZlcnRpY2VzIDogdGhlIHZlcnRpY2VzIGRlZmluaW5nIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgb2JqZWN0XG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVBvbHlnb25Bbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgcmVjdDogbnVtYmVyW10sIGNvbnRlbnRzOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCB2ZXJ0aWNlczogbnVtYmVyW10sIGNvbG9yOiBDb2xvciA9IHsgcjogMSwgZzogMSwgYjogMCB9KSB7XG4gICAgICAgIHRoaXMuY2hlY2tSZWN0KDQsIHJlY3QpXG4gICAgICAgIGxldCBhbm5vdDogQW5ub3RhdGlvbiA9IHRoaXMuY3JlYXRlUG9seWdvblBvbHlMaW5lQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yLCB2ZXJ0aWNlcywgXCIvUG9seWdvblwiLCBjb2xvcilcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcG9seWxpbmUgYW5ub3RhdGlvblxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIHJlY3QgOiB0aGUgcG9zaXRpb24gb2YgdGhlIGFubm90YXRpb24gb24gdGhlIHBhZ2VcbiAgICAgKiBjb250ZW50cyA6IHRoZSBjb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogYXV0aG9yIDogdGhlIGF1dGhvciBvZiB0aGUgYW5ub3RhdGlvblxuICAgICAqIHZlcnRpY2VzIDogdGhlIHZlcnRpY2VzIGRlZmluaW5nIHRoZSBhcnJhbmdlbWVudCBvZiB0aGUgb2JqZWN0XG4gICAgICogY29sb3IgOiB0aGUgY29sb3Igb2YgdGhlIGFubm90YXRpb24gaW4gcmdiLiBDYW4gYmUgb2YgZG9tYWluIDAgLSAyNTUgb3IgMCAtIDFcbiAgICAgKiAqL1xuICAgIGNyZWF0ZVBvbHlMaW5lQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgdmVydGljZXM6IG51bWJlcltdLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICB0aGlzLmNoZWNrUmVjdCg0LCByZWN0KVxuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSB0aGlzLmNyZWF0ZVBvbHlnb25Qb2x5TGluZUFubm90YXRpb24ocGFnZSwgcmVjdCwgY29udGVudHMsIGF1dGhvciwgdmVydGljZXMsIFwiL1BvbHlMaW5lXCIsIGNvbG9yKVxuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbnMucHVzaChhbm5vdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluayBhbm5vdGF0aW9uXG4gICAgICogcGFnZSA6IHRoZSBudW1iZXIgb2YgdGhlIFBERiBkb2N1bWVudCBwYWdlLCB3aGVyZSB0aGUgYW5ub3RhdGlvbiBtdXN0IGJlIGF0dGFjaGVkXG4gICAgICogcmVjdCA6IHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbiBvbiB0aGUgcGFnZVxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogaW5rTGlzdCA6IGEgbGlzdCBvZiBsaXN0IGNvbnRhaW5pbmcgdGhlIHBvaW50cyBmb3IgZHJhd2luZyB0aGUgbGluZXNcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlSW5rQW5ub3RhdGlvbihwYWdlOiBudW1iZXIsIHJlY3Q6IG51bWJlcltdLCBjb250ZW50czogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgaW5rTGlzdDogbnVtYmVyW11bXSB8IG51bWJlcltdLCBjb2xvcjogQ29sb3IgPSB7IHI6IDAsIGc6IDEsIGI6IDAgfSkge1xuXG4gICAgICAgIGlmIChpbmtMaXN0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW5rTGlzdCBpcyBlbXB0eVwiKVxuXG4gICAgICAgIGxldCBfaW5rTGlzdDogYW55ID0gW11cbiAgICAgICAgaWYgKCdudW1iZXInID09PSB0eXBlb2YgaW5rTGlzdFswXSkge1xuICAgICAgICAgICAgX2lua0xpc3QgPSBbaW5rTGlzdF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9pbmtMaXN0ID0gaW5rTGlzdFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCByZWN0LCBjb250ZW50cywgYXV0aG9yKSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgYW5ub3RhdGlvbl9mbGFnOiA0LFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgaW5rTGlzdDogX2lua0xpc3RcbiAgICAgICAgfSlcblxuICAgICAgICBhbm5vdC50eXBlID0gXCIvSW5rXCJcblxuICAgICAgICB0aGlzLmFubm90YXRpb25zLnB1c2goYW5ub3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN0YW1wIGFubm90YXRpb24uIFRoZXJlIGV4aXN0cyBhIG51bWJlciBvZiBwcmVkaWZpbmVkIHN0YW1wcyB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byBQREYgZG9jdW1lbnRzLlxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogc3RhbXBUeXBlIDogdGhlIG5hbWUgb2YgdGhlIHVzZWQgc3RhbXAgdHlwZS4gQ2FuIGJlOiBbQXBwcm92ZWQsIEV4cGVyaW1lbnRhbCwgTm90QXBwcm92ZWQsIEFzSXMsIEV4cGlyZWQsIE5vdEZvclB1YmxpY1JlbGVhc2UsIENvbmZpZGVudGlhbCwgRmluYWwsIFNvbGQsIERlcGFydG1lbnRhbCwgRm9yQ29tbWVudCwgVG9wU2VjcmV0LCBEcmFmdCwgRm9yUHVibGljUmVsZWFzZV1cbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlU3RhbXBBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIHN0YW1wVHlwZTogc3RyaW5nID0gXCJEcmFmdFwiLCBjb2xvcjogQ29sb3IgPSB7IHI6IDEsIGc6IDEsIGI6IDAgfSkge1xuICAgICAgICBsZXQgYW5ub3Q6IEFubm90YXRpb24gPSAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNyZWF0ZUJhc2VBbm5vdGF0aW9uKHBhZ2UsIFs1MCwgNTAsIDgwLCA4MF0sIGNvbnRlbnRzLCBhdXRob3IpLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBhbm5vdGF0aW9uX2ZsYWc6IDQsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICBzdGFtcFR5cGU6IHN0YW1wVHlwZVxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9TdGFtcFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB2aXN1YWwgc3ltYm9sIHRoYXQgaW5kY2F0ZXMgdGhlIGV4aXN0YW5jZSBvZiB0ZXh0IGVkaXRzLlxuICAgICAqIHBhZ2UgOiB0aGUgbnVtYmVyIG9mIHRoZSBQREYgZG9jdW1lbnQgcGFnZSwgd2hlcmUgdGhlIGFubm90YXRpb24gbXVzdCBiZSBhdHRhY2hlZFxuICAgICAqIGNvbnRlbnRzIDogdGhlIGNvbnRlbnQgb2YgdGhlIGFubm90YXRpb25cbiAgICAgKiBhdXRob3IgOiB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgICogY2FyZXRTeW1ib2wgOiBOb25lIG9yIFAsIHdpdGggUCBmb3IgdXNpbmcgdGhlIHBhcmFncmFwaCBzeW1ib2wgYXMgY2FyZXRcbiAgICAgKiBjb2xvciA6IHRoZSBjb2xvciBvZiB0aGUgYW5ub3RhdGlvbiBpbiByZ2IuIENhbiBiZSBvZiBkb21haW4gMCAtIDI1NSBvciAwIC0gMVxuICAgICAqICovXG4gICAgY3JlYXRlQ2FyZXRBbm5vdGF0aW9uKHBhZ2U6IG51bWJlciwgY29udGVudHM6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNhcmV0U3ltYm9sOiBzdHJpbmcgPSBcIlBcIiwgY29sb3I6IENvbG9yID0geyByOiAxLCBnOiAxLCBiOiAwIH0pIHtcbiAgICAgICAgbGV0IGFubm90OiBBbm5vdGF0aW9uID0gKDxhbnk+T2JqZWN0KS5hc3NpZ24odGhpcy5jcmVhdGVCYXNlQW5ub3RhdGlvbihwYWdlLCBbXSwgY29udGVudHMsIGF1dGhvciksIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGFubm90YXRpb25fZmxhZzogNCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGNhcmV0U3ltYm9sOiBjYXJldFN5bWJvbFxuICAgICAgICB9KVxuXG4gICAgICAgIGFubm90LnR5cGUgPSBcIi9DYXJldFwiXG5cbiAgICAgICAgdGhpcy5hbm5vdGF0aW9ucy5wdXNoKGFubm90KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgdGhlIGFubm90YXRpb24gd2l0aCB0aGUgZ2l2ZW4gaWQgb3IgdGhlIGdpdmVuIHJlZmVyZW5jZSBvYmplY3RcbiAgICAgKiAqL1xuICAgIGRlbGV0ZUFubm90YXRpb24oaWQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXG4gICAgICAgICAgICAvLyBkZWxldGUgaWYgaXQgd2FzIGp1c3QgY3JlYXRlZCBidXQgaXMgbm90IGluIHRoZSBwZGYgZG9jdW1lbnRcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbm5vdGF0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGlkICYmIHRoaXMuYW5ub3RhdGlvbnNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RhdGlvbnMgPSB0aGlzLmFubm90YXRpb25zLnNsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy50b0RlbGV0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpZC5vYmogJiYgdGhpcy5hbm5vdGF0aW9uc1tpXS5vYmplY3RfaWQgJiYgaWQub2JqID09PSAoPGFueT50aGlzLmFubm90YXRpb25zW2ldLm9iamVjdF9pZCkub2JqICYmIGlkLmdlbmVyYXRpb24gJiYgaWQuZ2VuZXJhdGlvbiA9PT0gKDxhbnk+dGhpcy5hbm5vdGF0aW9uc1tpXS5vYmplY3RfaWQpLmdlbmVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnMuc2xpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0QW5ub3RhdGlvbnMoKS50aGVuKChhbm5vdHMpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBfYW5ub3RzIG9mIGFubm90cykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhbm5vdCBvZiBfYW5ub3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBpZCAmJiBhbm5vdC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvRGVsZXRlLnB1c2goYW5ub3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnRvRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpZC5vYmogJiYgYW5ub3Qub2JqZWN0X2lkICYmIGlkLm9iaiA9PT0gYW5ub3Qub2JqZWN0X2lkLm9iaiAmJiBpZC5nZW5lcmF0aW9uICYmIGlkLmdlbmVyYXRpb24gPT09IGFubm90Lm9iamVjdF9pZC5nZW5lcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b0RlbGV0ZS5wdXNoKGFubm90KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy50b0RlbGV0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSByZXN1bCBvZiBhbGwgYW5ub3RhdGlvbnMgdGhhdCBhcmUgcGFydCBvZiB0aGUgZG9jdW1lbnQuIFRoaXMgd2lsbFxuICAgICAqIGNvbXByaXNlIHRob3NlIHRoYXQgYXJlIGFscmVhZHkgZXhpc3RzIGFuZCB0aG9zZSB0aGF0IHdlcmUgY3JlYXRlZCB1c2luZyB0aGlzIGxpYnJhcnlcbiAgICAgKiAqL1xuICAgIGdldEFubm90YXRpb25zKCk6IFByb21pc2U8QW5ub3RhdGlvbltdW10+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZXhpc3RpbmdBbm5vdHMgPSB0aGlzLnBhcnNlci5leHRyYWN0QW5ub3RhdGlvbnMoKVxuICAgICAgICAgICAgZm9yIChsZXQgbmV3QW5ub3Qgb2YgdGhpcy5hbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nQW5ub3RzW25ld0Fubm90LnBhZ2VdLnB1c2gobmV3QW5ub3QpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKGV4aXN0aW5nQW5ub3RzKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZVBvcHVwQW5ub3RhdGlvbigpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJObyB5ZXQgaW1wbGVtZW50ZWRcIilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb3dubG9hZHMgdGhlIGFkYXB0ZWQgUERGIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBkb3dubG9hZChmaWxlTmFtZTogc3RyaW5nID0gXCJvdXRwdXQucGRmXCIpIHtcbiAgICAgICAgbGV0IGE6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgICBhLnN0eWxlID0gXCJkaXNwbGF5OiBub25lXCI7XG5cbiAgICAgICAgbGV0IGV4dGVuZGVkX3BkZiA9IHRoaXMud3JpdGUoKVxuICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtleHRlbmRlZF9wZGZdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vcGRmXCIgfSlcbiAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgICAgIGEuaHJlZiA9IHVybFxuICAgICAgICBhLmRvd25sb2FkID0gZmlsZU5hbWVcbiAgICAgICAgYS5jbGljaygpXG4gICAgICAgIGEucmVtb3ZlKClcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyB0aGUgYWRhcHRlZCBQREYgZG9jdW1lbnQgaW4gYSBub2RlanMgZW52aXJvbm1lbnRcbiAgICAgKiAqL1xuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLWNsaS9pc3N1ZXMvOTgyN1xuICAgIC8vIHdoeSBpcyBpdCBzbyByZXByZWhlbnNpYmxlIHRvIGNyZWF0ZSBsaWJyYXJpZXMgZm9yIGJvdGggZW52aXJvbm1lbnRzIChicm93c2VyIGFuZCBub2RlanMpPyBUaG9zZSBndXlzIGF0IGFuZ3VsYXIgbWlnaHQga25vdy5cbiAgICAvL1xuICAgIC8vIHVuY29tbWVudCBpdCBpZiB5b3Ugd2FudCB0byB1c2UgaXQuXG4gICAgc2F2ZShmaWxlTmFtZTogc3RyaW5nID0gXCJvdXRwdXQucGRmXCIpIHtcbiAgICAgICAgLy8gICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgJiYgKDxhbnk+cHJvY2VzcykucmVsZWFzZS5uYW1lICE9PSAnbm9kZScpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdVc2UgZG93bmxvYWQoKSBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnQnKVxuICAgICAgICAvLyAgICAgICAgIHJldHVyblxuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vICAgICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbiAgICAgICAgLy8gICAgIGxldCBkYXRhID0gdGhpcy53cml0ZSgpXG4gICAgICAgIC8vICAgICBmcy53cml0ZUZpbGUoZmlsZU5hbWUsIEJ1ZmZlci5mcm9tKG5ldyBVaW50OEFycmF5KGRhdGEpKSwgKGVycjogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgLy8gICAgICAgICB9XG5cbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGZpbGUgd2FzIHdyaXR0ZW4gdG86ICR7ZmlsZU5hbWV9YCk7XG4gICAgICAgIC8vICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFV0aWwsIEV4dHJhY3Rpb25SZXN1bHQgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBPYmplY3RVdGlsIH0gZnJvbSAnLi9vYmplY3QtdXRpbCdcbi8qKlxuICogSG9sZHMgdGhlIGxvZ2ljIGZvciBleHRyYWN0aW5nIGFycmF5c1xuICogKi9cbmV4cG9ydCBjbGFzcyBBcnJheVV0aWwge1xuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIGFycmF5IG9mIG51bWJlcnMgYW5kIGFycmF5cyBvZiByZWZlcmVuY2VzXG4gICAgICpcbiAgICAgKiBUaGUgZnVuY3Rpb24gc3VwcG9ydHMgYXJiaXRyYXJpbHkgbmVzdGluZyBvZiBhcnJheXMgYW5kIG11bHRpcGxlIHR5cGVzLlxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBleHRyYWN0QXJyYXkoZGF0YTogVWludDhBcnJheSwgcHRyOiBudW1iZXIpOiBFeHRyYWN0aW9uUmVzdWx0IHtcbiAgICAgICAgVXRpbC5kZWJ1Z19wcmludEluZGV4ZWQoZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFJVTiBBUlJBWSBFWFRSQUNUSU9OXCIpXG4gICAgICAgIHB0ciA9IFV0aWwuc2tpcFNwYWNlcyhkYXRhLCBwdHIpXG5cbiAgICAgICAgaWYgKGRhdGFbcHRyXSAhPT0gVXRpbC5BUlJBWV9TVEFSVFswXSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBhcnJheSBzZXF1ZW5jZSAtLSBkb2VzIG5vdCBzdGFydCB3aXRoICdbJ1wiKVxuXG4gICAgICAgIHB0ciArPSAxXG5cbiAgICAgICAgbGV0IG5leHQgPSBVdGlsLnJlYWROZXh0V29yZChkYXRhLCBwdHIpXG4gICAgICAgIGxldCBuZXh0X3N0cmluZzogVWludDhBcnJheSB8IHVuZGVmaW5lZCA9IG5leHQucmVzdWx0XG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9jZXNzICR7VXRpbC5jb252ZXJ0QXNjaWlUb1N0cmluZyhuZXh0X3N0cmluZyEpfSB3aXRoIGVuZCBpbmRleDogJHtuZXh0LmVuZF9pbmRleH1gKVxuXG4gICAgICAgIGxldCByZXRfbGlzdDogYW55W10gPSBbXVxuXG4gICAgICAgIHdoaWxlIChuZXh0X3N0cmluZykge1xuICAgICAgICAgICAgaWYgKG5leHRfc3RyaW5nWzBdID09PSBVdGlsLkFSUkFZX1NUQVJUWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1Yl9hcnJheSA9IEFycmF5VXRpbC5leHRyYWN0QXJyYXkoZGF0YSwgcHRyKVxuICAgICAgICAgICAgICAgIHB0ciA9IHN1Yl9hcnJheS5lbmRfaW5kZXhcbiAgICAgICAgICAgICAgICByZXRfbGlzdC5wdXNoKHN1Yl9hcnJheS5yZXN1bHQpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRfc3RyaW5nWzBdID09PSBVdGlsLlNUUklOR19FTkRbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJldF9saXN0LCBlbmRfaW5kZXg6IG5leHQuZW5kX2luZGV4IH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dF9zdHJpbmdbMF0gPT09IFV0aWwuU1RSSU5HX1NUQVJUWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGV4dHJhY3RlZF9zdHJpbmcgPSBVdGlsLmV4dHJhY3RTdHJpbmcoZGF0YSwgcHRyKVxuICAgICAgICAgICAgICAgIHJldF9saXN0LnB1c2goZXh0cmFjdGVkX3N0cmluZy5yZXN1bHQpXG4gICAgICAgICAgICAgICAgcHRyID0gZXh0cmFjdGVkX3N0cmluZy5lbmRfaW5kZXhcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dF9zdHJpbmdbMF0gPT09IFV0aWwuRElDVF9TVEFSVFswXSkgeyAvLyA8XG4gICAgICAgICAgICAgICAgbGV0IGxvb2t1cF93b3JkID0gVXRpbC5yZWFkTmV4dFdvcmQoZGF0YSwgbmV4dC5lbmRfaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgIGlmIChsb29rdXBfd29yZC5yZXN1bHQgJiYgbG9va3VwX3dvcmQucmVzdWx0WzBdID09PSBVdGlsLkRJQ1RfU1RBUlRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpY3QgPSB7fVxuICAgICAgICAgICAgICAgICAgICBwdHIgPSBPYmplY3RVdGlsLmV4dHJhY3REaWN0VmFsdWVSZWMoZGF0YSwgcHRyLCBkaWN0KVxuICAgICAgICAgICAgICAgICAgICByZXRfbGlzdC5wdXNoKGRpY3QpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhleF9zdHJpbmcgPSBVdGlsLmV4dHJhY3RIZXhTdHJpbmcoZGF0YSwgcHRyKVxuICAgICAgICAgICAgICAgICAgICByZXRfbGlzdC5wdXNoKGhleF9zdHJpbmcucmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBwdHIgPSBoZXhfc3RyaW5nLmVuZF9pbmRleFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dF9zdHJpbmdbMF0gPT09IDQ3KSB7IC8vIC9cbiAgICAgICAgICAgICAgICBsZXQgb3B0X3ZhbHVlID0gVXRpbC5leHRyYWN0T3B0aW9uVmFsdWUoZGF0YSwgcHRyKVxuICAgICAgICAgICAgICAgIHJldF9saXN0LnB1c2goXCIvXCIgKyBvcHRfdmFsdWUucmVzdWx0KVxuICAgICAgICAgICAgICAgIHB0ciA9IG9wdF92YWx1ZS5lbmRfaW5kZXhcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dF9zdHJpbmdbMF0gPT09IFV0aWwuUlswXSkgeyAvLyAvXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHJldF9saXN0W3JldF9saXN0Lmxlbmd0aCAtIDJdXG4gICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRpb24gPSByZXRfbGlzdFtyZXRfbGlzdC5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIHJldF9saXN0ID0gcmV0X2xpc3Quc2xpY2UoMCwgcmV0X2xpc3QubGVuZ3RoIC0gMilcbiAgICAgICAgICAgICAgICByZXRfbGlzdC5wdXNoKHsgb2JqOiBvYmosIGdlbmVyYXRpb246IGdlbmVyYXRpb24gfSlcbiAgICAgICAgICAgICAgICBwdHIgPSBuZXh0LmVuZF9pbmRleFxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0X3N0cmluZ1swXSA9PT0gVXRpbC5BUlJBWV9FTkRbMF0pIHtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLU5VTUJFUlwiKVxuICAgICAgICAgICAgICAgIGxldCBuYnIgPSBVdGlsLmV4dHJhY3ROdW1iZXIoZGF0YSwgcHRyKVxuICAgICAgICAgICAgICAgIHJldF9saXN0LnB1c2gobmJyLnJlc3VsdClcbiAgICAgICAgICAgICAgICBwdHIgPSBuYnIuZW5kX2luZGV4XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobmJyKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coYFNldCBwdHIgdG8gJHtwdHJ9YClcblxuXG4gICAgICAgICAgICArK3B0clxuICAgICAgICAgICAgbmV4dCA9IFV0aWwucmVhZE5leHRXb3JkKGRhdGEsIHB0cilcbiAgICAgICAgICAgIG5leHRfc3RyaW5nID0gbmV4dC5yZXN1bHRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQcm9jZXNzICR7VXRpbC5jb252ZXJ0QXNjaWlUb1N0cmluZyhuZXh0X3N0cmluZyEpfSBhdCBpbmRleCAke25leHQuZW5kX2luZGV4fWApXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHJldF9saXN0KVxuXG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmV0X2xpc3QsIGVuZF9pbmRleDogbmV4dC5lbmRfaW5kZXggfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IE9iamVjdFV0aWwgfSBmcm9tICcuL29iamVjdC11dGlsJ1xuaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSAnLi9zdHJlYW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFhSZWYge1xuICAgIGlkOiBudW1iZXJcbiAgICBwb2ludGVyOiBudW1iZXJcbiAgICBnZW5lcmF0aW9uOiBudW1iZXJcbiAgICBmcmVlOiBib29sZWFuXG4gICAgdXBkYXRlOiBib29sZWFuXG4gICAgY29tcHJlc3NlZD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFN1YlNlY3Rpb25IZWFkZXIge1xuICAgIGlkOiBudW1iZXJcbiAgICBjb3VudDogbnVtYmVyXG4gICAgZW5kX3B0cjogbnVtYmVyIC8vIHBvaW50cyB0byB0aGUgZW5kIG9mIHRoZSBzdWIgc2VjdGlvbiBoZWFkZXJcbn1cblxuaW50ZXJmYWNlIFRyYWlsZXIge1xuICAgIHNpemU6IG51bWJlclxuICAgIHJvb3Q6IFJlZmVyZW5jZVBvaW50ZXJcbiAgICBwcmV2PzogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0TG9va3VwVGFibGUge1xuICAgIFtpZDogbnVtYmVyXTogWFJlZlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVNlY3Rpb24ge1xuICAgIHN0YXJ0X3BvaW50ZXI6IG51bWJlcixcbiAgICBzaXplOiBudW1iZXJcbiAgICByZWZzOiBYUmVmW11cbiAgICBwcmV2PzogbnVtYmVyXG4gICAgcm9vdD86IHsgb2JqOiBudW1iZXIsIGdlbmVyYXRpb246IG51bWJlciB9XG59XG5cbi8qKlxuICogSG9sZHMgdGhlIGNvbXBsZXRlIGluZm9ybWF0aW9uIG9mIG9uZSB1cGRhdGUgc2VjdGlvbiBpbiB0aGUgQ3Jvc3MtUmVmZXJlbmNlLVN0cmVhbSBPYmplY3QgZm9ybWF0LlxuICpcbiAqICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NSZWZlcmVuY2VTdHJlYW1PYmplY3Qge1xuICAgIHB1YmxpYyByZWZzOiBYUmVmW10gPSBbXVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSkgeyB9XG5cbiAgICBwdWJsaWMgdHJhaWxlcjogVHJhaWxlciA9IHsgc2l6ZTogLTEsIHJvb3Q6IHsgb2JqOiAtMSwgZ2VuZXJhdGlvbjogLTEgfSB9XG5cbiAgICBwdWJsaWMgc3RyZWFtTGVuZ3RoOiBudW1iZXIgPSAtMVxuXG4gICAgcHVibGljIHc6IG51bWJlcltdID0gW11cbiAgICBwdWJsaWMgaW5kZXg6IG51bWJlcltdID0gW11cbiAgICBwcml2YXRlIHN0YXJ0X3BvaW50ZXI6IG51bWJlciA9IDBcblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIGEgY3Jvc3MgcmVmZXJlbmNlIHNlY3Rpb24gdGhhdCBpcyBhIGNvbnRpbnVvdXMgZGVmaW5pdGlvbiBvZiBjcm9zcyByZWZlcmVuY2UgZW50cmllc1xuICAgICAqICovXG4gICAgZXh0cmFjdENyb3NzUmVmZXJlbmNlU2VjdGlvbihmaXJzdF9vYmplY3RfaWQ6IG51bWJlciwgb2JqZWN0X2NvdW50OiBudW1iZXIsIHN0cmVhbTogU3RyZWFtKSB7XG4gICAgICAgIGxldCBjdXJyZW50X29iamVjdF9pZCA9IGZpcnN0X29iamVjdF9pZFxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0X2NvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGxldCBfdHlwZSA9IHN0cmVhbS5nZXROQnl0ZXNBc051bWJlcih0aGlzLndbMF0pXG5cbiAgICAgICAgICAgIGxldCB4cmVmID0gdW5kZWZpbmVkXG5cbiAgICAgICAgICAgIHN3aXRjaCAoX3R5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHhyZWYgPSB7IGlkOiBjdXJyZW50X29iamVjdF9pZCsrLCBwb2ludGVyOiBzdHJlYW0uZ2V0TkJ5dGVzQXNOdW1iZXIodGhpcy53WzFdKSwgZ2VuZXJhdGlvbjogdGhpcy53WzJdID09PSAwID8gMCA6IHN0cmVhbS5nZXROQnl0ZXNBc051bWJlcih0aGlzLndbMl0pLCBmcmVlOiB0cnVlLCB1cGRhdGU6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHhyZWYgPSB7IGlkOiBjdXJyZW50X29iamVjdF9pZCsrLCBwb2ludGVyOiBzdHJlYW0uZ2V0TkJ5dGVzQXNOdW1iZXIodGhpcy53WzFdKSwgZ2VuZXJhdGlvbjogdGhpcy53WzJdID09PSAwID8gMCA6IHN0cmVhbS5nZXROQnl0ZXNBc051bWJlcih0aGlzLndbMl0pLCBmcmVlOiBmYWxzZSwgdXBkYXRlOiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIC8vIGluIHRoaXMgY2FzZSB0aGUgcG9pbnRlciBiZWNvbWVzIHRoZSBzdHJlYW0gb2JqZWN0IGlkIHRoYXQgY29udGFpbnMgdGhlIGNvbXByZXNzZWQgb2JqZWN0IGFuZCB0aGUgZ2VuZXJhdGlvbiByZXByZXNlbnRzIHRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IGluIHRoZSBzdHJlYW1cbiAgICAgICAgICAgICAgICAgICAgeHJlZiA9IHsgaWQ6IGN1cnJlbnRfb2JqZWN0X2lkKyssIHBvaW50ZXI6IHN0cmVhbS5nZXROQnl0ZXNBc051bWJlcih0aGlzLndbMV0pLCBnZW5lcmF0aW9uOiB0aGlzLndbMl0gPT09IDAgPyAwIDogc3RyZWFtLmdldE5CeXRlc0FzTnVtYmVyKHRoaXMud1syXSksIGZyZWU6IHRydWUsIHVwZGF0ZTogZmFsc2UsIGNvbXByZXNzZWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmICh4cmVmKVxuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5wdXNoKHhyZWYpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgY3Jvc3MtcmVmZXJlbmNlLXN0cmVhbSB0eXBlICR7X3R5cGV9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBjcm9zcy1yZWZlcmVuY2UtdGFibGUgZnJvbSB0aGUgc3RyZWFtXG4gICAgICogKi9cbiAgICBleHRyYWN0U3RyZWFtKHN0cmVhbTogU3RyZWFtKSB7XG4gICAgICAgIGxldCBjcm9zc19yZWZlcmVuY2VfbGVuZ3RoID0gdGhpcy53LnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGRhdGEgc3RyZWFtIGhhcyBhIHZhbGlkIHNpemVcbiAgICAgICAgaWYgKHN0cmVhbS5nZXRMZW5ndGgoKSAhPT0gY3Jvc3NfcmVmZXJlbmNlX2xlbmd0aCAqIHRoaXMuaW5kZXguZmlsdGVyKCh2LCBpKSA9PiBpICUgMiA9PT0gMSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBzdHJlYW0gbGVuZ3RoIC0gaXMgJHtzdHJlYW0uZ2V0TGVuZ3RoKCl9IGJ1dCBzaG91bGQgYmUgJHtjcm9zc19yZWZlcmVuY2VfbGVuZ3RoICogdGhpcy5pbmRleC5maWx0ZXIoKHYsIGkpID0+IGkgJSAyID09PSAxKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKX1gKVxuXG4gICAgICAgIGlmICh0aGlzLmluZGV4Lmxlbmd0aCAlIDIgPT09IDEpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBpbmRleCBmbGFnICR7dGhpcy5pbmRleH1gKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmRleC5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgdGhpcy5leHRyYWN0Q3Jvc3NSZWZlcmVuY2VTZWN0aW9uKHRoaXMuaW5kZXhbaV0sIHRoaXMuaW5kZXhbaSArIDFdLCBzdHJlYW0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgQ3Jvc3MtUmVmZXJlbmNlLVN0cmVhbS1PYmplY3QgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICogKi9cbiAgICBleHRyYWN0KHhyZWY6IFhSZWYpIHtcbiAgICAgICAgbGV0IGluZGV4ID0geHJlZi5wb2ludGVyXG4gICAgICAgIHRoaXMuc3RhcnRfcG9pbnRlciA9IGluZGV4XG4gICAgICAgIGxldCBjcnNfb2JqZWN0ID0gT2JqZWN0VXRpbC5leHRyYWN0T2JqZWN0KHRoaXMuZGF0YSwgeHJlZilcblxuICAgICAgICBsZXQgcHRyX29iamVjdF9lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCB0aGlzLmRhdGEsIGluZGV4KVxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuc2xpY2UoaW5kZXgsIHB0cl9vYmplY3RfZW5kKVxuXG4gICAgICAgIC8vIGNoZWNrIHR5cGVcbiAgICAgICAgaWYgKGNyc19vYmplY3QudmFsdWVbXCIvVHlwZVwiXSAhPT0gXCIvWFJlZlwiKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgQ3Jvc3MtUmVmZXJlbmNlLVN0cmVhbS1vYmplY3QgdHlwZTogJHtjcnNfb2JqZWN0LnZhbHVlW1wiL1R5cGVcIl19YClcblxuICAgICAgICAvLyBleHRyYWN0IHNpemVcbiAgICAgICAgaWYgKCFjcnNfb2JqZWN0LnZhbHVlW1wiL1NpemVcIl0pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBzaXplIHZhbHVlICR7Y3JzX29iamVjdC52YWx1ZVtcIi9TaXplXCJdfWApXG4gICAgICAgIHRoaXMudHJhaWxlci5zaXplID0gY3JzX29iamVjdC52YWx1ZVtcIi9TaXplXCJdXG5cbiAgICAgICAgLy8gZXh0cmFjdCBST09UIGlmIGl0IGV4aXN0c1xuICAgICAgICBpZiAoY3JzX29iamVjdC52YWx1ZVtcIi9Sb290XCJdKVxuICAgICAgICAgICAgdGhpcy50cmFpbGVyLnJvb3QgPSBjcnNfb2JqZWN0LnZhbHVlW1wiL1Jvb3RcIl1cblxuICAgICAgICAvLyBleHRyYWN0IFBSRVYgaWYgaXQgZXhpc3RzXG4gICAgICAgIGlmIChjcnNfb2JqZWN0LnZhbHVlW1wiL1ByZXZcIl0pXG4gICAgICAgICAgICB0aGlzLnRyYWlsZXIucHJldiA9IGNyc19vYmplY3QudmFsdWVbXCIvUHJldlwiXVxuXG4gICAgICAgIC8vIGV4dHJhY3QgVyBwYXJhbWV0ZXJcbiAgICAgICAgdGhpcy53ID0gY3JzX29iamVjdC52YWx1ZVtcIi9XXCJdXG5cbiAgICAgICAgaWYgKCF0aGlzLncgfHwgMCA9PT0gdGhpcy53Lmxlbmd0aClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCAvVyBwYXJhbWV0ZXIgaW4gQ3Jvc3MtUmVmZXJlbmNlLVN0cmVhbS1PYmplY3RcIilcblxuICAgICAgICAvLyBleHRyYWN0IEluZGV4IHBhcmFtZXRlclxuICAgICAgICB0aGlzLmluZGV4ID0gY3JzX29iamVjdC52YWx1ZVtcIi9JbmRleFwiXVxuXG4gICAgICAgIGlmICghdGhpcy5pbmRleCB8fCAwID09PSB0aGlzLmluZGV4Lmxlbmd0aClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCAvSW5kZXggcGFyYW1ldGVyIGluIENyb3NzLVJlZmVyZW5jZS1TdHJlYW0tT2JqZWN0XCIpXG5cbiAgICAgICAgaWYgKCFjcnNfb2JqZWN0LnN0cmVhbSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzc2luZyBzdHJlYW0gYXQgY3Jvc3MgcmVmZXJlbmNlIHN0cmVhbSBvYmplY3RcIilcblxuICAgICAgICBsZXQgc3RyZWFtID0gY3JzX29iamVjdC5zdHJlYW1cblxuICAgICAgICBpZiAoIXN0cmVhbSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBzdHJlYW0gb2JqZWN0XCIpXG5cbiAgICAgICAgdGhpcy5zdHJlYW1MZW5ndGggPSBjcnNfb2JqZWN0LnZhbHVlW1wiL0xlbmd0aFwiXVxuXG4gICAgICAgIHRoaXMuZXh0cmFjdFN0cmVhbShzdHJlYW0pXG5cbiAgICAgICAgLy8gdGhlIGNyb3NzLXJlZmVyZW5jZS1zdHJlYW0gb2JqZWN0IGlzIGFsc28gYSBrbm93biByZWZlcmVuY2VcbiAgICAgICAgdGhpcy5yZWZzLnB1c2goeyBpZDogY3JzX29iamVjdC5pZC5vYmosIHBvaW50ZXI6IHRoaXMuc3RhcnRfcG9pbnRlciwgZ2VuZXJhdGlvbjogY3JzX29iamVjdC5pZC5nZW5lcmF0aW9uLCBmcmVlOiBmYWxzZSwgdXBkYXRlOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJzIHRoZSB1cGRhdGUgc2VjdGlvbiByZXByZXNlbnRpbmcgdGhpcyBDcm9zc1JlZmVyZW5jZVN0cmVhbU9iamVjdFxuICAgICAqICovXG4gICAgZ2V0VXBkYXRlU2VjdGlvbigpOiBVcGRhdGVTZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJ0X3BvaW50ZXI6IHRoaXMuc3RhcnRfcG9pbnRlcixcbiAgICAgICAgICAgIHNpemU6IHRoaXMudHJhaWxlci5zaXplLFxuICAgICAgICAgICAgcHJldjogdGhpcy50cmFpbGVyLnByZXYsXG4gICAgICAgICAgICByb290OiB0aGlzLnRyYWlsZXIucm9vdCxcbiAgICAgICAgICAgIHJlZnM6IHRoaXMucmVmc1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEhvbGRzIHRoZSBjb21wbGV0ZSBpbmZvcm1hdGlvbiBvZiBvbmUgdXBkYXRlIHNlY3Rpb24gaW4gdGhlIENyb3NzLVJlZmVyZW5jZS1UYWJsZSBmb3JtYXQuIFRoYXQgY29tcHJpc2VzOlxuICogLSB0aGUgYm9keSB1cGRhdGVcbiAqIC0gdGhlIGNyb3NzaXN0ZSByZWZlcmVuY2UgdGFibGVcbiAqIC0gdGhlIHRyYWlsZXJcbiAqICovXG5leHBvcnQgY2xhc3MgQ3Jvc3NSZWZlcmVuY2VUYWJsZSB7XG4gICAgcHVibGljIHJlZnM6IFhSZWZbXSA9IFtdXG5cbiAgICBwdWJsaWMgc3RhcnRfcG9pbnRlcjogbnVtYmVyID0gLTFcblxuICAgIHB1YmxpYyB0cmFpbGVyOiBUcmFpbGVyID0geyBzaXplOiAtMSwgcm9vdDogeyBvYmo6IC0xLCBnZW5lcmF0aW9uOiAtMSB9IH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZWZlcmVuY2Ugd2l0aCB0aGUgZ2l2ZW4gaWRcbiAgICAgKiAqL1xuICAgIGdldFJlZmVyZW5jZShpZDogbnVtYmVyKTogWFJlZiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGZvciAobGV0IHJlZiBvZiB0aGlzLnJlZnMpIHtcbiAgICAgICAgICAgIGlmIChyZWYuaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiByZWZcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cnMgdGhlIHVwZGF0ZSBzZWN0aW9uIHJlcHJlc2VudGluZyB0aGlzIENyb3NzUmVmZXJlbmNlVGFibGVcbiAgICAgKiAqL1xuICAgIGdldFVwZGF0ZVNlY3Rpb24oKTogVXBkYXRlU2VjdGlvbiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydF9wb2ludGVyOiB0aGlzLnN0YXJ0X3BvaW50ZXIsXG4gICAgICAgICAgICBzaXplOiB0aGlzLnRyYWlsZXIuc2l6ZSxcbiAgICAgICAgICAgIHJlZnM6IHRoaXMucmVmcyxcbiAgICAgICAgICAgIHByZXY6IHRoaXMudHJhaWxlci5wcmV2LFxuICAgICAgICAgICAgcm9vdDogdGhpcy50cmFpbGVyLnJvb3RcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBoZWFkZXIgb2YgYSBzdWIgc2VjdGlvbi4gRm9yIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiAwIDEgLy8gPC0tXG4gICAgICogLi4uXG4gICAgICpcbiAgICAgKiBTbyB0aGUgb2JlamN0IGlkIDAgYW5kIHRoZSBudW1iZXIgb2Ygc3ViIHNlY3Rpb24gZW50cmllcyAxXG4gICAgICogKi9cbiAgICBleHRyYWN0U3ViU2VjdGlvbkhlYWRlcihpbmRleDogbnVtYmVyKTogU3ViU2VjdGlvbkhlYWRlciB7XG4gICAgICAgIGxldCBwdHIgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIGluZGV4KVxuXG4gICAgICAgIGxldCBvYmpfaWQgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBpbmRleCwgcHRyKS5yZXN1bHRcblxuICAgICAgICBwdHIgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHIgKyAxKVxuXG4gICAgICAgIGxldCBwdHJfcmVmX2NvdW50ID0gcHRyXG5cbiAgICAgICAgcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHIpXG5cbiAgICAgICAgbGV0IHJlZmVyZW5jZV9jb3VudCA9IFV0aWwuZXh0cmFjdE51bWJlcih0aGlzLmRhdGEsIHB0cl9yZWZfY291bnQsIHB0cikucmVzdWx0XG5cbiAgICAgICAgcmV0dXJuIHsgaWQ6IG9ial9pZCwgY291bnQ6IHJlZmVyZW5jZV9jb3VudCwgZW5kX3B0cjogcHRyIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcmVmZXJlbmNlcyBvZiBhIHN1YiBzZWN0aW9uLiBUaGUgaW5kZXggcG9pbnRzIHRvIHRoZSBzdGFydCBvZlxuICAgICAqIHRoZSBmaXJzdCByZWZlcmVuY2UgYW5kIGNvdW50IHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiByZWZlcmVuY2VzIHRoYXQgYXJlXG4gICAgICogY29udGFpbmVkIGluIHRoZSBzdWJzZWN0aW9uLlxuICAgICAqXG4gICAgICogVGhlIGZpcnN0X29iamVjdF9pZCBpcyB0aGUgaWQgcHJvdmlkZWQgaW4gdGhlIHN1YiBzZWN0aW9uIGhlYWRlclxuICAgICAqXG4gICAgICogQnkgZGVmaW5pdGlvbiBvZiB0aGUgUERGIHN0YW5kYXJkIG9uZSBlbnRyeSBpcyAyMCBieXRlcyBsb25nXG4gICAgICogKi9cbiAgICBleHRyYWN0UmVmZXJlbmNlcyhpbmRleDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBmaXJzdF9vYmplY3RfaWQ6IG51bWJlcik6IFhSZWZbXSB7XG4gICAgICAgIGxldCBfcmVmczogWFJlZltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyArK2ksIGluZGV4ICs9IDIwKSB7XG4gICAgICAgICAgICBsZXQgcHRyX2VuZF9wb2ludGVyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIodGhpcy5kYXRhLCBpbmRleClcblxuICAgICAgICAgICAgbGV0IHBvaW50ZXIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCBpbmRleCwgcHRyX2VuZF9wb2ludGVyKS5yZXN1bHRcblxuICAgICAgICAgICAgbGV0IHB0cl9nZW5fc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHJfZW5kX3BvaW50ZXIgKyAxKVxuXG4gICAgICAgICAgICBsZXQgcHRyX2dlbl9lbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcih0aGlzLmRhdGEsIHB0cl9nZW5fc3RhcnQpXG5cbiAgICAgICAgICAgIGxldCBnZW5lcmF0aW9uID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgcHRyX2dlbl9zdGFydCwgcHRyX2dlbl9lbmQpLnJlc3VsdFxuXG4gICAgICAgICAgICBsZXQgcHRyX2ZsYWcgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBwdHJfZ2VuX2VuZCArIDEpXG5cbiAgICAgICAgICAgIGxldCBpc0ZyZWUgPSB0aGlzLmRhdGFbcHRyX2ZsYWddID09PSAxMDIgLy8gMTAyID0gZlxuXG4gICAgICAgICAgICBfcmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogZmlyc3Rfb2JqZWN0X2lkICsgaSxcbiAgICAgICAgICAgICAgICBwb2ludGVyOiBwb2ludGVyLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGdlbmVyYXRpb24sXG4gICAgICAgICAgICAgICAgZnJlZTogaXNGcmVlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogIWlzRnJlZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmVmc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSB0cmFpbGVyIG9mIHRoZSBzdWJzZWN0aW9uIHRoYXQgbWVhbnMgdGhlIHBhcnQgc3RhdGluZyB3aXRoIHRoZSAndHJhaWxlcicga2V5d29yZCBhbmRcbiAgICAgKiBpbiBwYXJ0aWN1bGFyIHRoZSB0cmFpbGVyIGRpY3Rpb25hcnlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RUcmFpbGVyKGluZGV4OiBudW1iZXIpOiBUcmFpbGVyIHtcbiAgICAgICAgbGV0IGVuZF90cmFpbGVyX2luZGV4OiBudW1iZXIgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuU1RBUlRYUkVGLCB0aGlzLmRhdGEsIGluZGV4LCB0cnVlKVxuICAgICAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGEuc2xpY2UoaW5kZXgsIGVuZF90cmFpbGVyX2luZGV4KVxuICAgICAgICBpbmRleCA9IDBcblxuICAgICAgICBsZXQgcHRyX3N0YXJ0X3NpemUgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuU0laRSwgX2RhdGEsIGluZGV4LCB0cnVlKSArIFV0aWwuU0laRS5sZW5ndGhcbiAgICAgICAgcHRyX3N0YXJ0X3NpemUgPSBVdGlsLnNraXBEZWxpbWl0ZXIoX2RhdGEsIHB0cl9zdGFydF9zaXplKVxuXG4gICAgICAgIGxldCBzaXplID0gVXRpbC5leHRyYWN0TnVtYmVyKF9kYXRhLCBwdHJfc3RhcnRfc2l6ZSkucmVzdWx0XG5cblxuICAgICAgICBsZXQgcHRyX3N0YXJ0X3Jvb3QgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuUk9PVCwgX2RhdGEsIGluZGV4LCB0cnVlKSArIFV0aWwuUk9PVC5sZW5ndGhcbiAgICAgICAgcHRyX3N0YXJ0X3Jvb3QgPSBVdGlsLnNraXBEZWxpbWl0ZXIoX2RhdGEsIHB0cl9zdGFydF9yb290KVxuICAgICAgICBsZXQgcm9vdF9yZWZlcmVuY2UgPSBVdGlsLmV4dHJhY3RSZWZlcmVuY2VUeXBlZChfZGF0YSwgcHRyX3N0YXJ0X3Jvb3QpXG5cblxuICAgICAgICBsZXQgcHRyX3N0YXJ0X3ByZXYgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuUFJFViwgX2RhdGEsIGluZGV4LCB0cnVlKVxuICAgICAgICBsZXQgcHJldiA9IHVuZGVmaW5lZFxuICAgICAgICBpZiAoLTEgIT0gcHRyX3N0YXJ0X3ByZXYpIHtcbiAgICAgICAgICAgIHB0cl9zdGFydF9wcmV2ID0gVXRpbC5za2lwRGVsaW1pdGVyKF9kYXRhLCBwdHJfc3RhcnRfcHJldiArIFV0aWwuUFJFVi5sZW5ndGgpXG5cbiAgICAgICAgICAgIHByZXYgPSBVdGlsLmV4dHJhY3ROdW1iZXIoX2RhdGEsIHB0cl9zdGFydF9wcmV2KS5yZXN1bHRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICAgICAgcm9vdDogcm9vdF9yZWZlcmVuY2UucmVzdWx0LFxuICAgICAgICAgICAgcHJldjogcHJldlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBDcm9zcyBSZWZlcmVuY2UgVGFibGUgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICogKi9cbiAgICBleHRyYWN0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydF9wb2ludGVyID0gaW5kZXhcblxuICAgICAgICBsZXQgc3RhcnRfcHRyID0gaW5kZXggKyA1IC8vICsgbGVuZ3RoKHhyZWYpICsgYmxhbmtcbiAgICAgICAgc3RhcnRfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgc3RhcnRfcHRyKVxuXG4gICAgICAgIGxldCBmaXJzdF9oZWFkZXIgPSB0aGlzLmV4dHJhY3RTdWJTZWN0aW9uSGVhZGVyKHN0YXJ0X3B0cilcblxuICAgICAgICBsZXQgcmVmX3N0YXJ0ID0gVXRpbC5za2lwRGVsaW1pdGVyKHRoaXMuZGF0YSwgZmlyc3RfaGVhZGVyLmVuZF9wdHIgKyAxKVxuXG4gICAgICAgIC8vIGV4dHJhY3QgZmlyc3QgcmVmZXJlbmNlXG4gICAgICAgIHRoaXMucmVmcyA9IHRoaXMucmVmcy5jb25jYXQodGhpcy5leHRyYWN0UmVmZXJlbmNlcyhyZWZfc3RhcnQsIGZpcnN0X2hlYWRlci5jb3VudCwgZmlyc3RfaGVhZGVyLmlkKSlcblxuICAgICAgICAvLyBleHRyYWN0IHJlbWFpbmluZyByZWZlcmVuY2VzXG4gICAgICAgIHN0YXJ0X3B0ciA9IHJlZl9zdGFydCArIGZpcnN0X2hlYWRlci5jb3VudCAqIDIwXG5cbiAgICAgICAgd2hpbGUgKHRoaXMuZGF0YVtzdGFydF9wdHJdICE9PSAxMTYpIHsgLy8gMTE2ID0gJ3QnIHN0YXJ0IG9mIHRoZSB3b3JkIHRyYWlsZXIgdGhhdCBjb25jbHVkZXMgdGhlIGNyb3Nzc2l0ZSByZWZlcmVuY2Ugc2VjdGlvblxuICAgICAgICAgICAgbGV0IGhlYWRlciA9IHRoaXMuZXh0cmFjdFN1YlNlY3Rpb25IZWFkZXIoc3RhcnRfcHRyKVxuXG4gICAgICAgICAgICByZWZfc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIodGhpcy5kYXRhLCBoZWFkZXIuZW5kX3B0ciArIDEpXG5cbiAgICAgICAgICAgIGxldCByZWZlcmVuY2VzID0gdGhpcy5leHRyYWN0UmVmZXJlbmNlcyhyZWZfc3RhcnQsIGhlYWRlci5jb3VudCwgaGVhZGVyLmlkKVxuXG4gICAgICAgICAgICB0aGlzLnJlZnMgPSB0aGlzLnJlZnMuY29uY2F0KHJlZmVyZW5jZXMpXG5cbiAgICAgICAgICAgIHN0YXJ0X3B0ciA9IHJlZl9zdGFydCArIGhlYWRlci5jb3VudCAqIDIwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYWlsZXIgPSB0aGlzLmV4dHJhY3RUcmFpbGVyKHN0YXJ0X3B0cilcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY29tcGxldGUgUERGIGRvY3VtZW50IGhpc3RvcnkgYW5kIHRoZXJlZm9yZSBob2xkcyB0aGVcbiAqIHVwZGF0ZWQgYm9keSBwYXJ0cywgdGhlIGNyb3Nzc2l0ZSByZWZlcmVuY2VzIGFuZCB0aGUgZG9jdW1lbnQgdHJhaWxlcnNcbiAqICovXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRIaXN0b3J5IHtcbiAgICBwdWJsaWMgdXBkYXRlczogVXBkYXRlU2VjdGlvbltdID0gW11cblxuICAgIHB1YmxpYyB0cmFpbGVyU2l6ZTogbnVtYmVyID0gLTFcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIG9iamVjdCBpZHMgdGhhdCB3ZXJlIGZvcm1lcmx5IGZyZWVkIGFuZCBhcmUgbm93ICdhbHJlYWR5JyByZXVzZWQuXG4gICAgICogVGhpcyBpcyB1c2VkIHRvIHByZXZlbnQgYSBmcmVlZCBvYmplY3QgYSBzZWNvbmQgdGltZSAqL1xuICAgIHByaXZhdGUgYWxyZWFkeV9yZXVzZWRfaWRzOiBYUmVmW10gPSBbXVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGNyb3NzIHJlZmVyZW5jZSB0YWJsZSBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RDcm9zc1JlZmVyZW5jZVRhYmxlKGluZGV4OiBudW1iZXIpOiBDcm9zc1JlZmVyZW5jZVRhYmxlIHtcbiAgICAgICAgbGV0IGNydCA9IG5ldyBDcm9zc1JlZmVyZW5jZVRhYmxlKHRoaXMuZGF0YSlcbiAgICAgICAgY3J0LmV4dHJhY3QoaW5kZXgpXG5cbiAgICAgICAgcmV0dXJuIGNydFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBjcm9zcyByZWZlcmVuY2Ugc3RyZWFtIG9iamVjdCBzdGFydGluZyBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RDcm9zc1JlZmVyZW5jZVN0cmVhbU9iamVjdCh4cmVmOiBYUmVmKTogQ3Jvc3NSZWZlcmVuY2VTdHJlYW1PYmplY3Qge1xuICAgICAgICBsZXQgY3JzID0gbmV3IENyb3NzUmVmZXJlbmNlU3RyZWFtT2JqZWN0KHRoaXMuZGF0YSlcbiAgICAgICAgY3JzLmV4dHJhY3QoeHJlZilcblxuICAgICAgICByZXR1cm4gY3JzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGxhc3QgdXBkYXRlIHNlY3Rpb24gb2YgYSBkb2N1bWVudCAodGhhdCBtZWFuc1xuICAgICAqIHRoZSBtb3N0IHJlY2VudCB1cGRhdGUgbG9jYXRpbmcgYXQgdGhlIGVuZCBvZiB0aGUgZmlsZSlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3REb2N1bWVudEVudHJ5KCk6IG51bWJlciB7XG4gICAgICAgIGxldCBwdHIgPSB0aGlzLmRhdGEubGVuZ3RoIC0gMVxuXG4gICAgICAgIGxldCBwdHJfc3RhcnR4cmVmID0gVXRpbC5sb2NhdGVTZXF1ZW5jZVJldmVyc2VkKFV0aWwuU1RBUlRYUkVGLCB0aGlzLmRhdGEsIHB0ciwgdHJ1ZSkgKyA5XG5cbiAgICAgICAgcHRyID0gVXRpbC5leHRyYWN0TnVtYmVyKHRoaXMuZGF0YSwgcHRyX3N0YXJ0eHJlZikucmVzdWx0XG5cbiAgICAgICAgcmV0dXJuIHB0clxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSBlbnRpcmUgdXBkYXRlIHNlY3Rpb25zXG4gICAgICpcbiAgICAgKiBOZWVkcyB0byBhZGFwdCBkZXBlbmRpbmcgd2hldGhlciB0aGUgZG9jdW1lbnQgdXNlcyBhIGNyb3NzLXJlZmVyZW5jZSB0YWJsZSBvciBhIGNyb3NzLXJlZmVyZW5jZSBzdHJlYW0gb2JqZWN0XG4gICAgICogKi9cbiAgICBleHRyYWN0RG9jdW1lbnRIaXN0b3J5KCkge1xuXG4gICAgICAgIGxldCBwdHIgPSB0aGlzLmV4dHJhY3REb2N1bWVudEVudHJ5KClcbiAgICAgICAgbGV0IHhyZWYgPSB7XG4gICAgICAgICAgICBpZDogLTEsXG4gICAgICAgICAgICBwb2ludGVyOiBwdHIsXG4gICAgICAgICAgICBnZW5lcmF0aW9uOiAwLFxuICAgICAgICAgICAgZnJlZTogZmFsc2UsXG4gICAgICAgICAgICB1cGRhdGU6IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBjcm9zcyByZWZlcmVuY2UgdGFibGVcbiAgICAgICAgaWYgKFV0aWwuYXJlQXJyYXlzRXF1YWwodGhpcy5kYXRhLnNsaWNlKHB0ciwgcHRyICsgVXRpbC5YUkVGLmxlbmd0aCksIFV0aWwuWFJFRikpIHtcblxuICAgICAgICAgICAgbGV0IGNydCA9IHRoaXMuZXh0cmFjdENyb3NzUmVmZXJlbmNlVGFibGUocHRyKVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZXMucHVzaChjcnQuZ2V0VXBkYXRlU2VjdGlvbigpKVxuXG4gICAgICAgICAgICBsZXQgdXMgPSB0aGlzLnVwZGF0ZXNbMF1cblxuICAgICAgICAgICAgd2hpbGUgKHVzLnByZXYpIHtcbiAgICAgICAgICAgICAgICBjcnQgPSB0aGlzLmV4dHJhY3RDcm9zc1JlZmVyZW5jZVRhYmxlKHVzLnByZXYpXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVzLnB1c2goY3J0LmdldFVwZGF0ZVNlY3Rpb24oKSlcbiAgICAgICAgICAgICAgICB1cyA9IHRoaXMudXBkYXRlc1t0aGlzLnVwZGF0ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgeyAvLyBoYW5kbGUgY3Jvc3MgcmVmZXJlbmNlIHN0cmVhbSBvYmplY3RcbiAgICAgICAgICAgIGxldCBjcnMgPSB0aGlzLmV4dHJhY3RDcm9zc1JlZmVyZW5jZVN0cmVhbU9iamVjdCh4cmVmKVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZXMucHVzaChjcnMuZ2V0VXBkYXRlU2VjdGlvbigpKVxuXG4gICAgICAgICAgICBsZXQgdXMgPSB0aGlzLnVwZGF0ZXNbMF1cblxuICAgICAgICAgICAgd2hpbGUgKHVzLnByZXYpIHtcbiAgICAgICAgICAgICAgICBsZXQgX3hyZWYgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlcjogdXMucHJldixcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICAgICAgZnJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjcnMgPSB0aGlzLmV4dHJhY3RDcm9zc1JlZmVyZW5jZVN0cmVhbU9iamVjdChfeHJlZilcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZXMucHVzaChjcnMuZ2V0VXBkYXRlU2VjdGlvbigpKVxuICAgICAgICAgICAgICAgIHVzID0gdGhpcy51cGRhdGVzW3RoaXMudXBkYXRlcy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFpbGVyU2l6ZSA9IHRoaXMuZ2V0UmVjZW50VXBkYXRlKCkuc2l6ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByaW1hcmlseSBmb3IgY2xhcmlmaWNhdGlvbi4gVGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIG1vc3QgcmVjZW50LiBXZSBwYXJzZWQgYmFja3dhcmRzLlxuICAgICAqICovXG4gICAgZ2V0UmVjZW50VXBkYXRlKCk6IFVwZGF0ZVNlY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVzWzBdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnkgcnVubmluZyB0aHJvdWdoIHRoZSBQRGYgaGlzdG9yeSB3ZSBjYW4gZm9yIGV2ZXJ5IG9iamVjdCBpZCBkZXRlcm1pbmUgdGhlIHBvaW50ZXIgYWRkcmVzcyB0byB0aGUgbW9zdCByZWNlbnQgdmVyc2lvbiwgYW5kXG4gICAgICogd2hldGhlciB0aGUgb2JqZWN0IGlkIGlzIHN0aWxsIGluIHVzZWQuXG4gICAgICpcbiAgICAgKiBTbyB0aGUgb2JqZWN0IGxvb2t1cCB0YWJsZSBoYXMgYW4gZW50cnkgZm9yIGV2ZXJ5IGV4aXN0aW5nIG9iamVjdCBpZCwgYSBwb2ludGVyIHRvIHRoZSB0aGUgbW9zdCByZWNlbnQgb2JqZWN0IGRlZmluaXRpb24sIGFzIGxvbmdcbiAgICAgKiBhcyB0aGUgb2JqZWN0IGV4aXN0cywgb3IgYW4gYWNjb3JkaW5nIGluZGljYXRpb24gb3RoZXJ3aXNlLlxuICAgICAqICovXG4gICAgY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKTogT2JqZWN0TG9va3VwVGFibGUge1xuICAgICAgICBsZXQgb2JqVGFibGU6IHsgW2lkOiBudW1iZXJdOiBYUmVmIH0gPSB7fVxuXG4gICAgICAgIGxldCB1cGRhdGU6IFVwZGF0ZVNlY3Rpb24gPSB0aGlzLmdldFJlY2VudFVwZGF0ZSgpXG4gICAgICAgIGxldCBvYmpfY291bnQgPSB1cGRhdGUuc2l6ZVxuXG4gICAgICAgIGxldCBpID0gMVxuICAgICAgICB3aGlsZSAoT2JqZWN0LmtleXMob2JqVGFibGUpLmxlbmd0aCA8IG9ial9jb3VudCkge1xuICAgICAgICAgICAgbGV0IHJlZnMgPSB1cGRhdGUucmVmc1xuXG4gICAgICAgICAgICBmb3IgKGxldCByZWYgb2YgcmVmcykge1xuICAgICAgICAgICAgICAgIGlmICghb2JqVGFibGUuaGFzT3duUHJvcGVydHkocmVmLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpUYWJsZVtyZWYuaWRdID0gcmVmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGUgPSB0aGlzLnVwZGF0ZXNbaV1cbiAgICAgICAgICAgICsraVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9ialRhYmxlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV3IG9iamVjdCBpZC4gSXQgcHJpbWFyaWx5IHRyaWVzIHRvIHJldXNlIGFuIGV4aXN0aW5nIGlkLCBidXQgaWYgbm8gc3VjaCBleGlzdHMgaXQgd2lsbCByZXR1cm4gYVxuICAgICAqIG5ldyBvbmVcbiAgICAgKiAqL1xuICAgIGdldEZyZWVPYmplY3RJZCgpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgbGV0IG9iamVjdExvb2t1cFRhYmxlOiBPYmplY3RMb29rdXBUYWJsZSA9IHRoaXMuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBmcmVlX2hlYWRlciA9IG9iamVjdExvb2t1cFRhYmxlWzBdXG5cbiAgICAgICAgaWYgKCFmcmVlX2hlYWRlcilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ3Jvc3NzaXRlIHJlZmVyZW5jZSBoYXMgbm8gaGVhZGVyIGZvciB0aGUgbGlua2VkIGxpc3Qgb2YgZnJlZSBvYmplY3RzXCIpXG5cbiAgICAgICAgLy8gaWYgdGhlIHBvaW50ZXIgb2Ygb2JqZWN0IDAgcG9pbnRzIHRvIDAgdGhlcmUgaXMgbm8gZnJlZWQgb2JqZWN0IHRoYXQgY2FuIGJlIHJldXNlZFxuICAgICAgICBpZiAoMCA9PT0gZnJlZV9oZWFkZXIucG9pbnRlcikge1xuICAgICAgICAgICAgaWYgKC0xID09PSB0aGlzLnRyYWlsZXJTaXplKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiVHJhaWxlciBzaXplIG5vdCBzZXRcIilcblxuICAgICAgICAgICAgcmV0dXJuIHsgb2JqOiB0aGlzLnRyYWlsZXJTaXplKyssIGdlbmVyYXRpb246IDAsIHJldXNlZDogZmFsc2UgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IGxpc3QgaGVhZFxuICAgICAgICBsZXQgcHRyID0gZnJlZV9oZWFkZXIucG9pbnRlclxuICAgICAgICBsZXQgZnJlZWRIZWFkZXJMaXN0OiBYUmVmW10gPSBbXVxuICAgICAgICB3aGlsZSAocHRyICE9PSAwKSB7XG4gICAgICAgICAgICBmcmVlZEhlYWRlckxpc3QucHVzaChmcmVlX2hlYWRlcilcbiAgICAgICAgICAgIGZyZWVfaGVhZGVyID0gb2JqZWN0TG9va3VwVGFibGVbcHRyXVxuXG4gICAgICAgICAgICBpZiAoIWZyZWVfaGVhZGVyLmZyZWUpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgdGhlIGNhc2Ugb2YgYW4gaW5jb3Npc3RlbnQgeHJlZlxuICAgICAgICAgICAgICAgIHJldHVybiB7IG9iajogdGhpcy50cmFpbGVyU2l6ZSsrLCBnZW5lcmF0aW9uOiAwLCByZXVzZWQ6IGZhbHNlIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHRyID0gZnJlZV9oZWFkZXIucG9pbnRlclxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdldEZyZWVIZWFkZXIgPSAoZnJlZUhlYWRlckxpc3Q6IFhSZWZbXSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgcCBvZiBmcmVlSGVhZGVyTGlzdC5yZXZlcnNlKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocC5nZW5lcmF0aW9uIDwgNjU1MzUgJiYgLy8gbWF4IGdlbmVyYXRpb24gbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIC0xID09PSB0aGlzLmFscmVhZHlfcmV1c2VkX2lkcy5pbmRleE9mKHApKSB7IC8vIG5vdCBhbHJlYWR5IHJldXNlZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIGxldCByZXVzZWRfZnJlZV9oZWFkZXIgPSBnZXRGcmVlSGVhZGVyKGZyZWVkSGVhZGVyTGlzdClcblxuICAgICAgICBpZiAocmV1c2VkX2ZyZWVfaGVhZGVyKSB7XG4gICAgICAgICAgICBmcmVlX2hlYWRlciA9IHJldXNlZF9mcmVlX2hlYWRlclxuXG4gICAgICAgICAgICAvLyBzdG9yZSB1c2VkIGlkIHRvIG1ha2Ugc3VyZSBpdCB3aWxsIG5vdCBiZSBzZWxlY3RlZCBhZ2FpblxuICAgICAgICAgICAgdGhpcy5hbHJlYWR5X3JldXNlZF9pZHMucHVzaChmcmVlX2hlYWRlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB0aGF0IGFsbCBmcmVlZCBvYmplY3QgaWRzIGFyZSBhbHJlYWR5IHJldXNlZFxuICAgICAgICAgICAgcmV0dXJuIHsgb2JqOiB0aGlzLnRyYWlsZXJTaXplKyssIGdlbmVyYXRpb246IDAsIHJldXNlZDogZmFsc2UgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgb2JqOiBmcmVlX2hlYWRlci5wb2ludGVyLCBnZW5lcmF0aW9uOiBvYmplY3RMb29rdXBUYWJsZVtmcmVlX2hlYWRlci5pZF0uZ2VuZXJhdGlvbiwgcmV1c2VkOiB0cnVlIH1cbiAgICB9XG59XG4iLCJleHBvcnQgeyBQREZEb2N1bWVudFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmV4cG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IHsgQW5ub3RhdGlvbkZhY3RvcnkgfSBmcm9tICcuL2Fubm90YXRpb24nO1xuXG4iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IEFycmF5VXRpbCB9IGZyb20gJy4vYXJyYXktdXRpbCdcbmltcG9ydCB7IFN0cmVhbSwgRmxhdGVTdHJlYW0gfSBmcm9tICcuL3N0cmVhbSc7XG5pbXBvcnQgeyBPYmplY3RMb29rdXBUYWJsZSwgWFJlZiB9IGZyb20gJy4vZG9jdW1lbnQtaGlzdG9yeSc7XG5cbmludGVyZmFjZSBTdHJlYW1PYmplY3RMb29rdXBUYWJsZSB7XG4gICAgW2lkOiBudW1iZXJdOiBudW1iZXJcbn1cblxuLyoqXG4gKiBXaGlsZSB0aGUgZ2VuZXJhbCBVdGlsIGNsYXNzIGhvbGRzIGxvdyBsZXZlbCBtZXRob2RzIHRvIG5hdmlnYXRlIHRocm91Z2ggdGhlIHBkZiBkYXRhLCB0aGUgT2JqZWN0VXRpbFxuICogaXMgcHVycG9zZWZ1bGx5IGJ1aWxkIHRvIGV4dHJhY3QgY29tcGxldGUgb2JqZWN0cy4gSXQgcmV0dXJucyB0aG9zZSBhcyBqc29uIGRpY3Rpb25hcmllcy5cbiAqICovXG5leHBvcnQgY2xhc3MgT2JqZWN0VXRpbCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3REaWN0S2V5UmVjKGRhdGE6IFVpbnQ4QXJyYXksIHB0cjogbnVtYmVyLCBkaWN0OiBhbnkpOiBudW1iZXIge1xuICAgICAgICBjb25zb2xlLmxvZyhgcmVhZCBuZXh0IHdvcmQgZnJvbSAke3B0cn1gKVxuICAgICAgICBsZXQgbmV4dCA9IFV0aWwucmVhZE5leHRXb3JkKGRhdGEsIHB0cilcbiAgICAgICAgbGV0IG5leHRfc3RyaW5nOiBVaW50OEFycmF5IHwgdW5kZWZpbmVkID0gbmV4dC5yZXN1bHRcblxuICAgICAgICBpZiAoIW5leHRfc3RyaW5nKVxuICAgICAgICAgICAgcmV0dXJuIHB0clxuXG4gICAgICAgIGxldCBfcHRyID0gVXRpbC5za2lwRGVsaW1pdGVyKG5leHRfc3RyaW5nLCAwKVxuICAgICAgICBpZiAobmV4dF9zdHJpbmcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUHJvY2VzcyBLZXkgJHtVdGlsLmNvbnZlcnRBc2NpaVRvU3RyaW5nKG5leHRfc3RyaW5nISl9YClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm9jZXNzIGtleSB1bmRlZmluZWRcIilcblxuICAgICAgICBpZiAobmV4dF9zdHJpbmdbMF0gJiYgVXRpbC5ESUNUX0VORFswXSA9PT0gbmV4dF9zdHJpbmdbMF0pIHtcbiAgICAgICAgICAgIGxldCB3b3JkTG9va3VwID0gVXRpbC5yZWFkTmV4dFdvcmQoZGF0YSwgbmV4dC5lbmRfaW5kZXggKyAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2cod29yZExvb2t1cClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOZXh0IHdvcmQgbG9va3VwICR7VXRpbC5jb252ZXJ0QXNjaWlUb1N0cmluZyh3b3JkTG9va3VwLnJlc3VsdCEpfWApXG4gICAgICAgICAgICBpZiAod29yZExvb2t1cC5yZXN1bHQgJiYgVXRpbC5ESUNUX0VORFswXSA9PT0gd29yZExvb2t1cC5yZXN1bHRbMF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29yZExvb2t1cC5lbmRfaW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3RVdGlsLmV4dHJhY3REaWN0VmFsdWVSZWMoZGF0YSwgbmV4dC5lbmRfaW5kZXggKyAxLCBkaWN0LCBVdGlsLmNvbnZlcnRBc2NpaVRvU3RyaW5nKG5leHRfc3RyaW5nKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpOiBudW1iZXIgPSAwXG5cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3REaWN0VmFsdWVSZWMoZGF0YTogVWludDhBcnJheSwgcHRyOiBudW1iZXIsIGRpY3Q6IGFueSwgY3VycmVudF9rZXk6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZCk6IG51bWJlciB7XG4gICAgICAgIGxldCBuZXh0ID0gVXRpbC5yZWFkTmV4dFdvcmQoZGF0YSwgcHRyKVxuICAgICAgICBsZXQgbmV4dF9zdHJpbmc6IFVpbnQ4QXJyYXkgPSBuZXh0LnJlc3VsdCB8fCBuZXcgVWludDhBcnJheShbXSlcbiAgICAgICAgcHRyID0gbmV4dC5lbmRfaW5kZXggLSBuZXh0X3N0cmluZy5sZW5ndGggKyAxXG4gICAgICAgIGNvbnNvbGUubG9nKGByZWFkIG5leHQgd29yZCBmcm9tICR7cHRyfWApXG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9jZXNzIFZhbHVlICR7VXRpbC5jb252ZXJ0QXNjaWlUb1N0cmluZyhuZXh0X3N0cmluZyEpfWApXG5cbiAgICAgICAgaWYgKG5leHRfc3RyaW5nWzBdID09PSBVdGlsLkFSUkFZX1NUQVJUWzBdKSB7XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRfa2V5KVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBhbm9ueW1vdXMgYXJyYXkgZGVmaW5pdGlvblwiKVxuICAgICAgICAgICAgLy8gaGFuZGxlIGFycmF5XG4gICAgICAgICAgICBsZXQgZXh0cmFjdGVkX2FycmF5ID0gQXJyYXlVdGlsLmV4dHJhY3RBcnJheShkYXRhLCBwdHIpXG4gICAgICAgICAgICBkaWN0W2N1cnJlbnRfa2V5XSA9IGV4dHJhY3RlZF9hcnJheS5yZXN1bHRcbiAgICAgICAgICAgIHJldHVybiBPYmplY3RVdGlsLmV4dHJhY3REaWN0S2V5UmVjKGRhdGEsIGV4dHJhY3RlZF9hcnJheS5lbmRfaW5kZXggKyAxLCBkaWN0KVxuICAgICAgICB9IGVsc2UgaWYgKG5leHRfc3RyaW5nWzBdID09PSBVdGlsLlNUUklOR19TVEFSVFswXSkge1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50X2tleSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgYW5vbnltb3VzIHN0cmluZyBkZWZpbml0aW9uXCIpXG4gICAgICAgICAgICBsZXQgZXh0cmFjdGVkX3N0cmluZyA9IFV0aWwuZXh0cmFjdFN0cmluZyhkYXRhLCBwdHIpXG4gICAgICAgICAgICBkaWN0W2N1cnJlbnRfa2V5XSA9IGV4dHJhY3RlZF9zdHJpbmcucmVzdWx0XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0VXRpbC5leHRyYWN0RGljdEtleVJlYyhkYXRhLCBleHRyYWN0ZWRfc3RyaW5nLmVuZF9pbmRleCArIDEsIGRpY3QpXG4gICAgICAgIH0gZWxzZSBpZiAobmV4dF9zdHJpbmdbMF0gPT09IFV0aWwuRElDVF9TVEFSVFswXSkgeyAvLyA8XG4gICAgICAgICAgICBpZiAoZGF0YVtuZXh0LmVuZF9pbmRleCArIDFdID09PSBVdGlsLkRJQ1RfU1RBUlRbMF0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRJQ1QgU1RBUlRcIilcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudF9rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1cF9kaWN0ID0ge31cbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZF9zdWJfZGljdCA9IE9iamVjdFV0aWwuZXh0cmFjdERpY3RLZXlSZWMoZGF0YSwgbmV4dC5lbmRfaW5kZXggKyAyLCBzdXBfZGljdClcbiAgICAgICAgICAgICAgICAgICAgZGljdFtjdXJyZW50X2tleV0gPSBzdXBfZGljdFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0VXRpbC5leHRyYWN0RGljdEtleVJlYyhkYXRhLCBlbmRfc3ViX2RpY3QgKyAxLCBkaWN0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3RVdGlsLmV4dHJhY3REaWN0S2V5UmVjKGRhdGEsIG5leHQuZW5kX2luZGV4ICsgMiwgZGljdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dF9zdHJpbmdbMF0gPT09IDQ3KSB7IC8vIC9cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT1BUSU9OIFZBTFVFXCIpXG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRfa2V5KVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBhbm9ueW1vdXMgcHJvcGVydHkgZGVmaW5pdGlvblwiKVxuICAgICAgICAgICAgbGV0IG9wdF92YWx1ZSA9IFV0aWwuZXh0cmFjdE9wdGlvblZhbHVlKGRhdGEsIHB0cilcbiAgICAgICAgICAgIGRpY3RbY3VycmVudF9rZXldID0gXCIvXCIgKyBvcHRfdmFsdWUucmVzdWx0XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0VXRpbC5leHRyYWN0RGljdEtleVJlYyhkYXRhLCBvcHRfdmFsdWUuZW5kX2luZGV4ICsgMSwgZGljdClcbiAgICAgICAgfSBlbHNlIHsgLy8gSXQgaXMgYSBudW1iZXIsIGJ1dCB0aGlzIG51bWJlciBtaWdodCBiZSBwYXJ0IG9mIGEgUmVmZXJlbmNlXG4gICAgICAgICAgICBsZXQgbG9va3VwTmV4dCA9IFV0aWwucmVhZE5leHRXb3JkKGRhdGEsIG5leHQuZW5kX2luZGV4ICsgMSlcbiAgICAgICAgICAgIGxldCBsb29rdXBOZXh0V29yZCA9IGxvb2t1cE5leHQucmVzdWx0IHx8IG5ldyBVaW50OEFycmF5KFtdKVxuXG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRfa2V5KVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiSW52YWxpZCBhbm9ueW1vdXMgcmVmZXJlbmNlL251bWJlciBkZWZpbml0aW9uXCIpXG5cbiAgICAgICAgICAgIGxldCB2YWx1ZV9lbmRfcHRyID0gbmV4dC5lbmRfaW5kZXggKyAxXG5cbiAgICAgICAgICAgIGlmIChsb29rdXBOZXh0V29yZFswXSA9PT0gNDcgfHwgbG9va3VwTmV4dFdvcmRbMF0gPT09IFV0aWwuRElDVF9FTkRbMF0pIHsgLy8gaXMgYSBudW1iZXJcbiAgICAgICAgICAgICAgICBkaWN0W2N1cnJlbnRfa2V5XSA9IFV0aWwuZXh0cmFjdE51bWJlcihkYXRhLCBwdHIpLnJlc3VsdFxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gaXMgYSByZXJlZmVyZW5jZVxuICAgICAgICAgICAgICAgIGxldCBleHRyYWN0ZWRfcmVmZXJlbmNlID0gVXRpbC5leHRyYWN0UmVmZXJlbmNlVHlwZWQoZGF0YSwgcHRyKVxuICAgICAgICAgICAgICAgIGRpY3RbY3VycmVudF9rZXldID0gZXh0cmFjdGVkX3JlZmVyZW5jZS5yZXN1bHRcbiAgICAgICAgICAgICAgICB2YWx1ZV9lbmRfcHRyID0gZXh0cmFjdGVkX3JlZmVyZW5jZS5lbmRfaW5kZXggKyAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoYW5kbGUgUmVmZXJlbmNlXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0VXRpbC5leHRyYWN0RGljdEtleVJlYyhkYXRhLCB2YWx1ZV9lbmRfcHRyLCBkaWN0KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkIG5vdCBpbnRlcnByZXQ6ICR7VXRpbC5jb252ZXJ0QXNjaWlUb1N0cmluZyhuZXh0X3N0cmluZyl9YClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBQREYgb2JqZWN0IGFuZCByZXR1cm5zIGEgZGljdGlvbmFyeSBjb250YWluaW5nIGl0cyBmaWVsZHNcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE9iamVjdChkYXRhOiBVaW50OEFycmF5LCB4cmVmOiBYUmVmIHwgbnVtYmVyLCBvYmplY3RMb29rdXBUYWJsZTogT2JqZWN0TG9va3VwVGFibGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQpOiBhbnkge1xuICAgICAgICBjb25zb2xlLmxvZyhgRXh0cmFjdCBvYmplY3QgJHtKU09OLnN0cmluZ2lmeSh4cmVmKX1gKVxuICAgICAgICBpZiAodHlwZW9mIHhyZWYgIT09ICdudW1iZXInICYmIHhyZWYuY29tcHJlc3NlZCkge1xuICAgICAgICAgICAgaWYgKCFvYmplY3RMb29rdXBUYWJsZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlByb3ZpZGUgT2JqZWN0TG9va3VwVGFibGUgdG8gZXh0cmFjdCBzdHJlYW0gb2JqZWN0XCIpXG5cbiAgICAgICAgICAgIHJldHVybiBPYmplY3RVdGlsLmV4dHJhY3RTdHJlYW1PYmplY3QoZGF0YSwgeHJlZi5pZCwgeHJlZi5nZW5lcmF0aW9uLCBvYmplY3RMb29rdXBUYWJsZVt4cmVmLnBvaW50ZXJdKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJldF9vYmo6IGFueSA9IHt9XG4gICAgICAgIGxldCBwdHIgPSB0eXBlb2YgeHJlZiA9PT0gJ251bWJlcicgPyB4cmVmIDogeHJlZi5wb2ludGVyXG5cbiAgICAgICAgbGV0IG9iamVjdF9pZCA9IFV0aWwuZXh0cmFjdE9iamVjdElkKGRhdGEsIHB0cilcblxuICAgICAgICByZXRfb2JqLmlkID0gb2JqZWN0X2lkXG5cbiAgICAgICAgcHRyID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLk9CSiwgZGF0YSwgcHRyKSArIFV0aWwuT0JKLmxlbmd0aFxuICAgICAgICBsZXQgcHRyX29ial9lbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCBkYXRhLCBwdHIpXG5cbiAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2UocHRyLCBwdHJfb2JqX2VuZClcbiAgICAgICAgVXRpbC5kZWJ1Z19wcmludEluZGV4ZWQoZGF0YSlcblxuICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgdGhlIG9iamVjdDpcbiAgICAgICAgbGV0IG5leHQgPSBVdGlsLnJlYWROZXh0V29yZChkYXRhLCAwKVxuXG4gICAgICAgIGlmIChuZXh0LnJlc3VsdCAmJiBuZXh0LnJlc3VsdFswXSA9PT0gVXRpbC5ESUNUX1NUQVJUWzBdKSB7IC8vIG9iamVjdCBjb250YWlucyBhIGRpY3RcbiAgICAgICAgICAgIGxldCByZXN1bHRfZGljdCA9IHt9XG4gICAgICAgICAgICBPYmplY3RVdGlsLmV4dHJhY3REaWN0VmFsdWVSZWMoZGF0YSwgMCwgcmVzdWx0X2RpY3QpXG4gICAgICAgICAgICByZXRfb2JqLnZhbHVlID0gcmVzdWx0X2RpY3RcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0LnJlc3VsdCAmJiBuZXh0LnJlc3VsdFswXSA9PT0gVXRpbC5BUlJBWV9TVEFSVFswXSkgeyAvLyBvYmplY3QgY29udGFpbnMgYW4gYXJyYXlcbiAgICAgICAgICAgIGxldCBsc3QgPSBBcnJheVV0aWwuZXh0cmFjdEFycmF5KGRhdGEsIDApXG4gICAgICAgICAgICByZXRfb2JqLnZhbHVlID0gbHN0LnJlc3VsdFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgb2JqZWN0IHR5cGUgLSBzdGFydGluZyB3aXRoOiAke25leHQucmVzdWx0fWApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgb2JqZWN0IGhhcyBhIHN0cmVhbSBwYXJ0XG4gICAgICAgIHB0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5TVFJFQU0sIGRhdGEsIDApXG5cbiAgICAgICAgaWYgKC0xICE9PSBwdHIpIHtcbiAgICAgICAgICAgIC8vIGV4dHJhY3Qgc3RyZWFtIHBhcnRcbiAgICAgICAgICAgIGxldCBwdHJfc3RyZWFtX2RhdGFfc3RhcnQgPSBwdHIgKyBVdGlsLlNUUkVBTS5sZW5ndGhcbiAgICAgICAgICAgIHB0cl9zdHJlYW1fZGF0YV9zdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBwdHJfc3RyZWFtX2RhdGFfc3RhcnQpXG5cbiAgICAgICAgICAgIGxldCBwdHJfc3RyZWFtX2RhdGFfZW5kID0gcHRyX3N0cmVhbV9kYXRhX3N0YXJ0ICsgcmV0X29iai52YWx1ZVtcIi9MZW5ndGhcIl1cblxuICAgICAgICAgICAgcmV0X29iai5zdHJlYW0gPSBPYmplY3RVdGlsLmV4dHJhY3RTdHJlYW1EYXRhKGRhdGEuc2xpY2UocHRyX3N0cmVhbV9kYXRhX3N0YXJ0LCBwdHJfc3RyZWFtX2RhdGFfZW5kKSwgcmV0X29iai52YWx1ZVtcIi9GaWx0ZXJcIl0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0X29ialxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RTdHJlYW1PYmplY3QoZGF0YTogVWludDhBcnJheSwgb2JqZWN0X2lkX3RvX2V4dHJhY3Q6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIHN0cmVhbU9ial94cmVmOiBYUmVmKTogYW55IHtcbiAgICAgICAgbGV0IHB0ciA9IHN0cmVhbU9ial94cmVmLnBvaW50ZXJcbiAgICAgICAgbGV0IHJldF9vYmo6IGFueSA9IHt9XG4gICAgICAgIC8vIGV4dHJhY3Qgb2JqZWN0IGlkXG4gICAgICAgIGxldCBvYmplY3RfaWQ6IGFueSA9IFV0aWwuZXh0cmFjdE9iamVjdElkKGRhdGEsIHB0cilcbiAgICAgICAgcmV0X29iai5pZCA9IG9iamVjdF9pZFxuXG4gICAgICAgIHB0ciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5PQkosIGRhdGEsIHB0cikgKyBVdGlsLk9CSi5sZW5ndGhcbiAgICAgICAgbGV0IHB0cl9vYmpfZW5kID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkVORE9CSiwgZGF0YSwgcHRyKVxuXG4gICAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKHB0ciwgcHRyX29ial9lbmQpXG5cbiAgICAgICAgLy8gZXh0cmFjdCBkaWN0IHBhcnRcbiAgICAgICAgbGV0IG5leHQgPSBVdGlsLnJlYWROZXh0V29yZChkYXRhLCAwKVxuXG4gICAgICAgIGlmICghbmV4dC5yZXN1bHQgfHwgbmV4dC5yZXN1bHRbMF0gIT09IFV0aWwuRElDVF9TVEFSVFswXSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIHN0cmVhbSBvYmplY3QgLS0gbm8gZGljdFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdF9kaWN0OiBhbnkgPSB7fVxuICAgICAgICBPYmplY3RVdGlsLmV4dHJhY3REaWN0VmFsdWVSZWMoZGF0YSwgMCwgcmVzdWx0X2RpY3QpXG4gICAgICAgIHJldF9vYmoudmFsdWUgPSByZXN1bHRfZGljdFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGZpbHRlciBpcyBzdXBwb3J0ZWRcbiAgICAgICAgaWYgKCFyZXN1bHRfZGljdFtcIi9GaWx0ZXJcIl0gfHwgcmVzdWx0X2RpY3RbXCIvRmlsdGVyXCJdICE9PSBcIi9GbGF0ZURlY29kZVwiKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFVuc3VwcG9ydGVkIHN0cmVhbSBmaWx0ZXI6ICR7cmVzdWx0X2RpY3RbXCIvRmlsdGVyXCJdfSAtIE9ubHkgc3VwcG9ydGVkIGZpbHRlciBpcyBGbGF0ZURlY29kZWApXG5cbiAgICAgICAgaWYgKCFyZXN1bHRfZGljdFtcIi9UeXBlXCJdIHx8IHJlc3VsdF9kaWN0W1wiL1R5cGVcIl0gIT09IFwiL09ialN0bVwiKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgc3RyZWFtIG9iamVjdCB0eXBlOiAke3Jlc3VsdF9kaWN0W1wiL1R5cGVcIl19YClcblxuICAgICAgICAvLyBleHRyYWN0IHRoZSBzdHJlYW0gbGVuZ3RoXG4gICAgICAgIGxldCBzdHJlYW1MZW5ndGggPSByZXN1bHRfZGljdFtcIi9MZW5ndGhcIl1cblxuICAgICAgICAvLyBleHRyYWN0IHN0cmVhbSBwYXJ0XG4gICAgICAgIGxldCBwdHJfc3RyZWFtX2RhdGFfc3RhcnQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuU1RSRUFNLCBkYXRhKSArIFV0aWwuU1RSRUFNLmxlbmd0aFxuICAgICAgICBwdHJfc3RyZWFtX2RhdGFfc3RhcnQgPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgcHRyX3N0cmVhbV9kYXRhX3N0YXJ0KVxuXG4gICAgICAgIGxldCBwdHJfc3RyZWFtX2RhdGFfZW5kID0gcHRyX3N0cmVhbV9kYXRhX3N0YXJ0ICsgc3RyZWFtTGVuZ3RoXG5cbiAgICAgICAgbGV0IHN0cmVhbSA9IE9iamVjdFV0aWwuZXh0cmFjdFN0cmVhbURhdGEoZGF0YS5zbGljZShwdHJfc3RyZWFtX2RhdGFfc3RhcnQsIHB0cl9zdHJlYW1fZGF0YV9lbmQpLCByZXN1bHRfZGljdFtcIi9GaWx0ZXJcIl0pXG5cblxuICAgICAgICBpZiAoIXJlc3VsdF9kaWN0W1wiL05cIl0pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgc3RyZWFtIG9iamVjdCAtLSBubyBudW1iZXIgb2Ygb2JqZWN0cyBzcGVjaWZpZWRcIilcblxuICAgICAgICBpZiAoIXJlc3VsdF9kaWN0W1wiL0ZpcnN0XCJdKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIHN0cmVhbSBvYmplY3QgLS0gbm8gb2Zmc2V0IHRvIHRoZSBmaXJzdCBvYmpjdCBzcGVjaWZpZWRcIilcblxuICAgICAgICBsZXQgc3RyZWFtUmVmZXJlbmNlczogU3RyZWFtT2JqZWN0TG9va3VwVGFibGUgPSBPYmplY3RVdGlsLmV4dHJhY3RTdHJlYW1PYmplY3RUYWJsZShzdHJlYW0sIHJlc3VsdF9kaWN0W1wiL05cIl0sIHJlc3VsdF9kaWN0W1wiL0ZpcnN0XCJdKVxuXG4gICAgICAgIGlmICghc3RyZWFtUmVmZXJlbmNlc1tvYmplY3RfaWRfdG9fZXh0cmFjdF0pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgT2JqZWN0ICR7b2JqZWN0X2lkX3RvX2V4dHJhY3R9IG5vdCBpbiBzdHJlYW0gb2JqZWN0YClcblxuICAgICAgICBsZXQgcmVzdWx0X29iajogYW55ID0geyBpZDogeyBvYmplY3RfaWRfdG9fZXh0cmFjdCwgZ2VuZXJhdGlvbjogMCB9IH1cblxuICAgICAgICBsZXQgdmFsdWUgPSB7fVxuICAgICAgICBPYmplY3RVdGlsLmV4dHJhY3REaWN0VmFsdWVSZWMoc3RyZWFtLmdldERhdGEoKSwgc3RyZWFtUmVmZXJlbmNlc1tvYmplY3RfaWRfdG9fZXh0cmFjdF0sIHZhbHVlKVxuICAgICAgICByZXN1bHRfb2JqLnZhbHVlID0gdmFsdWVcblxuICAgICAgICByZXR1cm4gcmVzdWx0X29ialxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RTdHJlYW1PYmplY3RUYWJsZShzdHJlYW06IFN0cmVhbSwgbnVtYmVyX29mX29iajogbnVtYmVyLCBvZmZzZXRfZmlyc3Rfb2JqOiBudW1iZXIpOiBTdHJlYW1PYmplY3RMb29rdXBUYWJsZSB7XG4gICAgICAgIGxldCByZWZlcmVuY2VzOiBTdHJlYW1PYmplY3RMb29rdXBUYWJsZSA9IHt9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJfb2Zfb2JqOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBvYmpfaWQgPSBzdHJlYW0uZ2V0TnVtYmVyKClcbiAgICAgICAgICAgIGxldCBwb2ludGVyID0gc3RyZWFtLmdldE51bWJlcigpICsgb2Zmc2V0X2ZpcnN0X29ialxuXG4gICAgICAgICAgICByZWZlcmVuY2VzW29ial9pZF0gPSBwb2ludGVyXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVmZXJlbmNlc1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RTdHJlYW1EYXRhKHN0cmVhbURhdGE6IFVpbnQ4QXJyYXksIGNvbXByZXNzaW9uOiBzdHJpbmcpOiBTdHJlYW0ge1xuICAgICAgICBsZXQgc3RyZWFtOiBTdHJlYW0gfCB1bmRlZmluZWQgPSB1bmRlZmluZWRcbiAgICAgICAgaWYgKGNvbXByZXNzaW9uID09PSAnL0ZsYXRlRGVjb2RlJykge1xuICAgICAgICAgICAgc3RyZWFtID0gbmV3IEZsYXRlU3RyZWFtKHN0cmVhbURhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgVW5zdXBwb3J0ZWQgc3RyZWFtIGZpbHRlcjogJHtjb21wcmVzc2lvbn0gLSBPbmx5IHN1cHBvcnRlZCBmaWx0ZXIgaXMgRmxhdGVEZWNvZGUgKHJpZ2h0IG5vdylgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdHJlYW0pXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkNvdWxkIG5vdCBkZXJpdmUgc3RyZWFtXCIpXG5cbiAgICAgICAgcmV0dXJuIHN0cmVhbVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFV0aWwsIFBERlZlcnNpb24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgT2JqZWN0VXRpbCB9IGZyb20gJy4vb2JqZWN0LXV0aWwnXG5pbXBvcnQgeyBEb2N1bWVudEhpc3RvcnksIE9iamVjdExvb2t1cFRhYmxlLCBYUmVmIH0gZnJvbSAnLi9kb2N1bWVudC1oaXN0b3J5JztcblxuLyoqXG4gKiBOb3RlIHRoYXQgdGhpcyBwYXJzZXIgZG9lcyBub3QgcGFyc2VzIHRoZSBQREYgZmlsZSBjb21wbGV0ZWx5LiBJdCBsb29rdXBzIHRob3NlXG4gKiBwYXJ0cyB0aGF0IGFyZSBpbXBvcnRhbnQgZm9yIHRoZSBjcmVhdGlvbiBvZiBhbm5vdGF0aW9ucy4gRm9yIG1vcmUgaW5mb3JtYXRpb25cbiAqIHBsZWFzZSByZWFkIHRoZSBSRUFETUUuXG4gKiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yIHtcbiAgICByOiBudW1iZXJcbiAgICBnOiBudW1iZXJcbiAgICBiOiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb3JkZXIge1xuICAgIGhvcml6b250YWxfY29ybmVyX3JhZGl1czogbnVtYmVyXG4gICAgdmVydGljYWxfY29ybmVyX3JhZGl1czogbnVtYmVyXG4gICAgYm9yZGVyX3dpZHRoOiBudW1iZXJcbiAgICBkYXNoX3BhdHRlcj86IG51bWJlcltdXG59XG5cbi8qKlxuICogUmVmZXJlbmNlcyBpbiBQREYgZG9jdW1lbnMgYXJlICBvZiB0aGUgZm9ybVxuICogPG9ial9pZD4gPGdlbmVyYXRpb24+IFJcbiAqXG4gKiBUaGlzIGhvbGRzIHN1Y2ggYSByZWZlcmVuY2VcbiAqICovXG5leHBvcnQgaW50ZXJmYWNlIFJlZmVyZW5jZVBvaW50ZXIge1xuICAgIG9iajogbnVtYmVyXG4gICAgZ2VuZXJhdGlvbjogbnVtYmVyXG4gICAgcmV1c2VkPzogYm9vbGVhbiB8IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbiB7XG4gICAgcGFnZTogbnVtYmVyID0gLTEvLyB0aGUgdGFyZ2V0IHBhZ2Ugb2YgdGhlIGFubm90YXRpb25cbiAgICB0eXBlOiBzdHJpbmcgPSBcIlwiLy8gdGhlIHN1YiB0eXBlIG9mIHRoZSBhcnJheSAoVGV4dCwgSGlnaGxpZ2h0LCAuLi4pXG4gICAgb2JqZWN0X2lkOiBSZWZlcmVuY2VQb2ludGVyIHwgbnVsbCA9IG51bGwvLyBhbiB1bnVzZWQgb2JqZWN0IGlkXG4gICAgaWQ6IHN0cmluZyA9IFwiXCIvLyB1bmlxdWUgYW5uYXRpb24gaWRlbnRpZmllclxuICAgIHJlY3Q6IG51bWJlcltdID0gW10vLyB0aGUgbG9jYXRpb24gb2YgdGhlIGFubm90YXRpb25cbiAgICBhdXRob3I6IHN0cmluZyA9IFwiXCIvLyB0aGUgYXV0aG9yIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgcGFnZVJlZmVyZW5jZTogUGFnZSB8IG51bGwgPSBudWxsLy8gVGhlIHJlZmVyZW5jZSB0byB0aGUgcGFnZSBvYmplY3QgdG8gd2hpY2ggdGhlIGFubm90YXRpb24gaXMgYWRkZWRcbiAgICB1cGRhdGVEYXRlOiBzdHJpbmcgPSBcIlwiLy8gVGhlIGRhdGUgd2hlbiB0aGUgYW5ub3RhdGlvbiB3YXMgY3JlYXRlZCBvciB1cGRhdGVkXG4gICAgY29udGVudHM/OiBzdHJpbmcgLy8gVGV4dCB0aGF0IHNoYWxsIGJlIGRpc3BsYXllZCBmb3IgdGhlIGFubm90YXRpb25cbiAgICBhbm5vdGF0aW9uX2ZsYWc/OiBudW1iZXIgLy8gU2VlIFBERiBzcGNlY2lmaWNhdGlvbiAnQW5ub3RhdGlvbiBGbGFnJ1xuICAgIGFwcGVhcmFuY2VfZGljdGlvbmFyeT86IGFueSAvLyBjb250cm9sIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhbm5vdGF0aW9uXG4gICAgYXBwZWFyYW5jZV9zdGF0ZT86IGFueSAvLyBjaGFuZ2UgdGhlIGFwcGVhcmFuY2UgYWNjb3JkaW5nIHRvIHN0YXRlc1xuICAgIGJvcmRlcj86IEJvcmRlciB8IG51bGwgPSBudWxsLy8gZGVmaW5lIHRoZSBib3JkZXJcbiAgICBjb2xvcj86IENvbG9yIHwgbnVsbCA9IG51bGwvLyB0aGUgY29sb3Igc2V0XG4gICAgb3BhY2l0eT86IG51bWJlciAvLyB0aGUgb3BhY2l0eSB2YWx1ZSAoQ0EgY2FsbGVkIGluIHRoZSBQREYgc3BlYylcbiAgICByaWNodGV4dD86IHN0cmluZyAvLyByaWNoIHRleHQgc3RyaW5nIGRpc3BsYXllZCBpbiB0aGUgcG9wdXAgd2luZG93IHdoZW4gdGhlIGFubm90YXRpb24gaXMgb3BlbmVkXG4gICAgaW5pdGlhbGx5T3Blbj86IGJvb2xlYW4gLy8gZmxhZyB0byBkZXNjcmliZSB3aGV0aGVyIHRoZSBhbm5vdGF0aW9uIHNoYWxsIGluaXRpYWxseSBiZSBvcGVuXG4gICAgaWNvbk5hbWU/OiBzdHJpbmcgLy8gbmFtZSBvZiB0aGUgdXNlZCBpY29uXG4gICAgYW5ub3RhdGlvblN0YXRlPzogc3RyaW5nIC8vIHRoZSBzdGF0ZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgIHN0YXRlTW9kZWw/OiBzdHJpbmdcbiAgICBkZWZhdWx0QXBwZWFyYW5jZT86IHN0cmluZyAvLyBkZWZhdWx0IGFwcGVhcmFuY2Ugc3RyaW5nXG4gICAgdGV4dEFsaWdubWVudD86IHN0cmluZyAvLyBsZWZ0LWp1c3RpZmllZCwgY2VudGVyZWQsIHJpZ2h0LWp1c3RpZmllZFxuICAgIHJpY2hUZXh0U3RyaW5nPzogc3RyaW5nIC8vIGdlbmVyYXRlcyB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYW5ub3RhdGlvblxuICAgIGNhbGxvdXRMaW5lPzogbnVtYmVyW10gLy8gY2FsbCBvdXQgbGluZVxuICAgIGludGVudD86IHN0cmluZyAvLyBhIHN0cmluZyBkZXNjcmliaW5nIHRoZSBpbnRlbnQ6IEZyZWVUZXh0LCBGcmVlVGV4dENhbGxvdXQsIEZyZWVUZXh0VHlwZVdyaXRlclxuICAgIGJvcmRlckVmZmVjdD86IGFueVxuICAgIHJkPzogYW55IC8vID9cbiAgICBib3JkZXJTdHlsZT86IGFueSAvLyBib3JkZXIgc3R5bGVcbiAgICBsaW5lRW5kaW5nPzogc3RyaW5nIC8vIHRoZSBsaW5lIGVuZGluZyB0eXBlIG9mIHRoZSBjYWxsb3V0IGxpbmVcbiAgICBzdGFtcFR5cGU/OiBzdHJpbmcgLy8gdGhlIG5hbWUgb2YgdGhlIHVzZWQgc3RhbXAgdHlwZS4gQ2FuIGJlOiBbQXBwcm92ZWQsIEV4cGVyaW1lbnRhbCwgTm90QXBwcm92ZWQsIEFzSXMsIEV4cGlyZWQsIE5vdEZvclB1YmxpY1JlbGVhc2UsIENvbmZpZGVudGlhbCwgRmluYWwsIFNvbGQsIERlcGFydG1lbnRhbCwgRm9yQ29tbWVudCwgVG9wU2VjcmV0LCBEcmFmdCwgRm9yUHVibGljUmVsZWFzZV1cbiAgICBjYXJldFN5bWJvbD86IHN0cmluZyAvLyBDYW4gYmUgUCB0byB1c2UgYSBwYXJhZ3JhcGggc3ltYm9sIGZvciB0aGUgY2FyZXQgb3IgTm9uZVxuICAgIHF1YWRQb2ludHM/OiBudW1iZXJbXSAvLyBzcGVjaWZpZXMgaG93IHRoZSBhbm5vdGF0aW9uIGdvZXMgYXJyb3VuZCB0aGUgdGV4dFxuICAgIGlua0xpc3Q/OiBudW1iZXJbXVtdXG4gICAgYm9yZGVyX3N0eWxlPzogYW55XG4gICAgY29sb3Jfc3BhY2U/OiBudW1iZXJbXVxuICAgIGJvcmRlcl9lZmZlY3Q/OiBhbnlcbiAgICB2ZXJ0aWNlcz86IG51bWJlcltdXG4gICAgbGluZV9lbmRpbmc/OiBzdHJpbmdbXVxuICAgIGludGVyaW9yX2NvbG9yPzogbnVtYmVyW11cbiAgICBtZWFzdXJlPzogYW55XG4gICAgaXNfZGVsZXRlZD86IGJvb2xlYW5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoW10pKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgYW5ub3RhdGlvbiBvYmplY3QgKHBhcnRpYWxseSlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QoeHJlZjogWFJlZiwgcGFnZTogUGFnZSwgb2JqZWN0TG9va3VwVGFibGU6IE9iamVjdExvb2t1cFRhYmxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUcnkgdG8gZXh0cmFjdCAke0pTT04uc3RyaW5naWZ5KHhyZWYpfWApXG4gICAgICAgIGxldCBhbm5vdF9vYmogPSBPYmplY3RVdGlsLmV4dHJhY3RPYmplY3QodGhpcy5kYXRhLCB4cmVmLCBvYmplY3RMb29rdXBUYWJsZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJFWFRSQUNURUQgQU5OT1RBVElPTiBPQkpFQ1RcIilcblxuICAgICAgICB0aGlzLm9iamVjdF9pZCA9IGFubm90X29iai5pZFxuXG4gICAgICAgIGFubm90X29iaiA9IGFubm90X29iai52YWx1ZVxuXG4gICAgICAgIHRoaXMudHlwZSA9IGFubm90X29ialtcIi9UeXBlXCJdXG4gICAgICAgIHRoaXMucmVjdCA9IGFubm90X29ialtcIi9SZWN0XCJdXG4gICAgICAgIHRoaXMucGFnZVJlZmVyZW5jZSA9IHBhZ2VcbiAgICAgICAgdGhpcy51cGRhdGVEYXRlID0gYW5ub3Rfb2JqW1wiL01cIl1cbiAgICAgICAgdGhpcy5ib3JkZXIgPSBhbm5vdF9vYmpbXCIvQm9yZGVyXCJdXG4gICAgICAgIHRoaXMuY29sb3IgPSBhbm5vdF9vYmpbXCIvQ1wiXVxuICAgICAgICB0aGlzLmF1dGhvciA9IGFubm90X29ialtcIi9UXCJdXG4gICAgICAgIHRoaXMuYXV0aG9yID0gYW5ub3Rfb2JqW1wiL05NXCJdXG4gICAgICAgIHRoaXMuY29udGVudHMgPSBhbm5vdF9vYmpbXCIvQ29udGVudHNcIl1cbiAgICAgICAgdGhpcy5xdWFkUG9pbnRzID0gYW5ub3Rfb2JqW1wiL1F1YWRwb2ludHNcIl1cbiAgICAgICAgdGhpcy5pbmtMaXN0ID0gYW5ub3Rfb2JqW1wiL0lua2xpc3RcIl1cbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgQ2F0YWxvZyBvYmplY3Qgb2YgdGhlIFBERiBkb2N1bWVudFxuICogKi9cbmV4cG9ydCBjbGFzcyBDYXRhbG9nT2JqZWN0IHtcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgZGF0YSByZXByZXNlbnRpbmcgdGhlIG9iamVjdC5cbiAgICAgKiAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSwgcHJpdmF0ZSB4cmVmOiBYUmVmLCBwcml2YXRlIG9iamVjdExvb2t1cFRhYmxlOiBPYmplY3RMb29rdXBUYWJsZSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKVxuXG4gICAgICAgIGxldCBwYWdlX29iaiA9IE9iamVjdFV0aWwuZXh0cmFjdE9iamVjdCh0aGlzLmRhdGEsIHhyZWYsIG9iamVjdExvb2t1cFRhYmxlKS52YWx1ZVxuXG4gICAgICAgIGlmIChwYWdlX29ialtcIi9UeXBlXCJdICE9PSBcIi9DYXRhbG9nXCIpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBjYXRhbG9nIG9iamVjdCBhdCBwb3NpdGlvbiAke3hyZWYucG9pbnRlcn1gKVxuXG4gICAgICAgIHRoaXMucGFnZXNPYmplY3RJZCA9IHBhZ2Vfb2JqW1wiL1BhZ2VzXCJdXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHBhZ2VzT2JqZWN0SWQ6IFJlZmVyZW5jZVBvaW50ZXIgPSB7IG9iajogLTEsIGdlbmVyYXRpb246IC0xIH1cblxuICAgIGdldFBhZ2VzT2JqZWN0SWQoKTogUmVmZXJlbmNlUG9pbnRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VzT2JqZWN0SWRcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgUGFnZVRyZWUgb2JqZWN0IG9mIHRoZSBQREYgZG9jdW1lbnRcbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB3aXRoIC9UeXBlIC9QYWdlc1xuICogKi9cbmV4cG9ydCBjbGFzcyBQYWdlVHJlZSB7XG5cbiAgICBwcml2YXRlIHBhZ2VDb3VudDogbnVtYmVyID0gLTFcblxuICAgIHByaXZhdGUgcGFnZVJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXksIHByaXZhdGUgb2JqZWN0TG9va3VwVGFibGU6IE9iamVjdExvb2t1cFRhYmxlKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIGtpZHMgcmVmZXJlbmNlcyByZWN1cnNpdmVseS5cbiAgICAgKiBGb3IgZXZlcnkga2lkIGl0IGNoZWNrcyBpZiB0aGUgcmVmZXJlbmNlZCBvYmplY3QgdHlwZSBpczpcbiAgICAgKiAtIGEgL1BhZ2VzIG9iamVjdCB0aGVuIGl0IHJlY3Vyc2l2ZWx5IGxvb2t1cHMgaXRzIGNoaWxkcmVuXG4gICAgICogLSBhIC9QYWdlIG9iamVjdCB0aGVuIGl0IGFkZHMgdGhlIHJlZmVyZW5jZXNcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RQYWdlUmVmZXJlbmNlcyhyZWZlcmVuY2VzOiBSZWZlcmVuY2VQb2ludGVyW10pIHtcbiAgICAgICAgY29uc29sZS5sb2coYEV4dHJhY3QgcmVmZXJlbmNlczogJHtKU09OLnN0cmluZ2lmeShyZWZlcmVuY2VzKX1gKVxuXG4gICAgICAgIGZvciAobGV0IHJlZmVyZW5jZSBvZiByZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICBsZXQgeHJlZiA9IHRoaXMub2JqZWN0TG9va3VwVGFibGVbcmVmZXJlbmNlLm9ial1cblxuICAgICAgICAgICAgbGV0IGtpZF9wYWdlX29iaiA9IE9iamVjdFV0aWwuZXh0cmFjdE9iamVjdCh0aGlzLmRhdGEsIHhyZWYsIHRoaXMub2JqZWN0TG9va3VwVGFibGUpLnZhbHVlXG5cbiAgICAgICAgICAgIGlmIChraWRfcGFnZV9vYmpbXCIvVHlwZVwiXSA9PT0gXCIvUGFnZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlUmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2lkX3BhZ2Vfb2JqW1wiL1R5cGVcIl0gPT09IFwiL1BhZ2VzXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RQYWdlUmVmZXJlbmNlcyhraWRfcGFnZV9vYmpbXCIvS2lkc1wiXSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgb2JqZWN0IHR5cGUgJHtraWRfcGFnZV9vYmpbXCIvVHlwZVwiXX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCB0aGUgb2JqZWN0IGRhdGEgYXQgdGhlIGdpdmVuIHBvaW50ZXJcbiAgICAgKiAqL1xuICAgIGV4dHJhY3QoeHJlZjogWFJlZiwgb2JqZWN0TG9va3VwVGFibGU6IE9iamVjdExvb2t1cFRhYmxlKSB7XG4gICAgICAgIGxldCBwYWdlX3RyZWVfb2JqID0gT2JqZWN0VXRpbC5leHRyYWN0T2JqZWN0KHRoaXMuZGF0YSwgeHJlZiwgb2JqZWN0TG9va3VwVGFibGUpLnZhbHVlXG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gcGFnZV90cmVlX29ialtcIi9Db3VudFwiXVxuXG4gICAgICAgIGlmICghcGFnZV90cmVlX29ialtcIi9LaWRzXCJdKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGluZGV4IG9mIC9LaWRzIGluIC9QYWdlcyBvYmplY3RgKVxuXG4gICAgICAgIGxldCByZWZzID0gcGFnZV90cmVlX29ialtcIi9LaWRzXCJdXG5cbiAgICAgICAgdGhpcy5wYWdlUmVmZXJlbmNlcyA9IFtdXG5cbiAgICAgICAgdGhpcy5leHRyYWN0UGFnZVJlZmVyZW5jZXMocmVmcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcGFnZXMgdGhlIHBhZ2UgdHJlZSBjb21wcmlzZXNcbiAgICAgKiAqL1xuICAgIGdldFBhZ2VDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlQ291bnRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZWZlcmVuY2UgdG8gdGhlIHBhZ2Ugb2JqZWN0c1xuICAgICAqICovXG4gICAgZ2V0UGFnZVJlZmVyZW5jZXMoKTogUmVmZXJlbmNlUG9pbnRlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZVJlZmVyZW5jZXNcbiAgICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBhZ2Ugb2JqZWN0IGluIHRoZSBQREYgZG9jdW1lbnRcbiAqICovXG5leHBvcnQgY2xhc3MgUGFnZSB7XG4gICAgcHVibGljIG9iamVjdF9pZDogUmVmZXJlbmNlUG9pbnRlciB8IHVuZGVmaW5lZCAvLyBUaGUgb2JqZWN0IGlkIGFuZCBnZW5lcmF0aW9uIG9mIHRoZSBvYmplY3RcblxuICAgIHB1YmxpYyBhbm5vdHM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IFtdXG5cbiAgICBwdWJsaWMgaGFzQW5ub3RzRmllbGQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgcHVibGljIGFubm90c1BvaW50ZXI6IFJlZmVyZW5jZVBvaW50ZXIgfCB1bmRlZmluZWRcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogVWludDhBcnJheSwgcHJpdmF0ZSBkb2N1bWVudEhpc3Rvcnk6IERvY3VtZW50SGlzdG9yeSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSByZWZlcmVuY2VzIGluIHRoZSBsaW5rZWQgYW5ub3RhdGlvbnMgYXJyYXlcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RBbm5vdGF0aW9uQXJyYXkoKSB7XG4gICAgICAgIGxldCBvYmpfdGFibGUgPSB0aGlzLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgaWYgKCF0aGlzLmFubm90c1BvaW50ZXIpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkFubm90YXRpb25zIHBvaW50ZXIgbm90IHNldFwiKVxuXG4gICAgICAgIGxldCByZWZfYW5ub3RfdGFibGUgPSBvYmpfdGFibGVbdGhpcy5hbm5vdHNQb2ludGVyLm9ial1cblxuICAgICAgICBsZXQgYW5ub3RhdGlvbnNfb2JqID0gT2JqZWN0VXRpbC5leHRyYWN0T2JqZWN0KHRoaXMuZGF0YSwgcmVmX2Fubm90X3RhYmxlLCBvYmpfdGFibGUpXG5cbiAgICAgICAgdGhpcy5hbm5vdHMgPSBhbm5vdGF0aW9uc19vYmoudmFsdWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgcGFnZSBvYmplY3Qgc3RhcnRpbmcgYXQgcG9zaXRpb24gcHRyXG4gICAgICogKi9cbiAgICBleHRyYWN0KHhyZWY6IFhSZWYsIG9iamVjdExvb2t1cFRhYmxlOiBPYmplY3RMb29rdXBUYWJsZSkge1xuXG4gICAgICAgIGxldCBwYWdlX29iaiA9IE9iamVjdFV0aWwuZXh0cmFjdE9iamVjdCh0aGlzLmRhdGEsIHhyZWYsIG9iamVjdExvb2t1cFRhYmxlKVxuXG4gICAgICAgIHRoaXMub2JqZWN0X2lkID0gcGFnZV9vYmouaWRcblxuICAgICAgICBsZXQgYW5ub3RzID0gcGFnZV9vYmoudmFsdWVbXCIvQW5ub3RzXCJdXG5cbiAgICAgICAgaWYgKGFubm90cykge1xuICAgICAgICAgICAgdGhpcy5oYXNBbm5vdHNGaWVsZCA9IHRydWVcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYW5ub3RzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RzID0gYW5ub3RzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5ub3RzUG9pbnRlciA9IGFubm90c1xuXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0QW5ub3RhdGlvbkFycmF5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBQYXJzZXMgdGhlIHJlbGV2YW50IHBhcnRzIG9mIHRoZSBQREYgZG9jdW1lbnQgYW5kIHByb3ZpZGVzIGZ1bmN0aW9uYWxpdHkgdG8gZXh0cmFjdCB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIGZvclxuICogYWRkaW5nIGFubm90YXRpb25zXG4gKiAqL1xuZXhwb3J0IGNsYXNzIFBERkRvY3VtZW50UGFyc2VyIHtcblxuICAgIHByaXZhdGUgdmVyc2lvbjogUERGVmVyc2lvbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuXG4gICAgcHVibGljIGRvY3VtZW50SGlzdG9yeTogRG9jdW1lbnRIaXN0b3J5ID0gbmV3IERvY3VtZW50SGlzdG9yeShuZXcgVWludDhBcnJheShbXSkpXG5cbiAgICBwcml2YXRlIGNhdGFsb2dPYmplY3Q6IENhdGFsb2dPYmplY3QgfCB1bmRlZmluZWQgPSB1bmRlZmluZWRcblxuICAgIHByaXZhdGUgcGFnZVRyZWU6IFBhZ2VUcmVlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSlcblxuICAgICAgICB0aGlzLmRvY3VtZW50SGlzdG9yeSA9IG5ldyBEb2N1bWVudEhpc3RvcnkodGhpcy5kYXRhKVxuICAgICAgICB0aGlzLmRvY3VtZW50SGlzdG9yeS5leHRyYWN0RG9jdW1lbnRIaXN0b3J5KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWpvciBhbmQgbWlub3IgdmVyc2lvbiBvZiB0aGUgcGRmIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBnZXRQREZWZXJzaW9uKCk6IFBERlZlcnNpb24ge1xuICAgICAgICBpZiAodGhpcy52ZXJzaW9uKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmVyc2lvblxuXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IFV0aWwuZXh0cmFjdFZlcnNpb24odGhpcy5kYXRhLCAwKVxuXG4gICAgICAgIHJldHVybiB0aGlzLnZlcnNpb25cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZnJlZSBvYmplY3QgaWQuIEl0IGZpcnN0IGNoZWNrcyB3ZXRoZXIgdGhlcmUgY2FuIGJlIGFuIGZyZWVkIG9iamVjdCBpZCByZXVzZWQuIElmIHRoYXQgaXMgbm90IHRoZSBjYXNlXG4gICAgICogaXQgY3JlYXRlcyBhIG5ldyBvbmVcbiAgICAgKiAqL1xuICAgIGdldEZyZWVPYmplY3RJZCgpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRIaXN0b3J5LmdldEZyZWVPYmplY3RJZCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2F0YWxvZyBvYmplY3Qgb2YgdGhlIFBERiBmaWxlXG4gICAgICogKi9cbiAgICBnZXRDYXRhbG9nKCk6IENhdGFsb2dPYmplY3Qge1xuICAgICAgICBsZXQgcmVjZW50X3VwZGF0ZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmdldFJlY2VudFVwZGF0ZSgpXG4gICAgICAgIGlmIChyZWNlbnRfdXBkYXRlLnJvb3QpIHtcbiAgICAgICAgICAgIGxldCByb290X29iaiA9IHJlY2VudF91cGRhdGUucm9vdFxuXG4gICAgICAgICAgICBsZXQgb2JqX3RhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IENhdGFsb2dPYmplY3QodGhpcy5kYXRhLCBvYmpfdGFibGVbcm9vdF9vYmoub2JqXSwgb2JqX3RhYmxlKVxuICAgICAgICB9IGVsc2UgeyAvLyBJZiB3ZSBkbyBub3Qga25vdyB0aGUgY2F0YWxvZ3VlIG9iamVjdCB3ZSBuZWVkIHRvIGxvb2sgaXQgdXBcbiAgICAgICAgICAgIC8vIEluIGNyb3NzIHJlZmVyZW5jZSBzdHJlYW0gb2JqZWN0cyBubyAvUk9PVCBmaWVsZCBpcyByZXF1aXJlZCwgaG93ZXZlciBvZnRlbiBpdCBpcyBwcm92aWRlZCBhbnl3YXlcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBydW4gdGhpcyByb3V0aW5lLCBidXQgYnVmZmVyIHRoZSBjYXRhbG9nIG9iamVjdFxuICAgICAgICAgICAgaWYgKHRoaXMuY2F0YWxvZ09iamVjdClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYXRhbG9nT2JqZWN0XG5cbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiRG9lcyBub3Qgd29yayBmb3IgY29tcHJlc3NlZCBkYXRhXCIpXG5cbiAgICAgICAgICAgIC8vbGV0IG9ial90YWJsZSA9IHRoaXMuZG9jdW1lbnRIaXN0b3J5LmNyZWF0ZU9iamVjdExvb2t1cFRhYmxlKClcblxuICAgICAgICAgICAgLy9mb3IgKGxldCBpID0gMTsgaSA8IHJlY2VudF91cGRhdGUuc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAvLyAgICBsZXQgX3R5cGUgPSBVdGlsLmV4dHJhY3RGaWVsZCh0aGlzLmRhdGEsIFV0aWwuX1RZUEUsIG9ial90YWJsZVtpXS5wb2ludGVyKVxuXG4gICAgICAgICAgICAvLyAgICBpZiAoVXRpbC5hcmVBcnJheXNFcXVhbChfdHlwZSwgVXRpbC5DQVRBTE9HKSkge1xuICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuY2F0YWxvZ09iamVjdCA9IG5ldyBDYXRhbG9nT2JqZWN0KHRoaXMuZGF0YSwgb2JqX3RhYmxlW2ldKVxuXG4gICAgICAgICAgICAvLyAgICAgICAgaWYgKHRoaXMuY2F0YWxvZ09iamVjdClcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2F0YWxvZ09iamVjdFxuICAgICAgICAgICAgLy8gICAgfVxuICAgICAgICAgICAgLy99XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBFcnJvcihcIkNvdWxkIG5vdCBpZGVudGlmeSBjYXRhbG9nIG9iamVjdFwiKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIHRyZWUgb2JqZWN0IG9mIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgZ2V0UGFnZVRyZWUoKTogUGFnZVRyZWUge1xuICAgICAgICBpZiAodGhpcy5wYWdlVHJlZSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2VUcmVlXG4gICAgICAgIGxldCBvYmpfdGFibGU6IE9iamVjdExvb2t1cFRhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBjYXRhbG9nX29iamVjdCA9IHRoaXMuZ2V0Q2F0YWxvZygpXG5cbiAgICAgICAgbGV0IHBhZ2VzX2lkID0gY2F0YWxvZ19vYmplY3QuZ2V0UGFnZXNPYmplY3RJZCgpXG4gICAgICAgIGxldCBwYWdlc19yZWYgPSBvYmpfdGFibGVbcGFnZXNfaWQub2JqXVxuXG4gICAgICAgIGxldCBwYWdlVHJlZSA9IG5ldyBQYWdlVHJlZSh0aGlzLmRhdGEsIG9ial90YWJsZSlcbiAgICAgICAgcGFnZVRyZWUuZXh0cmFjdChwYWdlc19yZWYsIG9ial90YWJsZSlcblxuICAgICAgICB0aGlzLnBhZ2VUcmVlID0gcGFnZVRyZWVcblxuICAgICAgICByZXR1cm4gcGFnZVRyZWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgcGFnZSB3aXRoIHRoZSBnaXZlbiBwYWdlTnVtYmVyXG4gICAgICogKi9cbiAgICBnZXRQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IFBhZ2Uge1xuICAgICAgICBsZXQgcGFnZVRyZWUgPSB0aGlzLmdldFBhZ2VUcmVlKClcbiAgICAgICAgbGV0IHBhZ2VJZCA9IHBhZ2VUcmVlLmdldFBhZ2VSZWZlcmVuY2VzKClbcGFnZU51bWJlcl1cblxuICAgICAgICBsZXQgb2JqX3RhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBvYmpfcHRyID0gb2JqX3RhYmxlW3BhZ2VJZC5vYmpdXG5cbiAgICAgICAgbGV0IHBhZ2UgPSBuZXcgUGFnZSh0aGlzLmRhdGEsIHRoaXMuZG9jdW1lbnRIaXN0b3J5KVxuICAgICAgICBwYWdlLmV4dHJhY3Qob2JqX3B0ciwgb2JqX3RhYmxlKVxuXG4gICAgICAgIHJldHVybiBwYWdlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYW5ub3RhdGlvbnMgdGhhdCBleGlzdCBpbiB0aGUgZG9jdW1lbnRcbiAgICAgKiAqL1xuICAgIGV4dHJhY3RBbm5vdGF0aW9ucygpOiBBbm5vdGF0aW9uW11bXSB7XG4gICAgICAgIGxldCBhbm5vdHM6IEFubm90YXRpb25bXVtdID0gW11cbiAgICAgICAgbGV0IHB0OiBQYWdlVHJlZSA9IHRoaXMuZ2V0UGFnZVRyZWUoKVxuICAgICAgICBsZXQgb2JqX3RhYmxlID0gdGhpcy5kb2N1bWVudEhpc3RvcnkuY3JlYXRlT2JqZWN0TG9va3VwVGFibGUoKVxuXG4gICAgICAgIGxldCBwYWdlQ291bnQ6IG51bWJlciA9IHB0LmdldFBhZ2VDb3VudCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2VDb3VudClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXh0cmFjdCBhbm5vdGF0aW9ucyBvZiBwYWdlICR7aX1gKVxuICAgICAgICAgICAgbGV0IHBhZ2U6IFBhZ2UgPSB0aGlzLmdldFBhZ2UoaSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSEVSRVwiKVxuXG4gICAgICAgICAgICBsZXQgYW5ub3RhdGlvblJlZmVyZW5jZXM6IFJlZmVyZW5jZVBvaW50ZXJbXSA9IHBhZ2UuYW5ub3RzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBBR0UgQU5OT1RTXCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlLmFubm90cylcblxuICAgICAgICAgICAgbGV0IHBhZ2VBbm5vdHM6IEFubm90YXRpb25bXSA9IFtdXG5cbiAgICAgICAgICAgIGZvciAobGV0IHJlZlB0ciBvZiBhbm5vdGF0aW9uUmVmZXJlbmNlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRU5URVIgTE9PUFwiKVxuICAgICAgICAgICAgICAgIGxldCBhID0gbmV3IEFubm90YXRpb24odGhpcy5kYXRhKVxuICAgICAgICAgICAgICAgIGEuZXh0cmFjdChvYmpfdGFibGVbcmVmUHRyLm9ial0sIHBhZ2UsIG9ial90YWJsZSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQW5ub3RhdG9uICR7YX1gKVxuICAgICAgICAgICAgICAgIGEucGFnZSA9IGlcbiAgICAgICAgICAgICAgICBwYWdlQW5ub3RzLnB1c2goYSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhFUkUgMlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYW5ub3RzLnB1c2gocGFnZUFubm90cylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbm5vdHNcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyBPYmplY3RVdGlsIH0gZnJvbSAnLi9vYmplY3QtdXRpbCc7XG5pbXBvcnQgeyBYUmVmIH0gZnJvbSAnLi9kb2N1bWVudC1oaXN0b3J5JztcbmltcG9ydCAqIGFzIFBha28gZnJvbSAncGFrbydcblxuZXhwb3J0IGNsYXNzIFN0cmVhbSB7XG4gICAgcHJpdmF0ZSBfcHRyOiBudW1iZXIgPSAwXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGE6IFVpbnQ4QXJyYXkpIHsgfVxuXG4gICAgZ2V0RGF0YSgpOiBVaW50OEFycmF5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuICAgIH1cblxuICAgIGdldExlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxuICAgIH1cblxuICAgIHBlZWtOQnl0ZXMobjogbnVtYmVyID0gMSwgcHRyOiBudW1iZXIgPSAwKTogVWludDhBcnJheSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuc2xpY2UocHRyLCBwdHIgKyBuKVxuICAgIH1cblxuICAgIHBlZWtOQnl0ZXNBc051bWJlcihuOiBudW1iZXIgPSAxLCBwdHI6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICBsZXQgcmVzOiBudW1iZXIgPSAwXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIHJlcyArPSAodGhpcy5kYXRhW2kgKyBwdHJdIDw8IDggKiAobiAtIGkgLSAxKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWFkcyB0aGUgbmV4dCAnbicgYnl0ZXMgb2YgcG9zaXRpb24gJ3B0cicgYW5kIHJldHVybnMgaXRzIGNvbnRlbnQgYXMgYSBudW1iZXJcbiAgICAgKiAqL1xuICAgIGdldE5CeXRlc0FzTnVtYmVyKG46IG51bWJlciA9IDEpOiBudW1iZXIge1xuICAgICAgICBsZXQgcmVzOiBudW1iZXIgPSB0aGlzLnBlZWtOQnl0ZXNBc051bWJlcihuLCB0aGlzLl9wdHIpXG5cbiAgICAgICAgdGhpcy5fcHRyICs9IG5cblxuICAgICAgICByZXR1cm4gcmVzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2tpcHMgc3BhY2VzIGFuZCB0aGFuIGFkZHMgYXMgbWFueSBieXRlcyB0byB0aGUgbnVtYmVyIHVudGlsIGFub3RoZXIgc3BhY2UgaXMgcmVhY2hlZFxuICAgICAqICovXG4gICAgZ2V0TnVtYmVyKCk6IG51bWJlciB7XG4gICAgICAgIGxldCBuYnIgPSBVdGlsLmV4dHJhY3ROdW1iZXIodGhpcy5kYXRhLCB0aGlzLl9wdHIpXG4gICAgICAgIHRoaXMuX3B0ciA9IG5ici5lbmRfaW5kZXhcblxuICAgICAgICByZXR1cm4gbmJyLnJlc3VsdFxuXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmxhdGVTdHJlYW0gZXh0ZW5kcyBTdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgIHN1cGVyKGRhdGEpXG4gICAgICAgIHRoaXMuZGF0YSA9IFBha28uaW5mbGF0ZShkYXRhKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcic7XG5cbi8qKlxuICogVGhlIHJlc3VsdCBjb250YWlucyB0aGUgZXh0cmFjdGlvbiByZXN1bHQgYW5kIHRoZVxuICogZW5kX2luZGV4IGFsd2F5cyBwb2ludHMgdG8gdGhlIGxhc3QgcG9zaXRpb24gdGhhdCBkZXNjcmliZXMgdGhlIGV4dHJhY3RlZCByZXN1bHQuXG4gKlxuICogTk9UIE9ORSBQT1NJVElPTiBBSEVBRCBBTkQgTk8gVFJBSUxJTkcgU1BBQ0VTLlxuICogKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXh0cmFjdGlvblJlc3VsdCB7XG4gICAgcmVzdWx0OiBhbnlcbiAgICBlbmRfaW5kZXg6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBERlZlcnNpb24ge1xuICAgIG1ham9yOiBudW1iZXJcbiAgICBtaW5vcjogbnVtYmVyXG59XG5cblxuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIG1ldGhvZHMgdG8gbmF2aWdhdGUgdGhyb3VnaCB0aGUgYnl0ZSBhcnJheSByZXByZXNlbnRpbmcgdGhlIFBERiBkb2N1bWVudFxuICogKi9cbmV4cG9ydCBjbGFzcyBVdGlsIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgVkVSU0lPTjogbnVtYmVyW10gPSBbMzcsIDgwLCA2OCwgNzAsIDQ1XSAvLyAlUERGLVxuICAgIHB1YmxpYyBzdGF0aWMgRE9UOiBudW1iZXIgPSA0NlxuICAgIHB1YmxpYyBzdGF0aWMgQ1I6IG51bWJlciA9IDEzXG4gICAgcHVibGljIHN0YXRpYyBMRjogbnVtYmVyID0gMTBcbiAgICBwdWJsaWMgc3RhdGljIFRZUEU6IHN0cmluZyA9IFwiL1R5cGUgXCJcbiAgICBwdWJsaWMgc3RhdGljIFNQQUNFOiBudW1iZXIgPSAzMlxuICAgIHB1YmxpYyBzdGF0aWMgT0JKOiBudW1iZXJbXSA9IFsxMTEsIDk4LCAxMDZdIC8vICdvYmonXG4gICAgcHVibGljIHN0YXRpYyBFTkRPQko6IG51bWJlcltdID0gWzEwMSwgMTEwLCAxMDAsIDExMSwgOTgsIDEwNl0gLy8gJ2VuZG9iaidcbiAgICBwdWJsaWMgc3RhdGljIEFSUkFZX1NUQVJUOiBudW1iZXJbXSA9IFs5MV0gLy8gJ1snXG4gICAgcHVibGljIHN0YXRpYyBBUlJBWV9FTkQ6IG51bWJlcltdID0gWzkzXSAvLyAnXSdcbiAgICBwdWJsaWMgc3RhdGljIFNUUklOR19TVEFSVDogbnVtYmVyW10gPSBbNDBdIC8vICcoJ1xuICAgIHB1YmxpYyBzdGF0aWMgSEVYX1NUUklOR19TVEFSVDogbnVtYmVyW10gPSBbNjBdIC8vICc8J1xuICAgIHB1YmxpYyBzdGF0aWMgU1RSSU5HX0VORDogbnVtYmVyW10gPSBbNDFdIC8vICcpJ1xuICAgIHB1YmxpYyBzdGF0aWMgSEVYX1NUUklOR19FTkQ6IG51bWJlcltdID0gWzYyXSAvLyAnPidcbiAgICBwdWJsaWMgc3RhdGljIFI6IG51bWJlcltdID0gWzgyXSAvLyAnUidcbiAgICBwdWJsaWMgc3RhdGljIEFOTk9UUzogbnVtYmVyW10gPSBbNDcsIDY1LCAxMTAsIDExMCwgMTExLCAxMTYsIDExNV0gLy8gJy9Bbm5vdCdcbiAgICBwdWJsaWMgc3RhdGljIERJQ1RfU1RBUlQ6IG51bWJlcltdID0gWzYwLCA2MF0gLy8gJzw8J1xuICAgIHB1YmxpYyBzdGF0aWMgRElDVF9FTkQ6IG51bWJlcltdID0gWzYyLCA2Ml0gLy8gJz4+J1xuICAgIHB1YmxpYyBzdGF0aWMgUEFHRTogbnVtYmVyW10gPSBbNDcsIDgwLCA5NywgMTAzLCAxMDFdXG4gICAgcHVibGljIHN0YXRpYyBTSVpFOiBudW1iZXJbXSA9IFs0NywgODMsIDEwNSwgMTIyLCAxMDFdIC8vIC9TaXplXG4gICAgcHVibGljIHN0YXRpYyBST09UOiBudW1iZXJbXSA9IFs0NywgODIsIDExMSwgMTExLCAxMTZdIC8vIC9Sb290XG4gICAgcHVibGljIHN0YXRpYyBQUkVWOiBudW1iZXJbXSA9IFs0NywgODAsIDExNCwgMTAxLCAxMThdIC8vIC9QcmV2XG4gICAgcHVibGljIHN0YXRpYyBTVEFSVFhSRUY6IG51bWJlcltdID0gWzExNSwgMTE2LCA5NywgMTE0LCAxMTYsIDEyMCwgMTE0LCAxMDEsIDEwMl0gLy8gPSAnc3RhcnR4cmVmJ1xuICAgIHB1YmxpYyBzdGF0aWMgWFJFRjogbnVtYmVyW10gPSBbMTIwLCAxMTQsIDEwMSwgMTAyXSAvLyA9ICd4cmVmJ1xuICAgIHB1YmxpYyBzdGF0aWMgU1RSRUFNOiBudW1iZXJbXSA9IFsxMTUsIDExNiwgMTE0LCAxMDEsIDk3LCAxMDldIC8vID0gJ3N0cmVhbSdcblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHRoZSB2ZXJzaW9uIGluZm9ybWF0aW9uIG9mIGEgUERGIGZpbGVcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFZlcnNpb24oZGF0YTogVWludDhBcnJheSwgaW5kZXg6IG51bWJlciA9IDApOiBQREZWZXJzaW9uIHtcblxuICAgICAgICBsZXQgcHRyX3ZlcnNpb25fc3RhcnQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuVkVSU0lPTiwgZGF0YSwgaW5kZXgpICsgVXRpbC5WRVJTSU9OLmxlbmd0aFxuICAgICAgICBsZXQgcHRyX2RlbGltaXRlciA9IFV0aWwubG9jYXRlU2VxdWVuY2UoW1V0aWwuRE9UXSwgZGF0YSwgcHRyX3ZlcnNpb25fc3RhcnQpXG4gICAgICAgIGxldCBtYWpvcl92ZXJzaW9uID0gVXRpbC5leHRyYWN0TnVtYmVyKGRhdGEsIHB0cl92ZXJzaW9uX3N0YXJ0LCBwdHJfZGVsaW1pdGVyKS5yZXN1bHRcbiAgICAgICAgbGV0IHB0cl9lbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihkYXRhLCBwdHJfZGVsaW1pdGVyKVxuICAgICAgICBsZXQgbWlub3JfdmVyc2lvbiA9IFV0aWwuZXh0cmFjdE51bWJlcihkYXRhLCBwdHJfZGVsaW1pdGVyICsgMSwgcHRyX2VuZCkucmVzdWx0XG5cbiAgICAgICAgcmV0dXJuIHsgbWFqb3I6IG1ham9yX3ZlcnNpb24sIG1pbm9yOiBtaW5vcl92ZXJzaW9uIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IHdvcmQuIFRoZXNlIGFyZSBieXRlcyB0aGF0IGFyZSBub3Qgc2VwYXJhdGVkIGJ5IGEgZGVsaW1pdGVyIGFuZCBhIHB0ciB0byB0aGUgcG9zaXRpb24gd2hlcmUgdGhlIHdvcmQgZW5kc1xuICAgICAqIEl0IGlnbm9yZXMvc2tpcHMgY29tbWVudHMuXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWROZXh0V29yZChkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyID0gMCk6IEV4dHJhY3Rpb25SZXN1bHQge1xuICAgICAgICBpZiAoaW5kZXggPj0gZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHJlc3VsdDogdW5kZWZpbmVkLCBlbmRfaW5kZXg6IGRhdGEubGVuZ3RoIC0gMSB9XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCA9IFV0aWwuc2tpcFNwYWNlcyhkYXRhLCBpbmRleClcblxuICAgICAgICBpZiAoZGF0YVtpbmRleF0gPT09IDM3KSB7XG4gICAgICAgICAgICAvLyBpbiBjYXNlIG9mIGEgY29tbWVudCBydW4gdG8gdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICAgICAgd2hpbGUgKGRhdGFbaW5kZXhdICE9PSAxMyAmJiBkYXRhW2luZGV4XSAhPSAxMCAmJiBpbmRleCA8IGRhdGEubGVuZ3RoKSsraW5kZXhcbiAgICAgICAgICAgIGluZGV4ID0gVXRpbC5za2lwU3BhY2VzKGRhdGEsIGluZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0YXJ0X2luZGV4ID0gaW5kZXhcblxuICAgICAgICBpbmRleCsrXG5cbiAgICAgICAgd2hpbGUgKCFVdGlsLmlzRGVsaW1pdGVyKGRhdGFbaW5kZXhdKSAmJiBpbmRleCA8IGRhdGEubGVuZ3RoKSsraW5kZXhcblxuICAgICAgICBpZiAoaW5kZXggPD0gZGF0YS5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IGRhdGEuc2xpY2Uoc3RhcnRfaW5kZXgsIGluZGV4KSwgZW5kX2luZGV4OiBpbmRleCAtIDEgfVxuXG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogdW5kZWZpbmVkLCBlbmRfaW5kZXg6IGluZGV4IC0gMSB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNzdW1lcyB0aGF0IGF0IHBvc2l0aW9uIGluZGV4IGlzIGEgZGVsaW1pdGVyIGFuZCB0aGFuIHJ1bnMgYXMgbG9uZyBmb3J3YXJkIHVudGlsIGl0IGZpbmRzXG4gICAgICogYW5vdGhlciBkZWxpbWl0ZXIgb3IgcmVhY2hlcyB0aGUgZW5kIG9mIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBza2lwRGVsaW1pdGVyKGRhdGE6IFVpbnQ4QXJyYXksIGluZGV4OiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgZGF0YS5sZW5ndGggJiYgdGhpcy5pc0RlbGltaXRlcihkYXRhW2luZGV4XSkpKytpbmRleFxuXG4gICAgICAgIHJldHVybiBpbmRleFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNraXBzIG9ubHkgc3BhY2VzXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHNraXBTcGFjZXMoZGF0YTogVWludDhBcnJheSB8IG51bWJlcltdLCBpbmRleDogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIHdoaWxlIChpbmRleCA8IGRhdGEubGVuZ3RoICYmIChkYXRhW2luZGV4XSA9PT0gMTAgfHwgZGF0YVtpbmRleF0gPT09IDEzIHx8IGRhdGFbaW5kZXhdID09PSAzMikpKytpbmRleFxuXG4gICAgICAgIHJldHVybiBpbmRleFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc3VtZXMgdGhhdCBhdCBwb3NpdGlvbiBpbmRleCBpcyBhIGRlbGltaXRlciBhbmQgdGhhbiBydW5zIGFzIGxvbmcgYmFja3dhcmRzIHVudGlsIGl0IGZpbmRzXG4gICAgICogYW5vdGhlciBkZWxpbWl0ZXIgb3IgcmVhY2hlcyB0aGUgZW5kIG9mIHRoZSBkb2N1bWVudFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBza2lwRGVsaW1pdGVyUmV2ZXJzZShkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gICAgICAgIHdoaWxlIChpbmRleCA+IDAgJiYgdGhpcy5pc0RlbGltaXRlcihkYXRhW2luZGV4XSkpLS1pbmRleFxuXG4gICAgICAgIHJldHVybiBpbmRleFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiB0aGUgY29ycmVzcG9uZGluZyBhc2NpaSB2YWx1ZXNcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydFN0cmluZ1RvQXNjaWkodG9Db252ZXJ0OiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCBhc2NpaXM6IG51bWJlcltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvQ29udmVydC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgYXNjaWlzLnB1c2goK3RvQ29udmVydC5jaGFyQ29kZUF0KGkpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzY2lpc1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNTcGFjZSh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gVXRpbC5MRiB8fFxuICAgICAgICAgICAgdmFsdWUgPT09IFV0aWwuQ1IgfHxcbiAgICAgICAgICAgIHZhbHVlID09PSBVdGlsLlNQQUNFXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0RlbGltaXRlcih2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBVdGlsLmlzU3BhY2UodmFsdWUpIHx8XG4gICAgICAgICAgICB2YWx1ZSA9PT0gNDcgfHwgLy8gL1xuICAgICAgICAgICAgdmFsdWUgPT09IDM3IHx8IC8vICVcbiAgICAgICAgICAgIHZhbHVlID09PSA2MCB8fCAvLyA8XG4gICAgICAgICAgICB2YWx1ZSA9PT0gNjIgfHwgLy8gPlxuICAgICAgICAgICAgdmFsdWUgPT09IDkxIHx8IC8vIFtcbiAgICAgICAgICAgIHZhbHVlID09PSA5MyB8fCAvLyBdXG4gICAgICAgICAgICB2YWx1ZSA9PT0gNDAgfHwgLy8gKFxuICAgICAgICAgICAgdmFsdWUgPT09IDQxIC8vIClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdGhlIHNlcXVlbmNlIGluIGRhdGEgc3RhcnRpbmcgYXQgdGhlIG9mZnNldFxuICAgICAqXG4gICAgICogU2V0IHRoZSAnY2xvc2VkJyBmbGFnIHRvIGNoZWNrIGlmIHRoZSBzdWNlZWRpbmcgY2hhciBhZnRlciB0aGUgc2VxdWVuY2UgaXMgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIGVuZFxuICAgICAqIG9mIHRoZSB3aG9sZSBzZXF1ZW5jZSBvciBhIHNwYWNlICgzMilcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9jYXRlU2VxdWVuY2Uoc2VxdWVuY2U6IG51bWJlcltdLCBkYXRhOiBVaW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IDAsIGNsb3NlZDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGkgPSBvZmZzZXRcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVtpXSA9PSBzZXF1ZW5jZVtqXSkge1xuICAgICAgICAgICAgICAgIGlmIChqID09IHNlcXVlbmNlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZWQgfHwgZGF0YS5sZW5ndGggPT0gaSArIDEgfHwgdGhpcy5pc0RlbGltaXRlcihkYXRhW2kgKyAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpIC0gKHNlcXVlbmNlLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqID0gLTFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICArK2pcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaiA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCB0aGUgc2VxdWVuY2UgaW4gZGF0YSBzdGFydGluZyBhdCB0aGUgb2Zmc2V0IGluIHJldmVyc2UgZGlyZWN0aW9uXG4gICAgICpcbiAgICAgKiBTZXQgdGhlICdjbG9zZWQnIGZsYWcgdG8gY2hlY2sgaWYgdGhlIHByZWNlZGluZyBjaGFyIGJlZm9yZSB0aGUgc2VxdWVuY2UgaXMgYSBsaW5lIGZlZWQgKDEwKSwgYSBjYXJyaWFnZSByZXR1cm4gKDEzKSwgdGhlIHN0YXJ0XG4gICAgICogb2YgdGhlIHdob2xlIGRhdGEgc2VxdWVuY2Ugb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZVNlcXVlbmNlUmV2ZXJzZWQoc2VxdWVuY2U6IG51bWJlcltdLCBkYXRhOiBVaW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IGRhdGEubGVuZ3RoIC0gMSwgY2xvc2VkOiBib29sZWFuID0gZmFsc2UpOiBudW1iZXIge1xuICAgICAgICBsZXQgaSA9IG9mZnNldFxuXG4gICAgICAgIGZvciAobGV0IGogPSBzZXF1ZW5jZS5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0gPT0gc2VxdWVuY2Vbal0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2xvc2VkIHx8IGkgLSAxIDwgMCB8fCB0aGlzLmlzRGVsaW1pdGVyKGRhdGFbaSAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSBzZXF1ZW5jZS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAtLWpcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaiA9IHNlcXVlbmNlLmxlbmd0aCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2F0ZXMgdGhlIGluZGV4IGJlZm9yZSB0aGUgbmV4dCBkZWxpbWl0ZXIuIERlbGltaXRlcnMgY2FuIGJlIGEgbGluZSBmZWVkICgxMCksIGEgY2FycmlhZ2UgcmV0dXJuICgxMyksIHRoZSBlbmQgb2YgdGhlIHdob2xlIHNlcXVlbmNlXG4gICAgICogb3IgYSBzcGFjZSAoMzIpXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvY2F0ZURlbGltaXRlcihkYXRhOiBVaW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IDApOiBudW1iZXIge1xuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgZGF0YS5sZW5ndGggJiYgIXRoaXMuaXNEZWxpbWl0ZXIoZGF0YVtvZmZzZXRdKSkrK29mZnNldFxuXG4gICAgICAgIHJldHVybiBvZmZzZXQgLSAxXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9jYXRlcyB0aGUgaW5kZXggYWZ0ZXIgdGhlIGxhc3QgZGVsaW1pdGVyLiBEZWxpbWl0ZXJzIGNhbiBiZSBhIGxpbmUgZmVlZCAoMTApLCBhIGNhcnJpYWdlIHJldHVybiAoMTMpLCB0aGUgZW5kIG9mIHRoZSB3aG9sZSBzZXF1ZW5jZVxuICAgICAqIG9yIGEgc3BhY2UgKDMyKVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBsb2NhdGVEZWxpbWl0ZXJSZXZlcnNlZChkYXRhOiBVaW50OEFycmF5LCBvZmZzZXQ6IG51bWJlciA9IGRhdGEubGVuZ3RoIC0gMSk6IG51bWJlciB7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgPiAwICYmICF0aGlzLmlzRGVsaW1pdGVyKGRhdGFbb2Zmc2V0XSkpLS1vZmZzZXRcblxuICAgICAgICBpZiAob2Zmc2V0IDw9IDApXG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0XG5cbiAgICAgICAgcmV0dXJuIG9mZnNldCAtIDFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGFuIG9iamVjdCBpZGVudGlmaWVyXG4gICAgICogPElEPiA8R0VOPiBvYmpcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE9iamVjdElkKGRhdGE6IFVpbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBSZWZlcmVuY2VQb2ludGVyIHtcbiAgICAgICAgaW5kZXggPSBVdGlsLnNraXBEZWxpbWl0ZXIoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgbGV0IGVuZF9vYmpfcHRyID0gVXRpbC5sb2NhdGVEZWxpbWl0ZXIoZGF0YSwgaW5kZXggKyAxKVxuXG4gICAgICAgIGxldCBvYmogPSBVdGlsLmV4dHJhY3ROdW1iZXIoZGF0YSwgaW5kZXgsIGVuZF9vYmpfcHRyKS5yZXN1bHRcblxuICAgICAgICBsZXQgc3RhcnRfZ2VuX3B0ciA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBlbmRfb2JqX3B0ciArIDEpXG4gICAgICAgIGxldCBlbmRfZ2VuX3B0ciA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIHN0YXJ0X2dlbl9wdHIgKyAxKVxuXG4gICAgICAgIGxldCBnZW4gPSBVdGlsLmV4dHJhY3ROdW1iZXIoZGF0YSwgc3RhcnRfZ2VuX3B0ciwgZW5kX2dlbl9wdHIpLnJlc3VsdFxuXG4gICAgICAgIHJldHVybiB7IG9iajogb2JqLCBnZW5lcmF0aW9uOiBnZW4gfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgdGhlIHJlZmVyZW5jZSBzdGFydGluZyBhdCBwb3NpdGlvbiAnaW5kZXgnXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RSZWZlcmVuY2UoZGF0YTogVWludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IFVpbnQ4QXJyYXkge1xuICAgICAgICBpbmRleCA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBpbmRleClcbiAgICAgICAgbGV0IHJfaW5kZXggPSB0aGlzLmxvY2F0ZVNlcXVlbmNlKHRoaXMuY29udmVydFN0cmluZ1RvQXNjaWkoXCIgUlwiKSwgZGF0YSwgaW5kZXgsIHRydWUpXG5cbiAgICAgICAgcmV0dXJuIGRhdGEuc2xpY2UoaW5kZXgsIHJfaW5kZXgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHJlZmVyZW5jZSBhcyB0eXBlZCBvYmplY3RcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdFJlZmVyZW5jZVR5cGVkKGRhdGE6IFVpbnQ4QXJyYXksIGluZGV4OiBudW1iZXIpOiBFeHRyYWN0aW9uUmVzdWx0IHtcblxuICAgICAgICBsZXQgcmVmX2RhdGEgPSB0aGlzLmV4dHJhY3RSZWZlcmVuY2UoZGF0YSwgaW5kZXgpXG5cbiAgICAgICAgbGV0IGRlbF9pbmRleCA9IHRoaXMubG9jYXRlRGVsaW1pdGVyKHJlZl9kYXRhLCAwKVxuXG4gICAgICAgIGxldCBpZCA9IHRoaXMuZXh0cmFjdE51bWJlcihyZWZfZGF0YSwgMCwgZGVsX2luZGV4KS5yZXN1bHRcbiAgICAgICAgbGV0IGdlbiA9IHRoaXMuZXh0cmFjdE51bWJlcihyZWZfZGF0YSwgZGVsX2luZGV4ICsgMikucmVzdWx0XG5cbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiB7IG9iajogaWQsIGdlbmVyYXRpb246IGdlbiB9LCBlbmRfaW5kZXg6IGluZGV4ICsgcmVmX2RhdGEubGVuZ3RoICsgMSB9IC8vICsgX1JcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyBhIHN0cmluZyBpbiBIZXggbm90YXRpb24gPC4uLj5cbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdEhleFN0cmluZyhkYXRhOiBVaW50OEFycmF5LCBpbmRleDogbnVtYmVyKTogRXh0cmFjdGlvblJlc3VsdCB7XG4gICAgICAgIGxldCBzdHJpbmdfc3RhcnQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuSEVYX1NUUklOR19TVEFSVCwgZGF0YSwgaW5kZXgpXG4gICAgICAgIGxldCBzdHJpbmdfZW5kID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLkhFWF9TVFJJTkdfRU5ELCBkYXRhLCBpbmRleClcblxuICAgICAgICBkYXRhID0gZGF0YS5zbGljZShzdHJpbmdfc3RhcnQgKyAxLCBzdHJpbmdfZW5kKVxuXG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogVXRpbC5jb252ZXJ0VW5pY29kZVRvU3RyaW5nKGRhdGEpLCBlbmRfaW5kZXg6IHN0cmluZ19lbmQgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4dHJhdGNzIGEgc3RyaW5nICguLi4pXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3RTdHJpbmcoZGF0YTogVWludDhBcnJheSwgaW5kZXg6IG51bWJlcik6IEV4dHJhY3Rpb25SZXN1bHQge1xuICAgICAgICBsZXQgc3RyaW5nX3N0YXJ0ID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlNUUklOR19TVEFSVCwgZGF0YSwgaW5kZXgpXG4gICAgICAgIGxldCBzdHJpbmdfZW5kID0gVXRpbC5sb2NhdGVTZXF1ZW5jZShVdGlsLlNUUklOR19FTkQsIGRhdGEsIGluZGV4KVxuXG4gICAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKHN0cmluZ19zdGFydCArIDEsIHN0cmluZ19lbmQpXG5cbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBVdGlsLmNvbnZlcnRVbmljb2RlVG9TdHJpbmcoZGF0YSksIGVuZF9pbmRleDogc3RyaW5nX2VuZCB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYW4gb3B0aW9uXG4gICAgICogLzxvcHRpb24+XG4gICAgICpcbiAgICAgKiBzbyBmb3IgaW5zdGFuY2UgZm9yIC9IaWdobGlnaHQgaXQgd291bGQgcmV0dXJuICdIaWdobGlnaHQnXG4gICAgICpcbiAgICAgKiBUaGUgaW5kZXggbXVzdCBwb2ludCB0byB0aGUgXCIvXCJcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZXh0cmFjdE9wdGlvblZhbHVlKGRhdGE6IFVpbnQ4QXJyYXksIGluZGV4OiBudW1iZXIgPSAwKTogRXh0cmFjdGlvblJlc3VsdCB7XG5cbiAgICAgICAgaWYgKGRhdGFbaW5kZXhdICE9PSA0NylcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwibWlzcGxhY2VkIG9wdGlvbiB2YWx1ZSBwb2ludGVyXCIpXG5cbiAgICAgICAgbGV0IGVuZCA9IFV0aWwubG9jYXRlRGVsaW1pdGVyKGRhdGEsIGluZGV4ICsgMSlcblxuICAgICAgICByZXR1cm4geyByZXN1bHQ6IFV0aWwuY29udmVydEFzY2lpVG9TdHJpbmcoQXJyYXkuZnJvbShkYXRhLnNsaWNlKGluZGV4ICsgMSwgZW5kICsgMSkpKSwgZW5kX2luZGV4OiBlbmQgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgYXNjaWkgZW5jb2RlZCBudW1iZXIgb2YgdGhlIFBERiBmaWxlXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4dHJhY3ROdW1iZXIoZGF0YTogVWludDhBcnJheSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIgPSAtMSk6IEV4dHJhY3Rpb25SZXN1bHQge1xuICAgICAgICBzdGFydCA9IFV0aWwuc2tpcERlbGltaXRlcihkYXRhLCBzdGFydClcblxuICAgICAgICBpZiAoLTEgPT0gZW5kKSB7XG4gICAgICAgICAgICBlbmQgPSBVdGlsLmxvY2F0ZURlbGltaXRlcihkYXRhLCBzdGFydClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmQgPCBzdGFydCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENvdWxkIG5vdCBpZGVudGlmeSBudW1iZXIgYm91bmRzOiBbJHtzdGFydH0sJHtlbmR9XWApXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3RyX2lkID0gXCJcIlxuXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgc3RyX2lkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVtpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcIlwiID09PSBzdHJfaWQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDb3VsZCBub3QgcGFyc2UgbnVtYmVyIGF0IHBvc2l0aW9uICR7c3RhcnR9YClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogK3N0cl9pZCwgZW5kX2luZGV4OiBlbmQgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiBkYXRlIGludG8gUERGIGZvcm1hdHRpbmdcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydERhdGVUb1BERkRhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBkYXRlX3N0ciA9IFwiKEQ6XCJcbiAgICAgICAgZGF0ZV9zdHIgKz0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgICAgIGxldCBtb250aDogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpXG4gICAgICAgIGRhdGVfc3RyICs9IChtb250aC5sZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyBtb250aFxuICAgICAgICBsZXQgZGF5OiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgIGRhdGVfc3RyICs9IChkYXkubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgZGF5XG4gICAgICAgIGxldCBob3Vyczogc3RyaW5nID0gU3RyaW5nKGRhdGUuZ2V0SG91cnMoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKGhvdXJzLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIGhvdXJzXG4gICAgICAgIGxldCBtaW51dGVzOiBzdHJpbmcgPSBTdHJpbmcoZGF0ZS5nZXRNaW51dGVzKCkpXG4gICAgICAgIGRhdGVfc3RyICs9IChtaW51dGVzLmxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIG1pbnV0ZXNcbiAgICAgICAgbGV0IHNlY29uZHM6IHN0cmluZyA9IFN0cmluZyhkYXRlLmdldFNlY29uZHMoKSlcbiAgICAgICAgZGF0ZV9zdHIgKz0gKHNlY29uZHMubGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgc2Vjb25kc1xuICAgICAgICByZXR1cm4gZGF0ZV9zdHIgKyBcIilcIlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgdW5pY29kZSBzZXF1ZW5jZSBpbnRvIGEgc3RyaW5nXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRVbmljb2RlVG9TdHJpbmcodmFsOiBVaW50OEFycmF5KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpXG4gICAgICAgICAgICB2YWwgPSBuZXcgVWludDhBcnJheSh2YWwpXG5cbiAgICAgICAgaWYgKHZhbFswXSA9PT0gMjU0ICYmIHZhbFsxXSA9PT0gMjU1KSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMiwgdmFsLmxlbmd0aClcblxuICAgICAgICAgICAgbGV0IHVpbnRUb1N0cmluZyA9ICh1aW50QXJyYXk6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXQgPSBcIlwiXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1aW50QXJyYXkubGVuZ3RoIC0gMTsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCh1aW50QXJyYXlbaV0gPDwgOCkgfCB1aW50QXJyYXlbaSArIDFdICYgMHhGRilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZXQgPSB1aW50VG9TdHJpbmcodmFsKVxuICAgICAgICAgICAgcmV0dXJuIHJldFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIHV0Zi04IGNvbXByZXNzaW9uXG4gICAgICAgIGxldCBVdGY4QXJyYXlUb1N0ciA9IChhcnJheTogbnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIGxldCByZXQgPSBcIlwiXG4gICAgICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgICAgIHdoaWxlIChpIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXIxID0gYXJyYXlbaSsrXVxuICAgICAgICAgICAgICAgIGxldCBjaGFyMlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hhcjEgPj4gNCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogY2FzZSAyOiBjYXNlIDM6IGNhc2UgNDogY2FzZSA1OiBjYXNlIDY6IGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uZSBieXRlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6IGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0d28gYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcjIgPSBhcnJheVtpKytdXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGNoYXIxICYgMHgxRikgPDwgNikgfCAoY2hhcjIgJiAweDNGKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aHJlZSBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyMiA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFyMyA9IGFycmF5W2krK11cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY2hhcjEgJiAweDBGKSA8PCAxMikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoY2hhcjIgJiAweDNGKSA8PCA2KSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChjaGFyMyAmIDB4M0YpIDw8IDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXQgPSBVdGY4QXJyYXlUb1N0cihBcnJheS5mcm9tKHZhbCkpXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRBc2NpaVRvU3RyaW5nKHZhbDogbnVtYmVyW10gfCBVaW50OEFycmF5KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHJldDogc3RyaW5nID0gXCJcIlxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh2YWxbaV0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgYSBudW1iZXIgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgaXRzIGNoYXIgcmVwcmVzZW50YXRpb25zXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShuYnI6IG51bWJlciB8IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoU3RyaW5nKG5icikpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgdHdvIGFycmF5cyBhbmQgY2hlY2tzIHRoZWlyIGVxdWFsaXR5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGFyZUFycmF5c0VxdWFsKGFycmF5X29uZTogVWludDhBcnJheSB8IG51bWJlcltdLCBhcnJheV90d286IFVpbnQ4QXJyYXkgfCBudW1iZXJbXSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoYXJyYXlfb25lLmxlbmd0aCAhPT0gYXJyYXlfdHdvLmxlbmd0aCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheV9vbmUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChhcnJheV9vbmVbaV0gIT09IGFycmF5X3R3b1tpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJpbnRzIHRoZSBhcnJheSB3aXRoIGxlYWRpbmcgaW5kZXhlcyAxMCBieXRlcyBpbiBhIHJvd1xuICAgICAqIERlbGltaXRlciBhcmUgc3Vic3RpdHV0ZWQgYnkgJy4nXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGRlYnVnX3ByaW50SW5kZXhlZChhcnJheTogVWludDhBcnJheSB8IG51bWJlcltdKSB7XG4gICAgICAgIGxldCBvdXRwID0gXCJcIlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoaSAlIDEwID09PSAwKSB7XG4gICAgICAgICAgICAgICAgb3V0cCArPSBcIlxcblwiICsgaSArIFwiOlwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlsLmlzU3BhY2UoYXJyYXlbaV0pKVxuICAgICAgICAgICAgICAgIG91dHAgKz0gXCIgLlwiXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgb3V0cCArPSBcIiBcIiArIFN0cmluZy5mcm9tQ2hhckNvZGUoYXJyYXlbaV0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhvdXRwKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFBhZ2UsIFJlZmVyZW5jZVBvaW50ZXIgfSBmcm9tICcuL3BhcnNlcidcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBXcml0ZXJVdGlsIHtcbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSByZWZlcmVuY2UgcG9pbnRlclxuICAgICAqXG4gICAgICogPG9ial9pZD4gPGdlbmVyYXRpb24+IFJcbiAgICAgKlxuICAgICAqIFRoZSAnUicgYW5kIHRoZSBwcmVjZWRpbmcgc3BhY2UgaXMgb25seSB3cml0dGVuIGluIGNhc2UgJ3JlZmVyZW5jZWQnIGlzIHRydWVcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd3JpdGVSZWZlcmVuY2VQb2ludGVyKHJlZjogUmVmZXJlbmNlUG9pbnRlciwgcmVmZXJlbmNlZDogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHJlZi5vYmopXG5cbiAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KHJlZi5nZW5lcmF0aW9uKSlcblxuICAgICAgICBpZiAocmVmZXJlbmNlZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKC4uLlV0aWwuUilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHByZWNlZGluZyB6ZXJvcyAoMCkgaW4gZnJvbnQgb2YgdGhlICd2YWx1ZScgdG8gbWF0Y2ggdGhlIGxlbmd0aFxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBwYWQobGVuZ3RoOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuXG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gW11cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIHZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZXQucHVzaCg0OClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkodmFsdWUpKVxuXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBuZXN0ZWQgbnVtYmVyIGFycmF5XG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIHdyaXRlTmVzdGVkTnVtYmVyQXJyYXkoYXJyYXk6IG51bWJlcltdW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gVXRpbC5BUlJBWV9TVEFSVFxuXG4gICAgICAgIGZvciAobGV0IHN1YkFycmF5IG9mIGFycmF5KSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShzdWJBcnJheSkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goLi4uVXRpbC5BUlJBWV9FTkQpXG4gICAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgYSBqYXZhc2NyaXB0IG51bWJlciBhcnJheSB0byBhIFBERiBudW1iZXIgYXJyYXlcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgd3JpdGVOdW1iZXJBcnJheShhcnJheTogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCByZXQ6IG51bWJlcltdID0gVXRpbC5BUlJBWV9TVEFSVFxuXG4gICAgICAgIGZvciAobGV0IGkgb2YgYXJyYXkpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0TnVtYmVyVG9DaGFyQXJyYXkoaSkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goLi4uVXRpbC5BUlJBWV9FTkQpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHRoZSAvQW5ub3RzIGZpZWxkIGluIGFuIHBhZ2Ugb2JqZWN0XG4gICAgICpcbiAgICAgKiBwdHIgOiBQb2ludGVyIHRvIHRoZSBwYWdlIG9iamVjdFxuICAgICAqIGFubm90X2FycmF5X3JlZmVyZW5jZSA6IFRoZSByZWZlcmVuY2UgdG8gdGhlIGFubm90YXRpb24gYXJyYXlcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVwbGFjZUFubm90c0ZpZWxkSW5QYWdlT2JqZWN0KGRhdGE6IFVpbnQ4QXJyYXksIHBhZ2U6IFBhZ2UsIHBhZ2VfcHRyOiBudW1iZXIsIGFubm90X2FycmF5X3JlZmVyZW5jZTogUmVmZXJlbmNlUG9pbnRlcik6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHB0cl9vYmplbmQgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuRU5ET0JKLCBkYXRhLCBwYWdlX3B0ciwgdHJ1ZSlcblxuICAgICAgICBsZXQgY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YSA9IGRhdGEuc2xpY2UocGFnZV9wdHIsIHB0cl9vYmplbmQgKyBVdGlsLkVORE9CSi5sZW5ndGgpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBbXVxuXG4gICAgICAgIGlmIChwYWdlLmhhc0Fubm90c0ZpZWxkKSB7XG4gICAgICAgICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIHBhZ2Ugb2JqZWN0IGRpcmVjdGx5IGNvbnRhaW5zIGFuIGFycmF5IG9mIHJlZmVyZW5jZXMgYW5kXG4gICAgICAgICAgICAvLyBkb2VzIG5vdCBwb2ludCB0byBhbiBhcnJheSBhcnJheSBvYmplY3QgLS0gd2UgcmVwbGFjZSB0aGUgYXJyYXkgb2YgcmVmZXJlbmNlcyB3aXRoIGEgcG9pbnRlclxuICAgICAgICAgICAgLy8gdG8gdGhlIHJlZmVyZW5jZSBhcnJheVxuICAgICAgICAgICAgbGV0IHB0cl9hbm5vdHMgPSBVdGlsLmxvY2F0ZVNlcXVlbmNlKFV0aWwuQU5OT1RTLCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCAwLCB0cnVlKVxuXG4gICAgICAgICAgICByZXQgPSBBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UoMCwgcHRyX2Fubm90cyArIFV0aWwuQU5OT1RTLmxlbmd0aCkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdF9hcnJheV9yZWZlcmVuY2UsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goVXRpbC5TUEFDRSlcbiAgICAgICAgICAgIGxldCBwdHJfYW5ub3RzX2FycmF5X2VuZCA9IFV0aWwubG9jYXRlU2VxdWVuY2UoVXRpbC5BUlJBWV9FTkQsIGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEsIHB0cl9hbm5vdHMsIHRydWUpICsgVXRpbC5BUlJBWV9FTkQubGVuZ3RoXG5cbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoQXJyYXkuZnJvbShjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLnNsaWNlKHB0cl9hbm5vdHNfYXJyYXlfZW5kLCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLmxlbmd0aCkpKVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBVdGlsLmRlYnVnX3ByaW50SW5kZXhlZChjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhKVxuICAgICAgICAgICAgbGV0IHB0cl9kaWN0X2VuZCA9IFV0aWwubG9jYXRlU2VxdWVuY2VSZXZlcnNlZChVdGlsLkRJQ1RfRU5ELCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLmxlbmd0aCAtIDEpXG5cbiAgICAgICAgICAgIGlmICgtMSA9PT0gcHRyX2RpY3RfZW5kKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ291bGQgbm90IGlkZW50aWZ5IGRpY3Rpb25hcnkgZW5kXCIpXG5cbiAgICAgICAgICAgIHJldCA9IEFycmF5LmZyb20oY29tcGxldGVfcGFnZV9vYmplY3RfZGF0YS5zbGljZSgwLCBwdHJfZGljdF9lbmQpKVxuICAgICAgICAgICAgVXRpbC5kZWJ1Z19wcmludEluZGV4ZWQocmV0KVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLkFOTk9UUylcbiAgICAgICAgICAgIHJldC5wdXNoKFV0aWwuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFubm90X2FycmF5X3JlZmVyZW5jZSwgdHJ1ZSkpXG4gICAgICAgICAgICByZXQucHVzaChVdGlsLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChBcnJheS5mcm9tKGNvbXBsZXRlX3BhZ2Vfb2JqZWN0X2RhdGEuc2xpY2UocHRyX2RpY3RfZW5kLCBjb21wbGV0ZV9wYWdlX29iamVjdF9kYXRhLmxlbmd0aCkpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0LnB1c2goVXRpbC5DUilcbiAgICAgICAgcmV0LnB1c2goVXRpbC5MRilcblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IEFubm90YXRpb24sIFJlZmVyZW5jZVBvaW50ZXIsIFBERkRvY3VtZW50UGFyc2VyLCBQYWdlIH0gZnJvbSAnLi9wYXJzZXInXG5pbXBvcnQgeyBYUmVmIH0gZnJvbSAnLi9kb2N1bWVudC1oaXN0b3J5J1xuaW1wb3J0IHsgV3JpdGVyVXRpbCB9IGZyb20gJy4vd3JpdGVyLXV0aWwnXG5cbi8qKlxuICogQ3JlYXRzIHRoZSBieXRlIGFycmF5IHRoYXQgbXVzdCBiZSBhdHRhY2hlZCB0byB0aGUgZW5kIG9mIHRoZSBkb2N1bWVudFxuICogKi9cbmV4cG9ydCBjbGFzcyBXcml0ZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBOOiBudW1iZXIgPSAxMTBcbiAgICBwdWJsaWMgc3RhdGljIEY6IG51bWJlciA9IDEwMlxuXG4gICAgcHVibGljIHN0YXRpYyBTUEFDRTogbnVtYmVyID0gMzJcbiAgICBwdWJsaWMgc3RhdGljIENSOiBudW1iZXIgPSAxM1xuICAgIHB1YmxpYyBzdGF0aWMgTEY6IG51bWJlciA9IDEwXG4gICAgcHVibGljIHN0YXRpYyBPQko6IG51bWJlcltdID0gWzExMSwgOTgsIDEwNl1cbiAgICBwdWJsaWMgc3RhdGljIEVORE9CSjogbnVtYmVyW10gPSBbMTAxLCAxMTAsIDEwMCwgMTExLCA5OCwgMTA2XVxuICAgIHB1YmxpYyBzdGF0aWMgQVJSQVlfU1RBUlQ6IG51bWJlciA9IDkxXG4gICAgcHVibGljIHN0YXRpYyBBUlJBWV9FTkQ6IG51bWJlciA9IDkzXG4gICAgcHVibGljIHN0YXRpYyBESUNUX1NUQVJUOiBudW1iZXJbXSA9IFs2MCwgNjBdXG4gICAgcHVibGljIHN0YXRpYyBESUNUX0VORDogbnVtYmVyW10gPSBbNjIsIDYyXVxuICAgIHB1YmxpYyBzdGF0aWMgVFlQRV9BTk5PVDogbnVtYmVyW10gPSBbNDcsIDg0LCAxMjEsIDExMiwgMTAxLCBXcml0ZXIuU1BBQ0UsIDQ3LCA2NSwgMTEwLCAxMTAsIDExMSwgMTE2XVxuICAgIHB1YmxpYyBzdGF0aWMgUkVDVDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMDEsIDk5LCAxMTZdXG4gICAgcHVibGljIHN0YXRpYyBTVUJUWVBFOiBudW1iZXJbXSA9IFs0NywgODMsIDExNywgOTgsIDExNiwgMTIxLCAxMTIsIDEwMV1cbiAgICBwdWJsaWMgc3RhdGljIFVQREFURV9EQVRFOiBudW1iZXJbXSA9IFs0NywgNzddIC8vID0gJy9NJ1xuICAgIHB1YmxpYyBzdGF0aWMgQVVUSE9SOiBudW1iZXJbXSA9IFs0NywgODRdIC8vID0gJy9UJ1xuICAgIHB1YmxpYyBzdGF0aWMgQ09OVEVOVFM6IG51bWJlcltdID0gWzQ3LCA2NywgMTExLCAxMTAsIDExNiwgMTAxLCAxMTAsIDExNiwgMTE1XSAvLyA9ICcvQ29udGVudHMnXG4gICAgcHVibGljIHN0YXRpYyBCUkFDS0VUX1NUQVJUOiBudW1iZXIgPSA0MFxuICAgIHB1YmxpYyBzdGF0aWMgQlJBQ0tFVF9FTkQ6IG51bWJlciA9IDQxXG4gICAgcHVibGljIHN0YXRpYyBGTEFHOiBudW1iZXJbXSA9IFs0NywgNzBdIC8vID0gJy9GJ1xuICAgIHB1YmxpYyBzdGF0aWMgSUQ6IG51bWJlcltdID0gWzQ3LCA3OCwgNzddIC8vID0gJy9OTSdcbiAgICBwdWJsaWMgc3RhdGljIENPTE9SOiBudW1iZXJbXSA9IFs0NywgNjddIC8vID0gJy9DJ1xuICAgIHB1YmxpYyBzdGF0aWMgT1BBQ0lUWTogbnVtYmVyW10gPSBbNDcsIDY3LCA2NV0gLy8gPSAnL0NBJ1xuICAgIHB1YmxpYyBzdGF0aWMgQk9SREVSOiBudW1iZXJbXSA9IFs0NywgNjYsIDExMSwgMTE0LCAxMDAsIDEwMSwgMTE0XSAvLyA9ICcvQm9yZGVyJ1xuICAgIHB1YmxpYyBzdGF0aWMgUEFHRV9SRUZFUkVOQ0U6IG51bWJlcltdID0gWzQ3LCA4MF0gLy8gPSAnL1AnXG4gICAgcHVibGljIHN0YXRpYyBERUZBVUxUX0FQUEVBUkFOQ0U6IG51bWJlcltdID0gWzQ3LCA2OCwgNjVdIC8vID0gJy9EQSdcbiAgICBwdWJsaWMgc3RhdGljIElOS0xJU1Q6IG51bWJlcltdID0gWzQ3LCA3MywgMTEwLCAxMDcsIDc2LCAxMDUsIDExNSwgMTE2XSAvLyA9ICcvSW5rTGlzdCdcblxuICAgIHB1YmxpYyBzdGF0aWMgVFJBSUxFUjogbnVtYmVyW10gPSBbMTE2LCAxMTQsIDk3LCAxMDUsIDEwOCwgMTAxLCAxMTRdIC8vID0gJ3RyYWlsZXInXG4gICAgcHVibGljIHN0YXRpYyBTSVpFOiBudW1iZXJbXSA9IFs0NywgODMsIDEwNSwgMTIyLCAxMDFdIC8vID0gJy9TaXplJ1xuICAgIHB1YmxpYyBzdGF0aWMgUk9PVDogbnVtYmVyW10gPSBbNDcsIDgyLCAxMTEsIDExMSwgMTE2XSAvLyA9ICcvUm9vdCdcbiAgICBwdWJsaWMgc3RhdGljIFBSRVY6IG51bWJlcltdID0gWzQ3LCA4MCwgMTE0LCAxMDEsIDExOF0gLy8gPScvUHJldidcbiAgICBwdWJsaWMgc3RhdGljIFNUQVJUWFJFRjogbnVtYmVyW10gPSBbMTE1LCAxMTYsIDk3LCAxMTQsIDExNiwgMTIwLCAxMTQsIDEwMSwgMTAyXSAvLyA9ICdzdGFydHhyZWYnXG4gICAgcHVibGljIHN0YXRpYyBFT0Y6IG51bWJlcltdID0gWzM3LCAzNywgNjksIDc5LCA3MF0gLy8gPSAnJSVFT0YnXG5cbiAgICBwdWJsaWMgc3RhdGljIFhSRUY6IG51bWJlcltdID0gWzEyMCwgMTE0LCAxMDEsIDEwMl0gLy8gPSAneHJlZidcblxuICAgIHB1YmxpYyBzdGF0aWMgUVVBRFBPSU5UUzogbnVtYmVyW10gPSBbNDcsIDgxLCAxMTcsIDk3LCAxMDAsIDgwLCAxMTEsIDEwNSwgMTEwLCAxMTYsIDExNV0gLy8gPSAnL1F1YWRQb2ludHMnXG4gICAgcHVibGljIHN0YXRpYyBWRVJUSUNFUzogbnVtYmVyW10gPSBbNDcsIDg2LCAxMDEsIDExNCwgMTE2LCAxMDUsIDk5LCAxMDEsIDExNV0gLy8gPSAnL1ZlcnRpY2VzJ1xuICAgIHB1YmxpYyBzdGF0aWMgTkFNRTogbnVtYmVyW10gPSBbNDcsIDc4LCA5NywgMTA5LCAxMDFdIC8vID0gJy9OYW1lJ1xuICAgIHB1YmxpYyBzdGF0aWMgRFJBRlQ6IG51bWJlcltdID0gWzQ3LCA2OCwgMTE0LCA5NywgMTAyLCAxMTZdIC8vID0gJy9EcmFmdCdcblxuICAgIHB1YmxpYyBzdGF0aWMgU1k6IG51bWJlcltdID0gWzQ3LCA4MywgMTIxXSAvLyA9ICcvU3knXG4gICAgcHVibGljIHN0YXRpYyBQOiBudW1iZXIgPSA4MFxuXG4gICAgLyoqXG4gICAgICogSG9sZHMgdGhlIGNyb3NzaXRlIHJlZmVyZW5jZSB0YWJsZVxuICAgICAqICovXG4gICAgcHJpdmF0ZSB4cmVmczogWFJlZltdID0gW11cblxuICAgIC8qKlxuICAgICAqIGRhdGEgOiBUaGUgZGF0YSByZXByZXNlbnRpbmcgdGhlIG9yaWdpbmFsIFBERiBkb2N1bWVudFxuICAgICAqIGFhbm5vdGF0aW9ucyA6IFRoZSBhbm5vdGF0aW9ucyB0byBhZGQgdG8gdGhlIGRvY3VtZW50XG4gICAgICogKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IFVpbnQ4QXJyYXksIHByaXZhdGUgYW5ub3RhdGlvbnM6IEFubm90YXRpb25bXSwgcHJpdmF0ZSB0b0RlbGV0ZTogQW5ub3RhdGlvbltdLCBwcml2YXRlIHBhcnNlcjogUERGRG9jdW1lbnRQYXJzZXIpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyB0aGUgYW5ub3RhdGlvbnMgcGFnZXdpc2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSBzaW5jZSB0aGUgYW5ub3RhdGlvbiBhcnJheXMgb2YgdGhlIHNpdGVzIG11c3QgYmUgZXh0ZW5kZWRcbiAgICAgKiBhbmQgaXQgbWFrZXMgc2Vuc2UgdG8gZG8gdGhpcyB1cGRhdGUgaW4gb25lIHN0ZXAuXG4gICAgICogKi9cbiAgICBzb3J0UGFnZVdpc2UoYW5ub3RhdGlvbnM6IEFubm90YXRpb25bXSk6IHsgW2l0ZW06IG51bWJlcl06IEFubm90YXRpb25bXSB9IHtcbiAgICAgICAgbGV0IHBhZ2VBbm5vdHM6IHsgW2l0ZW06IG51bWJlcl06IEFubm90YXRpb25bXSB9ID0ge31cblxuICAgICAgICBmb3IgKGxldCBhbm5vdCBvZiBhbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKCFwYWdlQW5ub3RzW2Fubm90LnBhZ2VdKVxuICAgICAgICAgICAgICAgIHBhZ2VBbm5vdHNbYW5ub3QucGFnZV0gPSBbXVxuXG4gICAgICAgICAgICBwYWdlQW5ub3RzW2Fubm90LnBhZ2VdLnB1c2goYW5ub3QpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFnZUFubm90c1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEl0IHJldHVybnMgdGhlIHBhZ2Ugb2JqZWN0IGVpdGhlciBleHRlbmRlZCBieSBhIC9Bbm5vdHMgZmllbGQsIGlmIHRoaXMgZGlkIG5vdCBleGlzdCB5ZXQgb3Igd2l0aCB0aGUgYW5ub3RzIGZpZWxkIHJlcGxhY2VkIGJ5IGEgcmVyZmVyZW5jZSBwb2ludGVyXG4gICAgICogdG8gYW4gYXJyYXkgaWYgdGhlIHBhZ2Ugb2JqZWN0IGNvbnRhaW5zIHRoZSBsaXN0IG9mIGFubm90YXRpb25zIGRpcmVjdGx5XG4gICAgICpcbiAgICAgKiBwdHIgOiBQb2ludGVyIHRvIHRoZSBwYWdlIG9iamVjdFxuICAgICAqIGFubm90X2FycmF5X3JlZmVyZW5jZSA6IFRoZSByZWZlcmVuY2UgdG8gdGhlIGFubm90YXRpb24gYXJyYXlcbiAgICAgKiAqL1xuICAgIGFkYXB0UGFnZU9iamVjdChwYWdlOiBQYWdlLCBhbm5vdF9hcnJheV9yZWZlcmVuY2U6IFJlZmVyZW5jZVBvaW50ZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGlmICghcGFnZS5vYmplY3RfaWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugd2l0aG91dCBvYmplY3QgaWRcIilcblxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFtdXG4gICAgICAgIGxldCBsb29rdXBUYWJsZSA9IHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpXG5cbiAgICAgICAgbGV0IHBhZ2VfcHRyOiBYUmVmID0gbG9va3VwVGFibGVbcGFnZS5vYmplY3RfaWQub2JqXVxuXG4gICAgICAgIHJldHVybiBXcml0ZXJVdGlsLnJlcGxhY2VBbm5vdHNGaWVsZEluUGFnZU9iamVjdCh0aGlzLmRhdGEsIHBhZ2UsIHBhZ2VfcHRyLnBvaW50ZXIsIGFubm90X2FycmF5X3JlZmVyZW5jZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyB0aGUgYW5ub3RhdGlvbnMgb2YgPj5vbmU8PCBwYWdlIGFuZCBkZXJpdmVzIHRoZSBhbm5vdGF0aW9ucyBhcnJheSBmcm9tIGl0LlxuICAgICAqIFRoZXJlYnkgaXQgYWxzbyBjb25zaWRlcnMgdGhlIHBvdGVudGlhbGx5IGV4aXN0aW5nIGFubm90YXRpb24gYXJyYXkuXG4gICAgICpcbiAgICAgKiB0b0RlbGV0ZSA6PSBjb250YWlucyB0aG9zZSBhbm5vdGF0aW9ucyB0aGF0IG11c3QgYmUgZGVsZXRlZC4gSXQgcmVtb3ZlcyB0aGVtIGZyb20gdGhlIHJlZmVyZW5jZSBhcnJheVxuICAgICAqIGFuZCBtYXJrcyB0aGVtIGFzIHJlbW92ZWRcbiAgICAgKiAqL1xuICAgIHdyaXRlQW5ub3RBcnJheShhbm5vdHM6IEFubm90YXRpb25bXSwgdG9EZWxldGU6IEFubm90YXRpb25bXSk6IHsgcHRyOiBSZWZlcmVuY2VQb2ludGVyLCBkYXRhOiBudW1iZXJbXSwgcGFnZVJlZmVyZW5jZTogUmVmZXJlbmNlUG9pbnRlciwgcGFnZURhdGE6IG51bWJlcltdIH0ge1xuICAgICAgICBsZXQgcGFnZSA9IGFubm90c1swXS5wYWdlUmVmZXJlbmNlXG5cbiAgICAgICAgaWYgKCFwYWdlKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJNaXNzaW5nIHBhZ2UgcmVmZXJlbmNlXCIpXG5cbiAgICAgICAgaWYgKCFwYWdlLm9iamVjdF9pZClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiUGFnZSB3aXRob3V0IG9iamVjdCBpZFwiKVxuXG4gICAgICAgIGxldCByZWZlcmVuY2VzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBwYWdlLmFubm90c1xuXG4gICAgICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzLmNvbmNhdChhbm5vdHMubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXgub2JqZWN0X2lkKVxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiQW5ub3RhdGlvbiB3aXRoIG9iamVjdF9pZCBudWxsXCIpXG5cbiAgICAgICAgICAgIHJldHVybiB4Lm9iamVjdF9pZFxuICAgICAgICB9KSlcblxuICAgICAgICAvLyByZW1vdmUgYW5ub3RhdGlvbiByZWZlcmVuY2VzIGZyb20gdGhlIGFycmF5IHRoYXQgbXVzdCBiZSBkZWxldGVkIGFuZCBtYXJrIHRoZW0gYXMgZGVsZXRlZFxuICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlcy5maWx0ZXIoKGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRvRGVsID0gdG9EZWxldGUuZmluZCgodCkgPT4gKDxhbnk+dC5vYmplY3RfaWQpLm9iaiA9PT0gYS5vYmogJiYgKDxhbnk+dC5vYmplY3RfaWQpLmdlbmVyYXRpb24gPT09IGEuZ2VuZXJhdGlvbilcblxuICAgICAgICAgICAgaWYgKHRvRGVsKSB7XG4gICAgICAgICAgICAgICAgdG9EZWwuaXNfZGVsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgcmVmQXJyYXlfaWQ6IGFueSA9IHBhZ2UuYW5ub3RzUG9pbnRlclxuXG4gICAgICAgIGxldCBwYWdlX2RhdGE6IG51bWJlcltdID0gW11cbiAgICAgICAgaWYgKCFyZWZBcnJheV9pZCkge1xuICAgICAgICAgICAgcmVmQXJyYXlfaWQgPSB0aGlzLnBhcnNlci5nZXRGcmVlT2JqZWN0SWQoKVxuICAgICAgICAgICAgcGFnZV9kYXRhID0gdGhpcy5hZGFwdFBhZ2VPYmplY3QocGFnZSwgcmVmQXJyYXlfaWQpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKHJlZkFycmF5X2lkKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLk9CSilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQVJSQVlfU1RBUlQpXG5cblxuICAgICAgICBmb3IgKGxldCBhbiBvZiByZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVSZWZlcmVuY2VQb2ludGVyKGFuLCB0cnVlKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5BUlJBWV9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5FTkRPQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldHVybiB7IHB0cjogcmVmQXJyYXlfaWQsIGRhdGE6IHJldCwgcGFnZVJlZmVyZW5jZTogcGFnZS5vYmplY3RfaWQsIHBhZ2VEYXRhOiBwYWdlX2RhdGEgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgc3VidHlwZSB0byBpdHMgYnl0ZSByZXByZXNlbnRhdGlvblxuICAgICAqICovXG4gICAgY29udmVydFN1YnR5cGUoc3Q6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICAgICAgc3dpdGNoIChzdCkge1xuICAgICAgICAgICAgY2FzZSAnVGV4dCc6XG4gICAgICAgICAgICBjYXNlICcvVGV4dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgODQsIDEwMSwgMTIwLCAxMTZdIC8vID0gJy9UZXh0J1xuICAgICAgICAgICAgY2FzZSAnSGlnaGxpZ2h0JzpcbiAgICAgICAgICAgIGNhc2UgJy9IaWdobGlnaHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDcyLCAxMDUsIDEwMywgMTA0LCAxMDgsIDEwNSwgMTAzLCAxMDQsIDExNl0gLy8gPSAnL0hpZ2hsaWdodCdcbiAgICAgICAgICAgIGNhc2UgJ1VuZGVybGluZSc6XG4gICAgICAgICAgICBjYXNlICcvVW5kZXJsaW5lJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4NSwgMTEwLCAxMDAsIDEwMSwgMTE0LCAxMDgsIDEwNSwgMTEwLCAxMDFdIC8vID0gJy9VbmRlcmxpbmUnXG4gICAgICAgICAgICBjYXNlICdTcXVpZ2dseSc6XG4gICAgICAgICAgICBjYXNlICcvU3F1aWdnbHknOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgzLCAxMTMsIDExNywgMTA1LCAxMDMsIDEwMywgMTA4LCAxMjFdIC8vID0gJy9TcXVpZ2dseSdcbiAgICAgICAgICAgIGNhc2UgJ1N0cmlrZU91dCc6XG4gICAgICAgICAgICBjYXNlICcvU3RyaWtlT3V0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTE2LCAxMTQsIDEwNSwgMTA3LCAxMDEsIDc5LCAxMTcsIDExNl0gLy8gPSAnL1N0cmlrZU91dCdcbiAgICAgICAgICAgIGNhc2UgJ1NxdWFyZSc6XG4gICAgICAgICAgICBjYXNlICcvU3F1YXJlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTEzLCAxMTcsIDk3LCAxMTQsIDEwMV0gLy8gPSAnL1NxdWFyZSdcbiAgICAgICAgICAgIGNhc2UgJ0NpcmNsZSc6XG4gICAgICAgICAgICBjYXNlICcvQ2lyY2xlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA2NywgMTA1LCAxMTQsIDk5LCAxMDgsIDEwMV0gLy8gPSAnL0NpcmNsZSdcbiAgICAgICAgICAgIGNhc2UgJ0ZyZWVUZXh0JzpcbiAgICAgICAgICAgIGNhc2UgJy9GcmVlVGV4dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNzAsIDExNCwgMTAxLCAxMDEsIDg0LCAxMDEsIDEyMCwgMTE2XSAvLyA9ICcvRnJlZVRleHQnXG4gICAgICAgICAgICBjYXNlICdQb2x5Z29uJzpcbiAgICAgICAgICAgIGNhc2UgJy9Qb2x5Z29uJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MCwgMTExLCAxMDgsIDEyMSwgMTAzLCAxMTEsIDExMF0gLy8gPSAnL1BvbHlnb24nXG4gICAgICAgICAgICBjYXNlICdQb2x5TGluZSc6XG4gICAgICAgICAgICBjYXNlICcvUG9seUxpbmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBbNDcsIDgwLCAxMTEsIDEwOCwgMTIxLCA3NiwgMTA1LCAxMTAsIDEwMV0gLy8gJy9Qb2x5TGluZVxuICAgICAgICAgICAgY2FzZSAnU3RhbXAnOlxuICAgICAgICAgICAgY2FzZSAnL1N0YW1wJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQ3LCA4MywgMTE2LCA5NywgMTA5LCAxMTJdIC8vID0gJy9TdGFtcCdcbiAgICAgICAgICAgIGNhc2UgJ0NhcmV0JzpcbiAgICAgICAgICAgIGNhc2UgJy9DYXJldCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNjcsIDk3LCAxMTQsIDEwMSwgMTE2XSAvLyA9ICcvQ2FyZXQnXG4gICAgICAgICAgICBjYXNlICdJbmsnOlxuICAgICAgICAgICAgY2FzZSAnL0luayc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0NywgNzMsIDExMCwgMTA3XSAvLyA9ICcvSW5rJ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIGFuIGFubm90YXRpb24gb2JqZWN0XG4gICAgICogKi9cbiAgICB3cml0ZUFubm90YXRpb25PYmplY3QoYW5ub3Q6IEFubm90YXRpb24pOiB7IHB0cjogUmVmZXJlbmNlUG9pbnRlciwgZGF0YTogbnVtYmVyW10gfSB7XG4gICAgICAgIGlmICghYW5ub3QuYXV0aG9yKVxuICAgICAgICAgICAgYW5ub3QuYXV0aG9yID0gXCJcIlxuXG4gICAgICAgIGlmICghYW5ub3QuY29udGVudHMpXG4gICAgICAgICAgICBhbm5vdC5jb250ZW50cyA9IFwiXCJcblxuICAgICAgICBpZiAoIWFubm90Lm9iamVjdF9pZClcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTm8gb2JqZWN0X2lkXCIpXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbm5vdC5vYmplY3RfaWQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuT0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfU1RBUlQpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlRZUEVfQU5OT1QpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICBpZiAoYW5ub3QucmVjdCAmJiBhbm5vdC5yZWN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlJFQ1QpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShhbm5vdC5yZWN0KSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNVQlRZUEUpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0aGlzLmNvbnZlcnRTdWJ0eXBlKGFubm90LnR5cGUpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuVVBEQVRFX0RBVEUpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LnVwZGF0ZURhdGUpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuQVVUSE9SKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX1NUQVJUKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydFN0cmluZ1RvQXNjaWkoYW5ub3QuYXV0aG9yKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkJSQUNLRVRfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgaWYgKGFubm90LmNvbnRlbnRzKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5DT05URU5UUylcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX1NUQVJUKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnRTdHJpbmdUb0FzY2lpKGFubm90LmNvbnRlbnRzKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5CUkFDS0VUX0VORClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLklEKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5pZCkpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcblxuICAgICAgICBpZiAoYW5ub3QuYW5ub3RhdGlvbl9mbGFnKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5GTEFHKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShhbm5vdC5hbm5vdGF0aW9uX2ZsYWcpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LmNvbG9yKSB7XG4gICAgICAgICAgICBpZiAoYW5ub3QuY29sb3IuciA+IDEpIGFubm90LmNvbG9yLnIgLz0gMjU1XG4gICAgICAgICAgICBpZiAoYW5ub3QuY29sb3IuZyA+IDEpIGFubm90LmNvbG9yLmcgLz0gMjU1XG4gICAgICAgICAgICBpZiAoYW5ub3QuY29sb3IuYiA+IDEpIGFubm90LmNvbG9yLmIgLz0gMjU1XG5cbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkNPTE9SKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlTnVtYmVyQXJyYXkoW2Fubm90LmNvbG9yLnIsIGFubm90LmNvbG9yLmcsIGFubm90LmNvbG9yLmJdKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IG9wYWNpdHkgPSBhbm5vdC5vcGFjaXR5XG4gICAgICAgIGlmIChvcGFjaXR5KSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PUEFDSVRZKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShvcGFjaXR5KSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC5ib3JkZXIpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkJPUkRFUilcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU51bWJlckFycmF5KFthbm5vdC5ib3JkZXIuaG9yaXpvbnRhbF9jb3JuZXJfcmFkaXVzLCBhbm5vdC5ib3JkZXIudmVydGljYWxfY29ybmVyX3JhZGl1cywgYW5ub3QuYm9yZGVyLmJvcmRlcl93aWR0aF0pKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LmRlZmF1bHRBcHBlYXJhbmNlKSB7XG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5ERUZBVUxUX0FQUEVBUkFOQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9TVEFSVClcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoVXRpbC5jb252ZXJ0U3RyaW5nVG9Bc2NpaShhbm5vdC5kZWZhdWx0QXBwZWFyYW5jZSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuQlJBQ0tFVF9FTkQpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFubm90LnBhZ2VSZWZlcmVuY2UpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vIHBhZ2UgcmVmZXJlbmNlXCIpXG5cbiAgICAgICAgaWYgKGFubm90LnBhZ2VSZWZlcmVuY2Uub2JqZWN0X2lkKSB7XG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5QQUdFX1JFRkVSRU5DRSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIoYW5ub3QucGFnZVJlZmVyZW5jZS5vYmplY3RfaWQsIHRydWUpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFubm90LnF1YWRQb2ludHMpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlFVQURQT0lOVFMpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShhbm5vdC5xdWFkUG9pbnRzKSlcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbm5vdC52ZXJ0aWNlcykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuVkVSVElDRVMpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlclV0aWwud3JpdGVOdW1iZXJBcnJheShhbm5vdC52ZXJ0aWNlcykpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3Quc3RhbXBUeXBlKSB7XG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5OQU1FKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRFJBRlQpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuY2FyZXRTeW1ib2wpIHtcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNZKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlApXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYW5ub3QuaW5rTGlzdCkge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuSU5LTElTVClcbiAgICAgICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZU5lc3RlZE51bWJlckFycmF5KGFubm90Lmlua0xpc3QpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRU5ET0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXR1cm4geyBwdHI6IGFubm90Lm9iamVjdF9pZCwgZGF0YTogcmV0IH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhbGwgdGhlIGNyb3NzIHNpdGUgcmVmZXJlbmNlIHRhYmxlIGVudHJpZXMgYW5kIGV4dHJhY3RzIHRoZSBjb25zZWN1dGl2ZSBzZXF1ZW5jZXNcbiAgICAgKiAqL1xuICAgIGNvbXB1dGVYcmVmU2VxdWVuY2VzKCk6IFhSZWZbXVtdIHtcbiAgICAgICAgbGV0IHNlcXM6IFhSZWZbXVtdID0gW11cblxuICAgICAgICBsZXQgb3JkZXJlZF94cmVmcyA9IHRoaXMueHJlZnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuaWQgPCBiLmlkKVxuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgaWYgKGEuaWQgPiBiLmlkKVxuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzZXE6IFhSZWZbXSA9IFtvcmRlcmVkX3hyZWZzWzBdXVxuICAgICAgICBsZXQgbGFzdF9pZCA9IG9yZGVyZWRfeHJlZnNbMF0uaWRcbiAgICAgICAgc2Vxcy5wdXNoKHNlcSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBvcmRlcmVkX3hyZWZzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAob3JkZXJlZF94cmVmc1tpXS5pZCA9PT0gbGFzdF9pZCArIDEpIHtcbiAgICAgICAgICAgICAgICBzZXEucHVzaChvcmRlcmVkX3hyZWZzW2ldKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXEgPSBbb3JkZXJlZF94cmVmc1tpXV1cbiAgICAgICAgICAgICAgICBzZXFzLnB1c2goc2VxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdF9pZCA9IG9yZGVyZWRfeHJlZnNbaV0uaWRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXFzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyB0aGUgcG9pbnRlcnMgb2YgdGhlIGxpbmtlZCBsaXN0IHRoYXQgY29udGFpbnMgdGhlIGlkcyBvZiBmcmVlZCBvYmplY3RzXG4gICAgICogKi9cbiAgICBhcHBseU9iamVjdEZyZWVpbmcocmVmczogWFJlZltdKTogWFJlZltdIHtcbiAgICAgICAgLy8gd3JpdGUgZnJlZSBvYmplY3QgaGVhZFxuICAgICAgICBsZXQgaGVhZCA9IHRoaXMucGFyc2VyLmRvY3VtZW50SGlzdG9yeS5jcmVhdGVPYmplY3RMb29rdXBUYWJsZSgpWzBdXG4gICAgICAgIGxldCBsYXN0X2ZyZWVkX29iamVjdF9pZCA9IGhlYWQuaWRcblxuICAgICAgICBsZXQgZnJlZWRfb2JqczogWFJlZltdID0gcmVmcy5maWx0ZXIociA9PiByLmZyZWUpXG4gICAgICAgIGZyZWVkX29ianMgPSBmcmVlZF9vYmpzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmlkIDwgYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIGlmIChhLmlkID4gYi5pZClcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgbGFzdG9iajogWFJlZiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuICAgICAgICBmb3IgKGxldCBvYmogb2YgZnJlZWRfb2Jqcykge1xuICAgICAgICAgICAgaWYgKCFsYXN0b2JqKSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IGZpcnN0IG9iamVjdCBhcyBsaXN0IGhlYWRlclxuICAgICAgICAgICAgICAgIGhlYWQucG9pbnRlciA9IG9iai5pZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGFzdG9iaikge1xuICAgICAgICAgICAgICAgIGxhc3RvYmoucG9pbnRlciA9IG9iai5pZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYXN0b2JqID0gb2JqXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJlZWRfb2Jqcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgZnJlZWRfb2Jqc1tmcmVlZF9vYmpzLmxlbmd0aCAtIDFdLnBvaW50ZXIgPSBsYXN0X2ZyZWVkX29iamVjdF9pZFxuXG4gICAgICAgIHJlZnMucHVzaChoZWFkKVxuXG4gICAgICAgIHJldHVybiByZWZzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSBjcm9zc2l0ZSByZWZlcmVuY2UgdGFibGVcbiAgICAgKiAqL1xuICAgIHdyaXRlQ3Jvc3NTaXRlUmVmZXJlbmNlVGFibGUoKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlci5YUkVGXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHRoaXMueHJlZnMgPSB0aGlzLmFwcGx5T2JqZWN0RnJlZWluZyh0aGlzLnhyZWZzKVxuXG4gICAgICAgIGxldCBvcmRlcmVkX3NlcXVlbmNlcyA9IHRoaXMuY29tcHV0ZVhyZWZTZXF1ZW5jZXMoKVxuXG4gICAgICAgIGZvciAobGV0IHNlcXVlbmNlIG9mIG9yZGVyZWRfc2VxdWVuY2VzKSB7XG4gICAgICAgICAgICBsZXQgaGVhZCA9IHNlcXVlbmNlWzBdXG4gICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KFV0aWwuY29udmVydE51bWJlclRvQ2hhckFycmF5KGhlYWQuaWQpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShzZXF1ZW5jZS5sZW5ndGgpKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9yZXQ6IG51bWJlcltdID0gW11cbiAgICAgICAgICAgICAgICBfcmV0ID0gX3JldC5jb25jYXQoV3JpdGVyVXRpbC5wYWQoMTAsIHNlcXVlbmNlW2ldLnBvaW50ZXIpKVxuICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgICAgICAgICAgX3JldCA9IF9yZXQuY29uY2F0KFdyaXRlclV0aWwucGFkKDUsIHNlcXVlbmNlW2ldLmdlbmVyYXRpb24pKVxuICAgICAgICAgICAgICAgIF9yZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgICAgICAgICBpZiAoc2VxdWVuY2VbaV0uZnJlZSlcbiAgICAgICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5GKVxuXG4gICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlW2ldLnVwZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5OKVxuXG4gICAgICAgICAgICAgICAgX3JldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgICAgICAgICBfcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgICAgICAgICAgaWYgKF9yZXQubGVuZ3RoIDwgMjApXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiWFJlZiBlbnRyeSA8IDIwIGJ5dGVzXCIpXG5cbiAgICAgICAgICAgICAgICByZXQgPSByZXQuY29uY2F0KF9yZXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGVzIHRoZSB0cmFpbGVyXG4gICAgICogKi9cbiAgICB3cml0ZVRyYWlsZXIocG9zWHJlZjogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgcmV0OiBudW1iZXJbXSA9IFdyaXRlci5UUkFJTEVSXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkRJQ1RfU1RBUlQpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNJWkUpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheSh0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkudHJhaWxlclNpemUpKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgbGV0IHRyYWlsZXIgPSB0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuZ2V0UmVjZW50VXBkYXRlKClcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuUk9PVClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIGlmICghdHJhaWxlci5yb290KVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJObyByb290IG9iamVjdCBpbiB0cmFpbGVyLCBhbHRob3VnaCB0aGlzIGlzIGFuIGNyb3NzIHJlZmVyZW5jZSB0YWJsZSBkb2N1bWVudFwiKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyVXRpbC53cml0ZVJlZmVyZW5jZVBvaW50ZXIodHJhaWxlci5yb290LCB0cnVlKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlBSRVYpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheSh0aGlzLnBhcnNlci5kb2N1bWVudEhpc3RvcnkuZ2V0UmVjZW50VXBkYXRlKCkuc3RhcnRfcG9pbnRlcikpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRElDVF9FTkQpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5DUilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkxGKVxuXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLlNUQVJUWFJFRilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChVdGlsLmNvbnZlcnROdW1iZXJUb0NoYXJBcnJheShwb3NYcmVmKSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG4gICAgICAgIHJldCA9IHJldC5jb25jYXQoV3JpdGVyLkVPRilcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkNSKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuTEYpXG5cbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgYW5uYXRpb25zIGF0IHRoZSBlbmQgb2YgdGhlIFBERiBieXRlIHJlcHJlc2VudGF0aW9uIGFuZCByZXR1cm5zXG4gICAgICogdGhlIGJ5dGUgYXJyYXlcbiAgICAgKiAqL1xuICAgIHdyaXRlKCk6IFVpbnQ4QXJyYXkge1xuICAgICAgICBsZXQgcGFnZVdpc2VTb3J0ZWQgPSB0aGlzLnNvcnRQYWdlV2lzZSh0aGlzLmFubm90YXRpb25zKVxuXG4gICAgICAgIGxldCBwdHI6IG51bWJlciA9IHRoaXMuZGF0YS5sZW5ndGhcblxuICAgICAgICBsZXQgbmV3X2RhdGE6IG51bWJlcltdID0gW11cblxuICAgICAgICAvLyBGaXggY2FzZSB0aGF0IHRoZXJlIGlzIG5vIGxpbmVicmVhayBhZnRlciB0aGUgZW5kIG9mIHRoZSBmaWxlXG4gICAgICAgIGlmICh0aGlzLmRhdGFbcHRyIC0gMV0gPT09IDcwKSB7IC8vIDcwID0gJ0YnIChmcm9tIFslJUVPXUZcbiAgICAgICAgICAgIG5ld19kYXRhLnB1c2goV3JpdGVyLkNSKVxuICAgICAgICAgICAgbmV3X2RhdGEucHVzaChXcml0ZXIuTEYpXG4gICAgICAgICAgICBwdHIgKz0gMlxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhZ2VXaXNlU29ydGVkKSB7XG4gICAgICAgICAgICBsZXQgcGFnZUFubm90cyA9IHBhZ2VXaXNlU29ydGVkW2tleV1cblxuICAgICAgICAgICAgLy8gd3JpdGUgdGhlIGFycmF5IHJlZmVyZW5jaW5nIHRvIGFubm90YXRpb25zIG9mIGEgY2VydGFpbiBwYWdlXG4gICAgICAgICAgICAvLyBpdCBhbHNvIHJlbW92ZXMgcmVmZXJlbmNlcyBvZiBhbm5vdGF0aW9ucyB0aGF0IG11c3QgYmUgZGVsZXRlZFxuICAgICAgICAgICAgbGV0IGFubm90X2FycmF5ID0gdGhpcy53cml0ZUFubm90QXJyYXkocGFnZUFubm90cywgdGhpcy50b0RlbGV0ZSlcbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGFubm90X2FycmF5LnB0ci5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogcHRyLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGFubm90X2FycmF5LnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgIGZyZWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkuZGF0YSlcbiAgICAgICAgICAgIHB0ciArPSBhbm5vdF9hcnJheS5kYXRhLmxlbmd0aFxuXG4gICAgICAgICAgICAvLyBhZGQgYWRhcHRlZCBwYWdlIG9iamVjdCBpZiBpdCBleGlzdHMgLS0gSW4gdGhlIGNhc2UgdGhlIHBhZ2UgaGFkIG5vIGFubm90YXRpb24geWV0IHRoZXJlIGV4aXN0c1xuICAgICAgICAgICAgLy8gbm8gc3VjaCBhcnJheSByZWZlcnJpbmcgdG8gaXRzIGFubm90YXRpb25zLiBBIHBvaW50ZXIgdG8gc3VjaCBhbiBhcnJheSBtdXN0IGJlIGFkZGVkIHRvIHRoZVxuICAgICAgICAgICAgLy8gcGFnZSBvYmplY3QuIElmIHRoaXMgd2FzIGRvbmUgdGhlIGBwYWdlRGF0YWAgcGFyYW1hdGVyIGlzIHNldCBhbmQgY29udGFpbnMgdGhlIGFkYXB0ZWQgcGFnZSBvYmplY3RcbiAgICAgICAgICAgIGlmIChhbm5vdF9hcnJheS5wYWdlRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54cmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGFubm90X2FycmF5LnBhZ2VSZWZlcmVuY2Uub2JqLFxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyOiBwdHIsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRpb246IGFubm90X2FycmF5LnBhZ2VSZWZlcmVuY2UuZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZnJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3X2RhdGEgPSBuZXdfZGF0YS5jb25jYXQoYW5ub3RfYXJyYXkucGFnZURhdGEpXG4gICAgICAgICAgICAgICAgcHRyICs9IGFubm90X2FycmF5LnBhZ2VEYXRhLmxlbmd0aFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3cml0ZXMgdGhlIGFjdHVhbCBhbm5vdGF0aW9uIG9iamVjdFxuICAgICAgICAgICAgZm9yIChsZXQgYW5ub3Qgb2YgcGFnZUFubm90cykge1xuICAgICAgICAgICAgICAgIGxldCBhbm5vdF9vYmogPSB0aGlzLndyaXRlQW5ub3RhdGlvbk9iamVjdChhbm5vdClcbiAgICAgICAgICAgICAgICB0aGlzLnhyZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogYW5ub3Rfb2JqLnB0ci5vYmosXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXI6IHB0cixcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogYW5ub3Rfb2JqLnB0ci5nZW5lcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmcmVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KGFubm90X29iai5kYXRhKVxuICAgICAgICAgICAgICAgIHB0ciArPSBhbm5vdF9vYmouZGF0YS5sZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRha2UgYWxsIGFubm90YXRpb25zIHRoYXQgYXJlIG5vdCBkZWxldGVkIHlldFxuICAgICAgICBsZXQgX3RvRGVsZXRlOiBBbm5vdGF0aW9uW10gPSB0aGlzLnRvRGVsZXRlLmZpbHRlcigodCkgPT4gIXQuaXNfZGVsZXRlZClcbiAgICAgICAgbGV0IHBhZ2VXaXNlU29ydGVkVG9EZWxldGUgPSB0aGlzLnNvcnRQYWdlV2lzZShfdG9EZWxldGUpXG5cbiAgICAgICAgLy8gYWRhcHQgdGhlIHJlbWFpbmluZyBhbm5vdGF0aW9uIHJlZmVyZW5jZSB0YWJsZXNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHBhZ2VXaXNlU29ydGVkVG9EZWxldGUpIHtcbiAgICAgICAgICAgIGxldCBkZWxfZGF0YSA9IHRoaXMudXBkYXRlUGFnZUFubm90YXRpb25SZWZlcmVuY2VBcnJheShwYWdlV2lzZVNvcnRlZFRvRGVsZXRlW2tleV0pXG4gICAgICAgICAgICB0aGlzLnhyZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiBkZWxfZGF0YS5wdHIub2JqLFxuICAgICAgICAgICAgICAgIHBvaW50ZXI6IHB0cixcbiAgICAgICAgICAgICAgICBnZW5lcmF0aW9uOiBkZWxfZGF0YS5wdHIuZ2VuZXJhdGlvbixcbiAgICAgICAgICAgICAgICBmcmVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IHRydWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG5ld19kYXRhID0gbmV3X2RhdGEuY29uY2F0KGRlbF9kYXRhLmRhdGEpXG4gICAgICAgICAgICBwdHIgKz0gZGVsX2RhdGEuZGF0YS5sZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF0IHRoaXMgcG9pbnQgYWxsIHJlZmVyZW5jZXMgdG8gYW5ub3RhdGlvbiBvYmplY3RzIGluIHBhZ2VzIHNob3VsZCBiZSByZW1vdmVkIGFuZCB3ZSBjYW4gZnJlZVxuICAgICAgICAvLyB0aGUgYW5ub3RhdGlvbiBvYmplY3QgaWRzXG4gICAgICAgIGZvciAobGV0IHRvRGVsIG9mIHRoaXMudG9EZWxldGUpIHtcbiAgICAgICAgICAgIGlmICghdG9EZWwub2JqZWN0X2lkKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgICAgIHRoaXMueHJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHRvRGVsLm9iamVjdF9pZC5vYmosXG4gICAgICAgICAgICAgICAgcG9pbnRlcjogLTEsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGlvbjogdG9EZWwub2JqZWN0X2lkLmdlbmVyYXRpb24gKyAxLCAvLyBpbmNyZWFzZSBnZW5lcmF0aW9uXG4gICAgICAgICAgICAgICAgZnJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNydGFibGUgPSB0aGlzLndyaXRlQ3Jvc3NTaXRlUmVmZXJlbmNlVGFibGUoKVxuICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdChjcnRhYmxlKVxuXG4gICAgICAgIGxldCB0cmFpbGVyID0gdGhpcy53cml0ZVRyYWlsZXIocHRyKVxuICAgICAgICBuZXdfZGF0YSA9IG5ld19kYXRhLmNvbmNhdCh0cmFpbGVyKVxuXG4gICAgICAgIGxldCBuZXdfZGF0YV9hcnJheSA9IG5ldyBVaW50OEFycmF5KG5ld19kYXRhKVxuXG4gICAgICAgIGxldCByZXRfYXJyYXkgPSBuZXcgVWludDhBcnJheSh0aGlzLmRhdGEubGVuZ3RoICsgbmV3X2RhdGFfYXJyYXkubGVuZ3RoKVxuICAgICAgICByZXRfYXJyYXkuc2V0KHRoaXMuZGF0YSlcbiAgICAgICAgcmV0X2FycmF5LnNldChuZXdfZGF0YSwgdGhpcy5kYXRhLmxlbmd0aClcblxuICAgICAgICByZXR1cm4gcmV0X2FycmF5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gYW5ub3RhdGlvblxuICAgICAqICovXG4gICAgdXBkYXRlUGFnZUFubm90YXRpb25SZWZlcmVuY2VBcnJheSh0b0RlbGV0ZTogQW5ub3RhdGlvbltdKTogeyBwdHI6IFJlZmVyZW5jZVBvaW50ZXIsIGRhdGE6IG51bWJlcltdIH0ge1xuICAgICAgICBsZXQgcGFnZSA9IHRvRGVsZXRlWzBdLnBhZ2VSZWZlcmVuY2VcblxuICAgICAgICBpZiAoIXBhZ2UpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk1pc3NpbmcgcGFnZSByZWZlcmVuY2VcIilcblxuICAgICAgICBpZiAoIXBhZ2Uub2JqZWN0X2lkKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlBhZ2Ugd2l0aG91dCBvYmplY3QgaWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWZlcmVuY2VzOiBSZWZlcmVuY2VQb2ludGVyW10gPSBwYWdlLmFubm90c1xuXG4gICAgICAgIC8vIHJlbW92ZSBhbm5vdGF0aW9uIHJlZmVyZW5jZXMgZnJvbSB0aGUgYXJyYXkgdGhhdCBtdXN0IGJlIGRlbGV0ZWQgYW5kIG1hcmsgdGhlbSBhcyBkZWxldGVkXG4gICAgICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzLmZpbHRlcigoYTogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9EZWwgPSB0b0RlbGV0ZS5maW5kKCh0KSA9PiAoPGFueT50Lm9iamVjdF9pZCkub2JqID09PSBhLm9iaiAmJiAoPGFueT50Lm9iamVjdF9pZCkuZ2VuZXJhdGlvbiA9PT0gYS5nZW5lcmF0aW9uKVxuXG4gICAgICAgICAgICBpZiAodG9EZWwpIHtcbiAgICAgICAgICAgICAgICB0b0RlbC5pc19kZWxldGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCByZWZBcnJheV9pZDogYW55ID0gcGFnZS5hbm5vdHNQb2ludGVyXG5cbiAgICAgICAgbGV0IHJldDogbnVtYmVyW10gPSBXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihyZWZBcnJheV9pZClcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLlNQQUNFKVxuICAgICAgICByZXQgPSByZXQuY29uY2F0KFdyaXRlci5PQkopXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5TUEFDRSlcbiAgICAgICAgcmV0LnB1c2goV3JpdGVyLkFSUkFZX1NUQVJUKVxuXG5cbiAgICAgICAgZm9yIChsZXQgYW4gb2YgcmVmZXJlbmNlcykge1xuICAgICAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXJVdGlsLndyaXRlUmVmZXJlbmNlUG9pbnRlcihhbiwgdHJ1ZSkpXG4gICAgICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG4gICAgICAgIH1cblxuICAgICAgICByZXQucHVzaChXcml0ZXIuQVJSQVlfRU5EKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuU1BBQ0UpXG5cbiAgICAgICAgcmV0ID0gcmV0LmNvbmNhdChXcml0ZXIuRU5ET0JKKVxuICAgICAgICByZXQucHVzaChXcml0ZXIuQ1IpXG4gICAgICAgIHJldC5wdXNoKFdyaXRlci5MRilcblxuICAgICAgICByZXR1cm4geyBwdHI6IHJlZkFycmF5X2lkLCBkYXRhOiByZXQgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=