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
import { BackgroundComponent } from './background/background.component'
import { FooterComponent } from './footer/footer.component'
import { CryptoService } from './crypto/crypto.service'
import { SettingsService } from './settings/settings.service'
import { StorageService } from './storage/storage.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { MatDialogModule, MatTooltipModule, MatButtonModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material'
import { BarsComponent } from './bars/bars.component'
import { LeftComponent } from './bars/left/left.component'
import { AnalysisComponent } from './analysis/analysis.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    NotFoundComponent,
    AlertsComponent,
    DefaultDialogComponent,
    BackgroundComponent,
    FooterComponent,
    BarsComponent,
    LeftComponent,
    AnalysisComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    SubscribeComponent
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
    GoogleChartsModule.forRoot()
  ],
  providers: [
    CryptoService,
    SettingsService,
    StorageService
  ],
  entryComponents: [
    DefaultDialogComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
