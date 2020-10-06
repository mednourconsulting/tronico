import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationVaubanComponent } from './realisation-vauban.component';

describe('RealisationVaubanComponent', () => {
  let component: RealisationVaubanComponent;
  let fixture: ComponentFixture<RealisationVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisationVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
