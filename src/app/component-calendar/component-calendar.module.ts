import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentCalendarPageRoutingModule } from './component-calendar-routing.module';

import { ComponentCalendarPage } from './component-calendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentCalendarPageRoutingModule
  ],
  declarations: [ComponentCalendarPage]
})
export class ComponentCalendarPageModule {}
