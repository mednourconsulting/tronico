import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ParametrageCmsComponent} from './parametrage-cms.component';

describe('ParametrageCmsComponent', () => {
  let component: ParametrageCmsComponent;
  let fixture: ComponentFixture<ParametrageCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageCmsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
