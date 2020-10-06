import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdWEiffelComponent } from './pcd-weiffel.component';

describe('PcdWEiffelComponent', () => {
  let component: PcdWEiffelComponent;
  let fixture: ComponentFixture<PcdWEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcdWEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdWEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
