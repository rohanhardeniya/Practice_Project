import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7297/api/auth'; // Replace with your .NET API URL

  constructor(private http: HttpClient) {}

  // 🔐 API call: Login
  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  // 📝 API call: Signup
  signup(data: any) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  // ✅ Check if logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // 🚪 Logout
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
