import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActPcdWTechniqueComponent } from './plan-act-pcd-wtechnique.component';

describe('PlanActPcdWTechniqueComponent', () => {
  let component: PlanActPcdWTechniqueComponent;
  let fixture: ComponentFixture<PlanActPcdWTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActPcdWTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActPcdWTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
