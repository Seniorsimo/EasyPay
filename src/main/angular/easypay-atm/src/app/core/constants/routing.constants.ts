import { environment } from 'src/environments/environment';

export const RoutersPath = {
  base: '',
  home: 'home',
  login: 'login',
  payment: 'payments',
  movement: 'movements',
  reload: 'reload'
};

export const baseUrl = environment.apiUrl;

export const ApiRoute = {
  login: baseUrl + 'api/login',
  logout: baseUrl + 'api/logout',
  clienti: baseUrl + 'api/clienti',
};