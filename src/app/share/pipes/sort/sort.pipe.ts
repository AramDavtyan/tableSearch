import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from '../../../models/user/user';
import {SortStateEnum} from '../../enums/sort-state.enum';

@Pipe({
  name: 'sortPipe'
})
export class SortPipe implements PipeTransform {
  public transform(value: Array<IUser>, filed: string, sortState: SortStateEnum): Array<IUser> {
    if (!filed) {
      return value;
    }
    value = [...value];
    switch (sortState) {
      case SortStateEnum.ASC:
        return value.sort((a, b) => a[filed] > b[filed] ? 1 : -1);
      case SortStateEnum.DESC:
        return value.sort((a, b) => a[filed] > b[filed] ? -1 : 1);
      default:
        return value;
    }
  }
}
