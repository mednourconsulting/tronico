import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFragTestComponent } from './dashboard-frag-test.component';

describe('DashboardFragTestComponent', () => {
  let component: DashboardFragTestComponent;
  let fixture: ComponentFixture<DashboardFragTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFragTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFragTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
