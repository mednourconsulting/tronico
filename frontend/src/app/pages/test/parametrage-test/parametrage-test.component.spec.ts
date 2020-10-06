import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageTestComponent } from './parametrage-test.component';

describe('ParametrageTestComponent', () => {
  let component: ParametrageTestComponent;
  let fixture: ComponentFixture<ParametrageTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
