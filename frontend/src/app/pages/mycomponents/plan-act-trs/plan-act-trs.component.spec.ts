import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActTrsComponent } from './plan-act-trs.component';

describe('PlanActTrsComponent', () => {
  let component: PlanActTrsComponent;
  let fixture: ComponentFixture<PlanActTrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActTrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActTrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
