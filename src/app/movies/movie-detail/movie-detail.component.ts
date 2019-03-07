import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: any;
  backgroundImg: any;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private sanitizer: DomSanitizer
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
          this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle(
            'url(https://image.tmdb.org/t/p/w1400_and_h450_face' + this.movie.backdrop_path + ')');
        },
        (error) => {
          throw error;
        });
  }

}
