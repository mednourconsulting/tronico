import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetoOtdWItemEiffelComponent } from './pareto-otd-witem-eiffel.component';

describe('ParetoOtdWItemEiffelComponent', () => {
  let component: ParetoOtdWItemEiffelComponent;
  let fixture: ComponentFixture<ParetoOtdWItemEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetoOtdWItemEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetoOtdWItemEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
