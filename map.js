// map.js
const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json', // no API key needed (demo tiles)
  center: [103.8198, 1.3521], // Singapore [lng, lat]
  zoom: 10
});

// Optional: zoom controls
map.addControl(new maplibregl.NavigationControl(), 'top-right');
