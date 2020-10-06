import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFragMagasinComponent } from './dashboard-frag-magasin.component';

describe('DashboardFragMagasinComponent', () => {
  let component: DashboardFragMagasinComponent;
  let fixture: ComponentFixture<DashboardFragMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFragMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFragMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
