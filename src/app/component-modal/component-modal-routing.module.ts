import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentModalPage } from './component-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentModalPageRoutingModule {}
