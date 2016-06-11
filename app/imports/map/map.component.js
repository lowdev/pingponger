"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');
var styled_map_component_1 = require('./styled-map.component');
var MapComponent = (function () {
    function MapComponent() {
        // google maps zoom level
        this.zoom = 8;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
        this.markers = [
            {
                lat: 51.673858,
                lng: 7.815982,
                label: 'A',
                draggable: true
            },
            {
                lat: 51.373858,
                lng: 7.215982,
                label: 'B',
                draggable: false
            },
            {
                lat: 51.723858,
                lng: 7.895982,
                label: 'C',
                draggable: true
            }
        ];
    }
    MapComponent.prototype.zoomIn = function () {
        this.zoom++;
    };
    MapComponent.prototype.zoomOut = function () {
        this.zoom--;
    };
    MapComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    MapComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
        });
    };
    MapComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'map',
            directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES, styled_map_component_1.StyledMap],
            templateUrl: 'app/imports/map/map.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map