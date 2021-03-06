/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRelayCompatContainerBuilder
 * 
 */

'use strict';

var _extends3 = _interopRequireDefault(require('babel-runtime/helpers/extends'));

var _keys2 = _interopRequireDefault(require('babel-runtime/core-js/object/keys'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = require('./RelayContainerUtils'),
    getComponentName = _require.getComponentName,
    getContainerName = _require.getContainerName;

var containerContextTypes = {
  relay: require('./RelayPropTypes').Relay
};

/**
 * `injectDefaultVariablesProvider()` allows classic versions of a container to
 * inject default variable values for a fragment via the arguments of any
 * references to it. This is useful for fragments that need to reference
 * global query constants (e.g. the device pixel ratio) but may be included
 * in classic queries that do not define the necessary param.
 */
var injectedDefaultVariablesProvider = null;
function injectDefaultVariablesProvider(variablesProvider) {
  require('fbjs/lib/invariant')(!injectedDefaultVariablesProvider, 'injectDefaultVariablesProvider must be called no more than once.');
  injectedDefaultVariablesProvider = variablesProvider;
}

/**
 * Creates a component class whose instances adapt to the
 * `context.relay.environment` in which they are rendered and which have the
 * necessary static methods (`getFragment()` etc) to be composed within classic
 * `Relay.Containers`.
 *
 * The returned constructor uses the given `createContainerForEnvironment` to
 * construct a new container type whenever a new environment is encountered;
 * while the constructor is being used for the same environment (the expected
 * majority case) this value is memoized to avoid creating unnecessary extra
 * container definitions or unwrapping the environment-specific fragment
 * defintions unnecessarily.
 */
function buildCompatContainer(ComponentClass, fragmentSpec, createContainerWithFragments) {
  // Sanity-check user-defined fragment input
  var containerName = getContainerName(ComponentClass);
  require('./assertFragmentMap')(getComponentName(ComponentClass), fragmentSpec);

  var injectedDefaultVariables = null;
  function getDefaultVariables() {
    if (injectedDefaultVariables == null) {
      injectedDefaultVariables = injectedDefaultVariablesProvider ? injectedDefaultVariablesProvider() : {};
    }
    return injectedDefaultVariables;
  }

  // Similar to RelayContainer.getFragment(), except that this returns a
  // FragmentSpread in order to support referencing root variables.
  function getFragment(fragmentName, variableMapping) {
    var taggedNode = fragmentSpec[fragmentName];
    require('fbjs/lib/invariant')(taggedNode, 'ReactRelayCompatContainerBuilder: Expected a fragment named `%s` to be defined ' + 'on `%s`.', fragmentName, containerName);
    var fragment = require('./RelayGraphQLTag').getClassicFragment(taggedNode);

    var args = (0, _extends3['default'])({}, getDefaultVariables(), variableMapping || {});

    return {
      kind: 'FragmentSpread',
      args: args,
      fragment: fragment
    };
  }

  function hasVariable(variableName) {
    return (0, _keys2['default'])(fragmentSpec).some(function (fragmentName) {
      var fragment = require('./RelayGraphQLTag').getClassicFragment(fragmentSpec[fragmentName]);
      return fragment.argumentDefinitions.some(function (argDef) {
        return argDef.name === variableName;
      });
    });
  }

  // Memoize a container for the last environment instance encountered
  var environment = void 0;
  var Container = void 0;
  function ContainerConstructor(props, context) {
    if (Container == null || context.relay.environment !== environment) {
      environment = context.relay.environment;
      var getFragmentFromTag = environment.unstable_internal.getFragment;

      var _fragments = require('fbjs/lib/mapObject')(fragmentSpec, getFragmentFromTag);
      Container = createContainerWithFragments(ComponentClass, _fragments);
      require('./RelayContainerProxy').proxyMethods(Container, ComponentClass);
    }
    return new Container(props, context);
  }
  ContainerConstructor.contextTypes = containerContextTypes;
  ContainerConstructor.displayName = containerName;

  // Classic container static methods
  ContainerConstructor.getFragment = getFragment;
  ContainerConstructor.getFragmentNames = function () {
    return (0, _keys2['default'])(fragmentSpec);
  };
  ContainerConstructor.hasFragment = function (name) {
    return fragmentSpec.hasOwnProperty(name);
  };
  ContainerConstructor.hasVariable = hasVariable;

  // Create a back-reference from the Component to the Container for cases
  // where a Classic Component might refer to itself, expecting a Container.
  ComponentClass.__container__ = ContainerConstructor;

  return ContainerConstructor;
}

module.exports = { injectDefaultVariablesProvider: injectDefaultVariablesProvider, buildCompatContainer: buildCompatContainer };