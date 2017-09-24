import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
//import dota2 service defined
import { Dota2Service } from '../services/dota2.service';
import { _ } from 'underscore';
import * as moment from 'moment';
// import the switchMap
import 'rxjs/add/operator/switchMap';

export abstract class Player_Summaries {
  // define the variables
  matchesHistory: [Object]; // recent 10 (if total matches < 10, less 10) matches
  mostPlayedHeroes: [Object]; // most played heroes, todo in the future, it is not simple
  personalInfo: Object;// player personal information including username, image etc.
  // constructor function
  protected dota2Service: Dota2Service;
  protected route: ActivatedRoute;
  protected router: Router;
  protected location: Location;

  constructor(private baseInjector: Injector) {
    this.dota2Service = this.baseInjector.get(Dota2Service);
    this.route = this.baseInjector.get(ActivatedRoute);
    this.router = this.baseInjector.get(Router);
    this.location = this.baseInjector.get(Location);
  }
  // member functions
  getMatchesHistory(numberMatches?: Number):void {
    this.route.paramMap
    .switchMap(
      (params: ParamMap) => this.dota2Service.getMatchHistory(params.get('account_id'))
    ).subscribe(
      (res:any) => {
        _.map(res.matches, function (match) {
          match.format_end_time = moment(new Date(match.end_time * 1000)).fromNow();
          match.KDA = (Math.round((match.kills + match.assists) / (match.deaths > 0 ? match.deaths : 1))).toFixed(1);
        });
        if (numberMatches) {
          this.matchesHistory = _.filter(res.matches, function(match, key) {
            return key < numberMatches;
          });
        } else {
          this.matchesHistory = res.matches;
        }
    });
  }
  getMostPlayedHeroes():void {
    /* to do later */
  }
  getPersonalInfo():void {
    this.route.paramMap
    .switchMap(
      (params: ParamMap) => this.dota2Service.getPlayerSummaries(params.get('account_id'))
    ).subscribe(
      (res:any) => {
        this.personalInfo = res.players[0];
      }
    );
  }
  //init function
  onInit() {
    this.getMatchesHistory();
    this.getMostPlayedHeroes(); // todo later
    this.getPersonalInfo();
  }
  goBack(): void {
    this.location.back();
  }
}
