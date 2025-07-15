import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Fixed typo: `styleUrl` ➜ `styleUrls`
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;

  // Login fields
  email: string = '';
  password: string = '';

  // Signup fields
  fullName: string = '';
  signupEmail: string = '';
  signupPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Auto-redirect if already logged in
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onLogin(): void {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginData).subscribe({
      next: (res: any) => {
        // Store token and redirect
        localStorage.setItem('authToken', res.token);
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        console.error('Login error:', err);
        alert('Invalid credentials');
      }
    });
  }

 onSignup(): void {
  const signupData = {
    fullName: this.fullName,
    email: this.signupEmail,
    password: this.signupPassword
  };

  this.authService.signup(signupData).subscribe({
    next: (res: any) => {
      console.log('Signup success response:', res); // 👈✅ RIGHT HERE
      alert(res.message || 'Signup successful!');
      this.isLogin = true;  // Switch to login view
    },
    error: err => {
      console.error('Signup error:', err);
      alert(err.error?.message || 'Signup failed or user already exists');
    }
  });
}
}
