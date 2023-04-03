import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Netflix';
  genres = [{number:35,name:'Comedy'},
  {number:27,name:'Horror'},
  {number:28,name:'Action'},
  {number:10749,name:'Romance'},
  {number:99,name:'Documentaries'}]


}
