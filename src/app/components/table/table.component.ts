import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public searchValue: string;
  @Input() public users;
  @Output() public searchValueChanged = new EventEmitter<string>();

  public getSearchValue(event) {
    this.searchValueChanged.emit(event);
  }

}
