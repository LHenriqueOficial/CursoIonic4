import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentFabPageRoutingModule } from './component-fab-routing.module';

import { ComponentFabPage } from './component-fab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentFabPageRoutingModule
  ],
  declarations: [ComponentFabPage]
})
export class ComponentFabPageModule {}
