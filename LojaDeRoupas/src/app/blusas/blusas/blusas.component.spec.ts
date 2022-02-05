import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlusasComponent } from './blusas.component';

describe('BlusasComponent', () => {
  let component: BlusasComponent;
  let fixture: ComponentFixture<BlusasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlusasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlusasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
