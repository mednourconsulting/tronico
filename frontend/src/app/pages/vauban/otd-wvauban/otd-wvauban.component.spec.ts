import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtdWVaubanComponent } from './otd-wvauban.component';

describe('OtdWVaubanComponent', () => {
  let component: OtdWVaubanComponent;
  let fixture: ComponentFixture<OtdWVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtdWVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtdWVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
