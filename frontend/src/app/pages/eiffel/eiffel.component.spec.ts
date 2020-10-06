import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EiffelComponent } from './eiffel.component';

describe('EiffelComponent', () => {
  let component: EiffelComponent;
  let fixture: ComponentFixture<EiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
