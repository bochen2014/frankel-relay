/**
 * Relay v1.0.0-rc.3
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
	 * @providesModule BabelPluginRelay
	 */

	'use strict';

	/**
	 * Using babel-plugin-relay with only the modern runtime?
	 *
	 *     {
	 *       plugins: [
	 *         "relay"
	 *       ]
	 *     }
	 *
	 * Using babel-plugin-relay in compatability or classic mode?
	 *
	 *     {
	 *       plugins: [
	 *         ["relay", {"compat": true, "schema": "path/to/schema.graphql"}]
	 *       ]
	 *     }
	 *
	 */
	module.exports = function BabelPluginRelay(_ref) {
	  var t = _ref.types;

	  return {
	    visitor: {
	      TaggedTemplateExpression: function TaggedTemplateExpression(path, state) {
	        // Convert graphql`` literals
	        var ast = __webpack_require__(25)(path);
	        if (ast) {
	          __webpack_require__(16)(t, path, state, ast);
	          return;
	        }

	        // Convert Relay.QL`` literals

	        var _getValidRelayQLTag = __webpack_require__(26)(path),
	            quasi = _getValidRelayQLTag[0],
	            tagName = _getValidRelayQLTag[1],
	            propName = _getValidRelayQLTag[2];

	        if (quasi) {
	          var schema = state.opts && state.opts.schema;
	          __webpack_require__(3)(schema, 'babel-plugin-relay: Missing schema option');
	          var documentName = __webpack_require__(23)(path, state);
	          path.replaceWith(__webpack_require__(12)(t, schema, quasi, documentName, propName, tagName, state));
	        }
	      }
	    }
	  };
	};

/***/ },
/* 1 */
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
	 * @fullSyntaxTransform
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(6));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var RelayTransformError = function RelayTransformError(message, loc) {
	  (0, _classCallCheck3['default'])(this, RelayTransformError);

	  this.message = message;
	  this.loc = loc;
	  this.stack = new Error().stack;
	};

	module.exports = RelayTransformError;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("util");

/***/ },
/* 3 */
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
	 * @fullSyntaxTransform
	 */

	'use strict';

	function invariant(condition, format) {
	  if (!condition) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    throw new Error(__webpack_require__(2).format.apply(__webpack_require__(2), [format].concat(args)));
	  }
	}

	module.exports = invariant;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("graphql");

/***/ },
/* 5 */
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
	 * @fullSyntaxTransform
	 */

	'use strict';

	function find(array, predicate, context) {
	  for (var ii = 0; ii < array.length; ii++) {
	    if (predicate.call(context, array[ii], ii, array)) {
	      return array[ii];
	    }
	  }
	  return undefined;
	}

	module.exports = find;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getFragmentNameParts
	 */

	'use strict';

	var DEFAULT_PROP_NAME = 'data';

	/**
	 * Matches a GraphQL fragment name pattern, extracting the data property key
	 * from the name.
	 */
	function getFragmentNameParts(fragmentName) {
	  var match = fragmentName.match(/^([a-zA-Z][a-zA-Z0-9]*)(?:_([a-zA-Z][_a-zA-Z0-9]*))?$/);
	  if (!match) {
	    throw new Error('BabelPluginGraphQL: Fragments should be named ' + '`ModuleName_fragmentName`, got `' + fragmentName + '`.');
	  }
	  var module = match[1];
	  var propName = match[2];
	  if (propName === DEFAULT_PROP_NAME) {
	    throw new Error('BabelPluginGraphQL: Fragment `' + fragmentName + '` should not end in ' + '`_data` to avoid conflict with a fragment named `' + module + '` ' + 'which also provides resulting data via the React prop `data`. Either ' + 'rename this fragment to `' + module + '` or choose a different ' + 'prop name.');
	  }
	  return [module, propName || DEFAULT_PROP_NAME];
	}

	module.exports = getFragmentNameParts;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 9 */
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
	 * @fullSyntaxTransform
	 */

	'use strict';

	var _require = __webpack_require__(4),
	    DirectiveLocation = _require.DirectiveLocation,
	    GraphQLBoolean = _require.GraphQLBoolean,
	    GraphQLList = _require.GraphQLList,
	    GraphQLString = _require.GraphQLString;

	module.exports = {
	  name: 'relay',
	  description: 'The @relay directive.',
	  args: {
	    isConnectionWithoutNodeID: {
	      description: 'Marks a connection field as containing nodes without `id` fields. ' + 'This is used to silence the warning when diffing connections.',
	      type: GraphQLBoolean
	    },
	    isStaticFragment: {
	      description: 'Marks a fragment as static. A static fragment will share the same ' + 'identity regardless of how many times the expression is evaluated.',
	      type: GraphQLBoolean
	    },
	    pattern: {
	      description: 'Marks a fragment as intended for pattern matching (as opposed to ' + 'fetching).',
	      type: GraphQLBoolean
	    },
	    plural: {
	      description: 'Marks a fragment as being backed by a GraphQLList',
	      type: GraphQLBoolean
	    },
	    variables: {
	      description: 'Selectively pass variables down into a fragment.',
	      type: new GraphQLList(GraphQLString)
	    }
	  },
	  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_DEFINITION]
	};

