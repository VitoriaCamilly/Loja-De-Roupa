import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntosComponent } from './conjuntos.component';

describe('ConjuntosComponent', () => {
  let component: ConjuntosComponent;
  let fixture: ComponentFixture<ConjuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
