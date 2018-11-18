import { TestBed } from '@angular/core/testing';

import { MisApuestasService } from './mis-apuestas.service';

describe('MisApuestasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MisApuestasService = TestBed.get(MisApuestasService);
    expect(service).toBeTruthy();
  });
});
