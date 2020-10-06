import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetoOtdWItemMagasinComponent } from './pareto-otd-witem-magasin.component';

describe('ParetoOtdWItemMagasinComponent', () => {
  let component: ParetoOtdWItemMagasinComponent;
  let fixture: ComponentFixture<ParetoOtdWItemMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetoOtdWItemMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetoOtdWItemMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
