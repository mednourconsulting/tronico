import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationMagasinComponent } from './realisation-magasin.component';

describe('RealisationMagasinComponent', () => {
  let component: RealisationMagasinComponent;
  let fixture: ComponentFixture<RealisationMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisationMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisationMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
