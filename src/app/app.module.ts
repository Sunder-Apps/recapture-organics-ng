import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { GoogleChartsModule } from 'angular-google-charts'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { SettingsComponent } from './settings/settings.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { AlertsComponent } from './alerts/alerts.component'
import { DefaultDialogComponent } from './alerts/default-dialog/default-dialog.component'
import { FooterComponent } from './footer/footer.component'
import { CryptoService } from './crypto/crypto.service'
import { SettingsService } from './settings/settings.service'
import { StorageService } from './storage/storage.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { MatDialogModule, MatTooltipModule, MatButtonModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material'
import { AnalysisComponent } from './analysis/analysis.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component'
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { ShopComponent } from './shop/shop.component'
import { ShopService } from './services/shop.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    NotFoundComponent,
    AlertsComponent,
    DefaultDialogComponent,
    FooterComponent,
    AnalysisComponent,
    ProductsComponent,
    AboutComponent,
    SubscribeComponent,
    NavbarComponent,
    InfoComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [
    CryptoService,
    SettingsService,
    StorageService,
    ShopService
  ],
  entryComponents: [
    DefaultDialogComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
