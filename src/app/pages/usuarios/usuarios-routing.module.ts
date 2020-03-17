import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';


const routes: Routes = [
    {
        path: '',
        component: ListadoUsuariosComponent
    },
    {
        path: 'nuevo-usuario',
        component: NuevoUsuarioComponent
    },
   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsuariosRoutingModule { }
