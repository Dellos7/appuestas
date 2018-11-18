import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarApuestaPage } from './crear-editar-apuesta.page';

describe('CrearEditarApuestaPage', () => {
  let component: CrearEditarApuestaPage;
  let fixture: ComponentFixture<CrearEditarApuestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEditarApuestaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEditarApuestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
