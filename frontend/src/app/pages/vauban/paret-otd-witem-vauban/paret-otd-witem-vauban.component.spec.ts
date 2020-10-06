import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParetOtdWItemVaubanComponent } from './paret-otd-witem-vauban.component';

describe('ParetOtdWItemVaubanComponent', () => {
  let component: ParetOtdWItemVaubanComponent;
  let fixture: ComponentFixture<ParetOtdWItemVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParetOtdWItemVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParetOtdWItemVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
