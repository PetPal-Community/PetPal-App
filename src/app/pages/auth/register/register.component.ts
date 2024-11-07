import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar'
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { FormControl } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule,
    MatInputModule, MatCardModule, MatSnackBarModule, RouterLink, CommonModule, MatFormFieldModule, MatRadioButton, MatRadioModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);

  registerForm: FormGroup;
  private rb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  private authService = inject(AuthService);

  constructor() {
    this.registerForm = this.rb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]],
      tipo: this.floatLabelControl
    })
  }
  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map(v => v || 'customer')),
    { initialValue: 'customer' },
  );

  controlHasError(control: string, error: string) {
    return this.registerForm.controls[control].hasError(error);
  }

  onSubmit() {
    if (this.registerForm.valid) {


      const { tipo, ...userData } = this.registerForm.value;
      console.log(userData)
      if (this.registerForm.value.tipo == "customer") {
        this.authService.registerCustomer(userData).subscribe({
          next: (response) => {
            this.showSnackBar("Usuario creado correctamente");
            this.router.navigate(['auth/login']);
          },
          error: (err) => {
            this.showSnackBar(err.error.message);
          },
        });

      } else if (this.registerForm.value.tipo == "cuidador") {

        this.authService.registerCarer(userData).subscribe({
          next: (response)=>{
            this.showSnackBar("Usuario creado correctamente");
            this.router.navigate(['auth/login']);
          }, 
          error: (err) => {
              this.showSnackBar(err.error.message);
          },
        });

      }

    };

  }

  // MOstrat mensaje
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }
}
