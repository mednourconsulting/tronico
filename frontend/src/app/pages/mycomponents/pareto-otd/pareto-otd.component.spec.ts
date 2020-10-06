import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ParetoOtdComponent} from './pareto-otd.component';

describe('ParetoOtdComponent', () => {
  let component: ParetoOtdComponent;
  let fixture: ComponentFixture<ParetoOtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetoOtdComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetoOtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
