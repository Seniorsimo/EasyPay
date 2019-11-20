import { TestBed } from '@angular/core/testing';

import { CommercianteService } from './commerciante.service';

describe('TraderAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommercianteService = TestBed.get(CommercianteService);
    expect(service).toBeTruthy();
  });
});
