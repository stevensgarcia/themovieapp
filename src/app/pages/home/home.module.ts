import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ToolbarComponent } from '../../layout/toolbar/toolbar.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { Top5MoviesComponent } from './top5-movies/top5-movies.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    HomeComponent,
    Top5MoviesComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
})
export class HomeModule { }
