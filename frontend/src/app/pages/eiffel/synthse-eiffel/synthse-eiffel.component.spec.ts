import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthseEiffelComponent } from './synthse-eiffel.component';

describe('SynthseEiffelComponent', () => {
  let component: SynthseEiffelComponent;
  let fixture: ComponentFixture<SynthseEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynthseEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthseEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
