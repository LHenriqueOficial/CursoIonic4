import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentInfinityScrullPageRoutingModule } from './component-infinity-scrull-routing.module';

import { ComponentInfinityScrullPage } from './component-infinity-scrull.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentInfinityScrullPageRoutingModule
  ],
  declarations: [ComponentInfinityScrullPage]
})
export class ComponentInfinityScrullPageModule {}
