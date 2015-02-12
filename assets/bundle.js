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
/******/ 	__webpack_require__.p = "http://localhost:8090/assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports = {
	    entry: './src/index.jsx',
	    output: {
	        path         : __dirname + "/dist",
	        libraryTarget: 'umd',
	        library      : 'DatePicker',
	        filename     : __webpack_require__(1) + '.nomoment.js'
	    },
	    module: {
	        loaders: __webpack_require__(2)
	    },
	    externals: {
	        'react' : 'React',
	        'moment': 'moment'
	    },
	    resolve: {
	        // Allow to omit extensions when requiring these files
	        extensions: ['', '.js', '.jsx']
	    }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports ='react-date-picker'

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
	    {
	        test: /\.jsx$/,
	        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
	    },
	    {
	        test: /\.js$/,
	        loader: 'jsx-loader?harmony'
	    },
	    {
	        test: /\.json$/,
	        loader: 'json-loader'
	    },
	    {
	        test: /\.styl$/,
	        loader: 'style-loader!css-loader!stylus-loader'
	    },
	    {
	        test: /\.css$/,
	        loader: 'style-loader!css-loader'
	    },
	    {
	        test: /\.png$/,
	        loader: 'url-loader?mimetype=image/png'
	    }
	]

/***/ }
/******/ ])