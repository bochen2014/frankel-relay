/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayRootContainer
 * 
 */

'use strict';

/**
 * @public
 *
 * RelayRootContainer sends requests for data required to render the supplied
 * `Component` and `route`. The `Component` must be a container created using
 * `Relay.createContainer`.
 *
 * === Render Callbacks ===
 *
 * Whenever the RelayRootContainer renders, one of three render callback props
 * are invoked depending on whether data is being loaded, can be resolved, or if
 * an error is incurred.
 *
 *  ReactDOM.render(
 *    <RelayRootContainer
 *      Component={FooComponent}
 *      route={fooRoute}
 *      renderLoading={function() {
 *        return <View>Loading...</View>;
 *      }}
 *      renderFetched={function(data) {
 *        // Must spread `data` into <FooComponent>.
 *        return <FooComponent {...data} />;
 *      }}
 *      renderFailure={function(error) {
 *        return <View>Error: {error.message}</View>;
 *      }}
 *    />,
 *    ...
 *  );
 *
 * If a callback is not supplied, it has a default behavior:
 *
 *  - Without `renderFetched`, `Component` will be rendered with fetched data.
 *  - Without `renderFailure`, an error will render to null.
 *  - Without `renderLoading`, the existing view will continue to render. If
 *    this is the initial mount (with no existing view), renders to null.
 *
 * In addition, supplying a `renderLoading` that returns undefined has the same
 * effect as not supplying the callback. (Usually, an undefined return value is
 * an error in React).
 *
 * === Refs ===
 *
 * References to elements rendered by any of these callbacks can be obtained by
 * using the React `ref` prop. For example:
 *
 *   <FooComponent {...data} ref={handleFooRef} />
 *
 *   function handleFooRef(component) {
 *     // Invoked when `<FooComponent>` is mounted or unmounted. When mounted,
 *     // `component` will be the component. When unmounted, `component` will
 *     // be null.
 *   }
 *
 */
function RelayRootContainer(_ref) {
  var Component = _ref.Component,
      forceFetch = _ref.forceFetch,
      onReadyStateChange = _ref.onReadyStateChange,
      renderFailure = _ref.renderFailure,
      renderFetched = _ref.renderFetched,
      renderLoading = _ref.renderLoading,
      route = _ref.route,
      shouldFetch = _ref.shouldFetch;

  return require('react').createElement(require('./RelayRenderer'), {
    Container: Component,
    forceFetch: forceFetch,
    onReadyStateChange: onReadyStateChange,
    queryConfig: route,
    environment: require('./RelayStore'),
    shouldFetch: shouldFetch,
    render: function render(_ref2) {
      var done = _ref2.done,
          error = _ref2.error,
          props = _ref2.props,
          retry = _ref2.retry,
          stale = _ref2.stale;

      if (error) {
        if (renderFailure) {
          return renderFailure(error, retry);
        }
      } else if (props) {
        if (renderFetched) {
          return renderFetched(props, { done: done, stale: stale });
        } else {
          return require('react').createElement(Component, props);
        }
      } else {
        if (renderLoading) {
          return renderLoading();
        }
      }
      return undefined;
    }
  });
}

RelayRootContainer.propTypes = {
  Component: require('./RelayPropTypes').Container,
  forceFetch: require('prop-types').bool,
  onReadyStateChange: require('prop-types').func,
  renderFailure: require('prop-types').func,
  renderFetched: require('prop-types').func,
  renderLoading: require('prop-types').func,
  route: require('./RelayPropTypes').QueryConfig.isRequired,
  shouldFetch: require('prop-types').bool
};

module.exports = RelayRootContainer;