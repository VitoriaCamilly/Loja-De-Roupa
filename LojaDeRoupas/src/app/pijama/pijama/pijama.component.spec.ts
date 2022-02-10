import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PijamaComponent } from './pijama.component';

describe('PijamaComponent', () => {
  let component: PijamaComponent;
  let fixture: ComponentFixture<PijamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PijamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PijamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
