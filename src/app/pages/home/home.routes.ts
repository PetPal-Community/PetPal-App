import { Routes } from "@angular/router";
import { LpComponent } from "./lp/lp.component";
import { ContactoComponent } from "./contacto/contacto.component";

export const homeRoutes: Routes =[{
    path: '',
    component: LpComponent,
    children: [
        { path: 'nuestrosContactos', component: ContactoComponent},
        
    ]

}]