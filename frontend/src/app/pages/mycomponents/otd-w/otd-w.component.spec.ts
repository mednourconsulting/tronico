import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtdWComponent } from './otd-w.component';

describe('OtdWComponent', () => {
  let component: OtdWComponent;
  let fixture: ComponentFixture<OtdWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtdWComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtdWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
