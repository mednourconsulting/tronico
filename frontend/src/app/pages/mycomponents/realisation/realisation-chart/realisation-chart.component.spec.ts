import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationChartComponent } from './realisation-chart.component';

describe('RealisationChartComponent', () => {
  let component: RealisationChartComponent;
  let fixture: ComponentFixture<RealisationChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisationChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
