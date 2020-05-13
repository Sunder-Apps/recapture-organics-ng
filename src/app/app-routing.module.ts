import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnalysisComponent } from '../../../sativa-indi-ng/src/app/analysis/analysis.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
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
