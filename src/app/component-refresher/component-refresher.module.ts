import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentRefresherPageRoutingModule } from './component-refresher-routing.module';

import { ComponentRefresherPage } from './component-refresher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentRefresherPageRoutingModule
  ],
  declarations: [ComponentRefresherPage]
})
export class ComponentRefresherPageModule {}
