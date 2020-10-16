import { TestBed } from '@angular/core/testing';

import { NoLoginGuard } from './no-login-guard.service';

describe('NoLoginGuardService', () => {
  let service: NoLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoLoginGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
