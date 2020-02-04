import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentBadgePageRoutingModule } from './component-badge-routing.module';

import { ComponentBadgePage } from './component-badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentBadgePageRoutingModule
  ],
  declarations: [ComponentBadgePage]
})
export class ComponentBadgePageModule {}
