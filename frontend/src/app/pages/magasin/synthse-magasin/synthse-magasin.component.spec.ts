import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthseMagasinComponent } from './synthse-magasin.component';

describe('SynthseMagasinComponent', () => {
  let component: SynthseMagasinComponent;
  let fixture: ComponentFixture<SynthseMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynthseMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthseMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
