import { Injectable } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalMoviesService {

  private dataStore: {
    movies: Array<Movie>
  };

  private _MOVIES: BehaviorSubject<Movie[]>;

  constructor() {
    this.dataStore = { movies: [] };
    this._MOVIES = new BehaviorSubject<Movie[]>([]);
  }

  get movies(): Observable<Movie[]> {
    return this._MOVIES.asObservable();
  }

  addMovie(movie: Movie): void {
    this.dataStore.movies.push(movie);
    this._MOVIES.next(Object.assign({}, this.dataStore).movies);
  }

  deleteMovie(movie: Movie): void {
    const movies = this._MOVIES.getValue();
    movies.forEach((item, index) => {
      if (item === movie) {
        movies.splice(index, 1);
      }
    });
    this._MOVIES.next(movies);
  }

}
