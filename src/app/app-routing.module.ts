import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Match_DetailsComponent } from './match_details.component';
import { Dota2DashboardComponent } from './dashboard.component';

const routes : Routes = [
  { path : "", redirectTo : "/dota2_dashboard", pathMatch: "full" },
  { path : "dota2_dashboard", component : Dota2DashboardComponent },
  { path : "match_details/:match_id", component : Match_DetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
