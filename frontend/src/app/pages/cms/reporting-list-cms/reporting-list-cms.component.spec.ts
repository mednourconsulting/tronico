import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingListCmsComponent } from './reporting-list-cms.component';

describe('ReportingListCmsComponent', () => {
  let component: ReportingListCmsComponent;
  let fixture: ComponentFixture<ReportingListCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingListCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingListCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
