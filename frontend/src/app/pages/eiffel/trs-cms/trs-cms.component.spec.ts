import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrsCmsComponent } from './trs-cms.component';

describe('TrsCmsComponent', () => {
  let component: TrsCmsComponent;
  let fixture: ComponentFixture<TrsCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrsCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrsCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
