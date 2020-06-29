import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie } from '../../../shared/models/movie';

import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {

  // SUT
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let compClass: MovieDetailsComponent;

  // Dependencies
  let dialogRef: MatDialogRef<MovieDetailsComponent>;

  // Dummies
  let dataDummie: Movie = {
    title: 'Once upon a time',
    release: new Date(),
    description: 'This is a description',
    image: 'https://someimage.com/image.jpg'
  };

  /*============================================================================
  =                                GLOBAL SET UP                              =
  ============================================================================*/
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        { provide: MatDialogRef, useValue: '' },
        { provide: MAT_DIALOG_DATA, useValue: dataDummie }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // ASSEMBLE
    fixture = TestBed.createComponent(MovieDetailsComponent);
    compClass = fixture.componentInstance;

    // Dependency injection
    dialogRef  = TestBed.get(MatDialogRef);
    dataDummie = TestBed.get(MAT_DIALOG_DATA);

  });

  it('should create', () => {
    expect(compClass).toBeTruthy();
  });

  /*============================================================================
  =                                  CLASS API                                =
  ============================================================================*/
  describe(`['data']`, () => {

    it('should be populated at creation', () => {

      expect(compClass.data).toEqual(dataDummie);

    });

  });

});
