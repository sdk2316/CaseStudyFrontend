import { TestBed } from '@angular/core/testing';

import { AddflightService } from './addflight.service';

describe('AddflightService', () => {
  let service: AddflightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddflightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
