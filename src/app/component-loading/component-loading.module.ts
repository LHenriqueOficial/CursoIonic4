import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentLoadingPageRoutingModule } from './component-loading-routing.module';

import { ComponentLoadingPage } from './component-loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentLoadingPageRoutingModule
  ],
  declarations: [ComponentLoadingPage]
})
export class ComponentLoadingPageModule {}
