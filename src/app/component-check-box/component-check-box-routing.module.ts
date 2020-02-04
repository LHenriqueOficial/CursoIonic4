import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentCheckBoxPage } from './component-check-box.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentCheckBoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentCheckBoxPageRoutingModule {}
