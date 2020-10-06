import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBMVaubanComponent } from './project-bmvauban.component';

describe('ProjectBMVaubanComponent', () => {
  let component: ProjectBMVaubanComponent;
  let fixture: ComponentFixture<ProjectBMVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBMVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBMVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
