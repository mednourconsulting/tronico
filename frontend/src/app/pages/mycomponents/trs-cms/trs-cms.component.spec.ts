import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrsCMSComponent } from './trs-cms.component';

describe('TrsCMSComponent', () => {
  let component: TrsCMSComponent;
  let fixture: ComponentFixture<TrsCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrsCMSComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrsCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
