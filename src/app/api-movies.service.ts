import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {
  urlBase = `https://api.themoviedb.org/3/`;
  key = 'AIzaSyACL5S0a8taw8VdlR3vMLy_7CT4snAggqQ';
  generateUrl = (_type) => this.urlBase + `movie/${_type}?api_key=` + this.key;
  constructor(private http: HttpClient) { }
  getMovies (type){

    return this.http.get(this.generateUrl(type))
  }
}
