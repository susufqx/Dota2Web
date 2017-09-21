import { Component, Injector } from '@angular/core';
// import the base class
import { Player_Summaries } from '../modules/player_summaries';

@Component({
  selector : 'match-history',
  templateUrl : './match_history.component.html',
  styleUrls : ['./match_history.component.css']
})

export class Match_HistoryComponent extends Player_Summaries {
  constructor (private injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.getMatchesHistory();
  }

  goMatch(id: Number) : void{
    this.router.navigate(['/match_details', id.toString()]);
  }
}
