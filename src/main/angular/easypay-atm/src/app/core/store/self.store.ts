import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/core';

/** Store che memorizza i dati dell' utente collegato (api/clienti/self) */
@Injectable({
  providedIn: 'root'
})
export class SelfStore {

  readonly localStoreVariable = {
    id: 'clienti.id',
    nome: 'clienti.nome',
    cognome: 'clienti.cognome',
    cf: 'clienti.cf',
    createdAt: 'clienti.createdAt',
    updatedAt: 'clienti.updatedAt',
    idConto: 'clienti.idConto',
    type: 'clienti.type',
    address: 'clienti.address',
    regSociale: 'commercianti.regSociale',
    pIva: 'commercianti.pIva',
  };

  private pId: string;
  private pNome: string;
  private pCognome: string;
  private pCf: string;
  private pCreatedAt: Date;
  private pUpdatedAt: Date;
  private pIdConto: string;
  private pType: string;
  private pAddress: string;
  private pRegSociale: string;
  private pPIva: string;


  public get id() {
    if (!this.pId) {
      this.pId = this.localStorageService.getItem(this.localStoreVariable.id);
    }
    return this.pId;
  }

  public set id(value) {
    this.pId = value;
    this.localStorageService.setItem(this.localStoreVariable.id, value);
  }

  public get cognome() {
    if (!this.pCognome) {
      this.pCognome = this.localStorageService.getItem(this.localStoreVariable.cognome);
    }
    return this.pCognome;
  }

  public set cognome(value) {
    this.pCognome = value;
    this.localStorageService.setItem(this.localStoreVariable.cognome, value);
  }

  public get nome() {
    if (!this.pNome) {
      this.pNome = this.localStorageService.getItem(this.localStoreVariable.nome);
    }
    return this.pNome;
  }

  public set nome(value) {
    this.pNome = value;
    this.localStorageService.setItem(this.localStoreVariable.nome, value);
  }

  public get cf() {
    if (!this.pCf) {
      this.pCf = this.localStorageService.getItem(this.localStoreVariable.cf);
    }
    return this.pCf;
  }

  public set cf(value) {
    this.pCf = value;
    this.localStorageService.setItem(this.localStoreVariable.cf, value);
  }

  public get createdAt() {
    if (!this.pCreatedAt) {
      this.pCreatedAt = this.localStorageService.getItem(this.localStoreVariable.createdAt);
    }
    return this.pCreatedAt;
  }

  public set createdAt(value) {
    this.pCreatedAt = value;
    this.localStorageService.setItem(this.localStoreVariable.createdAt, value);
  }

  public get updatedAt() {
    if (!this.pUpdatedAt) {
      this.pUpdatedAt = this.localStorageService.getItem(this.localStoreVariable.updatedAt);
    }
    return this.pUpdatedAt;
  }

  public set updatedAt(value) {
    this.pUpdatedAt = value;
    this.localStorageService.setItem(this.localStoreVariable.updatedAt, value);
  }

  public get idConto() {
    if (!this.pIdConto) {
      this.pIdConto = this.localStorageService.getItem(this.localStoreVariable.idConto);
    }
    return this.pIdConto;
  }

  public set idConto(value) {
    this.pIdConto = value;
    this.localStorageService.setItem(this.localStoreVariable.idConto, value);
  }


  public get type() {
    if (!this.pType) {
      this.pType = this.localStorageService.getItem(this.localStoreVariable.type);
    }
    return this.pType;
  }

  public set type(value) {
    this.pType = value;
    this.localStorageService.setItem(this.localStoreVariable.type, value);
  }

  public get address() {
    if (!this.pAddress) {
      this.pAddress = this.localStorageService.getItem(this.localStoreVariable.address);
    }
    return this.pAddress;
  }

  public set address(value) {
    this.pAddress = value;
    this.localStorageService.setItem(this.localStoreVariable.address, value);
  }


  public get regSociale() {
    if (!this.pRegSociale) {
      this.regSociale = this.localStorageService.getItem(this.localStoreVariable.regSociale);
    }
    return this.regSociale;
  }

  public set regSociale(value) {
    this.regSociale = value;
    this.localStorageService.setItem(this.localStoreVariable.regSociale, value);
  }



  public get pIva() {
    if (!this.pPIva) {
      this.pPIva = this.localStorageService.getItem(this.localStoreVariable.pIva);
    }
    return this.pPIva;
  }

  public set pIva(value) {
    this.pPIva = value;
    this.localStorageService.setItem(this.localStoreVariable.pIva, value);
  }


  constructor(private localStorageService: LocalStorageService) { }

}
