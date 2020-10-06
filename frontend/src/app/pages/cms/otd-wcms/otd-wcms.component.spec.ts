import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtdWCMSComponent } from './otd-wcms.component';

describe('OtdWCMSComponent', () => {
  let component: OtdWCMSComponent;
  let fixture: ComponentFixture<OtdWCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtdWCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtdWCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
