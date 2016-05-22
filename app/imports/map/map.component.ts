import { Component } from '@angular/core';

declare var google: any;

@Component({
  selector: 'map',
  templateUrl: 'app/imports/map/map.component.html'
})
export class MapComponent {
  zoomLevel: Number;
  map: any;

  constructor() {
    this.zoomLevel = 11;
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: this.zoomLevel,
        disableDefaultUI: true,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Map styling
        styles: [{
            featureType: 'water',
            elementType: 'all',
            stylers: [{
                hue: '#e9ebed'
            }, {
                saturation: -78
            }, {
                lightness: 67
            }, {
                visibility: 'simplified'
            }]
        }, {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [{
                hue: '#ffffff'
            }, {
                saturation: -100
            }, {
                lightness: 100
            }, {
                visibility: 'simplified'
            }]
        }, {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                hue: '#bbc0c4'
            }, {
                saturation: -93
            }, {
                lightness: 31
            }, {
                visibility: 'simplified'
            }]
        }, {
            featureType: 'poi',
            elementType: 'all',
            stylers: [{
                hue: '#ffffff'
            }, {
                saturation: -100
            }, {
                lightness: 100
            }, {
                visibility: 'off'
            }]
        }, {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{
                hue: '#e9ebed'
            }, {
                saturation: -90
            }, {
                lightness: -8
            }, {
                visibility: 'simplified'
            }]
        }, {
            featureType: 'transit',
            elementType: 'all',
            stylers: [{
                hue: '#e9ebed'
            }, {
                saturation: 10
            }, {
                lightness: 69
            }, {
                visibility: 'on'
            }]
        }, {
            featureType: 'administrative.locality',
            elementType: 'all',
            stylers: [{
                hue: '#2c2e33'
            }, {
                saturation: 7
            }, {
                lightness: 19
            }, {
                visibility: 'on'
            }]
        }, {
            featureType: 'road',
            elementType: 'labels',
            stylers: [{
                hue: '#bbc0c4'
            }, {
                saturation: -93
            }, {
                lightness: 31
            }, {
                visibility: 'on'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'labels',
            stylers: [{
                hue: '#bbc0c4'
            }, {
                saturation: -93
            }, {
                lightness: -2
            }, {
                visibility: 'simplified'
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('google-map');

    // Create the Google Map using out element and options defined above
    this.map = new google.maps.Map(mapElement, mapOptions);
  }
}
