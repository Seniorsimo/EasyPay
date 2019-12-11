import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';

describe('CustomerAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteService = TestBed.get(ClienteService);
    expect(service).toBeTruthy();
  });
});
