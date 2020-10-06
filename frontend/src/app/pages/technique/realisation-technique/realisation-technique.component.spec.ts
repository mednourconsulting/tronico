import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationTechniqueComponent } from './realisation-technique.component';

describe('RealisationTechniqueComponent', () => {
  let component: RealisationTechniqueComponent;
  let fixture: ComponentFixture<RealisationTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisationTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
