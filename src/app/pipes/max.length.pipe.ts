import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 20) {
      let descSubstring = value.substring(0, 20);
      if (descSubstring.lastIndexOf(" ") > 1) {
      let description = descSubstring.substring(0, descSubstring.lastIndexOf(" "))
      return (description + '...');
      }
      return (descSubstring + '...');
    } else {
      return (value);
    }
  }
}