/***/ },
/* 10 */
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
	 * @fullSyntaxTransform
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__(30));

	var _inherits3 = _interopRequireDefault(__webpack_require__(29));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(6));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(11),
	    ID = _require.ID;

	var _require2 = __webpack_require__(4),
	    GraphQLBoolean = _require2.GraphQLBoolean,
	    GraphQLDirective = _require2.GraphQLDirective,
	    GraphQLEnumType = _require2.GraphQLEnumType,
	    GraphQLFloat = _require2.GraphQLFloat,
	    GraphQLID = _require2.GraphQLID,
	    GraphQLInputObjectType = _require2.GraphQLInputObjectType,
	    GraphQLInt = _require2.GraphQLInt,
	    GraphQLInterfaceType = _require2.GraphQLInterfaceType,
	    GraphQLList = _require2.GraphQLList,
	    GraphQLNonNull = _require2.GraphQLNonNull,
	    GraphQLObjectType = _require2.GraphQLObjectType,
	    GraphQLScalarType = _require2.GraphQLScalarType,
	    GraphQLString = _require2.GraphQLString,
	    GraphQLUnionType = _require2.GraphQLUnionType,
	    isAbstractType = _require2.isAbstractType,
	    SchemaMetaFieldDef = _require2.SchemaMetaFieldDef,
	    TypeMetaFieldDef = _require2.TypeMetaFieldDef,
	    TypeNameMetaFieldDef = _require2.TypeNameMetaFieldDef;

	var GraphQLRelayDirectiveInstance = new GraphQLDirective(__webpack_require__(9));

	// TODO: Import types from `graphql`.

	var RelayQLNode = function () {
	  function RelayQLNode(context, ast) {
	    (0, _classCallCheck3['default'])(this, RelayQLNode);

	    this.ast = ast;
	    this.context = context;
	  }

	  RelayQLNode.prototype.getLocation = function getLocation() {
	    return this.ast.loc;
	  };

	  RelayQLNode.prototype.getType = function getType() {
	    __webpack_require__(3)(false, 'Missing Implementation');
	  };

	  RelayQLNode.prototype.getField = function getField(fieldName) {
	    return __webpack_require__(5)(this.getFields(), function (field) {
	      return field.getName() === fieldName;
	    });
	  };

	  RelayQLNode.prototype.getFields = function getFields() {
	    var fields = [];
	    this.getSelections().forEach(function (selection) {
	      if (selection instanceof RelayQLField) {
	        fields.push(selection);
	      }
	    });
	    return fields;
	  };

	  RelayQLNode.prototype.getSelections = function getSelections() {
	    var _this = this;

	    if (!this.ast.selectionSet) {
	      return [];
	    }
	    // $FlowFixMe
	    return this.ast.selectionSet.selections.map(function (selection) {
	      if (selection.kind === 'Field') {
	        return new RelayQLField(_this.context, selection, _this.getType());
	      } else if (selection.kind === 'FragmentSpread') {
	        return new RelayQLFragmentSpread(_this.context, selection);
	      } else if (selection.kind === 'InlineFragment') {
	        return new RelayQLInlineFragment(_this.context, selection, _this.getType());
	      } else {
	        throw new (__webpack_require__(1))(__webpack_require__(2).format('Unexpected selection kind: %s', selection.kind), _this.getLocation());
	      }
	    });
	  };

	  RelayQLNode.prototype.getDirectives = function getDirectives() {
	    var _this2 = this;

	    // $FlowFixMe
	    return (this.ast.directives || []).map(function (directive) {
	      return new RelayQLDirective(_this2.context, directive);
	    });
	  };

	  RelayQLNode.prototype.hasDirective = function hasDirective(name) {
	    // $FlowFixMe
	    return (this.ast.directives || []).some(function (d) {
	      return d.name.value === name;
	    });
	  };

	  RelayQLNode.prototype.isPattern = function isPattern() {
	    return this.context.isPattern;
	  };

	  return RelayQLNode;
	}();

	var RelayQLDefinition = function (_RelayQLNode) {
	  (0, _inherits3['default'])(RelayQLDefinition, _RelayQLNode);

	  function RelayQLDefinition() {
	    (0, _classCallCheck3['default'])(this, RelayQLDefinition);
	    return (0, _possibleConstructorReturn3['default'])(this, _RelayQLNode.apply(this, arguments));
	  }

	  RelayQLDefinition.prototype.getName = function getName() {
	    // TODO: this.context.definitionName;
	    return this.ast.name ?
	    // $FlowFixMe
	    this.ast.name.value : this.getType().getName({ modifiers: false });
	  };

	  return RelayQLDefinition;
	}(RelayQLNode);

	var RelayQLFragment = function (_RelayQLDefinition) {
	  (0, _inherits3['default'])(RelayQLFragment, _RelayQLDefinition);

	  function RelayQLFragment(context, ast, parentType) {
	    (0, _classCallCheck3['default'])(this, RelayQLFragment);

	    var relayDirectiveArgs = {};
	    var relayDirective = __webpack_require__(5)(ast.directives || [], function (directive) {
	      return directive.name.value === 'relay';
	    });
	    if (relayDirective) {
	      (relayDirective.arguments || []).forEach(function (arg) {
	        relayDirectiveArgs[arg.name.value] = arg.value;
	      });
	    }

	    // @relay(pattern: true)
	    var isPattern = relayDirectiveArgs.pattern && relayDirectiveArgs.pattern.kind === 'BooleanValue' && relayDirectiveArgs.pattern.value;

	    // @relay(isStaticFragment: true)
	    var isStaticFragment = relayDirectiveArgs.isStaticFragment && relayDirectiveArgs.isStaticFragment.kind === 'BooleanValue' && relayDirectiveArgs.isStaticFragment.value;

	    var _this4 = (0, _possibleConstructorReturn3['default'])(this, _RelayQLDefinition.call(this, (0, _extends3['default'])({}, context, { isPattern: isPattern }), ast));

	    _this4.hasStaticFragmentID = isStaticFragment;
	    _this4.parentType = parentType;
	    _this4.staticFragmentID = null;
	    return _this4;
	  }

	  RelayQLFragment.prototype.getStaticFragmentID = function getStaticFragmentID() {
	    if (this.hasStaticFragmentID && this.staticFragmentID == null) {
	      var suffix = this.context.generateID();
	      var _name = this.getName();
	      if (!_name) {
	        throw new (__webpack_require__(1))(__webpack_require__(2).format('Static fragments require a name. Use `fragment NAME on %s { ... }`.', this.getType().getName({ modifiers: true })), this.getLocation());
	      }
	      this.staticFragmentID = _name + ':' + suffix;
	    }
	    return this.staticFragmentID;
	  };

	  RelayQLFragment.prototype.getType = function getType() {
	    var type = this.ast.typeCondition;
	    if (type) {
	      // Convert `ListType` and `NonNullType` into `NamedType`.
	      while (type.kind !== 'NamedType') {
	        type = type.type;
	      }
	      return new RelayQLType(this.context, this.context.schema.getType(type.name.value));
	    } else if (this.ast.kind === 'InlineFragment') {
	      // Inline fragments without type conditions fall back to parent type.
	      if (!this.parentType) {
	        throw new (__webpack_require__(1))('Cannot get type of typeless inline fragment without parent type.', this.getLocation());
	      }
	      return this.parentType;
	    } else {
	      throw new (__webpack_require__(1))(__webpack_require__(2).format('Unexpected fragment kind: %s', this.ast.kind), this.getLocation());
	    }
	  };

	  return RelayQLFragment;
	}(RelayQLDefinition);

	var RelayQLMutation = function (_RelayQLDefinition2) {
	  (0, _inherits3['default'])(RelayQLMutation, _RelayQLDefinition2);

	  function RelayQLMutation() {
	    (0, _classCallCheck3['default'])(this, RelayQLMutation);
	    return (0, _possibleConstructorReturn3['default'])(this, _RelayQLDefinition2.apply(this, arguments));
	  }

	  RelayQLMutation.prototype.getType = function getType() {
	    return new RelayQLType(this.context, this.context.schema.getMutationType());
	  };

	  return RelayQLMutation;
	}(RelayQLDefinition);

	var RelayQLQuery = function (_RelayQLDefinition3) {
	  (0, _inherits3['default'])(RelayQLQuery, _RelayQLDefinition3);

	  function RelayQLQuery() {
	    (0, _classCallCheck3['default'])(this, RelayQLQuery);
	    return (0, _possibleConstructorReturn3['default'])(this, _RelayQLDefinition3.apply(this, arguments));
	  }

	  RelayQLQuery.prototype.getType = function getType() {
	    return new RelayQLType(this.context, this.context.schema.getQueryType());
	  };

	  return RelayQLQuery;
	}(RelayQLDefinition);

	var RelayQLSubscription = function (_RelayQLDefinition4) {
	  (0, _inherits3['default'])(RelayQLSubscription, _RelayQLDefinition4);

	  function RelayQLSubscription() {
	    (0, _classCallCheck3['default'])(this, RelayQLSubscription);
	    return (0, _possibleConstructorReturn3['default'])(this, _RelayQLDefinition4.apply(this, arguments));
	  }

	  RelayQLSubscription.prototype.getType = function getType() {
	    return new RelayQLType(this.context, this.context.schema.getSubscriptionType());
	  };

	  return RelayQLSubscription;
	}(RelayQLDefinition);

	var RelayQLField = function (_RelayQLNode2) {
	  (0, _inherits3['default'])(RelayQLField, _RelayQLNode2);

	  function RelayQLField(context, ast, parentType) {
	    (0, _classCallCheck3['default'])(this, RelayQLField);

	    var _this8 = (0, _possibleConstructorReturn3['default'])(this, _RelayQLNode2.call(this, context, ast));

	    var fieldName = _this8.ast.name.value;
	    var fieldDef = parentType.getFieldDefinition(fieldName, ast);
	    if (!fieldDef) {
	      throw new (__webpack_require__(1))(__webpack_require__(2).format('You supplied a field named `%s` on type `%s`, but no such field ' + 'exists on that type.', fieldName, parentType.getName({ modifiers: false })), _this8.getLocation());
	    }
	    _this8.fieldDef = fieldDef;
	    return _this8;
	  }

	  RelayQLField.prototype.getName = function getName() {
	    return this.ast.name.value;
	  };

	  RelayQLField.prototype.getAlias = function getAlias() {
	    return this.ast.alias ? this.ast.alias.value : null;
	  };

	  RelayQLField.prototype.getType = function getType() {
	    return this.fieldDef.getType();
	  };

	  RelayQLField.prototype.hasArgument = function hasArgument(argName) {
	    return this.getArguments().some(function (arg) {
	      return arg.getName() === argName;
	    });
	  };

	  RelayQLField.prototype.findArgument = function findArgument(argName) {
	    return __webpack_require__(5)(this.getArguments(), function (arg) {
	      return arg.getName() === argName;
	    });
	  };

	  RelayQLField.prototype.getArguments = function getArguments() {
	    var _this9 = this;

	    var argTypes = this.fieldDef.getDeclaredArguments();
	    return (this.ast.arguments || []).map(function (arg) {
	      var argName = arg.name.value;
	      var argType = argTypes[argName];
	      if (!argType) {
	        throw new (__webpack_require__(1))(__webpack_require__(2).format('You supplied an argument named `%s` on field `%s`, but no such ' + 'argument exists on that field.', argName, _this9.getName()), _this9.getLocation());
	      }
	      return new RelayQLArgument(_this9.context, arg, argType);
	    });
	  };

	  RelayQLField.prototype.hasDeclaredArgument = function hasDeclaredArgument(argName) {
	    return this.fieldDef.getDeclaredArguments().hasOwnProperty(argName);
	  };

	  RelayQLField.prototype.getDeclaredArgument = function getDeclaredArgument(argName) {
	    return this.fieldDef.getArgument(argName);
	  };

	  RelayQLField.prototype.getDeclaredArguments = function getDeclaredArguments() {
	    return this.fieldDef.getDeclaredArguments();
	  };

	  return RelayQLField;
	}(RelayQLNode);

	var RelayQLFragmentSpread = function (_RelayQLNode3) {
	  (0, _inherits3['default'])(RelayQLFragmentSpread, _RelayQLNode3);

	  function RelayQLFragmentSpread() {
	    (0, _classCallCheck3['default'])(this, RelayQLFragmentSpread);
	    return (0, _possibleConstructorReturn3['default'])(this, _RelayQLNode3.apply(this, arguments));
	  }

	  RelayQLFragmentSpread.prototype.getName = function getName() {
	    return this.ast.name.value;
	  };

	  RelayQLFragmentSpread.prototype.getSelections = function getSelections() {
	    throw new (__webpack_require__(1))('Cannot get selection of a fragment spread.', this.getLocation());
	  };

	  return RelayQLFragmentSpread;
	}(RelayQLNode);

	var RelayQLInlineFragment = function (_RelayQLNode4) {
	  (0, _inherits3['default'])(RelayQLInlineFragment, _RelayQLNode4);

	  function RelayQLInlineFragment(context, ast, parentType) {
	    (0, _classCallCheck3['default'])(this, RelayQLInlineFragment);

	    var _this11 = (0, _possibleConstructorReturn3['default'])(this, _RelayQLNode4.call(this, context, ast));

	    _this11.parentType = parentType;
	    return _this11;
	  }

	  RelayQLInlineFragment.prototype.getFragment = function getFragment() {
	    return new RelayQLFragment(this.context, this.ast, this.parentType);
	  };

	  return RelayQLInlineFragment;
	}(RelayQLNode);

	var RelayQLDirective = function () {
	  function RelayQLDirective(context, ast) {
	    var _this12 = this;

	    (0, _classCallCheck3['default'])(this, RelayQLDirective);

	    this.ast = ast;
	    this.context = context;
	    this.argTypes = {};

	    var directiveName = ast.name.value;
	    var schemaDirective = directiveName === __webpack_require__(9).name ? GraphQLRelayDirectiveInstance : context.schema.getDirective(directiveName);
	    if (!schemaDirective) {
	      throw new (__webpack_require__(1))(__webpack_require__(2).format('You supplied a directive named `%s`, but no such directive exists.', directiveName), this.getLocation());
	    }
	    schemaDirective.args.forEach(function (schemaArg) {
	      _this12.argTypes[schemaArg.name] = new RelayQLArgumentType(schemaArg.type);
	    });
	  }

	  RelayQLDirective.prototype.getLocation = function getLocation() {
	    return this.ast.loc;
	  };

	  RelayQLDirective.prototype.getName = function getName() {
	    return this.ast.name.value;
	  };

	  RelayQLDirective.prototype.getArguments = function getArguments() {
	    var _this13 = this;

	    return (this.ast.arguments || []).map(function (arg) {
	      var argName = arg.name.value;
	      var argType = _this13.argTypes[argName];
	      if (!argType) {
	        throw new (__webpack_require__(1))(__webpack_require__(2).format('You supplied an argument named `%s` on directive `%s`, but no ' + 'such argument exists on that directive.', argName, _this13.getName()), _this13.getLocation());
	      }
	      return new RelayQLArgument(_this13.context, arg, argType);
	    });
	  };

	  return RelayQLDirective;
	}();

	var RelayQLArgument = function () {
	  function RelayQLArgument(context, ast, type) {
	    (0, _classCallCheck3['default'])(this, RelayQLArgument);

	    this.ast = ast;
	    this.context = context;
	    this.type = type;
	  }

	  RelayQLArgument.prototype.getLocation = function getLocation() {
	    return this.ast.loc;
	  };

	  RelayQLArgument.prototype.getName = function getName() {
	    return this.ast.name.value;
	  };

	  RelayQLArgument.prototype.getType = function getType() {
	    return this.type;
	  };

	  RelayQLArgument.prototype.isVariable = function isVariable() {
	    return this.ast.value.kind === 'Variable';
	  };

	  RelayQLArgument.prototype.getVariableName = function getVariableName() {
	    if (this.ast.value.kind !== 'Variable') {
	      throw new (__webpack_require__(1))('Cannot get variable name of an argument value.', this.getLocation());
	    }
	    return this.ast.value.name.value;
	  };

	  RelayQLArgument.prototype.getValue = function getValue() {
	    var _this14 = this;

	    if (this.isVariable()) {
	      throw new (__webpack_require__(1))('Cannot get value of an argument variable.', this.getLocation());
	    }

	    var value = this.ast.value;
	    if (value.kind === 'ListValue') {
	      return value.values.map(function (value) {
	        return new RelayQLArgument(_this14.context, (0, _extends3['default'])({}, _this14.ast, { value: value }), _this14.type.ofType());
	      });
	    } else {
	      return getLiteralValue(value);
	    }
	  };

	  return RelayQLArgument;
	}();

	var RelayQLType = function () {
	  function RelayQLType(context, schemaModifiedType) {
	    (0, _classCallCheck3['default'])(this, RelayQLType);

	    this.context = context;

	    var _stripMarkerTypes = stripMarkerTypes(schemaModifiedType),
	        isListType = _stripMarkerTypes.isListType,
	        isNonNullType = _stripMarkerTypes.isNonNullType,
	        schemaUnmodifiedType = _stripMarkerTypes.schemaUnmodifiedType;

	    this.isListType = isListType;
	    this.isNonNullType = isNonNullType;
	    this.schemaUnmodifiedType = schemaUnmodifiedType;
	    this.schemaModifiedType = schemaModifiedType;
	  }

	  RelayQLType.prototype.canHaveSubselections = function canHaveSubselections() {
	    return !(this.schemaUnmodifiedType instanceof GraphQLScalarType || this.schemaUnmodifiedType instanceof GraphQLEnumType);
	  };

	  RelayQLType.prototype.getName = function getName(_ref) {
	    var modifiers = _ref.modifiers;

	    return modifiers ? this.schemaModifiedType.toString() : this.schemaUnmodifiedType.toString();
	  };

	  RelayQLType.prototype.hasField = function hasField(fieldName) {
	    return !!this.getFieldDefinition(fieldName);
	  };

	  RelayQLType.prototype.getFieldDefinition = function getFieldDefinition(fieldName, fieldAST) {
	    var type = this.schemaUnmodifiedType;
	    var isQueryType = type === this.context.schema.getQueryType();
	    var hasTypeName = type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
	    var hasFields = type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType;

	    var schemaFieldDef = void 0;
	    if (isQueryType && fieldName === SchemaMetaFieldDef.name) {
	      schemaFieldDef = SchemaMetaFieldDef;
	    } else if (isQueryType && fieldName === TypeMetaFieldDef.name) {
	      schemaFieldDef = TypeMetaFieldDef;
	    } else if (hasTypeName && fieldName === TypeNameMetaFieldDef.name) {
	      schemaFieldDef = TypeNameMetaFieldDef;
	    } else if (hasFields) {
	      schemaFieldDef = type.getFields()[fieldName];
	    }

	    // Temporary workarounds to support legacy schemas
	    if (!schemaFieldDef) {
	      if (hasTypeName && fieldName === '__type__') {
	        schemaFieldDef = {
	          name: '__type__',
	          type: new GraphQLNonNull(this.context.schema.getType('Type')),
	          description: 'The introspected type of this object.',
	          deprecatedReason: 'Use __typename',
	          args: []
	        };
	      } else if (isAbstractType(type) && fieldAST && fieldAST.directives && fieldAST.directives.some(function (directive) {
	        return directive.name.value === 'fixme_fat_interface';
	      })) {
	        var possibleTypes = this.context.schema.getPossibleTypes(type);

	        var _loop = function _loop(ii) {
	          var possibleField = possibleTypes[ii].getFields()[fieldName];
	          if (possibleField) {
	            // Fat interface fields can have differing arguments. Try to return
	            // a field with matching arguments, but still return a field if the
	            // arguments do not match.
	            schemaFieldDef = possibleField;
	            if (fieldAST && fieldAST.arguments) {
	              var argumentsAllExist = fieldAST.arguments.every(function (argument) {
	                return __webpack_require__(5)(possibleField.args, function (argDef) {
	                  return argDef.name === argument.name.value;
	                });
	              });
	              if (argumentsAllExist) {
	                return 'break';
	              }
	            }
	          }
	        };

	        for (var ii = 0; ii < possibleTypes.length; ii++) {
	          var _ret = _loop(ii);

	          if (_ret === 'break') break;
	        }
	      }
	    }

	    return schemaFieldDef ? new RelayQLFieldDefinition(this.context, schemaFieldDef) : null;
	  };

	  RelayQLType.prototype.getInterfaces = function getInterfaces() {
	    var _this15 = this;

	    if (this.schemaUnmodifiedType instanceof GraphQLObjectType) {
	      return this.schemaUnmodifiedType.getInterfaces().map(function (schemaInterface) {
	        return new RelayQLType(_this15.context, schemaInterface);
	      });
	    }
	    return [];
	  };

	  RelayQLType.prototype.getConcreteTypes = function getConcreteTypes() {
	    var _this16 = this;

	    __webpack_require__(3)(this.isAbstract(), 'Cannot get concrete types of a concrete type.');
	    return this.context.schema.getPossibleTypes(this.schemaUnmodifiedType).map(function (concreteType) {
	      return new RelayQLType(_this16.context, concreteType);
	    });
	  };

	  RelayQLType.prototype.getIdentifyingFieldDefinition = function getIdentifyingFieldDefinition() {
	    if (this.alwaysImplements('Node')) {
	      return this.getFieldDefinition(ID);
	    }
	    return null;
	  };

	  RelayQLType.prototype.isAbstract = function isAbstract() {
	    return isAbstractType(this.schemaUnmodifiedType);
	  };

	  RelayQLType.prototype.isList = function isList() {
	    return this.isListType;
	  };

	  RelayQLType.prototype.isNonNull = function isNonNull() {
	    return this.isNonNullType;
	  };

	  RelayQLType.prototype.isQueryType = function isQueryType() {
	    return this.schemaUnmodifiedType === this.context.schema.getQueryType();
	  };

	  RelayQLType.prototype.isConnection = function isConnection() {
	    if (!/Connection$/.test(this.getName({ modifiers: false }))) {
	      return false;
	    }
	    var edges = this.getFieldDefinition('edges');
	    if (!edges || !edges.getType().canHaveSubselections()) {
	      return false;
	    }
	    var node = edges.getType().getFieldDefinition('node');
	    if (!node || !node.getType().canHaveSubselections()) {
	      return false;
	    }
	    var cursor = edges.getType().getFieldDefinition('cursor');
	    if (!cursor || cursor.getType().canHaveSubselections()) {
	      return false;
	    }
	    return true;
	  };

	  RelayQLType.prototype.isConnectionEdge = function isConnectionEdge() {
	    return (/Edge$/.test(this.getName({ modifiers: false })) && this.hasField('node') && this.hasField('cursor')
	    );
	  };

	  RelayQLType.prototype.isConnectionPageInfo = function isConnectionPageInfo() {
	    return this.getName({ modifiers: false }) === 'PageInfo';
	  };

	  RelayQLType.prototype.alwaysImplements = function alwaysImplements(typeName) {
	    return this.getName({ modifiers: false }) === typeName || this.getInterfaces().some(function (type) {
	      return type.getName({ modifiers: false }) === typeName;
	    }) || this.isAbstract() && this.getConcreteTypes().every(function (type) {
	      return type.alwaysImplements(typeName);
	    });
	  };

	  RelayQLType.prototype.mayImplement = function mayImplement(typeName) {
	    return this.getName({ modifiers: false }) === typeName || this.getInterfaces().some(function (type) {
	      return type.getName({ modifiers: false }) === typeName;
	    }) || this.isAbstract() && this.getConcreteTypes().some(function (type) {
	      return type.alwaysImplements(typeName);
	    });
	  };

	  RelayQLType.prototype.generateField = function generateField(fieldName) {
	    var generatedFieldAST = {
	      kind: 'Field',
	      name: {
	        kind: 'Name',
	        value: fieldName
	      }
	    };
	    return new RelayQLField(this.context, generatedFieldAST, this);
	  };

	  RelayQLType.prototype.generateIdFragment = function generateIdFragment() {
	    var generatedFragmentAST = {
	      kind: 'Fragment',
	      name: {
	        kind: 'Name',
	        value: 'IdFragment'
	      },
	      typeCondition: {
	        kind: 'NamedType',
	        name: {
	          value: 'Node'
	        }
	      }
	    };
	    return new RelayQLFragment(this.context, generatedFragmentAST, this);
	  };

	  return RelayQLType;
	}();

	var RelayQLFieldDefinition = function () {
	  function RelayQLFieldDefinition(context, schemaFieldDef) {
	    (0, _classCallCheck3['default'])(this, RelayQLFieldDefinition);

	    this.context = context;
	    this.schemaFieldDef = schemaFieldDef;
	  }

	  RelayQLFieldDefinition.prototype.getName = function getName() {
	    return this.schemaFieldDef.name;
	  };

	  RelayQLFieldDefinition.prototype.getType = function getType() {
	    return new RelayQLType(this.context, this.schemaFieldDef.type);
	  };

	  RelayQLFieldDefinition.prototype.hasArgument = function hasArgument(argName) {
	    return this.schemaFieldDef.args.some(function (schemaArg) {
	      return schemaArg.name === argName;
	    });
	  };

	  RelayQLFieldDefinition.prototype.getArgument = function getArgument(argName) {
	    var schemaArg = __webpack_require__(5)(this.schemaFieldDef.args, function (schemaArg) {
	      return schemaArg.name === argName;
	    });
	    __webpack_require__(3)(schemaArg, 'You tried to get an argument named `%s` on field `%s`, but no such ' + 'argument exists on that field.', argName, this.getName());
	    return new RelayQLArgumentType(schemaArg.type);
	  };

	  RelayQLFieldDefinition.prototype.getDeclaredArguments = function getDeclaredArguments() {
	    var args = {};
	    this.schemaFieldDef.args.forEach(function (schemaArg) {
	      args[schemaArg.name] = new RelayQLArgumentType(schemaArg.type);
	    });
	    return args;
	  };

	  return RelayQLFieldDefinition;
	}();

	var RelayQLArgumentType = function () {
	  function RelayQLArgumentType(schemaModifiedArgType) {
	    (0, _classCallCheck3['default'])(this, RelayQLArgumentType);

	    var _stripMarkerTypes2 = stripMarkerTypes(schemaModifiedArgType),
	        isListType = _stripMarkerTypes2.isListType,
	        isNonNullType = _stripMarkerTypes2.isNonNullType,
	        schemaUnmodifiedType = _stripMarkerTypes2.schemaUnmodifiedType;

	    this.isListType = isListType;
	    this.isNonNullType = isNonNullType;
	    this.schemaUnmodifiedArgType = schemaUnmodifiedType;
	    this.schemaModifiedArgType = schemaModifiedArgType;
	  }

	  RelayQLArgumentType.prototype.getName = function getName(_ref2) {
	    var modifiers = _ref2.modifiers;

	    return modifiers ? this.schemaModifiedArgType.toString() : this.schemaUnmodifiedArgType.toString();
	  };

	  RelayQLArgumentType.prototype.ofType = function ofType() {
	    __webpack_require__(3)(this.isList() || this.isNonNull(), 'Can only get type of list or non-null type.');
	    return new RelayQLArgumentType(this.schemaUnmodifiedArgType);
	  };

	  RelayQLArgumentType.prototype.isCustomScalar = function isCustomScalar() {
	    return this.isScalar() && !(this.schemaUnmodifiedArgType === GraphQLBoolean || this.schemaUnmodifiedArgType === GraphQLFloat || this.schemaUnmodifiedArgType === GraphQLID || this.schemaUnmodifiedArgType === GraphQLInt || this.schemaUnmodifiedArgType === GraphQLString);
	  };

	  RelayQLArgumentType.prototype.isBoolean = function isBoolean() {
	    return this.schemaUnmodifiedArgType === GraphQLBoolean;
	  };

	  RelayQLArgumentType.prototype.isEnum = function isEnum() {
	    return this.schemaUnmodifiedArgType instanceof GraphQLEnumType;
	  };

	  RelayQLArgumentType.prototype.isID = function isID() {
	    return this.schemaUnmodifiedArgType === GraphQLID;
	  };

	  RelayQLArgumentType.prototype.isList = function isList() {
	    return this.isListType;
	  };

	  RelayQLArgumentType.prototype.isNonNull = function isNonNull() {
	    return this.isNonNullType;
	  };

	  RelayQLArgumentType.prototype.isNumber = function isNumber() {
	    return this.schemaUnmodifiedArgType === GraphQLFloat || this.schemaUnmodifiedArgType === GraphQLInt;
	  };

	  RelayQLArgumentType.prototype.isObject = function isObject() {
	    return this.schemaUnmodifiedArgType instanceof GraphQLInputObjectType;
	  };

	  RelayQLArgumentType.prototype.isScalar = function isScalar() {
	    return this.schemaUnmodifiedArgType instanceof GraphQLScalarType;
	  };

	  RelayQLArgumentType.prototype.isString = function isString() {
	    return this.schemaUnmodifiedArgType === GraphQLString;
	  };

	  return RelayQLArgumentType;
	}();

	function stripMarkerTypes(schemaModifiedType) {
	  var isListType = false;
	  var isNonNullType = false;
	  var schemaUnmodifiedType = schemaModifiedType;
	  while (true) {
	    if (schemaUnmodifiedType instanceof GraphQLList) {
	      isListType = true;
	    } else if (schemaUnmodifiedType instanceof GraphQLNonNull) {
	      isNonNullType = true;
	    } else {
	      break;
	    }
	    schemaUnmodifiedType = schemaUnmodifiedType.ofType;
	  }
	  return { isListType: isListType, isNonNullType: isNonNullType, schemaUnmodifiedType: schemaUnmodifiedType };
	}

	function getLiteralValue(value) {
	  switch (value.kind) {
	    case 'IntValue':
	      return parseInt(value.value, 10);
	    case 'FloatValue':
	      return parseFloat(value.value);
	    case 'StringValue':
	    case 'BooleanValue':
	    case 'EnumValue':
	      return value.value;
	    case 'ListValue':
	      return value.values.map(getLiteralValue);
	    case 'NullValue':
	      return null;
	    case 'ObjectValue':
	      var object = {};
	      value.fields.forEach(function (field) {
	        object[field.name.value] = getLiteralValue(field.value);
	      });
	      return object;
	    case 'Variable':
	      throw new (__webpack_require__(1))(__webpack_require__(2).format('Unexpected nested variable `%s`; variables are supported as top-' + 'level arguments - `node(id: $id)` - or directly within lists - ' + '`nodes(ids: [$id])`.', value.name.value), value.loc);
	    default:
	      throw new (__webpack_require__(1))(__webpack_require__(2).format('Unexpected value kind: %s', value.kind), value.loc);
	  }
	}

	module.exports = {
	  RelayQLArgument: RelayQLArgument,
	  RelayQLArgumentType: RelayQLArgumentType,
	  RelayQLDefinition: RelayQLDefinition,
	  RelayQLDirective: RelayQLDirective,
	  RelayQLField: RelayQLField,
	  RelayQLFieldDefinition: RelayQLFieldDefinition,
	  RelayQLFragment: RelayQLFragment,
	  RelayQLFragmentSpread: RelayQLFragmentSpread,
	  RelayQLInlineFragment: RelayQLInlineFragment,
	  RelayQLMutation: RelayQLMutation,
	  RelayQLNode: RelayQLNode,
	  RelayQLQuery: RelayQLQuery,
	  RelayQLSubscription: RelayQLSubscription,
	  RelayQLType: RelayQLType
	};

