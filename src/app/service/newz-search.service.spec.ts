import { TestBed } from '@angular/core/testing';

import { NewzSearchService } from './newz-search.service';

describe('NewzSearchService', () => {
  let service: NewzSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewzSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
