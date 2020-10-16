import { AbstractControl } from '@angular/forms';
// NOTA: apparentemente la risposta { [errorName]: false } viene cmq bloccata dal validatore.
// Trick Solution: in caso di validatore corretto passo null.

/** form validator per verificare se l'età inserita (presumibilmente di nascita) sia maggiore di 18 */
export function isOver18(control: AbstractControl): { [key: string]: boolean } {
  const errorCode = 'isOver18';

  if (control && control.value) {
    const age = getBirthday(control.value);
    return  age >= 0 && age < 18 ? { [errorCode]: true } : null;
  }
  return null;
}

/** form validator per verificare se lutente è effettivamente nato (anni >= 0) */
export function isBorn(control: AbstractControl): { [key: string]: boolean } {
  const errorCode = 'isBorn';

  if (control && control.value) {
    const bornDate = control.value;
    return Date.now() - bornDate.getTime() < 0 ? { [errorCode]: true } : null;
  }
  return null;
}

/**
 * funzione che restituisce gli anni dell' utente
 * NOTA: funzione semplificata che non tiene conto di ora solare ed eventuali calcoli particolari sul calendario
 * ma sifficiente a scopo dimostrativo per questo progetto.
 */
function getBirthday(bornDate: Date): number {
  const ageDifMs = Date.now() - bornDate.getTime();
  if(ageDifMs < 0) {
    return -1;
  }
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
