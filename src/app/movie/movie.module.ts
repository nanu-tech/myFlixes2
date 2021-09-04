import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MovieRoutingModule } from './movie-routing.module';

import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../service/movie.service';



@NgModule({
  declarations: [MovieListComponent],
  imports: [MovieRoutingModule, CommonModule],
  providers: [MovieService],
  exports: [MovieListComponent]

})
export class MovieModule { }
