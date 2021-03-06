/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRelayFragmentMockRenderer
 * 
 */

'use strict';

var _classCallCheck3 = _interopRequireDefault(require('babel-runtime/helpers/classCallCheck'));

var _possibleConstructorReturn3 = _interopRequireDefault(require('babel-runtime/helpers/possibleConstructorReturn'));

var _inherits3 = _interopRequireDefault(require('babel-runtime/helpers/inherits'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReactRelayFragmentMockRenderer = function (_React$Component) {
  (0, _inherits3['default'])(ReactRelayFragmentMockRenderer, _React$Component);

  function ReactRelayFragmentMockRenderer(props) {
    (0, _classCallCheck3['default'])(this, ReactRelayFragmentMockRenderer);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this));

    _this.mockContext = {
      relay: {
        environment: props.environment,
        variables: {}
      }
    };
    return _this;
  }

  ReactRelayFragmentMockRenderer.prototype.getChildContext = function getChildContext() {
    return this.mockContext;
  };

  ReactRelayFragmentMockRenderer.prototype.render = function render() {
    return this.props.render();
  };

  return ReactRelayFragmentMockRenderer;
}(require('react').Component);

ReactRelayFragmentMockRenderer.childContextTypes = {
  relay: require('./RelayPropTypes').Relay
};


module.exports = ReactRelayFragmentMockRenderer;