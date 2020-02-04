import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentPopoverPage } from './component-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentPopoverPageRoutingModule {}
