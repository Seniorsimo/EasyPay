import { UtenteType } from '../constants/utente-type.enum';

export interface ApiPostClienti {
  email: string;
  password: string;
  nome: string;
  cognome: string;
  cf: string;
  birth_date: string; // 01/01/2000,
  phone: string;
  address: string;
  type: UtenteType; // commerciante,
  piva: string;
  ragSoc: string;
}
