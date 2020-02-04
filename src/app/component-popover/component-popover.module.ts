import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentPopoverPageRoutingModule } from './component-popover-routing.module';

import { ComponentPopoverPage } from './component-popover.page';
import { ComponentPopoverInternoComponent } from '../component-popover-interno/component-popover-interno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentPopoverPageRoutingModule
  ],
  declarations: [ComponentPopoverPage , ComponentPopoverInternoComponent],
  entryComponents: [ComponentPopoverInternoComponent]
})
export class ComponentPopoverPageModule {}
