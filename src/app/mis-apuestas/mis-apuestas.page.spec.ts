import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisApuestasPage } from './mis-apuestas.page';

describe('MisApuestasPage', () => {
  let component: MisApuestasPage;
  let fixture: ComponentFixture<MisApuestasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisApuestasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisApuestasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
