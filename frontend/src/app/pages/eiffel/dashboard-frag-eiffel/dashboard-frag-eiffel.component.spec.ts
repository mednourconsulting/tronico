import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFragEiffelComponent } from './dashboard-frag-eiffel.component';

describe('DashboardFragEiffelComponent', () => {
  let component: DashboardFragEiffelComponent;
  let fixture: ComponentFixture<DashboardFragEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFragEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFragEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
