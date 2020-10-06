import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActPcdWEiffelComponent } from './plan-act-pcd-weiffel.component';

describe('PlanActPcdWEiffelComponent', () => {
  let component: PlanActPcdWEiffelComponent;
  let fixture: ComponentFixture<PlanActPcdWEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActPcdWEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActPcdWEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
