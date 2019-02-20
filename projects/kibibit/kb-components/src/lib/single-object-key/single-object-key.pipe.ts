import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kbSingleObjectKey'
})
export class SingleObjectKeyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const keys = value && Object.keys(value);

    if (keys && keys.length > 0) {
      return keys[0];
    }
    return null;
  }
}
