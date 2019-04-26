import { Routes, Router, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';

const pagesRoutes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: 'inicio', component: InicioComponent },
            { path: '', redirectTo: '/inicio', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
