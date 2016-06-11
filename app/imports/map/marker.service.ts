import  { Injectable } from '@angular/core';

import { TableService } from './model/table.service';
import { Table } from './model/table';
import { Marker } from './marker';

@Injectable()
export class MarkerService {
   constructor(private tableService: TableService) {}

   public getAllMarkers(): Promise<Marker[]> {
     let markers: Marker[];
     this.tableService.findAll().then(tables => markers = this.toMarkers(tables));

     return Promise.resolve(markers);
   }

   private toMarkers(tables: Table[]): Marker[] {
     return tables.map(this.toMarker);
   }

   private toMarker(table: Table): Marker {
     let marker: Marker = new Marker();

     return marker;
   }
}
