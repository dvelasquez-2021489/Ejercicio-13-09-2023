import { TestBed } from '@angular/core/testing';

import { DogsServiceService } from './dogs-service.service';

describe('DogsServiceService', () => {
  let service: DogsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
