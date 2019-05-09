import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  type:string;
  typeSubscription:any;
  movies: object[];
  constructor(private route: ActivatedRoute, private api: ApiMoviesService) { }

  ngOnInit() {
    this.typeSubscription = this.route.params.subscribe(params => {
      this.type = params.type
      this.api.getMovies(this.type).subscribe(res =>{
        console.log(res)
      })
    })
  }

  ngOnDestroy(){
    this.typeSubscription.unsubscribe()
  }
}
