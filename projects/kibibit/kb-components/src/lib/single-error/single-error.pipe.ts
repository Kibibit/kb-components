import { Pipe, PipeTransform } from '@angular/core';
import { SingleObjectKeyPipe } from '../single-object-key/single-object-key.pipe';

@Pipe({
  name: 'kbSingleError'
})
export class SingleErrorPipe extends SingleObjectKeyPipe implements PipeTransform { }
