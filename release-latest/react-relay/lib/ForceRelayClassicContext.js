/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ForceRelayClassicContext
 * 
 */

'use strict';

var _classCallCheck3 = _interopRequireDefault(require('babel-runtime/helpers/classCallCheck'));

var _possibleConstructorReturn3 = _interopRequireDefault(require('babel-runtime/helpers/possibleConstructorReturn'));

var _inherits3 = _interopRequireDefault(require('babel-runtime/helpers/inherits'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Dummy Route
var QueryConfig = function (_RelayRoute) {
  (0, _inherits3['default'])(QueryConfig, _RelayRoute);

  function QueryConfig() {
    (0, _classCallCheck3['default'])(this, QueryConfig);
    return (0, _possibleConstructorReturn3['default'])(this, _RelayRoute.apply(this, arguments));
  }

  return QueryConfig;
}(require('./RelayRoute'));

QueryConfig.routeName = 'ForceRelayClassicContextRoute';
QueryConfig.queries = {};

/**
 * This wrapper will provide dummy RelayContainer context to it's children. It
 * should only be used as a wrapper around RelayContainers that have not been
 * converted to one of the compatibility container and are not fetching data.
 */

var ForceRelayClassicContext = function (_React$Component) {
  (0, _inherits3['default'])(ForceRelayClassicContext, _React$Component);

  function ForceRelayClassicContext() {
    (0, _classCallCheck3['default'])(this, ForceRelayClassicContext);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  ForceRelayClassicContext.prototype.getChildContext = function getChildContext() {
    return {
      relay: {
        environment: require('./RelayStore'),
        variables: {}
      },
      route: new QueryConfig()
    };
  };

  ForceRelayClassicContext.prototype.render = function render() {
    return this.props.children;
  };

  return ForceRelayClassicContext;
}(require('react').Component);

ForceRelayClassicContext.childContextTypes = {
  relay: require('./RelayPropTypes').ClassicRelay,
  route: require('./RelayPropTypes').QueryConfig.isRequired
};


module.exports = ForceRelayClassicContext;