import { TestBed } from '@angular/core/testing';

import { DigiApiService } from './digi-api.service';

describe('DigiApiService', () => {
  let service: DigiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
