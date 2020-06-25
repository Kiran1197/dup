import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {LoginServiceService} from '../../Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private loginService:LoginServiceService) {
    this.createForm();
   }
   createForm(){
     this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required],
        remember: false
     });
   }
    onSubmit(){
      this.loginService.login(this.loginForm.value).subscribe(()=>{
        console.log("recevid");
      });
      console.log("this.loginForm.value");
    }
    ngOnInit(): void {
    }

}
