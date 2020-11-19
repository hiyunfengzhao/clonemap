import {api_key} from './config.js';
mapboxgl.accessToken = api_key;

// default location
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-122.18056,37.55149], // starting position
    zoom: 9 // starting zoom
    });
  
// dot locator control
map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showAccuracyCircle: false
        })
        
    , "top-right");
    

// + - navigation control
map.addControl(new mapboxgl.NavigationControl());
  
// direction control
map.addControl(
  new MapboxDirections({
  accessToken: mapboxgl.accessToken
  }),
  'top-left'
  );

// switch layer
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');  

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
     
    for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
    }


