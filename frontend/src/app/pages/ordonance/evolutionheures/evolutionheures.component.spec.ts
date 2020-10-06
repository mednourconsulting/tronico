import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionheuresComponent } from './evolutionheures.component';

describe('EvolutionheuresComponent', () => {
  let component: EvolutionheuresComponent;
  let fixture: ComponentFixture<EvolutionheuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionheuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionheuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
