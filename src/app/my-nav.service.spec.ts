import { TestBed } from '@angular/core/testing';

import { MyNavService } from './my-nav.service';

describe('MyNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyNavService = TestBed.get(MyNavService);
    expect(service).toBeTruthy();
  });
});
