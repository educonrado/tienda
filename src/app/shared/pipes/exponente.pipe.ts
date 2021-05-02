import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponente'
})
export class ExponentePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return Math.pow(value, args);
  }

}
