import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBMMagasinComponent } from './project-bmmagasin.component';

describe('ProjectBMMagasinComponent', () => {
  let component: ProjectBMMagasinComponent;
  let fixture: ComponentFixture<ProjectBMMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBMMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBMMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
