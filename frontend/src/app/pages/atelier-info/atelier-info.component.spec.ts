import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierInfoComponent } from './atelier-info.component';

describe('AtelierInfoComponent', () => {
  let component: AtelierInfoComponent;
  let fixture: ComponentFixture<AtelierInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtelierInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
