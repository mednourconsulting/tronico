import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFragCmsComponent } from './dashboard-frag-cms.component';

describe('DashboardFragCmsComponent', () => {
  let component: DashboardFragCmsComponent;
  let fixture: ComponentFixture<DashboardFragCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFragCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFragCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
