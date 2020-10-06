import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrsChartComponent } from './trs-chart.component';

describe('TrsChartComponent', () => {
  let component: TrsChartComponent;
  let fixture: ComponentFixture<TrsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
