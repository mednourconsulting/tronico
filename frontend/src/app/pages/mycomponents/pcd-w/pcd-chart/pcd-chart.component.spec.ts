import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdChartComponent } from './pcd-chart.component';

describe('PcdChartComponent', () => {
  let component: PcdChartComponent;
  let fixture: ComponentFixture<PcdChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcdChartComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
