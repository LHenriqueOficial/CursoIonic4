import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentModalInternoPageRoutingModule } from './component-modal-interno-routing.module';

import { ComponentModalInternoPage } from './component-modal-interno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModalInternoPageRoutingModule
  ],
  declarations: [ComponentModalInternoPage]
})
export class ComponentModalInternoPageModule {}
