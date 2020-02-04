import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentTogglePageRoutingModule } from './component-toggle-routing.module';

import { ComponentTogglePage } from './component-toggle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentTogglePageRoutingModule
  ],
  declarations: [ComponentTogglePage]
})
export class ComponentTogglePageModule {}
