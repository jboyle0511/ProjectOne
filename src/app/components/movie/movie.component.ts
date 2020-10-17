import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {  

  movieTitle: string;
  imagePath: string;

  constructor(route: ActivatedRoute) { 
    this.movieTitle = route.snapshot.params['movieTitle']; 
    
    this.checkMovie(this.movieTitle);
  }

  ngOnInit() {
    
  }

  checkMovie(movie) {
    
    switch(movie) {
      case 'odyssey':
        this.imagePath = "../../../assets/images/odyssey.jpg";
        break;
      case 'casablanca':
        this.imagePath = "../../../assets/images/casablanca.jpg";
        break;
      default:
        // code block
    } 

  }

}
