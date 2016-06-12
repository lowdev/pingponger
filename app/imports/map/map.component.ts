import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES,
  MarkerManager
} from 'angular2-google-maps/core';

import { StyledMap } from './styled-map.component';

import { Marker } from './marker';
import { MarkerClusterOptions } from './markerClusterOptions';
import { Table } from './model/Table';

import { TableService } from './model/table.service';
import { MarkerService } from './marker.service';

declare var google: any;
declare var MarkerClusterer: any;

@Component({
  selector: 'map',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES, StyledMap],
  providers: [MarkerService, TableService],
  templateUrl: 'app/imports/map/map.component.html'
})
export class MapComponent {
  map: any;
  markers: any[];

  // google maps zoom level
  zoom: number = 12;

  // initial center position for the map
  lat: number = 48.8566;
  lng: number = 2.3522;

  constructor(private markerService: MarkerService) {
  }

  zoomIn() {
    this.zoom++;
  }

  zoomOut() {
    this.zoom--;
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  mapLoaded(m) {
    console.log('map loaded!', m);

    this.markerService.getAllMarkers(m).then(markers => {
      this.markers = markers;
      new MarkerClusterer(m, markers, MarkerClusterOptions.get());
    });
  }
}
