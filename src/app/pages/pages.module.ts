import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
    declarations: [
        PagesComponent,
        InicioComponent,
        NopagefoundComponent
    ],
    exports: [
        PagesComponent,
        InicioComponent,
        NopagefoundComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }
