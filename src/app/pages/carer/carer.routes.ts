import { Routes } from "@angular/router";
import { CarerLayoutComponent } from "./carer-layout/carer-layout.component";
import { ContratosListComponent } from "./contratos/contratos-list/contratos-list.component";
import { ServiciosListComponent } from "./servicios/servicios-list/servicios-list.component";
import { ReviewsListComponent } from "./reviews/reviews-list/reviews-list.component";
import { MensajesListComponent } from "./mensajes/mensajes-list/mensajes-list.component";
import { UserProfileComponent } from "../../shared/components/user-profile/user-profile.component";
import { UpdateProfileComponent } from "../../shared/components/update-profile/update-profile.component";
import { ServicioDialogComponent } from "./servicios/servicios-form/servicio-dialog/servicio-dialog.component";
import { ReporteComponent } from "./contratos/reporte/reporte.component";

export const carerRoutes: Routes =[{
    path: '',
    component: CarerLayoutComponent,
    children: [
        {path: 'contratos', component: ContratosListComponent},
        {path: 'servicios', component: ServiciosListComponent},
        {path: 'reviews', component: ReviewsListComponent},
        {path: 'mensajes', component: MensajesListComponent},
        {path: 'profile', component: UserProfileComponent},
        {path: 'profile/update', component: UpdateProfileComponent},
        {path: 'servicios/crear', component: ServicioDialogComponent},
        {path: 'servicios/update', component: ServicioDialogComponent},
        {path: 'reporte', component:ReporteComponent}
    
    ]


}]