import { TestBed } from '@angular/core/testing';

import { LocalMoviesService } from './local-movies.service';
import { Movie } from '../shared/models/movie';
import { Observable, BehaviorSubject } from 'rxjs';

describe('LocalMoviesService', () => {

  let service: LocalMoviesService;

  /*============================================================================
  =                                GLOBAL SET UP                              =
  ============================================================================*/
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  beforeEach(() => {
    // Inject SUT service
    service = TestBed.inject(LocalMoviesService);
  });

  // TEARDOWN
  afterEach(() => {
    service   = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*============================================================================
  =                                  CLASS API                                =
  ============================================================================*/
  describe(`['dataStore']`, () => {
    it('should be defined', () => {
      // ASSERT
      expect(service[`dataStore`].movies).toBeDefined();
      expect(service[`dataStore`].movies.length).toBe(0);
    });
  });

  describe(`['_MOVIES']`, () => {
    it('should be defined', () => {
      // ASSERT
      expect(service[`_MOVIES`]).toBeDefined();
    });
  });

  describe('#addMovie()', () => {

    // Dummie
    let movie: Movie;

    beforeEach(() => {
      // ASSEMBLE
      const date = new Date();
      movie = {
        title: 'Once upon a time',
        release: date,
        description: 'This is a description',
        image: 'https://someimage.com/image.jpg'
      };
    });

    afterEach(() => {
      // Resets
      movie = null;
    });

    it('should add a movie when called', () => {
      // ACT
      service.addMovie(movie);
      // ASSERT
      service.movies
        .subscribe((data) => {
          expect(data[0]).toEqual(movie);
      });
      expect(service[`dataStore`].movies[0]).toEqual(movie);
    });

  });

  describe('#deleteMovie()', () => {

    // Dummie
    let movie: Movie;

    beforeEach(() => {
      // ASSEMBLE
      const date = new Date();
      movie = {
        title: 'Once upon a time',
        release: date,
        description: 'This is a description',
        image: 'https://someimage.com/image.jpg'
      };

      service.addMovie(movie);
      expect(service[`dataStore`].movies.length).toEqual(1);
    });

    afterEach(() => {
      // Resets
      movie = null;
    });

    it('should remove an item from the dataStore', () => {

      // ACT
      const result = service.deleteMovie(movie);

      // ASSERT
      expect(service[`dataStore`].movies.length).toEqual(0);

    });

  });

});
