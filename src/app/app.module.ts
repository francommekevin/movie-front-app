import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
