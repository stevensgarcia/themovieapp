import { Component, OnInit } from '@angular/core';
import { ExternalMoviesService } from '../../../data/external-movies.service';
import { Movie } from '../../../shared/models/movie';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-top5-movies',
  templateUrl: './top5-movies.component.html',
  styleUrls: ['./top5-movies.component.scss']
})
export class Top5MoviesComponent implements OnInit {

  movies: Array<Movie>;

  constructor(
    private externalMovieService: ExternalMoviesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getTop5Movies();
  }

  getTop5Movies(): void {
    this.externalMovieService.getTop5Movies()
      .subscribe((res) => this.movies = res);
  }

  openMovieDetailsDialog(movie): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '600px';
    dialogConfig.data = movie;

    // Reference to Modal
    const dialogRef = this.dialog.open(MovieDetailsComponent, dialogConfig);
  }

}
