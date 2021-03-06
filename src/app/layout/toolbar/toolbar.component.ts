import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AddMovieDialogUtils } from '../../shared/utils/add-movie-dialog-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output()
  sidenavToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private movieDialogUtils: AddMovieDialogUtils,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  openAddMovieDialog(): void {
    this.movieDialogUtils.openAddMovieDialog();
  }

  onSidenavToggle(): void {
    this.sidenavToggle.emit(true);
  }

}
