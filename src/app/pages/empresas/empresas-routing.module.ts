import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaEmpresaComponent } from './nueva-empresa/nueva-empresa.component';
import { ListadoEmpresasComponent } from './listado-empresas/listado-empresas.component';

const routes: Routes = [
    {
        path: 'nueva-empresa',
        component: NuevaEmpresaComponent
    },
    {
        path: '',
        component: ListadoEmpresasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EmpresasRoutingModule { }
