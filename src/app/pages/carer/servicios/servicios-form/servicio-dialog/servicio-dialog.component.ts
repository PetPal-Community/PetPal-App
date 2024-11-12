import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ServiceRequest } from '../../../../../shared/models/servicios-request.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicioService } from '../../../../../core/services/servicio.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../core/services/auth.service';
import { ServicioResponse } from '../../../../../shared/models/servicios-response.model';
import { Observable } from 'rxjs';
import { MediaService } from '../../../../../core/services/media.service';
// comentario para guardar
@Component({
  selector: 'app-servicio-dialog',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogModule, MatInputModule,
    MatDialogActions, MatDialogClose, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './servicio-dialog.component.html',
  styleUrl: './servicio-dialog.component.css'
})
export class ServicioDialogComponent {
  serviceForm: FormGroup;
  private sf = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService)
  private snackBar = inject(MatSnackBar);
  private sservice = inject(ServicioService);
  private mediaService = inject(MediaService);

  // Inyecta los datos del diálogo
  readonly dialogRef = inject(MatDialogRef<ServicioDialogComponent>);
  readonly data = inject<ServicioResponse>(MAT_DIALOG_DATA);


  id?: number;

  constructor() {
    this.serviceForm = this.sf.group(
      {
        tipo_servicio: [' ', [Validators.required]],
        descripcion: [' ', [Validators.required]],
        precio: [' ', [Validators.required]],
        picRuta: ['']
      }
    )
  }

  ngOnInit(): void {
    if (this.data && this.data.id) {
      console.log('Servicio ID recibido en el diálogo:', this.data.id); // Verifica que el servicioId se reciba
      this.id = this.data.id;
      console.log('Servicio:', this.id);
      this.cargarServicioForEditar();
    }
  }

  cargarServicioForEditar(): void {
    this.sservice.obtenerServicioCarerbyId(this.id!).subscribe({
      next: (servicio: ServicioResponse) => {
        this.serviceForm.patchValue({ ...servicio });
      }, error: (err) => {
        this.showSnackBar('Error al cargar el servicio');
      }
      
    })

  }

  // uploadFile(event: Event, control: string): void {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append('file', file);
  //     this.mediaService.subirArchivo(formData).subscribe({
  //       next: (response) => this.serviceForm.controls[control].setValue(response.path),
  //       error: () => this.showSnackBar('Error al cargar el archivo.'),
  //     });
  //   }
  // }
  uploadFile(event: Event, control: string): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.mediaService.subirArchivo(formData).subscribe({
        next: (response) => {
          if (this.serviceForm.get(control)) {
            this.serviceForm.get(control)!.setValue(response.path);
          } else {
            console.warn(`El control '${control}' no está definido en el formulario.`);
          }
        },
        error: () => this.showSnackBar('Error al cargar el archivo.'),
      });
      console.log('Control:', control, 'Formulario:', this.serviceForm.controls);
    }
  }




  onSubmit() {
    if (this.serviceForm.valid) {
      const user = this.authService.getUser();
      const userId = user?.id;

      if (userId) {
        const serviceData = this.serviceForm.value;
        serviceData.cuidadorGId = userId;
        //   this.sservice.crearServicioCarer(serviceData).subscribe({
        //   next: (response) => {
        //     this.showSnackBar("Servicio Creado Exitosamente :D !");
        //     this.dialogRef.close();
        //     //this.router.navigate([''])

        //   },
        //   error:(err) =>{
        //     this.showSnackBar(err.error.message);
        //   }
        // })
        const request: Observable<any> = this.id
          ? this.sservice.updateService(this.id, serviceData)
          : this.sservice.crearServicioCarer(serviceData);

        request.subscribe({
          next: () => {
            this.showSnackBar("Servicio guardado exitosamente");
            this.dialogRef.close();
            // Descomenta si deseas redirigir a otra página
            // this.router.navigate(['/ruta/deseada']);
          },
          error: (err) => {
            this.showSnackBar(err.error.message || "Error al guardar el servicio");
          },
        });

      }

    } else {
      this.serviceForm.markAllAsTouched();
      return;
    }
  }

  controlHasError(control: string, error: string) {
    return this.serviceForm.get(control)?.hasError(error) || false;
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

}



