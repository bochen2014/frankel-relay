/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRelayRefetchContainer
 * 
 * @format
 */

'use strict';

var _extends3 = _interopRequireDefault(require('babel-runtime/helpers/extends'));

var _classCallCheck3 = _interopRequireDefault(require('babel-runtime/helpers/classCallCheck'));

var _possibleConstructorReturn3 = _interopRequireDefault(require('babel-runtime/helpers/possibleConstructorReturn'));

var _inherits3 = _interopRequireDefault(require('babel-runtime/helpers/inherits'));

var _keys2 = _interopRequireDefault(require('babel-runtime/core-js/object/keys'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = require('./ReactRelayContainerProfiler'),
    profileContainer = _require.profileContainer;

var _require2 = require('./RelayContainerUtils'),
    getComponentName = _require2.getComponentName,
    getReactComponent = _require2.getReactComponent;

var containerContextTypes = {
  relay: require('./RelayPropTypes').Relay
};

/**
 * Composes a React component class, returning a new class that intercepts
 * props, resolving them with the provided fragments and subscribing for
 * updates.
 */
function createContainerWithFragments(Component, fragments, taggedNode) {
  var ComponentClass = getReactComponent(Component);
  var componentName = getComponentName(Component);
  var containerName = 'Relay(' + componentName + ')';

  var Container = function (_React$Component) {
    (0, _inherits3['default'])(Container, _React$Component);

    function Container(props, context) {
      (0, _classCallCheck3['default'])(this, Container);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

      _this._handleFragmentDataUpdate = function () {
        var profiler = require('./RelayProfiler').profile('ReactRelayRefetchContainer.handleFragmentDataUpdate');
        _this.setState({ data: _this._resolver.resolve() }, profiler.stop);
      };

      _this._refetch = function (refetchVariables, renderVariables, callback, options) {
        var _assertRelayContext = assertRelayContext(_this.context.relay),
            environment = _assertRelayContext.environment,
            rootVariables = _assertRelayContext.variables;

        var fetchVariables = typeof refetchVariables === 'function' ? refetchVariables(_this._getFragmentVariables()) : refetchVariables;
        fetchVariables = (0, _extends3['default'])({}, rootVariables, fetchVariables);
        var fragmentVariables = renderVariables ? (0, _extends3['default'])({}, rootVariables, renderVariables) : fetchVariables;

        var onNext = function onNext(response) {
          if (!_this._pendingRefetch) {
            // only call callback once per refetch
            return;
          }
          // TODO t15106389: add helper utility for fetching more data
          _this._pendingRefetch = null;
          _this._relayContext = {
            environment: _this.context.relay.environment,
            variables: fragmentVariables
          };
          callback && callback();
          _this._resolver.setVariables(fragmentVariables);
          _this.setState({ data: _this._resolver.resolve() });
        };
        var onError = function onError(error) {
          _this._pendingRefetch = null;
          callback && callback(error);
        };

        var cacheConfig = options ? { force: !!options.force } : undefined;
        var _this$context$relay$e = _this.context.relay.environment.unstable_internal,
            createOperationSelector = _this$context$relay$e.createOperationSelector,
            getOperation = _this$context$relay$e.getOperation;

        var query = getOperation(taggedNode);
        var operation = createOperationSelector(query, fetchVariables);

        // Immediately retain the results of the query to prevent cached
        // data from being evicted
        var reference = environment.retain(operation.root);
        _this._references.push(reference);

        _this._localVariables = fetchVariables;
        if (_this._pendingRefetch) {
          _this._pendingRefetch.dispose();
        }
        var pendingRefetch = environment.streamQuery({
          cacheConfig: cacheConfig,
          onError: onError,
          onNext: onNext,
          operation: operation
        });
        _this._pendingRefetch = pendingRefetch;
        return {
          dispose: function dispose() {
            // Disposing a refetch() call should always dispose the fetch itself,
            // but should not clear this._pendingFetch unless the refetch() being
            // cancelled is the most recent call.
            pendingRefetch.dispose();
            if (_this._pendingRefetch === pendingRefetch) {
              _this._pendingRefetch = null;
            }
          }
        };
      };

      var relay = assertRelayContext(context.relay);
      var createFragmentSpecResolver = relay.environment.unstable_internal.createFragmentSpecResolver;

      _this._localVariables = null;
      _this._pendingRefetch = null;
      _this._references = [];
      _this._resolver = createFragmentSpecResolver(relay, fragments, props, _this._handleFragmentDataUpdate);
      _this._relayContext = {
        environment: _this.context.relay.environment,
        variables: _this.context.relay.variables
      };
      var data = _this._resolver.resolve(); //bchen
      _this.state = {
        data: data, 
        relayProp: _this._buildRelayProp(relay)
      };
      return _this;
    }

    /**
     * When new props are received, read data for the new props and subscribe
     * for updates. Props may be the same in which case previous data and
     * subscriptions can be reused.
     */


    Container.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
      var context = require('fbjs/lib/nullthrows')(nextContext);
      var relay = assertRelayContext(context.relay);
      var _relay$environment$un = relay.environment.unstable_internal,
          createFragmentSpecResolver = _relay$environment$un.createFragmentSpecResolver,
          getDataIDsFromObject = _relay$environment$un.getDataIDsFromObject;

      var prevIDs = getDataIDsFromObject(fragments, this.props);
      var nextIDs = getDataIDsFromObject(fragments, nextProps);

      // If the environment has changed or props point to new records then
      // previously fetched data and any pending fetches no longer apply:
      // - Existing references are on the old environment.
      // - Existing references are based on old variables.
      // - Pending fetches are for the previous records.
      if (this.context.relay.environment !== relay.environment || this.context.relay.variables !== relay.variables || !require('fbjs/lib/areEqual')(prevIDs, nextIDs)) {
        this._release();
        this._localVariables = null;
        this._relayContext = {
          environment: relay.environment,
          variables: relay.variables
        };
        this._resolver = createFragmentSpecResolver(relay, containerName, fragments, nextProps, this._handleFragmentDataUpdate);
        this.setState({ relayProp: this._buildRelayProp(relay) });
      } else if (!this._localVariables) {
        this._resolver.setProps(nextProps);
      }
      var data = this._resolver.resolve();
      if (data !== this.state.data) {
        this.setState({ data: data });
      }
    };

    Container.prototype.componentWillUnmount = function componentWillUnmount() {
      this._release();
    };

    Container.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      // Short-circuit if any Relay-related data has changed
      if (nextContext.relay !== this.context.relay || nextState.data !== this.state.data || nextState.relayProp !== this.state.relayProp) {
        return true;
      }
      // Otherwise, for convenience short-circuit if all non-Relay props
      // are scalar and equal
      var keys = (0, _keys2['default'])(nextProps);
      for (var ii = 0; ii < keys.length; ii++) {
        var _key = keys[ii];
        if (!fragments.hasOwnProperty(_key) && !require('./isScalarAndEqual')(nextProps[_key], this.props[_key])) {
          return true;
        }
      }
      return false;
    };

    Container.prototype._release = function _release() {
      this._resolver.dispose();
      this._references.forEach(function (disposable) {
        return disposable.dispose();
      });
      this._references.length = 0;
      if (this._pendingRefetch) {
        this._pendingRefetch.dispose();
        this._pendingRefetch = null;
      }
    };

    Container.prototype._buildRelayProp = function _buildRelayProp(relay) {
      return {
        environment: relay.environment,
        refetch: this._refetch
      };
    };

    /**
     * Render new data for the existing props/context.
     */


    Container.prototype._getFragmentVariables = function _getFragmentVariables() {
      var getVariablesFromObject = this.context.relay.environment.unstable_internal.getVariablesFromObject;

      return getVariablesFromObject(this.context.relay.variables, fragments, this.props);
    };

    Container.prototype.getChildContext = function getChildContext() {
      return { relay: this._relayContext };
    };

    Container.prototype.render = function render() {
      if (ComponentClass) {
        return require('react').createElement(ComponentClass, (0, _extends3['default'])({}, this.props, this.state.data, {
          ref: 'component' // eslint-disable-line react/no-string-refs
          , relay: this.state.relayProp
        }));
      } else {
        // Stateless functional, doesn't support `ref`
        return require('react').createElement(Component, (0, _extends3['default'])({}, this.props, this.state.data, {
          relay: this.state.relayProp
        }));
      }
    };

    return Container;
  }(require('react').Component);

  profileContainer(Container, 'ReactRelayRefetchContainer');
  Container.contextTypes = containerContextTypes;
  Container.displayName = containerName;

  return Container;
}

function assertRelayContext(relay) {
  require('fbjs/lib/invariant')(require('./isRelayContext')(relay), 'ReactRelayRefetchContainer: Expected `context.relay` to be an object ' + 'conforming to the `RelayContext` interface, got `%s`.', relay);
  return relay;
}

/**
 * Wrap the basic `createContainer()` function with logic to adapt to the
 * `context.relay.environment` in which it is rendered. Specifically, the
 * extraction of the environment-specific version of fragments in the
 * `fragmentSpec` is memoized once per environment, rather than once per
 * instance of the container constructed/rendered.
 */
function createContainer(Component, fragmentSpec, taggedNode) {
  var Container = require('./buildReactRelayContainer')(Component, fragmentSpec, function (ComponentClass, fragments) {
    return createContainerWithFragments(ComponentClass, fragments, taggedNode);
  });
  Container.childContextTypes = containerContextTypes;
  return Container;
}

module.exports = { createContainer: createContainer, createContainerWithFragments: createContainerWithFragments };