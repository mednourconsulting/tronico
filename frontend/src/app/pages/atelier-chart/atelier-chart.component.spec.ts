import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierChartComponent } from './atelier-chart.component';

describe('AtelierChartComponent', () => {
  let component: AtelierChartComponent;
  let fixture: ComponentFixture<AtelierChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtelierChartComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
