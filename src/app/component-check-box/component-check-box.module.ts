import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentCheckBoxPageRoutingModule } from './component-check-box-routing.module';

import { ComponentCheckBoxPage } from './component-check-box.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentCheckBoxPageRoutingModule
  ],
  declarations: [ComponentCheckBoxPage]
})
export class ComponentCheckBoxPageModule {}
