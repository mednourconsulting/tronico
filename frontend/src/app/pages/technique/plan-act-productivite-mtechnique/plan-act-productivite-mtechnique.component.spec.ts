import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActProductiviteMTechniqueComponent } from './plan-act-productivite-mtechnique.component';

describe('PlanActProductiviteMTechniqueComponent', () => {
  let component: PlanActProductiviteMTechniqueComponent;
  let fixture: ComponentFixture<PlanActProductiviteMTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActProductiviteMTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActProductiviteMTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
