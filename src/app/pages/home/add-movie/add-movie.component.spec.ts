import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalMoviesService } from '../../../data/local-movies.service';
import { Movie } from '../../../shared/models/movie';

import { AddMovieComponent } from './add-movie.component';

describe('AddMovieComponent', () => {

  // SUT
  let fixture: ComponentFixture<AddMovieComponent>;
  let compClass: AddMovieComponent;

  // Dependencies
  let fb: FormBuilder;
  let dialogRef: MatDialogRef<AddMovieComponent>;
  let localMovieService: LocalMoviesService;

  // Spies
  let localMovieServiceSpy: jasmine.Spy;
  let dialogRefSpy: jasmine.Spy;
  let dismissDialogSpy: jasmine.Spy;

  // Dummies
  let movieDummie: Movie;

  // Mocks
  class MatDialogRefFake {
    close() {}
  }

  /*============================================================================
  =                                GLOBAL SET UP                              =
  ============================================================================*/
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddMovieComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        FormBuilder,
        LocalMoviesService,
        { provide: MatDialogRef, useClass: MatDialogRefFake },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // ASSEMBLE
    fixture   = TestBed.createComponent(AddMovieComponent);
    compClass = fixture.componentInstance;

    // Dependency Injection
    fb                = TestBed.get(FormBuilder);
    dialogRef         = TestBed.get(MatDialogRef);
    localMovieService = TestBed.get(LocalMoviesService);

    // Dummy fields
    movieDummie = {
      title       : 'Some movie',
      release     : new Date(),
      description : 'Some description',
      image       : 'https://path-to-some-image.com/img.jpg'
    };

  });

  it('should create', () => {
    expect(compClass).toBeTruthy();
  });

  // TEARDOWN
  afterEach(() => {
    // Resets
    fb                = null;
    dialogRef         = null;
    localMovieService = null;
  });

  /*============================================================================
  =                                  CLASS API                                =
  ============================================================================*/
  describe('#ngOnInit()', () => {

    it('should create a form when initialzed', () => {

      // ASSEMBLE
      const spy = spyOn(compClass, 'createForm');

      // ACT
      compClass.ngOnInit();

      // ASSERT
      expect(spy).toHaveBeenCalled();

      // Resets
      spy.calls.reset();

    });

  });

  describe('#createForm()', () => {

    beforeEach(() => {

      // ACT
      compClass.createForm();

    });

    it('should create an empty form after initialization', () => {

      // ASSERT
      expect(compClass.form.value).toEqual(jasmine.objectContaining({
        title       : jasmine.anything(),
        release     : jasmine.anything(),
        description : jasmine.anything(),
        image       : jasmine.anything()
      }));

    });

  });

  describe('#saveMovie()', () => {

    let form: FormGroup;

    beforeEach(() => {

      // ASSEMBLE
      localMovieServiceSpy = spyOn(localMovieService, 'addMovie');
      dismissDialogSpy = spyOn(compClass, 'dismissDialog');

      // Prepare form
      compClass.ngOnInit();
      form = compClass.form;

      form.get('title').setValue(movieDummie.title);
      form.get('release').setValue(movieDummie.release);
      form.get('description').setValue(movieDummie.description);
      form.get('image').setValue(movieDummie.image);

      // ACT
      compClass.saveMovie();

    });

    afterEach(() => {
      // Resets
      localMovieServiceSpy.calls.reset();
      dismissDialogSpy.calls.reset();
      form = null;
    });

    it('should call the addMovie method of local movie service', () => {

      // ASSERT
      expect(localMovieServiceSpy).toHaveBeenCalled();

    });

    it('should close the dialog after saving is complete', () => {

      // ASSERT
      expect(dismissDialogSpy).toHaveBeenCalled();

    });

  });

  describe('#dismissDialog()', () => {

    it('should call the dialogRef.close service method when invoked', () => {

      // ASSEMBLE
      dialogRefSpy = spyOn(dialogRef, 'close');

      // ACT
      compClass.dismissDialog(null);

      // ASSERT
      expect(dialogRefSpy).toHaveBeenCalled();

      // Resets
      dialogRefSpy.calls.reset();

    });

  });


});
