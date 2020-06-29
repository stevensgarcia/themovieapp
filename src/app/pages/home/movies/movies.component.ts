import { Component, OnInit } from '@angular/core';
import { LocalMoviesService } from '../../../data/local-movies.service';
import { Movie } from '../../../shared/models/movie';
import { AddMovieDialogUtils } from '../../../shared/utils/add-movie-dialog-utils';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Observable<Movie[]>;

  constructor(
    private localMovieService: LocalMoviesService,
    private movieDialogUtils: AddMovieDialogUtils,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.movies = this.localMovieService.movies;
  }

  openAddMovieDialog(): void {
    this.movieDialogUtils.openAddMovieDialog();
  }

  openMovieDetailsDialog(movie: Movie): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '400px';
    dialogConfig.data = movie;

    // Reference to Modal
    const dialogRef = this.dialog.open(MovieDetailsComponent, dialogConfig);

  }

}
