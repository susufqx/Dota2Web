import { Component, Injectable, Injector } from '@angular/core';
// import the base class
import { Player_Summaries } from '../modules/player_summaries';

@Component ({
  selector: 'player-summaries',
  templateUrl: './player_summaries.component.html',
  styleUrls: ['./player_summaries.component.css']
})

@Injectable()
export class  Player_SummariesComponent extends Player_Summaries {
  constructor (private injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    console.log("HELLO");
    this.getMatchesHistory(10);
    this.getPersonalInfo();
  }

  goMatch(id: Number) : void{
    this.router.navigate(['/match_details', id.toString()]);
  }
}
