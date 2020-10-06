import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBloqTestComponent } from './info-bloq-test.component';

describe('InfoBloqTestComponent', () => {
  let component: InfoBloqTestComponent;
  let fixture: ComponentFixture<InfoBloqTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBloqTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBloqTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
