import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBMEiffelComponent } from './project-bmeiffel.component';

describe('ProjectBMEiffelComponent', () => {
  let component: ProjectBMEiffelComponent;
  let fixture: ComponentFixture<ProjectBMEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBMEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBMEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
