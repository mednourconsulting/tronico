import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtwChartComponent } from './otw-chart.component';

describe('OtwChartComponent', () => {
  let component: OtwChartComponent;
  let fixture: ComponentFixture<OtwChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtwChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtwChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
