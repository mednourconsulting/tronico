import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtdWEiffelComponent } from './otd-weiffel.component';

describe('OtdWEiffelComponent', () => {
  let component: OtdWEiffelComponent;
  let fixture: ComponentFixture<OtdWEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtdWEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtdWEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
