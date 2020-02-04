import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentInputPageRoutingModule } from './component-input-routing.module';

import { ComponentInputPage } from './component-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentInputPageRoutingModule
  ],
  declarations: [ComponentInputPage]
})
export class ComponentInputPageModule {}
