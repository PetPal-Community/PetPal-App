import { Component, inject } from '@angular/core';
import { NavbarLpComponent } from '../../../shared/components/navbar-lp/navbar-lp.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lp',
  standalone: true,
  imports: [NavbarLpComponent],
  templateUrl: './lp.component.html',
  styleUrl: './lp.component.css'
})
export class LpComponent {
  private router = inject(Router)


  irContacto(): void{
    this.router.navigate(["/home/nuestrosContactos"])

  }
}
