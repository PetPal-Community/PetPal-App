import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar-customer/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customer-layout',
  standalone: true,
  // Cada vez que se usa routerlink usar common moduels
  imports: [CommonModule,NavbarComponent,FooterComponent,RouterOutlet],
  templateUrl: './customer-layout.component.html',
  styleUrl: './customer-layout.component.css'
})
export class CustomerLayoutComponent {

}
