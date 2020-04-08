import { Pipe, PipeTransform } from '@angular/core';

/**
 * [number, number] | switchNumber:switchFn
 */
@Pipe({
  name: 'switchNumber'
})
export class SwitchNumberPipe implements PipeTransform {

  /**
   * @param switchFn  - determina se prendere il valore 1 o il valore 2
   */
  transform(values: [number, number], switchFn: boolean, ...args: unknown[]): unknown {
    if (!Array.isArray(values)) {
      console.error('SwitchNumberPipe richiede la presenza di un array di numeri per funzionare');
      console.error(values);
      return -1;
    }
    if (values.length !== 2 || values.some(n => !(typeof n === 'number'))) {
      console.error('SwitchNumberPipe richiede che l\'array contenga 2 valori numerici');
      console.error(values);
      return -1;
    }
    const equal = switchFn || true;
    return equal ? values[0] : values[1];
  }

}
