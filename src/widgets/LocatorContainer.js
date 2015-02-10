/** @jsx React.DOM */
define([
  'react',
  'dojo/query',
  'dojo/dom',
  'dojo/dom-construct',
  './components/Locator'
], function(
  React,
  query, dom, domConstruct,
  Locator
) {

  var createContainer = function() {
    var c = query('.locator-container');
    if (c.length) {
      return c.shift();
    }

    var container = domConstruct.create('div', {
      className: 'locator-container'
    }, dom.byId('map_root'), 'first');
    return container;
  };

  var addContainer = function(map) {
    React.render(<Locator map={map} />, createContainer());
  };

  return {
    addContainer: addContainer
  };

});
