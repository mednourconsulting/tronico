import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtdWTechniqueComponent } from './otd-wtechnique.component';

describe('OtdWTechniqueComponent', () => {
  let component: OtdWTechniqueComponent;
  let fixture: ComponentFixture<OtdWTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtdWTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtdWTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
