import {Component, Input} from '@angular/core';
import {SortStateEnum} from '../../../share/enums/sort-state.enum';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent {
  @Input() public users;
  @Input() public searchValue;
  @Input() public sortState: SortStateEnum;
}
