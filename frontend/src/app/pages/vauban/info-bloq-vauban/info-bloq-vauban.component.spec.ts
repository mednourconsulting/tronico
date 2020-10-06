import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBloqVaubanComponent } from './info-bloq-vauban.component';

describe('InfoBloqVaubanComponent', () => {
  let component: InfoBloqVaubanComponent;
  let fixture: ComponentFixture<InfoBloqVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBloqVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBloqVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
