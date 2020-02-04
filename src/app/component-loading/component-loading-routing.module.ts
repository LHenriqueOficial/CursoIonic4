import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentLoadingPage } from './component-loading.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentLoadingPageRoutingModule {}
