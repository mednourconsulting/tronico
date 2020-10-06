import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActPcdComponent } from './plan-act-pcd.component';

describe('PlanActPcdComponent', () => {
  let component: PlanActPcdComponent;
  let fixture: ComponentFixture<PlanActPcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActPcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActPcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
