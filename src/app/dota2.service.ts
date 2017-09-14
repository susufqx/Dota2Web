import { Injectable } from '@angular/core';

@Injectable()
export class Dota2Service {
  //fetch = require('node-fetch');
  getMatchDetails(){
    //return Promise.resolve('HELLO');
    return fetch('http://localhost:5000/match/3432469792').then(res => res.json());
  }
}