/***/ },
/* 11 */
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
	 */

	'use strict';

	var RelayQLNodeInterface = {
	  ID: 'id'
	};

	module.exports = RelayQLNodeInterface;

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
	 * @providesModule compileRelayQLTag
	 */

	'use strict';

	var RELAY_QL_GENERATED = 'RelayQL_GENERATED';

	/**
	 * Given all the metadata about a found RelayQL tag, compile it and return
	 * the resulting Babel AST.
	 */
	function compileRelayQLTag(t, schemaProvider, quasi, documentName, propName, tagName, state) {
	  try {
	    var transformer = __webpack_require__(22)(schemaProvider, state.opts || {});
	    return transformer.transform(t, quasi, {
	      documentName: documentName,
	      propName: propName,
	      tagName: tagName,
	      enableValidation: tagName !== RELAY_QL_GENERATED
	    });
	  } catch (error) {
	    return __webpack_require__(21)(t, error, quasi, state);
	  }
	}

	module.exports = compileRelayQLTag;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 14 */
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
	 * @fullSyntaxTransform
	 */

	'use strict';

	var _extends3 = _interopRequireDefault(__webpack_require__(13));

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(6));

	var _toConsumableArray3 = _interopRequireDefault(__webpack_require__(31));

	var _keys2 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(10),
	    RelayQLArgument = _require.RelayQLArgument,
	    RelayQLArgumentType = _require.RelayQLArgumentType,
	    RelayQLDefinition = _require.RelayQLDefinition,
	    RelayQLDirective = _require.RelayQLDirective,
	    RelayQLField = _require.RelayQLField,
	    RelayQLFragment = _require.RelayQLFragment,
	    RelayQLFragmentSpread = _require.RelayQLFragmentSpread,
	    RelayQLInlineFragment = _require.RelayQLInlineFragment,
	    RelayQLMutation = _require.RelayQLMutation,
	    RelayQLQuery = _require.RelayQLQuery,
	    RelayQLSubscription = _require.RelayQLSubscription,
	    RelayQLType = _require.RelayQLType;

	var _require2 = __webpack_require__(11),
	    ID = _require2.ID;

	module.exports = function (t, options) {
	  var formatFields = options.snakeCase ? function (fields) {
	    var formatted = {};
	    (0, _keys2['default'])(fields).forEach(function (name) {
	      formatted[name] = name.replace(/[A-Z]/g, function (letter) {
	        return '_' + letter.toLowerCase();
	      });
	    });
	    return formatted;
	  } : function (fields) {
	    return fields;
	  };

	  var EMPTY_ARRAY = t.arrayExpression([]);
	  var FIELDS = formatFields({
	    __typename: '__typename',
	    clientMutationId: 'clientMutationId',
	    clientSubscriptionId: 'clientSubscriptionId',
	    cursor: 'cursor',
	    edges: 'edges',
	    hasNextPage: 'hasNextPage',
	    hasPreviousPage: 'hasPreviousPage',
	    node: 'node',
	    pageInfo: 'pageInfo'
	  });
	  var INPUT_ARGUMENT_NAME = options.inputArgumentName || 'input';
	  var NULL = t.nullLiteral();

	  var RelayQLPrinter = function () {
	    function RelayQLPrinter(tagName, variableNames) {
	      (0, _classCallCheck3['default'])(this, RelayQLPrinter);

	      this.tagName = tagName;
	      this.variableNames = variableNames;
	    }

	    RelayQLPrinter.prototype.print = function print(definition, substitutions) {
	      var enableValidation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	      var printedDocument = void 0;
	      if (definition instanceof RelayQLQuery) {
	        printedDocument = this.printQuery(definition, enableValidation);
	      } else if (definition instanceof RelayQLFragment) {
	        printedDocument = this.printFragment(definition);
	      } else if (definition instanceof RelayQLMutation) {
	        printedDocument = this.printMutation(definition, enableValidation);
	      } else if (definition instanceof RelayQLSubscription) {
	        printedDocument = this.printSubscription(definition, enableValidation);
	      } else {
	        throw new (__webpack_require__(1))(__webpack_require__(2).format('Unsupported definition: %s', definition), definition.getLocation());
	      }
	      return t.callExpression(t.functionExpression(null, substitutions.map(function (substitution) {
	        return t.identifier(substitution.name);
	      }), t.blockStatement([t.returnStatement(printedDocument)])), substitutions.map(function (substitution) {
	        return substitution.value;
	      }));
	    };

	    RelayQLPrinter.prototype.printQuery = function printQuery(query, enableValidation) {
	      var rootFields = query.getFields();
	      if (rootFields.length !== 1 && enableValidation) {
	        throw new (__webpack_require__(1))(__webpack_require__(2).format('There are %d fields supplied to the query named `%s`, but queries ' + 'must have exactly one field.', rootFields.length, query.getName()), query.getLocation());
	      }
	      var rootField = rootFields[0];
	      var rootFieldType = rootField.getType();
	      var rootFieldArgs = rootField.getArguments();

	      var requisiteFields = {};
	      var identifyingFieldDef = rootFieldType.getIdentifyingFieldDefinition();
	      if (identifyingFieldDef) {
	        requisiteFields[identifyingFieldDef.getName()] = true;
	      }
	      if (rootFieldType.isAbstract()) {
	        requisiteFields[FIELDS.__typename] = true;
	      }
	      var selections = this.printSelections(rootField, requisiteFields);
	      var metadata = {};
	      if (rootFieldType.isList()) {
	        metadata.isPlural = true;
	      }
	      if (rootFieldType.isAbstract()) {
	        metadata.isAbstract = true;
	      }
	      if (rootFieldArgs.length > 1) {
	        throw new (__webpack_require__(1))(__webpack_require__(2).format('Invalid root field `%s`; Relay only supports root fields with zero ' + 'or one argument.', rootField.getName()), query.getLocation());
	      }

	      var calls = NULL;
	      if (rootFieldArgs.length === 1) {
	        // Until such time as a root field's 'identifying argument' (one that has
	        // a 1-1 correspondence with a Relay record, or null) has a formal type,
	        // assume that the lone arg in a root field's call is the identifying one.
	        var identifyingArg = rootFieldArgs[0];
	        var identifyingArgName = identifyingArg.getName();
	        var identifyingArgType = identifyingArg.getType().getName({ modifiers: true });
	        metadata.identifyingArgName = identifyingArgName;
	        metadata.identifyingArgType = identifyingArgType;
	        calls = t.arrayExpression([codify({
	          kind: t.valueToNode('Call'),
	          metadata: objectify({
	            type: identifyingArgType
	          }),
	          name: t.valueToNode(identifyingArgName),
	          value: this.printArgumentValue(identifyingArg)
	        })]);
	      }

	      return codify({
	        calls: calls,
	        children: selections,
	        directives: this.printDirectives(rootField.getDirectives()),
	        fieldName: t.valueToNode(rootField.getName()),
	        kind: t.valueToNode('Query'),
	        metadata: objectify(metadata),
	        name: t.valueToNode(query.getName()),
	        type: t.valueToNode(rootFieldType.getName({ modifiers: false }))
	      });
	    };

	    RelayQLPrinter.prototype.printFragment = function printFragment(fragment) {
	      var _this = this;

	      var fragmentType = fragment.getType();

	      var requisiteFields = {};
	      var idFragment = void 0;
	      if (fragmentType.hasField(ID)) {
	        requisiteFields[ID] = true;
	      } else if (shouldGenerateIdFragment(fragment, fragmentType)) {
	        idFragment = fragmentType.generateIdFragment();
	      }
	      if (fragmentType.isAbstract()) {
	        requisiteFields[FIELDS.__typename] = true;
	      }
	      var selections = this.printSelections(fragment, requisiteFields, idFragment ? [idFragment] : null, fragment.hasDirective('generated'));

	      var relayDirective = findRelayDirective(fragment);
	      var selectVariables = relayDirective && __webpack_require__(5)(relayDirective.getArguments(), function (arg) {
	        return arg.getName() === 'variables';
	      });

	      var metadata = this.printRelayDirectiveMetadata(fragment, {
	        isAbstract: fragmentType.isAbstract(),
	        isTrackingEnabled: !!selectVariables
	      });

	      var fragmentCode = codify({
	        children: selections,
	        directives: this.printDirectives(fragment.getDirectives()),
	        id: this.printFragmentID(fragment),
	        kind: t.valueToNode('Fragment'),
	        metadata: metadata,
	        name: t.valueToNode(fragment.getName()),
	        type: t.valueToNode(fragmentType.getName({ modifiers: false }))
	      });

	      if (selectVariables) {
	        var selectVariablesValue = selectVariables.getValue();
	        if (!Array.isArray(selectVariablesValue)) {
	          throw new (__webpack_require__(1))('The variables argument to the @relay directive should be an array ' + 'of strings.', fragment.getLocation());
	        }
	        return t.callExpression(t.memberExpression(identify(this.tagName), t.identifier('__createFragment')), [fragmentCode, t.objectExpression(selectVariablesValue.map(function (item) {
	          // $FlowFixMe
	          var value = item.getValue();
	          return property(value, _this.printVariable(value));
	        }))]);
	      }

	      return fragmentCode;
	    };

	    RelayQLPrinter.prototype.printFragmentID = function printFragmentID(fragment) {
	      var staticFragmentID = fragment.getStaticFragmentID();
	      if (staticFragmentID == null) {
	        return t.callExpression(t.memberExpression(identify(this.tagName), t.identifier('__id')), []);
	      } else {
	        return t.valueToNode(staticFragmentID);
	      }
	    };

	    RelayQLPrinter.prototype.printMutation = function printMutation(mutation, enableValidation) {
	      var rootFields = mutation.getFields();
	      if (rootFields.length !== 1 && enableValidation) {
	        throw new (__webpack_require__(1))(__webpack_require__(2).format('There are %d fields supplied to the mutation named `%s`, but ' + 'mutations must have exactly one field.', rootFields.length, mutation.getName()), mutation.getLocation());
	      }
	      var rootField = rootFields[0];
	      var rootFieldType = rootField.getType();
	      validateMutationField(rootField);
	      var requisiteFields = {};
	      if (rootFieldType.hasField(FIELDS.clientMutationId)) {
	        requisiteFields[FIELDS.clientMutationId] = true;
	      }
	      var selections = this.printSelections(rootField, requisiteFields);
	      var metadata = {
	        inputType: this.printArgumentTypeForMetadata(rootField.getDeclaredArgument(INPUT_ARGUMENT_NAME))
	      };

	      return codify({
	        calls: t.arrayExpression([codify({
	          kind: t.valueToNode('Call'),
	          metadata: objectify({}),
	          name: t.valueToNode(rootField.getName()),
	          value: this.printVariable('input')
	        })]),
	        children: selections,
	        directives: this.printDirectives(mutation.getDirectives()),
	        kind: t.valueToNode('Mutation'),
	        metadata: objectify(metadata),
	        name: t.valueToNode(mutation.getName()),
	        responseType: t.valueToNode(rootFieldType.getName({ modifiers: false }))
	      });
	    };

	    RelayQLPrinter.prototype.printSubscription = function printSubscription(subscription, enableValidation) {
	      var rootFields = subscription.getFields();
	      if (rootFields.length !== 1 && enableValidation) {
	        throw new (__webpack_require__(1))(__webpack_require__(2).format('There are %d fields supplied to the subscription named `%s`, but ' + 'subscriptions must have exactly one field.', rootFields.length, subscription.getName()), subscription.getLocation());
	      }
	      var rootField = rootFields[0];
	      var rootFieldType = rootField.getType();
	      validateMutationField(rootField);
	      var requisiteFields = {};
	      if (rootFieldType.hasField(FIELDS.clientSubscriptionId)) {
	        requisiteFields[FIELDS.clientSubscriptionId] = true;
	      }
	      if (rootFieldType.hasField(FIELDS.clientMutationId)) {
	        requisiteFields[FIELDS.clientMutationId] = true;
	      }
	      var selections = this.printSelections(rootField, requisiteFields);
	      var metadata = {
	        inputType: this.printArgumentTypeForMetadata(rootField.getDeclaredArgument(INPUT_ARGUMENT_NAME))
	      };

	      return codify({
	        calls: t.arrayExpression([codify({
	          kind: t.valueToNode('Call'),
	          metadata: objectify({}),
	          name: t.valueToNode(rootField.getName()),
	          value: this.printVariable('input')
	        })]),
	        children: selections,
	        directives: this.printDirectives(subscription.getDirectives()),
	        kind: t.valueToNode('Subscription'),
	        metadata: objectify(metadata),
	        name: t.valueToNode(subscription.getName()),
	        responseType: t.valueToNode(rootFieldType.getName({ modifiers: false }))
	      });
	    };

	    RelayQLPrinter.prototype.printSelections = function printSelections(parent, requisiteFields, extraFragments) {
	      var _this2 = this;

	      var isGeneratedQuery = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	      var fields = [];
	      var printedFragments = [];
	      var didPrintFragmentReference = false;
	      parent.getSelections().forEach(function (selection) {
	        if (selection instanceof RelayQLFragmentSpread) {
	          // Assume that all spreads exist via template substitution.
	          if (selection.getDirectives().length !== 0) {
	            throw new (__webpack_require__(1))('Directives are not yet supported for `${fragment}`-style fragment ' + 'references.', selection.getLocation());
	          }
	          printedFragments.push(_this2.printFragmentReference(selection));
	          didPrintFragmentReference = true;
	        } else if (selection instanceof RelayQLInlineFragment) {
	          printedFragments.push(_this2.printFragment(selection.getFragment()));
	        } else if (selection instanceof RelayQLField) {
	          fields.push(selection);
	        } else {
	          throw new (__webpack_require__(1))(__webpack_require__(2).format('Unsupported selection type `%s`.', selection), selection.getLocation());
	        }
	      });
	      if (extraFragments) {
	        extraFragments.forEach(function (fragment) {
	          printedFragments.push(_this2.printFragment(fragment));
	        });
	      }
	      var printedFields = this.printFields(fields, parent, requisiteFields, isGeneratedQuery);
	      var selections = [].concat((0, _toConsumableArray3['default'])(printedFields), printedFragments);

	      if (selections.length) {
	        var arrayExpressionOfSelections = t.arrayExpression(selections);
	        return didPrintFragmentReference ? shallowFlatten(arrayExpressionOfSelections) : arrayExpressionOfSelections;
	      }
	      return NULL;
	    };

	    RelayQLPrinter.prototype.printFields = function printFields(fields, parent, requisiteFields) {
	      var _this3 = this;

	      var isGeneratedQuery = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	      var parentType = parent.getType();
	      if (parentType.isConnection() && parentType.hasField(FIELDS.pageInfo) && fields.some(function (field) {
	        return field.getName() === FIELDS.edges;
	      })) {
	        requisiteFields[FIELDS.pageInfo] = true;
	      }

	      var generatedFields = (0, _extends3['default'])({}, requisiteFields);

	      var printedFields = [];
	      fields.forEach(function (field) {
	        delete generatedFields[field.getName()];
	        printedFields.push(_this3.printField(field, parent, requisiteFields, generatedFields, isGeneratedQuery));
	      });

	      (0, _keys2['default'])(generatedFields).forEach(function (fieldName) {
	        var generatedField = parentType.generateField(fieldName);
	        printedFields.push(_this3.printField(generatedField, parent, requisiteFields, generatedFields, isGeneratedQuery));
	      });
	      return printedFields;
	    };

	    RelayQLPrinter.prototype.printField = function printField(field, parent, requisiteSiblings, generatedSiblings) {
	      var _this4 = this;

	      var isGeneratedQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	      var fieldType = field.getType();

	      var metadata = {};
	      var requisiteFields = {};
	      var idFragment = void 0;
	      if (fieldType.hasField(ID)) {
	        requisiteFields[ID] = true;
	      } else if (shouldGenerateIdFragment(field, fieldType)) {
	        idFragment = fieldType.generateIdFragment();
	      }

	      if (!isGeneratedQuery) {
	        validateField(field, parent.getType());
	      }

	      if (fieldType.canHaveSubselections()) {
	        metadata.canHaveSubselections = true;
	      }
	      // TODO: Generalize to non-`Node` types.
	      if (fieldType.alwaysImplements('Node')) {
	        metadata.inferredRootCallName = 'node';
	        metadata.inferredPrimaryKey = ID;
	      }
	      if (fieldType.isConnection()) {
	        if (field.hasDeclaredArgument('first') || field.hasDeclaredArgument('last')) {
	          if (!isGeneratedQuery) {
	            validateConnectionField(field);
	          }
	          metadata.isConnection = true;
	          if (field.hasDeclaredArgument('find')) {
	            metadata.isFindable = true;
	          }
	        }
	      } else if (fieldType.isConnectionPageInfo()) {
	        requisiteFields[FIELDS.hasNextPage] = true;
	        requisiteFields[FIELDS.hasPreviousPage] = true;
	      } else if (fieldType.isConnectionEdge()) {
	        requisiteFields[FIELDS.cursor] = true;
	        requisiteFields[FIELDS.node] = true;
	      }
	      if (fieldType.isAbstract()) {
	        metadata.isAbstract = true;
	        requisiteFields[FIELDS.__typename] = true;
	      }
	      if (fieldType.isList()) {
	        metadata.isPlural = true;
	      }
	      if (generatedSiblings.hasOwnProperty(field.getName())) {
	        metadata.isGenerated = true;
	      }
	      if (requisiteSiblings.hasOwnProperty(field.getName())) {
	        metadata.isRequisite = true;
	      }

	      var selections = this.printSelections(field, requisiteFields, idFragment ? [idFragment] : null, isGeneratedQuery);
	      var fieldAlias = field.getAlias();
	      var args = field.getArguments();
	      var calls = args.length ? t.arrayExpression(args.map(function (arg) {
	        return _this4.printArgument(arg);
	      })) : NULL;

	      return codify({
	        alias: fieldAlias ? t.valueToNode(fieldAlias) : NULL,
	        calls: calls,
	        children: selections,
	        directives: this.printDirectives(field.getDirectives()),
	        fieldName: t.valueToNode(field.getName()),
	        kind: t.valueToNode('Field'),
	        metadata: this.printRelayDirectiveMetadata(field, metadata),
	        type: t.valueToNode(fieldType.getName({ modifiers: false }))
	      });
	    };

	    RelayQLPrinter.prototype.printFragmentReference = function printFragmentReference(fragmentReference) {
	      return t.callExpression(t.memberExpression(identify(this.tagName), t.identifier('__frag')), [t.identifier(fragmentReference.getName())]);
	    };

	    RelayQLPrinter.prototype.printArgument = function printArgument(arg) {
	      var metadata = {};
	      var inputType = this.printArgumentTypeForMetadata(arg.getType());
	      if (inputType) {
	        metadata.type = inputType;
	      }
	      return codify({
	        kind: t.valueToNode('Call'),
	        metadata: objectify(metadata),
	        name: t.valueToNode(arg.getName()),
	        value: this.printArgumentValue(arg)
	      });
	    };

	    RelayQLPrinter.prototype.printArgumentValue = function printArgumentValue(arg) {
	      if (arg.isVariable()) {
	        return this.printVariable(arg.getVariableName());
	      } else {
	        return this.printValue(arg.getValue());
	      }
	    };

	    RelayQLPrinter.prototype.printVariable = function printVariable(name) {
	      // Assume that variables named like substitutions are substitutions.
	      if (this.variableNames.hasOwnProperty(name)) {
	        return t.callExpression(t.memberExpression(identify(this.tagName), t.identifier('__var')), [t.identifier(name)]);
	      }
	      return codify({
	        kind: t.valueToNode('CallVariable'),
	        callVariableName: t.valueToNode(name)
	      });
	    };

	    RelayQLPrinter.prototype.printValue = function printValue(value) {
	      var _this5 = this;

	      if (Array.isArray(value)) {
	        return t.arrayExpression(
	        // $FlowFixMe
	        value.map(function (element) {
	          return _this5.printArgumentValue(element);
	        }));
	      }
	      return codify({
	        kind: t.valueToNode('CallValue'),
	        // codify() skips properties where value === NULL, but `callValue` is a
	        // required property. Create fresh null literals to force the property
	        // to be printed.
	        callValue: value == null ? t.nullLiteral() : printLiteralValue(value)
	      });
	    };

	    RelayQLPrinter.prototype.printDirectives = function printDirectives(directives) {
	      var _this6 = this;

	      var printedDirectives = [];
	      directives.forEach(function (directive) {
	        if (directive.getName() === 'relay') {
	          return;
	        }
	        printedDirectives.push(t.objectExpression([property('kind', t.valueToNode('Directive')), property('name', t.valueToNode(directive.getName())), property('args', t.arrayExpression(directive.getArguments().map(function (arg) {
	          return t.objectExpression([property('name', t.valueToNode(arg.getName())), property('value', _this6.printArgumentValue(arg))]);
	        })))]));
	      });
	      if (printedDirectives.length) {
	        return t.arrayExpression(printedDirectives);
	      }
	      return NULL;
	    };

	    RelayQLPrinter.prototype.printRelayDirectiveMetadata = function printRelayDirectiveMetadata(node,
	    /* $FlowFixMe(>=0.38.0 site=react_native_fb,oss) - Flow error detected during
	     * the deployment of v0.38.0. To see the error, remove this comment and
	     * run flow */
	    maybeMetadata) {
	      var properties = [];
	      var relayDirective = findRelayDirective(node);
	      if (relayDirective) {
	        relayDirective.getArguments().forEach(function (arg) {
	          if (arg.isVariable()) {
	            throw new (__webpack_require__(1))(__webpack_require__(2).format('You supplied `$%s` as the `%s` argument to the `@relay` ' + 'directive, but `@relay` require scalar argument values.', arg.getVariableName(), arg.getName()), node.getLocation());
	          }
	          if (arg.getName() !== 'variables') {
	            properties.push(property(arg.getName(), t.valueToNode(arg.getValue())));
	          }
	        });
	      }
	      if (maybeMetadata) {
	        var metadata = maybeMetadata;
	        (0, _keys2['default'])(metadata).forEach(function (key) {
	          if (metadata[key]) {
	            properties.push(property(key, t.valueToNode(metadata[key])));
	          }
	        });
	      }
	      return t.objectExpression(properties);
	    };

	    /**
	     * Prints the type for arguments that are transmitted via variables.
	     */


	    RelayQLPrinter.prototype.printArgumentTypeForMetadata = function printArgumentTypeForMetadata(argType) {
	      // Only booleans and strings can be safely inlined, which is indicated to
	      // the runtime by the lack of a `metadata.type` property.
	      // - numbers may be represented as strings in client code due to
	      //   the limitations with JavaScript numeric representations, and a
	      //   string can't be inlined where a number is expected.
	      // - enums are unquoted, unlike JSON.
	      // - input objects have unquoted keys, unlike JSON.
	      // - custom scalars could be objects, in which case input object rules
	      //   apply.
	      if (argType.isBoolean() || argType.isID() || argType.isString()) {
	        return null;
	      }
	      return argType.getName({ modifiers: true });
	    };

	    return RelayQLPrinter;
	  }();

	  /**
	   * Determine if a `... on Node { id }` fragment should be generated for a
	   * field/fragment to allow identification of the response record. This
	   * fragment should be added when some/all implementors of the node's type
	   * also implement `Node` but a `Node` fragment is not already present. If it
	   * is present then `id` would be added as a requisite field.
	   */


	  function shouldGenerateIdFragment(node) {
	    return node.getType().mayImplement('Node') && !node.getSelections().some(function (selection) {
	      return selection instanceof RelayQLInlineFragment && selection.getFragment().getType().getName({ modifiers: false }) === 'Node';
	    });
	  }

	  function validateField(field, parentType) {
	    if (field.getName() === 'node') {
	      var argTypes = field.getDeclaredArguments();
	      var argNames = (0, _keys2['default'])(argTypes);
	      if (!parentType.isQueryType() && argNames.length === 1 && argNames[0] === ID) {
	        throw new (__webpack_require__(1))(__webpack_require__(2).format('You defined a `node(%s: %s)` field on type `%s`, but Relay requires ' + 'the `node` field to be defined on the root type. See the Object ' + 'Identification Guide: \n' + 'http://facebook.github.io/relay/docs/graphql-object-identification.html', ID, argNames[0] && argTypes[argNames[0]].getName({ modifiers: true }), parentType.getName({ modifiers: false })), field.getLocation());
	      }
	    }
	  }

	  function validateConnectionField(field) {
	    var _ref = [field.findArgument('first'), field.findArgument('last'), field.findArgument('before'), field.findArgument('after')],
	        first = _ref[0],
	        last = _ref[1],
	        before = _ref[2],
	        after = _ref[3];

	    var condition = !first || !last || first.isVariable() && last.isVariable();
	    if (!condition) {
	      throw new (__webpack_require__(1))(__webpack_require__(2).format('Connection arguments `%s(first: <count>, last: <count>)` are ' + 'not supported unless both are variables. Use `(first: <count>)`, ' + '`(last: <count>)`, or `(first: $<var>, last: $<var>)`.', field.getName()), field.getLocation());
	    }
	    condition = !first || !before || first.isVariable() && before.isVariable();
	    if (!condition) {
	      throw new (__webpack_require__(1))(__webpack_require__(2).format('Connection arguments `%s(before: <cursor>, first: <count>)` are ' + 'not supported unless both are variables. Use `(first: <count>)`, ' + '`(after: <cursor>, first: <count>)`, `(before: <cursor>, last: <count>)`, ' + 'or `(before: $<var>, first: $<var>)`.', field.getName()), field.getLocation());
	    }
	    condition = !last || !after || last.isVariable() && after.isVariable();
	    if (!condition) {
	      throw new (__webpack_require__(1))(__webpack_require__(2).format('Connection arguments `%s(after: <cursor>, last: <count>)` are ' + 'not supported unless both are variables. Use `(last: <count>)`, ' + '`(before: <cursor>, last: <count>)`, `(after: <cursor>, first: <count>)`, ' + 'or `(after: $<var>, last: $<var>)`.', field.getName()), field.getLocation());
	    }

	    // Use `any` because we already check `isConnection` before validating.
	    var connectionNodeType = field.getType().getFieldDefinition(FIELDS.edges).getType().getFieldDefinition(FIELDS.node).getType();

	    // NOTE: These checks are imperfect because we cannot trace fragment spreads.
	    forEachRecursiveField(field, function (subfield) {
	      if (subfield.getName() === FIELDS.edges || subfield.getName() === FIELDS.pageInfo) {
	        var _condition = field.isPattern() || field.hasArgument('find') || field.hasArgument('first') || field.hasArgument('last');

	        if (!_condition) {
	          throw new (__webpack_require__(1))(__webpack_require__(2).format('You supplied the `%s` field on a connection named `%s`, but you did ' + 'not supply an argument necessary to do so. Use either the `find`, ' + '`first`, or `last` argument.', subfield.getName(), field.getName()), field.getLocation());
	        }
	      } else {
	        // Suggest `edges{node{...}}` instead of `nodes{...}`.
	        var subfieldType = subfield.getType();
	        var isNodesLikeField = subfieldType.isList() && subfieldType.getName({ modifiers: false }) === connectionNodeType.getName({ modifiers: false });

	        if (isNodesLikeField) {
	          throw new (__webpack_require__(1))(__webpack_require__(2).format('You supplied a field named `%s` on a connection named `%s`, but ' + 'pagination is not supported on connections without using `%s`. ' + 'Use `%s{%s{%s{...}}}` instead.', subfield.getName(), field.getName(), FIELDS.edges, field.getName(), FIELDS.edges, FIELDS.node), field.getLocation());
	        }
	      }
	    });
	  }

	  function validateMutationField(rootField) {
	    var declaredArgs = rootField.getDeclaredArguments();
	    var declaredArgNames = (0, _keys2['default'])(declaredArgs);
	    if (declaredArgNames.length !== 1) {
	      throw new (__webpack_require__(1))(__webpack_require__(2).format('Your schema defines a mutation field `%s` that takes %d arguments, ' + 'but mutation fields must have exactly one argument named `%s`.', rootField.getName(), declaredArgNames.length, INPUT_ARGUMENT_NAME), rootField.getLocation());
	    }

	    if (declaredArgNames[0] !== INPUT_ARGUMENT_NAME) {
	      throw new (__webpack_require__(1))(__webpack_require__(2).format('Your schema defines a mutation field `%s` that takes an argument ' + 'named `%s`, but mutation fields must have exactly one argument ' + 'named `%s`.', rootField.getName(), declaredArgNames[0], INPUT_ARGUMENT_NAME), rootField.getLocation());
	    }

	    var rootFieldArgs = rootField.getArguments();
	    if (rootFieldArgs.length > 1) {
	      throw new (__webpack_require__(1))(__webpack_require__(2).format('There are %d arguments supplied to the mutation field named `%s`, ' + 'but mutation fields must have exactly one `%s` argument.', rootFieldArgs.length, rootField.getName(), INPUT_ARGUMENT_NAME), rootField.getLocation());
	    }
	  }

	  var forEachRecursiveField = function forEachRecursiveField(parentSelection, callback) {
	    parentSelection.getSelections().forEach(function (selection) {
	      if (selection instanceof RelayQLField) {
	        callback(selection);
	      } else if (selection instanceof RelayQLInlineFragment) {
	        forEachRecursiveField(selection.getFragment(), callback);
	      }
	      // Ignore `RelayQLFragmentSpread` selections.
	    });
	  };

	  function codify(obj) {
	    var properties = [];
	    (0, _keys2['default'])(obj).forEach(function (key) {
	      var value = obj[key];
	      if (value !== NULL) {
	        properties.push(property(key, value));
	      }
	    });
	    return t.objectExpression(properties);
	  }

	  function identify(str) {
	    // $FlowFixMe
	    return str.split('.').reduce(function (acc, name) {
	      if (!acc) {
	        return t.identifier(name);
	      }
	      return t.memberExpression(acc, t.identifier(name));
	    }, null);
	  }

	  function objectify(obj) {
	    var properties = [];
	    (0, _keys2['default'])(obj).forEach(function (key) {
	      var value = obj[key];
	      if (value) {
	        properties.push(property(key, t.valueToNode(value)));
	      }
	    });
	    return t.objectExpression(properties);
	  }

	  function property(name, value) {
	    return t.objectProperty(t.identifier(name), value);
	  }

	  function printLiteralValue(value) {
	    if (value == null) {
	      return NULL;
	    } else if (Array.isArray(value)) {
	      return t.arrayExpression(value.map(printLiteralValue));
	    } else if (typeof value === 'object' && value != null) {
	      var objectValue = value;
	      return t.objectExpression((0, _keys2['default'])(objectValue).map(function (key) {
	        return property(key, printLiteralValue(objectValue[key]));
	      }));
	    } else {
	      return t.valueToNode(value);
	    }
	  }

	  function shallowFlatten(arr) {
	    return t.callExpression(t.memberExpression(t.memberExpression(EMPTY_ARRAY, t.identifier('concat')), t.identifier('apply')), [EMPTY_ARRAY, arr]);
	  }

	  function findRelayDirective(node) {
	    return __webpack_require__(5)(node.getDirectives(), function (directive) {
	      return directive.getName() === 'relay';
	    });
	  }

	  return RelayQLPrinter;
	};

