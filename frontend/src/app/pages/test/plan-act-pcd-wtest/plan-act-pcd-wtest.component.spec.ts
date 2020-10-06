import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActPcdWTestComponent } from './plan-act-pcd-wtest.component';

describe('PlanActPcdWTestComponent', () => {
  let component: PlanActPcdWTestComponent;
  let fixture: ComponentFixture<PlanActPcdWTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActPcdWTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActPcdWTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
