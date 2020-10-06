import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PcdWComponent} from './pcd-w.component';

describe('PcdWComponent', () => {
  let component: PcdWComponent;
  let fixture: ComponentFixture<PcdWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcdWComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
