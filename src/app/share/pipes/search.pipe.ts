import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from '../../models/user/user';

@Pipe({
  name: 'SearchFilter'
})
export class SearchPipe implements PipeTransform {
  public transform(value: Array<IUser>, args: string): Array<IUser> {
    if (!args || args.length < 3) {
      return value;
    }
    args = args.toLowerCase();
    return value.filter(item => item.title.toLowerCase().includes(args));
  }
}
