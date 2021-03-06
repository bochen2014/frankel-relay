/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayIRTransforms
 * 
 */

'use strict';

// Transforms applied to the code used to process a query response.
var SCHEMA_TRANSFORMS = [require('./RelayConnectionTransform').transformSchema, require('./RelayExportTransform').transformSchema, require('./RelayRelayDirectiveTransform').transformSchema];

// Transforms applied to fragments used for reading data from a store
var FRAGMENT_TRANSFORMS = [function (ctx) {
  return require('./RelayConnectionTransform').transform(ctx);
}, require('./RelayViewerHandleTransform').transform, require('./RelayRelayDirectiveTransform').transform, require('./RelayFieldHandleTransform').transform, function (ctx) {
  return require('./RelayFlattenTransform').transform(ctx, {
    flattenAbstractTypes: true
  });
}, require('./RelaySkipRedundantNodesTransform').transform];

// Transforms applied to queries/mutations/subscriptions that are used for
// fetching data from the server and parsing those responses.
/* $FlowFixMe(>=0.44.0 site=react_native_fb) Flow error found while deploying
 * v0.44.0. Remove this comment to see the error */
var QUERY_TRANSFORMS = [function (ctx) {
  return require('./RelayConnectionTransform').transform(ctx, {
    generateRequisiteFields: true
  });
}, require('./RelayViewerHandleTransform').transform, require('./RelayApplyFragmentArgumentTransform').transform, require('./RelaySkipClientFieldTransform').transform, require('./RelaySkipUnreachableNodeTransform').transform, require('./RelayExportTransform').transform, require('./RelayRelayDirectiveTransform').transform, require('./RelayGenerateRequisiteFieldsTransform').transform];

// Transforms applied to the code used to process a query response.
var CODEGEN_TRANSFORMS = [require('./RelayFilterDirectivesTransform').transform, function (ctx) {
  return require('./RelayFlattenTransform').transform(ctx, {
    flattenAbstractTypes: true,
    flattenFragmentSpreads: true
  });
}, require('./RelaySkipRedundantNodesTransform').transform];

// Transforms applied before printing the query sent to the server.
var PRINT_TRANSFORMS = [require('./RelayFilterDirectivesTransform').transform, function (ctx) {
  return require('./RelayFlattenTransform').transform(ctx, {});
}, require('./RelaySkipHandleFieldTransform').transform];

module.exports = {
  codegenTransforms: CODEGEN_TRANSFORMS,
  fragmentTransforms: FRAGMENT_TRANSFORMS,
  printTransforms: PRINT_TRANSFORMS,
  queryTransforms: QUERY_TRANSFORMS,
  schemaTransforms: SCHEMA_TRANSFORMS
};