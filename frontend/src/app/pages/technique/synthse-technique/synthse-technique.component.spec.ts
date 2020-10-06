import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthseTechniqueComponent } from './synthse-technique.component';

describe('SynthseTechniqueComponent', () => {
  let component: SynthseTechniqueComponent;
  let fixture: ComponentFixture<SynthseTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynthseTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthseTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
