import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBMTechniqueComponent } from './project-bmtechnique.component';

describe('ProjectBMTechniqueComponent', () => {
  let component: ProjectBMTechniqueComponent;
  let fixture: ComponentFixture<ProjectBMTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBMTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBMTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