/***/ },
/* 15 */
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
	 * @fullSyntaxTransform
	 */

	'use strict';

	var _classCallCheck3 = _interopRequireDefault(__webpack_require__(6));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(10),
	    RelayQLDefinition = _require.RelayQLDefinition,
	    RelayQLFragment = _require.RelayQLFragment,
	    RelayQLMutation = _require.RelayQLMutation,
	    RelayQLQuery = _require.RelayQLQuery,
	    RelayQLSubscription = _require.RelayQLSubscription;

	var _require2 = __webpack_require__(4),
	    formatError = _require2.formatError,
	    parse = _require2.parse,
	    Source = _require2.Source,
	    validate = _require2.validate;

	var GraphQLWrapper = {
	  error: __webpack_require__(33),
	  language: __webpack_require__(34),
	  language_parser: __webpack_require__(35),
	  language_source: __webpack_require__(36),
	  type: __webpack_require__(37),
	  type_definition: __webpack_require__(38),
	  type_directives: __webpack_require__(39),
	  type_introspection: __webpack_require__(40),
	  type_scalars: __webpack_require__(41),
	  utilities: __webpack_require__(42),
	  utilities_buildClientSchema: __webpack_require__(44),
	  utilities_buildASTSchema: __webpack_require__(43),
	  validation: __webpack_require__(45),
	  validation_rules_KnownFragmentNames: __webpack_require__(51),
	  validation_rules_NoUndefinedVariables: __webpack_require__(53),
	  validation_rules_NoUnusedFragments: __webpack_require__(54),
	  validation_rules_ScalarLeafs: __webpack_require__(57),
	  validation_validate: __webpack_require__(59)
	};

	/**
	 * Transforms a TemplateLiteral node into a RelayQLDefinition, which is then
	 * transformed into a Babel AST via RelayQLPrinter.
	 */
	var RelayQLTransformer = function () {
	  function RelayQLTransformer(schema, options) {
	    (0, _classCallCheck3['default'])(this, RelayQLTransformer);

	    this.schema = schema;
	    this.options = options;
	  }

	  RelayQLTransformer.prototype.transform = function transform(t, // Babel
	  node, options) {
	    var _processTemplateLiter = this.processTemplateLiteral(node, options.documentName),
	        substitutions = _processTemplateLiter.substitutions,
	        templateText = _processTemplateLiter.templateText,
	        variableNames = _processTemplateLiter.variableNames;

	    var documentText = this.processTemplateText(templateText, options);
	    var definition = this.processDocumentText(documentText, options);

	    var Printer = __webpack_require__(14)(t, this.options);
	    return new Printer(options.tagName, variableNames).print(definition, substitutions, options.enableValidation);
	  };

	  /**
	   * Convert TemplateLiteral into a single template string with substitution
	   * names, a matching array of substituted values, and a set of substituted
	   * variable names.
	   */


	  RelayQLTransformer.prototype.processTemplateLiteral = function processTemplateLiteral(node, documentName) {
	    var _this = this;

	    var chunks = [];
	    var variableNames = {};
	    var substitutions = [];
	    node.quasis.forEach(function (element, ii) {
	      var chunk = element.value.cooked;
	      chunks.push(chunk);
	      if (!element.tail) {
	        var name = 'RQL_' + ii;
	        var _value = node.expressions[ii];
	        substitutions.push({ name: name, value: _value });
	        if (/:\s*$/.test(chunk)) {
	          __webpack_require__(3)(_this.options.substituteVariables, 'You supplied a GraphQL document named `%s` that uses template ' + 'substitution for an argument value, but variable substitution ' + 'has not been enabled.', documentName);
	          chunks.push('$' + name);
	          variableNames[name] = undefined;
	        } else {
	          chunks.push('...' + name);
	        }
	      }
	    });
	    return { substitutions: substitutions, templateText: chunks.join('').trim(), variableNames: variableNames };
	  };

	  /**
	   * Converts the template string into a valid GraphQL document string.
	   */


	  RelayQLTransformer.prototype.processTemplateText = function processTemplateText(templateText, _ref) {
	    var documentName = _ref.documentName,
	        propName = _ref.propName;

	    var pattern = /^(fragment|mutation|query|subscription)\s*(\w*)?([\s\S]*)/;
	    var matches = pattern.exec(templateText);
	    __webpack_require__(3)(matches, 'You supplied a GraphQL document named `%s` with invalid syntax. It ' + 'must start with `fragment`, `mutation`, `query`, or `subscription`.', documentName);
	    var type = matches[1];
	    var name = matches[2] || documentName;
	    var rest = matches[3];
	    // Allow `fragment on Type {...}`.
	    if (type === 'fragment' && name === 'on') {
	      name = documentName + (propName ? '_' + capitalize(propName) : '') + 'RelayQL';
	      rest = 'on' + rest;
	    }
	    var definitionName = capitalize(name);
	    return type + ' ' + definitionName + ' ' + rest;
	  };

	  /**
	   * Parses the GraphQL document string into a RelayQLDocument.
	   */


	  RelayQLTransformer.prototype.processDocumentText = function processDocumentText(documentText, _ref2) {
	    var documentName = _ref2.documentName,
	        enableValidation = _ref2.enableValidation;

	    var document = parse(new Source(documentText, documentName));
	    var validationErrors = enableValidation ? this.validateDocument(document, documentName) : null;
	    if (validationErrors) {
	      var error = new Error(__webpack_require__(2).format('You supplied a GraphQL document named `%s` with validation errors.', documentName));
	      error.validationErrors = validationErrors;
	      error.sourceText = documentText;
	      throw error;
	    }
	    var definition = document.definitions[0];

	    var context = {
	      definitionName: capitalize(documentName),
	      isPattern: false,
	      generateID: createIDGenerator(),
	      schema: this.schema
	    };
	    if (definition.kind === 'FragmentDefinition') {
	      return new RelayQLFragment(context, definition);
	    } else if (definition.kind === 'OperationDefinition') {
	      if (definition.operation === 'mutation') {
	        return new RelayQLMutation(context, definition);
	      } else if (definition.operation === 'query') {
	        return new RelayQLQuery(context, definition);
	      } else if (definition.operation === 'subscription') {
	        return new RelayQLSubscription(context, definition);
	      } else {
	        __webpack_require__(3)(false, 'Unsupported operation: %s', definition.operation);
	      }
	    } else {
	      __webpack_require__(3)(false, 'Unsupported definition kind: %s', definition.kind);
	    }
	  };

	  RelayQLTransformer.prototype.validateDocument = function validateDocument(document, documentName) {
	    __webpack_require__(3)(document.definitions.length === 1, 'You supplied a GraphQL document named `%s` with %d definitions, but ' + 'it must have exactly one definition.', documentName, document.definitions.length);
	    var definition = document.definitions[0];
	    var isMutation = definition.kind === 'OperationDefinition' && definition.operation === 'mutation';

	    var validator = this.options.validator;
	    var validationErrors = void 0;
	    if (validator) {
	      validationErrors = validator(GraphQLWrapper).validate(this.schema, document);
	    } else {
	      var rules = [__webpack_require__(46).ArgumentsOfCorrectType, __webpack_require__(47).DefaultValuesOfCorrectType, __webpack_require__(48).FieldsOnCorrectType, __webpack_require__(49).FragmentsOnCompositeTypes, __webpack_require__(50).KnownArgumentNames, __webpack_require__(52).KnownTypeNames, __webpack_require__(55).PossibleFragmentSpreads, __webpack_require__(58).VariablesInAllowedPosition];
	      if (!isMutation) {
	        rules.push(__webpack_require__(56).ProvidedNonNullArguments);
	      }
	      validationErrors = validate(this.schema, document, rules);
	    }

	    if (validationErrors && validationErrors.length > 0) {
	      return validationErrors.map(formatError);
	    }
	    return null;
	  };

	  return RelayQLTransformer;
	}();

	function capitalize(string) {
	  return string[0].toUpperCase() + string.slice(1);
	}

	/**
	 * Utility to generate locally scoped auto-incrementing IDs.
	 */
	function createIDGenerator() {
	  var _id = 0;
	  return function () {
	    return (_id++).toString(32);
	  };
	}

	module.exports = RelayQLTransformer;

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
	 * @providesModule compileGraphQLTag
	 */

	'use strict';

	var _keys2 = _interopRequireDefault(__webpack_require__(8));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Given a graphql`` tagged template literal, replace it with the appropriate
	 * runtime artifact.
	 */
	function compileGraphQLTag(t, path, state, ast) {
	  var mainDefinition = ast.definitions[0];

	  if (mainDefinition.kind === 'FragmentDefinition') {
	    var objPropName = getAssignedObjectPropertyName(t, path);
	    if (objPropName) {
	      if (ast.definitions.length !== 1) {
	        throw new Error('BabelPluginRelay: Expected exactly one fragment in the ' + ('graphql tag referenced by the property ' + objPropName + '.'));
	      }
	      return replaceMemoized(t, path, createAST(t, state, path, mainDefinition));
	    }

	    var nodeMap = {};
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = ast.definitions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var definition = _step.value;

	        if (definition.kind !== 'FragmentDefinition') {
	          throw new Error('BabelPluginRelay: Expected only fragments within this ' + 'graphql tag.');
	        }

	        var _getFragmentNameParts = __webpack_require__(7)(definition.name.value),
	            propName = _getFragmentNameParts[1];

	        nodeMap[propName] = createAST(t, state, path, definition);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator['return']) {
	          _iterator['return']();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    return replaceMemoized(t, path, createObject(t, nodeMap));
	  }

	  if (mainDefinition.kind === 'OperationDefinition') {
	    if (ast.definitions.length !== 1) {
	      throw new Error('BabelPluginRelay: Expected exactly one operation ' + '(query, mutation, or subscription) per graphql tag.');
	    }
	    return replaceMemoized(t, path, createAST(t, state, path, mainDefinition));
	  }

	  throw new Error('BabelPluginRelay: Expected a fragment, mutation, query, or ' + 'subscription, got `' + mainDefinition.kind + '`.');
	}

	function createAST(t, state, path, graphqlDefinition) {
	  var isCompatMode = Boolean(state.opts && state.opts.compat);
	  var isHasteMode = Boolean(state.opts && state.opts.haste);

	  var modernNode = __webpack_require__(20)(t, graphqlDefinition, isHasteMode);
	  if (isCompatMode) {
	    return __webpack_require__(19)(t, modernNode, __webpack_require__(18)(t, path, graphqlDefinition, state));
	  }
	  return modernNode;
	}

	function replaceMemoized(t, path, ast) {
	  var topScope = path.scope;
	  while (topScope.parent) {
	    topScope = topScope.parent;
	  }

	  if (path.scope === topScope) {
	    path.replaceWith(ast);
	  } else {
	    var id = topScope.generateDeclaredUidIdentifier('graphql');
	    path.replaceWith(t.logicalExpression('||', id, t.assignmentExpression('=', id, ast)));
	  }
	}

	function createObject(t, obj) {
	  return t.objectExpression((0, _keys2['default'])(obj).map(function (key) {
	    return t.objectProperty(t.identifier(key), obj[key]);
	  }));
	}

	function getAssignedObjectPropertyName(t, path) {
	  var property = path;
	  while (property) {
	    if (t.isObjectProperty(property) && property.node.key.name) {
	      return property.node.key.name;
	    }
	    property = property.parentPath;
	  }
	}

	module.exports = compileGraphQLTag;

