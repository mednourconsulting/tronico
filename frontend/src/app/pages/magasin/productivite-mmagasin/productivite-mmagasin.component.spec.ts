import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiviteMMagasinComponent } from './productivite-mmagasin.component';

describe('ProductiviteMMagasinComponent', () => {
  let component: ProductiviteMMagasinComponent;
  let fixture: ComponentFixture<ProductiviteMMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiviteMMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiviteMMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
