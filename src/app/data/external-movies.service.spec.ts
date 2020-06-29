import { async, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Movie } from '../shared/models/movie';

import { ExternalMoviesService } from './external-movies.service';

describe('ExternalMoviesService', () => {

  // SUT
  let service: ExternalMoviesService;

  // Dependencies
  let http: HttpTestingController;

  // Dummies
  let request;
  let body: { movies: Array<Movie>};
  let opts;

  /*============================================================================
  =                                GLOBAL SET UP                              =
  ============================================================================*/
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ExternalMoviesService
      ]
    });
  });

  beforeEach(() => {
    // ASSEMBLE
    service = TestBed.get(ExternalMoviesService);
    http    = TestBed.get(HttpTestingController);

    // Expect dependencies presence
    expect(service).toBeTruthy();
    expect(http).toBeTruthy();
  });

  afterEach(() => {
    // Resets
    service = null;
    http    = null;
    request = null;
    body    = null;
    opts    = null;
  });

  /*============================================================================
  =                                  CLASS API                                =
  ============================================================================*/
  describe('#getTop5()', () => {

    // ASSEMBLE
    beforeEach(() => {
      // Set response data
      body = {
        movies: [
          {
            title: 'Home Alone 2',
            release: new Date('11/20/1992'),
            description: 'One year after Kevin McCallister was left home alone and had to defeat a pair of bumbling burglars, he accidentally finds himself stranded in New York City - and the same criminals are not far behind.',
            image: 'https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
          },
          {
            title: 'Life is Beatiful',
            release: new Date('02/12/1997'),
            description: 'When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.',
            image: 'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
          },
        ]
      };

      // Set request data
      request = {
        url: 'http://www.mocky.io/v2/5dc3c053300000540034757b',
        method: 'GET'
      };

    });

    afterEach(() => {
      // Resets
      request = null;
      body    = null;
      opts    = null;
    });

    it('should return a list of 5 movies', () => {

      // ACT
      service.getTop5Movies()
        .subscribe((res) => {
          // ASSERT
        });

      // Set response options
      opts = {
        status: 200,
        statusText: 'Ok'
      };

      // Request handler
      http
        .expectOne(request)
        .flush(body, opts);

    });

  });

});
