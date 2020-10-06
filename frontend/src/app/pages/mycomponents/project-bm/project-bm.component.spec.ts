import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBMComponent } from './project-bm.component';

describe('ProjectBMComponent', () => {
  let component: ProjectBMComponent;
  let fixture: ComponentFixture<ProjectBMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
