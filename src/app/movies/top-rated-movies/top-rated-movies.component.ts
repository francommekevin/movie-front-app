import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Subject } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { SubscriberUtil } from '../../utils/subscriber';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit, OnDestroy {
  originalPageNumber = 1;
  topratedMoviesList: any = null;
  totalPages = 0;
  pageEvent: PageEvent;

  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private moviesService: MoviesService, private _router: Router) {}


  ngOnInit() {
    this.retrieveTopRatedMovies(this.originalPageNumber);
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  retrieveTopRatedMovies(pageNumber: number) {
    SubscriberUtil.relay(
      this.moviesService.getTopRatedMoviesByPages(pageNumber)
        .pipe(takeUntil(this._ngUnsubscribe))
        .subscribe(res => {
            this.totalPages = res.total_results;
            this.topratedMoviesList = res.results;
          },
          (error) => {
            throw error;
          },
        ),
      'toprated-movies.component.retrieveTopRatedMovies'
    );
  }

  clickOnMovie(movie: any) {
    this._router.navigate([`movie/${movie.id}`]);
  }

}
