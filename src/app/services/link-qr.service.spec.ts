import { TestBed } from '@angular/core/testing';

import { LinkQrService } from './link-qr.service';

describe('LinkQrService', () => {
  let service: LinkQrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkQrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
