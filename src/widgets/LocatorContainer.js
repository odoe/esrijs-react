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
    var container = domConstruct.create('div', {
      className: 'locator-container'
    }, dom.byId('map_root'), 'first');
    return container;
  };

  var addContainer = function(map) {
    if (query('locator-container').length) {
      return;
    }

    React.render(<Locator map={map} />, createContainer());
  };

  return {
    addContainer: addContainer
  };

});
