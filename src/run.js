(function() {
  'use strict';

  var pathRX = new RegExp(/\/[^\/]+$/)
    , locationPath = location.pathname.replace(pathRX, '/');

  require({
    async: true,
    parseOnLoad: true,
    packages: [{
      name: 'widgets',
      location: locationPath + 'dist/widgets'
    }, {
      name: 'react',
      location: locationPath + 'bower_components/react/',
      main: 'react'
    }, {
      name: 'app',
      location: locationPath + 'dist',
      main: 'main'
    }]
  }, ['app']);

})();
