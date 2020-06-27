import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Top5MoviesRoutingModule } from './top5-movies-routing.module';
import { Top5MoviesComponent } from './top5-movies.component';


@NgModule({
  declarations: [Top5MoviesComponent],
  imports: [
    CommonModule,
    Top5MoviesRoutingModule
  ]
})
export class Top5MoviesModule { }
