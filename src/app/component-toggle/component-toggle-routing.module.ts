import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentTogglePage } from './component-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentTogglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentTogglePageRoutingModule {}
