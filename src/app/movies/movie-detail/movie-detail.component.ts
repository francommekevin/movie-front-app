import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: any;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const movieId = +this.route.snapshot.paramMap.get('id');
    this.moviesService.getMovieDetail(movieId)
      .subscribe(res => {
          console.log(res);
          this.movie = res;
        },
        (error) => {
          throw error;
        });
  }

}
