/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRelayPaginationContainer
 * 
 */

'use strict';

var _classCallCheck3 = _interopRequireDefault(require('babel-runtime/helpers/classCallCheck'));

var _possibleConstructorReturn3 = _interopRequireDefault(require('babel-runtime/helpers/possibleConstructorReturn'));

var _inherits3 = _interopRequireDefault(require('babel-runtime/helpers/inherits'));

var _defineProperty3 = _interopRequireDefault(require('babel-runtime/helpers/defineProperty'));

var _extends4 = _interopRequireDefault(require('babel-runtime/helpers/extends'));

var _keys2 = _interopRequireDefault(require('babel-runtime/core-js/object/keys'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = require('./ReactRelayContainerProfiler'),
    profileContainer = _require.profileContainer;

var _require2 = require('./RelayConnectionInterface'),
    EDGES = _require2.EDGES,
    PAGE_INFO = _require2.PAGE_INFO,
    HAS_NEXT_PAGE = _require2.HAS_NEXT_PAGE,
    HAS_PREV_PAGE = _require2.HAS_PREV_PAGE,
    END_CURSOR = _require2.END_CURSOR,
    START_CURSOR = _require2.START_CURSOR;

var _require3 = require('./RelayContainerUtils'),
    getComponentName = _require3.getComponentName,
    getReactComponent = _require3.getReactComponent;

var containerContextTypes = {
  relay: require('./RelayPropTypes').Relay
};

var FORWARD = 'forward';

function createGetConnectionFromProps(metadata) {
  var path = metadata.path;
  require('fbjs/lib/invariant')(path, 'ReactRelayPaginationContainer: Unable to synthesize a ' + 'getConnectionFromProps function.');
  return function (props) {
    var data = props[metadata.fragmentName];
    for (var i = 0; i < path.length; i++) {
      if (!data || typeof data !== 'object') {
        return null;
      }
      data = data[path[i]];
    }
    return data;
  };
}

function createGetFragmentVariables(metadata) {
  var countVariable = metadata.count;
  require('fbjs/lib/invariant')(countVariable, 'ReactRelayPaginationContainer: Unable to synthesize a ' + 'getFragmentVariables function.');
  return function (prevVars, totalCount) {
    return (0, _extends4['default'])({}, prevVars, (0, _defineProperty3['default'])({}, countVariable, totalCount));
  };
}

function findConnectionMetadata(fragments) {
  var foundConnectionMetadata = null;
  for (var _fragmentName in fragments) {
    var fragment = fragments[_fragmentName];
    var connectionMetadata = fragment.metadata && fragment.metadata.connection;
    if (connectionMetadata) {
      require('fbjs/lib/invariant')(connectionMetadata.length === 1, 'ReactRelayPaginationContainer: Only a single @connection is ' + 'supported, `%s` has %s.', _fragmentName, connectionMetadata.length);
      require('fbjs/lib/invariant')(!foundConnectionMetadata, 'ReactRelayPaginationContainer: Only a single fragment with ' + '@connection is supported.');
      foundConnectionMetadata = (0, _extends4['default'])({}, connectionMetadata[0], {
        fragmentName: _fragmentName
      });
    }
  }
  // TO-DO(t17350438) for modern, this should be an invariant.
  return foundConnectionMetadata || {};
}

function createContainerWithFragments(Component, fragments, connectionConfig) {
  var ComponentClass = getReactComponent(Component);
  var componentName = getComponentName(Component);
  var containerName = 'Relay(' + componentName + ')';

  var metadata = findConnectionMetadata(fragments);

  var getConnectionFromProps = connectionConfig.getConnectionFromProps || createGetConnectionFromProps(metadata);

  var direction = connectionConfig.direction || metadata.direction;
  require('fbjs/lib/invariant')(direction, 'ReactRelayPaginationContainer: Unable to infer direction of the ' + 'connection, possibly because both first and last are provided.');

  var getFragmentVariables = connectionConfig.getFragmentVariables || createGetFragmentVariables(metadata);

  var Container = function (_React$Component) {
    (0, _inherits3['default'])(Container, _React$Component);

    function Container(props, context) {
      (0, _classCallCheck3['default'])(this, Container);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

      _this._handleFragmentDataUpdate = function () {
        var profiler = require('./RelayProfiler').profile('ReactRelayPaginationContainer.handleFragmentDataUpdate');
        _this.setState({ data: _this._resolver.resolve() }, profiler.stop);
      };

      _this._hasMore = function () {
        var connectionData = _this._getConnectionData();
        return !!connectionData && connectionData.hasMore;
      };

      _this._isLoading = function () {
        return !!_this._pendingRefetch;
      };

      _this._refetchConnection = function (totalCount, callback) {
        var paginatingVariables = {
          count: totalCount,
          cursor: null,
          totalCount: totalCount
        };
        return _this._fetchPage(paginatingVariables, callback, { force: true });
      };

      _this._loadMore = function (pageSize, callback, options) {
        var connectionData = _this._getConnectionData();
        if (!connectionData) {
          return null;
        }
        var totalCount = connectionData.edgeCount + pageSize;
        if (options && options.force) {
          return _this._refetchConnection(totalCount, callback);
        }
        var paginatingVariables = {
          count: pageSize,
          cursor: connectionData.cursor,
          totalCount: totalCount
        };
        return _this._fetchPage(paginatingVariables, callback, options);
      };

      var relay = assertRelayContext(context.relay);
      var createFragmentSpecResolver = relay.environment.unstable_internal.createFragmentSpecResolver;

      _this._localVariables = null;
      _this._pendingRefetch = null;
      _this._references = [];
      _this._resolver = createFragmentSpecResolver(relay, fragments, props, _this._handleFragmentDataUpdate);
      var data = _this._resolver.resolve()
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
      // - Pending fetches are for the previous records.
      if (this.context.relay.environment !== relay.environment ||
       this.context.relay.variables !== relay.variables|| !require('fbjs/lib/areEqual')(prevIDs, nextIDs)) {
        this._release();
        this._localVariables = null;
        this._resolver = createFragmentSpecResolver(relay, fragments, nextProps, this._handleFragmentDataUpdate);
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

    //const paginationContainerName = 'TodoList';
    const paginationContainerName = 'SearchTaxList';
    Container.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      // Short-circuit if any Relay-related data has changed
      if (nextContext.relay !== this.context.relay || nextState.data !== this.state.data || nextState.relayProp !== this.state.relayProp) {
        if(componentName === paginationContainerName){
          console.log(`          ___SCU=TRUE  ${paginationContainerName}-container : after refetch->setState->scu returns true   -> re-render...`)
        }
        return true;
      }
      if(componentName === paginationContainerName){
          console.log(`          ___SCU=FALSE  ${paginationContainerName}-container : after refetch->setState->scu returns false   skip re-render...`)
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

    Container.prototype._buildRelayProp = function _buildRelayProp(relay) {
      return {
        hasMore: this._hasMore,
        isLoading: this._isLoading,
        loadMore: this._loadMore,
        refetchConnection: this._refetchConnection,
        environment: relay.environment
      };
    };

    /**
     * Render new data for the existing props/context.
     */


    Container.prototype._getConnectionData = function _getConnectionData() {
      // Extract connection data and verify there are more edges to fetch
      var props = (0, _extends4['default'])({}, this.props, this.state.data);
      var connectionData = getConnectionFromProps(props);
      if (connectionData == null) {
        return null;
      }
      require('fbjs/lib/invariant')(typeof connectionData === 'object', 'ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`' + 'to return `null` or a plain object with %s and %s properties, got `%s`.' + componentName, EDGES, PAGE_INFO, connectionData);
      var edges = connectionData[EDGES];
      var pageInfo = connectionData[PAGE_INFO];
      if (edges == null || pageInfo == null) {
        return null;
      }
      require('fbjs/lib/invariant')(Array.isArray(edges), 'ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`' + 'to return an object with %s: Array, got `%s`.', componentName, EDGES, edges);
      require('fbjs/lib/invariant')(typeof pageInfo === 'object', 'ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`' + 'to return an object with %s: Object, got `%s`.', componentName, PAGE_INFO, pageInfo);
      var hasMore = direction === FORWARD ? pageInfo[HAS_NEXT_PAGE] : pageInfo[HAS_PREV_PAGE];
      var cursor = direction === FORWARD ? pageInfo[END_CURSOR] : pageInfo[START_CURSOR];
      if (typeof hasMore !== 'boolean' || typeof cursor !== 'string') {
        require('fbjs/lib/warning')(false, 'ReactRelayPaginationContainer: Cannot paginate without %s fields in `%s`. ' + 'Be sure to fetch %s (got `%s`) and %s (got `%s`).', PAGE_INFO, componentName, direction === FORWARD ? HAS_NEXT_PAGE : HAS_PREV_PAGE, hasMore, direction === FORWARD ? END_CURSOR : START_CURSOR, cursor);
        return null;
      }
      return {
        cursor: cursor,
        edgeCount: edges.length,
        hasMore: hasMore
      };
    };

    Container.prototype._fetchPage = function _fetchPage(paginatingVariables, callback, options) {
      var _this2 = this;

      var _assertRelayContext = assertRelayContext(this.context.relay),
          environment = _assertRelayContext.environment;

      var _environment$unstable = environment.unstable_internal,
          createOperationSelector = _environment$unstable.createOperationSelector,
          getOperation = _environment$unstable.getOperation,
          getVariablesFromObject = _environment$unstable.getVariablesFromObject;

      var props = (0, _extends4['default'])({}, this.props, this.state.data);
      var fragmentVariables = getVariablesFromObject(this.context.relay.variables, fragments, this.props);
      var fetchVariables = connectionConfig.getVariables(props, {
        count: paginatingVariables.count,
        cursor: paginatingVariables.cursor
      },
      // Pass the variables used to fetch the fragments initially
      fragmentVariables);
      require('fbjs/lib/invariant')(typeof fetchVariables === 'object' && fetchVariables !== null, 'ReactRelayPaginationContainer: Expected `getVariables()` to ' + 'return an object, got `%s` in `%s`.', fetchVariables, componentName);
      this._localVariables = fetchVariables;

      var cacheConfig = options ? { force: !!options.force } : undefined;
      var query = getOperation(connectionConfig.query);
      var operation = createOperationSelector(query, fetchVariables);

      var onCompleted = function onCompleted() {
        _this2._pendingRefetch = null;
        callback();
        _this2._updateSnapshots(paginatingVariables.totalCount);
      };
      var onError = function onError(error) {
        _this2._pendingRefetch = null;
        callback(error);
      };

      // Immediately retain the results of the query to prevent cached
      // data from being evicted
      var reference = environment.retain(operation.root);
      this._references.push(reference);

      if (this._pendingRefetch) {
        this._pendingRefetch.dispose();
      }
      var pendingRefetch = environment.streamQuery({
        cacheConfig: cacheConfig,
        onCompleted: onCompleted,
        onError: onError,
        operation: operation
      });
      this._pendingRefetch = pendingRefetch;
      return {
        dispose: function dispose() {
          // Disposing a loadMore() call should always dispose the fetch itself,
          // but should not clear this._pendingFetch unless the loadMore() being
          // cancelled is the most recent call.
          pendingRefetch.dispose();
          if (_this2._pendingRefetch === pendingRefetch) {
            _this2._pendingRefetch = null;
          }
        }
      };
    };

    Container.prototype._updateSnapshots = function _updateSnapshots(totalCount) {
      var getVariablesFromObject = this.context.relay.environment.unstable_internal.getVariablesFromObject;

      var prevVariables = getVariablesFromObject(this.context.relay.variables, fragments, this.props);
      var nextVariables = getFragmentVariables(prevVariables, totalCount);

      var prevData = this._resolver.resolve();
      this._resolver.setVariables(nextVariables);
      var nextData = this._resolver.resolve();
      // Workaround slightly different handling for connection in different
      // core implementations:
      // - Classic core requires the count to be explicitly incremented
      // - Modern core automatically appends new items, updating the count
      //   isn't required to see new data.
      //
      // `setState` is only required if changing the variables would change the
      // resolved data.
      // TO-DO #14894725: remove PaginationContainer equal check
      if (!require('fbjs/lib/areEqual')(prevData, nextData)) {
        this.setState({ data: nextData });
      }
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

    Container.prototype.render = function render() {
      console.log(`${componentName}-paginationContainer render`); //bchen
      if (ComponentClass) {
        return require('react').createElement(ComponentClass, (0, _extends4['default'])({}, this.props, this.state.data, {
          ref: 'component' // eslint-disable-line react/no-string-refs
          , relay: this.state.relayProp
        }));
      } else {
        // Stateless functional, doesn't support `ref`
        return require('react').createElement(Component, (0, _extends4['default'])({}, this.props, this.state.data, {
          relay: this.state.relayProp
        }));
      }
    };

    return Container;
  }(require('react').Component);

  profileContainer(Container, 'ReactRelayPaginationContainer');
  Container.contextTypes = containerContextTypes;
  Container.displayName = containerName;

  return Container;
}

function assertRelayContext(relay) {
  require('fbjs/lib/invariant')(require('./isRelayContext')(relay), 'ReactRelayPaginationContainer: Expected `context.relay` to be an object ' + 'conforming to the `RelayContext` interface, got `%s`.', relay);
  return relay;
}

/**
 * Wrap the basic `createContainer()` function with logic to adapt to the
 * `context.relay.environment` in which it is rendered. Specifically, the
 * extraction of the environment-specific version of fragments in the
 * `fragmentSpec` is memoized once per environment, rather than once per
 * instance of the container constructed/rendered.
 */
function createContainer(Component, fragmentSpec, connectionConfig) {
  return require('./buildReactRelayContainer')(Component, fragmentSpec, function (ComponentClass, fragments) {
    return createContainerWithFragments(ComponentClass, fragments, connectionConfig);
  });
}

module.exports = { createContainer: createContainer, createContainerWithFragments: createContainerWithFragments };