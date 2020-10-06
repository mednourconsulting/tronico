import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetoOtdWEiffelComponent } from './pareto-otd-weiffel.component';

describe('ParetoOtdWEiffelComponent', () => {
  let component: ParetoOtdWEiffelComponent;
  let fixture: ComponentFixture<ParetoOtdWEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetoOtdWEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetoOtdWEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
