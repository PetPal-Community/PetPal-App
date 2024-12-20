import { Component, inject, OnInit } from '@angular/core';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserPersonaResponse } from '../../models/userPersona-response.model';
import { CommonModule } from '@angular/common';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ApiImgPipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  profile!: UserPersonaResponse;

  private userProfileService = inject(UserProfileService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const authData = this.authService.getUser();
    const userId = authData?.id;

    if (userId) {
      this.userProfileService.getUserProfile(userId).subscribe({
        next: (profile) => {
          this.profile = profile;
          this.showSnackBar('Perfil cargado con éxito');
        },
        error: (error) => {

          this.showSnackBar('Error al cargar el perfil');
        }
      });
    } else {

      this.showSnackBar('Usuario no autenticado');
      this.router.navigate(['/auth/login']);
    }
  }


  navigateToUpdateProfile(): void {
    this.router.navigate(['/customer/profile/update']);
  }

  // MOstrat mensaje
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

}
