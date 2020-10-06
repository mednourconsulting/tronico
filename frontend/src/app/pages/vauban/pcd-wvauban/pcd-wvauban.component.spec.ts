import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdWVaubanComponent } from './pcd-wvauban.component';

describe('PcdWVaubanComponent', () => {
  let component: PcdWVaubanComponent;
  let fixture: ComponentFixture<PcdWVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcdWVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdWVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
