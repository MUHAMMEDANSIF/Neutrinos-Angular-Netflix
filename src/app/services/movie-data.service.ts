import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  ApiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=34e6a40d0f4b290f840d58ff8a8c754a&with_genres='

  constructor(private http:HttpClient) { }

  getmovie(genres:number){
    let url = `${this.ApiUrl}${genres}`
    return this.http.get(url);
  }
}
