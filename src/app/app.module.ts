// the modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
// the components
import { AppComponent } from './app.component';
import { Match_DetailsComponent } from './match_details.component';
import { Dota2DashboardComponent } from './dashboard.component';
import { Match_HistoryComponent } from './match_history.component';
// the services
import { Dota2Service } from './dota2.service';
//definie the route
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  /* the components added into module */
  declarations: [
    AppComponent,
    Match_DetailsComponent,
    Dota2DashboardComponent,
    Match_HistoryComponent
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
