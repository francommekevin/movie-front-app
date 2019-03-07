import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Subject } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { SubscriberUtil } from '../../utils/subscriber';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit, OnDestroy {
  originalPageNumber = 1;
  upcomingMoviesList: any = null;
  totalPages = 0;
  pageEvent: PageEvent;

  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private moviesService: MoviesService, private _router: Router) {}


  ngOnInit() {
    this.retrieveUpcomingMovies(this.originalPageNumber);
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  retrieveUpcomingMovies(pageNumber: number) {
    SubscriberUtil.relay(
      this.moviesService.getUpcomingMoviesByPages(pageNumber)
        .pipe(takeUntil(this._ngUnsubscribe))
        .subscribe(res => {
            this.totalPages = res.total_results;
            this.upcomingMoviesList = res.results;
          },
          (error) => {
            throw error;
          },
        ),
      'upcoming-movies.component.retrieveUpcomingMovies'
    );
  }

  clickOnMovie(movie: any) {
    this._router.navigate([`movie/${movie.id}`]);
  }
}
