import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanActPcdWMagasinComponent} from './plan-act-pcd-wmagasin.component';

describe('PlanActPcdWMagasinComponent', () => {
  let component: PlanActPcdWMagasinComponent;
  let fixture: ComponentFixture<PlanActPcdWMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActPcdWMagasinComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActPcdWMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
