import { Component, OnInit } from '@angular/core';
import { LoginServiceService} from '../login-service.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private log: LoginServiceService, private route: Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;
    if(this.log.getUserName("glimmervoid")===username && this.log.getUserPassword("password")===password ){
      this.route.navigate(['/cards'])
    }else{
      window.alert("not true")
    }

    console.log(username, password)
  }
}
