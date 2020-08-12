import { TestBed } from '@angular/core/testing';

import { RealdbService } from './realdb.service';

describe('RealdbService', () => {
  let service: RealdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
