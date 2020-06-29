import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AddMovieDialogUtils } from '../../shared/utils/add-movie-dialog-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  @Output()
  sidenavToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private movieDialogUtils: AddMovieDialogUtils,
    private router: Router
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
