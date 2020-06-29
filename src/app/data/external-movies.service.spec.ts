import { TestBed } from '@angular/core/testing';

import { ExternalMoviesService } from './external-movies.service';

describe('ExternalMoviesService', () => {
  let service: ExternalMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
