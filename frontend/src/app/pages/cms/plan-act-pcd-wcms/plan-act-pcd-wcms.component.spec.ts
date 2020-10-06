import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActPcdWCMSComponent } from './plan-act-pcd-wcms.component';

describe('PlanActPcdWCMSComponent', () => {
  let component: PlanActPcdWCMSComponent;
  let fixture: ComponentFixture<PlanActPcdWCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActPcdWCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActPcdWCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
