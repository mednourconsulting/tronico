import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFragComponent } from './dashboard-frag.component';

describe('DashboardFragComponent', () => {
  let component: DashboardFragComponent;
  let fixture: ComponentFixture<DashboardFragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFragComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
