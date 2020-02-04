import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutgridPageRoutingModule } from './layoutgrid-routing.module';

import { LayoutgridPage } from './layoutgrid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutgridPageRoutingModule
  ],
  declarations: [LayoutgridPage]
})
export class LayoutgridPageModule {}
