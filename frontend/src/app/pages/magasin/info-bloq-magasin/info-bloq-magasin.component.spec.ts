import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBloqMagasinComponent } from './info-bloq-magasin.component';

describe('InfoBloqMagasinComponent', () => {
  let component: InfoBloqMagasinComponent;
  let fixture: ComponentFixture<InfoBloqMagasinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBloqMagasinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBloqMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
