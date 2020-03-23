import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'home'
    }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: {
      animation: 'products'
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
    path: 'info',
    component: InfoComponent,
    data: {
      animation: 'info'
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
    path: 'analysis',
    component: AnalysisComponent
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
