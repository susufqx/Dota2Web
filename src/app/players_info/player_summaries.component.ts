import { Component, Injectable, Injector } from '@angular/core';
// import the base class
import { Player_Summaries } from '../modules/Player_Summaries';

@Component ({
  selector: 'player-summaries',
  templateUrl: './player-summaries.component.html',
  styleUrls: ['./player-summaries.component.css']
})

@Injectable()
export class  Player_SummariesComponent extends Player_Summaries {
  constructor (private injector: Injector) {
    super(injector);
  }

  ngOninit() {
    this.getMatchesHistory();
    this.getPersonalInfo();
  }
}
