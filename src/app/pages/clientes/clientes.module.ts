import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { ProjectModule } from '../apps/project/project.module';
import { NgbDatepickerModule, NgbDropdownModule, NgbAlertModule, NgbToastModule, NgbButtonsModule, NgbTabsetModule, NgbAccordionModule, NgbModalModule, NgbProgressbarModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../ui/icons/icons.module';
import { FormModule } from '../ui/form/form.module';
import { TablesModule } from '../ui/tables/tables.module';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';


@NgModule({
    imports: [
        CommonModule,
        ClientesRoutingModule,
        UIModule,
        IconsModule,
        FormModule,
        TablesModule,
        NgbDatepickerModule,
        NgbDropdownModule,
        NgbAlertModule,
        NgbTabsetModule,
        NgbButtonsModule,
        NgbAccordionModule, 
        NgbModalModule, 
        NgbProgressbarModule,
        NgbPopoverModule,
        NgbTooltipModule,
        NgbToastModule,
        NgbProgressbarModule,
        ProjectModule
    ],
    declarations: [ListadoClientesComponent, NuevoClienteComponent]
})

export class ClientesModule { }
