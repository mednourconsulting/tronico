import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ParetoOtdWCMSComponent} from './pareto-otd-wcms.component';

describe('ParetoOtdWCMSComponent', () => {
  let component: ParetoOtdWCMSComponent;
  let fixture: ComponentFixture<ParetoOtdWCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetoOtdWCMSComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetoOtdWCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
