import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { ActivatedRoute, Router } from '@angular/router';
import { NbaPlayersApiService } from '../service/nba-players-api.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  id: number;
  data: Player;

  constructor(public nbaPlayerApiService: NbaPlayersApiService,
      public activatedRoute: ActivatedRoute,
      public router: Router,
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //OBTENER DETALLE JUGADOR
    this.nbaPlayerApiService.getPlayer(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

}
