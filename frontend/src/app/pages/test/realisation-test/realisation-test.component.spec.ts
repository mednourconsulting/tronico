import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationTestComponent } from './realisation-test.component';

describe('RealisationTestComponent', () => {
  let component: RealisationTestComponent;
  let fixture: ComponentFixture<RealisationTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisationTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
