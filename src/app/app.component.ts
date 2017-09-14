import { Component } from '@angular/core';

@Component({
  selector: 'dota2-angular',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div>
      <label>id: </label>
      {{hero.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)] = 'hero.name' placeholder = 'name'>
    </div>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Welcome to dota2 space!';
  title = 'Tour of heroes';
  hero : Hero = {
    id : 1,
    name : 'Windstorm'
  };
}

export class Hero {
  id : number;
  name : String;
}
