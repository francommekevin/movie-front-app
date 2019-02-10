import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'popular', component: PopularMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