/***/ },
/* 17 */
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
	 * @fullSyntaxTransform
	 */

	'use strict';

	// Convert a GraphQL location object with relative start/end position in RelayQLDocument in
	// source into {line, column, source} information.
	function computeLocation(_ref) {
	  var start = _ref.start,
	      end = _ref.end,
	      source = _ref.source;

	  if (!source) {
	    return null;
	  }
	  var sourceLines = source.body.split('\n');
	  var length = 0;
	  var line = 0;

	  for (; line < sourceLines.length; line++) {
	    if (sourceLines[line].length + length >= start) {
	      break;
	    }
	    length += sourceLines[line].length + 1;
	  }
	  return {
	    line: line + 1,
	    column: start - length + 1,
	    source: sourceLines[line]
	  };
	}

	module.exports = computeLocation;

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
	 * @providesModule createClassicNode
	 */

	'use strict';

	var _keys2 = _interopRequireDefault(__webpack_require__(8));

	var _assign2 = _interopRequireDefault(__webpack_require__(28));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Relay Classic transforms to inline generated content.
	 */
	function createClassicNode(t, path, graphqlDefinition, state) {
	  if (graphqlDefinition.kind === 'FragmentDefinition') {
	    return createFragmentConcreteNode(t, path, graphqlDefinition, state);
	  }

	  if (graphqlDefinition.kind === 'OperationDefinition') {
	    return createOperationConcreteNode(t, path, graphqlDefinition, state);
	  }

	  throw new Error('BabelPluginRelay: Expected a fragment, mutation, query, or ' + 'subscription, got `' + graphqlDefinition.kind + '`.');
	}

	function createFragmentConcreteNode(t, path, definition, state) {
	  var _createClassicAST = createClassicAST(t, definition),
	      classicAST = _createClassicAST.classicAST,
	      fragments = _createClassicAST.fragments,
	      variables = _createClassicAST.variables,
	      argumentDefinitions = _createClassicAST.argumentDefinitions;

	  var substitutions = createSubstitutionsForFragmentSpreads(t, path, fragments);

	  var transformedAST = createObject(t, {
	    kind: t.stringLiteral('FragmentDefinition'),
	    argumentDefinitions: createFragmentArguments(t, argumentDefinitions, variables),
	    node: createRelayQLTemplate(t, classicAST, state)
	  });

	  return createConcreteNode(t, transformedAST, substitutions, state);
	}

	function createOperationConcreteNode(t, path, definition, state) {
	  var _createClassicAST2 = createClassicAST(t, definition),
	      classicAST = _createClassicAST2.classicAST,
	      fragments = _createClassicAST2.fragments;

	  var substitutions = createSubstitutionsForFragmentSpreads(t, path, fragments);
	  var nodeAST = classicAST.operation === 'query' ? createFragmentForOperation(t, classicAST, state) : createRelayQLTemplate(t, classicAST, state);
	  var transformedAST = createObject(t, {
	    kind: t.stringLiteral('OperationDefinition'),
	    argumentDefinitions: createOperationArguments(t, definition.variableDefinitions),
	    name: t.stringLiteral(definition.name.value),
	    operation: t.stringLiteral(classicAST.operation),
	    node: nodeAST
	  });

	  return createConcreteNode(t, transformedAST, substitutions, state);
	}

	function createClassicAST(t, definition) {
	  var fragmentID = 0;

	  var fragments = {};
	  var variables = {};
	  var argumentDefinitions = null;

	  var visitors = {
	    Directive: function Directive(node) {
	      switch (node.name.value) {
	        case 'argumentDefinitions':
	          if (argumentDefinitions) {
	            throw new Error('BabelPluginRelay: Expected only one ' + '@argumentDefinitions directive');
	          }
	          argumentDefinitions = node.arguments;
	          return null;
	        case 'connection':
	          return null;
	        default:
	          return node;
	      }
	    },
	    FragmentSpread: function FragmentSpread(node) {
	      var directives = node.directives;

	      var fragmentName = node.name.value;
	      var fragmentArgumentsAST = null;
	      var substitutionName = null;

	      if (directives.length === 0) {
	        substitutionName = fragmentName;
	      } else {
	        // TODO: add support for @include and other directives.
	        var directive = directives[0];
	        if (directives.length !== 1 || directive.name.value !== 'arguments') {
	          throw new Error('BabelPluginRelay: Unsupported directive `' + directive.name.value + '` on fragment spread `...' + fragmentName + '`.');
	        }
	        var fragmentArgumentsObject = {};
	        directive.arguments.forEach(function (argNode) {
	          var arg = convertArgument(t, argNode);
	          fragmentArgumentsObject[arg.name] = arg.ast;
	        });
	        fragmentArgumentsAST = createObject(t, fragmentArgumentsObject);
	        fragmentID++;
	        substitutionName = fragmentName + '_args' + fragmentID;
	      }

	      fragments[substitutionName] = {
	        name: fragmentName,
	        args: fragmentArgumentsAST
	      };
	      return (0, _assign2['default'])({}, node, {
	        name: { kind: 'Name', value: substitutionName },
	        directives: []
	      });
	    },
	    Variable: function Variable(node) {
	      variables[node.name.value] = null;
	      return node;
	    }
	  };
	  var classicAST = __webpack_require__(4).visit(definition, visitors);

	  return {
	    classicAST: classicAST,
	    fragments: fragments,
	    variables: variables,
	    argumentDefinitions: argumentDefinitions
	  };
	}

	var RELAYQL_GENERATED = 'RelayQL_GENERATED';

	function createConcreteNode(t, transformedAST, substitutions, state) {
	  // Allow for an optional direct require to RelayQL,
	  // otherwise default to `require('react-relay/classic').QL`.
	  var relayQLModule = state.opts && state.opts.relayQLModule;
	  var relayQLRequire = relayQLModule ? createRequireCall(t, relayQLModule) : t.memberExpression(createRequireCall(t, 'react-relay/classic'), t.identifier('QL'));

	  return t.functionExpression(null, [], t.blockStatement([t.variableDeclaration('const', [t.variableDeclarator(t.identifier(RELAYQL_GENERATED), relayQLRequire)].concat(substitutions)), t.returnStatement(transformedAST)]));
	}

	function createOperationArguments(t, variableDefinitions) {
	  return t.arrayExpression(variableDefinitions.map(function (definition) {
	    var name = definition.variable.name.value;
	    var defaultValue = definition.defaultValue ? parseValue(t, definition.defaultValue) : t.nullLiteral();
	    return createLocalArgument(t, name, defaultValue);
	  }));
	}

	function createFragmentArguments(t, argumentDefinitions, variables) {
	  var concreteDefinitions = [];
	  (0, _keys2['default'])(variables).forEach(function (name) {
	    var definition = (argumentDefinitions || []).find(function (arg) {
	      return arg.name.value === name;
	    });
	    if (definition) {
	      var defaultValueField = definition.value.fields.find(function (field) {
	        return field.name.value === 'defaultValue';
	      });
	      var defaultValue = defaultValueField ? parseValue(t, defaultValueField.value) : t.nullLiteral();
	      concreteDefinitions.push(createLocalArgument(t, name, defaultValue));
	    } else {
	      concreteDefinitions.push(createRootArgument(t, name));
	    }
	  });
	  return t.arrayExpression(concreteDefinitions);
	}

	function createLocalArgument(t, variableName, defaultValue) {
	  return createObject(t, {
	    defaultValue: defaultValue,
	    kind: t.stringLiteral('LocalArgument'),
	    name: t.stringLiteral(variableName)
	  });
	}

	function createRootArgument(t, variableName) {
	  return t.objectExpression([t.objectProperty(t.identifier('kind'), t.stringLiteral('RootArgument')), t.objectProperty(t.identifier('name'), t.stringLiteral(variableName))]);
	}

	function parseValue(t, value) {
	  switch (value.kind) {
	    case 'BooleanValue':
	      return t.booleanLiteral(value.value);
	    case 'IntValue':
	      return t.numericLiteral(parseInt(value.value, 10));
	    case 'FloatValue':
	      return t.numericLiteral(parseFloat(value.value));
	    case 'StringValue':
	      return t.stringLiteral(value.value);
	    case 'EnumValue':
	      return t.stringLiteral(value.value);
	    case 'ListValue':
	      return t.arrayExpression(value.values.map(function (item) {
	        return parseValue(t, item);
	      }));
	    default:
	      throw new Error('BabelPluginRelay: Unsupported literal type `' + value.kind + '`.');
	  }
	}

	function convertArgument(t, argNode) {
	  var name = argNode.name.value;
	  var value = argNode.value;
	  var ast = null;
	  switch (value.kind) {
	    case 'Variable':
	      var paramName = value.name.value;
	      ast = createObject(t, {
	        kind: t.stringLiteral('CallVariable'),
	        callVariableName: t.stringLiteral(paramName)
	      });
	      break;
	    default:
	      ast = parseValue(t, value);
	  }
	  return { name: name, ast: ast };
	}

	function createObject(t, obj) {
	  return t.objectExpression((0, _keys2['default'])(obj).map(function (key) {
	    return t.objectProperty(t.identifier(key), obj[key]);
	  }));
	}

	function createRequireCall(t, requiredPath) {
	  return t.callExpression(t.identifier('require'), [t.stringLiteral(requiredPath)]);
	}

	function createFragmentForOperation(t, operation, state) {
	  var type = void 0;
	  switch (operation.operation) {
	    case 'query':
	      type = 'Query';
	      break;
	    case 'mutation':
	      type = 'Mutation';
	      break;
	    case 'subscription':
	      type = 'Subscription';
	      break;
	    default:
	      throw new Error('BabelPluginRelay: Unexpected operation type: `' + operation.operation + '`.');
	  }
	  var fragmentNode = {
	    kind: 'FragmentDefinition',
	    loc: operation.loc,
	    name: {
	      kind: 'Name',
	      value: operation.name.value
	    },
	    typeCondition: {
	      kind: 'NamedType',
	      name: {
	        kind: 'Name',
	        value: type
	      }
	    },
	    directives: operation.directives,
	    selectionSet: operation.selectionSet
	  };
	  return createRelayQLTemplate(t, fragmentNode, state);
	}

	function createRelayQLTemplate(t, node, state) {
	  var schema = state.opts && state.opts.schema;
	  __webpack_require__(3)(schema, 'babel-plugin-relay: Missing schema option');

	  var _getFragmentNameParts = __webpack_require__(7)(node.name.value),
	      documentName = _getFragmentNameParts[0],
	      propName = _getFragmentNameParts[1];

	  var text = __webpack_require__(4).print(node);
	  var quasi = t.templateLiteral([t.templateElement({ raw: text, cooked: text }, true)], []);

	  return __webpack_require__(12)(t, schema, quasi, documentName, propName, RELAYQL_GENERATED, // tagName
	  state);
	}

	function createSubstitutionsForFragmentSpreads(t, path, fragments) {
	  return (0, _keys2['default'])(fragments).map(function (varName) {
	    var fragment = fragments[varName];

	    var _getFragmentNameParts2 = __webpack_require__(7)(fragment.name),
	        module = _getFragmentNameParts2[0],
	        propName = _getFragmentNameParts2[1];

	    return t.variableDeclarator(t.identifier(varName), createGetFragmentCall(t, path, module, propName, fragment.args));
	  });
	}

	function createGetFragmentCall(t, path, module, propName, fragmentArguments) {
	  var args = [];
	  if (propName) {
	    args.push(t.stringLiteral(propName));
	  }

	  if (fragmentArguments) {
	    args.push(fragmentArguments);
	  }

	  // If "module" is defined locally, then it's unsafe to assume it's a
	  // container. It might be a bound reference to the React class itself.
	  // To be safe, when defined locally, always check the __container__ property
	  // first.
	  var container = isDefinedLocally(path, module) ? t.logicalExpression('||',
	  // __container__ is defined via ReactRelayCompatContainerBuilder.
	  t.memberExpression(t.identifier(module), t.identifier('__container__')), t.identifier(module)) : t.identifier(module);

	  return t.callExpression(t.memberExpression(container, t.identifier('getFragment')), args);
	}

	function isDefinedLocally(path, name) {
	  var binding = path.scope.getBinding(name);
	  if (!binding) {
	    return false;
	  }

	  // Binding comes from import.
	  if (binding.kind === 'module') {
	    return false;
	  }

	  // Binding comes from require.
	  if (binding.path.isVariableDeclarator() && binding.path.get('init').node && binding.path.get('init.callee').isIdentifier({ name: 'require' })) {
	    return false;
	  }

	  // Otherwise, defined locally.
	  return true;
	}

	module.exports = createClassicNode;

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createCompatNode
	 */

	'use strict';

	/**
	 * Relay Compat transforms graphql definitions into objects with `modern` and
	 * `classic` keys, each containing the resulting transforms.
	 */

	function createCompatNode(t, modernNode, classicNode) {
	  return t.objectExpression([t.objectProperty(t.identifier('modern'), modernNode), t.objectProperty(t.identifier('classic'), classicNode)]);
	}

	module.exports = createCompatNode;

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createModernNode
	 */

	'use strict';

	var GENERATED = './__generated__/';

	/**
	 * Relay Modern creates separate generated files, so Babel transforms graphql
	 * definitions to lazy require function calls.
	 */
	function createModernNode(t, graphqlDefinition, isHasteMode) {
	  var requiredFile = graphqlDefinition.name.value + '.graphql';
	  var requiredPath = isHasteMode ? requiredFile : GENERATED + requiredFile;
	  return t.functionExpression(null, [], t.blockStatement([t.returnStatement(t.callExpression(t.identifier('require'), [t.stringLiteral(requiredPath)]))]));
	}

	module.exports = createModernNode;

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
	 * @providesModule createTransformError
	 */

	'use strict';

	/**
	 * In case of an error during transform, determine if it should be logged
	 * to the console and/or printed in the source.
	 */
	function createTransformError(t, error, quasi, state) {
	  var opts = state.opts || {};
	  var warning = opts.suppressWarnings ? function () {} : console.warn.bind(console);

	  var basename = state.file.opts.basename || 'UnknownFile';
	  var filename = state.file.opts.filename || 'UnknownFile';
	  var errorMessages = [];

	  if (error instanceof __webpack_require__(1)) {
	    errorMessages.push(error.message);
	     true ? warning('\n-- Relay Transform Error -- %s --\n', basename) : void 0;
	    var sourceLine = quasi.loc && quasi.loc.start.line;
	    var relativeLocation = error.loc && __webpack_require__(17)(error.loc);
	    if (sourceLine && relativeLocation) {
	       true ? warning(['Within RelayQLDocument ' + filename + ':' + sourceLine, '> ', '> line ' + relativeLocation.line + ' (approximate)', '> ' + relativeLocation.source, '> ' + ' '.repeat(relativeLocation.column - 1) + '^^^', 'Error: ' + error.message, 'Stack: ' + error.stack].join('\n')) : void 0;
	    } else {
	       true ? warning(error.message) : void 0;
	    }
	  } else {
	    // Print a console warning and replace the code with a function
	    // that will immediately throw an error in the browser.
	    var sourceText = error.sourceText,
	        validationErrors = error.validationErrors;

	    var isValidationError = !!(validationErrors && sourceText);
	    if (isValidationError) {
	      var sourceLines = sourceText.split('\n');
	      validationErrors.forEach(function (_ref) {
	        var message = _ref.message,
	            locations = _ref.locations;

	        errorMessages.push(message);
	         true ? warning('\n-- GraphQL Validation Error -- %s --\n', basename) : void 0;
	         true ? warning(['File:  ' + filename, 'Error: ' + message, 'Source:'].join('\n')) : void 0;
	        locations.forEach(function (location) {
	          var preview = sourceLines[location.line - 1];
	          if (preview) {
	             true ? warning(['> ', '> ' + preview, '> ' + ' '.repeat(location.column - 1) + '^^^'].join('\n')) : void 0;
	          }
	        });
	      });
	    } else {
	      errorMessages.push(error.message);
	       true ? warning('\n-- Relay Transform Error -- %s --\n', basename) : void 0;
	       true ? warning(['File:  ' + filename, 'Error: ' + error.stack].join('\n')) : void 0;
	    }
	  }
	  var runtimeMessage = __webpack_require__(2).format('%s error ``%s`` in file `%s`. Try updating your GraphQL ' + 'schema if an argument/field/type was recently added.', isValidationError ? 'GraphQL validation' : 'Relay transform', errorMessages.join(' '), filename);

	  if (opts.enforceSchema) {
	    throw new Error(__webpack_require__(2).format(errorMessages.length ? 'Aborting due to a %s error:\n\n%s\n' : 'Aborting due to %s errors:\n\n%s\n', isValidationError ? 'GraphQL validation' : 'Relay transform', errorMessages.map(function (errorMessage) {
	      return '  - ' + errorMessage;
	    }).join('\n')));
	  } else if (opts.debug) {
	    console.error(error.stack);
	  }

	  return t.callExpression(t.functionExpression(null, [], t.blockStatement([t.throwStatement(t.newExpression(t.identifier('Error'), [t.valueToNode(runtimeMessage)]))])), []);
	}

	module.exports = createTransformError;

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
	 * @providesModule getClassicTransformer
	 * 
	 */

	'use strict';

	var _map2 = _interopRequireDefault(__webpack_require__(27));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _require = __webpack_require__(4),
	    buildASTSchema = _require.buildASTSchema,
	    buildClientSchema = _require.buildClientSchema;

	/**
	 * Caches based on the provided schema. Typically this means only one instance
	 * of the RelayQLTransformer will be created, however in some circumstances
	 * (such as in tests) multiple instances can be created given multiple schema.
	 */
	var classicTransformerCache = new _map2['default']();
	function getClassicTransformer(schemaProvider, options) {
	  var classicTransformer = classicTransformerCache.get(schemaProvider);
	  if (!classicTransformer) {
	    var schema = getSchema(schemaProvider);
	    classicTransformer = new (__webpack_require__(15))(schema, {
	      inputArgumentName: options.inputArgumentName,
	      snakeCase: Boolean(options.snakeCase),
	      substituteVariables: Boolean(options.substituteVariables),
	      validator: options.validator
	    });
	    classicTransformerCache.set(schemaProvider, classicTransformer);
	  }
	  return classicTransformer;
	}

	function getSchema(schemaProvider) {
	  var schemaReference = typeof schemaProvider === 'function' ? schemaProvider() : schemaProvider;
	  var introspection = typeof schemaReference === 'string' ? __webpack_require__(24)(schemaReference) : schemaReference;
	  if (introspection.__schema) {
	    return buildClientSchema(introspection);
	  } else if (introspection.data && introspection.data.__schema) {
	    return buildClientSchema(introspection.data);
	  } else if (introspection.kind && introspection.kind === 'Document') {
	    return buildASTSchema(introspection);
	  }

	  throw new Error('Invalid introspection data supplied to `getBabelRelayPlugin()`. The ' + 'resulting schema is not an object with a `__schema` property or ' + 'a schema IDL language.');
	}

	module.exports = getClassicTransformer;

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getDocumentName
	 */

	'use strict';

	var PROVIDES_MODULE = 'providesModule';

	/**
	 * Given a path anywhere in a document, produce the name of that document.
	 */
	function getDocumentName(path, state) {
	  var topPath = path;
	  while (topPath.parentPath) {
	    topPath = topPath.parentPath;
	  }
	  // Cache the document name onto this top level path.
	  var documentName = topPath.documentName;
	  if (!documentName) {
	    var parent = topPath.parent;
	    if (parent.comments && parent.comments.length) {
	      var docblock = parent.comments[0].value || '';
	      var propertyRegex = /@(\S+) *(\S*)/g;
	      var captures = void 0;
	      while (captures = propertyRegex.exec(docblock)) {
	        var property = captures[1];
	        var value = captures[2];
	        if (property === PROVIDES_MODULE) {
	          documentName = value.replace(/[\.-:]/g, '_');
	          break;
	        }
	      }
	    }
	    var basename = state.file.opts.basename;
	    if (basename && !documentName) {
	      var _captures = basename.match(/^[_A-Za-z][_0-9A-Za-z]*/);
	      if (_captures) {
	        documentName = _captures[0];
	      }
	    }
	    documentName = documentName || 'UnknownFile';
	    topPath.documentName = documentName;
	  }
	  return documentName;
	}

	module.exports = getDocumentName;

