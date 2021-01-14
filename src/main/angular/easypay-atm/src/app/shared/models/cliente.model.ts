export interface Cliente {
  type: string;

  id: string;
  // pin: string;
  otp: string;
  nome: string;
  cognome: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  address: string;
  birthDate: string;
  phone: string;

  // solo per il cliente semplice
  cf?: string;

  // solo per il commerciante
  ragSoc?: string;
  piva?: string;

  /** WARNING, dal server arriva id_conto */
  idConto: string;

}
