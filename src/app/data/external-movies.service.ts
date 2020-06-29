import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class ExternalMoviesService {

  private api = 'http://www.mocky.io/v2/5dc3c053300000540034757b';

  constructor(private http: HttpClient) { }

  getTop5Movies(): Observable<Movie[]> {
    return this.http.get<{movies: Movie[]}>(this.api)
      .pipe(
        map((data) => data.movies)
      );
  }

}