/***/ },
/* 24 */
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
	 */

	'use strict';

	var _require = __webpack_require__(4),
	    parse = _require.parse;

	var RELAY_DIRECTIVES = '\n  directive @include(if: Boolean) on FRAGMENT_DEFINITION | FRAGMENT_SPREAD | INLINE_FRAGMENT | FIELD\n  directive @skip(if: Boolean) on FRAGMENT_DEFINITION | FRAGMENT_SPREAD | INLINE_FRAGMENT | FIELD\n  directive @relay(\n    isConnectionWithoutNodeID: Boolean,\n    isStaticFragment: Boolean,\n    pattern: Boolean,\n    plural: Boolean,\n    variables: [String],\n  ) on FRAGMENT_DEFINITION | FRAGMENT_SPREAD | INLINE_FRAGMENT | FIELD\n  directive ' + '@' + 'generated on OPERATION | FRAGMENT_DEFINITION | FRAGMENT_SPREAD | INLINE_FRAGMENT\n';

	function getSchemaIntrospection(schemaPath /*: string*/) {
	  try {
	    var source = __webpack_require__(32).readFileSync(schemaPath, 'utf8');
	    if (source[0] === '{') {
	      return JSON.parse(source);
	    }
	    return parse(RELAY_DIRECTIVES + '\n' + source);
	  } catch (error) {
	    // Log a more helpful warning (by including the schema path).
	    console.error('Encountered the following error while loading the GraphQL schema: ' + schemaPath + '\n\n' + error.stack.split('\n').map(function (line) {
	      return '> ' + line;
	    }).join('\n'));
	    throw error;
	  }
	}

	module.exports = getSchemaIntrospection;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getValidGraphQLTag
	 */

	'use strict';

	/**
	 * Given a babel AST path to a tagged template literal, return an AST if it is
	 * a graphql`` or graphql.experimental`` literal being used in a valid way.
	 * If it is some other type of template literal then return nothing.
	 */
	function getValidGraphQLTag(path) {
	  var tag = path.get('tag');

	  var tagName = tag.isIdentifier({ name: 'graphql' }) ? 'graphql' : tag.matchesPattern('graphql.experimental') ? 'graphql.experimental' : undefined;

	  if (!tagName) {
	    return;
	  }

	  var quasis = path.node.quasi.quasis;

	  if (quasis.length !== 1) {
	    throw new Error('BabelPluginRelay: Substitutions are not allowed in ' + 'graphql fragments. Included fragments should be referenced ' + 'as `...MyModule_propName`.');
	  }

	  var text = quasis[0].value.raw;

	  // `graphql` only supports spec-compliant GraphQL: experimental extensions
	  // such as fragment arguments are disabled
	  if (tagName === 'graphql' && /@argument(Definition)?s\b/.test(text)) {
	    throw new Error('BabelPluginRelay: Unexpected use of fragment variables: ' + '@arguments and @argumentDefinitions are only supported in ' + 'experimental mode. Source: ' + text);
	  }

	  var ast = __webpack_require__(4).parse(text);

	  if (ast.definitions.length === 0) {
	    throw new Error('BabelPluginRelay: Unexpected empty graphql tag.');
	  }

	  return ast;
	}

	module.exports = getValidGraphQLTag;

