import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiviteMComponent } from './productivite-m.component';

describe('ProductiviteMComponent', () => {
  let component: ProductiviteMComponent;
  let fixture: ComponentFixture<ProductiviteMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiviteMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiviteMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
