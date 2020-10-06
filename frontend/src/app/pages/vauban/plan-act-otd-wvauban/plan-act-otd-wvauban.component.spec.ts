import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActOtdWVaubanComponent } from './plan-act-otd-wvauban.component';

describe('PlanActOtdWVaubanComponent', () => {
  let component: PlanActOtdWVaubanComponent;
  let fixture: ComponentFixture<PlanActOtdWVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActOtdWVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActOtdWVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
