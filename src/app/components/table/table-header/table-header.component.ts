import {Component, EventEmitter, Output} from '@angular/core';
import {SortStateEnum} from '../../../share/enums/sort-state.enum';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent {
  public sortState: SortStateEnum = SortStateEnum.NORMAL;
  @Output() public sortStateOutput = new EventEmitter<number>();

  public handleSort() {
    this.sortState = ((this.sortState + 1) % 4) || SortStateEnum.NORMAL;
    this.sortStateOutput.emit(this.sortState);
  }
}
