import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActOtdWCMSComponent } from './plan-act-otd-wcms.component';

describe('PlanActOtdWCMSComponent', () => {
  let component: PlanActOtdWCMSComponent;
  let fixture: ComponentFixture<PlanActOtdWCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActOtdWCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActOtdWCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
