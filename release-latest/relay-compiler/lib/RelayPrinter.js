/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @providesModule RelayPrinter
 */

'use strict';

var _stringify2 = _interopRequireDefault(require('babel-runtime/core-js/json/stringify'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = require('./RelayDefaultHandleKey'),
    DEFAULT_HANDLE_KEY = _require.DEFAULT_HANDLE_KEY;

var _require2 = require('graphql'),
    GraphQLEnumType = _require2.GraphQLEnumType,
    GraphQLInputObjectType = _require2.GraphQLInputObjectType,
    GraphQLList = _require2.GraphQLList,
    GraphQLNonNull = _require2.GraphQLNonNull;

var INDENT = '  ';

/**
 * Converts a Relay IR node into a GraphQL string. Custom Relay
 * extensions (directives) are not supported; to print fragments with
 * variables or fragment spreads with arguments, transform the node
 * prior to printing.
 */
function print(node) {
  if (node.kind === 'Fragment') {
    return 'fragment ' + node.name + ' on ' + String(node.type) + printFragmentArgumentDefinitions(node.argumentDefinitions) + printDirectives(node.directives) + printSelections(node, '') + '\n';
  } else if (node.kind === 'Root') {
    return node.operation + ' ' + node.name + printArgumentDefinitions(node.argumentDefinitions) + printDirectives(node.directives) + printSelections(node, '') + '\n';
  } else {
    require('fbjs/lib/invariant')(false, 'RelayPrinter: Unsupported IR node `%s`.', node.kind);
  }
}

function printSelections(node, indent, parentCondition) {
  var selections = node.selections;
  if (selections == null) {
    return '';
  }
  var printed = selections.map(function (selection) {
    return printSelection(selection, indent, parentCondition);
  });
  return printed.length ? ' {\n' + (indent + INDENT) + printed.join('\n' + indent + INDENT) + '\n' + indent + '}' : '';
}

function printSelection(selection, indent, parentCondition) {
  parentCondition = parentCondition || '';
  var str = '';
  if (selection.kind === 'LinkedField') {
    if (selection.alias != null) {
      str += selection.alias + ': ';
    }
    str += selection.name;
    str += printArguments(selection.args);
    str += parentCondition;
    str += printDirectives(selection.directives);
    str += printHandles(selection);
    str += printSelections(selection, indent + INDENT);
  } else if (selection.kind === 'ScalarField') {
    if (selection.alias != null) {
      str += selection.alias + ': ';
    }
    str += selection.name;
    str += printArguments(selection.args);
    str += parentCondition;
    str += printDirectives(selection.directives);
    str += printHandles(selection);
  } else if (selection.kind === 'InlineFragment') {
    str += '... on ' + selection.typeCondition.toString();
    str += parentCondition;
    str += printDirectives(selection.directives);
    str += printSelections(selection, indent + INDENT);
  } else if (selection.kind === 'FragmentSpread') {
    str += '...' + selection.name;
    str += parentCondition;
    str += printFragmentArguments(selection.args);
    str += printDirectives(selection.directives);
  } else if (selection.kind === 'Condition') {
    var value = printValue(selection.condition);
    // For Flow
    require('fbjs/lib/invariant')(value != null, 'RelayPrinter: Expected a variable for condition, got a literal `null`.');
    var condStr = selection.passingValue ? ' @include' : ' @skip';
    condStr += '(if: ' + value + ')';
    condStr += parentCondition;
    // For multi-selection conditions, pushes the condition down to each
    var subSelections = selection.selections.map(function (sel) {
      return printSelection(sel, indent, condStr);
    });
    str += subSelections.join('\n' + INDENT);
  } else {
    require('fbjs/lib/invariant')(false, 'RelayPrinter: Unknown selection kind `%s`.', selection.kind);
  }
  return str;
}

function printArgumentDefinitions(argumentDefinitions) {
  var printed = argumentDefinitions.map(function (def) {
    var str = '$' + def.name + ': ' + def.type.toString();
    if (def.defaultValue != null) {
      str += ' = ' + printLiteral(def.defaultValue, def.type);
    }
    return str;
  });
  return printed.length ? '(\n' + INDENT + printed.join('\n' + INDENT) + '\n)' : '';
}

function printFragmentArgumentDefinitions(argumentDefinitions) {
  var printed = void 0;
  argumentDefinitions.forEach(function (def) {
    if (def.kind !== 'LocalArgumentDefinition') {
      return;
    }
    printed = printed || [];
    var str = def.name + ': {type: "' + def.type.toString() + '"';
    if (def.defaultValue != null) {
      str += ', defaultValue: ' + printLiteral(def.defaultValue, def.type);
    }
    str += '}';
    printed.push(str);
  });
  return printed && printed.length ? ' @argumentDefinitions(\n' + INDENT + printed.join('\n' + INDENT) + '\n)' : '';
}

function printHandles(field) {
  if (!field.handles) {
    return '';
  }
  var printed = field.handles.map(function (handle) {
    // For backward compatibility and also because this module is shared by ComponentScript.
    var key = handle.key === DEFAULT_HANDLE_KEY ? '' : ', key: "' + handle.key + '"';
    var filters = handle.filters == null ? '' : ', filters: ' + (0, _stringify2['default'])(handle.filters.sort());
    return '@__clientField(handle: "' + handle.name + '"' + key + filters + ')';
  });
  return printed.length ? ' ' + printed.join(' ') : '';
}

function printDirectives(directives) {
  var printed = directives.map(function (directive) {
    return '@' + directive.name + printArguments(directive.args);
  });
  return printed.length ? ' ' + printed.join(' ') : '';
}

function printFragmentArguments(args) {
  var printedArgs = printArguments(args);
  if (!printedArgs.length) {
    return '';
  }
  return ' @arguments' + printedArgs;
}

function printArguments(args) {
  var printed = [];
  args.forEach(function (arg) {
    var printedValue = printValue(arg.value, arg.type);
    if (printedValue != null) {
      printed.push(arg.name + ': ' + printedValue);
    }
  });
  return printed.length ? '(' + printed.join(', ') + ')' : '';
}

function printValue(value, type) {
  if (value.kind === 'Variable') {
    return '$' + value.variableName;
  } else if (value.value != null) {
    return printLiteral(value.value, type);
  } else {
    return null;
  }
}

function printLiteral(value, type) {
  if (type instanceof GraphQLNonNull) {
    type = type.ofType;
  }
  if (type instanceof GraphQLEnumType) {
    require('fbjs/lib/invariant')(typeof value === 'string', 'RelayPrinter: Expected value of type %s to be a string, got `%s`.', type.name, value);
    return value;
  }
  if (Array.isArray(value)) {
    require('fbjs/lib/invariant')(type instanceof GraphQLList, 'RelayPrinter: Need a type in order to print arrays.');
    var itemType = type.ofType;
    return '[' + value.map(function (item) {
      return printLiteral(item, itemType);
    }).join(', ') + ']';
  } else if (typeof value === 'object' && value) {
    var fields = [];
    require('fbjs/lib/invariant')(type instanceof GraphQLInputObjectType, 'RelayPrinter: Need an InputObject type to print objects.');
    var typeFields = type.getFields();
    require('fbjs/lib/forEachObject')(value, function (val, key) {
      fields.push(key + ': ' + printLiteral(val, typeFields[key].type));
    });
    return '{' + fields.join(', ') + '}';
  } else {
    return (0, _stringify2['default'])(value);
  }
}

module.exports = { print: print };