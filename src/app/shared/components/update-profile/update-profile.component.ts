import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule,ReactiveFormsModule, Validators} from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar'
import {MatButtonModule} from '@angular/material/button'
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { UserPersonaResponse } from '../../models/userPersona-response.model';
import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule,
    MatInputModule, MatCardModule, MatSnackBarModule, RouterLink, CommonModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {

  profileForm: FormGroup;
  profile!: UserPersonaResponse;

  private fb = inject(FormBuilder);
  private userProfileService = inject(UserProfileService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private mediaService = inject(MediaService);

  constructor() {
    this.profileForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono:['', [Validators.required]],
      picRuta: [''],
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  uploadFile(event: Event, control: string): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.mediaService.subirArchivo(formData).subscribe({
        next: (response) => {
          if (this.profileForm.get(control)) {
            this.profileForm.get(control)!.setValue(response.path);
          } else {
            console.warn(`El control '${control}' no está definido en el formulario.`);
          }
        },
        error: () => this.showSnackBar('Error al cargar el archivo.'),
      });
      console.log('Control:', control, 'Formulario:', this.profileForm.controls);
    }
  }

  loadUserProfile(): void {
    const authData = this.authService.getUser();
    const userId = authData?.id;

    if (userId) {
      this.userProfileService.getUserProfile(userId).subscribe({
        next: (profile) => {
          
          // if(!this.profile.picRuta){
          //   this.profile.picRuta = "No hay ruta"
          // }
          this.profile = profile;

          this.profileForm.patchValue(profile);
        },
        error: () => {
          this.showSnackBar('Error al cargar el perfil del usuario.');
        }
      });
    } else {
      this.showSnackBar('Usuario no autenticado.');
      this.router.navigate(['/auth/login']);
    }
  }

  controlHasError(controlName: string, errorName: string): boolean {
    return this.profileForm.controls[controlName].hasError(errorName);
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedData = { ...this.profile, ...this.profileForm.value };
      this.userProfileService.updateUserProfile(this.profile.id, updatedData).subscribe({
        next: () => {
          this.showSnackBar('Perfil actualizado exitosamente.');
          this.router.navigate(['/customer/profile']);
        },
        error: (error) => {
          this.showSnackBar(error.error?.message || 'Error al actualizar el perfil.');
        }
      });
    }
  }
  

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }


}
