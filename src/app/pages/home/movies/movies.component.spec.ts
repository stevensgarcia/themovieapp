import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocalMoviesService } from '../../../data/local-movies.service';
import { AddMovieDialogUtils } from '../../../shared/utils/add-movie-dialog-utils';
import { Movie } from '../../../shared/models/movie';
import { Observable, of } from 'rxjs';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {

  // SUT
  let fixture: ComponentFixture<MoviesComponent>;
  let compClass: MoviesComponent;

  // Dependencies
  let localMovieService: LocalMoviesService;
  let movieDialogUtils: AddMovieDialogUtils;

  // Spies
  let localMovieServiceSpy: jasmine.Spy;
  let movieDialogUtilsSpy: jasmine.Spy;

  // Mocks
  class AddMovieDialogUtilsFake {
    openAddMovieDialog() {}
  }

  // Dummies
  let movies: Observable<Movie[]>;

  /*============================================================================
  =                                GLOBAL SET UP                              =
  ============================================================================*/
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        LocalMoviesService,
        { provide: AddMovieDialogUtils, useClass: AddMovieDialogUtilsFake }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // ASSEMBLE
    fixture   = TestBed.createComponent(MoviesComponent);
    compClass = fixture.componentInstance;

    // Dependency injection
    localMovieService = TestBed.get(LocalMoviesService);
    movieDialogUtils  = TestBed.get(AddMovieDialogUtils);
  });

  it('should create', () => {
    expect(compClass).toBeTruthy();
  });

  /*============================================================================
  =                                  CLASS API                                =
  ============================================================================*/
  describe('#ngOnInit()', () => {

    it('should listen for movies observable', () => {

      // ASSEMBLE
      movies = of([
        { title: 'Once upon a time',
          release: new Date(),
          description: 'This is a description',
          image: 'https://someimage.com/image.jpg'
        },
        { title: 'Once upon a time',
          release: new Date(),
          description: 'This is a description',
          image: 'https://someimage.com/image.jpg'
        },
      ]);

      localMovieServiceSpy = spyOnProperty(localMovieService, 'movies').and
        .returnValue(movies);

      // ACT
      compClass.ngOnInit();

      // ASSERT
      expect(localMovieServiceSpy).toHaveBeenCalled();
      expect(compClass.movies).toEqual(movies);

      // Resets
      movies = null;

    });

  });

  describe('#openAddMovieDialog()', () => {

    it('should call addMovie dialog from utils', () => {

      // ASSEMBLE
      movieDialogUtilsSpy = spyOn(movieDialogUtils, 'openAddMovieDialog');

      // ACT
      compClass.openAddMovieDialog();

      // ASSERT
      expect(movieDialogUtilsSpy).toHaveBeenCalled();

    });

  });

  describe('#deleteMovie()', () => {

    it('should call deleteMovie method from local movie service', () => {

      // ASSEMBLE
      compClass.movies = movies = of([
        { title: 'Once upon a time',
          release: new Date(),
          description: 'This is a description',
          image: 'https://someimage.com/image.jpg'
        },
        { title: 'Once upon a second time',
          release: new Date(),
          description: 'This is a description 2',
          image: 'https://someimage.com/image-2.jpg'
        },
      ]);
      const deleteMovieServiceSpy = spyOn(localMovieService, 'deleteMovie');

      // ACT
      compClass.deleteMovie(movies[1]);

      // ASSERT
      expect(deleteMovieServiceSpy).toHaveBeenCalled();

    });

  });

});
