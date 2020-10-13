import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './components/home/home.component';
import { MovieListComponent} from './components/movie-list/movie-list.component';
import { OdysseyComponent} from './components/odyssey/odyssey.component';

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'movie-list', component: MovieListComponent},
   {path: 'odyssey', component: OdysseyComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
