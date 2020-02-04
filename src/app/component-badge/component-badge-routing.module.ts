import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentBadgePage } from './component-badge.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentBadgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentBadgePageRoutingModule {}
