import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieHomeComponent } from './movies/movie-home/movie-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MovieHomeComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'popular', component: PopularMoviesComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
