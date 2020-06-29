import { Component, OnInit } from '@angular/core';
import { LocalMoviesService } from '../../../data/local-movies.service';
import { Movie } from '../../../shared/models/movie';
import { AddMovieDialogUtils } from '../../../shared/utils/add-movie-dialog-utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Observable<Movie[]>;

  constructor(
    private localMovieService: LocalMoviesService,
    private movieDialogUtils: AddMovieDialogUtils
  ) { }

  ngOnInit(): void {
    this.movies = this.localMovieService.movies;
  }

  openAddMovieDialog(): void {
    this.movieDialogUtils.openAddMovieDialog();
  }

  deleteMovie(movie): void {
    this.localMovieService.deleteMovie(movie);
  }

}
