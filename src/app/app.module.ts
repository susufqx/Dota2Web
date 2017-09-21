// the modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
// the components
import { AppComponent } from './common/app.component';
import { Match_DetailsComponent } from './match_details/match_details.component';
import { Dota2DashboardComponent } from './common/dashboard.component';
import { Match_HistoryComponent } from './players_info/match_history.component';
import { Player_SummariesComponent } from './players_info/player_summaries.component';
// the services
import { Dota2Service } from './services/dota2.service';
//definie the route
import { AppRoutingModule }     from './routers/app-routing.module';

@NgModule({
  /* the components added into module */
  declarations: [
    AppComponent,
    Match_DetailsComponent,
    Dota2DashboardComponent,
    Match_HistoryComponent,
    Player_SummariesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],
  providers: [Dota2Service],
  bootstrap: [AppComponent]
})

export class AppModule { }
