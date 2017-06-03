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

var _map2 = _interopRequireDefault(require('babel-runtime/core-js/map'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = require('graphql'),
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
    classicTransformer = new (require('././RelayQLTransformer'))(schema, {
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
  var introspection = typeof schemaReference === 'string' ? require('././getSchemaIntrospection')(schemaReference) : schemaReference;
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