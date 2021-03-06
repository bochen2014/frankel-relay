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

var _keys2 = _interopRequireDefault(require('babel-runtime/core-js/object/keys'));

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

        var _getFragmentNameParts = require('././getFragmentNameParts')(definition.name.value),
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

  var modernNode = require('././createModernNode')(t, graphqlDefinition, isHasteMode);
  if (isCompatMode) {
    return require('././createCompatNode')(t, modernNode, require('././createClassicNode')(t, path, graphqlDefinition, state));
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