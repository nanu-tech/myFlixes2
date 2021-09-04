import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


// models
import { Pagination } from '../models/pagination.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class MovieService {

  api_key = '4bd7b5e675d3f7824e3fc7276ab255c8';
  const_endpoint2 = 'https://api.themoviedb.org/3/search/movie?api_key=4bd7b5e675d3f7824e3fc7276ab255c8&language=en-US&query=war&page=1&include_adult=false' ;
  movie: any;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Pagination> {
   
    const endpoint2 = "https://api.themoviedb.org/3/search/movie?api_key=4bd7b5e675d3f7824e3fc7276ab255c8&language=en-US&query=war&page=1&include_adult=false";

    return this.http.get<Pagination>(endpoint2, httpOptions);
  }

  getMovie(id: number) {
    console.log(`getMovie/{movie_id} called`)
    const api = `https://api.themoviedb.org/3/movie/{id}?language=en-US&api_key=${this.api_key}`;
    return this.http.get(api);
  }

}
