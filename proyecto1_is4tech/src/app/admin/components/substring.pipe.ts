import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (value.length <= length) {
      return value;
    } else {console.log(value)
      return value.substring(0, length) + '...';
    }
  }
}

