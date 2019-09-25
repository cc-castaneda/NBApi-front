import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbaPlayersApiService } from '../service/nba-players-api.service';
import { Player } from '../models/player';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  id: number;
  data: Player;

  constructor(public nbaPlayerApiService: NbaPlayersApiService,
    public activatedRoute: ActivatedRoute,
    public router: Router,) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //OBTENER DETALLE JUGADOR
    this.nbaPlayerApiService.getPlayer(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  updateInfoPlayer(updateFirstName: HTMLInputElement, updateLastName: HTMLInputElement, updateHeightFeet: HTMLInputElement, updateHeightInches: HTMLInputElement, updatePosition: HTMLInputElement) {
    console.log("adding,..", updateFirstName.value, updateLastName.value, updateHeightFeet.value, updateHeightInches.value, updatePosition.value)
  
    //ACTUALIZA EN LOCALSTORAGE
    this.nbaPlayerApiService.updatePlayer(this.id, this.data).subscribe(response => {
      this.router.navigate(['list']);
    })
  }

}
