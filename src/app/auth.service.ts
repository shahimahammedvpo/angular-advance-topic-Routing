import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn=false;
  username='';

  login(username:string):void{
    this.username=username;
    this.isLoggedIn=true;
  }
  signup(username:string):void{
    this.username=username;
  }
  logout():void{
    this.isLoggedIn=false;
    this.username='';
  }
  
}
