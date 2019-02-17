import { Pipe, PipeTransform } from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_;

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? moment(value).fromNow() : null;
  }

}
