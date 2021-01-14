export interface Conto {
  id: string;
  budget: number;
  saldo: number;
  uscite: any[];
  entrate: any[];
  movimenti: any[];
  availableBudget: number;
  id_cliente: string;
}
