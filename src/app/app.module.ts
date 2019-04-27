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
<<<<<<< HEAD
import { Error404Component} from './display404/404.component';
import { CardRoutingModule } from './card-routing.module';
import { InMemoryScryfallService } from './in-memory-scryfall.service';
=======
import { CardSearchComponent } from './card-search/card-search.component'
>>>>>>> ed49007b2cbce8b86db81901cbf0814469875f56




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    LoginComponent,
    CardDetailsComponent,
<<<<<<< HEAD
    Error404Component
=======
    CardSearchComponent
>>>>>>> ed49007b2cbce8b86db81901cbf0814469875f56
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CardRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryScryfallService , { dataEncapsulation: false }
    )
  
  ],
  providers: [CardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
