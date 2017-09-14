import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Dota2Service } from './dota2.service';

@Component({
  selector: 'dota2-angular',
  template: `
    <h1>{{title}}</h1>
    <!--<h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
          (click) = "onSelect(hero)"
          [class.selected] = "hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>-->
    <h2>DOTA2_MATCH_DETAILS</h2>
    <ul class="heroes players" *ngIf="players">
      <li *ngFor="let player of players">
        <span class="badge">{{player.hero_name}}</span> {{player.username}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  h1{
    color: #369;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 250%;
  }
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .players{
    width: 25em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  providers: [HeroService, Dota2Service]
})

export class AppComponent implements OnInit {
  //title = 'Welcome to dota2 space!';
  title = 'Tour of heroes';
  heroes : Hero[];
  match_details : {};
  players : {};
  selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService, private dota2Service: Dota2Service) {}
  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    });
  }
  getMatchDetails() : void {
    this.dota2Service.getMatchDetails().then(
      res => {
        console.log('==================================');
        console.log(res);
        this.match_details = res;
        this.players = res.players;
    });
  }
  ngOnInit() {
    this.getHeroes();
    this.getMatchDetails();
  }
}
