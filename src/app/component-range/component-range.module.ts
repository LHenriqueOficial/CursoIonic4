import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentRangePageRoutingModule } from './component-range-routing.module';

import { ComponentRangePage } from './component-range.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentRangePageRoutingModule
  ],
  declarations: [ComponentRangePage]
})
export class ComponentRangePageModule {}
