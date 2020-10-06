import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBMTestComponent } from './project-bmtest.component';

describe('ProjectBMTestComponent', () => {
  let component: ProjectBMTestComponent;
  let fixture: ComponentFixture<ProjectBMTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBMTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBMTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
