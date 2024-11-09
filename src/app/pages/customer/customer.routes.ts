import { Routes } from "@angular/router";
import { CustomerLayoutComponent } from "./customer-layout/customer-layout.component";
import { PanelControlComponent } from "./panel-control/panel-control.component";
import { RecordatoriosComponent } from "./recordatorios/recordatorios.component";
import { RegistrosMedicosComponent } from "./registros-medicos/registros-medicos.component";
import { UserProfileComponent } from "../../shared/components/user-profile/user-profile.component";
import { UpdateProfileComponent } from "../../shared/components/update-profile/update-profile.component";
import { BuscarServiciosComponent } from "./buscar-servicios/buscar-servicios.component";
import { MensajesComponent } from "./mensajes/mensajes.component";
import { ContactosEmerComponent } from "./contactos-emer/contactos-emer.component";
import { MascotasListComponent } from "./mascotas/mascotas-list/mascotas-list.component";

export const customerRoutes: Routes =[{
    path: '',
    component: CustomerLayoutComponent,
    children: [
        { path: 'mascotas', component: MascotasListComponent},
        { path: 'panelControl', component:PanelControlComponent},
        { path: 'recordatorios', component: RecordatoriosComponent},
        { path: 'registrosMedicos', component: RegistrosMedicosComponent},
        { path: 'profile', component: UserProfileComponent},
        { path: 'buscarServicios', component: BuscarServiciosComponent},
        { path: 'profile/update', component: UpdateProfileComponent},
        { path: 'mensajes', component:MensajesComponent},
        { path: 'contactosEmergencia', component:ContactosEmerComponent}
    ]

}]