import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutgridPage } from './layoutgrid.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutgridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutgridPageRoutingModule {}
