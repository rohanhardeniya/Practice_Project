import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin: boolean = true;

  email: string = '';
  password: string = '';

  fullName: string = '';
  signupEmail: string = '';
  signupPassword: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
  if (localStorage.getItem('authToken')) {
    this.router.navigate(['/dashboard']);
  }
}

  onLogin() {
    // Simulate API call (we'll replace this with real .NET API call later)
    if (this.email === 'test@example.com' && this.password === '1234') {
      localStorage.setItem('authToken', 'dummy-token');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }

  }
  onSignup() {
    // Simulate signup logic
    alert(`User signed up: ${this.fullName}`);
    this.isLogin = true; // Redirect to login form
  }

}
