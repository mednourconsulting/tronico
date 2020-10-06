import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActProductiviteMTestComponent } from './plan-act-productivite-mtest.component';

describe('PlanActProductiviteMTestComponent', () => {
  let component: PlanActProductiviteMTestComponent;
  let fixture: ComponentFixture<PlanActProductiviteMTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActProductiviteMTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActProductiviteMTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
