import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiviteMCMSComponent } from './productivite-mcms.component';

describe('ProductiviteMCMSComponent', () => {
  let component: ProductiviteMCMSComponent;
  let fixture: ComponentFixture<ProductiviteMCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiviteMCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiviteMCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
