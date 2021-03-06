import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { ToolbarComponent } from '../../layout/toolbar/toolbar.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { Top5MoviesComponent } from './top5-movies/top5-movies.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { SideNavigationComponent } from '../../layout/side-navigation/side-navigation.component';
import { LocalMoviesService } from '../../data/local-movies.service';
import { ExternalMoviesService } from '../../data/external-movies.service';
import { AddMovieDialogUtils } from '../../shared/utils/add-movie-dialog-utils';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    HomeComponent,
    Top5MoviesComponent,
    MoviesComponent,
    SideNavigationComponent,
    AddMovieComponent,
    MovieComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    LocalMoviesService,
    ExternalMoviesService,
    AddMovieDialogUtils,
  ],
  entryComponents: [
    AddMovieComponent,
    MovieDetailsComponent,
  ],
})
export class HomeModule { }
