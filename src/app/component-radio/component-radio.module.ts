import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentRadioPageRoutingModule } from './component-radio-routing.module';

import { ComponentRadioPage } from './component-radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentRadioPageRoutingModule
  ],
  declarations: [ComponentRadioPage]
})
export class ComponentRadioPageModule {}
