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