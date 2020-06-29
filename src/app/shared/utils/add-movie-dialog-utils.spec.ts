import { TestBed } from '@angular/core/testing';
import { AddMovieDialogUtils } from './add-movie-dialog-utils';
import { AddMovieComponent } from '../../pages/home/add-movie/add-movie.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';

describe('AddMovieDialogUtils', () => {

  // SUT
  let sut: AddMovieDialogUtils;

  // Dependencies
  let dialog: MatDialogFake;
  let snackBar: MatSnackBarFake;

  // Spies
  let dialogOpenSpy: jasmine.Spy;

  // Mocks
  class MatDialogFake {
    open() {
      return {
        afterClosed: () => of(null)
      };
    }
  }
  class MatSnackBarFake {
    open() {}
  }

  /*============================================================================
  =                                GLOBAL SET UP                              =
  ============================================================================*/
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddMovieDialogUtils,
        { provide: MatDialog, useClass: MatDialogFake },
        { provide: MatSnackBar, useClass: MatSnackBarFake },
      ]
    });
  });

  beforeEach(() => {
    // ASSEMBLE
    sut      = TestBed.get(AddMovieDialogUtils);
    dialog   = TestBed.get(MatDialog);
    snackBar = TestBed.get(MatSnackBar);
  });

  afterEach(() => {
    // Resets
    sut      = null;
    dialog   = null;
    snackBar = null;
  });

  it('should create an instance', () => {
    expect(sut).toBeTruthy();
  });

  /*============================================================================
  =                                  CLASS API                                =
  ============================================================================*/
  describe('#openAddMovieDialog()', () => {

    it('should call open method from MatDialog service', () => {

      // ASSEMBLE
      dialogOpenSpy = spyOn(dialog, 'open').and.callThrough();

      // ACT
      sut.openAddMovieDialog();

      // ASSERT
      expect(dialogOpenSpy).toHaveBeenCalled();

    });

  });

});
