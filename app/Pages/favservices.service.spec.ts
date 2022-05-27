import { TestBed } from '@angular/core/testing';

import { FavservicesService } from './favservices.service';

describe('FavservicesService', () => {
  let service: FavservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
