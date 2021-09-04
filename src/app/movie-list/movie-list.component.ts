import { Component, OnInit } from '@angular/core';
import { MovieShort } from '../models/pagination.model';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less']
})
export class MovieListComponent implements OnInit {

  movies!: MovieShort[];
 

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    console.log('we are about to get the movies');
    this.movieService.getMovies().subscribe(
      (paginatedResults: { total_results: any; results: MovieShort[]; }) =>{
        console.log(`*** We got ${paginatedResults.total_results} movies`);
        console.table(paginatedResults.results);

        this.movies = paginatedResults.results;
      },
      (error) =>{
        console.error('Oh shit, there is a monster in here')
      }
    );
  }

}
