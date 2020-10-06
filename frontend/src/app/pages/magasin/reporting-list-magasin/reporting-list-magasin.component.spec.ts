import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingListMagasinComponent } from './reporting-list-magasin.component';

describe('ReportingListMagasinComponent', () => {
  let component: ReportingListMagasinComponent;
  let fixture: ComponentFixture<ReportingListMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingListMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingListMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
