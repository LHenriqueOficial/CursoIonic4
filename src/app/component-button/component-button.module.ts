import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentButtonPageRoutingModule } from './component-button-routing.module';

import { ComponentButtonPage } from './component-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentButtonPageRoutingModule
  ],
  declarations: [ComponentButtonPage]
})
export class ComponentButtonPageModule {}
