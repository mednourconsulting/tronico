import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActProductiviteMVaubanComponent } from './plan-act-productivite-mvauban.component';

describe('PlanActProductiviteMVaubanComponent', () => {
  let component: PlanActProductiviteMVaubanComponent;
  let fixture: ComponentFixture<PlanActProductiviteMVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActProductiviteMVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActProductiviteMVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
