import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActOtdWTestComponent } from './plan-act-otd-wtest.component';

describe('PlanActOtdWTestComponent', () => {
  let component: PlanActOtdWTestComponent;
  let fixture: ComponentFixture<PlanActOtdWTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActOtdWTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActOtdWTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
