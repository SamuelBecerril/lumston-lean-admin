import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';
import { ListadoProyectosComponent } from './listado-proyectos/listado-proyectos.component';

const routes: Routes = [
    {
        path: '',
        component: ListadoProyectosComponent
    },
    {
        path: 'detalle-proyecto',
        component: DetalleProyectoComponent
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProyectosRoutingModule { }
