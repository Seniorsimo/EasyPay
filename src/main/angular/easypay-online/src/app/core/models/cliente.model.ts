export interface Cliente {
  type: string;

  id: string;
  pin: string;
  token: string;
  nome: string;
  budget: number;
}


export const CLIENTE_TYPE = 'CLIENTE_TYPE';
