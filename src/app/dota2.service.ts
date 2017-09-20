import { Injectable } from '@angular/core';

@Injectable()
export class Dota2Service {
  getMatchDetails(match_id : String) : any{
    return fetch('http://localhost:5000/match/' + match_id).then(res => res.json());
  }

  getMatchHistory(account_id : String) : any{
    return fetch('http://localhost:5000/player/matches/' + account_id).then(res => res.json());
  }
}
