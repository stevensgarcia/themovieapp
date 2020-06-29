import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Movie } from '../../../shared/models/movie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalMoviesService } from '../../../data/local-movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddMovieComponent>,
    private localMovieService: LocalMoviesService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      title       : ['', Validators.required],
      release     : ['', Validators.required],
      description : [''],
      image       : ['', Validators.required],
    });
  }

  saveMovie(): void {
    const movie = this.form.value;
    this.localMovieService.addMovie(movie);

    this.dismissDialog(movie);
  }

  dismissDialog(result: Movie = null): void {
    this.dialogRef.close(result);
  }


}
