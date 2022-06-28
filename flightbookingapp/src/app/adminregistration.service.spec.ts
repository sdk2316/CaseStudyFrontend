import { TestBed } from '@angular/core/testing';

import { AdminregistrationService } from './adminregistration.service';

describe('AdminregistrationService', () => {
  let service: AdminregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
