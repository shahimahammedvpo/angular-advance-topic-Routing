import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username='';
password='';

private auth=inject(AuthService);
private router=inject(Router);

login():void{
if(!this.username.trim() || !this.password.trim()){
  alert('please enter username and password');
  return;
}

this.auth.login(this.username.trim());
this.router.navigate(['/home']);
}
}
