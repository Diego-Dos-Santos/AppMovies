import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-display',
  templateUrl: './movies-display.component.html',
  styleUrls: ['./movies-display.component.scss']
})
export class MoviesDisplayComponent implements OnInit {
  @Input() films: object[];
  constructor() { }
  ngOnInit() {
  }

}
