import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBloqCMSComponent } from './info-bloq-cms.component';

describe('InfoBloqCMSComponent', () => {
  let component: InfoBloqCMSComponent;
  let fixture: ComponentFixture<InfoBloqCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBloqCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBloqCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
