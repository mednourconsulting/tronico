import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrametrageComponent } from './prametrage.component';

describe('PrametrageComponent', () => {
  let component: PrametrageComponent;
  let fixture: ComponentFixture<PrametrageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrametrageComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrametrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
