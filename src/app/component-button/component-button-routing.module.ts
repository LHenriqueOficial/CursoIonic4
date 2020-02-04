import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentButtonPage } from './component-button.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentButtonPageRoutingModule {}
