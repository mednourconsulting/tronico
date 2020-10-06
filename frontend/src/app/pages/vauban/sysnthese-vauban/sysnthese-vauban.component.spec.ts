import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysntheseVaubanComponent } from './sysnthese-vauban.component';

describe('SysntheseVaubanComponent', () => {
  let component: SysntheseVaubanComponent;
  let fixture: ComponentFixture<SysntheseVaubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysntheseVaubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysntheseVaubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
