import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { AddMovieComponent } from '../../pages/home/add-movie/add-movie.component';

@Injectable({
  providedIn: 'root'
})
export class AddMovieDialogUtils {

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  openAddMovieDialog(): void {
    // Reference to Modal
    const dialogRef = this.dialog.open(AddMovieComponent, {
      width: '450px',
      disableClose: true
    });

    // Subscribe to dialog events
    dialogRef.afterClosed()
    .subscribe(result => {
      if (result) {
        // Open a snackbar
        this.openSnackBar('Movie added')
          .onAction()
          .subscribe(() => {
            console.log('Movie added', result);
          });
      }
    });

  }

  private openSnackBar(message: string, action: string = 'OK'): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000
    });
  }

}
