/** Struttura contenente i dati del commerciante  */
export interface Commerciante {

  type: string;

  idConto: string;
  nome: string;
  /** nome identificativo della società */
  nomenclatura: string;
}

export const COMMERCIANTE_TYPE = 'COMMERCIANTE_TYPE';
