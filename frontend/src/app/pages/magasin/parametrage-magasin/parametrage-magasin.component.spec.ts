import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageMagasinComponent } from './parametrage-magasin.component';

describe('ParametrageMagasinComponent', () => {
  let component: ParametrageMagasinComponent;
  let fixture: ComponentFixture<ParametrageMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
