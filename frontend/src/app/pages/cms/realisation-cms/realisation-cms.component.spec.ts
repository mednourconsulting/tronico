import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationCMSComponent } from './realisation-cms.component';

describe('RealisationCMSComponent', () => {
  let component: RealisationCMSComponent;
  let fixture: ComponentFixture<RealisationCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisationCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
