import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetoOtdWTechniqueComponent } from './pareto-otd-wtechnique.component';

describe('ParetoOtdWTechniqueComponent', () => {
  let component: ParetoOtdWTechniqueComponent;
  let fixture: ComponentFixture<ParetoOtdWTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetoOtdWTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetoOtdWTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
