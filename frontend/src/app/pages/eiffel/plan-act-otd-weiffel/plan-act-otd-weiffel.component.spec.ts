import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActOtdWEiffelComponent } from './plan-act-otd-weiffel.component';

describe('PlanActOtdWEiffelComponent', () => {
  let component: PlanActOtdWEiffelComponent;
  let fixture: ComponentFixture<PlanActOtdWEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActOtdWEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActOtdWEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
