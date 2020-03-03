import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/user/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() public users: Array<IUser>;
  public searchValue: string;
}
