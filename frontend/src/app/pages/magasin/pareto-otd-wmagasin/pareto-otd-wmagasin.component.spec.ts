import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetoOtdWMagasinComponent } from './pareto-otd-wmagasin.component';

describe('ParetoOtdWMagasinComponent', () => {
  let component: ParetoOtdWMagasinComponent;
  let fixture: ComponentFixture<ParetoOtdWMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetoOtdWMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetoOtdWMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
