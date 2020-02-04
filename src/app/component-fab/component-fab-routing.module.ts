import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentFabPage } from './component-fab.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentFabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentFabPageRoutingModule {}
