import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiviteMTestComponent } from './productivite-mtest.component';

describe('ProductiviteMTestComponent', () => {
  let component: ProductiviteMTestComponent;
  let fixture: ComponentFixture<ProductiviteMTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiviteMTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiviteMTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
