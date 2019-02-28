import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-playing-movies',
  templateUrl: './playing-movies.component.html',
  styleUrls: ['./playing-movies.component.scss']
})
export class PlayingMoviesComponent implements OnInit, OnDestroy {
  originalPageNumber = 1;
  playingMoviesList = [];
  totalPages = 0;
  pageEvent: PageEvent;

  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private moviesService: MoviesService, private _router: Router) {}


  ngOnInit() {
    this.retrievePlayingMovies(this.originalPageNumber);
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  retrievePlayingMovies(pageNumber: number) {
    this.moviesService.getPlayingMoviesByPages(pageNumber)
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe(res => {
          this.totalPages = res.total_results;
          this.playingMoviesList = res.results;
        },
        (error) => {
          throw error;
        });
  }

  clickOnMovie(movie: any) {
    this._router.navigate([`movie/${movie.id}`]);
  }
}
