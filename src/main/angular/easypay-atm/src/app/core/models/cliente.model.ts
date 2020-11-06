export interface Cliente {
  type: string;

  id: string;
  // pin: string;
  token: string;
  nome: string;
  cognome: string;
  createdAt: Date;
  updatedAt: Date;
  address: string;

  regSociale: string;
  pIva: string;

  id_conto: string;

}
