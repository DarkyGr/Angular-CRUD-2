import { TestBed } from '@angular/core/testing';

import { PilotoService } from './piloto.service';

describe('PilotoService', () => {
  let service: PilotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
