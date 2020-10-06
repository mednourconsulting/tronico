import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActProductiviteMCMSComponent } from './plan-act-productivite-mcms.component';

describe('PlanActProductiviteMCMSComponent', () => {
  let component: PlanActProductiviteMCMSComponent;
  let fixture: ComponentFixture<PlanActProductiviteMCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActProductiviteMCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActProductiviteMCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
