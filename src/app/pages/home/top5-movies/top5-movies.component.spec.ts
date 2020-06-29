import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Movie } from '../../../shared/models/movie';
import { Observable, of } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ExternalMoviesService } from '../../../data/external-movies.service';
import { HttpClient } from '@angular/common/http';

import { Top5MoviesComponent } from './top5-movies.component';

describe('Top5MoviesComponent', () => {

  // SUT
  let fixture: ComponentFixture<Top5MoviesComponent>;
  let compClass: Top5MoviesComponent;

  // Dependencies
  let externalMovieService: ExternalMoviesService;
  let dialog: MatDialog;

  // Spies
  let getTop5MoviesSpy: jasmine.Spy;
  let dialogOpenSpy: jasmine.Spy;
  let externalMovieServiceSpy: jasmine.Spy;

  // Mocks
  class MatDialogFake {
    open() {
      return of(null);
    }
  }

  /*============================================================================
  =                                GLOBAL SET UP                              =
  ============================================================================*/
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top5MoviesComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        ExternalMoviesService,
        { provide: MatDialog, useClass: MatDialogFake },
        { provide: HttpClient, useValue: '' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // ASSEMBLE
    fixture   = TestBed.createComponent(Top5MoviesComponent);
    compClass = fixture.componentInstance;

    // Dependency injection
    externalMovieService = TestBed.get(ExternalMoviesService);
    dialog               = TestBed.get(MatDialog);
  });

  afterEach(() => {
    // Resets
    externalMovieService = null;
  });

  it('should create', () => {
    expect(compClass).toBeTruthy();
  });

  /*============================================================================
  =                                  CLASS API                                =
  ============================================================================*/
  describe('#ngOnInit()', () => {

    it('should call getTop5Movies method from external movie service', () => {

      // ASSEMBLE
      getTop5MoviesSpy = spyOn(compClass, 'getTop5Movies');

      // ACT
      compClass.ngOnInit();

      // ASSERT
      expect(getTop5MoviesSpy).toHaveBeenCalled();

    });

  });

  describe('#openMovieDetailsDialog()', () => {

    it('should call open method from MatDialog service', () => {

      // ASSEMBLE
      const movie: Movie = {
        title: 'Once upon a time',
        release: new Date(),
        description: 'This is a description',
        image: 'https://someimage.com/image.jpg'
      };

      dialogOpenSpy = spyOn(dialog, 'open').and.callThrough();

      // ACT
      compClass.openMovieDetailsDialog(movie);

      // ASSERT
      expect(dialogOpenSpy).toHaveBeenCalled();

    });

  });

});
