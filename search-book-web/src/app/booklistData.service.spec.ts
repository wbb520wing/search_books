import { TestBed } from '@angular/core/testing';

import { BooklistDataService } from './booklistData.service';

describe('BooklistDataService', () => {
  let service: BooklistDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooklistDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
