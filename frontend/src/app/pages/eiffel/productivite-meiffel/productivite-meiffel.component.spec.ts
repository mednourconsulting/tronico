import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiviteMEiffelComponent } from './productivite-meiffel.component';

describe('ProductiviteMEiffelComponent', () => {
  let component: ProductiviteMEiffelComponent;
  let fixture: ComponentFixture<ProductiviteMEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiviteMEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiviteMEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
