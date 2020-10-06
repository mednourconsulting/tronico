import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActProductiviteMMagasinComponent } from './plan-act-productivite-mmagasin.component';

describe('PlanActProductiviteMMagasinComponent', () => {
  let component: PlanActProductiviteMMagasinComponent;
  let fixture: ComponentFixture<PlanActProductiviteMMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActProductiviteMMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActProductiviteMMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
