import  { Injectable } from '@angular/core';

import { TableService } from './model/table.service';
import { Table } from './model/table';

declare var google: any;

@Injectable()
export class MarkerService {
   constructor(private tableService: TableService) {}

   public getAllMarkers(googleMap: any): Promise<any[]> {
     return this.tableService.findAll().then(tables => {
       return this.toMarkers(tables, googleMap);
     });
   }

   private toMarkers(tables: Table[], googleMap: any): any[] {
     return tables.map(table => this.toMarker(table, googleMap));
   }

   private toMarker(table: Table, googleMap: any): any {
     return new google.maps.Marker({
       title: table.name,
       position: { lat: table.lat, lng: table.lng },
       map: googleMap
     });
   }
}
