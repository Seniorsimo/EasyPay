export interface CustomError extends Error {
  type: string;
}

export class WrongParamError implements CustomError {
  readonly type = CUSTOM_ERROR;

  name = '';
  message = '';

  constructor(param) {
    this.name = 'Errore nei parametri';
    this.message = JSON.stringify(param);
  }
}

export const CUSTOM_ERROR = 'CUSTOM_ERROR';
