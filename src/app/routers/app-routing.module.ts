import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Match_DetailsComponent } from '../match_details/match_details.component';
import { Match_HistoryComponent } from '../players_info/match_history.component';
import { Dota2DashboardComponent } from '../common/dashboard.component';

const routes : Routes = [
  { path : "", redirectTo : "/dota2_dashboard", pathMatch: "full" },
  { path : "dota2_dashboard", component : Dota2DashboardComponent },
  { path : "match_details/:match_id", component : Match_DetailsComponent },
  { path : "players/matches_history/:account_id", component : Match_HistoryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
