import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageEiffelComponent } from './parametrage-eiffel.component';

describe('ParametrageEiffelComponent', () => {
  let component: ParametrageEiffelComponent;
  let fixture: ComponentFixture<ParametrageEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
