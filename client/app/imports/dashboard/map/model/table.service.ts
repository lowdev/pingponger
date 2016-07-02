import { Injectable } from '@angular/core';

import { TABLE } from './mock-tables';

import { Table } from './table';

@Injectable()
export class TableService {
   findAll(): Promise<Table[]> {
     return Promise.resolve(TABLE);
   }
}
