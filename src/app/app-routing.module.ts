import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  {
    path: 'analysis/promo/live-oil-full-spectrum-2019',
    pathMatch: 'full',
    redirectTo: 'shop/:item',
    data: {
      animation: 'promo'
    }
  },
  {
    path: 'analysis/promo/thc-free-broad-spectrum-2019',
    pathMatch: 'full',
    redirectTo: 'shop/:item',
    data: {
      animation: 'promo'
    }
  },
  {
    path: 'analysis/promo/pain-salve-1-2019',
    pathMatch: 'full',
    redirectTo: 'shop/:item',
    data: {
      animation: 'promo'
    }
  },
  {
    path: 'analysis/promo/pain-salve-2-2019',
    pathMatch: 'full',
    redirectTo: 'shop/:item',
    data: {
      animation: 'promo'
    }
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'home'
    }
  },
  {
    path: 'shop',
    component: ShopComponent,
    data: {
      animation: 'shop'
    }
  },
  {
    path: 'learn',
    component: LearnComponent,
    data: {
      animation: 'learn'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      animation: 'about'
    }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      animation: 'settings'
    }
  },
  {
    path: "**",
    component: NotFoundComponent,
    data: {
      animation: 'not-found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
