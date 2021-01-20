import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UtenteType } from '../constants/utente-type.enum';
import { Cliente } from '../../shared/models/cliente.model';
import { Conto } from '../../shared/models/conto.model';

/** Store che memorizza i dati dell' utente collegato (api/clienti/self) */
@Injectable({
  providedIn: 'root'
})
export class SelfStore {

  readonly localStoreVariable = {
    id: 'clienti.id',
    email: 'clienti.email',
    nome: 'clienti.nome',
    cognome: 'clienti.cognome',
    cf: 'clienti.cf',
    createdAt: 'clienti.createdAt',
    updatedAt: 'clienti.updatedAt',
    idConto: 'clienti.idConto',
    type: 'clienti.type',
    address: 'clienti.address',
    birthDate: 'clienti.birthDate',
    phone: 'clienti.phone',
    regSociale: 'commercianti.ragSociale',
    pIva: 'commercianti.pIva',

    budget: 'conto.budget',
    saldo: 'conto.saldo',
    // uscite: 'conto.uscite',
    // entrate: 'conto.entrate',
    // movimenti: 'conto.movimenti',
    avariableBadget: 'conto.avBadget',

  };

  private pId: string;
  private pEmail: string;
  private pNome: string;
  private pCognome: string;
  private pCf: string;
  private pCreatedAt: Date;
  private pUpdatedAt: Date;
  private pIdConto: string;
  private pType: string;
  private pAddress: string;
  private pPhone: string;
  private pBirthDate: string;
  private pRagSociale: string;
  private pPIva: string;

  private pBudget: number;
  private pSaldo: number;
  // private pUscite: any[];
  // private pEntrate: any[];
  // private pMovimenti: any[];
  private pAvariableBadget: number;


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


  public get email() {
    if (!this.pEmail) {
      this.pEmail = this.localStorageService.getItem(this.localStoreVariable.email);
    }
    return this.pEmail;
  }

  public set email(value) {
    this.pEmail = value;
    this.localStorageService.setItem(this.localStoreVariable.email, value);
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

  public get phone() {
    if (!this.pPhone) {
      this.pPhone = this.localStorageService.getItem(this.localStoreVariable.phone);
    }
    return this.pPhone;
  }

  public set phone(value) {
    this.pPhone = value;
    this.localStorageService.setItem(this.localStoreVariable.phone, value);
  }

  public get birthDate() {
    if (!this.pBirthDate) {
      this.pBirthDate = this.localStorageService.getItem(this.localStoreVariable.birthDate);
    }
    return this.pBirthDate;
  }

  public set birthDate(value) {
    this.pBirthDate = value;
    this.localStorageService.setItem(this.localStoreVariable.birthDate, value);
  }



  public get ragSociale() {
    if (!this.pRagSociale) {
      this.pRagSociale = this.localStorageService.getItem(this.localStoreVariable.regSociale);
    }
    return this.pRagSociale;
  }

  public set ragSociale(value) {
    this.pRagSociale = value;
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

  public get budget() {
    if (!this.pBudget) {
      this.pBudget = this.localStorageService.getItem(this.localStoreVariable.budget);
    }
    return this.pBudget;
  }

  public set budget(value) {
    this.pBudget = value;
    this.localStorageService.setItem(this.localStoreVariable.budget, value);
  }

  public get saldo() {
    if (!this.pSaldo) {
      this.pSaldo = this.localStorageService.getItem(this.localStoreVariable.saldo);
    }
    return this.pSaldo;
  }

  public set saldo(value) {
    this.pSaldo = value;
    this.localStorageService.setItem(this.localStoreVariable.saldo, value);
  }

  public get avariableBadget() {
    if (!this.pAvariableBadget) {
      this.pAvariableBadget = this.localStorageService.getItem(this.localStoreVariable.avariableBadget);
    }
    return this.pAvariableBadget;
  }

  public set avariableBadget(value) {
    this.pAvariableBadget = value;
    this.localStorageService.setItem(this.localStoreVariable.avariableBadget, value);
  }


  constructor(private localStorageService: LocalStorageService) { }

  /** Aggiorna il selfStore salvando le informazioni ottenute  */
  public updateCliente(cliente: Cliente) {
    this.id = cliente.id;
    this.type = cliente.type;
    this.nome = cliente.nome;
    this.cognome = cliente.cognome;
    this.email = cliente.email;
    this.cf = cliente.cf;
    this.createdAt = cliente.createdAt;
    this.updatedAt = cliente.updatedAt;
    this.address = cliente.address;
    this.phone = cliente.phone;
    this.birthDate = cliente.birthDate;
    this.idConto = cliente.idConto;
    if (cliente.type === UtenteType.commerciante) {
      this.ragSociale = cliente.ragSoc;
      this.pIva = cliente.piva;
    }
  }

  public updateConto(conto: Conto) {
    this.idConto = conto.id;
    this.saldo = conto.saldo;
    this.budget = conto.budget;
  }

  /** resetta lo store (e il local store). Ideale dopo un logout */
  public reset() {
    this.id = undefined;
    this.type = undefined;
    this.nome = undefined;
    this.cognome = undefined;
    this.email = undefined;
    this.cf = undefined;
    this.createdAt = undefined;
    this.updatedAt = undefined;
    this.address = undefined;
    this.phone = undefined;
    this.birthDate = undefined;
    this.idConto = undefined;
    this.ragSociale = undefined;
    this.pIva = undefined;

    // this.idConto = undefined;
    this.saldo = undefined;
    this.budget = undefined;
  }
}
