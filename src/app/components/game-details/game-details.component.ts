import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  gameDetails: Game={
    id: 0,
    background_image: '',
    name: '',
    released: '',
    metacritic_url: '',
    website: '',
    description: '',
    metacritic: 0,
    genres: [],
    parent_platforms: [],
    publishers: [],
    rating: [],
    screenshots: [],
    trailers: []
  }

  gameId!:string;
  gameRating =0;

  constructor(private route:ActivatedRoute,
              private httpService:HttpService
    ){}

  ngOnInit(): void {
    const id = this.route.params.subscribe((par)=>{
     this.gameId =  par['id']
     this.getGameDetails(this.gameId);
    });

  }

  getColor(value:number):string {
    if(value > 75){
      return '#5ee432';
    }else if(value > 50){
      return '#fffa50';
    }else if(value > 30){
      return '#f7aa38';
    }else {
      return '#ef4655';
    }

  }

  getGameDetails(id:string):void{

    this.httpService.getGameDetails(id).subscribe((gameDetails:Game)=>{
      this.gameDetails = gameDetails;
      console.log(gameDetails)
      setTimeout(()=>{
      this.gameRating =this.gameDetails.metacritic;
        },1000)
    })

  }

}
