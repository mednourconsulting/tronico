import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtdWTestComponent } from './otd-wtest.component';

describe('OtdWTestComponent', () => {
  let component: OtdWTestComponent;
  let fixture: ComponentFixture<OtdWTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtdWTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtdWTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
