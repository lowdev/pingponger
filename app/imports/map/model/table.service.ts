import { Injectable } from '@angular/core';
import { TABLE } from './mock-tables';

@Injectable()
export class TableService {
   findAll() {
     return Promise.resolve(TABLE);
   }
}
