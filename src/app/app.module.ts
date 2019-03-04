import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieHomeComponent } from './movies/movie-home/movie-home.component';
import { registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/fr';
import { PlayingMoviesComponent } from './movies/playing-movies/playing-movies.component';
import { TopRatedMoviesComponent } from './movies/top-rated-movies/top-rated-movies.component';

registerLocaleData(localeDeAt);

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    MovieDetailComponent,
    PageNotFoundComponent,
    MovieHomeComponent,
    PlayingMoviesComponent,
    TopRatedMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [MoviesService,
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
