import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBloqComponent } from './info-bloq.component';

describe('InfoBloqComponent', () => {
  let component: InfoBloqComponent;
  let fixture: ComponentFixture<InfoBloqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBloqComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBloqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
