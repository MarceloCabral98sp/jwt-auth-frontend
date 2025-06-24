import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss',
})
export class UserHomeComponent {
  constructor(private router: Router) { }

  logout() {
    sessionStorage.removeItem('auth-token');
    this.router.navigate(['/login']);
  }
}
