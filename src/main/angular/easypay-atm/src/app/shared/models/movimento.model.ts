import { MovimentoType } from 'src/app/core/constants/movimento-type.enum';

export interface Movimento {
  id: number;
  valore: number;
  timestamp: string;
  id_atm?: number; // solo nelle ricariche
  type: MovimentoType;
  from: any;
  from_name: any;
  to: number;
  to_name: string;
}
