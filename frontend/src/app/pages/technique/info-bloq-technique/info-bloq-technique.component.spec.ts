import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBloqTechniqueComponent } from './info-bloq-technique.component';

describe('InfoBloqTechniqueComponent', () => {
  let component: InfoBloqTechniqueComponent;
  let fixture: ComponentFixture<InfoBloqTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBloqTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBloqTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
