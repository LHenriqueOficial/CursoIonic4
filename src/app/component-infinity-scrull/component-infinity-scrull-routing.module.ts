import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentInfinityScrullPage } from './component-infinity-scrull.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentInfinityScrullPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentInfinityScrullPageRoutingModule {}
