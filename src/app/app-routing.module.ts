import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'instalacao',
    loadChildren: () => import('./instalacao/instalacao.module').then( m => m.InstalacaoPageModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then( m => m.LayoutPageModule)
  },
  {
    path: 'layout-header-footer',
    loadChildren: () => import('./layout-header-footer/layout-header-footer.module').then( m => m.LayoutHeaderFooterPageModule)
  },
  {
    path: 'layout-tabs',
    loadChildren: () => import('./layout-tabs/layout-tabs.module').then( m => m.LayoutTabsPageModule)
  },
  {
    path: 'layout-menu',
    loadChildren: () => import('./layout-menu/layout-menu.module').then( m => m.LayoutMenuPageModule)
  },
  {
    path: 'layout-split',
    loadChildren: () => import('./layout-split/layout-split.module').then( m => m.LayoutSplitPageModule)
  },
  {
    path: 'layoutgrid',
    loadChildren: () => import('./layoutgrid/layoutgrid.module').then( m => m.LayoutgridPageModule)
  },
  

  {
    path: 'layout-css-utilities',
    loadChildren: () => import('./layout-css-utilities/layout-css-utilities.module').then( m => m.LayoutCssUtilitiesPageModule)
  },
  {
    path: 'component',
    loadChildren: () => import('./component/component.module').then( m => m.ComponentPageModule)
  },
  {
    path: 'component-action-sheet',
    loadChildren: () => import('./component-action-sheet/component-action-sheet.module').then( m => m.ComponentActionSheetPageModule)
  },
  {
    path: 'component-alert',
    loadChildren: () => import('./component-alert/component-alert.module').then( m => m.ComponentAlertPageModule)
  },
  {
    path: 'component-badge',
    loadChildren: () => import('./component-badge/component-badge.module').then( m => m.ComponentBadgePageModule)
  },
  {
    path: 'component-button',
    loadChildren: () => import('./component-button/component-button.module').then( m => m.ComponentButtonPageModule)
  },
  {
    path: 'component-card',
    loadChildren: () => import('./component-card/component-card.module').then( m => m.ComponentCardPageModule)
  },
  {
    path: 'component-check-box',
    loadChildren: () => import('./component-check-box/component-check-box.module').then( m => m.ComponentCheckBoxPageModule)
  },
  {
    path: 'component-radio',
    loadChildren: () => import('./component-radio/component-radio.module').then( m => m.ComponentRadioPageModule)
  },
  {
    path: 'component-calendar',
    loadChildren: () => import('./component-calendar/component-calendar.module').then( m => m.ComponentCalendarPageModule)
  },
  {
    path: 'component-fab',
    loadChildren: () => import('./component-fab/component-fab.module').then( m => m.ComponentFabPageModule)
  },
  {
    path: 'component-input',
    loadChildren: () => import('./component-input/component-input.module').then( m => m.ComponentInputPageModule)
  },
  {
    path: 'component-list',
    loadChildren: () => import('./component-list/component-list.module').then( m => m.ComponentListPageModule)
  },
  {
    path: 'component-loading',
    loadChildren: () => import('./component-loading/component-loading.module').then( m => m.ComponentLoadingPageModule)
  },
  {
    path: 'component-modal',
    loadChildren: () => import('./component-modal/component-modal.module').then( m => m.ComponentModalPageModule)
  },
  {
    path: 'component-modal-interno',
    loadChildren: () => import('./component-modal-interno/component-modal-interno.module').then( m => m.ComponentModalInternoPageModule)
  },
  {
    path: 'component-range',
    loadChildren: () => import('./component-range/component-range.module').then( m => m.ComponentRangePageModule)
  },
  {
    path: 'component-select',
    loadChildren: () => import('./component-select/component-select.module').then( m => m.ComponentSelectPageModule)
  },
  {
    path: 'component-infinity-scrull',
    loadChildren: () => import('./component-infinity-scrull/component-infinity-scrull.module').then( m => m.ComponentInfinityScrullPageModule)
  },
  {
    path: 'component-popover',
    loadChildren: () => import('./component-popover/component-popover.module').then( m => m.ComponentPopoverPageModule)
  },
  {
    path: 'component-refresher',
    loadChildren: () => import('./component-refresher/component-refresher.module').then( m => m.ComponentRefresherPageModule)
  },
  {
    path: 'component-search-bar',
    loadChildren: () => import('./component-search-bar/component-search-bar.module').then( m => m.ComponentSearchBarPageModule)
  },
  {
    path: 'component-toggle',
    loadChildren: () => import('./component-toggle/component-toggle.module').then( m => m.ComponentTogglePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
