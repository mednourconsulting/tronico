import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetOtdWVaubanComponent } from './paret-otd-wvauban.component';

describe('ParetOtdWVaubanComponent', () => {
  let component: ParetOtdWVaubanComponent;
  let fixture: ComponentFixture<ParetOtdWVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetOtdWVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetOtdWVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
