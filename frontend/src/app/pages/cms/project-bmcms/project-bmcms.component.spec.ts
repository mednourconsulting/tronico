import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBMCMSComponent } from './project-bmcms.component';

describe('ProjectBMCMSComponent', () => {
  let component: ProjectBMCMSComponent;
  let fixture: ComponentFixture<ProjectBMCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBMCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBMCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
