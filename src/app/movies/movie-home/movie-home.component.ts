import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { SubscriberUtil } from '../../utils/subscriber';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit, OnDestroy {
  originalPageNumber = 1;
  popularMoviesList: any = null;

  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private moviesService: MoviesService,
              private _router: Router) {}


  ngOnInit() {
    this.retrievePopularMovies(this.originalPageNumber);
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  retrievePopularMovies(pageNumber: number) {
    SubscriberUtil.relay(
      this.moviesService.getPopularMoviesByPages(pageNumber)
        .pipe(takeUntil(this._ngUnsubscribe))
        .subscribe(res => {
            this.popularMoviesList = res.results;
          },
          (error) => {
            throw error;
          },
        ),
      'popular-movies.component.retrievePopularMovies'
    );
  }

  clickOnMovie(movie: any) {
    this._router.navigate([`movie/${movie.id}`]);
  }
}
