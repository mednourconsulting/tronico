import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActPcdWVaubanComponent } from './plan-act-pcd-wvauban.component';

describe('PlanActPcdWVaubanComponent', () => {
  let component: PlanActPcdWVaubanComponent;
  let fixture: ComponentFixture<PlanActPcdWVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActPcdWVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActPcdWVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
