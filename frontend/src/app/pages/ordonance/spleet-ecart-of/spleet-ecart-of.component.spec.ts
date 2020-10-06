import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpleetEcartOfComponent } from './spleet-ecart-of.component';

describe('SpleetEcartOfComponent', () => {
  let component: SpleetEcartOfComponent;
  let fixture: ComponentFixture<SpleetEcartOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpleetEcartOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpleetEcartOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
