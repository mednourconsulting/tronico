import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFragTechniqueComponent } from './dashboard-frag-technique.component';

describe('DashboardFragTechniqueComponent', () => {
  let component: DashboardFragTechniqueComponent;
  let fixture: ComponentFixture<DashboardFragTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFragTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFragTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
