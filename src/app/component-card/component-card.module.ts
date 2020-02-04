import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentCardPageRoutingModule } from './component-card-routing.module';

import { ComponentCardPage } from './component-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentCardPageRoutingModule
  ],
  declarations: [ComponentCardPage]
})
export class ComponentCardPageModule {}
