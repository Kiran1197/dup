import {Routes} from '@angular/router';
import {HomeComponentComponent} from '../components/home-component/home-component.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {PromotionsComponent} from '../components/promotions/promotions.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponentComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
