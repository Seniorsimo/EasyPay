import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcComponent } from './nfc.component';

describe('NfcComponent', () => {
  let component: NfcComponent;
  let fixture: ComponentFixture<NfcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
