import { Component, OnInit, Input } from '@angular/core';
import { LocalMoviesService } from '../../../data/local-movies.service';
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input()
  data: Movie;

  constructor(
    private localMovieService: LocalMoviesService,
  ) { }

  ngOnInit(): void {
  }

  deleteMovie(movie: Movie): void {
    this.localMovieService.deleteMovie(movie);
  }

}
