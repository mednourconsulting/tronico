import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseCMSComponent } from './synthese-cms.component';

describe('SyntheseCMSComponent', () => {
  let component: SyntheseCMSComponent;
  let fixture: ComponentFixture<SyntheseCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntheseCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheseCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
