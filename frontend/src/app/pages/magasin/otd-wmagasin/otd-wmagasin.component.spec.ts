import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtdWMagasinComponent } from './otd-wmagasin.component';

describe('OtdWMagasinComponent', () => {
  let component: OtdWMagasinComponent;
  let fixture: ComponentFixture<OtdWMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtdWMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtdWMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
