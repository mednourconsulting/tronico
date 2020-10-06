import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetoOtdWItemTestComponent } from './pareto-otd-witem-test.component';

describe('ParetoOtdWItemTestComponent', () => {
  let component: ParetoOtdWItemTestComponent;
  let fixture: ComponentFixture<ParetoOtdWItemTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetoOtdWItemTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetoOtdWItemTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
