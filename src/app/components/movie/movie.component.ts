import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {  

  movieTitle: string;

  constructor(route: ActivatedRoute) { 
    this.movieTitle = route.snapshot.params['movieTitle']; 
    console.log(this.movieTitle);
  }

  ngOnInit() {
    
  }

}
