import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaubanComponent } from './vauban.component';

describe('VaubanComponent', () => {
  let component: VaubanComponent;
  let fixture: ComponentFixture<VaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
