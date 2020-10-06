import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiviteMVaubanComponent } from './productivite-mvauban.component';

describe('ProductiviteMVaubanComponent', () => {
  let component: ProductiviteMVaubanComponent;
  let fixture: ComponentFixture<ProductiviteMVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiviteMVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiviteMVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
