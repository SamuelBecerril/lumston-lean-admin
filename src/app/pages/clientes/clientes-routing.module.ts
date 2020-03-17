import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';


const routes: Routes = [
    {
        path: '',
        component: ListadoClientesComponent
    },{
        path: 'nuevo-cliente',
        component: NuevoClienteComponent
    },

   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientesRoutingModule { }
