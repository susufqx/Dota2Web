import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Dota2Service } from '../services/dota2.service';
import { _ } from 'underscore';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'match-details',
  templateUrl: './match_details.component.html',
  styleUrls: ['./match_details.component.css']
})

export class Match_DetailsComponent implements OnInit {
  match_details : Object;
  players : [Object];

  constructor(
    private dota2Service: Dota2Service,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getMatchDetails() : void {
    this.route.paramMap
    .switchMap(
      (params: ParamMap) => this.dota2Service.getMatchDetails((params.get('match_id')))
    ).subscribe(
      (res: any) => {
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
  goBack(): void {
    this.location.back();
  }
}
