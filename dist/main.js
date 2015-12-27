/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _images,
	    _this = this;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	__webpack_require__(1);
	
	__webpack_require__(4);
	
	var _preloadIo = __webpack_require__(6);
	
	var _preloadIo2 = _interopRequireDefault(_preloadIo);
	
	var _preloadIoImage = __webpack_require__(10);
	
	var _preloadIoImage2 = _interopRequireDefault(_preloadIoImage);
	
	var _lib = __webpack_require__(11);
	
	var _util = __webpack_require__(12);
	
	var win = window;
	var doc = win.document;
	var defer = _lib.promise.features.defer;
	var _promise$utilities = _lib.promise.utilities;
	var domReady = _promise$utilities.domReady;
	var delay = _promise$utilities.delay;
	
	var IMAGE_PATH = 'assets/images';
	var preloader = new _preloadIo2['default']();
	var preloaderDeferred = defer();
	var images = (_images = {}, _defineProperty(_images, IMAGE_PATH + '/title.png', 0), _defineProperty(_images, IMAGE_PATH + '/cover.png', 0), _defineProperty(_images, IMAGE_PATH + '/heart.png', 0), _defineProperty(_images, IMAGE_PATH + '/heart-out.png', 0), _defineProperty(_images, IMAGE_PATH + '/wedding.png', 0), _defineProperty(_images, IMAGE_PATH + '/slides/1.jpg', 0), _defineProperty(_images, IMAGE_PATH + '/slides/2.jpg', 0), _defineProperty(_images, IMAGE_PATH + '/slides/3.jpg', 0), _defineProperty(_images, IMAGE_PATH + '/slides/4.jpg', 0), _defineProperty(_images, IMAGE_PATH + '/slides/5.jpg', 0), _images);
	preloader.register(new _preloadIoImage2['default']({
	    blob: true
	}));
	for (var path in images) {
	    images[path] = preloader.load(path);
	}
	preloader.on(_preloadIo.EVENTS.LOAD, function (event) {
	    console.log('image load');
	
	    var path;
	    for (var p in images) {
	        if (event.id === images[p]) {
	            path = p;
	            break;
	        }
	    }
	
	    var image = new Image();
	    var urlCreator = window.URL || window.webkitURL;
	    var imageURL = urlCreator.createObjectURL(event.res);
	    image.src = imageURL;
	    images[path] = image;
	});
	preloader.on(_preloadIo.EVENTS.COMPLETE, function (event) {
	    console.log('image complete');
	    preloaderDeferred.resolve(images);
	});
	
	var MUSIC_PATH = 'assets/musics';
	var music = new Audio(MUSIC_PATH + '/bg.mp3');
	var musicDeferred = defer();
	music.addEventListener('loadstart', function () {
	    return console.log('music loadstart');
	});
	music.addEventListener('loadeddata', function () {
	    return console.log('music loadeddata');
	});
	music.addEventListener('loadedmetadata', function () {
	    return console.log('music loadedmetadata');
	});
	var progressCount = 0;
	music.addEventListener('progress', function () {
	    console.log('music progress');
	    progressCount++;
	    if (progressCount > 20) {
	        music.play();
	        musicDeferred.resolve();
	    }
	});
	music.addEventListener('loadend', function () {
	    return console.log('music loadend');
	});
	music.addEventListener('load', function () {
	    return console.log('music load');
	});
	music.loop = true;
	music.autobuffer = true;
	music.preload = 'auto';
	
	var LOGO_HTML = '\n    <div id="logo-wrap">\n        <div class="bg"></div>\n        <img src="' + IMAGE_PATH + '/logo.png" />\n    </div>\n';
	var $logo;
	
	var COVER_HTML = '\n    <div id="cover-wrap">\n        <div class="paper">\n            <div class="title">\n                <img src="//:0" data-src="' + IMAGE_PATH + '/title.png" />\n            </div>\n        </div>\n        <div class="imgs">\n            <img class="heart" src="//:0" data-src="' + IMAGE_PATH + '/heart.png" />\n            <img class="cover" src="//:0" data-src="' + IMAGE_PATH + '/cover.png" />\n            <img class="heart-out" src="//:0" data-src="' + IMAGE_PATH + '/heart-out.png" />\n        </div>\n        <img class="wedding" src="//:0" data-src="' + IMAGE_PATH + '/wedding.png" />\n        <div class="invitation">\n            <div class="time">2016年1月27日</div>\n            <div class="name">金擘 先生、黄玉梅 女士</div>\n            <div class="text">诚邀亲爱的您参加我们的婚礼</div>\n            <div class="form"><label>地点：</label><span>浙江省绍兴市越城区偏门直街179号<span></div>\n            <div class="form"><label>酒店：</label><span>香港品珍楼精品食府<span></div>\n            <div class="form"><label>时间：</label><span>下午六点整（五点开始签到）<span></div>\n        </div>\n    </div>\n';
	var $cover;
	
	var INDICATOR_HTML = '\n    <div id="indicator-wrap">\n        <a class="text">请君亲启</a>\n    </div>\n';
	var $indicator;
	
	var SLIDES_HTML = '\n    <div id="slide-wrap">\n        <section>\n            <header>\n                <h2>2011年12月18日</h2>\n                <h3>我们在车展上不期而遇</h3>\n            </header>\n            <img src="//:0" data-src="' + IMAGE_PATH + '/slides/1.jpg" />\n        </section>\n        <section>\n            <header>\n                <h2>2012年3月31日</h2>\n                <h3>我们在我回乡前的最后一天相恋</h3>\n            </header>\n            <img src="//:0" data-src="' + IMAGE_PATH + '/slides/2.jpg" />\n        </section>\n        <section>\n            <header>\n                <h2>2013年10月26日</h2>\n                <h3>我们第一次踏上异国的旅行</h3>\n            </header>\n            <img src="//:0" data-src="' + IMAGE_PATH + '/slides/3.jpg" />\n        </section>\n        <section>\n            <header>\n                <h2>2014年4月12日</h2>\n                <h3>我们一起收获永世不变的爱情</h3>\n            </header>\n            <img src="//:0" data-src="' + IMAGE_PATH + '/slides/4.jpg" />\n        </section>\n        <section>\n            <header>\n                <h2>2015年9月9日</h2>\n                <h3>让世界见证</h3>\n            </header>\n            <img src="//:0" data-src="' + IMAGE_PATH + '/slides/5.jpg" />\n        </section>\n    </div>\n';
	var $slides;
	
	function lazyload(el) {
	    var _context;
	
	    (_context = _util.findAll.call(el, 'img[data-src]'), _util.each).call(_context, function (img) {
	        var dataSrc = img.getAttribute('data-src');
	        if (images[dataSrc]) {
	            var _img = images[dataSrc];
	            _img.className = img.className;
	            _util.replace.call(_img, img);
	        }
	    });
	}
	
	function loading() {
	    var _context2;
	
	    var percent = 0;
	    var deferred = defer();
	    var $bg = (_context2 = $logo, _util.find).call(_context2, '.bg');
	
	    (0, _util.requestAnimationFrame)(function h() {
	        (0, _util.requestAnimationFrame)(h);
	        percent++;
	        $bg.style.webkitTransform = $bg.style.transform = 'translateY(' + (100 - percent) + '%)';
	        if (percent >= 100) {
	            percent = 0;
	        }
	    });
	
	    preloaderDeferred.promise.then(deferred.resolve);
	
	    return deferred.promise;
	}
	
	function hideLogo() {
	    var deferred = defer();
	
	    $logo.style.webkitTransition = $logo.style.transition = 'opacity 0.4s ease-out 0s';
	    $logo.style.opacity = '0';
	
	    delay(450).then(function () {
	        $logo.parentNode.removeChild($logo);
	        deferred.resolve();
	    });
	
	    return deferred.promise;
	}
	
	function showCover() {
	    var deferred = defer();
	
	    $cover.style.webkitTransition = $cover.style.transition = 'opacity 0.6s ease-in 0s';
	    $cover.style.opacity = '1';
	
	    delay(450).then(deferred.resolve);
	
	    return deferred.promise;
	}
	
	function showPaper() {
	    var _context3;
	
	    var deferred = defer();
	
	    var $paper = (_context3 = $cover, _util.find).call(_context3, '.paper');
	    $paper.style.webkitTransition = $paper.style.transition = 'all 1s ease 0s';
	    $paper.style.opacity = '1';
	    $paper.style.webkitTransform = $paper.style.transform = 'translateY(0)';
	
	    delay(450).then(deferred.resolve);
	
	    return deferred.promise;
	}
	
	function showHeart() {
	    var _context4;
	
	    var deferred = defer();
	
	    var $heart = (_context4 = $cover, _util.find).call(_context4, '.heart');
	    $heart.style.webkitTransition = $heart.style.transition = 'opacity 0.6s ease-in 0s';
	    $heart.style.opacity = '1';
	
	    var $heartOut = (_context4 = $cover, _util.find).call(_context4, '.heart-out');
	    $heartOut.style.webkitTransition = $heartOut.style.transition = 'opacity 0.6s ease-in 0s';
	    $heartOut.style.opacity = '1';
	
	    delay(450).then(deferred.resolve);
	
	    return deferred.promise;
	}
	
	function showIndicator() {
	    $indicator.style.display = 'block';
	}
	
	function hideIndicator() {
	    $indicator.style.display = 'none';
	}
	
	function flickUp() {
	    var deferred = defer();
	    document.body.addEventListener('flick', function handler(e) {
	        if (!!e.isVertical && e.displacementY < 0) {
	            document.body.removeEventListener('flick', handler);
	            deferred.resolve();
	        }
	    });
	    return deferred.promise;
	}
	
	function open() {
	    var _context5;
	
	    var deferred = defer();
	
	    var $imgs = (_context5 = $cover, _util.find).call(_context5, '.imgs');
	    var $title = (_context5 = $cover, _util.find).call(_context5, '.title');
	
	    $imgs.style.webkitTransition = $imgs.style.transition = 'all 0.8s ease-out 0s';
	    $imgs.style.webkitTransform = $imgs.style.transform = 'translateY(100%)';
	
	    $title.style.webkitTransition = $title.style.transition = 'all 0.8s ease-out 0s';
	    $title.style.webkitTransform = $title.style.transform = 'translateY(-200%)';
	
	    delay(450).then(deferred.resolve);
	
	    return deferred.promise;
	}
	
	function sliding() {
	    var _context6;
	
	    var splitText, showText, hideText, DIRS, showImage, hideImage, $sections, _context7, $section;
	
	    return regeneratorRuntime.async(function sliding$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                hideImage = function hideImage(el) {
	                    var $img, dir;
	                    return regeneratorRuntime.async(function hideImage$(context$2$0) {
	                        while (1) switch (context$2$0.prev = context$2$0.next) {
	                            case 0:
	                                $img = el;
	                                dir = DIRS[Math.floor(Math.random() * 4)];
	
	                                $img.style.webkitTransition = $img.style.transition = 'all 0.8s ease-in 0s';
	                                $img.style.opacity = 0;
	                                $img.style.webkitTransform = $img.style.transform = dir[0] + '(' + dir[1] + ')';
	
	                            case 5:
	                            case 'end':
	                                return context$2$0.stop();
	                        }
	                    }, null, this);
	                };
	
	                showImage = function showImage(el) {
	                    var $img, dir;
	                    return regeneratorRuntime.async(function showImage$(context$2$0) {
	                        while (1) switch (context$2$0.prev = context$2$0.next) {
	                            case 0:
	                                $img = el;
	                                dir = DIRS[Math.floor(Math.random() * 4)];
	
	                                $img.style.webkitTransform = $img.style.transform = dir[0] + '(' + dir[1] + ')';
	
	                                context$2$0.next = 5;
	                                return regeneratorRuntime.awrap(delay(100));
	
	                            case 5:
	
	                                $img.style.webkitTransition = $img.style.transition = 'all 0.8s ease-in 0s';
	                                $img.style.opacity = 1;
	                                $img.style.webkitTransform = $img.style.transform = dir[0] + '(0)';
	
	                            case 8:
	                            case 'end':
	                                return context$2$0.stop();
	                        }
	                    }, null, this);
	                };
	
	                hideText = function hideText(el) {
	                    var $spans, delayTime, len, $span;
	                    return regeneratorRuntime.async(function hideText$(context$2$0) {
	                        while (1) switch (context$2$0.prev = context$2$0.next) {
	                            case 0:
	                                $spans = Array.from(_util.findAll.call(el, 'span'));
	                                delayTime = 0.1;
	                                len = $spans.length;
	
	                            case 3:
	                                if (!$spans.length) {
	                                    context$2$0.next = 16;
	                                    break;
	                                }
	
	                                $span = $spans.shift();
	
	                                $span.style.webkitTransform = $span.style.transform = 'translateX(0)';
	
	                                context$2$0.next = 8;
	                                return regeneratorRuntime.awrap(delay(50));
	
	                            case 8:
	
	                                $span.style.webkitTransition = $span.style.transition = 'all 0.4s ease-in ' + delayTime + 's';
	                                $span.style.opacity = 0;
	                                $span.style.webkitTransform = $span.style.transform = 'translateX(-50%)';
	
	                                delayTime += 0.1;
	
	                                context$2$0.next = 14;
	                                return regeneratorRuntime.awrap(delay(50));
	
	                            case 14:
	                                context$2$0.next = 3;
	                                break;
	
	                            case 16:
	                                context$2$0.next = 18;
	                                return regeneratorRuntime.awrap(delay(len * 100 + 300));
	
	                            case 18:
	                            case 'end':
	                                return context$2$0.stop();
	                        }
	                    }, null, this);
	                };
	
	                showText = function showText(el) {
	                    var $spans, delayTime, len, $span;
	                    return regeneratorRuntime.async(function showText$(context$2$0) {
	                        while (1) switch (context$2$0.prev = context$2$0.next) {
	                            case 0:
	                                $spans = Array.from(_util.findAll.call(el, 'span'));
	                                delayTime = 0.1;
	                                len = $spans.length;
	
	                            case 3:
	                                if (!$spans.length) {
	                                    context$2$0.next = 13;
	                                    break;
	                                }
	
	                                $span = $spans.shift();
	
	                                $span.style.webkitTransition = $span.style.transition = 'all 0.4s ease-in ' + delayTime + 's';
	                                $span.style.opacity = 1;
	                                $span.style.webkitTransform = $span.style.transform = 'scale(1)';
	
	                                delayTime += 0.1;
	
	                                context$2$0.next = 11;
	                                return regeneratorRuntime.awrap(delay(100));
	
	                            case 11:
	                                context$2$0.next = 3;
	                                break;
	
	                            case 13:
	                                context$2$0.next = 15;
	                                return regeneratorRuntime.awrap(delay(len * 100 + 300));
	
	                            case 15:
	                            case 'end':
	                                return context$2$0.stop();
	                        }
	                    }, null, this);
	                };
	
	                splitText = function splitText(el) {
	                    var texts = el.innerText.split('');
	                    el.innerHTML = '<span>' + texts.join('</span><span>') + '</span>';
	                };
	
	                DIRS = [['translateY', '10%'], ['translateY', '-10%'], ['translateX', '10%'], ['translateX', '-10%']];
	                $sections = Array.from((_context6 = $slides, _util.findAll).call(_context6, 'section'));
	
	            case 7:
	                if (!$sections.length) {
	                    context$1$0.next = 24;
	                    break;
	                }
	
	                $section = $sections.shift();
	
	                (_context7 = _util.findAll.call($section, 'h2, h3'), _util.each).call(_context7, splitText);
	
	                $section.style.display = 'block';
	
	                context$1$0.next = 13;
	                return regeneratorRuntime.awrap(delay(100));
	
	            case 13:
	                context$1$0.next = 15;
	                return regeneratorRuntime.awrap(Promise.all([showText(_util.find.call($section, 'h2')), showText(_util.find.call($section, 'h3')), showImage(_util.find.call($section, 'img'))]));
	
	            case 15:
	                context$1$0.next = 17;
	                return regeneratorRuntime.awrap(delay(1000));
	
	            case 17:
	                context$1$0.next = 19;
	                return regeneratorRuntime.awrap(Promise.all([hideText(_util.find.call($section, 'h2')), hideText(_util.find.call($section, 'h3')), hideImage(_util.find.call($section, 'img'))]));
	
	            case 19:
	
	                $section.style.display = 'none';
	
	                context$1$0.next = 22;
	                return regeneratorRuntime.awrap(delay(500));
	
	            case 22:
	                context$1$0.next = 7;
	                break;
	
	            case 24:
	            case 'end':
	                return context$1$0.stop();
	        }
	    }, null, this);
	}
	
	function showSlides() {
	    $slides.style.display = 'block';
	}
	
	function hideSlides() {
	    $slides.style.display = 'none';
	}
	
	function showWedding() {
	    var _context8;
	
	    var $wedding, offsetY;
	    return regeneratorRuntime.async(function showWedding$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                $wedding = (_context8 = $cover, _util.find).call(_context8, '.wedding');
	
	                $wedding.style.display = 'block';
	                _util.center.call($wedding);
	
	                context$1$0.next = 5;
	                return regeneratorRuntime.awrap(delay(100));
	
	            case 5:
	
	                $wedding.style.webkitTransition = $wedding.style.transition = 'all 0.6s ease-in 0s';
	                $wedding.style.opacity = 1;
	                $wedding.style.webkitTransform = $wedding.style.transform = 'translateY(0)';
	
	                context$1$0.next = 10;
	                return regeneratorRuntime.awrap(delay(1600));
	
	            case 10:
	                offsetY = parseFloat($wedding.style.top) - 15 * window.dpr;
	
	                $wedding.style.webkitTransition = $wedding.style.transition = 'all 1s ease 0s';
	                $wedding.style.webkitTransform = $wedding.style.transform = 'translateY(-' + offsetY + 'px)';
	
	                context$1$0.next = 15;
	                return regeneratorRuntime.awrap(delay(1000));
	
	            case 15:
	            case 'end':
	                return context$1$0.stop();
	        }
	    }, null, this);
	}
	
	function showInvitation() {
	    var _context9;
	
	    var $invitation, $wedding, weddingRect;
	    return regeneratorRuntime.async(function showInvitation$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                $invitation = (_context9 = $cover, _util.find).call(_context9, '.invitation');
	                $wedding = (_context9 = $cover, _util.find).call(_context9, '.wedding');
	                weddingRect = $wedding.getBoundingClientRect();
	
	                $invitation.style.display = 'block';
	                $invitation.style.top = weddingRect.top + weddingRect.height + 10 * window.dpr + 'px';
	
	                context$1$0.next = 7;
	                return regeneratorRuntime.awrap(delay(100));
	
	            case 7:
	
	                $invitation.style.webkitTransition = $invitation.style.transition = 'opacity 0.6s ease-in 0s';
	                $invitation.style.opacity = 1;
	
	                context$1$0.next = 11;
	                return regeneratorRuntime.awrap(delay(600));
	
	            case 11:
	            case 'end':
	                return context$1$0.stop();
	        }
	    }, null, this);
	}
	
	(function callee$0$0() {
	    var _context10;
	
	    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                context$1$0.next = 2;
	                return regeneratorRuntime.awrap(domReady());
	
	            case 2:
	
	                $logo = (_context10 = (_context10 = (_context10 = _util.wrap.call(LOGO_HTML), _util.find).call(_context10, '#logo-wrap'), _util.appendTo).call(_context10, doc.body), _util.center).call(_context10);
	
	                context$1$0.next = 5;
	                return regeneratorRuntime.awrap(loading());
	
	            case 5:
	                context$1$0.next = 7;
	                return regeneratorRuntime.awrap(hideLogo());
	
	            case 7:
	
	                $cover = (_context10 = (_context10 = _util.wrap.call(COVER_HTML), _util.find).call(_context10, '#cover-wrap'), _util.appendTo).call(_context10, doc.body);
	
	                context$1$0.next = 10;
	                return regeneratorRuntime.awrap(lazyload($cover));
	
	            case 10:
	                context$1$0.next = 12;
	                return regeneratorRuntime.awrap(delay(100));
	
	            case 12:
	                context$1$0.next = 14;
	                return regeneratorRuntime.awrap(showCover());
	
	            case 14:
	                context$1$0.next = 16;
	                return regeneratorRuntime.awrap(delay(300));
	
	            case 16:
	                context$1$0.next = 18;
	                return regeneratorRuntime.awrap(showPaper());
	
	            case 18:
	                context$1$0.next = 20;
	                return regeneratorRuntime.awrap(delay(300));
	
	            case 20:
	                context$1$0.next = 22;
	                return regeneratorRuntime.awrap(showHeart());
	
	            case 22:
	
	                $indicator = (_context10 = (_context10 = _util.wrap.call(INDICATOR_HTML), _util.find).call(_context10, '#indicator-wrap'), _util.appendTo).call(_context10, doc.body);
	
	                context$1$0.next = 25;
	                return regeneratorRuntime.awrap(showIndicator());
	
	            case 25:
	                context$1$0.next = 27;
	                return regeneratorRuntime.awrap(flickUp());
	
	            case 27:
	                context$1$0.next = 29;
	                return regeneratorRuntime.awrap(hideIndicator());
	
	            case 29:
	                context$1$0.next = 31;
	                return regeneratorRuntime.awrap(open());
	
	            case 31:
	
	                $slides = (_context10 = (_context10 = _util.wrap.call(SLIDES_HTML), _util.find).call(_context10, '#slide-wrap'), _util.appendTo).call(_context10, doc.body);
	
	                context$1$0.next = 34;
	                return regeneratorRuntime.awrap(lazyload($slides));
	
	            case 34:
	                context$1$0.next = 36;
	                return regeneratorRuntime.awrap(showSlides());
	
	            case 36:
	                context$1$0.next = 38;
	                return regeneratorRuntime.awrap(sliding());
	
	            case 38:
	                context$1$0.next = 40;
	                return regeneratorRuntime.awrap(hideSlides());
	
	            case 40:
	                context$1$0.next = 42;
	                return regeneratorRuntime.awrap(showWedding());
	
	            case 42:
	                context$1$0.next = 44;
	                return regeneratorRuntime.awrap(delay(500));
	
	            case 44:
	                context$1$0.next = 46;
	                return regeneratorRuntime.awrap(showInvitation());
	
	            case 46:
	            case 'end':
	                return context$1$0.stop();
	        }
	    }, null, _this);
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/raw-loader/index.js!./../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../node_modules/raw-loader/index.js!./../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "html,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: #FFF;\n  font-family: 'Heiti SC', 'Microsoft YaHei', '微软雅黑', sans-serif;\n}\n#logo-wrap {\n  width: 2rem;\n  height: 2rem;\n  overflow: hidden;\n  position: absolute;\n  z-index: 999;\n}\n#logo-wrap .bg {\n  width: 100%;\n  height: 100%;\n  background-color: #eb2f35;\n  position: absolute;\n  -webkit-transform: translateY(100%);\n  transform: translateY(100%);\n}\n#logo-wrap img {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n#cover-wrap {\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  background-color: #b01417;\n}\n#cover-wrap .paper {\n  opacity: 0;\n  width: 100%;\n  height: 17.75rem;\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  z-index: 9;\n  background-color: #f7e687;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);\n}\n#cover-wrap .paper .title {\n  width: 9.296875rem;\n  height: 1.234375rem;\n  margin: 1rem auto 0;\n}\n#cover-wrap .paper .title img {\n  width: 100%;\n  height: 100%;\n  margin-left: 0.25rem;\n}\n#cover-wrap .imgs {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  z-index: 10;\n}\n#cover-wrap .imgs img {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 99;\n}\n#cover-wrap .imgs .heart,\n#cover-wrap .imgs .heart-out {\n  opacity: 0;\n}\n#cover-wrap .wedding {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  display: none;\n  -webkit-transform: translateY(30%);\n  transform: translateY(30%);\n  z-index: 99;\n}\n#cover-wrap .invitation {\n  width: 100%;\n  position: absolute;\n  box-sizing: border-box;\n  padding: 0.3125rem;\n  display: none;\n  z-index: 99;\n  opacity: 0;\n}\n#cover-wrap .invitation > * {\n  color: #4c4c4c;\n  text-align: center;\n  padding: 0.3125rem;\n  line-height: 1.5em;\n}\n#cover-wrap .invitation .time,\n#cover-wrap .invitation .name {\n  font-size: 0.625rem;\n}\n#cover-wrap .invitation .text {\n  font-size: 0.5rem;\n}\n#cover-wrap .invitation .form {\n  font-size: 0.46875rem;\n}\n#cover-wrap .invitation .form label {\n  font-weight: bolder;\n}\n#indicator-wrap {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 999;\n}\n#indicator-wrap .text {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  width: 100%;\n  padding: 0.9375rem 0;\n  font-size: 0.46875rem;\n  color: #FFFFFF;\n  background: url(assets/images/arrow.png) no-repeat center 1.5625rem;\n  background-size: 1.328125rem 0.53125rem;\n  -webkit-animation: indicator-beat 1s linear 0s infinite alternate;\n  animation: indicator-beat 1s linear 0s infinite alternate;\n}\n@-webkit-keyframes indicator-beat {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes indicator-beat {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n#slide-wrap {\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 99;\n  overflow: hidden;\n}\n#slide-wrap section {\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n#slide-wrap header {\n  margin: 0.3125rem 0.625rem;\n}\n#slide-wrap header h2,\n#slide-wrap header h3 {\n  margin: 0;\n  padding: 0.3125rem;\n  color: #eb2f35;\n  text-align: left;\n}\n#slide-wrap header h2 span,\n#slide-wrap header h3 span {\n  display: inline-block;\n  opacity: 0;\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n}\n#slide-wrap header h2 {\n  font-size: 0.46875rem;\n}\n#slide-wrap header h3 {\n  font-size: 0.5625rem;\n}\n#slide-wrap img {\n  opacity: 0;\n  width: 100%;\n}\n"

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EVENTS = undefined;
	
	var _eventemitter = __webpack_require__(7);
	
	var _eventemitter2 = _interopRequireDefault(_eventemitter);
	
	var _uuid = __webpack_require__(8);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Events hash
	 */
	var EVENTS = exports.EVENTS = {
	  LOAD: 'load',
	  LOAD_ERROR: 'load:error',
	
	  START: 'preload:start',
	  COMPLETE: 'preload:complete',
	  FLUSH: 'preload:flush'
	};
	
	/**
	 * Preloader manager instance
	 * Manages module loaders and emits events
	 * @class
	 */
	
	var Preloader = (function (_EventEmitter) {
	  _inherits(Preloader, _EventEmitter);
	
	  /**
	   * @constructs
	   */
	
	  function Preloader(opts) {
	    _classCallCheck(this, Preloader);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Preloader).call(this));
	
	    _initialiseProps.call(_this);
	
	    _this.queue = new Set();
	    _this.loaders = new Map();
	    _this.responses = new Map();
	
	    // Per load event options
	    _this.options = opts || {};
	
	    _this.isRunning = false;
	    return _this;
	  }
	
	  /**
	   * Register loader modules ( the stuff that actually does the loading)
	   */
	
	  _createClass(Preloader, [{
	    key: 'register',
	    value: function register(loader) {
	      this.loaders.set(loader.name, loader);
	    }
	
	    /**
	     * Routes load requests through the relevant loader instance
	     * @param resource <String || Object> end point to load or options hash
	     *   @param resource <String> end point
	     *   @param silent <Boolean> if true then no events are emitted for this resource
	     *   @param wait <Boolean> wont automatically call run, although other loads might
	     *   @param loader <String> named loader to use to load the resource
	     *   @param id <String> custom id to use for load event
	     */
	
	  }, {
	    key: 'flush',
	
	    /**
	     * Flushes the queue and any state, useful for implementing load stages
	     * i.e. call load a bunch of times for stage 1, hit up flush onComplete
	     * and call load a bunch more times for the next loading stage.
	     * Flush will not cancel or clear any initiated load events, just clears
	     * the current queue.
	     */
	    value: function flush() {
	      this.queue.clear();
	      this.responses.clear();
	      this.emit(EVENTS.FLUSH);
	    }
	
	    /**
	     * Processes the load queue.
	     */
	
	  }, {
	    key: 'getLoaderName',
	
	    /**
	     * Tries to match filename extension with the loader required to load it
	     */
	    value: function getLoaderName(resource) {
	      var it = this.loaders.values();
	      var loader = null;
	
	      while (loader = it.next().value) {
	        if (loader.match.test(resource)) {
	          return loader.name;
	        }
	      }
	
	      return null;
	    }
	
	    /**
	     * Collects up load events
	     */
	
	    /**
	     * Fired when all load events are finished, regardless of whether they failed
	     */
	
	  }]);
	
	  return Preloader;
	})(_eventemitter2.default);
	
	Preloader.EVENTS = EVENTS;
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.load = function (resource) {
	    if (!resource) {
	      throw new Error('load requires an end point');
	    }
	
	    if (!_this2.loaders.size) {
	      throw new Error('no loaders associated with preload.io');
	    }
	
	    var opts = {
	      resource: resource,
	      wait: false,
	      loader: null,
	      id: null
	    };
	
	    opts.options = _this2.options;
	
	    if ((typeof resource === 'undefined' ? 'undefined' : _typeof(resource)) === 'object') {
	      if (!resource.resource) {
	        throw new Error('load requires an end point');
	      }
	
	      var eventOptions = Object.assign({}, opts.options, resource.options || {});
	      opts = Object.assign(opts, resource, {
	        options: eventOptions
	      });
	    }
	
	    var id = opts.id || _uuid2.default.v1();
	    var loader = _this2.loaders.get(opts.loader || _this2.getLoaderName(opts.resource));
	
	    if (!loader) {
	      throw new Error('No loader associated with resource ' + opts.resource);
	    }
	
	    var loadEvent = Object.assign(opts, {
	      id: id,
	      loader: loader
	    });
	
	    // Adds the loader function to the queue
	    _this2.queue.add(loadEvent);
	
	    if (!opts.wait) {
	      _this2.run();
	    }
	
	    return id;
	  };
	
	  this.run = function () {
	    if (_this2.isRunning) {
	      return;
	    }
	
	    _this2.isRunning = true;
	
	    // Set up load event listeners
	    _this2.on(EVENTS.LOAD, _this2.onLoad);
	    _this2.on(EVENTS.LOAD_ERROR, _this2.onLoad);
	
	    setTimeout(function () {
	      _this2.emit(EVENTS.START);
	      _this2.queue.forEach(function (event) {
	        return event.loader.load(_this2, event);
	      });
	    }, 0);
	
	    /**
	     * Return a promise to allow thenable or async/await
	     */
	    return new Promise(function (resolve, reject) {
	      // Resolved with all the responses
	      _this2.once(EVENTS.COMPLETE, function (res) {
	        // @TODO check for response errors and reject
	        resolve(res);
	      });
	    });
	  };
	
	  this.onLoad = function (event) {
	    _this2.responses.set(event.id, event);
	
	    if (_this2.responses.size >= _this2.queue.size) {
	      // Delay to make sure all load events have been collected by listeners
	      setTimeout(_this2.onComplete, 0);
	    }
	  };
	
	  this.onComplete = function (res) {
	    _this2.off(EVENTS.LOAD, _this2.onLoad);
	    _this2.off(EVENTS.LOAD_ERROR, _this2.onLoad);
	    _this2.emit(EVENTS.COMPLETE, _this2.responses);
	
	    _this2.isRunning = false;
	  };
	};
	
	exports.default = Preloader;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php
	
	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(9);
	
	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}
	
	// **`parse()` - Parse a UUID into it's component bytes**
	function parse(s, buf, offset) {
	  var i = (buf && offset) || 0, ii = 0;
	
	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	    if (ii < 16) { // Don't overflow!
	      buf[i + ii++] = _hexToByte[oct];
	    }
	  });
	
	  // Zero out remaining bytes if string was short
	  while (ii < 16) {
	    buf[i + ii++] = 0;
	  }
	
	  return buf;
	}
	
	// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	function unparse(buf, offset) {
	  var i = offset || 0, bth = _byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}
	
	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html
	
	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();
	
	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];
	
	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;
	
	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;
	
	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];
	
	  options = options || {};
	
	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
	
	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
	
	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
	
	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;
	
	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }
	
	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }
	
	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }
	
	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;
	
	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;
	
	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;
	
	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;
	
	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;
	
	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;
	
	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;
	
	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; n++) {
	    b[i + n] = node[n];
	  }
	
	  return buf ? buf : unparse(b);
	}
	
	// **`v4()` - Generate random UUID**
	
	// See https://github.com/broofa/node-uuid for API details
	function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  var i = buf && offset || 0;
	
	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};
	
	  var rnds = options.random || (options.rng || _rng)();
	
	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;
	
	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ii++) {
	      buf[i + ii] = rnds[ii];
	    }
	  }
	
	  return buf || unparse(rnds);
	}
	
	// Export public API
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;
	uuid.parse = parse;
	uuid.unparse = unparse;
	
	module.exports = uuid;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;
	
	if (global.crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  var _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
	}
	
	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  _rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }
	
	    return _rnds;
	  };
	}
	
	module.exports = rng;
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _preload = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IOError = (function (_Error) {
	  _inherits(IOError, _Error);
	
	  function IOError(opts) {
	    _classCallCheck(this, IOError);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IOError).call(this, opts.message));
	
	    _this.name = 'IOError';
	    _this.stack = new Error().stack;
	
	    Object.keys(opts).forEach(function (key) {
	      _this[key] = opts[key];
	    });
	    return _this;
	  }
	
	  return IOError;
	})(Error);
	
	var ImageLoader = (function () {
	  function ImageLoader(opts) {
	    _classCallCheck(this, ImageLoader);
	
	    this.opts = Object.assign({
	      blob: false
	    }, opts);
	    this.name = 'imageLoader';
	    this.match = /jpg$|jpeg$|png$/;
	  }
	
	  _createClass(ImageLoader, [{
	    key: 'load',
	    value: function load(ctx, opts) {
	      var res, blob;
	      return regeneratorRuntime.async(function load$(_context) {
	        while (1) switch (_context.prev = _context.next) {
	          case 0:
	            // @TODO optionally use old school tag loading
	            res = null;
	            blob = null;
	            _context.prev = 2;
	            _context.next = 5;
	            return regeneratorRuntime.awrap(fetch(opts.resource, Object.assign({}, this.opts, opts.options)).then(function (response) {
	              if (response.ok || response.type === 'opaque') {
	                return response;
	              }
	
	              throw new IOError({
	                message: response.statusText,
	                status: response.status
	              });
	            }));
	
	          case 5:
	            res = _context.sent;
	
	            if (!this.opts.blob) {
	              _context.next = 10;
	              break;
	            }
	
	            _context.next = 9;
	            return regeneratorRuntime.awrap(res.blob());
	
	          case 9:
	            blob = _context.sent;
	
	          case 10:
	            _context.next = 16;
	            break;
	
	          case 12:
	            _context.prev = 12;
	            _context.t0 = _context['catch'](2);
	
	            ctx.emit(_preload.EVENTS.LOAD_ERROR, {
	              id: opts.id,
	              status: _context.t0.status,
	              res: _context.t0
	            });
	            return _context.abrupt('return');
	
	          case 16:
	
	            ctx.emit(_preload.EVENTS.LOAD, {
	              id: opts.id,
	              status: res.status,
	              res: blob || res
	            });
	
	          case 17:
	          case 'end':
	            return _context.stop();
	        }
	      }, null, this, [[2, 12]]);
	    }
	  }]);
	
	  return ImageLoader;
	})();
	
	exports.default = ImageLoader;
	
	module.exports = ImageLoader;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = window.lib;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.wrap = wrap;
	exports.find = find;
	exports.findAll = findAll;
	exports.appendTo = appendTo;
	exports.replace = replace;
	exports.center = center;
	var win = window;
	var doc = win.document;
	
	function wrap() {
	    var html = this;
	    var temp = document.createElement('div');
	    temp.innerHTML = html;
	    return temp;
	}
	
	function find(selector) {
	    var el = this;
	    return el.querySelector(selector);
	}
	
	function findAll(selector) {
	    var el = this;
	    return el.querySelectorAll(selector);
	}
	
	function appendTo(target) {
	    var el = this;
	    target.appendChild(el);
	    return this;
	}
	
	function replace(target) {
	    var el = this;
	    var parent = target.parentNode;
	    parent.insertBefore(el, target);
	    parent.removeChild(target);
	    return this;
	}
	
	function center() {
	    var el = this;
	    var innerWidth = window.innerWidth;
	    var innerHeight = window.innerHeight;
	
	    var _el$getBoundingClientRect = el.getBoundingClientRect();
	
	    var width = _el$getBoundingClientRect.width;
	    var height = _el$getBoundingClientRect.height;
	
	    el.style.left = (innerWidth - width) / 2 + 'px';
	    el.style.top = (innerHeight - height) / 2 + 'px';
	
	    return this;
	}
	
	var each = [].forEach;
	
	exports.each = each;
	var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (fn) {
	    return setTimeout(fn, 16);
	};
	
	exports.requestAnimationFrame = requestAnimationFrame;
	var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || function (id) {
	    clearTimeout(id);
	};
	exports.cancelAnimationFrame = cancelAnimationFrame;

/***/ }
/******/ ]);//# sourceMappingURL=../temp/main.js.map