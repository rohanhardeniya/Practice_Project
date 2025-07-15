import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ⬅ also fixed "styleUrl" to "styleUrls"
})
export class AppComponent implements OnInit {
  title = 'my-app';

  ngOnInit(): void {
    // Remove authToken on tab or browser close
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('authToken'); // ✅ make sure this key matches what you saved
    });
  }
}
