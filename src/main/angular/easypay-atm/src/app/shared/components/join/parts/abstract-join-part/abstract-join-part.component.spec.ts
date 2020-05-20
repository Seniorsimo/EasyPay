import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractJoinPartComponent } from './abstract-join-part.component';

describe('AbstractJoinPartComponent', () => {
  let component: AbstractJoinPartComponent;
  let fixture: ComponentFixture<AbstractJoinPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractJoinPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractJoinPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
