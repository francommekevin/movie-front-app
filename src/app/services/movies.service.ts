import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constants';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopularMoviesByPages(pageNumber: number): Observable<any> {
    return this.http.get(Constants.BASE_API_URL + 'movie/popular?api_key=' +
      Constants.BASE_API_KEY + '&language=' +
      Constants.BASE_API_LANGUAGE + '&page=' + pageNumber);
  }

  getMovieDetail(movieId: number): Observable<any> {
    return this.http.get(Constants.BASE_API_URL + 'movie/' + movieId + '?api_key=' +
      Constants.BASE_API_KEY + '&language=' +
      Constants.BASE_API_LANGUAGE);
  }
}
