import { Component, OnInit } from '@angular/core';
import {routes} from '../../routes/routes';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {RegisterService} from '../../Services/register.service';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private registerService:RegisterService,private loginservice:LoginServiceService) {
    this.createForm();

   }
  routeDetails = routes;
  user = {
    userName: '',
    password: '',
    remember: false
    };
  ngOnInit(): void {
  }
  createForm(){
    this.loginForm = this.formBuilder.group({
       userName: ['',Validators.required],
       password: ['',Validators.required],
       remember: false
    });
  }
  onLogin(){
    this.loginservice.login(this.loginForm.value).subscribe(()=>{
      console.log("success");
    });
   //console.log(this.loginForm.value);
 }
  onRegister(){
    this.registerService.register(this.user).subscribe(()=>{
      console.log("success");
    });
    console.log(this.user);
  }
}
