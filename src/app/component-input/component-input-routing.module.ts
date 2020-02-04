import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentInputPage } from './component-input.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentInputPageRoutingModule {}
