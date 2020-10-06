import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActProductiviteComponent } from './plan-act-productivite.component';

describe('PlanActProductiviteComponent', () => {
  let component: PlanActProductiviteComponent;
  let fixture: ComponentFixture<PlanActProductiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActProductiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActProductiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
