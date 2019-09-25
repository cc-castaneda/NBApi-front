import { Component, OnInit } from '@angular/core';
import { NbaPlayersApiService } from '../service/nba-players-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  playersData: any = [];
  metaData: any = [];
  current_page = [];
  next_page = [];
  per_page = [];
  searchPlayer:string;

  constructor(public nbaPlayersApiService: NbaPlayersApiService, private route: ActivatedRoute ) {
    
   }

  ngOnInit() {
    this.getAllPlayers();
    this.route.queryParams.subscribe(x => this.getMeta(x.page || 1));
  }

  getAllPlayers() {
    this.nbaPlayersApiService.getList().subscribe(data => {
        this.playersData = data;        
    })
  }


  getMeta(page) {
    this.nbaPlayersApiService.loadPage(page).subscribe(data => {
      this.current_page = data.current_page;
      this.next_page = data.next_page;
      this.per_page = data.per_page;
    })
  }

}
