import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule} from './usuarios-routing.module';
import { UIModule } from '../../shared/ui/ui.module';

import { ProjectModule } from '../apps/project/project.module';

import { NgbDatepickerModule, NgbDropdownModule, NgbAlertModule, NgbToastModule, NgbButtonsModule, NgbTabsetModule, NgbAccordionModule, NgbModalModule, NgbProgressbarModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../ui/icons/icons.module';
import { FormModule } from '../ui/form/form.module';
import { TablesModule } from '../ui/tables/tables.module';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

@NgModule({
    imports: [
        CommonModule,
        UsuariosRoutingModule,
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
    declarations: [ListadoUsuariosComponent, NuevoUsuarioComponent]
})

export class UsuariosModule { }
