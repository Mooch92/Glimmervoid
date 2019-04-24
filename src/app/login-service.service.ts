import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
   name: string ;
   password: string; 

  constructor() { }

  getUserName(name){
    return name

  }

  getUserPassword(password){
    return password
  }
}
