import { LoginComponent } from './login/login.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardListComponent } from './card-list/card-list.component';
import { AppComponent } from './app.component';
import { Routes} from '@angular/router';

export const appRoutes: Routes=[
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'cards', component: CardListComponent
    },
    {
        path: 'app', component: AppComponent
    },
    {
        path: 'details/:id', component: CardDetailsComponent
    },
    {
        path: '', redirectTo: '/cards', pathMatch: 'full'
    }
]