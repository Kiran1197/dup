import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }
  user = {
  userName: '',
  password: '',
  remember: false
  };
  ngOnInit(): void {
  }
  onSubmit(){
    this.registerService.register(this.user).subscribe(()=>{
      console.log("SUCCESFULL");
    });
    console.log(this.user);
  }
}
