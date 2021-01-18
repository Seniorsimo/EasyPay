import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAtmComponent } from './info-atm.component';

describe('InfoAtmComponent', () => {
  let component: InfoAtmComponent;
  let fixture: ComponentFixture<InfoAtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAtmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
