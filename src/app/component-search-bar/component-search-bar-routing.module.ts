import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentSearchBarPage } from './component-search-bar.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentSearchBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentSearchBarPageRoutingModule {}
