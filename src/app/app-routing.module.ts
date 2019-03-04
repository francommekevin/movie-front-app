import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieHomeComponent } from './movies/movie-home/movie-home.component';
import { PlayingMoviesComponent } from './movies/playing-movies/playing-movies.component';
import { TopRatedMoviesComponent } from './movies/top-rated-movies/top-rated-movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MovieHomeComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'popular', component: PopularMoviesComponent },
  { path: 'now_playing', component: PlayingMoviesComponent },
  { path: 'top_rated', component: TopRatedMoviesComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
