import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    GoalDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
