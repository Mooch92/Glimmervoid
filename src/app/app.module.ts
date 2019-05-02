import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import  {RouterModule} from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardListComponent } from './card-list/card-list.component';

import {CardService} from './card.service';
import { LoginComponent } from './login/login.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import {appRoutes} from './routes';
import { Error404Component} from './display404/404.component';
import { CardRoutingModule } from './card-routing.module';
import { InMemoryScryfallService } from './in-memory-scryfall.service';

import { CardSearchComponent } from './card-search/card-search.component';
import { DeckStatsComponent } from './deck-stats/deck-stats.component';
import { ExportComponent } from './export/export.component'





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    LoginComponent,
    CardDetailsComponent,

    Error404Component,
    CardSearchComponent,
    DeckStatsComponent,
    ExportComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CardRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryScryfallService, { dataEncapsulation: false }
    )
  
  ],
  providers: [CardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
