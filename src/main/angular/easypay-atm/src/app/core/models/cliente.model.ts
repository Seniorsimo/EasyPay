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
  birth_date: string;
  phone: string;

  // solo per il cliente semplice
  cf?: string;

  // solo per il commerciante
  ragSoc?: string;
  piva?: string;

  idConto: string;

}
