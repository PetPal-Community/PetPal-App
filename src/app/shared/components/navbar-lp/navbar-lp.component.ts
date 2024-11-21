import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-lp',
  standalone: true,
  imports: [],
  templateUrl: './navbar-lp.component.html',
  styleUrl: './navbar-lp.component.css'
})
export class NavbarLpComponent {
  private router = inject(Router);

  irinicio(): void{
   this.router.navigate(['auth/login']) 
  }
}
