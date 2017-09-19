// the modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
// the components
import { AppComponent } from './app.component';
import { Match_DetailsComponent } from './match_details.component';
import { Dota2DashboardComponent } from './dashboard.component';
// the services
import { Dota2Service } from './dota2.service';
// routers list
import { RouterModule } from '@angular/router';

@NgModule({
  /* the components added into module */
  declarations: [
    AppComponent,
    Match_DetailsComponent,
    Dota2DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([
      {
        path : "dota2_dashboard",
        component : Dota2DashboardComponent
      },
      {
        path : "match_details",
        component : Match_DetailsComponent
      },
      {
        path : "",
        redirectTo : "/dota2_dashboard",
        pathMatch : "full"
      }
    ])
  ],
  providers: [Dota2Service],
  bootstrap: [AppComponent]
})

export class AppModule { }
