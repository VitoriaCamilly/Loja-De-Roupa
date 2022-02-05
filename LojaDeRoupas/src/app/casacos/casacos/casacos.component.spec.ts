import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasacosComponent } from './casacos.component';

describe('CasacosComponent', () => {
  let component: CasacosComponent;
  let fixture: ComponentFixture<CasacosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasacosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
