import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActOtdWTechniqueComponent } from './plan-act-otd-wtechnique.component';

describe('PlanActOtdWTechniqueComponent', () => {
  let component: PlanActOtdWTechniqueComponent;
  let fixture: ComponentFixture<PlanActOtdWTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActOtdWTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActOtdWTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
