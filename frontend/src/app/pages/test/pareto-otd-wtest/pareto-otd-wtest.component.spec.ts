import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetoOtdWTestComponent } from './pareto-otd-wtest.component';

describe('ParetoOtdWTestComponent', () => {
  let component: ParetoOtdWTestComponent;
  let fixture: ComponentFixture<ParetoOtdWTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetoOtdWTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetoOtdWTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
