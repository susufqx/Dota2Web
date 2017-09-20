import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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

  constructor(private baseInjector: Injector) {
    this.dota2Service = this.baseInjector.get(Dota2Service);
    this.route = this.baseInjector.get(ActivatedRoute);
    this.router = this.baseInjector.get(Router);
  }
  /*constructor(
    protected dota2Service: Dota2Service,
    protected route: ActivatedRoute,
    protected router: Router
  ){}*/
  // member functions
  getMatchesHistory(numberMatches?: Number):void {
    this.route.paramMap
    .switchMap(
      (params: ParamMap) => this.dota2Service.getMatchHistory((params.get('account_id')))
    ).subscribe(
      (res:any) => {
        for (let i in res.matches) {
          res.matches[i].end_time = moment(new Date(res.matches[i].start_time * 1000)).fromNow();
        }
        if (numberMatches) {
          this.matchesHistory = _.filter(res, function(match, key) {
            return key < numberMatches;
          });
        } else {
          this.matchesHistory = res;
        }
    });
  }
  getMostPlayedHeroes():void {
    /* to do later */
  }
  getPersonalInfo():void {
    /* to do later */ 
  }
  //init function
  onInit() {
    this.getMatchesHistory();
    this.getMostPlayedHeroes(); // todo later
    this.getPersonalInfo();
  }
}
