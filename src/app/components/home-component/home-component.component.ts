import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import {LoginComponent} from '../login/login.component';
import {routes} from '../../routes/routes';
import { PromotionsComponent } from '../promotions/promotions.component';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(public dailog:MatDialog ) { }
  routeDetails = routes;
  ngOnInit(): void {
  }
  enable: boolean=false;
  navBar()
  {
      console.log(this.enable);
      this.enable = !this.enable;
  }
  openLoginForm(){
    this.enable=true;
    this.dailog.open(PromotionsComponent, {width: '500px', height: '450px'});
  }
}
