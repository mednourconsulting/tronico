import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdWMagasinComponent } from './pcd-wmagasin.component';

describe('PcdWMagasinComponent', () => {
  let component: PcdWMagasinComponent;
  let fixture: ComponentFixture<PcdWMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcdWMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdWMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
