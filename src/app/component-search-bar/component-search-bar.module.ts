import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentSearchBarPageRoutingModule } from './component-search-bar-routing.module';

import { ComponentSearchBarPage } from './component-search-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentSearchBarPageRoutingModule
  ],
  declarations: [ComponentSearchBarPage]
})
export class ComponentSearchBarPageModule {}
