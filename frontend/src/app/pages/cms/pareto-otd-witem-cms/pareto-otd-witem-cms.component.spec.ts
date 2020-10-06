import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetoOtdWItemCMSComponent } from './pareto-otd-witem-cms.component';

describe('ParetoOtdWItemCMSComponent', () => {
  let component: ParetoOtdWItemCMSComponent;
  let fixture: ComponentFixture<ParetoOtdWItemCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetoOtdWItemCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetoOtdWItemCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
