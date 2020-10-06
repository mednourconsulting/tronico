import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageTechniqueComponent } from './parametrage-technique.component';

describe('ParametrageTechniqueComponent', () => {
  let component: ParametrageTechniqueComponent;
  let fixture: ComponentFixture<ParametrageTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
