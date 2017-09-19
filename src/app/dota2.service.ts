import { Injectable } from '@angular/core';

@Injectable()
export class Dota2Service {
  getMatchDetails(match_id : String) : any{
    console.log('match_id', match_id);
    return fetch('http://localhost:5000/match/' + match_id).then(res => res.json());
  }
}
