import { Routes } from '@angular/router';
import { Admin } from './component/admin/admin';

export const routes: Routes = [
    // {
    //     path:'admin',
    //     component: Admin
    // }
    {
        path: "admin",
        loadComponent:() => import('./component/admin/admin').then(c => c.Admin)
    }
];
