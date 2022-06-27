import { TestBed } from '@angular/core/testing';

import { MuzixSearchService } from './muzix-search.service';

describe('MuzixSearchService', () => {
  let service: MuzixSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuzixSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
