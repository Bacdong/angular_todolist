import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { DoashboardComponent } from './doashboard/doashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DoashboardComponent
  ],
  imports: [
    // HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
