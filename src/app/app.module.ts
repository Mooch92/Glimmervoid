import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import  {RouterModule} from '@angular/router'



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardListComponent } from './card-list/card-list.component';

import {CardService} from './card.service';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: LoginComponent
      },
      {
        path: 'card', component: CardListComponent
      },
      {
        path: 'app', component: AppComponent
      }
    ])
  
  ],
  providers: [CardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
