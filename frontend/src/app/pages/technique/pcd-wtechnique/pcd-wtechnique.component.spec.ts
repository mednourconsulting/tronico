import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdWTechniqueComponent } from './pcd-wtechnique.component';

describe('PcdWTechniqueComponent', () => {
  let component: PcdWTechniqueComponent;
  let fixture: ComponentFixture<PcdWTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcdWTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdWTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
