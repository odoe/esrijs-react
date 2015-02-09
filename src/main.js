require([
  'esri/map',
  'widgets/LocatorContainer',
  'dojo/domReady!'
], function(
  Map,
  LocatorContainer
) {
  var map = new Map('map', {
    basemap: 'topo',
    center: [-122.45, 37.75],
    zoom: 13
  });

  map.on('load', function() {
    LocatorContainer.addContainer(map);
  });
});
