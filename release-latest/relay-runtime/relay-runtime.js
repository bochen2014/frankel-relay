/**
 * Relay v1.0.0-rc.3
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fbjs/lib/invariant"), require("babel-runtime/helpers/classCallCheck"), require("fbjs/lib/forEachObject"), require("babel-runtime/core-js/json/stringify"), require("fbjs/lib/warning"), require("babel-runtime/helpers/extends"), require("babel-runtime/core-js/object/keys"), require("babel-runtime/core-js/set"), require("fbjs/lib/areEqual"), require("fbjs/lib/emptyFunction"), require("fbjs/lib/removeFromArray"), require("babel-runtime/core-js/object/assign"), require("babel-runtime/core-js/object/freeze"), require("babel-runtime/core-js/map"), require("babel-runtime/core-js/object/get-own-property-names"), require("babel-runtime/core-js/object/is-frozen"), require("babel-runtime/helpers/defineProperty"), require("babel-runtime/helpers/toConsumableArray"), require("fbjs/lib/Promise"), require("fbjs/lib/resolveImmediate"), require("fbjs/lib/sprintf"));
	else if(typeof define === 'function' && define.amd)
		define(["fbjs/lib/invariant", "babel-runtime/helpers/classCallCheck", "fbjs/lib/forEachObject", "babel-runtime/core-js/json/stringify", "fbjs/lib/warning", "babel-runtime/helpers/extends", "babel-runtime/core-js/object/keys", "babel-runtime/core-js/set", "fbjs/lib/areEqual", "fbjs/lib/emptyFunction", "fbjs/lib/removeFromArray", "babel-runtime/core-js/object/assign", "babel-runtime/core-js/object/freeze", "babel-runtime/core-js/map", "babel-runtime/core-js/object/get-own-property-names", "babel-runtime/core-js/object/is-frozen", "babel-runtime/helpers/defineProperty", "babel-runtime/helpers/toConsumableArray", "fbjs/lib/Promise", "fbjs/lib/resolveImmediate", "fbjs/lib/sprintf"], factory);
	else if(typeof exports === 'object')
		exports["RelayRuntime"] = factory(require("fbjs/lib/invariant"), require("babel-runtime/helpers/classCallCheck"), require("fbjs/lib/forEachObject"), require("babel-runtime/core-js/json/stringify"), require("fbjs/lib/warning"), require("babel-runtime/helpers/extends"), require("babel-runtime/core-js/object/keys"), require("babel-runtime/core-js/set"), require("fbjs/lib/areEqual"), require("fbjs/lib/emptyFunction"), require("fbjs/lib/removeFromArray"), require("babel-runtime/core-js/object/assign"), require("babel-runtime/core-js/object/freeze"), require("babel-runtime/core-js/map"), require("babel-runtime/core-js/object/get-own-property-names"), require("babel-runtime/core-js/object/is-frozen"), require("babel-runtime/helpers/defineProperty"), require("babel-runtime/helpers/toConsumableArray"), require("fbjs/lib/Promise"), require("fbjs/lib/resolveImmediate"), require("fbjs/lib/sprintf"));
	else
		root["RelayRuntime"] = factory(root["fbjs/lib/invariant"], root["babel-runtime/helpers/classCallCheck"], root["fbjs/lib/forEachObject"], root["babel-runtime/core-js/json/stringify"], root["fbjs/lib/warning"], root["babel-runtime/helpers/extends"], root["babel-runtime/core-js/object/keys"], root["babel-runtime/core-js/set"], root["fbjs/lib/areEqual"], root["fbjs/lib/emptyFunction"], root["fbjs/lib/removeFromArray"], root["babel-runtime/core-js/object/assign"], root["babel-runtime/core-js/object/freeze"], root["babel-runtime/core-js/map"], root["babel-runtime/core-js/object/get-own-property-names"], root["babel-runtime/core-js/object/is-frozen"], root["babel-runtime/helpers/defineProperty"], root["babel-runtime/helpers/toConsumableArray"], root["fbjs/lib/Promise"], root["fbjs/lib/resolveImmediate"], root["fbjs/lib/sprintf"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_67__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRuntime
	 * 
	 */

	'use strict';

	/**
	 * The public interface to Relay Runtime.
	 */
	module.exports = {
	  // Core API
	  Environment: __webpack_require__(43),
	  Network: __webpack_require__(46),
	  RecordSource: __webpack_require__(12),
	  Store: __webpack_require__(42),

	  areEqualSelectors: __webpack_require__(8).areEqualSelectors,
	  createFragmentSpecResolver: __webpack_require__(8).createFragmentSpecResolver,
	  createOperationSelector: __webpack_require__(8).createOperationSelector,
	  getDataIDsFromObject: __webpack_require__(8).getDataIDsFromObject,
	  getFragment: __webpack_require__(16).getFragment,
	  getOperation: __webpack_require__(16).getOperation,
	  getSelector: __webpack_require__(8).getSelector,
	  getSelectorList: __webpack_require__(8).getSelectorList,
	  getSelectorsFromObject: __webpack_require__(8).getSelectorsFromObject,
	  getVariablesFromObject: __webpack_require__(8).getVariablesFromObject,
	  graphql: __webpack_require__(16).graphql,

	  // Extensions
	  ConnectionHandler: __webpack_require__(29),
	  ViewerHandler: __webpack_require__(33),

	  // Helpers (can be implemented via the above API)
	  commitLocalUpdate: __webpack_require__(52),
	  commitMutation: __webpack_require__(53),
	  fetchQuery: __webpack_require__(54),
	  isRelayModernEnvironment: __webpack_require__(56),
	  requestSubscription: __webpack_require__(59)
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayModernRecord
	 * 
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _assign2 = _interopRequireDefault(__webpack_require__(36));

	var _keys2 = _interopRequireDefault(__webpack_require__(15));

	var _stringify2 = _interopRequireDefault(__webpack_require__(10));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(4),
	    ID_KEY = _require.ID_KEY,
	    REF_KEY = _require.REF_KEY,
	    REFS_KEY = _require.REFS_KEY,
	    TYPENAME_KEY = _require.TYPENAME_KEY,
	    UNPUBLISH_FIELD_SENTINEL = _require.UNPUBLISH_FIELD_SENTINEL;

	/**
	 * @public
	 *
	 * Low-level record manipulation methods.
	 *
	 * A note about perf: we use long-hand property access rather than computed
	 * properties in this file for speed ie.
	 *
	 *    const object = {};
	 *    object[KEY] = value;
	 *    record[storageKey] = object;
	 *
	 * instead of:
	 *
	 *    record[storageKey] = {
	 *      [KEY]: value,
	 *    };
	 *
	 * The latter gets transformed by Babel into something like:
	 *
	 *    function _defineProperty(obj, key, value) {
	 *      if (key in obj) {
	 *        Object.defineProperty(obj, key, {
	 *          value: value,
	 *          enumerable: true,
	 *          configurable: true,
	 *          writable: true,
	 *        });
	 *      } else {
	 *        obj[key] = value;
	 *      }
	 *      return obj;
	 *    }
	 *
	 *    record[storageKey] = _defineProperty({}, KEY, value);
	 *
	 * A quick benchmark shows that computed property access is an order of
	 * magnitude slower (times in seconds for 100,000 iterations):
	 *
	 *               best     avg     sd
	 *    computed 0.02175 0.02292 0.00113
	 *      manual 0.00110 0.00123 0.00008
	 */

	/**
	 * @public
	 *
	 * Clone a record.
	 */
	function clone(record) {
	  return (0, _extends3['default'])({}, record);
	}

	/**
	 * @public
	 *
	 * Copies all fields from `source` to `sink`, excluding `__id` and `__typename`.
	 *
	 * NOTE: This function does not treat `id` specially. To preserve the id,
	 * manually reset it after calling this function. Also note that values are
	 * copied by reference and not value; callers should ensure that values are
	 * copied on write.
	 */
	function copyFields(source, sink) {
	  __webpack_require__(6)(source, function (value, key) {
	    if (key !== ID_KEY && key !== TYPENAME_KEY) {
	      sink[key] = value;
	    }
	  });
	}

	/**
	 * @public
	 *
	 * Create a new record.
	 */
	function create(dataID, typeName) {
	  // See perf note above for why we aren't using computed property access.
	  var record = {};
	  record[ID_KEY] = dataID;
	  record[TYPENAME_KEY] = typeName;
	  return record;
	}

	/**
	 * @public
	 *
	 * Get the record's `id` if available or the client-generated identifier.
	 */
	function getDataID(record) {
	  return record[ID_KEY];
	}

	/**
	 * @public
	 *
	 * Get the concrete type of the record.
	 */
	function getType(record) {
	  return record[TYPENAME_KEY];
	}

	/**
	 * @public
	 *
	 * Get a scalar (non-link) field value.
	 */
	function getValue(record, storageKey) {
	  var value = record[storageKey];
	  if (value && typeof value === 'object') {
	    __webpack_require__(1)(!value.hasOwnProperty(REF_KEY) && !value.hasOwnProperty(REFS_KEY), 'RelayModernRecord.getValue(): Expected a scalar (non-link) value for `%s.%s` ' + 'but found %s.', record[ID_KEY], storageKey, value.hasOwnProperty(REF_KEY) ? 'a linked record' : 'plural linked records');
	  }
	  return value;
	}

	/**
	 * @public
	 *
	 * Get the value of a field as a reference to another record. Throws if the
	 * field has a different type.
	 */
	function getLinkedRecordID(record, storageKey) {
	  var link = record[storageKey];
	  if (link == null) {
	    return link;
	  }
	  __webpack_require__(1)(typeof link === 'object' && link && typeof link[REF_KEY] === 'string', 'RelayModernRecord.getLinkedRecordID(): Expected `%s.%s` to be a linked ID, ' + 'was `%s`.', record[ID_KEY], storageKey, link);
	  return link[REF_KEY];
	}

	/**
	 * @public
	 *
	 * Get the value of a field as a list of references to other records. Throws if
	 * the field has a different type.
	 */
	function getLinkedRecordIDs(record, storageKey) {
	  var links = record[storageKey];
	  if (links == null) {
	    return links;
	  }
	  __webpack_require__(1)(typeof links === 'object' && Array.isArray(links[REFS_KEY]), 'RelayModernRecord.getLinkedRecordIDs(): Expected `%s.%s` to contain an array ' + 'of linked IDs, got `%s`.', record[ID_KEY], storageKey, (0, _stringify2['default'])(links));
	  // assume items of the array are ids
	  return links[REFS_KEY];
	}

	/**
	 * @public
	 *
	 * Compares the fields of a previous and new record, returning either the
	 * previous record if all fields are equal or a new record (with merged fields)
	 * if any fields have changed.
	 */
	function update(prevRecord, nextRecord) {
	  var updated = void 0;
	  var keys = (0, _keys2['default'])(nextRecord);
	  for (var ii = 0; ii < keys.length; ii++) {
	    var key = keys[ii];
	    if (updated || !__webpack_require__(24)(prevRecord[key], nextRecord[key])) {
	      updated = updated || (0, _extends3['default'])({}, prevRecord);
	      if (nextRecord[key] !== UNPUBLISH_FIELD_SENTINEL) {
	        updated[key] = nextRecord[key];
	      } else {
	        delete updated[key];
	      }
	    }
	  }
	  return updated || prevRecord;
	}

	/**
	 * @public
	 *
	 * Returns a new record with the contents of the given records. Fields in the
	 * second record will overwrite identical fields in the first record.
	 */
	function merge(record1, record2) {
	  return (0, _assign2['default'])({}, record1, record2);
	}

	/**
	 * @public
	 *
	 * Prevent modifications to the record. Attempts to call `set*` functions on a
	 * frozen record will fatal at runtime.
	 */
	function freeze(record) {
	  __webpack_require__(20)(record);
	}

	/**
	 * @public
	 *
	 * Set the value of a storageKey to a scalar.
	 */
	function setValue(record, storageKey, value) {
	  record[storageKey] = value;
	}

	/**
	 * @public
	 *
	 * Set the value of a field to a reference to another record.
	 */
	function setLinkedRecordID(record, storageKey, linkedID) {
	  // See perf note above for why we aren't using computed property access.
	  var link = {};
	  link[REF_KEY] = linkedID;
	  record[storageKey] = link;
	}

	/**
	 * @public
	 *
	 * Set the value of a field to a list of references other records.
	 */
	function setLinkedRecordIDs(record, storageKey, linkedIDs) {
	  // See perf note above for why we aren't using computed property access.
	  var links = {};
	  links[REFS_KEY] = linkedIDs;
	  record[storageKey] = links;
	}

	module.exports = {
	  clone: clone,
	  copyFields: copyFields,
	  create: create,
	  freeze: freeze,
	  getDataID: getDataID,
	  getLinkedRecordID: getLinkedRecordID,
	  getLinkedRecordIDs: getLinkedRecordIDs,
	  getType: getType,
	  getValue: getValue,
	  merge: merge,
	  setValue: setValue,
	  setLinkedRecordID: setLinkedRecordID,
	  setLinkedRecordIDs: setLinkedRecordIDs,
	  update: update
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayConcreteNode
	 * 
	 */

	'use strict';

	/**
	 * Represents a single ConcreteRoot along with metadata for processing it at
	 * runtime. The persisted `id` (or `text`) can be used to fetch the query,
	 * the `fragment` can be used to read the root data (masking data from child
	 * fragments), and the `query` can be used to normalize server responses.
	 *
	 * NOTE: The use of "batch" in the name is intentional, as this wrapper around
	 * the ConcreteRoot will provide a place to store multiple concrete nodes that
	 * are part of the same batch, e.g. in the case of deferred nodes or
	 * for streaming connections that are represented as distinct concrete roots but
	 * are still conceptually tied to one source query.
	 */
	var RelayConcreteNode = {
	  CONDITION: 'Condition',
	  FRAGMENT: 'Fragment',
	  FRAGMENT_SPREAD: 'FragmentSpread',
	  INLINE_FRAGMENT: 'InlineFragment',
	  LINKED_FIELD: 'LinkedField',
	  LINKED_HANDLE: 'LinkedHandle',
	  LITERAL: 'Literal',
	  LOCAL_ARGUMENT: 'LocalArgument',
	  ROOT: 'Root',
	  ROOT_ARGUMENT: 'RootArgument',
	  SCALAR_FIELD: 'ScalarField',
	  SCALAR_HANDLE: 'ScalarHandle',
	  VARIABLE: 'Variable'
	};

	module.exports = RelayConcreteNode;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayStoreUtils
	 * 
	 */

	'use strict';

	var _freeze2 = _interopRequireDefault(__webpack_require__(37));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var VARIABLE = __webpack_require__(3).VARIABLE;

	/**
	 * Returns the values of field/fragment arguments as an object keyed by argument
	 * names.
	 */


	function getArgumentValues(args, variables) {
	  var values = {};
	  args.forEach(function (arg) {
	    if (arg.kind === VARIABLE) {
	      values[arg.name] = getVariableValue(arg.variableName, variables);
	    } else {
	      values[arg.name] = arg.value;
	    }
	  });
	  return values;
	}

	function getHandleFilterValues(args, filters, variables) {
	  var filterArgs = args.filter(function (arg) {
	    return filters.indexOf(arg.name) > -1;
	  });
	  return getArgumentValues(filterArgs, variables);
	}

	/**
	 * Given a field and variable values, returns a key that can be used to
	 * uniquely identify the combination of the field name and argument values.
	 *
	 * Note: the word "storage" here refers to the fact this key is primarily used
	 * when writing the results of a key in a normalized graph or "store". This
	 * name was used in previous implementations of Relay internals and is also
	 * used here for consistency.
	 */
	function getStorageKey(field, variables) {
	  if (field.storageKey) {
	    return field.storageKey;
	  }
	  var args = field.args,
	      name = field.name;

	  if (!args || !args.length) {
	    return name;
	  }
	  var values = [];
	  args.forEach(function (arg) {
	    var value = void 0;
	    if (arg.kind === VARIABLE) {
	      value = getVariableValue(arg.variableName, variables);
	    } else {
	      value = arg.value;
	    }
	    if (value != null) {
	      values.push('"' + arg.name + '":' + __webpack_require__(35)(value));
	    }
	  });
	  if (values.length) {
	    return field.name + ('{' + values.join(',') + '}');
	  } else {
	    return field.name;
	  }
	}

	function getVariableValue(name, variables) {
	  __webpack_require__(1)(variables.hasOwnProperty(name), 'getVariableValue(): Undefined variable `%s`.', name);
	  return variables[name];
	}

	/**
	 * Constants shared by all implementations of RecordSource/MutableRecordSource/etc.
	 */
	var RelayStoreUtils = {
	  FRAGMENTS_KEY: '__fragments',
	  ID_KEY: '__id',
	  REF_KEY: '__ref',
	  REFS_KEY: '__refs',
	  ROOT_ID: 'client:root',
	  ROOT_TYPE: '__Root',
	  TYPENAME_KEY: '__typename',
	  UNPUBLISH_RECORD_SENTINEL: (0, _freeze2['default'])({ __UNPUBLISH_RECORD_SENTINEL: true }),
	  UNPUBLISH_FIELD_SENTINEL: (0, _freeze2['default'])({ __UNPUBLISH_FIELD_SENTINEL: true }),

	  getArgumentValues: getArgumentValues,
	  getStorageKey: getStorageKey,
	  getHandleFilterValues: getHandleFilterValues
	};

	module.exports = RelayStoreUtils;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule formatStorageKey
	 * 
	 */

	'use strict';

	/**
	 * Given a `fieldName` (eg. "foo") and an object representing arguments and
	 * values (eg. `{first: 10, orberBy: "name"}`) returns a unique storage key
	 * (ie. `foo{"first":10,"orderBy":"name"}`).
	 */
	function formatStorageKey(fieldName, argsWithValues) {
	  if (!argsWithValues) {
	    return fieldName;
	  }
	  var filtered = null;
	  __webpack_require__(6)(argsWithValues, function (value, argName) {
	    if (value != null) {
	      if (!filtered) {
	        filtered = {};
	      }
	      filtered[argName] = value;
	    }
	  });
	  return fieldName + (filtered ? __webpack_require__(35)(filtered) : '');
	}

	module.exports = formatStorageKey;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayCore
	 * 
	 */

	'use strict';

	var _require = __webpack_require__(16),
	    getFragment = _require.getFragment,
	    getOperation = _require.getOperation;

	var _require2 = __webpack_require__(45),
	    createOperationSelector = _require2.createOperationSelector;

	var _require3 = __webpack_require__(30),
	    areEqualSelectors = _require3.areEqualSelectors,
	    getDataIDsFromObject = _require3.getDataIDsFromObject,
	    getSelector = _require3.getSelector,
	    getSelectorList = _require3.getSelectorList,
	    getSelectorsFromObject = _require3.getSelectorsFromObject,
	    getVariablesFromObject = _require3.getVariablesFromObject;

	function createFragmentSpecResolver(context, fragments, props, callback) {
	  return new (__webpack_require__(44))(context, fragments, props, callback);
	}

	module.exports = {
	  areEqualSelectors: areEqualSelectors,
	  createFragmentSpecResolver: createFragmentSpecResolver,
	  createOperationSelector: createOperationSelector,
	  getDataIDsFromObject: getDataIDsFromObject,
	  getFragment: getFragment,
	  getOperation: getOperation,
	  getSelector: getSelector,
	  getSelectorList: getSelectorList,
	  getSelectorsFromObject: getSelectorsFromObject,
	  getVariablesFromObject: getVariablesFromObject
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule generateRelayClientID
	 * 
	 */

	'use strict';

	var PREFIX = 'client:';

	function generateRelayClientID(id, storageKey, index) {
	  var key = id + ':' + storageKey;
	  if (index != null) {
	    key += ':' + index;
	  }
	  if (!key.startsWith(PREFIX)) {
	    key = PREFIX + key;
	  }
	  return key;
	}

	module.exports = generateRelayClientID;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayInMemoryRecordSource
	 * 
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	var _keys2 = _interopRequireDefault(__webpack_require__(15));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var EXISTENT = __webpack_require__(14).EXISTENT,
	    NONEXISTENT = __webpack_require__(14).NONEXISTENT,
	    UNKNOWN = __webpack_require__(14).UNKNOWN;

	/**
	 * An implementation of the `MutableRecordSource` interface (defined in
	 * `RelayStoreTypes`) that holds all records in memory.
	 */


	var RelayInMemoryRecordSource = function () {
	  function RelayInMemoryRecordSource(records) {
	    (0, _classCallCheck3['default'])(this, RelayInMemoryRecordSource);

	    this._records = records || {};
	  }

	  RelayInMemoryRecordSource.prototype.clear = function clear() {
	    this._records = {};
	  };

	  RelayInMemoryRecordSource.prototype['delete'] = function _delete(dataID) {
	    this._records[dataID] = null;
	  };

	  RelayInMemoryRecordSource.prototype.get = function get(dataID) {
	    return this._records[dataID];
	  };

	  RelayInMemoryRecordSource.prototype.getRecordIDs = function getRecordIDs() {
	    return (0, _keys2['default'])(this._records);
	  };

	  RelayInMemoryRecordSource.prototype.getStatus = function getStatus(dataID) {
	    if (!this._records.hasOwnProperty(dataID)) {
	      return UNKNOWN;
	    }
	    return this._records[dataID] == null ? NONEXISTENT : EXISTENT;
	  };

	  RelayInMemoryRecordSource.prototype.has = function has(dataID) {
	    return this._records.hasOwnProperty(dataID);
	  };

	  RelayInMemoryRecordSource.prototype.load = function load(dataID, callback) {
	    callback(null, this.get(dataID));
	  };

	  RelayInMemoryRecordSource.prototype.remove = function remove(dataID) {
	    delete this._records[dataID];
	  };

	  RelayInMemoryRecordSource.prototype.set = function set(dataID, record) {
	    this._records[dataID] = record;
	  };

	  RelayInMemoryRecordSource.prototype.size = function size() {
	    return (0, _keys2['default'])(this._records).length;
	  };

	  RelayInMemoryRecordSource.prototype.toJSON = function toJSON() {
	    return this._records;
	  };

	  return RelayInMemoryRecordSource;
	}();

	module.exports = RelayInMemoryRecordSource;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRecordState
	 * 
	 */

	'use strict';

	var RelayRecordState = {
	  /**
	   * Record exists (either fetched from the server or produced by a local,
	   * optimistic update).
	   */
	  EXISTENT: 'EXISTENT',

	  /**
	   * Record is known not to exist (either as the result of a mutation, or
	   * because the server returned `null` when queried for the record).
	   */
	  NONEXISTENT: 'NONEXISTENT',

	  /**
	   * Record State is unknown because it has not yet been fetched from the
	   * server.
	   */
	  UNKNOWN: 'UNKNOWN'
	};

	module.exports = RelayRecordState;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayModernGraphQLTag
	 * 
	 */

	'use strict';

	var _stringify2 = _interopRequireDefault(__webpack_require__(10));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Runtime function to correspond to the `graphql` tagged template function.
	 * All calls to this function should be transformed by the plugin.
	 */


	// The type of a graphql`...` tagged template expression.
	function graphql() {
	  __webpack_require__(1)(false, 'graphql: Unexpected invocation at runtime. Either the Babel transform ' + 'was not set up, or it failed to identify this call site. Make sure it ' + 'is being used verbatim as `graphql`.');
	}

	/**
	 * Variant of the `graphql` tag that enables experimental features.
	 */
	graphql.experimental = function () {
	  __webpack_require__(1)(false, 'graphql.experimental: Unexpected invocation at runtime. Either the ' + 'Babel transform was not set up, or it failed to identify this call ' + 'site. Make sure it is being used verbatim as `graphql`.');
	};

	function getNode(taggedNode) {
	  var fn = typeof taggedNode === 'function' ? taggedNode : taggedNode.modern;
	  // Support for classic raw nodes (used in test mock)
	  if (typeof fn !== 'function') {
	    return taggedNode;
	  }
	  return fn();
	}

	function getFragment(taggedNode) {
	  var fragment = getNode(taggedNode);
	  __webpack_require__(1)(typeof fragment === 'object' && fragment !== null && fragment.kind === 'Fragment', 'RelayModernGraphQLTag: Expected a fragment, got `%s`.', (0, _stringify2['default'])(fragment));
	  return fragment;
	}

	function getOperation(taggedNode) {
	  var operation = getNode(taggedNode);
	  __webpack_require__(1)(typeof operation === 'object' && operation !== null && operation.kind === 'Batch', 'RelayModernGraphQLTag: Expected an operation, got `%s`.', (0, _stringify2['default'])(operation));
	  return operation;
	}

	module.exports = {
	  getFragment: getFragment,
	  getOperation: getOperation,
	  graphql: graphql
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRecordSourceMutator
	 * 
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(14),
	    EXISTENT = _require.EXISTENT;

	var _require2 = __webpack_require__(4),
	    UNPUBLISH_FIELD_SENTINEL = _require2.UNPUBLISH_FIELD_SENTINEL,
	    UNPUBLISH_RECORD_SENTINEL = _require2.UNPUBLISH_RECORD_SENTINEL;

	/**
	 * @internal
	 *
	 * Wrapper API that is an amalgam of the `RelayModernRecord` API and
	 * `MutableRecordSource` interface, implementing copy-on-write semantics for
	 * records in a record source. If a `backup` is supplied, the mutator will
	 * ensure that the backup contains sufficient information to revert all
	 * modifications by publishing the backup.
	 *
	 * Modifications are applied to fresh copies of records with optional backups
	 * created:
	 * - Records in `base` are never modified.
	 * - Modifications cause a fresh version of a record to be created in `sink`.
	 *   These sink records contain only modified fields.
	 * - If a `backup` is supplied, any modifications to a record will cause the
	 *   sink version of the record to be added to the backup.
	 * - Creation of a record causes a sentinel object to be added to the backup
	 *   so that the new record can be removed from the store by publishing the
	 *   backup.
	 */
	var RelayRecordSourceMutator = function () {
	  function RelayRecordSourceMutator(base, sink, backup) {
	    (0, _classCallCheck3['default'])(this, RelayRecordSourceMutator);

	    this._backup = backup;
	    this._base = base;
	    this._sink = sink;
	    this._sources = [sink, base];
	  }

	  RelayRecordSourceMutator.prototype._createBackupRecord = function _createBackupRecord(dataID) {
	    var backup = this._backup;
	    if (backup && !backup.has(dataID)) {
	      var baseRecord = this._base.get(dataID);
	      if (baseRecord != null) {
	        backup.set(dataID, baseRecord);
	      } else if (baseRecord === null) {
	        backup['delete'](dataID);
	      }
	    }
	  };

	  RelayRecordSourceMutator.prototype._setSentinelFieldsInBackupRecord = function _setSentinelFieldsInBackupRecord(dataID, record) {
	    var backup = this._backup;
	    if (backup) {
	      var backupRecord = backup.get(dataID);
	      if (backupRecord && backupRecord !== UNPUBLISH_RECORD_SENTINEL) {
	        var copy = null;
	        __webpack_require__(6)(record, function (value, key) {
	          if (!(key in backupRecord)) {
	            copy = copy || (0, _extends3['default'])({}, backupRecord);
	            copy[key] = UNPUBLISH_FIELD_SENTINEL;
	          }
	        });
	        backup.set(dataID, copy || backupRecord);
	      }
	    }
	  };

	  RelayRecordSourceMutator.prototype._setSentinelFieldInBackupRecord = function _setSentinelFieldInBackupRecord(dataID, storageKey) {
	    var backup = this._backup;
	    if (backup) {
	      var backupRecord = backup.get(dataID);
	      if (backupRecord && backupRecord !== UNPUBLISH_RECORD_SENTINEL && !(storageKey in backupRecord)) {
	        var copy = (0, _extends3['default'])({}, backupRecord);
	        __webpack_require__(2).setValue(copy, storageKey, UNPUBLISH_FIELD_SENTINEL);
	        backup.set(dataID, copy);
	      }
	    }
	  };

	  RelayRecordSourceMutator.prototype._getSinkRecord = function _getSinkRecord(dataID) {
	    var sinkRecord = this._sink.get(dataID);
	    if (!sinkRecord) {
	      var baseRecord = this._base.get(dataID);
	      __webpack_require__(1)(baseRecord, 'RelayRecordSourceMutator: Cannot modify non-existent record `%s`.', dataID);
	      sinkRecord = __webpack_require__(2).create(dataID, __webpack_require__(2).getType(baseRecord));
	      this._sink.set(dataID, sinkRecord);
	    }
	    return sinkRecord;
	  };

	  RelayRecordSourceMutator.prototype.copyFields = function copyFields(sourceID, sinkID) {
	    var sinkSource = this._sink.get(sourceID);
	    var baseSource = this._base.get(sourceID);
	    __webpack_require__(1)(sinkSource || baseSource, 'RelayRecordSourceMutator#copyFields(): Cannot copy fields from ' + 'non-existent record `%s`.', sourceID);
	    this._createBackupRecord(sinkID);
	    var sink = this._getSinkRecord(sinkID);
	    if (baseSource) {
	      __webpack_require__(2).copyFields(baseSource, sink);
	    }
	    if (sinkSource) {
	      __webpack_require__(2).copyFields(sinkSource, sink);
	    }
	    this._setSentinelFieldsInBackupRecord(sinkID, sink);
	  };

	  RelayRecordSourceMutator.prototype.copyFieldsFromRecord = function copyFieldsFromRecord(record, sinkID) {
	    this.copyFields(__webpack_require__(2).getDataID(record), sinkID);
	    var sink = this._getSinkRecord(sinkID);
	    __webpack_require__(2).copyFields(record, sink);
	    this._setSentinelFieldsInBackupRecord(sinkID, sink);
	  };

	  RelayRecordSourceMutator.prototype.create = function create(dataID, typeName) {
	    __webpack_require__(1)(this._base.getStatus(dataID) !== EXISTENT && this._sink.getStatus(dataID) !== EXISTENT, 'RelayRecordSourceMutator#create(): Cannot create a record with id ' + '`%s`, this record already exists.', dataID);
	    if (this._backup) {
	      this._backup.set(dataID, UNPUBLISH_RECORD_SENTINEL);
	    }
	    var record = __webpack_require__(2).create(dataID, typeName);
	    this._sink.set(dataID, record);
	  };

	  RelayRecordSourceMutator.prototype['delete'] = function _delete(dataID) {
	    this._createBackupRecord(dataID);
	    this._sink['delete'](dataID);
	  };

	  RelayRecordSourceMutator.prototype.getStatus = function getStatus(dataID) {
	    return this._sink.has(dataID) ? this._sink.getStatus(dataID) : this._base.getStatus(dataID);
	  };

	  RelayRecordSourceMutator.prototype.getType = function getType(dataID) {
	    for (var ii = 0; ii < this._sources.length; ii++) {
	      var record = this._sources[ii].get(dataID);
	      if (record) {
	        return __webpack_require__(2).getType(record);
	      } else if (record === null) {
	        return null;
	      }
	    }
	  };

	  RelayRecordSourceMutator.prototype.getValue = function getValue(dataID, storageKey) {
	    for (var ii = 0; ii < this._sources.length; ii++) {
	      var record = this._sources[ii].get(dataID);
	      if (record) {
	        var value = __webpack_require__(2).getValue(record, storageKey);
	        if (value !== undefined) {
	          return value;
	        }
	      } else if (record === null) {
	        return null;
	      }
	    }
	  };

	  RelayRecordSourceMutator.prototype.setValue = function setValue(dataID, storageKey, value) {
	    this._createBackupRecord(dataID);
	    var sinkRecord = this._getSinkRecord(dataID);
	    __webpack_require__(2).setValue(sinkRecord, storageKey, value);
	    this._setSentinelFieldInBackupRecord(dataID, storageKey);
	  };

	  RelayRecordSourceMutator.prototype.getLinkedRecordID = function getLinkedRecordID(dataID, storageKey) {
	    for (var ii = 0; ii < this._sources.length; ii++) {
	      var record = this._sources[ii].get(dataID);
	      if (record) {
	        var linkedID = __webpack_require__(2).getLinkedRecordID(record, storageKey);
	        if (linkedID !== undefined) {
	          return linkedID;
	        }
	      } else if (record === null) {
	        return null;
	      }
	    }
	  };

	  RelayRecordSourceMutator.prototype.setLinkedRecordID = function setLinkedRecordID(dataID, storageKey, linkedID) {
	    this._createBackupRecord(dataID);
	    var sinkRecord = this._getSinkRecord(dataID);
	    __webpack_require__(2).setLinkedRecordID(sinkRecord, storageKey, linkedID);
	    this._setSentinelFieldInBackupRecord(dataID, storageKey);
	  };

	  RelayRecordSourceMutator.prototype.getLinkedRecordIDs = function getLinkedRecordIDs(dataID, storageKey) {
	    for (var ii = 0; ii < this._sources.length; ii++) {
	      var record = this._sources[ii].get(dataID);
	      if (record) {
	        var linkedIDs = __webpack_require__(2).getLinkedRecordIDs(record, storageKey);
	        if (linkedIDs !== undefined) {
	          return linkedIDs;
	        }
	      } else if (record === null) {
	        return null;
	      }
	    }
	  };

	  RelayRecordSourceMutator.prototype.setLinkedRecordIDs = function setLinkedRecordIDs(dataID, storageKey, linkedIDs) {
	    this._createBackupRecord(dataID);
	    var sinkRecord = this._getSinkRecord(dataID);
	    __webpack_require__(2).setLinkedRecordIDs(sinkRecord, storageKey, linkedIDs);
	    this._setSentinelFieldInBackupRecord(dataID, storageKey);
	  };

	  return RelayRecordSourceMutator;
	}();

	module.exports = RelayRecordSourceMutator;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRecordSourceProxy
	 * 
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(14),
	    EXISTENT = _require.EXISTENT,
	    NONEXISTENT = _require.NONEXISTENT;

	var _require2 = __webpack_require__(4),
	    ROOT_ID = _require2.ROOT_ID,
	    ROOT_TYPE = _require2.ROOT_TYPE;

	/**
	 * @internal
	 *
	 * A helper for manipulating a `RecordSource` via an imperative/OO-style API.
	 */
	var RelayRecordSourceProxy = function () {
	  function RelayRecordSourceProxy(mutator, handlerProvider) {
	    (0, _classCallCheck3['default'])(this, RelayRecordSourceProxy);

	    this._mutator = mutator;
	    this._handlerProvider = handlerProvider || null;
	    this._proxies = {};
	  }

	  RelayRecordSourceProxy.prototype.commitPayload = function commitPayload(selector, response) {
	    var _this = this;

	    if (!response) {
	      return new (__webpack_require__(19))(this, selector);
	    }

	    var _normalizeRelayPayloa = __webpack_require__(22)(selector, response),
	        source = _normalizeRelayPayloa.source,
	        fieldPayloads = _normalizeRelayPayloa.fieldPayloads;

	    var dataIDs = source.getRecordIDs();
	    dataIDs.forEach(function (dataID) {
	      var status = source.getStatus(dataID);
	      if (status === EXISTENT) {
	        var sourceRecord = source.get(dataID);
	        if (sourceRecord) {
	          if (_this._mutator.getStatus(dataID) !== EXISTENT) {
	            _this.create(dataID, __webpack_require__(2).getType(sourceRecord));
	          }
	          _this._mutator.copyFieldsFromRecord(sourceRecord, dataID);
	          delete _this._proxies[dataID];
	        }
	      } else if (status === NONEXISTENT) {
	        _this['delete'](dataID);
	      }
	    });

	    if (fieldPayloads && fieldPayloads.length) {
	      fieldPayloads.forEach(function (fieldPayload) {
	        var handler = _this._handlerProvider && _this._handlerProvider(fieldPayload.handle);
	        __webpack_require__(1)(handler, 'RelayModernEnvironment: Expected a handler to be provided for handle `%s`.', fieldPayload.handle);
	        handler.update(_this, fieldPayload);
	      });
	    }
	    return new (__webpack_require__(19))(this, selector);
	  };

	  RelayRecordSourceProxy.prototype.create = function create(dataID, typeName) {
	    this._mutator.create(dataID, typeName);
	    delete this._proxies[dataID];
	    var record = this.get(dataID);
	    // For flow
	    __webpack_require__(1)(record, 'RelayRecordSourceProxy#create(): Expected the created record to exist.');
	    return record;
	  };

	  RelayRecordSourceProxy.prototype['delete'] = function _delete(dataID) {
	    __webpack_require__(1)(dataID !== ROOT_ID, 'RelayRecordSourceProxy#delete(): Cannot delete the root record.');
	    delete this._proxies[dataID];
	    this._mutator['delete'](dataID);
	  };

	  RelayRecordSourceProxy.prototype.get = function get(dataID) {
	    if (!this._proxies.hasOwnProperty(dataID)) {
	      var status = this._mutator.getStatus(dataID);
	      if (status === EXISTENT) {
	        this._proxies[dataID] = new (__webpack_require__(49))(this, this._mutator, dataID);
	      } else {
	        this._proxies[dataID] = status === NONEXISTENT ? null : undefined;
	      }
	    }
	    return this._proxies[dataID];
	  };

	  RelayRecordSourceProxy.prototype.getRoot = function getRoot() {
	    var root = this.get(ROOT_ID);
	    if (!root) {
	      root = this.create(ROOT_ID, ROOT_TYPE);
	    }
	    __webpack_require__(1)(root && root.getType() === ROOT_TYPE, 'RelayRecordSourceProxy#getRoot(): Expected the source to contain a ' + 'root record.');
	    return root;
	  };

	  return RelayRecordSourceProxy;
	}();

	module.exports = RelayRecordSourceProxy;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRecordSourceSelectorProxy
	 * 
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(4),
	    getStorageKey = _require.getStorageKey;

	/**
	 * @internal
	 *
	 * A subclass of RecordSourceProxy that provides convenience methods for
	 * accessing the root fields of a given query/mutation. These fields accept
	 * complex arguments and it can be tedious to re-construct the correct sets of
	 * arguments to pass to e.g. `getRoot().getLinkedRecord()`.
	 */
	var RelayRecordSourceSelectorProxy = function () {
	  function RelayRecordSourceSelectorProxy(recordSource, selector) {
	    (0, _classCallCheck3['default'])(this, RelayRecordSourceSelectorProxy);

	    this._recordSource = recordSource;
	    this._selector = selector;
	  }

	  RelayRecordSourceSelectorProxy.prototype.create = function create(dataID, typeName) {
	    return this._recordSource.create(dataID, typeName);
	  };

	  RelayRecordSourceSelectorProxy.prototype['delete'] = function _delete(dataID) {
	    this._recordSource['delete'](dataID);
	  };

	  RelayRecordSourceSelectorProxy.prototype.get = function get(dataID) {
	    return this._recordSource.get(dataID);
	  };

	  RelayRecordSourceSelectorProxy.prototype.getRoot = function getRoot() {
	    return this._recordSource.getRoot();
	  };

	  RelayRecordSourceSelectorProxy.prototype._getRootField = function _getRootField(selector, fieldName, plural) {
	    var field = selector.node.selections.find(function (selection) {
	      return selection.kind === 'LinkedField' && selection.name === fieldName;
	    });
	    __webpack_require__(1)(field && field.kind === 'LinkedField', 'RelayRecordSourceSelectorProxy#getRootField(): Cannot find root ' + 'field `%s`, no such field is defined on GraphQL document `%s`.', fieldName, selector.node.name);
	    __webpack_require__(1)(field.plural === plural, 'RelayRecordSourceSelectorProxy#getRootField(): Expected root field ' + '`%s` to be %s.', fieldName, plural ? 'plural' : 'singular');
	    return field;
	  };

	  RelayRecordSourceSelectorProxy.prototype.getRootField = function getRootField(fieldName) {
	    var field = this._getRootField(this._selector, fieldName, false);
	    var storageKey = getStorageKey(field, this._selector.variables);
	    return this.getRoot().getLinkedRecord(storageKey);
	  };

	  RelayRecordSourceSelectorProxy.prototype.getPluralRootField = function getPluralRootField(fieldName) {
	    var field = this._getRootField(this._selector, fieldName, true);
	    var storageKey = getStorageKey(field, this._selector.variables);
	    return this.getRoot().getLinkedRecords(storageKey);
	  };

	  return RelayRecordSourceSelectorProxy;
	}();

	module.exports = RelayRecordSourceSelectorProxy;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule deepFreeze
	 */

	'use strict';

	/**
	 * Recursively "deep" freezes the supplied object.
	 *
	 * For convenience, and for consistency with the behavior of `Object.freeze`,
	 * returns the now-frozen original object.
	 */

	var _isFrozen2 = _interopRequireDefault(__webpack_require__(62));

	var _getOwnPropertyNames2 = _interopRequireDefault(__webpack_require__(61));

	var _freeze2 = _interopRequireDefault(__webpack_require__(37));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function deepFreeze(object) {
	  (0, _freeze2['default'])(object);
	  (0, _getOwnPropertyNames2['default'])(object).forEach(function (name) {
	    var property = object[name];
	    if (property && typeof property === 'object' && !(0, _isFrozen2['default'])(property)) {
	      deepFreeze(property);
	    }
	  });
	  return object;
	}

	module.exports = deepFreeze;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule getRelayHandleKey
	 */

	'use strict';

	var _require = __webpack_require__(39),
	    DEFAULT_HANDLE_KEY = _require.DEFAULT_HANDLE_KEY;

	/**
	 * @internal
	 *
	 * Helper to create a unique name for a handle field based on the handle name, handle key and
	 * source field.
	 */


	function getRelayHandleKey(handleName, key, fieldName) {
	  if (key && key !== DEFAULT_HANDLE_KEY) {
	    return '__' + key + '_' + handleName;
	  }

	  __webpack_require__(1)(fieldName != null, 'getRelayHandleKey: Expected either `fieldName` or `key` in `handle` to be provided');
	  return '__' + fieldName + '_' + handleName;
	}

	module.exports = getRelayHandleKey;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule normalizeRelayPayload
	 * 
	 */

	'use strict';

	var _require = __webpack_require__(4),
	    ROOT_ID = _require.ROOT_ID,
	    ROOT_TYPE = _require.ROOT_TYPE;

	function normalizeRelayPayload(selector, payload, errors) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { handleStrippedNulls: false };

	  var source = new (__webpack_require__(12))();
	  source.set(ROOT_ID, __webpack_require__(2).create(ROOT_ID, ROOT_TYPE));
	  var fieldPayloads = __webpack_require__(51).normalize(source, selector, payload, options);
	  return {
	    errors: errors,
	    fieldPayloads: fieldPayloads,
	    source: source
	  };
	}

	module.exports = normalizeRelayPayload;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayAsyncLoader
	 * 
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var CONDITION = __webpack_require__(3).CONDITION,
	    INLINE_FRAGMENT = __webpack_require__(3).INLINE_FRAGMENT,
	    LINKED_FIELD = __webpack_require__(3).LINKED_FIELD,
	    LINKED_HANDLE = __webpack_require__(3).LINKED_HANDLE,
	    SCALAR_FIELD = __webpack_require__(3).SCALAR_FIELD;

	var getStorageKey = __webpack_require__(4).getStorageKey;

	/**
	 * Attempts to synchronously check whether the records required to fulfill the
	 * given `selector` are present in `source` (synchronous checks, for example,
	 * are possible with the `RelayInMemoryRecordSource`).
	 *
	 * If so, returns `true`, and the records will be present in `target`;
	 * otherwise `false`.
	 */


	function check(source, target, selector) {
	  var state = null;
	  var dataID = selector.dataID,
	      node = selector.node,
	      variables = selector.variables;

	  function callback(loadingState) {
	    state = loadingState;
	  }
	  var loader = new RelayAsyncLoader(source, target, variables, callback);
	  var disposable = loader.load(node, dataID);
	  disposable.dispose();
	  return !!(state && state.status === 'complete');
	}

	/**
	 * Load the records required to fulfill the given `selector` from `source` and add
	 * them to `target`, calling the provided callback exactly once with an argument
	 * as follows:
	 * - {status: 'aborted'}: If `dispose()` was called on the Disposable returned
	 *   by `load` before loading the required records could be completed.
	 * - {status: 'complete'}: If a cached value/record was found for all fields in
	 *   the selector.
	 * - {status: 'error', error}: If an error occured loading any record from
	 *   source.
	 * - {status: 'missing'}: If any value/record was missing.
	 *
	 * Note that the callback may be called synchronously *or* asynchronously.
	 */
	function load(source, target, selector, callback) {
	  var dataID = selector.dataID,
	      node = selector.node,
	      variables = selector.variables;

	  var loader = new RelayAsyncLoader(source, target, variables, callback);
	  return loader.load(node, dataID);
	}

	/**
	 * @private
	 */

	var RelayAsyncLoader = function () {
	  function RelayAsyncLoader(source, target, variables, callback) {
	    (0, _classCallCheck3['default'])(this, RelayAsyncLoader);

	    this._callback = callback;
	    this._done = false;
	    this._loadingCount = 0;
	    this._source = source;
	    this._target = target;
	    this._variables = variables;
	  }

	  RelayAsyncLoader.prototype.load = function load(node, dataID) {
	    var _this = this;

	    var dispose = function dispose() {
	      return _this._handleAbort();
	    };
	    this._traverse(node, dataID);
	    return { dispose: dispose };
	  };

	  RelayAsyncLoader.prototype._getVariableValue = function _getVariableValue(name) {
	    __webpack_require__(1)(this._variables.hasOwnProperty(name), 'RelayAsyncLoader(): Undefined variable `%s`.', name);
	    return this._variables[name];
	  };

	  RelayAsyncLoader.prototype._handleComplete = function _handleComplete() {
	    if (!this._done) {
	      this._done = true;
	      this._callback({ status: 'complete' });
	    }
	  };

	  RelayAsyncLoader.prototype._handleError = function _handleError(error) {
	    if (!this._done) {
	      this._done = true;
	      this._callback({
	        error: error,
	        status: 'error'
	      });
	    }
	  };

	  RelayAsyncLoader.prototype._handleMissing = function _handleMissing() {
	    if (!this._done) {
	      this._done = true;
	      this._callback({ status: 'missing' });
	    }
	  };

	  RelayAsyncLoader.prototype._handleAbort = function _handleAbort() {
	    if (!this._done) {
	      this._done = true;
	      this._callback({ status: 'aborted' });
	    }
	  };

	  RelayAsyncLoader.prototype._traverse = function _traverse(node, dataID) {
	    // Don't load the same node twice:
	    if (!this._target.has(dataID)) {
	      this._loadAndTraverse(node, dataID);
	    } else {
	      this._loadingCount++;
	      var record = this._target.get(dataID);
	      if (record) {
	        this._traverseSelections(node.selections, record);
	      }
	      this._loadingCount--;
	      if (this._loadingCount === 0) {
	        this._handleComplete();
	      }
	    }
	  };

	  RelayAsyncLoader.prototype._loadAndTraverse = function _loadAndTraverse(node, dataID) {
	    var _this2 = this;

	    this._loadingCount++;
	    this._source.load(dataID, function (error, record) {
	      if (_this2._done) {
	        return;
	      }
	      if (error) {
	        _this2._handleError(error);
	      } else if (record === undefined) {
	        _this2._handleMissing();
	      } else {
	        if (record === null) {
	          _this2._target['delete'](dataID);
	        } else {
	          _this2._target.set(dataID, record);
	          _this2._traverseSelections(node.selections, record);
	        }
	        _this2._loadingCount--;
	        if (_this2._loadingCount === 0) {
	          _this2._handleComplete();
	        }
	      }
	    });
	  };

	  RelayAsyncLoader.prototype._traverseSelections = function _traverseSelections(selections, record) {
	    var _this3 = this;

	    selections.every(function (selection) {
	      switch (selection.kind) {
	        case SCALAR_FIELD:
	          _this3._prepareScalar(selection, record);
	          break;
	        case LINKED_FIELD:
	          if (selection.plural) {
	            _this3._preparePluralLink(selection, record);
	          } else {
	            _this3._prepareLink(selection, record);
	          }
	          break;
	        case CONDITION:
	          var conditionValue = _this3._getVariableValue(selection.condition);
	          if (conditionValue === selection.passingValue) {
	            _this3._traverseSelections(selection.selections, record);
	          }
	          break;
	        case INLINE_FRAGMENT:
	          var typeName = __webpack_require__(2).getType(record);
	          if (typeName != null && typeName === selection.type) {
	            _this3._traverseSelections(selection.selections, record);
	          }
	          break;
	        case LINKED_HANDLE:
	          // Handles have no selections themselves; traverse the original field
	          // where the handle was set-up instead.
	          var handleField = __webpack_require__(34)(selection, selections, _this3._variables);
	          if (handleField.plural) {
	            _this3._preparePluralLink(handleField, record);
	          } else {
	            _this3._prepareLink(handleField, record);
	          }
	          break;
	        default:
	          __webpack_require__(1)(selection.kind === SCALAR_FIELD, 'RelayAsyncLoader(): Unexpected ast kind `%s`.', selection.kind);
	      }
	      return !_this3._done;
	    });
	  };

	  RelayAsyncLoader.prototype._prepareScalar = function _prepareScalar(field, record) {
	    var storageKey = getStorageKey(field, this._variables);
	    var fieldValue = __webpack_require__(2).getValue(record, storageKey);
	    if (fieldValue === undefined) {
	      this._handleMissing();
	    }
	  };

	  RelayAsyncLoader.prototype._prepareLink = function _prepareLink(field, record) {
	    var storageKey = getStorageKey(field, this._variables);
	    var linkedID = __webpack_require__(2).getLinkedRecordID(record, storageKey);

	    if (linkedID === undefined) {
	      this._handleMissing();
	    } else if (linkedID != null) {
	      this._traverse(field, linkedID);
	    }
	  };

	  RelayAsyncLoader.prototype._preparePluralLink = function _preparePluralLink(field, record) {
	    var _this4 = this;

	    var storageKey = getStorageKey(field, this._variables);
	    var linkedIDs = __webpack_require__(2).getLinkedRecordIDs(record, storageKey);

	    if (linkedIDs === undefined) {
	      this._handleMissing();
	    } else if (linkedIDs) {
	      linkedIDs.forEach(function (linkedID) {
	        if (linkedID != null) {
	          _this4._traverse(field, linkedID);
	        }
	      });
	    }
	  };

	  return RelayAsyncLoader;
	}();

	module.exports = {
	  check: check,
	  load: load
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule RelayConcreteVariables
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _stringify2 = _interopRequireDefault(__webpack_require__(10));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Determines the variables that are in scope for a fragment given the variables
	 * in scope at the root query as well as any arguments applied at the fragment
	 * spread via `@arguments`.
	 *
	 * Note that this is analagous to determining function arguments given a function call.
	 */
	function getFragmentVariables(fragment, rootVariables, argumentVariables) {
	  var variables = void 0;
	  fragment.argumentDefinitions.forEach(function (definition) {
	    if (argumentVariables.hasOwnProperty(definition.name)) {
	      return;
	    }
	    variables = variables || (0, _extends3['default'])({}, argumentVariables);
	    switch (definition.kind) {
	      case 'LocalArgument':
	        variables[definition.name] = definition.defaultValue;
	        break;
	      case 'RootArgument':
	        __webpack_require__(1)(rootVariables.hasOwnProperty(definition.name), 'RelayConcreteVariables: Expected a defined query variable for `$%s` ' + 'in fragment `%s`.', definition.name, fragment.name);
	        variables[definition.name] = rootVariables[definition.name];
	        break;
	      default:
	        __webpack_require__(1)(false, 'RelayConcreteVariables: Unexpected node kind `%s` in fragment `%s`.', definition.kind, fragment.name);
	    }
	  });
	  return variables || argumentVariables;
	}

	/**
	 * Determines the variables that are in scope for a given operation given values
	 * for some/all of its arguments. Extraneous input variables are filtered from
	 * the output, and missing variables are set to default values (if given in the
	 * operation's definition).
	 */
	function getOperationVariables(operation, variables) {
	  var operationVariables = {};
	  operation.query.argumentDefinitions.forEach(function (def) {
	    var value = def.defaultValue;
	    if (variables[def.name] != null) {
	      value = variables[def.name];
	    }
	    operationVariables[def.name] = value;
	    if (true) {
	      __webpack_require__(11)(value != null || !def.type.endsWith('!'), 'RelayConcreteVariables: Expected a value for non-nullable variable ' + '`$%s: %s` on operation `%s`, got `%s`. Make sure you supply a ' + 'value for all non-nullable arguments.', def.name, def.type, operation.name, (0, _stringify2['default'])(value));
	    }
	  });
	  return operationVariables;
	}

	module.exports = {
	  getFragmentVariables: getFragmentVariables,
	  getOperationVariables: getOperationVariables
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayConnectionHandler
	 * 
	 */

	'use strict';

	var _set2 = _interopRequireDefault(__webpack_require__(23));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(38),
	    CURSOR = _require.CURSOR,
	    EDGES = _require.EDGES,
	    NODE = _require.NODE,
	    END_CURSOR = _require.END_CURSOR,
	    HAS_NEXT_PAGE = _require.HAS_NEXT_PAGE,
	    HAS_PREV_PAGE = _require.HAS_PREV_PAGE,
	    PAGE_INFO = _require.PAGE_INFO,
	    PAGE_INFO_TYPE = _require.PAGE_INFO_TYPE,
	    START_CURSOR = _require.START_CURSOR;

	var CONNECTION = 'connection';

	// Per-instance incrementing index used to generate unique edge IDs
	var NEXT_EDGE_INDEX = '__connection_next_edge_index';

	/**
	 * @public
	 *
	 * A default runtime handler for connection fields that appends newly fetched
	 * edges onto the end of a connection, regardless of the arguments used to fetch
	 * those edges.
	 */
	function update(store, payload) {
	  var record = store.get(payload.dataID);
	  if (!record) {
	    return;
	  }

	  var serverConnection = record.getLinkedRecord(payload.fieldKey);
	  var serverPageInfo = serverConnection && serverConnection.getLinkedRecord(PAGE_INFO);
	  if (!serverConnection) {
	    record.setValue(null, payload.handleKey);
	    return;
	  }
	  var clientConnection = record.getLinkedRecord(payload.handleKey);
	  var clientPageInfo = clientConnection && clientConnection.getLinkedRecord(PAGE_INFO);
	  if (!clientConnection) {
	    // Initial fetch with data: copy fields from the server record
	    var connection = store.create(__webpack_require__(9)(record.getDataID(), payload.handleKey), serverConnection.getType());
	    connection.setValue(0, NEXT_EDGE_INDEX);
	    connection.copyFieldsFrom(serverConnection);
	    var serverEdges = serverConnection.getLinkedRecords(EDGES);
	    if (serverEdges) {
	      serverEdges = serverEdges.map(function (edge) {
	        return buildConnectionEdge(store, connection, edge);
	      });
	      connection.setLinkedRecords(serverEdges, EDGES);
	    }
	    record.setLinkedRecord(connection, payload.handleKey);

	    clientPageInfo = store.create(__webpack_require__(9)(connection.getDataID(), PAGE_INFO), PAGE_INFO_TYPE);
	    clientPageInfo.setValue(false, HAS_NEXT_PAGE);
	    clientPageInfo.setValue(false, HAS_PREV_PAGE);
	    clientPageInfo.setValue(null, END_CURSOR);
	    clientPageInfo.setValue(null, START_CURSOR);
	    if (serverPageInfo) {
	      clientPageInfo.copyFieldsFrom(serverPageInfo);
	    }
	    connection.setLinkedRecord(clientPageInfo, PAGE_INFO);
	  } else {
	    var _connection = clientConnection;
	    // Subsequent fetches:
	    // - merge prev/next edges, de-duplicating by node id
	    // - synthesize page info fields
	    var _serverEdges = serverConnection.getLinkedRecords(EDGES);
	    if (_serverEdges) {
	      _serverEdges = _serverEdges.map(function (edge) {
	        return buildConnectionEdge(store, _connection, edge);
	      });
	    }
	    var prevEdges = _connection.getLinkedRecords(EDGES);
	    var nextEdges = [];
	    var args = payload.args;
	    if (prevEdges && _serverEdges) {
	      if (args.after != null) {
	        // Forward pagination from the end of the connection: append edges
	        if (clientPageInfo && args.after === clientPageInfo.getValue(END_CURSOR)) {
	          var nodeIDs = new _set2['default']();
	          mergeEdges(prevEdges, nextEdges, nodeIDs);
	          mergeEdges(_serverEdges, nextEdges, nodeIDs);
	        } else {
	          __webpack_require__(11)(false, 'RelayConnectionHandler: Unexpected after cursor `%s`, edges must ' + 'be fetched from the end of the list (`%s`).', args.after, clientPageInfo && clientPageInfo.getValue(END_CURSOR));
	          return;
	        }
	      } else if (args.before != null) {
	        // Backward pagination from the start of the connection: prepend edges
	        if (clientPageInfo && args.before === clientPageInfo.getValue(START_CURSOR)) {
	          var _nodeIDs = new _set2['default']();
	          mergeEdges(_serverEdges, nextEdges, _nodeIDs);
	          mergeEdges(prevEdges, nextEdges, _nodeIDs);
	        } else {
	          __webpack_require__(11)(false, 'RelayConnectionHandler: Unexpected before cursor `%s`, edges must ' + 'be fetched from the beginning of the list (`%s`).', args.before, clientPageInfo && clientPageInfo.getValue(START_CURSOR));
	          return;
	        }
	      } else {
	        // The connection was refetched from the beginning/end: replace edges
	        nextEdges = _serverEdges;
	      }
	    } else if (_serverEdges) {
	      nextEdges = _serverEdges;
	    } else {
	      nextEdges = prevEdges;
	    }
	    // Update edges and page info only if edges were updated, the null check is
	    // for Flow (prevEdges could be null).
	    if (nextEdges != null && nextEdges !== prevEdges) {
	      _connection.setLinkedRecords(nextEdges, EDGES);
	      if (clientPageInfo && serverPageInfo) {
	        if (args.before != null || args.after == null && args.last) {
	          clientPageInfo.setValue(!!serverPageInfo.getValue(HAS_PREV_PAGE), HAS_PREV_PAGE);
	          var startCursor = serverPageInfo.getValue(START_CURSOR);
	          if (typeof startCursor === 'string') {
	            clientPageInfo.setValue(startCursor, START_CURSOR);
	          }
	        } else if (args.after != null || args.before == null && args.first) {
	          clientPageInfo.setValue(!!serverPageInfo.getValue(HAS_NEXT_PAGE), HAS_NEXT_PAGE);
	          var endCursor = serverPageInfo.getValue(END_CURSOR);
	          if (typeof endCursor === 'string') {
	            clientPageInfo.setValue(endCursor, END_CURSOR);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * @public
	 *
	 * Given a record and the name of the schema field for which a connection was
	 * fetched, returns the linked connection record.
	 *
	 * Example:
	 *
	 * Given that data has already been fetched on some user `<id>` on the `friends`
	 * field:
	 *
	 * ```
	 * fragment FriendsFragment on User {
	 *   friends(first: 10) @connection(key: "FriendsFragment_friends") {
	 *    edges {
	 *      node {
	 *        id
	 *        }
	 *      }
	 *   }
	 * }
	 * ```
	 *
	 * The `friends` connection record can be accessed with:
	 *
	 * ```
	 * store => {
	 *   const user = store.get('<id>');
	 *   const friends = RelayConnectionHandler.getConnection(user, 'FriendsFragment_friends');
	 *   // Access fields on the connection:
	 *   const edges = friends.getLinkedRecords('edges');
	 * }
	 * ```
	 *
	 * TODO: t15733312
	 * Currently we haven't run into this case yet, but we need to add a `getConnections`
	 * that returns an array of the connections under the same `key` regardless of the variables.
	 */
	function getConnection(record, key, filters) {
	  var handleKey = __webpack_require__(21)(CONNECTION, key, null);
	  return record.getLinkedRecord(handleKey, filters);
	}

	/**
	 * @public
	 *
	 * Inserts an edge after the given cursor, or at the end of the list if no
	 * cursor is provided.
	 *
	 * Example:
	 *
	 * Given that data has already been fetched on some user `<id>` on the `friends`
	 * field:
	 *
	 * ```
	 * fragment FriendsFragment on User {
	 *   friends(first: 10) @connection(key: "FriendsFragment_friends") {
	 *    edges {
	 *      node {
	 *        id
	 *        }
	 *      }
	 *   }
	 * }
	 * ```
	 *
	 * An edge can be appended with:
	 *
	 * ```
	 * store => {
	 *   const user = store.get('<id>');
	 *   const friends = RelayConnectionHandler.getConnection(user, 'FriendsFragment_friends');
	 *   const edge = store.create('<edge-id>', 'FriendsEdge');
	 *   RelayConnectionHandler.insertEdgeAfter(friends, edge);
	 * }
	 * ```
	 */
	function insertEdgeAfter(record, newEdge, cursor) {
	  var edges = record.getLinkedRecords(EDGES);
	  if (!edges) {
	    record.setLinkedRecords([newEdge], EDGES);
	    return;
	  }
	  var nextEdges = void 0;
	  if (cursor == null) {
	    nextEdges = edges.concat(newEdge);
	  } else {
	    nextEdges = [];
	    var foundCursor = false;
	    for (var ii = 0; ii < edges.length; ii++) {
	      var edge = edges[ii];
	      nextEdges.push(edge);
	      if (edge == null) {
	        continue;
	      }
	      var edgeCursor = edge.getValue(CURSOR);
	      if (cursor === edgeCursor) {
	        nextEdges.push(newEdge);
	        foundCursor = true;
	      }
	    }
	    if (!foundCursor) {
	      nextEdges.push(newEdge);
	    }
	  }
	  record.setLinkedRecords(nextEdges, EDGES);
	}

	/**
	 * @public
	 *
	 * Creates an edge for a connection record, given a node and edge type.
	 */
	function createEdge(store, record, node, edgeType) {
	  // An index-based client ID could easily conflict (unless it was
	  // auto-incrementing, but there is nowhere to the store the id)
	  // Instead, construct a client ID based on the connection ID and node ID,
	  // which will only conflict if the same node is added to the same connection
	  // twice. This is acceptable since the `insertEdge*` functions ignore
	  // duplicates.
	  var edgeID = __webpack_require__(9)(record.getDataID(), node.getDataID());
	  var edge = store.create(edgeID, edgeType);
	  edge.setLinkedRecord(node, NODE);
	  return edge;
	}

	/**
	 * @public
	 *
	 * Inserts an edge before the given cursor, or at the beginning of the list if
	 * no cursor is provided.
	 *
	 * Example:
	 *
	 * Given that data has already been fetched on some user `<id>` on the `friends`
	 * field:
	 *
	 * ```
	 * fragment FriendsFragment on User {
	 *   friends(first: 10) @connection(key: "FriendsFragment_friends") {
	 *    edges {
	 *      node {
	 *        id
	 *        }
	 *      }
	 *   }
	 * }
	 * ```
	 *
	 * An edge can be prepended with:
	 *
	 * ```
	 * store => {
	 *   const user = store.get('<id>');
	 *   const friends = RelayConnectionHandler.getConnection(user, 'FriendsFragment_friends');
	 *   const edge = store.create('<edge-id>', 'FriendsEdge');
	 *   RelayConnectionHandler.insertEdgeBefore(friends, edge);
	 * }
	 * ```
	 */
	function insertEdgeBefore(record, newEdge, cursor) {
	  var edges = record.getLinkedRecords(EDGES);
	  if (!edges) {
	    record.setLinkedRecords([newEdge], EDGES);
	    return;
	  }
	  var nextEdges = void 0;
	  if (cursor == null) {
	    nextEdges = [newEdge].concat(edges);
	  } else {
	    nextEdges = [];
	    var foundCursor = false;
	    for (var ii = 0; ii < edges.length; ii++) {
	      var edge = edges[ii];
	      if (edge != null) {
	        var edgeCursor = edge.getValue(CURSOR);
	        if (cursor === edgeCursor) {
	          nextEdges.push(newEdge);
	          foundCursor = true;
	        }
	      }
	      nextEdges.push(edge);
	    }
	    if (!foundCursor) {
	      nextEdges.unshift(newEdge);
	    }
	  }
	  record.setLinkedRecords(nextEdges, EDGES);
	}

	/**
	 * @public
	 *
	 * Remove any edges whose `node.id` matches the given id.
	 */
	function deleteNode(record, nodeID) {
	  var edges = record.getLinkedRecords(EDGES);
	  if (!edges) {
	    return;
	  }
	  var nextEdges = void 0;
	  for (var ii = 0; ii < edges.length; ii++) {
	    var edge = edges[ii];
	    var node = edge && edge.getLinkedRecord(NODE);
	    if (node != null && node.getDataID() === nodeID) {
	      if (nextEdges === undefined) {
	        nextEdges = edges.slice(0, ii);
	      }
	    } else if (nextEdges !== undefined) {
	      nextEdges.push(edge);
	    }
	  }
	  if (nextEdges !== undefined) {
	    record.setLinkedRecords(nextEdges, EDGES);
	  }
	}

	/**
	 * @internal
	 *
	 * Creates a copy of an edge with a unique ID based on per-connection-instance
	 * incrementing edge index. This is necessary to avoid collisions between edges,
	 * which can occur because (edge) client IDs are assigned deterministically
	 * based on the path from the nearest node with an id.
	 *
	 * Example: if the first N edges of the same connection are refetched, the edges
	 * from the second fetch will be assigned the same IDs as the first fetch, even
	 * though the nodes they point to may be different (or the same and in different
	 * order).
	 */
	function buildConnectionEdge(store, connection, edge) {
	  if (edge == null) {
	    return edge;
	  }
	  var edgeIndex = connection.getValue(NEXT_EDGE_INDEX);
	  __webpack_require__(1)(typeof edgeIndex === 'number', 'RelayConnectionHandler: Expected %s to be a number, got `%s`.', NEXT_EDGE_INDEX, edgeIndex);
	  var edgeID = __webpack_require__(9)(connection.getDataID(), EDGES, edgeIndex);
	  var connectionEdge = store.create(edgeID, edge.getType());
	  connectionEdge.copyFieldsFrom(edge);
	  connection.setValue(edgeIndex + 1, NEXT_EDGE_INDEX);
	  return connectionEdge;
	}

	/**
	 * @internal
	 *
	 * Adds the source edges to the target edges, skipping edges with
	 * duplicate cursors or node ids.
	 */
	function mergeEdges(sourceEdges, targetEdges, nodeIDs) {
	  for (var ii = 0; ii < sourceEdges.length; ii++) {
	    var edge = sourceEdges[ii];
	    if (!edge) {
	      continue;
	    }
	    var node = edge.getLinkedRecord(NODE);
	    var nodeID = node && node.getValue('id');
	    if (nodeID) {
	      if (nodeIDs.has(nodeID)) {
	        continue;
	      }
	      nodeIDs.add(nodeID);
	    }
	    targetEdges.push(edge);
	  }
	}

	module.exports = {
	  createEdge: createEdge,
	  deleteNode: deleteNode,
	  getConnection: getConnection,
	  insertEdgeAfter: insertEdgeAfter,
	  insertEdgeBefore: insertEdgeBefore,
	  update: update
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayModernSelector
	 * 
	 */

	'use strict';

	var _assign2 = _interopRequireDefault(__webpack_require__(36));

	var _stringify2 = _interopRequireDefault(__webpack_require__(10));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(28),
	    getFragmentVariables = _require.getFragmentVariables;

	var _require2 = __webpack_require__(4),
	    FRAGMENTS_KEY = _require2.FRAGMENTS_KEY,
	    ID_KEY = _require2.ID_KEY;

	/**
	 * @public
	 *
	 * Given the result `item` from a parent that fetched `fragment`, creates a
	 * selector that can be used to read the results of that fragment for that item.
	 *
	 * Example:
	 *
	 * Given two fragments as follows:
	 *
	 * ```
	 * fragment Parent on User {
	 *   id
	 *   ...Child
	 * }
	 * fragment Child on User {
	 *   name
	 * }
	 * ```
	 *
	 * And given some object `parent` that is the results of `Parent` for id "4",
	 * the results of `Child` can be accessed by first getting a selector and then
	 * using that selector to `lookup()` the results against the environment:
	 *
	 * ```
	 * const childSelector = getSelector(queryVariables, Child, parent);
	 * const childData = environment.lookup(childSelector).data;
	 * ```
	 */
	function getSelector(operationVariables, fragment, item) {
	  __webpack_require__(1)(typeof item === 'object' && item !== null && !Array.isArray(item), 'RelayModernSelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.name, (0, _stringify2['default'])(item));
	  var dataID = item[ID_KEY];
	  var fragments = item[FRAGMENTS_KEY];
	  if (typeof dataID === 'string' && typeof fragments === 'object' && fragments !== null && typeof fragments[fragment.name] === 'object' && fragments[fragment.name] !== null) {
	    var argumentVariables = fragments[fragment.name];
	    var fragmentVariables = getFragmentVariables(fragment, operationVariables, argumentVariables);
	    return {
	      dataID: dataID,
	      node: fragment,
	      variables: fragmentVariables
	    };
	  }
	  __webpack_require__(11)(false, 'RelayModernSelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s`.', fragment.name, (0, _stringify2['default'])(item), fragment.name);
	  return null;
	}

	/**
	 * @public
	 *
	 * Given the result `items` from a parent that fetched `fragment`, creates a
	 * selector that can be used to read the results of that fragment on those
	 * items. This is similar to `getSelector` but for "plural" fragments that
	 * expect an array of results and therefore return an array of selectors.
	 */
	function getSelectorList(operationVariables, fragment, items) {
	  var selectors = null;
	  items.forEach(function (item) {
	    var selector = item != null ? getSelector(operationVariables, fragment, item) : null;
	    if (selector != null) {
	      selectors = selectors || [];
	      selectors.push(selector);
	    }
	  });
	  return selectors;
	}

	/**
	 * @public
	 *
	 * Given a mapping of keys -> results and a mapping of keys -> fragments,
	 * extracts the selectors for those fragments from the results.
	 *
	 * The canonical use-case for this function is ReactRelayFragmentContainer, which
	 * uses this function to convert (props, fragments) into selectors so that it
	 * can read the results to pass to the inner component.
	 */
	function getSelectorsFromObject(operationVariables, fragments, object) {
	  var selectors = {};
	  __webpack_require__(6)(fragments, function (fragment, key) {
	    var item = object[key];
	    if (item == null) {
	      selectors[key] = item;
	    } else if (fragment.metadata && fragment.metadata.plural === true) {
	      __webpack_require__(1)(Array.isArray(item), 'RelayModernSelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', key, (0, _stringify2['default'])(item), fragment.name);
	      selectors[key] = getSelectorList(operationVariables, fragment, item);
	    } else {
	      __webpack_require__(1)(!Array.isArray(item), 'RelayModernFragmentSpecResolver: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', key, (0, _stringify2['default'])(item), fragment.name);
	      selectors[key] = getSelector(operationVariables, fragment, item);
	    }
	  });
	  return selectors;
	}

	/**
	 * @public
	 *
	 * Given a mapping of keys -> results and a mapping of keys -> fragments,
	 * extracts a mapping of keys -> id(s) of the results.
	 *
	 * Similar to `getSelectorsFromObject()`, this function can be useful in
	 * determining the "identity" of the props passed to a component.
	 */
	function getDataIDsFromObject(fragments, object) {
	  var ids = {};
	  __webpack_require__(6)(fragments, function (fragment, key) {
	    var item = object[key];
	    if (item == null) {
	      ids[key] = item;
	    } else if (fragment.metadata && fragment.metadata.plural === true) {
	      __webpack_require__(1)(Array.isArray(item), 'RelayModernSelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', key, (0, _stringify2['default'])(item), fragment.name);
	      ids[key] = getDataIDs(fragment, item);
	    } else {
	      __webpack_require__(1)(!Array.isArray(item), 'RelayModernFragmentSpecResolver: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', key, (0, _stringify2['default'])(item), fragment.name);
	      ids[key] = getDataID(fragment, item);
	    }
	  });
	  return ids;
	}

	/**
	 * @internal
	 */
	function getDataIDs(fragment, items) {
	  var ids = void 0;
	  items.forEach(function (item) {
	    var id = item != null ? getDataID(fragment, item) : null;
	    if (id != null) {
	      ids = ids || [];
	      ids.push(id);
	    }
	  });
	  return ids || null;
	}

	/**
	 * @internal
	 */
	function getDataID(fragment, item) {
	  __webpack_require__(1)(typeof item === 'object' && item !== null && !Array.isArray(item), 'RelayModernSelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.name, (0, _stringify2['default'])(item));
	  var dataID = item[ID_KEY];
	  if (typeof dataID === 'string') {
	    return dataID;
	  }
	  __webpack_require__(11)(false, 'RelayModernSelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s`.', fragment.name, (0, _stringify2['default'])(item), fragment.name);
	  return null;
	}

	/**
	 * @public
	 *
	 * Given a mapping of keys -> results and a mapping of keys -> fragments,
	 * extracts the merged variables that would be in scope for those
	 * fragments/results.
	 *
	 * This can be useful in determing what varaibles were used to fetch the data
	 * for a Relay container, for example.
	 */
	function getVariablesFromObject(operationVariables, fragments, object) {
	  var variables = {};
	  __webpack_require__(6)(fragments, function (fragment, key) {
	    var item = object[key];
	    if (item == null) {
	      return;
	    } else if (fragment.metadata && fragment.metadata.plural === true) {
	      __webpack_require__(1)(Array.isArray(item), 'RelayModernSelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', key, (0, _stringify2['default'])(item), fragment.name);
	      item.forEach(function (value) {
	        if (value != null) {
	          var itemVariables = getVariables(operationVariables, fragment, value);
	          if (itemVariables) {
	            (0, _assign2['default'])(variables, itemVariables);
	          }
	        }
	      });
	    } else {
	      __webpack_require__(1)(!Array.isArray(item), 'RelayModernFragmentSpecResolver: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', key, (0, _stringify2['default'])(item), fragment.name);
	      var itemVariables = getVariables(operationVariables, fragment, item);
	      if (itemVariables) {
	        (0, _assign2['default'])(variables, itemVariables);
	      }
	    }
	  });
	  return variables;
	}

	/**
	 * @internal
	 */
	function getVariables(operationVariables, fragment, item) {
	  var selector = getSelector(operationVariables, fragment, item);
	  return selector ? selector.variables : null;
	}

	/**
	 * @public
	 *
	 * Determine if two selectors are equal (represent the same selection). Note
	 * that this function returns `false` when the two queries/fragments are
	 * different objects, even if they select the same fields.
	 */
	function areEqualSelectors(thisSelector, thatSelector) {
	  return thisSelector.dataID === thatSelector.dataID && thisSelector.node === thatSelector.node && __webpack_require__(24)(thisSelector.variables, thatSelector.variables);
	}

	module.exports = {
	  areEqualSelectors: areEqualSelectors,
	  getDataIDsFromObject: getDataIDsFromObject,
	  getSelector: getSelector,
	  getSelectorList: getSelectorList,
	  getSelectorsFromObject: getSelectorsFromObject,
	  getVariablesFromObject: getVariablesFromObject
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayProfiler
	 * 
	 */

	'use strict';

	var aggregateHandlersByName = {
	  '*': []
	};
	var profileHandlersByName = {
	  '*': []
	};

	var NOT_INVOKED = {};
	var defaultProfiler = { stop: __webpack_require__(25) };
	var shouldInstrument = function shouldInstrument(name) {
	  if (true) {
	    return true;
	  }
	  return name.charAt(0) !== '@';
	};

	/**
	 * @public
	 *
	 * Instruments methods to allow profiling various parts of Relay. Profiling code
	 * in Relay consists of three steps:
	 *
	 *  - Instrument the function to be profiled.
	 *  - Attach handlers to the instrumented function.
	 *  - Run the code which triggers the handlers.
	 *
	 * Handlers attached to instrumented methods are called with an instrumentation
	 * name and a callback that must be synchronously executed:
	 *
	 *   instrumentedMethod.attachHandler(function(name, callback) {
	 *     const start = performance.now();
	 *     callback();
	 *     console.log('Duration', performance.now() - start);
	 *   });
	 *
	 * Handlers for profiles are callbacks that return a stop method:
	 *
	 *   RelayProfiler.attachProfileHandler('profileName', (name, state) => {
	 *     const start = performance.now();
	 *     return function stop(name, state) {
	 *       console.log(`Duration (${name})`, performance.now() - start);
	 *     }
	 *   });
	 *
	 * In order to reduce the impact on performance in production, instrumented
	 * methods and profilers with names that begin with `@` will only be measured
	 * if `__DEV__` is true. This should be used for very hot functions.
	 */
	var RelayProfiler = {

	  /**
	   * Instruments methods on a class or object. This re-assigns the method in
	   * order to preserve function names in stack traces (which are detected by
	   * modern debuggers via heuristics). Example usage:
	   *
	   *   const RelayStore = { primeCache: function() {...} };
	   *   RelayProfiler.instrumentMethods(RelayStore, {
	   *     primeCache: 'RelayStore.primeCache'
	   *   });
	   *
	   *   RelayStore.primeCache.attachHandler(...);
	   *
	   * As a result, the methods will be replaced by wrappers that provide the
	   * `attachHandler` and `detachHandler` methods.
	   */
	  instrumentMethods: function instrumentMethods(object, names) {
	    __webpack_require__(6)(names, function (name, key) {
	      object[key] = RelayProfiler.instrument(name, object[key]);
	    });
	  },


	  /**
	   * Wraps the supplied function with one that provides the `attachHandler` and
	   * `detachHandler` methods. Example usage:
	   *
	   *   const printRelayQuery =
	   *     RelayProfiler.instrument('printRelayQuery', printRelayQuery);
	   *
	   *   printRelayQuery.attachHandler(...);
	   *
	   * NOTE: The instrumentation assumes that no handlers are attached or detached
	   * in the course of executing another handler.
	   */
	  instrument: function instrument(name, originalFunction) {
	    if (!shouldInstrument(name)) {
	      originalFunction.attachHandler = __webpack_require__(25);
	      originalFunction.detachHandler = __webpack_require__(25);
	      return originalFunction;
	    }
	    if (!aggregateHandlersByName.hasOwnProperty(name)) {
	      aggregateHandlersByName[name] = [];
	    }
	    var catchallHandlers = aggregateHandlersByName['*'];
	    var aggregateHandlers = aggregateHandlersByName[name];
	    var handlers = [];
	    var contexts = [];
	    var invokeHandlers = function invokeHandlers() {
	      var context = contexts[contexts.length - 1];
	      if (context[0]) {
	        context[0]--;
	        catchallHandlers[context[0]](name, invokeHandlers);
	      } else if (context[1]) {
	        context[1]--;
	        aggregateHandlers[context[1]](name, invokeHandlers);
	      } else if (context[2]) {
	        context[2]--;
	        handlers[context[2]](name, invokeHandlers);
	      } else {
	        context[5] = originalFunction.apply(context[3], context[4]);
	      }
	    };
	    var instrumentedCallback = function instrumentedCallback() {
	      var returnValue = void 0;
	      if (aggregateHandlers.length === 0 && handlers.length === 0 && catchallHandlers.length === 0) {
	        returnValue = originalFunction.apply(this, arguments);
	      } else {
	        contexts.push([catchallHandlers.length, aggregateHandlers.length, handlers.length, this, arguments, NOT_INVOKED]);
	        invokeHandlers();
	        var context = contexts.pop();
	        returnValue = context[5];
	        if (returnValue === NOT_INVOKED) {
	          throw new Error('RelayProfiler: Handler did not invoke original function.');
	        }
	      }
	      return returnValue;
	    };
	    instrumentedCallback.attachHandler = function (handler) {
	      handlers.push(handler);
	    };
	    instrumentedCallback.detachHandler = function (handler) {
	      __webpack_require__(26)(handlers, handler);
	    };
	    instrumentedCallback.displayName = '(instrumented ' + name + ')';
	    return instrumentedCallback;
	  },


	  /**
	   * Attaches a handler to all methods instrumented with the supplied name.
	   *
	   *   function createRenderer() {
	   *     return RelayProfiler.instrument('render', function() {...});
	   *   }
	   *   const renderA = createRenderer();
	   *   const renderB = createRenderer();
	   *
	   *   // Only profiles `renderA`.
	   *   renderA.attachHandler(...);
	   *
	   *   // Profiles both `renderA` and `renderB`.
	   *   RelayProfiler.attachAggregateHandler('render', ...);
	   *
	   */
	  attachAggregateHandler: function attachAggregateHandler(name, handler) {
	    if (shouldInstrument(name)) {
	      if (!aggregateHandlersByName.hasOwnProperty(name)) {
	        aggregateHandlersByName[name] = [];
	      }
	      aggregateHandlersByName[name].push(handler);
	    }
	  },


	  /**
	   * Detaches a handler attached via `attachAggregateHandler`.
	   */
	  detachAggregateHandler: function detachAggregateHandler(name, handler) {
	    if (shouldInstrument(name)) {
	      if (aggregateHandlersByName.hasOwnProperty(name)) {
	        __webpack_require__(26)(aggregateHandlersByName[name], handler);
	      }
	    }
	  },


	  /**
	   * Instruments profiling for arbitrarily asynchronous code by a name.
	   *
	   *   const timerProfiler = RelayProfiler.profile('timeout');
	   *   setTimeout(function() {
	   *     timerProfiler.stop();
	   *   }, 1000);
	   *
	   *   RelayProfiler.attachProfileHandler('timeout', ...);
	   *
	   * Arbitrary state can also be passed into `profile` as a second argument. The
	   * attached profile handlers will receive this as the second argument.
	   */
	  profile: function profile(name, state) {
	    var hasCatchAllHandlers = profileHandlersByName['*'].length > 0;
	    var hasNamedHandlers = profileHandlersByName.hasOwnProperty(name);
	    if (hasNamedHandlers || hasCatchAllHandlers) {
	      var profileHandlers = hasNamedHandlers && hasCatchAllHandlers ? profileHandlersByName[name].concat(profileHandlersByName['*']) : hasNamedHandlers ? profileHandlersByName[name] : profileHandlersByName['*'];
	      var stopHandlers = void 0;
	      for (var ii = profileHandlers.length - 1; ii >= 0; ii--) {
	        var profileHandler = profileHandlers[ii];
	        var stopHandler = profileHandler(name, state);
	        stopHandlers = stopHandlers || [];
	        stopHandlers.unshift(stopHandler);
	      }
	      return {
	        stop: function stop() {
	          if (stopHandlers) {
	            stopHandlers.forEach(function (stopHandler) {
	              return stopHandler();
	            });
	          }
	        }
	      };
	    }
	    return defaultProfiler;
	  },


	  /**
	   * Attaches a handler to profiles with the supplied name. You can also
	   * attach to the special name '*' which is a catch all.
	   */
	  attachProfileHandler: function attachProfileHandler(name, handler) {
	    if (shouldInstrument(name)) {
	      if (!profileHandlersByName.hasOwnProperty(name)) {
	        profileHandlersByName[name] = [];
	      }
	      profileHandlersByName[name].push(handler);
	    }
	  },


	  /**
	   * Detaches a handler attached via `attachProfileHandler`.
	   */
	  detachProfileHandler: function detachProfileHandler(name, handler) {
	    if (shouldInstrument(name)) {
	      if (profileHandlersByName.hasOwnProperty(name)) {
	        __webpack_require__(26)(profileHandlersByName[name], handler);
	      }
	    }
	  }
	};

	module.exports = RelayProfiler;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayReader
	 * 
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var CONDITION = __webpack_require__(3).CONDITION,
	    FRAGMENT_SPREAD = __webpack_require__(3).FRAGMENT_SPREAD,
	    INLINE_FRAGMENT = __webpack_require__(3).INLINE_FRAGMENT,
	    LINKED_FIELD = __webpack_require__(3).LINKED_FIELD,
	    SCALAR_FIELD = __webpack_require__(3).SCALAR_FIELD;

	var FRAGMENTS_KEY = __webpack_require__(4).FRAGMENTS_KEY,
	    ID_KEY = __webpack_require__(4).ID_KEY,
	    getArgumentValues = __webpack_require__(4).getArgumentValues,
	    getStorageKey = __webpack_require__(4).getStorageKey;

	function read(recordSource, selector) {
	  var dataID = selector.dataID,
	      node = selector.node,
	      variables = selector.variables;

	  var reader = new RelayReader(recordSource, variables);
	  return reader.read(node, dataID);
	}

	/**
	 * @private
	 */

	var RelayReader = function () {
	  function RelayReader(recordSource, variables) {
	    (0, _classCallCheck3['default'])(this, RelayReader);

	    this._recordSource = recordSource;
	    this._seenRecords = {};
	    this._variables = variables;
	  }

	  RelayReader.prototype.read = function read(node, dataID) {
	    var data = this._traverse(node, dataID, null);
	    return {
	      data: data,
	      dataID: dataID,
	      node: node,
	      seenRecords: this._seenRecords,
	      variables: this._variables
	    };
	  };

	  RelayReader.prototype._traverse = function _traverse(node, dataID, prevData) {
	    var record = this._recordSource.get(dataID);
	    this._seenRecords[dataID] = record;
	    if (record == null) {
	      return record;
	    }
	    var data = prevData || {};
	    this._traverseSelections(node.selections, record, data);
	    return data;
	  };

	  RelayReader.prototype._getVariableValue = function _getVariableValue(name) {
	    __webpack_require__(1)(this._variables.hasOwnProperty(name), 'RelayReader(): Undefined variable `%s`.', name);
	    return this._variables[name];
	  };

	  RelayReader.prototype._traverseSelections = function _traverseSelections(selections, record, data) {
	    var _this = this;

	    selections.forEach(function (selection) {
	      if (selection.kind === SCALAR_FIELD) {
	        _this._readScalar(selection, record, data);
	      } else if (selection.kind === LINKED_FIELD) {
	        if (selection.plural) {
	          _this._readPluralLink(selection, record, data);
	        } else {
	          _this._readLink(selection, record, data);
	        }
	      } else if (selection.kind === CONDITION) {
	        var conditionValue = _this._getVariableValue(selection.condition);
	        if (conditionValue === selection.passingValue) {
	          _this._traverseSelections(selection.selections, record, data);
	        }
	      } else if (selection.kind === INLINE_FRAGMENT) {
	        var typeName = __webpack_require__(2).getType(record);
	        if (typeName != null && typeName === selection.type) {
	          _this._traverseSelections(selection.selections, record, data);
	        }
	      } else if (selection.kind === FRAGMENT_SPREAD) {
	        _this._createFragmentPointer(selection, record, data);
	      } else {
	        __webpack_require__(1)(false, 'RelayReader(): Unexpected ast kind `%s`.', selection.kind);
	      }
	    });
	  };

	  RelayReader.prototype._readScalar = function _readScalar(field, record, data) {
	    var applicationName = field.alias || field.name;
	    var storageKey = getStorageKey(field, this._variables);
	    var value = __webpack_require__(2).getValue(record, storageKey);
	    data[applicationName] = value;
	  };

	  RelayReader.prototype._readLink = function _readLink(field, record, data) {
	    var applicationName = field.alias || field.name;
	    var storageKey = getStorageKey(field, this._variables);
	    var linkedID = __webpack_require__(2).getLinkedRecordID(record, storageKey);

	    if (linkedID == null) {
	      data[applicationName] = linkedID;
	      return;
	    }

	    var prevData = data[applicationName];
	    __webpack_require__(1)(prevData == null || typeof prevData === 'object', 'RelayReader(): Expected data for field `%s` on record `%s` ' + 'to be an object, got `%s`.', applicationName, __webpack_require__(2).getDataID(record), prevData);
	    data[applicationName] = this._traverse(field, linkedID, prevData);
	  };

	  RelayReader.prototype._readPluralLink = function _readPluralLink(field, record, data) {
	    var _this2 = this;

	    var applicationName = field.alias || field.name;
	    var storageKey = getStorageKey(field, this._variables);
	    var linkedIDs = __webpack_require__(2).getLinkedRecordIDs(record, storageKey);

	    if (linkedIDs == null) {
	      data[applicationName] = linkedIDs;
	      return;
	    }

	    var prevData = data[applicationName];
	    __webpack_require__(1)(prevData == null || Array.isArray(prevData), 'RelayReader(): Expected data for field `%s` on record `%s` ' + 'to be an array, got `%s`.', applicationName, __webpack_require__(2).getDataID(record), prevData);
	    var linkedArray = prevData || [];
	    linkedIDs.forEach(function (linkedID, nextIndex) {
	      if (linkedID == null) {
	        linkedArray[nextIndex] = linkedID;
	        return;
	      }
	      var prevItem = linkedArray[nextIndex];
	      __webpack_require__(1)(prevItem == null || typeof prevItem === 'object', 'RelayReader(): Expected data for field `%s` on record `%s` ' + 'to be an object, got `%s`.', applicationName, __webpack_require__(2).getDataID(record), prevItem);
	      var linkedItem = _this2._traverse(field, linkedID, prevItem);
	      linkedArray[nextIndex] = linkedItem;
	    });
	    data[applicationName] = linkedArray;
	  };

	  RelayReader.prototype._createFragmentPointer = function _createFragmentPointer(fragmentSpread, record, data) {
	    var fragmentPointers = data[FRAGMENTS_KEY];
	    if (!fragmentPointers) {
	      fragmentPointers = data[FRAGMENTS_KEY] = {};
	    }
	    __webpack_require__(1)(typeof fragmentPointers === 'object' && fragmentPointers, 'RelayReader: Expected fragment spread data to be an object, got `%s`.', fragmentPointers);
	    data[ID_KEY] = data[ID_KEY] || __webpack_require__(2).getDataID(record);
	    var variables = fragmentSpread.args ? getArgumentValues(fragmentSpread.args, this._variables) : {};
	    fragmentPointers[fragmentSpread.name] = variables;
	  };

	  return RelayReader;
	}();

	module.exports = { read: read };

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayViewerHandler
	 * 
	 */

	'use strict';

	var _require = __webpack_require__(4),
	    ROOT_ID = _require.ROOT_ID;

	var VIEWER_ID = __webpack_require__(9)(ROOT_ID, 'viewer');
	var VIEWER_TYPE = 'Viewer';

	/**
	 * A runtime handler for the `viewer` field. The actual viewer record will
	 * *never* be accessed at runtime because all fragments that reference it will
	 * delegate to the handle field. So in order to prevent GC from having to check
	 * both the original server field *and* the handle field (which would be almost
	 * duplicate work), the handler copies server fields and then deletes the server
	 * record.
	 *
	 * NOTE: This means other handles may not be added on viewer, since they may
	 * execute after this handle when the server record is already deleted.
	 */
	function update(store, payload) {
	  var record = store.get(payload.dataID);
	  if (!record) {
	    return;
	  }
	  var serverViewer = record.getLinkedRecord(payload.fieldKey);
	  if (!serverViewer) {
	    record.setValue(null, payload.handleKey);
	    return;
	  }
	  // Server data already has viewer data at `client:root:viewer`, so link the
	  // handle field to the server viewer record.
	  if (serverViewer.getDataID() === VIEWER_ID) {
	    record.setValue(null, payload.fieldKey);
	    record.setLinkedRecord(serverViewer, payload.handleKey);
	    return;
	  }
	  // Other ways to access viewer such as mutations may have a different id for
	  // viewer: synthesize a record at the canonical viewer id, copy its fields
	  // from the server record, and delete the server record link to speed up GC.
	  var clientViewer = store.get(VIEWER_ID) || store.create(VIEWER_ID, VIEWER_TYPE);
	  clientViewer.copyFieldsFrom(serverViewer);
	  record.setValue(null, payload.fieldKey);
	  record.setLinkedRecord(clientViewer, payload.handleKey);

	  // Make sure the root object points to the viewer object as well
	  var root = store.getRoot();
	  root.setLinkedRecord(clientViewer, payload.handleKey);
	}

	module.exports = {
	  VIEWER_ID: VIEWER_ID,
	  update: update
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cloneRelayHandleSourceField
	 * 
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(4),
	    getHandleFilterValues = _require.getHandleFilterValues;

	var LINKED_FIELD = __webpack_require__(3).LINKED_FIELD;

	/**
	 * @private
	 *
	 * Creates a clone of the supplied `handleField` by finding the original linked
	 * field (on which the handle was declared) among the sibling `selections`, and
	 * copying its selections into the clone.
	 */


	function cloneRelayHandleSourceField(handleField, selections, variables) {
	  var sourceField = selections.find(function (source) {
	    return source.kind === LINKED_FIELD && source.name === handleField.name && source.alias === handleField.alias && __webpack_require__(24)(source.args, handleField.args);
	  });
	  __webpack_require__(1)(sourceField && sourceField.kind === LINKED_FIELD, 'cloneRelayHandleSourceField: Expected a corresponding source field for ' + 'handle `%s`.', handleField.handle);
	  var handleKey = __webpack_require__(21)(handleField.handle, handleField.key, handleField.name);
	  if (handleField.filters && handleField.filters.length > 0) {
	    var filterValues = getHandleFilterValues(handleField.args || [], handleField.filters, variables);
	    handleKey = __webpack_require__(7)(handleKey, filterValues);
	  }

	  var clonedField = (0, _extends3['default'])({}, sourceField, {
	    args: null,
	    name: handleKey,
	    storageKey: handleKey
	  });
	  return clonedField;
	}

	module.exports = cloneRelayHandleSourceField;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule stableJSONStringify
	 */

	'use strict';

	/**
	 * Simple recursive stringifier that produces a stable JSON string suitable for
	 * use as a cache key. Does not handle corner-cases such as circular references
	 * or exotic types.
	 */

	var _stringify2 = _interopRequireDefault(__webpack_require__(10));

	var _keys2 = _interopRequireDefault(__webpack_require__(15));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function stableJSONStringify(obj) {
	  if (Array.isArray(obj)) {
	    var result = [];
	    for (var ii = 0; ii < obj.length; ii++) {
	      var value = obj[ii] !== undefined ? obj[ii] : null;
	      result.push(stableJSONStringify(value));
	    }
	    return '[' + result.join(',') + ']';
	  } else if (typeof obj === 'object' && obj) {
	    var _result = [];
	    var keys = (0, _keys2['default'])(obj);
	    keys.sort();
	    for (var _ii = 0; _ii < keys.length; _ii++) {
	      var key = keys[_ii];
	      var _value = stableJSONStringify(obj[key]);
	      _result.push('"' + key + '":' + _value);
	    }
	    return '{' + _result.join(',') + '}';
	  } else {
	    return (0, _stringify2['default'])(obj);
	  }
	}

	module.exports = stableJSONStringify;

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayConnectionInterface
	 */

	'use strict';

	module.exports = __webpack_require__(47);

/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayDefaultHandleKey
	 * 
	 */

	'use strict';

	module.exports = {
	  DEFAULT_HANDLE_KEY: ''
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayDefaultHandlerProvider
	 * 
	 */

	'use strict';

	function RelayDefaultHandlerProvider(handle) {
	  switch (handle) {
	    case 'connection':
	      return __webpack_require__(29);
	    case 'viewer':
	      return __webpack_require__(33);
	  }
	  __webpack_require__(1)(false, 'RelayDefaultHandlerProvider: No handler provided for `%s`.', handle);
	}

	module.exports = RelayDefaultHandlerProvider;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayError
	 * 
	 */

	'use strict';

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(64));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * Factory methods for constructing errors in Relay.
	 */
	var RelayError = {
	  create: function create(name, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    return createError('mustfix', name, format, args);
	  },
	  createWarning: function createWarning(name, format) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	      args[_key2 - 2] = arguments[_key2];
	    }

	    return createError('warn', name, format, args);
	  }
	};

	/**
	 * @private
	 */
	function createError(type, name, format, args) {
	  /*eslint-disable fb-www/sprintf-like-args */
	  var error = new Error(__webpack_require__(67).apply(undefined, [format].concat((0, _toConsumableArray3['default'])(args))));
	  /*eslint-enable fb-www/sprintf-like-args */
	  error.name = name;
	  error.type = type;
	  error.framesToPop = 2;
	  return error;
	}

	module.exports = RelayError;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayMarkSweepStore
	 * 
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	var _set2 = _interopRequireDefault(__webpack_require__(23));

	var _map2 = _interopRequireDefault(__webpack_require__(60));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(4),
	    UNPUBLISH_RECORD_SENTINEL = _require.UNPUBLISH_RECORD_SENTINEL;

	/**
	 * @public
	 *
	 * An implementation of the `Store` interface defined in `RelayStoreTypes`.
	 *
	 * Note that a Store takes ownership of all records provided to it: other
	 * objects may continue to hold a reference to such records but may not mutate
	 * them. The static Relay core is architected to avoid mutating records that may have been
	 * passed to a store: operations that mutate records will either create fresh
	 * records or clone existing records and modify the clones. Record immutability
	 * is also enforced in development mode by freezing all records passed to a store.
	 */
	var RelayMarkSweepStore = function () {
	  function RelayMarkSweepStore(source) {
	    (0, _classCallCheck3['default'])(this, RelayMarkSweepStore);

	    // Prevent mutation of a record from outside the store.
	    if (true) {
	      var storeIDs = source.getRecordIDs();
	      for (var ii = 0; ii < storeIDs.length; ii++) {
	        var record = source.get(storeIDs[ii]);
	        if (record) {
	          __webpack_require__(2).freeze(record);
	        }
	      }
	    }
	    this._hasScheduledGC = false;
	    this._index = 0;
	    this._recordSource = source;
	    this._roots = new _map2['default']();
	    this._subscriptions = new _set2['default']();
	    this._updatedRecordIDs = {};
	  }

	  RelayMarkSweepStore.prototype.getSource = function getSource() {
	    return this._recordSource;
	  };

	  RelayMarkSweepStore.prototype.check = function check(selector) {
	    return __webpack_require__(27).check(this._recordSource, this._recordSource, selector);
	  };

	  RelayMarkSweepStore.prototype.retain = function retain(selector) {
	    var _this = this;

	    var index = this._index++;
	    var dispose = function dispose() {
	      _this._roots['delete'](index);
	      _this._scheduleGC();
	    };
	    this._roots.set(index, selector);
	    return { dispose: dispose };
	  };

	  RelayMarkSweepStore.prototype.lookup = function lookup(selector) {
	    var snapshot = __webpack_require__(32).read(this._recordSource, selector);
	    if (true) {
	      __webpack_require__(20)(snapshot);
	    }
	    return snapshot;
	  };

	  RelayMarkSweepStore.prototype.notify = function notify() {
	    var _this2 = this;

	    this._subscriptions.forEach(function (subscription) {
	      _this2._updateSubscription(subscription);
	    });
	    this._updatedRecordIDs = {};
	  };

	  RelayMarkSweepStore.prototype.publish = function publish(source) {
	    updateTargetFromSource(this._recordSource, source, this._updatedRecordIDs);
	  };

	  RelayMarkSweepStore.prototype.resolve = function resolve(target, selector, callback) {
	    __webpack_require__(27).load(this._recordSource, target, selector, callback);
	  };

	  RelayMarkSweepStore.prototype.subscribe = function subscribe(snapshot, callback) {
	    var _this3 = this;

	    var subscription = { callback: callback, snapshot: snapshot };
	    var dispose = function dispose() {
	      _this3._subscriptions['delete'](subscription);
	    };
	    this._subscriptions.add(subscription);
	    return { dispose: dispose };
	  };

	  RelayMarkSweepStore.prototype._updateSubscription = function _updateSubscription(subscription) {
	    var callback = subscription.callback,
	        snapshot = subscription.snapshot;

	    if (!__webpack_require__(55)(snapshot, this._updatedRecordIDs)) {
	      return;
	    }

	    var _RelayReader$read = __webpack_require__(32).read(this._recordSource, snapshot),
	        data = _RelayReader$read.data,
	        seenRecords = _RelayReader$read.seenRecords;

	    var nextData = __webpack_require__(58)(snapshot.data, data);
	    var nextSnapshot = (0, _extends3['default'])({}, snapshot, {
	      data: nextData,
	      seenRecords: seenRecords
	    });
	    if (true) {
	      __webpack_require__(20)(nextSnapshot);
	    }
	    subscription.snapshot = nextSnapshot;
	    if (nextSnapshot.data !== snapshot.data) {
	      callback(nextSnapshot);
	    }
	  };

	  RelayMarkSweepStore.prototype._scheduleGC = function _scheduleGC() {
	    var _this4 = this;

	    if (this._hasScheduledGC) {
	      return;
	    }
	    this._hasScheduledGC = true;
	    __webpack_require__(66)(function () {
	      _this4._gc();
	      _this4._hasScheduledGC = false;
	    });
	  };

	  RelayMarkSweepStore.prototype._gc = function _gc() {
	    var _this5 = this;

	    var references = new _set2['default']();
	    // Mark all records that are traversable from a root
	    this._roots.forEach(function (selector) {
	      __webpack_require__(50).mark(_this5._recordSource, selector, references);
	    });
	    // Short-circuit if *nothing* is referenced
	    if (!references.size) {
	      this._recordSource.clear();
	      return;
	    }
	    // Evict any unreferenced nodes
	    var storeIDs = this._recordSource.getRecordIDs();
	    for (var ii = 0; ii < storeIDs.length; ii++) {
	      var dataID = storeIDs[ii];
	      if (!references.has(dataID)) {
	        this._recordSource.remove(dataID);
	      }
	    }
	  };

	  return RelayMarkSweepStore;
	}();

	/**
	 * Updates the target with information from source, also updating a mapping of
	 * which records in the target were changed as a result.
	 */


	function updateTargetFromSource(target, source, updatedRecordIDs) {
	  var dataIDs = source.getRecordIDs();
	  for (var ii = 0; ii < dataIDs.length; ii++) {
	    var dataID = dataIDs[ii];
	    var sourceRecord = source.get(dataID);
	    var targetRecord = target.get(dataID);
	    // Prevent mutation of a record from outside the store.
	    if (true) {
	      if (sourceRecord) {
	        __webpack_require__(2).freeze(sourceRecord);
	      }
	    }
	    if (sourceRecord === UNPUBLISH_RECORD_SENTINEL) {
	      // Unpublish a record
	      target.remove(dataID);
	      updatedRecordIDs[dataID] = true;
	    } else if (sourceRecord && targetRecord) {
	      var nextRecord = __webpack_require__(2).update(targetRecord, sourceRecord);
	      if (nextRecord !== targetRecord) {
	        // Prevent mutation of a record from outside the store.
	        if (true) {
	          __webpack_require__(2).freeze(nextRecord);
	        }
	        updatedRecordIDs[dataID] = true;
	        target.set(dataID, nextRecord);
	      }
	    } else if (sourceRecord === null) {
	      target['delete'](dataID);
	      if (targetRecord !== null) {
	        updatedRecordIDs[dataID] = true;
	      }
	    } else if (sourceRecord) {
	      target.set(dataID, sourceRecord);
	      updatedRecordIDs[dataID] = true;
	    } // don't add explicit undefined
	  }
	}

	__webpack_require__(31).instrumentMethods(RelayMarkSweepStore.prototype, {
	  lookup: 'RelayMarkSweepStore.prototype.lookup',
	  notify: 'RelayMarkSweepStore.prototype.notify',
	  publish: 'RelayMarkSweepStore.prototype.publish',
	  retain: 'RelayMarkSweepStore.prototype.retain',
	  subscribe: 'RelayMarkSweepStore.prototype.subscribe'
	});

	module.exports = RelayMarkSweepStore;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayModernEnvironment
	 * 
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var RelayModernEnvironment = function () {
	  function RelayModernEnvironment(config) {
	    (0, _classCallCheck3['default'])(this, RelayModernEnvironment);

	    var handlerProvider = config.handlerProvider ? config.handlerProvider : __webpack_require__(40);
	    this._network = config.network;
	    this._publishQueue = new (__webpack_require__(48))(config.store, handlerProvider);
	    this._store = config.store;
	    this.unstable_internal = __webpack_require__(8);
	  }

	  RelayModernEnvironment.prototype.getStore = function getStore() {
	    return this._store;
	  };

	  RelayModernEnvironment.prototype.applyUpdate = function applyUpdate(updater) {
	    var _this = this;

	    var optimisticUpdate = { storeUpdater: updater };
	    var dispose = function dispose() {
	      _this._publishQueue.revertUpdate(optimisticUpdate);
	      _this._publishQueue.run();
	    };
	    this._publishQueue.applyUpdate(optimisticUpdate);
	    this._publishQueue.run();
	    return { dispose: dispose };
	  };

	  RelayModernEnvironment.prototype.check = function check(selector) {
	    return this._store.check(selector);
	  };

	  RelayModernEnvironment.prototype.commitPayload = function commitPayload(selector, payload) {
	    // Do not handle stripped nulls when commiting a payload
	    var relayPayload = __webpack_require__(22)(selector, payload);
	    this._publishQueue.commitPayload(selector, relayPayload);
	    this._publishQueue.run();
	  };

	  RelayModernEnvironment.prototype.commitUpdate = function commitUpdate(updater) {
	    this._publishQueue.commitUpdate(updater);
	    this._publishQueue.run();
	  };

	  RelayModernEnvironment.prototype.lookup = function lookup(selector) {
	    return this._store.lookup(selector);
	  };

	  RelayModernEnvironment.prototype.subscribe = function subscribe(snapshot, callback) {
	    return this._store.subscribe(snapshot, callback);
	  };

	  RelayModernEnvironment.prototype.retain = function retain(selector) {
	    return this._store.retain(selector);
	  };

	  RelayModernEnvironment.prototype.sendQuery = function sendQuery(_ref) {
	    var _this2 = this;

	    var cacheConfig = _ref.cacheConfig,
	        onCompleted = _ref.onCompleted,
	        onError = _ref.onError,
	        onNext = _ref.onNext,
	        operation = _ref.operation;

	    var isDisposed = false;
	    var dispose = function dispose() {
	      isDisposed = true;
	    };
	    this._network.request(operation.node, operation.variables, cacheConfig).then(function (payload) {
	      if (isDisposed) {
	        return;
	      }
	      _this2._publishQueue.commitPayload(operation.fragment, payload);
	      _this2._publishQueue.run();
	      onNext && onNext(payload);
	      onCompleted && onCompleted();
	    })['catch'](function (error) {
	      if (isDisposed) {
	        return;
	      }
	      onError && onError(error);
	    });
	    return { dispose: dispose };
	  };

	  RelayModernEnvironment.prototype.streamQuery = function streamQuery(_ref2) {
	    var _this3 = this;

	    var cacheConfig = _ref2.cacheConfig,
	        onCompleted = _ref2.onCompleted,
	        onError = _ref2.onError,
	        _onNext = _ref2.onNext,
	        operation = _ref2.operation;

	    return this._network.requestStream(operation.node, operation.variables, cacheConfig, {
	      onCompleted: onCompleted,
	      onError: onError,
	      onNext: function onNext(payload) {
	        _this3._publishQueue.commitPayload(operation.fragment, payload);
	        _this3._publishQueue.run();
	        _onNext && _onNext(payload);
	      }
	    });
	  };

	  RelayModernEnvironment.prototype.sendMutation = function sendMutation(_ref3) {
	    var _this4 = this;

	    var onCompleted = _ref3.onCompleted,
	        onError = _ref3.onError,
	        operation = _ref3.operation,
	        optimisticResponse = _ref3.optimisticResponse,
	        optimisticUpdater = _ref3.optimisticUpdater,
	        updater = _ref3.updater,
	        uploadables = _ref3.uploadables;

	    var hasOptimisticUpdate = optimisticResponse || optimisticUpdater;
	    var optimisticUpdate = {
	      selector: operation.fragment,
	      selectorStoreUpdater: optimisticUpdater,
	      response: optimisticResponse ? optimisticResponse() : null
	    };
	    if (hasOptimisticUpdate) {
	      this._publishQueue.applyUpdate(optimisticUpdate);
	      this._publishQueue.run();
	    }
	    var isDisposed = false;
	    var dispose = function dispose() {
	      if (hasOptimisticUpdate) {
	        _this4._publishQueue.revertUpdate(optimisticUpdate);
	        _this4._publishQueue.run();
	        hasOptimisticUpdate = false;
	      }
	      isDisposed = true;
	    };
	    this._network.request(operation.node, operation.variables, { force: true }, uploadables).then(function (payload) {
	      if (isDisposed) {
	        return;
	      }
	      if (hasOptimisticUpdate) {
	        _this4._publishQueue.revertUpdate(optimisticUpdate);
	      }
	      _this4._publishQueue.commitPayload(operation.fragment, payload, updater);
	      _this4._publishQueue.run();
	      onCompleted && onCompleted(payload.errors);
	    })['catch'](function (error) {
	      if (isDisposed) {
	        return;
	      }
	      if (hasOptimisticUpdate) {
	        _this4._publishQueue.revertUpdate(optimisticUpdate);
	      }
	      _this4._publishQueue.run();
	      onError && onError(error);
	    });
	    return { dispose: dispose };
	  };

	  RelayModernEnvironment.prototype.sendSubscription = function sendSubscription(_ref4) {
	    var _this5 = this;

	    var onCompleted = _ref4.onCompleted,
	        _onNext2 = _ref4.onNext,
	        onError = _ref4.onError,
	        operation = _ref4.operation,
	        updater = _ref4.updater;

	    return this._network.requestStream(operation.node, operation.variables, { force: true }, {
	      onCompleted: onCompleted,
	      onError: onError,
	      onNext: function onNext(payload) {
	        _this5._publishQueue.commitPayload(operation.fragment, payload, updater);
	        _this5._publishQueue.run();
	        _onNext2 && _onNext2(payload);
	      }
	    });
	  };

	  return RelayModernEnvironment;
	}();

	// Add a sigil for detection by `isRelayModernEnvironment()` to avoid a
	// realm-specific instanceof check, and to aid in module tree-shaking to
	// avoid requiring all of RelayRuntime just to detect its environment.


	RelayModernEnvironment.prototype['@@RelayModernEnvironment'] = true;

	module.exports = RelayModernEnvironment;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayModernFragmentSpecResolver
	 * 
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(30),
	    areEqualSelectors = _require.areEqualSelectors,
	    getSelectorsFromObject = _require.getSelectorsFromObject;

	/**
	 * A utility for resolving and subscribing to the results of a fragment spec
	 * (key -> fragment mapping) given some "props" that determine the root ID
	 * and variables to use when reading each fragment. When props are changed via
	 * `setProps()`, the resolver will update its results and subscriptions
	 * accordingly. Internally, the resolver:
	 * - Converts the fragment map & props map into a map of `Selector`s.
	 * - Removes any resolvers for any props that became null.
	 * - Creates resolvers for any props that became non-null.
	 * - Updates resolvers with the latest props.
	 *
	 * This utility is implemented as an imperative, stateful API for performance
	 * reasons: reusing previous resolvers, callback functions, and subscriptions
	 * all helps to reduce object allocation and thereby decrease GC time.
	 *
	 * The `resolve()` function is also lazy and memoized: changes in the store mark
	 * the resolver as stale and notify the caller, and the actual results are
	 * recomputed the first time `resolve()` is called.
	 */
	var RelayModernFragmentSpecResolver = function () {
	  function RelayModernFragmentSpecResolver(context, fragments, props, callback) {
	    var _this = this;

	    (0, _classCallCheck3['default'])(this, RelayModernFragmentSpecResolver);

	    this._onChange = function () {
	      _this._stale = true;
	      _this._callback();
	    };

	    this._callback = callback;
	    this._context = context;
	    this._data = {};
	    this._fragments = fragments;
	    this._props = props;
	    this._resolvers = {};
	    this._stale = false;

	    this.setProps(props);
	  }

	  RelayModernFragmentSpecResolver.prototype.dispose = function dispose() {
	    __webpack_require__(6)(this._resolvers, disposeCallback);
	  };

	  RelayModernFragmentSpecResolver.prototype.resolve = function resolve() {
	    var _this2 = this;

	    if (this._stale) {
	      // Avoid mapping the object multiple times, which could occur if data for
	      // multiple keys changes in the same event loop.
	      var prevData = this._data;
	      var nextData = void 0;
	      __webpack_require__(6)(this._resolvers, function (resolver, key) {
	        var prevItem = prevData[key];
	        if (resolver) {
	          var nextItem = resolver.resolve();
	          if (nextData || nextItem !== prevItem) {
	            nextData = nextData || (0, _extends3['default'])({}, prevData);
	            nextData[key] = nextItem;
	          }
	        } else {
	          var prop = _this2._props[key];
	          var _nextItem = prop !== undefined ? prop : null;
	          if (nextData || !__webpack_require__(57)(_nextItem, prevItem)) {
	            nextData = nextData || (0, _extends3['default'])({}, prevData);
	            nextData[key] = _nextItem;
	          }
	        }
	      });
	      this._data = nextData || prevData;
	      this._stale = false;
	    }
	    return this._data;
	  };

	  RelayModernFragmentSpecResolver.prototype.setProps = function setProps(props) {
	    var _this3 = this;

	    var selectors = getSelectorsFromObject(this._context.variables, this._fragments, props);
	    __webpack_require__(6)(selectors, function (selector, key) {
	      var resolver = _this3._resolvers[key];
	      if (selector == null) {
	        if (resolver != null) {
	          resolver.dispose();
	        }
	        resolver = null;
	      } else if (Array.isArray(selector)) {
	        if (resolver == null) {
	          resolver = new SelectorListResolver(_this3._context.environment, selector, _this3._onChange);
	        } else {
	          __webpack_require__(1)(resolver instanceof SelectorListResolver, 'RelayModernFragmentSpecResolver: Expected prop `%s` to always be an array.', key);
	          resolver.setSelectors(selector);
	        }
	      } else {
	        if (resolver == null) {
	          resolver = new SelectorResolver(_this3._context.environment, selector, _this3._onChange);
	        } else {
	          __webpack_require__(1)(resolver instanceof SelectorResolver, 'RelayModernFragmentSpecResolver: Expected prop `%s` to always be an object.', key);
	          resolver.setSelector(selector);
	        }
	      }
	      _this3._resolvers[key] = resolver;
	    });
	    this._props = props;
	    this._stale = true;
	  };

	  RelayModernFragmentSpecResolver.prototype.setVariables = function setVariables(variables) {
	    __webpack_require__(6)(this._resolvers, function (resolver) {
	      if (resolver) {
	        resolver.setVariables(variables);
	      }
	    });
	    this._stale = true;
	  };

	  return RelayModernFragmentSpecResolver;
	}();

	/**
	 * A resolver for a single Selector.
	 */


	var SelectorResolver = function () {
	  function SelectorResolver(environment, selector, callback) {
	    (0, _classCallCheck3['default'])(this, SelectorResolver);

	    _initialiseProps.call(this);

	    var snapshot = environment.lookup(selector);
	    this._callback = callback;
	    this._data = snapshot.data;
	    this._environment = environment;
	    this._selector = selector;
	    this._subscription = environment.subscribe(snapshot, this._onChange);
	  }

	  SelectorResolver.prototype.dispose = function dispose() {
	    if (this._subscription) {
	      this._subscription.dispose();
	      this._subscription = null;
	    }
	  };

	  SelectorResolver.prototype.resolve = function resolve() {
	    return this._data;
	  };

	  SelectorResolver.prototype.setSelector = function setSelector(selector) {
	    if (this._subscription != null && areEqualSelectors(selector, this._selector)) {
	      return;
	    }
	    this.dispose();
	    var snapshot = this._environment.lookup(selector);
	    this._data = snapshot.data;
	    this._selector = selector;
	    this._subscription = this._environment.subscribe(snapshot, this._onChange);
	  };

	  SelectorResolver.prototype.setVariables = function setVariables(variables) {
	    var selector = (0, _extends3['default'])({}, this._selector, {
	      variables: variables
	    });
	    this.setSelector(selector);
	  };

	  return SelectorResolver;
	}();

	/**
	 * A resolver for an array of Selectors.
	 */


	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;

	  this._onChange = function (snapshot) {
	    _this5._data = snapshot.data;
	    _this5._callback();
	  };
	};

	var SelectorListResolver = function () {
	  function SelectorListResolver(environment, selectors, callback) {
	    var _this4 = this;

	    (0, _classCallCheck3['default'])(this, SelectorListResolver);

	    this._onChange = function (data) {
	      _this4._stale = true;
	      _this4._callback();
	    };

	    this._callback = callback;
	    this._data = [];
	    this._environment = environment;
	    this._resolvers = [];
	    this._stale = true;

	    this.setSelectors(selectors);
	  }

	  SelectorListResolver.prototype.dispose = function dispose() {
	    this._resolvers.forEach(disposeCallback);
	  };

	  SelectorListResolver.prototype.resolve = function resolve() {
	    if (this._stale) {
	      // Avoid mapping the array multiple times, which could occur if data for
	      // multiple indices changes in the same event loop.
	      var prevData = this._data;
	      var nextData = void 0;
	      for (var ii = 0; ii < this._resolvers.length; ii++) {
	        var prevItem = prevData[ii];
	        var nextItem = this._resolvers[ii].resolve();
	        if (nextData || nextItem !== prevItem) {
	          nextData = nextData || prevData.slice(0, ii);
	          nextData.push(nextItem);
	        }
	      }
	      this._data = nextData || prevData;
	      this._stale = false;
	    }
	    return this._data;
	  };

	  SelectorListResolver.prototype.setSelectors = function setSelectors(selectors) {
	    while (this._resolvers.length > selectors.length) {
	      var resolver = this._resolvers.pop();
	      resolver.dispose();
	    }
	    for (var ii = 0; ii < selectors.length; ii++) {
	      if (ii < this._resolvers.length) {
	        this._resolvers[ii].setSelector(selectors[ii]);
	      } else {
	        this._resolvers[ii] = new SelectorResolver(this._environment, selectors[ii], this._onChange);
	      }
	    }
	    this._stale = true;
	  };

	  SelectorListResolver.prototype.setVariables = function setVariables(variables) {
	    this._resolvers.forEach(function (resolver) {
	      return resolver.setVariables(variables);
	    });
	    this._stale = true;
	  };

	  return SelectorListResolver;
	}();

	function disposeCallback(disposable) {
	  disposable && disposable.dispose();
	}

	module.exports = RelayModernFragmentSpecResolver;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayModernOperationSelector
	 * 
	 */

	'use strict';

	var _require = __webpack_require__(28),
	    getOperationVariables = _require.getOperationVariables;

	var _require2 = __webpack_require__(4),
	    ROOT_ID = _require2.ROOT_ID;

	/**
	 * Creates an instance of the `OperationSelector` type defined in
	 * `RelayStoreTypes` given an operation and some variables. The input variables
	 * are filtered to exclude variables that do not match defined arguments on the
	 * operation, and default values are populated for null values.
	 */
	function createOperationSelector(operation, variables) {
	  var operationVariables = getOperationVariables(operation, variables);
	  var dataID = ROOT_ID;
	  return {
	    fragment: {
	      dataID: dataID,
	      node: operation.fragment,
	      variables: operationVariables
	    },
	    node: operation,
	    root: {
	      dataID: dataID,
	      node: operation.query,
	      variables: operationVariables
	    },
	    variables: operationVariables
	  };
	}

	module.exports = {
	  createOperationSelector: createOperationSelector
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayNetwork
	 * 
	 */

	'use strict';

	var _require = __webpack_require__(4),
	    ROOT_ID = _require.ROOT_ID;

	/**
	 * Creates an implementation of the `Network` interface defined in
	 * `RelayNetworkTypes` given a single `fetch` function.
	 */
	function create(fetch, subscribe) {
	  function request(operation, variables, cacheConfig, uploadables) {
	    return fetch(operation, variables, cacheConfig, uploadables).then(function (payload) {
	      return normalizePayload(operation, variables, payload);
	    });
	  }

	  function requestStream(operation, variables, cacheConfig, _ref) {
	    var onCompleted = _ref.onCompleted,
	        onError = _ref.onError,
	        _onNext = _ref.onNext;

	    if (operation.query.operation === 'subscription') {
	      __webpack_require__(1)(subscribe, 'The default network layer does not support GraphQL Subscriptions. To use ' + 'Subscriptions, provide a custom network layer.');
	      return subscribe(operation, variables, null, {
	        onCompleted: onCompleted,
	        onError: onError,
	        onNext: function onNext(payload) {
	          var relayPayload = void 0;
	          try {
	            relayPayload = normalizePayload(operation, variables, payload);
	          } catch (err) {
	            onError && onError(err);
	            return;
	          }
	          _onNext && _onNext(relayPayload);
	        }
	      });
	    }

	    var pollInterval = cacheConfig && cacheConfig.poll;
	    if (pollInterval != null) {
	      return doFetchWithPolling(request, operation, variables, { onCompleted: onCompleted, onError: onError, onNext: _onNext }, pollInterval);
	    }

	    var isDisposed = false;
	    fetch(operation, variables, cacheConfig).then(function (payload) {
	      if (isDisposed) {
	        return;
	      }
	      var relayPayload = void 0;
	      try {
	        relayPayload = normalizePayload(operation, variables, payload);
	      } catch (err) {
	        onError && onError(err);
	        return;
	      }
	      _onNext && _onNext(relayPayload);
	      onCompleted && onCompleted();
	    }, function (error) {
	      if (isDisposed) {
	        return;
	      }
	      onError && onError(error);
	    })['catch'](rethrow);
	    return {
	      dispose: function dispose() {
	        isDisposed = true;
	      }
	    };
	  }

	  return {
	    fetch: fetch,
	    request: request,
	    requestStream: requestStream
	  };
	}

	function doFetchWithPolling(request, operation, variables, _ref2, pollInterval) {
	  var onCompleted = _ref2.onCompleted,
	      onError = _ref2.onError,
	      onNext = _ref2.onNext;

	  __webpack_require__(1)(pollInterval > 0, 'RelayNetwork: Expected pollInterval to be positive, got `%s`.', pollInterval);
	  var isDisposed = false;
	  var timeout = null;
	  var dispose = function dispose() {
	    if (!isDisposed) {
	      isDisposed = true;
	      timeout && clearTimeout(timeout);
	    }
	  };
	  function poll() {
	    request(operation, variables, { force: true }).then(function (payload) {
	      onNext && onNext(payload);
	      timeout = setTimeout(poll, pollInterval);
	    }, function (error) {
	      dispose();
	      onError && onError(error);
	    });
	  }
	  timeout = setTimeout(poll, pollInterval);

	  return { dispose: dispose };
	}

	function normalizePayload(operation, variables, payload) {
	  var data = payload.data,
	      errors = payload.errors;

	  if (data != null) {
	    return __webpack_require__(22)({
	      dataID: ROOT_ID,
	      node: operation.query,
	      variables: variables
	    }, data, errors, { handleStrippedNulls: true });
	  }
	  var error = __webpack_require__(41).create('RelayNetwork', 'No data returned for operation `%s`, got error(s):\n%s\n\nSee the error ' + '`source` property for more information.', operation.name, errors ? errors.map(function (_ref3) {
	    var message = _ref3.message;
	    return message;
	  }).join('\n') : '(No errors)');
	  error.source = { errors: errors, operation: operation, variables: variables };
	  throw error;
	}

	function rethrow(err) {
	  setTimeout(function () {
	    throw err;
	  }, 0);
	}

	module.exports = { create: create };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayOSSConnectionInterface
	 * 
	 */

	'use strict';

	var _defineProperty3 = _interopRequireDefault(__webpack_require__(63));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var CLIENT_MUTATION_ID = 'clientMutationId';
	var CONNECTION_CALLS = {
	  'after': true,
	  'before': true,
	  'find': true,
	  'first': true,
	  'last': true,
	  'surrounds': true
	};
	var CURSOR = 'cursor';
	var EDGES = 'edges';
	var END_CURSOR = 'endCursor';
	var HAS_NEXT_PAGE = 'hasNextPage';
	var HAS_PREV_PAGE = 'hasPreviousPage';
	var NODE = 'node';
	var PAGE_INFO = 'pageInfo';
	var PAGE_INFO_TYPE = 'PageInfo';
	var REQUIRED_RANGE_CALLS = {
	  'find': true,
	  'first': true,
	  'last': true
	};
	var START_CURSOR = 'startCursor';

	/**
	 * @internal
	 *
	 * Defines logic relevant to the informal "Connection" GraphQL interface.
	 */
	var RelayOSSConnectionInterface = {
	  CLIENT_MUTATION_ID: CLIENT_MUTATION_ID,
	  CURSOR: CURSOR,
	  EDGES: EDGES,
	  END_CURSOR: END_CURSOR,
	  HAS_NEXT_PAGE: HAS_NEXT_PAGE,
	  HAS_PREV_PAGE: HAS_PREV_PAGE,
	  NODE: NODE,
	  PAGE_INFO: PAGE_INFO,
	  PAGE_INFO_TYPE: PAGE_INFO_TYPE,
	  START_CURSOR: START_CURSOR,

	  /**
	   * Whether `edges` fields are expected to have `source` fields.
	   */
	  EDGES_HAVE_SOURCE_FIELD: false,

	  /**
	   * Checks whether a call exists strictly to encode which parts of a connection
	   * to fetch. Fields that only differ by connection call values should have the
	   * same identity.
	   */
	  isConnectionCall: function isConnectionCall(call) {
	    return CONNECTION_CALLS.hasOwnProperty(call.name);
	  },


	  /**
	   * Checks whether a set of calls on a connection supply enough information to
	   * fetch the range fields (i.e. `edges` and `page_info`).
	   */
	  hasRangeCalls: function hasRangeCalls(calls) {
	    return calls.some(function (call) {
	      return REQUIRED_RANGE_CALLS.hasOwnProperty(call.name);
	    });
	  },


	  /**
	   * Gets a default record representing a connection's `PAGE_INFO`.
	   */
	  getDefaultPageInfo: function getDefaultPageInfo() {
	    var _ref;

	    return _ref = {}, (0, _defineProperty3['default'])(_ref, END_CURSOR, undefined), (0, _defineProperty3['default'])(_ref, HAS_NEXT_PAGE, false), (0, _defineProperty3['default'])(_ref, HAS_PREV_PAGE, false), (0, _defineProperty3['default'])(_ref, START_CURSOR, undefined), _ref;
	  }
	};

	module.exports = RelayOSSConnectionInterface;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule RelayPublishQueue
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	var _set2 = _interopRequireDefault(__webpack_require__(23));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Coordinates the concurrent modification of a `Store` due to optimistic and
	 * non-revertable client updates and server payloads:
	 * - Applies optimistic updates.
	 * - Reverts optimistic updates, rebasing any subsequent updates.
	 * - Commits client updates (typically for client schema extensions).
	 * - Commits server updates:
	 *   - Normalizes query/mutation/subscription responses.
	 *   - Executes handlers for "handle" fields.
	 *   - Reverts and reapplies pending optimistic updates.
	 */
	var RelayPublishQueue = function () {
	  // Optimistic updaters to add with the next `run()`.

	  // Payloads to apply with the next `run()`.


	  // A "negative" of all applied updaters. It can be published to the store to
	  // undo them in order to re-apply some of them for a rebase.
	  function RelayPublishQueue(store, handlerProvider) {
	    (0, _classCallCheck3['default'])(this, RelayPublishQueue);

	    this._backup = new (__webpack_require__(12))();
	    this._handlerProvider = handlerProvider || null;
	    this._pendingBackupRebase = false;
	    this._pendingPayloads = new _set2['default']();
	    this._pendingUpdaters = new _set2['default']();
	    this._pendingOptimisticUpdates = new _set2['default']();
	    this._store = store;
	    this._appliedOptimisticUpdates = new _set2['default']();
	  }

	  /**
	   * Schedule applying an optimistic updates on the next `run()`.
	   */

	  // Optimistic updaters that are already added and might be rerun in order to
	  // rebase them.

	  // Updaters to apply with the next `run()`. These mutate the store and should
	  // typically only mutate client schema extensions.

	  // True if the next `run()` should apply the backup and rerun all optimistic
	  // updates performing a rebase.


	  RelayPublishQueue.prototype.applyUpdate = function applyUpdate(updater) {
	    __webpack_require__(1)(!this._appliedOptimisticUpdates.has(updater) && !this._pendingOptimisticUpdates.has(updater), 'RelayPublishQueue: Cannot apply the same update function more than ' + 'once concurrently.');
	    this._pendingOptimisticUpdates.add(updater);
	  };

	  /**
	   * Schedule reverting an optimistic updates on the next `run()`.
	   */


	  RelayPublishQueue.prototype.revertUpdate = function revertUpdate(updater) {
	    if (this._pendingOptimisticUpdates.has(updater)) {
	      // Reverted before it was applied
	      this._pendingOptimisticUpdates['delete'](updater);
	    } else if (this._appliedOptimisticUpdates.has(updater)) {
	      this._pendingBackupRebase = true;
	      this._appliedOptimisticUpdates['delete'](updater);
	    }
	  };

	  /**
	   * Schedule a revert of all optimistic updates on the next `run()`.
	   */


	  RelayPublishQueue.prototype.revertAll = function revertAll() {
	    this._pendingBackupRebase = true;
	    this._pendingOptimisticUpdates.clear();
	    this._appliedOptimisticUpdates.clear();
	  };

	  /**
	   * Schedule applying a payload to the store on the next `run()`.
	   */


	  RelayPublishQueue.prototype.commitPayload = function commitPayload(selector, _ref, updater) {
	    var fieldPayloads = _ref.fieldPayloads,
	        source = _ref.source;

	    this._pendingBackupRebase = true;
	    this._pendingPayloads.add({ fieldPayloads: fieldPayloads, selector: selector, source: source, updater: updater });
	  };

	  /**
	   * Schedule an updater to mutate the store on the next `run()` typically to
	   * update client schema fields.
	   */


	  RelayPublishQueue.prototype.commitUpdate = function commitUpdate(updater) {
	    this._pendingBackupRebase = true;
	    this._pendingUpdaters.add(updater);
	  };

	  /**
	   * Execute all queued up operations from the other public methods.
	   */


	  RelayPublishQueue.prototype.run = function run() {
	    if (this._pendingBackupRebase && this._backup.size()) {
	      this._store.publish(this._backup);
	      this._backup = new (__webpack_require__(12))();
	    }
	    this._commitPayloads();
	    this._commitUpdaters();
	    this._applyUpdates();
	    this._pendingBackupRebase = false;
	    this._store.notify();
	  };

	  RelayPublishQueue.prototype._commitPayloads = function _commitPayloads() {
	    var _this = this;

	    if (!this._pendingPayloads.size) {
	      return;
	    }
	    this._pendingPayloads.forEach(function (_ref2) {
	      var fieldPayloads = _ref2.fieldPayloads,
	          selector = _ref2.selector,
	          source = _ref2.source,
	          updater = _ref2.updater;

	      var mutator = new (__webpack_require__(17))(_this._store.getSource(), source);
	      var store = new (__webpack_require__(18))(mutator);
	      var selectorStore = new (__webpack_require__(19))(store, selector);
	      if (fieldPayloads && fieldPayloads.length) {
	        fieldPayloads.forEach(function (fieldPayload) {
	          var handler = _this._handlerProvider && _this._handlerProvider(fieldPayload.handle);
	          __webpack_require__(1)(handler, 'RelayModernEnvironment: Expected a handler to be provided for ' + 'handle `%s`.', fieldPayload.handle);
	          handler.update(store, fieldPayload);
	        });
	      }
	      if (updater) {
	        updater(selectorStore);
	      }
	      // Publish the server data first so that it is reflected in the mutation
	      // backup created during the rebase
	      _this._store.publish(source);
	    });
	    this._pendingPayloads.clear();
	  };

	  RelayPublishQueue.prototype._commitUpdaters = function _commitUpdaters() {
	    var _this2 = this;

	    if (!this._pendingUpdaters.size) {
	      return;
	    }
	    var sink = new (__webpack_require__(12))();
	    this._pendingUpdaters.forEach(function (updater) {
	      var mutator = new (__webpack_require__(17))(_this2._store.getSource(), sink);
	      var store = new (__webpack_require__(18))(mutator);
	      updater(store);
	    });
	    this._store.publish(sink);
	    this._pendingUpdaters.clear();
	  };

	  RelayPublishQueue.prototype._applyUpdates = function _applyUpdates() {
	    var _this3 = this;

	    if (this._pendingOptimisticUpdates.size || this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
	      var sink = new (__webpack_require__(12))();
	      var mutator = new (__webpack_require__(17))(this._store.getSource(), sink, this._backup);
	      var store = new (__webpack_require__(18))(mutator);

	      // rerun all updaters in case we are running a rebase
	      if (this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
	        this._appliedOptimisticUpdates.forEach(function (optimisticUpdate) {
	          if (optimisticUpdate.selector) {
	            var _selectorStoreUpdater = optimisticUpdate.selectorStoreUpdater,
	                _selector = optimisticUpdate.selector,
	                _response = optimisticUpdate.response;

	            var selectorStore = store.commitPayload(_selector, _response);
	            _selectorStoreUpdater && _selectorStoreUpdater(selectorStore);
	          } else {
	            var _storeUpdater = optimisticUpdate.storeUpdater;

	            _storeUpdater(store);
	          }
	        });
	      }

	      // apply any new updaters
	      if (this._pendingOptimisticUpdates.size) {
	        this._pendingOptimisticUpdates.forEach(function (optimisticUpdate) {
	          if (optimisticUpdate.selector) {
	            var _selectorStoreUpdater2 = optimisticUpdate.selectorStoreUpdater,
	                _selector2 = optimisticUpdate.selector,
	                _response2 = optimisticUpdate.response;

	            var selectorStore = store.commitPayload(_selector2, _response2);
	            _selectorStoreUpdater2 && _selectorStoreUpdater2(selectorStore);
	          } else {
	            var _storeUpdater2 = optimisticUpdate.storeUpdater;

	            _storeUpdater2(store);
	          }
	          _this3._appliedOptimisticUpdates.add(optimisticUpdate);
	        });
	        this._pendingOptimisticUpdates.clear();
	      }

	      this._store.publish(sink);
	    }
	  };

	  return RelayPublishQueue;
	}();

	module.exports = RelayPublishQueue;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayRecordProxy
	 * 
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	var _stringify2 = _interopRequireDefault(__webpack_require__(10));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * @internal
	 *
	 * A helper class for manipulating a given record from a record source via an
	 * imperative/OO-style API.
	 */
	var RelayRecordProxy = function () {
	  function RelayRecordProxy(source, mutator, dataID) {
	    (0, _classCallCheck3['default'])(this, RelayRecordProxy);

	    this._dataID = dataID;
	    this._mutator = mutator;
	    this._source = source;
	  }

	  RelayRecordProxy.prototype.copyFieldsFrom = function copyFieldsFrom(source) {
	    this._mutator.copyFields(source.getDataID(), this._dataID);
	  };

	  RelayRecordProxy.prototype.getDataID = function getDataID() {
	    return this._dataID;
	  };

	  RelayRecordProxy.prototype.getType = function getType() {
	    var type = this._mutator.getType(this._dataID);
	    __webpack_require__(1)(type != null, 'RelayRecordProxy: Cannot get the type of deleted record `%s`.', this._dataID);
	    return type;
	  };

	  RelayRecordProxy.prototype.getValue = function getValue(name, args) {
	    var storageKey = args ? __webpack_require__(7)(name, args) : name;
	    return this._mutator.getValue(this._dataID, storageKey);
	  };

	  RelayRecordProxy.prototype.setValue = function setValue(value, name, args) {
	    __webpack_require__(1)(value == null || typeof value !== 'object', 'RelayRecordProxy#setValue(): Expected a scalar value, got `%s`.', (0, _stringify2['default'])(value));
	    var storageKey = args ? __webpack_require__(7)(name, args) : name;
	    this._mutator.setValue(this._dataID, storageKey, value);
	    return this;
	  };

	  RelayRecordProxy.prototype.getLinkedRecord = function getLinkedRecord(name, args) {
	    var storageKey = args ? __webpack_require__(7)(name, args) : name;
	    var linkedID = this._mutator.getLinkedRecordID(this._dataID, storageKey);
	    return linkedID != null ? this._source.get(linkedID) : linkedID;
	  };

	  RelayRecordProxy.prototype.setLinkedRecord = function setLinkedRecord(record, name, args) {
	    __webpack_require__(1)(record instanceof RelayRecordProxy, 'RelayRecordProxy#setLinkedRecord(): Expected a record, got `%s`.', record);
	    var storageKey = args ? __webpack_require__(7)(name, args) : name;
	    var linkedID = record.getDataID();
	    this._mutator.setLinkedRecordID(this._dataID, storageKey, linkedID);
	    return this;
	  };

	  RelayRecordProxy.prototype.getOrCreateLinkedRecord = function getOrCreateLinkedRecord(name, typeName, args) {
	    var linkedRecord = this.getLinkedRecord(name, args);
	    if (!linkedRecord) {
	      var storageKey = args ? __webpack_require__(7)(name, args) : name;
	      var clientID = __webpack_require__(9)(this.getDataID(), storageKey);
	      linkedRecord = this._source.create(clientID, typeName);
	      this.setLinkedRecord(linkedRecord, name, args);
	    }
	    return linkedRecord;
	  };

	  RelayRecordProxy.prototype.getLinkedRecords = function getLinkedRecords(name, args) {
	    var _this = this;

	    var storageKey = args ? __webpack_require__(7)(name, args) : name;
	    var linkedIDs = this._mutator.getLinkedRecordIDs(this._dataID, storageKey);
	    if (linkedIDs == null) {
	      return linkedIDs;
	    }
	    return linkedIDs.map(function (linkedID) {
	      return linkedID != null ? _this._source.get(linkedID) : linkedID;
	    });
	  };

	  RelayRecordProxy.prototype.setLinkedRecords = function setLinkedRecords(records, name, args) {
	    __webpack_require__(1)(Array.isArray(records), 'RelayRecordProxy#setLinkedRecords(): Expected records to be an array, got `%s`.', records);
	    var storageKey = args ? __webpack_require__(7)(name, args) : name;
	    var linkedIDs = records.map(function (record) {
	      return record && record.getDataID();
	    });
	    this._mutator.setLinkedRecordIDs(this._dataID, storageKey, linkedIDs);
	    return this;
	  };

	  return RelayRecordProxy;
	}();

	module.exports = RelayRecordProxy;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayReferenceMarker
	 * 
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var CONDITION = __webpack_require__(3).CONDITION,
	    FRAGMENT_SPREAD = __webpack_require__(3).FRAGMENT_SPREAD,
	    INLINE_FRAGMENT = __webpack_require__(3).INLINE_FRAGMENT,
	    LINKED_FIELD = __webpack_require__(3).LINKED_FIELD,
	    LINKED_HANDLE = __webpack_require__(3).LINKED_HANDLE,
	    SCALAR_FIELD = __webpack_require__(3).SCALAR_FIELD,
	    SCALAR_HANDLE = __webpack_require__(3).SCALAR_HANDLE;

	var getStorageKey = __webpack_require__(4).getStorageKey;

	function mark(recordSource, selector, references) {
	  var dataID = selector.dataID,
	      node = selector.node,
	      variables = selector.variables;

	  var marker = new RelayReferenceMarker(recordSource, variables, references);
	  marker.mark(node, dataID);
	}

	/**
	 * @private
	 */

	var RelayReferenceMarker = function () {
	  function RelayReferenceMarker(recordSource, variables, references) {
	    (0, _classCallCheck3['default'])(this, RelayReferenceMarker);

	    this._references = references;
	    this._recordSource = recordSource;
	    this._variables = variables;
	  }

	  RelayReferenceMarker.prototype.mark = function mark(node, dataID) {
	    this._traverse(node, dataID);
	  };

	  RelayReferenceMarker.prototype._traverse = function _traverse(node, dataID) {
	    this._references.add(dataID);
	    var record = this._recordSource.get(dataID);
	    if (record == null) {
	      return;
	    }
	    this._traverseSelections(node.selections, record);
	  };

	  RelayReferenceMarker.prototype._getVariableValue = function _getVariableValue(name) {
	    __webpack_require__(1)(this._variables.hasOwnProperty(name), 'RelayReferenceMarker(): Undefined variable `%s`.', name);
	    return this._variables[name];
	  };

	  RelayReferenceMarker.prototype._traverseSelections = function _traverseSelections(selections, record) {
	    var _this = this;

	    selections.forEach(function (selection) {
	      if (selection.kind === LINKED_FIELD) {
	        if (selection.plural) {
	          _this._traversePluralLink(selection, record);
	        } else {
	          _this._traverseLink(selection, record);
	        }
	      } else if (selection.kind === CONDITION) {
	        var conditionValue = _this._getVariableValue(selection.condition);
	        if (conditionValue === selection.passingValue) {
	          _this._traverseSelections(selection.selections, record);
	        }
	      } else if (selection.kind === INLINE_FRAGMENT) {
	        var typeName = __webpack_require__(2).getType(record);
	        if (typeName != null && typeName === selection.type) {
	          _this._traverseSelections(selection.selections, record);
	        }
	      } else if (selection.kind === FRAGMENT_SPREAD) {
	        __webpack_require__(1)(false, 'RelayReferenceMarker(): Unexpected fragment spread `...%s`, ' + 'expected all fragments to be inlined.', selection.name);
	      } else if (selection.kind === LINKED_HANDLE) {
	        // The selections for a "handle" field are the same as those of the
	        // original linked field where the handle was applied. Reference marking
	        // therefore requires traversing the original field selections against
	        // the synthesized client field.
	        //
	        // TODO: Instead of finding the source field in `selections`, change
	        // the concrete structure to allow shared subtrees, and have the linked
	        // handle directly refer to the same selections as the LinkedField that
	        // it was split from.
	        var handleField = __webpack_require__(34)(selection, selections, _this._variables);
	        if (handleField.plural) {
	          _this._traversePluralLink(handleField, record);
	        } else {
	          _this._traverseLink(handleField, record);
	        }
	      } else {
	        __webpack_require__(1)(selection.kind === SCALAR_FIELD || selection.kind === SCALAR_HANDLE, 'RelayReferenceMarker(): Unexpected ast kind `%s`.', selection.kind);
	      }
	    });
	  };

	  RelayReferenceMarker.prototype._traverseLink = function _traverseLink(field, record) {
	    var storageKey = getStorageKey(field, this._variables);
	    var linkedID = __webpack_require__(2).getLinkedRecordID(record, storageKey);

	    if (linkedID == null) {
	      return;
	    }
	    this._traverse(field, linkedID);
	  };

	  RelayReferenceMarker.prototype._traversePluralLink = function _traversePluralLink(field, record) {
	    var _this2 = this;

	    var storageKey = getStorageKey(field, this._variables);
	    var linkedIDs = __webpack_require__(2).getLinkedRecordIDs(record, storageKey);

	    if (linkedIDs == null) {
	      return;
	    }
	    linkedIDs.forEach(function (linkedID) {
	      if (linkedID != null) {
	        _this2._traverse(field, linkedID);
	      }
	    });
	  };

	  return RelayReferenceMarker;
	}();

	module.exports = { mark: mark };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RelayResponseNormalizer
	 * 
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(5));

	var _stringify2 = _interopRequireDefault(__webpack_require__(10));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var CONDITION = __webpack_require__(3).CONDITION,
	    INLINE_FRAGMENT = __webpack_require__(3).INLINE_FRAGMENT,
	    LINKED_FIELD = __webpack_require__(3).LINKED_FIELD,
	    LINKED_HANDLE = __webpack_require__(3).LINKED_HANDLE,
	    SCALAR_FIELD = __webpack_require__(3).SCALAR_FIELD,
	    SCALAR_HANDLE = __webpack_require__(3).SCALAR_HANDLE;

	var getArgumentValues = __webpack_require__(4).getArgumentValues,
	    getStorageKey = __webpack_require__(4).getStorageKey,
	    TYPENAME_KEY = __webpack_require__(4).TYPENAME_KEY;

	/**
	 * Normalizes the results of a query and standard GraphQL response, writing the
	 * normalized records/fields into the given MutableRecordSource.
	 *
	 * If handleStrippedNulls is true, will replace fields on the Selector that
	 * are not present in the response with null. Otherwise will leave fields unset.
	 */
	function normalize(recordSource, selector, response) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { handleStrippedNulls: false };
	  var dataID = selector.dataID,
	      node = selector.node,
	      variables = selector.variables;

	  var normalizer = new RelayResponseNormalizer(recordSource, variables, options);
	  return normalizer.normalizeResponse(node, dataID, response);
	}

	/**
	 * @private
	 *
	 * Helper for handling payloads.
	 */

	var RelayResponseNormalizer = function () {
	  function RelayResponseNormalizer(recordSource, variables, options) {
	    (0, _classCallCheck3['default'])(this, RelayResponseNormalizer);

	    this._handleFieldPayloads = [];
	    this._recordSource = recordSource;
	    this._variables = variables;
	    this._handleStrippedNulls = options.handleStrippedNulls;
	  }

	  RelayResponseNormalizer.prototype.normalizeResponse = function normalizeResponse(node, dataID, data) {
	    var record = this._recordSource.get(dataID);
	    __webpack_require__(1)(record, 'RelayResponseNormalizer(): Expected root record `%s` to exist.', dataID);
	    this._traverseSelections(node.selections, record, data);
	    return this._handleFieldPayloads;
	  };

	  RelayResponseNormalizer.prototype._getVariableValue = function _getVariableValue(name) {
	    __webpack_require__(1)(this._variables.hasOwnProperty(name), 'RelayResponseNormalizer(): Undefined variable `%s`.', name);
	    return this._variables[name];
	  };

	  RelayResponseNormalizer.prototype._getRecordType = function _getRecordType(data) {
	    var typeName = data[TYPENAME_KEY];
	    __webpack_require__(1)(typeName != null, 'RelayResponseNormalizer(): Expected a typename for record `%s`.', (0, _stringify2['default'])(data, null, 2));
	    return typeName;
	  };

	  RelayResponseNormalizer.prototype._traverseSelections = function _traverseSelections(selections, record, data) {
	    var _this = this;

	    selections.forEach(function (selection) {
	      if (selection.kind === SCALAR_FIELD || selection.kind === LINKED_FIELD) {
	        _this._normalizeField(selection, record, data);
	      } else if (selection.kind === CONDITION) {
	        var conditionValue = _this._getVariableValue(selection.condition);
	        if (conditionValue === selection.passingValue) {
	          _this._traverseSelections(selection.selections, record, data);
	        }
	      } else if (selection.kind === INLINE_FRAGMENT) {
	        var typeName = __webpack_require__(2).getType(record);
	        if (typeName === selection.type) {
	          _this._traverseSelections(selection.selections, record, data);
	        }
	      } else if (selection.kind === LINKED_HANDLE || selection.kind === SCALAR_HANDLE) {
	        var args = selection.args ? getArgumentValues(selection.args, _this._variables) : {};

	        var fieldKey = __webpack_require__(7)(selection.name, args);
	        var handleKey = __webpack_require__(21)(selection.handle, selection.key, selection.name);
	        if (selection.filters) {
	          var filterValues = __webpack_require__(4).getHandleFilterValues(selection.args || [], selection.filters, _this._variables);
	          handleKey = __webpack_require__(7)(handleKey, filterValues);
	        }
	        _this._handleFieldPayloads.push({
	          args: args,
	          dataID: __webpack_require__(2).getDataID(record),
	          fieldKey: fieldKey,
	          handle: selection.handle,
	          handleKey: handleKey
	        });
	      } else {
	        __webpack_require__(1)(false, 'RelayResponseNormalizer(): Unexpected ast kind `%s`.', selection.kind);
	      }
	    });
	  };

	  RelayResponseNormalizer.prototype._normalizeField = function _normalizeField(selection, record, data) {
	    __webpack_require__(1)(typeof data === 'object' && data, 'writeField(): Expected data for field `%s` to be an object.', selection.name);
	    var responseKey = selection.alias || selection.name;
	    var storageKey = getStorageKey(selection, this._variables);
	    var fieldValue = data[responseKey];
	    if (fieldValue == null) {
	      if (fieldValue === undefined && !this._handleStrippedNulls) {
	        // If we're not stripping nulls, undefined fields are unset
	        return;
	      }
	      if (true) {
	        __webpack_require__(11)(data.hasOwnProperty(responseKey), 'RelayResponseNormalizer(): Payload did not contain a value ' + 'for field `%s: %s`. Check that you are parsing with the same ' + 'query that was used to fetch the payload.', responseKey, storageKey);
	      }
	      __webpack_require__(2).setValue(record, storageKey, null);
	      return;
	    }

	    if (selection.kind === SCALAR_FIELD) {
	      __webpack_require__(2).setValue(record, storageKey, fieldValue);
	    } else if (selection.plural) {
	      this._normalizePluralLink(selection, record, storageKey, fieldValue);
	    } else {
	      this._normalizeLink(selection, record, storageKey, fieldValue);
	    }
	  };

	  RelayResponseNormalizer.prototype._normalizeLink = function _normalizeLink(field, record, storageKey, fieldValue) {
	    __webpack_require__(1)(typeof fieldValue === 'object' && fieldValue, 'RelayResponseNormalizer: Expected data for field `%s` to be an object.', storageKey);
	    var nextID = fieldValue.id ||
	    // Reuse previously generated client IDs
	    __webpack_require__(2).getLinkedRecordID(record, storageKey) || __webpack_require__(9)(__webpack_require__(2).getDataID(record), storageKey);
	    __webpack_require__(1)(typeof nextID === 'string', 'RelayResponseNormalizer: Expected id on field `%s` to be a string.', storageKey);
	    __webpack_require__(2).setLinkedRecordID(record, storageKey, nextID);
	    var nextRecord = this._recordSource.get(nextID);
	    if (!nextRecord) {
	      var typeName = field.concreteType || this._getRecordType(fieldValue);
	      nextRecord = __webpack_require__(2).create(nextID, typeName);
	      this._recordSource.set(nextID, nextRecord);
	    } else if (true) {
	      this._validateRecordType(nextRecord, field, fieldValue);
	    }
	    this._traverseSelections(field.selections, nextRecord, fieldValue);
	  };

	  RelayResponseNormalizer.prototype._normalizePluralLink = function _normalizePluralLink(field, record, storageKey, fieldValue) {
	    var _this2 = this;

	    __webpack_require__(1)(Array.isArray(fieldValue), 'RelayResponseNormalizer: Expected data for field `%s` to be an array ' + 'of objects.', storageKey);
	    var prevIDs = __webpack_require__(2).getLinkedRecordIDs(record, storageKey);
	    var nextIDs = [];
	    fieldValue.forEach(function (item, nextIndex) {
	      // validate response data
	      if (item == null) {
	        nextIDs.push(item);
	        return;
	      }
	      __webpack_require__(1)(typeof item === 'object', 'RelayResponseNormalizer: Expected elements for field `%s` to be ' + 'objects.', storageKey);

	      var nextID = item.id || prevIDs && prevIDs[nextIndex] || // Reuse previously generated client IDs
	      __webpack_require__(9)(__webpack_require__(2).getDataID(record), storageKey, nextIndex);
	      __webpack_require__(1)(typeof nextID === 'string', 'RelayResponseNormalizer: Expected id of elements of field `%s` to ' + 'be strings.', storageKey);

	      nextIDs.push(nextID);
	      var nextRecord = _this2._recordSource.get(nextID);
	      if (!nextRecord) {
	        var typeName = field.concreteType || _this2._getRecordType(item);
	        nextRecord = __webpack_require__(2).create(nextID, typeName);
	        _this2._recordSource.set(nextID, nextRecord);
	      } else if (true) {
	        _this2._validateRecordType(nextRecord, field, item);
	      }
	      _this2._traverseSelections(field.selections, nextRecord, item);
	    });
	    __webpack_require__(2).setLinkedRecordIDs(record, storageKey, nextIDs);
	  };

	  /**
	   * Warns if the type of the record does not match the type of the field/payload.
	   */


	  RelayResponseNormalizer.prototype._validateRecordType = function _validateRecordType(record, field, payload) {
	    var typeName = field.concreteType || this._getRecordType(payload);
	    __webpack_require__(11)(__webpack_require__(2).getType(record) === typeName, 'RelayResponseNormalizer: Invalid record `%s`. Expected %s to be ' + 'be consistent, but the record was assigned conflicting types ' + '`%s` and `%s`.', __webpack_require__(2).getDataID(record), TYPENAME_KEY, __webpack_require__(2).getType(record), typeName);
	  };

	  return RelayResponseNormalizer;
	}();

	// eslint-disable-next-line no-func-assign


	normalize = __webpack_require__(31).instrument('RelayResponseNormalizer.normalize', normalize);

	module.exports = { normalize: normalize };

/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule commitLocalUpdate
	 * 
	 */

	'use strict';

	function commitLocalUpdate(environment, updater) {
	  environment.commitUpdate(updater);
	}

	module.exports = commitLocalUpdate;

/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule commitRelayModernMutation
	 * 
	 */

	'use strict';

	/**
	 * Higher-level helper function to execute a mutation against a specific
	 * environment.
	 */
	function commitRelayModernMutation(environment, config) {
	  var _environment$unstable = environment.unstable_internal,
	      createOperationSelector = _environment$unstable.createOperationSelector,
	      getOperation = _environment$unstable.getOperation;

	  var mutation = getOperation(config.mutation);
	  var onError = config.onError,
	      optimisticResponse = config.optimisticResponse,
	      optimisticUpdater = config.optimisticUpdater,
	      updater = config.updater,
	      variables = config.variables,
	      uploadables = config.uploadables;

	  var operation = createOperationSelector(mutation, variables);
	  return environment.sendMutation({
	    onError: onError,
	    operation: operation,
	    uploadables: uploadables,
	    updater: updater,
	    optimisticUpdater: optimisticUpdater,
	    optimisticResponse: optimisticResponse,
	    onCompleted: function onCompleted(errors) {
	      var onCompleted = config.onCompleted;

	      if (onCompleted) {
	        var snapshot = environment.lookup(operation.fragment);
	        onCompleted(snapshot.data, errors);
	      }
	    }
	  });
	}

	module.exports = commitRelayModernMutation;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule fetchRelayModernQuery
	 * 
	 */

	'use strict';

	var _promise2 = _interopRequireDefault(__webpack_require__(65));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * A helper function to fetch the results of a query. Note that results for
	 * fragment spreads are masked: fields must be explicitly listed in the query in
	 * order to be accessible in the result object.
	 *
	 * NOTE: This module is primarily intended for integrating with classic APIs.
	 * Most product code should use a Renderer or Container.
	 *
	 * TODO(t16875667): The return type should be `Promise<?SelectorData>`, but
	 * that's not really helpful as `SelectorData` is essentially just `mixed`. We
	 * can probably leverage generated flow types here to return the real expected
	 * shape.
	 */
	function fetchRelayModernQuery(environment, taggedNode, variables, cacheConfig) {
	  __webpack_require__(1)(environment.unstable_internal, 'fetchRelayModernQuery: Expected a valid Relay environment, got `%s`.', environment);
	  var _environment$unstable = environment.unstable_internal,
	      createOperationSelector = _environment$unstable.createOperationSelector,
	      getOperation = _environment$unstable.getOperation;

	  var query = getOperation(taggedNode);
	  var operation = createOperationSelector(query, variables);
	  return new _promise2['default'](function (resolve, reject) {
	    environment.sendQuery({
	      cacheConfig: cacheConfig,
	      onError: reject,
	      onCompleted: function onCompleted() {
	        try {
	          var snapshot = environment.lookup(operation.fragment);
	          resolve(snapshot.data);
	        } catch (e) {
	          reject(e);
	        }
	      },

	      operation: operation
	    });
	  });
	}

	module.exports = fetchRelayModernQuery;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hasOverlappingIDs
	 * 
	 */

	'use strict';

	var _keys2 = _interopRequireDefault(__webpack_require__(15));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function hasOverlappingIDs(snapshot, updatedRecordIDs) {
	  var keys = (0, _keys2['default'])(snapshot.seenRecords);
	  for (var ii = 0; ii < keys.length; ii++) {
	    if (updatedRecordIDs.hasOwnProperty(keys[ii])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = hasOverlappingIDs;

/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isRelayModernEnvironment
	 * 
	 */

	'use strict';

	/**
	 * Determine if a given value is an object that implements the `Environment`
	 * interface defined in `RelayStoreTypes`.
	 *
	 * Use a sigil for detection to avoid a realm-specific instanceof check, and to
	 * aid in module tree-shaking to avoid requiring all of RelayRuntime just to
	 * detect its environment.
	 */

	function isRelayModernEnvironment(environment) {
	  return Boolean(environment && environment['@@RelayModernEnvironment']);
	}

	module.exports = isRelayModernEnvironment;

/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule isScalarAndEqual
	 */

	'use strict';

	/**
	 * A fast test to determine if two values are equal scalars:
	 * - compares scalars such as booleans, strings, numbers by value
	 * - compares functions by identity
	 * - returns false for complex values, since these cannot be cheaply tested for
	 *   equality (use `areEquals` instead)
	 */

	function isScalarAndEqual(valueA, valueB) {
	  return valueA === valueB && (valueA === null || typeof valueA !== 'object');
	}

	module.exports = isScalarAndEqual;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule recycleNodesInto
	 * 
	 */

	'use strict';

	/**
	 * Recycles subtrees from `prevData` by replacing equal subtrees in `nextData`.
	 */

	var _keys2 = _interopRequireDefault(__webpack_require__(15));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function recycleNodesInto(prevData, nextData) {
	  if (prevData === nextData || typeof prevData !== 'object' || !prevData || typeof nextData !== 'object' || !nextData) {
	    return nextData;
	  }
	  var canRecycle = false;

	  // Assign local variables to preserve Flow type refinement.
	  var prevArray = Array.isArray(prevData) ? prevData : null;
	  var nextArray = Array.isArray(nextData) ? nextData : null;
	  if (prevArray && nextArray) {
	    canRecycle = nextArray.reduce(function (wasEqual, nextItem, ii) {
	      var prevValue = prevArray[ii];
	      var nextValue = recycleNodesInto(prevValue, nextItem);
	      if (nextValue !== nextArray[ii]) {
	        nextArray[ii] = nextValue;
	      }
	      return wasEqual && nextArray[ii] === prevArray[ii];
	    }, true) && prevArray.length === nextArray.length;
	  } else if (!prevArray && !nextArray) {
	    // Assign local variables to preserve Flow type refinement.
	    var prevObject = prevData;
	    var nextObject = nextData;
	    var prevKeys = (0, _keys2['default'])(prevObject);
	    var nextKeys = (0, _keys2['default'])(nextObject);
	    canRecycle = nextKeys.reduce(function (wasEqual, key) {
	      var prevValue = prevObject[key];
	      var nextValue = recycleNodesInto(prevValue, nextObject[key]);
	      if (nextValue !== nextObject[key]) {
	        nextObject[key] = nextValue;
	      }
	      return wasEqual && nextObject[key] === prevObject[key];
	    }, true) && prevKeys.length === nextKeys.length;
	  }
	  return canRecycle ? prevData : nextData;
	}

	module.exports = recycleNodesInto;

/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule requestRelaySubscription
	 * 
	 */

	'use strict';

	function requestRelaySubscription(environment, config) {
	  var _environment$unstable = environment.unstable_internal,
	      createOperationSelector = _environment$unstable.createOperationSelector,
	      getOperation = _environment$unstable.getOperation;

	  var subscription = getOperation(config.subscription);
	  var onCompleted = config.onCompleted,
	      onError = config.onError,
	      onNext = config.onNext,
	      updater = config.updater,
	      variables = config.variables;

	  var operation = createOperationSelector(subscription, variables);
	  return environment.sendSubscription({
	    onCompleted: onCompleted,
	    onError: onError,
	    onNext: function (_onNext) {
	      function onNext(_x) {
	        return _onNext.apply(this, arguments);
	      }

	      onNext.toString = function () {
	        return _onNext.toString();
	      };

	      return onNext;
	    }(function (payload) {
	      if (onNext) {
	        var snapshot = environment.lookup(operation.fragment);
	        onNext(snapshot.data);
	      }
	    }),

	    updater: updater,
	    operation: operation
	  });
	}

	module.exports = requestRelaySubscription;

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_67__;

/***/ }
/******/ ])
});
;