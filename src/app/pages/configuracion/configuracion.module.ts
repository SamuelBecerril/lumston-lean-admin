import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule} from './configuracion-routing.module';
import { UIModule } from '../../shared/ui/ui.module';

import { ProjectModule } from '../apps/project/project.module';

import { NgbDatepickerModule, NgbDropdownModule, NgbAlertModule, NgbToastModule, NgbButtonsModule, NgbTabsetModule, NgbAccordionModule, NgbModalModule, NgbProgressbarModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../ui/icons/icons.module';
import { FormModule } from '../ui/form/form.module';
import { TablesModule } from '../ui/tables/tables.module';


@NgModule({
    imports: [
        CommonModule,
        ConfiguracionRoutingModule,
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
    declarations: []
})

export class ConfiguracionModule { }
