export interface ApiCliente {
  type: string;
  id: number;
  otp: string;
  nome: string;
  cognome: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  address: string;
  birth_date: string;
  phone: string;
  cf?: string;
  ragSoc?: string;
  piva?: string;
  id_conto: number;
}
