import { TestBed } from '@angular/core/testing';

import { ApiMoviesService } from './api-movies.service';

describe('ApiMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMoviesService = TestBed.get(ApiMoviesService);
    expect(service).toBeTruthy();
  });
});
