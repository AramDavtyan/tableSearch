import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableBodyComponent} from './table-body/table-body.component';
import {TableFooterComponent} from './table-footer/table-footer.component';
import {TableHeaderComponent} from './table-header/table-header.component';
import {SearchPipeModule} from '../../share/pipes/search/search.module';
import {SortModule} from '../../share/pipes/sort/sort.module';
import {TableComponent} from './table.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TableComponent, TableBodyComponent, TableFooterComponent, TableHeaderComponent],
  imports: [
    CommonModule,
    SearchPipeModule,
    SortModule,
    FormsModule
  ],
  exports: [TableBodyComponent, TableFooterComponent, TableHeaderComponent, TableComponent]
})
export class TableModule { }
