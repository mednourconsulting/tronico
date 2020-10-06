import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBloqEiffelComponent } from './info-bloq-eiffel.component';

describe('InfoBloqEiffelComponent', () => {
  let component: InfoBloqEiffelComponent;
  let fixture: ComponentFixture<InfoBloqEiffelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBloqEiffelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBloqEiffelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
