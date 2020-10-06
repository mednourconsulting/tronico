import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthseTestComponent } from './synthse-test.component';

describe('SynthseTestComponent', () => {
  let component: SynthseTestComponent;
  let fixture: ComponentFixture<SynthseTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynthseTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
