import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar-customer/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarLpComponent } from '../../../shared/components/navbar-lp/navbar-lp.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [NavbarLpComponent,FooterComponent,RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
