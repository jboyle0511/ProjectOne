import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent} from './components/home/home.component';
import { MovieListComponent} from './components/movie-list/movie-list.component';
import { MovieComponent} from './components/movie/movie.component';

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'movie-list', component: MovieListComponent},  
   {path: 'movie/:movieTitle', component: MovieComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
