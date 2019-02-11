import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  pageNumber = 1;
  popularMoviesList = [];

  constructor(private moviesService: MoviesService, private _router: Router) {}


  ngOnInit() {
    this.retrievePopularMovies(this.pageNumber);
  }

  retrievePopularMovies(pageNumber: number) {
    this.moviesService.getPopularMoviesByPages(pageNumber)
      .subscribe(res => {
          console.log(res.results);
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
