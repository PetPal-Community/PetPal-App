import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule,ReactiveFormsModule, Validators} from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar'
import {MatButtonModule} from '@angular/material/button'
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { AuthRequest } from '../../../shared/models/auth-request.model';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule,
    MatInputModule, MatCardModule, MatSnackBarModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  


  loginForm: FormGroup;
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  private readonly CUSTOMER_ROLE = 'CUSTOMER';
  private readonly AUTHOR_ROLE = 'AUTHOR';
  private readonly CUSTOMER_ROUTE = '/customer/catalog';
  private readonly AUTHOR_ROUTE = '/author/books/list';
  private readonly DEFAULT_ROUTE = '/home';


  constructor(){
    this.loginForm = this.fb.group({
      email:['', [Validators.required,Validators.email]],
      contrasena: ['',[Validators.required]]
    })
  }

  controlHasError(control: string, error:string){
    return this.loginForm.controls[control].hasError(error);
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    };

    console.log(this.loginForm.value)
    const credentials: AuthRequest = this.loginForm.value;
    this.authService.login(credentials).subscribe({
      next: () => {
        this.showSnackBar('Inicio de sesión exitoso');
        this.redirectUserBasedOnRole();
      },
      error: () => {
        this.showSnackBar('Error en el inicio de sesión. Por favor, intenta de nuevo.');
      },
    });

  }
  private redirectUserBasedOnRole(): void {
    const userRole = this.authService.getUserRole();

    if (userRole === this.CUSTOMER_ROLE) {
      this.router.navigate([this.CUSTOMER_ROUTE]);
    } else if (userRole === this.AUTHOR_ROLE) {
      this.router.navigate([this.AUTHOR_ROUTE]);
    } else {
      this.router.navigate([this.DEFAULT_ROUTE]);
    }
  }


  // MOstrat mensaje
  private showSnackBar(message: string): void {
    this.snackBar.open('Login Sucessful','Close',{
      duration:2000,
      verticalPosition: 'top'
    })
  }
}
