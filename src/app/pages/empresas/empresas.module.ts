import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { UIModule } from '../../shared/ui/ui.module';

import { ProjectModule } from '../apps/project/project.module';
import { NuevaEmpresaComponent } from './nueva-empresa/nueva-empresa.component';
import { NgbDatepickerModule, NgbDropdownModule, NgbAlertModule, NgbToastModule, NgbButtonsModule, NgbTabsetModule, NgbAccordionModule, NgbModalModule, NgbProgressbarModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../ui/icons/icons.module';
import { FormModule } from '../ui/form/form.module';
import { TablesModule } from '../ui/tables/tables.module';
import { ListadoEmpresasComponent } from './listado-empresas/listado-empresas.component';


@NgModule({
    imports: [
        CommonModule,
        EmpresasRoutingModule,
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
    declarations: [NuevaEmpresaComponent, ListadoEmpresasComponent]
})

export class EmpresasModule { }
