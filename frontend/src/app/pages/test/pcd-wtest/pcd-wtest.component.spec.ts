import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdWTestComponent } from './pcd-wtest.component';

describe('PcdWTestComponent', () => {
  let component: PcdWTestComponent;
  let fixture: ComponentFixture<PcdWTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcdWTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdWTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
