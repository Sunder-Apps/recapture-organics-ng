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
    redirectTo: 'shop/2W2XFIOEHQGGPQOB325ZASO5',
    data: {
      animation: 'promo'
    }
  },
  {
    path: 'analysis/promo/thc-free-broad-spectrum-2019',
    pathMatch: 'full',
    redirectTo: 'shop/HU7UJ2AH5AHCSP4TBMYXFIMT',
    data: {
      animation: 'promo'
    }
  },
  {
    path: 'analysis/promo/pain-salve-1-2019',
    pathMatch: 'full',
    redirectTo: 'shop/NBBQH7WW5B6FDDAV3CLGFOWZ', // full spectrum?
    data: {
      animation: 'promo'
    }
  },
  {
    path: 'analysis/promo/pain-salve-2-2019',
    pathMatch: 'full',
    redirectTo: 'shop/CXMRVQ4RJKODYKCR3X6KE5DF',
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
    path: 'shop/:id',
    component: ShopComponent,
    data: {
      animation : 'shop'
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
