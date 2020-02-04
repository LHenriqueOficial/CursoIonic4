import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentRadioPage } from './component-radio.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentRadioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRadioPageRoutingModule {}
