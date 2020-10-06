import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActOtdComponent } from './plan-act-otd.component';

describe('PlanActOtdComponent', () => {
  let component: PlanActOtdComponent;
  let fixture: ComponentFixture<PlanActOtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActOtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActOtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
