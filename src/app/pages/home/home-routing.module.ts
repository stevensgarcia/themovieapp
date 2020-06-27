import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MoviesComponent } from './movies/movies.component';
import { Top5MoviesComponent } from './top5-movies/top5-movies.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, // WRAPPER
    children: [
      { path: '', component: MoviesComponent },
      { path: 'top5movies', component: Top5MoviesComponent },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
