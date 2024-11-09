import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { authInverseGuard } from './core/guards/auth-inverse.guard';

export const routes: Routes = [
    {
        path:'', redirectTo:'auth/login', pathMatch:'full'
    },

    {
        path:'auth', loadChildren: () => import('./pages/auth/auth.routes').then(m => m.authRoutes),
        canActivate: [authInverseGuard]
    },

    {
        path:'customer', loadChildren: () => import('./pages/customer/customer.routes').then(c => c.customerRoutes),
        canActivate: [authGuard]
    },

    {
        path:'carer', loadChildren:() => import('./pages/carer/carer.routes').then(ca => ca.carerRoutes),
        canActivate: [authGuard]
    }

];
