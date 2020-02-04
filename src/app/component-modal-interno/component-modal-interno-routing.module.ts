import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentModalInternoPage } from './component-modal-interno.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentModalInternoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentModalInternoPageRoutingModule {}
