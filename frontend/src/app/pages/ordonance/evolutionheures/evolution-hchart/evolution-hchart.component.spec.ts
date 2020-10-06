import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionHChartComponent } from './evolution-hchart.component';

describe('EvolutionHChartComponent', () => {
  let component: EvolutionHChartComponent;
  let fixture: ComponentFixture<EvolutionHChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionHChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionHChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
