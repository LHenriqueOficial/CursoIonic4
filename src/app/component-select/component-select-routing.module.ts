import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentSelectPage } from './component-select.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentSelectPageRoutingModule {}
