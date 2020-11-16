export interface Cliente {
  type: string;

  id: string;
  // pin: string;
  otp: string;
  nome: string;
  cognome: string;
  createdAt: Date;
  updatedAt: Date;
  address: string;

  cf?: string;

  regSociale?: string;
  pIva?: string;

  id_conto: string;

}
