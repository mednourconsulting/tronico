import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActOtdWMagasinComponent } from './plan-act-otd-wmagasin.component';

describe('PlanActOtdWMagasinComponent', () => {
  let component: PlanActOtdWMagasinComponent;
  let fixture: ComponentFixture<PlanActOtdWMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActOtdWMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActOtdWMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
