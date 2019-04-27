import { LoginComponent } from './login/login.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardListComponent } from './card-list/card-list.component';
import { AppComponent } from './app.component';
import { Routes} from '@angular/router';
import { Error404Component } from './display404/404.component';

export const appRoutes: Routes=[

    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'cards', component: CardListComponent, 
        children:[
            
        ]
    },

    {
        path: 'details/:id', component: CardDetailsComponent
    },
   
  
  
    {
        path: 'error', component: Error404Component
    },
   

   

   
]