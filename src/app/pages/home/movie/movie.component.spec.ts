import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocalMoviesService } from '../../../data/local-movies.service';
import { Movie } from '../../../shared/models/movie';
import { Observable, of } from 'rxjs';

import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {

  // SUT
  let fixture: ComponentFixture<MovieComponent>;
  let compClass: MovieComponent;

  // Dependencies
  let localMovieService: LocalMoviesService;

  // Dummies
  let movie: Movie;

  /*============================================================================
  =                                GLOBAL SET UP                              =
  ============================================================================*/
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        LocalMoviesService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // ASSEMBLE
    fixture = TestBed.createComponent(MovieComponent);
    compClass = fixture.componentInstance;

    compClass.data = movie = {
      title: 'Once upon a time',
      release: new Date(),
      description: 'This is a description',
      image: 'https://someimage.com/image.jpg'
    };

    // Dependency injection
    localMovieService = TestBed.get(LocalMoviesService);
  });

  it('should create', () => {
    expect(compClass).toBeTruthy();
  });

  /*============================================================================
  =                                  CLASS API                                =
  ============================================================================*/
  describe('#deleteMovie()', () => {

    it('should call deleteMovie method from local movie service', () => {

      // ASSEMBLE
      const deleteMovieServiceSpy = spyOn(localMovieService, 'deleteMovie');

      // ACT
      compClass.deleteMovie(movie);

      // ASSERT
      expect(deleteMovieServiceSpy).toHaveBeenCalled();

    });

  });

});
