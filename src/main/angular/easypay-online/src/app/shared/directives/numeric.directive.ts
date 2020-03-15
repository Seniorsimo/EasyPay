import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

/** Validatore di caratteri numerici. ritorna */
export function numericValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isNumeric = new RegExp('^[0-9]*$').test(control.value);
    return !isNumeric ? { 'numeric': { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appNumeric]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumericDirective, multi: true }]
})
export class NumericDirective implements Validator {

  validate(control: AbstractControl): { [key: string]: any } | null {
    return  numericValidator()(control);
  }
}