/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getValidRelayQLTag
	 */

	'use strict';

	var RELAY_QL_GENERATED = 'RelayQL_GENERATED';

	/**
	 * Given a TemplateLiteral path, return the metadata about a RelayQL tag
	 * if one exists.
	 */
	function getValidRelayQLTag(path) {
	  var node = path.node;


	  var tag = path.get('tag');
	  var tagName = tag.matchesPattern('Relay.QL') ? 'Relay.QL' : tag.isIdentifier({ name: 'RelayQL' }) ? 'RelayQL' : tag.isIdentifier({ name: RELAY_QL_GENERATED }) ? RELAY_QL_GENERATED : null;
	  if (!tagName) {
	    return [];
	  }

	  var p = path;
	  var propName = null;
	  while (!propName && (p = p.parentPath)) {
	    if (p.isProperty()) {
	      propName = p.node.key.name;
	    }
	  }

	  return [node.quasi, tagName, propName];
	}

	module.exports = getValidRelayQLTag;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/map");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("graphql/error");

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("graphql/language");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("graphql/language/parser");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("graphql/language/source");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("graphql/type");

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("graphql/type/definition");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("graphql/type/directives");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("graphql/type/introspection");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("graphql/type/scalars");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("graphql/utilities");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("graphql/utilities/buildASTSchema");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("graphql/utilities/buildClientSchema");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/ArgumentsOfCorrectType");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/DefaultValuesOfCorrectType");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/FieldsOnCorrectType");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/FragmentsOnCompositeTypes");

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/KnownArgumentNames");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/KnownFragmentNames");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/KnownTypeNames");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/NoUndefinedVariables");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/NoUnusedFragments");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/PossibleFragmentSpreads");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/ProvidedNonNullArguments");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/ScalarLeafs");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/rules/VariablesInAllowedPosition");

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("graphql/validation/validate");

/***/ }
/******/ ]);