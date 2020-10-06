import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageVaubanComponent } from './parametrage-vauban.component';

describe('ParametrageVaubanComponent', () => {
  let component: ParametrageVaubanComponent;
  let fixture: ComponentFixture<ParametrageVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
