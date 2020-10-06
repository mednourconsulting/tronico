import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiviteMTechniqueComponent } from './productivite-mtechnique.component';

describe('ProductiviteMTechniqueComponent', () => {
  let component: ProductiviteMTechniqueComponent;
  let fixture: ComponentFixture<ProductiviteMTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiviteMTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiviteMTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
