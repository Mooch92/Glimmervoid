import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardListComponent } from './card-list/card-list.component';

import {CardService} from './card.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [CardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
