import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdWCMSComponent } from './pcd-wcms.component';

describe('PcdWCMSComponent', () => {
  let component: PcdWCMSComponent;
  let fixture: ComponentFixture<PcdWCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcdWCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdWCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
