import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentRefresherPage } from './component-refresher.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentRefresherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRefresherPageRoutingModule {}
