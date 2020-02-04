import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentModalPageRoutingModule } from './component-modal-routing.module';

import { ComponentModalPage } from './component-modal.page';
import { ComponentModalInternoPage } from '../component-modal-interno/component-modal-interno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModalPageRoutingModule
  ],
  declarations: [ComponentModalPage, ComponentModalInternoPage],
  entryComponents:[ComponentModalInternoPage],
})
export class ComponentModalPageModule {}
