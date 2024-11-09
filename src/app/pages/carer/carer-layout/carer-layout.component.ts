import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarCarerComponent } from '../../../shared/components/navbar-carer/navbar-carer.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-carer-layout',
  standalone: true,
  imports: [CommonModule,NavbarCarerComponent,FooterComponent,RouterOutlet],
  templateUrl: './carer-layout.component.html',
  styleUrl: './carer-layout.component.css'
})
export class CarerLayoutComponent {

}
