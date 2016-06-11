import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES,
  GoogleMapsAPIWrapper, MarkerManager
} from 'angular2-google-maps/core';

import { StyledMap } from './styled-map.component';
import { Marker } from './marker';

import { Table } from './model/Table';

import { TableService } from './model/table.service';
import { MarkerService } from './marker.service';

declare var google: any;

@Component({
  selector: 'map',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES, StyledMap],
  providers: [MarkerService, TableService],
  templateUrl: 'app/imports/map/map.component.html'
})
export class MapComponent {
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  markers: Marker[] = [
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
  ]

  constructor(private markerService: MarkerService) {
    markerService.getAllMarkers().then(markers => this.markers = markers);
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
}
