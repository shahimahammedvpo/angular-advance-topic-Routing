import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router,RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
username='';
password='';

constructor(
  private auth:AuthService,
  private router:Router
){}

signup():void{
  if(!this.username.trim() || !this.password.trim()){
    alert('please fill in all fields');
    return;
  }
  this.auth.signup(this.username.trim());
  alert('signup successfull ! please login');
  this.router.navigate(['/login']);
}

}
