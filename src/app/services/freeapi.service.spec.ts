import { TestBed } from '@angular/core/testing';

import { FreeapiService } from './freeapi.service';

describe('FreeapiService', () => {
  let service: FreeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
