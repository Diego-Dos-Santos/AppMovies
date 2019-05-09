import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  type:string;
  typeSubscription:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.typeSubscription = this.route.params.subscribe(params => {
      this.type = params.type
    })
  }

  ngOnDestroy(){
    this.typeSubscription.unsubscribe()
  }
}
