import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Dota2Service } from '../services/dota2.service';
import { _ } from 'underscore';
import * as moment from 'moment';

import 'rxjs/add/operator/switchMap';

@Component({
  selector : 'match-history',
  templateUrl : './match_history.component.html',
  styleUrls : ['./match_history.component.css']
})

export class Match_HistoryComponent {
  match_history : [Object]

  constructor (
    private dota2Service: Dota2Service,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getMatchHistory() : void {
    this.route.paramMap
    .switchMap(
      (params: ParamMap) => this.dota2Service.getMatchHistory((params.get('account_id')))
    ).subscribe(
      (res:any) => {
        for (let i in res.matches) {
          res.matches[i].end_time = moment(new Date(res.matches[i].start_time * 1000)).fromNow();
        }
        this.match_history = res;
    });
  }
  ngOnInit() {
    this.getMatchHistory();
  }
}
