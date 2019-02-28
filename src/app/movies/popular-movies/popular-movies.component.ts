import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit, OnDestroy {
  originalPageNumber = 1;
  popularMoviesList = [];
  totalPages = 0;
  pageEvent: PageEvent;

  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private moviesService: MoviesService, private _router: Router) {}


  ngOnInit() {
    this.retrievePopularMovies(this.originalPageNumber);
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  retrievePopularMovies(pageNumber: number) {
    this.moviesService.getPopularMoviesByPages(pageNumber)
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe(res => {
          this.totalPages = res.total_results;
          this.popularMoviesList = res.results;
        },
        (error) => {
          throw error;
        });
  }

  clickOnMovie(movie: any) {
    this._router.navigate([`movie/${movie.id}`]);
  }
}
