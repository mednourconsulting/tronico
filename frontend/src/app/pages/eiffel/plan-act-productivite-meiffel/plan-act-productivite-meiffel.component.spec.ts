import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActProductiviteMEiffelComponent } from './plan-act-productivite-meiffel.component';

describe('PlanActProductiviteMEiffelComponent', () => {
  let component: PlanActProductiviteMEiffelComponent;
  let fixture: ComponentFixture<PlanActProductiviteMEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActProductiviteMEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActProductiviteMEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
