import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Top5MoviesComponent } from './top5-movies.component';

const routes: Routes = [{ path: '', component: Top5MoviesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Top5MoviesRoutingModule { }
