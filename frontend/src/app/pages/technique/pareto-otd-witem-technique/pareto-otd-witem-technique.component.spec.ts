import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetoOtdWItemTechniqueComponent } from './pareto-otd-witem-technique.component';

describe('ParetoOtdWItemTechniqueComponent', () => {
  let component: ParetoOtdWItemTechniqueComponent;
  let fixture: ComponentFixture<ParetoOtdWItemTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetoOtdWItemTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetoOtdWItemTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
