import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';

/**
 * restituisce il minimo tra i due valori passati
 */
@Pipe({
  name: 'min'
})
export class MinPipe implements PipeTransform {

  transform(values: number[], ...args: unknown[]): number {
    if (!Array.isArray(values)) {
      console.error('MinPipe richiede la presenza di un array di numeri per funzionare');
      console.error(values);
      return -1;
    }
    if (values.some(n => !(typeof n === 'number'))) {
      console.error('MinPipe richiede che l\'array contenga valori numerici');
      console.error(values);
      return -1;
    }
    return Math.min(...values);
  }

}
