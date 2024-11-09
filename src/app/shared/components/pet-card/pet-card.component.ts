import { Component, inject, OnInit, Input } from '@angular/core';
import { MascotaResponse } from '../../models/mascota-response.model';
import { MascotaService } from '../../../core/services/mascota.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent implements OnInit {
  @Input() petProfile!: MascotaResponse;
  
  isCustomer: boolean = false;

  private mascotaProfileService = inject(MascotaService);
  private authService = inject(AuthService);
  private router = inject (Router);
  private snackBar = inject (MatSnackBar);

  ngOnInit(): void {
    this.isCustomer = this.authService.getUserRole() === 'CUSTOMER';
  }

  // VerDetalle(){
  //   const Routh = '/pets/'
  // }

}
