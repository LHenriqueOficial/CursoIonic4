import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentSelectPageRoutingModule } from './component-select-routing.module';

import { ComponentSelectPage } from './component-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentSelectPageRoutingModule
  ],
  declarations: [ComponentSelectPage]
})
export class ComponentSelectPageModule {}
