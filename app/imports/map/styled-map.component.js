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
var StyledMap = (function () {
    function StyledMap(_wrapper) {
        this._wrapper = _wrapper;
        this._wrapper.getMap().then(function (m) {
            var mapOptions = {
                disableDefaultUI: true,
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
            m.setOptions(mapOptions);
        });
    }
    StyledMap = __decorate([
        core_1.Component({
            selector: 'styled-map',
            template: ''
        }), 
        __metadata('design:paramtypes', [core_2.GoogleMapsAPIWrapper])
    ], StyledMap);
    return StyledMap;
}());
exports.StyledMap = StyledMap;
//# sourceMappingURL=styled-map.component.js.map