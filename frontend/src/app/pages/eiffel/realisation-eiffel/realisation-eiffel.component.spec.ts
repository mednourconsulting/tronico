import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationEiffelComponent } from './realisation-eiffel.component';

describe('RealisationEiffelComponent', () => {
  let component: RealisationEiffelComponent;
  let fixture: ComponentFixture<RealisationEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisationEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
