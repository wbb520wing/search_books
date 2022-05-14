import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordsLimited'
})
export class WordsLimitedPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.length > 300 ? value.slice(0,300) + '...' : value;
  }
}
