import { Component, Injectable, Injector } from '@angular/core';
// import the base class
import { Player_Summaries } from '../modules/Player_Summaries';

@Component({
  selector : 'match-history',
  templateUrl : './match_history.component.html',
  styleUrls : ['./match_history.component.css']
})

@Injectable()
export class Match_HistoryComponent extends Player_Summaries {
  constructor (private injector: Injector) {
    super(injector);
  }
  /*constructor(
    private this_dota2Service: Dota2Service,
    private this_route: ActivatedRoute,
    private this_router: Router
  ){
    super(this_dota2Service, this_route, this_router);
  }*/

  ngOnInit() {
    this.getMatchesHistory();
  }

  goMatch(id: Number) : void{
    this.router.navigate(['/match_details', id.toString()]);
  }
}
