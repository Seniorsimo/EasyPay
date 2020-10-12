/**
 * Restituisce dei colori random, utile per fare il debug del template con mat-grid
 * [style.backgroundColor]="randomColor()"
 */
export function randomColor(): string {
  // return 'white';
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
