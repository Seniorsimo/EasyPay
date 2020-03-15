import { TestBed } from '@angular/core/testing';

import { PrezzoService } from './pagamento.service';

describe('PrezzoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrezzoService = TestBed.get(PrezzoService);
    expect(service).toBeTruthy();
  });
});
