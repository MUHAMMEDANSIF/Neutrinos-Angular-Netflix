import { Component,Input } from '@angular/core';
import { MovieDataService } from '../../services/movie-data.service'

@Component({
  selector: 'app-row-post',
  templateUrl: './row-post.component.html',
  styleUrls: ['./row-post.component.css']
})
export class RowPostComponent {
  
  @Input() code : any;
  data : any
  imagebaseurl = 'https://image.tmdb.org/t/p/original'

  constructor(private movieDataService:MovieDataService){
   this.code = [{number:0,name:''}];
  }

  ngOnInit():void{
    this.movieDataService.getmovie(this.code.number).subscribe((done) => {
      this.data = done
      console.log(this.data)
    })
   }

}
