import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActTrsCmsComponent } from './plan-act-trs-cms.component';

describe('PlanActTrsCmsComponent', () => {
  let component: PlanActTrsCmsComponent;
  let fixture: ComponentFixture<PlanActTrsCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActTrsCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActTrsCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
