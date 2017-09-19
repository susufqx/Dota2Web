import { Component, OnInit } from '@angular/core';
import { Dota2Service } from './dota2.service';
import { _ } from 'underscore';

@Component({
  selector: 'match-details',
  templateUrl: './match_details.component.html',
  styleUrls: ['./match_details.component.css']
})

export class Match_DetailsComponent implements OnInit {
  match_details : {};
  players : {};

  constructor(private dota2Service: Dota2Service) {}

  getMatchDetails() : void {
    this.dota2Service.getMatchDetails().then(
      res => {
        this.match_details = res;
        for (let i in res.players) {
          res.players[i].KDA = (Math.round((res.players[i].kills + res.players[i].assists) / (res.players[i].deaths))).toFixed(1);
        }
        let group = _.groupBy(res.players, function(player, key) {return key < 5});
        this.players = [
          {
            name : "Radiant",
            players : group.true
          },
          {
            name : "Dire",
            players : group.false
          }
        ];
    });
  }
  ngOnInit() {
    this.getMatchDetails();
  }
}
